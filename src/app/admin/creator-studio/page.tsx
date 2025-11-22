'use client'

import { useState } from 'react'
import { learningContent } from '@/data/learning-content'
import { creatorScripts } from '@/data/creator-scripts'
import { Monitor, FileText, Video, Mic, ChevronRight, Layout, AlertCircle } from 'lucide-react'

export default function CreatorStudioPage() {
    const [selectedCourseId, setSelectedCourseId] = useState<string>(Object.keys(learningContent)[0])
    const [selectedModuleId, setSelectedModuleId] = useState<string>('')
    const [selectedLessonId, setSelectedLessonId] = useState<string>('')

    const selectedCourse = learningContent[selectedCourseId]
    const modules = selectedCourse?.modules || []
    const selectedModule = modules.find(m => m.id === selectedModuleId)
    const lessons = selectedModule?.lessons || []
    const selectedLesson = lessons.find(l => l.id === selectedLessonId)

    const scriptData = selectedLessonId ? creatorScripts[selectedLessonId] : null

    // Auto-select first module/lesson when course changes
    const handleCourseChange = (courseId: string) => {
        setSelectedCourseId(courseId)
        const course = learningContent[courseId]
        if (course && course.modules.length > 0) {
            setSelectedModuleId(course.modules[0].id)
            if (course.modules[0].lessons.length > 0) {
                setSelectedLessonId(course.modules[0].lessons[0].id)
            } else {
                setSelectedLessonId('')
            }
        }
    }

    const handleModuleChange = (moduleId: string) => {
        setSelectedModuleId(moduleId)
        const module = modules.find(m => m.id === moduleId)
        if (module && module.lessons.length > 0) {
            setSelectedLessonId(module.lessons[0].id)
        } else {
            setSelectedLessonId('')
        }
    }

    return (
        <div className="min-h-screen bg-black text-white p-8 font-sans">
            {/* Header */}
            <div className="flex items-center justify-between mb-8 border-b border-gray-800 pb-6">
                <div>
                    <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        🎬 Admin Creator Studio
                    </h1>
                    <p className="text-gray-400 mt-1">
                        Production-ready scripts & slide outlines for your course videos.
                    </p>
                </div>
                <div className="flex gap-3">
                    <div className="px-4 py-2 bg-gray-900 rounded-lg border border-gray-800 flex items-center gap-2">
                        <Mic className="w-4 h-4 text-red-500" />
                        <span className="text-sm font-medium">Teleprompter Mode</span>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Course</label>
                    <select
                        value={selectedCourseId}
                        onChange={(e) => handleCourseChange(e.target.value)}
                        className="w-full bg-[#111] border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors"
                    >
                        {Object.values(learningContent).map(course => (
                            <option key={course.id} value={course.id}>{course.title}</option>
                        ))}
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Module</label>
                    <select
                        value={selectedModuleId}
                        onChange={(e) => handleModuleChange(e.target.value)}
                        className="w-full bg-[#111] border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors"
                    >
                        {modules.map(module => (
                            <option key={module.id} value={module.id}>{module.title}</option>
                        ))}
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Lesson</label>
                    <select
                        value={selectedLessonId}
                        onChange={(e) => setSelectedLessonId(e.target.value)}
                        className="w-full bg-[#111] border border-gray-800 rounded-xl px-4 py-3 text-white focus:border-blue-500 outline-none transition-colors"
                    >
                        {lessons.map(lesson => (
                            <option key={lesson.id} value={lesson.id}>{lesson.title}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Main Content */}
            {scriptData ? (
                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Left: Slides (5 cols) */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Layout className="w-5 h-5 text-purple-400" />
                            <h2 className="text-xl font-bold">Slide Outline</h2>
                        </div>

                        {scriptData.slides.map((slide, idx) => (
                            <div key={idx} className="bg-[#111] border border-gray-800 rounded-xl overflow-hidden group hover:border-gray-700 transition-all">
                                <div className="bg-gray-900/50 px-4 py-2 border-b border-gray-800 flex justify-between items-center">
                                    <span className="text-xs font-bold text-gray-500 uppercase">Slide {idx + 1}</span>
                                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-lg font-bold text-white mb-3">{slide.title}</h3>
                                    <ul className="space-y-2 mb-4">
                                        {slide.bullets.map((bullet, bIdx) => (
                                            <li key={bIdx} className="flex items-start gap-2 text-gray-300 text-sm">
                                                <span className="mt-1.5 w-1 h-1 bg-gray-500 rounded-full shrink-0"></span>
                                                {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3 flex items-start gap-3">
                                        <Monitor className="w-4 h-4 text-yellow-500 mt-0.5 shrink-0" />
                                        <div className="text-xs text-yellow-200">
                                            <span className="font-bold block mb-0.5">VISUAL CUE:</span>
                                            {slide.visualCue}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Script (7 cols) */}
                    <div className="lg:col-span-7">
                        <div className="bg-[#111] border border-gray-800 rounded-2xl h-[calc(100vh-250px)] flex flex-col">
                            <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-gray-900/30 rounded-t-2xl">
                                <div className="flex items-center gap-2">
                                    <FileText className="w-5 h-5 text-blue-400" />
                                    <h2 className="text-xl font-bold">Video Script</h2>
                                </div>
                                <div className="text-xs text-gray-500 font-mono">
                                    {scriptData.script.length} chars
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto p-8 font-serif text-lg leading-relaxed text-gray-200">
                                {scriptData.script.split('\n').map((line, i) => {
                                    // Highlight cues
                                    if (line.includes('👉 ACTION') || line.includes('👉 DEMO')) {
                                        return (
                                            <div key={i} className="my-6 p-4 bg-blue-500/10 border-l-4 border-blue-500 rounded-r-lg text-blue-200 font-sans text-base font-bold">
                                                {line}
                                            </div>
                                        )
                                    }
                                    if (line.includes('(Slide:')) {
                                        return (
                                            <div key={i} className="mt-8 mb-4 text-purple-400 font-sans text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                                                <Layout className="w-4 h-4" />
                                                {line.replace(/\*\*/g, '')}
                                            </div>
                                        )
                                    }
                                    if (line.includes('(Intro)')) {
                                        return (
                                            <div key={i} className="mb-4 text-gray-500 font-sans text-sm font-bold uppercase tracking-wider">
                                                {line.replace(/\*\*/g, '')}
                                            </div>
                                        )
                                    }
                                    // Regular text
                                    if (line.trim() === '') return <br key={i} />

                                    return <p key={i} className="mb-4">{line}</p>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-[400px] bg-[#111] border border-gray-800 rounded-2xl border-dashed">
                    <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mb-4">
                        <Video className="w-8 h-8 text-gray-600" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">No Script Generated Yet</h3>
                    <p className="text-gray-400 max-w-md text-center mb-6">
                        We haven't generated the genius script for this lesson yet.
                        Select <b>Instagram Ignited &gt; Phase 1 &gt; The Viral Hook Framework</b> to see a demo.
                    </p>
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors flex items-center gap-2">
                        <Mic className="w-4 h-4" />
                        Generate with AI (Coming Soon)
                    </button>
                </div>
            )}
        </div>
    )
}
