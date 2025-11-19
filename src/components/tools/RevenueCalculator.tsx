'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DollarSign, TrendingUp, Plane, Briefcase, Coffee, Crown } from 'lucide-react'

export default function RevenueCalculator() {
  const [followers, setFollowers] = useState(50000)
  const [engagementRate, setEngagementRate] = useState(3) // %
  
  // Simple revenue logic
  const sponsorshipRevenue = (followers / 1000) * 10 * 4
  const productRevenue = (followers * (engagementRate / 100) * 0.05) * 27
  const affiliateRevenue = followers * 0.02 // $0.02 per follower
  const totalRevenue = sponsorshipRevenue + productRevenue + affiliateRevenue

  // Lifestyle Badge Logic
  const getLifestyle = (income: number) => {
    if (income < 5000) return { title: "Side Hustle", icon: Coffee, color: "text-zinc-400", gradient: "from-zinc-500 to-zinc-600" }
    if (income < 10000) return { title: "Full-Time Income", icon: Briefcase, color: "text-blue-400", gradient: "from-blue-500 to-cyan-500" }
    if (income < 50000) return { title: "Digital Nomad", icon: Plane, color: "text-purple-400", gradient: "from-purple-500 to-pink-500" }
    return { title: "Empire Builder", icon: Crown, color: "text-yellow-400", gradient: "from-yellow-400 to-orange-500" }
  }

  const lifestyle = getLifestyle(totalRevenue)
  const Icon = lifestyle.icon

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500" />
      
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">AI Income Potential</h3>
            <p className="text-zinc-400 text-sm">See what a single faceless account can generate.</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-zinc-300">Follower Count</label>
                <span className="text-white font-mono">{followers.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="10000" 
                max="500000" 
                step="10000"
                value={followers} 
                onChange={(e) => setFollowers(parseInt(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-pink-500"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-medium text-zinc-300">Engagement Rate</label>
                <span className="text-white font-mono">{engagementRate}%</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="10" 
                step="0.5"
                value={engagementRate} 
                onChange={(e) => setEngagementRate(parseFloat(e.target.value))}
                className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-pink-500"
              />
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-800">
             <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-4">Revenue Breakdown</h4>
             <div className="space-y-3">
               <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <div className="w-2 h-2 rounded-full bg-blue-500" /> Sponsorships
                  </div>
                  <span className="text-white font-mono">${Math.round(sponsorshipRevenue).toLocaleString()}</span>
               </div>
               <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <div className="w-2 h-2 rounded-full bg-pink-500" /> Digital Products
                  </div>
                  <span className="text-white font-mono">${Math.round(productRevenue).toLocaleString()}</span>
               </div>
               <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-zinc-400">
                    <div className="w-2 h-2 rounded-full bg-purple-500" /> Affiliate
                  </div>
                  <span className="text-white font-mono">${Math.round(affiliateRevenue).toLocaleString()}</span>
               </div>
             </div>
          </div>
        </div>

        <div className="bg-black/40 border border-white/5 rounded-2xl p-8 flex flex-col items-center justify-center text-center relative">
           <motion.div 
             className={`absolute inset-0 bg-gradient-to-br ${lifestyle.gradient} opacity-5`} 
             animate={{ opacity: [0.05, 0.1, 0.05] }}
             transition={{ duration: 3, repeat: Infinity }}
           />
           
           <motion.div 
             key={lifestyle.title}
             initial={{ scale: 0.8, opacity: 0 }}
             animate={{ scale: 1, opacity: 1 }}
             className={`mb-6 p-4 rounded-full bg-zinc-900 border border-zinc-800 ${lifestyle.color}`}
           >
             <Icon className="w-8 h-8" />
           </motion.div>

           <p className="text-zinc-500 text-xs uppercase tracking-widest mb-2">Monthly Profit</p>
           <motion.div 
              key={totalRevenue}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight"
            >
              ${Math.round(totalRevenue).toLocaleString()}
            </motion.div>

            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/5 border border-white/10 ${lifestyle.color}`}>
               <span>Unlocked: {lifestyle.title}</span>
            </div>

            <p className="text-[10px] text-zinc-600 mt-8 max-w-xs">
              *Based on conservative industry averages. Top performers earn 3-5x more.
            </p>
        </div>
      </div>
    </div>
  )
}
