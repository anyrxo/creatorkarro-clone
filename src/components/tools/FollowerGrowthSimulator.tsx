'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TrendingUp, Zap, Clock, Play, RotateCcw, CheckCircle2, Award, DollarSign } from 'lucide-react'
import NumberTicker from '@/components/magicui/number-ticker'

export default function FollowerGrowthSimulator() {
  const [days, setDays] = useState(30)
  const [dailyEffort, setDailyEffort] = useState(2) // hours
  const [contentQuality, setContentQuality] = useState<'Average' | 'Good' | 'God Tier'>('Good')
  const [isSimulating, setIsSimulating] = useState(false)
  const [simulatedData, setSimulatedData] = useState<number[]>([])
  const [simulationLog, setSimulationLog] = useState<{day: number, message: string, type: 'good' | 'neutral' | 'bad'}[]>([])
  const [currentFollowers, setCurrentFollowers] = useState(100)
  const [estimatedRevenue, setEstimatedRevenue] = useState(0)

  const containerRef = useRef<HTMLDivElement>(null)

  // Pre-calculate curve for "Old Way" baseline (slower, linear-ish growth)
  const manualData = Array.from({ length: 30 }, (_, i) => {
    // Old way: roughly 1-2 followers per day compounding very slowly
    return Math.round(100 + (i * 5) * (1 + dailyEffort * 0.1))
  })

  const qualityMultipliers: Record<string, number> = {
    'Average': 1.05,
    'Good': 1.15,
    'God Tier': 1.30
  }

  const runSimulation = async () => {
    if (isSimulating) return
    setIsSimulating(true)
    setSimulatedData([])
    setSimulationLog([])
    setCurrentFollowers(100)
    setEstimatedRevenue(0)

    let current = 100
    let revenue = 0
    const data = []
    
    // Faster simulation step
    const stepDelay = 100 
    
    for (let i = 1; i <= days; i++) {
      // Simulate delay
      await new Promise(r => setTimeout(r, stepDelay))

      // Viral Growth Model
      // Base growth: 5% - 15% daily (very aggressive for "Ignited")
      const baseRate = 0.05 
      const effortBonus = dailyEffort * 0.01
      const qualityBonus = qualityMultipliers[contentQuality] - 1
      
      let dailyGrowth = current * dailyGrowthRate
      
      let eventMsg = null
      let eventType: 'good' | 'neutral' | 'bad' = 'neutral'

      // Random Viral Events
      const rand = Math.random()
      
      // Higher chance of viral spikes with better quality
      const viralThreshold = contentQuality === 'God Tier' ? 0.6 : contentQuality === 'Good' ? 0.75 : 0.9

      if (rand > viralThreshold) {
        const spikeMultiplier = Math.random() * 0.5 + 0.2 // 20-70% boost
        const spike = Math.floor(current * spikeMultiplier)
        dailyGrowth += spike
        
        if (spike > 1000) eventMsg = "🚀 Viral Reel Exploded!"
        else if (spike > 500) eventMsg = "🔥 Explore Page Hit!"
        eventType = 'good'
      } else if (i % 7 === 0) {
         // Weekly momentum
         dailyGrowth *= 1.2
         if (current > 1000) {
             eventMsg = "📈 Weekly Algorithm Boost"
             eventType = 'good'
         }
      }

      current += dailyGrowth
      
      // Revenue Calculation
      // Unlocks after 1000 followers
      if (current > 1000) {
          // Approx $10 per 1000 followers daily potential (very rough estimate for high engagement)
          const dailyRev = (current / 1000) * (Math.random() * 10 + 5) 
          revenue += dailyRev
      }

      data.push(current)
      setSimulatedData([...data])
      setCurrentFollowers(Math.round(current))
      setEstimatedRevenue(Math.round(revenue))

      if (eventMsg) {
        setSimulationLog(prev => [{day: i, message: eventMsg!, type: eventType}, ...prev].slice(0, 3))
      }
    }

    setIsSimulating(false)
  }

  const reset = () => {
    setSimulatedData([])
    setSimulationLog([])
    setCurrentFollowers(100)
    setEstimatedRevenue(0)
    setIsSimulating(false)
  }

  return (
    <div ref={containerRef} className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-3xl p-6 md:p-8 max-w-5xl mx-auto shadow-2xl shadow-orange-900/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="grid lg:grid-cols-12 gap-8">
        {/* CONTROLS */}
        <div className="lg:col-span-4 space-y-8 relative z-10">
          <div>
             <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
               <Zap className="w-3 h-3" /> Ignited Simulator
             </div>
             <h3 className="text-3xl font-bold text-white mb-2">Simulate Your Empire</h3>
             <p className="text-zinc-400 text-sm leading-relaxed">
               Adjust the variables to see how the Ignited System compounds your growth compared to the "old way".
             </p>
          </div>

          <div className="space-y-6 bg-black/20 p-6 rounded-2xl border border-white/5">
            {/* Time Horizon */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                 <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                   <Clock className="w-4 h-4 text-orange-500" /> Duration
                 </label>
                 <span className="text-xs font-bold bg-zinc-800 text-white px-2 py-1 rounded">{days} Days</span>
              </div>
              <input 
                type="range" 
                min="7" 
                max="60" 
                value={days} 
                onChange={(e) => setDays(parseInt(e.target.value))}
                disabled={isSimulating}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-orange-500 disabled:opacity-50"
              />
            </div>

            {/* Daily Effort */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                 <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                   <TrendingUp className="w-4 h-4 text-orange-500" /> Daily Effort
                 </label>
                 <span className="text-xs font-bold bg-zinc-800 text-white px-2 py-1 rounded">{dailyEffort} Hours</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="8" 
                value={dailyEffort} 
                onChange={(e) => setDailyEffort(parseInt(e.target.value))}
                disabled={isSimulating}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-orange-500 disabled:opacity-50"
              />
            </div>

            {/* Content Quality */}
            <div className="space-y-3">
               <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                 <Award className="w-4 h-4 text-orange-500" /> Content Strategy
               </label>
               <div className="grid grid-cols-3 gap-2">
                  {['Average', 'Good', 'God Tier'].map((q) => (
                    <button
                      key={q}
                      onClick={() => setContentQuality(q as any)}
                      disabled={isSimulating}
                      className={`text-xs font-bold py-2 rounded-lg border transition-all ${
                        contentQuality === q 
                        ? 'bg-orange-500 text-white border-orange-400 shadow-lg shadow-orange-500/20' 
                        : 'bg-zinc-800 text-zinc-400 border-zinc-700 hover:bg-zinc-700'
                      }`}
                    >
                      {q}
                    </button>
                  ))}
               </div>
            </div>
          </div>

          <button
            onClick={isSimulating ? undefined : (simulatedData.length > 0 ? reset : runSimulation)}
            disabled={isSimulating}
            className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
              isSimulating 
                ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                : simulatedData.length > 0
                  ? 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
                  : 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white shadow-lg shadow-orange-500/25 transform hover:scale-[1.02]'
            }`}
          >
            {isSimulating ? (
              <>Running Simulation...</>
            ) : simulatedData.length > 0 ? (
              <><RotateCcw className="w-5 h-5" /> Reset Simulator</>
            ) : (
              <><Play className="w-5 h-5" /> Run Simulation</>
            )}
          </button>
        </div>

        {/* VISUALIZER */}
        <div className="lg:col-span-8 bg-black/40 rounded-2xl border border-white/5 p-6 md:p-8 relative flex flex-col h-full min-h-[400px]">
           
           {/* Top Stats Row */}
           <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
                 <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Total Followers</p>
                 <div className="text-3xl md:text-4xl font-black text-white flex items-baseline gap-1">
                    {simulatedData.length > 0 ? (
                      <NumberTicker value={currentFollowers} className="text-white" />
                    ) : (
                      "100"
                    )}
                 </div>
              </div>
              <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
                 <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Est. Earnings</p>
                 <div className="text-3xl md:text-4xl font-black text-green-400 flex items-baseline gap-1">
                    $<NumberTicker value={estimatedRevenue} className="text-green-400" />
                 </div>
              </div>
              <div className="hidden md:block p-4 bg-zinc-900/50 rounded-xl border border-zinc-800">
                 <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Growth Multiplier</p>
                 <div className="text-3xl md:text-4xl font-black text-orange-400 flex items-baseline gap-1">
                    {simulatedData.length > 0 ? (
                      <>
                        <NumberTicker value={Math.round(currentFollowers / (manualData[days-1] || 100))} className="text-orange-400" />x
                      </>
                    ) : (
                      "1x"
                    )}
                 </div>
              </div>
           </div>

           {/* The Graph Area */}
           <div className="flex-grow relative border-b border-l border-zinc-800 min-h-[200px] flex items-end gap-1 md:gap-2 px-2 pb-1">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10">
                {[...Array(5)].map((_, i) => <div key={i} className="w-full h-px bg-white" />)}
              </div>

              {/* Bars */}
              {Array.from({ length: days }).map((_, i) => {
                // Only show some bars if too many days to fit nicely
                if (days > 40 && i % 2 !== 0) return null

                const hasData = i < simulatedData.length
                const val = simulatedData[i] || 0
                // Scale relative to current max to keep chart looking full
                const maxInView = Math.max(...simulatedData, 1000) 
                const height = hasData ? (val / maxInView) * 80 : 5 // 5% min height
                
                const manualVal = manualData[i]
                const manualHeight = (manualVal / maxInView) * 80

                return (
                  <div key={i} className="flex-1 h-full relative flex flex-col justify-end group">
                    {/* Manual Growth Shadow */}
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-zinc-800/50 rounded-t-sm transition-all duration-500"
                      style={{ height: `${manualHeight}%` }}
                    />
                    
                    {/* Simulated Growth Bar */}
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      className={`w-full rounded-t-md relative z-10 transition-all duration-500 ${
                        hasData ? 'bg-gradient-to-t from-orange-600 to-yellow-500 shadow-[0_0_20px_rgba(249,115,22,0.3)]' : 'bg-zinc-800/20'
                      }`}
                    >
                       {hasData && (
                         <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20">
                           {val.toLocaleString()}
                         </div>
                       )}
                    </motion.div>
                    
                    {/* Show label for every 5th day or if sparse */}
                    {(i + 1) % 5 === 0 && (
                       <div className="text-[10px] text-zinc-600 text-center mt-2 font-mono absolute top-full left-1/2 -translate-x-1/2">D{i+1}</div>
                    )}
                  </div>
                )
              })}
           </div>

           {/* Event Log Overlay */}
           <AnimatePresence>
             {simulationLog.length > 0 && (
               <div className="absolute top-4 right-4 flex flex-col gap-2 items-end pointer-events-none">
                 {simulationLog.map((log, i) => (
                   <motion.div
                     key={`${log.day}-${i}`}
                     initial={{ opacity: 0, x: 20, scale: 0.9 }}
                     animate={{ opacity: 1, x: 0, scale: 1 }}
                     exit={{ opacity: 0, y: -20 }}
                     className={`
                       px-4 py-2 rounded-lg border shadow-lg backdrop-blur-md text-xs font-bold flex items-center gap-2
                       ${log.type === 'good' ? 'bg-green-500/10 border-green-500/20 text-green-400' : 'bg-zinc-800/80 border-zinc-700 text-zinc-300'}
                     `}
                   >
                     {log.type === 'good' && <CheckCircle2 className="w-3 h-3" />}
                     Day {log.day}: {log.message}
                   </motion.div>
                 ))}
               </div>
             )}
           </AnimatePresence>

           {!isSimulating && simulatedData.length === 0 && (
             <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px] z-0">
                <div className="text-zinc-500 text-sm font-mono bg-black/50 px-4 py-2 rounded-lg border border-zinc-800">
                   Ready to simulate...
                </div>
             </div>
           )}
        </div>
      </div>
    </div>
  )
}
