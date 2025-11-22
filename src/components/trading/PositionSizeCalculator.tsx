'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingUp, DollarSign, AlertTriangle } from 'lucide-react'

export default function PositionSizeCalculator() {
    const [accountSize, setAccountSize] = useState('')
    const [riskPercent, setRiskPercent] = useState('1')
    const [entryPrice, setEntryPrice] = useState('')
    const [stopLoss, setStopLoss] = useState('')
    const [result, setResult] = useState<any>(null)

    const calculate = () => {
        const account = parseFloat(accountSize)
        const risk = parseFloat(riskPercent)
        const entry = parseFloat(entryPrice)
        const stop = parseFloat(stopLoss)

        if (!account || !risk || !entry || !stop) return

        const riskAmount = (account * risk) / 100
        const pointsRisk = Math.abs(entry - stop)
        const positionSize = riskAmount / pointsRisk
        const maxLoss = riskAmount

        setResult({
            positionSize: positionSize.toFixed(2),
            maxLoss: maxLoss.toFixed(2),
            riskAmount: riskAmount.toFixed(2),
            pointsRisk: pointsRisk.toFixed(2),
            riskReward: '2:1', // Default, can be calculated with take profit
        })
    }

    return (
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">Position Size Calculator</h2>
                    <p className="text-sm text-zinc-500">Never risk more than you can afford to lose</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                {/* Account Size */}
                <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                        Account Size ($)
                    </label>
                    <input
                        type="number"
                        value={accountSize}
                        onChange={(e) => setAccountSize(e.target.value)}
                        placeholder="10000"
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-green-500 transition-colors"
                    />
                </div>

                {/* Risk Percent */}
                <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                        Risk Per Trade (%)
                    </label>
                    <select
                        value={riskPercent}
                        onChange={(e) => setRiskPercent(e.target.value)}
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-green-500 transition-colors"
                    >
                        <option value="0.5">0.5% (Conservative)</option>
                        <option value="1">1% (Recommended)</option>
                        <option value="2">2% (Aggressive)</option>
                        <option value="3">3% (Very Aggressive)</option>
                    </select>
                </div>

                {/* Entry Price */}
                <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                        Entry Price ($)
                    </label>
                    <input
                        type="number"
                        step="0.01"
                        value={entryPrice}
                        onChange={(e) => setEntryPrice(e.target.value)}
                        placeholder="50.00"
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-green-500 transition-colors"
                    />
                </div>

                {/* Stop Loss */}
                <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                        Stop Loss ($)
                    </label>
                    <input
                        type="number"
                        step="0.01"
                        value={stopLoss}
                        onChange={(e) => setStopLoss(e.target.value)}
                        placeholder="49.00"
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-green-500 transition-colors"
                    />
                </div>
            </div>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={calculate}
                className="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg text-white font-bold text-lg mb-6 hover:from-green-500 hover:to-emerald-500 transition-all"
            >
                Calculate Position Size
            </motion.button>

            {/* Results */}
            {result && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                >
                    <div className="bg-black/30 border border-green-500/20 rounded-xl p-6">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-green-500/10 rounded-lg p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <TrendingUp className="w-4 h-4 text-green-400" />
                                    <span className="text-sm text-zinc-400">Position Size</span>
                                </div>
                                <div className="text-3xl font-bold text-white">{result.positionSize}</div>
                                <div className="text-xs text-zinc-500">contracts/shares</div>
                            </div>

                            <div className="bg-red-500/10 rounded-lg p-4">
                                <div className="flex items-center gap-2 mb-2">
                                    <AlertTriangle className="w-4 h-4 text-red-400" />
                                    <span className="text-sm text-zinc-400">Max Loss</span>
                                </div>
                                <div className="text-3xl font-bold text-white">${result.maxLoss}</div>
                                <div className="text-xs text-zinc-500">{riskPercent}% of account</div>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-white/10">
                            <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                    <span className="text-zinc-500">Risk Amount:</span>
                                    <span className="text-white font-bold ml-2">${result.riskAmount}</span>
                                </div>
                                <div>
                                    <span className="text-zinc-500">Points at Risk:</span>
                                    <span className="text-white font-bold ml-2">{result.pointsRisk}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Warning */}
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                        <div className="text-sm text-amber-200">
                            <strong>Risk Management Rule:</strong> Never risk more than 1-2% of your account on a single trade. This protects you from catastrophic losses.
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    )
}
