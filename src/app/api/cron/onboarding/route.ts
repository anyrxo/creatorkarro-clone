import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { PremiumOnboardingEmails } from '@/lib/premium-onboarding-emails'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function GET(request: Request) {
    // Verify cron secret
    const authHeader = request.headers.get('authorization')
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
        return new Response('Unauthorized', { status: 401 })
    }

    const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://iimagined.ai'
    const firstModuleUrl = `${siteUrl}/learning/instagram-ignited`
    const dashboardUrl = `${siteUrl}/learning`
    const calendlyUrl = 'https://calendly.com/anyrxo/30min'

    try {
        // Get all premium users who redeemed keys in the last 3 days
        const threeDaysAgo = new Date()
        threeDaysAgo.setDate(threeDaysAgo.getDate() - 3)

        const { data: recentRedemptions, error } = await supabase
            .from('license_keys')
            .select('redeemed_by_email, redeemed_at')
            .not('redeemed_by_email', 'is', null)
            .gte('redeemed_at', threeDaysAgo.toISOString())

        if (error) {
            console.error('Error fetching redemptions:', error)
            return NextResponse.json({ error: 'Database error' }, { status: 500 })
        }

        const emailsSent = {
            day2: 0,
            day3: 0,
            errors: 0
        }

        for (const redemption of recentRedemptions || []) {
            const redeemedAt = new Date(redemption.redeemed_at)
            const hoursSinceRedemption = (Date.now() - redeemedAt.getTime()) / (1000 * 60 * 60)
            const email = redemption.redeemed_by_email
            const name = email.split('@')[0]

            try {
                // Send Day 2 email (24 hours after redemption)
                if (hoursSinceRedemption >= 24 && hoursSinceRedemption < 25) {
                    await resend.emails.send({
                        from: 'IImagined Access <access@notifications.iimagined.ai>',
                        to: [email],
                        subject: 'Stop Collecting Information - Start Implementing',
                        html: PremiumOnboardingEmails.day2Implementation(
                            name,
                            firstModuleUrl,
                            calendlyUrl
                        )
                    })
                    emailsSent.day2++
                    console.log(`Sent Day 2 email to ${email}`)
                }

                // Send Day 3 email (48 hours after redemption)
                if (hoursSinceRedemption >= 48 && hoursSinceRedemption < 49) {
                    await resend.emails.send({
                        from: 'IImagined Access <access@notifications.iimagined.ai>',
                        to: [email],
                        subject: 'Being Busy ≠ Getting Results',
                        html: PremiumOnboardingEmails.day3Results(
                            name,
                            dashboardUrl,
                            calendlyUrl
                        )
                    })
                    emailsSent.day3++
                    console.log(`Sent Day 3 email to ${email}`)
                }
            } catch (emailError) {
                console.error(`Error sending email to ${email}:`, emailError)
                emailsSent.errors++
            }
        }

        return NextResponse.json({
            success: true,
            emailsSent,
            totalRedemptions: recentRedemptions?.length || 0
        })
    } catch (error) {
        console.error('Onboarding cron error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
