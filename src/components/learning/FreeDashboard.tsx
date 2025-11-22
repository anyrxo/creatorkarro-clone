'use client'

import { motion } from 'framer-motion'
import { Instagram, Bot, Package, Workflow, Lock, Sparkles, Zap, Crown, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useUser } from '@clerk/nextjs'
import AIHookGenerator from '@/components/tools/AIHookGenerator'

export default function FreeDashboard() {
    const { user } = useUser()

    const courses = [
        {
            id: 'instagram-ignited',
            title: 'Instagram Ignited',
            description: 'The 0 to 500K Follower System. Master viral hooks, algorithm domination, and monetization strategies.',
            gradient: 'from-red-500 to-orange-500',
            icon: <Instagram className="w-6 h-6 text-red-400" />,
            moduleCount: 5,
            href: '/learning/instagram-ignited'
        },
        {
            id: 'ai-influencers',
            title: 'AI Influencers Academy',
            description: 'Build a scalable empire with virtual models. Create photorealistic characters and monetize without showing your face.',
            gradient: 'from-pink-500 to-purple-500',
            icon: <Bot className="w-6 h-6 text-pink-400" />,
            moduleCount: 5,
            href: '/learning/ai-influencers'
        },
        {
            id: 'digital-products',
            title: 'Digital Products Empire',
            description: 'Turn knowledge into a $100K+ digital empire. Build once, sell forever with automated funnels.',
            gradient: 'from-green-500 to-emerald-500',
            icon: <Package className="w-6 h-6 text-green-400" />,
            moduleCount: 5,
            href: '/learning/digital-products'
        },
        {
            id: 'ai-automations',
            title: 'AI Automations Reimagined',
            description: 'The 6-Figure Agency Model. Build intelligent chatbots and workflows for high-ticket monthly retainers.',
            gradient: 'from-orange-500 to-amber-500',
            icon: <Workflow className="w-6 h-6 text-orange-400" />,
            moduleCount: 5,
            href: '/learning/ai-automations'
        },
        {
            id: 'futures-trading',
            title: 'Futures Trading Mastery',
            description: '💰 BONUS: The Prop Firm Profit System. Make your first $5K in 30 days with our guaranteed trading blueprint.',
            gradient: 'from-yellow-500 to-amber-500',
            icon: <Zap className="w-6 h-6 text-yellow-400" />,
            moduleCount: 6,
            href: '/learning/futures-trading',
            isBonus: true
        }
    ]

    return (
        <div className="min-h-screen p-6 md:p-12 lg:p-16 max-w-7xl mx-auto">
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-12 text-center"
            >
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="h-px w-12 bg-gradient-to-r from-purple-500/50" />
                    <span className="text-purple-400 text-sm font-bold tracking-widest uppercase">
                        Free Preview
                    </span>
                    <div className="h-px w-12 bg-gradient-to-l from-purple-500/50" />
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
                    Welcome to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Creator Economy</span>
                </h1>
                <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
                    You&apos;re viewing a limited preview. Unlock the full platform to access all courses, tools, and resources to build your empire.
                </p>

                {/* Upgrade CTA */}
                <Link href="/redeem">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-bold text-lg overflow-hidden shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="relative flex items-center gap-2">
                            <Crown className="w-6 h-6" />
                            Unlock Full Access
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </motion.button>
                </Link>
            </motion.div>

            {/* Value Props */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                    { icon: Zap, title: '5 Complete Courses', desc: '100+ lessons including $5K trading bonus' },
                    { icon: Sparkles, title: 'AI-Powered Tools', desc: 'Hook generators, idea validators & more' },
                    { icon: Crown, title: 'Lifetime Access', desc: 'One-time payment, yours forever' }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-zinc-900/50 border border-white/10 rounded-xl p-6 text-center"
                    >
                        <div className="w-12 h-12 mx-auto mb-4 bg-purple-500/20 rounded-full flex items-center justify-center">
                            <item.icon className="w-6 h-6 text-purple-400" />
                        </div>
                        <h3 className="font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-sm text-zinc-500">{item.desc}</p>
                    </motion.div>
                ))}
            </div>

            {/* Free Tools Section */}
            <div className="mb-12">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-2">Your Creative Arsenal</h2>
                        <p className="text-zinc-400">Free tools to help you create better content</p>
                    </div>
                </div>

                <AIHookGenerator />
            </div>

            {/* Locked Course Grid */}
            <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Available Courses</h2>
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {courses.map((course, index) => (
                        <motion.div
                            key={course.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                        >
                            <Link href={course.href}>
                                <div className="group relative h-full bg-gradient-to-br from-zinc-900 to-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all cursor-pointer">
                                    {/* Lock/Bonus Badge */}
                                    <div className="absolute top-4 right-4 z-10">
                                        {course.isBonus ? (
                                            <div className="bg-gradient-to-r from-yellow-500 to-amber-500 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg">
                                                <Sparkles className="w-4 h-4 text-white" />
                                                <span className="text-xs font-bold text-white tracking-wide">BONUS</span>
                                            </div>
                                        ) : (
                                            <div className="bg-purple-500/20 backdrop-blur-md border border-purple-500/30 rounded-full p-2">
                                                <Lock className="w-5 h-5 text-purple-400" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Gradient Header */}
                                    <div className={`h-2 bg-gradient-to-r ${course.gradient}`} />

                                    <div className="p-6">
                                        <div className="flex items-start gap-4 mb-4">
                                            <div className={`p-3 rounded-xl bg-gradient-to-br ${course.gradient} bg-opacity-10`}>
                                                {course.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                                    {course.title}
                                                </h3>
                                                <p className="text-sm text-zinc-500 mb-3">{course.moduleCount} Modules</p>
                                            </div>
                                        </div>

                                        <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                                            {course.description}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <span className="text-purple-400 text-sm font-medium">Preview Lesson 1</span>
                                            <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>

                                    {/* Subtle glow effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`} />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-16 text-center bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-12"
            >
                <h3 className="text-3xl font-bold text-white mb-4">Ready to Build Your Empire?</h3>
                <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
                    Join thousands of creators who&apos;ve transformed their lives with our proven systems + $5K trading bonus.
                </p>
                <Link href="/redeem">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white font-bold text-lg shadow-2xl"
                    >
                        Unlock Now
                    </motion.button>
                </Link>
            </motion.div>
        </div>
    )
}
