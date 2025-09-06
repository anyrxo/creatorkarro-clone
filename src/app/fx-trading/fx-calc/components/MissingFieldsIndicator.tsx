'use client'

import React from 'react'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { AlertTriangle, CheckCircle, Info, TrendingUp } from 'lucide-react'

interface MissingFieldsIndicatorProps {
  entryPrice: string
  stopLoss: string
  takeProfit: string
  riskPercentage?: string
  accountBalance: string
  results: any
  intelligentSuggestions?: Array<{
    category: string
    message: string
    action?: string
  }>
}

const MissingFieldsIndicator: React.FC<MissingFieldsIndicatorProps> = ({ 
  entryPrice, 
  stopLoss, 
  takeProfit, 
  riskPercentage, 
  accountBalance,
  results,
  intelligentSuggestions = []
}) => {
  const missingFields: string[] = []
  const warnings: string[] = []
  const suggestions: string[] = []

  // Check for missing required fields
  if (!entryPrice) missingFields.push('Entry Price')
  if (!stopLoss) missingFields.push('Stop Loss')
  if (!riskPercentage) missingFields.push('Risk Percentage')
  if (!accountBalance) missingFields.push('Account Balance')

  // Check for warnings
  if (entryPrice && stopLoss) {
    const entry = parseFloat(entryPrice)
    const sl = parseFloat(stopLoss)
    if (Math.abs(entry - sl) < 0.0001) {
      warnings.push('Stop loss is too close to entry price')
    }
  }

  if (riskPercentage && parseFloat(riskPercentage) > 3) {
    warnings.push('Risk percentage is high (>3%)')
  }

  // Generate suggestions
  if (!takeProfit && entryPrice && stopLoss) {
    suggestions.push('Add a take profit target for better risk management')
  }

  if (results.riskRewardRatio > 0 && results.riskRewardRatio < 1.5) {
    suggestions.push('Consider improving your risk:reward ratio to at least 1.5:1')
  }

  if (results.positionSize > 0 && results.positionSize < 0.01) {
    suggestions.push('Position size is very small - consider adjusting your risk or stop loss')
  }

  return (
    <div className="space-y-3">
      {/* Missing Fields Alert */}
      {missingFields.length > 0 && (
        <Alert className="border-orange-500/50 bg-orange-500/10">
          <AlertTriangle className="h-4 w-4 text-orange-400" />
          <AlertDescription className="text-orange-300">
            <div className="font-medium mb-2">Missing Required Fields:</div>
            <div className="flex flex-wrap gap-1">
              {missingFields.map((field, index) => (
                <Badge key={index} variant="outline" className="text-orange-300 border-orange-500/50">
                  {field}
                </Badge>
              ))}
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Warnings */}
      {warnings.length > 0 && (
        <Alert className="border-red-500/50 bg-red-500/10">
          <AlertTriangle className="h-4 w-4 text-red-400" />
          <AlertDescription className="text-red-300">
            <div className="font-medium mb-2">Warnings:</div>
            <ul className="list-disc list-inside space-y-1">
              {warnings.map((warning, index) => (
                <li key={index} className="text-sm">{warning}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}

      {/* Live Analysis */}
      {missingFields.length === 0 && results.positionSize > 0 && (
        <Alert className="border-green-500/50 bg-green-500/10">
          <CheckCircle className="h-4 w-4 text-green-400" />
          <AlertDescription className="text-green-300">
            <div className="font-medium mb-2">Live Analysis:</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <div>Position Size: <span className="font-medium">{results.positionSize} lots</span></div>
              <div>Risk Amount: <span className="font-medium">${results.riskAmount}</span></div>
              <div>Stop Loss: <span className="font-medium">{results.stopLossPips} pips</span></div>
              <div>R:R Ratio: <span className="font-medium">{results.riskRewardRatio}:1</span></div>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <Alert className="border-blue-500/50 bg-blue-500/10">
          <Info className="h-4 w-4 text-blue-400" />
          <AlertDescription className="text-blue-300">
            <div className="font-medium mb-2">Suggestions:</div>
            <ul className="list-disc list-inside space-y-1">
              {suggestions.map((suggestion, index) => (
                <li key={index} className="text-sm">{suggestion}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}

      {/* Intelligent Suggestions from Calculator */}
      {intelligentSuggestions.length > 0 && (
        <Alert className="border-purple-500/50 bg-purple-500/10">
          <TrendingUp className="h-4 w-4 text-purple-400" />
          <AlertDescription className="text-purple-300">
            <div className="font-medium mb-2">AI Recommendations:</div>
            <div className="space-y-2">
              {intelligentSuggestions.map((suggestion, index) => (
                <div key={index} className="text-sm">
                  <div className="font-medium">{suggestion.category}:</div>
                  <div>{suggestion.message}</div>
                  {suggestion.action && (
                    <div className="text-purple-400 italic mt-1">{suggestion.action}</div>
                  )}
                </div>
              ))}
            </div>
          </AlertDescription>
        </Alert>
      )}
    </div>
  )
}

export default MissingFieldsIndicator