'use client'

import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import React, { useRef } from 'react'

interface CourseCardProps {
    id: string
    title: string
    description: string
    progress: number
    gradient: string
    icon: React.ReactNode
    moduleCount: number
    href: string
}

export default function CourseCard({
    id,
    title,
    description,
    progress,
    gradient,
    icon,
    moduleCount,
    href
}: CourseCardProps) {
    const ref = useRef<HTMLDivElement>(null)

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()

        const width = rect.width
        const height = rect.height

        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5

        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <Link href={href} className="block group perspective-1000">
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative h-full bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-colors duration-300"
            >
                {/* Gradient Glow Effect */}
                <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${gradient}`}
                    style={{ transform: "translateZ(-50px)" }}
                />

                {/* Content */}
                <div className="relative p-8 flex flex-col h-full z-10" style={{ transform: "translateZ(20px)" }}>
                    <div className="flex justify-between items-start mb-6">
                        <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300 ${gradient.replace('from-', 'text-').split(' ')[0]}`}>
                            {icon}
                        </div>
                        <div className="flex items-center gap-2 text-xs font-medium text-zinc-500 uppercase tracking-wider bg-white/5 px-3 py-1 rounded-full">
                            {moduleCount} Modules
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">
                        {title}
                    </h3>

                    <p className="text-zinc-400 text-sm leading-relaxed mb-8 flex-grow">
                        {description}
                    </p>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                        <div className="flex justify-between text-xs font-medium">
                            <span className="text-zinc-500">Progress</span>
                            <span className={progress === 100 ? 'text-green-400' : 'text-white'}>
                                {progress}%
                            </span>
                        </div>
                        <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className={`h-full rounded-full bg-gradient-to-r ${gradient}`}
                            />
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="mt-6 flex items-center gap-2 text-sm font-bold text-white opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                        <span>Enter Course</span>
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}
