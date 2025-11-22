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

    const { data: students, error } = await supabaseAdmin
        .from('license_keys')
        .select('email, user_id, created_at')
        .in('status', ['active', 'claimed'])
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching students:', error)
        return []
    }

    return students.map(s => ({
        email: s.email,
        userId: s.user_id,
        joinedAt: s.created_at
    })).filter(s => s.email && s.email.includes('@'))
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

        return { success: true, sentCount, total: uniqueEmails.length }

    } catch (error) {
        console.error('Broadcast Error:', error)
        return { error: 'Failed to send broadcast. Check server logs.' }
    }
}
