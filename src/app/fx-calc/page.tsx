'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Alert, AlertDescription } from '@/components/ui/alert'
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
  RotateCcw
} from 'lucide-react'

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

// Enhanced currency pairs with real market data and volatility indicators
const CURRENCY_PAIRS = {
  'EURUSD': { 
    symbol: 'EUR/USD', 
    pipValue: 10, 
    spread: 0.8, 
    defaultPrice: 1.0850,
    volatility: 'medium',
    description: 'Euro vs US Dollar - Most traded pair'
  },
  'GBPUSD': { 
    symbol: 'GBP/USD', 
    pipValue: 10, 
    spread: 1.2, 
    defaultPrice: 1.2650,
    volatility: 'high',
    description: 'British Pound vs US Dollar - Cable'
  },
  'USDJPY': { 
    symbol: 'USD/JPY', 
    pipValue: 6.68, 
    spread: 0.9, 
    defaultPrice: 149.50,
    volatility: 'medium',
    description: 'US Dollar vs Japanese Yen'
  },
  'AUDUSD': { 
    symbol: 'AUD/USD', 
    pipValue: 10, 
    spread: 1.4, 
    defaultPrice: 0.6650,
    volatility: 'medium',
    description: 'Australian Dollar vs US Dollar'
  },
  'USDCAD': { 
    symbol: 'USD/CAD', 
    pipValue: 7.33, 
    spread: 1.6, 
    defaultPrice: 1.3650,
    volatility: 'medium',
    description: 'US Dollar vs Canadian Dollar'
  },
  'USDCHF': { 
    symbol: 'USD/CHF', 
    pipValue: 11.17, 
    spread: 1.8, 
    defaultPrice: 0.8950,
    volatility: 'low',
    description: 'US Dollar vs Swiss Franc'
  },
  'NZDUSD': { 
    symbol: 'NZD/USD', 
    pipValue: 10, 
    spread: 2.0, 
    defaultPrice: 0.6050,
    volatility: 'high',
    description: 'New Zealand Dollar vs US Dollar'
  },
  'EURJPY': { 
    symbol: 'EUR/JPY', 
    pipValue: 6.68, 
    spread: 1.8, 
    defaultPrice: 162.50,
    volatility: 'high',
    description: 'Euro vs Japanese Yen'
  },
  'GBPJPY': { 
    symbol: 'GBP/JPY', 
    pipValue: 6.68, 
    spread: 2.5, 
    defaultPrice: 189.50,
    volatility: 'very_high',
    description: 'British Pound vs Japanese Yen'
  },
  'XAUUSD': { 
    symbol: 'Gold', 
    pipValue: 1, 
    spread: 0.3, 
    defaultPrice: 2050.00,
    volatility: 'high',
    description: 'Gold vs US Dollar - Safe haven'
  },
  'NAS100': { 
    symbol: 'NASDAQ 100', 
    pipValue: 1, 
    spread: 1.5, 
    defaultPrice: 16500.0,
    volatility: 'very_high',
    description: 'US Tech 100 Index'
  },
  'SPX500': { 
    symbol: 'S&P 500', 
    pipValue: 1, 
    spread: 0.4, 
    defaultPrice: 4500.0,
    volatility: 'high',
    description: 'US 500 Index'
  }
}

// Risk management suggestions
const RISK_LEVELS = {
  conservative: { percentage: 0.5, description: 'Very safe, slow growth' },
  moderate: { percentage: 1.0, description: 'Balanced risk/reward' },
  aggressive: { percentage: 2.0, description: 'Higher risk, faster growth' },
  custom: { percentage: 1.5, description: 'Set your own risk level' }
}

export default function FXCalculatorPage() {
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
    totalPnL: 0,
    totalTrades: 0,
    winningTrades: 0,
    losingTrades: 0
  })

  // Core state
  const [propFirm, setPropFirm] = useState('fivepercenters')
  const [challengePhase, setChallengePhase] = useState('phase1')
  const [accountSize, setAccountSize] = useState('10000')
  const [currentBalance, setCurrentBalance] = useState('10000')
  const [currencyPair, setCurrencyPair] = useState('EURUSD')
  const [riskLevel, setRiskLevel] = useState('moderate')
  const [customRisk, setCustomRisk] = useState('1.0')

  // Trading parameters
  const [entryPrice, setEntryPrice] = useState('')
  const [stopLoss, setStopLoss] = useState('')
  const [takeProfit, setTakeProfit] = useState('')
  const [tradeDirection, setTradeDirection] = useState('buy')
  const [lotSize, setLotSize] = useState('0.01')
  
  // Advanced features
  const [orderType, setOrderType] = useState('market')
  const [pendingPrice, setPendingPrice] = useState('')
  const [timeInForce, setTimeInForce] = useState('gtc')
  const [slippage, setSlippage] = useState('3')
  const [comment, setComment] = useState('')
  
  // Calculated results
  const [calculations, setCalculations] = useState({
    lotSize: 0,
    pipValue: 0,
    riskAmount: 0,
    potentialProfit: 0,
    potentialLoss: 0,
    stopLossPips: 0,
    takeProfitPips: 0,
    riskRewardRatio: 0,
    marginRequired: 0,
    accountRisk: 0
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

  // Real-time price simulation
  useEffect(() => {
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

      // Update entry price if real-time is active
      if (realTimeData.isLive && !entryPrice) {
        setEntryPrice(newPrice.toFixed(currencyPair.includes('JPY') ? 2 : 5))
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [realTimeData.isLive, currencyPair, entryPrice])

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
    
    // If no manual lot size, calculate based on risk
    if (!manualLotSize && stopLossPips > 0) {
      finalLotSize = riskAmount / (stopLossPips * pipValue)
      finalLotSize = Math.max(0.01, Math.min(finalLotSize, 100)) // Clamp between 0.01 and 100
    } else if (!manualLotSize) {
      finalLotSize = 0.01 // Default minimum
    }
    
    // Calculate potential outcomes
    const potentialLoss = finalLotSize * stopLossPips * pipValue
    const potentialProfit = finalLotSize * takeProfitPips * pipValue
    const riskRewardRatio = potentialLoss > 0 ? potentialProfit / potentialLoss : 0
    const accountRisk = (potentialLoss / balance) * 100

    // Margin calculation (1:100 leverage)
    const contractSize = 100000 // Standard lot
    const leverageRatio = 100
    const marginRequired = (finalLotSize * contractSize * entry) / leverageRatio

    setCalculations({
      lotSize: Math.round(finalLotSize * 100) / 100,
      pipValue,
      riskAmount: Math.round(riskAmount * 100) / 100,
      potentialProfit: Math.round(potentialProfit * 100) / 100,
      potentialLoss: Math.round(potentialLoss * 100) / 100,
      stopLossPips: Math.round(stopLossPips * 10) / 10,
      takeProfitPips: Math.round(takeProfitPips * 10) / 10,
      riskRewardRatio: Math.round(riskRewardRatio * 100) / 100,
      marginRequired: Math.round(marginRequired * 100) / 100,
      accountRisk: Math.round(accountRisk * 100) / 100
    })

    // Calculate prop firm compliance
    calculatePropFirmStatus(balance, account, potentialLoss)
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
  }, [accountSize, currentBalance, currencyPair, riskLevel, customRisk, entryPrice, stopLoss, takeProfit, lotSize, propFirm, challengePhase])

  // Auto-populate default prices when currency pair changes
  useEffect(() => {
    const pair = CURRENCY_PAIRS[currencyPair as keyof typeof CURRENCY_PAIRS]
    if (pair) {
      setEntryPrice(pair.defaultPrice.toString())
      
      // Set intelligent defaults based on volatility
      const volatilityMultiplier = {
        'low': 0.003,
        'medium': 0.005,
        'high': 0.008,
        'very_high': 0.012
      }[pair.volatility] || 0.005

      const movement = pair.defaultPrice * volatilityMultiplier
      
      if (tradeDirection === 'buy') {
        setStopLoss((pair.defaultPrice - movement).toFixed(currencyPair.includes('JPY') ? 2 : 5))
        setTakeProfit((pair.defaultPrice + movement * 2).toFixed(currencyPair.includes('JPY') ? 2 : 5))
      } else {
        setStopLoss((pair.defaultPrice + movement).toFixed(currencyPair.includes('JPY') ? 2 : 5))
        setTakeProfit((pair.defaultPrice - movement * 2).toFixed(currencyPair.includes('JPY') ? 2 : 5))
      }
    }
  }, [currencyPair, tradeDirection])

  // Quick suggestion generator
  const generateQuickSuggestion = () => {
    const pair = CURRENCY_PAIRS[currencyPair as keyof typeof CURRENCY_PAIRS]
    const currentPrice = parseFloat(entryPrice) || pair.defaultPrice
    
    // Generate suggestions based on market analysis simulation
    const suggestions = {
      'EURUSD': { bias: 'bullish', confidence: 75, target: 50, stop: 25 },
      'GBPUSD': { bias: 'bearish', confidence: 60, target: 80, stop: 40 },
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
        `Stop: ${suggestion.stop} pips`
      ]
    }))
  }

  // Save trade to history
  const saveTradeToHistory = () => {
    if (!entryPrice || !stopLoss || !takeProfit) return

    const trade = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      pair: currencyPair,
      direction: tradeDirection,
      entry: parseFloat(entryPrice),
      stopLoss: parseFloat(stopLoss),
      takeProfit: parseFloat(takeProfit),
      lotSize: calculations.lotSize,
      risk: calculations.potentialLoss,
      reward: calculations.potentialProfit,
      rr: calculations.riskRewardRatio,
      status: 'pending'
    }

    setTradeHistory(prev => [trade, ...prev.slice(0, 9)]) // Keep last 10 trades
    
    // Update performance metrics
    const totalTrades = tradeHistory.length + 1
    const avgRisk = tradeHistory.reduce((sum, t) => sum + t.risk, calculations.potentialLoss) / totalTrades
    
    setPerformanceMetrics(prev => ({
      ...prev,
      totalTrades,
      avgRisk: Math.round(avgRisk * 100) / 100
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Header */}
      <div className="relative pt-24 pb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-green-600/10" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <Badge className="bg-green-600/20 text-green-300 border-green-500/30 px-4 py-2 text-sm">
              PROFESSIONAL TRADING CALCULATOR
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            FX Trading <span className="text-green-400">Calculator</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Professional prop firm calculator with real-time analysis and compliance tracking
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-zinc-800/50 border-zinc-700">
            <TabsTrigger value="calculator" className="flex items-center space-x-2 data-[state=active]:bg-green-600 data-[state=active]:text-white">
              <Calculator className="h-4 w-4" />
              <span>Calculator</span>
            </TabsTrigger>
            <TabsTrigger value="analysis" className="flex items-center space-x-2 data-[state=active]:bg-green-600 data-[state=active]:text-white">
              <BarChart3 className="h-4 w-4" />
              <span>Analysis</span>
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center space-x-2 data-[state=active]:bg-green-600 data-[state=active]:text-white">
              <Brain className="h-4 w-4" />
              <span>Education</span>
            </TabsTrigger>
          </TabsList>

          {/* Calculator Tab */}
          <TabsContent value="calculator">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Inputs */}
              <div className="lg:col-span-2 space-y-6">
                {/* Real-time price feed */}
                <Card className="bg-zinc-900/50 border-zinc-800">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white flex items-center">
                        <Activity className="h-5 w-5 mr-2 text-blue-400" />
                        Live Market Data
                      </CardTitle>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setRealTimeData(prev => ({ ...prev, isLive: !prev.isLive }))}
                        className={realTimeData.isLive ? 'bg-green-600 text-white' : 'bg-zinc-800'}
                      >
                        {realTimeData.isLive ? <Pause className="h-4 w-4 mr-1" /> : <Play className="h-4 w-4 mr-1" />}
                        {realTimeData.isLive ? 'Live' : 'Start'}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
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
                          {realTimeData.change >= 0 ? '+' : ''}{realTimeData.change.toFixed(5)}
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-zinc-400 text-sm">Change %</p>
                        <p className={`text-lg font-semibold ${realTimeData.changePercent >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {realTimeData.changePercent >= 0 ? '+' : ''}{realTimeData.changePercent}%
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
                      <p className="text-xs text-zinc-500 text-center mt-2">
                        Last updated: {realTimeData.lastUpdate.toLocaleTimeString()}
                      </p>
                    )}
                  </CardContent>
                </Card>

                {/* Prop Firm Setup */}
                <Card className="bg-zinc-900/50 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Award className="h-5 w-5 mr-2 text-green-400" />
                      Prop Firm Setup
                    </CardTitle>
                    <CardDescription>Configure your funded account challenge</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label className="text-zinc-300">Prop Firm</Label>
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
                        <Label className="text-zinc-300">Challenge Phase</Label>
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
                        <Label className="text-zinc-300">Account Size</Label>
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
                    </div>
                    <div>
                      <Label className="text-zinc-300">Current Balance</Label>
                      <Input
                        type="number"
                        value={currentBalance}
                        onChange={(e) => setCurrentBalance(e.target.value)}
                        className="bg-zinc-800 border-zinc-700"
                        placeholder="Current account balance"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Trading Setup */}
                <Card className="bg-zinc-900/50 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Target className="h-5 w-5 mr-2 text-blue-400" />
                      Trading Setup
                    </CardTitle>
                    <CardDescription>Configure your trade parameters</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-zinc-300">Currency Pair</Label>
                        <Select value={currencyPair} onValueChange={setCurrencyPair}>
                          <SelectTrigger className="bg-zinc-800 border-zinc-700">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(CURRENCY_PAIRS).map(([key, pair]) => (
                              <SelectItem key={key} value={key}>
                                <div className="flex items-center justify-between w-full">
                                  {pair.symbol}
                                  <Badge className="ml-2 text-xs" variant={
                                    pair.volatility === 'low' ? 'secondary' :
                                    pair.volatility === 'medium' ? 'default' :
                                    pair.volatility === 'high' ? 'destructive' : 'destructive'
                                  }>
                                    {pair.volatility}
                                  </Badge>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-zinc-300">Direction</Label>
                        <Select value={tradeDirection} onValueChange={setTradeDirection}>
                          <SelectTrigger className="bg-zinc-800 border-zinc-700">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="buy">
                              <div className="flex items-center">
                                <TrendingUp className="h-4 w-4 mr-2 text-green-400" />
                                Buy (Long)
                              </div>
                            </SelectItem>
                            <SelectItem value="sell">
                              <div className="flex items-center">
                                <TrendingDown className="h-4 w-4 mr-2 text-red-400" />
                                Sell (Short)
                              </div>
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label className="text-zinc-300">Entry Price</Label>
                        <Input
                          type="number"
                          step="0.00001"
                          value={entryPrice}
                          onChange={(e) => setEntryPrice(e.target.value)}
                          className="bg-zinc-800 border-zinc-700"
                          placeholder="Entry price"
                        />
                      </div>
                      <div>
                        <Label className="text-zinc-300">Stop Loss</Label>
                        <Input
                          type="number"
                          step="0.00001"
                          value={stopLoss}
                          onChange={(e) => setStopLoss(e.target.value)}
                          className="bg-zinc-800 border-zinc-700"
                          placeholder="Stop loss"
                        />
                      </div>
                      <div>
                        <Label className="text-zinc-300">Take Profit</Label>
                        <Input
                          type="number"
                          step="0.00001"
                          value={takeProfit}
                          onChange={(e) => setTakeProfit(e.target.value)}
                          className="bg-zinc-800 border-zinc-700"
                          placeholder="Take profit"
                        />
                      </div>
                    </div>

                    {/* Risk Management */}
                    <div className="border-t border-zinc-700 pt-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label className="text-zinc-300">Risk Level</Label>
                          <Select value={riskLevel} onValueChange={setRiskLevel}>
                            <SelectTrigger className="bg-zinc-800 border-zinc-700">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {Object.entries(RISK_LEVELS).map(([key, level]) => (
                                <SelectItem key={key} value={key}>
                                  {key.charAt(0).toUpperCase() + key.slice(1)} ({level.percentage}%)
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        {riskLevel === 'custom' && (
                          <div>
                            <Label className="text-zinc-300">Custom Risk %</Label>
                            <Input
                              type="number"
                              step="0.1"
                              value={customRisk}
                              onChange={(e) => setCustomRisk(e.target.value)}
                              className="bg-zinc-800 border-zinc-700"
                              placeholder="Risk percentage"
                            />
                          </div>
                        )}
                        <div>
                          <Label className="text-zinc-300">Lot Size (Optional)</Label>
                          <Input
                            type="number"
                            step="0.01"
                            value={lotSize}
                            onChange={(e) => setLotSize(e.target.value)}
                            className="bg-zinc-800 border-zinc-700"
                            placeholder="Manual lot size"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        onClick={generateQuickSuggestion}
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        <Lightbulb className="h-4 w-4 mr-2" />
                        Quick Analysis
                      </Button>
                      <Button 
                        onClick={saveTradeToHistory}
                        variant="outline"
                        className="border-green-600 text-green-400 hover:bg-green-600 hover:text-white"
                      >
                        <DollarSign className="h-4 w-4 mr-2" />
                        Save Trade
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Column - Results */}
              <div className="space-y-6">
                {/* Prop Firm Compliance */}
                <Card className="bg-zinc-900/50 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Shield className="h-5 w-5 mr-2 text-green-400" />
                      Prop Firm Compliance
                      {propFirmStatus.isCompliant ? (
                        <CheckCircle className="h-5 w-5 ml-2 text-green-400" />
                      ) : (
                        <AlertTriangle className="h-5 w-5 ml-2 text-red-400" />
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-zinc-300">Profit Target</span>
                        <span className="text-white font-semibold">
                          ${propFirmStatus.currentProfit.toFixed(2)} / ${propFirmStatus.profitTarget.toFixed(2)}
                        </span>
                      </div>
                      <Progress 
                        value={propFirmStatus.progressToTarget} 
                        className="h-2 bg-zinc-800"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-zinc-800/50 rounded-lg">
                        <p className="text-zinc-400 text-sm">Daily Risk</p>
                        <p className={`font-semibold ${propFirmStatus.dailyLoss > propFirmStatus.maxDailyLoss * 0.8 ? 'text-red-400' : 'text-green-400'}`}>
                          ${propFirmStatus.dailyLoss.toFixed(2)}
                        </p>
                        <p className="text-xs text-zinc-500">
                          Max: ${propFirmStatus.maxDailyLoss.toFixed(2)}
                        </p>
                      </div>
                      <div className="text-center p-3 bg-zinc-800/50 rounded-lg">
                        <p className="text-zinc-400 text-sm">Total Loss</p>
                        <p className={`font-semibold ${propFirmStatus.totalLoss > propFirmStatus.maxTotalLoss * 0.8 ? 'text-red-400' : 'text-green-400'}`}>
                          ${propFirmStatus.totalLoss.toFixed(2)}
                        </p>
                        <p className="text-xs text-zinc-500">
                          Max: ${propFirmStatus.maxTotalLoss.toFixed(2)}
                        </p>
                      </div>
                    </div>

                    {propFirmStatus.warnings.length > 0 && (
                      <div className="space-y-2">
                        {propFirmStatus.warnings.map((warning, index) => (
                          <Alert key={index} className="bg-yellow-900/20 border-yellow-500/30">
                            <AlertTriangle className="h-4 w-4 text-yellow-400" />
                            <AlertDescription className="text-yellow-300 text-sm">
                              {warning}
                            </AlertDescription>
                          </Alert>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Trade Calculations */}
                <Card className="bg-zinc-900/50 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Calculator className="h-5 w-5 mr-2 text-blue-400" />
                      Trade Calculations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-zinc-800/50 rounded-lg">
                        <p className="text-zinc-400 text-sm">Lot Size</p>
                        <p className="text-xl font-bold text-white">{calculations.lotSize}</p>
                      </div>
                      <div className="text-center p-3 bg-zinc-800/50 rounded-lg">
                        <p className="text-zinc-400 text-sm">Pip Value</p>
                        <p className="text-xl font-bold text-white">${calculations.pipValue}</p>
                      </div>
                      <div className="text-center p-3 bg-green-900/20 rounded-lg border border-green-500/30">
                        <p className="text-green-300 text-sm">Potential Profit</p>
                        <p className="text-xl font-bold text-green-400">${calculations.potentialProfit}</p>
                        <p className="text-xs text-green-300">{calculations.takeProfitPips} pips</p>
                      </div>
                      <div className="text-center p-3 bg-red-900/20 rounded-lg border border-red-500/30">
                        <p className="text-red-300 text-sm">Potential Loss</p>
                        <p className="text-xl font-bold text-red-400">${calculations.potentialLoss}</p>
                        <p className="text-xs text-red-300">{calculations.stopLossPips} pips</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-zinc-800/50 rounded-lg">
                        <p className="text-zinc-400 text-sm">R:R Ratio</p>
                        <p className={`text-lg font-semibold ${calculations.riskRewardRatio >= 2 ? 'text-green-400' : calculations.riskRewardRatio >= 1.5 ? 'text-yellow-400' : 'text-red-400'}`}>
                          1:{calculations.riskRewardRatio}
                        </p>
                      </div>
                      <div className="text-center p-3 bg-zinc-800/50 rounded-lg">
                        <p className="text-zinc-400 text-sm">Account Risk</p>
                        <p className={`text-lg font-semibold ${calculations.accountRisk <= 1 ? 'text-green-400' : calculations.accountRisk <= 2 ? 'text-yellow-400' : 'text-red-400'}`}>
                          {calculations.accountRisk}%
                        </p>
                      </div>
                    </div>

                    <div className="text-center p-3 bg-zinc-800/50 rounded-lg">
                      <p className="text-zinc-400 text-sm">Margin Required</p>
                      <p className="text-lg font-semibold text-white">${calculations.marginRequired}</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="bg-zinc-900/50 border-zinc-800">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Zap className="h-5 w-5 mr-2 text-yellow-400" />
                      Quick Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button 
                      onClick={() => {
                        setEntryPrice('')
                        setStopLoss('')
                        setTakeProfit('')
                        setLotSize('0.01')
                      }}
                      variant="outline" 
                      className="w-full"
                    >
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Reset All
                    </Button>
                    <Button 
                      onClick={() => {
                        const pair = CURRENCY_PAIRS[currencyPair as keyof typeof CURRENCY_PAIRS]
                        navigator.clipboard.writeText(`${pair.symbol} ${tradeDirection.toUpperCase()} @ ${entryPrice} | SL: ${stopLoss} | TP: ${takeProfit} | Size: ${calculations.lotSize}`)
                      }}
                      className="w-full bg-purple-600 hover:bg-purple-700"
                    >
                      Copy Trade Setup
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Analysis Tab */}
          <TabsContent value="analysis">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Market Analysis */}
              <Card className="bg-zinc-900/50 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-blue-400" />
                    Market Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-zinc-800/50 rounded-lg">
                    <p className="text-zinc-400 text-sm">Overall Trend</p>
                    <p className={`text-2xl font-bold ${
                      marketAnalysis.trend === 'bullish' ? 'text-green-400' :
                      marketAnalysis.trend === 'bearish' ? 'text-red-400' : 'text-yellow-400'
                    }`}>
                      {marketAnalysis.trend.toUpperCase()}
                    </p>
                    <p className="text-zinc-300">Strength: {marketAnalysis.strength}%</p>
                  </div>

                  {marketAnalysis.signals.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-zinc-300 font-semibold">Signals:</p>
                      {marketAnalysis.signals.map((signal, index) => (
                        <div key={index} className="flex items-center p-2 bg-zinc-800/30 rounded">
                          <Info className="h-4 w-4 mr-2 text-blue-400" />
                          <span className="text-zinc-300 text-sm">{signal}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Trade History */}
              <Card className="bg-zinc-900/50 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-purple-400" />
                    Recent Trades
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {tradeHistory.length > 0 ? (
                    <div className="space-y-2 max-h-80 overflow-y-auto">
                      {tradeHistory.map((trade) => (
                        <div key={trade.id} className="p-3 bg-zinc-800/30 rounded border-l-4 border-blue-500">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-semibold text-white">{trade.pair}</p>
                              <p className="text-sm text-zinc-400">{trade.date}</p>
                            </div>
                            <Badge variant={trade.direction === 'buy' ? 'default' : 'destructive'}>
                              {trade.direction.toUpperCase()}
                            </Badge>
                          </div>
                          <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                            <span className="text-zinc-400">Size: {trade.lotSize}</span>
                            <span className="text-zinc-400">R:R: 1:{trade.rr}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-zinc-400 text-center py-8">No trades saved yet</p>
                  )}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Education Tab */}
          <TabsContent value="education">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-zinc-900/50 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Brain className="h-5 w-5 mr-2 text-purple-400" />
                    Risk Management Rules
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-zinc-300">Never risk more than 1-2% of your account on a single trade</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-zinc-300">Always use stop losses to limit potential losses</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-zinc-300">Aim for risk-reward ratios of at least 1:2</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-zinc-300">Respect prop firm daily and maximum loss limits</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-zinc-300">Keep detailed records of all trades for analysis</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-zinc-900/50 border-zinc-800">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Lightbulb className="h-5 w-5 mr-2 text-yellow-400" />
                    Prop Firm Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Award className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <p className="text-zinc-300">Start with smaller position sizes until you understand the platform</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Award className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <p className="text-zinc-300">Focus on consistency over big wins during challenges</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Award className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <p className="text-zinc-300">Track your progress daily to stay within limits</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Award className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <p className="text-zinc-300">Each firm has different rules - read them carefully</p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Award className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <p className="text-zinc-300">Use this calculator before every trade to verify compliance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}