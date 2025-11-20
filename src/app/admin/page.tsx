'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    BookOpen,
    Users,
    Settings,
    BarChart3,
    Edit,
    Plus,
    Trash2,
    Eye
} from 'lucide-react';
import Link from 'next/link';

interface CourseStats {
    totalCourses: number;
    totalLessons: number;
    totalStudents: number;
    completionRate: number;
}

export default function AdminDashboard() {
    const { user, isLoaded } = useUser();
    const router = useRouter();
    const [stats, setStats] = useState<CourseStats>({
        totalCourses: 4,
        totalLessons: 48,
        totalStudents: 127,
        completionRate: 68,
    });

    // Check if user is admin (you can customize this logic)
    useEffect(() => {
        if (isLoaded && !user) {
            router.push('/sign-in');
        }
    }, [isLoaded, user, router]);

    if (!isLoaded || !user) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-[#0a0118] via-[#1a0b2e] to-[#0a0118] flex items-center justify-center">
                <div className="text-purple-400">Loading...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0a0118] via-[#1a0b2e] to-[#0a0118] p-8">
            {/* Aurora Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
                        Admin Dashboard
                    </h1>
                    <p className="text-purple-200/70">
                        Welcome back, {user.firstName || 'Admin'}
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {[
                        { label: 'Total Courses', value: stats.totalCourses, icon: BookOpen, color: 'purple' },
                        { label: 'Total Lessons', value: stats.totalLessons, icon: BarChart3, color: 'violet' },
                        { label: 'Students', value: stats.totalStudents, icon: Users, color: 'fuchsia' },
                        { label: 'Avg Completion', value: `${stats.completionRate}%`, icon: BarChart3, color: 'pink' },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <stat.icon className={`w-8 h-8 text-${stat.color}-400`} />
                                <div className={`text-3xl font-bold text-${stat.color}-400`}>
                                    {stat.value}
                                </div>
                            </div>
                            <div className="text-purple-200/70 text-sm">{stat.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Quick Actions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 mb-8"
                >
                    <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Link
                            href="/admin/courses/new"
                            className="flex items-center gap-3 p-4 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-xl transition-all group"
                        >
                            <Plus className="w-5 h-5 text-purple-400 group-hover:scale-110 transition-transform" />
                            <span className="text-purple-200">Create New Course</span>
                        </Link>
                        <Link
                            href="/admin/courses"
                            className="flex items-center gap-3 p-4 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 rounded-xl transition-all group"
                        >
                            <Edit className="w-5 h-5 text-violet-400 group-hover:scale-110 transition-transform" />
                            <span className="text-violet-200">Manage Courses</span>
                        </Link>
                        <Link
                            href="/learning"
                            className="flex items-center gap-3 p-4 bg-fuchsia-500/10 hover:bg-fuchsia-500/20 border border-fuchsia-500/30 rounded-xl transition-all group"
                        >
                            <Eye className="w-5 h-5 text-fuchsia-400 group-hover:scale-110 transition-transform" />
                            <span className="text-fuchsia-200">View as Student</span>
                        </Link>
                    </div>
                </motion.div>

                {/* Courses List */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-white">All Courses</h2>
                        <Link
                            href="/admin/courses/new"
                            className="px-4 py-2 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 rounded-lg text-white font-medium transition-all"
                        >
                            Add Course
                        </Link>
                    </div>

                    <div className="space-y-4">
                        {[
                            { id: 'instagram-growth', name: 'Instagram Growth (0 to 500K)', lessons: 12, students: 45 },
                            { id: 'ai-influencers', name: 'AI Virtual Models & Influencers', lessons: 10, students: 32 },
                            { id: 'automated-empire', name: 'Automated Business Empire', lessons: 15, students: 28 },
                            { id: 'ai-agency', name: 'AI Automation Agency', lessons: 11, students: 22 },
                        ].map((course) => (
                            <div
                                key={course.id}
                                className="flex items-center justify-between p-4 bg-purple-500/5 hover:bg-purple-500/10 border border-purple-500/20 rounded-xl transition-all"
                            >
                                <div>
                                    <h3 className="text-white font-medium mb-1">{course.name}</h3>
                                    <div className="flex gap-4 text-sm text-purple-200/70">
                                        <span>{course.lessons} lessons</span>
                                        <span>•</span>
                                        <span>{course.students} students</span>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Link
                                        href={`/admin/courses/${course.id}`}
                                        className="p-2 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-lg transition-all"
                                    >
                                        <Edit className="w-4 h-4 text-purple-400" />
                                    </Link>
                                    <Link
                                        href={`/learning/${course.id}`}
                                        className="p-2 bg-violet-500/10 hover:bg-violet-500/20 border border-violet-500/30 rounded-lg transition-all"
                                    >
                                        <Eye className="w-4 h-4 text-violet-400" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
