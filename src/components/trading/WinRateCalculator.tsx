'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, TrendingDown, Target, DollarSign } from 'lucide-react'

export default function WinRateCalculator() {
    const [totalTrades, setTotalTrades] = useState('')
    const [winningTrades, setWinningTrades] = useState('')
    const [totalWinAmount, setTotalWinAmount] = useState('')
    const [totalLossAmount, setTotalLossAmount] = useState('')
    const [result, setResult] = useState<any>(null)

    const calculate = () => {
        const total = parseInt(totalTrades)
        const wins = parseInt(winningTrades)
        const winAmount = parseFloat(totalWinAmount)
        const lossAmount = parseFloat(totalLossAmount)

        if (!total || !wins || !winAmount || !lossAmount) return

        const losses = total - wins
        const winRate = (wins / total) * 100
        const avgWin = winAmount / wins
        const avgLoss = lossAmount / losses
        const profitFactor = winAmount / lossAmount
        const netProfit = winAmount - lossAmount
        const expectancy = ((winRate / 100) * avgWin) - ((1 - winRate / 100) * avgLoss)

        const isProfitable = profitFactor > 1

        setResult({
            winRate: winRate.toFixed(1),
            profitFactor: profitFactor.toFixed(2),
            avgWin: avgWin.toFixed(2),
            avgLoss: avgLoss.toFixed(2),
            netProfit: netProfit.toFixed(2),
            expectancy: expectancy.toFixed(2),
            isProfitable,
            losses
        })
    }

    return (
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">Win Rate & Profit Factor</h2>
                    <p className="text-sm text-zinc-500">Analyze your trading performance</p>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                        Total Trades
                    </label>
                    <input
                        type="number"
                        value={totalTrades}
                        onChange={(e) => setTotalTrades(e.target.value)}
                        placeholder="50"
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                        Winning Trades
                    </label>
                    <input
                        type="number"
                        value={winningTrades}
                        onChange={(e) => setWinningTrades(e.target.value)}
                        placeholder="30"
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-green-500 transition-colors"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                        Total Win Amount ($)
                    </label>
                    <input
                        type="number"
                        step="0.01"
                        value={totalWinAmount}
                        onChange={(e) => setTotalWinAmount(e.target.value)}
                        placeholder="15000"
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-green-500 transition-colors"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                        Total Loss Amount ($)
                    </label>
                    <input
                        type="number"
                        step="0.01"
                        value={totalLossAmount}
                        onChange={(e) => setTotalLossAmount(e.target.value)}
                        placeholder="8000"
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-red-500 transition-colors"
                    />
                </div>
            </div>

            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={calculate}
                className="w-full px-6 py-4 bg-gradient-to-r from-orange-600 to-amber-600 rounded-lg text-white font-bold text-lg mb-6"
            >
                Calculate Performance
            </motion.button>

            {result && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-6"
                >
                    {/* Status Banner */}
                    <div className={`p-6 rounded-xl border ${result.isProfitable ? 'bg-green-500/10 border-green-500/30' : 'bg-red-500/10 border-red-500/30'}`}>
                        <div className="flex items-center gap-3 mb-2">
                            {result.isProfitable ? (
                                <TrendingUp className="w-8 h-8 text-green-400" />
                            ) : (
                                <TrendingDown className="w-8 h-8 text-red-400" />
                            )}
                            <div>
                                <div className={`text-2xl font-bold ${result.isProfitable ? 'text-green-400' : 'text-red-400'}`}>
                                    {result.isProfitable ? 'Profitable System ✓' : 'Unprofitable System ✗'}
                                </div>
                                <div className="text-sm text-zinc-400">
                                    {result.isProfitable
                                        ? 'Your trading system is making money. Keep it up!'
                                        : 'Your trading system needs improvement. Review your strategy.'}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Stats */}
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-black/30 border border-white/10 rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <Target className="w-5 h-5 text-blue-400" />
                                <span className="text-sm text-zinc-400">Win Rate</span>
                            </div>
                            <div className="text-3xl font-bold text-white mb-1">{result.winRate}%</div>
                            <div className="text-xs text-zinc-500">{winningTrades}/{totalTrades} wins</div>
                        </div>

                        <div className="bg-black/30 border border-white/10 rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <BarChart3 className="w-5 h-5 text-orange-400" />
                                <span className="text-sm text-zinc-400">Profit Factor</span>
                            </div>
                            <div className={`text-3xl font-bold mb-1 ${result.isProfitable ? 'text-green-400' : 'text-red-400'}`}>
                                {result.profitFactor}
                            </div>
                            <div className="text-xs text-zinc-500">
                                {result.isProfitable ? 'Above 1.0 = Profitable' : 'Below 1.0 = Unprofitable'}
                            </div>
                        </div>

                        <div className="bg-black/30 border border-white/10 rounded-xl p-5">
                            <div className="flex items-center gap-2 mb-2">
                                <DollarSign className="w-5 h-5 text-purple-400" />
                                <span className="text-sm text-zinc-400">Net Profit</span>
                            </div>
                            <div className={`text-3xl font-bold mb-1 ${parseFloat(result.netProfit) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                ${result.netProfit}
                            </div>
                            <div className="text-xs text-zinc-500">Total P/L</div>
                        </div>
                    </div>

                    {/* Detailed Stats */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-zinc-400">Average Win</span>
                                <TrendingUp className="w-4 h-4 text-green-400" />
                            </div>
                            <div className="text-2xl font-bold text-green-400">${result.avgWin}</div>
                        </div>

                        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm text-zinc-400">Average Loss</span>
                                <TrendingDown className="w-4 h-4 text-red-400" />
                            </div>
                            <div className="text-2xl font-bold text-red-400">${result.avgLoss}</div>
                        </div>
                    </div>

                    {/* Expectancy */}
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                        <div className="mb-2">
                            <span className="text-sm text-zinc-400">Expectancy (Expected $ per trade)</span>
                        </div>
                        <div className={`text-3xl font-bold ${parseFloat(result.expectancy) >= 0 ? 'text-purple-400' : 'text-red-400'}`}>
                            {parseFloat(result.expectancy) >= 0 ? '+' : ''}{result.expectancy}
                        </div>
                        <div className="text-xs text-zinc-500 mt-1">
                            {parseFloat(result.expectancy) > 0
                                ? `You make $${result.expectancy} on average per trade`
                                : `You lose $${Math.abs(parseFloat(result.expectancy)).toFixed(2)} on average per trade`}
                        </div>
                    </div>

                    {/* Interpretation */}
                    <div className="bg-black/30 border border-white/10 rounded-lg p-5">
                        <h3 className="font-bold text-white mb-3">📊 What These Numbers Mean:</h3>
                        <div className="space-y-2 text-sm text-zinc-300">
                            <div>
                                <strong className="text-white">Win Rate ({result.winRate}%):</strong> You win {result.winRate}% of your trades.
                                {parseFloat(result.winRate) >= 60 && ' This is excellent!'}
                                {parseFloat(result.winRate) >= 50 && parseFloat(result.winRate) < 60 && ' This is good.'}
                                {parseFloat(result.winRate) < 50 && ' This needs improvement.'}
                            </div>
                            <div>
                                <strong className="text-white">Profit Factor ({result.profitFactor}):</strong> For every $1 you lose, you make ${result.profitFactor}.
                                {parseFloat(result.profitFactor) >= 2 && ' Excellent!'}
                                {parseFloat(result.profitFactor) >= 1.5 && parseFloat(result.profitFactor) < 2 && ' Good!'}
                                {parseFloat(result.profitFactor) >= 1 && parseFloat(result.profitFactor) < 1.5 && ' Barely profitable.'}
                                {parseFloat(result.profitFactor) < 1 && ' Not profitable.'}
                            </div>
                            <div>
                                <strong className="text-white">Expectancy:</strong> On average, you {parseFloat(result.expectancy) >= 0 ? 'make' : 'lose'} ${Math.abs(parseFloat(result.expectancy)).toFixed(2)} per trade.
                                {parseFloat(result.expectancy) > 0 && ' Keep trading this system!'}
                                {parseFloat(result.expectancy) <= 0 && ' Stop trading and fix your strategy.'}
                            </div>
                        </div>
                    </div>

                    {/* Recommendations */}
                    <div className={`p-5 rounded-lg border ${result.isProfitable ? 'bg-blue-500/10 border-blue-500/30' : 'bg-amber-500/10 border-amber-500/30'}`}>
                        <h3 className="font-bold text-white mb-2">💡 Recommendations:</h3>
                        <div className="text-sm text-zinc-300">
                            {result.isProfitable ? (
                                <ul className="space-y-1">
                                    <li>✓ Your system is working - stay consistent</li>
                                    <li>✓ Consider increasing position size gradually</li>
                                    <li>✓ Journal winning trades to repeat patterns</li>
                                    <li>✓ Keep profit factor above 1.5 minimum</li>
                                </ul>
                            ) : (
                                <ul className="space-y-1">
                                    <li>⚠ Stop live trading immediately</li>
                                    <li>⚠ Review your strategy and risk management</li>
                                    <li>⚠ Practice on demo until profitable</li>
                                    <li>⚠ Work on improving win rate or R:R ratio</li>
                                </ul>
                            )}
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    )
}
