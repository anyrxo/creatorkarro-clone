
'use server'

import { createClient } from '@supabase/supabase-js'
import { currentUser } from '@clerk/nextjs/server'

export async function getUserStats() {
    const user = await currentUser()
    if (!user) return { streak: 0, xp: 0, level: 'Novice', nextLevelXp: 1000 }

    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // 1. Get all completed lessons timestamps
    const { data: progress } = await supabaseAdmin
        .from('user_progress')
        .select('completed_at')
        .eq('user_id', user.id)
        .order('completed_at', { ascending: false })

    if (!progress || progress.length === 0) {
        return { streak: 0, xp: 0, level: 'Novice', nextLevelXp: 1000 }
    }

    // 2. Calculate XP (Simple: 100 XP per lesson)
    const xp = progress.length * 150
    
    // 3. Calculate Level
    let level = 'Novice'
    let nextLevelXp = 1000
    
    if (xp >= 1000) { level = 'Apprentice'; nextLevelXp = 2500 }
    if (xp >= 2500) { level = 'Builder'; nextLevelXp = 5000 }
    if (xp >= 5000) { level = 'Architect'; nextLevelXp = 10000 }
    if (xp >= 10000) { level = 'Empire Owner'; nextLevelXp = 25000 }
    if (xp >= 25000) { level = 'Sovereign'; nextLevelXp = 100000 }

    // 4. Calculate Streak
    // Get unique dates (YYYY-MM-DD)
    const uniqueDates = [...new Set(progress.map(p => p.completed_at.split('T')[0]))]
    
    let streak = 0
    const today = new Date().toISOString().split('T')[0]
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]

    // Check if they learned today or yesterday to keep streak alive
    if (uniqueDates.includes(today) || uniqueDates.includes(yesterday)) {
        streak = 1
        // Count backwards
        let checkDate = new Date()
        // If they haven't done today yet, start checking from yesterday
        if (!uniqueDates.includes(today)) {
            checkDate.setDate(checkDate.getDate() - 1)
        }

        while (true) {
            checkDate.setDate(checkDate.getDate() - 1)
            const dateStr = checkDate.toISOString().split('T')[0]
            if (uniqueDates.includes(dateStr)) {
                streak++
            } else {
                break
            }
        }
    }

    return { streak, xp, level, nextLevelXp }
}

