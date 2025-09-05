

// Market Analysis Utilities for Trading Intelligence

/**
 * Calculate Simple Moving Average
 * @param {Array} prices - Array of price values
 * @param {number} period - Period for SMA calculation
 * @returns {number} - Simple Moving Average
 */
export const calculateSMA = (prices, period) => {
  if (prices.length < period) return null;
  const sum = prices.slice(-period).reduce((acc, price) => acc + price, 0);
  return sum / period;
};

/**
 * Calculate Exponential Moving Average
 * @param {Array} prices - Array of price values
 * @param {number} period - Period for EMA calculation
 * @returns {number} - Exponential Moving Average
 */
export const calculateEMA = (prices, period) => {
  if (prices.length < period) return null;
  
  const multiplier = 2 / (period + 1);
  let ema = prices.slice(0, period).reduce((acc, price) => acc + price, 0) / period;
  
  for (let i = period; i < prices.length; i++) {
    ema = (prices[i] * multiplier) + (ema * (1 - multiplier));
  }
  
  return ema;
};

/**
 * Calculate RSI (Relative Strength Index)
 * @param {Array} prices - Array of price values
 * @param {number} period - Period for RSI calculation (default 14)
 * @returns {number} - RSI value (0-100)
 */
export const calculateRSI = (prices, period = 14) => {
  if (prices.length < period + 1) return null;
  
  const changes = [];
  for (let i = 1; i < prices.length; i++) {
    changes.push(prices[i] - prices[i - 1]);
  }
  
  const gains = changes.map(change => change > 0 ? change : 0);
  const losses = changes.map(change => change < 0 ? Math.abs(change) : 0);
  
  const avgGain = gains.slice(-period).reduce((acc, gain) => acc + gain, 0) / period;
  const avgLoss = losses.slice(-period).reduce((acc, loss) => acc + loss, 0) / period;
  
  if (avgLoss === 0) return 100;
  
  const rs = avgGain / avgLoss;
  const rsi = 100 - (100 / (1 + rs));
  
  return rsi;
};

/**
 * Calculate MACD (Moving Average Convergence Divergence)
 * @param {Array} prices - Array of price values
 * @param {number} fastPeriod - Fast EMA period (default 12)
 * @param {number} slowPeriod - Slow EMA period (default 26)
 * @param {number} signalPeriod - Signal line EMA period (default 9)
 * @returns {Object} - MACD line, signal line, and histogram
 */
export const calculateMACD = (prices, fastPeriod = 12, slowPeriod = 26, signalPeriod = 9) => {
  if (prices.length < slowPeriod) return null;
  
  const fastEMA = calculateEMA(prices, fastPeriod);
  const slowEMA = calculateEMA(prices, slowPeriod);
  
  if (!fastEMA || !slowEMA) return null;
  
  const macdLine = fastEMA - slowEMA;
  
  // For signal line, we'd need historical MACD values
  // Simplified version for current implementation
  const signalLine = macdLine * 0.9; // Simplified
  const histogram = macdLine - signalLine;
  
  return {
    macd: macdLine,
    signal: signalLine,
    histogram: histogram
  };
};

/**
 * Calculate Bollinger Bands
 * @param {Array} prices - Array of price values
 * @param {number} period - Period for SMA calculation (default 20)
 * @param {number} stdDevMultiplier - Standard deviation multiplier (default 2)
 * @returns {Object} - Upper band, middle band (SMA), and lower band
 */
export const calculateBollingerBands = (prices, period = 20, stdDevMultiplier = 2) => {
  if (prices.length < period) return null;

  const sma = calculateSMA(prices, period);
  if (sma === null) return null;

  const slice = prices.slice(-period);
  const squaredDifferences = slice.map(price => Math.pow(price - sma, 2));
  const standardDeviation = Math.sqrt(squaredDifferences.reduce((acc, val) => acc + val, 0) / period);

  const upperBand = sma + (standardDeviation * stdDevMultiplier);
  const lowerBand = sma - (standardDeviation * stdDevMultiplier);

  return {
    upper: upperBand,
    middle: sma,
    lower: lowerBand,
  };
};

/**
 * Detect trend direction based on multiple indicators
 * @param {Array} priceHistory - Array of price objects with {price, timestamp}
 * @param {string} timeframe - Timeframe for analysis
 * @returns {Object} - Trend analysis result
 */
export const analyzeTrend = (priceHistory, timeframe = '1h') => {
  if (!priceHistory || priceHistory.length < 20) {
    return {
      direction: 'neutral',
      strength: 0,
      confidence: 0,
      signals: []
    };
  }
  
  const prices = priceHistory.map(item => item.price);
  const currentPrice = prices[prices.length - 1];
  
  // Calculate indicators
  const sma20 = calculateSMA(prices, 20);
  const sma50 = calculateSMA(prices, 50);
  const ema12 = calculateEMA(prices, 12);
  const rsi = calculateRSI(prices);
  const macd = calculateMACD(prices);
  
  let bullishSignals = 0;
  let bearishSignals = 0;
  const signals = [];
  
  // Price vs Moving Averages
  if (sma20 && currentPrice > sma20) {
    bullishSignals++;
    signals.push('Price above SMA20');
  } else if (sma20 && currentPrice < sma20) {
    bearishSignals++;
    signals.push('Price below SMA20');
  }
  
  if (sma50 && currentPrice > sma50) {
    bullishSignals++;
    signals.push('Price above SMA50');
  } else if (sma50 && currentPrice < sma50) {
    bearishSignals++;
    signals.push('Price below SMA50');
  }
  
  // Moving Average Crossover
  if (sma20 && sma50) {
    if (sma20 > sma50) {
      bullishSignals++;
      signals.push('SMA20 above SMA50 (Golden Cross)');
    } else {
      bearishSignals++;
      signals.push('SMA20 below SMA50 (Death Cross)');
    }
  }
  
  // RSI Analysis
  if (rsi) {
    if (rsi > 70) {
      bearishSignals++;
      signals.push(`RSI Overbought (${rsi.toFixed(1)})`);
    } else if (rsi < 30) {
      bullishSignals++;
      signals.push(`RSI Oversold (${rsi.toFixed(1)})`);
    } else if (rsi > 50) {
      bullishSignals += 0.5;
      signals.push(`RSI Bullish (${rsi.toFixed(1)})`);
    } else {
      bearishSignals += 0.5;
      signals.push(`RSI Bearish (${rsi.toFixed(1)})`);
    }
  }
  
  // MACD Analysis
  if (macd) {
    if (macd.macd > macd.signal) {
      bullishSignals++;
      signals.push('MACD above Signal');
    } else {
      bearishSignals++;
      signals.push('MACD below Signal');
    }
  }
  
  // Determine overall trend
  const totalSignals = bullishSignals + bearishSignals;
  const bullishRatio = bullishSignals / totalSignals;
  
  let direction = 'neutral';
  let strength = 0;
  let confidence = 0;
  
  if (bullishRatio > 0.6) {
    direction = 'bullish';
    strength = Math.min((bullishRatio - 0.5) * 2, 1);
    confidence = Math.min(totalSignals / 5, 1);
  } else if (bullishRatio < 0.4) {
    direction = 'bearish';
    strength = Math.min((0.5 - bullishRatio) * 2, 1);
    confidence = Math.min(totalSignals / 5, 1);
  }
  
  return {
    direction,
    strength: Math.round(strength * 100),
    confidence: Math.round(confidence * 100),
    signals,
    indicators: {
      sma20,
      sma50,
      ema12,
      rsi,
      macd
    }
  };
};

/**
 * Calculate momentum based on price changes
 * @param {Array} priceHistory - Array of price objects
 * @param {number} lookback - Number of periods to look back
 * @returns {Object} - Momentum analysis
 */
export const calculateMomentum = (priceHistory, lookback = 10) => {
  if (!priceHistory || priceHistory.length < lookback + 1) {
    return {
      momentum: 0,
      velocity: 0,
      acceleration: 0
    };
  }
  
  const prices = priceHistory.map(item => item.price);
  const currentPrice = prices[prices.length - 1];
  const pastPrice = prices[prices.length - 1 - lookback];
  
  // Calculate momentum (rate of change)
  const momentum = ((currentPrice - pastPrice) / pastPrice) * 100;
  
  // Calculate velocity (average change per period)
  const velocity = momentum / lookback;
  
  // Calculate acceleration (change in velocity)
  let acceleration = 0;
  if (prices.length >= lookback * 2) {
    const midPrice = prices[prices.length - 1 - Math.floor(lookback / 2)];
    const earlyVelocity = ((midPrice - pastPrice) / pastPrice) * 100 / Math.floor(lookback / 2);
    const recentVelocity = ((currentPrice - midPrice) / midPrice) * 100 / Math.ceil(lookback / 2);
    acceleration = recentVelocity - earlyVelocity;
  }
  
  return {
    momentum: parseFloat(momentum.toFixed(4)),
    velocity: parseFloat(velocity.toFixed(4)),
    acceleration: parseFloat(acceleration.toFixed(4))
  };
};

/**
 * Generate intelligent trade suggestions based on analysis
 * @param {Object} trendAnalysis - Result from analyzeTrend
 * @param {Object} momentum - Result from calculateMomentum
 * @param {number} currentPrice - Current market price
 * @param {Object} userSetup - User's trading setup (risk, account size, etc.)
 * @returns {Object} - Trade suggestions
 */
export const generateTradeSuggestions = (trendAnalysis, momentum, currentPrice, userSetup) => {
  const suggestions = {
    action: 'wait',
    direction: null,
    entryPrice: null,
    stopLoss: null,
    takeProfit: null,
    lotSize: null,
    confidence: 0,
    reasoning: []
  };
  
  if (!trendAnalysis || !momentum || !currentPrice || !userSetup) {
    suggestions.reasoning.push('Insufficient data for analysis');
    return suggestions;
  }
  
  const { direction, strength, confidence } = trendAnalysis;
  const { momentum: momentumValue, velocity, acceleration } = momentum;
  
  // Minimum confidence threshold
  if (confidence < 60) {
    suggestions.reasoning.push('Market conditions unclear - waiting for better setup');
    return suggestions;
  }
  
  // Strong trend with good momentum
  if (strength > 70 && Math.abs(momentumValue) > 0.5) {
    suggestions.action = 'trade';
    suggestions.direction = direction;
    suggestions.confidence = Math.min(confidence + strength, 100);
    
    if (direction === 'bullish') {
      suggestions.entryPrice = currentPrice * 1.001; // Slight premium for market entry
      suggestions.stopLoss = currentPrice * 0.995; // 0.5% stop loss
      suggestions.takeProfit = currentPrice * 1.015; // 1.5% take profit (3:1 RR)
      suggestions.reasoning.push('Strong bullish trend with positive momentum');
    } else {
      suggestions.entryPrice = currentPrice * 0.999; // Slight discount for market entry
      suggestions.stopLoss = currentPrice * 1.005; // 0.5% stop loss
      suggestions.takeProfit = currentPrice * 0.985; // 1.5% take profit (3:1 RR)
      suggestions.reasoning.push('Strong bearish trend with negative momentum');
    }
    
    // Calculate position size based on risk management
    const accountSize = parseFloat(userSetup.accountSize) || 10000;
    const riskPercentage = parseFloat(userSetup.riskPercentage) || 1;
    const riskAmount = accountSize * (riskPercentage / 100);
    const stopLossDistance = Math.abs(suggestions.entryPrice - suggestions.stopLoss);
    const pipValue = userSetup.pipValue || 10;
    
    suggestions.lotSize = parseFloat((riskAmount / (stopLossDistance * pipValue * 100000)).toFixed(2));
    
    // Add momentum-based reasoning
    if (Math.abs(acceleration) > 0.1) {
      suggestions.reasoning.push(`Strong ${acceleration > 0 ? 'accelerating' : 'decelerating'} momentum`);
    }
    
  } else if (strength > 50 && Math.abs(momentumValue) > 0.2) {
    suggestions.action = 'consider';
    suggestions.direction = direction;
    suggestions.confidence = Math.round((confidence + strength) / 2);
    suggestions.reasoning.push('Moderate trend - consider smaller position or wait for confirmation');
    
  } else {
    suggestions.reasoning.push('Weak trend or momentum - avoid trading');
  }
  
  return suggestions;
};



/**
 * Analyze market structure (swing highs/lows)
 * @param {Array} prices - Array of price values
 * @returns {Object} - Market structure analysis
 */
export const analyzeMarketStructure = (prices) => {
  if (prices.length < 5) return { trend: 'neutral', swingHighs: [], swingLows: [] };

  const swingHighs = [];
  const swingLows = [];
  let trend = 'neutral';

  for (let i = 2; i < prices.length - 2; i++) {
    // Simple swing high: peak surrounded by lower prices
    if (prices[i] > prices[i - 1] && prices[i] > prices[i - 2] && prices[i] > prices[i + 1] && prices[i] > prices[i + 2]) {
      swingHighs.push({ price: prices[i], index: i });
    }
    // Simple swing low: trough surrounded by higher prices
    if (prices[i] < prices[i - 1] && prices[i] < prices[i - 2] && prices[i] < prices[i + 1] && prices[i] < prices[i + 2]) {
      swingLows.push({ price: prices[i], index: i });
    }
  }

  // Determine overall trend based on recent swing points
  if (swingHighs.length > 1 && swingLows.length > 1) {
    const lastHigh = swingHighs[swingHighs.length - 1];
    const secondLastHigh = swingHighs[swingHighs.length - 2];
    const lastLow = swingLows[swingLows.length - 1];
    const secondLastLow = swingLows[swingLows.length - 2];

    if (lastHigh.price > secondLastHigh.price && lastLow.price > secondLastLow.price) {
      trend = 'uptrend';
    } else if (lastHigh.price < secondLastHigh.price && lastLow.price < secondLastLow.price) {
      trend = 'downtrend';
    } else {
      trend = 'sideways';
    }
  }

  return { trend, swingHighs, swingLows };
};

/**
 * Detect common candlestick patterns
 * @param {Array} candles - Array of candle objects {open, high, low, close}
 * @returns {Array} - Detected patterns
 */
export const detectCandlestickPatterns = (candles) => {
  const patterns = [];
  if (candles.length < 2) return patterns;

  const lastCandle = candles[candles.length - 1];
  const secondLastCandle = candles[candles.length - 2];

  // Example: Bullish Engulfing
  if (secondLastCandle.close > secondLastCandle.open && // Previous candle is bearish
      lastCandle.close > lastCandle.open && // Current candle is bullish
      lastCandle.open < secondLastCandle.close && // Current opens below previous close
      lastCandle.close > secondLastCandle.open) { // Current closes above previous open
    patterns.push({ name: 'Bullish Engulfing', strength: 'strong', direction: 'bullish' });
  }

  // Example: Bearish Engulfing
  if (secondLastCandle.close < secondLastCandle.open && // Previous candle is bullish
      lastCandle.close < lastCandle.open && // Current candle is bearish
      lastCandle.open > secondLastCandle.close && // Current opens above previous close
      lastCandle.close < secondLastCandle.open) { // Current closes below previous open
    patterns.push({ name: 'Bearish Engulfing', strength: 'strong', direction: 'bearish' });
  }

  // Example: Hammer (simplified)
  if (lastCandle.close > lastCandle.open && // Bullish candle
      (lastCandle.high - lastCandle.close) > 2 * (lastCandle.close - lastCandle.open) && // Small body, long upper wick
      (lastCandle.open - lastCandle.low) < (lastCandle.close - lastCandle.open)) { // Small lower wick
    patterns.push({ name: 'Hammer', strength: 'moderate', direction: 'bullish' });
  }

  // Example: Shooting Star (simplified)
  if (lastCandle.close < lastCandle.open && // Bearish candle
      (lastCandle.high - lastCandle.open) > 2 * (lastCandle.open - lastCandle.close) && // Small body, long upper wick
      (lastCandle.close - lastCandle.low) < (lastCandle.open - lastCandle.close)) { // Small lower wick
    patterns.push({ name: 'Shooting Star', strength: 'moderate', direction: 'bearish' });
  }

  return patterns;
};

/**
 * Find potential support and resistance levels
 * @param {Array} prices - Array of price values
 * @param {number} sensitivity - How close prices need to be to form a level
 * @returns {Object} - Support and resistance levels
 */
export const findSupportResistance = (prices, sensitivity = 0.005) => {
  if (prices.length < 10) return { support: [], resistance: [] };

  const sortedPrices = [...prices].sort((a, b) => a - b);
  const minPrice = sortedPrices[0];
  const maxPrice = sortedPrices[sortedPrices.length - 1];
  const priceRange = maxPrice - minPrice;

  const support = [];
  const resistance = [];

  // Simple approach: group prices within a sensitivity range
  const levels = {};
  prices.forEach(price => {
    let found = false;
    for (const level in levels) {
      if (Math.abs(price - parseFloat(level)) < priceRange * sensitivity) {
        levels[level].count++;
        levels[level].sum += price;
        found = true;
        break;
      }
    }
    if (!found) {
      levels[price.toFixed(2)] = { count: 1, sum: price };
    }
  });

  for (const level in levels) {
    const avgPrice = levels[level].sum / levels[level].count;
    if (levels[level].count > prices.length * 0.1) { // Consider levels with at least 10% occurrences
      if (avgPrice < prices[prices.length - 1]) {
        support.push({ level: parseFloat(avgPrice.toFixed(2)), strength: levels[level].count });
      } else {
        resistance.push({ level: parseFloat(avgPrice.toFixed(2)), strength: levels[level].count });
      }
    }
  }

  // Sort by strength and take top N
  support.sort((a, b) => b.strength - a.strength);
  resistance.sort((a, b) => b.strength - a.strength);

  return {
    support: support.slice(0, 3),
    resistance: resistance.slice(0, 3),
  };
};



/**
 * Analyze news sentiment
 * @param {Array} newsData - Array of news articles
 * @returns {Object} - News sentiment analysis
 */
export const analyzeNewsSentiment = (newsData) => {
  if (!newsData || newsData.length === 0) {
    return { overall: 'neutral', score: 0, confidence: 0, factors: [] };
  }

  let totalScore = 0;
  let totalConfidence = 0;
  const factors = [];

  newsData.forEach(article => {
    let score = 0;
    if (article.sentiment > 0.5) {
      score = 1; // Bullish
    } else if (article.sentiment < -0.5) {
      score = -1; // Bearish
    }

    totalScore += score * article.impact;
    totalConfidence += article.impact;
    factors.push({ headline: article.headline, sentiment: score, impact: article.impact });
  });

  const avgScore = totalScore / totalConfidence;
  let overall = 'neutral';
  if (avgScore > 0.3) {
    overall = 'bullish';
  } else if (avgScore < -0.3) {
    overall = 'bearish';
  }

  return {
    overall,
    score: avgScore,
    confidence: Math.min(totalConfidence, 100),
    factors,
  };
};

