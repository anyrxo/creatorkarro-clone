#!/usr/bin/env python3
"""
Real-time market data API using yfinance
Provides live prices, news, and multi-timeframe analysis
"""

import yfinance as yf
import pandas as pd
import numpy as np
from datetime import datetime, timedelta
import json
import time
from flask import Flask, jsonify, request
from flask_cors import CORS
import threading
import logging

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = Flask(__name__)
CORS(app)

# Symbol mapping for different markets
SYMBOL_MAPPING = {
    # Forex pairs
    'EUR/USD': 'EURUSD=X',
    'GBP/USD': 'GBPUSD=X', 
    'USD/JPY': 'USDJPY=X',
    'USD/CHF': 'USDCHF=X',
    'AUD/USD': 'AUDUSD=X',
    'USD/CAD': 'USDCAD=X',
    'NZD/USD': 'NZDUSD=X',
    'EUR/JPY': 'EURJPY=X',
    'GBP/JPY': 'GBPJPY=X',
    'EUR/GBP': 'EURGBP=X',
    'AUD/CAD': 'AUDCAD=X',
    'AUD/CHF': 'AUDCHF=X',
    'AUD/JPY': 'AUDJPY=X',
    'CAD/JPY': 'CADJPY=X',
    'CHF/JPY': 'CHFJPY=X',
    'EUR/AUD': 'EURAUD=X',
    
    # Indices
    'NASDAQ 100': '^NDX',
    'S&P 500': '^GSPC',
    'Dow Jones 30': '^DJI',
    'DAX 40': '^GDAXI',
    'FTSE 100': '^FTSE',
    'Nikkei 225': '^N225',
    'CAC 40': '^FCHI',
    'ASX 200': '^AXJO',
    'Hang Seng': '^HSI',
    'KOSPI': '^KS11',
    
    # Commodities
    'Gold': 'GC=F',
    'Silver': 'SI=F',
    'Crude Oil': 'CL=F',
    'Natural Gas': 'NG=F',
    'Copper': 'HG=F',
    'Platinum': 'PL=F',
    'Palladium': 'PA=F',
    
    # Cryptocurrencies
    'Bitcoin': 'BTC-USD',
    'Ethereum': 'ETH-USD',
    'Cardano': 'ADA-USD',
    'Solana': 'SOL-USD',
    'Polygon': 'MATIC-USD',
    'Chainlink': 'LINK-USD',
    'Polkadot': 'DOT-USD',
    'Avalanche': 'AVAX-USD',
    'Cosmos': 'ATOM-USD',
    'Algorand': 'ALGO-USD'
}

# Cache for storing recent data
price_cache = {}
news_cache = {}
analysis_cache = {}

def get_yf_symbol(symbol):
    """Convert our symbol format to yfinance format"""
    return SYMBOL_MAPPING.get(symbol, symbol)

def calculate_pip_value(symbol, price):
    """Calculate pip value based on symbol type"""
    if 'JPY' in symbol:
        return 0.01  # For JPY pairs, pip is 0.01
    elif any(crypto in symbol for crypto in ['BTC', 'ETH', 'ADA', 'SOL']):
        return price * 0.0001  # 0.01% for crypto
    elif any(index in symbol for index in ['^NDX', '^GSPC', '^DJI']):
        return 1.0  # 1 point for indices
    else:
        return 0.0001  # Standard forex pip

def get_multi_timeframe_data(symbol, periods=['1h', '1d', '7d']):
    """Get price data for multiple timeframes"""
    yf_symbol = get_yf_symbol(symbol)
    ticker = yf.Ticker(yf_symbol)
    
    timeframe_data = {}
    
    try:
        # Get different period data
        for period in periods:
            if period == '1h':
                data = ticker.history(period='1d', interval='1h')
            elif period == '1d':
                data = ticker.history(period='5d', interval='1h')
            elif period == '7d':
                data = ticker.history(period='1mo', interval='1d')
            else:
                data = ticker.history(period=period, interval='1d')
            
            if not data.empty:
                current_price = data['Close'].iloc[-1]
                start_price = data['Close'].iloc[0]
                change = current_price - start_price
                change_pct = (change / start_price) * 100
                
                # Calculate technical indicators
                rsi = calculate_rsi(data['Close'])
                sma_20 = data['Close'].rolling(window=min(20, len(data))).mean().iloc[-1]
                volatility = data['Close'].pct_change().std() * 100
                
                timeframe_data[period] = {
                    'current_price': float(current_price),
                    'start_price': float(start_price),
                    'change': float(change),
                    'change_pct': float(change_pct),
                    'high': float(data['High'].max()),
                    'low': float(data['Low'].min()),
                    'volume': float(data['Volume'].sum()) if 'Volume' in data else 0,
                    'rsi': float(rsi) if not np.isnan(rsi) else 50,
                    'sma_20': float(sma_20) if not np.isnan(sma_20) else float(current_price),
                    'volatility': float(volatility) if not np.isnan(volatility) else 1.0,
                    'trend': 'bullish' if change > 0 else 'bearish',
                    'strength': min(abs(change_pct) * 10, 100)
                }
    
    except Exception as e:
        logger.error(f"Error getting multi-timeframe data for {symbol}: {e}")
        # Return default data if API fails
        timeframe_data = {
            '1h': {'current_price': 1.0, 'change_pct': 0, 'trend': 'neutral', 'rsi': 50},
            '1d': {'current_price': 1.0, 'change_pct': 0, 'trend': 'neutral', 'rsi': 50},
            '7d': {'current_price': 1.0, 'change_pct': 0, 'trend': 'neutral', 'rsi': 50}
        }
    
    return timeframe_data

def calculate_rsi(prices, period=14):
    """Calculate RSI indicator"""
    if len(prices) < period + 1:
        return 50.0
    
    delta = prices.diff()
    gain = (delta.where(delta > 0, 0)).rolling(window=period).mean()
    loss = (-delta.where(delta < 0, 0)).rolling(window=period).mean()
    
    rs = gain / loss
    rsi = 100 - (100 / (1 + rs))
    return rsi.iloc[-1] if not rsi.empty else 50.0

def generate_intelligent_analysis(symbol, timeframe_data, prop_firm_rules=None):
    """Generate intelligent trading analysis based on multi-timeframe data"""
    try:
        analysis = {
            'overall_trend': 'neutral',
            'confidence': 50,
            'suggested_action': 'hold',
            'entry_price': 0,
            'stop_loss': 0,
            'take_profit': 0,
            'risk_level': 'medium',
            'reasoning': [],
            'pip_target': 0,
            'timeframe_analysis': {}
        }
        
        # Analyze each timeframe
        bullish_signals = 0
        bearish_signals = 0
        total_strength = 0
        
        for tf, data in timeframe_data.items():
            tf_analysis = {
                'trend': data['trend'],
                'strength': data.get('strength', 50),
                'rsi': data.get('rsi', 50),
                'price_action': 'neutral'
            }
            
            # RSI analysis
            if data.get('rsi', 50) > 70:
                tf_analysis['rsi_signal'] = 'overbought'
                bearish_signals += 1
            elif data.get('rsi', 50) < 30:
                tf_analysis['rsi_signal'] = 'oversold'
                bullish_signals += 1
            else:
                tf_analysis['rsi_signal'] = 'neutral'
            
            # Trend analysis
            if data['trend'] == 'bullish' and data.get('change_pct', 0) > 0.5:
                bullish_signals += 2
                tf_analysis['price_action'] = 'strong_bullish'
            elif data['trend'] == 'bearish' and data.get('change_pct', 0) < -0.5:
                bearish_signals += 2
                tf_analysis['price_action'] = 'strong_bearish'
            
            total_strength += data.get('strength', 50)
            analysis['timeframe_analysis'][tf] = tf_analysis
        
        # Determine overall trend and confidence
        if bullish_signals > bearish_signals + 1:
            analysis['overall_trend'] = 'bullish'
            analysis['suggested_action'] = 'buy'
            analysis['confidence'] = min(85, 50 + (bullish_signals - bearish_signals) * 10)
        elif bearish_signals > bullish_signals + 1:
            analysis['overall_trend'] = 'bearish'
            analysis['suggested_action'] = 'sell'
            analysis['confidence'] = min(85, 50 + (bearish_signals - bullish_signals) * 10)
        else:
            analysis['confidence'] = 40
        
        # Calculate suggested prices
        current_price = timeframe_data.get('1h', {}).get('current_price', 1.0)
        volatility = timeframe_data.get('1d', {}).get('volatility', 1.0)
        
        analysis['entry_price'] = current_price
        
        if analysis['suggested_action'] == 'buy':
            analysis['stop_loss'] = current_price * (1 - volatility * 0.01)
            analysis['take_profit'] = current_price * (1 + volatility * 0.02)
            analysis['pip_target'] = int(volatility * 20)
        elif analysis['suggested_action'] == 'sell':
            analysis['stop_loss'] = current_price * (1 + volatility * 0.01)
            analysis['take_profit'] = current_price * (1 - volatility * 0.02)
            analysis['pip_target'] = int(volatility * 20)
        
        # Generate reasoning
        analysis['reasoning'] = [
            f"Multi-timeframe analysis shows {analysis['overall_trend']} bias",
            f"Confidence level: {analysis['confidence']}%",
            f"Market volatility: {volatility:.2f}%"
        ]
        
        # Risk assessment
        if volatility > 2.0:
            analysis['risk_level'] = 'high'
        elif volatility < 1.0:
            analysis['risk_level'] = 'low'
        
        return analysis
        
    except Exception as e:
        logger.error(f"Error generating analysis: {e}")
        return {
            'overall_trend': 'neutral',
            'confidence': 50,
            'suggested_action': 'hold',
            'entry_price': 1.0,
            'stop_loss': 0.99,
            'take_profit': 1.01,
            'risk_level': 'medium',
            'reasoning': ['Analysis temporarily unavailable'],
            'pip_target': 20
        }

@app.route('/api/price/<symbol>')
def get_live_price(symbol):
    """Get live price for a symbol"""
    try:
        yf_symbol = get_yf_symbol(symbol)
        ticker = yf.Ticker(yf_symbol)
        
        # Get current price
        info = ticker.info
        current_price = info.get('regularMarketPrice') or info.get('previousClose', 1.0)
        
        # Get recent data for additional metrics
        hist = ticker.history(period='1d', interval='1m')
        
        if not hist.empty:
            latest_price = hist['Close'].iloc[-1]
            open_price = hist['Open'].iloc[0]
            high_price = hist['High'].max()
            low_price = hist['Low'].min()
            
            change = latest_price - open_price
            change_pct = (change / open_price) * 100 if open_price > 0 else 0
            
            pip_value = calculate_pip_value(symbol, latest_price)
            
            result = {
                'symbol': symbol,
                'price': float(latest_price),
                'open': float(open_price),
                'high': float(high_price),
                'low': float(low_price),
                'change': float(change),
                'change_pct': float(change_pct),
                'pip_value': float(pip_value),
                'timestamp': datetime.now().isoformat(),
                'status': 'success'
            }
        else:
            # Fallback to info data
            result = {
                'symbol': symbol,
                'price': float(current_price),
                'change_pct': 0,
                'pip_value': calculate_pip_value(symbol, current_price),
                'timestamp': datetime.now().isoformat(),
                'status': 'limited_data'
            }
        
        # Cache the result
        price_cache[symbol] = result
        
        return jsonify(result)
        
    except Exception as e:
        logger.error(f"Error fetching price for {symbol}: {e}")
        return jsonify({
            'symbol': symbol,
            'price': 1.0,
            'error': str(e),
            'status': 'error',
            'timestamp': datetime.now().isoformat()
        }), 500

@app.route('/api/analysis/<symbol>')
def get_market_analysis(symbol):
    """Get comprehensive market analysis"""
    try:
        # Get multi-timeframe data
        timeframe_data = get_multi_timeframe_data(symbol)
        
        # Generate intelligent analysis
        analysis = generate_intelligent_analysis(symbol, timeframe_data)
        
        result = {
            'symbol': symbol,
            'analysis': analysis,
            'timeframe_data': timeframe_data,
            'timestamp': datetime.now().isoformat(),
            'status': 'success'
        }
        
        # Cache the result
        analysis_cache[symbol] = result
        
        return jsonify(result)
        
    except Exception as e:
        logger.error(f"Error generating analysis for {symbol}: {e}")
        return jsonify({
            'symbol': symbol,
            'error': str(e),
            'status': 'error',
            'timestamp': datetime.now().isoformat()
        }), 500

@app.route('/api/news')
def get_market_news():
    """Get real market news"""
    try:
        # Get news from major financial symbols
        news_symbols = ['AAPL', 'MSFT', 'GOOGL', 'TSLA', 'SPY']
        all_news = []
        
        for symbol in news_symbols:
            try:
                ticker = yf.Ticker(symbol)
                news = ticker.news
                
                for article in news[:3]:  # Limit to 3 articles per symbol
                    all_news.append({
                        'title': article.get('title', 'Market Update'),
                        'summary': article.get('summary', 'Latest market developments'),
                        'url': article.get('link', '#'),
                        'source': article.get('publisher', 'Financial News'),
                        'timestamp': datetime.fromtimestamp(
                            article.get('providerPublishTime', time.time())
                        ).isoformat(),
                        'related_symbol': symbol
                    })
                    
            except Exception as e:
                logger.warning(f"Could not fetch news for {symbol}: {e}")
                continue
        
        # Sort by timestamp (newest first)
        all_news.sort(key=lambda x: x['timestamp'], reverse=True)
        
        # Limit to 10 most recent articles
        result = {
            'news': all_news[:10],
            'timestamp': datetime.now().isoformat(),
            'status': 'success'
        }
        
        # Cache the result
        news_cache['market'] = result
        
        return jsonify(result)
        
    except Exception as e:
        logger.error(f"Error fetching news: {e}")
        return jsonify({
            'news': [
                {
                    'title': 'Market Analysis Available',
                    'summary': 'Real-time market data and analysis system is active',
                    'source': 'Trading Calculator',
                    'timestamp': datetime.now().isoformat()
                }
            ],
            'error': str(e),
            'status': 'limited',
            'timestamp': datetime.now().isoformat()
        })

@app.route('/api/health')
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'timestamp': datetime.now().isoformat(),
        'cache_size': {
            'prices': len(price_cache),
            'news': len(news_cache),
            'analysis': len(analysis_cache)
        }
    })

if __name__ == '__main__':
    logger.info("Starting Real Market Data API...")
    app.run(host='0.0.0.0', port=5001, debug=False)

