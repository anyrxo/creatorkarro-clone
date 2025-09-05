#!/usr/bin/env python3
"""
Enhanced Market Data API with improved real-time data integration
Provides comprehensive market analysis, news, and pricing data
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
CORS(app, origins="*")

# Global cache for market data
market_cache = {
    'prices': {},
    'analysis': {},
    'news': {},
    'last_update': {}
}

# Symbol mappings for different data sources
SYMBOL_MAPPINGS = {
    'yfinance': {
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
        'NAS100': '^NDX',
        'SPX500': '^GSPC',
        'DOW30': '^DJI',
        'DAX40': '^GDAXI',
        'FTSE100': '^FTSE',
        'NIKKEI': '^N225',
        'GOLD': 'GC=F',
        'SILVER': 'SI=F',
        'CRUDE': 'CL=F',
        'BITCOIN': 'BTC-USD',
        'ETHEREUM': 'ETH-USD'
    }
}

# Timeframe mappings
TIMEFRAME_PERIODS = {
    '1m': '1d',
    '5m': '5d',
    '15m': '5d',
    '30m': '1mo',
    '1h': '1mo',
    '4h': '3mo',
    '1d': '1y'
}

TIMEFRAME_INTERVALS = {
    '1m': '1m',
    '5m': '5m',
    '15m': '15m',
    '30m': '30m',
    '1h': '1h',
    '4h': '1h',
    '1d': '1d'
}

def get_cache_key(symbol: str, data_type: str, timeframe: str = None) -> str:
    """Generate cache key for data storage"""
    if timeframe:
        return f"{symbol}_{data_type}_{timeframe}"
    return f"{symbol}_{data_type}"

def is_cache_valid(cache_key: str, max_age_seconds: int = 60) -> bool:
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
    return SYMBOL_MAPPINGS['yfinance'].get(symbol, f"{symbol}=X")

def fetch_real_time_price(symbol: str) -> Dict[str, Any]:
    """Fetch real-time price data using yfinance"""
    try:
        yf_symbol = get_yfinance_symbol(symbol)
        ticker = yf.Ticker(yf_symbol)
        
        # Get current price and basic info
        info = ticker.info
        hist = ticker.history(period="2d", interval="1d")
        
        if hist.empty:
            logger.warning(f"No historical data for {symbol}")
            return {
                'symbol': symbol,
                'price': 1.0,
                'change': 0.0,
                'change_pct': 0.0,
                'volume': 0,
                'pip_value': get_pip_value(symbol),
                'status': 'no_data'
            }
        
        current_price = hist['Close'].iloc[-1]
        previous_price = hist['Close'].iloc[-2] if len(hist) > 1 else current_price
        
        change = current_price - previous_price
        change_pct = (change / previous_price * 100) if previous_price != 0 else 0
        
        return {
            'symbol': symbol,
            'price': float(current_price),
            'change': float(change),
            'change_pct': float(change_pct),
            'volume': int(hist['Volume'].iloc[-1]) if 'Volume' in hist.columns else 0,
            'high': float(hist['High'].iloc[-1]),
            'low': float(hist['Low'].iloc[-1]),
            'pip_value': get_pip_value(symbol),
            'status': 'success'
        }
        
    except Exception as e:
        logger.error(f"Error fetching price for {symbol}: {e}")
        return {
            'symbol': symbol,
            'price': 1.0,
            'change': 0.0,
            'change_pct': 0.0,
            'volume': 0,
            'pip_value': get_pip_value(symbol),
            'status': 'error'
        }

def get_pip_value(symbol: str) -> float:
    """Get pip value for different instruments"""
    if 'JPY' in symbol:
        return 0.01
    elif any(crypto in symbol for crypto in ['BTC', 'ETH', 'BITCOIN', 'ETHEREUM']):
        return 1.0
    elif any(index in symbol for index in ['NAS', 'SPX', 'DOW', 'DAX', 'FTSE', 'NIKKEI']):
        return 1.0
    elif any(commodity in symbol for commodity in ['GOLD', 'SILVER', 'CRUDE']):
        return 0.01
    else:
        return 0.0001

def fetch_multi_timeframe_data(symbol: str) -> Dict[str, Any]:
    """Fetch multi-timeframe analysis data"""
    try:
        yf_symbol = get_yfinance_symbol(symbol)
        ticker = yf.Ticker(yf_symbol)
        
        timeframe_data = {}
        
        for tf in ['1h', '4h', '1d']:
            try:
                period = TIMEFRAME_PERIODS.get(tf, '1mo')
                interval = TIMEFRAME_INTERVALS.get(tf, '1h')
                
                hist = ticker.history(period=period, interval=interval)
                
                if not hist.empty:
                    current_price = hist['Close'].iloc[-1]
                    start_price = hist['Close'].iloc[0]
                    high = hist['High'].max()
                    low = hist['Low'].min()
                    volume = hist['Volume'].sum() if 'Volume' in hist.columns else 0
                    
                    # Calculate technical indicators
                    closes = hist['Close']
                    rsi = calculate_rsi(closes)
                    sma_20 = closes.rolling(window=min(20, len(closes))).mean().iloc[-1]
                    volatility = closes.pct_change().std() * 100
                    
                    # Determine trend
                    change = current_price - start_price
                    change_pct = (change / start_price * 100) if start_price != 0 else 0
                    
                    if change_pct > 1:
                        trend = 'bullish'
                        strength = min(100, abs(change_pct) * 10)
                    elif change_pct < -1:
                        trend = 'bearish'
                        strength = min(100, abs(change_pct) * 10)
                    else:
                        trend = 'neutral'
                        strength = 50
                    
                    timeframe_data[tf] = {
                        'current_price': float(current_price),
                        'start_price': float(start_price),
                        'change': float(change),
                        'change_pct': float(change_pct),
                        'high': float(high),
                        'low': float(low),
                        'volume': int(volume),
                        'rsi': float(rsi),
                        'sma_20': float(sma_20),
                        'volatility': float(volatility),
                        'trend': trend,
                        'strength': float(strength)
                    }
                    
            except Exception as e:
                logger.error(f"Error fetching {tf} data for {symbol}: {e}")
                continue
        
        return timeframe_data
        
    except Exception as e:
        logger.error(f"Error fetching multi-timeframe data for {symbol}: {e}")
        return {}

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

def generate_comprehensive_analysis(symbol: str, price_data: Dict, timeframe_data: Dict) -> Dict[str, Any]:
    """Generate comprehensive market analysis"""
    try:
        # Analyze overall trend across timeframes
        trends = []
        strengths = []
        
        for tf, data in timeframe_data.items():
            if data.get('trend'):
                trends.append(data['trend'])
                strengths.append(data.get('strength', 50))
        
        # Determine overall trend
        bullish_count = trends.count('bullish')
        bearish_count = trends.count('bearish')
        neutral_count = trends.count('neutral')
        
        if bullish_count > bearish_count and bullish_count > neutral_count:
            overall_trend = 'bullish'
            confidence = min(90, (bullish_count / len(trends)) * 100)
            suggested_action = 'buy'
        elif bearish_count > bullish_count and bearish_count > neutral_count:
            overall_trend = 'bearish'
            confidence = min(90, (bearish_count / len(trends)) * 100)
            suggested_action = 'sell'
        else:
            overall_trend = 'neutral'
            confidence = 40
            suggested_action = 'hold'
        
        # Calculate average strength
        avg_strength = np.mean(strengths) if strengths else 50
        
        # Generate trading suggestions
        current_price = price_data.get('price', 1.0)
        pip_value = price_data.get('pip_value', 0.0001)
        
        # Calculate suggested levels based on volatility
        volatility = np.mean([tf_data.get('volatility', 1) for tf_data in timeframe_data.values()])
        
        if suggested_action == 'buy':
            entry_price = current_price
            stop_loss = current_price - (volatility * pip_value * 50)
            take_profit = current_price + (volatility * pip_value * 100)
        elif suggested_action == 'sell':
            entry_price = current_price
            stop_loss = current_price + (volatility * pip_value * 50)
            take_profit = current_price - (volatility * pip_value * 100)
        else:
            entry_price = current_price
            stop_loss = 0
            take_profit = 0
        
        # Calculate pip targets
        stop_loss_pips = abs(entry_price - stop_loss) / pip_value if stop_loss > 0 else 0
        take_profit_pips = abs(take_profit - entry_price) / pip_value if take_profit > 0 else 0
        
        reasoning = [
            f"Multi-timeframe analysis shows {overall_trend} bias",
            f"Confidence level: {confidence:.0f}%",
            f"Market volatility: {volatility:.2f}%"
        ]
        
        if avg_strength > 70:
            reasoning.append("Strong momentum detected")
        elif avg_strength < 30:
            reasoning.append("Weak momentum, consider waiting")
        
        return {
            'overall_trend': overall_trend,
            'confidence': float(confidence),
            'suggested_action': suggested_action,
            'entry_price': float(entry_price),
            'stop_loss': float(stop_loss),
            'take_profit': float(take_profit),
            'stop_loss_pips': float(stop_loss_pips),
            'take_profit_pips': float(take_profit_pips),
            'risk_level': 'low' if confidence > 70 else 'medium' if confidence > 50 else 'high',
            'reasoning': reasoning
        }
        
    except Exception as e:
        logger.error(f"Error generating analysis for {symbol}: {e}")
        return {
            'overall_trend': 'neutral',
            'confidence': 40.0,
            'suggested_action': 'hold',
            'entry_price': price_data.get('price', 1.0),
            'stop_loss': 0.0,
            'take_profit': 0.0,
            'stop_loss_pips': 0.0,
            'take_profit_pips': 0.0,
            'risk_level': 'medium',
            'reasoning': ['Analysis unavailable due to data limitations']
        }

def fetch_market_news() -> List[Dict[str, Any]]:
    """Fetch real market news using yfinance"""
    try:
        # Get news from major market tickers
        tickers = ['SPY', 'QQQ', 'EURUSD=X', 'GC=F']
        all_news = []
        
        for ticker_symbol in tickers:
            try:
                ticker = yf.Ticker(ticker_symbol)
                news = ticker.news
                
                for article in news[:3]:  # Limit to 3 articles per ticker
                    all_news.append({
                        'title': article.get('title', 'Market Update'),
                        'summary': article.get('summary', 'Latest market developments'),
                        'source': article.get('publisher', 'Financial News'),
                        'url': article.get('link', '#'),
                        'timestamp': datetime.now().isoformat(),
                        'related_symbol': ticker_symbol
                    })
                    
            except Exception as e:
                logger.error(f"Error fetching news for {ticker_symbol}: {e}")
                continue
        
        # If no news found, provide fallback
        if not all_news:
            all_news = [{
                'title': 'Market Analysis System Active',
                'summary': 'Real-time market data and analysis is now available for trading decisions',
                'source': 'Trading Calculator',
                'url': '#',
                'timestamp': datetime.now().isoformat(),
                'related_symbol': None
            }]
        
        return all_news[:10]  # Return max 10 articles
        
    except Exception as e:
        logger.error(f"Error fetching market news: {e}")
        return [{
            'title': 'Market Analysis System Active',
            'summary': 'Real-time market data and analysis is now available for trading decisions',
            'source': 'Trading Calculator',
            'url': '#',
            'timestamp': datetime.now().isoformat(),
            'related_symbol': None
        }]

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
    
    # Check cache first
    if is_cache_valid(cache_key, 30):  # 30 second cache
        return jsonify({
            **market_cache['prices'][cache_key],
            'timestamp': datetime.now().isoformat()
        })
    
    # Fetch fresh data
    price_data = fetch_real_time_price(symbol.upper())
    price_data['timestamp'] = datetime.now().isoformat()
    
    # Update cache
    update_cache(cache_key, price_data, 'prices')
    
    return jsonify(price_data)

@app.route('/api/analysis/<symbol>', methods=['GET'])
def get_analysis(symbol):
    """Get comprehensive market analysis for a symbol"""
    cache_key = get_cache_key(symbol, 'analysis')
    
    # Check cache first
    if is_cache_valid(cache_key, 60):  # 1 minute cache
        return jsonify({
            **market_cache['analysis'][cache_key],
            'timestamp': datetime.now().isoformat()
        })
    
    # Fetch fresh data
    price_data = fetch_real_time_price(symbol.upper())
    timeframe_data = fetch_multi_timeframe_data(symbol.upper())
    analysis = generate_comprehensive_analysis(symbol.upper(), price_data, timeframe_data)
    
    result = {
        'symbol': symbol.upper(),
        'status': 'success',
        'timeframe_data': timeframe_data,
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
    
    # Check cache first
    if is_cache_valid(cache_key, 300):  # 5 minute cache
        return jsonify({
            **market_cache['news'][cache_key],
            'timestamp': datetime.now().isoformat()
        })
    
    # Fetch fresh news
    news_data = fetch_market_news()
    
    result = {
        'status': 'success',
        'news': news_data,
        'timestamp': datetime.now().isoformat()
    }
    
    # Update cache
    update_cache(cache_key, result, 'news')
    
    return jsonify(result)

@app.route('/api/symbols', methods=['GET'])
def get_symbols():
    """Get list of available symbols"""
    return jsonify({
        'symbols': list(SYMBOL_MAPPINGS['yfinance'].keys()),
        'timestamp': datetime.now().isoformat()
    })

if __name__ == '__main__':
    logger.info("Starting Enhanced Market Data API...")
    app.run(host='0.0.0.0', port=5001, debug=False)

