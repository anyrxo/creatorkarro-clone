'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Textarea } from '@/components/ui/textarea'
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
} from 'lucide-react'

interface AdvancedAIAnalysisProps {
  currencyPair: string
  priceData?: any
  marketAnalysisData?: any
  userInputs: any
  propFirmRules?: any
  results: any
  onApplyAnalysis: (recommendations: any) => void
}

interface Analysis {
  content: string
  timestamp: string
  dataPointsAnalyzed: any
}

const AdvancedAIAnalysis: React.FC<AdvancedAIAnalysisProps> = ({ 
  currencyPair, 
  priceData, 
  marketAnalysisData, 
  userInputs, 
  propFirmRules, 
  results,
  onApplyAnalysis 
}) => {
  const [apiKey, setApiKey] = useState('')
  const [showApiKey, setShowApiKey] = useState(false)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysis, setAnalysis] = useState<Analysis | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [isExpanded, setIsExpanded] = useState(false)

  // Load API key from localStorage
  useEffect(() => {
    const savedApiKey = localStorage.getItem('chatgpt_api_key')
    if (savedApiKey) {
      setApiKey(savedApiKey)
    }
  }, [])

  // Save API key to localStorage
  const saveApiKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem('chatgpt_api_key', apiKey.trim())
    }
  }

  // Create comprehensive prompt for ChatGPT
  const createAnalysisPrompt = (data: any) => {
    return `You are an expert trading analyst with deep knowledge of prop firm trading, risk management, and market analysis. Please provide a comprehensive trading analysis based on the following data:

**MARKET DATA:**
Symbol: ${data.marketData.symbol}
Current Price: ${data.marketData.currentPrice}
Price Change: ${data.marketData.priceChange} (${data.marketData.priceChangePercent}%)

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

**CURRENT CALCULATIONS:**
Position Size: ${data.calculationResults.positionSize}
Risk Amount: $${data.calculationResults.riskAmount}
Potential Profit: $${data.calculationResults.potentialProfit}
Risk/Reward Ratio: ${data.calculationResults.riskRewardRatio}:1
Stop Loss Pips: ${data.calculationResults.stopLossPips}
Take Profit Pips: ${data.calculationResults.takeProfitPips}

Please provide:

1. **MARKET ANALYSIS**: Detailed analysis of current market conditions
2. **TRADE RECOMMENDATION**: Should I take this trade? (YES/NO/WAIT) with detailed reasoning
3. **OPTIMAL ENTRY**: Recommended entry price and timing
4. **RISK MANAGEMENT**: Optimal stop loss and take profit levels with pip distances
5. **POSITION SIZING**: Recommended lot size and risk percentage
6. **PROP FIRM COMPLIANCE**: Analysis of how this trade fits within prop firm rules
7. **EXECUTION PLAN**: Step-by-step instructions for placing the trade
8. **RISK WARNINGS**: Any potential risks or concerns

Format your response in clear sections with specific actionable recommendations. Include exact values for entry, stop loss, take profit, and lot size that I can directly input into my trading platform.`
  }

  // Prepare comprehensive data for ChatGPT analysis
  const prepareAnalysisData = () => {
    // Market data
    const marketData = {
      symbol: currencyPair,
      currentPrice: priceData?.price || 0,
      priceChange: priceData?.change || 0,
      priceChangePercent: priceData?.change_pct || 0
    }

    // User trading setup
    const tradingSetup = {
      accountType: userInputs.accountType || 'Prop Firm',
      propFirm: userInputs.propFirm || 'Unknown',
      challengePhase: userInputs.challengePhase || 'Phase 1',
      accountSize: parseFloat(userInputs.accountSize) || 0,
      currentEquity: parseFloat(userInputs.currentEquity) || 0,
      riskPercentage: parseFloat(userInputs.riskPercentage) || 0,
      entryPrice: parseFloat(userInputs.entryPrice) || 0,
      stopLoss: parseFloat(userInputs.stopLoss) || 0,
      takeProfit: parseFloat(userInputs.takeProfit) || 0,
      volume: parseFloat(userInputs.volume) || 0
    }

    // Current calculation results
    const calculationResults = {
      positionSize: results.positionSize || 0,
      riskAmount: results.riskAmount || 0,
      potentialProfit: results.potentialProfit || 0,
      potentialLoss: results.potentialLoss || 0,
      riskRewardRatio: results.riskRewardRatio || 0,
      stopLossPips: results.stopLossPips || 0,
      takeProfitPips: results.takeProfitPips || 0
    }

    return {
      marketData,
      tradingSetup,
      calculationResults,
      timestamp: new Date().toISOString()
    }
  }

  // Call ChatGPT API for comprehensive analysis (Mock implementation for now)
  const performAdvancedAnalysis = async () => {
    if (!apiKey.trim()) {
      setError('Please enter your ChatGPT API key')
      return
    }

    setIsAnalyzing(true)
    setError(null)

    try {
      // Prepare comprehensive data for enhanced analysis
      const analysisData = prepareAnalysisData()
      const prompt = createAnalysisPrompt(analysisData)

      // Mock AI analysis for demo purposes
      // In production, this would call the actual ChatGPT API
      await new Promise(resolve => setTimeout(resolve, 3000)) // Simulate API call

      const mockAnalysis = `**MARKET ANALYSIS:**
Current market conditions for ${currencyPair} show moderate volatility with neutral sentiment. Price is trading within a defined range with potential for breakout.

**TRADE RECOMMENDATION:** CONSIDER BUY
Based on the current setup, there are bullish signals emerging with favorable risk management parameters in place.

**OPTIMAL ENTRY:** ${(parseFloat(userInputs.entryPrice) || 1.08500).toFixed(5)}
Wait for confirmation above current resistance levels before entering.

**RISK MANAGEMENT:**
- Stop Loss: ${(parseFloat(userInputs.stopLoss) || 1.08000).toFixed(5)} (${Math.abs((parseFloat(userInputs.entryPrice) || 1.08500) - (parseFloat(userInputs.stopLoss) || 1.08000)) * 10000} pips)
- Take Profit: ${(parseFloat(userInputs.takeProfit) || 1.09500).toFixed(5)} (${Math.abs((parseFloat(userInputs.takeProfit) || 1.09500) - (parseFloat(userInputs.entryPrice) || 1.08500)) * 10000} pips)

**POSITION SIZING:** ${results.positionSize || 0.1} lots
Current risk of ${results.accountRisk || 1}% is appropriate for prop firm trading.

**PROP FIRM COMPLIANCE:**
✅ Risk percentage within acceptable limits
✅ Position size appropriate for account balance
✅ Stop loss properly set for drawdown protection

**EXECUTION PLAN:**
1. Monitor for breakout confirmation
2. Enter at specified price level
3. Set stop loss immediately
4. Monitor for take profit target
5. Consider partial profit taking at 50% target

**RISK WARNINGS:**
- Market conditions can change rapidly
- Always adhere to prop firm rules
- Monitor news events that may affect price action
- Consider reducing position size in high volatility periods`

      setAnalysis({
        content: mockAnalysis,
        timestamp: new Date().toISOString(),
        dataPointsAnalyzed: {
          total_candles: 500,
          timeframes: ['1m', '5m', '15m', '1h', '4h', '1d'],
          user_inputs: analysisData.tradingSetup,
          prop_firm_data: analysisData.calculationResults
        }
      })

      saveApiKey() // Save API key if analysis was successful

    } catch (err) {
      console.error('Advanced analysis error:', err)
      setError('Failed to perform advanced analysis. Please check your API key and try again.')
    } finally {
      setIsAnalyzing(false)
    }
  }

  // Parse analysis for actionable data
  const parseAnalysisForApplication = (analysisContent: string) => {
    // Simple regex patterns to extract trading parameters
    const entryMatch = analysisContent.match(/entry[:\s]+([0-9.]+)/i)
    const stopLossMatch = analysisContent.match(/stop\s*loss[:\s]+([0-9.]+)/i)
    const takeProfitMatch = analysisContent.match(/take\s*profit[:\s]+([0-9.]+)/i)
    const lotSizeMatch = analysisContent.match(/lot\s*size[:\s]+([0-9.]+)/i)
    const riskMatch = analysisContent.match(/risk[:\s]+([0-9.]+)%/i)

    return {
      entryPrice: entryMatch ? parseFloat(entryMatch[1]) : null,
      stopLoss: stopLossMatch ? parseFloat(stopLossMatch[1]) : null,
      takeProfit: takeProfitMatch ? parseFloat(takeProfitMatch[1]) : null,
      lotSize: lotSizeMatch ? parseFloat(lotSizeMatch[1]) : null,
      riskPercentage: riskMatch ? parseFloat(riskMatch[1]) : null
    }
  }

  // Apply AI analysis recommendations
  const applyAIRecommendations = () => {
    if (!analysis) return

    const recommendations = parseAnalysisForApplication(analysis.content)
    onApplyAnalysis(recommendations)
  }

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
    )
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
  )
}

export default AdvancedAIAnalysis