'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Textarea } from '@/components/ui/textarea'
import { Slider } from '@/components/ui/slider'
import { Switch } from '@/components/ui/switch'
import { 
  Calculator, 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  Target, 
  Shield, 
  AlertTriangle,
  CheckCircle,
  DollarSign,
  Zap,
  Brain,
  Activity,
  Clock,
  Award,
  Lightbulb,
  RefreshCw,
  Info,
  Play,
  Pause,
  RotateCcw,
  BookOpen,
  GraduationCap,
  Star,
  Users,
  Newspaper,
  Loader2,
  Eye,
  EyeOff,
  Sparkles,
  Key,
  Wifi,
  WifiOff,
  Database,
  Server,
  Settings,
  Percent,
  PieChart,
  LineChart,
  Layers,
  Maximize,
  Save,
  Download,
  Share2,
  Sliders,
  TrendingUp as TrendUp
} from 'lucide-react'

// Import custom components
import MarketClock from './components/MarketClock'
import Disclaimer from './components/Disclaimer'
import AdvancedAIAnalysis from './components/AdvancedAIAnalysis'
import MissingFieldsIndicator from './components/MissingFieldsIndicator'
import TradingViewChart from './components/TradingViewChart'

// Import real-time hooks
import { useRealTimePrice, useMarketAnalysis, useMarketNews } from './hooks/useRealTimePrice'

// Enhanced prop firm configurations with comprehensive rules
const PROP_FIRMS = {
  fivepercenters: {
    name: 'The5ers',
    phases: {
      phase1: { name: 'Phase 1', target: 8, maxDailyloss: 5, maxTotalLoss: 12, timeLimit: 30 },
      phase2: { name: 'Phase 2', target: 5, maxDailyloss: 5, maxTotalLoss: 8, timeLimit: 60 },
      funded: { name: 'Funded', target: 0, maxDailyloss: 5, maxTotalLoss: 8, timeLimit: null }
    },
    accountSizes: ['10000', '20000', '50000', '100000', '200000'],
    profitSplit: { trader: 80, firm: 20 },
    minTradingDays: 4,
    maxTradingDays: 30,
    consistency: 'Max 5% daily loss on any single day',
    restrictions: ['No weekend holding', 'No news trading 2min before/after high impact news']
  },
  ftmo: {
    name: 'FTMO',
    phases: {
      challenge: { name: 'Challenge', target: 10, maxDailyloss: 5, maxTotalLoss: 10, timeLimit: 30 },
      verification: { name: 'Verification', target: 5, maxDailyloss: 5, maxTotalLoss: 10, timeLimit: 60 },
      funded: { name: 'Funded', target: 0, maxDailyloss: 5, maxTotalLoss: 10, timeLimit: null }
    },
    accountSizes: ['10000', '25000', '50000', '100000', '200000'],
    profitSplit: { trader: 80, firm: 20 },
    minTradingDays: 10,
    maxTradingDays: 30,
    consistency: 'No single day loss > 5%',
    restrictions: ['No weekend holding', 'No high-impact news trading', 'Min 10 trading days']
  },
  myforexfunds: {
    name: 'MyForexFunds',
    phases: {
      phase1: { name: 'Phase 1', target: 8, maxDailyloss: 4, maxTotalLoss: 8, timeLimit: null },
      phase2: { name: 'Phase 2', target: 5, maxDailyloss: 4, maxTotalLoss: 8, timeLimit: null },
      funded: { name: 'Funded', target: 0, maxDailyloss: 4, maxTotalLoss: 8, timeLimit: null }
    },
    accountSizes: ['10000', '25000', '50000', '100000'],
    profitSplit: { trader: 85, firm: 15 },
    minTradingDays: 5,
    maxTradingDays: null,
    consistency: 'Max 4% daily loss',
    restrictions: ['No copy trading', 'EA allowed with conditions']
  },
  apex: {
    name: 'Apex Trader Funding',
    phases: {
      evaluation: { name: 'Evaluation', target: 8, maxDailyloss: 4, maxTotalLoss: 8, timeLimit: 30 },
      funded: { name: 'Funded', target: 0, maxDailyloss: 4, maxTotalLoss: 8, timeLimit: null }
    },
    accountSizes: ['25000', '50000', '100000', '150000', '300000'],
    profitSplit: { trader: 90, firm: 10 },
    minTradingDays: 7,
    maxTradingDays: 30,
    consistency: 'No single day loss > 4%',
    restrictions: ['No weekend holding', 'No high leverage on news']
  },
  fundednext: {
    name: 'FundedNext',
    phases: {
      express: { name: 'Express', target: 15, maxDailyloss: 5, maxTotalLoss: 8, timeLimit: 4 },
      evaluation: { name: 'Evaluation', target: 10, maxDailyloss: 5, maxTotalLoss: 10, timeLimit: 30 },
      consistency: { name: 'Consistency', target: 5, maxDailyloss: 5, maxTotalLoss: 10, timeLimit: 60 },
      funded: { name: 'Funded', target: 0, maxDailyloss: 5, maxTotalLoss: 10, timeLimit: null }
    },
    accountSizes: ['6000', '15000', '25000', '50000', '100000', '200000'],
    profitSplit: { trader: 80, firm: 20 },
    minTradingDays: 5,
    maxTradingDays: 30,
    consistency: 'Consistent profit growth required',
    restrictions: ['No weekend holding', 'Max 2 positions on news']
  }
}

// Real-time API configuration
const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-api-domain.com/api'
  : 'http://localhost:5000/api'

// Enhanced currency pairs with real market data and volatility indicators (from original)
const CURRENCY_PAIRS = {
  // Major Forex Pairs
  'EURUSD': { symbol: 'EUR/USD', pipValue: 10, spread: 0.8, defaultPrice: 1.08500, volatility: 'medium', description: 'Euro vs US Dollar - Most traded pair' },
  'GBPUSD': { symbol: 'GBP/USD', pipValue: 10, spread: 1.2, defaultPrice: 1.26500, volatility: 'high', description: 'British Pound vs US Dollar - Cable' },
  'USDJPY': { symbol: 'USD/JPY', pipValue: 6.68, spread: 0.9, defaultPrice: 149.50, volatility: 'medium', description: 'US Dollar vs Japanese Yen' },
  'USDCHF': { symbol: 'USD/CHF', pipValue: 11.17, spread: 1.8, defaultPrice: 0.89500, volatility: 'low', description: 'US Dollar vs Swiss Franc' },
  'AUDUSD': { symbol: 'AUD/USD', pipValue: 10, spread: 1.4, defaultPrice: 0.66500, volatility: 'medium', description: 'Australian Dollar vs US Dollar' },
  'USDCAD': { symbol: 'USD/CAD', pipValue: 7.33, spread: 1.6, defaultPrice: 1.36500, volatility: 'medium', description: 'US Dollar vs Canadian Dollar' },
  'NZDUSD': { symbol: 'NZD/USD', pipValue: 10, spread: 2.0, defaultPrice: 0.60500, volatility: 'high', description: 'New Zealand Dollar vs US Dollar' },
  
  // Cross Pairs
  'EURJPY': { symbol: 'EUR/JPY', pipValue: 6.68, spread: 1.8, defaultPrice: 162.50, volatility: 'high', description: 'Euro vs Japanese Yen' },
  'GBPJPY': { symbol: 'GBP/JPY', pipValue: 6.68, spread: 2.5, defaultPrice: 189.50, volatility: 'very_high', description: 'British Pound vs Japanese Yen' },
  'EURGBP': { symbol: 'EUR/GBP', pipValue: 12.65, spread: 1.5, defaultPrice: 0.85500, volatility: 'low', description: 'Euro vs British Pound' },
  'AUDCAD': { symbol: 'AUD/CAD', pipValue: 7.33, spread: 2.0, defaultPrice: 0.91200, volatility: 'medium', description: 'Australian Dollar vs Canadian Dollar' },
  'AUDCHF': { symbol: 'AUD/CHF', pipValue: 11.17, spread: 2.2, defaultPrice: 0.59500, volatility: 'medium', description: 'Australian Dollar vs Swiss Franc' },
  'AUDJPY': { symbol: 'AUD/JPY', pipValue: 6.68, spread: 1.8, defaultPrice: 99.50, volatility: 'high', description: 'Australian Dollar vs Japanese Yen' },
  'CADJPY': { symbol: 'CAD/JPY', pipValue: 6.68, spread: 2.0, defaultPrice: 109.50, volatility: 'medium', description: 'Canadian Dollar vs Japanese Yen' },
  'CHFJPY': { symbol: 'CHF/JPY', pipValue: 6.68, spread: 2.5, defaultPrice: 167.00, volatility: 'high', description: 'Swiss Franc vs Japanese Yen' },
  'EURAUD': { symbol: 'EUR/AUD', pipValue: 10, spread: 2.5, defaultPrice: 1.63000, volatility: 'medium', description: 'Euro vs Australian Dollar' },
  'EURCAD': { symbol: 'EUR/CAD', pipValue: 7.33, spread: 2.2, defaultPrice: 1.48000, volatility: 'medium', description: 'Euro vs Canadian Dollar' },
  'EURCHF': { symbol: 'EUR/CHF', pipValue: 11.17, spread: 1.8, defaultPrice: 0.97000, volatility: 'low', description: 'Euro vs Swiss Franc' },
  'GBPAUD': { symbol: 'GBP/AUD', pipValue: 10, spread: 3.0, defaultPrice: 1.90000, volatility: 'high', description: 'British Pound vs Australian Dollar' },
  'GBPCAD': { symbol: 'GBP/CAD', pipValue: 7.33, spread: 2.8, defaultPrice: 1.72500, volatility: 'high', description: 'British Pound vs Canadian Dollar' },
  'GBPCHF': { symbol: 'GBP/CHF', pipValue: 11.17, spread: 2.5, defaultPrice: 1.13000, volatility: 'high', description: 'British Pound vs Swiss Franc' },
  'GBPNZD': { symbol: 'GBP/NZD', pipValue: 10, spread: 4.0, defaultPrice: 2.09000, volatility: 'very_high', description: 'British Pound vs New Zealand Dollar' },
  'NZDCAD': { symbol: 'NZD/CAD', pipValue: 7.33, spread: 2.5, defaultPrice: 0.82500, volatility: 'medium', description: 'New Zealand Dollar vs Canadian Dollar' },
  'NZDCHF': { symbol: 'NZD/CHF', pipValue: 11.17, spread: 2.8, defaultPrice: 0.54000, volatility: 'medium', description: 'New Zealand Dollar vs Swiss Franc' },
  'NZDJPY': { symbol: 'NZD/JPY', pipValue: 6.68, spread: 2.2, defaultPrice: 90.50, volatility: 'high', description: 'New Zealand Dollar vs Japanese Yen' },
  
  // Major Indices
  'NAS100': { symbol: 'NASDAQ 100', pipValue: 1, spread: 2.0, defaultPrice: 16500.0, volatility: 'very_high', description: 'NASDAQ 100 Index' },
  'SPX500': { symbol: 'S&P 500', pipValue: 1, spread: 0.5, defaultPrice: 4500.0, volatility: 'high', description: 'S&P 500 Index' },
  'US30': { symbol: 'Dow Jones 30', pipValue: 1, spread: 3.0, defaultPrice: 35000.0, volatility: 'high', description: 'Dow Jones Industrial Average' },
  'GER40': { symbol: 'DAX 40', pipValue: 1, spread: 1.5, defaultPrice: 16800.0, volatility: 'medium', description: 'German DAX Index' },
  'UK100': { symbol: 'FTSE 100', pipValue: 1, spread: 1.0, defaultPrice: 7600.0, volatility: 'medium', description: 'UK FTSE 100 Index' },
  'FRA40': { symbol: 'CAC 40', pipValue: 1, spread: 1.5, defaultPrice: 7400.0, volatility: 'medium', description: 'French CAC 40 Index' },
  'JPN225': { symbol: 'Nikkei 225', pipValue: 1, spread: 8.0, defaultPrice: 33000.0, volatility: 'medium', description: 'Japanese Nikkei 225 Index' },
  'AUS200': { symbol: 'ASX 200', pipValue: 1, spread: 2.0, defaultPrice: 7300.0, volatility: 'medium', description: 'Australian ASX 200 Index' },
  
  // Commodities
  'XAUUSD': { symbol: 'Gold', pipValue: 1, spread: 0.3, defaultPrice: 2050.00, volatility: 'high', description: 'Gold vs US Dollar' },
  'XAGUSD': { symbol: 'Silver', pipValue: 1, spread: 0.03, defaultPrice: 24.50, volatility: 'very_high', description: 'Silver vs US Dollar' },
  'USOIL': { symbol: 'Crude Oil', pipValue: 1, spread: 0.05, defaultPrice: 75.00, volatility: 'very_high', description: 'US Crude Oil' },
  'UKOIL': { symbol: 'Brent Oil', pipValue: 1, spread: 0.05, defaultPrice: 79.00, volatility: 'very_high', description: 'UK Brent Oil' },
  'NATGAS': { symbol: 'Natural Gas', pipValue: 1, spread: 0.01, defaultPrice: 2.80, volatility: 'very_high', description: 'Natural Gas' },
  
  // Crypto (if supported)
  'BTCUSD': { symbol: 'Bitcoin', pipValue: 1, spread: 50.0, defaultPrice: 43000.0, volatility: 'very_high', description: 'Bitcoin vs US Dollar' },
  'ETHUSD': { symbol: 'Ethereum', pipValue: 1, spread: 5.0, defaultPrice: 2600.0, volatility: 'very_high', description: 'Ethereum vs US Dollar' }
}

// Risk management suggestions based on pair volatility (from original)
const RISK_SUGGESTIONS = {
  'low': { maxRisk: 2.5, suggestedRisk: 1.5, stopLossPips: 30, takeProfitRatio: 1.5 },
  'medium': { maxRisk: 2.0, suggestedRisk: 1.0, stopLossPips: 40, takeProfitRatio: 2.0 },
  'high': { maxRisk: 1.5, suggestedRisk: 0.75, stopLossPips: 50, takeProfitRatio: 2.5 },
  'very_high': { maxRisk: 1.0, suggestedRisk: 0.5, stopLossPips: 60, takeProfitRatio: 3.0 }
}

const RISK_LEVELS = {
  conservative: { percentage: 0.5, description: 'Very safe trading approach' },
  moderate: { percentage: 1.0, description: 'Balanced risk management' },
  aggressive: { percentage: 1.5, description: 'Higher risk for more rewards' },
  custom: { percentage: 1.5, description: 'Set your own risk level' }
}

// Advanced Position Sizing Methods
const POSITION_SIZING_METHODS = {
  fixed: { name: 'Fixed Risk %', description: 'Fixed percentage of account per trade', icon: Percent },
  kelly: { name: 'Kelly Criterion', description: 'Optimal position size based on win rate and R:R', icon: Brain },
  volatility: { name: 'Volatility-Based', description: 'Position size adjusted for market volatility', icon: Activity },
  martingale: { name: 'Martingale', description: 'Increase position after losses (high risk)', icon: TrendingDown },
  antiMartingale: { name: 'Anti-Martingale', description: 'Increase position after wins', icon: TrendingUp }
}

// Timeframe Risk Multipliers
const TIMEFRAME_MULTIPLIERS = {
  'M1': { volatility: 4.0, risk: 'Very High', multiplier: 2.0 },
  'M5': { volatility: 2.5, risk: 'High', multiplier: 1.5 },
  'M15': { volatility: 1.8, risk: 'Medium-High', multiplier: 1.2 },
  'H1': { volatility: 1.2, risk: 'Medium', multiplier: 1.0 },
  'H4': { volatility: 0.8, risk: 'Medium-Low', multiplier: 0.8 },
  'D1': { volatility: 0.5, risk: 'Low', multiplier: 0.6 },
  'W1': { volatility: 0.3, risk: 'Very Low', multiplier: 0.5 }
}

// Advanced Risk Calculation Functions
const calculateKellyPosition = (winRate: number, avgWin: number, avgLoss: number, accountSize: number) => {
  const winProbability = winRate / 100
  const lossProbability = 1 - winProbability
  const payoffRatio = avgWin / avgLoss
  const kellyFraction = (winProbability * payoffRatio - lossProbability) / payoffRatio
  return Math.max(0, Math.min(0.25, kellyFraction)) * accountSize // Cap at 25%
}

const calculateVolatilityAdjustedPosition = (basePosition: number, marketVolatility: number, timeframe: string) => {
  const timeframeData = TIMEFRAME_MULTIPLIERS[timeframe as keyof typeof TIMEFRAME_MULTIPLIERS] || TIMEFRAME_MULTIPLIERS.H1
  const volatilityAdjustment = 1 - (marketVolatility * timeframeData.multiplier)
  return basePosition * Math.max(0.1, volatilityAdjustment)
}

const calculateAdvancedRiskMetrics = (trades: any[], accountSize: number) => {
  if (!trades || trades.length === 0) return null
  
  const returns = trades.map(t => t.profit / accountSize)
  const positiveReturns = returns.filter(r => r > 0)
  const negativeReturns = returns.filter(r => r < 0)
  
  // Sharpe Ratio calculation
  const avgReturn = returns.reduce((a, b) => a + b, 0) / returns.length
  const returnVariance = returns.reduce((sum, r) => sum + Math.pow(r - avgReturn, 2), 0) / returns.length
  const sharpeRatio = avgReturn / Math.sqrt(returnVariance)
  
  // Maximum Drawdown
  let peak = 0
  let maxDrawdown = 0
  let runningSum = 0
  
  for (const ret of returns) {
    runningSum += ret
    if (runningSum > peak) peak = runningSum
    const drawdown = peak - runningSum
    if (drawdown > maxDrawdown) maxDrawdown = drawdown
  }
  
  // Win Rate and Profit Factor
  const winRate = (positiveReturns.length / trades.length) * 100
  const totalProfit = positiveReturns.reduce((a, b) => a + b, 0)
  const totalLoss = Math.abs(negativeReturns.reduce((a, b) => a + b, 0))
  const profitFactor = totalLoss > 0 ? totalProfit / totalLoss : totalProfit > 0 ? 999 : 0
  
  return {
    sharpeRatio: isFinite(sharpeRatio) ? sharpeRatio : 0,
    maxDrawdown: maxDrawdown * 100,
    winRate,
    profitFactor,
    avgWin: positiveReturns.length > 0 ? totalProfit / positiveReturns.length : 0,
    avgLoss: negativeReturns.length > 0 ? totalLoss / negativeReturns.length : 0,
    expectancy: (winRate/100 * (totalProfit/positiveReturns.length || 0)) - ((100-winRate)/100 * (totalLoss/negativeReturns.length || 0))
  }
}

export default function FXChartsPage() {
  const [activeTab, setActiveTab] = useState('charts')
  
  // API connection state
  const [apiStatus, setApiStatus] = useState<{
    connected: boolean;
    lastCheck: Date | null;
    error: string | null;
  }>({
    connected: false,
    lastCheck: null,
    error: null
  })
  
  // Enhanced AI Analysis state
  const [aiAnalysis, setAiAnalysis] = useState<{
    content: string | null;
    isAnalyzing: boolean;
    error: string | null;
    timestamp: Date | null;
    dataPointsAnalyzed: any;
  }>({
    content: null,
    isAnalyzing: false,
    error: null,
    timestamp: null,
    dataPointsAnalyzed: null
  })
  
  // ChatGPT API configuration
  const [chatGptApiKey, setChatGptApiKey] = useState('')
  const [showApiKey, setShowApiKey] = useState(false)
  
  // News and market data
  const [newsData, setNewsData] = useState<any[]>([])
  const [isLoadingNews, setIsLoadingNews] = useState(false)

  // Enhanced state management with real-time data
  const [realTimeData, setRealTimeData] = useState<{
    price: number;
    change: number;
    changePercent: number;
    lastUpdate: Date | null;
    isLive: boolean;
  }>({
    price: 0,
    change: 0,
    changePercent: 0,
    lastUpdate: null,
    isLive: false
  })
  
  // Advanced market analysis
  const [marketAnalysis, setMarketAnalysis] = useState<{
    trend: string;
    strength: number;
    support: number;
    resistance: number;
    signals: string[];
    rsi: number;
    macd: number;
    bollinger: { upper: number; lower: number; middle: number };
  }>({
    trend: 'neutral',
    strength: 50,
    support: 0,
    resistance: 0,
    signals: [],
    rsi: 50,
    macd: 0,
    bollinger: { upper: 0, lower: 0, middle: 0 }
  })
  
  const [tradeHistory, setTradeHistory] = useState<any[]>([])
  const [performanceMetrics, setPerformanceMetrics] = useState({
    winRate: 0,
    avgRisk: 0,
    profitFactor: 0,
    sharpeRatio: 0,
    maxDrawdown: 0,
    totalTrades: 0,
    profitableTrades: 0,
    totalProfit: 0,
    totalLoss: 0,
    avgWin: 0,
    avgLoss: 0,
    largestWin: 0,
    largestLoss: 0,
    consecutiveWins: 0,
    consecutiveLosses: 0,
    avgTradeDuration: 0,
    monthlyReturn: 0,
    riskAdjustedReturn: 0
  })
  
  // Enhanced prop firm tracking
  const [propFirmStatus, setPropFirmStatus] = useState<{
    currentProfit: number;
    dailyLoss: number;
    totalLoss: number;
    profitTarget: number;
    maxDailyLoss: number;
    maxTotalLoss: number;
    progressToTarget: number;
    isCompliant: boolean;
    warnings: string[];
    tradingDays: number;
    avgDailyProfit: number;
  }>({
    currentProfit: 0,
    dailyLoss: 0,
    totalLoss: 0,
    profitTarget: 0,
    maxDailyLoss: 0,
    maxTotalLoss: 0,
    progressToTarget: 0,
    isCompliant: true,
    warnings: [],
    tradingDays: 0,
    avgDailyProfit: 0
  })

  // Trading calculator state
  const [currencyPair, setCurrencyPair] = useState('EURUSD')
  const [accountSize, setAccountSize] = useState('10000')
  const [currentBalance, setCurrentBalance] = useState('10000')
  const [entryPrice, setEntryPrice] = useState('')
  const [stopLoss, setStopLoss] = useState('')
  const [takeProfit, setTakeProfit] = useState('')
  const [lotSize, setLotSize] = useState('')
  const [tradeDirection, setTradeDirection] = useState('buy')
  const [riskLevel, setRiskLevel] = useState('moderate')
  const [customRisk, setCustomRisk] = useState('1.0')
  
  // Advanced Position Sizing State
  const [positionSizingMethod, setPositionSizingMethod] = useState<string>('fixed')
  const [kellyWinRate, setKellyWinRate] = useState<number>(60)
  const [kellyAvgWin, setKellyAvgWin] = useState<number>(150)
  const [kellyAvgLoss, setKellyAvgLoss] = useState<number>(100)
  const [timeframe, setTimeframe] = useState<string>('H1')
  const [showAdvancedOptions, setShowAdvancedOptions] = useState<boolean>(false)
  
  // Intelligent Suggestions State
  const [suggestions, setSuggestions] = useState<Array<{
    type: string;
    severity: 'info' | 'warning' | 'error';
    message: string;
    action?: () => void;
  }>>([])
  
  // Enhanced calculation results
  const [calculationResults, setCalculationResults] = useState<any>(null)
  const [propFirm, setPropFirm] = useState('fivepercenters')
  const [challengePhase, setChallengePhase] = useState('phase1')

  // Real-time data hooks
  const { 
    price: livePrice, 
    priceData, 
    loading: priceLoading, 
    error: priceError 
  } = useRealTimePrice(currencyPair, '1m', 1000)
  
  const { 
    analysis, 
    loading: analysisLoading, 
    error: analysisError 
  } = useMarketAnalysis(currencyPair, 5000)
  
  const { 
    news: liveNews, 
    loading: newsLoading, 
    error: newsError 
  } = useMarketNews(300000)

  // Sync real-time hook data with existing state
  useEffect(() => {
    if (priceData && priceData.status === 'success') {
      setRealTimeData({
        price: priceData.price,
        change: priceData.change,
        changePercent: priceData.change_pct,
        lastUpdate: new Date(),
        isLive: true
      })
      
      // Update API status
      setApiStatus(prev => ({
        ...prev,
        connected: true,
        lastCheck: new Date(),
        error: null
      }))
      
      // Auto-fill entry price if empty
      if (!entryPrice) {
        setEntryPrice(priceData.price.toString())
      }
    } else if (priceError) {
      setApiStatus(prev => ({
        ...prev,
        connected: false,
        error: priceError
      }))
    }
  }, [priceData, priceError, entryPrice])

  // Sync news data
  useEffect(() => {
    if (liveNews && liveNews.length > 0) {
      setNewsData(liveNews)
      setIsLoadingNews(newsLoading)
    }
  }, [liveNews, newsLoading])
  
  const [calculations, setCalculations] = useState({
    lotSize: 0,
    positionSize: 0,
    riskAmount: 0,
    potentialProfit: 0,
    potentialLoss: 0,
    riskRewardRatio: 0,
    pipValue: 0,
    stopLossPips: 0,
    takeProfitPips: 0,
    margin: 0,
    leverage: 0,
    accountRisk: 0
  })

  // Check API health and load saved API key
  useEffect(() => {
    const checkApiHealth = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/health`)
        const data = await response.json()
        
        setApiStatus({
          connected: response.ok,
          lastCheck: new Date(),
          error: response.ok ? null : data.error || 'API unavailable'
        })
      } catch (error) {
        setApiStatus({
          connected: false,
          lastCheck: new Date(),
          error: 'Failed to connect to trading API'
        })
      }
    }
    
    // Load saved ChatGPT API key
    const savedApiKey = localStorage.getItem('fx_calculator_chatgpt_key')
    if (savedApiKey) {
      setChatGptApiKey(savedApiKey)
    }
    
    checkApiHealth()
    const healthInterval = setInterval(checkApiHealth, 30000) // Check every 30 seconds
    
    return () => clearInterval(healthInterval)
  }, [])

  // Real-time price data fetching from API
  const fetchRealTimePrice = useCallback(async (symbol: string) => {
    if (!apiStatus.connected) return
    
    try {
      const response = await fetch(`${API_BASE_URL}/price/${symbol}`)
      const data = await response.json()
      
      if (data.status === 'success') {
        setRealTimeData({
          price: data.price,
          change: data.change,
          changePercent: data.change_pct,
          lastUpdate: new Date(data.timestamp),
          isLive: true
        })
        
        // Update entry price if not set
        if (!entryPrice) {
          setEntryPrice(data.price.toString())
        }
      }
    } catch (error) {
      console.error('Failed to fetch real-time price:', error)
    }
  }, [apiStatus.connected, entryPrice])

  // Real-time price updates
  useEffect(() => {
    if (!realTimeData.isLive || !apiStatus.connected) return

    const interval = setInterval(() => {
      fetchRealTimePrice(currencyPair)
    }, 5000) // Update every 5 seconds when connected to API

    return () => clearInterval(interval)
  }, [currencyPair, realTimeData.isLive, apiStatus.connected, fetchRealTimePrice])
  
  // Fallback: Real-time price simulation when API is not available
  useEffect(() => {
    if (realTimeData.isLive && apiStatus.connected) return // Use API when available
    if (!realTimeData.isLive) return

    const interval = setInterval(() => {
      const pair = CURRENCY_PAIRS[currencyPair as keyof typeof CURRENCY_PAIRS]
      const basePrice = parseFloat(entryPrice) || pair.defaultPrice
      const volatility = {
        'low': 0.0003,
        'medium': 0.0005,
        'high': 0.0008,
        'very_high': 0.0012
      }[pair.volatility] || 0.0005

      const randomChange = (Math.random() - 0.5) * 2 * volatility
      const newPrice = basePrice * (1 + randomChange)
      const change = newPrice - basePrice
      const changePercent = (change / basePrice) * 100

      setRealTimeData(prev => ({
        ...prev,
        price: parseFloat(newPrice.toFixed(currencyPair.includes('JPY') ? 2 : 5)),
        change: parseFloat(change.toFixed(5)),
        changePercent: parseFloat(changePercent.toFixed(2)),
        lastUpdate: new Date()
      }))
    }, 3000) // Slower simulation updates

    return () => clearInterval(interval)
  }, [currencyPair, entryPrice, realTimeData.isLive, apiStatus.connected])

  // Enhanced calculation function
  const calculateTrade = () => {
    const account = parseFloat(accountSize) || 10000
    const balance = parseFloat(currentBalance) || account
    const entry = parseFloat(entryPrice) || CURRENCY_PAIRS[currencyPair as keyof typeof CURRENCY_PAIRS].defaultPrice
    const sl = parseFloat(stopLoss) || 0
    const tp = parseFloat(takeProfit) || 0
    const manualLotSize = parseFloat(lotSize) || 0

    // Validate inputs
    if (!entry || entry <= 0) return

    // Determine risk percentage
    let riskPercentage = RISK_LEVELS[riskLevel as keyof typeof RISK_LEVELS].percentage
    if (riskLevel === 'custom') {
      riskPercentage = parseFloat(customRisk) || 1.0
    }

    // Calculate pips and risk
    const pipSize = currencyPair.includes('JPY') ? 0.01 : 0.0001
    const stopLossPips = sl > 0 ? Math.abs(entry - sl) / pipSize : 0
    const takeProfitPips = tp > 0 ? Math.abs(tp - entry) / pipSize : 0
    const pipValue = CURRENCY_PAIRS[currencyPair as keyof typeof CURRENCY_PAIRS].pipValue
    
    // Calculate position size based on risk
    const riskAmount = balance * (riskPercentage / 100)
    let finalLotSize = manualLotSize

    if (finalLotSize === 0 && stopLossPips > 0) {
      finalLotSize = riskAmount / (stopLossPips * pipValue)
    }

    // Calculate potential profit/loss
    const positionSize = finalLotSize * 100000 // Standard lot size
    const potentialLoss = stopLossPips * pipValue * finalLotSize
    const potentialProfit = takeProfitPips * pipValue * finalLotSize
    const riskRewardRatio = potentialLoss > 0 ? potentialProfit / potentialLoss : 0

    // Calculate margin and leverage (approximate)
    const margin = positionSize / 100 // Assuming 1:100 leverage
    const leverage = positionSize / balance
    const accountRisk = (riskAmount / balance) * 100

    setCalculations({
      lotSize: parseFloat(finalLotSize.toFixed(2)),
      positionSize: Math.round(positionSize),
      riskAmount: Math.round(riskAmount * 100) / 100,
      potentialProfit: Math.round(potentialProfit * 100) / 100,
      potentialLoss: Math.round(potentialLoss * 100) / 100,
      riskRewardRatio: Math.round(riskRewardRatio * 100) / 100,
      pipValue: Math.round(pipValue * 100) / 100,
      stopLossPips: Math.round(stopLossPips),
      takeProfitPips: Math.round(takeProfitPips),
      margin: Math.round(margin * 100) / 100,
      leverage: Math.round(leverage * 100) / 100,
      accountRisk: Math.round(accountRisk * 100) / 100
    })

    // Calculate prop firm status
    calculatePropFirmStatus(balance, account, riskAmount)
  }

  // Enhanced prop firm compliance calculation
  const calculatePropFirmStatus = (balance: number, account: number, riskAmount: number) => {
    const firm = PROP_FIRMS[propFirm as keyof typeof PROP_FIRMS]
    const phase = firm.phases[challengePhase as keyof typeof firm.phases]
    
    const currentProfit = balance - account
    const profitTarget = account * (phase.target / 100)
    const maxDailyLoss = account * (phase.maxDailyloss / 100)
    const maxTotalLoss = account * (phase.maxTotalLoss / 100)
    
    const dailyLossFromRisk = riskAmount
    const totalLossFromBalance = Math.max(0, account - balance)
    
    const progressToTarget = phase.target > 0 ? Math.max(0, (currentProfit / profitTarget) * 100) : 100
    
    const warnings: string[] = []
    let isCompliant = true
    
    // Check daily loss limit
    if (dailyLossFromRisk > maxDailyLoss * 0.8) {
      warnings.push(dailyLossFromRisk > maxDailyLoss ? 
        'VIOLATION: Risk exceeds daily loss limit' : 
        'WARNING: Approaching daily loss limit')
      if (dailyLossFromRisk > maxDailyLoss) isCompliant = false
    }
    
    // Check total loss limit
    if (totalLossFromBalance > maxTotalLoss * 0.8) {
      warnings.push(totalLossFromBalance > maxTotalLoss ? 
        'VIOLATION: Total loss exceeds limit' : 
        'WARNING: Approaching total loss limit')
      if (totalLossFromBalance > maxTotalLoss) isCompliant = false
    }
    
    // Risk/reward warnings
    if (calculations.riskRewardRatio < 1.5) {
      warnings.push('Consider better risk/reward ratio (minimum 1:1.5)')
    }
    
    if (calculations.accountRisk > 2) {
      warnings.push('High account risk - consider reducing position size')
    }

    setPropFirmStatus({
      currentProfit: Math.round(currentProfit * 100) / 100,
      dailyLoss: Math.round(dailyLossFromRisk * 100) / 100,
      totalLoss: Math.round(totalLossFromBalance * 100) / 100,
      profitTarget: Math.round(profitTarget * 100) / 100,
      maxDailyLoss: Math.round(maxDailyLoss * 100) / 100,
      maxTotalLoss: Math.round(maxTotalLoss * 100) / 100,
      progressToTarget: Math.min(100, progressToTarget),
      isCompliant,
      warnings,
      tradingDays: Math.floor((Date.now() - new Date('2024-01-01').getTime()) / (1000 * 60 * 60 * 24)),
      avgDailyProfit: currentProfit / Math.max(1, Math.floor((Date.now() - new Date('2024-01-01').getTime()) / (1000 * 60 * 60 * 24)))
    })
  }

  // Enhanced calculation function with advanced position sizing
  const calculateAdvancedTrade = () => {
    const account = parseFloat(accountSize) || 10000
    const balance = parseFloat(currentBalance) || account
    const entry = parseFloat(entryPrice) || CURRENCY_PAIRS[currencyPair as keyof typeof CURRENCY_PAIRS].defaultPrice
    const sl = parseFloat(stopLoss) || 0
    const tp = parseFloat(takeProfit) || 0
    const manualLotSize = parseFloat(lotSize) || 0

    if (!entry || entry <= 0) return

    // Determine risk percentage
    let riskPercentage = RISK_LEVELS[riskLevel as keyof typeof RISK_LEVELS].percentage
    if (riskLevel === 'custom') {
      riskPercentage = parseFloat(customRisk) || 1.0
    }

    // Calculate pips and basic metrics
    const pipSize = currencyPair.includes('JPY') ? 0.01 : 0.0001
    const stopLossPips = sl > 0 ? Math.abs(entry - sl) / pipSize : 0
    const takeProfitPips = tp > 0 ? Math.abs(tp - entry) / pipSize : 0
    const pipValue = CURRENCY_PAIRS[currencyPair as keyof typeof CURRENCY_PAIRS].pipValue
    
    // Base risk amount
    const baseRiskAmount = balance * (riskPercentage / 100)
    let finalRiskAmount = baseRiskAmount
    let finalLotSize = manualLotSize

    // Advanced Position Sizing Logic
    switch (positionSizingMethod) {
      case 'fixed':
        finalRiskAmount = baseRiskAmount
        break
        
      case 'kelly':
        if (tradeHistory.length >= 10) {
          const metrics = calculateAdvancedRiskMetrics(tradeHistory, account)
          if (metrics && metrics.avgWin > 0 && metrics.avgLoss > 0) {
            finalRiskAmount = calculateKellyPosition(metrics.winRate, metrics.avgWin, metrics.avgLoss, balance)
          }
        } else {
          // Use manual Kelly inputs for new traders
          finalRiskAmount = calculateKellyPosition(kellyWinRate, kellyAvgWin, kellyAvgLoss, balance)
        }
        break
        
      case 'volatility':
        const pairData = CURRENCY_PAIRS[currencyPair as keyof typeof CURRENCY_PAIRS]
        const marketVolatility = {
          'low': 0.02,
          'medium': 0.05,
          'high': 0.08,
          'very_high': 0.12
        }[pairData.volatility] || 0.05
        
        finalRiskAmount = calculateVolatilityAdjustedPosition(baseRiskAmount, marketVolatility, timeframe)
        break
        
      case 'martingale':
        // Increase position after losses (dangerous)
        const recentTrades = tradeHistory.slice(-5)
        const consecutiveLosses = recentTrades.reverse().findIndex(t => t.profit > 0)
        const lossStreak = consecutiveLosses === -1 ? recentTrades.length : consecutiveLosses
        finalRiskAmount = baseRiskAmount * Math.pow(1.5, Math.min(lossStreak, 3)) // Cap at 3x
        break
        
      case 'antiMartingale':
        // Increase position after wins
        const recentWins = tradeHistory.slice(-5)
        const consecutiveWins = recentWins.reverse().findIndex(t => t.profit <= 0)
        const winStreak = consecutiveWins === -1 ? recentWins.length : consecutiveWins
        finalRiskAmount = baseRiskAmount * Math.pow(1.2, Math.min(winStreak, 4)) // Cap at 2.07x
        break
        
      default:
        finalRiskAmount = baseRiskAmount
    }

    // Calculate lot size from risk amount
    if (finalLotSize === 0 && stopLossPips > 0) {
      finalLotSize = finalRiskAmount / (stopLossPips * pipValue)
    }

    // Calculate advanced metrics
    const positionSize = finalLotSize * 100000
    const potentialLoss = stopLossPips * pipValue * finalLotSize
    const potentialProfit = takeProfitPips * pipValue * finalLotSize
    const riskRewardRatio = potentialLoss > 0 ? potentialProfit / potentialLoss : 0

    // Enhanced margin calculations with volatility adjustment
    const baseMargin = positionSize / 100 // 1:100 leverage
    const pairData = CURRENCY_PAIRS[currencyPair as keyof typeof CURRENCY_PAIRS]
    const volatilityMultiplier = {
      'low': 1.0,
      'medium': 1.1,
      'high': 1.2,
      'very_high': 1.3
    }[pairData.volatility] || 1.0
    
    const adjustedMargin = baseMargin * volatilityMultiplier
    const marginUtilization = (adjustedMargin / balance) * 100
    const leverage = positionSize / balance
    const accountRisk = (finalRiskAmount / balance) * 100

    // Advanced risk metrics
    const breakEven = entry + (pairData.spread * pipSize)
    const maxDrawdownRisk = (finalRiskAmount / balance) * 100
    const positionValue = entry * finalLotSize * 100000
    
    const results = {
      lotSize: parseFloat(finalLotSize.toFixed(2)),
      positionSize: Math.round(positionSize),
      riskAmount: Math.round(finalRiskAmount * 100) / 100,
      potentialProfit: Math.round(potentialProfit * 100) / 100,
      potentialLoss: Math.round(potentialLoss * 100) / 100,
      riskRewardRatio: Math.round(riskRewardRatio * 100) / 100,
      pipValue: Math.round(pipValue * 100) / 100,
      stopLossPips: Math.round(stopLossPips),
      takeProfitPips: Math.round(takeProfitPips),
      margin: Math.round(adjustedMargin * 100) / 100,
      marginUtilization: Math.round(marginUtilization * 100) / 100,
      leverage: Math.round(leverage * 100) / 100,
      accountRisk: Math.round(accountRisk * 100) / 100,
      breakEven: parseFloat(breakEven.toFixed(currencyPair.includes('JPY') ? 2 : 5)),
      positionValue: Math.round(positionValue),
      maxDrawdownRisk: Math.round(maxDrawdownRisk * 100) / 100
    }

    setCalculationResults(results)
    generateIntelligentSuggestions(results)
    calculatePropFirmStatus(balance, account, finalRiskAmount)
  }
  
  // Generate intelligent trading suggestions
  const generateIntelligentSuggestions = (results: any) => {
    const newSuggestions = []
    const pairData = CURRENCY_PAIRS[currencyPair as keyof typeof CURRENCY_PAIRS]
    
    // Risk-based suggestions
    if (results.accountRisk > 3) {
      newSuggestions.push({
        type: 'risk',
        severity: 'warning' as const,
        message: `High risk (${results.accountRisk.toFixed(1)}%) - Consider reducing to 1-2% for better long-term results`,
        action: () => setCustomRisk('2')
      })
    }
    
    // R:R ratio optimization
    if (results.riskRewardRatio < 1.5) {
      const suggestedTP = parseFloat(entryPrice) + (Math.abs(parseFloat(stopLoss) - parseFloat(entryPrice)) * 2)
      newSuggestions.push({
        type: 'rratio',
        severity: 'info' as const,
        message: `Poor R:R ratio (${results.riskRewardRatio.toFixed(2)}:1). Consider TP at ${suggestedTP.toFixed(5)} for 2:1 ratio`,
        action: () => setTakeProfit(suggestedTP.toString())
      })
    }
    
    // Market volatility warnings
    if (pairData.volatility === 'very_high' && results.accountRisk > 1.5) {
      newSuggestions.push({
        type: 'market',
        severity: 'warning' as const,
        message: `High volatility pair (${pairData.symbol}) detected. Consider reducing position size by 50%`
      })
    }
    
    // Margin utilization warnings
    if (results.marginUtilization > 30) {
      newSuggestions.push({
        type: 'margin',
        severity: 'error' as const,
        message: `High margin usage (${results.marginUtilization.toFixed(1)}%). Risk of margin call - reduce position size`
      })
    }
    
    // Position sizing method suggestions
    if (positionSizingMethod === 'fixed' && tradeHistory.length >= 20) {
      const metrics = calculateAdvancedRiskMetrics(tradeHistory, parseFloat(accountSize))
      if (metrics && metrics.winRate > 55) {
        newSuggestions.push({
          type: 'optimization',
          severity: 'info' as const,
          message: `Good win rate (${metrics.winRate.toFixed(1)}%)! Consider Kelly Criterion for optimal position sizing`,
          action: () => setPositionSizingMethod('kelly')
        })
      }
    }
    
    // Prop firm specific suggestions
    if (propFirm && results.accountRisk > 2) {
      const firmData = PROP_FIRMS[propFirm as keyof typeof PROP_FIRMS]
      newSuggestions.push({
        type: 'propfirm',
        severity: 'warning' as const,
        message: `${firmData.name} challenge: High risk may violate daily loss limits. Recommended max 1.5% per trade`
      })
    }
    
    setSuggestions(newSuggestions)
  }

  // Auto-calculate when inputs change
  useEffect(() => {
    if (entryPrice && (stopLoss || lotSize)) {
      calculateAdvancedTrade()
    }
  }, [entryPrice, stopLoss, takeProfit, lotSize, accountSize, currentBalance, riskLevel, customRisk, propFirm, challengePhase, currencyPair, positionSizingMethod, kellyWinRate, kellyAvgWin, kellyAvgLoss, timeframe, tradeHistory])
  
  // Auto-calculate when inputs change (keep original for compatibility)
  useEffect(() => {
    if (entryPrice && (stopLoss || lotSize)) {
      calculateTrade()
    }
  }, [entryPrice, stopLoss, takeProfit, lotSize, accountSize, currentBalance, riskLevel, customRisk, propFirm, challengePhase, currencyPair])

  // Advanced market analysis using API
  const generateMarketAnalysis = async () => {
    if (!apiStatus.connected) {
      // Fallback to simulation
      const currentPrice = parseFloat(entryPrice) || CURRENCY_PAIRS[currencyPair as keyof typeof CURRENCY_PAIRS].defaultPrice
      
      const suggestions = {
        'EURUSD': { bias: 'bullish', confidence: 75, target: 80, stop: 40 },
        'GBPUSD': { bias: 'bearish', confidence: 65, target: 100, stop: 50 },
        'USDJPY': { bias: 'neutral', confidence: 45, target: 60, stop: 30 },
        'XAUUSD': { bias: 'bullish', confidence: 85, target: 200, stop: 100 }
      }
      
      const suggestion = suggestions[currencyPair as keyof typeof suggestions] || { bias: 'neutral', confidence: 50, target: 50, stop: 25 }
      
      setMarketAnalysis(prev => ({
        ...prev,
        trend: suggestion.bias,
        strength: suggestion.confidence,
        support: currentPrice - (currentPrice * 0.01),
        resistance: currentPrice + (currentPrice * 0.01),
        signals: [
          `${suggestion.bias} bias detected`,
          `Confidence: ${suggestion.confidence}%`,
          `Target: ${suggestion.target} pips`,
          `Stop: ${suggestion.stop} pips`,
          '⚠️ Using simulated data - API offline'
        ]
      }))
      return
    }
    
    try {
      const response = await fetch(`${API_BASE_URL}/analysis/${currencyPair}`)
      const data = await response.json()
      
      if (response.ok && data.timeframe_data) {
        const tf1h = data.timeframe_data['1h'] || {}
        const tf4h = data.timeframe_data['4h'] || {}
        const tf1d = data.timeframe_data['1d'] || {}
        const tradeSuggestion = data.trade_suggestion || {}
        
        setMarketAnalysis({
          trend: tradeSuggestion.direction?.toLowerCase() === 'long' ? 'bullish' : 
                 tradeSuggestion.direction?.toLowerCase() === 'short' ? 'bearish' : 'neutral',
          strength: tradeSuggestion.confidence || 50,
          support: tradeSuggestion.stop_loss || 0,
          resistance: tradeSuggestion.take_profit || 0,
          signals: [
            `${tradeSuggestion.action || 'WAIT'}: ${tradeSuggestion.reasoning || 'No clear signal'}`,
            `1H Trend: ${tf1h.trend || 'Unknown'} (${tf1h.strength || 0}% strength)`,
            `4H Trend: ${tf4h.trend || 'Unknown'} (RSI: ${tf4h.rsi || 0})`,
            `Daily: ${tf1d.trend || 'Unknown'} (Volatility: ${tf1d.volatility || 0}%)`,
            `Confidence: ${tradeSuggestion.confidence || 0}%`
          ],
          rsi: tf1h.rsi || 50,
          macd: 0, // Would need to be added to API
          bollinger: { upper: 0, lower: 0, middle: tf1h.sma_20 || 0 }
        })
      }
    } catch (error) {
      console.error('Failed to fetch market analysis:', error)
      // Keep existing analysis or show error
    }
  }
  
  // Advanced AI Analysis with ChatGPT
  const performAIAnalysis = async () => {
    if (!chatGptApiKey.trim()) {
      setAiAnalysis(prev => ({ ...prev, error: 'Please enter your ChatGPT API key' }))
      return
    }
    
    setAiAnalysis(prev => ({ ...prev, isAnalyzing: true, error: null }))
    
    try {
      const analysisData = {
        apiKey: chatGptApiKey,
        symbol: currencyPair,
        userInputs: {
          accountType: 'prop',
          propFirm: propFirm,
          challengePhase: challengePhase,
          accountSize: parseFloat(accountSize) || 10000,
          currentEquity: parseFloat(currentBalance) || parseFloat(accountSize) || 10000,
          riskPercentage: riskLevel === 'custom' ? parseFloat(customRisk) : RISK_LEVELS[riskLevel as keyof typeof RISK_LEVELS].percentage,
          entryPrice: parseFloat(entryPrice) || 0,
          stopLoss: parseFloat(stopLoss) || 0,
          takeProfit: parseFloat(takeProfit) || 0,
          volume: parseFloat(lotSize) || 0
        },
        propFirmData: {
          dailyDrawdownLimit: PROP_FIRMS[propFirm as keyof typeof PROP_FIRMS].phases[challengePhase as keyof typeof PROP_FIRMS[keyof typeof PROP_FIRMS]['phases']].maxDailyloss,
          maxDrawdownLimit: PROP_FIRMS[propFirm as keyof typeof PROP_FIRMS].phases[challengePhase as keyof typeof PROP_FIRMS[keyof typeof PROP_FIRMS]['phases']].maxTotalLoss,
          profitTarget: PROP_FIRMS[propFirm as keyof typeof PROP_FIRMS].phases[challengePhase as keyof typeof PROP_FIRMS[keyof typeof PROP_FIRMS]['phases']].target,
          currentDailyDrawdown: propFirmStatus.dailyLoss / propFirmStatus.maxDailyLoss * 100,
          currentMaxDrawdown: propFirmStatus.totalLoss / propFirmStatus.maxTotalLoss * 100,
          accountHealth: propFirmStatus.isCompliant ? 'Good' : 'At Risk'
        }
      }
      
      const response = await fetch(`${API_BASE_URL}/chatgpt-analysis`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(analysisData)
      })
      
      const result = await response.json()
      
      if (response.ok && result.status === 'success') {
        setAiAnalysis({
          content: result.analysis,
          isAnalyzing: false,
          error: null,
          timestamp: new Date(),
          dataPointsAnalyzed: result.data_points_analyzed
        })
        
        // Save API key for future use
        localStorage.setItem('fx_calculator_chatgpt_key', chatGptApiKey)
      } else {
        throw new Error(result.error || 'Analysis failed')
      }
    } catch (error: any) {
      setAiAnalysis({
        content: null,
        isAnalyzing: false,
        error: error.message || 'Failed to perform AI analysis',
        timestamp: null,
        dataPointsAnalyzed: null
      })
    }
  }
  
  // Fetch market news
  const fetchMarketNews = async () => {
    if (!apiStatus.connected) return
    
    setIsLoadingNews(true)
    try {
      const response = await fetch(`${API_BASE_URL}/news`)
      const data = await response.json()
      
      if (data.status === 'success' && data.news) {
        setNewsData(data.news)
      }
    } catch (error) {
      console.error('Failed to fetch news:', error)
    } finally {
      setIsLoadingNews(false)
    }
  }
  
  // Load news when news tab is activated
  useEffect(() => {
    if (activeTab === 'news' && apiStatus.connected && newsData.length === 0) {
      fetchMarketNews()
    }
  }, [activeTab, apiStatus.connected, newsData.length])

  // Save trade to history
  const saveTradeToHistory = () => {
    const trade = {
      id: Date.now(),
      pair: currencyPair,
      direction: tradeDirection,
      entryPrice: parseFloat(entryPrice),
      stopLoss: parseFloat(stopLoss),
      takeProfit: parseFloat(takeProfit),
      lotSize: calculations.lotSize,
      riskAmount: calculations.riskAmount,
      potentialProfit: calculations.potentialProfit,
      potentialLoss: calculations.potentialLoss,
      timestamp: new Date(),
      status: 'planned'
    }
    
    setTradeHistory(prev => [trade, ...prev.slice(0, 9)]) // Keep last 10 trades
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Professional FX Charts</h1>
          <p className="text-xl text-gray-300">Real-time forex charts, market analysis & trading education</p>
        </div>

        {/* Global Market Clock */}
        <MarketClock />
        
        {/* API Status Banner */}
        {apiStatus.connected ? (
          <Alert className="mb-6 border-green-500/50 bg-green-500/10">
            <CheckCircle className="h-4 w-4 text-green-400" />
            <AlertDescription className="text-green-300">
              <strong>Live Mode Active:</strong> Connected to real-time trading API with market data, advanced analysis, and news feeds.
              {apiStatus.lastCheck && (
                <span className="ml-2 text-green-400 text-xs">
                  Last check: {apiStatus.lastCheck.toLocaleTimeString()}
                </span>
              )}
            </AlertDescription>
          </Alert>
        ) : (
          <Alert className="mb-6 border-orange-500/50 bg-orange-500/10">
            <AlertTriangle className="h-4 w-4 text-orange-400" />
            <AlertDescription className="text-orange-300">
              <strong>Demo Mode:</strong> Trading API offline. Using simulated data for price feeds and analysis.
              {apiStatus.error && (
                <span className="block mt-1 text-xs text-orange-400">
                  Error: {apiStatus.error}
                </span>
              )}
            </AlertDescription>
          </Alert>
        )}

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6 bg-slate-800 border-slate-700">
            <TabsTrigger value="charts" className="flex items-center space-x-2 data-[state=active]:bg-purple-600 data-[state=active]:text-white">
              <BarChart3 className="h-4 w-4" />
              <span>Charts</span>
            </TabsTrigger>
            <TabsTrigger value="news" className="flex items-center space-x-2 data-[state=active]:bg-purple-600 data-[state=active]:text-white">
              <Newspaper className="h-4 w-4" />
              <span>News</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center space-x-2 data-[state=active]:bg-purple-600 data-[state=active]:text-white">
              <BookOpen className="h-4 w-4" />
              <span>Education</span>
            </TabsTrigger>
          </TabsList>


          <TabsContent value="charts">
            <div className="space-y-6">
              {/* Enhanced Charts Section */}
              <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
                
                {/* Left Sidebar - Symbol Selection & Price Info */}
                <div className="xl:col-span-1 space-y-4">
                  
                  {/* Current Price Card */}
                  {priceData && (
                    <Card className="bg-slate-800/50 border-slate-700">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-white flex items-center gap-2">
                          <Activity className="h-5 w-5" />
                          Live Price - {currencyPair}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-white">
                              {priceData.price}
                            </div>
                            <div className={`flex items-center justify-center gap-1 ${
                              priceData.change >= 0 ? 'text-green-400' : 'text-red-400'
                            }`}>
                              {priceData.change >= 0 ? (
                                <TrendingUp className="h-4 w-4" />
                              ) : (
                                <TrendingDown className="h-4 w-4" />
                              )}
                              {priceData.change} ({priceData.change_pct}%)
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>
                              <div className="text-gray-400">Bid</div>
                              <div className="font-semibold text-white">{(priceData as any).bid || 'N/A'}</div>
                            </div>
                            <div>
                              <div className="text-gray-400">Ask</div>
                              <div className="font-semibold text-white">{(priceData as any).ask || 'N/A'}</div>
                            </div>
                            <div>
                              <div className="text-gray-400">High</div>
                              <div className="font-semibold text-green-400">{(priceData as any).high_24h || 'N/A'}</div>
                            </div>
                            <div>
                              <div className="text-gray-400">Low</div>
                              <div className="font-semibold text-red-400">{(priceData as any).low_24h || 'N/A'}</div>
                            </div>
                          </div>

                          <Badge 
                            variant={(priceData as any).market_state === 'open' ? 'default' : 'secondary'}
                            className="w-full justify-center"
                          >
                            <Clock className="h-3 w-3 mr-1" />
                            Market {(priceData as any).market_state || 'Unknown'}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                  
                  {/* Technical Analysis Summary */}
                  {analysis && (
                    <Card className="bg-slate-800/50 border-slate-700">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-white flex items-center gap-2">
                          <BarChart3 className="h-5 w-5" />
                          Technical Analysis
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="text-center">
                            <div className="text-sm text-gray-400">RSI (14)</div>
                            <div className="text-lg font-semibold text-white">{(analysis as any).rsi?.toFixed(2) || 'N/A'}</div>
                            <Badge variant={
                              (analysis as any).rsi > 70 ? 'destructive' : 
                              (analysis as any).rsi < 30 ? 'default' : 'secondary'
                            }>
                              {(analysis as any).rsi > 70 ? 'Overbought' : 
                               (analysis as any).rsi < 30 ? 'Oversold' : 'Neutral'}
                            </Badge>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-gray-400">Trend</div>
                            <div className="text-lg font-semibold text-white">{(analysis as any).trend || 'Neutral'}</div>
                            <Badge variant={
                              (analysis as any).trend === 'Bullish' ? 'default' :
                              (analysis as any).trend === 'Bearish' ? 'destructive' : 'secondary'
                            }>
                              {(analysis as any).trend || 'Neutral'}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Main Chart Area */}
                <div className="xl:col-span-3">
                  <TradingViewCharts selectedPair={currencyPair} />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="news">
            <NewsSection newsData={newsData} isLoadingNews={isLoadingNews} apiConnected={apiStatus.connected} fetchNews={fetchMarketNews} />
          </TabsContent>

          <TabsContent value="education">
            <EducationSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

// Comprehensive Trading Calculator Component
interface ComprehensiveTradingCalculatorProps {
  currencyPair: string
  setCurrencyPair: (value: string) => void
  accountSize: string
  setAccountSize: (value: string) => void
  currentBalance: string
  setCurrentBalance: (value: string) => void
  entryPrice: string
  setEntryPrice: (value: string) => void
  stopLoss: string
  setStopLoss: (value: string) => void
  takeProfit: string
  setTakeProfit: (value: string) => void
  lotSize: string
  setLotSize: (value: string) => void
  tradeDirection: string
  setTradeDirection: (value: string) => void
  riskLevel: string
  setRiskLevel: (value: string) => void
  customRisk: string
  setCustomRisk: (value: string) => void
  propFirm: string
  setPropFirm: (value: string) => void
  challengePhase: string
  setChallengePhase: (value: string) => void
  calculations: any
  propFirmStatus: any
  realTimeData: any
  setRealTimeData: (value: any) => void
  marketAnalysis: any
  generateMarketAnalysis: () => void
  saveTradeToHistory: () => void
  tradeHistory: any[]
  apiStatus: any
  performAIAnalysis: () => void
  aiAnalysis: any
  chatGptApiKey: string
  setChatGptApiKey: (value: string) => void
  showApiKey: boolean
  setShowApiKey: (value: boolean) => void
  // Advanced Position Sizing Props
  showAdvancedOptions: boolean
  setShowAdvancedOptions: (value: boolean) => void
  positionSizingMethod: string
  setPositionSizingMethod: (value: string) => void
  kellyWinRate: number
  setKellyWinRate: (value: number) => void
  kellyAvgWin: number
  setKellyAvgWin: (value: number) => void
  kellyAvgLoss: number
  setKellyAvgLoss: (value: number) => void
  timeframe: string
  setTimeframe: (value: string) => void
  suggestions: Array<{
    type: string;
    severity: 'info' | 'warning' | 'error';
    message: string;
    action?: () => void;
  }>
  calculationResults: any
  // Real-time data props
  livePrice: number | null
  priceData: any
  priceError: string | null
}

function ComprehensiveTradingCalculator({
  currencyPair, setCurrencyPair, accountSize, setAccountSize, currentBalance, setCurrentBalance,
  entryPrice, setEntryPrice, stopLoss, setStopLoss, takeProfit, setTakeProfit,
  lotSize, setLotSize, tradeDirection, setTradeDirection, riskLevel, setRiskLevel,
  customRisk, setCustomRisk, propFirm, setPropFirm, challengePhase, setChallengePhase,
  calculations, propFirmStatus, realTimeData, setRealTimeData, marketAnalysis,
  generateMarketAnalysis, saveTradeToHistory, tradeHistory, apiStatus,
  performAIAnalysis, aiAnalysis, chatGptApiKey, setChatGptApiKey, showApiKey, setShowApiKey,
  // Advanced Position Sizing Props
  showAdvancedOptions, setShowAdvancedOptions, positionSizingMethod, setPositionSizingMethod,
  kellyWinRate, setKellyWinRate, kellyAvgWin, setKellyAvgWin, kellyAvgLoss, setKellyAvgLoss,
  timeframe, setTimeframe, suggestions, calculationResults,
  // Real-time data props
  livePrice, priceData, priceError
}: ComprehensiveTradingCalculatorProps) {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Column - Input Controls */}
      <div className="lg:col-span-1 space-y-6">
        {/* Prop Firm Selection */}
        <Card className="shadow-xl border border-purple-500/20 bg-slate-800/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl flex items-center text-white">
              <Shield className="mr-2 h-5 w-5 text-blue-400" />
              Prop Firm Setup
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="propFirm" className="text-white">Prop Firm</Label>
              <Select value={propFirm} onValueChange={setPropFirm}>
                <SelectTrigger className="bg-zinc-800 border-zinc-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(PROP_FIRMS).map(([key, firm]) => (
                    <SelectItem key={key} value={key}>{firm.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="challengePhase" className="text-white">Challenge Phase</Label>
              <Select value={challengePhase} onValueChange={setChallengePhase}>
                <SelectTrigger className="bg-zinc-800 border-zinc-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(PROP_FIRMS[propFirm as keyof typeof PROP_FIRMS].phases).map(([key, phase]) => (
                    <SelectItem key={key} value={key}>{phase.name}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="accountSize" className="text-white">Account Size</Label>
              <Select value={accountSize} onValueChange={setAccountSize}>
                <SelectTrigger className="bg-zinc-800 border-zinc-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {PROP_FIRMS[propFirm as keyof typeof PROP_FIRMS].accountSizes.map(size => (
                    <SelectItem key={size} value={size}>${parseInt(size).toLocaleString()}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Trading Parameters */}
        <Card className="shadow-xl border border-purple-500/20 bg-slate-800/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl flex items-center text-white">
              <Calculator className="mr-2 h-5 w-5 text-green-400" />
              Trading Parameters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="currencyPair" className="text-white">Currency Pair</Label>
              <Select value={currencyPair} onValueChange={setCurrencyPair}>
                <SelectTrigger className="bg-zinc-800 border-zinc-700">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(CURRENCY_PAIRS).map(([key, pair]) => (
                    <SelectItem key={key} value={key}>
                      <div className="flex items-center justify-between w-full">
                        <span>{pair.symbol}</span>
                        <Badge variant="outline" className="ml-2 text-xs">
                          {pair.volatility}
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="tradeDirection" className="text-white">Direction</Label>
                <Select value={tradeDirection} onValueChange={setTradeDirection}>
                  <SelectTrigger className="bg-zinc-800 border-zinc-700">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buy">
                      <div className="flex items-center">
                        <TrendingUp className="mr-2 h-4 w-4 text-green-500" />
                        Buy/Long
                      </div>
                    </SelectItem>
                    <SelectItem value="sell">
                      <div className="flex items-center">
                        <TrendingDown className="mr-2 h-4 w-4 text-red-500" />
                        Sell/Short
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="currentBalance" className="text-white">Current Balance</Label>
                <Input
                  id="currentBalance"
                  type="number"
                  value={currentBalance}
                  onChange={(e) => setCurrentBalance(e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-white"
                  placeholder="Current balance"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="entryPrice" className="text-white">Entry Price</Label>
                <Input
                  id="entryPrice"
                  type="number"
                  step="0.00001"
                  value={entryPrice}
                  onChange={(e) => setEntryPrice(e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-white"
                  placeholder="Entry price"
                />
              </div>
              
              <div>
                <Label htmlFor="stopLoss" className="text-white">Stop Loss</Label>
                <Input
                  id="stopLoss"
                  type="number"
                  step="0.00001"
                  value={stopLoss}
                  onChange={(e) => setStopLoss(e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-white"
                  placeholder="Stop loss"
                />
              </div>
              
              <div>
                <Label htmlFor="takeProfit" className="text-white">Take Profit</Label>
                <Input
                  id="takeProfit"
                  type="number"
                  step="0.00001"
                  value={takeProfit}
                  onChange={(e) => setTakeProfit(e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-white"
                  placeholder="Take profit"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Risk Management */}
        <Card className="shadow-xl border border-purple-500/20 bg-slate-800/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl flex items-center text-white">
              <Shield className="mr-2 h-5 w-5 text-orange-400" />
              Risk Management
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label className="text-white">Risk Level</Label>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {Object.entries(RISK_LEVELS).map(([key, level]) => (
                  <Button
                    key={key}
                    variant={riskLevel === key ? "default" : "outline"}
                    size="sm"
                    onClick={() => setRiskLevel(key)}
                    className={riskLevel === key ? 
                      "bg-gradient-to-r from-purple-500 to-blue-500" : 
                      "bg-slate-700 border-slate-600 text-white hover:bg-slate-600"}
                  >
                    {key === 'custom' ? 'Custom' : key.charAt(0).toUpperCase() + key.slice(1)}
                  </Button>
                ))}
              </div>
            </div>

            {riskLevel === 'custom' && (
              <div>
                <Label htmlFor="customRisk" className="text-white">Custom Risk (%)</Label>
                <Input
                  id="customRisk"
                  type="number"
                  step="0.1"
                  value={customRisk}
                  onChange={(e) => setCustomRisk(e.target.value)}
                  className="bg-zinc-800 border-zinc-700 text-white"
                  placeholder="Risk percentage"
                />
              </div>
            )}

            <div>
              <Label htmlFor="lotSize" className="text-white">Manual Lot Size (Optional)</Label>
              <Input
                id="lotSize"
                type="number"
                step="0.01"
                value={lotSize}
                onChange={(e) => setLotSize(e.target.value)}
                className="bg-zinc-800 border-zinc-700 text-white"
                placeholder="Leave empty for auto-calculation"
              />
            </div>
            
            {/* Advanced Options Toggle */}
            <div className="flex items-center justify-between">
              <Label className="text-white">Advanced Position Sizing</Label>
              <Switch
                checked={showAdvancedOptions}
                onCheckedChange={setShowAdvancedOptions}
              />
            </div>
            
            {showAdvancedOptions && (
              <div className="space-y-4 p-4 border border-purple-500/30 rounded-lg bg-slate-900/50">
                {/* Position Sizing Method */}
                <div>
                  <Label className="text-white flex items-center">
                    <Brain className="mr-2 h-4 w-4 text-purple-400" />
                    Position Sizing Method
                  </Label>
                  <Select value={positionSizingMethod} onValueChange={setPositionSizingMethod}>
                    <SelectTrigger className="bg-zinc-800 border-zinc-700 mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(POSITION_SIZING_METHODS).map(([key, method]) => {
                        const IconComponent = method.icon
                        return (
                          <SelectItem key={key} value={key}>
                            <div className="flex items-center">
                              <IconComponent className="mr-2 h-4 w-4" />
                              <div>
                                <div className="font-medium">{method.name}</div>
                                <div className="text-xs text-gray-400">{method.description}</div>
                              </div>
                            </div>
                          </SelectItem>
                        )
                      })}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Kelly Criterion Inputs */}
                {positionSizingMethod === 'kelly' && (
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label className="text-white flex items-center justify-between">
                        Win Rate (%)
                        <span className="text-purple-400 font-mono">{kellyWinRate}%</span>
                      </Label>
                      <Slider
                        value={[kellyWinRate]}
                        onValueChange={([value]) => setKellyWinRate(value)}
                        max={90}
                        min={10}
                        step={5}
                        className="mt-2"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-white">Avg Win ($)</Label>
                        <Input
                          type="number"
                          value={kellyAvgWin}
                          onChange={(e) => setKellyAvgWin(Number(e.target.value))}
                          className="bg-zinc-800 border-zinc-700 text-white"
                        />
                      </div>
                      <div>
                        <Label className="text-white">Avg Loss ($)</Label>
                        <Input
                          type="number"
                          value={kellyAvgLoss}
                          onChange={(e) => setKellyAvgLoss(Number(e.target.value))}
                          className="bg-zinc-800 border-zinc-700 text-white"
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Timeframe Selection */}
                <div>
                  <Label className="text-white flex items-center">
                    <Clock className="mr-2 h-4 w-4 text-blue-400" />
                    Trading Timeframe
                  </Label>
                  <Select value={timeframe} onValueChange={setTimeframe}>
                    <SelectTrigger className="bg-zinc-800 border-zinc-700 mt-2">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(TIMEFRAME_MULTIPLIERS).map(([tf, data]) => (
                        <SelectItem key={tf} value={tf}>
                          <div className="flex justify-between items-center w-full">
                            <span>{tf}</span>
                            <span className={`text-xs px-2 py-1 rounded ${
                              data.risk === 'Very High' ? 'bg-red-900 text-red-200' :
                              data.risk === 'High' ? 'bg-orange-900 text-orange-200' :
                              data.risk === 'Medium-High' ? 'bg-yellow-900 text-yellow-200' :
                              data.risk === 'Medium' ? 'bg-blue-900 text-blue-200' :
                              data.risk === 'Medium-Low' ? 'bg-green-900 text-green-200' :
                              'bg-green-900 text-green-200'
                            }`}>
                              {data.risk}
                            </span>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
        
        {/* Intelligent Suggestions */}
        {suggestions.length > 0 && (
          <Card className="shadow-xl border border-yellow-500/20 bg-slate-800/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center text-white">
                <Lightbulb className="mr-2 h-5 w-5 text-yellow-400" />
                Smart Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {suggestions.map((suggestion, index) => (
                <Alert key={index} className={`border ${
                  suggestion.severity === 'error' ? 'border-red-500/50 bg-red-900/20' :
                  suggestion.severity === 'warning' ? 'border-yellow-500/50 bg-yellow-900/20' :
                  'border-blue-500/50 bg-blue-900/20'
                }`}>
                  <AlertTriangle className={`h-4 w-4 ${
                    suggestion.severity === 'error' ? 'text-red-400' :
                    suggestion.severity === 'warning' ? 'text-yellow-400' :
                    'text-blue-400'
                  }`} />
                  <AlertDescription className="text-gray-200">
                    <div className="flex justify-between items-start">
                      <span>{suggestion.message}</span>
                      {suggestion.action && (
                        <Button
                          onClick={suggestion.action}
                          size="sm"
                          variant="outline"
                          className="ml-2 text-xs"
                        >
                          Apply
                        </Button>
                      )}
                    </div>
                  </AlertDescription>
                </Alert>
              ))}
            </CardContent>
          </Card>
        )}

        {/* Missing Fields & Validation */}
        <MissingFieldsIndicator
          entryPrice={entryPrice}
          stopLoss={stopLoss}
          takeProfit={takeProfit}
          riskPercentage={customRisk}
          accountBalance={currentBalance}
          results={calculationResults || calculations}
          intelligentSuggestions={[
            ...(calculations.accountRisk > 2 ? [{
              category: 'Risk Management',
              message: 'Your risk level is above 2%. Consider reducing position size.',
              action: 'Reduce risk percentage to 1-2% for safer trading'
            }] : []),
            ...(calculations.riskRewardRatio > 0 && calculations.riskRewardRatio < 1.5 ? [{
              category: 'Risk/Reward Optimization',
              message: 'Current R:R ratio is below recommended 1.5:1.',
              action: 'Increase take profit or tighten stop loss'
            }] : []),
            ...(parseFloat(entryPrice || '0') > 0 && parseFloat(stopLoss || '0') > 0 && Math.abs(parseFloat(entryPrice) - parseFloat(stopLoss)) < 0.001 ? [{
              category: 'Stop Loss Warning',
              message: 'Stop loss is very close to entry price.',
              action: 'Consider wider stop loss or different entry level'
            }] : [])
          ]}
        />
      </div>

      {/* Middle Column - Results & Analysis */}
      <div className="lg:col-span-1 space-y-6">
        {/* API Status & Real-time Price Data */}
        <Card className="shadow-xl border border-purple-500/20 bg-slate-800/90 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg flex items-center text-white">
              <Activity className="mr-2 h-5 w-5 text-cyan-400" />
              Real-time Data
              {apiStatus.connected ? (
                <Wifi className="ml-2 h-4 w-4 text-green-400" />
              ) : (
                <WifiOff className="ml-2 h-4 w-4 text-red-400" />
              )}
            </CardTitle>
            <div className="flex items-center space-x-2">
              {apiStatus.connected && (
                <Badge variant="outline" className="text-xs text-green-400 border-green-400">
                  Live API
                </Badge>
              )}
              {priceData && priceData.status === 'streaming_simulation' && (
                <Badge variant="outline" className="text-xs text-blue-400 border-blue-400 animate-pulse">
                  Streaming ●
                </Badge>
              )}
              {priceData && priceData.status === 'success' && !priceError && (
                <Badge variant="outline" className="text-xs text-green-400 border-green-400 animate-pulse">
                  Real-time ●
                </Badge>
              )}
              <Button
                onClick={() => setRealTimeData((prev: any) => ({ ...prev, isLive: !prev.isLive }))}
                size="sm"
                variant={realTimeData.isLive ? "destructive" : "default"}
                className="flex items-center space-x-1"
              >
                {realTimeData.isLive ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
                <span>{realTimeData.isLive ? 'Stop' : 'Start'}</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">
                  {CURRENCY_PAIRS[currencyPair as keyof typeof CURRENCY_PAIRS].symbol}
                </div>
                <div className="text-sm text-gray-400">
                  {CURRENCY_PAIRS[currencyPair as keyof typeof CURRENCY_PAIRS].description}
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-zinc-400 text-sm">Current Price</p>
                  <p className="text-2xl font-bold text-white">
                    {livePrice !== null ? livePrice.toFixed(5) : (realTimeData.price || CURRENCY_PAIRS[currencyPair as keyof typeof CURRENCY_PAIRS].defaultPrice)}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-zinc-400 text-sm">Change</p>
                  <p className={`text-lg font-semibold ${(priceData?.change || realTimeData.change) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {(priceData?.change || realTimeData.change) >= 0 ? '+' : ''}{(priceData?.change || realTimeData.change || 0).toFixed(5)}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-zinc-400 text-sm">Change %</p>
                  <p className={`text-lg font-semibold ${(priceData?.change_pct || realTimeData.changePercent) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {(priceData?.change_pct || realTimeData.changePercent) >= 0 ? '+' : ''}{(priceData?.change_pct || realTimeData.changePercent || 0).toFixed(4)}%
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-zinc-400 text-sm">Spread</p>
                  <p className="text-lg font-semibold text-yellow-400">
                    {CURRENCY_PAIRS[currencyPair as keyof typeof CURRENCY_PAIRS].spread} pips
                  </p>
                </div>
              </div>
              {realTimeData.lastUpdate && (
                <p className="text-xs text-gray-500 text-center">
                  Last update: {realTimeData.lastUpdate.toLocaleTimeString()}
                </p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Market Analysis - Moved from below */}
        <Card className="shadow-xl border border-purple-500/20 bg-slate-800/90 backdrop-blur-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-lg flex items-center text-white">
              <Brain className="mr-2 h-5 w-5 text-pink-400" />
              Market Analysis
              {apiStatus.connected ? (
                <Database className="ml-2 h-4 w-4 text-green-400" />
              ) : (
                <Server className="ml-2 h-4 w-4 text-orange-400" />
              )}
            </CardTitle>
            <Button
              onClick={generateMarketAnalysis}
              size="sm"
              variant="outline"
              className="text-pink-400 border-pink-400 hover:bg-pink-400/10"
            >
              <RefreshCw className="h-4 w-4 mr-1" />
              Refresh
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-slate-900/50 rounded-lg p-3">
                <p className="text-slate-400 text-xs mb-1">RSI (14)</p>
                <p className="text-lg font-bold text-white">{marketAnalysis.rsi}</p>
                <p className="text-xs text-slate-500">
                  {marketAnalysis.rsi > 70 ? 'Overbought' : marketAnalysis.rsi < 30 ? 'Oversold' : 'Neutral'}
                </p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-3">
                <p className="text-slate-400 text-xs mb-1">MACD</p>
                <p className="text-lg font-bold text-white">{marketAnalysis.macd.toFixed(4)}</p>
                <p className="text-xs text-slate-500">
                  {marketAnalysis.macd > 0 ? 'Bullish' : 'Bearish'}
                </p>
              </div>
              <div className="bg-slate-900/50 rounded-lg p-3">
                <p className="text-slate-400 text-xs mb-1">Bollinger</p>
                <p className="text-lg font-bold text-white">
                  {((livePrice || parseFloat(entryPrice)) > marketAnalysis.bollinger.upper) ? 'Above' :
                   ((livePrice || parseFloat(entryPrice)) < marketAnalysis.bollinger.lower) ? 'Below' : 'Middle'}
                </p>
                <p className="text-xs text-slate-500">Band Position</p>
              </div>
            </div>
            
            {marketAnalysis.signals && marketAnalysis.signals.length > 0 && (
              <div className="space-y-2">
                <p className="text-sm font-medium text-white">Trading Signals:</p>
                {marketAnalysis.signals.slice(0, 3).map((signal: any, index: number) => (
                  <div key={index} className={`p-2 rounded-lg border ${
                    signal.type === 'buy' ? 'bg-green-900/20 border-green-500/30 text-green-400' : 
                    'bg-red-900/20 border-red-500/30 text-red-400'
                  }`}>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium">
                        {signal.type.toUpperCase()} • {signal.strength}
                      </span>
                      <Badge variant="outline" className={
                        signal.type === 'buy' ? 'text-green-400 border-green-400' : 'text-red-400 border-red-400'
                      }>
                        {signal.type}
                      </Badge>
                    </div>
                    <p className="text-xs mt-1">{signal.reason}</p>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>


        {/* Advanced AI Analysis */}
        <AdvancedAIAnalysis
          currencyPair={currencyPair}
          priceData={realTimeData}
          marketAnalysisData={marketAnalysis}
          userInputs={{
            accountType: 'Prop Firm',
            propFirm,
            challengePhase,
            accountSize,
            currentEquity: currentBalance,
            riskPercentage: customRisk,
            entryPrice,
            stopLoss,
            takeProfit,
            volume: lotSize
          }}
          propFirmRules={PROP_FIRMS}
          results={calculations}
          onApplyAnalysis={(recommendations) => {
            if (recommendations.entryPrice) setEntryPrice(recommendations.entryPrice.toString())
            if (recommendations.stopLoss) setStopLoss(recommendations.stopLoss.toString())
            if (recommendations.takeProfit) setTakeProfit(recommendations.takeProfit.toString())
            if (recommendations.lotSize) setLotSize(recommendations.lotSize.toString())
            if (recommendations.riskPercentage) setCustomRisk(recommendations.riskPercentage.toString())
          }}
        />
      </div>

      {/* Right Column - Prop Firm Status & Actions */}
      <div className="lg:col-span-1 space-y-6">
        {/* Prop Firm Compliance */}
        <Card className="shadow-xl border border-purple-500/20 bg-slate-800/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg flex items-center text-white">
              <Shield className="mr-2 h-5 w-5 text-green-400" />
              Prop Firm Status
              {propFirmStatus.isCompliant ? (
                <CheckCircle className="ml-2 h-5 w-5 text-green-400" />
              ) : (
                <AlertTriangle className="ml-2 h-5 w-5 text-red-400" />
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-zinc-900/50 rounded-lg p-3">
              <div className="flex justify-between items-center mb-2">
                <span className="text-zinc-400 text-sm">Profit Target Progress</span>
                <span className="text-white font-semibold">
                  ${propFirmStatus.currentProfit} / ${propFirmStatus.profitTarget}
                </span>
              </div>
              <Progress value={propFirmStatus.progressToTarget} className="w-full" />
              <p className="text-xs text-zinc-500 mt-1">{propFirmStatus.progressToTarget.toFixed(1)}% complete</p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="bg-zinc-900/50 rounded-lg p-3">
                <p className="text-zinc-400 text-sm">Daily Risk</p>
                <p className="text-lg font-bold text-orange-400">${propFirmStatus.dailyLoss}</p>
                <p className="text-xs text-zinc-500">Max: ${propFirmStatus.maxDailyLoss}</p>
              </div>
              <div className="bg-zinc-900/50 rounded-lg p-3">
                <p className="text-zinc-400 text-sm">Total Loss</p>
                <p className="text-lg font-bold text-red-400">${propFirmStatus.totalLoss}</p>
                <p className="text-xs text-zinc-500">Max: ${propFirmStatus.maxTotalLoss}</p>
              </div>
            </div>

            {propFirmStatus.warnings.length > 0 && (
              <div className="space-y-2">
                {propFirmStatus.warnings.map((warning: string, index: number) => (
                  <Alert key={index} className={`border-l-4 ${warning.startsWith('VIOLATION') ? 'border-red-500 bg-red-500/10' : 'border-yellow-500 bg-yellow-500/10'}`}>
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription className="text-white text-sm">
                      {warning}
                    </AlertDescription>
                  </Alert>
                ))}
              </div>
            )}

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-zinc-400">Trading Days:</span>
                <span className="text-white ml-2">{propFirmStatus.tradingDays}</span>
              </div>
              <div>
                <span className="text-zinc-400">Avg Daily P&L:</span>
                <span className="text-white ml-2">${propFirmStatus.avgDailyProfit.toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Combined Trade Analysis & Actions */}
        <Card className="shadow-xl border border-purple-500/20 bg-slate-800/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg flex items-center text-white">
              <Target className="mr-2 h-5 w-5 text-purple-400" />
              Trade Analysis & Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            
            {/* Advanced Position Sizing Method Display */}
            {showAdvancedOptions && (
              <div className="mb-4 p-3 bg-purple-900/20 rounded-lg border border-purple-500/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-purple-400 font-medium">Position Sizing: {POSITION_SIZING_METHODS[positionSizingMethod as keyof typeof POSITION_SIZING_METHODS].name}</span>
                  <Badge variant="outline" className="text-purple-400 border-purple-400">
                    {timeframe} • {TIMEFRAME_MULTIPLIERS[timeframe as keyof typeof TIMEFRAME_MULTIPLIERS].risk} Risk
                  </Badge>
                </div>
                <p className="text-xs text-gray-400">
                  {POSITION_SIZING_METHODS[positionSizingMethod as keyof typeof POSITION_SIZING_METHODS].description}
                </p>
              </div>
            )}
            
            {/* Trade Analysis Grid */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-zinc-900/50 rounded-lg p-3">
                <p className="text-zinc-400 text-sm">Position Size</p>
                <p className="text-xl font-bold text-white">{(calculationResults || calculations).lotSize}</p>
                <p className="text-xs text-zinc-500">lots</p>
              </div>
              <div className="bg-zinc-900/50 rounded-lg p-3">
                <p className="text-zinc-400 text-sm">Risk Amount</p>
                <p className="text-xl font-bold text-red-400">${(calculationResults || calculations).riskAmount}</p>
                <p className="text-xs text-zinc-500">{(calculationResults || calculations).accountRisk}% of account</p>
              </div>
              <div className="bg-zinc-900/50 rounded-lg p-3">
                <p className="text-zinc-400 text-sm">Potential Profit</p>
                <p className="text-xl font-bold text-green-400">${(calculationResults || calculations).potentialProfit}</p>
                <p className="text-xs text-zinc-500">Risk:Reward {(calculationResults || calculations).riskReward}</p>
              </div>
              <div className="bg-zinc-900/50 rounded-lg p-3">
                <p className="text-zinc-400 text-sm">Break-Even</p>
                <p className="text-xl font-bold text-yellow-400">{(calculationResults || calculations).breakEvenPips}</p>
                <p className="text-xs text-zinc-500">pips to cover spread</p>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                onClick={saveTradeToHistory}
                disabled={!entryPrice || !stopLoss}
                className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Zap className="h-4 w-4 mr-2" />
                Save Trade Plan
              </Button>
              
              <Button 
                onClick={() => {
                  const pair = CURRENCY_PAIRS[currencyPair as keyof typeof CURRENCY_PAIRS]
                  const tradeSetup = `${pair.symbol} ${tradeDirection.toUpperCase()} @ ${entryPrice} | SL: ${stopLoss} | TP: ${takeProfit} | Size: ${calculations.lotSize} | Risk: $${calculations.riskAmount} (${calculations.accountRisk}%)`
                  navigator.clipboard.writeText(tradeSetup)
                  // Could add toast notification here
                }}
                disabled={!entryPrice}
                className="w-full bg-purple-600 hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Copy Trade Setup
              </Button>
              
              <Button 
                onClick={() => {
                  setEntryPrice('')
                  setStopLoss('')
                  setTakeProfit('')
                  setLotSize('')
                }}
                variant="outline"
                className="w-full bg-slate-700 border-slate-600 text-white hover:bg-slate-600"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset Calculator
              </Button>
            </div>
            
          </CardContent>
        </Card>

        {/* Recent Trade History */}
        {tradeHistory.length > 0 && (
          <Card className="shadow-xl border border-purple-500/20 bg-slate-800/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg flex items-center text-white">
                <Clock className="mr-2 h-5 w-5 text-blue-400" />
                Recent Plans
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {tradeHistory.slice(0, 5).map((trade, index) => (
                  <div key={trade.id} className="bg-zinc-900/50 rounded-lg p-2 text-sm">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">{trade.pair}</span>
                      <Badge variant={trade.direction === 'buy' ? 'default' : 'destructive'} className="text-xs">
                        {trade.direction.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="text-zinc-400 text-xs mt-1">
                      Entry: {trade.entryPrice} | Risk: ${trade.riskAmount}
                    </div>
                    <div className="text-zinc-500 text-xs">
                      {new Date(trade.timestamp).toLocaleTimeString()}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Main Trading Chart - Full Width at Bottom */}
        <Card className="shadow-xl border border-purple-500/20 bg-slate-800/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center justify-between text-white">
              <div className="flex items-center">
                <BarChart3 className="mr-3 h-6 w-6 text-blue-400" />
                Professional Trading Chart
              </div>
              <Badge variant="secondary" className="text-xs">
                Full Space • Real-Time Data
              </Badge>
            </CardTitle>
            <CardDescription className="text-purple-300">
              Advanced chart with full space for detailed technical analysis
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <TradingViewChart 
              selectedPair={currencyPair}
              height={700}
              showControls={true}
              className="w-full"
            />
          </CardContent>
        </Card>
      </div>

      {/* Important Disclaimer */}
      <Disclaimer />
    </div>
  )
}

// TradingView Charts Component - Enhanced with Real-Time Integration
interface TradingViewChartsProps {
  selectedPair?: string
}

function TradingViewCharts({ selectedPair }: TradingViewChartsProps = {}) {
  const [selectedSymbol, setSelectedSymbol] = useState(selectedPair || 'EURUSD')

  // Convert display symbols to our internal format
  const symbolCategories = {
    forex: [
      { symbol: 'EURUSD', name: 'EUR/USD', category: 'Major Pairs' },
      { symbol: 'GBPUSD', name: 'GBP/USD', category: 'Major Pairs' },
      { symbol: 'USDJPY', name: 'USD/JPY', category: 'Major Pairs' },
      { symbol: 'USDCHF', name: 'USD/CHF', category: 'Major Pairs' },
      { symbol: 'AUDUSD', name: 'AUD/USD', category: 'Major Pairs' },
      { symbol: 'USDCAD', name: 'USD/CAD', category: 'Major Pairs' },
      { symbol: 'NZDUSD', name: 'NZD/USD', category: 'Major Pairs' },
      { symbol: 'EURJPY', name: 'EUR/JPY', category: 'Cross Pairs' },
      { symbol: 'GBPJPY', name: 'GBP/JPY', category: 'Cross Pairs' },
      { symbol: 'EURGBP', name: 'EUR/GBP', category: 'Cross Pairs' },
    ],
    indices: [
      { symbol: 'NAS100', name: 'NASDAQ 100', category: 'US Indices' },
      { symbol: 'SPX500', name: 'S&P 500', category: 'US Indices' },
      { symbol: 'US30', name: 'Dow Jones 30', category: 'US Indices' },
      { symbol: 'GER40', name: 'DAX 40', category: 'European Indices' },
      { symbol: 'UK100', name: 'FTSE 100', category: 'European Indices' },
      { symbol: 'JPN225', name: 'Nikkei 225', category: 'Asian Indices' },
    ],
    commodities: [
      { symbol: 'XAUUSD', name: 'Gold', category: 'Precious Metals' },
      { symbol: 'XAGUSD', name: 'Silver', category: 'Precious Metals' },
      { symbol: 'USOIL', name: 'Crude Oil', category: 'Energy' },
      { symbol: 'UKOIL', name: 'Brent Oil', category: 'Energy' },
      { symbol: 'NATGAS', name: 'Natural Gas', category: 'Energy' },
    ],
    crypto: [
      { symbol: 'BTCUSD', name: 'Bitcoin', category: 'Cryptocurrency' },
      { symbol: 'ETHUSD', name: 'Ethereum', category: 'Cryptocurrency' },
    ]
  }

  // Flatten all symbols for easy access
  const allSymbols = [
    ...symbolCategories.forex,
    ...symbolCategories.indices, 
    ...symbolCategories.commodities,
    ...symbolCategories.crypto
  ]

  // Update selected symbol when selectedPair prop changes
  useEffect(() => {
    if (selectedPair) {
      const mappedSymbol = selectedPair.replace('/', '').replace(/\s+/g, '').toUpperCase()
      if (allSymbols.find(s => s.symbol === mappedSymbol)) {
        setSelectedSymbol(mappedSymbol)
      }
    }
  }, [selectedPair])

  return (
    <div className="space-y-6">
      <Card className="shadow-xl border border-purple-500/20 bg-slate-800/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center text-white">
            <BarChart3 className="mr-3 h-6 w-6 text-purple-400" />
            Advanced TradingView Charts
            <Badge variant="secondary" className="ml-3 text-xs">
              Real-Time Data
            </Badge>
          </CardTitle>
          <CardDescription className="text-purple-300">
            Professional trading charts with real-time market data and technical analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Two Column Layout: Symbols Left, Chart Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Left Sidebar - Symbol Dashboard */}
            <div className="lg:col-span-3">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-4">Market Symbols</h3>
                {Object.entries(symbolCategories).map(([categoryKey, symbols]) => (
                  <div key={categoryKey} className="mb-4">
                    <h4 className="text-xs font-medium text-gray-300 mb-2 capitalize">
                      {categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1)}
                    </h4>
                    <div className="grid grid-cols-1 gap-1">
                      {symbols.map((item) => (
                        <Button
                          key={item.symbol}
                          onClick={() => setSelectedSymbol(item.symbol)}
                          variant={selectedSymbol === item.symbol ? "default" : "outline"}
                          size="sm"
                          className={selectedSymbol === item.symbol ? 
                            "bg-purple-600 hover:bg-purple-700 text-white text-xs justify-start" : 
                            "bg-slate-700 border-slate-600 text-white hover:bg-slate-600 text-xs justify-start"}
                        >
                          {item.name}
                        </Button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right Side - Chart taking most space */}
            <div className="lg:col-span-9">
              <div className="bg-slate-900/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-4">
                  {allSymbols.find(s => s.symbol === selectedSymbol)?.name || selectedSymbol} Chart
                </h3>
                <TradingViewChart 
                  selectedPair={selectedSymbol}
                  height={600}
                  showControls={true}
                  className="w-full"
                />
              </div>
            </div>
            
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// News Section Component
interface NewsSectionProps {
  newsData: any[]
  isLoadingNews: boolean
  apiConnected: boolean
  fetchNews: () => void
}

function NewsSection({ newsData, isLoadingNews, apiConnected, fetchNews }: NewsSectionProps) {
  const fallbackNews = [
    {
      title: "Federal Reserve Signals Potential Rate Changes",
      summary: "The Fed indicates possible monetary policy adjustments in response to inflation data.",
      impact: "High",
      time: "2 hours ago",
      currency: "USD",
      source: "Fed Communications"
    },
    {
      title: "European Central Bank Meeting Results",
      summary: "ECB maintains current interest rates but hints at future policy changes.",
      impact: "Medium",
      time: "4 hours ago", 
      currency: "EUR",
      source: "ECB Press Release"
    },
    {
      title: "Bank of Japan Intervention Speculation",
      summary: "Market speculation grows about potential BoJ intervention in forex markets.",
      impact: "High",
      time: "6 hours ago",
      currency: "JPY",
      source: "Reuters"
    },
    {
      title: "Gold Reaches New Highs Amid Economic Uncertainty",
      summary: "Gold prices surge as investors seek safe-haven assets during market volatility.",
      impact: "Medium",
      time: "8 hours ago",
      currency: "XAU",
      source: "Bloomberg"
    }
  ]
  
  const displayNews = newsData.length > 0 ? newsData : fallbackNews

  return (
    <div className="space-y-6">
      <Card className="shadow-xl border border-purple-500/20 bg-slate-800/90 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-2xl flex items-center text-white">
                <Newspaper className="mr-3 h-6 w-6 text-blue-400" />
                Market News & Analysis
                {apiConnected ? (
                  <Badge variant="outline" className="ml-3 text-xs text-green-400 border-green-400">
                    Live Feed
                  </Badge>
                ) : (
                  <Badge variant="outline" className="ml-3 text-xs text-orange-400 border-orange-400">
                    Demo Mode
                  </Badge>
                )}
              </CardTitle>
              <CardDescription className="text-purple-300">
                {apiConnected ? 'Live market news from financial APIs' : 'Sample news data - API offline'}
              </CardDescription>
            </div>
            <Button
              onClick={fetchNews}
              size="sm"
              disabled={isLoadingNews}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isLoadingNews ? (
                <><Loader2 className="h-3 w-3 mr-2 animate-spin" />Loading...</>
              ) : (
                <><RefreshCw className="h-3 w-3 mr-2" />Refresh</>
              )}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {isLoadingNews ? (
              <div className="flex items-center justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-purple-400" />
                <span className="ml-3 text-white">Loading latest market news...</span>
              </div>
            ) : (
              displayNews.map((news, index) => {
                // Extract impact level from news (API might have different format)
                let impact = 'Medium'
                if (news.impact) {
                  impact = news.impact
                } else if (news.title?.toLowerCase().includes('federal reserve') || news.title?.toLowerCase().includes('intervention')) {
                  impact = 'High'
                } else if (news.title?.toLowerCase().includes('speculation') || news.title?.toLowerCase().includes('hints')) {
                  impact = 'Low'
                }
                
                return (
                  <div key={index} className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-700 hover:bg-zinc-900/70 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white flex-1 mr-4">
                        {news.title}
                      </h3>
                      <div className="flex items-center space-x-2 flex-shrink-0">
                        <Badge 
                          variant={impact === 'High' ? 'destructive' : impact === 'Medium' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {impact} Impact
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {news.currency || 'USD'}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-zinc-300 text-sm mb-3">
                      {news.summary || news.description || 'Market update available'}
                    </p>
                    <div className="flex items-center justify-between text-xs text-zinc-500">
                      <span>{news.time || news.timestamp || new Date(news.providerPublishTime * 1000 || Date.now()).toLocaleString()}</span>
                      {news.source && (
                        <span className="bg-zinc-800 px-2 py-1 rounded">{news.source}</span>
                      )}
                    </div>
                    {news.url && news.url !== '#' && (
                      <a 
                        href={news.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-400 hover:text-blue-300 text-xs mt-2 inline-block"
                      >
                        Read full article →
                      </a>
                    )}
                  </div>
                )
              })
            )}
          </div>
          
          <Alert className={`mt-6 ${apiConnected ? 'border-green-500/50 bg-green-500/10' : 'border-blue-500/50 bg-blue-500/10'}`}>
            <Info className="h-4 w-4" />
            <AlertDescription className={apiConnected ? 'text-green-300' : 'text-blue-300'}>
              {apiConnected 
                ? 'Connected to live financial news API. News updates automatically every 15 minutes.'
                : 'Showing sample news data. Connect to the trading API for live market news updates.'}
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>
    </div>
  )
}

// Education Section Component  
function EducationSection() {
  const [educationLevel, setEducationLevel] = useState('beginner')

  return (
    <div className="space-y-6">
      <Card className="shadow-xl border border-purple-500/20 bg-slate-800/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center text-white">
            <GraduationCap className="mr-3 h-6 w-6 text-purple-400" />
            Trading Education Center
          </CardTitle>
          <CardDescription className="text-purple-300">
            Choose your learning path to master prop firm trading
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 mb-6">
            <Button
              variant={educationLevel === 'beginner' ? 'default' : 'outline'}
              onClick={() => setEducationLevel('beginner')}
              className={`flex items-center space-x-2 ${
                educationLevel === 'beginner' 
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600' 
                  : 'bg-slate-700 border-slate-600 text-white hover:bg-slate-600'
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>Beginner</span>
            </Button>
            <Button
              variant={educationLevel === 'pro' ? 'default' : 'outline'}
              onClick={() => setEducationLevel('pro')}
              className={`flex items-center space-x-2 ${
                educationLevel === 'pro' 
                  ? 'bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600' 
                  : 'bg-slate-700 border-slate-600 text-white hover:bg-slate-600'
              }`}
            >
              <Brain className="h-4 w-4" />
              <span>Pro</span>
            </Button>
          </div>

          {educationLevel === 'beginner' ? <BeginnerContent /> : <ProContent />}
        </CardContent>
      </Card>
    </div>
  )
}

function BeginnerContent() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-zinc-900/50 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-lg text-orange-400 flex items-center">
              <Target className="mr-2 h-5 w-5" />
              Understanding Prop Firms
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-zinc-300">
            <ul className="space-y-2">
              <li>• Prop firms provide capital for traders</li>
              <li>• You trade their money, share the profits</li>
              <li>• Must pass evaluation phases first</li>
              <li>• Strict rules on daily/total losses</li>
              <li>• Profit targets must be met</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900/50 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-lg text-blue-400 flex items-center">
              <Shield className="mr-2 h-5 w-5" />
              Risk Management Basics
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-zinc-300">
            <ul className="space-y-2">
              <li>• Never risk more than 1-2% per trade</li>
              <li>• Always use stop losses</li>
              <li>• Plan your trades before entering</li>
              <li>• Keep a trading journal</li>
              <li>• Don't trade emotionally</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900/50 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-lg text-green-400 flex items-center">
              <Calculator className="mr-2 h-5 w-5" />
              Position Sizing
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-zinc-300">
            <ul className="space-y-2">
              <li>• Calculate lot size based on risk</li>
              <li>• Use this calculator for accuracy</li>
              <li>• Consider currency pair volatility</li>
              <li>• Account for spread costs</li>
              <li>• Adjust for different account sizes</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900/50 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-lg text-purple-400 flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5" />
              Common Mistakes
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-zinc-300">
            <ul className="space-y-2">
              <li>• Overleveraging positions</li>
              <li>• Not using stop losses</li>
              <li>• Revenge trading after losses</li>
              <li>• Ignoring prop firm rules</li>
              <li>• Poor risk management</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function ProContent() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="bg-zinc-900/50 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-lg text-purple-400 flex items-center">
              <Brain className="mr-2 h-5 w-5" />
              Advanced Strategies
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-zinc-300">
            <ul className="space-y-2">
              <li>• Multi-timeframe analysis</li>
              <li>• Advanced order types usage</li>
              <li>• Correlation trading strategies</li>
              <li>• Market structure analysis</li>
              <li>• Volume and liquidity assessment</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900/50 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-lg text-cyan-400 flex items-center">
              <Activity className="mr-2 h-5 w-5" />
              Risk Management Pro
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-zinc-300">
            <ul className="space-y-2">
              <li>• Portfolio heat and correlation</li>
              <li>• Dynamic position sizing</li>
              <li>• Volatility-adjusted stops</li>
              <li>• Risk parity approaches</li>
              <li>• Drawdown recovery strategies</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900/50 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-lg text-yellow-400 flex items-center">
              <Award className="mr-2 h-5 w-5" />
              Performance Analytics
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-zinc-300">
            <ul className="space-y-2">
              <li>• Sharpe ratio optimization</li>
              <li>• Maximum adverse excursion</li>
              <li>• Trade expectancy analysis</li>
              <li>• Monte Carlo simulations</li>
              <li>• Performance attribution</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900/50 border-zinc-700">
          <CardHeader>
            <CardTitle className="text-lg text-red-400 flex items-center">
              <Zap className="mr-2 h-5 w-5" />
              Psychology & Discipline
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-zinc-300">
            <ul className="space-y-2">
              <li>• Cognitive bias awareness</li>
              <li>• Systematic decision making</li>
              <li>• Stress testing strategies</li>
              <li>• Performance pressure handling</li>
              <li>• Continuous improvement cycles</li>
            </ul>
          </CardContent>
        </Card>
      </div>

    </div>
  )
}