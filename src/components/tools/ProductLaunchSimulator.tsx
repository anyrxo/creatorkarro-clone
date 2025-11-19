'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DollarSign, Rocket, Users, Filter, MousePointerClick } from 'lucide-react'

export default function ProductLaunchSimulator() {
  const [productPrice, setProductPrice] = useState(47)
  const [audienceSize, setAudienceSize] = useState(1000)
  const [conversionRate, setConversionRate] = useState(2) // %
  const [isLaunching, setIsLaunching] = useState(false)
  const [currentRevenue, setCurrentRevenue] = useState(0)

  const targetRevenue = audienceSize * (conversionRate / 100) * productPrice
  
  // Funnel Metrics
  const clicks = Math.round(audienceSize * 0.4) // 40% CTR to landing page
  const sales = Math.round(clicks * (conversionRate / 100))

  useEffect(() => {
     if (isLaunching) {
        let start = 0
        const duration = 2000
        const interval = 20
        const steps = duration / interval
        const increment = targetRevenue / steps
        
        const timer = setInterval(() => {
           start += increment
           if (start >= targetRevenue) {
              setCurrentRevenue(targetRevenue)
              setIsLaunching(false)
              clearInterval(timer)
           } else {
              setCurrentRevenue(start)
           }
        }, interval)
        return () => clearInterval(timer)
     } else {
        setCurrentRevenue(targetRevenue)
     }
  }, [isLaunching, targetRevenue])

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-8">
        {/* LEFT: Controls */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Rocket className="w-3 h-3" /> Launch Simulator
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">The Launch Math</h3>
            <p className="text-zinc-400 text-sm">See how a small audience creates massive income.</p>
          </div>

          <div className="space-y-6">
             <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Audience Size</label>
                <input 
                  type="range" min="100" max="10000" value={audienceSize} 
                  onChange={(e) => setAudienceSize(parseInt(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
             </div>
             <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Product Price ($)</label>
                <input 
                  type="range" min="7" max="297" value={productPrice} 
                  onChange={(e) => setProductPrice(parseInt(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
             </div>
             <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Conversion Rate (%)</label>
                <input 
                  type="range" min="0.5" max="5" step="0.5" value={conversionRate} 
                  onChange={(e) => setConversionRate(parseFloat(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
             </div>

             <button 
               onClick={() => setIsLaunching(true)}
               className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-xl transition-all active:scale-95 flex items-center justify-center gap-2"
             >
               <Rocket className="w-4 h-4" /> Simulate Launch Day
             </button>
          </div>
        </div>

        {/* RIGHT: Visual Funnel */}
        <div className="lg:col-span-7 bg-black/40 rounded-2xl border border-white/5 p-6 relative flex flex-col justify-between">
           {/* Funnel Steps */}
           <div className="space-y-2 relative z-10">
              <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50">
                 <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-zinc-500" />
                    <span className="text-zinc-300 text-sm">Audience</span>
                 </div>
                 <span className="font-mono text-white">{audienceSize.toLocaleString()}</span>
              </div>
              
              <div className="flex justify-center"><div className="w-0.5 h-4 bg-zinc-700" /></div>

              <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50 w-[80%] mx-auto">
                 <div className="flex items-center gap-3">
                    <MousePointerClick className="w-5 h-5 text-zinc-500" />
                    <span className="text-zinc-300 text-sm">Clicks (40%)</span>
                 </div>
                 <span className="font-mono text-white">{clicks.toLocaleString()}</span>
              </div>

              <div className="flex justify-center"><div className="w-0.5 h-4 bg-zinc-700" /></div>

              <div className="flex items-center justify-between p-3 bg-zinc-800/50 rounded-lg border border-zinc-700/50 w-[60%] mx-auto shadow-[0_0_15px_rgba(74,222,128,0.1)]">
                 <div className="flex items-center gap-3">
                    <Filter className="w-5 h-5 text-green-500" />
                    <span className="text-green-400 text-sm font-bold">Sales</span>
                 </div>
                 <span className="font-mono text-green-400 font-bold">{sales.toLocaleString()}</span>
              </div>
           </div>

           <div className="mt-8 text-center">
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">Total Launch Revenue</p>
              <motion.div 
                className="text-5xl font-black text-white tracking-tight"
              >
                ${Math.round(currentRevenue).toLocaleString()}
              </motion.div>
           </div>
        </div>
      </div>
    </div>
  )
}
