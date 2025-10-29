import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Email Marketing Automation: Build Sequences That Convert 35%+ & Generate $60K+/Month | IImagined.ai',
  description: 'Master email marketing automation with high-converting sequences and AI personalization. Learn advanced strategies that generate massive recurring revenue.',
  keywords: [
    'email marketing automation',
    'email automation sequences',
    'email marketing funnels',
    'automated email campaigns',
    'email marketing ai',
    'email sequence optimization',
    'email marketing revenue',
    'email automation tools',
    'email marketing scaling',
    'email conversion optimization',
    'automated email marketing',
    'email marketing strategies',
    'email automation workflows',
    'email marketing systems'
  ],
  openGraph: {
    title: 'Email Marketing Automation: Sequences Converting 35%+ for $60K+/Month',
    description: 'Advanced email marketing automation with high-converting sequences and AI personalization for massive revenue.',
    type: 'article',
    publishedTime: '2024-12-05T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Email Marketing', 'Marketing Automation', 'Email Sequences', 'Conversion Optimization', 'Revenue Generation'],
    images: [
      {
        url: 'https://iimagined.ai/blog/email-marketing-automation/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Email Marketing Automation - High-Converting Sequences'
      }
    ]
  }
}

export default function EmailMarketingLayout({ children }: { children: React.ReactNode }) {
  return children
}