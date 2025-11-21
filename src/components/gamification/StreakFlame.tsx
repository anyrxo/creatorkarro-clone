'use client'

import { motion } from 'framer-motion'
import { getStreakEmoji } from '@/lib/gamification'
import { Flame } from 'lucide-react'

interface StreakFlameProps {
  streak: number
  isActive?: boolean
}

export default function StreakFlame({ streak, isActive = true }: StreakFlameProps) {
  const emoji = getStreakEmoji(streak)
  const scale = Math.min(2, 1 + (streak / 50))

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ 
        scale: isActive ? scale : 0.8,
        opacity: isActive ? 1 : 0.5
      }}
      whileHover={{ scale: scale * 1.1 }}
      transition={{ 
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      className="relative"
    >
      {/* Glow effect */}
      {isActive && streak >= 7 && (
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 blur-xl bg-orange-500/30 rounded-full"
        />
      )}
      
      {/* Emoji/Icon */}
      <div className="relative text-6xl filter drop-shadow-lg">
        {emoji}
      </div>

      {/* Streak milestone badges */}
      {streak >= 7 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-black"
        >
          {streak >= 100 ? '💯' : streak >= 30 ? '30' : '7'}
        </motion.div>
      )}
    </motion.div>
  )
}
