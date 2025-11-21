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
  return Math.floor(100 * level * 1.5)
}

export function getLevelFromXP(xp: number): number {
  return Math.floor(Math.sqrt(xp / 75)) + 1
}

export function getXPProgress(currentXP: number, currentLevel: number): {
  current: number
  required: number
  percentage: number
} {
  const xpForCurrentLevel = getXPForLevel(currentLevel - 1)
  const xpForNextLevel = getXPForLevel(currentLevel)
  const xpInCurrentLevel = currentXP - xpForCurrentLevel
  const xpRequiredForLevel = xpForNextLevel - xpForCurrentLevel

  return {
    current: xpInCurrentLevel,
    required: xpRequiredForLevel,
    percentage: Math.min(100, (xpInCurrentLevel / xpRequiredForLevel) * 100)
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
