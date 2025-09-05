
import React, { useState, useEffect } from 'react';
import { useRealTimePrice, useMarketAnalysis, useMarketNews } from '../hooks/useRealTimePrice';
import { analyzeTrend, calculateMomentum, generateTradeSuggestions } from '../utils/marketAnalysis';
import { enhancedTrendAnalysis, assessMarketRisk } from '../utils/enhancedMarketAnalysis';
import AdvancedAIAnalysis from './AdvancedAIAnalysis';
import MarketClock from './MarketClock';
import Disclaimer from './Disclaimer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { 
  Calculator, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Target,
  BarChart3,
  Lightbulb,
  RefreshCw,
  Zap,
  Shield,
  Activity,
  Brain,
  Info
} from 'lucide-react';

// Default trade parameters for currency pairs
const currencyDefaults = {
  // Major Forex Pairs
  'EURUSD': { entry: 1.08500, stopLoss: 1.08000, takeProfit: 1.09500, pipValue: 10, spread: 1.2, volatility: 'medium' },
  'GBPUSD': { entry: 1.26500, stopLoss: 1.26000, takeProfit: 1.27500, pipValue: 10, spread: 1.5, volatility: 'high' },
  'USDJPY': { entry: 149.50, stopLoss: 149.00, takeProfit: 150.50, pipValue: 6.68, spread: 1.0, volatility: 'medium' },
  'USDCHF': { entry: 0.89500, stopLoss: 0.89000, takeProfit: 0.90500, pipValue: 11.17, spread: 1.8, volatility: 'low' },
  'AUDUSD': { entry: 0.66500, stopLoss: 0.66000, takeProfit: 0.67500, pipValue: 10, spread: 1.4, volatility: 'medium' },
  'USDCAD': { entry: 1.36500, stopLoss: 1.36000, takeProfit: 1.37500, pipValue: 7.33, spread: 1.6, volatility: 'medium' },
  'NZDUSD': { entry: 0.60500, stopLoss: 0.60000, takeProfit: 0.61500, pipValue: 10, spread: 2.0, volatility: 'high' },
  
  // Cross Pairs
  'EURJPY': { entry: 162.50, stopLoss: 162.00, takeProfit: 163.50, pipValue: 6.68, spread: 1.8, volatility: 'high' },
  'GBPJPY': { entry: 189.50, stopLoss: 189.00, takeProfit: 190.50, pipValue: 6.68, spread: 2.5, volatility: 'very_high' },
  'EURGBP': { entry: 0.85500, stopLoss: 0.85000, takeProfit: 0.86500, pipValue: 12.65, spread: 1.5, volatility: 'low' },
  'AUDCAD': { entry: 0.91200, stopLoss: 0.90700, takeProfit: 0.92200, pipValue: 7.33, spread: 2.0, volatility: 'medium' },
  'AUDCHF': { entry: 0.59500, stopLoss: 0.59000, takeProfit: 0.60500, pipValue: 11.17, spread: 2.2, volatility: 'medium' },
  'AUDJPY': { entry: 99.50, stopLoss: 99.00, takeProfit: 100.50, pipValue: 6.68, spread: 1.8, volatility: 'high' },
  'CADJPY': { entry: 109.50, stopLoss: 109.00, takeProfit: 110.50, pipValue: 6.68, spread: 2.0, volatility: 'medium' },
  'CHFJPY': { entry: 167.00, stopLoss: 166.50, takeProfit: 168.00, pipValue: 6.68, spread: 2.5, volatility: 'high' },
  'EURAUD': { entry: 1.63000, stopLoss: 1.62000, takeProfit: 1.64500, pipValue: 10, spread: 2.5, volatility: 'medium' },
  'EURCAD': { entry: 1.48000, stopLoss: 1.47000, takeProfit: 1.49500, pipValue: 7.33, spread: 2.2, volatility: 'medium' },
  'EURCHF': { entry: 0.97000, stopLoss: 0.96500, takeProfit: 0.98000, pipValue: 11.17, spread: 1.8, volatility: 'low' },
  'GBPAUD': { entry: 1.90000, stopLoss: 1.89000, takeProfit: 1.92000, pipValue: 10, spread: 3.0, volatility: 'high' },
  'GBPCAD': { entry: 1.72500, stopLoss: 1.71500, takeProfit: 1.74000, pipValue: 7.33, spread: 2.8, volatility: 'high' },
  'GBPCHF': { entry: 1.13000, stopLoss: 1.12000, takeProfit: 1.14500, pipValue: 11.17, spread: 2.5, volatility: 'high' },
  'GBPNZD': { entry: 2.09000, stopLoss: 2.07500, takeProfit: 2.11500, pipValue: 10, spread: 4.0, volatility: 'very_high' },
  'NZDCAD': { entry: 0.82500, stopLoss: 0.82000, takeProfit: 0.83500, pipValue: 7.33, spread: 2.5, volatility: 'medium' },
  'NZDCHF': { entry: 0.54000, stopLoss: 0.53500, takeProfit: 0.55000, pipValue: 11.17, spread: 2.8, volatility: 'medium' },
  'NZDJPY': { entry: 90.50, stopLoss: 90.00, takeProfit: 91.50, pipValue: 6.68, spread: 2.2, volatility: 'high' },
  
  // Major Indices (point values vary by broker)
  'NAS100': { entry: 16500.0, stopLoss: 16450.0, takeProfit: 16600.0, pipValue: 1, spread: 2.0, volatility: 'very_high' },
  'SPX500': { entry: 4500.0, stopLoss: 4480.0, takeProfit: 4540.0, pipValue: 1, spread: 0.5, volatility: 'high' },
  'US30': { entry: 35000.0, stopLoss: 34900.0, takeProfit: 35200.0, pipValue: 1, spread: 3.0, volatility: 'high' },
  'GER40': { entry: 16800.0, stopLoss: 16750.0, takeProfit: 16900.0, pipValue: 1, spread: 1.5, volatility: 'medium' },
  'UK100': { entry: 7600.0, stopLoss: 7570.0, takeProfit: 7650.0, pipValue: 1, spread: 1.0, volatility: 'medium' },
  'FRA40': { entry: 7400.0, stopLoss: 7370.0, takeProfit: 7450.0, pipValue: 1, spread: 1.5, volatility: 'medium' },
  'JPN225': { entry: 33000.0, stopLoss: 32900.0, takeProfit: 33200.0, pipValue: 1, spread: 8.0, volatility: 'medium' },
  'AUS200': { entry: 7300.0, stopLoss: 7270.0, takeProfit: 7350.0, pipValue: 1, spread: 2.0, volatility: 'medium' },
  'HK50': { entry: 17500.0, stopLoss: 17450.0, takeProfit: 17600.0, pipValue: 1, spread: 10.0, volatility: 'high' },
  'EUSTX50': { entry: 4400.0, stopLoss: 4380.0, takeProfit: 4440.0, pipValue: 1, spread: 1.5, volatility: 'medium' },
  
  // Commodities
  'XAUUSD': { entry: 2050.00, stopLoss: 2040.00, takeProfit: 2070.00, pipValue: 1, spread: 0.3, volatility: 'high' },
  'XAGUSD': { entry: 24.50, stopLoss: 24.20, takeProfit: 25.00, pipValue: 1, spread: 0.03, volatility: 'very_high' },
  'USOIL': { entry: 75.00, stopLoss: 74.00, takeProfit: 77.00, pipValue: 1, spread: 0.05, volatility: 'very_high' },
  'UKOIL': { entry: 79.00, stopLoss: 78.00, takeProfit: 81.00, pipValue: 1, spread: 0.05, volatility: 'very_high' },
  'NATGAS': { entry: 2.80, stopLoss: 2.70, takeProfit: 2.95, pipValue: 1, spread: 0.01, volatility: 'very_high' },
  
  // Crypto (if supported)
  'BTCUSD': { entry: 43000.0, stopLoss: 42000.0, takeProfit: 45000.0, pipValue: 1, spread: 50.0, volatility: 'very_high' },
  'ETHUSD': { entry: 2600.0, stopLoss: 2550.0, takeProfit: 2700.0, pipValue: 1, spread: 5.0, volatility: 'very_high' }
};

// Risk management suggestions based on pair volatility
const riskSuggestions = {
  'low': { maxRisk: 2.5, suggestedRisk: 1.5, stopLossPips: 30, takeProfitRatio: 1.5 },
  'medium': { maxRisk: 2.0, suggestedRisk: 1.0, stopLossPips: 40, takeProfitRatio: 2.0 },
  'high': { maxRisk: 1.5, suggestedRisk: 0.75, stopLossPips: 50, takeProfitRatio: 2.5 },
  'very_high': { maxRisk: 1.0, suggestedRisk: 0.5, stopLossPips: 60, takeProfitRatio: 3.0 }};

const CompactTradingCalculator = () => {
  // State for all trading parameters
  const [accountType, setAccountType] = useState('funded');
  const [propFirm, setPropFirm] = useState('fivepercenters');
  const [challengePhase, setChallengePhase] = useState('phase1');
  const [accountSize, setAccountSize] = useState('10000');
  const [currentEquity, setCurrentEquity] = useState('');
  const [currencyPair, setCurrencyPair] = useState('EURUSD');
  const [riskPercentage, setRiskPercentage] = useState('1');
  const [entryPrice, setEntryPrice] = useState('');
  const [stopLoss, setStopLoss] = useState('');
  const [takeProfit, setTakeProfit] = useState('');
  
  // New MT5-like fields
  const [orderType, setOrderType] = useState('market');
  const [lotSize, setLotSize] = useState('');
  const [volume, setVolume] = useState('0.01');
  const [pendingPrice, setPendingPrice] = useState('');
  const [expiration, setExpiration] = useState('');
  const [comment, setComment] = useState('');
  const [magicNumber, setMagicNumber] = useState('');
  
  // Enhanced equity tracking
  const [dailyStartingBalance, setDailyStartingBalance] = useState('');
  const [peakBalance, setPeakBalance] = useState('');

  // Real-time price fetching
  const { price: realTimePrice, priceData, loading: priceLoading, error: priceError } = useRealTimePrice(currencyPair);
  
  // Market analysis and news
  const { analysis: marketAnalysisData, loading: analysisLoading } = useMarketAnalysis(currencyPair);
  const { news: marketNews, loading: newsLoading } = useMarketNews();
  
  // Timeframe and analysis state
  const [selectedTimeframe, setSelectedTimeframe] = useState('1h');
  const [marketAnalysis, setMarketAnalysis] = useState(null);
  const [tradeSuggestions, setTradeSuggestions] = useState(null);

  // Auto-load defaults when currency pair changes
  const handleCurrencyPairChange = (newPair) => {
    setCurrencyPair(newPair);
    const defaults = currencyDefaults[newPair];
    if (defaults) {
      setEntryPrice(defaults.entry.toString());
      setStopLoss(defaults.stopLoss.toString());
      setTakeProfit(defaults.takeProfit.toString());
      
      // Auto-suggest risk based on volatility
      const suggestion = riskSuggestions[defaults.volatility];
      if (suggestion) {
        setRiskPercentage(suggestion.suggestedRisk.toString());
      }
    }
  };

  // Initialize defaults on component mount
  useEffect(() => {
    const defaults = currencyDefaults[currencyPair];
    if (defaults && !entryPrice) {
      setEntryPrice(defaults.entry.toString());
      setStopLoss(defaults.stopLoss.toString());
      setTakeProfit(defaults.takeProfit.toString());
    }
    
    // Set default equity to account size if not set
    if (!currentEquity && accountSize) {
      setCurrentEquity(accountSize);
      setDailyStartingBalance(accountSize);
      setPeakBalance(accountSize);
    }
  }, [currencyPair, accountSize]);

  // Market analysis and intelligent suggestions using real API data
  useEffect(() => {
    const performAnalysis = async () => {
      if (!marketAnalysisData?.analysis || !currencyPair) return;
      
      const analysis = marketAnalysisData.analysis;
      const timeframeData = marketAnalysisData.timeframe_data;
      
      // Generate enhanced trade suggestions based on real market data
      const userSetup = {
        accountSize: parseFloat(accountSize) || 10000,
        riskPercentage: parseFloat(riskPercentage) || 1,
        pipValue: currencyDefaults[currencyPair]?.pipValue || 10,
        currentEquity: parseFloat(currentEquity) || parseFloat(accountSize) || 10000
      };
      
      // Calculate suggested lot size based on risk and analysis
      const riskAmount = userSetup.currentEquity * (userSetup.riskPercentage / 100);
      const suggestedLotSize = analysis.pip_target > 0 ? 
        (riskAmount / (analysis.pip_target * userSetup.pipValue)).toFixed(2) : '0.01';
      
      const suggestions = {
        direction: analysis.suggested_action === 'buy' ? 'bullish' : 
                  analysis.suggested_action === 'sell' ? 'bearish' : 'neutral',
        confidence: analysis.confidence,
        entryPrice: analysis.entry_price,
        stopLoss: analysis.stop_loss,
        takeProfit: analysis.take_profit,
        lotSize: suggestedLotSize,
        reasoning: analysis.reasoning || [],
        riskLevel: analysis.risk_level,
        action: analysis.confidence > 70 ? 'trade' : 
               analysis.confidence > 50 ? 'consider' : 'wait'
      };
      
      setTradeSuggestions(suggestions);
      
      // Set market analysis for display
      setMarketAnalysis({
        direction: suggestions.direction,
        strength: analysis.confidence,
        confidence: analysis.confidence,
        timeframe_analysis: timeframeData
      });
    };
    
    if (marketAnalysisData) {
      performAnalysis();
    }
    
  }, [marketAnalysisData, currencyPair, accountSize, riskPercentage, currentEquity]);

  // Results and Analysis State
  const [results, setResults] = useState({
    positionSize: 0,
    riskAmount: 0,
    potentialProfit: 0,
    riskRewardRatio: 0,
    stopLossPips: 0,
    takeProfitPips: 0,
    pipValue: 0,
    lotSize: 0,
    dailyDrawdown: 0,
    maxDrawdown: 0,
    profitTargetProgress: 0
  });

  const [liveAnalysis, setLiveAnalysis] = useState({
    riskLevel: 'Low',
    riskColor: 'text-green-600',
    accountHealth: 'Excellent',
    healthColor: 'text-green-600',
    suggestions: [],
    warnings: [],
    missingFields: []
  });

  // Prop firm configurations with accurate data
  const propFirmRules = {
    fivepercenters: {
      phase1: { profitTarget: 8, dailyLoss: 5, maxLoss: 10, consistency: true },
      phase2: { profitTarget: 5, dailyLoss: 5, maxLoss: 10, consistency: true },
      funded: { profitTarget: 10, dailyLoss: 5, maxLoss: 10, consistency: true }
    },
    topstep: {
      phase1: { profitTarget: 6, dailyLoss: 0, maxLoss: 4, consistency: false }, // No daily loss limit as of Aug 2024
      funded: { profitTarget: 0, dailyLoss: 0, maxLoss: 4, consistency: false }
    },
    ftmo: {
      phase1: { profitTarget: 10, dailyLoss: 5, maxLoss: 10, consistency: false },
      phase2: { profitTarget: 5, dailyLoss: 5, maxLoss: 10, consistency: false },
      funded: { profitTarget: 0, dailyLoss: 5, maxLoss: 10, consistency: false }
    }
  };

  const accountConfigs = {
    fivepercenters: {
      '5000': { profitTarget: 400, stopout: 4500, dailyLoss: 4750, maxLoss: 4500 },
      '10000': { profitTarget: 800, stopout: 9000, dailyLoss: 9500, maxLoss: 9000 },
      '20000': { profitTarget: 1600, stopout: 18000, dailyLoss: 19000, maxLoss: 18000 },
      '60000': { profitTarget: 4800, stopout: 54000, dailyLoss: 57000, maxLoss: 54000 },
      '100000': { profitTarget: 8000, stopout: 90000, dailyLoss: 95000, maxLoss: 90000 }
    },
    topstep: {
      '50000': { profitTarget: 3000, stopout: 48000, dailyLoss: 50000, maxLoss: 48000 }, // No daily loss
      '100000': { profitTarget: 6000, stopout: 96000, dailyLoss: 100000, maxLoss: 96000 }, // No daily loss
      '150000': { profitTarget: 9000, stopout: 144000, dailyLoss: 150000, maxLoss: 144000 } // No daily loss
    },
    ftmo: {
      '10000': { profitTarget: 1000, stopout: 9000, dailyLoss: 9500, maxLoss: 9000 },
      '25000': { profitTarget: 2500, stopout: 22500, dailyLoss: 23750, maxLoss: 22500 },
      '50000': { profitTarget: 5000, stopout: 45000, dailyLoss: 47500, maxLoss: 45000 },
      '100000': { profitTarget: 10000, stopout: 90000, dailyLoss: 95000, maxLoss: 90000 }
    }
  };

  const currencyPairs = [
    // Major Forex Pairs
    { symbol: 'EURUSD', name: 'EUR/USD', category: 'Forex' },
    { symbol: 'GBPUSD', name: 'GBP/USD', category: 'Forex' },
    { symbol: 'USDJPY', name: 'USD/JPY', category: 'Forex' },
    { symbol: 'USDCHF', name: 'USD/CHF', category: 'Forex' },
    { symbol: 'AUDUSD', name: 'AUD/USD', category: 'Forex' },
    { symbol: 'USDCAD', name: 'USD/CAD', category: 'Forex' },
    { symbol: 'NZDUSD', name: 'NZD/USD', category: 'Forex' },
    
    // Cross Pairs
    { symbol: 'EURJPY', name: 'EUR/JPY', category: 'Forex' },
    { symbol: 'GBPJPY', name: 'GBP/JPY', category: 'Forex' },
    { symbol: 'EURGBP', name: 'EUR/GBP', category: 'Forex' },
    { symbol: 'AUDCAD', name: 'AUD/CAD', category: 'Forex' },
    { symbol: 'AUDCHF', name: 'AUD/CHF', category: 'Forex' },
    { symbol: 'AUDJPY', name: 'AUD/JPY', category: 'Forex' },
    { symbol: 'CADJPY', name: 'CAD/JPY', category: 'Forex' },
    { symbol: 'CHFJPY', name: 'CHF/JPY', category: 'Forex' },
    { symbol: 'EURAUD', name: 'EUR/AUD', category: 'Forex' },
    { symbol: 'EURCAD', name: 'EUR/CAD', category: 'Forex' },
    { symbol: 'EURCHF', name: 'EUR/CHF', category: 'Forex' },
    { symbol: 'GBPAUD', name: 'GBP/AUD', category: 'Forex' },
    { symbol: 'GBPCAD', name: 'GBP/CAD', category: 'Forex' },
    { symbol: 'GBPCHF', name: 'GBP/CHF', category: 'Forex' },
    { symbol: 'GBPNZD', name: 'GBP/NZD', category: 'Forex' },
    { symbol: 'NZDCAD', name: 'NZD/CAD', category: 'Forex' },
    { symbol: 'NZDCHF', name: 'NZD/CHF', category: 'Forex' },
    { symbol: 'NZDJPY', name: 'NZD/JPY', category: 'Forex' },
    
    // Major Indices
    { symbol: 'NAS100', name: 'NASDAQ 100', category: 'Indices' },
    { symbol: 'SPX500', name: 'S&P 500', category: 'Indices' },
    { symbol: 'US30', name: 'Dow Jones 30', category: 'Indices' },
    { symbol: 'GER40', name: 'DAX 40', category: 'Indices' },
    { symbol: 'UK100', name: 'FTSE 100', category: 'Indices' },
    { symbol: 'FRA40', name: 'CAC 40', category: 'Indices' },
    { symbol: 'JPN225', name: 'Nikkei 225', category: 'Indices' },
    { symbol: 'AUS200', name: 'ASX 200', category: 'Indices' },
    { symbol: 'HK50', name: 'Hang Seng 50', category: 'Indices' },
    { symbol: 'EUSTX50', name: 'Euro Stoxx 50', category: 'Indices' },
    
    // Commodities
    { symbol: 'XAUUSD', name: 'Gold', category: 'Commodities' },
    { symbol: 'XAGUSD', name: 'Silver', category: 'Commodities' },
    { symbol: 'USOIL', name: 'Crude Oil', category: 'Commodities' },
    { symbol: 'UKOIL', name: 'Brent Oil', category: 'Commodities' },
    { symbol: 'NATGAS', name: 'Natural Gas', category: 'Commodities' },
    
    // Crypto (if supported by prop firm)
    { symbol: 'BTCUSD', name: 'Bitcoin', category: 'Crypto' },
    { symbol: 'ETHUSD', name: 'Ethereum', category: 'Crypto' }
  ];

  // Auto-configuration effect for funded accounts
  useEffect(() => {
    if (accountType === 'funded' && propFirm && accountSize) {
      const config = accountConfigs[propFirm]?.[accountSize];
      if (config) {
        // Initialize equity values based on account size for funded accounts
        // Ensure these are set only once or when accountSize/propFirm changes meaningfully
        if (currentEquity === '' || parseFloat(currentEquity) === 0) {
          setCurrentEquity(accountSize);
        }
        if (dailyStartingBalance === '' || parseFloat(dailyStartingBalance) === 0) {
          setDailyStartingBalance(accountSize);
        }
        if (peakBalance === '' || parseFloat(peakBalance) === 0) {
          setPeakBalance(accountSize);
        }
      }
    } else if (accountType === 'standard') {
      // Reset these for standard accounts if they were set by funded logic
      if (currentEquity !== accountSize) {
        setCurrentEquity(accountSize);
      }
      if (dailyStartingBalance !== accountSize) {
        setDailyStartingBalance(accountSize);
      }
      if (peakBalance !== accountSize) {
        setPeakBalance(accountSize);
      }
    }
  }, [accountType, propFirm, accountSize]);

  // Real-time calculation effect
  useEffect(() => {
    calculateResults();
    updateLiveAnalysis();
  }, [entryPrice, stopLoss, takeProfit, riskPercentage, currentEquity, 
      dailyStartingBalance, peakBalance, currencyPair, 
      accountType, propFirm, challengePhase, accountSize]);

  const calculatePipValue = (pair, accountSize) => {
    // Use the pip value from currencyDefaults if available
    const defaults = currencyDefaults[pair];
    if (defaults && defaults.pipValue) {
      return defaults.pipValue;
    }
    
    // Fallback pip values for common pairs
    const basePipValues = {
      'EURUSD': 10, 'GBPUSD': 10, 'AUDUSD': 10, 'NZDUSD': 10,
      'USDJPY': 9.09, 'USDCHF': 10.20, 'USDCAD': 7.69,
      'EURJPY': 9.09, 'GBPJPY': 9.09, 'EURGBP': 12.50,
      // Indices and commodities typically use 1 point = 1 unit, but can vary by broker
      // For NAS100, SPX500, US30, GER40, a common pip value is 0.1 or 1 per lot
      'NAS100': 0.1, 'SPX500': 0.1, 'US30': 0.1, 'GER40': 0.1,
      'UK100': 0.1, 'JPN225': 0.1, 'AUS200': 0.1,
      // Commodities
      'XAUUSD': 1, 'XAGUSD': 1, 'USOIL': 1, 'UKOIL': 1, 'NATGAS': 1,
      // Cryptocurrencies
      'BTCUSD': 1, 'ETHUSD': 1
    };
    return basePipValues[pair] || 1; // Default to 1 for unknown pairs
  };

  const calculateResults = () => {
    const entry = entryPrice ? parseFloat(entryPrice) : 0;
    const sl = stopLoss ? parseFloat(stopLoss) : 0;
    const tp = takeProfit ? parseFloat(takeProfit) : 0;
    const risk = riskPercentage ? parseFloat(riskPercentage) : 1;
    
    // EQUITY PRIORITY: Use current equity as the primary balance for calculations
    const equity = currentEquity ? parseFloat(currentEquity) : parseFloat(accountSize);
    const balance = equity; // Equity takes priority over account balance
    
    const startingBalance = parseFloat(accountSize);
    const dailyStart = dailyStartingBalance ? parseFloat(dailyStartingBalance) : equity;
    const peak = peakBalance ? parseFloat(peakBalance) : equity;

    const pipValue = calculatePipValue(currencyPair, balance);
    
    let stopLossPips = 0;
    let takeProfitPips = 0;

    if (entry && sl) {
      if (currencyPair.includes('JPY')) {
        stopLossPips = Math.abs(entry - sl) * 100;
      } else if (['NAS100', 'SPX500', 'US30', 'GER40', 'UK100', 'JPN225', 'AUS200', 'XAUUSD', 'XAGUSD', 'USOIL', 'UKOIL', 'NATGAS'].includes(currencyPair)) {
        stopLossPips = Math.abs(entry - sl);
      } else {
        stopLossPips = Math.abs(entry - sl) * 10000;
      }
    }

    if (tp && entry) {
      if (currencyPair.includes('JPY')) {
        takeProfitPips = Math.abs(tp - entry) * 100;
      } else if (['NAS100', 'SPX500', 'US30', 'GER40', 'UK100', 'JPN225', 'AUS200', 'XAUUSD', 'XAGUSD', 'USOIL', 'UKOIL', 'NATGAS'].includes(currencyPair)) {
        takeProfitPips = Math.abs(tp - entry);
      } else {
        takeProfitPips = Math.abs(tp - entry) * 10000;
      }
    }
    const riskAmount = equity * (risk / 100); // Use equity for risk calculation
    let positionSize = 0;
    
    // Calculate position size based on risk and stop loss distance
    if (stopLossPips > 0) {
      // Calculate position size in units
      // For forex, pipValue is per standard lot (100,000 units). For indices/commodities, it's per unit.
      // So, riskAmount / (stopLossPips * pipValue) gives the lot size directly if pipValue is per unit/pip.
      // If pipValue is per standard lot, then we need to adjust.
      // Let's assume pipValue is the value of 1 pip per 1 standard lot.
      // Then, (stopLossPips * pipValue) is the total risk in currency per standard lot.
      // positionSize = riskAmount / (stopLossPips * pipValue); // This would be in standard lots

      // Let's assume pipValue is the value of 1 pip per 1 unit of the base currency (e.g., $1 per pip for EUR/USD for 100,000 units)
      // For indices, pipValue is usually per point, so 1 point = $1 per contract/unit
      // So, riskAmount / (stopLossPips * pipValue) should give the number of units/contracts
      positionSize = riskAmount / (stopLossPips * pipValue);
    }

    const potentialLoss = riskAmount;
    const potentialProfit = (tp && positionSize > 0) ? (takeProfitPips * pipValue * positionSize) : 0;
    const riskRewardRatio = potentialProfit > 0 ? potentialProfit / potentialLoss : 0;

    let dailyDrawdown = 0;
    let maxDrawdown = 0;
    let remainingProfit = 0;
    let remainingDailyLoss = 0;
    let remainingMaxLoss = 0;
    let profitTargetProgress = 0;

    if (accountType === 'funded' && propFirmRules[propFirm]) {
      const rules = propFirmRules[propFirm][challengePhase];
      
      // Daily drawdown calculation based on current equity vs daily starting balance
      dailyDrawdown = Math.max(0, ((dailyStart - equity) / dailyStart) * 100);
      const dailyLossLimitAmount = dailyStart * (rules.dailyLoss / 100);
      remainingDailyLoss = Math.max(0, dailyLossLimitAmount - (dailyStart - equity));
      
      // Max drawdown calculation based on peak equity vs current equity
      maxDrawdown = Math.max(0, ((peak - equity) / peak) * 100);
      const maxLossLimitAmount = startingBalance * (rules.maxLoss / 100);
      remainingMaxLoss = Math.max(0, maxLossLimitAmount - (startingBalance - equity));
      
      // Profit target calculation based on current equity vs starting balance
      if (rules.profitTarget > 0) {
        const profitTargetAmount = startingBalance * (rules.profitTarget / 100);
        const currentProfit = equity - startingBalance;
        profitTargetProgress = Math.max(0, Math.min(100, (currentProfit / profitTargetAmount) * 100));
        remainingProfit = Math.max(0, profitTargetAmount - currentProfit);
      }
    }

    setResults({
      positionSize: isNaN(positionSize) ? 0 : parseFloat(positionSize.toFixed(2)),
      riskAmount: isNaN(riskAmount) ? 0 : parseFloat(riskAmount.toFixed(2)),
      potentialProfit: isNaN(potentialProfit) ? 0 : parseFloat(potentialProfit.toFixed(2)),
      potentialLoss: isNaN(potentialLoss) ? 0 : parseFloat(potentialLoss.toFixed(2)),
      riskRewardRatio: isNaN(riskRewardRatio) ? 0 : parseFloat(riskRewardRatio.toFixed(2)),
      pipValue: isNaN(pipValue) ? 0 : parseFloat(pipValue.toFixed(2)),
      lotSize: isNaN(positionSize) ? 0 : parseFloat((positionSize / 100000).toFixed(2)), // Convert units to standard lots for display
      // Win/Loss Scenarios
      winScenario: isNaN(equity + potentialProfit) ? 0 : parseFloat((equity + potentialProfit).toFixed(2)),
      lossScenario: isNaN(equity - potentialLoss) ? 0 : parseFloat((equity - potentialLoss).toFixed(2)),
      stopLossPips: isNaN(stopLossPips) ? 0 : Math.round(stopLossPips * 10) / 10,
      takeProfitPips: isNaN(takeProfitPips) ? 0 : Math.round(takeProfitPips * 10) / 10,
      dailyDrawdown: isNaN(dailyDrawdown) ? 0 : Math.round(dailyDrawdown * 100) / 100,
      maxDrawdown: isNaN(maxDrawdown) ? 0 : Math.round(maxDrawdown * 100) / 100,
      remainingProfit: isNaN(remainingProfit) ? 0 : Math.round(remainingProfit * 100) / 100,
      remainingDailyLoss: isNaN(remainingDailyLoss) ? 0 : Math.round(remainingDailyLoss * 100) / 100,
      remainingMaxLoss: isNaN(remainingMaxLoss) ? 0 : Math.round(remainingMaxLoss * 100) / 100,
      profitTargetProgress: isNaN(profitTargetProgress) ? 0 : Math.round(profitTargetProgress * 100) / 100
    });
  };

  const updateLiveAnalysis = () => {
    const missingFields = [];
    const warnings = [];
    const suggestions = [];

    // Check missing fields
    if (!entryPrice) missingFields.push('Entry Price');
    if (!stopLoss) missingFields.push('Stop Loss');
    if (!riskPercentage) missingFields.push('Risk Percentage');

    // Risk level analysis with more granular levels and dynamic colors
    const risk = parseFloat(riskPercentage) || 0;
    let riskLevel = liveAnalysis.riskLevel;
    let riskColor = liveAnalysis.riskColor;

    if (risk > 3) {
      riskLevel = 'Very High';
      riskColor = 'text-red-600';
    } else if (risk > 2) {
      riskLevel = 'High';
      riskColor = 'text-orange-600';
    } else if (risk > 1) {
      riskLevel = 'Moderate';
      riskColor = 'text-yellow-600';
    } else {
      riskLevel = 'Low';
      riskColor = 'text-green-600';
    }

    // Account health analysis
    let accountHealth = 'Excellent';
    let healthColor = 'text-green-600';
    const effectiveBalance = parseFloat(currentEquity) || parseFloat(accountSize);
    const initialAccountSize = parseFloat(accountSize);

    if (accountType === 'funded' && propFirmRules[propFirm]) {
      const rules = propFirmRules[propFirm][challengePhase];
      const dailyStart = parseFloat(dailyStartingBalance) || initialAccountSize;
      const peak = parseFloat(peakBalance) || initialAccountSize;
      const startingBalance = initialAccountSize;

      const dailyDrawdownPercent = ((dailyStart - effectiveBalance) / dailyStart) * 100;
      const maxDrawdownPercent = ((peak - effectiveBalance) / startingBalance) * 100;
      const profitTargetPercent = ((effectiveBalance - startingBalance) / startingBalance) * 100;

      const remainingDailyLoss = dailyStart * (rules.dailyLoss / 100) - (dailyStart - effectiveBalance);
      const remainingMaxLoss = startingBalance * (rules.maxLoss / 100) - (startingBalance - effectiveBalance);

      if (dailyDrawdownPercent >= rules.dailyLoss || maxDrawdownPercent >= rules.maxLoss) {
        accountHealth = 'Critical';
        healthColor = 'text-red-600';
        warnings.push('Account is at critical drawdown limits. Trading may be suspended.');
      } else if (dailyDrawdownPercent >= rules.dailyLoss * 0.75 || maxDrawdownPercent >= rules.maxLoss * 0.75) {
        accountHealth = 'Warning';
        healthColor = 'text-orange-600';
        warnings.push('You are approaching drawdown limits. Reduce risk and trade cautiously.');
      } else if (dailyDrawdownPercent > 0 || maxDrawdownPercent > 0) {
        accountHealth = 'Caution';
        healthColor = 'text-yellow-600';
        suggestions.push('You are in drawdown. Focus on high-probability setups and tight risk management.');
      } else if (rules.profitTarget > 0) {
        if (profitTargetPercent >= 99) {
          suggestions.push("Congratulations! You are at your profit target. Consider closing trades and requesting payout.");
        } else if (profitTargetPercent >= 90) {
          suggestions.push("You are very close to your profit target! Consider securing profits and managing remaining risk.");
        } else if (profitTargetPercent >= 75) {
          suggestions.push("Excellent progress towards your profit target. Stay disciplined and manage risk.");
        } else if (profitTargetPercent >= 50) {
          suggestions.push("Good progress towards your profit target. Keep managing risk and focusing on high-probability setups.");
        } else if (profitTargetPercent > 0) {
          suggestions.push("You've made progress towards your profit target. Keep pushing!");
        }
      }

      // Additional warnings/suggestions for drawdown proximity
      if (remainingDailyLoss <= dailyStart * 0.01 && remainingDailyLoss > 0) {
        warnings.push("You are within 1% of your daily drawdown limit. Exercise extreme caution.");
      }
      if (remainingMaxLoss <= startingBalance * 0.01 && remainingMaxLoss > 0) {
        warnings.push("You are within 1% of your maximum drawdown limit. This is a critical zone.");
      }

      // Suggestion for consistency rule (if applicable)
      if (rules.consistency && profitTargetPercent > 0 && profitTargetPercent < 100) {
        suggestions.push("Remember to maintain consistency. Avoid over-leveraging or deviating from your strategy.");
      }
    } else if (effectiveBalance < initialAccountSize * 0.9) {
      accountHealth = 'Warning';
      healthColor = 'text-orange-600';
      warnings.push('Your equity is significantly below initial account size. Review your strategy.');
    } else if (effectiveBalance < initialAccountSize) {
      accountHealth = 'Caution';
      healthColor = 'text-yellow-600';
      suggestions.push('Your equity is below initial account size. Focus on recovery and risk management.');
    }

    // Enhanced suggestions based on trade setup
    if (entryPrice && stopLoss && !isNaN(parseFloat(entryPrice)) && !isNaN(parseFloat(stopLoss))) {
      const entry = parseFloat(entryPrice);
      const sl = parseFloat(stopLoss);
      const pipDistance = Math.abs(entry - sl) * (currencyPair.includes('JPY') ? 100 : 10000);
      const defaults = currencyDefaults[currencyPair];

      if (!isNaN(pipDistance) && pipDistance > 0) {
        if (pipDistance < (defaults?.stopLossPips || 20) * 0.5) {
          warnings.push(`Stop loss is very tight (<${((defaults?.stopLossPips || 20) * 0.5).toFixed(0)} pips) for ${currencyPair}. High risk of premature exit.`);
        } else if (pipDistance > (defaults?.stopLossPips || 20) * 2) {
          suggestions.push(`Stop loss is quite wide (> ${((defaults?.stopLossPips || 20) * 2).toFixed(0)} pips) for ${currencyPair}. Ensure this aligns with your strategy.`);
        }
      }

      if (results.riskRewardRatio > 0 && results.riskRewardRatio < 1) {
        warnings.push('Risk-Reward Ratio is less than 1:1. Consider improving your potential profit relative to risk.');
      } else if (results.riskRewardRatio >= 1 && results.riskRewardRatio < 2) {
        suggestions.push('Good Risk-Reward Ratio (1:1 to 2:1). Aim for higher if possible.');
      } else if (results.riskRewardRatio >= 2) {
        suggestions.push('Excellent Risk-Reward Ratio (>2:1). This is a strong setup.');
      }
    }

    // Position size suggestions
    if (results.positionSize > 0 && parseFloat(riskPercentage) > 0) {
      const maxRecommendedRisk = riskSuggestions[currencyDefaults[currencyPair]?.volatility || 'medium']?.maxRisk || 2;
      if (parseFloat(riskPercentage) > maxRecommendedRisk) {
        warnings.push(`Your risk percentage (${riskPercentage}%) exceeds the recommended maximum (${maxRecommendedRisk}%) for ${currencyPair}'s volatility.`);
      }
    }

    // Add general trading tips
    if (suggestions.length === 0 && warnings.length === 0) {
      suggestions.push("Enter trade parameters to get real-time analysis and suggestions.");
      suggestions.push("Adjust your risk percentage and stop loss to optimize your trade setup.");
      suggestions.push("Always aim for a Risk-Reward Ratio of 1:2 or higher for better long-term profitability.");
    }

    setLiveAnalysis({
      riskLevel,
      riskColor,
      accountHealth,
      healthColor,
      suggestions,
      warnings,
      missingFields
    });
  };

  // Apply trade suggestion function
  const applyTradeSuggestion = (suggestion) => {
    if (suggestion.entryPrice) {
      setEntryPrice(suggestion.entryPrice.toString());
    }
    if (suggestion.stopLoss) {
      setStopLoss(suggestion.stopLoss.toString());
    }
    if (suggestion.takeProfit) {
      setTakeProfit(suggestion.takeProfit.toString());
    }
    if (suggestion.lotSize) {
      setVolume(suggestion.lotSize.toString());
    }
    
    // Apply intelligent risk based on market analysis and prop firm rules
    if (marketAnalysisData?.analysis) {
      const analysis = marketAnalysisData.analysis;
      let suggestedRisk = 1.0; // Default 1%
      
      // Adjust risk based on confidence and market conditions
      if (analysis.confidence > 80) {
        suggestedRisk = 1.5;
      } else if (analysis.confidence > 60) {
        suggestedRisk = 1.0;
      } else {
        suggestedRisk = 0.5;
      }
      
      // Reduce risk for high volatility
      if (analysis.risk_level === 'high') {
        suggestedRisk *= 0.7;
      }
      
      // Apply prop firm constraints
      if (accountType === 'funded' && propFirmRules[propFirm]) {
        const rules = propFirmRules[propFirm][challengePhase];
        const maxSafeRisk = Math.min(suggestedRisk, rules.dailyLoss / 4); // Use 1/4 of daily loss limit
        setRiskPercentage(maxSafeRisk.toFixed(2));
      } else {
        setRiskPercentage(suggestedRisk.toFixed(2));
      }
    }
  };

  // Apply AI analysis recommendations
  const applyAIAnalysis = (recommendations) => {
    if (recommendations.entryPrice) {
      setEntryPrice(recommendations.entryPrice.toString());
    }
    if (recommendations.stopLoss) {
      setStopLoss(recommendations.stopLoss.toString());
    }
    if (recommendations.takeProfit) {
      setTakeProfit(recommendations.takeProfit.toString());
    }
    if (recommendations.lotSize) {
      setVolume(recommendations.lotSize.toString());
    }
    if (recommendations.riskPercentage) {
      setRiskPercentage(recommendations.riskPercentage.toString());
    }
  };

  const getRiskProgressValue = () => {
    const risk = parseFloat(riskPercentage) || 1;
    return Math.min(100, (risk / 5) * 100);
  };

  const getRiskProgressColor = () => {
    const risk = parseFloat(riskPercentage) || 1;
    if (risk > 3) return 'bg-red-500';
    if (risk > 2) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
              <Calculator className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">IIMAGINED Trading Calculator</h1>
              <p className="text-purple-300">Real-time position sizing and risk management</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MarketClock />
            <a 
              href="http://www.the5ers.com/?afmc=zls" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
            >
              Join The5ers
            </a>
            <a 
              href="https://www.topstep.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
            >
              Join TopStep
            </a>
            <div className="text-right">
              <div className="text-xs text-purple-300">Created by</div>
              <div className="text-sm font-medium text-white">Anyro (@anyrxo)</div>
              <div className="text-xs text-purple-400 mt-1">
                <a 
                  href="https://www.iimagined.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-purple-300 transition-colors"
                >
                  Learn more at iimagined.ai
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Left Column - Account & Trade Setup */}
          <div className="space-y-4">
            {/* Account Configuration */}
            <Card className="shadow-xl border border-purple-500/20 bg-slate-800/90 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center text-white">
                  <Shield className="mr-2 h-5 w-5 text-purple-400" />
                  Account Setup
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-xs text-gray-300">Account Type</Label>
                    <Select value={accountType} onValueChange={(value) => {
                      setAccountType(value);
                      // Reset propFirm and accountSize when switching account types
                      if (value === 'standard') {
                        setPropFirm(''); // Clear prop firm selection
                        setAccountSize('10000'); // Set a default standard account size
                      } else if (value === 'funded') {
                        setPropFirm('fivepercenters'); // Set a default prop firm
                        setAccountSize('10000'); // Set a default funded account size
                      }
                    }}>
                      <SelectTrigger className="h-9 bg-slate-700 border-slate-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="funded">Funded</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {accountType === 'funded' && (
                    <div>
                      <Label className="text-xs text-gray-300">Prop Firm</Label>
                      <Select value={propFirm} onValueChange={setPropFirm}>
                        <SelectTrigger className="h-9 bg-slate-700 border-slate-600 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-700 border-slate-600">
                          <SelectItem value="fivepercenters">5%ers</SelectItem>
                          <SelectItem value="topstep">TopStep</SelectItem>
                          <SelectItem value="ftmo">FTMO</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-xs text-gray-300">Account Size</Label>
                    <Select value={accountSize} onValueChange={setAccountSize}>
                      <SelectTrigger className="h-9 bg-slate-700 border-slate-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        {propFirm === 'fivepercenters' && (
                          <>
                            <SelectItem value="5000">$5,000</SelectItem>
                            <SelectItem value="10000">$10,000</SelectItem>
                            <SelectItem value="20000">$20,000</SelectItem>
                            <SelectItem value="60000">$60,000</SelectItem>
                            <SelectItem value="100000">$100,000</SelectItem>
                          </>
                        )}
                        {propFirm === 'topstep' && (
                          <>
                            <SelectItem value="50000">$50,000</SelectItem>
                            <SelectItem value="100000">$100,000</SelectItem>
                            <SelectItem value="150000">$150,000</SelectItem>
                          </>
                        )}
                        {propFirm === 'ftmo' && (
                          <>
                            <SelectItem value="10000">$10,000</SelectItem>
                            <SelectItem value="25000">$25,000</SelectItem>
                            <SelectItem value="50000">$50,000</SelectItem>
                            <SelectItem value="100000">$100,000</SelectItem>
                          </>
                        )}
                        {accountType === 'standard' && (
                          <>
                            <SelectItem value="10000">$10,000</SelectItem>
                            <SelectItem value="25000">$25,000</SelectItem>
                            <SelectItem value="50000">$50,000</SelectItem>
                            <SelectItem value="100000">$100,000</SelectItem>
                          </>
                        )}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label className="text-xs text-gray-300">Current Equity</Label>
                    <Input
                      type="number"
                      value={currentEquity}
                      onChange={(e) => setCurrentEquity(e.target.value)}
                      className="h-9 bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                      placeholder="Enter current equity"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Trade Parameters */}
            <Card className="shadow-xl border border-purple-500/20 bg-slate-800/90 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center text-white">
                  <TrendingUp className="mr-2 h-5 w-5 text-green-400" />
                  Trade Setup
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-xs text-gray-300">Trading Symbol</Label>
                    <Select value={currencyPair} onValueChange={handleCurrencyPairChange}>
                      <SelectTrigger className="h-9 bg-slate-700 border-slate-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="max-h-80 bg-slate-700 border-slate-600">
                        {/* Group by category */}
                        <div className="px-2 py-1 text-xs font-semibold text-purple-300 bg-slate-600">Forex - Major Pairs</div>
                        {currencyPairs.filter(pair => pair.category === 'Forex' && ['EURUSD', 'GBPUSD', 'USDJPY', 'USDCHF', 'AUDUSD', 'USDCAD', 'NZDUSD'].includes(pair.symbol)).map((pair) => (
                          <SelectItem key={pair.symbol} value={pair.symbol}>
                            {pair.name}
                          </SelectItem>
                        ))}
                        
                        <div className="px-2 py-1 text-xs font-semibold text-purple-300 bg-slate-600">Forex - Cross Pairs</div>
                        {currencyPairs.filter(pair => pair.category === 'Forex' && !['EURUSD', 'GBPUSD', 'USDJPY', 'USDCHF', 'AUDUSD', 'USDCAD', 'NZDUSD'].includes(pair.symbol)).map((pair) => (
                          <SelectItem key={pair.symbol} value={pair.symbol}>
                            {pair.name}
                          </SelectItem>
                        ))}
                        
                        <div className="px-2 py-1 text-xs font-semibold text-purple-300 bg-slate-600">Indices</div>
                        {currencyPairs.filter(pair => pair.category === 'Indices').map((pair) => (
                          <SelectItem key={pair.symbol} value={pair.symbol}>
                            {pair.name}
                          </SelectItem>
                        ))}
                        
                        <div className="px-2 py-1 text-xs font-semibold text-purple-300 bg-slate-600">Commodities</div>
                        {currencyPairs.filter(pair => pair.category === 'Commodities').map((pair) => (
                          <SelectItem key={pair.symbol} value={pair.symbol}>
                            {pair.name}
                          </SelectItem>
                        ))}
                        
                        <div className="px-2 py-1 text-xs font-semibold text-purple-300 bg-slate-600">Crypto</div>
                        {currencyPairs.filter(pair => pair.category === 'Crypto').map((pair) => (
                          <SelectItem key={pair.symbol} value={pair.symbol}>
                            {pair.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                  
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-xs text-gray-300">Risk Percentage</Label>
                    <Input
                      type="number"
                      value={riskPercentage}
                      onChange={(e) => setRiskPercentage(e.target.value)}
                      className="h-9 bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                      placeholder="e.g., 1 for 1%"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-xs text-gray-300">Lot Size</Label>
                    <Input
                      type="number"
                      value={lotSize}
                      onChange={(e) => setLotSize(e.target.value)}
                      className="h-9 bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                      placeholder="Calculated automatically"
                      readOnly
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-xs text-gray-300">Entry Price</Label>
                    <Input
                      type="number"
                      value={entryPrice}
                      onChange={(e) => setEntryPrice(e.target.value)}
                      className="h-9 bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                      placeholder="Enter entry price"
                    />
                  </div>
                  
                  <div>
                    <Label className="text-xs text-gray-300">Stop Loss</Label>
                    <Input
                      type="number"
                      value={stopLoss}
                      onChange={(e) => setStopLoss(e.target.value)}
                      className="h-9 bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                      placeholder="Enter stop loss"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-xs text-gray-300">Take Profit</Label>
                    <Input
                      type="number"
                      value={takeProfit}
                      onChange={(e) => setTakeProfit(e.target.value)}
                      className="h-9 bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                      placeholder="Enter take profit"
                    />
                  </div>
                  
                  {orderType !== 'market' && (
                    <div>
                      <Label className="text-xs text-gray-300">Pending Price</Label>
                      <Input
                        type="number"
                        value={pendingPrice}
                        onChange={(e) => setPendingPrice(e.target.value)}
                        className="h-9 bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                        placeholder="Enter pending price"
                      />
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label className="text-xs text-gray-300">Order Type</Label>
                    <Select value={orderType} onValueChange={setOrderType}>
                      <SelectTrigger className="h-9 bg-slate-700 border-slate-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        <SelectItem value="market">Market Order</SelectItem>
                        <SelectItem value="limit">Limit Order</SelectItem>
                        <SelectItem value="stop">Stop Order</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label className="text-xs text-gray-300">Volume</Label>
                    <Input
                      type="number"
                      value={volume}
                      onChange={(e) => setVolume(e.target.value)}
                      className="h-9 bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                      placeholder="e.g., 0.01"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <Label className="text-xs text-gray-300">Comment</Label>
                    <Input
                      type="text"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="h-9 bg-slate-700 border-slate-600 text-white placeholder-gray-400"
                      placeholder="Optional trade comment"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Advanced AI Analysis Section */}
            <AdvancedAIAnalysis
              currencyPair={currencyPair}
              priceData={priceData}
              marketAnalysisData={marketAnalysisData}
              userInputs={{
                accountType,
                propFirm,
                challengePhase,
                accountSize,
                currentEquity,
                riskPercentage,
                entryPrice,
                stopLoss,
                takeProfit,
                volume
              }}
              propFirmRules={propFirmRules}
              results={results}
              onApplyAnalysis={applyAIAnalysis}
            />
          </div>

          {/* Middle Column - Live Analysis & Results */}
          <div className="space-y-4">
            {/* Live Analysis */}
            <Card className="shadow-xl border border-purple-500/20 bg-slate-800/90 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center text-white">
                  <Activity className="mr-2 h-5 w-5 text-blue-400" />
                  Live Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Risk Level */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-300">Risk Level</span>
                    <Badge className={`${liveAnalysis.riskColor.replace('text-', 'bg-').replace('-600', '-100')} ${liveAnalysis.riskColor.replace('-600', '-800')}`}>
                      {liveAnalysis.riskLevel}
                    </Badge>
                  </div>
                  <div className="relative">
                    <Progress 
                      value={getRiskProgressValue()} 
                      className="h-3"
                    />
                    <div 
                      className={`absolute top-0 left-0 h-3 rounded-full transition-all duration-500 ${getRiskProgressColor()}`}
                      style={{ width: `${getRiskProgressValue()}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1 flex justify-between">
                    <span>0%</span>
                    <span>{riskPercentage}%</span>
                    <span>5%+</span>
                  </div>
                </div>

                {/* Account Health */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-300">Account Health</span>
                    <Badge className={`${liveAnalysis.healthColor.replace('text-', 'bg-').replace('-600', '-100')} ${liveAnalysis.healthColor.replace('-600', '-800')}`}>
                      {liveAnalysis.accountHealth}
                    </Badge>
                  </div>
                  <div className="relative">
                    <Progress 
                      value={liveAnalysis.accountHealth === 'Excellent' ? 100 : liveAnalysis.accountHealth === 'Good' ? 75 : liveAnalysis.accountHealth === 'Caution' ? 50 : liveAnalysis.accountHealth === 'Warning' ? 25 : 0} 
                      className="h-3"
                    />
                    <div 
                      className={`absolute top-0 left-0 h-3 rounded-full transition-all duration-500 ${
                        liveAnalysis.healthColor === 'text-green-600' ? 'bg-green-500' : 
                        liveAnalysis.healthColor === 'text-yellow-600' ? 'bg-yellow-500' : 
                        liveAnalysis.healthColor === 'text-orange-600' ? 'bg-orange-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${liveAnalysis.accountHealth === 'Excellent' ? 100 : liveAnalysis.accountHealth === 'Good' ? 75 : liveAnalysis.accountHealth === 'Caution' ? 50 : liveAnalysis.accountHealth === 'Warning' ? 25 : 0}%` }}
                    />
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="bg-slate-800 p-2 rounded border border-slate-600">
                    <div className="text-blue-400 font-medium">{results.lotSize}</div>
                    <div className="text-blue-300 text-xs">Lot Size</div>
                  </div>
                  <div className="bg-slate-800 p-2 rounded border border-slate-600">
                    <div className="text-red-400 font-medium">${results.riskAmount}</div>
                    <div className="text-red-300 text-xs">Risk Amount</div>
                  </div>
                  <div className="bg-slate-800 p-2 rounded border border-slate-600">
                    <div className="text-green-400 font-medium">${results.potentialProfit}</div>
                    <div className="text-green-300 text-xs">Potential Profit</div>
                  </div>
                  <div className="bg-slate-800 p-2 rounded border border-slate-600">
                    <div className={`font-medium ${results.riskRewardRatio < 1.5 ? 'text-red-400' : 'text-green-400'}`}>
                      {results.riskRewardRatio}:1
                    </div>
                    <div className="text-purple-300 text-xs">R:R Ratio</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Results */}
            <Card className="shadow-xl border border-purple-500/20 bg-slate-800/90 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center text-white">
                  <Calculator className="mr-2 h-5 w-5 text-blue-400" />
                  Calculation Results
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                  <div className="flex justify-between">
                    <span>Stop Loss Pips:</span>
                    <span className="font-medium text-white">{results.stopLossPips}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Take Profit Pips:</span>
                    <span className="font-medium text-white">{results.takeProfitPips}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pip Value:</span>
                    <span className="font-medium text-white">${results.pipValue}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lot Size:</span>
                    <span className="font-medium text-white">{results.positionSize}</span>
                  </div>
                </div>

                {/* Scenario Analysis */}
                <div className="mt-4 p-3 bg-slate-800 rounded-lg border border-slate-600">
                  <h4 className="font-medium text-sm mb-2 text-white">Scenario Analysis</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-gray-300">Win Scenario:</span>
                      <span className="text-green-400 font-medium">
                        ${(parseFloat(currentEquity) + results.potentialProfit).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-300">Loss Scenario:</span>
                      <span className="text-red-400 font-medium">
                        ${(parseFloat(currentEquity) - results.riskAmount).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Suggestions & Prop Firm Status */}
          <div className="space-y-4">
            {/* AI Suggestions */}
            <Card className="shadow-xl border border-purple-500/20 bg-slate-800/90 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center text-white">
                  <Brain className="mr-2 h-5 w-5 text-purple-400" />
                  Intelligent Trading Assistant
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {/* Real-time Price Display */}
                <div className="p-3 bg-slate-700 rounded-lg border border-slate-600">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-300">Live Price</span>
                    <div className="flex items-center space-x-2">
                      <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                        <SelectTrigger className="h-7 w-16 bg-slate-600 border-slate-500 text-white text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-700 border-slate-600">
                          <SelectItem value="1m">1m</SelectItem>
                          <SelectItem value="5m">5m</SelectItem>
                          <SelectItem value="15m">15m</SelectItem>
                          <SelectItem value="30m">30m</SelectItem>
                          <SelectItem value="1h">1h</SelectItem>
                          <SelectItem value="4h">4h</SelectItem>
                          <SelectItem value="1d">1d</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-white">
                      {priceLoading ? 'Loading...' : realTimePrice ? realTimePrice.toFixed(5) : 'N/A'}
                    </span>
                    {priceError && <span className="text-red-400 text-xs">Error loading price</span>}
                  </div>
                </div>

                {/* Market Analysis */}
                {marketAnalysis && (
                  <div className="p-3 bg-slate-700 rounded-lg border border-slate-600">
                    <h4 className="font-medium text-sm mb-2 text-white">Market Analysis</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-300">Trend:</span>
                        <Badge className={`text-xs ${
                          marketAnalysis.direction === 'bullish' ? 'bg-green-600' :
                          marketAnalysis.direction === 'bearish' ? 'bg-red-600' : 'bg-gray-600'
                        }`}>
                          {marketAnalysis.direction.toUpperCase()}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-300">Strength:</span>
                        <span className="text-xs text-white">{marketAnalysis.strength}%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-300">Confidence:</span>
                        <span className="text-xs text-white">{marketAnalysis.confidence}%</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Trade Suggestions */}
                {tradeSuggestions && (
                  <div className="p-3 bg-slate-700 rounded-lg border border-slate-600">
                    <h4 className="font-medium text-sm mb-2 text-white">Trade Suggestion</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-300">Action:</span>
                        <Badge className={`text-xs ${
                          tradeSuggestions.action === 'trade' ? 'bg-green-600' :
                          tradeSuggestions.action === 'consider' ? 'bg-yellow-600' : 'bg-gray-600'
                        }`}>
                          {tradeSuggestions.action.toUpperCase()}
                        </Badge>
                      </div>
                      
                      {tradeSuggestions.direction && (
                        <>
                          <div className="flex justify-between items-center">
                            <span className="text-xs text-gray-300">Direction:</span>
                            <span className={`text-xs font-medium ${
                              tradeSuggestions.direction === 'bullish' ? 'text-green-400' : 'text-red-400'
                            }`}>
                              {tradeSuggestions.direction === 'bullish' ? 'BUY' : 'SELL'}
                            </span>
                          </div>
                          
                          {tradeSuggestions.entryPrice && (
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-300">Entry:</span>
                              <span className="text-xs text-white">{tradeSuggestions.entryPrice.toFixed(5)}</span>
                            </div>
                          )}
                          
                          {tradeSuggestions.stopLoss && (
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-300">Stop Loss:</span>
                              <span className="text-xs text-red-400">{tradeSuggestions.stopLoss.toFixed(5)}</span>
                            </div>
                          )}
                          
                          {tradeSuggestions.takeProfit && (
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-300">Take Profit:</span>
                              <span className="text-xs text-green-400">{tradeSuggestions.takeProfit.toFixed(5)}</span>
                            </div>
                          )}
                          
                          {tradeSuggestions.lotSize && (
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-300">Suggested Lot:</span>
                              <span className="text-xs text-white">{tradeSuggestions.lotSize}</span>
                            </div>
                          )}
                        </>
                      )}
                      
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-gray-300">Confidence:</span>
                        <span className="text-xs text-white">{tradeSuggestions.confidence}%</span>
                      </div>
                      
                      {/* Reasoning */}
                      <div className="mt-2 pt-2 border-t border-slate-600">
                        <span className="text-xs text-gray-300">Analysis:</span>
                        <div className="mt-1 space-y-1">
                          {tradeSuggestions.reasoning.map((reason, index) => (
                            <div key={index} className="text-xs text-gray-400">• {reason}</div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Apply Button */}
                      {tradeSuggestions.entryPrice && tradeSuggestions.stopLoss && tradeSuggestions.takeProfit && (
                        <div className="mt-3 pt-2 border-t border-slate-600">
                          <Button 
                            onClick={() => applyTradeSuggestion(tradeSuggestions)}
                            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xs py-2"
                          >
                            <Zap className="h-3 w-3 mr-1" />
                            Apply Suggestion
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Warnings */}
                {liveAnalysis.warnings.map((warning, index) => (
                  <Alert key={index} className="border-red-200 bg-red-50 py-2">
                    <AlertTriangle className="h-4 w-4 text-red-600" />
                    <AlertDescription className="text-red-800 text-sm">
                      {warning}
                    </AlertDescription>
                  </Alert>
                ))}

                {/* Suggestions */}
                {liveAnalysis.suggestions.map((suggestion, index) => (
                  <Alert key={index} className="border-blue-200 bg-blue-50 py-2">
                    <Info className="h-4 w-4 text-blue-600" />
                    <AlertDescription className="text-blue-800 text-sm">
                      {suggestion}
                    </AlertDescription>
                  </Alert>
                ))}

                {liveAnalysis.warnings.length === 0 && liveAnalysis.suggestions.length === 0 && (
                  <div className="text-center text-gray-500 text-sm py-4">
                    <Zap className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                    All looks good! Enter trade parameters for analysis.
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Prop Firm Status */}
            {accountType === 'funded' && (
              <Card className="shadow-lg border-0 bg-white/90 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-green-600" />
                    Prop Firm Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Daily Drawdown */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Daily Drawdown</span>
                      <Badge className={`${results.dailyDrawdown > 3 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                        {results.dailyDrawdown.toFixed(2)}%
                      </Badge>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={Math.min((results.dailyDrawdown / (propFirmRules[propFirm]?.[challengePhase]?.dailyLoss || 5)) * 100, 100) || 0} 
                        className="h-3"
                      />
                      <div 
                        className={`absolute top-0 left-0 h-3 rounded-full transition-all duration-500 ${
                          results.dailyDrawdown > 4 ? 'bg-red-500' : 
                          results.dailyDrawdown > 3 ? 'bg-orange-500' : 
                          results.dailyDrawdown > 2 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${Math.min((results.dailyDrawdown / (propFirmRules[propFirm]?.[challengePhase]?.dailyLoss || 5)) * 100, 100)}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-500 mt-1 flex justify-between">
                      <span>Remaining: ${((parseFloat(currentEquity) || parseFloat(accountSize)) - (parseFloat(dailyStartingBalance) || parseFloat(accountSize)) * (propFirmRules[propFirm]?.[challengePhase]?.dailyLoss || 5) / 100).toFixed(2)}</span>
                      <span>Limit: {propFirmRules[propFirm]?.[challengePhase]?.dailyLoss || 5}%</span>
                    </div>
                  </div>

                  {/* Max Drawdown */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Max Drawdown</span>
                      <Badge className={`${results.maxDrawdown > 8 ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                        {results.maxDrawdown.toFixed(2)}%
                      </Badge>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={Math.min((results.maxDrawdown / (propFirmRules[propFirm]?.[challengePhase]?.maxLoss || 10)) * 100, 100) || 0} 
                        className="h-3"
                      />
                      <div 
                        className={`absolute top-0 left-0 h-3 rounded-full transition-all duration-500 ${
                          results.maxDrawdown > 8 ? 'bg-red-500' : 
                          results.maxDrawdown > 6 ? 'bg-orange-500' : 
                          results.maxDrawdown > 4 ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${Math.min((results.maxDrawdown / (propFirmRules[propFirm]?.[challengePhase]?.maxLoss || 10)) * 100, 100)}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-500 mt-1 flex justify-between">
                      <span>Remaining: ${((parseFloat(currentEquity) || parseFloat(accountSize)) - parseFloat(accountSize) * (propFirmRules[propFirm]?.[challengePhase]?.maxLoss || 10) / 100).toFixed(2)}</span>
                      <span>Limit: {propFirmRules[propFirm]?.[challengePhase]?.maxLoss || 10}%</span>
                    </div>
                  </div>

                  {/* Profit Target Progress */}
                  {propFirmRules[propFirm]?.[challengePhase]?.profitTarget > 0 && (
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Profit Target</span>
                        <Badge className="bg-blue-100 text-blue-800">
                          {results.profitTargetProgress.toFixed(1)}%
                        </Badge>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={Math.min(results.profitTargetProgress, 100) || 0} 
                          className="h-3"
                        />
                        <div 
                          className="absolute top-0 left-0 h-3 bg-blue-500 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min(results.profitTargetProgress, 100)}%` }}
                        />
                      </div>
                      <div className="text-xs text-gray-500 mt-1 flex justify-between">
                        <span>Remaining: {(propFirmRules[propFirm]?.[challengePhase]?.profitTarget - results.profitTargetProgress).toFixed(1)}%</span>
                        <span>Target: {propFirmRules[propFirm]?.[challengePhase]?.profitTarget}%</span>
                      </div>
                    </div>
                  )}

                  {/* Account Health Summary */}
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Account Health</span>
                      <Badge className={`${liveAnalysis.healthColor.replace('text-', 'bg-').replace('-600', '-100')} ${liveAnalysis.healthColor.replace('-600', '-800')}`}>
                        {liveAnalysis.accountHealth}
                      </Badge>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">
                      Current Equity: ${(parseFloat(currentEquity) || parseFloat(accountSize)).toFixed(2)}
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* TradingView Chart Section */}
        <div className="mt-6">
          <Card className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 border-purple-500/20">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Live Chart - {currencyPair} ({selectedTimeframe})
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Real-time price chart for technical analysis
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Label className="text-xs text-gray-300">Timeframe:</Label>
                  <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                    <SelectTrigger className="w-20 h-8 bg-slate-700 border-slate-600 text-white text-xs">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-700 border-slate-600">
                      <SelectItem value="1m">1m</SelectItem>
                      <SelectItem value="5m">5m</SelectItem>
                      <SelectItem value="15m">15m</SelectItem>
                      <SelectItem value="30m">30m</SelectItem>
                      <SelectItem value="1h">1h</SelectItem>
                      <SelectItem value="4h">4h</SelectItem>
                      <SelectItem value="1d">1d</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="w-full h-96 bg-gray-800 rounded-lg overflow-hidden">
                <TradingViewChart 
                  symbol={currencyPair} 
                  timeframe={selectedTimeframe}
                  height="384"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Disclaimer */}
        <Disclaimer />
      </div>
    </div>
  );
};

// TradingView Chart Component
const TradingViewChart = ({ symbol, timeframe, height = "400" }) => {
  useEffect(() => {
    // Map our symbols to TradingView symbols
    const symbolMapping = {
      'EUR/USD': 'FX:EURUSD',
      'GBP/USD': 'FX:GBPUSD',
      'USD/JPY': 'FX:USDJPY',
      'USD/CHF': 'FX:USDCHF',
      'AUD/USD': 'FX:AUDUSD',
      'USD/CAD': 'FX:USDCAD',
      'NZD/USD': 'FX:NZDUSD',
      'EUR/JPY': 'FX:EURJPY',
      'GBP/JPY': 'FX:GBPJPY',
      'EUR/GBP': 'FX:EURGBP',
      'NASDAQ 100': 'NASDAQ:NDX',
      'S&P 500': 'SP:SPX',
      'Dow Jones 30': 'DJ:DJI',
      'DAX 40': 'XETR:DAX',
      'FTSE 100': 'LSE:UKX',
      'Nikkei 225': 'TSE:NI225',
      'Gold': 'COMEX:GC1!',
      'Silver': 'COMEX:SI1!',
      'Crude Oil': 'NYMEX:CL1!',
      'Bitcoin': 'BITSTAMP:BTCUSD',
      'Ethereum': 'BITSTAMP:ETHUSD'
    };

    // Map timeframes
    const timeframeMapping = {
      '1m': '1',
      '5m': '5',
      '15m': '15',
      '30m': '30',
      '1h': '60',
      '4h': '240',
      '1d': 'D'
    };

    const tradingViewSymbol = symbolMapping[symbol] || 'FX:EURUSD';
    const tradingViewTimeframe = timeframeMapping[timeframe] || '15';

    // Clear previous widget and force re-render
    const container = document.getElementById('tradingview-chart');
    if (container) {
      container.innerHTML = '';
    }

    // Add a small delay to ensure container is cleared
    const timer = setTimeout(() => {
      // Create new TradingView widget
      if (window.TradingView) {
        new window.TradingView.widget({
          "width": "100%",
          "height": height,
          "symbol": tradingViewSymbol,
          "interval": tradingViewTimeframe,
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "hide_top_toolbar": false,
          "hide_legend": false,
          "save_image": false,
          "container_id": "tradingview-chart",
          "studies": [
            "MASimple@tv-basicstudies",
            "RSI@tv-basicstudies"
          ]
        });
      } else {
        // Load TradingView script if not already loaded
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/tv.js';
        script.onload = () => {
          new window.TradingView.widget({
            "width": "100%",
            "height": height,
            "symbol": tradingViewSymbol,
            "interval": tradingViewTimeframe,
            "timezone": "Etc/UTC",
            "theme": "dark",
            "style": "1",
            "locale": "en",
            "toolbar_bg": "#f1f3f6",
            "enable_publishing": false,
            "hide_top_toolbar": false,
            "hide_legend": false,
            "save_image": false,
            "container_id": "tradingview-chart",
            "studies": [
              "MASimple@tv-basicstudies",
              "RSI@tv-basicstudies"
            ]
          });
        };
        document.head.appendChild(script);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [symbol, timeframe]);

  return <div id="tradingview-chart" style={{ height: height + 'px' }}></div>;
};

export default CompactTradingCalculator;



