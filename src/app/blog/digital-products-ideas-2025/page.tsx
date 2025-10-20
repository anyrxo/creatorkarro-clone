import React from 'react'
import { redirect } from 'next/navigation'

// ⚔ ORYANA'S PREMIUM TRAFFIC HIJACK
// "Digital product ideas" = HIGH commercial intent wanting to know what to create
// Redirect to our $497 course that teaches 50+ proven product ideas + creation process

export const metadata = {
  title: "50+ Digital Product Ideas That Make Money - Complete Course",
  description: "50+ profitable digital product ideas generating $10K+/month. Complete course with proven concepts, step-by-step creation guides & launch strategies.",
  robots: {
    index: false,
    follow: true,
    noarchive: true
  }
}

// INSTANT REDIRECT TO $497 DIGITAL PRODUCTS COURSE
export default function DigitalProductIdeasRedirect() {
  // Direct high-intent traffic to premium course
  redirect('/digital-products')
  
  // This component will never render due to redirect
  return null
}