'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { learningContent } from '@/data/learning-content'
import { useUser } from '@clerk/nextjs'
import { supabase } from '@/lib/supabase'
import { XP_REWARDS } from '@/lib/gamification'

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
                    const dbLessons = data.map(row => row.lesson_id)
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

                // Award XP and update streak
                await awardLessonXP(user.id, today)
            } catch (err) {
                console.error('Failed to save to Supabase:', err)
            }
        }
    }

    const awardLessonXP = async (userId: string, completedDate: string) => {
        try {
            // Check if this is first lesson today
            const { data: todayLessons } = await supabase
                .from('user_progress')
                .select('lesson_id')
                .eq('user_id', userId)
                .eq('completed_date', completedDate)

            const isFirstToday = todayLessons && todayLessons.length === 1
            const xpToAward = XP_REWARDS.LESSON_COMPLETE + (isFirstToday ? XP_REWARDS.FIRST_LESSON_TODAY : 0)

            // Update streak
            const { data: stats } = await supabase
                .from('user_stats')
                .select('*')
                .eq('user_id', userId)
                .single()

            if (stats) {
                const lastActivity = stats.last_activity_date
                let newStreak = stats.current_streak

                if (!lastActivity) {
                    newStreak = 1
                } else if (lastActivity === completedDate) {
                    // Same day, no change
                } else {
                    const yesterday = new Date()
                    yesterday.setDate(yesterday.getDate() - 1)
                    const yesterdayStr = yesterday.toISOString().split('T')[0]

                    if (lastActivity === yesterdayStr) {
                        newStreak += 1
                        // Bonus XP for streak
                        const streakBonus = Math.min(newStreak * XP_REWARDS.DAILY_STREAK_BONUS, 100)
                        await supabase
                            .from('user_stats')
                            .update({
                                total_xp: stats.total_xp + xpToAward + streakBonus,
                                current_level: Math.floor(Math.sqrt((stats.total_xp + xpToAward + streakBonus) / 75)) + 1,
                                current_streak: newStreak,
                                longest_streak: Math.max(stats.longest_streak, newStreak),
                                last_activity_date: completedDate,
                                total_lessons_completed: stats.total_lessons_completed + 1
                            })
                            .eq('user_id', userId)
                        return
                    } else {
                        newStreak = 1
                    }
                }

                await supabase
                    .from('user_stats')
                    .update({
                        total_xp: stats.total_xp + xpToAward,
                        current_level: Math.floor(Math.sqrt((stats.total_xp + xpToAward) / 75)) + 1,
                        current_streak: newStreak,
                        longest_streak: Math.max(stats.longest_streak, newStreak),
                        last_activity_date: completedDate,
                        total_lessons_completed: stats.total_lessons_completed + 1
                    })
                    .eq('user_id', userId)
            }
        } catch (error) {
            console.error('Failed to award XP:', error)
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
