'use client'

import { useState, useEffect } from 'react'
import PasscodeGate from '@/components/learning/PasscodeGate'
import { motion, AnimatePresence } from 'framer-motion'
import { CourseProvider } from '@/context/CourseContext'
import AuroraBackground from '@/components/learning/AuroraBackground'
import { SettingsProvider } from '@/context/SettingsContext'

export default function LearningLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isUnlocked, setIsUnlocked] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Check local storage on mount
        const unlocked = localStorage.getItem('iimagined_vault_unlocked')
        if (unlocked === 'true') {
            setIsUnlocked(true)
        }
        setIsLoading(false)
    }, [])

    const handleUnlock = () => {
        localStorage.setItem('iimagined_vault_unlocked', 'true')
        setIsUnlocked(true)
    }

    if (isLoading) {
        return <div className="min-h-screen bg-[#0a0a0a]" />
    }

    return (
        <CourseProvider>
            <SettingsProvider>
                <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-purple-500/30 relative overflow-hidden">
                    <AuroraBackground />
                    <AnimatePresence mode="wait">
                        {!isUnlocked ? (
                            <motion.div
                                key="gate"
                                exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                                className="fixed inset-0 z-50"
                            >
                                <PasscodeGate onUnlock={handleUnlock} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="content"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                className="min-h-screen relative z-10"
                            >
                                {children}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </SettingsProvider>
        </CourseProvider>
    )
}
