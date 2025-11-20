'use client'

import { useEffect, useState } from 'react'
import ReactConfetti from 'react-confetti'
import { useWindowSize } from 'react-use'

export default function Confetti() {
    const { width, height } = useWindowSize()
    const [recycle, setRecycle] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setRecycle(false)
        }, 5000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none z-[100]">
            <ReactConfetti
                width={width}
                height={height}
                recycle={recycle}
                numberOfPieces={500}
                gravity={0.2}
                colors={['#A855F7', '#EC4899', '#10B981', '#F59E0B', '#FFFFFF']}
            />
        </div>
    )
}
