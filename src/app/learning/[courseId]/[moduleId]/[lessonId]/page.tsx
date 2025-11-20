'use client'

import { learningContent } from '@/data/learning-content'
import VideoPlayer from '@/components/learning/VideoPlayer'
import { useParams, useRouter } from 'next/navigation'
import { ArrowRight, CheckCircle, Download, FileText, ChevronLeft, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useCourse } from '@/context/CourseContext'
import { motion, AnimatePresence } from 'framer-motion'
import Confetti from '@/components/learning/Confetti'
import { useState, useEffect } from 'react'
import { useSound } from '@/hooks/useSound'

export default function LessonPage() {
    const params = useParams()
    const courseId = params.courseId as string
    const moduleId = params.moduleId as string
    const lessonId = params.lessonId as string
    const router = useRouter()

    const { markLessonComplete, isLessonComplete } = useCourse()
    const { playSuccess } = useSound()
    const [showConfetti, setShowConfetti] = useState(false)
    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})
    const [notes, setNotes] = useState('')

    const course = learningContent[courseId]
    const courseModule = course?.modules.find(m => m.id === moduleId)
    const lesson = courseModule?.lessons.find(l => l.id === lessonId)

    // Load checked items and notes from local storage
    useEffect(() => {
        if (lesson) {
            const savedItems = localStorage.getItem(`action_items_${lesson.id}`)
            if (savedItems) setCheckedItems(JSON.parse(savedItems))
            else setCheckedItems({})

            const savedNotes = localStorage.getItem(`notes_${lesson.id}`)
            if (savedNotes) setNotes(savedNotes)
            else setNotes('')
        }
    }, [lesson?.id])

    const toggleActionItem = (itemId: string) => {
        if (!lesson) return
        const newChecked = { ...checkedItems, [itemId]: !checkedItems[itemId] }
        setCheckedItems(newChecked)
        localStorage.setItem(`action_items_${lesson.id}`, JSON.stringify(newChecked))
    }

    const handleSaveNotes = (newNotes: string) => {
        setNotes(newNotes)
        if (lesson) {
            localStorage.setItem(`notes_${lesson.id}`, newNotes)
        }
    }

    if (!course || !courseModule || !lesson) return <div>Not found</div>

    const isCompleted = isLessonComplete(lesson.id)

    // Find next lesson logic
    const currentLessonIndex = courseModule.lessons.findIndex(l => l.id === lessonId)
    const nextLesson = courseModule.lessons[currentLessonIndex + 1]

    let nextLessonLink = null
    if (nextLesson) {
        nextLessonLink = `/learning/${courseId}/${moduleId}/${nextLesson.id}`
    } else {
        const currentModuleIndex = course.modules.findIndex(m => m.id === moduleId)
        const nextModule = course.modules[currentModuleIndex + 1]
        if (nextModule && nextModule.lessons.length > 0) {
            nextLessonLink = `/learning/${courseId}/${nextModule.id}/${nextModule.lessons[0].id}`
        }
    }

    const handleComplete = () => {
        if (!isCompleted) {
            markLessonComplete(lesson.id)
            setShowConfetti(true)
            playSuccess()
            setTimeout(() => setShowConfetti(false), 5000)
        }
        if (nextLessonLink) {
            router.push(nextLessonLink)
        }
    }

    return (
        <div className="p-6 md:p-10 max-w-6xl mx-auto relative">
            {showConfetti && <Confetti />}

            {/* Breadcrumb / Back */}
            <Link
                href={`/learning/${courseId}`}
                className="inline-flex items-center gap-2 text-zinc-500 hover:text-white mb-6 transition-colors text-sm"
            >
                <ChevronLeft className="w-4 h-4" />
                Back to Overview
            </Link>

            {/* Video Player or Text Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
            >
                {lesson.type === 'video' ? (
                    <VideoPlayer title={lesson.title} />
                ) : (
                    <div className="aspect-video bg-zinc-900/50 border border-white/5 rounded-2xl flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="w-20 h-20 bg-purple-500/10 rounded-full flex items-center justify-center mb-6 border border-purple-500/20 relative z-10">
                            <FileText className="w-10 h-10 text-purple-400" />
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2 relative z-10">{lesson.title}</h2>
                        <p className="text-zinc-400 max-w-md relative z-10">
                            This is a reading and action module. Please review the notes and complete the tasks below.
                        </p>
                    </div>
                )}
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
                {/* Main Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="lg:col-span-2"
                >
                    <div className="flex items-start justify-between mb-4">
                        <h1 className="text-3xl font-bold text-white">{lesson.title}</h1>
                        {isCompleted && (
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="flex items-center gap-2 text-green-400 bg-green-400/10 px-3 py-1 rounded-full text-sm font-medium border border-green-400/20"
                            >
                                <CheckCircle className="w-4 h-4" />
                                Completed
                            </motion.div>
                        )}
                    </div>

                    <div className="flex items-center gap-4 text-sm text-zinc-400 mb-8">
                        <span className="flex items-center gap-1">
                            <FileText className="w-4 h-4" />
                            Module: {courseModule.title}
                        </span>
                        <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                        <span>{lesson.duration}</span>
                    </div>

                    <div className="space-y-8">
                        {/* Lesson Content */}
                        <div className="prose prose-invert max-w-none">
                            <h3 className="text-xl font-bold text-white mb-4">Lesson Notes</h3>
                            <p className="text-zinc-400 leading-relaxed mb-6">
                                In this lesson, we dive deep into the core concepts of {lesson.title}.
                                Make sure to take notes and complete the action items below before proceeding to the next video.
                            </p>

                            {lesson.actionItems && lesson.actionItems.length > 0 && (
                                <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-6 mb-8">
                                    <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-purple-500" />
                                        Action Items
                                    </h4>
                                    <ul className="space-y-3">
                                        {lesson.actionItems.map((item) => (
                                            <li
                                                key={item.id}
                                                onClick={() => toggleActionItem(item.id)}
                                                className="flex items-start gap-3 text-zinc-300 cursor-pointer group select-none"
                                            >
                                                <div className={`w-5 h-5 rounded border flex items-center justify-center mt-0.5 flex-shrink-0 transition-all duration-200 ${checkedItems[item.id]
                                                    ? 'bg-purple-500 border-purple-500'
                                                    : 'border-zinc-700 group-hover:border-purple-500'
                                                    }`}>
                                                    {checkedItems[item.id] && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                                                </div>
                                                <span className={`transition-colors ${checkedItems[item.id] ? 'text-zinc-500 line-through' : 'group-hover:text-white'}`}>
                                                    {item.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Personal Notes Section */}
                        <div className="bg-zinc-900/30 border border-white/5 rounded-xl p-6">
                            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-yellow-500" />
                                My Notes
                            </h3>
                            <textarea
                                value={notes}
                                onChange={(e) => handleSaveNotes(e.target.value)}
                                placeholder="Write your key takeaways here..."
                                className="w-full h-40 bg-black/50 border border-white/10 rounded-lg p-4 text-zinc-300 focus:outline-none focus:border-purple-500 transition-colors resize-none placeholder:text-zinc-700"
                            />
                            <div className="mt-2 text-xs text-zinc-500 flex justify-between">
                                <span>Auto-saving...</span>
                                <span>{notes.length} chars</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Sidebar / Resources */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="space-y-6"
                >
                    {lesson.resources && lesson.resources.length > 0 && (
                        <div className="bg-zinc-900/30 border border-white/5 rounded-xl p-6">
                            <h3 className="font-bold text-white mb-4">Resources</h3>
                            <div className="space-y-3">
                                {lesson.resources.map((resource, idx) => (
                                    <a
                                        key={idx}
                                        href={resource.url}
                                        className="block w-full flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-sm text-zinc-300 group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <FileText className="w-4 h-4 text-purple-400" />
                                            <span className="group-hover:text-white transition-colors">{resource.title}</span>
                                        </div>
                                        <Download className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}

                    <button
                        onClick={handleComplete}
                        className={`w-full font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 ${isCompleted
                            ? 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
                            : 'bg-white text-black hover:bg-zinc-200 hover:scale-[1.02]'
                            }`}
                    >
                        {isCompleted ? (
                            <>
                                <span>Lesson Completed</span>
                                {nextLessonLink && <ArrowRight className="w-4 h-4" />}
                            </>
                        ) : (
                            <>
                                <span>Complete & Continue</span>
                                <ArrowRight className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </motion.div>
            </div>
        </div>
    )
}
