'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { DollarSign, TrendingUp } from 'lucide-react'

export default function RevenueCalculator() {
  const [followers, setFollowers] = useState(50000)
  const [engagementRate, setEngagementRate] = useState(3) // %
  
  // Simple revenue logic
  // Sponsorships: $10 per 1000 followers (CPM) * 4 posts/mo
  const sponsorshipRevenue = (followers / 1000) * 10 * 4
  
  // Digital Products: 1% conversion rate * $27 product
  const productRevenue = (followers * (engagementRate / 100) * 0.05) * 27
  
  // Affiliate: Estimated 
  const affiliateRevenue = followers * 0.02 // $0.02 per follower

  const totalRevenue = sponsorshipRevenue + productRevenue + affiliateRevenue

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
          <DollarSign className="w-3 h-3" /> Income Simulator
        </div>
        <h3 className="text-2xl font-bold text-white">AI Influencer Revenue Potential</h3>
        <p className="text-zinc-400 text-sm">See how much a single AI model can generate.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Follower Count: <span className="text-white font-bold">{followers.toLocaleString()}</span></label>
            <input 
              type="range" 
              min="10000" 
              max="500000" 
              step="10000"
              value={followers} 
              onChange={(e) => setFollowers(parseInt(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
            <div className="flex justify-between text-xs text-zinc-500 mt-1">
              <span>10k</span>
              <span>500k</span>
            </div>
          </div>

           <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">Engagement Rate: <span className="text-white font-bold">{engagementRate}%</span></label>
            <input 
              type="range" 
              min="1" 
              max="10" 
              step="0.5"
              value={engagementRate} 
              onChange={(e) => setEngagementRate(parseFloat(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-green-500"
            />
             <div className="flex justify-between text-xs text-zinc-500 mt-1">
              <span>Low (1%)</span>
              <span>Viral (10%)</span>
            </div>
          </div>
        </div>

        <div className="bg-black/50 rounded-2xl p-6 border border-white/5 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent pointer-events-none" />
          
          <p className="text-zinc-400 text-sm uppercase tracking-wider mb-2">Est. Monthly Income</p>
          <motion.div 
            key={totalRevenue}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-5xl md:text-6xl font-black text-white mb-2"
          >
            ${Math.round(totalRevenue).toLocaleString()}
          </motion.div>
          <p className="text-sm text-green-400 font-medium flex items-center justify-center gap-1">
             <TrendingUp className="w-4 h-4" /> Zero Face, 100% Profit
          </p>
          
          <div className="mt-6 pt-6 border-t border-white/5 space-y-2">
             <div className="flex justify-between text-xs">
                <span className="text-zinc-400">Sponsorships:</span>
                <span className="text-white font-bold">${Math.round(sponsorshipRevenue).toLocaleString()}</span>
             </div>
             <div className="flex justify-between text-xs">
                <span className="text-zinc-400">Digital Products:</span>
                <span className="text-white font-bold">${Math.round(productRevenue).toLocaleString()}</span>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

