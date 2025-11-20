'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Key, Lock, ArrowRight, Loader2, CheckCircle, XCircle, ExternalLink, DollarSign, Shield } from 'lucide-react'
import { redeemLicenseKey } from '@/app/actions/redeem'
import { useRouter } from 'next/navigation'
import AuroraBackground from '@/components/learning/AuroraBackground'
import Link from 'next/link'

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
        <div className="min-h-screen bg-[#0a0a0a] text-white p-4 md:p-8 pt-24 relative overflow-hidden flex flex-col">
            <AuroraBackground />
            
            <div className="max-w-5xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                
                {/* Left Column: The "Locked" Content Tease */}
                <div className="space-y-8">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-purple-200 to-zinc-400 bg-clip-text text-transparent mb-4">
                            The Empire is Locked.
                        </h1>
                        <p className="text-zinc-400 text-lg leading-relaxed">
                            You are inside the system, but the core is restricted. Unlock full access to view the blueprints, tools, and strategies.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="bg-zinc-900/50 border border-white/5 p-4 rounded-xl flex items-center gap-4 opacity-50">
                            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                                <Lock className="w-6 h-6 text-red-500" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">Instagram Ignited</h3>
                                <p className="text-sm text-zinc-500">Locked Module</p>
                            </div>
                        </div>
                         <div className="bg-zinc-900/50 border border-white/5 p-4 rounded-xl flex items-center gap-4 opacity-50">
                            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                                <Lock className="w-6 h-6 text-red-500" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">AI Automations</h3>
                                <p className="text-sm text-zinc-500">Locked Module</p>
                            </div>
                        </div>
                         <div className="bg-zinc-900/50 border border-white/5 p-4 rounded-xl flex items-center gap-4 opacity-50">
                            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center">
                                <Lock className="w-6 h-6 text-red-500" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">Digital Product System</h3>
                                <p className="text-sm text-zinc-500">Locked Module</p>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                         <a 
                            href="https://discord.gg/ychmBgGCPa" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-[#5865F2]/10 border border-[#5865F2]/20 hover:bg-[#5865F2]/20 p-4 rounded-xl flex items-center gap-3 transition-all group"
                        >
                            <div className="w-8 h-8 bg-[#5865F2] rounded-full flex items-center justify-center text-white">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.772-.6083 1.1588a18.2915 18.2915 0 00-5.4868 0c-.1636-.3933-.4058-.7835-.6178-1.1588a.0771.0771 0 00-.0785-.0371 19.7363 19.7363 0 00-4.8852 1.5151.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.0991.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"/></svg>
                            </div>
                            <span className="font-medium text-sm text-zinc-300 group-hover:text-white">Join Discord</span>
                            <ExternalLink className="w-4 h-4 text-zinc-500 ml-auto" />
                        </a>

                        <Link
                            href="/affiliate"
                            className="bg-green-500/10 border border-green-500/20 hover:bg-green-500/20 p-4 rounded-xl flex items-center gap-3 transition-all group"
                        >
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">
                                <DollarSign className="w-4 h-4" />
                            </div>
                            <span className="font-medium text-sm text-zinc-300 group-hover:text-white">Partner Program</span>
                            <ArrowRight className="w-4 h-4 text-zinc-500 ml-auto" />
                        </Link>
                    </div>
                </div>

                {/* Right Column: The Key Input */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-zinc-900/80 backdrop-blur-xl border border-white/10 p-8 rounded-2xl shadow-2xl"
                >
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center border border-purple-500/20">
                            <Key className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white">Enter Access Key</h2>
                            <p className="text-sm text-zinc-400">Have a license? Redeem it here.</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider ml-1">License Key</label>
                            <div className="relative">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                                <input
                                    type="text"
                                    value={key}
                                    onChange={(e) => setKey(e.target.value)}
                                    placeholder="XXXX-XXXX-XXXX"
                                    className="w-full bg-black/50 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all uppercase tracking-widest font-mono text-lg"
                                    required
                                />
                            </div>
                        </div>

                        {message && (
                            <div className={`p-4 rounded-xl text-sm flex items-center gap-3 ${
                                status === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'
                            }`}>
                                {status === 'success' ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                                {message}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={status === 'loading' || status === 'success'}
                            className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-lg shadow-white/10"
                        >
                            {status === 'loading' ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Verifying...
                                </>
                            ) : status === 'success' ? (
                                <>
                                    <CheckCircle className="w-5 h-5" />
                                    Access Granted
                                </>
                            ) : (
                                <>
                                    Unlock Access
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-white/5 text-center">
                        <p className="text-zinc-500 text-sm mb-4">Don't have a key yet?</p>
                        <a 
                            href="https://whop.com/iimagined/all-access-reimagined/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors hover:underline"
                        >
                            Purchase Lifetime Access <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

