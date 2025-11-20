'use server'

import { createClient } from '@supabase/supabase-js'

const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export interface AdminStats {
    totalRevenue: number
    activeStudents: number
    todaysSignups: number
    recentActivity: {
        type: 'signup' | 'redemption'
        user: string // email or ID
        time: string
    }[]
}

export async function getAdminStats(): Promise<AdminStats> {
    try {
        // 1. Get all claimed keys
        const { data: claimedKeys, error } = await supabaseAdmin
            .from('license_keys')
            .select('claimed_at, email, user_id')
            .eq('status', 'claimed')
        
        if (error) throw error

        // 2. Calculate Stats
        const activeStudents = claimedKeys.length
        const totalRevenue = activeStudents * 99 // Assuming $99 per key

        // 3. Calculate Today's Signups (Redemptions today)
        const today = new Date().toISOString().split('T')[0]
        const todaysSignups = claimedKeys.filter(k => k.claimed_at && k.claimed_at.startsWith(today)).length

        // 4. Recent Activity (Last 5 redemptions)
        const recentActivity = claimedKeys
            .sort((a, b) => new Date(b.claimed_at!).getTime() - new Date(a.claimed_at!).getTime())
            .slice(0, 5)
            .map(k => ({
                type: 'redemption' as const,
                user: k.email || k.user_id || 'Unknown User',
                time: new Date(k.claimed_at!).toLocaleString()
            }))

        return {
            totalRevenue,
            activeStudents,
            todaysSignups,
            recentActivity
        }
    } catch (error) {
        console.error('Error fetching admin stats:', error)
        return {
            totalRevenue: 0,
            activeStudents: 0,
            todaysSignups: 0,
            recentActivity: []
        }
    }
}

