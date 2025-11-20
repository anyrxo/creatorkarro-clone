'use client'

import { learningContent } from '@/data/learning-content'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { PlayCircle, ArrowRight, CheckCircle, Lock, BarChart3, Clock, Trophy } from 'lucide-react'
import { motion } from 'framer-motion'
import { useCourse } from '@/context/CourseContext'

export default function CourseOverviewPage() {
    const params = useParams()
    const courseId = params.courseId as string
    const course = learningContent[courseId]
    const { getCourseProgress, isLessonComplete } = useCourse()

    if (!course) return null

    const progress = getCourseProgress(courseId)

    // Find the first incomplete lesson to "Continue Learning"
    let nextLessonUrl = null
    let nextLessonTitle = ""

    for (const courseModule of course.modules) {
        for (const lesson of courseModule.lessons) {
            if (!isLessonComplete(lesson.id)) {
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
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-6">
                            <Trophy className="w-3 h-3" />
                            Course Overview
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                            {course.title}
                        </h1>
                        <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
                            {course.description}
                        </p>
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
                            <Link
                                href={nextLessonUrl}
                                className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 rounded-xl font-bold hover:bg-zinc-200 transition-colors"
                            >
                                <PlayCircle className="w-4 h-4" />
                                {progress === 0 ? 'Start Course' : progress === 100 ? 'Review Course' : 'Continue Learning'}
                            </Link>
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
                                {course.modules.reduce((acc, m) => acc + m.lessons.filter(l => isLessonComplete(l.id)).length, 0)}
                            </div>
                            <div className="text-xs text-zinc-500 uppercase">Completed</div>
                        </div>
                    </div>
                </div>

                {/* Modules List */}
                <h2 className="text-2xl font-bold text-white mb-6">Course Modules</h2>
                <div className="space-y-4">
                    {course.modules.map((courseModule, index) => {
                        const completedLessons = courseModule.lessons.filter(l => isLessonComplete(l.id)).length
                        const totalLessons = courseModule.lessons.length
                        const isModuleComplete = completedLessons === totalLessons && totalLessons > 0
                        const isLocked = index > 0 && !course.modules[index - 1].lessons.every(l => isLessonComplete(l.id))
                        // For now, we won't strictly lock modules, but we can visually indicate it

                        return (
                            <div
                                key={courseModule.id}
                                className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${isModuleComplete
                                    ? 'bg-zinc-900/20 border-green-500/20 hover:border-green-500/40'
                                    : 'bg-zinc-900/40 border-white/5 hover:border-white/10'
                                    }`}
                            >
                                <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
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
                                        {courseModule.lessons.length > 0 && (
                                            <Link
                                                href={`/learning/${courseId}/${courseModule.id}/${courseModule.lessons[0].id}`}
                                                className={`px-6 py-3 rounded-xl font-medium text-sm transition-all ${isModuleComplete
                                                    ? 'bg-white/5 text-white hover:bg-white/10'
                                                    : 'bg-white text-black hover:bg-zinc-200'
                                                    }`}
                                            >
                                                {isModuleComplete ? 'Review Module' : 'Start Module'}
                                            </Link>
                                        )}
                                    </div>
                                </div>

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
