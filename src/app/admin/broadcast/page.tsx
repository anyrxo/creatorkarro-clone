'use client'

import { useState } from 'react'
import { Send, ArrowLeft, Loader2, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { sendBroadcastEmail } from '@/app/actions/admin-email'
import { useRouter } from 'next/navigation'

export default function BroadcastPage() {
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
    const [stats, setStats] = useState<{ sent: number, total: number } | null>(null)
    const router = useRouter()

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!confirm('Are you sure you want to send this email to ALL active students?')) return

        setStatus('sending')
        
        // Wrap content in basic template if needed, or just send raw HTML
        // Here we inject a simple wrapper style
        const htmlWrapper = `
            <div style="font-family: sans-serif; color: #fff; background: #000; padding: 20px;">
                <h1 style="color: #a855f7;">IImagined Update</h1>
                <div style="font-size: 16px; line-height: 1.5; color: #ccc;">
                    ${content.replace(/\n/g, '<br/>')}
                </div>
                <div style="margin-top: 40px; border-top: 1px solid #333; padding-top: 20px; font-size: 12px; color: #666;">
                    © IImagined AI. All rights reserved.
                </div>
            </div>
        `

        const result = await sendBroadcastEmail(subject, htmlWrapper)

        if (result.success) {
            setStatus('success')
            setStats({ sent: result.sentCount!, total: result.total! })
        } else {
            setStatus('error')
            alert(result.error)
        }
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] p-8 text-white">
            <div className="max-w-4xl mx-auto">
                <Link href="/admin" className="flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Dashboard
                </Link>

                <div className="mb-8">
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Broadcast Center
                    </h1>
                    <p className="text-zinc-400 mt-2">Send important updates to your entire student base.</p>
                </div>

                {status === 'success' ? (
                    <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-12 text-center">
                        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-8 h-8 text-green-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Broadcast Sent!</h2>
                        <p className="text-zinc-400 mb-8">
                            Successfully delivered to {stats?.sent} out of {stats?.total} students.
                        </p>
                        <button 
                            onClick={() => { setStatus('idle'); setSubject(''); setContent('') }}
                            className="bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                        >
                            Send Another
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSend} className="space-y-6 bg-zinc-900/50 border border-white/5 rounded-2xl p-8">
                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-2">Subject Line</label>
                            <input 
                                type="text" 
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                placeholder="e.g., New Module Released: AI Mastery"
                                className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-purple-500 transition-all"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-zinc-400 mb-2">Message Content</label>
                            <textarea 
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder="Write your update here..."
                                className="w-full h-64 bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-purple-500 transition-all resize-none"
                                required
                            />
                            <p className="text-xs text-zinc-500 mt-2">HTML formatting is supported.</p>
                        </div>

                        <div className="pt-4 flex items-center justify-end gap-4">
                            <button
                                type="submit"
                                disabled={status === 'sending'}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 transition-all disabled:opacity-50 shadow-lg shadow-purple-500/20"
                            >
                                {status === 'sending' ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        <Send className="w-5 h-5" />
                                        Send Broadcast
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}

