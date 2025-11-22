'use server'

import { auth, currentUser } from '@clerk/nextjs/server'
import { SmartEmailSystem } from '@/lib/smart-emails'

type EmailTriggerType =
    | 'course_start'
    | 'course_progress_25'
    | 'course_progress_50'
    | 'course_progress_75'
    | 'course_complete'
    | 'streak_milestone'
    | 'achievement_unlocked'

interface TriggerContext {
    courseId?: string
    streakDays?: number
    achievementName?: string
}

export async function triggerSmartEmail(type: EmailTriggerType, context: TriggerContext = {}) {
    const { userId } = await auth()
    const user = await currentUser()

    if (!userId || !user) {
        console.error('Unauthorized email trigger attempt')
        return
    }

    const email = user.emailAddresses[0]?.emailAddress
    const name = user.firstName || 'Creator'

    if (!email) {
        console.error('No email found for user', userId)
        return
    }

    await SmartEmailSystem.sendEmail({
        userId,
        email,
        name,
        ...context
    }, type)
}
