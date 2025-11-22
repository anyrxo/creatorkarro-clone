'use client'

import { learningContent } from '@/data/learning-content'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { PlayCircle, ArrowRight, CheckCircle, Lock, BarChart3, Clock, Trophy, Sparkles, Flame, Zap, ChevronDown, FileText } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCourse } from '@/context/CourseContext'
import { useGamification } from '@/context/GamificationContext'
import LevelProgressBar from '@/components/gamification/LevelProgressBar'
import { useState } from 'react'

export default function CourseOverviewPage() {
    const params = useParams()
    const courseId = params.courseId as string
    const course = learningContent[courseId]
    const { getCourseProgress, isLessonComplete } = useCourse()
    const { stats } = useGamification()
    const [expandedModules, setExpandedModules] = useState<string[]>([])

    if (!course) return null

    const progress = getCourseProgress(courseId)

    const toggleModule = (moduleId: string) => {
        setExpandedModules(prev =>
            prev.includes(moduleId)
                ? prev.filter(id => id !== moduleId)
                : [...prev, moduleId]
        )
    }

    // Find the first incomplete lesson to "Continue Learning"
    let nextLessonUrl = null
    let nextLessonTitle = ""

    for (const courseModule of course.modules) {
        for (const lesson of courseModule.lessons) {
            if (!isLessonComplete(courseId, lesson.id)) {
                nextLessonUrl = `/learning/${courseId}/${courseModule.id}/${lesson.id}`
                nextLessonTitle = lesson.title
                break
            }
        }
        if (nextLessonUrl) break
    }

    // If all complete, link to the first one or a completion page (just first for now)
    if (!nextLessonUrl && course.modules.length > 0 && course.modules[0].lessons.length > 0) {
        nextLessonUrl = `/learning/${courseId}/${course.modules[0].id}/${course.modules[0].lessons[0].id}`
        nextLessonTitle = "Review Course"
    }

    return (
        <div className="p-8 md:p-12 max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div className="flex-1">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider">
                                <Trophy className="w-3 h-3" />
                                Course Overview
                            </div>
                            {stats && (
                                <div className="flex items-center gap-3 text-xs font-medium text-zinc-400">
                                    <div className="flex items-center gap-1">
                                        <Flame className="w-3 h-3 text-orange-500" />
                                        <span className="text-orange-400">{stats.current_streak} Day Streak</span>
                                    </div>
                                    <div className="w-1 h-1 bg-zinc-700 rounded-full" />
                                    <div className="flex items-center gap-1">
                                        <Zap className="w-3 h-3 text-yellow-500" />
                                        <span className="text-yellow-400">Lvl {stats.current_level}</span>
                                    </div>
                                </div>
                            )}
                        </div>

                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                            {course.title}
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed mb-8">
                            {course.description}
                        </p>

                        {/* Global Level Progress */}
                        {stats && (
                            <div className="max-w-md">
                                <LevelProgressBar
                                    currentXP={stats.total_xp}
                                    currentLevel={stats.current_level}
                                />
                            </div>
                        )}
                    </div>

                    {/* Progress Card */}
                    <div className="bg-zinc-900/50 border border-white/5 p-6 rounded-2xl min-w-[280px] backdrop-blur-sm">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-zinc-400 font-medium">Your Progress</span>
                            <span className="text-3xl font-bold text-white">{progress}%</span>
                        </div>
                        <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden mb-4">
                            <div
                                className="bg-gradient-to-r from-purple-500 to-pink-500 h-full transition-all duration-1000 ease-out"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        {nextLessonUrl && (
                            <>
                                <Link
                                    href={nextLessonUrl}
                                    className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 rounded-xl font-bold hover:bg-zinc-200 transition-colors"
                                >
                                    <PlayCircle className="w-4 h-4" />
                                    {progress === 0 ? 'Start Course' : progress === 100 ? 'Review Course' : 'Continue Learning'}
                                </Link>
                                <Link
                                    href={`/learning/${courseId}/resources`}
                                    className="w-full flex items-center justify-center gap-2 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 text-purple-200 py-3 rounded-xl font-medium transition-colors mt-3"
                                >
                                    <Sparkles className="w-4 h-4" />
                                    Resources & Tools
                                </Link>
                            </>
                        )}
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    <div className="bg-zinc-900/30 border border-white/5 p-4 rounded-xl flex items-center gap-4">
                        <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                            <BarChart3 className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white">{course.modules.length}</div>
                            <div className="text-xs text-zinc-500 uppercase">Modules</div>
                        </div>
                    </div>
                    <div className="bg-zinc-900/30 border border-white/5 p-4 rounded-xl flex items-center gap-4">
                        <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                            <PlayCircle className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white">
                                {course.modules.reduce((acc, m) => acc + m.lessons.length, 0)}
                            </div>
                            <div className="text-xs text-zinc-500 uppercase">Lessons</div>
                        </div>
                    </div>
                    <div className="bg-zinc-900/30 border border-white/5 p-4 rounded-xl flex items-center gap-4">
                        <div className="p-3 bg-orange-500/10 rounded-lg text-orange-400">
                            <Clock className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white">10+</div>
                            <div className="text-xs text-zinc-500 uppercase">Hours</div>
                        </div>
                    </div>
                    <div className="bg-zinc-900/30 border border-white/5 p-4 rounded-xl flex items-center gap-4">
                        <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                            <CheckCircle className="w-5 h-5" />
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white">
                                {course.modules.reduce((acc, m) => acc + m.lessons.filter(l => isLessonComplete(courseId, l.id)).length, 0)}
                            </div>
                            <div className="text-xs text-zinc-500 uppercase">Completed</div>
                        </div>
                    </div>
                </div>

                {/* Modules List */}
                <h2 className="text-2xl font-bold text-white mb-6">Course Modules</h2>
                <div className="space-y-4">
                    {course.modules.map((courseModule, index) => {
                        const completedLessons = courseModule.lessons.filter(l => isLessonComplete(courseId, l.id)).length
                        const totalLessons = courseModule.lessons.length
                        const isModuleComplete = completedLessons === totalLessons && totalLessons > 0
                        const isLocked = index > 0 && !course.modules[index - 1].lessons.every(l => isLessonComplete(courseId, l.id))
                        const isExpanded = expandedModules.includes(courseModule.id)

                        return (
                            <div
                                key={courseModule.id}
                                className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${isModuleComplete
                                    ? 'bg-zinc-900/20 border-green-500/20'
                                    : 'bg-zinc-900/40 border-white/5'
                                    }`}
                            >
                                <div
                                    className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 cursor-pointer hover:bg-white/5 transition-colors"
                                    onClick={() => toggleModule(courseModule.id)}
                                >
                                    {/* Module Number/Status */}
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold border flex-shrink-0 ${isModuleComplete
                                        ? 'bg-green-500/10 text-green-400 border-green-500/20'
                                        : 'bg-white/5 text-zinc-500 border-white/10'
                                        }`}>
                                        {isModuleComplete ? <CheckCircle className="w-6 h-6" /> : index + 1}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                                            {courseModule.title}
                                        </h3>
                                        <div className="flex items-center gap-4 text-sm text-zinc-500">
                                            <span>{totalLessons} Lessons</span>
                                            <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                                            <span>{completedLessons}/{totalLessons} Completed</span>
                                        </div>
                                    </div>

                                    {/* Action */}
                                    <div className="flex items-center gap-4">
                                        <ChevronDown className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                                    </div>
                                </div>

                                {/* Expanded Lesson List */}
                                <AnimatePresence>
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="border-t border-white/5 bg-black/20"
                                        >
                                            <div className="p-4 space-y-2">
                                                {courseModule.lessons.map((lesson, lIndex) => {
                                                    const isLessonCompleted = isLessonComplete(courseId, lesson.id)
                                                    const isLessonLocked = isLocked // Simplified lock logic

                                                    return (
                                                        <Link
                                                            key={lesson.id}
                                                            href={`/learning/${courseId}/${courseModule.id}/${lesson.id}`}
                                                            className={`flex items-center gap-4 p-4 rounded-xl transition-all ${isLessonCompleted
                                                                ? 'bg-green-500/5 hover:bg-green-500/10 text-green-100'
                                                                : 'hover:bg-white/5 text-zinc-300'
                                                                }`}
                                                        >
                                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border ${isLessonCompleted
                                                                ? 'bg-green-500/20 border-green-500/30 text-green-400'
                                                                : 'bg-white/5 border-white/10 text-zinc-500'
                                                                }`}>
                                                                {isLessonCompleted ? <CheckCircle className="w-4 h-4" /> : lIndex + 1}
                                                            </div>

                                                            <div className="flex-1">
                                                                <div className="font-medium mb-0.5">{lesson.title}</div>
                                                                <div className="flex items-center gap-3 text-xs text-zinc-500">
                                                                    <span className="flex items-center gap-1">
                                                                        <Clock className="w-3 h-3" />
                                                                        {lesson.duration}
                                                                    </span>
                                                                    {lesson.type === 'video' ? (
                                                                        <span className="flex items-center gap-1">
                                                                            <PlayCircle className="w-3 h-3" />
                                                                            Video
                                                                        </span>
                                                                    ) : (
                                                                        <span className="flex items-center gap-1">
                                                                            <FileText className="w-3 h-3" />
                                                                            Reading
                                                                        </span>
                                                                    )}
                                                                </div>
                                                            </div>

                                                            {isLessonCompleted ? (
                                                                <div className="text-xs font-bold text-green-500 uppercase tracking-wider">Completed</div>
                                                            ) : (
                                                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                                                    <PlayCircle className="w-4 h-4" />
                                                                </div>
                                                            )}
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Progress Bar Bottom */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-800/50">
                                    <div
                                        className={`h-full transition-all duration-1000 ${isModuleComplete ? 'bg-green-500' : 'bg-purple-500'}`}
                                        style={{ width: `${(completedLessons / totalLessons) * 100}%` }}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </motion.div>
        </div>
    )
}
