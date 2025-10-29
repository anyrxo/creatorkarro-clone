import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Zapier Automation Mastery: Build Complex Workflows That Generate $30K+/Month | IImagined.ai',
  description: 'Master Zapier automation with advanced workflows and integrations. Learn to build automated business systems that scale to massive recurring revenue.',
  keywords: [
    'zapier automation',
    'zapier workflows',
    'zapier integrations',
    'business automation zapier',
    'zapier advanced workflows',
    'zapier scaling automation',
    'zapier revenue automation',
    'zapier business systems',
    'zapier api integrations',
    'workflow automation zapier',
    'zapier automation tools',
    'zapier productivity automation',
    'zapier marketing automation',
    'zapier crm automation'
  ],
  openGraph: {
    title: 'Zapier Automation Mastery: Workflows Generating $30K+/Month',
    description: 'Advanced Zapier automation workflows and integrations that build automated business systems for massive revenue.',
    type: 'article',
    publishedTime: '2024-12-15T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Zapier Automation', 'Workflow Automation', 'Business Automation', 'No-Code Tools', 'Productivity'],
    images: [
      {
        url: 'https://iimagined.ai/blog/zapier-automation-mastery/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zapier Automation Mastery - Advanced Workflows'
      }
    ]
  }
}

export default function ZapierAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}