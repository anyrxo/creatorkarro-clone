import React from 'react'
import { redirect } from 'next/navigation'

// ⚔ ORYANA'S EMPIRE-BUILDING TRAFFIC HIJACK
// "Digital products empire" = PREMIUM commercial intent wanting to build business empire
// Redirect to our $497 course that teaches empire-building strategies + systems

export const metadata = {
  title: "Build Your Digital Products Empire - Complete Business Course 2025",
  description: "Ready to build a digital products empire? Get the complete course that teaches empire-building strategies, proven systems, and scalable business...",
  robots: {
    index: false,
    follow: true,
    noarchive: true
  }
}

// INSTANT REDIRECT TO $497 DIGITAL PRODUCTS COURSE
export default function DigitalProductsEmpireRedirect() {
  // Empire-building traffic → premium business course
  redirect('/digital-products')
  
  // This component will never render due to redirect
  return null
}