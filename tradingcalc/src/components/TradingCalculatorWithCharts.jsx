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
import { Calculator, TrendingUp, Shield, Target, AlertTriangle, Info, BarChart3, Clock } from 'lucide-react';

const TradingCalculatorWithCharts = () => {
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
  const [stopOutLevel, setStopOutLevel] = useState('10800');
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
  const [timeframe, setTimeframe] = useState('1h');
  
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
      phase1: { profitTarget: 8, dailyLoss: 5, maxLoss: 8, minDays: 0 },
      phase2: { profitTarget: 0, dailyLoss: 5, maxLoss: 8, minDays: 0 },
      funded: { profitTarget: 0, dailyLoss: 5, maxLoss: 8, minDays: 0 }
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
      5000: { profitTarget: 400, stopout: 4600, dailyLoss: 4750 },
      10000: { profitTarget: 800, stopout: 9200, dailyLoss: 9500 },
      20000: { profitTarget: 1600, stopout: 18400, dailyLoss: 19000 },
      40000: { profitTarget: 3200, stopout: 36800, dailyLoss: 38000 },
      80000: { profitTarget: 6400, stopout: 73600, dailyLoss: 76000 },
      100000: { profitTarget: 8000, stopout: 92000, dailyLoss: 95000 }
    },
    topstep: {
      5000: { profitTarget: 300, stopout: 4700, dailyLoss: 4850 },
      10000: { profitTarget: 600, stopout: 9400, dailyLoss: 9700 },
      25000: { profitTarget: 1500, stopout: 23500, dailyLoss: 24250 },
      50000: { profitTarget: 3000, stopout: 47000, dailyLoss: 48500 },
      100000: { profitTarget: 6000, stopout: 94000, dailyLoss: 97000 },
      150000: { profitTarget: 9000, stopout: 141000, dailyLoss: 145500 }
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
    { symbol: 'NASDAQ:NAS100', name: 'NASDAQ 100', category: 'Indices' },
    { symbol: 'SP:SPX', name: 'S&P 500', category: 'Indices' },
    { symbol: 'DJ:DJI', name: 'Dow Jones', category: 'Indices' },
    { symbol: 'FX:EURUSD', name: 'EUR/USD', category: 'Forex' },
    { symbol: 'FX:GBPUSD', name: 'GBP/USD', category: 'Forex' },
    { symbol: 'FX:USDJPY', name: 'USD/JPY', category: 'Forex' },
    { symbol: 'FX:AUDUSD', name: 'AUD/USD', category: 'Forex' },
    { symbol: 'FX:USDCAD', name: 'USD/CAD', category: 'Forex' },
    { symbol: 'TVC:GOLD', name: 'Gold', category: 'Commodities' },
    { symbol: 'TVC:SILVER', name: 'Silver', category: 'Commodities' },
    { symbol: 'BITSTAMP:BTCUSD', name: 'Bitcoin', category: 'Crypto' }
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

  const calculatePipValue = (pair, accountSize) => {
    const basePipValues = {
      'EURUSD': 10, 'GBPUSD': 10, 'AUDUSD': 10, 'NZDUSD': 10,
      'USDJPY': 9.09, 'USDCHF': 10.20, 'USDCAD': 7.69,
      'EURJPY': 9.09, 'GBPJPY': 9.09, 'EURGBP': 12.50
    };
    return basePipValues[pair] || 10;
  };

  const calculateResults = () => {
    if (!entryPrice || !stopLoss || !riskPercentage || !accountBalance) return;

    const entry = parseFloat(entryPrice);
    const sl = parseFloat(stopLoss);
    const tp = takeProfit ? parseFloat(takeProfit) : 0;
    const risk = parseFloat(riskPercentage);
    const balance = parseFloat(accountBalance);
    const equity = parseFloat(currentEquity);
    const startingBalance = parseFloat(accountSize);
    const dailyStart = parseFloat(dailyStartingBalance);
    const peak = parseFloat(peakBalance);

    // Calculate pip values and distances
    const pipValue = calculatePipValue(currencyPair, balance);
    const stopLossPips = Math.abs(entry - sl) * (currencyPair.includes('JPY') ? 100 : 10000);
    const takeProfitPips = tp ? Math.abs(tp - entry) * (currencyPair.includes('JPY') ? 100 : 10000) : 0;

    // Calculate position size
    const riskAmount = balance * (risk / 100);
    let positionSize;
    
    if (lotSize) {
      positionSize = parseFloat(lotSize);
    } else {
      positionSize = riskAmount / (stopLossPips * pipValue / 100);
    }

    // Calculate potential profit/loss
    const potentialLoss = riskAmount;
    const potentialProfit = tp ? (takeProfitPips * pipValue * positionSize / 100) : 0;
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
  };

  useEffect(() => {
    calculateResults();
  }, [entryPrice, stopLoss, takeProfit, riskPercentage, accountBalance, currentEquity, 
      dailyStartingBalance, peakBalance, currencyPair, accountType, propFirm, challengePhase, 
      accountSize, lotSize, profitTarget, dailyLossLimit, maxDrawdownLimit]);

  const getRiskLevel = (percentage) => {
    if (percentage < 2) return { level: 'Low', color: 'bg-green-500' };
    if (percentage < 4) return { level: 'Medium', color: 'bg-yellow-500' };
    return { level: 'High', color: 'bg-red-500' };
  };

  // Intelligent analysis functions
  const getPositionSizeRecommendation = (accountBalance, riskPercentage, stopLossPips) => {
    const balance = parseFloat(accountBalance);
    const risk = parseFloat(riskPercentage);
    
    if (risk > 2) {
      return {
        type: 'warning',
        message: `Risk of ${risk}% is high. Consider reducing to 1-2% for better risk management.`,
        suggestedRisk: Math.min(2, risk * 0.5)
      };
    }
    
    if (stopLossPips > 100) {
      return {
        type: 'caution',
        message: `Stop loss of ${stopLossPips} pips is quite wide. Consider tighter stops for better R:R.`,
        suggestedStopLoss: Math.round(stopLossPips * 0.7)
      };
    }
    
    return {
      type: 'good',
      message: 'Position sizing looks appropriate for your risk tolerance.',
      suggestedRisk: risk
    };
  };

  const getDrawdownAnalysis = (currentEquity, peakBalance, dailyStart, propFirm, challengePhase) => {
    const equity = parseFloat(currentEquity);
    const peak = parseFloat(peakBalance);
    const dailyStartBalance = parseFloat(dailyStart);
    
    const maxDrawdown = ((peak - equity) / peak) * 100;
    const dailyDrawdown = ((dailyStartBalance - equity) / dailyStartBalance) * 100;
    
    const rules = propFirmRules[propFirm] ? propFirmRules[propFirm][challengePhase] : null;
    
    if (!rules) return null;
    
    const maxDrawdownWarning = maxDrawdown > (rules.maxLoss * 0.7);
    const dailyDrawdownWarning = dailyDrawdown > (rules.dailyLoss * 0.7);
    
    return {
      maxDrawdown,
      dailyDrawdown,
      maxDrawdownWarning,
      dailyDrawdownWarning,
      suggestions: [
        ...(maxDrawdownWarning ? ['You are approaching max drawdown limit. Consider reducing position sizes.'] : []),
        ...(dailyDrawdownWarning ? ['Daily drawdown is high. Consider stopping trading for today.'] : []),
        ...(maxDrawdown < (rules.maxLoss * 0.3) ? ['Good drawdown management. You have room for more trades.'] : [])
      ]
    };
  };

  const getScenarioAnalysis = (positionSize, riskAmount, potentialProfit, currentEquity) => {
    const equity = parseFloat(currentEquity);
    const risk = parseFloat(riskAmount);
    const profit = parseFloat(potentialProfit);
    
    return {
      winScenario: {
        newEquity: equity + profit,
        profitPercentage: (profit / equity) * 100
      },
      lossScenario: {
        newEquity: equity - risk,
        lossPercentage: (risk / equity) * 100
      },
      breakEvenTrades: Math.ceil(risk / profit) || 0,
      riskRewardRatio: profit > 0 ? (profit / risk) : 0
    };
  };

  const getIntelligentSuggestions = (results, accountType, propFirm, challengePhase, accountBalance, currentEquity) => {
    const suggestions = [];
    
    // Risk management suggestions
    if (results.riskRewardRatio < 1.5) {
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
    
    // Prop firm specific suggestions
    if (accountType === 'funded') {
      const drawdownAnalysis = getDrawdownAnalysis(currentEquity, peakBalance, dailyStartingBalance, propFirm, challengePhase);
      if (drawdownAnalysis) {
        drawdownAnalysis.suggestions.forEach(suggestion => {
          suggestions.push({
            type: 'info',
            category: 'Prop Firm Rules',
            message: suggestion,
            action: 'Monitor your drawdown levels closely.'
          });
        });
      }
    }
    
    // Market condition suggestions
    if (results.stopLossPips > 0 && results.takeProfitPips > 0) {
      const ratio = results.takeProfitPips / results.stopLossPips;
      if (ratio < 1.5) {
        suggestions.push({
          type: 'tip',
          category: 'Trade Setup',
          message: 'Consider targeting at least 1.5x your stop loss distance for take profit.',
          action: `Try setting take profit at ${Math.round(results.stopLossPips * 1.5)} pips.`
        });
      }
    }
    
    return suggestions;
  };

  // Auto-configure account settings based on prop firm and account size
  useEffect(() => {
    if (accountType === 'funded' && accountConfigs[propFirm] && accountConfigs[propFirm][accountSize]) {
      const config = accountConfigs[propFirm][accountSize];
      setProfitTarget(config.profitTarget.toString());
      setStopOutLevel(config.stopout.toString());
      setDailyLossLimit(config.dailyLoss.toString());
      setAccountBalance(accountSize);
      setCurrentEquity(accountSize);
      setDailyStartingBalance(accountSize);
      setPeakBalance(accountSize);
      
      // Set max drawdown limit based on prop firm rules
      const rules = propFirmRules[propFirm][challengePhase];
      const maxDrawdown = parseInt(accountSize) * (1 - rules.maxLoss / 100);
      setMaxDrawdownLimit(maxDrawdown.toString());
    }
  }, [accountType, propFirm, accountSize, challengePhase]);

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
        allow_symbol_change: true,
        calendar: false,
        support_host: "https://www.tradingview.com"
      });

      const container = document.getElementById('tradingview-chart');
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
      <div className="h-96 w-full">
        <div id="tradingview-chart" className="h-full w-full"></div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
          <Calculator className="h-10 w-10 text-blue-600" />
          MT5 Trading Calculator Pro
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Advanced risk management and position sizing calculator with live charts, 
          detailed account tracking, and comprehensive prop firm support.
        </p>
      </div>

      <Tabs defaultValue="calculator" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="calculator">Calculator</TabsTrigger>
          <TabsTrigger value="charts">Live Charts</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="rules">Prop Firm Rules</TabsTrigger>
        </TabsList>

        <TabsContent value="calculator" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Input Panel */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Account Configuration
                  </CardTitle>
                  <CardDescription>
                    Configure your account type and trading parameters
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="accountType">Account Type</Label>
                      <Select value={accountType} onValueChange={setAccountType}>
                        <SelectTrigger>
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
                            <SelectTrigger>
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
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="phase1">Phase 1 (Evaluation)</SelectItem>
                              <SelectItem value="phase2">Phase 2 (Verification)</SelectItem>
                              <SelectItem value="funded">Funded Account</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="accountSize">Account Size ($)</Label>
                      <Select value={accountSize} onValueChange={setAccountSize}>
                        <SelectTrigger>
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
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="stopOutLevel">Stopout Level ($)</Label>
                      <Input
                        id="stopOutLevel"
                        type="number"
                        value={stopOutLevel}
                        onChange={(e) => setStopOutLevel(e.target.value)}
                        placeholder="10800"
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
                        placeholder="100000"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="currentEquity">Current Equity ($)</Label>
                      <Input
                        id="currentEquity"
                        type="number"
                        value={currentEquity}
                        onChange={(e) => setCurrentEquity(e.target.value)}
                        placeholder="100000"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dailyStartingBalance">Daily Starting Balance ($)</Label>
                      <Input
                        id="dailyStartingBalance"
                        type="number"
                        value={dailyStartingBalance}
                        onChange={(e) => setDailyStartingBalance(e.target.value)}
                        placeholder="100000"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="peakBalance">Peak Balance ($)</Label>
                      <Input
                        id="peakBalance"
                        type="number"
                        value={peakBalance}
                        onChange={(e) => setPeakBalance(e.target.value)}
                        placeholder="100000"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Trade Parameters
                  </CardTitle>
                  <CardDescription>
                    Enter your trade setup details for position sizing
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="currencyPair">Currency Pair</Label>
                      <Select value={currencyPair} onValueChange={setCurrencyPair}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="EURUSD">EUR/USD</SelectItem>
                          <SelectItem value="GBPUSD">GBP/USD</SelectItem>
                          <SelectItem value="USDJPY">USD/JPY</SelectItem>
                          <SelectItem value="USDCHF">USD/CHF</SelectItem>
                          <SelectItem value="AUDUSD">AUD/USD</SelectItem>
                          <SelectItem value="USDCAD">USD/CAD</SelectItem>
                          <SelectItem value="NZDUSD">NZD/USD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="riskPercentage">Risk Percentage (%)</Label>
                      <Input
                        id="riskPercentage"
                        type="number"
                        step="0.1"
                        value={riskPercentage}
                        onChange={(e) => setRiskPercentage(e.target.value)}
                        placeholder="1.0"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="tradingDirection">Direction</Label>
                      <Select value={tradingDirection} onValueChange={setTradingDirection}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="buy">Buy (Long)</SelectItem>
                          <SelectItem value="sell">Sell (Short)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="entryPrice">Entry Price</Label>
                      <Input
                        id="entryPrice"
                        type="number"
                        step="0.00001"
                        value={entryPrice}
                        onChange={(e) => setEntryPrice(e.target.value)}
                        placeholder="1.08500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="stopLoss">Stop Loss</Label>
                      <Input
                        id="stopLoss"
                        type="number"
                        step="0.00001"
                        value={stopLoss}
                        onChange={(e) => setStopLoss(e.target.value)}
                        placeholder="1.08000"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="takeProfit">Take Profit</Label>
                      <Input
                        id="takeProfit"
                        type="number"
                        step="0.00001"
                        value={takeProfit}
                        onChange={(e) => setTakeProfit(e.target.value)}
                        placeholder="1.09000"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lotSize">Lot Size (Optional)</Label>
                      <Input
                        id="lotSize"
                        type="number"
                        step="0.01"
                        value={lotSize}
                        onChange={(e) => setLotSize(e.target.value)}
                        placeholder="Auto-calculated"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results Panel */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Calculation Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Position Size:</span>
                      <Badge variant="outline" className="text-lg font-bold">
                        {results.positionSize} lots
                      </Badge>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Risk Amount:</span>
                      <span className="text-lg font-bold text-red-600">
                        ${results.riskAmount}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Potential Profit:</span>
                      <span className="text-lg font-bold text-green-600">
                        ${results.potentialProfit}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Risk:Reward Ratio:</span>
                      <Badge variant={results.riskRewardRatio >= 2 ? "default" : "destructive"}>
                        1:{results.riskRewardRatio}
                      </Badge>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Stop Loss Pips:</span>
                      <span className="font-bold">{results.stopLossPips}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Take Profit Pips:</span>
                      <span className="font-bold">{results.takeProfitPips}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Pip Value:</span>
                      <span className="font-bold">${results.pipValue}</span>
                    </div>
                  </div>

                  {parseFloat(riskPercentage) > 0 && (
                    <div className="pt-4 border-t">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium">Risk Level:</span>
                        <Badge className={getRiskLevel(parseFloat(riskPercentage)).color}>
                          {getRiskLevel(parseFloat(riskPercentage)).level}
                        </Badge>
                      </div>
                      <Progress 
                        value={Math.min(parseFloat(riskPercentage) * 20, 100)} 
                        className="h-2"
                      />
                    </div>
                  )}
                </CardContent>
              </Card>

              {accountType === 'funded' && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5" />
                      Funded Account Status
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {(() => {
                      const rules = propFirmRules[propFirm][challengePhase];
                      
                      return (
                        <>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">Daily Drawdown:</span>
                              <span className="font-bold text-red-600">
                                {results.dailyDrawdown}% / {rules.dailyLoss}%
                              </span>
                            </div>
                            <Progress 
                              value={(results.dailyDrawdown / rules.dailyLoss) * 100} 
                              className="h-2"
                            />
                            <div className="text-xs text-gray-600">
                              Remaining: ${results.remainingDailyLoss}
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">Max Drawdown:</span>
                              <span className="font-bold text-red-600">
                                {results.maxDrawdown}% / {rules.maxLoss}%
                              </span>
                            </div>
                            <Progress 
                              value={(results.maxDrawdown / rules.maxLoss) * 100} 
                              className="h-2"
                            />
                            <div className="text-xs text-gray-600">
                              Remaining: ${results.remainingMaxLoss}
                            </div>
                          </div>

                          {rules.profitTarget > 0 && (
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm font-medium">Profit Target:</span>
                                <span className="font-bold text-green-600">
                                  {rules.profitTarget}%
                                </span>
                              </div>
                              <Progress 
                                value={results.profitTargetProgress} 
                                className="h-2"
                              />
                              <div className="text-xs text-gray-600">
                                Remaining: {results.remainingProfit}%
                              </div>
                            </div>
                          )}

                          <Alert>
                            <Info className="h-4 w-4" />
                            <AlertDescription>
                              <strong>{propFirm.toUpperCase()} {challengePhase.toUpperCase()}:</strong> 
                              {rules.profitTarget > 0 && ` ${rules.profitTarget}% profit target,`}
                              {` ${rules.dailyLoss}% daily loss limit, ${rules.maxLoss}% max loss limit`}
                              {rules.minDays > 0 && `, minimum ${rules.minDays} trading days`}
                            </AlertDescription>
                          </Alert>
                        </>
                      );
                    })()}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="charts" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Live Market Charts
              </CardTitle>
              <CardDescription>
                Real-time charts for popular trading instruments with multiple timeframes
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="selectedSymbol">Trading Instrument</Label>
                  <Select value={selectedSymbol} onValueChange={setSelectedSymbol}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {tradingInstruments.map((instrument) => (
                        <SelectItem key={instrument.symbol} value={instrument.symbol}>
                          {instrument.name} ({instrument.category})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeframe">Timeframe</Label>
                  <Select value={timeframe} onValueChange={setTimeframe}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {timeframes.map((tf) => (
                        <SelectItem key={tf.value} value={tf.value}>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            {tf.label}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <TradingViewChart symbol={selectedSymbol} interval={timeframe} />
              </div>

              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  Charts are powered by TradingView and show real-time market data. 
                  Use these charts to analyze market conditions before placing trades with your calculated position sizes.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="education" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Position Sizing Basics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">
                  Position sizing is the cornerstone of risk management. It determines how much of your account 
                  you're willing to risk on a single trade.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Key Formula:</h4>
                  <code className="block p-2 bg-gray-100 rounded text-sm">
                    Position Size = Risk Amount ÷ (Stop Loss Distance × Pip Value)
                  </code>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Best Practices:</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Never risk more than 1-2% per trade</li>
                    <li>• Always use stop losses</li>
                    <li>• Consider correlation between trades</li>
                    <li>• Adjust position size based on market volatility</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Risk-Reward Ratios</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">
                  Risk-reward ratio compares potential profit to potential loss. A 1:2 ratio means 
                  you risk $1 to potentially make $2.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Minimum Ratios by Win Rate:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>30% Win Rate:</span>
                      <span className="font-mono">1:3 minimum</span>
                    </div>
                    <div className="flex justify-between">
                      <span>40% Win Rate:</span>
                      <span className="font-mono">1:2 minimum</span>
                    </div>
                    <div className="flex justify-between">
                      <span>50% Win Rate:</span>
                      <span className="font-mono">1:1.5 minimum</span>
                    </div>
                    <div className="flex justify-between">
                      <span>60% Win Rate:</span>
                      <span className="font-mono">1:1 minimum</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="rules" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Prop Firm Rules Comparison</CardTitle>
              <CardDescription>
                Compare rules and requirements across major prop trading firms
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="border border-gray-300 p-3 text-left">Prop Firm</th>
                      <th className="border border-gray-300 p-3 text-left">Phase</th>
                      <th className="border border-gray-300 p-3 text-left">Profit Target</th>
                      <th className="border border-gray-300 p-3 text-left">Daily Loss</th>
                      <th className="border border-gray-300 p-3 text-left">Max Loss</th>
                      <th className="border border-gray-300 p-3 text-left">Min Days</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(propFirmRules).map(([firm, phases]) =>
                      Object.entries(phases).map(([phase, rules]) => (
                        <tr key={`${firm}-${phase}`} className="hover:bg-gray-50">
                          <td className="border border-gray-300 p-3 font-medium">
                            {firm.toUpperCase()}
                          </td>
                          <td className="border border-gray-300 p-3">
                            {phase === 'phase1' ? 'Phase 1' : 
                             phase === 'phase2' ? 'Phase 2' : 'Funded'}
                          </td>
                          <td className="border border-gray-300 p-3">
                            {rules.profitTarget > 0 ? `${rules.profitTarget}%` : 'None'}
                          </td>
                          <td className="border border-gray-300 p-3">{rules.dailyLoss}%</td>
                          <td className="border border-gray-300 p-3">{rules.maxLoss}%</td>
                          <td className="border border-gray-300 p-3">
                            {rules.minDays > 0 ? `${rules.minDays} days` : 'None'}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TradingCalculatorWithCharts;

