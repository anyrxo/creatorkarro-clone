'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DollarSign, Users, Building, Clock, Briefcase } from 'lucide-react'

export default function AgencyScaler() {
  const [clients, setClients] = useState(5)
  const [retainer, setRetainer] = useState(2000)
  const [mode, setMode] = useState<'freelancer' | 'agency'>('freelancer')
  
  // Revenue Logic
  const monthlyRecurring = clients * retainer
  const yearlyRecurring = monthlyRecurring * 12
  
  // Work Logic
  // Freelancer: 5 hrs/week per client. Capped at 60 hrs/week total.
  // Agency: 1 hr/week per client (management). Uncapped scale.
  const hoursPerClient = mode === 'freelancer' ? 5 : 1
  const totalHours = clients * hoursPerClient
  const isOverworked = totalHours > 60 && mode === 'freelancer'
  
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
      <div className="grid lg:grid-cols-12 gap-8">
        {/* LEFT: Controls */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <Building className="w-3 h-3" /> Scale Simulator
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Freelancer vs Agency</h3>
            <p className="text-zinc-400 text-sm">See why selling time keeps you broke.</p>
          </div>

          <div className="flex bg-zinc-800 p-1 rounded-lg">
             <button 
               onClick={() => setMode('freelancer')}
               className={`flex-1 py-2 rounded-md text-sm font-bold transition-all ${mode === 'freelancer' ? 'bg-zinc-600 text-white' : 'text-zinc-400 hover:text-white'}`}
             >
               Freelancer (You)
             </button>
             <button 
               onClick={() => setMode('agency')}
               className={`flex-1 py-2 rounded-md text-sm font-bold transition-all ${mode === 'agency' ? 'bg-orange-600 text-white' : 'text-zinc-400 hover:text-white'}`}
             >
               Agency (System)
             </button>
          </div>

          <div className="space-y-6">
             <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Active Clients: <span className="text-white font-bold">{clients}</span></label>
                <input 
                  type="range" min="1" max="30" value={clients} 
                  onChange={(e) => setClients(parseInt(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
             </div>
             <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Monthly Retainer: <span className="text-white font-bold">${retainer.toLocaleString()}</span></label>
                <input 
                  type="range" min="1000" max="10000" step="500" value={retainer} 
                  onChange={(e) => setRetainer(parseInt(e.target.value))}
                  className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
             </div>
          </div>
        </div>

        {/* RIGHT: Visualizer */}
        <div className="lg:col-span-7 bg-black/40 rounded-2xl border border-white/5 p-6 relative flex flex-col justify-between">
           <div className="grid grid-cols-2 gap-4">
              <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50">
                 <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider mb-2">
                    <DollarSign className="w-4 h-4" /> Monthly
                 </div>
                 <div className="text-2xl font-bold text-white">${monthlyRecurring.toLocaleString()}</div>
              </div>
              <div className="bg-zinc-800/50 p-4 rounded-xl border border-zinc-700/50">
                 <div className="flex items-center gap-2 text-zinc-400 text-xs uppercase tracking-wider mb-2">
                    <Clock className="w-4 h-4" /> Hours/Week
                 </div>
                 <div className={`text-2xl font-bold ${isOverworked ? 'text-red-500' : 'text-white'}`}>
                    {totalHours}h
                 </div>
                 {isOverworked && <div className="text-[10px] text-red-400 mt-1">BURNOUT WARNING</div>}
              </div>
           </div>

           <div className="mt-8 text-center relative">
              {isOverworked ? (
                 <div className="bg-red-500/10 border border-red-500/50 p-4 rounded-xl">
                    <h4 className="text-red-400 font-bold mb-1">Scale Impossible</h4>
                    <p className="text-red-300/80 text-xs">You physically cannot work this much. You need the Agency System to scale past this point.</p>
                 </div>
              ) : (
                 <>
                    <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">Annual Run Rate</p>
                    <motion.div 
                      className="text-5xl font-black text-orange-500 tracking-tight"
                    >
                      ${Math.round(yearlyRecurring).toLocaleString()}
                    </motion.div>
                 </>
              )}
           </div>
        </div>
      </div>
    </div>
  )
}
