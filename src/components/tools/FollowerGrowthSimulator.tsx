'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Slider } from '@/components/ui/slider' // Assuming you have a slider or I'll use a standard input
import { TrendingUp } from 'lucide-react'

export default function FollowerGrowthSimulator() {
  const [months, setMonths] = useState(6)
  const [dailyEffort, setDailyEffort] = useState(2) // hours

  // Simple exponential growth logic for demonstration
  // Base growth rate increases with effort
  const baseRate = 0.15 // 15% month over month base
  const effortMultiplier = dailyEffort * 0.05 // Each hour adds 5% growth efficiency
  const growthRate = baseRate + effortMultiplier
  
  const startingFollowers = 0
  const viralCoefficient = 1.2 // Occasional viral boost

  const calculateGrowth = () => {
    let current = 100 // Start with 100 for visual
    const data = []
    for (let i = 1; i <= months; i++) {
       current = current * (1 + growthRate) * viralCoefficient
       data.push(Math.round(current))
    }
    return Math.round(current)
  }

  const result = calculateGrowth()

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <TrendingUp className="w-3 h-3" /> Simulator
        </div>
        <h3 className="text-2xl font-bold text-white">Potential Growth Calculator</h3>
        <p className="text-zinc-400 text-sm">See what happens when you apply the Ignited Strategy.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Time Period: <span className="text-white font-bold">{months} Months</span></label>
            <input 
              type="range" 
              min="1" 
              max="12" 
              value={months} 
              onChange={(e) => setMonths(parseInt(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <div className="flex justify-between text-xs text-zinc-500 mt-1">
              <span>1 Mo</span>
              <span>12 Mo</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Daily Effort: <span className="text-white font-bold">{dailyEffort} Hours</span></label>
            <input 
              type="range" 
              min="1" 
              max="8" 
              value={dailyEffort} 
              onChange={(e) => setDailyEffort(parseInt(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
             <div className="flex justify-between text-xs text-zinc-500 mt-1">
              <span>Lazy (1h)</span>
              <span>Hustler (8h)</span>
            </div>
          </div>
        </div>

        <div className="bg-black/50 rounded-2xl p-6 border border-white/5 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent pointer-events-none" />
          
          <p className="text-zinc-400 text-sm uppercase tracking-wider mb-2">Projected Audience</p>
          <motion.div 
            key={result}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl md:text-6xl font-black text-white mb-2"
          >
            {result.toLocaleString()}
          </motion.div>
          <p className="text-sm text-green-400 font-medium flex items-center justify-center gap-1">
             <TrendingUp className="w-4 h-4" /> Top 1% Growth Speed
          </p>
          
          <div className="mt-6 pt-6 border-t border-white/5">
             <div className="flex justify-between text-sm">
                <span className="text-zinc-400">Est. Monthly Revenue:</span>
                <span className="text-white font-bold">${(result * 0.02).toLocaleString()}</span>
             </div>
             <p className="text-[10px] text-zinc-600 mt-2">*Based on 2% conversion rate to $1 products.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

