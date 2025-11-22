'use server'

import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

// List of authorized admin emails
const ADMIN_EMAILS = [
    'mannan0010@gmail.com',
    'sirenxmedia@gmail.com'
]

export async function checkAdminAccess() {
    const user = await currentUser()

    if (!user) {
        return { authorized: false, error: 'Not logged in' }
    }

    const email = user.emailAddresses[0]?.emailAddress

    // 1. Check Hardcoded List
    if (email && ADMIN_EMAILS.includes(email)) {
        return { authorized: true, email }
    }

    // 2. Check Database Flag
    try {
        const { createClient } = await import('@supabase/supabase-js')
        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY!
        )

        const { data } = await supabase
            .from('profiles')
            .select('is_admin')
            .eq('user_id', user.id)
            .single()

        if (data?.is_admin) {
            return { authorized: true, email }
        }
    } catch (error) {
        console.error('Admin check error:', error)
    }

    return { authorized: false, error: 'Unauthorized' }
}

