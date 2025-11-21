'use client'

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'
import { useUser } from '@clerk/nextjs'
import { supabase } from '@/lib/supabase'
import { UserStats, XP_REWARDS, getLevelFromXP } from '@/lib/gamification'

interface GamificationContextType {
  stats: UserStats | null
  isLoading: boolean
  awardXP: (amount: number, reason?: string) => Promise<void>
  updateStreak: () => Promise<number>
  refreshStats: () => Promise<void>
}

const GamificationContext = createContext<GamificationContextType | undefined>(undefined)

export function GamificationProvider({ children }: { children: ReactNode }) {
  const { user, isLoaded } = useUser()
  const [stats, setStats] = useState<UserStats | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchStats = useCallback(async () => {
    if (!user) {
      setIsLoading(false)
      return
    }

    try {
      const { data, error } = await supabase
        .from('user_stats')
        .select('*')
        .eq('user_id', user.id)
        .single()

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching stats:', error)
        return
      }

      if (!data) {
        // Create initial stats
        const { data: newStats, error: insertError } = await supabase
          .from('user_stats')
          .insert({
            user_id: user.id,
            total_xp: 0,
            current_level: 1,
            current_streak: 0,
            longest_streak: 0,
            total_lessons_completed: 0
          })
          .select()
          .single()

        if (!insertError && newStats) {
          setStats(newStats)
        }
      } else {
        setStats(data)
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error)
    } finally {
      setIsLoading(false)
    }
  }, [user])

  useEffect(() => {
    if (isLoaded) {
      fetchStats()
    }
  }, [user, isLoaded, fetchStats])

  const awardXP = async (amount: number, reason?: string) => {
    if (!user || !stats) return

    try {
      const newXP = stats.total_xp + amount
      const newLevel = getLevelFromXP(newXP)

      const { data, error } = await supabase
        .from('user_stats')
        .update({
          total_xp: newXP,
          current_level: newLevel
        })
        .eq('user_id', user.id)
        .select()
        .single()

      if (!error && data) {
        setStats(data)

        // Level up animation
        if (newLevel > stats.current_level) {
          console.log('🎉 LEVEL UP!', newLevel)
          // TODO: Trigger level up modal/animation
        }
      }
    } catch (error) {
      console.error('Failed to award XP:', error)
    }
  }

  const updateStreak = async (): Promise<number> => {
    if (!user || !stats) return 0

    try {
      const today = new Date().toISOString().split('T')[0]
      const lastActivity = stats.last_activity_date

      let newStreak = stats.current_streak

      if (!lastActivity) {
        newStreak = 1
      } else if (lastActivity === today) {
        // Same day, no change
        return newStreak
      } else {
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        const yesterdayStr = yesterday.toISOString().split('T')[0]

        if (lastActivity === yesterdayStr) {
          // Consecutive day
          newStreak += 1
        } else {
          // Broke streak
          newStreak = 1
        }
      }

      const { data, error } = await supabase
        .from('user_stats')
        .update({
          current_streak: newStreak,
          longest_streak: Math.max(stats.longest_streak, newStreak),
          last_activity_date: today
        })
        .eq('user_id', user.id)
        .select()
        .single()

      if (!error && data) {
        setStats(data)
      }

      return newStreak
    } catch (error) {
      console.error('Failed to update streak:', error)
      return 0
    }
  }

  const refreshStats = async () => {
    await fetchStats()
  }

  return (
    <GamificationContext.Provider value={{ stats, isLoading, awardXP, updateStreak, refreshStats }}>
      {children}
    </GamificationContext.Provider>
  )
}

export function useGamification() {
  const context = useContext(GamificationContext)
  if (context === undefined) {
    throw new Error('useGamification must be used within a GamificationProvider')
  }
  return context
}
