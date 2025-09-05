import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Textarea } from '@/components/ui/textarea';
import { 
  Brain, 
  Zap, 
  Key, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle, 
  Loader2,
  Eye,
  EyeOff,
  Sparkles,
  Target,
  Shield
} from 'lucide-react';

const AdvancedAIAnalysis = ({ 
  currencyPair, 
  priceData, 
  marketAnalysisData, 
  userInputs, 
  propFirmRules, 
  results,
  onApplyAnalysis 
}) => {
  const [apiKey, setApiKey] = useState('');
  const [showApiKey, setShowApiKey] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState(null);
  const [error, setError] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // Load API key from localStorage
  useEffect(() => {
    const savedApiKey = localStorage.getItem('chatgpt_api_key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
  }, []);

  // Save API key to localStorage
  const saveApiKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem('chatgpt_api_key', apiKey.trim());
    }
  };

  // Prepare comprehensive data for ChatGPT analysis
  const prepareAnalysisData = () => {
    const timeframeData = marketAnalysisData?.timeframe_data || {};
    
    // Collect all available market data
    const marketData = {
      symbol: currencyPair,
      currentPrice: priceData?.price || 0,
      priceChange: priceData?.change || 0,
      priceChangePercent: priceData?.change_pct || 0,
      timeframes: {}
    };

    // Add multi-timeframe analysis
    Object.keys(timeframeData).forEach(tf => {
      const data = timeframeData[tf];
      marketData.timeframes[tf] = {
        currentPrice: data.current_price,
        startPrice: data.start_price,
        change: data.change,
        changePercent: data.change_pct,
        high: data.high,
        low: data.low,
        volume: data.volume,
        rsi: data.rsi,
        sma20: data.sma_20,
        volatility: data.volatility,
        trend: data.trend,
        strength: data.strength
      };
    });

    // User trading setup
    const tradingSetup = {
      accountType: userInputs.accountType,
      propFirm: userInputs.propFirm,
      challengePhase: userInputs.challengePhase,
      accountSize: parseFloat(userInputs.accountSize) || 0,
      currentEquity: parseFloat(userInputs.currentEquity) || 0,
      riskPercentage: parseFloat(userInputs.riskPercentage) || 0,
      entryPrice: parseFloat(userInputs.entryPrice) || 0,
      stopLoss: parseFloat(userInputs.stopLoss) || 0,
      takeProfit: parseFloat(userInputs.takeProfit) || 0,
      volume: parseFloat(userInputs.volume) || 0
    };

    // Prop firm rules and constraints
    const firmRules = propFirmRules[userInputs.propFirm]?.[userInputs.challengePhase] || {};
    
    // Current calculation results
    const calculationResults = {
      positionSize: results.positionSize,
      riskAmount: results.riskAmount,
      potentialProfit: results.potentialProfit,
      potentialLoss: results.potentialLoss,
      riskRewardRatio: results.riskRewardRatio,
      stopLossPips: results.stopLossPips,
      takeProfitPips: results.takeProfitPips,
      dailyDrawdown: results.dailyDrawdown,
      maxDrawdown: results.maxDrawdown,
      profitTargetProgress: results.profitTargetProgress
    };

    return {
      marketData,
      tradingSetup,
      firmRules,
      calculationResults,
      timestamp: new Date().toISOString()
    };
  };

  // Create comprehensive prompt for ChatGPT
  const createAnalysisPrompt = (data) => {
    return `You are an expert trading analyst with deep knowledge of prop firm trading, risk management, and market analysis. Please provide a comprehensive trading analysis based on the following data:

**MARKET DATA:**
Symbol: ${data.marketData.symbol}
Current Price: ${data.marketData.currentPrice}
Price Change: ${data.marketData.priceChange} (${data.marketData.priceChangePercent}%)

**MULTI-TIMEFRAME ANALYSIS:**
${Object.entries(data.marketData.timeframes).map(([tf, tfData]) => `
${tf.toUpperCase()}: 
- Price: ${tfData.currentPrice} (${tfData.changePercent > 0 ? '+' : ''}${tfData.changePercent.toFixed(2)}%)
- Range: ${tfData.low} - ${tfData.high}
- RSI: ${tfData.rsi.toFixed(1)}
- Volatility: ${tfData.volatility.toFixed(2)}%
- Trend: ${tfData.trend} (Strength: ${tfData.strength.toFixed(1)}%)
`).join('')}

**TRADING SETUP:**
Account Type: ${data.tradingSetup.accountType}
Prop Firm: ${data.tradingSetup.propFirm}
Challenge Phase: ${data.tradingSetup.challengePhase}
Account Size: $${data.tradingSetup.accountSize}
Current Equity: $${data.tradingSetup.currentEquity}
Risk Percentage: ${data.tradingSetup.riskPercentage}%
Entry Price: ${data.tradingSetup.entryPrice}
Stop Loss: ${data.tradingSetup.stopLoss}
Take Profit: ${data.tradingSetup.takeProfit}

**PROP FIRM RULES:**
Daily Loss Limit: ${data.firmRules.dailyLoss}%
Max Loss Limit: ${data.firmRules.maxLoss}%
Profit Target: ${data.firmRules.profitTarget}%
Consistency Required: ${data.firmRules.consistency ? 'Yes' : 'No'}

**CURRENT CALCULATIONS:**
Position Size: ${data.calculationResults.positionSize}
Risk Amount: $${data.calculationResults.riskAmount}
Potential Profit: $${data.calculationResults.potentialProfit}
Risk/Reward Ratio: ${data.calculationResults.riskRewardRatio}:1
Stop Loss Pips: ${data.calculationResults.stopLossPips}
Take Profit Pips: ${data.calculationResults.takeProfitPips}
Daily Drawdown: ${data.calculationResults.dailyDrawdown}%
Max Drawdown: ${data.calculationResults.maxDrawdown}%

Please provide:

1. **MARKET ANALYSIS**: Detailed analysis of current market conditions across all timeframes
2. **TRADE RECOMMENDATION**: Should I take this trade? (YES/NO/WAIT) with detailed reasoning
3. **OPTIMAL ENTRY**: Recommended entry price and timing
4. **RISK MANAGEMENT**: Optimal stop loss and take profit levels with pip distances
5. **POSITION SIZING**: Recommended lot size and risk percentage
6. **PROP FIRM COMPLIANCE**: Analysis of how this trade fits within prop firm rules
7. **EXECUTION PLAN**: Step-by-step instructions for placing the trade
8. **RISK WARNINGS**: Any potential risks or concerns
9. **ALTERNATIVE SCENARIOS**: What to do if market conditions change

Format your response in clear sections with specific actionable recommendations. Include exact values for entry, stop loss, take profit, and lot size that I can directly input into my trading platform.`;
  };

  // Call enhanced ChatGPT API for comprehensive analysis
  const performAdvancedAnalysis = async () => {
    if (!apiKey.trim()) {
      setError('Please enter your ChatGPT API key');
      return;
    }

    setIsAnalyzing(true);
    setError(null);

    try {
      // Prepare comprehensive data for enhanced analysis
      const analysisData = {
        apiKey: apiKey.trim(),
        symbol: currencyPair,
        userInputs: {
          accountType: userInputs.accountType,
          propFirm: userInputs.propFirm,
          challengePhase: userInputs.challengePhase,
          accountSize: parseFloat(userInputs.accountSize) || 0,
          currentEquity: parseFloat(userInputs.currentEquity) || 0,
          riskPercentage: parseFloat(userInputs.riskPercentage) || 0,
          entryPrice: parseFloat(userInputs.entryPrice) || 0,
          stopLoss: parseFloat(userInputs.stopLoss) || 0,
          takeProfit: parseFloat(userInputs.takeProfit) || 0,
          volume: parseFloat(userInputs.volume) || 0
        },
        propFirmData: {
          dailyDrawdownLimit: propFirmRules[userInputs.propFirm]?.[userInputs.challengePhase]?.dailyLoss || 5,
          maxDrawdownLimit: propFirmRules[userInputs.propFirm]?.[userInputs.challengePhase]?.maxLoss || 10,
          profitTarget: propFirmRules[userInputs.propFirm]?.[userInputs.challengePhase]?.profitTarget || 8,
          currentDailyDrawdown: results.dailyDrawdown || 0,
          currentMaxDrawdown: results.maxDrawdown || 0,
          accountHealth: results.dailyDrawdown < 2 ? 'Excellent' : results.dailyDrawdown < 4 ? 'Good' : 'Caution'
        }
      };

      // Call the enhanced ChatGPT analysis API with comprehensive candlestick data
      const response = await fetch('http://localhost:5000/api/chatgpt-analysis', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(analysisData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `API Error: ${response.status}`);
      }

      const result = await response.json();
      
      if (result.status === 'success') {
        setAnalysis({
          content: result.analysis,
          timestamp: result.timestamp,
          dataPointsAnalyzed: result.data_points_analyzed
        });
        saveApiKey(); // Save API key if analysis was successful
        
        // Log comprehensive data analysis info
        console.log('Comprehensive Analysis Completed:', {
          timeframes: result.data_points_analyzed.timeframes,
          totalCandles: result.data_points_analyzed.total_candles,
          userInputs: result.data_points_analyzed.user_inputs,
          propFirmData: result.data_points_analyzed.prop_firm_data
        });
      } else {
        throw new Error(result.error || 'Analysis failed');
      }

    } catch (err) {
      console.error('Advanced analysis error:', err);
      setError(err.message || 'Failed to perform advanced analysis. Please check your API key and try again.');
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Parse analysis for actionable data
  const parseAnalysisForApplication = (analysisContent) => {
    // Simple regex patterns to extract trading parameters
    const entryMatch = analysisContent.match(/entry[:\s]+([0-9.]+)/i);
    const stopLossMatch = analysisContent.match(/stop\s*loss[:\s]+([0-9.]+)/i);
    const takeProfitMatch = analysisContent.match(/take\s*profit[:\s]+([0-9.]+)/i);
    const lotSizeMatch = analysisContent.match(/lot\s*size[:\s]+([0-9.]+)/i);
    const riskMatch = analysisContent.match(/risk[:\s]+([0-9.]+)%/i);

    return {
      entryPrice: entryMatch ? parseFloat(entryMatch[1]) : null,
      stopLoss: stopLossMatch ? parseFloat(stopLossMatch[1]) : null,
      takeProfit: takeProfitMatch ? parseFloat(takeProfitMatch[1]) : null,
      lotSize: lotSizeMatch ? parseFloat(lotSizeMatch[1]) : null,
      riskPercentage: riskMatch ? parseFloat(riskMatch[1]) : null
    };
  };

  // Apply AI analysis recommendations
  const applyAIRecommendations = () => {
    if (!analysis) return;

    const recommendations = parseAnalysisForApplication(analysis.content);
    onApplyAnalysis(recommendations);
  };

  if (!isExpanded) {
    return (
      <Card className="bg-gradient-to-r from-purple-900 to-indigo-900 border-purple-500/30">
        <CardContent className="p-4">
          <Button
            onClick={() => setIsExpanded(true)}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            Advanced AI Analysis with ChatGPT
            <Brain className="h-4 w-4 ml-2" />
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-r from-purple-900 to-indigo-900 border-purple-500/30">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-white flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-400" />
              Advanced AI Analysis
            </CardTitle>
            <CardDescription className="text-purple-200">
              Comprehensive market analysis using ChatGPT with all available data
            </CardDescription>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(false)}
            className="text-purple-300 hover:text-white"
          >
            ×
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* API Key Input */}
        <div className="space-y-2">
          <Label className="text-purple-200 flex items-center gap-2">
            <Key className="h-4 w-4" />
            ChatGPT API Key
          </Label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Input
                type={showApiKey ? 'text' : 'password'}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="sk-..."
                className="bg-slate-800 border-slate-600 text-white pr-10"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1 h-6 w-6 p-0 text-slate-400 hover:text-white"
                onClick={() => setShowApiKey(!showApiKey)}
              >
                {showApiKey ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
              </Button>
            </div>
            <Button
              onClick={performAdvancedAnalysis}
              disabled={isAnalyzing || !apiKey.trim()}
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Zap className="h-4 w-4 mr-2" />
                  Analyze
                </>
              )}
            </Button>
          </div>
          <p className="text-xs text-purple-300">
            Your API key is stored locally and used only for analysis. Get your key from{' '}
            <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
              OpenAI Platform
            </a>
          </p>
        </div>

        {/* Error Display */}
        {error && (
          <Alert className="border-red-500 bg-red-900/20">
            <AlertTriangle className="h-4 w-4 text-red-400" />
            <AlertDescription className="text-red-300">
              {error}
            </AlertDescription>
          </Alert>
        )}

        {/* Analysis Results */}
        {analysis && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge className="bg-green-600 text-white">
                <CheckCircle className="h-3 w-3 mr-1" />
                Analysis Complete
              </Badge>
              <span className="text-xs text-purple-300">
                {new Date(analysis.timestamp).toLocaleString()}
              </span>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-4 max-h-96 overflow-y-auto">
              <pre className="text-sm text-white whitespace-pre-wrap font-mono">
                {analysis.content}
              </pre>
            </div>

            <div className="flex gap-2">
              <Button
                onClick={applyAIRecommendations}
                className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
              >
                <Target className="h-4 w-4 mr-2" />
                Apply AI Recommendations
              </Button>
              <Button
                onClick={() => setAnalysis(null)}
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-700"
              >
                Clear
              </Button>
            </div>
          </div>
        )}

        {/* Data Preview */}
        <div className="mt-4 p-3 bg-slate-800/30 rounded-lg">
          <h4 className="text-sm font-medium text-purple-200 mb-2 flex items-center gap-2">
            <Shield className="h-4 w-4" />
            Comprehensive Data Being Analyzed
          </h4>
          <div className="grid grid-cols-2 gap-2 text-xs text-purple-300">
            <div>• Live price data ({currencyPair})</div>
            <div>• 1m candlesticks (last 24 hours)</div>
            <div>• 15m candlesticks (last 5 days)</div>
            <div>• 1h candlesticks (last month)</div>
            <div>• Daily candlesticks (last year)</div>
            <div>• Technical indicators (RSI, MACD, SMA)</div>
            <div>• Support/resistance levels</div>
            <div>• Price patterns & momentum</div>
            <div>• Prop firm rules & constraints</div>
            <div>• Current position calculations</div>
            <div>• Risk management metrics</div>
            <div>• Multi-timeframe trend analysis</div>
          </div>
          {analysis?.dataPointsAnalyzed && (
            <div className="mt-2 pt-2 border-t border-slate-600">
              <p className="text-xs text-green-400">
                ✓ Analyzed {analysis.dataPointsAnalyzed.total_candles} candlesticks across {analysis.dataPointsAnalyzed.timeframes?.length} timeframes
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AdvancedAIAnalysis;

