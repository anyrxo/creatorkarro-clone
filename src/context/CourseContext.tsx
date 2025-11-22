'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { learningContent } from '@/data/learning-content'
import { useUser } from '@clerk/nextjs'
import { supabase } from '@/lib/supabase'
import { XP_REWARDS } from '@/lib/gamification'
import { useGamification } from '@/context/GamificationContext'

interface CourseContextType {
    completedLessons: string[]
    markLessonComplete: (courseId: string, lessonId: string) => void
    isLessonComplete: (courseId: string, lessonId: string) => boolean
    getCourseProgress: (courseId: string) => number
    isLoading: boolean
}

const CourseContext = createContext<CourseContextType | undefined>(undefined)

export function CourseProvider({ children }: { children: ReactNode }) {
    const { user, isLoaded: isUserLoaded } = useUser()
    const [completedLessons, setCompletedLessons] = useState<string[]>([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const { awardXP, updateStreak } = useGamification()

    // Load from local storage on mount
    useEffect(() => {
        const saved = localStorage.getItem('iimagined_completed_lessons_v2')
        if (saved) {
            try {
                setCompletedLessons(JSON.parse(saved))
            } catch (e) {
                console.error('Failed to parse completed lessons', e)
            }
        }
        setIsLoaded(true)
    }, [])

    // Sync with Supabase when user is loaded
    useEffect(() => {
        async function syncWithSupabase() {
            if (!user || !isLoaded) {
                setIsLoading(false)
                return
            }

            try {
                const { data, error } = await supabase
                    .from('user_progress')
                    .select('lesson_id')
                    .eq('user_id', user.id)

                if (error) {
                    console.error('Error fetching progress:', error)
                    return
                }

                if (data) {
                    const dbLessons = data.map((row: { lesson_id: string }) => row.lesson_id)
                    const mergedLessons = Array.from(new Set([...completedLessons, ...dbLessons]))

                    if (mergedLessons.length !== completedLessons.length) {
                        setCompletedLessons(mergedLessons)
                    }
                }
            } catch (error) {
                console.error('Failed to sync with Supabase:', error)
            } finally {
                setIsLoading(false)
            }
        }

        if (isUserLoaded) {
            syncWithSupabase()
        }
    }, [user, isUserLoaded, isLoaded, completedLessons])

    // Save to local storage on change
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('iimagined_completed_lessons_v2', JSON.stringify(completedLessons))
        }
    }, [completedLessons, isLoaded])

    const markLessonComplete = async (courseId: string, lessonId: string) => {
        const uniqueLessonId = `${courseId}::${lessonId}`

        // Optimistic update
        setCompletedLessons(prev => {
            if (prev.includes(uniqueLessonId)) return prev
            return [...prev, uniqueLessonId]
        })

        // Save to Supabase if user is logged in
        if (user) {
            try {
                const today = new Date().toISOString().split('T')[0]

                const { error } = await supabase
                    .from('user_progress')
                    .upsert({
                        user_id: user.id,
                        lesson_id: uniqueLessonId,
                        course_id: courseId,
                        completed_at: new Date().toISOString(),
                        completed_date: today
                    }, { onConflict: 'user_id, lesson_id' })

                if (error) {
                    console.error('Error saving progress to Supabase:', error)
                    return
                }

                // Award XP and update streak via GamificationContext
                await awardXP(XP_REWARDS.LESSON_COMPLETE, 'lesson_complete')
                await updateStreak()

                // Check for Email Triggers
                // We calculate what the NEW progress is (assuming this lesson wasn't already complete)
                if (!completedLessons.includes(uniqueLessonId)) {
                    const { triggerSmartEmail } = await import('@/app/actions/email-triggers')

                    const course = learningContent[courseId]
                    if (course) {
                        let totalLessons = 0
                        let completedCount = 0

                        // Count total and completed (including this new one)
                        course.modules.forEach(m => {
                            m.lessons.forEach(l => {
                                totalLessons++
                                const lid = `${courseId}::${l.id}`
                                if (lid === uniqueLessonId || completedLessons.includes(lid)) {
                                    completedCount++
                                }
                            })
                        })

                        const progress = Math.round((completedCount / totalLessons) * 100)

                        if (completedCount === 1) {
                            await triggerSmartEmail('course_start', { courseId })
                        } else if (progress === 25) {
                            await triggerSmartEmail('course_progress_25', { courseId })
                        } else if (progress === 50) {
                            await triggerSmartEmail('course_progress_50', { courseId })
                        } else if (progress === 75) {
                            await triggerSmartEmail('course_progress_75', { courseId })
                        } else if (progress === 100) {
                            await triggerSmartEmail('course_complete', { courseId })
                        }
                    }
                }

            } catch (err) {
                console.error('Failed to save to Supabase:', err)
            }
        }
    }

    const isLessonComplete = (courseId: string, lessonId: string) => {
        return completedLessons.includes(`${courseId}::${lessonId}`)
    }

    const getCourseProgress = (courseId: string) => {
        const course = learningContent[courseId]
        if (!course) return 0

        let totalLessons = 0
        let completedCount = 0

        course.modules.forEach(module => {
            module.lessons.forEach(lesson => {
                totalLessons++
                if (isLessonComplete(courseId, lesson.id)) {
                    completedCount++
                }
            })
        })

        if (totalLessons === 0) return 0
        return Math.round((completedCount / totalLessons) * 100)
    }

    return (
        <CourseContext.Provider value={{ completedLessons, markLessonComplete, isLessonComplete, getCourseProgress, isLoading }}>
            {children}
        </CourseContext.Provider>
    )
}

export function useCourse() {
    const context = useContext(CourseContext)
    if (context === undefined) {
        throw new Error('useCourse must be used within a CourseProvider')
    }
    return context
}
