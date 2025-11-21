'use client'

import { useEffect } from 'react'

export default function DisableCopy() {
    useEffect(() => {
        const handleContextMenu = (e: MouseEvent) => {
            e.preventDefault()
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            // Prevent Ctrl+C, Ctrl+V, Ctrl+X, Ctrl+U, Ctrl+S, Ctrl+P
            if (
                (e.ctrlKey || e.metaKey) &&
                ['c', 'v', 'x', 'u', 's', 'p', 'a'].includes(e.key.toLowerCase())
            ) {
                e.preventDefault()
            }

            // Prevent F12 (DevTools) - optional, but often requested with "no copy"
            if (e.key === 'F12') {
                e.preventDefault()
            }
        }

        document.addEventListener('contextmenu', handleContextMenu)
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('contextmenu', handleContextMenu)
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    return null
}
