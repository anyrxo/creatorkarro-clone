'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Target, TrendingUp, AlertCircle, CheckCircle, XCircle } from 'lucide-react'

export default function RiskRewardCalculator() {
    const [entry, setEntry] = useState('')
    const [stopLoss, setStopLoss] = useState('')
    const [takeProfit, setTakeProfit] = useState('')
    const [result, setResult] = useState<any>(null)

    const calculate = () => {
        const entryPrice = parseFloat(entry)
        const stop = parseFloat(stopLoss)
        const target = parseFloat(takeProfit)

        if (!entryPrice || !stop || !target) return

        const isLong = target > entryPrice

        const risk = Math.abs(entryPrice - stop)
        const reward = Math.abs(target - entryPrice)
        const ratio = reward / risk

        // Determine if trade is worth taking
        const isWorthTaking = ratio >= 2

        setResult({
            risk: risk.toFixed(2),
            reward: reward.toFixed(2),
            ratio: ratio.toFixed(2),
            isWorthTaking,
            direction: isLong ? 'Long' : 'Short',
            riskPercent: ((risk / entryPrice) * 100).toFixed(2),
            rewardPercent: ((reward / entryPrice) * 100).toFixed(2)
        })
    }

    return (
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">Risk/Reward Calculator</h2>
                    <p className="text-sm text-zinc-500">Only take trades with 2:1 R/R minimum</p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                        Entry Price ($)
                    </label>
                    <input
                        type="number"
                        step="0.01"
                        value={entry}
                        onChange={(e) => setEntry(e.target.value)}
                        placeholder="15000.00"
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                        Stop Loss ($)
                    </label>
                    <input
                        type="number"
                        step="0.01"
                        value={stopLoss}
                        onChange={(e) => setStopLoss(e.target.value)}
                        placeholder="14950.00"
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500 transition-colors"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                        Take Profit ($)
                    </label>
                    <input
                        type="number"
                        step="0.01"
                        value={takeProfit}
                        onChange={(e) => setTakeProfit(e.target.value)}
                        placeholder="15100.00"
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-green-500 transition-colors"
                    />
                </div>
            </div>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={calculate}
                className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-bold text-lg mb-6"
            >
                Calculate Risk/Reward
            </motion.button>

            {result && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                >
                    {/* Main Result */}
                    <div className={`bg-gradient-to-r ${result.isWorthTaking ? 'from-green-500/20 to-emerald-500/20 border-green-500/30' : 'from-red-500/20 to-orange-500/20 border-red-500/30'} border rounded-xl p-6`}>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                {result.isWorthTaking ? (
                                    <CheckCircle className="w-8 h-8 text-green-400" />
                                ) : (
                                    <XCircle className="w-8 h-8 text-red-400" />
                                )}
                                <div>
                                    <div className="text-2xl font-bold text-white">
                                        {result.ratio}:1 Ratio
                                    </div>
                                    <div className={`text-sm font-medium ${result.isWorthTaking ? 'text-green-400' : 'text-red-400'}`}>
                                        {result.isWorthTaking ? '✓ Good Trade' : '✗ Skip This Trade'}
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-sm text-zinc-400">Direction</div>
                                <div className={`text-lg font-bold ${result.direction === 'Long' ? 'text-green-400' : 'text-red-400'}`}>
                                    {result.direction}
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-black/30 rounded-lg p-4">
                                <div className="text-sm text-zinc-400 mb-1">Risk</div>
                                <div className="text-2xl font-bold text-red-400">${result.risk}</div>
                                <div className="text-xs text-zinc-500">{result.riskPercent}% of entry</div>
                            </div>
                            <div className="bg-black/30 rounded-lg p-4">
                                <div className="text-sm text-zinc-400 mb-1">Reward</div>
                                <div className="text-2xl font-bold text-green-400">${result.reward}</div>
                                <div className="text-xs text-zinc-500">{result.rewardPercent}% of entry</div>
                            </div>
                        </div>
                    </div>

                    {/* Recommendation */}
                    <div className={`${result.isWorthTaking ? 'bg-green-500/10 border-green-500/30' : 'bg-amber-500/10 border-amber-500/30'} border rounded-lg p-4 flex items-start gap-3`}>
                        {result.isWorthTaking ? (
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        ) : (
                            <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        )}
                        <div className="text-sm">
                            {result.isWorthTaking ? (
                                <>
                                    <strong className="text-green-400">This trade meets our criteria.</strong>
                                    <p className="text-zinc-300 mt-1">
                                        With a {result.ratio}:1 risk/reward ratio, you&apos;d need to win only {(100 / (parseFloat(result.ratio) + 1)).toFixed(0)}% of trades like this to be profitable.
                                    </p>
                                </>
                            ) : (
                                <>
                                    <strong className="text-amber-400">Consider skipping this trade.</strong>
                                    <p className="text-zinc-300 mt-1">
                                        With a {result.ratio}:1 ratio, you&apos;d need to win {(100 / (parseFloat(result.ratio) + 1)).toFixed(0)}% of trades to break even. Look for better setups with at least 2:1 R/R.
                                    </p>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Quick Reference */}
                    <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                        <div className="text-sm font-bold text-white mb-3">Quick R/R Reference:</div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-zinc-400">1:1 = Need 50% win rate</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-zinc-400">2:1 = Need 33% win rate</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-zinc-400">3:1 = Need 25% win rate</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-zinc-400">4:1 = Need 20% win rate</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    )
}
