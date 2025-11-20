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
        // 1. Get all active students (status = claimed)
        // We remove the not null check to debug if keys are claimed but emails missing
        const { data: students, error } = await supabaseAdmin
            .from('license_keys')
            .select('email, user_id')
            .eq('status', 'claimed')

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
        const uniqueEmails = [...new Set(validEmails)]

        if (uniqueEmails.length === 0) {
            return { 
                error: `Found ${students.length} claimed keys, but NO valid emails stored. This implies legacy keys or claim errors.` 
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
