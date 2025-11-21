'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface StatsCardProps {
    icon: LucideIcon
    title: string
    value: string | number
    subtitle?: string
    gradient: string
    animate?: boolean
    delay?: number
}

export default function StatsCard({
    icon: Icon,
    title,
    value,
    subtitle,
    gradient,
    animate = true,
    delay = 0
}: StatsCardProps) {
    return (
        <motion.div
            initial={animate ? { opacity: 0, scale: 0.9 } : {}}
            animate={animate ? { opacity: 1, scale: 1 } : {}}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, delay }}
            className="relative overflow-hidden bg-zinc-900/50 border border-white/5 rounded-2xl p-6 group hover:border-white/10 transition-all duration-300"
        >
            {/* Gradient Glow */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${gradient}`} />

            {/* Icon */}
            <div className={`relative p-3 rounded-xl bg-gradient-to-br ${gradient} bg-opacity-10 w-fit mb-4`}>
                <Icon className="w-6 h-6 text-white" />
            </div>

            {/* Content */}
            <div className="relative">
                <div className="text-sm text-zinc-500 uppercase tracking-wider font-bold mb-1">
                    {title}
                </div>
                <div className="text-3xl font-black text-white mb-1">
                    {value}
                </div>
                {subtitle && (
                    <div className="text-xs text-zinc-600 font-medium">
                        {subtitle}
                    </div>
                )}
            </div>

            {/* Shine Effect */}
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-white/5 to-transparent rotate-45 group-hover:translate-x-full transition-transform duration-700" />
        </motion.div>
    )
}
