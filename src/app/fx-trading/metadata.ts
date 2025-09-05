import type { Metadata } from 'next'
import { siteConfig, getCourseSEO } from '@/config/seo'

export const metadata: Metadata = {
  title: 'FX Trading Mastery Course - Pass Prop Firm Challenges & Get Funded',
  description: 'Master prop firm challenges and get $100K+ funded trading accounts. Learn the exact strategies to pass challenges and build consistent income with funded trading companies.',
  keywords: [
    'prop firm challenge',
    'funded trading account',
    'prop trading course',
    'forex prop firm',
    'trading challenge',
    'funded trader',
    'prop firm strategies',
    'trading evaluation',
    'funded account rules',
    'prop firm success',
    'trading capital',
    'prop trading rules'
  ],
  openGraph: {
    title: 'FX Trading Mastery Course - Pass Prop Firm Challenges & Get Funded',
    description: 'Master prop firm challenges and get $100K+ funded trading accounts. Learn the exact strategies to pass challenges and succeed with prop firms.',
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