'use client'

import { useSettings } from '@/context/SettingsContext'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Volume2, VolumeX, Trash2, Monitor, Maximize, Minimize } from 'lucide-react'

interface SettingsModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function SettingsModal({ isOpen, onClose }: SettingsModalProps) {
    const { soundEnabled, toggleSound, focusMode, toggleFocusMode, resetProgress } = useSettings()

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-zinc-900 border border-white/10 rounded-2xl p-6 z-[70] shadow-2xl"
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold text-white">System Settings</h2>
                            <button onClick={onClose} className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="space-y-4">
                            {/* Sound Toggle */}
                            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${soundEnabled ? 'bg-purple-500/20 text-purple-400' : 'bg-zinc-800 text-zinc-500'}`}>
                                        {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                                    </div>
                                    <div>
                                        <div className="font-medium text-white">Sound Effects</div>
                                        <div className="text-xs text-zinc-400">Interaction feedback</div>
                                    </div>
                                </div>
                                <button
                                    onClick={toggleSound}
                                    className={`relative w-12 h-6 rounded-full transition-colors ${soundEnabled ? 'bg-purple-500' : 'bg-zinc-700'}`}
                                >
                                    <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${soundEnabled ? 'translate-x-6' : 'translate-x-0'}`} />
                                </button>
                            </div>

                            {/* Focus Mode Toggle */}
                            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${focusMode ? 'bg-blue-500/20 text-blue-400' : 'bg-zinc-800 text-zinc-500'}`}>
                                        {focusMode ? <Maximize className="w-5 h-5" /> : <Minimize className="w-5 h-5" />}
                                    </div>
                                    <div>
                                        <div className="font-medium text-white">Focus Mode</div>
                                        <div className="text-xs text-zinc-400">Hide sidebar while learning</div>
                                    </div>
                                </div>
                                <button
                                    onClick={toggleFocusMode}
                                    className={`relative w-12 h-6 rounded-full transition-colors ${focusMode ? 'bg-blue-500' : 'bg-zinc-700'}`}
                                >
                                    <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${focusMode ? 'translate-x-6' : 'translate-x-0'}`} />
                                </button>
                            </div>

                            {/* Reset Data */}
                            <div className="pt-4 border-t border-white/10">
                                <button
                                    onClick={resetProgress}
                                    className="w-full flex items-center justify-center gap-2 p-4 text-red-400 hover:bg-red-500/10 rounded-xl transition-colors border border-transparent hover:border-red-500/20"
                                >
                                    <Trash2 className="w-5 h-5" />
                                    <span className="font-medium">Reset All Progress</span>
                                </button>
                                <p className="text-center text-xs text-zinc-600 mt-2">
                                    This will clear all local data and cannot be undone.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}
