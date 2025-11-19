'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DollarSign, Rocket } from 'lucide-react'

export default function ProductLaunchSimulator() {
  const [productPrice, setProductPrice] = useState(47)
  const [audienceSize, setAudienceSize] = useState(1000)
  const [conversionRate, setConversionRate] = useState(2) // %

  const launchRevenue = audienceSize * (conversionRate / 100) * productPrice

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <Rocket className="w-3 h-3" /> Launch Simulator
        </div>
        <h3 className="text-2xl font-bold text-white">Digital Product Launch Potential</h3>
        <p className="text-zinc-400 text-sm">Calculate the potential of your first product launch.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Product Price: <span className="text-white font-bold">${productPrice}</span></label>
            <input 
              type="range" 
              min="7" 
              max="297" 
              value={productPrice} 
              onChange={(e) => setProductPrice(parseInt(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
            <div className="flex justify-between text-xs text-zinc-500 mt-1">
              <span>$7 (Ebook)</span>
              <span>$297 (Course)</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Audience Size: <span className="text-white font-bold">{audienceSize.toLocaleString()}</span></label>
            <input 
              type="range" 
              min="100" 
              max="10000" 
              value={audienceSize} 
              onChange={(e) => setAudienceSize(parseInt(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
             <div className="flex justify-between text-xs text-zinc-500 mt-1">
              <span>100 Fans</span>
              <span>10k Fans</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Conversion Rate: <span className="text-white font-bold">{conversionRate}%</span></label>
            <input 
              type="range" 
              min="0.5" 
              max="5" 
              step="0.5"
              value={conversionRate} 
              onChange={(e) => setConversionRate(parseFloat(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
             <div className="flex justify-between text-xs text-zinc-500 mt-1">
              <span>Avg (0.5%)</span>
              <span>Super Fan (5%)</span>
            </div>
          </div>
        </div>

        <div className="bg-black/50 rounded-2xl p-6 border border-white/5 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent pointer-events-none" />
          
          <p className="text-zinc-400 text-sm uppercase tracking-wider mb-2">Est. Launch Revenue</p>
          <motion.div 
            key={launchRevenue}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl md:text-6xl font-black text-white mb-2"
          >
            ${Math.round(launchRevenue).toLocaleString()}
          </motion.div>
          <p className="text-sm text-green-400 font-medium flex items-center justify-center gap-1">
             <DollarSign className="w-4 h-4" /> 100% Profit Margin
          </p>
          
          <div className="mt-6 pt-6 border-t border-white/5">
             <p className="text-zinc-400 text-sm mb-2">If you launch 1 product per month:</p>
             <div className="text-2xl font-bold text-white">
                ${(Math.round(launchRevenue) * 12).toLocaleString()} / yr
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

