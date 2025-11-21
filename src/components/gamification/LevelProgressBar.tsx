'use client'

import { motion } from 'framer-motion'
import { Trophy } from 'lucide-react'
import { getXPProgress, getLevelBadge } from '@/lib/gamification'

interface LevelProgressBarProps {
  currentLevel: number
  currentXP: number
  animate?: boolean
}

export default function LevelProgressBar({ currentLevel, currentXP, animate = true }: LevelProgressBarProps) {
  const { percentage, current, required } = getXPProgress(currentXP, currentLevel)
  const badge = getLevelBadge(currentLevel)

  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 20 } : {}}
      animate={animate ? { opacity: 1, y: 0 } : {}}
      className="relative overflow-hidden bg-zinc-900/50 border border-white/5 rounded-2xl p-6 group hover:border-white/10 transition-all duration-300"
    >
      {/* Gradient Glow */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${badge.color}`} />

      {/* Level Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-4xl">{badge.emoji}</div>
          <div>
            <div className="text-sm text-zinc-500 uppercase tracking-wider font-bold">
              {badge.title}
            </div>
            <div className="text-2xl font-black text-white">
              Level {currentLevel}
            </div>
          </div>
        </div>
        <Trophy className="w-6 h-6 text-zinc-600 group-hover:text-zinc-500 transition-colors" />
      </div>

      {/* Progress Bar */}
      <div className="relative">
        <div className="flex items-center justify-between text-xs text-zinc-500 mb-2">
          <span className="font-bold">{Math.floor(current)} XP</span>
          <span className="font-bold">{Math.floor(required)} XP to next level</span>
        </div>
        <div className="h-3 bg-zinc-800/50 rounded-full overflow-hidden border border-white/5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className={`h-full bg-gradient-to-r ${badge.color} relative`}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
