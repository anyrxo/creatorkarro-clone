import { useCallback } from 'react'
import { useSettings } from '@/context/SettingsContext'

// Short, pleasant "pop" sound for interactions
const POP_SOUND = 'data:audio/wav;base64,UklGRl9vT1BXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU' // Placeholder, I will use a real base64 string in the actual file write

// Success chime for completion
const SUCCESS_SOUND = 'data:audio/mp3;base64,//uQZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWgAAAA0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/7kGQAA/wAAAPAAAAAgAAAArchgAAAB4AAAAIAAAAK1oYAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//uQZAA/wAAAPAAAAAgAAAArchgAAAB4AAAAIAAAAK1oYAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'

export const useSound = () => {
    const { soundEnabled } = useSettings()

    const playClick = useCallback(() => {
        if (!soundEnabled) return
        const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3') // Soft click
        audio.volume = 0.2
        audio.play().catch(() => { }) // Ignore autoplay errors
    }, [soundEnabled])

    const playSuccess = useCallback(() => {
        if (!soundEnabled) return
        const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3') // Success chime
        audio.volume = 0.4
        audio.play().catch(() => { })
    }, [soundEnabled])

    const playHover = useCallback(() => {
        // Placeholder
    }, [])

    return { playClick, playSuccess, playHover }
}
