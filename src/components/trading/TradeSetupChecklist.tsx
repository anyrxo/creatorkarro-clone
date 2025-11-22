'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ClipboardCheck, TrendingUp, AlertTriangle, CheckCircle2, XCircle } from 'lucide-react'

interface ChecklistItem {
    id: string
    question: string
    checked: boolean
    weight: number
}

export default function TradeSetupChecklist() {
    const [checklist, setChecklist] = useState<ChecklistItem[]>([
        { id: '1', question: 'Is the overall trend in my direction?', checked: false, weight: 3 },
        { id: '2', question: 'Am I trading at a key support/resistance level?', checked: false, weight: 2 },
        { id: '3', question: 'Is there a clear pattern (double top/bottom, triangle, etc.)?', checked: false, weight: 2 },
        { id: '4', question: 'Is volume confirming the move?', checked: false, weight: 2 },
        { id: '5', question: 'Is my risk/reward ratio at least 2:1?', checked: false, weight: 3 },
        { id: '6', question: 'Can I clearly define my stop loss?', checked: false, weight: 3 },
        { id: '7', question: 'Am I trading at optimal time (high volume session)?', checked: false, weight: 1 },
        { id: '8', question: 'Have I checked for upcoming news events?', checked: false, weight: 2 },
        { id: '9', question: 'Am I calm and emotionally neutral?', checked: false, weight: 2 },
        { id: '10', question: 'Does this setup match my trading plan?', checked: false, weight: 2 }
    ])

    const toggleItem = (id: string) => {
        setChecklist(checklist.map(item =>
            item.id === id ? { ...item, checked: !item.checked } : item
        ))
    }

    const reset = () => {
        setChecklist(checklist.map(item => ({ ...item, checked: false })))
    }

    const totalWeight = checklist.reduce((sum, item) => sum + item.weight, 0)
    const score = checklist.reduce((sum, item) => sum + (item.checked ? item.weight : 0), 0)
    const percentage = Math.round((score / totalWeight) * 100)

    const getRecommendation = () => {
        if (percentage >= 80) return { text: 'Excellent Setup - Take the Trade!', color: 'green', icon: CheckCircle2 }
        if (percentage >= 60) return { text: 'Good Setup - Consider Taking', color: 'blue', icon: TrendingUp }
        if (percentage >= 40) return { text: 'Marginal Setup - Be Cautious', color: 'amber', icon: AlertTriangle }
        return { text: 'Poor Setup - Skip This Trade', color: 'red', icon: XCircle }
    }

    const recommendation = getRecommendation()

    return (
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <ClipboardCheck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white">Trade Setup Checklist</h2>
                        <p className="text-sm text-zinc-500">Score your setup before entering</p>
                    </div>
                </div>
                <button
                    onClick={reset}
                    className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 border border-white/10 rounded-lg text-white font-medium text-sm transition-all"
                >
                    Reset
                </button>
            </div>

            {/* Score Display */}
            <div className="mb-6">
                <div className="relative h-8 bg-zinc-900 rounded-full overflow-hidden border border-white/10">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        className={`h-full bg-gradient-to-r ${percentage >= 80 ? 'from-green-500 to-emerald-500' :
                                percentage >= 60 ? 'from-blue-500 to-cyan-500' :
                                    percentage >= 40 ? 'from-amber-500 to-orange-500' :
                                        'from-red-500 to-orange-500'
                            }`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-sm font-bold text-white drop-shadow-lg">
                            {percentage}% Setup Score
                        </span>
                    </div>
                </div>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3 mb-6">
                {checklist.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => toggleItem(item.id)}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${item.checked
                                ? 'bg-green-500/10 border-green-500/30 hover:bg-green-500/20'
                                : 'bg-black/30 border-white/10 hover:bg-black/40'
                            }`}
                    >
                        <div className="flex items-start gap-3">
                            <div className={`w-6 h-6 rounded flex items-center justify-center flex-shrink-0 transition-all ${item.checked
                                    ? 'bg-green-500'
                                    : 'bg-zinc-700 border border-white/20'
                                }`}>
                                {item.checked && <CheckCircle2 className="w-4 h-4 text-white" />}
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center justify-between">
                                    <span className={`text-sm ${item.checked ? 'text-white font-medium' : 'text-zinc-300'}`}>
                                        {item.question}
                                    </span>
                                    <div className="flex items-center gap-1">
                                        {[...Array(item.weight)].map((_, i) => (
                                            <div key={i} className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Recommendation */}
            <AnimatePresence mode="wait">
                {percentage > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`p-6 rounded-xl border ${recommendation.color === 'green' ? 'bg-green-500/10 border-green-500/30' :
                                recommendation.color === 'blue' ? 'bg-blue-500/10 border-blue-500/30' :
                                    recommendation.color === 'amber' ? 'bg-amber-500/10 border-amber-500/30' :
                                        'bg-red-500/10 border-red-500/30'
                            }`}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <recommendation.icon className={`w-8 h-8 ${recommendation.color === 'green' ? 'text-green-400' :
                                    recommendation.color === 'blue' ? 'text-blue-400' :
                                        recommendation.color === 'amber' ? 'text-amber-400' :
                                            'text-red-400'
                                }`} />
                            <div>
                                <div className={`text-xl font-bold ${recommendation.color === 'green' ? 'text-green-400' :
                                        recommendation.color === 'blue' ? 'text-blue-400' :
                                            recommendation.color === 'amber' ? 'text-amber-400' :
                                                'text-red-400'
                                    }`}>
                                    {recommendation.text}
                                </div>
                                <div className="text-sm text-zinc-400">
                                    Score: {score}/{totalWeight} points ({percentage}%)
                                </div>
                            </div>
                        </div>

                        <div className="text-sm text-zinc-300">
                            {percentage >= 80 && (
                                "This setup meets all major criteria. Execute according to your risk management plan."
                            )}
                            {percentage >= 60 && percentage < 80 && (
                                "This is a decent setup but not perfect. Consider reducing position size or waiting for better confirmation."
                            )}
                            {percentage >= 40 && percentage < 60 && (
                                "This setup is missing several key elements. Only take if you have strong conviction and reduce risk significantly."
                            )}
                            {percentage < 40 && (
                                "This setup doesn't meet our minimum criteria. Wait for better opportunities - there will always be another trade."
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Legend */}
            <div className="mt-4 p-4 bg-black/30 border border-white/10 rounded-lg">
                <div className="text-xs text-zinc-400">
                    <div className="flex items-center gap-2 mb-1">
                        <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        </div>
                        <span>= Critical (High Importance)</span>
                    </div>
                    <div className="flex items-center gap-2 mb-1">
                        <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        </div>
                        <span>= Important (Medium Importance)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        </div>
                        <span>= Helpful (Low Importance)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
