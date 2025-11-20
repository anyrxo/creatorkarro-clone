'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { learningContent } from '@/data/learning-content'

interface CourseContextType {
    completedLessons: string[]
    markLessonComplete: (lessonId: string) => void
    isLessonComplete: (lessonId: string) => boolean
    getCourseProgress: (courseId: string) => number
}

const CourseContext = createContext<CourseContextType | undefined>(undefined)

export function CourseProvider({ children }: { children: ReactNode }) {
    const [completedLessons, setCompletedLessons] = useState<string[]>([])
    const [isLoaded, setIsLoaded] = useState(false)

    // Load from local storage on mount
    useEffect(() => {
        const saved = localStorage.getItem('iimagined_completed_lessons')
        if (saved) {
            try {
                setCompletedLessons(JSON.parse(saved))
            } catch (e) {
                console.error('Failed to parse completed lessons', e)
            }
        }
        setIsLoaded(true)
    }, [])

    // Save to local storage on change
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('iimagined_completed_lessons', JSON.stringify(completedLessons))
        }
    }, [completedLessons, isLoaded])

    const markLessonComplete = (lessonId: string) => {
        setCompletedLessons(prev => {
            if (prev.includes(lessonId)) return prev
            return [...prev, lessonId]
        })
    }

    const isLessonComplete = (lessonId: string) => {
        return completedLessons.includes(lessonId)
    }

    const getCourseProgress = (courseId: string) => {
        const course = learningContent[courseId]
        if (!course) return 0

        let totalLessons = 0
        let completedCount = 0

        course.modules.forEach(module => {
            module.lessons.forEach(lesson => {
                totalLessons++
                if (completedLessons.includes(lesson.id)) {
                    completedCount++
                }
            })
        })

        if (totalLessons === 0) return 0
        return Math.round((completedCount / totalLessons) * 100)
    }

    return (
        <CourseContext.Provider value={{ completedLessons, markLessonComplete, isLessonComplete, getCourseProgress }}>
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
