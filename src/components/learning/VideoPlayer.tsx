'use client'

import { Play, Volume2, Maximize, Settings, SkipForward } from 'lucide-react'

export default function VideoPlayer({ title }: { title: string }) {
    return (
        <div className="relative aspect-video bg-black rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-900/20 group">
            {/* Placeholder Gradient/Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black flex items-center justify-center">
                <div className="text-center">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 border border-white/20 group-hover:scale-110 transition-transform cursor-pointer">
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                    <p className="text-zinc-500 text-sm font-mono uppercase tracking-widest">
                        Premium Content Locked
                    </p>
                </div>
            </div>

            {/* Overlay Controls (Visible on Hover) */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Progress Bar */}
                <div className="w-full h-1 bg-white/20 rounded-full mb-4 cursor-pointer hover:h-2 transition-all">
                    <div className="w-[35%] h-full bg-purple-500 rounded-full relative">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg scale-0 group-hover:scale-100 transition-transform" />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <button className="text-white hover:text-purple-400 transition-colors">
                            <Play className="w-5 h-5 fill-white" />
                        </button>
                        <button className="text-white hover:text-purple-400 transition-colors">
                            <Volume2 className="w-5 h-5" />
                        </button>
                        <span className="text-xs font-medium text-zinc-300">04:20 / 12:45</span>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="text-white hover:text-purple-400 transition-colors" title="Next Lesson">
                            <SkipForward className="w-5 h-5" />
                        </button>
                        <button className="text-white hover:text-purple-400 transition-colors">
                            <Settings className="w-5 h-5" />
                        </button>
                        <button className="text-white hover:text-purple-400 transition-colors">
                            <Maximize className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Title Overlay */}
            <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-medium text-lg">{title}</h3>
            </div>
        </div>
    )
}
