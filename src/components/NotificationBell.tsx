'use client'

import { useState, useEffect, useRef } from 'react'
import { Bell, X, Check, Info, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { getNotifications, markAsRead, markAllAsRead } from '@/app/actions/notifications'
import { useUser } from '@clerk/nextjs'

export function NotificationBell() {
    const { user } = useUser()
    const [notifications, setNotifications] = useState<any[]>([])
    const [unreadCount, setUnreadCount] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const [popupNotification, setPopupNotification] = useState<any>(null)
    const lastNotificationIdRef = useRef<string | null>(null)
    const isFirstLoad = useRef(true)

    // Polling for new notifications
    useEffect(() => {
        if (!user) return

        const fetchNotifications = async () => {
            const data = await getNotifications(user.id)
            setNotifications(data)
            setUnreadCount(data.filter((n: any) => !n.read).length)

            if (data.length > 0) {
                const latest = data[0]

                // If it's not the first load, and the ID is different from the last one we saw
                if (!isFirstLoad.current && lastNotificationIdRef.current && latest.id !== lastNotificationIdRef.current && !latest.read) {
                    setPopupNotification(latest)
                    setTimeout(() => setPopupNotification(null), 6000)
                }

                lastNotificationIdRef.current = latest.id
            }
            isFirstLoad.current = false
        }

        fetchNotifications()
        const interval = setInterval(fetchNotifications, 30000) // Poll every 30s

        return () => clearInterval(interval)
    }, [user])

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const handleMarkAsRead = async (id: string) => {
        // Optimistic update
        setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n))
        setUnreadCount(prev => Math.max(0, prev - 1))
        await markAsRead(id)
    }

    const handleMarkAllRead = async () => {
        if (!user) return
        setNotifications(prev => prev.map(n => ({ ...n, read: true })))
        setUnreadCount(0)
        await markAllAsRead(user.id)
    }

    return (
        <>
            <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="relative p-2 text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-white/5"
                >
                    <Bell className="w-5 h-5" />
                    {unreadCount > 0 && (
                        <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full border-2 border-black">
                            {unreadCount > 9 ? '9+' : unreadCount}
                        </span>
                    )}
                </button>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            className="absolute right-0 mt-2 w-80 sm:w-96 bg-zinc-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden z-50"
                        >
                            <div className="p-4 border-b border-white/5 flex items-center justify-between bg-zinc-900/50 backdrop-blur-xl">
                                <h3 className="font-bold text-white">Notifications</h3>
                                {unreadCount > 0 && (
                                    <button
                                        onClick={handleMarkAllRead}
                                        className="text-xs text-purple-400 hover:text-purple-300 font-medium"
                                    >
                                        Mark all read
                                    </button>
                                )}
                            </div>

                            <div className="max-h-[400px] overflow-y-auto custom-scrollbar">
                                {notifications.length === 0 ? (
                                    <div className="p-8 text-center text-zinc-500">
                                        <Bell className="w-8 h-8 mx-auto mb-2 opacity-20" />
                                        <p className="text-sm">No notifications yet</p>
                                    </div>
                                ) : (
                                    <div className="divide-y divide-white/5">
                                        {notifications.map(notification => (
                                            <div
                                                key={notification.id}
                                                className={`p-4 hover:bg-white/5 transition-colors ${!notification.read ? 'bg-purple-500/5' : ''}`}
                                            >
                                                <div className="flex gap-3">
                                                    <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${!notification.read ? 'bg-purple-500' : 'bg-transparent'}`} />
                                                    <div className="flex-1 space-y-1">
                                                        <div className="flex items-start justify-between gap-2">
                                                            <p className={`text-sm ${!notification.read ? 'text-white font-medium' : 'text-zinc-400'}`}>
                                                                {notification.title}
                                                            </p>
                                                            <span className="text-[10px] text-zinc-600 whitespace-nowrap">
                                                                {new Date(notification.created_at).toLocaleDateString()}
                                                            </span>
                                                        </div>
                                                        <p className="text-xs text-zinc-500 leading-relaxed">
                                                            {notification.message}
                                                        </p>
                                                        {notification.link && (
                                                            <a
                                                                href={notification.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-1 text-xs text-purple-400 hover:text-purple-300 mt-2"
                                                            >
                                                                View Details <ExternalLink className="w-3 h-3" />
                                                            </a>
                                                        )}
                                                    </div>
                                                    {!notification.read && (
                                                        <button
                                                            onClick={() => handleMarkAsRead(notification.id)}
                                                            className="text-zinc-500 hover:text-white self-start"
                                                            title="Mark as read"
                                                        >
                                                            <Check className="w-4 h-4" />
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <AnimatePresence>
                {popupNotification && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, x: 50 }}
                        animate={{ opacity: 1, y: 0, x: 0 }}
                        exit={{ opacity: 0, y: 20, x: 20 }}
                        className="fixed bottom-6 right-6 z-[100] max-w-sm w-full bg-zinc-900 border border-purple-500/30 rounded-2xl shadow-2xl p-4 flex gap-4 items-start backdrop-blur-xl"
                    >
                        <div className="bg-purple-500/20 p-2 rounded-full text-purple-400">
                            <Info className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-bold text-white text-sm">{popupNotification.title}</h4>
                            <p className="text-zinc-400 text-xs mt-1 line-clamp-2">{popupNotification.message}</p>
                        </div>
                        <button onClick={() => setPopupNotification(null)} className="text-zinc-500 hover:text-white">
                            <X className="w-4 h-4" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
