'use server'

import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { currentUser } from '@clerk/nextjs/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const ADMIN_EMAILS = [
    'mannan0010@gmail.com',
    'sirenxmedia@gmail.com'
]

export async function getStudentsForBroadcast() {
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // Fetch profiles with their license keys
    const { data: profiles, error } = await supabaseAdmin
        .from('profiles')
        .select('email, user_id, created_at, license_keys(status, plan_id)')
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching students:', error)
        return []
    }

    return profiles.map((p: any) => {
        const hasKey = p.license_keys && p.license_keys.length > 0
        const isPaid = hasKey && (p.license_keys[0].status === 'active' || p.license_keys[0].status === 'claimed')

        return {
            email: p.email,
            userId: p.user_id,
            joinedAt: p.created_at,
            status: isPaid ? 'paid' : 'free',
            plan: hasKey ? p.license_keys[0].plan_id : null
        }
    }).filter((s: any) => s.email && s.email.includes('@'))
}

export async function sendBroadcastEmail(subject: string, htmlContent: string, recipients?: string[]) {
    const user = await currentUser()
    if (!user || !user.emailAddresses[0] || !ADMIN_EMAILS.includes(user.emailAddresses[0].emailAddress)) {
        return { error: 'Unauthorized' }
    }

    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    try {
        let uniqueEmails: string[] = []

        if (recipients && recipients.length > 0) {
            // Use provided recipients
            uniqueEmails = [...new Set(recipients)]
        } else {
            // 1. Get all active students (status = claimed or active)
            const { data: students, error } = await supabaseAdmin
                .from('license_keys')
                .select('email')
                .in('status', ['active', 'claimed'])

            if (error) {
                console.error('Database error fetching students:', error)
                return { error: 'Database error: ' + error.message }
            }

            if (!students || students.length === 0) {
                return { error: 'No claimed license keys found.' }
            }

            // Filter for valid emails
            const validEmails = students
                .map(s => s.email)
                .filter(email => email && email.includes('@')) as string[]

            // Deduplicate
            uniqueEmails = [...new Set(validEmails)]
        }

        if (uniqueEmails.length === 0) {
            return {
                error: `No valid recipients found.`
            }
        }

        // 2. Send Emails (Looping for now - Resend limits batch size)
        let sentCount = 0
        for (const email of uniqueEmails) {
            const { error } = await resend.emails.send({
                from: 'IImagined Update <access@notifications.iimagined.ai>',
                to: [email],
                subject: subject,
                html: htmlContent
            })

            if (error) {
                console.error(`Failed to send to ${email}:`, error)
            } else {
                sentCount++
            }
        }

        // 3. Create In-App Notifications
        // Fetch user_ids for the emails
        const { data: users } = await supabaseAdmin
            .from('profiles')
            .select('user_id, email')
            .in('email', uniqueEmails)

        if (users && users.length > 0) {
            const plainTextPreview = htmlContent.replace(/<[^>]*>?/gm, ' ').substring(0, 150) + (htmlContent.length > 150 ? '...' : '')

            const notifications = users.map(u => ({
                user_id: u.user_id,
                title: subject,
                message: plainTextPreview,
                type: 'info',
                link: null, // Could link to a "Messages" page if we had one
                read: false
            }))

            const { error: notifyError } = await supabaseAdmin
                .from('notifications')
                .insert(notifications)

            if (notifyError) {
                console.error('Failed to create notifications:', notifyError)
            }
        }

        return { success: true, sentCount, total: uniqueEmails.length }

    } catch (error) {
        console.error('Broadcast Error:', error)
        return { error: 'Failed to send broadcast. Check server logs.' }
    }
}
