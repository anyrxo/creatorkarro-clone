import React from 'react'
import { redirect } from 'next/navigation'

// ⚔ ORYANA'S STRATEGIC REDIRECT - N8N TRAFFIC HIJACKING
// This page redirects directly to our $297 N8N course for maximum conversions
// "n8n automation success" searchers want results → we give them the course that delivers results

export const metadata = {
  title: "N8N Automation Success - Complete Course & Results",
  description: "Ready for real N8N automation success? Get the complete course that has helped 2,400+ students build automated businesses with proven N8N workflows and systems.",
  robots: {
    index: false,
    follow: true,
    noarchive: true
  }
}

// INSTANT REDIRECT TO N8N COURSE - MAXIMUM CONVERSION FOCUS
export default function N8NAutomationSuccessRedirect() {
  // Direct redirect to money page for immediate conversion
  redirect('/n8n-ai-automations')
  
  // This component will never render due to redirect
  return null
}