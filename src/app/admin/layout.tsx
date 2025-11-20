'use client'

import { useState, useEffect } from 'react'
import AdminGate from '@/components/admin/AdminGate'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { LayoutDashboard, BookOpen, Users, Settings, LogOut, Key, Loader2 } from 'lucide-react'
import { checkAdminAccess } from '@/app/actions/admin-auth'
import { useUser } from '@clerk/nextjs'

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { isLoaded, isSignedIn } = useUser()
    const [isAuthorized, setIsAuthorized] = useState(false)
    const [isChecking, setIsChecking] = useState(true)

    useEffect(() => {
        async function verifyAdmin() {
            if (!isLoaded) return
            
            if (!isSignedIn) {
                setIsChecking(false)
                return
            }

            const result = await checkAdminAccess()
            if (result.authorized) {
                setIsAuthorized(true)
            }
            setIsChecking(false)
        }
        
        verifyAdmin()
    }, [isLoaded, isSignedIn])

    if (isChecking) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
            </div>
        )
    }

    if (!isAuthorized) {
        return (
            <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-4">
                <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mb-4 border border-red-500/20">
                    <LogOut className="w-8 h-8 text-red-500" />
                </div>
                <h1 className="text-2xl font-bold mb-2">Access Denied</h1>
                <p className="text-zinc-400 mb-8 text-center">You are not authorized to access this area.</p>
                <Link href="/" className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-zinc-200 transition-colors">
                    Return Home
                </Link>
            </div>
        )
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
                    <Link href="/admin/keys" className="flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                        <Key className="w-5 h-5" />
                        License Keys
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
                    <Link
                        href="/"
                        className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-zinc-400 hover:bg-white/5 transition-colors"
                    >
                        <LogOut className="w-5 h-5" />
                        Exit Admin
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto bg-[#0a0a0a]">
                {children}
            </div>
        </div>
    )
}
