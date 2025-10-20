import React from 'react'
import { redirect } from 'next/navigation'

// ⚔ ORYANA'S SUCCESS STORY CONVERSION
// "Digital product success story" searchers want proof + inspiration
// Redirect to our $497 course with real student success stories + framework

export const metadata = {
  title: "Digital Product Success Stories - Real Student Results &",
  description: "Want to see real digital product success stories? Get the complete course that helped 1,500+ students build profitable digital product businesses with...",
  robots: {
    index: false,
    follow: true,
    noarchive: true
  }
}

// INSTANT REDIRECT TO $497 DIGITAL PRODUCTS COURSE
export default function DigitalProductSuccessStoryRedirect() {
  // Success story inspiration → course conversion
  redirect('/digital-products')
  
  // This component will never render due to redirect
  return null
}