import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Analytics Dashboard - Advanced Rank Tracking & Performance Monitoring | IImagined.ai',
  description: 'Comprehensive SEO analytics dashboard with real-time rank tracking, keyword monitoring, competitor analysis, and performance insights. Data-driven SEO optimization.',
  keywords: [
    'seo analytics dashboard',
    'rank tracking',
    'keyword monitoring',
    'seo performance tracking',
    'competitor analysis',
    'search analytics',
    'ranking analytics',
    'seo metrics',
    'website analytics',
    'search performance',
    'keyword ranking tracker',
    'seo reporting dashboard'
  ],
  openGraph: {
    title: 'SEO Analytics Dashboard - Advanced Rank Tracking & Monitoring',
    description: 'Professional SEO analytics dashboard with real-time tracking, competitor analysis, and performance insights.',
    type: 'website',
    images: [
      {
        url: 'https://iimagined.ai/analytics-dashboard-og.png',
        width: 1200,
        height: 630,
        alt: 'SEO Analytics Dashboard - Professional Rank Tracking'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Analytics Dashboard - Advanced Rank Tracking',
    description: 'Professional SEO analytics with real-time tracking and competitor analysis.',
    creator: '@anyro'
  }
}

export default function AnalyticsDashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}