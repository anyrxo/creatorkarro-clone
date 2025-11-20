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
    
    if (!email || !ADMIN_EMAILS.includes(email)) {
        return { authorized: false, error: 'Unauthorized' }
    }

    return { authorized: true, email }
}

