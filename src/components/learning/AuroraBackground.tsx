'use client'

import { useEffect, useRef } from 'react'

export default function AuroraBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        let t = 0

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        window.addEventListener('resize', resize)
        resize()

        const render = () => {
            t += 0.002
            ctx.fillStyle = '#0a0a0a' // Base background
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Create multiple moving gradients
            const gradients = [
                { x: Math.sin(t) * 0.5 + 0.5, y: Math.cos(t * 0.8) * 0.5 + 0.5, color: 'rgba(168, 85, 247, 0.15)', r: 400 }, // Purple
                { x: Math.cos(t * 1.2) * 0.5 + 0.5, y: Math.sin(t * 1.5) * 0.5 + 0.5, color: 'rgba(236, 72, 153, 0.15)', r: 500 }, // Pink
                { x: Math.sin(t * 0.5 + 2) * 0.5 + 0.5, y: Math.cos(t * 0.9 + 1) * 0.5 + 0.5, color: 'rgba(59, 130, 246, 0.1)', r: 600 }, // Blue
            ]

            gradients.forEach(g => {
                const gradient = ctx.createRadialGradient(
                    g.x * canvas.width,
                    g.y * canvas.height,
                    0,
                    g.x * canvas.width,
                    g.y * canvas.height,
                    g.r
                )
                gradient.addColorStop(0, g.color)
                gradient.addColorStop(1, 'transparent')

                ctx.fillStyle = gradient
                ctx.fillRect(0, 0, canvas.width, canvas.height)
            })

            // Add subtle noise
            // (Optional: Noise can be heavy on performance, keeping it simple for now)

            animationFrameId = requestAnimationFrame(render)
        }

        render()

        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 pointer-events-none"
        />
    )
}
