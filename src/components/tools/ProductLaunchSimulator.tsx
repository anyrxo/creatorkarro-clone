'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DollarSign, Rocket, Users, Filter, MousePointerClick, Bell, Mail, ShoppingCart, CheckCircle2, AlertCircle } from 'lucide-react'
import NumberTicker from '@/components/magicui/number-ticker'

export default function ProductLaunchSimulator() {
  const [productPrice, setProductPrice] = useState(47)
  const [audienceSize, setAudienceSize] = useState(1000)
  const [conversionRate, setConversionRate] = useState(2.5) // %
  
  const [isLaunching, setIsLaunching] = useState(false)
  const [launchProgress, setLaunchProgress] = useState(0) // 0-100
  const [currentRevenue, setCurrentRevenue] = useState(0)
  const [salesCount, setSalesCount] = useState(0)
  const [events, setEvents] = useState<string[]>([])

  const runLaunch = async () => {
    if (isLaunching) return
    setIsLaunching(true)
    setLaunchProgress(0)
    setCurrentRevenue(0)
    setSalesCount(0)
    setEvents([])

    const duration = 2500 // 2.5 seconds simulation
    const steps = 50
    const interval = duration / steps
    
    // Total potential sales
    const totalSales = Math.round(audienceSize * (conversionRate / 100))
    let currentSales = 0

    for (let i = 0; i <= steps; i++) {
      await new Promise(r => setTimeout(r, interval))
      setLaunchProgress((i / steps) * 100)

      // Events based on progress
      if (i === 5) setEvents(prev => ["📧 Launch Email Sent (Open Rate: 42%)", ...prev].slice(0, 3))
      if (i === 20) setEvents(prev => ["🔥 High Traffic Alert!", ...prev].slice(0, 3))
      if (i === 40) setEvents(prev => ["⏰ Scarcity Email Sent (4h left)", ...prev].slice(0, 3))

      // Sales Curve (S-Curve ish)
      const progress = i / steps
      const salesNow = Math.floor(totalSales * (progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress))
      
      if (salesNow > currentSales) {
        const newSales = salesNow - currentSales
        currentSales = salesNow
        setSalesCount(currentSales)
        setCurrentRevenue(currentSales * productPrice)
      }
    }
    
    setEvents(prev => ["✅ Launch Complete", ...prev].slice(0, 3))
    setIsLaunching(false)
  }

  return (
    <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-3xl p-6 md:p-8 max-w-5xl mx-auto shadow-2xl shadow-green-900/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-600/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="grid lg:grid-cols-12 gap-8">
        {/* CONTROLS */}
        <div className="lg:col-span-4 space-y-8 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Rocket className="w-3 h-3" /> Launch Simulator
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Launch Math</h3>
            <p className="text-zinc-400 text-sm">
              Validate your numbers before you build. See the power of a tiny audience.
            </p>
          </div>

          <div className="space-y-6 bg-black/20 p-6 rounded-2xl border border-white/5">
             <div className="space-y-3">
                <div className="flex justify-between text-sm">
                   <label className="text-zinc-300 flex items-center gap-2">
                     <Users className="w-4 h-4 text-green-500" /> Audience
                   </label>
                   <span className="font-mono text-white">{audienceSize.toLocaleString()}</span>
                </div>
                <input 
                  type="range" min="100" max="10000" step="100" value={audienceSize} 
                  onChange={(e) => setAudienceSize(parseInt(e.target.value))}
                  disabled={isLaunching}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-green-500 disabled:opacity-50"
                />
             </div>

             <div className="space-y-3">
                <div className="flex justify-between text-sm">
                   <label className="text-zinc-300 flex items-center gap-2">
                     <DollarSign className="w-4 h-4 text-green-500" /> Price
                   </label>
                   <span className="font-mono text-white">${productPrice}</span>
                </div>
                <input 
                  type="range" min="19" max="497" step="10" value={productPrice} 
                  onChange={(e) => setProductPrice(parseInt(e.target.value))}
                  disabled={isLaunching}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-green-500 disabled:opacity-50"
                />
             </div>

             <div className="space-y-3">
                <div className="flex justify-between text-sm">
                   <label className="text-zinc-300 flex items-center gap-2">
                     <Filter className="w-4 h-4 text-green-500" /> Conv. Rate
                   </label>
                   <span className="font-mono text-white">{conversionRate}%</span>
                </div>
                <input 
                  type="range" min="0.5" max="8" step="0.5" value={conversionRate} 
                  onChange={(e) => setConversionRate(parseFloat(e.target.value))}
                  disabled={isLaunching}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-green-500 disabled:opacity-50"
                />
             </div>
          </div>

          <button 
            onClick={runLaunch}
            disabled={isLaunching}
            className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
              isLaunching
                ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                : 'bg-white text-black hover:bg-green-400 hover:text-black shadow-xl shadow-green-500/20'
            }`}
          >
            {isLaunching ? 'Launching...' : <><Rocket className="w-5 h-5" /> Simulate Launch</>}
          </button>
        </div>

        {/* VISUALIZER */}
        <div className="lg:col-span-8 bg-black/40 rounded-2xl border border-white/5 p-8 relative flex flex-col justify-between min-h-[400px]">
           {/* Top Stats */}
           <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800">
                 <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Total Revenue</p>
                 <div className="text-4xl md:text-5xl font-black text-green-400 tracking-tight">
                    $<NumberTicker value={currentRevenue} className="text-green-400" />
                 </div>
              </div>
              <div className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800">
                 <p className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Sales Count</p>
                 <div className="text-4xl md:text-5xl font-black text-white tracking-tight flex items-center gap-2">
                    <ShoppingCart className="w-8 h-8 text-zinc-600" />
                    <NumberTicker value={salesCount} className="text-white" />
                 </div>
              </div>
           </div>

           {/* Progress Bar */}
           <div className="mb-8">
              <div className="flex justify-between text-xs text-zinc-400 mb-2 uppercase font-bold">
                 <span>Launch Sequence</span>
                 <span>{Math.round(launchProgress)}%</span>
              </div>
              <div className="h-4 bg-zinc-800 rounded-full overflow-hidden">
                 <motion.div 
                   className="h-full bg-gradient-to-r from-green-600 to-emerald-400"
                   initial={{ width: 0 }}
                   animate={{ width: `${launchProgress}%` }}
                   transition={{ duration: 0.1 }}
                 />
              </div>
           </div>

           {/* Events Log */}
           <div className="bg-zinc-900/80 rounded-xl border border-zinc-800 p-4 h-48 overflow-hidden relative">
              <div className="absolute top-2 right-2 text-zinc-600">
                 <Bell className="w-4 h-4" />
              </div>
              <p className="text-xs text-zinc-500 uppercase tracking-widest mb-4">Live Notifications</p>
              <div className="space-y-3">
                 <AnimatePresence>
                    {events.map((event, i) => (
                       <motion.div
                         key={`${event}-${i}`}
                         initial={{ opacity: 0, x: -20 }}
                         animate={{ opacity: 1, x: 0 }}
                         exit={{ opacity: 0 }}
                         className="flex items-center gap-3 text-sm text-zinc-300 border-b border-zinc-800/50 pb-2"
                       >
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                          {event}
                       </motion.div>
                    ))}
                    {events.length === 0 && !isLaunching && (
                       <div className="text-zinc-600 text-sm italic">Waiting to launch...</div>
                    )}
                 </AnimatePresence>
              </div>
           </div>
        </div>
      </div>
    </div>
  )
}
