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
            errors: 0,
            skipped: 0
        }

        // Helper to check if email already sent
        const checkLog = async (userId: string, emailType: string) => {
            const { data } = await supabase
                .from('email_logs')
                .select('id')
                .eq('user_id', userId)
                .eq('email_type', emailType)
                .single()
            return !!data
        }

        // Helper to log sent email
        const logEmail = async (userId: string, emailType: string) => {
            await supabase.from('email_logs').insert({
                user_id: userId,
                email_type: emailType,
                sent_at: new Date().toISOString()
            })
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
                        if (hoursSinceLastSeen > 72) {
                            const emailType = 'paid_nudge_inactivity'
                            if (!(await checkLog(user.user_id, emailType))) {
                                if (PaidUserEmails.nudgeInactivity) {
                                    await resend.emails.send({
                                        from: 'IImagined Access <access@notifications.iimagined.ai>',
                                        to: [email],
                                        subject: 'We Miss You - Don\'t Lose Momentum',
                                        html: PaidUserEmails.nudgeInactivity(name, dashboardUrl)
                                    })
                                    await logEmail(user.user_id, emailType)
                                    emailsSent.nudge++
                                    console.log(`Sent Nudge email to ${email}`)
                                    continue; // Skip regular sequence if nudging
                                }
                            }
                        }
                    }

                    // Define Paid Sequence
                    const paidSequence = [
                        { id: 'paid_day2_implementation', hours: 24, subject: 'Stop Learning, Start Building', html: PaidUserEmails.day2Implementation(name, dashboardUrl, calendlyUrl) },
                        { id: 'paid_day3_results', hours: 48, subject: 'Track Your Progress - What Gets Measured Gets Done', html: PaidUserEmails.day3Results(name, dashboardUrl, calendlyUrl) },
                        { id: 'paid_day4_xp_boost', hours: 72, subject: 'XP Boost Available - Level Up Your Business', html: PaidUserEmails.day4XPBoost(name, dashboardUrl) },
                        { id: 'paid_day5_community', hours: 96, subject: 'Unlock The Inner Circle', html: PaidUserEmails.day5Community(name, dashboardUrl) },
                        { id: 'paid_day6_blueprint', hours: 120, subject: 'The $10k Blueprint Visualized', html: PaidUserEmails.day6Blueprint(name, dashboardUrl) },
                        { id: 'paid_day7_streak', hours: 144, subject: '7-Day Streak Unlocked! 🔥', html: PaidUserEmails.day7Streak(name, dashboardUrl) }
                    ]

                    // Send next due email
                    for (const step of paidSequence) {
                        if (hoursSinceClaim >= step.hours) {
                            if (!(await checkLog(user.user_id, step.id))) {
                                await resend.emails.send({
                                    from: 'IImagined Access <access@notifications.iimagined.ai>',
                                    to: [email],
                                    subject: step.subject,
                                    html: step.html
                                })
                                await logEmail(user.user_id, step.id)
                                emailsSent.paid++
                                break // Only send one email per run
                            } else {
                                emailsSent.skipped++
                            }
                        }
                    }

                } else {
                    // FREE USER SEQUENCE (Conversion)
                    const freeSequence = [
                        { id: 'free_day2_case_study', hours: 24, subject: 'How Marcus Went From $0 to $23K/Month In 90 Days', html: FreeUserEmails.day2CaseStudy(name, pricingUrl) },
                        { id: 'free_day3_last_chance', hours: 48, subject: 'The Price Is Going Up - Last Chance At $99', html: FreeUserEmails.day3LastChance(name, pricingUrl) },
                        { id: 'free_day4_automation', hours: 72, subject: 'The Unfair Advantage You\'re Ignoring', html: FreeUserEmails.day4Automation(name, pricingUrl) },
                        { id: 'free_day5_sleep_money', hours: 96, subject: 'How to Make Money While You Sleep', html: FreeUserEmails.day5SleepMoney(name, pricingUrl) },
                        { id: 'free_day6_objections', hours: 120, subject: 'Is This Right For You? Let\'s Be Honest', html: FreeUserEmails.day6Objections(name, pricingUrl) },
                        { id: 'free_day7_final', hours: 144, subject: 'Final Notice: Account Status Update', html: FreeUserEmails.day7Final(name, pricingUrl) }
                    ]

                    for (const step of freeSequence) {
                        if (hoursSinceSignup >= step.hours) {
                            if (!(await checkLog(user.user_id, step.id))) {
                                await resend.emails.send({
                                    from: 'IImagined Access <access@notifications.iimagined.ai>',
                                    to: [email],
                                    subject: step.subject,
                                    html: step.html
                                })
                                await logEmail(user.user_id, step.id)
                                emailsSent.free++
                                break // Only send one email per run
                            } else {
                                emailsSent.skipped++
                            }
                        }
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
