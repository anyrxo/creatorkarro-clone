'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, Lock, Unlock } from 'lucide-react'

interface AdminGateProps {
    onUnlock: () => void
}

export default function AdminGate({ onUnlock }: AdminGateProps) {
    const [code, setCode] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (code === 'ADMIN') {
            onUnlock()
        } else {
            setError(true)
            setTimeout(() => setError(false), 500)
        }
    }

    return (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative z-10 w-full max-w-md p-8"
            >
                <div className="flex justify-center mb-8">
                    <div className="w-20 h-20 bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center shadow-2xl">
                        <Shield className="w-10 h-10 text-zinc-500" />
                    </div>
                </div>

                <h1 className="text-3xl font-bold text-center text-white mb-2">System Administration</h1>
                <p className="text-zinc-500 text-center mb-8 text-sm uppercase tracking-widest">Authorized Personnel Only</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <input
                            type="password"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            placeholder="Enter Master Key"
                            className="w-full bg-zinc-900/50 border border-zinc-800 text-white px-4 py-4 rounded-xl focus:outline-none focus:border-white/20 focus:ring-1 focus:ring-white/20 transition-all text-center tracking-[0.5em] font-mono placeholder:tracking-normal"
                            autoFocus
                        />
                        <AnimatePresence>
                            {error && (
                                <motion.div
                                    initial={{ x: -10, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ x: 10, opacity: 0 }}
                                    className="absolute inset-y-0 right-4 flex items-center text-red-500"
                                >
                                    <Lock className="w-5 h-5" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition-colors"
                    >
                        Authenticate
                    </button>
                </form>
            </motion.div>
        </div>
    )
}
