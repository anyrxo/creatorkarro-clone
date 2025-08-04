import React from 'react'
import { redirect } from 'next/navigation'

// ⚔️ ORYANA'S 301 REDIRECT - CONSOLIDATING AUTHORITY TO PILLAR CONTENT
// This page permanently redirects to our authority AI automation guide
// Preserves any backlinks while eliminating keyword cannibalization

export const metadata = {
  title: "AI Automation Business Guide - Comprehensive 2025 Strategies",
  description: "This content has been consolidated into our comprehensive AI automation guide with 3000+ words of advanced strategies, tools, and implementation blueprints.",
  robots: {
    index: false,
    follow: true,
    noarchive: true
  }
}

// INSTANT 301 REDIRECT TO AUTHORITY PILLAR
export default function AIAutomationBusinessRedirect() {
  // Server-side redirect to authority page
  redirect('/blog/ai-automation-guide')
  
  // This component will never render due to redirect
  return null
}