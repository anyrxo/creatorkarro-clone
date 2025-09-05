import type { Metadata } from 'next'
import { siteConfig, getCourseSEO } from '@/config/seo'

export const metadata: Metadata = {
  title: 'FX Trading Mastery Course - Learn Professional Forex Trading',
  description: 'Master profitable FX trading with our comprehensive course. Learn professional trading strategies, risk management, and how to build consistent income from forex markets.',
  keywords: [
    'fx trading course',
    'forex trading',
    'currency trading',
    'trading strategies',
    'forex education',
    'professional trading',
    'trading psychology',
    'risk management',
    'technical analysis',
    'forex signals',
    'trading systems',
    'market analysis'
  ],
  openGraph: {
    title: 'FX Trading Mastery Course - Professional Forex Trading',
    description: 'Master profitable FX trading with proven strategies used by professional traders. Learn to build consistent income from forex markets.',
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/courses/fx-trading/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'FX Trading Mastery Course'
      }
    ]
  }
}