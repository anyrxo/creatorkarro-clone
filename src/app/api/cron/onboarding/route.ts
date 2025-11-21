import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { FreeUserEmails, PaidUserEmails } from '@/lib/email-sequences'

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
    const dashboardUrl = `${siteUrl}/learning`
    const pricingUrl = `${siteUrl}/pricing`
    const calendlyUrl = 'https://calendly.com/anyrxo/30min'

    try {
        // Get all users who signed up in the last 3 days
        const threeDaysAgo = new Date()
        threeDaysAgo.setDate(threeDaysAgo.getDate() - 3)

        const { data: recentUsers, error: profilesError } = await supabase
            .from('profiles')
            .select('user_id, email, first_name, created_at')
            .gte('created_at', threeDaysAgo.toISOString())

        if (profilesError) {
            console.error('Error fetching profiles:', profilesError)
            return NextResponse.json({ error: 'Database error' }, { status: 500 })
        }

        const emailsSent = {
            freeDay2: 0,
            freeDay3: 0,
            paidDay2: 0,
            paidDay3: 0,
            errors: 0
        }

        for (const user of recentUsers || []) {
            const createdAt = new Date(user.created_at)
            const hoursSinceSignup = (Date.now() - createdAt.getTime()) / (1000 * 60 * 60)
            const email = user.email
            const name = user.first_name || email.split('@')[0] || 'there'

            try {
                // Check if user has a claimed license key (PAID user)
                const { data: licenseKey } = await supabase
                    .from('license_keys')
                    .select('claimed_at')
                    .eq('user_id', user.user_id)
                    .eq('status', 'claimed')
                    .single()

                const isPaidUser = !!licenseKey

                if (isPaidUser) {
                    // PAID USER SEQUENCE
                    const claimedAt = new Date(licenseKey.claimed_at)
                    const hoursSinceClaim = (Date.now() - claimedAt.getTime()) / (1000 * 60 * 60)

                    // Day 2: Implementation Focus (24 hours after claim)
                    if (hoursSinceClaim >= 24 && hoursSinceClaim < 25) {
                        await resend.emails.send({
                            from: 'IImagined Access <access@notifications.iimagined.ai>',
                            to: [email],
                            subject: 'Stop Learning, Start Building',
                            html: PaidUserEmails.day2Implementation(name, dashboardUrl, calendlyUrl)
                        })
                        emailsSent.paidDay2++
                        console.log(`Sent PAID Day 2 email to ${email}`)
                    }

                    // Day 3: Results & Accountability (48 hours after claim)
                    if (hoursSinceClaim >= 48 && hoursSinceClaim < 49) {
                        await resend.emails.send({
                            from: 'IImagined Access <access@notifications.iimagined.ai>',
                            to: [email],
                            subject: 'Track Your Progress - What Gets Measured Gets Done',
                            html: PaidUserEmails.day3Results(name, dashboardUrl, calendlyUrl)
                        })
                        emailsSent.paidDay3++
                        console.log(`Sent PAID Day 3 email to ${email}`)
                    }
                } else {
                    // FREE USER SEQUENCE (Conversion)
                    // Day 2: Case Study (24 hours after signup)
                    if (hoursSinceSignup >= 24 && hoursSinceSignup < 25) {
                        await resend.emails.send({
                            from: 'IImagined Access <access@notifications.iimagined.ai>',
                            to: [email],
                            subject: 'How Marcus Went From $0 to $23K/Month In 90 Days',
                            html: FreeUserEmails.day2CaseStudy(name, pricingUrl)
                        })
                        emailsSent.freeDay2++
                        console.log(`Sent FREE Day 2 email to ${email}`)
                    }

                    // Day 3: Last Chance + Scarcity (48 hours after signup)
                    if (hoursSinceSignup >= 48 && hoursSinceSignup < 49) {
                        await resend.emails.send({
                            from: 'IImagined Access <access@notifications.iimagined.ai>',
                            to: [email],
                            subject: 'The Price Is Going Up - Last Chance At $99',
                            html: FreeUserEmails.day3LastChance(name, pricingUrl)
                        })
                        emailsSent.freeDay3++
                        console.log(`Sent FREE Day 3 email to ${email}`)
                    }
                }
            } catch (emailError) {
                console.error(`Error sending email to ${email}:`, emailError)
                emailsSent.errors++
            }
        }

        return NextResponse.json({
            success: true,
            emailsSent,
            totalUsers: recentUsers?.length || 0
        })
    } catch (error) {
        console.error('Onboarding cron error:', error)
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
}
