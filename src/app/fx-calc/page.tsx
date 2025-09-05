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
  Server
} from 'lucide-react'

// Import custom components
import MarketClock from './components/MarketClock'
import Disclaimer from './components/Disclaimer'
import AdvancedAIAnalysis from './components/AdvancedAIAnalysis'
import MissingFieldsIndicator from './components/MissingFieldsIndicator'

// Enhanced prop firm configurations with accurate rules
const PROP_FIRMS = {
  fivepercenters: {
    name: 'The5ers',
    phases: {
      phase1: { name: 'Phase 1', target: 8, maxDailyloss: 5, maxTotalLoss: 12, timeLimit: 30 },
      phase2: { name: 'Phase 2', target: 5, maxDailyloss: 5, maxTotalLoss: 8, timeLimit: 60 },
      funded: { name: 'Funded', target: 0, maxDailyloss: 5, maxTotalLoss: 8, timeLimit: null }
    },
    accountSizes: ['10000', '20000', '50000', '100000', '200000'],
    profitSplit: { trader: 80, firm: 20 }
  },
  ftmo: {
    name: 'FTMO',
    phases: {
      challenge: { name: 'Challenge', target: 10, maxDailyloss: 5, maxTotalLoss: 10, timeLimit: 30 },
      verification: { name: 'Verification', target: 5, maxDailyloss: 5, maxTotalLoss: 10, timeLimit: 60 },
      funded: { name: 'Funded', target: 0, maxDailyloss: 5, maxTotalLoss: 10, timeLimit: null }
    },
    accountSizes: ['10000', '25000', '50000', '100000', '200000'],
    profitSplit: { trader: 80, firm: 20 }
  },
  myforexfunds: {
    name: 'MyForexFunds',
    phases: {
      phase1: { name: 'Phase 1', target: 8, maxDailyloss: 4, maxTotalLoss: 8, timeLimit: null },
      phase2: { name: 'Phase 2', target: 5, maxDailyloss: 4, maxTotalLoss: 8, timeLimit: null },
      funded: { name: 'Funded', target: 0, maxDailyloss: 4, maxTotalLoss: 8, timeLimit: null }
    },
    accountSizes: ['10000', '25000', '50000', '100000'],
    profitSplit: { trader: 85, firm: 15 }
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

export default function FXCalculatorPage() {
  const [activeTab, setActiveTab] = useState('calculator')
  
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
  const [propFirm, setPropFirm] = useState('fivepercenters')
  const [challengePhase, setChallengePhase] = useState('phase1')
  
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

  // Auto-calculate when inputs change
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
          <h1 className="text-4xl font-bold text-white mb-4">Professional FX Trading Calculator</h1>
          <p className="text-xl text-gray-300">Advanced prop firm compliance & risk management</p>
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
          <TabsList className="grid w-full grid-cols-4 mb-6 bg-slate-800 border-slate-700">
            <TabsTrigger value="calculator" className="flex items-center space-x-2 data-[state=active]:bg-purple-600 data-[state=active]:text-white">
              <Calculator className="h-4 w-4" />
              <span>Calculator</span>
            </TabsTrigger>
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

          <TabsContent value="calculator">
            <ComprehensiveTradingCalculator
              currencyPair={currencyPair}
              setCurrencyPair={setCurrencyPair}
              accountSize={accountSize}
              setAccountSize={setAccountSize}
              currentBalance={currentBalance}
              setCurrentBalance={setCurrentBalance}
              entryPrice={entryPrice}
              setEntryPrice={setEntryPrice}
              stopLoss={stopLoss}
              setStopLoss={setStopLoss}
              takeProfit={takeProfit}
              setTakeProfit={setTakeProfit}
              lotSize={lotSize}
              setLotSize={setLotSize}
              tradeDirection={tradeDirection}
              setTradeDirection={setTradeDirection}
              riskLevel={riskLevel}
              setRiskLevel={setRiskLevel}
              customRisk={customRisk}
              setCustomRisk={setCustomRisk}
              propFirm={propFirm}
              setPropFirm={setPropFirm}
              challengePhase={challengePhase}
              setChallengePhase={setChallengePhase}
              calculations={calculations}
              propFirmStatus={propFirmStatus}
              realTimeData={realTimeData}
              setRealTimeData={setRealTimeData}
              marketAnalysis={marketAnalysis}
              generateMarketAnalysis={generateMarketAnalysis}
              saveTradeToHistory={saveTradeToHistory}
              tradeHistory={tradeHistory}
              apiStatus={apiStatus}
              performAIAnalysis={performAIAnalysis}
              aiAnalysis={aiAnalysis}
              chatGptApiKey={chatGptApiKey}
              setChatGptApiKey={setChatGptApiKey}
              showApiKey={showApiKey}
              setShowApiKey={setShowApiKey}
            />
          </TabsContent>

          <TabsContent value="charts">
            <TradingViewCharts />
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
}

function ComprehensiveTradingCalculator({
  currencyPair, setCurrencyPair, accountSize, setAccountSize, currentBalance, setCurrentBalance,
  entryPrice, setEntryPrice, stopLoss, setStopLoss, takeProfit, setTakeProfit,
  lotSize, setLotSize, tradeDirection, setTradeDirection, riskLevel, setRiskLevel,
  customRisk, setCustomRisk, propFirm, setPropFirm, challengePhase, setChallengePhase,
  calculations, propFirmStatus, realTimeData, setRealTimeData, marketAnalysis,
  generateMarketAnalysis, saveTradeToHistory, tradeHistory, apiStatus,
  performAIAnalysis, aiAnalysis, chatGptApiKey, setChatGptApiKey, showApiKey, setShowApiKey
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
          </CardContent>
        </Card>

        {/* Missing Fields & Validation */}
        <MissingFieldsIndicator
          entryPrice={entryPrice}
          stopLoss={stopLoss}
          takeProfit={takeProfit}
          riskPercentage={customRisk}
          accountBalance={currentBalance}
          results={calculations}
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
                    {realTimeData.price || CURRENCY_PAIRS[currencyPair as keyof typeof CURRENCY_PAIRS].defaultPrice}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-zinc-400 text-sm">Change</p>
                  <p className={`text-lg font-semibold ${realTimeData.change >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {realTimeData.change >= 0 ? '+' : ''}{realTimeData.change || '0.00000'}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-zinc-400 text-sm">Change %</p>
                  <p className={`text-lg font-semibold ${realTimeData.changePercent >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                    {realTimeData.changePercent >= 0 ? '+' : ''}{realTimeData.changePercent || '0.00'}%
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

        {/* Trade Calculations */}
        <Card className="shadow-xl border border-purple-500/20 bg-slate-800/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg flex items-center text-white">
              <Target className="mr-2 h-5 w-5 text-purple-400" />
              Trade Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-900/50 rounded-lg p-3">
                <p className="text-zinc-400 text-sm">Position Size</p>
                <p className="text-xl font-bold text-white">{calculations.lotSize}</p>
                <p className="text-xs text-zinc-500">lots</p>
              </div>
              <div className="bg-zinc-900/50 rounded-lg p-3">
                <p className="text-zinc-400 text-sm">Risk Amount</p>
                <p className="text-xl font-bold text-red-400">${calculations.riskAmount}</p>
                <p className="text-xs text-zinc-500">{calculations.accountRisk}% of account</p>
              </div>
              <div className="bg-zinc-900/50 rounded-lg p-3">
                <p className="text-zinc-400 text-sm">Potential Profit</p>
                <p className="text-xl font-bold text-green-400">${calculations.potentialProfit}</p>
                <p className="text-xs text-zinc-500">{calculations.takeProfitPips} pips</p>
              </div>
              <div className="bg-zinc-900/50 rounded-lg p-3">
                <p className="text-zinc-400 text-sm">Risk/Reward</p>
                <p className="text-xl font-bold text-blue-400">1:{calculations.riskRewardRatio}</p>
                <p className="text-xs text-zinc-500">ratio</p>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Stop Loss Pips:</span>
                <span className="text-white">{calculations.stopLossPips}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Pip Value:</span>
                <span className="text-white">${calculations.pipValue}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Required Margin:</span>
                <span className="text-white">${calculations.margin}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Effective Leverage:</span>
                <span className="text-white">1:{calculations.leverage}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Market Analysis */}
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
            <Button onClick={generateMarketAnalysis} size="sm" variant="outline" className="bg-slate-700 border-slate-600 text-white hover:bg-slate-600">
              <RefreshCw className="h-3 w-3 mr-1" />
              {apiStatus.connected ? 'Analyze' : 'Simulate'}
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Market Trend:</span>
                <Badge variant={marketAnalysis.trend === 'bullish' ? 'default' : marketAnalysis.trend === 'bearish' ? 'destructive' : 'secondary'}>
                  {marketAnalysis.trend}
                </Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-zinc-400">Signal Strength:</span>
                <div className="flex items-center space-x-2">
                  <Progress value={marketAnalysis.strength} className="w-20" />
                  <span className="text-white text-sm">{marketAnalysis.strength}%</span>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-zinc-400 text-sm">Key Signals:</p>
                {marketAnalysis.signals.map((signal: string, index: number) => (
                  <div key={index} className="flex items-center text-sm">
                    <Lightbulb className="h-3 w-3 text-yellow-400 mr-2 flex-shrink-0" />
                    <span className={`${signal.includes('⚠️') ? 'text-orange-400' : 'text-white'}`}>{signal}</span>
                  </div>
                ))}
              </div>
              
              {/* Advanced AI Analysis Section */}
              <div className="mt-6 pt-4 border-t border-zinc-700">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-medium text-purple-300 flex items-center">
                    <Sparkles className="h-4 w-4 mr-2" />
                    AI Analysis (ChatGPT)
                  </h4>
                  <Button
                    onClick={performAIAnalysis}
                    size="sm"
                    disabled={aiAnalysis.isAnalyzing}
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                  >
                    {aiAnalysis.isAnalyzing ? (
                      <><Loader2 className="h-3 w-3 mr-1 animate-spin" />Analyzing...</>
                    ) : (
                      <><Brain className="h-3 w-3 mr-1" />Analyze</>
                    )}
                  </Button>
                </div>
                
                {/* API Key Input */}
                {!chatGptApiKey && (
                  <div className="mb-3">
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <Input
                          type={showApiKey ? 'text' : 'password'}
                          value={chatGptApiKey}
                          onChange={(e) => setChatGptApiKey(e.target.value)}
                          placeholder="Enter ChatGPT API key (sk-...)"  
                          className="bg-zinc-800 border-zinc-600 text-white text-xs pr-8"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-1 top-1 h-6 w-6 p-0 text-zinc-400 hover:text-white"
                          onClick={() => setShowApiKey(!showApiKey)}
                        >
                          {showApiKey ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                        </Button>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">
                      Get your key from{' '}
                      <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                        OpenAI Platform
                      </a>
                    </p>
                  </div>
                )}
                
                {/* AI Analysis Results */}
                {aiAnalysis.error && (
                  <Alert className="border-red-500/50 bg-red-500/10 mb-3">
                    <AlertTriangle className="h-4 w-4 text-red-400" />
                    <AlertDescription className="text-red-300 text-xs">
                      {aiAnalysis.error}
                    </AlertDescription>
                  </Alert>
                )}
                
                {aiAnalysis.content && (
                  <div className="bg-zinc-900/50 rounded-lg p-3 max-h-32 overflow-y-auto">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-green-600 text-white text-xs">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Analysis Complete
                      </Badge>
                      {aiAnalysis.timestamp && (
                        <span className="text-xs text-zinc-400">
                          {aiAnalysis.timestamp.toLocaleTimeString()}
                        </span>
                      )}
                    </div>
                    <pre className="text-xs text-white whitespace-pre-wrap font-mono leading-tight">
                      {aiAnalysis.content.slice(0, 500)}{aiAnalysis.content.length > 500 ? '...' : ''}
                    </pre>
                    {aiAnalysis.dataPointsAnalyzed && (
                      <p className="text-xs text-green-400 mt-2">
                        ✓ {aiAnalysis.dataPointsAnalyzed.total_candles} candles analyzed across {aiAnalysis.dataPointsAnalyzed.timeframes?.length || 0} timeframes
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
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

        {/* Action Buttons */}
        <Card className="shadow-xl border border-purple-500/20 bg-slate-800/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg flex items-center text-white">
              <Zap className="mr-2 h-5 w-5 text-yellow-400" />
              Trade Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              onClick={saveTradeToHistory}
              disabled={!entryPrice || !stopLoss}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
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
      </div>
    </div>
  )
}

// TradingView Charts Component
function TradingViewCharts() {
  const [selectedSymbol, setSelectedSymbol] = useState('OANDA:EURUSD')

  const popularSymbols = [
    { symbol: 'OANDA:EURUSD', name: 'EUR/USD', category: 'Forex' },
    { symbol: 'OANDA:GBPUSD', name: 'GBP/USD', category: 'Forex' },
    { symbol: 'OANDA:USDJPY', name: 'USD/JPY', category: 'Forex' },
    { symbol: 'OANDA:AUDUSD', name: 'AUD/USD', category: 'Forex' },
    { symbol: 'TVC:NDX', name: 'NAS100', category: 'Indices' },
    { symbol: 'CME:ES1!', name: 'S&P 500', category: 'Indices' },
    { symbol: 'TVC:GOLD', name: 'Gold', category: 'Commodities' },
    { symbol: 'BINANCE:BTCUSDT', name: 'Bitcoin', category: 'Crypto' }
  ]

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js'
    script.async = true
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: selectedSymbol,
      interval: "D",
      timezone: "Etc/UTC",
      theme: "dark",
      style: "1",
      locale: "en",
      enable_publishing: false,
      backgroundColor: "rgba(19, 23, 34, 1)",
      gridColor: "rgba(42, 46, 57, 0.06)",
      hide_top_toolbar: false,
      hide_legend: false,
      save_image: false,
      container_id: "tradingview_chart"
    })

    const container = document.getElementById("tradingview_chart")
    if (container) {
      container.innerHTML = ''
      container.appendChild(script)
    }
  }, [selectedSymbol])

  return (
    <div className="space-y-6">
      <Card className="shadow-xl border border-purple-500/20 bg-slate-800/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center text-white">
            <BarChart3 className="mr-3 h-6 w-6 text-purple-400" />
            TradingView Charts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label className="text-white">Select Symbol</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
              {popularSymbols.map((item) => (
                <Button
                  key={item.symbol}
                  onClick={() => setSelectedSymbol(item.symbol)}
                  variant={selectedSymbol === item.symbol ? "default" : "outline"}
                  size="sm"
                  className={selectedSymbol === item.symbol ? 
                    "bg-purple-600 hover:bg-purple-700" : 
                    "bg-slate-700 border-slate-600 text-white hover:bg-slate-600"}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </div>
          
          <div className="tradingview-widget-container" style={{ height: '600px' }}>
            <div id="tradingview_chart" style={{ height: '100%' }}></div>
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

      {/* Important Disclaimer */}
      <Disclaimer />
    </div>
  )
}