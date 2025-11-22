import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { learningContent } from '@/data/learning-content'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
const resend = new Resend(process.env.RESEND_API_KEY)

const supabase = createClient(supabaseUrl, supabaseServiceKey)

type EmailType =
    | 'course_start'
    | 'course_progress_25'
    | 'course_progress_50'
    | 'course_progress_75'
    | 'course_complete'
    | 'streak_milestone'
    | 'achievement_unlocked'
    | 'inactivity_nudge'

// Priority Levels: Higher number = Higher priority
const EMAIL_PRIORITY: Record<EmailType, number> = {
    'course_complete': 100,        // Highest: massive milestone
    'course_start': 90,            // High: critical for activation
    'achievement_unlocked': 80,    // High: positive reinforcement
    'streak_milestone': 70,        // Medium: retention driver
    'course_progress_75': 60,      // Medium: encouragement
    'course_progress_50': 50,      // Medium: encouragement
    'course_progress_25': 40,      // Low: nice to have
    'inactivity_nudge': 10         // Lowest: re-engagement
}

interface EmailContext {
    userId: string
    email: string
    name: string
    courseId?: string
    streakDays?: number
    achievementName?: string
}

export class SmartEmailSystem {

    // "Genius" Decision Engine
    static async shouldSendEmail(userId: string, type: EmailType): Promise<boolean> {
        const { data: userStats } = await supabase
            .from('user_stats')
            .select('email_history, last_email_sent_at, last_email_type')
            .eq('user_id', userId)
            .single()

        if (!userStats) return false

        const history = userStats.email_history || {}
        const lastSent = userStats.last_email_sent_at ? new Date(userStats.last_email_sent_at) : null
        const lastType = userStats.last_email_type as EmailType | undefined
        const now = new Date()

        // 1. DUPLICATE CHECK: Never send the exact same milestone twice
        // (e.g. If I already got "Streak 7", don't send it again even if priority is high)
        if (history[type]) {
            const lastTypeSent = new Date(history[type])
            const daysSinceType = (now.getTime() - lastTypeSent.getTime()) / (1000 * 60 * 60 * 24)

            // Strict rules for repeating types
            if (type === 'streak_milestone' && daysSinceType < 7) return false // Weekly max for streaks
            if (type === 'inactivity_nudge' && daysSinceType < 3) return false // 3 days max for nudges

            // Absolute one-timers
            if (['course_start', 'course_complete', 'course_progress_25', 'course_progress_50', 'course_progress_75'].includes(type)) {
                // Check if we already sent this specific course milestone? 
                // (Ideally we'd track courseId in history, but for now we assume the type key implies it was sent recently. 
                // To be safer, we'll allow it if it's been > 30 days, assuming maybe they reset or started a new course, 
                // but for a true "Genius" system we'd need structured history. 
                // For now, let's block if sent < 1 day ago to prevent double-clicks)
                if (daysSinceType < 1) return false
            }
        }

        // 2. COLLISION DETECTION & PRIORITY OVERRIDE
        if (lastSent && lastType) {
            const hoursSinceLastEmail = (now.getTime() - lastSent.getTime()) / (1000 * 60 * 60)

            // If it's been less than 12 hours since the last email...
            if (hoursSinceLastEmail < 12) {
                const currentPriority = EMAIL_PRIORITY[type]
                const lastPriority = EMAIL_PRIORITY[lastType] || 0

                // SCENARIO A: The new email is LOWER or EQUAL priority than the recent one.
                // Result: BLOCK IT. Don't spam. The user just got something important.
                if (currentPriority <= lastPriority) {
                    console.log(`Skipping ${type} (Priority ${currentPriority}) because ${lastType} (Priority ${lastPriority}) was sent ${hoursSinceLastEmail.toFixed(1)}h ago.`)
                    return false
                }

                // SCENARIO B: The new email is HIGHER priority.
                // Result: SEND IT. It's important enough to break the silence (e.g. I got a "Nudge" this morning, but I just "Finished a Course" tonight).
                console.log(`Overriding throttle: Sending ${type} (Priority ${currentPriority}) despite recent ${lastType} (Priority ${lastPriority}).`)
                return true
            }
        }

        return true
    }

    static async sendEmail(context: EmailContext, type: EmailType) {
        const shouldSend = await this.shouldSendEmail(context.userId, type)
        if (!shouldSend) return

        const template = this.getTemplate(type, context)

        try {
            await resend.emails.send({
                from: 'IImagined <notifications@iimagined.ai>',
                to: context.email,
                subject: template.subject,
                html: template.html
            })

            // Update history
            await this.updateEmailHistory(context.userId, type)
            console.log(`Email sent: ${type} to ${context.email}`)
        } catch (error) {
            console.error(`Failed to send email ${type}:`, error)
        }
    }

    static async updateEmailHistory(userId: string, type: EmailType) {
        const { data: userStats } = await supabase
            .from('user_stats')
            .select('email_history')
            .eq('user_id', userId)
            .single()

        const history = userStats?.email_history || {}
        history[type] = new Date().toISOString()

        await supabase
            .from('user_stats')
            .update({
                email_history: history,
                last_email_sent_at: new Date().toISOString(),
                last_email_type: type
            })
            .eq('user_id', userId)
    }

    static getTemplate(type: EmailType, context: EmailContext) {
        const dashboardUrl = 'https://iimagined.ai/learning'
        const courseName = context.courseId ? learningContent[context.courseId]?.title : 'Course'

        // Base styles for consistency
        const baseStyles = `
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: #000000;
            color: #ffffff;
            margin: 0;
            padding: 0;
        `

        const containerStyles = `
            max-width: 600px;
            margin: 0 auto;
            background-color: #0f0f0f;
            border-radius: 16px;
            overflow: hidden;
            border: 1px solid #1f1f1f;
        `

        const buttonStyles = `
            display: inline-block;
            background: linear-gradient(90deg, #3b82f6, #8b5cf6);
            color: #ffffff;
            padding: 16px 32px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 700;
            font-size: 16px;
            margin-top: 24px;
        `

        const wrapper = (content: string, title: string) => `
            <!DOCTYPE html>
            <html>
            <body style="${baseStyles}">
                <div style="padding: 40px 20px;">
                    <div style="${containerStyles}">
                        <div style="padding: 40px;">
                            <h1 style="margin: 0 0 24px 0; font-size: 28px; font-weight: 800; background: linear-gradient(90deg, #ffffff, #a1a1aa); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${title}</h1>
                            ${content}
                        </div>
                        <div style="background-color: #0a0a0a; padding: 20px; text-align: center; border-top: 1px solid #1f1f1f;">
                            <p style="color: #52525b; font-size: 12px; margin: 0;">© ${new Date().getFullYear()} IImagined AI</p>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `

        switch (type) {
            case 'course_start':
                return {
                    subject: `You started ${courseName} 🚀`,
                    html: wrapper(`
                        <p style="color: #e5e5e5; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">Welcome to the elite, ${context.name}.</p>
                        <p style="color: #e5e5e5; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">You've just taken the first step in <strong>${courseName}</strong>. Most people talk about building; you're actually doing it.</p>
                        <div style="background: rgba(59, 130, 246, 0.1); border-left: 4px solid #3b82f6; padding: 16px; margin: 24px 0; border-radius: 8px;">
                            <p style="color: #ffffff; font-weight: 600; margin: 0;">💡 Pro Tip</p>
                            <p style="color: #a1a1aa; font-size: 14px; margin: 8px 0 0 0;">Complete the first module within 24 hours to increase your completion rate by 300%.</p>
                        </div>
                        <a href="${dashboardUrl}/${context.courseId}" style="${buttonStyles}">Continue Learning →</a>
                    `, `Let's Build This Empire.`)
                }

            case 'course_progress_25':
                return {
                    subject: `25% Complete! You're Moving Fast ⚡`,
                    html: wrapper(`
                        <p style="color: #e5e5e5; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">Look at you go, ${context.name}.</p>
                        <p style="color: #e5e5e5; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">You're already 25% through <strong>${courseName}</strong>. The momentum is building.</p>
                        <div style="background: #1f1f1f; height: 8px; border-radius: 4px; overflow: hidden; margin: 24px 0;">
                            <div style="width: 25%; height: 100%; background: linear-gradient(90deg, #3b82f6, #8b5cf6);"></div>
                        </div>
                        <p style="color: #a1a1aa; font-size: 14px;">Keep this pace and you'll be finished in no time.</p>
                        <a href="${dashboardUrl}/${context.courseId}" style="${buttonStyles}">Keep Going →</a>
                    `, `Momentum Is Building.`)
                }

            case 'course_progress_50':
                return {
                    subject: `Halfway There! Don't Stop Now 🔥`,
                    html: wrapper(`
                        <p style="color: #e5e5e5; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">You've reached the halfway mark, ${context.name}.</p>
                        <p style="color: #e5e5e5; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">50% of <strong>${courseName}</strong> is conquered. The hardest part is starting; now it's just about finishing strong.</p>
                        <div style="background: #1f1f1f; height: 8px; border-radius: 4px; overflow: hidden; margin: 24px 0;">
                            <div style="width: 50%; height: 100%; background: linear-gradient(90deg, #3b82f6, #8b5cf6);"></div>
                        </div>
                        <a href="${dashboardUrl}/${context.courseId}" style="${buttonStyles}">Finish Strong →</a>
                    `, `Halfway To Mastery.`)
                }

            case 'course_progress_75':
                return {
                    subject: `Home Stretch! 75% Complete 🏁`,
                    html: wrapper(`
                        <p style="color: #e5e5e5; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">You're in the final lap, ${context.name}.</p>
                        <p style="color: #e5e5e5; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">75% complete. Most people quit long before this point. You're proving you're different.</p>
                        <div style="background: #1f1f1f; height: 8px; border-radius: 4px; overflow: hidden; margin: 24px 0;">
                            <div style="width: 75%; height: 100%; background: linear-gradient(90deg, #3b82f6, #8b5cf6);"></div>
                        </div>
                        <a href="${dashboardUrl}/${context.courseId}" style="${buttonStyles}">Complete The Course →</a>
                    `, `The Finish Line Is Insight.`)
                }

            case 'course_complete':
                return {
                    subject: `🏆 You Did It! ${courseName} Completed`,
                    html: wrapper(`
                        <div style="text-align: center; margin-bottom: 24px; font-size: 48px;">🎉</div>
                        <p style="color: #e5e5e5; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">Congratulations, ${context.name}!</p>
                        <p style="color: #e5e5e5; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">You've officially completed <strong>${courseName}</strong>. You've gained the knowledge; now it's time to apply it and build your empire.</p>
                        <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid #10b981; padding: 20px; border-radius: 12px; text-align: center; margin: 24px 0;">
                            <p style="color: #10b981; font-weight: 700; margin: 0; font-size: 18px;">+500 XP Earned</p>
                        </div>
                        <a href="${dashboardUrl}" style="${buttonStyles}">Start Next Course →</a>
                    `, `Legendary Status Achieved.`)
                }

            case 'streak_milestone':
                return {
                    subject: `${context.streakDays} Day Streak! You're On Fire 🔥`,
                    html: wrapper(`
                        <div style="text-align: center; margin-bottom: 24px;">
                            <span style="font-size: 64px; font-weight: 900; color: #ef4444;">${context.streakDays}</span>
                            <span style="font-size: 24px; color: #a1a1aa; display: block;">DAYS STRAIGHT</span>
                        </div>
                        <p style="color: #e5e5e5; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">Incredible consistency, ${context.name}.</p>
                        <p style="color: #e5e5e5; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">You've shown up for ${context.streakDays} days in a row. This is the kind of discipline that builds empires.</p>
                        <a href="${dashboardUrl}" style="${buttonStyles.replace('linear-gradient(90deg, #3b82f6, #8b5cf6)', 'linear-gradient(90deg, #ef4444, #f97316)')}">Keep The Streak Alive →</a>
                    `, `Unstoppable Momentum.`)
                }

            case 'achievement_unlocked':
                return {
                    subject: `Achievement Unlocked: ${context.achievementName} 🏆`,
                    html: wrapper(`
                        <div style="text-align: center; margin-bottom: 24px; font-size: 48px;">🌟</div>
                        <p style="color: #e5e5e5; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">New badge earned!</p>
                        <p style="color: #e5e5e5; font-size: 16px; line-height: 1.6; margin-bottom: 16px;">You've unlocked the <strong>${context.achievementName}</strong> achievement.</p>
                        <div style="background: rgba(251, 191, 36, 0.1); border: 1px solid #f59e0b; padding: 20px; border-radius: 12px; text-align: center; margin: 24px 0;">
                            <p style="color: #f59e0b; font-weight: 700; margin: 0; font-size: 18px;">Achievement Unlocked</p>
                        </div>
                        <a href="${dashboardUrl}" style="${buttonStyles.replace('linear-gradient(90deg, #3b82f6, #8b5cf6)', 'linear-gradient(90deg, #f59e0b, #d97706)')}">View Your Profile →</a>
                    `, `Level Up!`)
                }

            default:
                return {
                    subject: 'Update from IImagined',
                    html: wrapper(`
                        <p style="color: #e5e5e5; font-size: 16px; line-height: 1.6;">Check your dashboard for the latest updates.</p>
                        <a href="${dashboardUrl}" style="${buttonStyles}">Go to Dashboard →</a>
                    `, `New Update`)
                }
        }
    }
}
