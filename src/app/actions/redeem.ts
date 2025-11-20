'use server'

import { auth, currentUser } from '@clerk/nextjs/server'
import { createClient } from '@supabase/supabase-js'
import { clerkClient } from '@clerk/nextjs/server'
import { Resend } from 'resend'
import { EmailTemplates } from '@/lib/email-templates'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function redeemLicenseKey(formData: FormData) {
    const key = formData.get('key') as string
    const user = await currentUser()

    if (!user) {
        return { error: 'You must be logged in to redeem a code.' }
    }

    if (!key) {
        return { error: 'Please enter a license key.' }
    }

    // Initialize Supabase Client
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY! 
    )

    // 1. Claim the Key
    const { data, error } = await supabaseAdmin.rpc('claim_license_key', {
        p_key: key,
        p_user_id: user.id,
        p_email: user.emailAddresses[0]?.emailAddress || null
    })

    if (error) {
        console.error('Redemption error:', error)
        return { error: 'System error during redemption. Please contact support.' }
    }

    if (data === true) {
        const userEmail = user.emailAddresses[0]?.emailAddress
        const dashboardUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://iimagined.ai/learning'

        // 2. Send Welcome Email to the Student
        if (userEmail) {
            await resend.emails.send({
                from: 'IImagined Access <access@notifications.iimagined.ai>',
                to: [userEmail],
                subject: 'Welcome to the Empire | IImagined',
                html: EmailTemplates.welcome(dashboardUrl)
            })
        }

        // 3. Credit the Affiliate (if applicable)
        const { cookies } = await import('next/headers')
        const cookieStore = await cookies()
        const referrerId = cookieStore.get('iimagined_ref')?.value

        if (referrerId && referrerId !== user.id) {
            try {
                // Insert referral record
                await supabaseAdmin.from('referrals').insert({
                    referrer_id: referrerId,
                    referred_user_id: user.id,
                    status: 'sale',
                    amount: 39.60 // 40% of $99
                })
                console.log(`Affiliate credited: ${referrerId} for user ${user.id}`)

                // 4. Send Affiliate Notification Email
                // We need to fetch the referrer's email using Clerk
                const client = await clerkClient()
                const referrer = await client.users.getUser(referrerId)
                const referrerEmail = referrer.emailAddresses[0]?.emailAddress

                if (referrerEmail) {
                    await resend.emails.send({
                        from: 'IImagined Access <access@notifications.iimagined.ai>',
                        to: [referrerEmail],
                        subject: '💰 You made a sale! | IImagined Partner',
                        html: EmailTemplates.affiliateSale('$39.60', `${process.env.NEXT_PUBLIC_SITE_URL}/affiliate`)
                    })
                }

            } catch (affiliateError) {
                console.error('Affiliate logic failed:', affiliateError)
                // Don't block the user's access just because affiliate failed
            }
        }

        return { success: true }
    } else {
        return { error: 'Invalid or already claimed license key.' }
    }
}
