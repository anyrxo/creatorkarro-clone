'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { BookOpen, TrendingUp, TrendingDown, Download, Plus } from 'lucide-react'

interface TradeEntry {
    id: string
    date: string
    symbol: string
    direction: 'long' | 'short'
    entry: number
    exit: number
    size: number
    profitLoss: number
    notes: string
}

export default function TradingJournal() {
    const [trades, setTrades] = useState<TradeEntry[]>([])
    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState({
        symbol: '',
        direction: 'long' as 'long' | 'short',
        entry: '',
        exit: '',
        size: '',
        notes: ''
    })

    const addTrade = () => {
        const entry = parseFloat(formData.entry)
        const exit = parseFloat(formData.exit)
        const size = parseFloat(formData.size)

        const profitLoss = formData.direction === 'long'
            ? (exit - entry) * size
            : (entry - exit) * size

        const newTrade: TradeEntry = {
            id: Date.now().toString(),
            date: new Date().toLocaleDateString(),
            symbol: formData.symbol,
            direction: formData.direction,
            entry,
            exit,
            size,
            profitLoss,
            notes: formData.notes
        }

        setTrades([newTrade, ...trades])
        setFormData({ symbol: '', direction: 'long', entry: '', exit: '', size: '', notes: '' })
        setShowForm(false)
    }

    const totalPL = trades.reduce((sum, trade) => sum + trade.profitLoss, 0)
    const winRate = trades.length > 0
        ? (trades.filter(t => t.profitLoss > 0).length / trades.length * 100).toFixed(1)
        : '0'

    const exportToCSV = () => {
        const csvContent = [
            ['Date', 'Symbol', 'Direction', 'Entry', 'Exit', 'Size', 'P/L', 'Notes'].join(','),
            ...trades.map(t => [
                t.date,
                t.symbol,
                t.direction,
                t.entry,
                t.exit,
                t.size,
                t.profitLoss.toFixed(2),
                `"${t.notes}"`
            ].join(','))
        ].join('\n')

        const blob = new Blob([csvContent], { type: 'text/csv' })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `trading-journal-${new Date().toISOString().split('T')[0]}.csv`
        a.click()
    }

    return (
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-white/10 rounded-2xl p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-white">Trading Journal</h2>
                        <p className="text-sm text-zinc-500">Track every trade, improve every day</p>
                    </div>
                </div>
                <div className="flex gap-3">
                    {trades.length > 0 && (
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={exportToCSV}
                            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 border border-white/10 rounded-lg text-white font-medium text-sm flex items-center gap-2 transition-all"
                        >
                            <Download className="w-4 h-4" />
                            Export
                        </motion.button>
                    )}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setShowForm(!showForm)}
                        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-white font-medium text-sm flex items-center gap-2"
                    >
                        <Plus className="w-4 h-4" />
                        Add Trade
                    </motion.button>
                </div>
            </div>

            {/* Stats */}
            {trades.length > 0 && (
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                        <div className="text-sm text-zinc-400 mb-1">Total P/L</div>
                        <div className={`text-2xl font-bold ${totalPL >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {totalPL >= 0 ? '+' : ''}{totalPL.toFixed(2)} $
                        </div>
                    </div>
                    <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                        <div className="text-sm text-zinc-400 mb-1">Win Rate</div>
                        <div className="text-2xl font-bold text-white">{winRate}%</div>
                    </div>
                    <div className="bg-black/30 border border-white/10 rounded-lg p-4">
                        <div className="text-sm text-zinc-400 mb-1">Total Trades</div>
                        <div className="text-2xl font-bold text-white">{trades.length}</div>
                    </div>
                </div>
            )}

            {/* Add Trade Form */}
            {showForm && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-black/30 border border-white/10 rounded-xl p-6 mb-6"
                >
                    <h3 className="text-lg font-bold text-white mb-4">New Trade Entry</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Symbol (e.g., NQ, ES)"
                            value={formData.symbol}
                            onChange={(e) => setFormData({ ...formData, symbol: e.target.value })}
                            className="px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500"
                        />
                        <select
                            value={formData.direction}
                            onChange={(e) => setFormData({ ...formData, direction: e.target.value as 'long' | 'short' })}
                            className="px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        >
                            <option value="long">Long</option>
                            <option value="short">Short</option>
                        </select>
                        <input
                            type="number"
                            step="0.01"
                            placeholder="Entry Price"
                            value={formData.entry}
                            onChange={(e) => setFormData({ ...formData, entry: e.target.value })}
                            className="px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500"
                        />
                        <input
                            type="number"
                            step="0.01"
                            placeholder="Exit Price"
                            value={formData.exit}
                            onChange={(e) => setFormData({ ...formData, exit: e.target.value })}
                            className="px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500"
                        />
                        <input
                            type="number"
                            placeholder="Position Size"
                            value={formData.size}
                            onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                            className="px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500"
                        />
                        <textarea
                            placeholder="Trade notes..."
                            value={formData.notes}
                            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                            className="px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 resize-none"
                            rows={3}
                        />
                    </div>
                    <div className="flex gap-3 mt-4">
                        <button
                            onClick={addTrade}
                            className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-white font-medium"
                        >
                            Save Trade
                        </button>
                        <button
                            onClick={() => setShowForm(false)}
                            className="px-6 py-2 bg-zinc-800 rounded-lg text-white font-medium"
                        >
                            Cancel
                        </button>
                    </div>
                </motion.div>
            )}

            {/* Trades List */}
            <div className="space-y-3">
                {trades.length === 0 ? (
                    <div className="text-center py-12 text-zinc-500">
                        No trades recorded yet. Click "Add Trade" to start journaling.
                    </div>
                ) : (
                    trades.map((trade) => (
                        <motion.div
                            key={trade.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-black/30 border border-white/10 rounded-lg p-4 hover:border-white/20 transition-all"
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-white font-bold">{trade.symbol}</span>
                                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${trade.direction === 'long' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                                            }`}>
                                            {trade.direction.toUpperCase()}
                                        </span>
                                        <span className="text-sm text-zinc-500">{trade.date}</span>
                                    </div>
                                    <div className="grid grid-cols-3 gap-4 text-sm mb-2">
                                        <div>
                                            <span className="text-zinc-500">Entry:</span>
                                            <span className="text-white ml-2">${trade.entry}</span>
                                        </div>
                                        <div>
                                            <span className="text-zinc-500">Exit:</span>
                                            <span className="text-white ml-2">${trade.exit}</span>
                                        </div>
                                        <div>
                                            <span className="text-zinc-500">Size:</span>
                                            <span className="text-white ml-2">{trade.size}</span>
                                        </div>
                                    </div>
                                    {trade.notes && (
                                        <p className="text-sm text-zinc-400 mt-2">{trade.notes}</p>
                                    )}
                                </div>
                                <div className="flex items-center gap-2">
                                    {trade.profitLoss >= 0 ? (
                                        <TrendingUp className="w-5 h-5 text-green-400" />
                                    ) : (
                                        <TrendingDown className="w-5 h-5 text-red-400" />
                                    )}
                                    <div className={`text-xl font-bold ${trade.profitLoss >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                        {trade.profitLoss >= 0 ? '+' : ''}{trade.profitLoss.toFixed(2)}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))
                )}
            </div>
        </div>
    )
}
