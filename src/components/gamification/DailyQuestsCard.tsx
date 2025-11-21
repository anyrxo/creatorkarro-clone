'use client'

import { motion } from 'framer-motion'
import { UserQuest } from '@/lib/gamification'
import { CheckCircle2, Circle, Target } from 'lucide-react'

interface DailyQuestsCardProps {
    quests: UserQuest[]
}

export default function DailyQuestsCard({ quests }: DailyQuestsCardProps) {
    return (
        <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-500" />
                    Daily Quests
                </h3>
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider">
                    Resets in 12h
                </span>
            </div>

            <div className="space-y-4">
                {quests.map((uq, index) => (
                    <motion.div
                        key={uq.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-4 rounded-xl border transition-all duration-300 ${uq.is_completed
                                ? 'bg-blue-500/10 border-blue-500/20'
                                : 'bg-white/5 border-white/5 hover:bg-white/10'
                            }`}
                    >
                        <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                                {uq.is_completed ? (
                                    <CheckCircle2 className="w-5 h-5 text-blue-400" />
                                ) : (
                                    <Circle className="w-5 h-5 text-zinc-600" />
                                )}
                                <span className={`font-medium text-sm ${uq.is_completed ? 'text-blue-100' : 'text-zinc-300'}`}>
                                    {uq.quest?.title}
                                </span>
                            </div>
                            <span className="text-xs font-bold text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full">
                                {uq.quest?.xp_reward} XP
                            </span>
                        </div>

                        {/* Progress Bar */}
                        <div className="mt-3">
                            <div className="flex justify-between text-xs text-zinc-500 mb-1">
                                <span>Progress</span>
                                <span>{uq.progress} / {uq.quest?.target_count}</span>
                            </div>
                            <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${Math.min(100, (uq.progress / (uq.quest?.target_count || 1)) * 100)}%` }}
                                    className={`h-full rounded-full ${uq.is_completed ? 'bg-blue-500' : 'bg-zinc-600'}`}
                                />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
