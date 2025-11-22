'use client'

import { useState, useEffect, useRef } from 'react'
import { learningContent } from '@/data/learning-content'
import { creatorScripts } from '@/data/creator-scripts'
import {
    Monitor, FileText, Video, Mic, ChevronRight, Layout, AlertCircle,
    Play, Pause, Settings, Copy, Check, Maximize2, Minimize2, Type
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function CreatorStudioPage() {
    // Selection State
    const [selectedCourseId, setSelectedCourseId] = useState<string>(Object.keys(learningContent)[0])
    const [selectedModuleId, setSelectedModuleId] = useState<string>('')
    const [selectedLessonId, setSelectedLessonId] = useState<string>('')

    // UI State
    const [mode, setMode] = useState<'studio' | 'teleprompter'>('studio')
    const [isPlaying, setIsPlaying] = useState(false)
    const [scrollSpeed, setScrollSpeed] = useState(1)
    const [fontSize, setFontSize] = useState(24)
    const [copied, setCopied] = useState(false)

    const scrollRef = useRef<HTMLDivElement>(null)

    // Derived Data
    const selectedCourse = learningContent[selectedCourseId]
    const modules = selectedCourse?.modules || []
    const selectedModule = modules.find(m => m.id === selectedModuleId)
    const lessons = selectedModule?.lessons || []
    const selectedLesson = lessons.find(l => l.id === selectedLessonId)
    // Use composite key to avoid collisions, fallback to simple ID for backward compatibility
    const scriptKey = selectedCourseId && selectedLessonId ? `${selectedCourseId}::${selectedLessonId}` : selectedLessonId
    const scriptData = scriptKey ? (creatorScripts[scriptKey] || creatorScripts[selectedLessonId]) : null

    // Auto-select logic
    useEffect(() => {
        if (selectedCourse && selectedCourse.modules.length > 0) {
            const firstModule = selectedCourse.modules[0]
            setSelectedModuleId(firstModule.id)
            if (firstModule.lessons.length > 0) {
                setSelectedLessonId(firstModule.lessons[0].id)
            }
        }
    }, [selectedCourseId, selectedCourse])

    useEffect(() => {
        const selectedModule = modules.find(m => m.id === selectedModuleId)
        if (selectedModule && selectedModule.lessons.length > 0) {
            setSelectedLessonId(selectedModule.lessons[0].id)
        }
    }, [selectedModuleId, modules])

    // Teleprompter Auto-Scroll
    useEffect(() => {
        let interval: NodeJS.Timeout
        if (isPlaying && scrollRef.current) {
            interval = setInterval(() => {
                if (scrollRef.current) {
                    scrollRef.current.scrollTop += scrollSpeed
                }
            }, 20)
        }
        return () => clearInterval(interval)
    }, [isPlaying, scrollSpeed])

    const handleCopy = () => {
        if (scriptData) {
            navigator.clipboard.writeText(scriptData.script)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }

    const wordCount = scriptData ? scriptData.script.split(/\s+/).length : 0
    const estimatedTime = Math.ceil(wordCount / 150) // 150 wpm

    return (
        <div className={cn(
            "min-h-screen font-sans transition-colors duration-500",
            mode === 'teleprompter' ? "bg-black text-white" : "bg-[#050505] text-white p-8"
        )}>
            {/* Header (Hidden in Teleprompter Mode) */}
            {mode === 'studio' && (
                <div className="flex items-center justify-between mb-8 border-b border-gray-800 pb-6">
                    <div>
                        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                            🎬 Creator Studio Pro
                        </h1>
                        <p className="text-gray-400 mt-2 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            Production-ready scripts & visual assets
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => setMode('teleprompter')}
                            className="px-5 py-2.5 bg-gray-900 hover:bg-gray-800 rounded-xl border border-gray-800 flex items-center gap-2 transition-all hover:border-gray-700"
                        >
                            <Maximize2 className="w-4 h-4 text-blue-400" />
                            <span className="font-medium">Teleprompter Mode</span>
                        </button>
                    </div>
                </div>
            )}

            {/* Teleprompter Controls Overlay */}
            {mode === 'teleprompter' && (
                <div className="fixed top-0 left-0 right-0 z-50 p-4 bg-gradient-to-b from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="max-w-4xl mx-auto bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl">
                        <button
                            onClick={() => setMode('studio')}
                            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                        >
                            <Minimize2 className="w-5 h-5" />
                        </button>

                        <div className="flex items-center gap-6">
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="w-12 h-12 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all transform hover:scale-105"
                            >
                                {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
                            </button>

                            <div className="flex items-center gap-3">
                                <span className="text-xs font-bold text-gray-500 uppercase">Speed</span>
                                <input
                                    type="range"
                                    min="1"
                                    max="5"
                                    step="0.5"
                                    value={scrollSpeed}
                                    onChange={(e) => setScrollSpeed(parseFloat(e.target.value))}
                                    className="w-32 accent-blue-500"
                                />
                            </div>

                            <div className="flex items-center gap-3">
                                <Type className="w-4 h-4 text-gray-500" />
                                <input
                                    type="range"
                                    min="24"
                                    max="72"
                                    value={fontSize}
                                    onChange={(e) => setFontSize(parseInt(e.target.value))}
                                    className="w-32 accent-purple-500"
                                />
                            </div>
                        </div>

                        <div className="w-8"></div> {/* Spacer */}
                    </div>
                </div>
            )}

            {/* Studio Controls (Hidden in Teleprompter) */}
            {mode === 'studio' && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-8">
                    <div className="md:col-span-3 space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Course</label>
                        <div className="relative">
                            <select
                                value={selectedCourseId}
                                onChange={(e) => setSelectedCourseId(e.target.value)}
                                className="w-full bg-[#111] border border-gray-800 rounded-xl px-4 py-3.5 text-white focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer hover:border-gray-700"
                            >
                                {Object.values(learningContent).map(course => (
                                    <option key={course.id} value={course.id}>{course.title}</option>
                                ))}
                            </select>
                            <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 rotate-90 pointer-events-none" />
                        </div>
                    </div>
                    <div className="md:col-span-3 space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Module</label>
                        <div className="relative">
                            <select
                                value={selectedModuleId}
                                onChange={(e) => setSelectedModuleId(e.target.value)}
                                className="w-full bg-[#111] border border-gray-800 rounded-xl px-4 py-3.5 text-white focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer hover:border-gray-700"
                            >
                                {modules.map(module => (
                                    <option key={module.id} value={module.id}>{module.title}</option>
                                ))}
                            </select>
                            <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 rotate-90 pointer-events-none" />
                        </div>
                    </div>
                    <div className="md:col-span-4 space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Lesson</label>
                        <div className="relative">
                            <select
                                value={selectedLessonId}
                                onChange={(e) => setSelectedLessonId(e.target.value)}
                                className="w-full bg-[#111] border border-gray-800 rounded-xl px-4 py-3.5 text-white focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer hover:border-gray-700"
                            >
                                {lessons.map(lesson => (
                                    <option key={lesson.id} value={lesson.id}>{lesson.title}</option>
                                ))}
                            </select>
                            <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 rotate-90 pointer-events-none" />
                        </div>
                    </div>
                    <div className="md:col-span-2 flex items-end">
                        <div className="w-full bg-[#111] border border-gray-800 rounded-xl px-4 py-3.5 flex items-center justify-between">
                            <div className="flex flex-col">
                                <span className="text-[10px] font-bold text-gray-500 uppercase">Duration</span>
                                <span className="text-sm font-bold text-white">{estimatedTime} mins</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-[10px] font-bold text-gray-500 uppercase">Words</span>
                                <span className="text-sm font-bold text-blue-400">{wordCount}</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Main Content */}
            {scriptData ? (
                mode === 'teleprompter' ? (
                    // TELEPROMPTER VIEW
                    <div
                        ref={scrollRef}
                        className="h-screen overflow-y-auto px-[20%] py-[40vh] scroll-smooth no-scrollbar"
                        style={{ fontSize: `${fontSize}px` }}
                    >
                        <div className="max-w-5xl mx-auto text-center leading-relaxed font-bold text-gray-100">
                            {scriptData.script.split('\n').map((line, i) => {
                                if (line.includes('👉')) return null // Hide cues in teleprompter
                                if (line.includes('(Slide:')) return null // Hide slide markers
                                if (line.includes('(Intro)')) return null
                                if (line.trim() === '') return <br key={i} />
                                return <p key={i} className="mb-8">{line}</p>
                            })}
                        </div>
                        {/* Mirror Guide Line */}
                        <div className="fixed top-1/2 left-0 right-0 h-0.5 bg-red-500/30 pointer-events-none z-40"></div>
                        <div className="fixed top-1/2 left-4 -translate-y-1/2 text-red-500/50 font-mono text-xs font-bold rotate-90 origin-left">READ HERE</div>
                    </div>
                ) : (
                    // STUDIO VIEW
                    <div className="grid lg:grid-cols-12 gap-8 h-[calc(100vh-250px)]">
                        {/* Left: Visual Slides (5 cols) */}
                        <div className="lg:col-span-5 flex flex-col h-full">
                            <div className="flex items-center justify-between mb-4 shrink-0">
                                <div className="flex items-center gap-2">
                                    <Layout className="w-5 h-5 text-purple-400" />
                                    <h2 className="text-xl font-bold">Slide Deck</h2>
                                </div>
                                <span className="text-xs font-bold bg-gray-800 px-2 py-1 rounded text-gray-400">
                                    {scriptData.slides.length} Slides
                                </span>
                            </div>

                            <div className="flex-1 overflow-y-auto pr-2 space-y-6 pb-10 custom-scrollbar">
                                {scriptData.slides.map((slide, idx) => (
                                    <div key={idx} className="group relative aspect-video bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/10 hover:border-purple-500/50 transition-all duration-300">
                                        {/* Slide Header */}
                                        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-start z-10">
                                            <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                                                <span className="text-[10px] font-bold text-gray-300 tracking-widest">SLIDE {idx + 1}</span>
                                            </div>
                                            <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                                        </div>

                                        {/* Slide Content */}
                                        <div className="absolute inset-0 flex flex-col justify-center items-center p-8 text-center">
                                            <h3 className="text-2xl font-black text-white mb-6 leading-tight tracking-tight">
                                                {slide.title}
                                            </h3>
                                            <div className="space-y-3 w-full max-w-md">
                                                {slide.bullets.map((bullet, bIdx) => (
                                                    <div key={bIdx} className="flex items-center gap-3 text-left">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0"></div>
                                                        <p className="text-sm font-medium text-gray-300 leading-snug">{bullet}</p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Visual Cue Overlay (Hover) */}
                                        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="text-center p-6">
                                                <Monitor className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                                                <p className="text-yellow-200 font-bold text-sm uppercase tracking-wider mb-1">Visual Cue</p>
                                                <p className="text-white font-medium">{slide.visualCue}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Script Editor (7 cols) */}
                        <div className="lg:col-span-7 flex flex-col h-full">
                            <div className="bg-[#111] border border-gray-800 rounded-2xl flex flex-col h-full shadow-2xl overflow-hidden">
                                {/* Toolbar */}
                                <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-gray-900/50 backdrop-blur-sm shrink-0">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-blue-500/10 rounded-lg">
                                            <FileText className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <h2 className="text-lg font-bold text-white">Script Editor</h2>
                                            <p className="text-xs text-gray-500">Read-only mode</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={handleCopy}
                                        className="flex items-center gap-2 px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-xs font-bold text-gray-300 transition-colors border border-gray-700"
                                    >
                                        {copied ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                                        {copied ? 'Copied!' : 'Copy Text'}
                                    </button>
                                </div>

                                {/* Script Content */}
                                <div className="flex-1 overflow-y-auto p-8 font-serif text-lg leading-relaxed text-gray-200 custom-scrollbar bg-[#0a0a0a]">
                                    {scriptData.script.split('\n').map((line, i) => {
                                        // Action Cues
                                        if (line.includes('👉 ACTION') || line.includes('👉 DEMO')) {
                                            return (
                                                <div key={i} className="my-8 p-5 bg-blue-900/10 border-l-4 border-blue-500 rounded-r-xl flex items-start gap-4 group hover:bg-blue-900/20 transition-colors">
                                                    <div className="p-2 bg-blue-500/20 rounded-lg shrink-0">
                                                        <AlertCircle className="w-5 h-5 text-blue-400" />
                                                    </div>
                                                    <div>
                                                        <p className="text-blue-200 font-sans text-base font-bold mb-1">ACTION ITEM</p>
                                                        <p className="text-blue-100/80 text-sm">{line.replace(/👉 (ACTION|DEMO):/, '').trim()}</p>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        // Slide Markers
                                        if (line.includes('(Slide:')) {
                                            return (
                                                <div key={i} className="mt-12 mb-6 flex items-center gap-4">
                                                    <div className="h-px flex-1 bg-gray-800"></div>
                                                    <div className="px-4 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-400 font-sans text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                                                        <Layout className="w-3 h-3" />
                                                        {line.replace(/[\(\)\*]/g, '').replace('Slide:', '').trim()}
                                                    </div>
                                                    <div className="h-px flex-1 bg-gray-800"></div>
                                                </div>
                                            )
                                        }
                                        // Intro/Outro Markers
                                        if (line.includes('(Intro)') || line.includes('(Outro)')) {
                                            return (
                                                <div key={i} className="mb-6 text-gray-600 font-sans text-xs font-bold uppercase tracking-widest text-center">
                                                    — {line.replace(/[\(\)\*]/g, '')} —
                                                </div>
                                            )
                                        }
                                        // Regular Text
                                        if (line.trim() === '') return <br key={i} />

                                        return <p key={i} className="mb-6 text-gray-300 leading-8 max-w-3xl mx-auto">{line}</p>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )
            ) : (
                <div className="flex flex-col items-center justify-center h-[60vh] bg-[#111] border border-gray-800 rounded-2xl border-dashed opacity-50">
                    <div className="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center mb-6 animate-pulse">
                        <Video className="w-10 h-10 text-gray-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">No Script Selected</h3>
                    <p className="text-gray-500 max-w-md text-center">
                        Select a course, module, and lesson from the dropdowns above to view the genius-level script and slides.
                    </p>
                </div>
            )}
        </div>
    )
}
