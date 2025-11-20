'use client'

import { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { syncUserToSupabase } from '@/app/actions/system'

export default function UserSync() {
    const { user, isSignedIn } = useUser()

    useEffect(() => {
        if (isSignedIn && user) {
            // Sync user to Supabase on every session load
            // This ensures their profile exists for key claims and tracking
            syncUserToSupabase()
        }
    }, [isSignedIn, user])

    return null
}

