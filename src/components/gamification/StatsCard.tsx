'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface StatsCardProps {
  icon: LucideIcon
  label: string
  value: string | number
  gradient: string
  iconColor: string
  subtitle?: string
  animate?: boolean
}

export default function StatsCard({
  icon: Icon,
  label,
  value,
  gradient,
  iconColor,
  subtitle,
  animate = true
}: StatsCardProps) {
  return (
    <motion.div
      initial={animate ? { opacity: 0, scale: 0.9 } : {}}
      animate={animate ? { opacity: 1, scale: 1 } : {}}
      whileHover={{ scale: 1.02 }}
      className={elative overflow-hidden bg-zinc-900/50 border border-white/5 rounded-2xl p-6 group hover:border-white/10 transition-all duration-300}
    >
      {/* Gradient Glow */}
      <div className={bsolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br } />
      
      {/* Content */}
      <div className="relative z-10 flex items-center gap-4">
        {/* Icon */}
        <div className={p-3 rounded-xl bg-gradient-to-br  bg-opacity-10 group-hover:scale-110 transition-transform duration-300}>
          <Icon className={w-6 h-6 } />
        </div>

        {/* Stats */}
        <div className="flex-1">
          <div className="text-3xl font-bold text-white mb-1">
            {value}
          </div>
          <div className="text-xs text-zinc-500 uppercase font-bold tracking-wider">
            {label}
          </div>
          {subtitle && (
            <div className="text-xs text-zinc-600 mt-1">
              {subtitle}
            </div>
          )}
        </div>
      </div>

      {/* Shine effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>
    </motion.div>
  )
}
