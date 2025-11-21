'use client'

import { motion } from 'framer-motion'
import { UserAchievement } from '@/lib/gamification'
import { Lock, Trophy } from 'lucide-react'

interface AchievementsListProps {
    achievements: UserAchievement[]
}

export default function AchievementsList({ achievements }: AchievementsListProps) {
    return (
        <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                    Achievements
                </h3>
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                    {achievements.length} Unlocked
                </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
                {achievements.length === 0 ? (
                    <div className="text-center py-8 text-zinc-500 text-sm">
                        No achievements unlocked yet. Keep learning!
                    </div>
                ) : (
                    achievements.map((ua, index) => (
                        <motion.div
                            key={ua.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group"
                        >
                            <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                                {ua.achievement?.icon || '🏆'}
                            </div>
                            <div className="flex-1">
                                <div className="font-bold text-white text-sm">
                                    {ua.achievement?.title}
                                </div>
                                <div className="text-xs text-zinc-400">
                                    {ua.achievement?.description}
                                </div>
                            </div>
                            <div className="text-xs font-bold text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded-full">
                                +{ua.achievement?.xp_reward} XP
                            </div>
                        </motion.div>
                    ))
                )}
            </div>
        </div>
    )
}
