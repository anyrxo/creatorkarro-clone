import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security Dashboard - Advanced Protection & Monitoring | IImagined.ai',
  description: 'IImagined.ai security dashboard with advanced protection, threat monitoring, and security analytics. Enterprise-grade security for your digital assets.',
  keywords: [
    'security dashboard',
    'security monitoring',
    'threat protection',
    'security analytics',
    'cybersecurity dashboard',
    'security status',
    'threat detection',
    'security alerts',
    'protection monitoring',
    'security metrics'
  ],
  openGraph: {
    title: 'Security Dashboard - Advanced Protection & Monitoring',
    description: 'Advanced security dashboard with threat monitoring and protection analytics for enterprise-grade security.',
    type: 'website',
    images: [
      {
        url: 'https://iimagined.ai/security-dashboard-og.png',
        width: 1200,
        height: 630,
        alt: 'Security Dashboard - Advanced Protection'
      }
    ]
  }
}

export default function SecurityDashboardLayout({ children }: { children: React.ReactNode }) {
  return children
}