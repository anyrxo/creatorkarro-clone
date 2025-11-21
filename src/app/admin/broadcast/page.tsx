'use client'

import { useState, useEffect } from 'react'
import { Send, ArrowLeft, Loader2, CheckCircle, Users, Search } from 'lucide-react'
import Link from 'next/link'
import { sendBroadcastEmail, getStudentsForBroadcast } from '@/app/actions/admin-email'
import { useRouter } from 'next/navigation'

export default function BroadcastPage() {
    const [subject, setSubject] = useState('')
    const [content, setContent] = useState('')
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
    const [stats, setStats] = useState<{ sent: number, total: number } | null>(null)
    const [students, setStudents] = useState<{ email: string, userId: string, joinedAt: string }[]>([])
    const [selectedEmails, setSelectedEmails] = useState<Set<string>>(new Set())
    const [isLoadingStudents, setIsLoadingStudents] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const router = useRouter()

    useEffect(() => {
        loadStudents()
    }, [])

    const loadStudents = async () => {
        setIsLoadingStudents(true)
        const data = await getStudentsForBroadcast()
        setStudents(data)
        // Default select all
        setSelectedEmails(new Set(data.map(s => s.email)))
        setIsLoadingStudents(false)
    }

    const toggleEmail = (email: string) => {
        const newSet = new Set(selectedEmails)
        if (newSet.has(email)) {
            newSet.delete(email)
        } else {
            newSet.add(email)
        }
        setSelectedEmails(newSet)
    }

    const toggleAll = () => {
        if (selectedEmails.size === students.length) {
            setSelectedEmails(new Set())
        } else {
            setSelectedEmails(new Set(students.map(s => s.email)))
        }
    }

    const filteredStudents = students.filter(s =>
        s.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.userId?.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleSend = async (e: React.FormEvent) => {
        e.preventDefault()

        if (selectedEmails.size === 0) {
            alert('Please select at least one recipient.')
            return
        }

        if (!confirm(`Are you sure you want to send this email to ${selectedEmails.size} students?`)) return

        setStatus('sending')

        // Wrap content in basic template
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

        const result = await sendBroadcastEmail(subject, htmlWrapper, Array.from(selectedEmails))

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
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Left Column: Email Composer */}
                <div className="lg:col-span-2">
                    <Link href="/admin" className="flex items-center gap-2 text-zinc-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        Back to Dashboard
                    </Link>

                    <div className="mb-8">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Broadcast Center
                        </h1>
                        <p className="text-zinc-400 mt-2">Send updates to your students.</p>
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

                            <div className="pt-4 flex items-center justify-between gap-4">
                                <div className="text-sm text-zinc-400">
                                    Sending to <span className="text-white font-bold">{selectedEmails.size}</span> recipients
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'sending' || selectedEmails.size === 0}
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

                {/* Right Column: Recipient Selector */}
                <div className="lg:col-span-1">
                    <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 h-[calc(100vh-4rem)] sticky top-8 flex flex-col">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                            <Users className="w-5 h-5 text-purple-400" />
                            Recipients
                        </h3>

                        <div className="mb-4 relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
                            <input
                                type="text"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                placeholder="Search email..."
                                className="w-full bg-black/30 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                            />
                        </div>

                        <div className="flex items-center justify-between mb-4 text-sm">
                            <span className="text-zinc-400">{filteredStudents.length} students</span>
                            <button
                                onClick={toggleAll}
                                className="text-purple-400 hover:text-purple-300 font-medium"
                            >
                                {selectedEmails.size === students.length ? 'Deselect All' : 'Select All'}
                            </button>
                        </div>

                        {isLoadingStudents ? (
                            <div className="flex-1 flex items-center justify-center">
                                <Loader2 className="w-6 h-6 text-purple-500 animate-spin" />
                            </div>
                        ) : (
                            <div className="flex-1 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                                {filteredStudents.map(student => (
                                    <div
                                        key={student.email}
                                        onClick={() => toggleEmail(student.email)}
                                        className={`p-3 rounded-lg border cursor-pointer transition-all ${selectedEmails.has(student.email)
                                                ? 'bg-purple-500/20 border-purple-500/50'
                                                : 'bg-white/5 border-white/5 hover:bg-white/10'
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-4 h-4 rounded border flex items-center justify-center ${selectedEmails.has(student.email)
                                                    ? 'bg-purple-500 border-purple-500'
                                                    : 'border-zinc-500'
                                                }`}>
                                                {selectedEmails.has(student.email) && <CheckCircle className="w-3 h-3 text-white" />}
                                            </div>
                                            <div className="overflow-hidden">
                                                <p className="text-sm font-medium text-white truncate">{student.email}</p>
                                                <p className="text-xs text-zinc-500 truncate">Joined {new Date(student.joinedAt).toLocaleDateString()}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {filteredStudents.length === 0 && (
                                    <div className="text-center text-zinc-500 py-8">
                                        No students found.
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
