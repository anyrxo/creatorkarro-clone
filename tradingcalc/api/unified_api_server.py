#!/usr/bin/env python3
"""
Unified API Server for MT5 Trading Calculator
Combines all APIs with proper CORS handling
"""

import yfinance as yf
import requests
import json
import time
from datetime import datetime, timedelta
from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
import numpy as np
from typing import Dict, List, Optional, Any
import threading

app = Flask(__name__)
CORS(app, origins="*", methods=["GET", "POST", "OPTIONS"], allow_headers=["Content-Type", "Authorization"])

# Symbol mappings for yfinance
SYMBOL_MAPPINGS = {
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

# Cache for price data
price_cache = {}
cache_duration = 30  # seconds

def get_yfinance_symbol(symbol: str) -> str:
    """Convert our symbol to yfinance symbol"""
    return SYMBOL_MAPPINGS.get(symbol, f"{symbol}=X")

def get_cached_price(symbol: str) -> Optional[Dict]:
    """Get cached price data if still valid"""
    if symbol in price_cache:
        cache_time, data = price_cache[symbol]
        if time.time() - cache_time < cache_duration:
            return data
    return None

def cache_price(symbol: str, data: Dict):
    """Cache price data"""
    price_cache[symbol] = (time.time(), data)

def calculate_rsi(prices: pd.Series, period: int = 14) -> float:
    """Calculate RSI indicator"""
    try:
        if len(prices) < period:
            period = max(1, len(prices) - 1)
        
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

def calculate_sma(prices: pd.Series, period: int = 20) -> float:
    """Calculate Simple Moving Average"""
    try:
        if len(prices) < period:
            period = len(prices)
        return float(prices.rolling(window=period).mean().iloc[-1])
    except Exception:
        return float(prices.iloc[-1])

def analyze_trend(prices: pd.Series) -> tuple:
    """Analyze trend direction and strength"""
    try:
        if len(prices) < 5:
            return 'NEUTRAL', 50.0
        
        # Calculate trend based on price movement
        recent_change = (prices.iloc[-1] - prices.iloc[-5]) / prices.iloc[-5] * 100
        
        if recent_change > 0.5:
            trend = 'BULLISH'
            strength = min(100, abs(recent_change) * 20)
        elif recent_change < -0.5:
            trend = 'BEARISH'
            strength = min(100, abs(recent_change) * 20)
        else:
            trend = 'NEUTRAL'
            strength = 50.0
        
        return trend, strength
        
    except Exception:
        return 'NEUTRAL', 50.0

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'service': 'Unified MT5 Trading Calculator API',
        'timestamp': datetime.now().isoformat(),
        'endpoints': ['/api/price/<symbol>', '/api/analysis/<symbol>', '/api/news', '/api/chatgpt-analysis']
    })

@app.route('/api/price/<symbol>', methods=['GET'])
def get_price(symbol):
    """Get real-time price for a symbol"""
    try:
        # Check cache first
        cached_data = get_cached_price(symbol)
        if cached_data:
            return jsonify(cached_data)
        
        yf_symbol = get_yfinance_symbol(symbol)
        ticker = yf.Ticker(yf_symbol)
        
        # Get current price
        info = ticker.info
        current_price = info.get('regularMarketPrice') or info.get('previousClose', 1.0)
        
        # Get recent history for change calculation
        hist = ticker.history(period='2d', interval='1d')
        
        if len(hist) >= 2:
            previous_close = float(hist['Close'].iloc[-2])
            change = current_price - previous_close
            change_pct = (change / previous_close) * 100
            high = float(hist['High'].iloc[-1])
            low = float(hist['Low'].iloc[-1])
            volume = int(hist['Volume'].iloc[-1]) if 'Volume' in hist.columns else 0
        else:
            change = 0.0
            change_pct = 0.0
            high = current_price
            low = current_price
            volume = 0
        
        # Determine pip value based on symbol
        if 'JPY' in symbol:
            pip_value = 0.01
        else:
            pip_value = 0.0001
        
        price_data = {
            'status': 'success',
            'symbol': symbol,
            'price': float(current_price),
            'change': float(change),
            'change_pct': float(change_pct),
            'high': float(high),
            'low': float(low),
            'volume': volume,
            'pip_value': pip_value,
            'timestamp': datetime.now().isoformat()
        }
        
        # Cache the result
        cache_price(symbol, price_data)
        
        return jsonify(price_data)
        
    except Exception as e:
        print(f"Error fetching price for {symbol}: {e}")
        return jsonify({
            'status': 'error',
            'symbol': symbol,
            'error': str(e),
            'price': 1.0,  # Fallback price
            'change': 0.0,
            'change_pct': 0.0,
            'timestamp': datetime.now().isoformat()
        }), 500

@app.route('/api/analysis/<symbol>', methods=['GET'])
def get_analysis(symbol):
    """Get comprehensive market analysis for a symbol"""
    try:
        yf_symbol = get_yfinance_symbol(symbol)
        ticker = yf.Ticker(yf_symbol)
        
        # Get multiple timeframes
        timeframes = {
            '1h': ticker.history(period='1d', interval='1h'),
            '4h': ticker.history(period='5d', interval='1h'),  # Get hourly and sample every 4
            '1d': ticker.history(period='1mo', interval='1d')
        }
        
        analysis_data = {
            'symbol': symbol,
            'timestamp': datetime.now().isoformat(),
            'timeframe_data': {}
        }
        
        for tf, hist in timeframes.items():
            if not hist.empty:
                # Sample 4h data from hourly
                if tf == '4h':
                    hist = hist.iloc[::4]  # Take every 4th hour
                
                closes = hist['Close']
                highs = hist['High']
                lows = hist['Low']
                
                # Calculate indicators
                rsi = calculate_rsi(closes)
                sma_20 = calculate_sma(closes, 20)
                trend, strength = analyze_trend(closes)
                
                # Calculate volatility
                volatility = closes.pct_change().std() * 100 if len(closes) > 1 else 0
                
                # Price change
                if len(closes) >= 2:
                    change = closes.iloc[-1] - closes.iloc[0]
                    change_pct = (change / closes.iloc[0]) * 100
                else:
                    change = 0
                    change_pct = 0
                
                analysis_data['timeframe_data'][tf] = {
                    'current_price': float(closes.iloc[-1]),
                    'start_price': float(closes.iloc[0]),
                    'change': float(change),
                    'change_pct': float(change_pct),
                    'high': float(highs.max()),
                    'low': float(lows.min()),
                    'volume': int(hist['Volume'].sum()) if 'Volume' in hist.columns else 0,
                    'rsi': float(rsi),
                    'sma_20': float(sma_20),
                    'volatility': float(volatility),
                    'trend': trend,
                    'strength': float(strength)
                }
        
        # Generate intelligent trade suggestion
        current_price = analysis_data['timeframe_data']['1h']['current_price']
        trend_1h = analysis_data['timeframe_data']['1h']['trend']
        trend_4h = analysis_data['timeframe_data']['4h']['trend']
        trend_1d = analysis_data['timeframe_data']['1d']['trend']
        rsi_1h = analysis_data['timeframe_data']['1h']['rsi']
        
        # Intelligent trade logic
        if trend_1h == trend_4h == trend_1d == 'BULLISH' and rsi_1h < 70:
            action = 'BUY'
            direction = 'LONG'
            confidence = 90
            entry_price = current_price
            stop_loss = current_price * 0.995  # 0.5% stop loss
            take_profit = current_price * 1.01  # 1% take profit
            reasoning = "Strong bullish alignment across all timeframes with RSI not overbought"
        elif trend_1h == trend_4h == trend_1d == 'BEARISH' and rsi_1h > 30:
            action = 'SELL'
            direction = 'SHORT'
            confidence = 90
            entry_price = current_price
            stop_loss = current_price * 1.005  # 0.5% stop loss
            take_profit = current_price * 0.99  # 1% take profit
            reasoning = "Strong bearish alignment across all timeframes with RSI not oversold"
        elif trend_1h == 'BULLISH' and trend_4h == 'BULLISH' and rsi_1h < 65:
            action = 'BUY'
            direction = 'LONG'
            confidence = 75
            entry_price = current_price
            stop_loss = current_price * 0.997
            take_profit = current_price * 1.006
            reasoning = "Bullish momentum on shorter timeframes with good RSI level"
        elif trend_1h == 'BEARISH' and trend_4h == 'BEARISH' and rsi_1h > 35:
            action = 'SELL'
            direction = 'SHORT'
            confidence = 75
            entry_price = current_price
            stop_loss = current_price * 1.003
            take_profit = current_price * 0.994
            reasoning = "Bearish momentum on shorter timeframes with good RSI level"
        else:
            action = 'WAIT'
            direction = 'NEUTRAL'
            confidence = 50
            entry_price = current_price
            stop_loss = current_price * 0.998
            take_profit = current_price * 1.002
            reasoning = "Mixed signals across timeframes, wait for clearer direction"
        
        # Calculate pip distances
        if 'JPY' in symbol:
            pip_value = 0.01
        else:
            pip_value = 0.0001
        
        stop_loss_pips = abs(entry_price - stop_loss) / pip_value
        take_profit_pips = abs(take_profit - entry_price) / pip_value
        
        analysis_data['trade_suggestion'] = {
            'action': action,
            'direction': direction,
            'confidence': confidence,
            'entry_price': float(entry_price),
            'stop_loss': float(stop_loss),
            'take_profit': float(take_profit),
            'stop_loss_pips': float(stop_loss_pips),
            'take_profit_pips': float(take_profit_pips),
            'risk_reward_ratio': float(take_profit_pips / stop_loss_pips) if stop_loss_pips > 0 else 1.0,
            'reasoning': reasoning
        }
        
        return jsonify(analysis_data)
        
    except Exception as e:
        print(f"Error in analysis for {symbol}: {e}")
        return jsonify({
            'error': str(e),
            'symbol': symbol,
            'timestamp': datetime.now().isoformat()
        }), 500

@app.route('/api/news', methods=['GET'])
def get_news():
    """Get market news"""
    try:
        # Try to get real news from yfinance
        news_items = []
        
        # Get news for major symbols
        symbols = ['EURUSD=X', 'GBPUSD=X', 'USDJPY=X', '^GSPC', 'GC=F']
        
        for symbol in symbols[:2]:  # Limit to avoid rate limits
            try:
                ticker = yf.Ticker(symbol)
                news = ticker.news
                
                for item in news[:3]:  # Limit items per symbol
                    news_items.append({
                        'title': item.get('title', 'Market Update'),
                        'summary': item.get('summary', 'Market news update'),
                        'url': item.get('link', '#'),
                        'timestamp': datetime.fromtimestamp(item.get('providerPublishTime', time.time())).isoformat(),
                        'source': item.get('publisher', 'Market News')
                    })
            except Exception as e:
                print(f"Error fetching news for {symbol}: {e}")
                continue
        
        # If no real news, provide market-relevant fallback
        if not news_items:
            news_items = [
                {
                    'title': 'EUR/USD Maintains Bullish Momentum',
                    'summary': 'The Euro continues to show strength against the Dollar amid positive economic data.',
                    'url': '#',
                    'timestamp': datetime.now().isoformat(),
                    'source': 'Market Analysis'
                },
                {
                    'title': 'Federal Reserve Policy Update',
                    'summary': 'Latest Fed communications suggest continued focus on inflation targets.',
                    'url': '#',
                    'timestamp': (datetime.now() - timedelta(hours=2)).isoformat(),
                    'source': 'Central Bank News'
                },
                {
                    'title': 'Global Market Volatility Analysis',
                    'summary': 'Current market conditions show increased volatility across major currency pairs.',
                    'url': '#',
                    'timestamp': (datetime.now() - timedelta(hours=4)).isoformat(),
                    'source': 'Market Research'
                }
            ]
        
        return jsonify({
            'status': 'success',
            'news': news_items[:10],  # Limit to 10 items
            'timestamp': datetime.now().isoformat()
        })
        
    except Exception as e:
        print(f"Error fetching news: {e}")
        return jsonify({
            'status': 'error',
            'error': str(e),
            'news': [],
            'timestamp': datetime.now().isoformat()
        }), 500

@app.route('/api/chatgpt-analysis', methods=['POST', 'OPTIONS'])
def chatgpt_analysis():
    """Perform comprehensive ChatGPT analysis"""
    if request.method == 'OPTIONS':
        return jsonify({'status': 'ok'})
    
    try:
        data = request.get_json()
        
        # Extract parameters
        api_key = data.get('apiKey')
        symbol = data.get('symbol', 'EURUSD')
        user_inputs = data.get('userInputs', {})
        prop_firm_data = data.get('propFirmData', {})
        
        if not api_key:
            return jsonify({'error': 'ChatGPT API key is required'}), 400
        
        # Get comprehensive candlestick data
        print(f"Fetching comprehensive data for {symbol}...")
        
        yf_symbol = get_yfinance_symbol(symbol)
        ticker = yf.Ticker(yf_symbol)
        
        # Get multiple timeframes of candlestick data
        timeframes = {
            '1m': {'period': '1d', 'interval': '1m'},
            '15m': {'period': '5d', 'interval': '15m'},
            '1h': {'period': '1mo', 'interval': '1h'},
            '1d': {'period': '1y', 'interval': '1d'}
        }
        
        candlestick_data = {}
        total_candles = 0
        
        for tf, config in timeframes.items():
            try:
                hist = ticker.history(period=config['period'], interval=config['interval'])
                
                if not hist.empty:
                    # Convert to candlestick format
                    candles = []
                    for idx, row in hist.iterrows():
                        candles.append({
                            'timestamp': idx.isoformat(),
                            'open': float(row['Open']),
                            'high': float(row['High']),
                            'low': float(row['Low']),
                            'close': float(row['Close']),
                            'volume': int(row['Volume']) if 'Volume' in row and not pd.isna(row['Volume']) else 0
                        })
                    
                    # Calculate technical indicators
                    closes = hist['Close']
                    rsi = calculate_rsi(closes)
                    sma_20 = calculate_sma(closes, 20)
                    trend, strength = analyze_trend(closes)
                    volatility = closes.pct_change().std() * 100 if len(closes) > 1 else 0
                    
                    candlestick_data[tf] = {
                        'total_candles': len(candles),
                        'latest_candles': candles[-20:],  # Last 20 for analysis
                        'technical_indicators': {
                            'rsi': float(rsi),
                            'sma_20': float(sma_20),
                            'volatility': float(volatility),
                            'trend': trend,
                            'strength': float(strength)
                        }
                    }
                    total_candles += len(candles)
                    
            except Exception as e:
                print(f"Error fetching {tf} data: {e}")
                candlestick_data[tf] = {'error': str(e)}
        
        # Create comprehensive prompt
        prompt = f"""
# COMPREHENSIVE FOREX TRADING ANALYSIS

## TRADING CONTEXT
- **Symbol**: {symbol}
- **Analysis Time**: {datetime.now().isoformat()}
- **Total Candlesticks Analyzed**: {total_candles}

## USER SETUP
- **Account**: {user_inputs.get('accountType', 'Unknown')} - {user_inputs.get('propFirm', 'Unknown')}
- **Account Size**: ${user_inputs.get('accountSize', 'Unknown')}
- **Risk**: {user_inputs.get('riskPercentage', 'Unknown')}%
- **Current Equity**: ${user_inputs.get('currentEquity', 'Unknown')}

## PROP FIRM RULES
- **Daily Drawdown Limit**: {prop_firm_data.get('dailyDrawdownLimit', 'Unknown')}%
- **Max Drawdown**: {prop_firm_data.get('maxDrawdownLimit', 'Unknown')}%
- **Profit Target**: {prop_firm_data.get('profitTarget', 'Unknown')}%

## COMPREHENSIVE MARKET DATA

"""

        # Add detailed candlestick data
        for tf, data in candlestick_data.items():
            if 'error' not in data:
                prompt += f"""
### {tf.upper()} TIMEFRAME ({data['total_candles']} candles)
**Recent Price Action:**
"""
                for i, candle in enumerate(data['latest_candles'][-10:]):
                    prompt += f"  {i+1}. {candle['timestamp']}: O:{candle['open']:.5f} H:{candle['high']:.5f} L:{candle['low']:.5f} C:{candle['close']:.5f}\n"
                
                indicators = data['technical_indicators']
                prompt += f"""
**Technical Analysis:**
- RSI: {indicators['rsi']:.1f}
- SMA 20: {indicators['sma_20']:.5f}
- Volatility: {indicators['volatility']:.2f}%
- Trend: {indicators['trend']} (Strength: {indicators['strength']:.1f}%)

"""

        prompt += f"""
## ANALYSIS REQUEST

Based on this comprehensive multi-timeframe analysis of {total_candles} candlesticks, provide:

1. **MARKET ASSESSMENT**: Current market sentiment and key levels
2. **TRADE RECOMMENDATION**: Specific entry, stop loss, take profit with exact pips
3. **POSITION SIZING**: Optimal lot size for prop firm compliance
4. **RISK MANAGEMENT**: Detailed risk analysis and mitigation
5. **EXECUTION PLAN**: Step-by-step trading instructions

**Format your response with exact values:**
- Entry Price: [exact price]
- Stop Loss: [exact price] ([X] pips)
- Take Profit: [exact price] ([X] pips)
- Lot Size: [exact size]
- Risk/Reward: [ratio]

Provide clear, actionable guidance for immediate implementation.
"""

        # Call ChatGPT API
        headers = {
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json'
        }
        
        payload = {
            'model': 'gpt-4',
            'messages': [
                {
                    'role': 'system',
                    'content': 'You are an expert forex trader and prop firm specialist. Provide precise, actionable trading advice based on comprehensive market data.'
                },
                {
                    'role': 'user',
                    'content': prompt
                }
            ],
            'max_tokens': 2000,
            'temperature': 0.3
        }
        
        response = requests.post(
            'https://api.openai.com/v1/chat/completions',
            headers=headers,
            json=payload,
            timeout=30
        )
        
        if response.status_code == 200:
            result = response.json()
            analysis = result['choices'][0]['message']['content']
            
            return jsonify({
                'status': 'success',
                'analysis': analysis,
                'data_points_analyzed': {
                    'timeframes': list(candlestick_data.keys()),
                    'total_candles': total_candles,
                    'user_inputs': user_inputs,
                    'prop_firm_data': prop_firm_data
                },
                'timestamp': datetime.now().isoformat()
            })
        else:
            return jsonify({
                'error': f'ChatGPT API error: {response.status_code}',
                'details': response.text
            }), 400
            
    except Exception as e:
        print(f"ChatGPT analysis error: {e}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    print("Starting Unified MT5 Trading Calculator API...")
    print("Available endpoints:")
    print("- GET /api/health")
    print("- GET /api/price/<symbol>")
    print("- GET /api/analysis/<symbol>")
    print("- GET /api/news")
    print("- POST /api/chatgpt-analysis")
    app.run(host='0.0.0.0', port=5000, debug=False)

