import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Email Marketing Automation Guide: Build High-Converting Sequences | IImagined.ai',
  description: 'Complete email marketing automation guide. Build high-converting email sequences, nurture campaigns, and automated funnels that generate consistent revenue.',
  keywords: [
    'email marketing automation',
    'email automation sequences',
    'email marketing funnels',
    'automated email campaigns',
    'email nurture sequences',
    'email marketing guide',
    'email automation tools',
    'email sequence strategy',
    'drip email campaigns',
    'email marketing workflows',
    'automated email marketing',
    'email funnel automation',
    'email campaign automation',
    'email marketing system'
  ],
  openGraph: {
    title: 'Email Marketing Automation Guide: Build High-Converting Sequences',
    description: 'Master email marketing automation with high-converting sequences and automated campaigns that drive revenue.',
    type: 'article',
    publishedTime: '2024-11-10T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Email Marketing', 'Marketing Automation', 'Email Campaigns', 'Digital Marketing', 'Lead Nurturing'],
    images: [
      {
        url: 'https://iimagined.ai/blog/email-marketing-automation-guide/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Email Marketing Automation Guide'
      }
    ]
  }
}

export default function EmailMarketingLayout({ children }: { children: React.ReactNode }) {
  return children
}