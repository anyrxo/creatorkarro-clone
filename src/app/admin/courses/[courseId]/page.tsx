'use client';

import { useUser } from '@clerk/nextjs';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Save, Plus, Trash2, GripVertical } from 'lucide-react';
import Link from 'next/link';
import { learningContent } from '@/data/learning-content';

export default function CourseEditor() {
    const { user, isLoaded } = useUser();
    const router = useRouter();
    const params = useParams();
    const courseId = params.courseId as string;

    const [courseName, setCourseName] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [modules, setModules] = useState<any[]>([]);

    useEffect(() => {
        if (isLoaded && !user) {
            router.push('/sign-in');
        }

        // Load course data
        if (courseId && courseId !== 'new') {
            const course = learningContent[courseId];
            if (course) {
                setCourseName(course.title);
                setModules(course.modules);
            }
        }
    }, [isLoaded, user, router, courseId]);

    const handleSave = () => {
        // TODO: Implement save to database/file
        alert('Course saved! (This would save to your database)');
    };

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

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <Link
                            href="/admin"
                            className="p-2 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-lg transition-all"
                        >
                            <ArrowLeft className="w-5 h-5 text-purple-400" />
                        </Link>
                        <div>
                            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                                {courseId === 'new' ? 'Create New Course' : 'Edit Course'}
                            </h1>
                            <p className="text-purple-200/70 text-sm mt-1">
                                Manage course content, modules, and lessons
                            </p>
                        </div>
                    </div>
                    <button
                        onClick={handleSave}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 rounded-lg text-white font-medium transition-all"
                    >
                        <Save className="w-4 h-4" />
                        Save Changes
                    </button>
                </div>

                {/* Course Details */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8 mb-6"
                >
                    <h2 className="text-xl font-bold text-white mb-6">Course Details</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-purple-200 mb-2 text-sm font-medium">
                                Course Name
                            </label>
                            <input
                                type="text"
                                value={courseName}
                                onChange={(e) => setCourseName(e.target.value)}
                                className="w-full px-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500/50 transition-all"
                                placeholder="e.g., Instagram Growth Masterclass"
                            />
                        </div>
                        <div>
                            <label className="block text-purple-200 mb-2 text-sm font-medium">
                                Course Description
                            </label>
                            <textarea
                                value={courseDescription}
                                onChange={(e) => setCourseDescription(e.target.value)}
                                rows={4}
                                className="w-full px-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500/50 transition-all resize-none"
                                placeholder="Describe what students will learn..."
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Modules */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8"
                >
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-white">Modules & Lessons</h2>
                        <button className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-lg text-purple-200 transition-all">
                            <Plus className="w-4 h-4" />
                            Add Module
                        </button>
                    </div>

                    <div className="space-y-4">
                        {modules.map((courseModule, moduleIndex) => (
                            <div
                                key={moduleIndex}
                                className="bg-purple-500/5 border border-purple-500/20 rounded-xl p-6"
                            >
                                <div className="flex items-start gap-3 mb-4">
                                    <GripVertical className="w-5 h-5 text-purple-400/50 mt-1 cursor-move" />
                                    <div className="flex-1">
                                        <input
                                            type="text"
                                            value={courseModule.title}
                                            className="w-full px-3 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white text-lg font-medium focus:outline-none focus:border-purple-500/50"
                                            placeholder="Module name"
                                            readOnly
                                        />
                                    </div>
                                    <button className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-all">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>

                                <div className="ml-8 space-y-2">
                                    {courseModule.lessons.map((lesson: any, lessonIndex: number) => (
                                        <div
                                            key={lessonIndex}
                                            className="flex items-center gap-3 p-3 bg-purple-500/5 hover:bg-purple-500/10 border border-purple-500/10 rounded-lg transition-all"
                                        >
                                            <GripVertical className="w-4 h-4 text-purple-400/30 cursor-move" />
                                            <input
                                                type="text"
                                                value={lesson.title}
                                                className="flex-1 px-3 py-1.5 bg-transparent text-purple-100 focus:outline-none"
                                                placeholder="Lesson name"
                                                readOnly
                                            />
                                            <button className="p-1.5 text-red-400/70 hover:text-red-400 hover:bg-red-500/10 rounded transition-all">
                                                <Trash2 className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    ))}
                                    <button className="flex items-center gap-2 px-3 py-2 text-sm text-purple-300 hover:text-purple-200 hover:bg-purple-500/10 rounded-lg transition-all">
                                        <Plus className="w-3.5 h-3.5" />
                                        Add Lesson
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
