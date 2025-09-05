import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calculator, TrendingUp, Shield, Target, AlertTriangle, Info, BarChart3, Clock, BookOpen, Activity, Zap, Brain } from 'lucide-react';
import MissingFieldsIndicator from './MissingFieldsIndicator';

const IntelligentTradingCalculator = () => {
  // Account Configuration
  const [accountType, setAccountType] = useState('standard');
  const [propFirm, setPropFirm] = useState('fivepercenters');
  const [accountSize, setAccountSize] = useState('10000');
  const [challengePhase, setChallengePhase] = useState('phase1');
  
  // Account Details - Enhanced inputs
  const [accountBalance, setAccountBalance] = useState('10000');
  const [currentEquity, setCurrentEquity] = useState('10000');
  const [dailyStartingBalance, setDailyStartingBalance] = useState('10000');
  const [peakBalance, setPeakBalance] = useState('10000');
  const [profitTarget, setProfitTarget] = useState('800');
  const [stopOutLevel, setStopOutLevel] = useState('9200');
  const [dailyLossLimit, setDailyLossLimit] = useState('9500');
  const [maxDrawdownLimit, setMaxDrawdownLimit] = useState('9200');
  
  // Trading Parameters
  const [riskPercentage, setRiskPercentage] = useState('1');
  const [entryPrice, setEntryPrice] = useState('');
  const [stopLoss, setStopLoss] = useState('');
  const [takeProfit, setTakeProfit] = useState('');
  const [currencyPair, setCurrencyPair] = useState('EURUSD');
  const [lotSize, setLotSize] = useState('');
  const [tradingDirection, setTradingDirection] = useState('buy');
  
  // Chart Configuration
  const [selectedSymbol, setSelectedSymbol] = useState('NASDAQ:NAS100');
  const [selectedTimeframe, setSelectedTimeframe] = useState('60');
  
  const [results, setResults] = useState({
    positionSize: 0,
    riskAmount: 0,
    potentialProfit: 0,
    potentialLoss: 0,
    riskRewardRatio: 0,
    pipValue: 0,
    stopLossPips: 0,
    takeProfitPips: 0,
    dailyDrawdown: 0,
    maxDrawdown: 0,
    remainingProfit: 0,
    remainingDailyLoss: 0,
    remainingMaxLoss: 0,
    profitTargetProgress: 0
  });

  const [intelligentSuggestions, setIntelligentSuggestions] = useState([]);
  const [scenarioAnalysis, setScenarioAnalysis] = useState({
    winScenario: { newEquity: 0, profitPercentage: 0 },
    lossScenario: { newEquity: 0, lossPercentage: 0 },
    breakEvenTrades: 0,
    riskRewardRatio: 0
  });
  const [drawdownAnalysis, setDrawdownAnalysis] = useState({
    maxDrawdown: 0,
    dailyDrawdown: 0,
    maxDrawdownWarning: false,
    dailyDrawdownWarning: false,
    suggestions: []
  });

  const propFirmRules = {
    ftmo: {
      phase1: { profitTarget: 10, dailyLoss: 5, maxLoss: 10, minDays: 4 },
      phase2: { profitTarget: 5, dailyLoss: 5, maxLoss: 10, minDays: 4 },
      funded: { profitTarget: 0, dailyLoss: 5, maxLoss: 10, minDays: 0 }
    },
    myforexfunds: {
      phase1: { profitTarget: 8, dailyLoss: 5, maxLoss: 12, minDays: 5 },
      phase2: { profitTarget: 4, dailyLoss: 5, maxLoss: 12, minDays: 5 },
      funded: { profitTarget: 0, dailyLoss: 5, maxLoss: 12, minDays: 0 }
    },
    fundedtrader: {
      phase1: { profitTarget: 10, dailyLoss: 5, maxLoss: 10, minDays: 4 },
      phase2: { profitTarget: 6, dailyLoss: 5, maxLoss: 10, minDays: 4 },
      funded: { profitTarget: 0, dailyLoss: 5, maxLoss: 10, minDays: 0 }
    },
    apex: {
      phase1: { profitTarget: 8, dailyLoss: 4, maxLoss: 8, minDays: 4 },
      phase2: { profitTarget: 5, dailyLoss: 4, maxLoss: 8, minDays: 4 },
      funded: { profitTarget: 0, dailyLoss: 4, maxLoss: 8, minDays: 0 }
    },
    topstep: {
      phase1: { profitTarget: 6, dailyLoss: 3, maxLoss: 6, minDays: 5 },
      phase2: { profitTarget: 4, dailyLoss: 3, maxLoss: 6, minDays: 5 },
      funded: { profitTarget: 0, dailyLoss: 3, maxLoss: 6, minDays: 0 }
    },
    fivepercenters: {
      phase1: { profitTarget: 8, dailyLoss: 5, maxLoss: 10, minDays: 3 },
      phase2: { profitTarget: 0, dailyLoss: 5, maxLoss: 10, minDays: 3 },
      funded: { profitTarget: 0, dailyLoss: 5, maxLoss: 10, minDays: 0 }
    }
  };

  // Account size configurations with specific targets for each prop firm
  const accountConfigs = {
    ftmo: {
      5000: { profitTarget: 500, stopout: 4500, dailyLoss: 4750 },
      10000: { profitTarget: 1000, stopout: 9000, dailyLoss: 9500 },
      25000: { profitTarget: 2500, stopout: 22500, dailyLoss: 23750 },
      50000: { profitTarget: 5000, stopout: 45000, dailyLoss: 47500 },
      100000: { profitTarget: 10000, stopout: 90000, dailyLoss: 95000 },
      200000: { profitTarget: 20000, stopout: 180000, dailyLoss: 190000 }
    },
    fivepercenters: {
      5000: { profitTarget: 400, stopout: 4600, dailyLoss: 4750, maxLoss: 4500 }, // Added maxLoss based on 10% rule
      10000: { profitTarget: 800, stopout: 9200, dailyLoss: 9500, maxLoss: 9000 }, // Added maxLoss based on 10% rule
      20000: { profitTarget: 1600, stopout: 18400, dailyLoss: 19000, maxLoss: 18000 }, // Added maxLoss based on 10% rule
      40000: { profitTarget: 3200, stopout: 36800, dailyLoss: 38000, maxLoss: 36000 }, // Added maxLoss based on 10% rule
      80000: { profitTarget: 6400, stopout: 73600, dailyLoss: 76000, maxLoss: 72000 }, // Added maxLoss based on 10% rule
      100000: { profitTarget: 8000, stopout: 92000, dailyLoss: 95000, maxLoss: 90000 } // Added maxLoss based on 10% rule
    },
    topstep: {
      5000: { profitTarget: 300, stopout: 4700, dailyLoss: 4850, maxLoss: 4700 }, // Added maxLoss based on 6% rule
      10000: { profitTarget: 600, stopout: 9400, dailyLoss: 9700, maxLoss: 9400 }, // Added maxLoss based on 6% rule
      25000: { profitTarget: 1500, stopout: 23500, dailyLoss: 24250, maxLoss: 23500 }, // Added maxLoss based on 6% rule
      50000: { profitTarget: 3000, stopout: 47000, dailyLoss: 48500, maxLoss: 47000 }, // Added maxLoss based on 6% rule
      100000: { profitTarget: 6000, stopout: 94000, dailyLoss: 97000, maxLoss: 94000 }, // Added maxLoss based on 6% rule
      150000: { profitTarget: 9000, stopout: 141000, dailyLoss: 145500, maxLoss: 141000 } // Added maxLoss based on 6% rule
    },
    myforexfunds: {
      5000: { profitTarget: 400, stopout: 4400, dailyLoss: 4750 },
      10000: { profitTarget: 800, stopout: 8800, dailyLoss: 9500 },
      25000: { profitTarget: 2000, stopout: 22000, dailyLoss: 23750 },
      50000: { profitTarget: 4000, stopout: 44000, dailyLoss: 47500 },
      100000: { profitTarget: 8000, stopout: 88000, dailyLoss: 95000 }
    },
    fundedtrader: {
      5000: { profitTarget: 500, stopout: 4500, dailyLoss: 4750 },
      10000: { profitTarget: 1000, stopout: 9000, dailyLoss: 9500 },
      25000: { profitTarget: 2500, stopout: 22500, dailyLoss: 23750 },
      50000: { profitTarget: 5000, stopout: 45000, dailyLoss: 47500 },
      100000: { profitTarget: 10000, stopout: 90000, dailyLoss: 95000 }
    },
    apex: {
      5000: { profitTarget: 400, stopout: 4600, dailyLoss: 4800 },
      10000: { profitTarget: 800, stopout: 9200, dailyLoss: 9600 },
      25000: { profitTarget: 2000, stopout: 23000, dailyLoss: 24000 },
      50000: { profitTarget: 4000, stopout: 46000, dailyLoss: 48000 },
      100000: { profitTarget: 8000, stopout: 92000, dailyLoss: 96000 }
    }
  };

  const tradingInstruments = [
 { symbol: 'AAPL', name: 'Apple Inc.', category: 'Stocks' },
    { symbol: 'SP:SPX', name: 'S&P 500', category: 'Indices' },
    { symbol: 'DJ:DJI', name: 'Dow Jones', category: 'Indices' },
    { symbol: 'FX_IDC:EURUSD', name: 'EUR/USD', category: 'Forex' },
    { symbol: 'FX_IDC:GBPUSD', name: 'GBP/USD', category: 'Forex' },
    { symbol: 'FX_IDC:USDJPY', name: 'USD/JPY', category: 'Forex' },
    { symbol: 'FX_IDC:AUDUSD', name: 'AUD/USD', category: 'Forex' },
    { symbol: 'FX_IDC:USDCAD', name: 'USD/CAD', category: 'Forex' },
    { symbol: 'COMEX:GC1!', name: 'Gold Futures', category: 'Commodities' },
    { symbol: 'COMEX:SI1!', name: 'Silver Futures', category: 'Commodities' },
    { symbol: 'CRYPTOCAP:BTC', name: 'Bitcoin', category: 'Crypto' },
    { symbol: 'CRYPTOCAP:ETH', name: 'Ethereum', category: 'Crypto' }
  ];

  const timeframes = [
    { value: '1', label: '1 Minute' },
    { value: '5', label: '5 Minutes' },
    { value: '15', label: '15 Minutes' },
    { value: '30', label: '30 Minutes' },
    { value: '60', label: '1 Hour' },
    { value: '240', label: '4 Hours' },
    { value: '1D', label: '1 Day' },
    { value: '1W', label: '1 Week' }
  ];

  const currencyPairs = [
    { symbol: 'EURUSD', name: 'EUR/USD' },
    { symbol: 'GBPUSD', name: 'GBP/USD' },
    { symbol: 'USDJPY', name: 'USD/JPY' },
    { symbol: 'AUDUSD', name: 'AUD/USD' },
    { symbol: 'USDCAD', name: 'USD/CAD' },
    { symbol: 'USDCHF', name: 'USD/CHF' },
    { symbol: 'NZDUSD', name: 'NZD/USD' },
    { symbol: 'EURJPY', name: 'EUR/JPY' },
    { symbol: 'GBPJPY', name: 'GBP/JPY' },
    { symbol: 'EURGBP', name: 'EUR/GBP' }
  ];

  // Auto-configuration effect
  useEffect(() => {
    if (accountType === 'funded' && propFirm && accountSize) {
      const config = accountConfigs[propFirm]?.[accountSize];
      if (config) {
        setProfitTarget(config.profitTarget.toString());
        setStopOutLevel(config.stopout.toString());
        setDailyLossLimit(config.dailyLoss.toString());
        setMaxDrawdownLimit(config.maxLoss.toString());
        setAccountBalance(accountSize);
        setCurrentEquity(accountSize);
        setDailyStartingBalance(accountSize);
        setPeakBalance(accountSize);
      }
    }
  }, [accountType, propFirm, accountSize]);

  // Real-time calculation effect
  useEffect(() => {
    calculateResults();
  }, [entryPrice, stopLoss, takeProfit, riskPercentage, accountBalance, currentEquity, 
      dailyStartingBalance, peakBalance, currencyPair, lotSize, tradingDirection, 
      accountType, propFirm, challengePhase]);

  const calculatePipValue = (pair, accountSize) => {
    const basePipValues = {
      'EURUSD': 10, 'GBPUSD': 10, 'AUDUSD': 10, 'NZDUSD': 10,
      'USDJPY': 9.09, 'USDCHF': 10.20, 'USDCAD': 7.69,
      'EURJPY': 9.09, 'GBPJPY': 9.09, 'EURGBP': 12.50
    };
    return basePipValues[pair] || 10;
  };

  const calculateResults = () => {
    // Always calculate what we can, even with missing fields
    const entry = entryPrice ? parseFloat(entryPrice) : 0;
    const sl = stopLoss ? parseFloat(stopLoss) : 0;
    const tp = takeProfit ? parseFloat(takeProfit) : 0;
    const risk = riskPercentage ? parseFloat(riskPercentage) : 1;
    const balance = accountBalance ? parseFloat(accountBalance) : 10000;
    const equity = currentEquity ? parseFloat(currentEquity) : balance;
    const startingBalance = parseFloat(accountSize);
    const dailyStart = dailyStartingBalance ? parseFloat(dailyStartingBalance) : balance;
    const peak = peakBalance ? parseFloat(peakBalance) : balance;

    // Calculate pip values and distances
    const pipValue = calculatePipValue(currencyPair, balance);
    const stopLossPips = (entry && sl) ? Math.abs(entry - sl) * (currencyPair.includes('JPY') ? 100 : 10000) : 0;
    const takeProfitPips = (tp && entry) ? Math.abs(tp - entry) * (currencyPair.includes('JPY') ? 100 : 10000) : 0;

    // Calculate position size
    const riskAmount = balance * (risk / 100);
    let positionSize = 0;
    
    if (lotSize && parseFloat(lotSize) > 0) {
      positionSize = parseFloat(lotSize);
    } else if (stopLossPips > 0) {
      positionSize = riskAmount / (stopLossPips * pipValue / 100);
    }

    // Calculate potential profit/loss
    const potentialLoss = riskAmount;
    const potentialProfit = (tp && positionSize > 0) ? (takeProfitPips * pipValue * positionSize / 100) : 0;
    const riskRewardRatio = potentialProfit > 0 ? potentialProfit / potentialLoss : 0;

    // Calculate drawdown and limits for funded accounts
    let dailyDrawdown = 0;
    let maxDrawdown = 0;
    let remainingProfit = 0;
    let remainingDailyLoss = 0;
    let remainingMaxLoss = 0;
    let profitTargetProgress = 0;

    if (accountType === 'funded') {
      const rules = propFirmRules[propFirm][challengePhase];
      
      // Daily drawdown calculation
      dailyDrawdown = ((dailyStart - equity) / dailyStart) * 100;
      const dailyLossLimitAmount = dailyStart * (rules.dailyLoss / 100);
      remainingDailyLoss = Math.max(0, dailyLossLimitAmount - (dailyStart - equity));
      
      // Max drawdown calculation
      maxDrawdown = ((peak - equity) / peak) * 100;
      const maxLossLimitAmount = startingBalance * (rules.maxLoss / 100);
      remainingMaxLoss = Math.max(0, maxLossLimitAmount - (startingBalance - equity));
      
      // Profit target calculation
      if (rules.profitTarget > 0) {
        const currentProfit = ((equity - startingBalance) / startingBalance) * 100;
        remainingProfit = Math.max(0, rules.profitTarget - currentProfit);
        profitTargetProgress = Math.max(0, Math.min(100, (currentProfit / rules.profitTarget) * 100));
      }
    }

    setResults({
      positionSize: Math.round(positionSize * 100) / 100,
      riskAmount: Math.round(riskAmount * 100) / 100,
      potentialProfit: Math.round(potentialProfit * 100) / 100,
      potentialLoss: Math.round(potentialLoss * 100) / 100,
      riskRewardRatio: Math.round(riskRewardRatio * 100) / 100,
      pipValue: Math.round(pipValue * 100) / 100,
      stopLossPips: Math.round(stopLossPips * 10) / 10,
      takeProfitPips: Math.round(takeProfitPips * 10) / 10,
      dailyDrawdown: Math.round(dailyDrawdown * 100) / 100,
      maxDrawdown: Math.round(maxDrawdown * 100) / 100,
      remainingProfit: Math.round(remainingProfit * 100) / 100,
      remainingDailyLoss: Math.round(remainingDailyLoss * 100) / 100,
      remainingMaxLoss: Math.round(remainingMaxLoss * 100) / 100,
      profitTargetProgress: Math.round(profitTargetProgress * 100) / 100
    });

    // Update intelligent analysis
    updateIntelligentAnalysis(riskRewardRatio, equity, peak, dailyStart, riskAmount, potentialProfit);
  };

  const updateIntelligentAnalysis = (riskRewardRatio, equity, peak, dailyStart, riskAmount, potentialProfit) => {
    // Scenario Analysis
    const scenarioData = {
      winScenario: {
        newEquity: equity + potentialProfit,
        profitPercentage: (potentialProfit / equity) * 100
      },
      lossScenario: {
        newEquity: equity - riskAmount,
        lossPercentage: (riskAmount / equity) * 100
      },
      breakEvenTrades: Math.ceil(riskAmount / potentialProfit) || 0,
      riskRewardRatio: potentialProfit > 0 ? (potentialProfit / riskAmount) : 0
    };
    setScenarioAnalysis(scenarioData);

    // Drawdown Analysis
    if (accountType === 'funded') {
      const rules = propFirmRules[propFirm][challengePhase];
      const maxDrawdown = ((peak - equity) / peak) * 100;
      const dailyDrawdown = ((dailyStart - equity) / dailyStart) * 100;
      
      const maxDrawdownWarning = maxDrawdown > (rules.maxLoss * 0.7);
      const dailyDrawdownWarning = dailyDrawdown > (rules.dailyLoss * 0.7);
      
      setDrawdownAnalysis({
        maxDrawdown,
        dailyDrawdown,
        maxDrawdownWarning,
        dailyDrawdownWarning,
        suggestions: [
          ...(maxDrawdownWarning ? ['You are approaching max drawdown limit. Consider reducing position sizes.'] : []),
          ...(dailyDrawdownWarning ? ['Daily drawdown is high. Consider stopping trading for today.'] : []),
          ...(maxDrawdown < (rules.maxLoss * 0.3) ? ['Good drawdown management. You have room for more trades.'] : [])
        ]
      });
    }

    // Intelligent Suggestions
    const suggestions = [];
    
    // Risk management suggestions
    if (riskRewardRatio < 1.5) {
      suggestions.push({
        type: 'warning',
        category: 'Risk Management',
        message: 'Risk:Reward ratio is below 1.5. Consider wider take profit or tighter stop loss.',
        action: 'Adjust your take profit target for better risk:reward ratio.'
      });
    }
    
    // Position size suggestions
    if (parseFloat(riskPercentage) > 2) {
      suggestions.push({
        type: 'caution',
        category: 'Position Sizing',
        message: 'Risk percentage is high. Professional traders typically risk 1-2% per trade.',
        action: `Reduce risk to ${Math.min(2, parseFloat(riskPercentage) * 0.5)}% for safer trading.`
      });
    }

    // Account survival analysis
    const accountSurvivalRisk = getAccountSurvivalRisk();
    if (accountSurvivalRisk.level === 'high') {
      suggestions.push({
        type: 'warning',
        category: 'Account Survival',
        message: accountSurvivalRisk.message,
        action: 'Consider reducing position sizes or stopping trading for today.'
      });
    }

    setIntelligentSuggestions(suggestions);
  };

  const getAccountSurvivalRisk = () => {
    const equity = parseFloat(currentEquity);
    const dailyStart = parseFloat(dailyStartingBalance);
    const peak = parseFloat(peakBalance);
    
    if (accountType === 'funded') {
      const rules = propFirmRules[propFirm][challengePhase];
      const dailyDrawdown = ((dailyStart - equity) / dailyStart) * 100;
      const maxDrawdown = ((peak - equity) / peak) * 100;
      
      if (dailyDrawdown > rules.dailyLoss * 0.8 || maxDrawdown > rules.maxLoss * 0.8) {
        return {
          level: 'high',
          message: 'Account is at high risk of violating prop firm rules. Immediate action required.'
        };
      } else if (dailyDrawdown > rules.dailyLoss * 0.5 || maxDrawdown > rules.maxLoss * 0.5) {
        return {
          level: 'medium',
          message: 'Account is approaching risk limits. Exercise caution with new trades.'
        };
      }
    }
    
    return {
      level: 'low',
      message: 'Account is in good standing with manageable risk levels.'
    };
  };

  useEffect(() => {
    calculateResults();
  }, [entryPrice, stopLoss, takeProfit, riskPercentage, accountBalance, currentEquity, 
      dailyStartingBalance, peakBalance, currencyPair, accountType, propFirm, challengePhase, 
      accountSize, lotSize, profitTarget, dailyLossLimit, maxDrawdownLimit]);

  const getRiskLevel = (percentage) => {
    if (percentage < 2) return { level: 'Low', color: 'bg-green-500 text-white' };
    if (percentage < 4) return { level: 'Medium', color: 'bg-yellow-500 text-white' };
    return { level: 'High', color: 'bg-red-500 text-white' };
  };

  const getAccountHealthColor = () => {
    const survivalRisk = getAccountSurvivalRisk();
    if (survivalRisk.level === 'high') return 'text-red-500';
    if (survivalRisk.level === 'medium') return 'text-yellow-500';
    return 'text-green-500';
  };

  // TradingView Chart Component
  const TradingViewChart = ({ symbol, interval }) => {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
      script.async = true;
      script.innerHTML = JSON.stringify({
        autosize: true,
        symbol: symbol,
        interval: interval,
        timezone: "Etc/UTC",
        theme: "light",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: "tradingview_chart"
      });

      const container = document.getElementById(`tradingview_chart_${symbol.replace(":", "_")}_${interval}`);
      if (container) {
        container.innerHTML = '';
        container.appendChild(script);
      }

      return () => {
        if (container) {
          container.innerHTML = '';
        }
      };
    }, [symbol, interval]);

    return (
      <div id="tradingview_chart" style={{ height: '500px', width: '100%' }}>
        <div className="flex items-center justify-center h-full bg-gray-100 rounded-lg">
          <div className="text-center">
            <Activity className="mx-auto mb-4 h-12 w-12 text-gray-400" />
            <p className="text-gray-600">Loading TradingView Chart...</p>
            <Button 
              onClick={() => window.location.reload()} 
              className="mt-4"
              variant="outline"
            >
              Reconnect
            </Button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Brain className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">MT5 Trading Calculator Pro</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Advanced risk management and position sizing calculator with live charts, 
            intelligent analysis, and comprehensive prop firm support.
          </p>
        </div>

        <Tabs defaultValue="calculator" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="calculator" className="flex items-center">
              <Calculator className="mr-2 h-4 w-4" />
              Calculator
            </TabsTrigger>
            <TabsTrigger value="live-charts" className="flex items-center">
              <BarChart3 className="mr-2 h-4 w-4" />
              Live Charts
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center">
              <BookOpen className="mr-2 h-4 w-4" />
              Education
            </TabsTrigger>
            <TabsTrigger value="prop-firm-rules" className="flex items-center">
              <Info className="mr-2 h-4 w-4" />
              Prop Firm Rules
            </TabsTrigger>
          </TabsList>

          <TabsContent value="calculator" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Panel - Account Configuration */}
              <div className="lg:col-span-2 space-y-6">
                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold flex items-center">
                      <Zap className="mr-3 h-6 w-6 text-blue-600" />
                      Smart Account Configuration
                    </CardTitle>
                    <CardDescription>
                      Configure your account and let our AI optimize your settings
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="accountType">Account Type</Label>
                        <Select value={accountType} onValueChange={setAccountType}>
                          <SelectTrigger className="h-12">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="standard">Standard Trading</SelectItem>
                            <SelectItem value="funded">Funded Account</SelectItem>
                            <SelectItem value="demo">Demo Account</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {accountType === 'funded' && (
                        <>
                          <div className="space-y-2">
                            <Label htmlFor="propFirm">Prop Firm</Label>
                            <Select value={propFirm} onValueChange={setPropFirm}>
                              <SelectTrigger className="h-12">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="ftmo">FTMO</SelectItem>
                                <SelectItem value="myforexfunds">MyForexFunds</SelectItem>
                                <SelectItem value="fundedtrader">The Funded Trader</SelectItem>
                                <SelectItem value="apex">Apex Trader Funding</SelectItem>
                                <SelectItem value="topstep">TopStep</SelectItem>
                                <SelectItem value="fivepercenters">5%ers</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="challengePhase">Challenge Phase</Label>
                            <Select value={challengePhase} onValueChange={setChallengePhase}>
                              <SelectTrigger className="h-12">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="phase1">Phase 1 (Evaluation)</SelectItem>
                                <SelectItem value="phase2">Phase 2 (Verification)</SelectItem>
                                <SelectItem value="funded">Funded</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </>
                      )}

                      <div className="space-y-2">
                        <Label htmlFor="accountSize">Account Size ($)</Label>
                        <Select value={accountSize} onValueChange={setAccountSize}>
                          <SelectTrigger className="h-12">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5000">$5,000</SelectItem>
                            <SelectItem value="10000">$10,000</SelectItem>
                            <SelectItem value="20000">$20,000</SelectItem>
                            <SelectItem value="25000">$25,000</SelectItem>
                            <SelectItem value="40000">$40,000</SelectItem>
                            <SelectItem value="50000">$50,000</SelectItem>
                            <SelectItem value="80000">$80,000</SelectItem>
                            <SelectItem value="100000">$100,000</SelectItem>
                            <SelectItem value="150000">$150,000</SelectItem>
                            <SelectItem value="200000">$200,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="profitTarget">Profit Target ($)</Label>
                        <Input
                          id="profitTarget"
                          type="number"
                          value={profitTarget}
                          onChange={(e) => setProfitTarget(e.target.value)}
                          placeholder="800"
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="stopOutLevel">Stopout Level ($)</Label>
                        <Input
                          id="stopOutLevel"
                          type="number"
                          value={stopOutLevel}
                          onChange={(e) => setStopOutLevel(e.target.value)}
                          placeholder="9200"
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dailyLossLimit">Daily Loss Limit ($)</Label>
                        <Input
                          id="dailyLossLimit"
                          type="number"
                          value={dailyLossLimit}
                          onChange={(e) => setDailyLossLimit(e.target.value)}
                          placeholder="9500"
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="maxDrawdownLimit">Max Drawdown Limit ($)</Label>
                        <Input
                          id="maxDrawdownLimit"
                          type="number"
                          value={maxDrawdownLimit}
                          onChange={(e) => setMaxDrawdownLimit(e.target.value)}
                          placeholder="9200"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="accountBalance">Account Balance ($)</Label>
                        <Input
                          id="accountBalance"
                          type="number"
                          value={accountBalance}
                          onChange={(e) => setAccountBalance(e.target.value)}
                          placeholder="10000"
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="currentEquity">Current Equity ($)</Label>
                        <Input
                          id="currentEquity"
                          type="number"
                          value={currentEquity}
                          onChange={(e) => setCurrentEquity(e.target.value)}
                          placeholder="10000"
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="dailyStartingBalance">Daily Starting Balance ($)</Label>
                        <Input
                          id="dailyStartingBalance"
                          type="number"
                          value={dailyStartingBalance}
                          onChange={(e) => setDailyStartingBalance(e.target.value)}
                          placeholder="10000"
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="peakBalance">Peak Balance ($)</Label>
                        <Input
                          id="peakBalance"
                          type="number"
                          value={peakBalance}
                          onChange={(e) => setPeakBalance(e.target.value)}
                          placeholder="10000"
                          className="h-12"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold flex items-center">
                      <Target className="mr-3 h-6 w-6 text-green-600" />
                      Trade Parameters
                    </CardTitle>
                    <CardDescription>
                      Enter your trade setup for intelligent position sizing
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="currencyPair">Currency Pair</Label>
                        <Select value={currencyPair} onValueChange={setCurrencyPair}>
                          <SelectTrigger className="h-12">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {currencyPairs.map((pair) => (
                              <SelectItem key={pair.symbol} value={pair.symbol}>
                                {pair.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="riskPercentage">Risk Percentage (%)</Label>
                        <Input
                          id="riskPercentage"
                          type="number"
                          value={riskPercentage}
                          onChange={(e) => setRiskPercentage(e.target.value)}
                          placeholder="1.0"
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="direction">Direction</Label>
                        <Select value={tradingDirection} onValueChange={setTradingDirection}>
                          <SelectTrigger className="h-12">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="buy">Buy (Long)</SelectItem>
                            <SelectItem value="sell">Sell (Short)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="entryPrice">Entry Price</Label>
                        <Input
                          id="entryPrice"
                          type="number"
                          value={entryPrice}
                          onChange={(e) => setEntryPrice(e.target.value)}
                          placeholder="1.08500"
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="stopLoss">Stop Loss</Label>
                        <Input
                          id="stopLoss"
                          type="number"
                          value={stopLoss}
                          onChange={(e) => setStopLoss(e.target.value)}
                          placeholder="1.08000"
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="takeProfit">Take Profit</Label>
                        <Input
                          id="takeProfit"
                          type="number"
                          value={takeProfit}
                          onChange={(e) => setTakeProfit(e.target.value)}
                          placeholder="1.09000"
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lotSize">Lot Size (Optional)</Label>
                        <Input
                          id="lotSize"
                          type="number"
                          value={lotSize}
                          onChange={(e) => setLotSize(e.target.value)}
                          placeholder="Auto-calculated"
                          className="h-12"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Right Panel - Results and Analysis */}
              <div className="space-y-6">
                {/* Missing Fields and Live Analysis */}
                <MissingFieldsIndicator 
                  entryPrice={entryPrice}
                  stopLoss={stopLoss}
                  takeProfit={takeProfit}
                  riskPercentage={riskPercentage}
                  accountBalance={accountBalance}
                  results={results}
                  intelligentSuggestions={intelligentSuggestions}
                />

                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold flex items-center">
                      <Calculator className="mr-2 h-5 w-5 text-blue-600" />
                      Calculation Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600 font-medium">Position Size:</span>
                      <span className="font-bold text-lg text-blue-600">{results.positionSize} lots</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-50 rounded-lg">
                      <span className="text-gray-600 font-medium">Risk Amount:</span>
                      <span className="font-bold text-lg text-red-600">${results.riskAmount}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                      <span className="text-gray-600 font-medium">Potential Profit:</span>
                      <span className="font-bold text-lg text-green-600">${results.potentialProfit}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600 font-medium">Risk:Reward Ratio:</span>
                      <span className={`font-bold text-lg ${results.riskRewardRatio < 1.5 ? 'text-red-600' : 'text-green-600'}`}>
                        {results.riskRewardRatio}:1
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600 font-medium">Stop Loss Pips:</span>
                      <span className="font-bold text-lg">{results.stopLossPips}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600 font-medium">Take Profit Pips:</span>
                      <span className="font-bold text-lg">{results.takeProfitPips}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600 font-medium">Risk Level:</span>
                      <Badge className={getRiskLevel(parseFloat(riskPercentage)).color}>
                        {getRiskLevel(parseFloat(riskPercentage)).level}
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600 font-medium">Account Health:</span>
                      <span className={`font-bold text-lg ${getAccountHealthColor()}`}>
                        {getAccountSurvivalRisk().level.toUpperCase()}
                      </span>
                    </div>
                  </CardContent>
                </Card>

                {accountType === 'funded' && (
                  <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl font-bold flex items-center">
                        <Shield className="mr-2 h-5 w-5 text-purple-600" />
                        Funded Account Status
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600 font-medium">Daily Drawdown:</span>
                          <span className={`font-bold ${drawdownAnalysis.dailyDrawdownWarning ? 'text-red-600' : 'text-green-600'}`}>
                            {drawdownAnalysis.dailyDrawdown.toFixed(2)}% / {propFirmRules[propFirm][challengePhase].dailyLoss}%
                          </span>
                        </div>
                        <Progress 
                          value={(drawdownAnalysis.dailyDrawdown / propFirmRules[propFirm][challengePhase].dailyLoss) * 100} 
                          className="h-3"
                        />
                        <p className="text-sm text-gray-500 mt-1">
                          Remaining: ${Math.max(0, parseFloat(dailyLossLimit) - (parseFloat(dailyStartingBalance) - parseFloat(currentEquity))).toFixed(2)}
                        </p>
                      </div>

                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600 font-medium">Max Drawdown:</span>
                          <span className={`font-bold ${drawdownAnalysis.maxDrawdownWarning ? 'text-red-600' : 'text-green-600'}`}>
                            {drawdownAnalysis.maxDrawdown.toFixed(2)}% / {propFirmRules[propFirm][challengePhase].maxLoss}%
                          </span>
                        </div>
                        <Progress 
                          value={(drawdownAnalysis.maxDrawdown / propFirmRules[propFirm][challengePhase].maxLoss) * 100} 
                          className="h-3"
                        />
                        <p className="text-sm text-gray-500 mt-1">
                          Remaining: ${Math.max(0, parseFloat(maxDrawdownLimit) - (parseFloat(peakBalance) - parseFloat(currentEquity))).toFixed(2)}
                        </p>
                      </div>

                      {propFirmRules[propFirm][challengePhase].profitTarget > 0 && (
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-600 font-medium">Profit Target:</span>
                            <span className="font-bold text-green-600">
                              {propFirmRules[propFirm][challengePhase].profitTarget}%
                            </span>
                          </div>
                          <Progress 
                            value={results.profitTargetProgress} 
                            className="h-3"
                          />
                          <p className="text-sm text-gray-500 mt-1">
                            Remaining: ${Math.max(0, (parseFloat(profitTarget) - (parseFloat(currentEquity) - parseFloat(accountBalance)))).toFixed(2)}
                          </p>
                        </div>
                      )}

                      <Alert>
                        <Info className="h-4 w-4" />
                        <AlertDescription>
                          {propFirmRules[propFirm][challengePhase].profitTarget}% profit target, {propFirmRules[propFirm][challengePhase].dailyLoss}% daily loss limit, {propFirmRules[propFirm][challengePhase].maxLoss}% max loss limit
                          {propFirmRules[propFirm][challengePhase].minDays > 0 && `, minimum ${propFirmRules[propFirm][challengePhase].minDays} trading days`}.
                        </AlertDescription>
                      </Alert>
                    </CardContent>
                  </Card>
                )}

                {intelligentSuggestions.length > 0 && (
                  <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl font-bold flex items-center">
                        <Brain className="mr-2 h-5 w-5 text-orange-600" />
                        AI Suggestions
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {intelligentSuggestions.map((suggestion, index) => (
                        <Alert key={index} variant={suggestion.type === 'warning' ? 'destructive' : 'default'}>
                          <AlertTriangle className="h-4 w-4" />
                          <AlertDescription>
                            <p className="font-semibold">{suggestion.category}:</p>
                            <p className="mb-1">{suggestion.message}</p>
                            <p className="text-sm text-gray-600">💡 {suggestion.action}</p>
                          </AlertDescription>
                        </Alert>
                      ))}
                    </CardContent>
                  </Card>
                )}

                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold flex items-center">
                      <BarChart3 className="mr-2 h-5 w-5 text-indigo-600" />
                      Scenario Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">Win Scenario:</span>
                        <span className="font-bold text-green-600">
                          ${scenarioAnalysis.winScenario.newEquity.toFixed(2)} (+{scenarioAnalysis.winScenario.profitPercentage.toFixed(2)}%)
                        </span>
                      </div>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">Loss Scenario:</span>
                        <span className="font-bold text-red-600">
                          ${scenarioAnalysis.lossScenario.newEquity.toFixed(2)} (-{scenarioAnalysis.lossScenario.lossPercentage.toFixed(2)}%)
                        </span>
                      </div>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">Break-even trades:</span>
                        <span className="font-bold">{scenarioAnalysis.breakEvenTrades}</span>
                      </div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600 font-medium">R:R Ratio:</span>
                        <span className="font-bold text-blue-600">{scenarioAnalysis.riskRewardRatio.toFixed(2)}:1</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="live-charts" className="space-y-6">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <BarChart3 className="mr-3 h-6 w-6 text-blue-600" />
                  Live Market Charts
                </CardTitle>
                <CardDescription>
                  Real-time charts for popular trading instruments with multiple timeframes
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="tradingInstrument">Trading Instrument</Label>
                    <Select value={selectedSymbol} onValueChange={setSelectedSymbol}>
                      <SelectTrigger className="h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {tradingInstruments.map((instrument) => (
                          <SelectItem key={instrument.symbol} value={instrument.symbol}>
                            {instrument.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeframe">Timeframe</Label>
                    <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                      <SelectTrigger className="h-12">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {timeframes.map((tf) => (
                          <SelectItem key={tf.value} value={tf.value}>
                            {tf.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden">
                  <TradingViewChart symbol={selectedSymbol} interval={selectedTimeframe} />
                </div>

                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription>
                    Charts are powered by TradingView and show real-time market data. Use these charts to analyze market conditions before placing trades with your calculated position sizes.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="education" className="space-y-6">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <BookOpen className="mr-3 h-6 w-6 text-green-600" />
                  Education Hub
                </CardTitle>
                <CardDescription>
                  Learn key trading concepts and strategies to improve your performance.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl font-bold flex items-center">
                        <Target className="mr-2 h-5 w-5 text-blue-600" />
                        Position Sizing & Risk Management
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-3">
                      <p>Understanding proper position sizing and risk management is crucial for long-term success in trading. It helps protect your capital and ensures you can withstand losing streaks.</p>
                      <h4 className="font-semibold mt-4">Key Principles:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Risk only a small percentage of your capital per trade (1-2% is common).</li>
                        <li>Always use a stop loss to define your maximum risk.</li>
                        <li>Calculate your position size based on your stop loss distance and risk percentage.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl font-bold flex items-center">
                        <TrendingUp className="mr-2 h-5 w-5 text-green-600" />
                        Risk:Reward Ratio
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-3">
                      <p>The Risk:Reward (R:R) ratio compares the potential profit of a trade to its potential loss. A higher R:R ratio means you stand to gain more than you risk.</p>
                      <h4 className="font-semibold mt-4">Why it matters:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Even with a low win rate, a good R:R can lead to profitability.</li>
                        <li>Aim for at least 1:2 or 1:3 R:R for favorable trades.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl font-bold flex items-center">
                        <Shield className="mr-2 h-5 w-5 text-purple-600" />
                        Funded Account Success
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-3">
                      <p>Funded accounts offer a great opportunity to trade with larger capital, but come with strict rules. Understanding and adhering to these rules is paramount.</p>
                      <h4 className="font-semibold mt-4">Key Areas to Monitor:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Daily Drawdown: The maximum loss allowed in a single trading day.</li>
                        <li>Maximum Drawdown: The overall maximum loss allowed from your starting or peak balance.</li>
                        <li>Profit Target: The required profit to pass a phase or maintain a funded account.</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <CardTitle className="text-xl font-bold flex items-center">
                        <Brain className="mr-2 h-5 w-5 text-orange-600" />
                        Psychology & Discipline
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-3">
                      <p>Trading psychology is often the difference between success and failure. Emotional control and discipline are essential skills for consistent profitability.</p>
                      <h4 className="font-semibold mt-4">Mental Game:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Stick to your trading plan regardless of emotions.</li>
                        <li>Accept losses as part of the business.</li>
                        <li>Never risk more than you can afford to lose.</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="prop-firm-rules" className="space-y-6">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold flex items-center">
                  <Info className="mr-3 h-6 w-6 text-blue-600" />
                  Prop Firm Rules Comparison
                </CardTitle>
                <CardDescription>
                  Compare rules from popular prop firms to choose the best fit for your trading style.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 p-3 text-left font-semibold">Prop Firm</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold">Phase</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold">Profit Target</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold">Daily Loss Limit</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold">Max Loss Limit</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold">Min Trading Days</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(propFirmRules).map(([firmKey, firmData]) => (
                        Object.entries(firmData).map(([phaseKey, phaseData]) => (
                          <tr key={`${firmKey}-${phaseKey}`} className="hover:bg-gray-50">
                            <td className="border border-gray-300 p-3 font-medium capitalize">{firmKey.replace('fivepercenters', '5%ers')}</td>
                            <td className="border border-gray-300 p-3 capitalize">{phaseKey.replace('phase1', 'Phase 1').replace('phase2', 'Phase 2').replace('funded', 'Funded')}</td>
                            <td className="border border-gray-300 p-3">{phaseData.profitTarget}%</td>
                            <td className="border border-gray-300 p-3">{phaseData.dailyLoss}%</td>
                            <td className="border border-gray-300 p-3">{phaseData.maxLoss}%</td>
                            <td className="border border-gray-300 p-3">{phaseData.minDays > 0 ? phaseData.minDays : 'N/A'}</td>
                          </tr>
                        ))
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default IntelligentTradingCalculator;

