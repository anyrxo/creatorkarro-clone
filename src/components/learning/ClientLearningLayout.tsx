'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CourseProvider } from '@/context/CourseContext'
import { GamificationProvider } from '@/context/GamificationContext'
import AuroraBackground from '@/components/learning/AuroraBackground'
import { SettingsProvider } from '@/context/SettingsContext'

export default function ClientLearningLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <GamificationProvider>
            <CourseProvider>
                <SettingsProvider>
                    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-purple-500/30 relative overflow-hidden">
                        <AuroraBackground />
                        <AnimatePresence mode="wait">
                            <motion.div
                                key="content"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="min-h-screen relative z-10"
                            >
                                {children}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </SettingsProvider>
            </CourseProvider>
        </GamificationProvider>
    )
}
