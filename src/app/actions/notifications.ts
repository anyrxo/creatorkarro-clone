'use server'

import { createClient } from '@supabase/supabase-js'

export async function sendNotification(userId: string, title: string, message: string, type: 'info' | 'success' | 'warning' | 'error' = 'info', link?: string) {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { error } = await supabaseAdmin
        .from('notifications')
        .insert({
            user_id: userId,
            title,
            message,
            type,
            link
        })

    return { success: !error, error: error?.message }
}

export async function getNotifications(userId: string) {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const { data, error } = await supabaseAdmin
        .from('notifications')
        .select('*')
        .or(`user_id.eq.${userId},user_id.eq.all`)
        .order('created_at', { ascending: false })
        .limit(50)

    if (error) {
        console.error('Error fetching notifications:', error)
        return []
    }
    return data
}

export async function markAsRead(notificationId: string) {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    await supabaseAdmin
        .from('notifications')
        .update({ read: true })
        .eq('id', notificationId)

    return { success: true }
}

export async function markAllAsRead(userId: string) {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    await supabaseAdmin
        .from('notifications')
        .update({ read: true })
        .or(`user_id.eq.${userId},user_id.eq.all`)
        .eq('read', false)

    return { success: true }
}
