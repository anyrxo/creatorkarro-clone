'use server'

import { auth, currentUser } from '@clerk/nextjs/server'
import { createClient } from '@supabase/supabase-js'
import { clerkClient } from '@clerk/nextjs/server'
import { Resend } from 'resend'
import { EmailTemplates } from '@/lib/email-templates'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function redeemLicenseKey(formData: FormData) {
    const start = Date.now()
    console.log('[Redeem] Start')
    
    const key = formData.get('key') as string
    const user = await currentUser()

    if (!user) {
        return { error: 'You must be logged in to redeem a code.' }
    }

    if (!key) {
        return { error: 'Please enter a license key.' }
    }

    console.log('[Redeem] Init Supabase')
    // Initialize Supabase Client
    const supabaseAdmin = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY! 
    )

    // 1. Claim the Key
    console.log('[Redeem] Calling RPC')
    const { data, error } = await supabaseAdmin.rpc('claim_license_key', {
        p_key: key,
        p_user_id: user.id,
        p_email: user.emailAddresses[0]?.emailAddress || null
    })
    console.log(`[Redeem] RPC complete. Duration: ${Date.now() - start}ms. Success: ${!!data}`)

    if (error) {
        console.error('Redemption error:', error)
        return { error: 'System error during redemption. Please contact support.' }
    }

    if (data === true) {
        const userEmail = user.emailAddresses[0]?.emailAddress
        const dashboardUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://iimagined.ai/learning'

        // 2. Send Welcome Email to the Student
        if (userEmail) {
            console.log('[Redeem] Sending Welcome Email')
            // Note: We await this to ensure it sends, but it might add 500ms-1s latency
            try {
                await resend.emails.send({
                    from: 'IImagined Access <access@notifications.iimagined.ai>',
                    to: [userEmail],
                    subject: 'Welcome to the Empire | IImagined',
                    html: EmailTemplates.welcome(userEmail.split('@')[0], dashboardUrl)
                })
                console.log('[Redeem] Welcome Email Sent')
            } catch (emailErr) {
                console.error('[Redeem] Welcome Email Failed:', emailErr)
            }
        }

        // 3. Credit the Affiliate (if applicable)
        const { cookies } = await import('next/headers')
        const cookieStore = await cookies()
        const referrerId = cookieStore.get('iimagined_ref')?.value

        if (referrerId && referrerId !== user.id) {
            console.log(`[Redeem] Processing Affiliate: ${referrerId}`)
            try {
                // Insert referral record
                await supabaseAdmin.from('referrals').insert({
                    referrer_id: referrerId,
                    referred_user_id: user.id,
                    status: 'sale',
                    amount: 39.60 // 40% of $99
                })
                console.log(`[Redeem] Affiliate credited in DB`)

                // 4. Send Affiliate Notification Email
                // We need to fetch the referrer's email using Clerk
                const client = await clerkClient()
                try {
                    const referrer = await client.users.getUser(referrerId)
                    const referrerEmail = referrer.emailAddresses[0]?.emailAddress

                    if (referrerEmail) {
                        console.log('[Redeem] Sending Affiliate Email')
                        await resend.emails.send({
                            from: 'IImagined Access <access@notifications.iimagined.ai>',
                            to: [referrerEmail],
                            subject: '💰 You made a sale! | IImagined Partner',
                            html: EmailTemplates.affiliateSale(39.60, `${process.env.NEXT_PUBLIC_SITE_URL}/affiliate`)
                        })
                        console.log('[Redeem] Affiliate Email Sent')
                    }
                } catch (clerkErr) {
                    console.error('[Redeem] Clerk/Email error for affiliate:', clerkErr)
                }

            } catch (affiliateError) {
                console.error('[Redeem] Affiliate logic failed:', affiliateError)
                // Don't block the user's access just because affiliate failed
            }
        }

        console.log(`[Redeem] Completed. Total Duration: ${Date.now() - start}ms`)
        return { success: true }
    } else {
        return { error: 'Invalid or already claimed license key.' }
    }
}
