'use client'

import { motion } from 'framer-motion'
import { getXPProgress, getXPForLevel, getLevelBadge } from '@/lib/gamification'
import { Sparkles } from 'lucide-react'

interface LevelProgressBarProps {
  currentXP: number
  currentLevel: number
}

export default function LevelProgressBar({ currentXP, currentLevel }: LevelProgressBarProps) {
  const progress = getXPProgress(currentXP, currentLevel)
  const badge = getLevelBadge(currentLevel)

  return (
    <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
      {/* Level Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={	ext-4xl}>{badge.emoji}</div>
          <div>
            <div className="text-sm text-zinc-500 uppercase tracking-wider font-bold">
              {badge.title}
            </div>
            <div className="text-2xl font-bold text-white">
              Level {currentLevel}
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs text-zinc-500 uppercase tracking-wider font-bold">
            Total XP
          </div>
          <div className="text-lg font-bold text-purple-400">
            {currentXP.toLocaleString()}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-zinc-400 flex items-center gap-1">
            <Sparkles className="w-3 h-3" />
            Progress to Level {currentLevel + 1}
          </span>
          <span className="text-white font-bold">
            {Math.round(progress.percentage)}%
          </span>
        </div>
        
        {/* Animated Progress Bar */}
        <div className="h-3 w-full bg-zinc-800 rounded-full overflow-hidden relative">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: ${progress.percentage}% }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={h-full bg-gradient-to-r  relative}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          </motion.div>
        </div>

        {/* XP Numbers */}
        <div className="flex justify-between text-xs text-zinc-500">
          <span>{progress.current} XP</span>
          <span>{progress.required} XP needed</span>
        </div>
      </div>

      {/* Next Level Preview */}
      {currentLevel < 20 && (
        <div className="mt-4 pt-4 border-t border-white/5">
          <div className="flex items-center justify-between text-xs">
            <span className="text-zinc-500">Next: {getLevelBadge(currentLevel + 1).title}</span>
            <span className="text-zinc-600">{getLevelBadge(currentLevel + 1).emoji}</span>
          </div>
        </div>
      )}
    </div>
  )
}
