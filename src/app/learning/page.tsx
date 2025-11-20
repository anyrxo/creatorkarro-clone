'use client'

import { motion } from 'framer-motion'
import CourseCard from '@/components/learning/CourseCard'
import { Instagram, Bot, Package, Workflow, Sparkles } from 'lucide-react'
import { useCourse } from '@/context/CourseContext'
import { useEffect, useState } from 'react'

export default function LearningDashboard() {
    const { getCourseProgress } = useCourse()
    // We need to force a re-render or ensure progress is updated when mounting
    // The context handles this.

    const courses = [
        {
            id: 'instagram-ignited',
            title: 'Instagram Ignited',
            description: 'The 0 to 500K Follower System. Master viral hooks, algorithm domination, and monetization strategies.',
            gradient: 'from-red-500 to-orange-500',
            icon: <Instagram className="w-6 h-6 text-red-400" />,
            moduleCount: 4,
            href: '/learning/instagram-ignited'
        },
        {
            id: 'ai-influencers',
            title: 'AI Influencers Academy',
            description: 'Build a scalable empire with virtual models. Create photorealistic characters and monetize without showing your face.',
            gradient: 'from-pink-500 to-purple-500',
            icon: <Bot className="w-6 h-6 text-pink-400" />,
            moduleCount: 6,
            href: '/learning/ai-influencers'
        },
        {
            id: 'digital-products',
            title: 'Digital Products Empire',
            description: 'Turn knowledge into a $500K+ digital empire. Build once, sell forever with automated funnels.',
            gradient: 'from-green-500 to-emerald-500',
            icon: <Package className="w-6 h-6 text-green-400" />,
            moduleCount: 8,
            href: '/learning/digital-products'
        },
        {
            id: 'ai-automations',
            title: 'AI Automations Reimagined',
            description: 'The 6-Figure Agency Model. Build intelligent chatbots and workflows for high-ticket monthly retainers.',
            gradient: 'from-orange-500 to-amber-500',
            icon: <Workflow className="w-6 h-6 text-orange-400" />,
            moduleCount: 6,
            href: '/learning/ai-automations'
        }
    ]

    return (
        <div className="min-h-screen p-8 md:p-12 lg:p-16 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-16 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-px w-12 bg-purple-500/50" />
                        <span className="text-purple-400 text-sm font-bold tracking-widest uppercase">
                            Command Center
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                        Your Empire <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Awaits</span>
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl">
                        Select a protocol to begin. All systems are online.
                    </p>
                </motion.div>

                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 -z-10 opacity-20">
                    <Sparkles className="w-64 h-64 text-purple-500 blur-3xl" />
                </div>
            </div>

            {/* Course Grid */}
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                {courses.map((course, index) => (
                    <motion.div
                        key={course.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    >
                        <CourseCard
                            {...course}
                            progress={getCourseProgress(course.id)}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
