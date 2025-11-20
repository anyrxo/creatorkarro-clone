'use client'

import { learningContent } from '@/data/learning-content'
import Sidebar from '@/components/learning/Sidebar'
import { notFound, useParams } from 'next/navigation'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

import { useSettings } from '@/context/SettingsContext'
import SettingsModal from '@/components/learning/SettingsModal'
import { Settings } from 'lucide-react'

export default function CourseLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const params = useParams()
    const courseId = params.courseId as string
    const course = learningContent[courseId]
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)
    const { focusMode } = useSettings()

    if (!course) {
        return notFound()
    }

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-[#0a0a0a]">
            <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />

            {/* Mobile Header */}
            <div className="md:hidden p-4 border-b border-white/5 flex justify-between items-center bg-zinc-900/80 backdrop-blur-md sticky top-0 z-40">
                <span className="font-bold text-white truncate pr-4">{course.title}</span>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setIsSettingsOpen(true)}
                        className="p-2 text-zinc-400 hover:text-white bg-white/5 rounded-lg"
                    >
                        <Settings className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="p-2 text-zinc-400 hover:text-white bg-white/5 rounded-lg"
                    >
                        <Menu className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {/* Desktop Sidebar */}
            <AnimatePresence mode="wait">
                {!focusMode && (
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 320, opacity: 1 }}
                        exit={{ width: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="hidden md:block sticky top-0 h-screen flex-shrink-0 overflow-hidden border-r border-white/5"
                    >
                        <div className="w-80 h-full">
                            <Sidebar course={course} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 md:hidden"
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-y-0 left-0 w-[85%] max-w-sm z-50 md:hidden"
                        >
                            <Sidebar course={course} onClose={() => setIsMobileMenuOpen(false)} />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <div className="flex-1 overflow-y-auto h-[calc(100vh-65px)] md:h-screen custom-scrollbar relative">
                {/* Desktop Settings Trigger (Floating) */}
                <div className="hidden md:block absolute top-6 right-8 z-30">
                    <button
                        onClick={() => setIsSettingsOpen(true)}
                        className="p-3 text-zinc-400 hover:text-white bg-black/50 backdrop-blur-md border border-white/10 hover:border-white/20 rounded-full transition-all hover:scale-110 shadow-xl"
                    >
                        <Settings className="w-5 h-5" />
                    </button>
                </div>
                {children}
            </div>
        </div>
    )
}
