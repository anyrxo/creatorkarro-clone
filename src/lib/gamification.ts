export interface UserStats {
  user_id: string
  total_xp: number
  current_level: number
  current_streak: number
  longest_streak: number
  last_activity_date: string | null
  total_lessons_completed: number
  created_at: string
}

export function getXPForLevel(level: number): number {
  // Formula: XP = 75 * (Level - 1)^2
  // This is the inverse of Level = sqrt(XP / 75) + 1
  if (level <= 1) return 0
  return Math.floor(75 * Math.pow(level - 1, 2))
}

export function getLevelFromXP(xp: number): number {
  return Math.floor(Math.sqrt(xp / 75)) + 1
}

export function getXPProgress(currentXP: number, currentLevel: number): {
  current: number
  required: number
  percentage: number
} {
  const xpForCurrentLevel = getXPForLevel(currentLevel)
  const xpForNextLevel = getXPForLevel(currentLevel + 1)
  const xpInCurrentLevel = currentXP - xpForCurrentLevel
  const xpRequiredForLevel = xpForNextLevel - xpForCurrentLevel

  return {
    current: Math.max(0, xpInCurrentLevel),
    required: xpRequiredForLevel,
    percentage: Math.min(100, Math.max(0, (xpInCurrentLevel / xpRequiredForLevel) * 100))
  }
}

export const XP_REWARDS = {
  LESSON_COMPLETE: 50,
  MODULE_COMPLETE: 200,
  COURSE_COMPLETE: 1000,
  DAILY_STREAK_BONUS: 10,
  FIRST_LESSON_TODAY: 25
}

export function getStreakEmoji(streak: number): string {
  if (streak >= 100) return '💎'
  if (streak >= 30) return '🏆'
  if (streak >= 7) return '🔥'
  if (streak >= 3) return '⚡'
  return '🌟'
}

export function getLevelBadge(level: number): { emoji: string; color: string; title: string } {
  if (level >= 20) return { emoji: '👑', color: 'from-yellow-400 to-orange-500', title: 'Legendary' }
  if (level >= 15) return { emoji: '💎', color: 'from-purple-400 to-pink-500', title: 'Diamond' }
  if (level >= 10) return { emoji: '💠', color: 'from-cyan-400 to-blue-500', title: 'Platinum' }
  if (level >= 5) return { emoji: '⭐', color: 'from-green-400 to-emerald-500', title: 'Gold' }
  return { emoji: '🌱', color: 'from-zinc-400 to-zinc-500', title: 'Bronze' }
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: string
  xp_reward: number
  category: 'learning' | 'social' | 'streak' | 'creation'
  condition_type: 'lessons_count' | 'streak_days' | 'xp_total'
  condition_value: number
}

export interface UserAchievement {
  id: string
  user_id: string
  achievement_id: string
  unlocked_at: string
  achievement?: Achievement
}

export interface DailyQuest {
  id: string
  title: string
  description: string
  xp_reward: number
  target_count: number
  quest_type: 'complete_lesson' | 'login' | 'share_content'
}

export interface UserQuest {
  id: string
  user_id: string
  quest_id: string
  progress: number
  is_completed: boolean
  last_updated: string
  quest?: DailyQuest
}

export interface XPHistory {
  id: string
  user_id: string
  amount: number
  reason: string
  created_at: string
}
