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
import { Calculator, TrendingUp, Shield, Target, AlertTriangle, Info } from 'lucide-react';

const TradingCalculator = () => {
  const [accountType, setAccountType] = useState('standard');
  const [propFirm, setPropFirm] = useState('ftmo');
  const [accountSize, setAccountSize] = useState('100000');
  const [challengePhase, setChallengePhase] = useState('phase1');
  const [riskPercentage, setRiskPercentage] = useState('1');
  const [entryPrice, setEntryPrice] = useState('');
  const [stopLoss, setStopLoss] = useState('');
  const [takeProfit, setTakeProfit] = useState('');
  const [currencyPair, setCurrencyPair] = useState('EURUSD');
  const [accountBalance, setAccountBalance] = useState('100000');
  const [currentEquity, setCurrentEquity] = useState('100000');
  
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
    profitTarget: 0,
    remainingProfit: 0
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
    }
  };

  const currencyPairs = [
    'EURUSD', 'GBPUSD', 'USDJPY', 'USDCHF', 'AUDUSD', 'USDCAD', 'NZDUSD',
    'EURJPY', 'GBPJPY', 'EURGBP', 'AUDCAD', 'GBPCAD', 'EURAUD', 'AUDNZD'
  ];

  const calculatePipValue = (pair, accountSize) => {
    // Simplified pip value calculation (in reality, this would use live exchange rates)
    const basePipValues = {
      'EURUSD': 10, 'GBPUSD': 10, 'AUDUSD': 10, 'NZDUSD': 10,
      'USDJPY': 9.09, 'USDCHF': 10.20, 'USDCAD': 7.69,
      'EURJPY': 9.09, 'GBPJPY': 9.09, 'EURGBP': 12.50,
      'AUDCAD': 7.69, 'GBPCAD': 7.69, 'EURAUD': 6.67, 'AUDNZD': 6.25
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

    // Calculate pip values and distances
    const pipValue = calculatePipValue(currencyPair, balance);
    const stopLossPips = Math.abs(entry - sl) * (currencyPair.includes('JPY') ? 100 : 10000);
    const takeProfitPips = tp ? Math.abs(tp - entry) * (currencyPair.includes('JPY') ? 100 : 10000) : 0;

    // Calculate position size
    const riskAmount = balance * (risk / 100);
    const positionSize = riskAmount / (stopLossPips * pipValue / 100);

    // Calculate potential profit/loss
    const potentialLoss = riskAmount;
    const potentialProfit = tp ? (takeProfitPips * pipValue * positionSize / 100) : 0;
    const riskRewardRatio = potentialProfit > 0 ? potentialProfit / potentialLoss : 0;

    // Calculate drawdown for funded accounts
    let dailyDrawdown = 0;
    let maxDrawdown = 0;
    let profitTarget = 0;
    let remainingProfit = 0;

    if (accountType === 'funded') {
      const rules = propFirmRules[propFirm][challengePhase];
      const startingBalance = parseFloat(accountSize);
      
      dailyDrawdown = ((startingBalance - equity) / startingBalance) * 100;
      maxDrawdown = dailyDrawdown; // Simplified - in reality, this would track peak-to-trough
      profitTarget = rules.profitTarget;
      const currentProfit = ((equity - startingBalance) / startingBalance) * 100;
      remainingProfit = Math.max(0, profitTarget - currentProfit);
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
      profitTarget,
      remainingProfit: Math.round(remainingProfit * 100) / 100
    });
  };

  useEffect(() => {
    calculateResults();
  }, [entryPrice, stopLoss, takeProfit, riskPercentage, accountBalance, currentEquity, currencyPair, accountType, propFirm, challengePhase, accountSize]);

  const getRiskLevel = (percentage) => {
    if (percentage < 2) return { level: 'Low', color: 'bg-green-500' };
    if (percentage < 4) return { level: 'Medium', color: 'bg-yellow-500' };
    return { level: 'High', color: 'bg-red-500' };
  };

  const getDrawdownStatus = (current, limit) => {
    const percentage = (current / limit) * 100;
    if (percentage < 50) return { status: 'Safe', color: 'text-green-600' };
    if (percentage < 80) return { status: 'Caution', color: 'text-yellow-600' };
    return { status: 'Danger', color: 'text-red-600' };
  };

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 flex items-center justify-center gap-3">
          <Calculator className="h-10 w-10 text-blue-600" />
          MT5 Trading Calculator
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Professional risk management and position sizing calculator for MetaTrader 5 traders, 
          with specialized support for funded accounts and prop firm challenges.
        </p>
      </div>

      <Tabs defaultValue="calculator" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="calculator">Calculator</TabsTrigger>
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
                          <SelectItem value="10000">$10,000</SelectItem>
                          <SelectItem value="25000">$25,000</SelectItem>
                          <SelectItem value="50000">$50,000</SelectItem>
                          <SelectItem value="100000">$100,000</SelectItem>
                          <SelectItem value="200000">$200,000</SelectItem>
                        </SelectContent>
                      </Select>
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="currencyPair">Currency Pair</Label>
                      <Select value={currencyPair} onValueChange={setCurrencyPair}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {currencyPairs.map(pair => (
                            <SelectItem key={pair} value={pair}>{pair}</SelectItem>
                          ))}
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
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                      <Label htmlFor="takeProfit">Take Profit (Optional)</Label>
                      <Input
                        id="takeProfit"
                        type="number"
                        step="0.00001"
                        value={takeProfit}
                        onChange={(e) => setTakeProfit(e.target.value)}
                        placeholder="1.09000"
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
                      const dailyStatus = getDrawdownStatus(results.dailyDrawdown, rules.dailyLoss);
                      const maxStatus = getDrawdownStatus(results.maxDrawdown, rules.maxLoss);
                      
                      return (
                        <>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">Daily Drawdown:</span>
                              <span className={`font-bold ${dailyStatus.color}`}>
                                {results.dailyDrawdown}% / {rules.dailyLoss}%
                              </span>
                            </div>
                            <Progress 
                              value={(results.dailyDrawdown / rules.dailyLoss) * 100} 
                              className="h-2"
                            />
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">Max Drawdown:</span>
                              <span className={`font-bold ${maxStatus.color}`}>
                                {results.maxDrawdown}% / {rules.maxLoss}%
                              </span>
                            </div>
                            <Progress 
                              value={(results.maxDrawdown / rules.maxLoss) * 100} 
                              className="h-2"
                            />
                          </div>

                          {rules.profitTarget > 0 && (
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <span className="text-sm font-medium">Profit Target:</span>
                                <span className="font-bold text-green-600">
                                  {rules.profitTarget}%
                                </span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm font-medium">Remaining:</span>
                                <span className="font-bold">
                                  {results.remainingProfit}%
                                </span>
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
                    <li>• Use consistent risk percentages</li>
                    <li>• Always set stop losses before entering</li>
                    <li>• Consider correlation between trades</li>
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
                  The risk-reward ratio compares your potential profit to your potential loss. 
                  A good ratio helps ensure long-term profitability.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Recommended Ratios:</h4>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Conservative:</span>
                      <Badge>1:2 or higher</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Moderate:</span>
                      <Badge>1:1.5 to 1:2</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Aggressive:</span>
                      <Badge variant="destructive">1:1 to 1:1.5</Badge>
                    </div>
                  </div>
                </div>
                <Alert>
                  <Info className="h-4 w-4" />
                  <AlertDescription className="text-sm">
                    With a 1:2 risk-reward ratio, you only need a 33% win rate to be profitable!
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Funded Account Tips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">
                  Trading funded accounts requires strict adherence to rules and conservative risk management.
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold">Success Strategies:</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Risk only 0.5-1% per trade maximum</li>
                    <li>• Focus on high-probability setups</li>
                    <li>• Maintain detailed trading records</li>
                    <li>• Never revenge trade after losses</li>
                    <li>• Take partial profits to secure gains</li>
                  </ul>
                </div>
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription className="text-sm">
                    Most prop firms have consistency rules - avoid making more than 30-50% of your 
                    total profit in a single day.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Common Mistakes</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">
                  Avoid these common pitfalls that lead to account blowouts and failed challenges.
                </p>
                <div className="space-y-3">
                  <div className="p-3 bg-red-50 rounded border-l-4 border-red-400">
                    <h5 className="font-semibold text-red-800">Overleveraging</h5>
                    <p className="text-sm text-red-700">
                      Using position sizes that are too large for your account size and risk tolerance.
                    </p>
                  </div>
                  <div className="p-3 bg-yellow-50 rounded border-l-4 border-yellow-400">
                    <h5 className="font-semibold text-yellow-800">Ignoring Drawdown Rules</h5>
                    <p className="text-sm text-yellow-700">
                      Not monitoring daily and maximum drawdown limits in funded accounts.
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-400">
                    <h5 className="font-semibold text-blue-800">Inconsistent Risk</h5>
                    <p className="text-sm text-blue-700">
                      Varying risk percentages based on emotions rather than systematic approach.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="rules" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {Object.entries(propFirmRules).map(([firm, phases]) => (
              <Card key={firm}>
                <CardHeader>
                  <CardTitle className="capitalize">{firm.replace(/([A-Z])/g, ' $1').trim()}</CardTitle>
                  <CardDescription>Challenge and funded account requirements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(phases).map(([phase, rules]) => (
                      <div key={phase} className="border rounded p-3">
                        <h4 className="font-semibold mb-2 capitalize">
                          {phase.replace(/([A-Z])/g, ' $1').trim()}
                        </h4>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          {rules.profitTarget > 0 && (
                            <div className="flex justify-between">
                              <span>Profit Target:</span>
                              <Badge variant="outline">{rules.profitTarget}%</Badge>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span>Daily Loss Limit:</span>
                            <Badge variant="destructive">{rules.dailyLoss}%</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Max Loss Limit:</span>
                            <Badge variant="destructive">{rules.maxLoss}%</Badge>
                          </div>
                          {rules.minDays > 0 && (
                            <div className="flex justify-between">
                              <span>Min Trading Days:</span>
                              <Badge variant="outline">{rules.minDays}</Badge>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>General Prop Firm Guidelines</CardTitle>
              <CardDescription>Common rules across most proprietary trading firms</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold">Trading Rules</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Trade during market hours only</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Use proper risk management</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span>Maintain minimum trading activity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>No news trading (usually 2 min before/after)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>No weekend gap trading</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">✗</span>
                      <span>No hedging or martingale strategies</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Consistency Rules</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>No single day should exceed 30-50% of total profit</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Maintain steady profit progression</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Avoid large winning streaks followed by losses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600">•</span>
                      <span>Document trading strategy and stick to it</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TradingCalculator;

