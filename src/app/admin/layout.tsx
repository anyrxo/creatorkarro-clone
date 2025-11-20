'use client'

import { useState, useEffect } from 'react'
import AdminGate from '@/components/admin/AdminGate'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { LayoutDashboard, BookOpen, Users, Settings, LogOut } from 'lucide-react'

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isUnlocked, setIsUnlocked] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const unlocked = localStorage.getItem('iimagined_admin_unlocked')
        if (unlocked === 'true') {
            setIsUnlocked(true)
        }
        setIsLoading(false)
    }, [])

    const handleUnlock = () => {
        localStorage.setItem('iimagined_admin_unlocked', 'true')
        setIsUnlocked(true)
    }

    const handleLogout = () => {
        localStorage.removeItem('iimagined_admin_unlocked')
        setIsUnlocked(false)
    }

    if (isLoading) return <div className="min-h-screen bg-black" />

    if (!isUnlocked) {
        return <AdminGate onUnlock={handleUnlock} />
    }

    return (
        <div className="min-h-screen bg-black text-white flex">
            {/* Admin Sidebar */}
            <div className="w-64 border-r border-white/10 bg-zinc-900/30 flex flex-col">
                <div className="p-6 border-b border-white/10">
                    <div className="font-bold text-xl tracking-tighter">IImagined<span className="text-zinc-500">Admin</span></div>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                    <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-white/5 text-white font-medium">
                        <LayoutDashboard className="w-5 h-5" />
                        Dashboard
                    </Link>
                    <Link href="/admin/courses" className="flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                        <BookOpen className="w-5 h-5" />
                        Courses
                    </Link>
                    <Link href="/admin/users" className="flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                        <Users className="w-5 h-5" />
                        Students
                    </Link>
                    <Link href="/admin/settings" className="flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                        <Settings className="w-5 h-5" />
                        Settings
                    </Link>
                </nav>

                <div className="p-4 border-t border-white/10">
                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-red-400 hover:bg-red-500/10 transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        Logout
                    </button>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto bg-[#0a0a0a]">
                {children}
            </div>
        </div>
    )
}
