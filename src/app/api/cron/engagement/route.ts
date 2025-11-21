
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { EmailTemplates } from '@/lib/email-templates'
import { NextResponse } from 'next/server'

const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function GET(request: Request) {
  // Secure this endpoint with a CRON_SECRET if used in production with Vercel Cron
  // const authHeader = request.headers.get('authorization')
  // if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
  //   return new Response('Unauthorized', { status: 401 })
  // }

  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  try {
    // 1. Get all users who have claimed a license
    const { data: users, error: usersError } = await supabaseAdmin
      .from('license_keys')
      .select('user_id, email, claimed_at')
      .eq('status', 'claimed')
      .not('email', 'is', null)

    if (usersError) throw usersError

    let emailsSent = 0

    // 2. Check activity for each user
    for (const user of users) {
      // Get their latest progress
      const { data: progress } = await supabaseAdmin
        .from('user_progress')
        .select('completed_at')
        .eq('user_id', user.user_id)
        .order('completed_at', { ascending: false })
        .limit(1)
        .single()

      const lastActivity = progress?.completed_at
        ? new Date(progress.completed_at)
        : new Date(user.claimed_at!) // If no progress, use claim date

      const now = new Date()
      const diffInHours = (now.getTime() - lastActivity.getTime()) / (1000 * 60 * 60)

      // 3. Rule: Send Streak Warning (24-30 hours inactive)
      if (diffInHours >= 24 && diffInHours <= 30) {
        if (!resend) {
          console.warn('RESEND_API_KEY missing, skipping email')
          continue
        }
        const { error: emailError } = await resend.emails.send({
          from: 'IImagined Access <access@notifications.iimagined.ai>',
          to: [user.email],
          subject: '⚠️ Streak At Risk | IImagined',
          html: EmailTemplates.streakWarning(
            `${process.env.NEXT_PUBLIC_SITE_URL}/learning`
          )
        })

        if (!emailError) {
          emailsSent++
          console.log(`Nudged user ${user.email}`)
        }
      }
    }

    return NextResponse.json({ success: true, emailsSent })
  } catch (error) {
    console.error('Engagement Cron Error:', error)
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}
