'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DollarSign, TrendingUp, Plane, Briefcase, Coffee, Crown, Play, RotateCcw, Lock, Unlock, Zap } from 'lucide-react'
import NumberTicker from '@/components/magicui/number-ticker'

export default function RevenueCalculator() {
  const [followers, setFollowers] = useState(50000)
  const [niche, setNiche] = useState<'Lifestyle' | 'Tech' | 'Adult'>('Lifestyle')
  const [isSimulating, setIsSimulating] = useState(false)
  const [currentWeek, setCurrentWeek] = useState(0)
  const [weeklyRevenue, setWeeklyRevenue] = useState(0)
  const [totalEarned, setTotalEarned] = useState(0)
  const [unlockedStreams, setUnlockedStreams] = useState<string[]>([])
  const [logs, setLogs] = useState<string[]>([])

  const nicheMultipliers = {
    'Lifestyle': 1.0, // Baseline
    'Tech': 1.8, // Higher CPM/Affiliate
    'Adult': 3.5 // Fanvue/OF model - High but realistic
  }

  const runSimulation = async () => {
    if (isSimulating) return
    setIsSimulating(true)
    setLogs([])
    setUnlockedStreams([])
    setTotalEarned(0)
    setWeeklyRevenue(0)

    let currentRev = 0
    let currentFollowersSim = 500 // Realistic starting point for a "new" but active account
    const growthRate = 0.15 // 15% week-over-week (Aggressive but possible with viral hits)
    
    const totalWeeks = 12
    
    for (let i = 1; i <= totalWeeks; i++) {
      setCurrentWeek(i)
      await new Promise(r => setTimeout(r, 150))
      
      // Growth: Accelerated week-over-week growth
      // Start small but compound fast
      currentFollowersSim = Math.round(currentFollowersSim * (1 + growthRate))

      // Revenue Streams Logic
      // Based on typical creator economy metrics (RPM, conversion rates)
      let streamRev = 0
      const newStreams: string[] = []
      
      // 1. Affiliate (Unlocks at 1k - often realistic start)
      if (currentFollowersSim > 1000) {
        if (!unlockedStreams.includes('Affiliate')) newStreams.push('Affiliate')
        // $10-$50/week initial affiliate income is common for micro-influencers
        const baseAffiliate = (currentFollowersSim / 1000) * 15 
        streamRev += baseAffiliate * nicheMultipliers[niche]
      }

      // 2. Digital Products / Fanvue (Unlocks at 3k)
      if (currentFollowersSim > 3000) {
        if (!unlockedStreams.includes('Digital Products')) newStreams.push('Digital Products')
        
        // 1-3% conversion rate on low ticket items ($27-$47) or subs ($10-$20)
        // Weekly revenue estimate
        const activeFollowers = currentFollowersSim * 0.2 // 20% active
        const buyers = activeFollowers * 0.01 // 1% of active buy
        const ticketPrice = niche === 'Adult' ? 15 : 37 // Monthly sub vs One-time
        
        let productRev = buyers * ticketPrice
        
        if (niche === 'Adult') {
           // Adult Niche Special: PPVs & Bundles
           // Top 10% of buyers spend 5x-10x more (Whales)
           const whales = buyers * 0.1
           const whaleSpend = 150 // $150 in PPVs/Bundles per whale per week
           productRev += whales * whaleSpend
           
           // Random PPV Blast event
           if (Math.random() > 0.7) {
              productRev += 500 // $500 PPV blast
              if (currentFollowersSim > 10000) productRev += 2000 // $2k blast for larger following
           }
        }
        
        streamRev += productRev
      }

      // 3. Brand Deals (Unlocks at 10k - Micro influencer status)
      if (currentFollowersSim > 10000) {
         if (!unlockedStreams.includes('Brand Deals')) newStreams.push('Brand Deals')
         // $100-$500 per deal at this size. Maybe 1 deal per week?
         const dealValue = 250 * nicheMultipliers[niche]
         streamRev += dealValue
      }

      // Random Boost (Viral Video leads to sales spike)
      if (Math.random() > 0.85) {
        streamRev *= 1.8
        const msg = niche === 'Adult' ? "🔥 Viral! Whale dropped $500 tip." : "🚀 Viral Reel! Sales spike."
        setLogs(prev => [msg, ...prev].slice(0, 3))
      }

      if (newStreams.length > 0) {
        setUnlockedStreams(prev => [...prev, ...newStreams])
        newStreams.forEach(s => setLogs(prev => [`🔓 Unlocked: ${s}`, ...prev].slice(0, 3)))
      }

      currentRev = Math.round(streamRev)
      setWeeklyRevenue(currentRev)
      setTotalEarned(prev => prev + currentRev)
    }
    setIsSimulating(false)
  }

  return (
    <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-3xl p-6 md:p-8 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500" />
      
      <div className="grid lg:grid-cols-12 gap-8">
        {/* CONTROLS */}
        <div className="lg:col-span-4 space-y-8">
           <div>
              <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/20 text-pink-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <DollarSign className="w-3 h-3" /> Income Simulator
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">AI Money Printer</h3>
              <p className="text-zinc-400 text-sm">
                Simulate the first 12 weeks of AI influencer growth and see how quickly revenue streams unlock.
              </p>
           </div>

           <div className="space-y-4 bg-black/20 p-6 rounded-2xl border border-white/5">
              <label className="text-sm font-medium text-zinc-300">Choose Niche</label>
              <div className="grid grid-cols-1 gap-2">
                {['Lifestyle', 'Tech', 'Adult'].map((n) => (
                  <button
                    key={n}
                    onClick={() => setNiche(n as any)}
                    disabled={isSimulating}
                    className={`p-3 rounded-xl text-left transition-all flex justify-between items-center ${
                      niche === n 
                      ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg' 
                      : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                    }`}
                  >
                    <span className="font-bold">{n}</span>
                    <span className="text-xs opacity-70">{n === 'Adult' ? 'High $$$' : n === 'Tech' ? 'Med $$' : 'Low $'}</span>
                  </button>
                ))}
              </div>
           </div>

           <button
             onClick={isSimulating ? undefined : runSimulation}
             disabled={isSimulating}
             className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
               isSimulating 
                 ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                 : 'bg-white text-black hover:bg-zinc-200 shadow-xl shadow-white/10'
             }`}
           >
             {isSimulating ? 'Simulating 12 Weeks...' : <><Play className="w-5 h-5" /> Start Simulation</>}
           </button>
        </div>

        {/* VISUALIZER */}
        <div className="lg:col-span-8 bg-black/40 border border-white/5 rounded-2xl p-8 relative min-h-[400px] flex flex-col justify-between">
           
           {/* Header Stats */}
           <div className="flex justify-between items-start mb-8">
              <div>
                 <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Current Week</p>
                 <div className="text-4xl font-black text-white font-mono">
                    {currentWeek === 0 ? "Start" : `Week ${currentWeek}`}
                 </div>
              </div>
              <div className="text-right">
                 <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Weekly Revenue</p>
                 <div className="text-5xl font-black text-green-400 font-mono tracking-tight">
                    $<NumberTicker value={weeklyRevenue} className="text-green-400" />
                 </div>
              </div>
           </div>

           {/* Stream Unlocks */}
           <div className="space-y-4 mb-8">
              <p className="text-zinc-500 text-xs uppercase tracking-widest">Revenue Streams</p>
              <div className="grid grid-cols-3 gap-4">
                 {['Affiliate', 'Digital Products', 'Brand Deals'].map((stream) => {
                   const isUnlocked = unlockedStreams.includes(stream)
                   return (
                     <motion.div 
                       key={stream}
                       animate={{ 
                         scale: isUnlocked ? 1.05 : 1,
                         opacity: isUnlocked ? 1 : 0.3,
                         borderColor: isUnlocked ? 'rgba(168, 85, 247, 0.5)' : 'rgba(255,255,255,0.1)'
                       }}
                       className={`p-4 rounded-xl border bg-zinc-900/50 flex flex-col items-center justify-center text-center gap-2 transition-colors duration-500`}
                     >
                        {isUnlocked ? <Unlock className="w-6 h-6 text-purple-400" /> : <Lock className="w-6 h-6 text-zinc-600" />}
                        <span className={`text-xs font-bold ${isUnlocked ? 'text-white' : 'text-zinc-600'}`}>{stream}</span>
                     </motion.div>
                   )
                 })}
              </div>
           </div>

           {/* Total Year Stats */}
           <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 flex justify-between items-center">
              <div>
                 <p className="text-zinc-400 text-sm">Total Generated</p>
                 <p className="text-3xl font-bold text-white">${totalEarned.toLocaleString()}</p>
              </div>
              <div className="h-12 w-px bg-zinc-800 mx-4" />
              <div className="flex-1">
                 <p className="text-zinc-400 text-sm mb-2">Latest Events</p>
                 <div className="h-6 overflow-hidden relative">
                    <AnimatePresence mode="wait">
                       {logs.length > 0 && (
                         <motion.p
                           key={logs[0]}
                           initial={{ y: 20, opacity: 0 }}
                           animate={{ y: 0, opacity: 1 }}
                           exit={{ y: -20, opacity: 0 }}
                           className="text-sm text-pink-400 font-medium flex items-center gap-2 absolute w-full"
                         >
                           <Zap className="w-3 h-3" /> {logs[0]}
                         </motion.p>
                       )}
                    </AnimatePresence>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
