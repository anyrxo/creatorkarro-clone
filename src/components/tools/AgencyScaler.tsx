'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DollarSign, Users, Building } from 'lucide-react'

export default function AgencyScaler() {
  const [clients, setClients] = useState(5)
  const [retainer, setRetainer] = useState(2000)
  const [setupFee, setSetupFee] = useState(1500)
  
  // Revenue Logic
  const monthlyRecurring = clients * retainer
  const yearlyRecurring = monthlyRecurring * 12
  const oneTimeSetup = clients * setupFee // Assuming new clients per year for simplicity or just total value
  
  // Let's keep it simple: Total Annual Value of these clients
  const totalAnnualValue = yearlyRecurring + oneTimeSetup

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <Building className="w-3 h-3" /> Agency Simulator
        </div>
        <h3 className="text-2xl font-bold text-white">AI Agency Revenue Potential</h3>
        <p className="text-zinc-400 text-sm">Calculate the value of your automation agency.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Active Clients: <span className="text-white font-bold">{clients}</span></label>
            <input 
              type="range" 
              min="1" 
              max="20" 
              value={clients} 
              onChange={(e) => setClients(parseInt(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
            <div className="flex justify-between text-xs text-zinc-500 mt-1">
              <span>1 Client</span>
              <span>20 Clients</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Monthly Retainer: <span className="text-white font-bold">${retainer.toLocaleString()}</span></label>
            <input 
              type="range" 
              min="500" 
              max="10000" 
              step="500"
              value={retainer} 
              onChange={(e) => setRetainer(parseInt(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
             <div className="flex justify-between text-xs text-zinc-500 mt-1">
              <span>$500/mo</span>
              <span>$10k/mo</span>
            </div>
          </div>

           <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Setup Fee (One-time): <span className="text-white font-bold">${setupFee.toLocaleString()}</span></label>
            <input 
              type="range" 
              min="500" 
              max="5000" 
              step="500"
              value={setupFee} 
              onChange={(e) => setSetupFee(parseInt(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
            />
             <div className="flex justify-between text-xs text-zinc-500 mt-1">
              <span>$500</span>
              <span>$5k</span>
            </div>
          </div>
        </div>

        <div className="bg-black/50 rounded-2xl p-6 border border-white/5 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent pointer-events-none" />
          
          <p className="text-zinc-400 text-sm uppercase tracking-wider mb-2">Total Annual Revenue</p>
          <motion.div 
            key={totalAnnualValue}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl md:text-6xl font-black text-white mb-2"
          >
            ${Math.round(totalAnnualValue).toLocaleString()}
          </motion.div>
          <p className="text-sm text-orange-400 font-medium flex items-center justify-center gap-1">
             <Users className="w-4 h-4" /> With just {clients} clients
          </p>
          
          <div className="mt-6 pt-6 border-t border-white/5 space-y-2">
             <div className="flex justify-between text-xs">
                <span className="text-zinc-400">Monthly Recurring:</span>
                <span className="text-white font-bold">${monthlyRecurring.toLocaleString()}</span>
             </div>
              <div className="flex justify-between text-xs">
                <span className="text-zinc-400">Setup Fees:</span>
                <span className="text-white font-bold">${oneTimeSetup.toLocaleString()}</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

