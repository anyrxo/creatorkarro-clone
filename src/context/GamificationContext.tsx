'use client'

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'
import { useUser } from '@clerk/nextjs'
import { supabase } from '@/lib/supabase'
import { UserStats, XP_REWARDS, getLevelFromXP, Achievement, UserAchievement, DailyQuest, UserQuest, XPHistory } from '@/lib/gamification'

interface GamificationContextType {
  stats: UserStats | null
  achievements: UserAchievement[]
  quests: UserQuest[]
  xpHistory: XPHistory[]
  isLoading: boolean
  awardXP: (amount: number, reason: string) => Promise<void>
  updateStreak: () => Promise<number>
  refreshStats: () => Promise<void>
  checkAchievements: () => Promise<void>
}

const GamificationContext = createContext<GamificationContextType | undefined>(undefined)

export function GamificationProvider({ children }: { children: ReactNode }) {
  const { user, isLoaded } = useUser()
  const [stats, setStats] = useState<UserStats | null>(null)
  const [achievements, setAchievements] = useState<UserAchievement[]>([])
  const [quests, setQuests] = useState<UserQuest[]>([])
  const [xpHistory, setXpHistory] = useState<XPHistory[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const fetchStats = useCallback(async () => {
    if (!user) {
      setIsLoading(false)
      return
    }

    try {
      // 1. Fetch User Stats
      const { data: statsData, error: statsError } = await supabase
        .from('user_stats')
        .select('*')
        .eq('user_id', user.id)
        .single()

      if (statsError && statsError.code !== 'PGRST116') {
        console.error('Error fetching stats:', statsError)
      }

      if (!statsData) {
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
        setStats(statsData)
      }

      // 2. Fetch Achievements (Unlocked)
      const { data: achievementsData } = await supabase
        .from('user_achievements')
        .select('*, achievement:achievements(*)')
        .eq('user_id', user.id)

      if (achievementsData) setAchievements(achievementsData)

      // 3. Fetch/Initialize Daily Quests
      const { data: questsData } = await supabase
        .from('user_quests')
        .select('*, quest:daily_quests(*)')
        .eq('user_id', user.id)
        .eq('last_updated', new Date().toISOString().split('T')[0])

      if (questsData && questsData.length > 0) {
        setQuests(questsData)
      } else {
        // Initialize daily quests if missing for today
        const { data: activeQuests } = await supabase
          .from('daily_quests')
          .select('*')
          .eq('is_active', true)

        if (activeQuests) {
          const newUserQuests = activeQuests.map((quest: any) => ({
            user_id: user.id,
            quest_id: quest.id,
            progress: 0,
            is_completed: false,
            last_updated: new Date().toISOString().split('T')[0]
          }))

          const { data: insertedQuests } = await supabase
            .from('user_quests')
            .insert(newUserQuests)
            .select('*, quest:daily_quests(*)')

          if (insertedQuests) setQuests(insertedQuests)
        }
      }

      // 4. Fetch XP History (Recent)
      const { data: historyData } = await supabase
        .from('xp_history')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(10)

      if (historyData) setXpHistory(historyData)

    } catch (error) {
      console.error('Failed to fetch gamification data:', error)
    } finally {
      setIsLoading(false)
    }
  }, [user])

  useEffect(() => {
    if (isLoaded && user) {
      fetchStats()

      // Realtime Subscription
      const channel = supabase
        .channel('gamification_updates')
        .on(
          'postgres_changes',
          { event: '*', schema: 'public', table: 'user_stats', filter: `user_id=eq.${user.id}` },
          (payload) => {
            setStats(payload.new as UserStats)
          }
        )
        .on(
          'postgres_changes',
          { event: 'INSERT', schema: 'public', table: 'user_achievements', filter: `user_id=eq.${user.id}` },
          (payload) => {
            // Refresh achievements to get the joined data
            refreshStats()
            // TODO: Trigger Toast/Notification for Achievement Unlocked
          }
        )
        .subscribe()

      return () => {
        supabase.removeChannel(channel)
      }
    }
  }, [user, isLoaded, fetchStats])

  const awardXP = async (amount: number, reason: string) => {
    if (!user || !stats) return

    try {
      const newXP = stats.total_xp + amount
      const newLevel = getLevelFromXP(newXP)

      // 1. Update Stats
      const updates: any = {
        total_xp: newXP,
        current_level: newLevel
      }

      if (reason === 'lesson_complete') {
        updates.total_lessons_completed = stats.total_lessons_completed + 1
      }

      const { data, error } = await supabase
        .from('user_stats')
        .update(updates)
        .eq('user_id', user.id)
        .select()
        .single()

      if (!error && data) {
        setStats(data)

        // Level up check
        if (newLevel > stats.current_level) {
          console.log('🎉 LEVEL UP!', newLevel)
        }
      }

      // 2. Record History
      await supabase.from('xp_history').insert({
        user_id: user.id,
        amount,
        reason
      })

      // 3. Check for Quest Completion (if reason matches)
      if (reason === 'lesson_complete') {
        // Find 'complete_lesson' quest
        const lessonQuest = quests.find(q => q.quest?.quest_type === 'complete_lesson')
        if (lessonQuest && !lessonQuest.is_completed) {
          const newProgress = lessonQuest.progress + 1
          const isComplete = newProgress >= (lessonQuest.quest?.target_count || 1)

          await supabase
            .from('user_quests')
            .update({
              progress: newProgress,
              is_completed: isComplete
            })
            .eq('id', lessonQuest.id)

          if (isComplete) {
            // Award Quest XP recursively (careful of infinite loops, but reason is different)
            await awardXP(lessonQuest.quest?.xp_reward || 50, 'daily_quest_complete')
          }
        }
      }

      // 4. Check Achievements
      await checkAchievements()

    } catch (error) {
      console.error('Failed to award XP:', error)
    }
  }

  const checkAchievements = async () => {
    if (!user || !stats) return

    // Fetch all achievements
    const { data: allAchievements } = await supabase.from('achievements').select('*')
    if (!allAchievements) return

    const unlockedIds = new Set(achievements.map(ua => ua.achievement_id))
    const newUnlocks = []

    for (const achievement of allAchievements) {
      if (unlockedIds.has(achievement.id)) continue

      let unlocked = false
      switch (achievement.condition_type) {
        case 'xp_total':
          if (stats.total_xp >= achievement.condition_value) unlocked = true
          break
        case 'streak_days':
          if (stats.current_streak >= achievement.condition_value) unlocked = true
          break
        case 'lessons_count':
          if (stats.total_lessons_completed >= achievement.condition_value) unlocked = true
          break
      }

      if (unlocked) {
        newUnlocks.push({
          user_id: user.id,
          achievement_id: achievement.id
        })
        // Award Achievement XP
        await awardXP(achievement.xp_reward, 'achievement_unlocked')
      }
    }

    if (newUnlocks.length > 0) {
      await supabase.from('user_achievements').insert(newUnlocks)

      // Trigger Email for the first unlocked achievement in this batch
      // (To avoid spamming if multiple unlock at once, though SmartEmailSystem handles throttling too)
      const { triggerSmartEmail } = await import('@/app/actions/email-triggers')
      const firstAchievementId = newUnlocks[0].achievement_id
      const achievement = allAchievements.find(a => a.id === firstAchievementId)

      if (achievement) {
        await triggerSmartEmail('achievement_unlocked', { achievementName: achievement.title })
      }
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

        // Trigger Streak Email if streak increased
        if (newStreak > stats.current_streak) {
          const { triggerSmartEmail } = await import('@/app/actions/email-triggers')
          // Trigger for every 3, 7, 14, 30, etc days
          if ([3, 7, 14, 30, 60, 90, 100, 365].includes(newStreak)) {
            await triggerSmartEmail('streak_milestone', { streakDays: newStreak })
          }
        }
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
    <GamificationContext.Provider value={{
      stats,
      achievements,
      quests,
      xpHistory,
      isLoading,
      awardXP,
      updateStreak,
      refreshStats,
      checkAchievements
    }}>
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
