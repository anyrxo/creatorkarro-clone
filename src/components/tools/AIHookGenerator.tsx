'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Copy, RefreshCw, Lock, Crown, Zap, TrendingUp, Check } from 'lucide-react'
import { useUser } from '@clerk/nextjs'
import Link from 'next/link'

export default function AIHookGenerator() {
    const { user } = useUser()
    const [niche, setNiche] = useState('')
    const [hooks, setHooks] = useState<string[]>([])
    const [loading, setLoading] = useState(false)
    const [usageToday, setUsageToday] = useState(0)
    const [showLimitModal, setShowLimitModal] = useState(false)
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

    const FREE_DAILY_LIMIT = 5
    const hasAccess = false // TODO: Check if user has paid access from context
    const remainingUses = hasAccess ? 999 : Math.max(0, FREE_DAILY_LIMIT - usageToday)

    // Load usage from localStorage
    useEffect(() => {
        const today = new Date().toDateString()
        const stored = localStorage.getItem('hook_generator_usage')
        if (stored) {
            const data = JSON.parse(stored)
            if (data.date === today) {
                setUsageToday(data.count)
            } else {
                localStorage.setItem('hook_generator_usage', JSON.stringify({ date: today, count: 0 }))
                setUsageToday(0)
            }
        }
    }, [])

    const generateHooks = async () => {
        if (!hasAccess && usageToday >= FREE_DAILY_LIMIT) {
            setShowLimitModal(true)
            return
        }

        if (!niche.trim()) return

        setLoading(true)

        // Simulate API call (replace with actual AI integration)
        setTimeout(() => {
            const templates = [
                `Stop scrolling if you're a ${niche} creator who's stuck`,
                `The ${niche} strategy nobody talks about (but everyone uses)`,
                `I grew from 0 to 10K as a ${niche} creator using this`,
                `${niche} creators: You're doing it wrong (here's why)`,
                `The brutal truth about ${niche} that no one tells you`
            ]

            setHooks(templates)
            setLoading(false)

            // Update usage
            const newCount = usageToday + 1
            setUsageToday(newCount)
            const today = new Date().toDateString()
            localStorage.setItem('hook_generator_usage', JSON.stringify({ date: today, count: newCount }))
        }, 1500)
    }

    const copyToClipboard = (text: string, index: number) => {
        navigator.clipboard.writeText(text)
        setCopiedIndex(index)
        setTimeout(() => setCopiedIndex(null), 2000)
    }

    return (
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-white/10 rounded-2xl p-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                            <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-white">AI Hook Generator</h2>
                            <p className="text-sm text-zinc-500">Create viral hooks in seconds</p>
                        </div>
                    </div>
                </div>

                {/* Usage Counter */}
                <div className={`px-4 py-2 rounded-lg border ${remainingUses === 0
                        ? 'bg-red-500/10 border-red-500/30'
                        : remainingUses <= 2
                            ? 'bg-orange-500/10 border-orange-500/30'
                            : 'bg-purple-500/10 border-purple-500/30'
                    }`}>
                    {hasAccess ? (
                        <div className="flex items-center gap-2">
                            <Crown className="w-4 h-4 text-yellow-400" />
                            <span className="text-sm font-medium text-white">Unlimited</span>
                        </div>
                    ) : (
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white">{remainingUses}</div>
                            <div className="text-xs text-zinc-400">hooks left today</div>
                        </div>
                    )}
                </div>
            </div>

            {/* Input */}
            <div className="mb-6">
                <label className="block text-sm font-medium text-zinc-300 mb-2">
                    What&apos;s your niche?
                </label>
                <div className="flex gap-3">
                    <input
                        type="text"
                        value={niche}
                        onChange={(e) => setNiche(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && generateHooks()}
                        placeholder="e.g., fitness, AI art, travel vlogging..."
                        className="flex-1 px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={generateHooks}
                        disabled={loading || !niche.trim()}
                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                        {loading ? (
                            <>
                                <RefreshCw className="w-4 h-4 animate-spin" />
                                Generating...
                            </>
                        ) : (
                            <>
                                <Zap className="w-4 h-4" />
                                Generate
                            </>
                        )}
                    </motion.button>
                </div>
            </div>

            {/* Generated Hooks */}
            <AnimatePresence>
                {hooks.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="space-y-3"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-bold text-white">Your Viral Hooks:</h3>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                onClick={generateHooks}
                                className="text-sm text-purple-400 hover:text-purple-300 flex items-center gap-2"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Regenerate
                            </motion.button>
                        </div>

                        {hooks.map((hook, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-black/30 border border-white/10 rounded-lg p-4 hover:border-purple-500/30 transition-all"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <TrendingUp className="w-4 h-4 text-green-400" />
                                            <span className="text-xs text-green-400 font-medium">High Engagement Potential</span>
                                        </div>
                                        <p className="text-white leading-relaxed">{hook}</p>
                                    </div>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => copyToClipboard(hook, index)}
                                        className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
                                    >
                                        {copiedIndex === index ? (
                                            <Check className="w-4 h-4 text-green-400" />
                                        ) : (
                                            <Copy className="w-4 h-4 text-zinc-400" />
                                        )}
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Premium Teaser */}
            {!hasAccess && hooks.length > 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg"
                >
                    <div className="flex items-start gap-3">
                        <Crown className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                        <div className="flex-1">
                            <h4 className="font-bold text-white mb-1">Want More Power?</h4>
                            <p className="text-sm text-zinc-400 mb-3">
                                Premium users get unlimited hooks, hook analyzer, and 10+ variations per hook
                            </p>
                            <Link href="/redeem">
                                <button className="text-sm font-medium text-purple-400 hover:text-purple-300 transition-colors">
                                    Upgrade Now →
                                </button>
                            </Link>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Limit Reached Modal */}
            <AnimatePresence>
                {showLimitModal && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                        onClick={() => setShowLimitModal(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.95, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="max-w-md w-full bg-gradient-to-br from-zinc-900 to-zinc-800 border border-white/20 rounded-2xl p-8"
                        >
                            <div className="text-center mb-6">
                                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center">
                                    <Lock className="w-10 h-10 text-purple-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Daily Limit Reached</h3>
                                <p className="text-zinc-400">
                                    You&apos;ve used all {FREE_DAILY_LIMIT} hooks today! Come back tomorrow or upgrade for unlimited access.
                                </p>
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="flex items-center gap-3 text-sm">
                                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                                    <span className="text-zinc-300">Unlimited hook generation</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                                    <span className="text-zinc-300">Hook analyzer & optimizer</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                                    <span className="text-zinc-300">10+ variations per hook</span>
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => setShowLimitModal(false)}
                                    className="flex-1 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-medium transition-all"
                                >
                                    Maybe Later
                                </button>
                                <Link href="/redeem" className="flex-1">
                                    <button className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-bold">
                                        Upgrade Now
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
