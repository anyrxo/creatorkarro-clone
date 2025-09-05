'use client'

import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { AlertTriangle, Shield, Info } from 'lucide-react'

const Disclaimer = () => {
  return (
    <Card className="mt-6 bg-gradient-to-r from-red-900/20 to-orange-900/20 border-red-500/30">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-orange-400" />
              <span className="font-semibold text-red-300">IMPORTANT DISCLAIMER - EDUCATIONAL PURPOSES ONLY</span>
            </div>
            
            <div className="text-gray-300 space-y-2 leading-relaxed">
              <p>
                <strong className="text-orange-300">Risk Warning:</strong> This CreatorKarro FX Trading Calculator is provided for <strong>educational purposes only</strong>. 
                The data, calculations, and analysis provided may or may not be accurate and can break, malfunction, or become unavailable at any time.
              </p>
              
              <p>
                <strong className="text-red-300">Data Accuracy:</strong> Market data, prices, technical indicators, and AI analysis are <strong>not guaranteed to be accurate</strong> 
                and should <strong>NOT</strong> be used as the sole source for trading decisions. Always perform your own due diligence and analysis.
              </p>
              
              <p>
                <strong className="text-yellow-300">Trading Risks:</strong> Trading forex, stocks, and other financial instruments involves substantial risk of loss. 
                You may lose some or all of your invested capital. Never trade with money you cannot afford to lose.
              </p>
              
              <p>
                <strong className="text-blue-300">No Liability:</strong> <strong>CreatorKarro</strong>, <strong>Anyro</strong>, <strong>@anyrxo</strong>, and all associated entities 
                are <strong>NOT LIABLE</strong> for your trading actions, decisions, losses, or how you use this calculator or its data. 
                You are solely responsible for your trading decisions and their consequences.
              </p>
              
              <p>
                <strong className="text-purple-300">Educational Use:</strong> This tool is designed for learning about trading concepts, risk management, 
                and position sizing. It should not replace professional financial advice or proper market analysis.
              </p>
              
              <p>
                <strong className="text-green-300">Your Responsibility:</strong> By using this calculator, you acknowledge that you understand these risks 
                and agree to use this tool at your own discretion and responsibility. Always consult with qualified financial professionals 
                before making trading decisions.
              </p>
            </div>
            
            <div className="flex items-center gap-2 pt-2 border-t border-red-500/20">
              <Info className="h-4 w-4 text-blue-400" />
              <span className="text-xs text-gray-400">
                Last updated: {new Date().toLocaleDateString()} | 
                For support: <a href="mailto:support@creatorkarro.com" className="text-blue-400 hover:text-blue-300">support@creatorkarro.com</a>
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Disclaimer