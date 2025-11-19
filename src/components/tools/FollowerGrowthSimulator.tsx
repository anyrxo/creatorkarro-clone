'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp, Zap, Clock, AlertCircle } from 'lucide-react'

export default function FollowerGrowthSimulator() {
  const [months, setMonths] = useState(6)
  const [dailyEffort, setDailyEffort] = useState(2) // hours
  const [isViral, setIsViral] = useState(true)
  const [chartData, setChartData] = useState<number[]>([])
  const [manualData, setManualData] = useState<number[]>([])

  // Calculate growth whenever inputs change
  useEffect(() => {
    const baseRate = 0.15 // 15% month over month base
    const effortMultiplier = dailyEffort * 0.05
    const viralMultiplier = isViral ? 1.5 : 1.0
    const growthRate = (baseRate + effortMultiplier) * viralMultiplier
    
    const linearGrowthRate = 0.05 + (dailyEffort * 0.02) // Linear "hard work" growth

    let currentIgnited = 100
    let currentManual = 100
    const newIgnitedData = []
    const newManualData = []

    for (let i = 1; i <= 12; i++) {
       // Ignited: Exponential
       currentIgnited = currentIgnited * (1 + growthRate)
       if (isViral && i % 3 === 0) currentIgnited *= 1.8 // Viral spikes every 3 months
       
       // Manual: Linear/Slow Compounding
       currentManual = currentManual * (1 + linearGrowthRate)
       
       if (i <= months) {
         newIgnitedData.push(Math.round(currentIgnited))
         newManualData.push(Math.round(currentManual))
       }
    }
    setChartData(newIgnitedData)
    setManualData(newManualData)
  }, [months, dailyEffort, isViral])

  const result = chartData[chartData.length - 1] || 0
  const manualResult = manualData[manualData.length - 1] || 0
  const difference = result - manualResult
  const multiplier = Math.round(result / (manualResult || 1))

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-2xl shadow-purple-900/10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-8">
        {/* LEFT: Controls */}
        <div className="lg:col-span-5 space-y-8 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-orange-500/20">
              <Zap className="w-3 h-3" /> Growth Engine
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Reality Check</h3>
            <p className="text-zinc-400 text-sm">Compare "Guesswork" vs "The Ignited System".</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                 <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                   <Clock className="w-4 h-4 text-zinc-500" /> Time Horizon
                 </label>
                 <span className="text-white font-bold bg-zinc-800 px-2 py-1 rounded text-sm">{months} Months</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="12" 
                value={months} 
                onChange={(e) => setMonths(parseInt(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                 <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                   <TrendingUp className="w-4 h-4 text-zinc-500" /> Daily Grind
                 </label>
                 <span className="text-white font-bold bg-zinc-800 px-2 py-1 rounded text-sm">{dailyEffort} Hours</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="8" 
                value={dailyEffort} 
                onChange={(e) => setDailyEffort(parseInt(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50">
               <div className="flex items-center gap-3">
                 <div className={`w-10 h-6 rounded-full relative transition-colors duration-300 ${isViral ? 'bg-purple-500' : 'bg-zinc-600'}`} onClick={() => setIsViral(!isViral)}>
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-300 ${isViral ? 'left-5' : 'left-1'}`} />
                 </div>
                 <span className="text-sm font-medium text-white">Enable Viral Spikes</span>
               </div>
               <span className="text-xs text-purple-400 font-bold">{isViral ? 'ON' : 'OFF'}</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Visualizer */}
        <div className="lg:col-span-7 bg-black/40 rounded-2xl border border-white/5 p-6 relative flex flex-col justify-between min-h-[300px]">
           {/* Stats Header */}
           <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Old Way</p>
                <p className="text-xl font-bold text-zinc-400">{manualResult.toLocaleString()}</p>
                <p className="text-[10px] text-zinc-600">Followers</p>
              </div>
              <div>
                 <p className="text-orange-500 text-xs uppercase tracking-wider mb-1 flex items-center gap-1">
                   Ignited Way <Zap className="w-3 h-3" />
                 </p>
                 <motion.p 
                   key={result}
                   initial={{ scale: 0.9, color: '#fff' }}
                   animate={{ scale: 1, color: '#fb923c' }}
                   className="text-3xl font-black text-orange-400"
                 >
                   {result.toLocaleString()}
                 </motion.p>
                 <p className="text-[10px] text-orange-500/70 font-mono">
                   {multiplier}x Faster Growth
                 </p>
              </div>
           </div>

           {/* Chart */}
           <div className="flex items-end gap-2 h-48 w-full px-2 pb-2 border-b border-zinc-800 relative">
              {/* Y-Axis lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                 <div className="w-full h-px bg-zinc-500" />
                 <div className="w-full h-px bg-zinc-500" />
                 <div className="w-full h-px bg-zinc-500" />
              </div>
              
              {chartData.map((val, i) => {
                const maxVal = chartData[chartData.length - 1]
                const height = (val / maxVal) * 100
                const manualH = (manualData[i] / maxVal) * 100
                
                return (
                  <div key={i} className="flex-1 flex flex-col justify-end gap-1 h-full relative group">
                     {/* Tooltip */}
                     <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-zinc-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20">
                        Mo {i + 1}: {val.toLocaleString()}
                     </div>

                     {/* Ignited Bar */}
                     <motion.div 
                       initial={{ height: 0 }}
                       animate={{ height: `${height}%` }}
                       className="w-full bg-gradient-to-t from-orange-600 to-red-500 rounded-t-sm relative z-10"
                     />
                     
                     {/* Manual Bar (Overlay/Comparison) */}
                     <motion.div 
                       initial={{ height: 0 }}
                       animate={{ height: `${manualH}%` }}
                       className="w-full bg-zinc-700/50 absolute bottom-0 left-0 right-0 z-0"
                     />
                  </div>
                )
              })}
           </div>
           <div className="flex justify-between text-[10px] text-zinc-600 mt-2 uppercase font-mono">
              <span>Month 1</span>
              <span>Month {months}</span>
           </div>
        </div>
      </div>
    </div>
  )
}
