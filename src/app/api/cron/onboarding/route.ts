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
        // Get all users who signed up in the last 8 days
        const eightDaysAgo = new Date()
        eightDaysAgo.setDate(eightDaysAgo.getDate() - 8)

        const { data: recentUsers, error: profilesError } = await supabase
            .from('profiles')
            .select('user_id, email, first_name, created_at, last_seen_at')
            .gte('created_at', eightDaysAgo.toISOString())

        if (profilesError) {
            console.error('Error fetching profiles:', profilesError)
            return NextResponse.json({ error: 'Database error' }, { status: 500 })
        }

        const emailsSent = {
            free: 0,
            paid: 0,
            nudge: 0,
            errors: 0
        }

        for (const user of recentUsers || []) {
            const createdAt = new Date(user.created_at)
            const hoursSinceSignup = (Date.now() - createdAt.getTime()) / (1000 * 60 * 60)
            const email = user.email
            const name = user.first_name || email.split('@')[0] || 'there'
            const lastSeenAt = user.last_seen_at ? new Date(user.last_seen_at) : null

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

                    // Check for inactivity Nudge (if inactive for > 3 days)
                    if (lastSeenAt) {
                        const hoursSinceLastSeen = (Date.now() - lastSeenAt.getTime()) / (1000 * 60 * 60)
                        if (hoursSinceLastSeen > 72 && hoursSinceLastSeen < 73) {
                            // Send Nudge Email (We'll use Day 3 template as fallback if nudge isn't ready, or just skip)
                            // For now, let's assume we added it. If not, we skip.
                            if (PaidUserEmails.nudgeInactivity) {
                                await resend.emails.send({
                                    from: 'IImagined Access <access@notifications.iimagined.ai>',
                                    to: [email],
                                    subject: 'We Miss You - Don\'t Lose Momentum',
                                    html: PaidUserEmails.nudgeInactivity(name, dashboardUrl)
                                })
                                emailsSent.nudge++
                                console.log(`Sent Nudge email to ${email}`)
                                continue; // Skip regular sequence if nudging
                            }
                        }
                    }

                    // Regular Paid Sequence
                    if (hoursSinceClaim >= 24 && hoursSinceClaim < 25) {
                        await resend.emails.send({
                            from: 'IImagined Access <access@notifications.iimagined.ai>',
                            to: [email],
                            subject: 'Stop Learning, Start Building',
                            html: PaidUserEmails.day2Implementation(name, dashboardUrl, calendlyUrl)
                        })
                        emailsSent.paid++
                    } else if (hoursSinceClaim >= 48 && hoursSinceClaim < 49) {
                        await resend.emails.send({
                            from: 'IImagined Access <access@notifications.iimagined.ai>',
                            to: [email],
                            subject: 'Track Your Progress - What Gets Measured Gets Done',
                            html: PaidUserEmails.day3Results(name, dashboardUrl, calendlyUrl)
                        })
                        emailsSent.paid++
                    } else if (hoursSinceClaim >= 72 && hoursSinceClaim < 73) {
                        await resend.emails.send({
                            from: 'IImagined Access <access@notifications.iimagined.ai>',
                            to: [email],
                            subject: 'XP Boost Available - Level Up Your Business',
                            html: PaidUserEmails.day4XPBoost(name, dashboardUrl)
                        })
                        emailsSent.paid++
                    } else if (hoursSinceClaim >= 96 && hoursSinceClaim < 97) {
                        await resend.emails.send({
                            from: 'IImagined Access <access@notifications.iimagined.ai>',
                            to: [email],
                            subject: 'Unlock The Inner Circle',
                            html: PaidUserEmails.day5Community(name, dashboardUrl)
                        })
                        emailsSent.paid++
                    } else if (hoursSinceClaim >= 120 && hoursSinceClaim < 121) {
                        await resend.emails.send({
                            from: 'IImagined Access <access@notifications.iimagined.ai>',
                            to: [email],
                            subject: 'The $10k Blueprint Visualized',
                            html: PaidUserEmails.day6Blueprint(name, dashboardUrl)
                        })
                        emailsSent.paid++
                    } else if (hoursSinceClaim >= 144 && hoursSinceClaim < 145) {
                        await resend.emails.send({
                            from: 'IImagined Access <access@notifications.iimagined.ai>',
                            to: [email],
                            subject: '7-Day Streak Unlocked! 🔥',
                            html: PaidUserEmails.day7Streak(name, dashboardUrl)
                        })
                        emailsSent.paid++
                    }

                } else {
                    // FREE USER SEQUENCE (Conversion)
                    if (hoursSinceSignup >= 24 && hoursSinceSignup < 25) {
                        await resend.emails.send({
                            from: 'IImagined Access <access@notifications.iimagined.ai>',
                            to: [email],
                            subject: 'How Marcus Went From $0 to $23K/Month In 90 Days',
                            html: FreeUserEmails.day2CaseStudy(name, pricingUrl)
                        })
                        emailsSent.free++
                    } else if (hoursSinceSignup >= 48 && hoursSinceSignup < 49) {
                        await resend.emails.send({
                            from: 'IImagined Access <access@notifications.iimagined.ai>',
                            to: [email],
                            subject: 'The Price Is Going Up - Last Chance At $99',
                            html: FreeUserEmails.day3LastChance(name, pricingUrl)
                        })
                        emailsSent.free++
                    } else if (hoursSinceSignup >= 72 && hoursSinceSignup < 73) {
                        await resend.emails.send({
                            from: 'IImagined Access <access@notifications.iimagined.ai>',
                            to: [email],
                            subject: 'The Unfair Advantage You\'re Ignoring',
                            html: FreeUserEmails.day4Automation(name, pricingUrl)
                        })
                        emailsSent.free++
                    } else if (hoursSinceSignup >= 96 && hoursSinceSignup < 97) {
                        await resend.emails.send({
                            from: 'IImagined Access <access@notifications.iimagined.ai>',
                            to: [email],
                            subject: 'How to Make Money While You Sleep',
                            html: FreeUserEmails.day5SleepMoney(name, pricingUrl)
                        })
                        emailsSent.free++
                    } else if (hoursSinceSignup >= 120 && hoursSinceSignup < 121) {
                        await resend.emails.send({
                            from: 'IImagined Access <access@notifications.iimagined.ai>',
                            to: [email],
                            subject: 'Is This Right For You? Let\'s Be Honest',
                            html: FreeUserEmails.day6Objections(name, pricingUrl)
                        })
                        emailsSent.free++
                    } else if (hoursSinceSignup >= 144 && hoursSinceSignup < 145) {
                        await resend.emails.send({
                            from: 'IImagined Access <access@notifications.iimagined.ai>',
                            to: [email],
                            subject: 'Final Notice: Account Status Update',
                            html: FreeUserEmails.day7Final(name, pricingUrl)
                        })
                        emailsSent.free++
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
