import React from 'react'
import { redirect } from 'next/navigation'

// ⚔ ORYANA'S PREMIUM TRAFFIC HIJACK
// "Digital product ideas" = HIGH commercial intent wanting to know what to create
// Redirect to our $497 course that teaches 50+ proven product ideas + creation process

export const metadata = {
  title: "50+ Digital Product Ideas That Make Money - Complete Course 2025",
  description: "Looking for profitable digital product ideas? Get the complete course with 50+ proven ideas generating $10K+/month, plus step-by-step creation and launch strategies.",
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