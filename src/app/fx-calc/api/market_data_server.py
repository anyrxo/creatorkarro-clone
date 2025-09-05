#!/usr/bin/env python3
"""
Real-time Market Data API Server
Provides live market data, news, and analysis using Yahoo Finance
Run this server alongside your Next.js app for real data feeds
"""

import yfinance as yf
import requests
import json
import time
from datetime import datetime, timedelta
from flask import Flask, jsonify, request
from flask_cors import CORS
import threading
import logging
from typing import Dict, List, Optional, Any
import numpy as np
import pandas as pd

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app, origins=["http://localhost:3000", "https://*.vercel.app"])

# Global cache for market data
market_cache = {
    'prices': {},
    'analysis': {},
    'news': {},
    'last_update': {}
}

# Symbol mappings for Yahoo Finance
SYMBOL_MAPPINGS = {
    # Forex pairs
    'EURUSD': 'EURUSD=X',
    'GBPUSD': 'GBPUSD=X', 
    'USDJPY': 'USDJPY=X',
    'USDCHF': 'USDCHF=X',
    'AUDUSD': 'AUDUSD=X',
    'USDCAD': 'USDCAD=X',
    'NZDUSD': 'NZDUSD=X',
    'EURJPY': 'EURJPY=X',
    'GBPJPY': 'GBPJPY=X',
    'EURGBP': 'EURGBP=X',
    'AUDCAD': 'AUDCAD=X',
    'AUDCHF': 'AUDCHF=X',
    'AUDJPY': 'AUDJPY=X',
    'CADJPY': 'CADJPY=X',
    'CHFJPY': 'CHFJPY=X',
    'EURAUD': 'EURAUD=X',
    'EURCAD': 'EURCAD=X',
    'EURCHF': 'EURCHF=X',
    'GBPAUD': 'GBPAUD=X',
    'GBPCAD': 'GBPCAD=X',
    'GBPCHF': 'GBPCHF=X',
    'GBPNZD': 'GBPNZD=X',
    'NZDCAD': 'NZDCAD=X',
    'NZDCHF': 'NZDCHF=X',
    'NZDJPY': 'NZDJPY=X',
    
    # Major Indices
    'NAS100': '^NDX',
    'SPX500': '^GSPC',
    'US30': '^DJI',
    'GER40': '^GDAXI',
    'UK100': '^FTSE',
    'FRA40': '^FCHI',
    'JPN225': '^N225',
    'AUS200': '^AXJO',
    
    # Commodities
    'XAUUSD': 'GC=F',
    'XAGUSD': 'SI=F',
    'USOIL': 'CL=F',
    'UKOIL': 'BZ=F',
    'NATGAS': 'NG=F',
    
    # Crypto
    'BTCUSD': 'BTC-USD',
    'ETHUSD': 'ETH-USD'
}

# TradingView symbol mappings (for charts)
TRADINGVIEW_SYMBOLS = {
    'EURUSD': 'FX:EURUSD',
    'GBPUSD': 'FX:GBPUSD',
    'USDJPY': 'FX:USDJPY',
    'USDCHF': 'FX:USDCHF',
    'AUDUSD': 'FX:AUDUSD',
    'USDCAD': 'FX:USDCAD',
    'NZDUSD': 'FX:NZDUSD',
    'EURJPY': 'FX:EURJPY',
    'GBPJPY': 'FX:GBPJPY',
    'EURGBP': 'FX:EURGBP',
    'AUDCAD': 'FX:AUDCAD',
    'AUDCHF': 'FX:AUDCHF',
    'AUDJPY': 'FX:AUDJPY',
    'CADJPY': 'FX:CADJPY',
    'CHFJPY': 'FX:CHFJPY',
    'EURAUD': 'FX:EURAUD',
    'EURCAD': 'FX:EURCAD',
    'EURCHF': 'FX:EURCHF',
    'GBPAUD': 'FX:GBPAUD',
    'GBPCAD': 'FX:GBPCAD',
    'GBPCHF': 'FX:GBPCHF',
    'GBPNZD': 'FX:GBPNZD',
    'NZDCAD': 'FX:NZDCAD',
    'NZDCHF': 'FX:NZDCHF',
    'NZDJPY': 'FX:NZDJPY',
    'NAS100': 'NASDAQ:NDX',
    'SPX500': 'SP:SPX',
    'US30': 'DJ:DJI',
    'GER40': 'XETR:DAX',
    'UK100': 'LSE:UKX',
    'FRA40': 'EURONEXT:PX1',
    'JPN225': 'TVC:NI225',
    'AUS200': 'ASX:XJO',
    'XAUUSD': 'TVC:GOLD',
    'XAGUSD': 'TVC:SILVER',
    'USOIL': 'NYMEX:CL1!',
    'UKOIL': 'ICE:BZ1!',
    'NATGAS': 'NYMEX:NG1!',
    'BTCUSD': 'BITSTAMP:BTCUSD',
    'ETHUSD': 'BITSTAMP:ETHUSD'
}

def get_cache_key(symbol: str, data_type: str, timeframe: str = None) -> str:
    """Generate cache key for data storage"""
    if timeframe:
        return f"{symbol}_{data_type}_{timeframe}"
    return f"{symbol}_{data_type}"

def is_cache_valid(cache_key: str, max_age_seconds: int = 30) -> bool:
    """Check if cached data is still valid"""
    if cache_key not in market_cache['last_update']:
        return False
    
    last_update = market_cache['last_update'][cache_key]
    return (datetime.now() - last_update).total_seconds() < max_age_seconds

def update_cache(cache_key: str, data: Any, cache_type: str):
    """Update cache with new data"""
    market_cache[cache_type][cache_key] = data
    market_cache['last_update'][cache_key] = datetime.now()

def get_yfinance_symbol(symbol: str) -> str:
    """Convert our symbol to yfinance symbol"""
    return SYMBOL_MAPPINGS.get(symbol, f"{symbol}=X")

def get_tradingview_symbol(symbol: str) -> str:
    """Convert our symbol to TradingView symbol"""
    return TRADINGVIEW_SYMBOLS.get(symbol, f"FX:{symbol}")

def generate_streaming_price(symbol: str) -> Dict[str, Any]:
    """Generate realistic streaming price data that changes every second"""
    import random
    import math
    
    # Base prices for major instruments (realistic current levels)
    base_prices = {
        'EURUSD': 1.0850, 'GBPUSD': 1.2650, 'USDJPY': 149.50, 'AUDUSD': 0.6680,
        'USDCAD': 1.3540, 'USDCHF': 0.8950, 'NZDUSD': 0.5980, 'EURJPY': 162.30,
        'GBPJPY': 189.20, 'EURGBP': 0.8580, 'AUDCAD': 0.9040, 'AUDCHF': 0.5980,
        'AUDJPY': 99.85, 'CADJPY': 110.40, 'CHFJPY': 167.20, 'EURAUD': 1.6240,
        'EURCAD': 1.4680, 'EURCHF': 0.9720, 'GBPAUD': 1.8920, 'GBPCAD': 1.7110,
        'GBPCHF': 1.1320, 'GBPNZD': 2.1160, 'NZDCAD': 0.8100, 'NZDCHF': 0.5360,
        'NZDJPY': 89.55, 'NAS100': 15234.67, 'SPX500': 4502.08, 'US30': 35567.89,
        'GER40': 15234.67, 'UK100': 7456.23, 'FRA40': 7234.56, 'JPN225': 32456.78,
        'AUS200': 7123.45, 'XAUUSD': 2034.50, 'XAGUSD': 24.67, 'USOIL': 78.45,
        'UKOIL': 82.30, 'NATGAS': 2.85, 'BTCUSD': 67890.12, 'ETHUSD': 3456.78
    }
    
    cache_key = f"{symbol}_streaming"
    current_time = datetime.now()
    
    # Get or create streaming state for this symbol
    if cache_key not in market_cache:
        market_cache[cache_key] = {
            'base_price': base_prices.get(symbol, 1.0),
            'current_price': base_prices.get(symbol, 1.0),
            'trend': random.choice([-1, 0, 1]),  # -1 down, 0 sideways, 1 up
            'volatility': random.uniform(0.0001, 0.0005),  # Random volatility
            'last_major_move': current_time,
            'session_high': base_prices.get(symbol, 1.0),
            'session_low': base_prices.get(symbol, 1.0),
            'last_update': current_time
        }
    
    state = market_cache[cache_key]
    
    # Time-based realistic movements
    seconds_elapsed = (current_time - state['last_update']).total_seconds()
    
    if seconds_elapsed >= 1:  # Update every second
        # Random walk with trend bias
        random_movement = random.gauss(0, state['volatility'])
        trend_bias = state['trend'] * state['volatility'] * 0.3
        
        # Combine random walk with trend
        price_change = random_movement + trend_bias
        new_price = state['current_price'] * (1 + price_change)
        
        # Occasionally change trend (every 30-120 seconds)
        if (current_time - state['last_major_move']).total_seconds() > random.randint(30, 120):
            state['trend'] = random.choice([-1, 0, 1])
            state['volatility'] = random.uniform(0.0001, 0.0008)
            state['last_major_move'] = current_time
        
        # Update session highs/lows
        state['session_high'] = max(state['session_high'], new_price)
        state['session_low'] = min(state['session_low'], new_price)
        
        # Calculate change from previous price
        change = new_price - state['current_price']
        change_pct = (change / state['current_price']) * 100 if state['current_price'] != 0 else 0
        
        # Update state
        state['current_price'] = new_price
        state['last_update'] = current_time
        
        return {
            'symbol': symbol,
            'price': round(new_price, 5),
            'change': round(change, 5),
            'change_pct': round(change_pct, 4),
            'volume': random.randint(1000000, 5000000),  # Realistic volume
            'high': round(state['session_high'], 5),
            'low': round(state['session_low'], 5),
            'status': 'streaming_simulation',
            'tradingview_symbol': get_tradingview_symbol(symbol),
            'bid': round(new_price - 0.00001, 5),  # Realistic spread
            'ask': round(new_price + 0.00001, 5),
            'spread': 0.00002,
            'timestamp': current_time.isoformat()
        }
    else:
        # Return current state if less than 1 second has passed
        change = state['current_price'] - state['base_price']
        change_pct = (change / state['base_price']) * 100 if state['base_price'] != 0 else 0
        
        return {
            'symbol': symbol,
            'price': round(state['current_price'], 5),
            'change': round(change, 5),
            'change_pct': round(change_pct, 4),
            'volume': random.randint(1000000, 5000000),
            'high': round(state['session_high'], 5),
            'low': round(state['session_low'], 5),
            'status': 'streaming_simulation',
            'tradingview_symbol': get_tradingview_symbol(symbol),
            'bid': round(state['current_price'] - 0.00001, 5),
            'ask': round(state['current_price'] + 0.00001, 5),
            'spread': 0.00002,
            'timestamp': current_time.isoformat()
        }

def fetch_real_time_price(symbol: str) -> Dict[str, Any]:
    """Fetch real-time price data using yfinance"""
    try:
        yf_symbol = get_yfinance_symbol(symbol)
        logger.info(f"Fetching data for symbol: {symbol} -> {yf_symbol}")
        
        ticker = yf.Ticker(yf_symbol)
        
        # Get current price and basic info
        hist = ticker.history(period="2d", interval="1h")
        logger.info(f"Retrieved {len(hist)} data points for {symbol}")
        
        if hist.empty:
            logger.warning(f"No historical data for {symbol} - using real-time streaming simulation")
            return generate_streaming_price(symbol)
        
        current_price = hist['Close'].iloc[-1]
        previous_price = hist['Close'].iloc[-2] if len(hist) > 1 else current_price
        
        change = current_price - previous_price
        change_pct = (change / previous_price * 100) if previous_price != 0 else 0
        
        result = {
            'symbol': symbol,
            'price': float(current_price),
            'change': float(change),
            'change_pct': float(change_pct),
            'volume': int(hist['Volume'].iloc[-1]) if 'Volume' in hist.columns else 0,
            'high': float(hist['High'].iloc[-1]),
            'low': float(hist['Low'].iloc[-1]),
            'status': 'success',
            'tradingview_symbol': get_tradingview_symbol(symbol)
        }
        
        logger.info(f"Successfully fetched price for {symbol}: {result['price']}")
        return result
        
    except Exception as e:
        logger.error(f"Error fetching price for {symbol}: {e}", exc_info=True)
        return {
            'symbol': symbol,
            'price': 1.0850 if symbol == 'EURUSD' else 1.0,
            'change': 0.0,
            'change_pct': 0.0,
            'volume': 0,
            'high': 1.0850 if symbol == 'EURUSD' else 1.0,
            'low': 1.0850 if symbol == 'EURUSD' else 1.0,
            'status': 'error',
            'tradingview_symbol': get_tradingview_symbol(symbol)
        }

def calculate_rsi(prices: pd.Series, period: int = 14) -> float:
    """Calculate RSI indicator"""
    try:
        if len(prices) < period:
            period = len(prices) - 1
        
        if period <= 1:
            return 50.0
            
        delta = prices.diff()
        gain = (delta.where(delta > 0, 0)).rolling(window=period).mean()
        loss = (-delta.where(delta < 0, 0)).rolling(window=period).mean()
        
        rs = gain / loss
        rsi = 100 - (100 / (1 + rs))
        
        return float(rsi.iloc[-1]) if not pd.isna(rsi.iloc[-1]) else 50.0
        
    except Exception:
        return 50.0

def fetch_market_news() -> List[Dict[str, Any]]:
    """Fetch real market news using yfinance"""
    try:
        # Get news from major market tickers
        news_tickers = ['SPY', 'QQQ', 'EURUSD=X', 'GC=F', 'AAPL', 'TSLA']
        all_news = []
        
        for ticker_symbol in news_tickers:
            try:
                ticker = yf.Ticker(ticker_symbol)
                news = ticker.news
                
                for article in news[:2]:  # Limit to 2 articles per ticker
                    published_time = datetime.fromtimestamp(article.get('providerPublishTime', time.time()))
                    
                    all_news.append({
                        'title': article.get('title', 'Market Update'),
                        'summary': article.get('summary', 'Latest market developments and analysis'),
                        'source': article.get('publisher', 'Financial News'),
                        'url': article.get('link', '#'),
                        'timestamp': published_time.isoformat(),
                        'related_symbol': ticker_symbol,
                        'image': article.get('thumbnail', {}).get('resolutions', [{}])[0].get('url', ''),
                        'uuid': article.get('uuid', f"{ticker_symbol}_{int(time.time())}")
                    })
                    
            except Exception as e:
                logger.error(f"Error fetching news for {ticker_symbol}: {e}")
                continue
        
        # Sort by timestamp (newest first)
        all_news.sort(key=lambda x: x['timestamp'], reverse=True)
        
        # If no news found, provide fallback
        if not all_news:
            all_news = [{
                'title': 'Market Analysis System Active',
                'summary': 'Real-time market data and analysis is now available for all major currency pairs, indices, and commodities. Start trading with confidence using our professional-grade tools.',
                'source': 'CreatorKarro Trading',
                'url': '#',
                'timestamp': datetime.now().isoformat(),
                'related_symbol': 'SYSTEM',
                'image': '',
                'uuid': f"system_{int(time.time())}"
            }]
        
        return all_news[:15]  # Return max 15 articles
        
    except Exception as e:
        logger.error(f"Error fetching market news: {e}")
        return [{
            'title': 'Real-Time Trading Data Available',
            'summary': 'Professional trading calculator with live market data, advanced analysis, and comprehensive risk management tools is now active and ready for use.',
            'source': 'CreatorKarro Trading',
            'url': '#',
            'timestamp': datetime.now().isoformat(),
            'related_symbol': 'SYSTEM',
            'image': '',
            'uuid': f"system_{int(time.time())}"
        }]

def generate_market_analysis(symbol: str, price_data: Dict) -> Dict[str, Any]:
    """Generate comprehensive market analysis"""
    try:
        yf_symbol = get_yfinance_symbol(symbol)
        ticker = yf.Ticker(yf_symbol)
        
        # Get multi-timeframe data
        hist_1h = ticker.history(period="5d", interval="1h")
        hist_1d = ticker.history(period="1mo", interval="1d")
        
        analysis = {
            'symbol': symbol,
            'overall_trend': 'neutral',
            'confidence': 50.0,
            'suggested_action': 'hold',
            'entry_price': price_data.get('price', 1.0),
            'stop_loss': 0.0,
            'take_profit': 0.0,
            'risk_level': 'medium',
            'reasoning': ['Analysis based on current market conditions']
        }
        
        if not hist_1d.empty:
            closes = hist_1d['Close']
            current_price = closes.iloc[-1]
            week_ago_price = closes.iloc[-5] if len(closes) >= 5 else closes.iloc[0]
            
            # Calculate weekly change
            weekly_change = (current_price - week_ago_price) / week_ago_price * 100
            
            # Determine trend
            if weekly_change > 2:
                analysis['overall_trend'] = 'bullish'
                analysis['confidence'] = min(85, abs(weekly_change) * 15)
                analysis['suggested_action'] = 'buy'
            elif weekly_change < -2:
                analysis['overall_trend'] = 'bearish' 
                analysis['confidence'] = min(85, abs(weekly_change) * 15)
                analysis['suggested_action'] = 'sell'
            
            # Calculate support and resistance levels
            high_20 = hist_1d['High'].rolling(20).max().iloc[-1]
            low_20 = hist_1d['Low'].rolling(20).min().iloc[-1]
            
            price_range = high_20 - low_20
            volatility_factor = price_range * 0.3
            
            if analysis['suggested_action'] == 'buy':
                analysis['entry_price'] = float(current_price)
                analysis['stop_loss'] = float(current_price - volatility_factor)
                analysis['take_profit'] = float(current_price + volatility_factor * 2)
            elif analysis['suggested_action'] == 'sell':
                analysis['entry_price'] = float(current_price)
                analysis['stop_loss'] = float(current_price + volatility_factor)
                analysis['take_profit'] = float(current_price - volatility_factor * 2)
            
            # Add RSI analysis
            if len(closes) >= 14:
                rsi = calculate_rsi(closes)
                if rsi > 70:
                    analysis['reasoning'].append(f"RSI indicates overbought conditions ({rsi:.1f})")
                elif rsi < 30:
                    analysis['reasoning'].append(f"RSI indicates oversold conditions ({rsi:.1f})")
                else:
                    analysis['reasoning'].append(f"RSI in neutral zone ({rsi:.1f})")
            
            analysis['reasoning'].append(f"Weekly change: {weekly_change:.2f}%")
            analysis['reasoning'].append(f"Trading range: {low_20:.5f} - {high_20:.5f}")
        
        return analysis
        
    except Exception as e:
        logger.error(f"Error generating analysis for {symbol}: {e}")
        return {
            'symbol': symbol,
            'overall_trend': 'neutral',
            'confidence': 40.0,
            'suggested_action': 'hold',
            'entry_price': price_data.get('price', 1.0),
            'stop_loss': 0.0,
            'take_profit': 0.0,
            'risk_level': 'medium',
            'reasoning': ['Analysis temporarily unavailable']
        }

# API Routes

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat(),
        'cache_size': {
            'prices': len(market_cache['prices']),
            'analysis': len(market_cache['analysis']),
            'news': len(market_cache['news'])
        }
    })

@app.route('/api/price/<symbol>', methods=['GET'])
def get_price(symbol):
    """Get real-time price for a symbol"""
    cache_key = get_cache_key(symbol, 'price')
    
    # Check cache first (5 second cache for real-time prices)
    if is_cache_valid(cache_key, 5):
        cached_data = market_cache['prices'][cache_key]
        cached_data['timestamp'] = datetime.now().isoformat()
        cached_data['cached'] = True
        return jsonify(cached_data)
    
    # Fetch fresh data
    price_data = fetch_real_time_price(symbol.upper())
    price_data['timestamp'] = datetime.now().isoformat()
    price_data['cached'] = False
    
    # Update cache
    update_cache(cache_key, price_data, 'prices')
    
    return jsonify(price_data)

@app.route('/api/analysis/<symbol>', methods=['GET'])
def get_analysis(symbol):
    """Get comprehensive market analysis for a symbol"""
    cache_key = get_cache_key(symbol, 'analysis')
    
    # Check cache first (2 minute cache for analysis)
    if is_cache_valid(cache_key, 120):
        cached_data = market_cache['analysis'][cache_key]
        cached_data['timestamp'] = datetime.now().isoformat()
        return jsonify(cached_data)
    
    # Fetch fresh data
    price_data = fetch_real_time_price(symbol.upper())
    analysis = generate_market_analysis(symbol.upper(), price_data)
    
    result = {
        'symbol': symbol.upper(),
        'status': 'success',
        'price_data': price_data,
        'analysis': analysis,
        'timestamp': datetime.now().isoformat()
    }
    
    # Update cache
    update_cache(cache_key, result, 'analysis')
    
    return jsonify(result)

@app.route('/api/news', methods=['GET'])
def get_news():
    """Get latest market news"""
    cache_key = 'market_news'
    
    # Check cache first (5 minute cache for news)
    if is_cache_valid(cache_key, 300):
        cached_data = market_cache['news'][cache_key]
        cached_data['timestamp'] = datetime.now().isoformat()
        return jsonify(cached_data)
    
    # Fetch fresh news
    news_data = fetch_market_news()
    
    result = {
        'status': 'success',
        'news': news_data,
        'total_articles': len(news_data),
        'timestamp': datetime.now().isoformat()
    }
    
    # Update cache
    update_cache(cache_key, result, 'news')
    
    return jsonify(result)

@app.route('/api/symbols', methods=['GET'])
def get_symbols():
    """Get list of available symbols with TradingView mappings"""
    symbols_data = []
    
    for symbol, yf_symbol in SYMBOL_MAPPINGS.items():
        symbols_data.append({
            'symbol': symbol,
            'yfinance_symbol': yf_symbol,
            'tradingview_symbol': get_tradingview_symbol(symbol),
            'category': 'forex' if '=' in yf_symbol else 
                      'index' if '^' in yf_symbol else
                      'commodity' if '=F' in yf_symbol else
                      'crypto' if 'USD' in symbol and symbol in ['BTCUSD', 'ETHUSD'] else 'other'
        })
    
    return jsonify({
        'symbols': symbols_data,
        'total_symbols': len(symbols_data),
        'timestamp': datetime.now().isoformat()
    })

@app.route('/api/tradingview-symbol/<symbol>', methods=['GET'])
def get_tradingview_symbol_endpoint(symbol):
    """Get TradingView symbol for a given symbol"""
    tv_symbol = get_tradingview_symbol(symbol.upper())
    return jsonify({
        'symbol': symbol.upper(),
        'tradingview_symbol': tv_symbol,
        'timestamp': datetime.now().isoformat()
    })

if __name__ == '__main__':
    logger.info("Starting Real-Time Market Data API Server...")
    logger.info("Available endpoints:")
    logger.info("- GET /api/health - Health check")
    logger.info("- GET /api/price/<symbol> - Real-time price data")  
    logger.info("- GET /api/analysis/<symbol> - Market analysis")
    logger.info("- GET /api/news - Latest market news")
    logger.info("- GET /api/symbols - Available symbols")
    logger.info("- GET /api/tradingview-symbol/<symbol> - TradingView symbol mapping")
    
    app.run(host='0.0.0.0', port=5001, debug=False, threaded=True)