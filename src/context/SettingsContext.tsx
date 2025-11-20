'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface SettingsContextType {
    focusMode: boolean
    toggleFocusMode: () => void
    soundEnabled: boolean
    toggleSound: () => void
    resetProgress: () => void
}

const SettingsContext = createContext<SettingsContextType | undefined>(undefined)

export function SettingsProvider({ children }: { children: React.ReactNode }) {
    const [focusMode, setFocusMode] = useState(false)
    const [soundEnabled, setSoundEnabled] = useState(true)

    useEffect(() => {
        const storedSound = localStorage.getItem('iimagined_sound_enabled')
        if (storedSound !== null) {
            setSoundEnabled(storedSound === 'true')
        }
    }, [])

    const toggleFocusMode = () => setFocusMode(prev => !prev)

    const toggleSound = () => {
        setSoundEnabled(prev => {
            const newValue = !prev
            localStorage.setItem('iimagined_sound_enabled', String(newValue))
            return newValue
        })
    }

    const resetProgress = () => {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            localStorage.clear()
            window.location.reload()
        }
    }

    return (
        <SettingsContext.Provider value={{ focusMode, toggleFocusMode, soundEnabled, toggleSound, resetProgress }}>
            {children}
        </SettingsContext.Provider>
    )
}

export function useSettings() {
    const context = useContext(SettingsContext)
    if (context === undefined) {
        throw new Error('useSettings must be used within a SettingsProvider')
    }
    return context
}
