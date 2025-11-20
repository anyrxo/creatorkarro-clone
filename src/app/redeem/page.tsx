'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Key, Lock, ArrowRight, Loader2, CheckCircle, XCircle } from 'lucide-react'
import { redeemLicenseKey } from '@/app/actions/redeem'
import { useRouter } from 'next/navigation'
import AuroraBackground from '@/components/learning/AuroraBackground'

export default function RedeemPage() {
    const [key, setKey] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
    const [message, setMessage] = useState('')
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')
        setMessage('')

        const formData = new FormData()
        formData.append('key', key)

        const result = await redeemLicenseKey(formData)

        if (result.success) {
            setStatus('success')
            setMessage('License redeemed successfully! Redirecting...')
            setTimeout(() => {
                router.push('/learning')
            }, 2000)
        } else {
            setStatus('error')
            setMessage(result.error || 'Invalid license key')
        }
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-4 relative overflow-hidden">
            <AuroraBackground />
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-md bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl relative z-10"
            >
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center border border-purple-500/20">
                        <Key className="w-8 h-8 text-purple-400" />
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-center mb-2">Enter License Key</h1>
                <p className="text-zinc-400 text-center mb-8 text-sm">
                    Please enter your product license key to access the learning platform.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                        <input
                            type="text"
                            value={key}
                            onChange={(e) => setKey(e.target.value)}
                            placeholder="XXXX-XXXX-XXXX"
                            className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all uppercase tracking-widest font-mono"
                            required
                        />
                    </div>

                    {message && (
                        <div className={`p-3 rounded-lg text-sm flex items-center gap-2 ${
                            status === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                        }`}>
                            {status === 'success' ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                            {message}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={status === 'loading' || status === 'success'}
                        className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {status === 'loading' ? (
                            <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                Verifying...
                            </>
                        ) : status === 'success' ? (
                            <>
                                <CheckCircle className="w-4 h-4" />
                                Access Granted
                            </>
                        ) : (
                            <>
                                Unlock Access
                                <ArrowRight className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </form>

                <div className="mt-6 text-center text-xs text-zinc-600">
                    Don't have a key? <a href="#" className="text-purple-400 hover:underline">Purchase Access</a>
                </div>
            </motion.div>
        </div>
    )
}

