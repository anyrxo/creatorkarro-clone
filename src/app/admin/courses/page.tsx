'use client'

import { learningContent } from '@/data/learning-content'
import Link from 'next/link'
import { Edit, Trash2, Plus, MoreVertical } from 'lucide-react'

export default function AdminCoursesPage() {
    const courses = Object.values(learningContent)

    return (
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-white">Course Management</h1>
                <button className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors">
                    <Plus className="w-4 h-4" />
                    New Course
                </button>
            </div>

            <div className="grid gap-4">
                {courses.map((course) => (
                    <div key={course.id} className="bg-zinc-900/50 border border-white/5 p-6 rounded-xl flex items-center justify-between group hover:border-white/10 transition-all">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-1">{course.title}</h3>
                            <p className="text-zinc-400 text-sm">{course.description}</p>
                            <div className="flex gap-4 mt-4 text-xs text-zinc-500">
                                <span>{course.modules.length} Modules</span>
                                <span>•</span>
                                <span>{course.modules.reduce((acc, m) => acc + m.lessons.length, 0)} Lessons</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <Link
                                href={`/admin/courses/${course.id}`}
                                className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            >
                                <Edit className="w-5 h-5" />
                            </Link>
                            <button className="p-2 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
                                <Trash2 className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
