import { redirect } from 'next/navigation'

// ⚔ ORYANA'S MONETIZATION TRAFFIC HIJACK
// "Instagram monetization" searchers want to make money → send them to our $297 course
// This is HIGH commercial intent traffic that converts at premium rates

export const metadata = {
  title: "Instagram Monetization Course - Make Money on Instagram 2025",
  description: "Ready to monetize your Instagram? Get the complete system that helped 1,800+ creators build profitable Instagram businesses. Proven monetization...",
  robots: {
    index: false,
    follow: true,
    noarchive: true
  }
}


// DIRECT TRAFFIC HIJACK TO INSTAGRAM COURSE
export default function InstagramMonetizationRedirect() {
  // Instant redirect to high-converting money page
  redirect('/instagram-ignited')
  
  // This component will never render due to redirect
  return null
}