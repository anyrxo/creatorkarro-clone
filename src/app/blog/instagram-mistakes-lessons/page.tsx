import React from 'react'
import { redirect } from 'next/navigation'

// ⚔ ORYANA'S AUTHORITY CONSOLIDATION
// Instagram mistakes/lessons content consolidated into our comprehensive growth guide
// Eliminates thin content while strengthening our Instagram authority pillar

export const metadata = {
  title: "Instagram Mistakes & Lessons - Complete Growth Guide 2025",
  description: "This content has been consolidated into our comprehensive Instagram growth guide featuring common mistakes, lessons learned, and advanced strategies for 2025 growth.",
  robots: {
    index: false,
    follow: true,
    noarchive: true
  }
}

// REDIRECT TO INSTAGRAM GROWTH AUTHORITY PILLAR
export default function InstagramMistakesLessonsRedirect() {
  // Redirect to comprehensive Instagram growth guide
  redirect('/blog/instagram-growth-2025')
  
  // This component will never render due to redirect
  return null
}