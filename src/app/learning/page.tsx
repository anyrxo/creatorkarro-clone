'use client'

import { motion } from 'framer-motion'
import CourseCard from '@/components/learning/CourseCard'
import { Instagram, Bot, Package, Workflow, Sparkles, Trophy, Flame, Target, Clock } from 'lucide-react'
import { useCourse } from '@/context/CourseContext'
import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'

export default function LearningDashboard() {
    const { getCourseProgress, completedLessons } = useCourse()
    const { user } = useUser()
    const [greeting, setGreeting] = useState('')

    useEffect(() => {
        const hour = new Date().getHours()
        if (hour < 12) setGreeting('Good morning')
        else if (hour < 18) setGreeting('Good afternoon')
        else setGreeting('Good evening')
    }, [])

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

    const totalLessonsCompleted = completedLessons.length
    // Mock streak for now
    const currentStreak = totalLessonsCompleted > 0 ? 3 : 0

    return (
        <div className="min-h-screen p-6 md:p-12 lg:p-16 max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-12 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-6"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-px w-12 bg-purple-500/50" />
                            <span className="text-purple-400 text-sm font-bold tracking-widest uppercase">
                                Command Center
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                            {greeting}, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{user?.firstName || 'Creator'}</span>
                        </h1>
                        <p className="text-zinc-400 max-w-xl">
                            Your empire is waiting. Pick up where you left off or start a new protocol.
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="flex gap-4">
                        <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-4 flex items-center gap-4 min-w-[160px]">
                            <div className="p-3 bg-orange-500/10 rounded-xl">
                                <Flame className="w-6 h-6 text-orange-500" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-white">{currentStreak}</div>
                                <div className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Day Streak</div>
                            </div>
                        </div>
                        <div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-4 flex items-center gap-4 min-w-[160px]">
                            <div className="p-3 bg-purple-500/10 rounded-xl">
                                <Trophy className="w-6 h-6 text-purple-500" />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-white">{totalLessonsCompleted}</div>
                                <div className="text-xs text-zinc-500 uppercase font-bold tracking-wider">Lessons Done</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 -z-10 opacity-20 pointer-events-none">
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
