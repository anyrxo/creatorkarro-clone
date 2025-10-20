#!/usr/bin/env python3
"""
Advanced Market Data API using yfinance
Provides real-time forex, crypto, and stock data
"""

import yfinance as yf
import json
import sys
from datetime import datetime, timedelta
import pandas as pd
import numpy as np
from flask import Flask, jsonify, request, make_response
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
import threading
import time
import requests
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

app = Flask(__name__)

# Configure CORS with specific allowed origins for production security
allowed_origins = os.getenv(
    'CORS_ORIGINS',
    'http://localhost:3000,https://iimagined.ai,https://www.iimagined.ai,https://*.vercel.app'
).split(',')

CORS(app, origins=allowed_origins, supports_credentials=False, max_age=3600)

# Configure rate limiting
limiter = Limiter(
    app=app,
    key_func=get_remote_address,
    default_limits=["200 per day", "50 per hour"],
    storage_uri="memory://"
)

# MarketAux News API configuration from environment
MARKETAUX_API_KEY = os.getenv("MARKETAUX_API_KEY")
MARKETAUX_BASE_URL = "https://api.marketaux.com/v1/news"

if not MARKETAUX_API_KEY:
    print("WARNING: MARKETAUX_API_KEY environment variable is not set. News features will be disabled.", file=sys.stderr)

# Global cache for real-time data
price_cache = {}
cache_timestamps = {}
CACHE_DURATION = 60  # 1 minute cache

# Currency pair mapping for yfinance
CURRENCY_MAPPING = {
    'EURUSD': 'EURUSD=X',
    'GBPUSD': 'GBPUSD=X', 
    'USDJPY': 'USDJPY=X',
    'USDCHF': 'USDCHF=X',
    'AUDUSD': 'AUDUSD=X',
    'USDCAD': 'USDCAD=X',
    'NZDUSD': 'NZDUSD=X',
    'EURGBP': 'EURGBP=X',
    'EURJPY': 'EURJPY=X',
    'GBPJPY': 'GBPJPY=X',
    # Crypto
    'BTCUSD': 'BTC-USD',
    'ETHUSD': 'ETH-USD',
    'XRPUSD': 'XRP-USD',
    # Gold/Silver
    'XAUUSD': 'GC=F',
    'XAGUSD': 'SI=F'
}

def validate_symbol(symbol):
    """Validate symbol is in our allowed list"""
    if not symbol:
        return False
    return symbol.upper() in CURRENCY_MAPPING

def get_symbol_for_yfinance(symbol):
    """Convert our symbol format to yfinance format"""
    symbol_upper = symbol.upper()
    if not validate_symbol(symbol_upper):
        return None
    return CURRENCY_MAPPING.get(symbol_upper, f"{symbol}=X")

def calculate_technical_indicators(data):
    """Calculate advanced technical indicators"""
    if len(data) < 20:
        return {}
    
    close = data['Close']
    high = data['High'] 
    low = data['Low']
    
    # Moving averages
    sma_20 = close.rolling(window=20).mean().iloc[-1]
    sma_50 = close.rolling(window=50).mean().iloc[-1] if len(data) >= 50 else None
    ema_12 = close.ewm(span=12).mean().iloc[-1]
    ema_26 = close.ewm(span=26).mean().iloc[-1]
    
    # Bollinger Bands
    bb_period = 20
    bb_std = 2
    bb_middle = close.rolling(window=bb_period).mean().iloc[-1]
    bb_std_val = close.rolling(window=bb_period).std().iloc[-1]
    bb_upper = bb_middle + (bb_std_val * bb_std)
    bb_lower = bb_middle - (bb_std_val * bb_std)
    
    # RSI
    delta = close.diff()
    gain = (delta.where(delta > 0, 0)).rolling(window=14).mean()
    loss = (-delta.where(delta < 0, 0)).rolling(window=14).mean()
    rs = gain / loss
    rsi = 100 - (100 / (1 + rs)).iloc[-1]
    
    # MACD
    macd_line = ema_12 - ema_26
    macd_signal = macd_line if len(data) < 9 else close.ewm(span=9).mean().iloc[-1]
    macd_histogram = macd_line - macd_signal
    
    # Support/Resistance
    recent_high = high.tail(20).max()
    recent_low = low.tail(20).min()
    
    return {
        'sma_20': float(sma_20) if not pd.isna(sma_20) else None,
        'sma_50': float(sma_50) if sma_50 and not pd.isna(sma_50) else None,
        'ema_12': float(ema_12) if not pd.isna(ema_12) else None,
        'ema_26': float(ema_26) if not pd.isna(ema_26) else None,
        'bollinger': {
            'upper': float(bb_upper) if not pd.isna(bb_upper) else None,
            'middle': float(bb_middle) if not pd.isna(bb_middle) else None,
            'lower': float(bb_lower) if not pd.isna(bb_lower) else None
        },
        'rsi': float(rsi) if not pd.isna(rsi) else None,
        'macd': {
            'line': float(macd_line) if not pd.isna(macd_line) else None,
            'signal': float(macd_signal) if not pd.isna(macd_signal) else None,
            'histogram': float(macd_histogram) if not pd.isna(macd_histogram) else None
        },
        'support': float(recent_low) if not pd.isna(recent_low) else None,
        'resistance': float(recent_high) if not pd.isna(recent_high) else None
    }

@app.route('/api/price/<symbol>')
@limiter.limit("30 per minute")
def get_price(symbol):
    """Get real-time price for a symbol"""
    try:
        # Validate symbol first
        if not validate_symbol(symbol):
            return jsonify({
                'status': 'error',
                'message': f'Invalid symbol: {symbol}. Please use a valid currency pair or instrument.'
            }), 400

        # Check cache first
        cache_key = symbol.upper()
        current_time = time.time()

        if (cache_key in price_cache and
            cache_key in cache_timestamps and
            current_time - cache_timestamps[cache_key] < CACHE_DURATION):
            return jsonify(price_cache[cache_key])

        # Get yfinance symbol
        yf_symbol = get_symbol_for_yfinance(symbol)

        if not yf_symbol:
            return jsonify({
                'status': 'error',
                'message': f'Could not map symbol: {symbol}'
            }), 400
        
        # Fetch data
        ticker = yf.Ticker(yf_symbol)
        hist = ticker.history(period="5d", interval="1m")
        
        if hist.empty:
            return jsonify({
                'status': 'error',
                'message': f'No data found for symbol {symbol}'
            }), 404
        
        # Get latest price
        latest = hist.iloc[-1]
        prev_close = hist.iloc[-2]['Close'] if len(hist) > 1 else latest['Close']
        
        # Calculate change
        price_change = latest['Close'] - prev_close
        change_pct = (price_change / prev_close) * 100 if prev_close != 0 else 0
        
        # Get additional info
        info = ticker.info
        
        result = {
            'status': 'success',
            'symbol': symbol.upper(),
            'price': round(float(latest['Close']), 5),
            'change': round(float(price_change), 5),
            'change_pct': round(float(change_pct), 2),
            'volume': int(latest['Volume']) if not pd.isna(latest['Volume']) else 0,
            'timestamp': latest.name.isoformat(),
            'market_state': 'open',  # yfinance doesn't provide this reliably
            'bid': info.get('bid'),
            'ask': info.get('ask'),
            'high_24h': float(hist['High'].max()),
            'low_24h': float(hist['Low'].min())
        }
        
        # Cache result
        price_cache[cache_key] = result
        cache_timestamps[cache_key] = current_time
        
        return jsonify(result)
        
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

@app.route('/api/analysis/<symbol>')
@limiter.limit("20 per minute")
def get_analysis(symbol):
    """Get technical analysis for a symbol"""
    try:
        # Validate symbol first
        if not validate_symbol(symbol):
            return jsonify({
                'status': 'error',
                'message': f'Invalid symbol: {symbol}. Please use a valid currency pair or instrument.'
            }), 400

        yf_symbol = get_symbol_for_yfinance(symbol)
        if not yf_symbol:
            return jsonify({
                'status': 'error',
                'message': f'Could not map symbol: {symbol}'
            }), 400

        ticker = yf.Ticker(yf_symbol)
        
        # Get historical data for analysis
        hist = ticker.history(period="3mo", interval="1d")
        
        if hist.empty:
            return jsonify({
                'status': 'error',
                'message': f'No data found for symbol {symbol}'
            }), 404
        
        # Calculate technical indicators
        indicators = calculate_technical_indicators(hist)
        
        # Generate signals
        current_price = float(hist['Close'].iloc[-1])
        signals = []
        
        # RSI signals
        if indicators.get('rsi'):
            if indicators['rsi'] > 70:
                signals.append({
                    'type': 'sell',
                    'strength': 'strong' if indicators['rsi'] > 80 else 'moderate',
                    'reason': f'RSI overbought at {indicators["rsi"]:.1f}'
                })
            elif indicators['rsi'] < 30:
                signals.append({
                    'type': 'buy',
                    'strength': 'strong' if indicators['rsi'] < 20 else 'moderate', 
                    'reason': f'RSI oversold at {indicators["rsi"]:.1f}'
                })
        
        # Bollinger Band signals
        bb = indicators.get('bollinger', {})
        if bb.get('upper') and bb.get('lower'):
            if current_price > bb['upper']:
                signals.append({
                    'type': 'sell',
                    'strength': 'moderate',
                    'reason': 'Price above Bollinger upper band'
                })
            elif current_price < bb['lower']:
                signals.append({
                    'type': 'buy',
                    'strength': 'moderate',
                    'reason': 'Price below Bollinger lower band'
                })
        
        # Moving average signals
        if indicators.get('sma_20'):
            if current_price > indicators['sma_20']:
                signals.append({
                    'type': 'buy',
                    'strength': 'weak',
                    'reason': 'Price above SMA 20'
                })
            else:
                signals.append({
                    'type': 'sell', 
                    'strength': 'weak',
                    'reason': 'Price below SMA 20'
                })
        
        result = {
            'status': 'success',
            'symbol': symbol.upper(),
            'indicators': indicators,
            'signals': signals,
            'timestamp': datetime.now().isoformat()
        }
        
        return jsonify(result)
        
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

@app.route('/api/news')
@limiter.limit("10 per minute")
def get_news():
    """Get market news from MarketAux API"""
    try:
        # Get query parameters
        limit = request.args.get('limit', 10)
        symbols = request.args.get('symbols', '')
        
        # Build MarketAux API request
        params = {
            'api_token': MARKETAUX_API_KEY,
            'limit': limit,
            'language': 'en'
        }
        
        if symbols:
            params['symbols'] = symbols
        
        # Make request to MarketAux
        response = requests.get(MARKETAUX_BASE_URL, params=params)
        response.raise_for_status()
        
        data = response.json()
        
        # Transform to our format
        news_items = []
        for article in data.get('data', []):
            news_items.append({
                'id': article.get('uuid'),
                'title': article.get('title'),
                'description': article.get('description'),
                'url': article.get('url'),
                'published_at': article.get('published_at'),
                'source': article.get('source'),
                'symbols': article.get('entities', {}).get('symbol', []),
                'sentiment': article.get('sentiment', 'neutral'),
                'image_url': article.get('image_url')
            })
        
        return jsonify({
            'status': 'success',
            'articles': news_items,
            'total': len(news_items),
            'timestamp': datetime.now().isoformat()
        })
        
    except Exception as e:
        return jsonify({
            'status': 'error', 
            'message': str(e)
        }), 500

@app.route('/api/chart/<symbol>')
def get_chart_data(symbol):
    """Get chart data for a symbol"""
    try:
        period = request.args.get('period', '1d')
        interval = request.args.get('interval', '5m')
        
        yf_symbol = get_symbol_for_yfinance(symbol)
        ticker = yf.Ticker(yf_symbol)
        
        hist = ticker.history(period=period, interval=interval)
        
        if hist.empty:
            return jsonify({
                'status': 'error',
                'message': f'No data found for symbol {symbol}'
            }), 404
        
        # Convert to chart format
        chart_data = []
        for timestamp, row in hist.iterrows():
            chart_data.append({
                'time': int(timestamp.timestamp()),
                'open': float(row['Open']),
                'high': float(row['High']),
                'low': float(row['Low']),
                'close': float(row['Close']),
                'volume': int(row['Volume']) if not pd.isna(row['Volume']) else 0
            })
        
        return jsonify({
            'status': 'success',
            'symbol': symbol.upper(),
            'data': chart_data,
            'timestamp': datetime.now().isoformat()
        })
        
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

@app.route('/health')
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat(),
        'cache_size': len(price_cache)
    })

if __name__ == '__main__':
    print("🚀 Starting Advanced Market Data API Server...")
    print("📊 Features: yfinance integration, MarketAux news, technical analysis")
    print("🔗 CORS enabled for frontend integration")
    
    # Install required packages if not available
    try:
        import yfinance
        import flask
        import flask_cors
        print("✅ All dependencies available")
    except ImportError as e:
        print(f"❌ Missing dependency: {e}")
        print("Run: pip install yfinance flask flask-cors pandas numpy requests")
        sys.exit(1)
    
    # Production-safe configuration
    debug_mode = os.getenv('FLASK_ENV') == 'development'
    port = int(os.getenv('PORT', 5001))
    app.run(host='0.0.0.0', port=port, debug=debug_mode, threaded=True)