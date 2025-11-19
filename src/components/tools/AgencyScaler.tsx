'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DollarSign, Users, Building, Clock, Briefcase, UserPlus, PhoneCall, CheckCircle2, AlertCircle, Play, RotateCcw } from 'lucide-react'
import NumberTicker from '@/components/magicui/number-ticker'

export default function AgencyScaler() {
  const [retainer, setRetainer] = useState(2000)
  const [mode, setMode] = useState<'freelancer' | 'agency'>('freelancer')
  const [isSimulating, setIsSimulating] = useState(false)
  const [stats, setStats] = useState({ leads: 0, calls: 0, clients: 0, revenue: 0 })
  const [events, setEvents] = useState<string[]>([])
  
  // Simulation Parameters
  const conversionRates = mode === 'freelancer' 
    ? { leadToCall: 0.05, callToClose: 0.2, outreachLimit: 20 } // 20 DMs/day
    : { leadToCall: 0.15, callToClose: 0.35, outreachLimit: 500 } // Ads + Setters

  const runSimulation = async () => {
    if (isSimulating) return
    setIsSimulating(true)
    setStats({ leads: 0, calls: 0, clients: 0, revenue: 0 })
    setEvents([])

    const days = 30
    const currentStats = { leads: 0, calls: 0, clients: 0, revenue: 0 }

    for (let i = 1; i <= days; i++) {
      await new Promise(r => setTimeout(r, 200))
      
      // Daily Outreach
      const dailyLeads = conversionRates.outreachLimit
      const dailyCalls = Math.floor(dailyLeads * conversionRates.leadToCall)
      const dailyCloses = Math.random() < (dailyCalls * conversionRates.callToClose) ? 1 : 0

      currentStats.leads += dailyLeads
      currentStats.calls += dailyCalls
      
      if (dailyCloses > 0) {
        currentStats.clients += dailyCloses
        currentStats.revenue += retainer
        setEvents(prev => [`🎉 New Client Signed! +$${retainer}`, ...prev].slice(0, 3))
      } else if (i % 5 === 0 && mode === 'freelancer') {
        setEvents(prev => [`😓 Exhausted from manual outreach...`, ...prev].slice(0, 3))
      } else if (i % 7 === 0 && mode === 'agency') {
        setEvents(prev => [`🤖 AI Setter qualified 5 leads`, ...prev].slice(0, 3))
      }

      setStats({...currentStats})
    }
    setIsSimulating(false)
  }

  return (
    <div className="bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-3xl p-6 md:p-8 max-w-5xl mx-auto shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-600/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="grid lg:grid-cols-12 gap-8">
        {/* CONTROLS */}
        <div className="lg:col-span-4 space-y-8 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 text-orange-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <Building className="w-3 h-3" /> Agency Simulator
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">Scale Your Agency</h3>
            <p className="text-zinc-400 text-sm">
              Compare grinding DMs manually vs building an automated client acquisition system.
            </p>
          </div>

          <div className="space-y-6 bg-black/20 p-6 rounded-2xl border border-white/5">
            <div className="flex bg-zinc-800 p-1 rounded-xl">
               <button 
                 onClick={() => setMode('freelancer')}
                 disabled={isSimulating}
                 className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${mode === 'freelancer' ? 'bg-zinc-600 text-white shadow-lg' : 'text-zinc-400 hover:text-white'}`}
               >
                 Freelancer
               </button>
               <button 
                 onClick={() => setMode('agency')}
                 disabled={isSimulating}
                 className={`flex-1 py-3 rounded-lg text-sm font-bold transition-all ${mode === 'agency' ? 'bg-orange-600 text-white shadow-lg' : 'text-zinc-400 hover:text-white'}`}
               >
                 Agency System
               </button>
            </div>

            <div className="space-y-3">
               <div className="flex justify-between text-sm">
                  <label className="text-zinc-300">Monthly Retainer</label>
                  <span className="font-mono text-white">${retainer.toLocaleString()}</span>
               </div>
               <input 
                 type="range" min="1000" max="10000" step="500" value={retainer} 
                 onChange={(e) => setRetainer(parseInt(e.target.value))}
                 disabled={isSimulating}
                 className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-orange-500 disabled:opacity-50"
               />
            </div>
          </div>

          <button 
            onClick={runSimulation}
            disabled={isSimulating}
            className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
              isSimulating
                ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                : 'bg-white text-black hover:bg-orange-400 hover:text-black shadow-xl shadow-orange-500/20'
            }`}
          >
            {isSimulating ? 'Simulating Month...' : <><Play className="w-5 h-5" /> Start Month</>}
          </button>
        </div>

        {/* VISUALIZER */}
        <div className="lg:col-span-8 bg-black/40 rounded-2xl border border-white/5 p-8 relative flex flex-col justify-between min-h-[400px]">
           {/* Pipeline Visualization */}
           <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800 relative overflow-hidden">
                 <div className="absolute bottom-0 left-0 w-full bg-blue-500/10 transition-all duration-300" style={{ height: `${Math.min((stats.leads / (mode === 'agency' ? 15000 : 600)) * 100, 100)}%` }} />
                 <div className="relative z-10">
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Leads Contacted</p>
                    <div className="text-2xl font-bold text-white"><NumberTicker value={stats.leads} /></div>
                    <p className="text-[10px] text-zinc-600 mt-2">
                      {mode === 'freelancer' ? 'Manual DMs' : 'Ads + AI Setters'}
                    </p>
                 </div>
              </div>
              <div className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800 relative overflow-hidden">
                 <div className="absolute bottom-0 left-0 w-full bg-purple-500/10 transition-all duration-300" style={{ height: `${Math.min((stats.calls / (stats.leads || 1)) * 100 * 5, 100)}%` }} />
                 <div className="relative z-10">
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Calls Booked</p>
                    <div className="text-2xl font-bold text-white"><NumberTicker value={stats.calls} /></div>
                 </div>
              </div>
              <div className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800 relative overflow-hidden">
                 <div className="absolute bottom-0 left-0 w-full bg-orange-500/10 transition-all duration-300" style={{ height: `${Math.min((stats.clients / 10) * 100, 100)}%` }} />
                 <div className="relative z-10">
                    <p className="text-xs text-zinc-500 uppercase tracking-wider mb-1">Clients Closed</p>
                    <div className="text-2xl font-bold text-orange-400"><NumberTicker value={stats.clients} className="text-orange-400" /></div>
                 </div>
              </div>
           </div>

           {/* Revenue Ticker */}
           <div className="text-center mb-8">
              <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">New Monthly Revenue Added</p>
              <div className="text-6xl font-black text-white tracking-tight">
                 $<NumberTicker value={stats.revenue} />
              </div>
              {mode === 'freelancer' && stats.revenue > 8000 && (
                 <div className="mt-4 inline-block bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                    ⚠️ Burnout Imminent: Can't fulfill this work
                 </div>
              )}
           </div>

           {/* Events */}
           <div className="h-32 overflow-hidden relative">
              <AnimatePresence mode="popLayout">
                 {events.map((event, i) => (
                    <motion.div
                      key={`${event}-${i}`}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-sm text-zinc-300 flex items-center gap-2 mb-2 justify-center"
                    >
                       {event.includes('New Client') ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <AlertCircle className="w-4 h-4 text-zinc-600" />}
                       {event}
                    </motion.div>
                 ))}
              </AnimatePresence>
              {events.length === 0 && !isSimulating && (
                 <div className="text-center text-zinc-600 text-sm italic pt-8">Run simulation to see results...</div>
              )}
           </div>
        </div>
      </div>
    </div>
  )
}
