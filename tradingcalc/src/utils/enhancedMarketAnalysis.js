import { calculateSMA, calculateEMA, calculateRSI, calculateMACD, calculateBollingerBands, detectCandlestickPatterns, findSupportResistance, analyzeMarketStructure } from './marketAnalysis';

// Function to simulate historical data for different timeframes
const generateHistoricalData = (basePrice, numPoints, intervalMinutes) => {
  const data = [];
  for (let i = numPoints - 1; i >= 0; i--) {
    const randomChange = (Math.random() - 0.5) * 0.005; // Larger random change
    const trendFactor = i * 0.00005; // Slight upward trend
    const price = basePrice * (1 + randomChange + trendFactor);
    data.push({
      price: price,
      close: price,
      open: price * (1 + (Math.random() - 0.5) * 0.0002),
      high: price * (1 + Math.random() * 0.0003),
      low: price * (1 - Math.random() * 0.0003),
      timestamp: Date.now() - (i * intervalMinutes * 60000)
    });
  }
  return data;
};

// Enhanced Trend Analysis with Multiple Timeframes, Historical Data, and News Integration
export const enhancedTrendAnalysis = (currentPrice, newsData, selectedTimeframe) => {
  // Simulate historical data for different timeframes
  const historicalData = {
    '1m': generateHistoricalData(currentPrice, 100, 1),
    '5m': generateHistoricalData(currentPrice, 100, 5),
    '15m': generateHistoricalData(currentPrice, 100, 15),
    '30m': generateHistoricalData(currentPrice, 100, 30),
    '1h': generateHistoricalData(currentPrice, 100, 60),
    '4h': generateHistoricalData(currentPrice, 100, 240),
    '1d': generateHistoricalData(currentPrice, 100, 1440),
    '1w': generateHistoricalData(currentPrice, 100, 10080),
    '1M': generateHistoricalData(currentPrice, 100, 43200),
  };

  const prices = historicalData[selectedTimeframe].map(d => d.close || d.price);
  const ohlcData = historicalData[selectedTimeframe];

  // Technical Analysis
  const sma20 = calculateSMA(prices, 20);
  const sma50 = calculateSMA(prices, 50);
  const ema12 = calculateEMA(prices, 12);
  const rsi = calculateRSI(prices);
  const macd = calculateMACD(prices);
  const bollinger = calculateBollingerBands(prices);

  // Market Structure
  const structure = analyzeMarketStructure(prices, selectedTimeframe);

  // News Sentiment
  const sentiment = analyzeNewsSentiment(newsData);

  // Pattern Recognition
  const patterns = detectCandlestickPatterns(ohlcData);

  // Combine all factors for overall analysis
  let technicalScore = 0;
  let confidence = 0;
  const factors = [];
  const detailedAnalysis = {};

  // SMA Analysis
  if (sma20 && sma50) {
    if (sma20 > sma50) {
      technicalScore += 1;
      factors.push('SMA 20 > SMA 50 (Bullish)');
      detailedAnalysis.sma = 'Bullish crossover: Short-term average above long-term average.';
    } else {
      technicalScore -= 1;
      factors.push('SMA 20 < SMA 50 (Bearish)');
      detailedAnalysis.sma = 'Bearish crossover: Short-term average below long-term average.';
    }
    confidence += 15;
  }

  // RSI Analysis
  if (rsi) {
    if (rsi > 70) {
      technicalScore -= 0.5;
      factors.push('RSI Overbought (Bearish)');
      detailedAnalysis.rsi = 'Overbought: Price may be due for a correction.';
    } else if (rsi < 30) {
      technicalScore += 0.5;
      factors.push('RSI Oversold (Bullish)');
      detailedAnalysis.rsi = 'Oversold: Price may be due for a rebound.';
    } else {
      detailedAnalysis.rsi = 'Neutral: RSI is within typical range.';
    }
    confidence += 10;
  }

  // MACD Analysis
  if (macd && macd.macd > 0) {
    technicalScore += 0.5;
    factors.push('MACD Positive (Bullish)');
    detailedAnalysis.macd = 'Bullish momentum: MACD line is above zero.';
    confidence += 10;
  } else if (macd && macd.macd < 0) {
    technicalScore -= 0.5;
    factors.push('MACD Negative (Bearish)');
    detailedAnalysis.macd = 'Bearish momentum: MACD line is below zero.';
    confidence += 10;
  } else {
    detailedAnalysis.macd = 'Neutral: MACD is near zero.';
  }

  // Bollinger Bands Analysis
  if (bollinger && prices.length > 0) {
    const lastPrice = prices[prices.length - 1];
    if (lastPrice > bollinger.upper) {
      technicalScore -= 0.7;
      factors.push('Price above Upper Bollinger Band (Overextended)');
      detailedAnalysis.bollinger = 'Overextended: Price is above upper band, potential reversal or strong trend continuation.';
    } else if (lastPrice < bollinger.lower) {
      technicalScore += 0.7;
      factors.push('Price below Lower Bollinger Band (Underextended)');
      detailedAnalysis.bollinger = 'Underextended: Price is below lower band, potential reversal or strong trend continuation.';
    } else {
      detailedAnalysis.bollinger = 'Neutral: Price is within Bollinger Bands.';
    }
    confidence += 10;
  }

  // Market Structure Analysis
  if (structure.structure === 'uptrend') {
    technicalScore += 1.5;
    factors.push('Market Structure: Clear Uptrend (Higher Highs, Higher Lows)');
    detailedAnalysis.structure = 'Uptrend: Consistent higher highs and higher lows.';
    confidence += 20;
  } else if (structure.structure === 'downtrend') {
    technicalScore -= 1.5;
    factors.push('Market Structure: Clear Downtrend (Lower Highs, Lower Lows)');
    detailedAnalysis.structure = 'Downtrend: Consistent lower highs and lower lows.';
    confidence += 20;
  } else {
    factors.push('Market Structure: Sideways/Consolidation');
    detailedAnalysis.structure = 'Sideways: Price is consolidating, awaiting a breakout.';
    confidence += 10;
  }

  // Support/Resistance Analysis
  const keyLevels = findSupportResistance(prices);
  if (keyLevels.length > 0) {
    detailedAnalysis.keyLevels = keyLevels.map(level => `${level.type.charAt(0).toUpperCase() + level.type.slice(1)} at ${level.level.toFixed(currencyDefaults[ohlcData[0].symbol]?.entry.toString().split('.')[1]?.length || 5)} (Strength: ${level.strength})`).join(', ');
    confidence += 10;
  }

  // News Sentiment Integration
  if (sentiment.overall === 'bullish') {
    technicalScore += sentiment.score * 0.5; // Scale news impact
    factors.push(`News Sentiment: Bullish (${sentiment.confidence.toFixed(0)}% confidence)`);
    detailedAnalysis.newsSentiment = `Overall bullish sentiment from recent news (${sentiment.factors.map(f => f.headline).join(', ')}).`;
    confidence += sentiment.confidence * 0.3;
  } else if (sentiment.overall === 'bearish') {
    technicalScore += sentiment.score * 0.5; // sentiment.score is already negative for bearish
    factors.push(`News Sentiment: Bearish (${sentiment.confidence.toFixed(0)}% confidence)`);
    detailedAnalysis.newsSentiment = `Overall bearish sentiment from recent news (${sentiment.factors.map(f => f.headline).join(', ')}).`;
    confidence += sentiment.confidence * 0.3;
  } else {
    detailedAnalysis.newsSentiment = 'Neutral news sentiment.';
  }

  // Pattern Analysis
  if (patterns.length > 0) {
    patterns.forEach(pattern => {
      if (pattern.type.includes('bullish')) {
        technicalScore += pattern.strength === 'strong' ? 0.8 : 0.4;
        factors.push(`Pattern: ${pattern.name} (Bullish)`);
      } else if (pattern.type.includes('bearish')) {
        technicalScore -= pattern.strength === 'strong' ? 0.8 : 0.4;
        factors.push(`Pattern: ${pattern.name} (Bearish)`);
      }
    });
    detailedAnalysis.patterns = patterns.map(p => `${p.name} (${p.type})`).join(', ');
    confidence += 10;
  } else {
    detailedAnalysis.patterns = 'No significant candlestick patterns detected.';
  }

  // Determine overall trend
  let trend = 'SIDEWAYS';
  let strength = Math.abs(technicalScore) * 10;

  if (technicalScore > 1.5) {
    trend = 'BULLISH';
  } else if (technicalScore < -1.5) {
    trend = 'BEARISH';
  }

  // Generate trading suggestion
  let suggestion = 'WAIT';
  let suggestionReason = 'Market conditions are unclear or conflicting signals.';

  if (trend === 'BULLISH' && confidence > 70) {
    suggestion = 'CONSIDER BUY';
    suggestionReason = 'Strong bullish signals across multiple indicators, market structure, and news sentiment. Look for long opportunities.';
  } else if (trend === 'BEARISH' && confidence > 70) {
    suggestion = 'CONSIDER SELL';
    suggestionReason = 'Strong bearish signals across multiple indicators, market structure, and news sentiment. Look for short opportunities.';
  } else if (confidence < 50) {
    suggestion = 'WAIT';
    suggestionReason = 'Low confidence in current market direction or mixed signals. Consider waiting for clearer confirmation.';
  } else if (trend === 'SIDEWAYS' && confidence > 60) {
    suggestion = 'CONSIDER RANGE TRADING';
    suggestionReason = 'Market is consolidating. Look for opportunities to buy at support and sell at resistance.';
  }

  return {
    trend,
    strength: Math.min(strength, 100),
    confidence: Math.min(confidence, 100),
    suggestion,
    suggestionReason,
    factors,
    technicalIndicators: {
      sma20,
      sma50,
      ema12,
      rsi,
      macd,
      bollinger
    },
    marketStructure: structure,
    newsSentiment: sentiment,
    patterns,
    score: technicalScore,
    detailedAnalysis // New field for detailed explanations
  };
};

// Risk Assessment based on Market Conditions
export const assessMarketRisk = (analysis, volatility) => {
  let riskLevel = 'MEDIUM';
  let riskScore = 50;
  const riskFactors = [];

  // Volatility assessment
  if (volatility > 0.005) {
    riskScore += 20;
    riskFactors.push('High volatility detected: Increased risk of large price swings.');
  } else if (volatility < 0.001) {
    riskScore -= 10;
    riskFactors.push('Low volatility environment: Potential for sudden breakouts or whipsaws.');
  }

  // News sentiment risk
  if (analysis.newsSentiment.confidence > 80) {
    if (analysis.newsSentiment.overall === 'bearish') {
      riskScore += 15;
      riskFactors.push('Strong negative news sentiment: Increased downside risk.');
    } else if (analysis.newsSentiment.overall === 'bullish') {
      riskScore -= 5;
      riskFactors.push('Strong positive news sentiment: Potential for rapid upside movement.');
    }
  }

  // Technical analysis confidence
  if (analysis.confidence < 50) {
    riskScore += 15;
    riskFactors.push('Low technical analysis confidence: Mixed signals, higher uncertainty.');
  }

  // Market structure risk
  if (analysis.marketStructure.structure === 'expanding') {
    riskScore += 10;
    riskFactors.push('Expanding market structure: Increased volatility and unpredictable movements.');
  } else if (analysis.marketStructure.structure === 'contracting') {
    riskScore -= 5;
    riskFactors.push('Contracting market structure: Potential for strong breakout, but also false moves.');
  }

  // Pattern risk
  const reversalPatterns = analysis.patterns.filter(p => p.type.includes('reversal'));
  if (reversalPatterns.length > 0) {
    riskScore += 10;
    riskFactors.push(`Reversal patterns detected (${reversalPatterns.map(p => p.name).join(', ')}): Market may change direction.`);
  }

  // Determine risk level
  if (riskScore > 75) {
    riskLevel = 'VERY HIGH';
  } else if (riskScore > 60) {
    riskLevel = 'HIGH';
  } else if (riskScore < 30) {
    riskLevel = 'LOW';
  }

  return {
    level: riskLevel,
    score: Math.min(riskScore, 100),
    factors: riskFactors
  };
};

