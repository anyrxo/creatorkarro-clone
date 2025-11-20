'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, PlayCircle, CheckCircle, FileText, Lock, Menu, X } from 'lucide-react'
import { CourseContent, Module, Lesson } from '@/data/learning-content'
import Link from 'next/link'
import { useCourse } from '@/context/CourseContext'

interface SidebarProps {
    course: CourseContent
    currentLessonId?: string
    onClose?: () => void // For mobile
}

export default function Sidebar({ course, currentLessonId, onClose }: SidebarProps) {
    const [openModules, setOpenModules] = useState<string[]>(course.modules.map(m => m.id))
    const { isLessonComplete, getCourseProgress } = useCourse()

    const toggleModule = (moduleId: string) => {
        setOpenModules(prev =>
            prev.includes(moduleId)
                ? prev.filter(id => id !== moduleId)
                : [...prev, moduleId]
        )
    }

    const progress = getCourseProgress(course.id)

    return (
        <div className="w-full h-full bg-zinc-900/95 backdrop-blur-xl md:bg-zinc-900/50 border-r border-white/5 overflow-y-auto custom-scrollbar flex flex-col">
            {/* Mobile Header */}
            <div className="md:hidden p-4 border-b border-white/5 flex justify-between items-center">
                <span className="font-bold text-white">Course Menu</span>
                <button onClick={onClose} className="p-2 text-zinc-400 hover:text-white">
                    <X className="w-6 h-6" />
                </button>
            </div>

            <div className="p-4 border-b border-white/5">
                <Link
                    href="/learning"
                    className="flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-white transition-colors mb-4"
                >
                    <ChevronDown className="w-3 h-3 rotate-90" />
                    Back to Dashboard
                </Link>
                <h2 className="text-lg font-bold text-white mb-2">{course.title}</h2>
                <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
                    <div
                        className="bg-purple-500 h-full transition-all duration-1000"
                        style={{ width: `${progress}%` }}
                    />
                </div>
                <p className="text-xs text-zinc-500 mt-2">{progress}% Complete</p>
            </div>

            <div className="p-4 space-y-4 flex-1">
                {course.modules.map((module, index) => (
                    <div key={module.id} className="border border-white/5 rounded-xl overflow-hidden bg-black/20">
                        <button
                            onClick={() => toggleModule(module.id)}
                            className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <div className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-medium border ${module.lessons.every(l => isLessonComplete(l.id))
                                        ? 'bg-green-500/20 text-green-400 border-green-500/30'
                                        : 'bg-white/5 text-zinc-400 border-white/10'
                                    }`}>
                                    {module.lessons.every(l => isLessonComplete(l.id)) ? <CheckCircle className="w-3 h-3" /> : index + 1}
                                </div>
                                <span className="text-sm font-medium text-zinc-300 text-left line-clamp-1">
                                    {module.title}
                                </span>
                            </div>
                            <ChevronDown
                                className={`w-4 h-4 text-zinc-500 transition-transform duration-300 ${openModules.includes(module.id) ? 'rotate-180' : ''
                                    }`}
                            />
                        </button>

                        <AnimatePresence>
                            {openModules.includes(module.id) && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="px-2 pb-2 space-y-1">
                                        {module.lessons.map((lesson) => {
                                            const isComplete = isLessonComplete(lesson.id)
                                            const isActive = currentLessonId === lesson.id

                                            return (
                                                <Link
                                                    key={lesson.id}
                                                    href={`/learning/${course.id}/${module.id}/${lesson.id}`}
                                                    onClick={onClose} // Close sidebar on mobile when clicked
                                                    className={`flex items-center gap-3 p-3 rounded-lg text-sm transition-all group ${isActive
                                                            ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                                                            : 'text-zinc-400 hover:bg-white/5 hover:text-white'
                                                        }`}
                                                >
                                                    {isComplete ? (
                                                        <CheckCircle className="w-4 h-4 flex-shrink-0 text-green-500" />
                                                    ) : lesson.type === 'video' ? (
                                                        <PlayCircle className={`w-4 h-4 flex-shrink-0 ${isActive ? 'text-purple-400' : 'group-hover:text-white'}`} />
                                                    ) : (
                                                        <FileText className="w-4 h-4 flex-shrink-0" />
                                                    )}
                                                    <span className={`line-clamp-1 flex-grow ${isComplete ? 'text-zinc-500 line-through decoration-zinc-700' : ''}`}>
                                                        {lesson.title}
                                                    </span>
                                                    <span className="text-xs opacity-50">{lesson.duration}</span>
                                                </Link>
                                            )
                                        })}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    )
}
