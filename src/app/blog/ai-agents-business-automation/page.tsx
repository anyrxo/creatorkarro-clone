import React from 'react'
import { redirect } from 'next/navigation'

// ⚔ ORYANA'S 301 REDIRECT - ELIMINATING AI AGENTS CANNIBALIZATION
// This weak page redirects to our comprehensive AI automation authority guide
// Consolidates "ai agents automation" traffic to our pillar content

export const metadata = {
  title: "AI Agents Business Automation - Complete Guide",
  description: "This content has been consolidated into our comprehensive AI automation guide featuring advanced AI agents strategies and business automation frameworks.",
  robots: {
    index: false,
    follow: true,
    noarchive: true
  }
}

// INSTANT 301 REDIRECT TO AUTHORITY PILLAR
export default function AIAgentsBusinessAutomationRedirect() {
  // Server-side redirect to authority page
  redirect('/blog/ai-automation-guide')
  
  // This component will never render due to redirect
  return null
}