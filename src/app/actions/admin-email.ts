'use server'

import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { currentUser } from '@clerk/nextjs/server'

const resend = new Resend(process.env.RESEND_API_KEY)

const ADMIN_EMAILS = [
    'mannan0010@gmail.com',
    'sirenxmedia@gmail.com'
]

export async function sendBroadcastEmail(subject: string, htmlContent: string) {
    const user = await currentUser()
    if (!user || !user.emailAddresses[0] || !ADMIN_EMAILS.includes(user.emailAddresses[0].emailAddress)) {
        return { error: 'Unauthorized' }
    }

    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    try {
        // 1. Get all active students
        const { data: students } = await supabaseAdmin
            .from('license_keys')
            .select('email')
            .eq('status', 'claimed')
            .not('email', 'is', null)

        if (!students || students.length === 0) {
            return { error: 'No active students found to email.' }
        }

        // Deduplicate emails
        const uniqueEmails = [...new Set(students.map(s => s.email))]

        // 2. Send Emails (Looping for now - Resend limits batch size)
        let sentCount = 0
        for (const email of uniqueEmails) {
            if (!email) continue
            
            const { error } = await resend.emails.send({
                from: 'IImagined Update <access@notifications.iimagined.ai>',
                to: [email],
                subject: subject,
                html: htmlContent
            })

            if (!error) sentCount++
        }

        return { success: true, sentCount, total: uniqueEmails.length }

    } catch (error) {
        console.error('Broadcast Error:', error)
        return { error: 'Failed to send broadcast.' }
    }
}

