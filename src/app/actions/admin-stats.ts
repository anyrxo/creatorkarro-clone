'use server'

import { createClient } from '@supabase/supabase-js'
import { clerkClient } from '@clerk/nextjs/server'
import dns from 'node:dns'

// FORCE IPv4 for Node 18+ environments
try {
    if (dns.setDefaultResultOrder) {
        dns.setDefaultResultOrder('ipv4first')
    }
} catch (e) {
    // Ignore
}

const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
        auth: {
            persistSession: false // Critical for server actions
        }
    }
)

export interface AdminStats {
    totalRevenue: number
    activeStudents: number
    todaysSignups: number
    totalUsers: number
    recentActivity: {
        type: 'signup' | 'redemption'
        user: string // email or ID
        time: string
        status: 'paid' | 'free'
    }[]
}

export async function getAdminStats(): Promise<AdminStats> {
    try {
        // 1. Get all claimed keys from Supabase (Paid Users)
        const { data: claimedKeys, error } = await supabaseAdmin
            .from('license_keys')
            .select('claimed_at, email, user_id')
            .eq('status', 'claimed')
        
        if (error) {
            console.error('Error fetching license keys:', error)
            throw error
        }

        // Map of paid user IDs for quick lookup
        const paidUserIds = new Set(claimedKeys?.map(k => k.user_id) || [])

        // 2. Get All Users from Clerk
        const client = await clerkClient()
        const { data: clerkUsers, totalCount } = await client.users.getUserList({
            limit: 50, // Increased limit to see more recent activity
            orderBy: '-created_at'
        })

        // 3. Calculate Stats
        const activeStudents = claimedKeys?.length || 0
        const totalRevenue = activeStudents * 99 // Assuming $99 per key
        const totalUsers = totalCount

        // 4. Calculate Today's Signups (Clerk Creation)
        const today = new Date().toISOString().split('T')[0]
        const todaysSignups = clerkUsers.filter(u => 
            new Date(u.createdAt).toISOString().startsWith(today)
        ).length

        // 5. Recent Activity (Mix of Signups and Redemptions)
        const recentActivity = clerkUsers.map(u => {
            const isPaid = paidUserIds.has(u.id)
            const email = u.emailAddresses[0]?.emailAddress || 'No Email'
            
            return {
                type: 'signup' as const,
                user: email,
                time: new Date(u.createdAt).toLocaleString(),
                status: isPaid ? 'paid' as const : 'free' as const
            }
        })

        return {
            totalRevenue,
            activeStudents, // Paid Users
            todaysSignups,
            totalUsers, // All Users
            recentActivity
        }
    } catch (error) {
        console.error('Error fetching admin stats:', error)
        return {
            totalRevenue: 0,
            activeStudents: 0,
            todaysSignups: 0,
            totalUsers: 0,
            recentActivity: []
        }
    }
}
