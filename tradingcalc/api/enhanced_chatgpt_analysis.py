#!/usr/bin/env python3
"""
Enhanced ChatGPT Analysis API
Provides comprehensive market analysis with detailed candlestick data from multiple timeframes
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

app = Flask(__name__)
CORS(app, origins="*")

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

def get_yfinance_symbol(symbol: str) -> str:
    """Convert our symbol to yfinance symbol"""
    return SYMBOL_MAPPINGS.get(symbol, f"{symbol}=X")

def get_comprehensive_candlestick_data(symbol: str) -> Dict[str, Any]:
    """Get comprehensive candlestick data for multiple timeframes"""
    try:
        yf_symbol = get_yfinance_symbol(symbol)
        ticker = yf.Ticker(yf_symbol)
        
        timeframes = {
            '1m': {'period': '1d', 'interval': '1m', 'description': '1-minute candlesticks for last 24 hours'},
            '15m': {'period': '5d', 'interval': '15m', 'description': '15-minute candlesticks for last 5 days'},
            '1h': {'period': '1mo', 'interval': '1h', 'description': '1-hour candlesticks for last month'},
            '1d': {'period': '1y', 'interval': '1d', 'description': 'Daily candlesticks for last year'}
        }
        
        comprehensive_data = {}
        
        for tf, config in timeframes.items():
            try:
                hist = ticker.history(period=config['period'], interval=config['interval'])
                
                if not hist.empty:
                    # Convert to detailed candlestick data
                    candlesticks = []
                    for idx, row in hist.iterrows():
                        candlestick = {
                            'timestamp': idx.isoformat(),
                            'open': float(row['Open']),
                            'high': float(row['High']),
                            'low': float(row['Low']),
                            'close': float(row['Close']),
                            'volume': int(row['Volume']) if 'Volume' in row and not pd.isna(row['Volume']) else 0
                        }
                        candlesticks.append(candlestick)
                    
                    # Calculate technical indicators
                    closes = hist['Close']
                    highs = hist['High']
                    lows = hist['Low']
                    
                    # RSI calculation
                    rsi = calculate_rsi(closes)
                    
                    # Moving averages
                    sma_20 = closes.rolling(window=min(20, len(closes))).mean().iloc[-1] if len(closes) >= 20 else closes.mean()
                    sma_50 = closes.rolling(window=min(50, len(closes))).mean().iloc[-1] if len(closes) >= 50 else closes.mean()
                    
                    # Bollinger Bands
                    bb_upper, bb_lower = calculate_bollinger_bands(closes)
                    
                    # MACD
                    macd_line, macd_signal = calculate_macd(closes)
                    
                    # Support and Resistance levels
                    support_resistance = calculate_support_resistance(highs, lows)
                    
                    # Volatility
                    volatility = closes.pct_change().std() * 100
                    
                    # Price action patterns
                    patterns = detect_price_patterns(hist)
                    
                    comprehensive_data[tf] = {
                        'description': config['description'],
                        'total_candles': len(candlesticks),
                        'latest_candles': candlesticks[-50:],  # Last 50 candles for analysis
                        'all_candles_summary': {
                            'first_candle': candlesticks[0] if candlesticks else None,
                            'last_candle': candlesticks[-1] if candlesticks else None,
                            'highest_price': float(highs.max()),
                            'lowest_price': float(lows.min()),
                            'price_range': float(highs.max() - lows.min()),
                            'total_volume': int(hist['Volume'].sum()) if 'Volume' in hist.columns else 0
                        },
                        'technical_indicators': {
                            'rsi': float(rsi),
                            'sma_20': float(sma_20),
                            'sma_50': float(sma_50),
                            'bollinger_upper': float(bb_upper),
                            'bollinger_lower': float(bb_lower),
                            'macd_line': float(macd_line),
                            'macd_signal': float(macd_signal),
                            'volatility': float(volatility)
                        },
                        'support_resistance': support_resistance,
                        'price_patterns': patterns,
                        'trend_analysis': analyze_trend(closes),
                        'momentum_analysis': analyze_momentum(closes, rsi, macd_line, macd_signal)
                    }
                    
            except Exception as e:
                print(f"Error fetching {tf} data for {symbol}: {e}")
                comprehensive_data[tf] = {
                    'error': str(e),
                    'description': config['description']
                }
        
        return comprehensive_data
        
    except Exception as e:
        print(f"Error in comprehensive analysis for {symbol}: {e}")
        return {'error': str(e)}

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

def calculate_bollinger_bands(prices: pd.Series, period: int = 20, std_dev: int = 2) -> tuple:
    """Calculate Bollinger Bands"""
    try:
        if len(prices) < period:
            period = len(prices)
        
        sma = prices.rolling(window=period).mean()
        std = prices.rolling(window=period).std()
        
        upper_band = sma + (std * std_dev)
        lower_band = sma - (std * std_dev)
        
        return float(upper_band.iloc[-1]), float(lower_band.iloc[-1])
        
    except Exception:
        current_price = float(prices.iloc[-1])
        return current_price * 1.02, current_price * 0.98

def calculate_macd(prices: pd.Series, fast: int = 12, slow: int = 26, signal: int = 9) -> tuple:
    """Calculate MACD indicator"""
    try:
        if len(prices) < slow:
            return 0.0, 0.0
        
        ema_fast = prices.ewm(span=fast).mean()
        ema_slow = prices.ewm(span=slow).mean()
        
        macd_line = ema_fast - ema_slow
        macd_signal = macd_line.ewm(span=signal).mean()
        
        return float(macd_line.iloc[-1]), float(macd_signal.iloc[-1])
        
    except Exception:
        return 0.0, 0.0

def calculate_support_resistance(highs: pd.Series, lows: pd.Series) -> Dict[str, List[float]]:
    """Calculate support and resistance levels"""
    try:
        # Find local maxima and minima
        resistance_levels = []
        support_levels = []
        
        # Simple approach: find significant highs and lows
        high_values = highs.rolling(window=5, center=True).max()
        low_values = lows.rolling(window=5, center=True).min()
        
        for i in range(2, len(highs) - 2):
            if highs.iloc[i] == high_values.iloc[i] and highs.iloc[i] > highs.iloc[i-1] and highs.iloc[i] > highs.iloc[i+1]:
                resistance_levels.append(float(highs.iloc[i]))
            
            if lows.iloc[i] == low_values.iloc[i] and lows.iloc[i] < lows.iloc[i-1] and lows.iloc[i] < lows.iloc[i+1]:
                support_levels.append(float(lows.iloc[i]))
        
        # Keep only the most significant levels (top 5 each)
        resistance_levels = sorted(set(resistance_levels), reverse=True)[:5]
        support_levels = sorted(set(support_levels))[:5]
        
        return {
            'resistance': resistance_levels,
            'support': support_levels
        }
        
    except Exception:
        current_high = float(highs.iloc[-1])
        current_low = float(lows.iloc[-1])
        return {
            'resistance': [current_high * 1.01, current_high * 1.02],
            'support': [current_low * 0.99, current_low * 0.98]
        }

def detect_price_patterns(hist: pd.DataFrame) -> List[str]:
    """Detect common price patterns"""
    patterns = []
    
    try:
        closes = hist['Close']
        highs = hist['High']
        lows = hist['Low']
        
        if len(closes) < 10:
            return patterns
        
        # Trend patterns
        recent_closes = closes.tail(10)
        if recent_closes.iloc[-1] > recent_closes.iloc[0]:
            if all(recent_closes.iloc[i] >= recent_closes.iloc[i-1] for i in range(1, len(recent_closes))):
                patterns.append("Strong Uptrend")
            else:
                patterns.append("Uptrend")
        elif recent_closes.iloc[-1] < recent_closes.iloc[0]:
            if all(recent_closes.iloc[i] <= recent_closes.iloc[i-1] for i in range(1, len(recent_closes))):
                patterns.append("Strong Downtrend")
            else:
                patterns.append("Downtrend")
        else:
            patterns.append("Sideways/Consolidation")
        
        # Volatility patterns
        volatility = closes.pct_change().std()
        if volatility > 0.02:
            patterns.append("High Volatility")
        elif volatility < 0.005:
            patterns.append("Low Volatility")
        
        # Reversal patterns (simplified)
        if len(closes) >= 3:
            last_3 = closes.tail(3)
            if last_3.iloc[0] > last_3.iloc[1] < last_3.iloc[2]:
                patterns.append("Potential Bullish Reversal")
            elif last_3.iloc[0] < last_3.iloc[1] > last_3.iloc[2]:
                patterns.append("Potential Bearish Reversal")
        
    except Exception as e:
        patterns.append(f"Pattern analysis error: {str(e)}")
    
    return patterns

def analyze_trend(closes: pd.Series) -> Dict[str, Any]:
    """Analyze overall trend"""
    try:
        if len(closes) < 5:
            return {'direction': 'insufficient_data', 'strength': 0}
        
        # Short-term trend (last 5 periods)
        short_term = closes.tail(5)
        short_change = (short_term.iloc[-1] - short_term.iloc[0]) / short_term.iloc[0] * 100
        
        # Medium-term trend (last 20 periods)
        medium_term = closes.tail(min(20, len(closes)))
        medium_change = (medium_term.iloc[-1] - medium_term.iloc[0]) / medium_term.iloc[0] * 100
        
        # Determine trend direction
        if short_change > 1 and medium_change > 0:
            direction = 'bullish'
            strength = min(100, abs(short_change) * 10)
        elif short_change < -1 and medium_change < 0:
            direction = 'bearish'
            strength = min(100, abs(short_change) * 10)
        else:
            direction = 'neutral'
            strength = 50
        
        return {
            'direction': direction,
            'strength': float(strength),
            'short_term_change': float(short_change),
            'medium_term_change': float(medium_change)
        }
        
    except Exception:
        return {'direction': 'neutral', 'strength': 50}

def analyze_momentum(closes: pd.Series, rsi: float, macd_line: float, macd_signal: float) -> Dict[str, Any]:
    """Analyze momentum indicators"""
    try:
        momentum_signals = []
        
        # RSI analysis
        if rsi > 70:
            momentum_signals.append("RSI Overbought")
        elif rsi < 30:
            momentum_signals.append("RSI Oversold")
        elif 45 <= rsi <= 55:
            momentum_signals.append("RSI Neutral")
        
        # MACD analysis
        if macd_line > macd_signal:
            momentum_signals.append("MACD Bullish")
        elif macd_line < macd_signal:
            momentum_signals.append("MACD Bearish")
        
        # Price momentum
        if len(closes) >= 5:
            recent_momentum = (closes.iloc[-1] - closes.iloc[-5]) / closes.iloc[-5] * 100
            if recent_momentum > 2:
                momentum_signals.append("Strong Bullish Momentum")
            elif recent_momentum < -2:
                momentum_signals.append("Strong Bearish Momentum")
        
        return {
            'signals': momentum_signals,
            'rsi_level': float(rsi),
            'macd_divergence': float(macd_line - macd_signal)
        }
        
    except Exception:
        return {'signals': ['Analysis Error'], 'rsi_level': 50, 'macd_divergence': 0}

def format_chatgpt_prompt(symbol: str, candlestick_data: Dict, user_inputs: Dict, prop_firm_data: Dict) -> str:
    """Format comprehensive prompt for ChatGPT analysis"""
    
    prompt = f"""
# COMPREHENSIVE FOREX TRADING ANALYSIS REQUEST

## TRADING CONTEXT
- **Symbol**: {symbol}
- **Current Time**: {datetime.now().isoformat()}
- **Analysis Type**: Multi-timeframe technical analysis with prop firm compliance

## USER TRADING SETUP
- **Account Type**: {user_inputs.get('accountType', 'Unknown')}
- **Prop Firm**: {user_inputs.get('propFirm', 'Unknown')}
- **Account Size**: ${user_inputs.get('accountSize', 'Unknown')}
- **Current Equity**: ${user_inputs.get('currentEquity', 'Unknown')}
- **Risk Percentage**: {user_inputs.get('riskPercentage', 'Unknown')}%
- **Entry Price**: {user_inputs.get('entryPrice', 'Market')}
- **Stop Loss**: {user_inputs.get('stopLoss', 'Not set')}
- **Take Profit**: {user_inputs.get('takeProfit', 'Not set')}

## PROP FIRM CONSTRAINTS
- **Daily Drawdown Limit**: {prop_firm_data.get('dailyDrawdownLimit', 'Unknown')}%
- **Max Drawdown Limit**: {prop_firm_data.get('maxDrawdownLimit', 'Unknown')}%
- **Profit Target**: {prop_firm_data.get('profitTarget', 'Unknown')}%
- **Current Daily Drawdown**: {prop_firm_data.get('currentDailyDrawdown', 'Unknown')}%
- **Current Max Drawdown**: {prop_firm_data.get('currentMaxDrawdown', 'Unknown')}%
- **Account Health**: {prop_firm_data.get('accountHealth', 'Unknown')}

## COMPREHENSIVE MARKET DATA ANALYSIS

"""

    # Add detailed candlestick data for each timeframe
    for timeframe, data in candlestick_data.items():
        if 'error' not in data:
            prompt += f"""
### {timeframe.upper()} TIMEFRAME ANALYSIS
**Description**: {data.get('description', '')}
**Total Candles Analyzed**: {data.get('total_candles', 0)}

**Latest Price Action** (Last 10 candles):
"""
            # Add last 10 candles
            latest_candles = data.get('latest_candles', [])[-10:]
            for i, candle in enumerate(latest_candles):
                prompt += f"  {i+1}. {candle['timestamp']}: O:{candle['open']:.5f} H:{candle['high']:.5f} L:{candle['low']:.5f} C:{candle['close']:.5f} V:{candle['volume']}\n"
            
            # Add technical indicators
            indicators = data.get('technical_indicators', {})
            prompt += f"""
**Technical Indicators**:
- RSI: {indicators.get('rsi', 'N/A'):.2f}
- SMA 20: {indicators.get('sma_20', 'N/A'):.5f}
- SMA 50: {indicators.get('sma_50', 'N/A'):.5f}
- Bollinger Upper: {indicators.get('bollinger_upper', 'N/A'):.5f}
- Bollinger Lower: {indicators.get('bollinger_lower', 'N/A'):.5f}
- MACD Line: {indicators.get('macd_line', 'N/A'):.5f}
- MACD Signal: {indicators.get('macd_signal', 'N/A'):.5f}
- Volatility: {indicators.get('volatility', 'N/A'):.2f}%

**Support & Resistance**:
- Resistance Levels: {data.get('support_resistance', {}).get('resistance', [])}
- Support Levels: {data.get('support_resistance', {}).get('support', [])}

**Price Patterns Detected**: {', '.join(data.get('price_patterns', []))}

**Trend Analysis**: {data.get('trend_analysis', {})}

**Momentum Analysis**: {data.get('momentum_analysis', {})}

"""

    prompt += f"""
## ANALYSIS REQUEST

Please provide a comprehensive trading analysis including:

1. **MARKET ASSESSMENT**:
   - Overall market sentiment across all timeframes
   - Key support/resistance levels to watch
   - Trend confirmation or divergence signals
   - Risk factors and market conditions

2. **TRADE RECOMMENDATION**:
   - Specific entry price (or market entry justification)
   - Exact stop loss level with pip distance
   - Exact take profit level with pip distance
   - Recommended lot size considering prop firm rules
   - Risk/reward ratio analysis

3. **PROP FIRM COMPLIANCE**:
   - Ensure trade size respects daily/max drawdown limits
   - Consider current account health and equity
   - Optimize for prop firm profit targets
   - Risk management specific to prop trading

4. **EXECUTION STRATEGY**:
   - Best timeframe for entry
   - Market timing considerations
   - Position management recommendations
   - Exit strategy if trade goes against us

5. **DETAILED REASONING**:
   - Why this trade setup is optimal now
   - How multiple timeframe analysis supports the decision
   - Risk mitigation strategies
   - Expected market scenarios

Please format your response with specific numerical values for:
- Entry Price: [exact price]
- Stop Loss: [exact price] ([X] pips)
- Take Profit: [exact price] ([X] pips)
- Lot Size: [exact size]
- Risk Amount: $[amount]
- Potential Profit: $[amount]
- Risk/Reward Ratio: [ratio]

Provide clear, actionable guidance that I can immediately implement in my trading platform.
"""

    return prompt

@app.route('/api/chatgpt-analysis', methods=['POST'])
def chatgpt_analysis():
    """Perform comprehensive ChatGPT analysis"""
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
        candlestick_data = get_comprehensive_candlestick_data(symbol)
        
        # Format prompt for ChatGPT
        prompt = format_chatgpt_prompt(symbol, candlestick_data, user_inputs, prop_firm_data)
        
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
                    'content': 'You are an expert forex trader and prop firm specialist with deep knowledge of technical analysis, risk management, and prop trading rules. Provide precise, actionable trading advice based on comprehensive market data.'
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
                    'total_candles': sum(tf_data.get('total_candles', 0) for tf_data in candlestick_data.values() if 'error' not in tf_data),
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
        return jsonify({'error': str(e)}), 500

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'service': 'Enhanced ChatGPT Analysis API',
        'timestamp': datetime.now().isoformat()
    })

if __name__ == '__main__':
    print("Starting Enhanced ChatGPT Analysis API...")
    app.run(host='0.0.0.0', port=5002, debug=False)

