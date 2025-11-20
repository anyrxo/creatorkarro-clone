
'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

export default function AffiliateTracker() {
    const searchParams = useSearchParams()
    
    useEffect(() => {
        const ref = searchParams.get('ref')
        if (ref) {
            // Store referral ID in cookie (lasts 30 days)
            document.cookie = `iimagined_ref=${ref}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Lax`
            // Also store in local storage as backup
            localStorage.setItem('iimagined_ref', ref)
            console.log('Affiliate tracked:', ref)
        }
    }, [searchParams])

    return null
}

