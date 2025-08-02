import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Content Marketing Automation: Scale Content Creation to 1000+ Posts/Month | IImagined.ai',
  description: 'Master content marketing automation with AI writing, scheduling, and distribution systems. Scale content creation and engagement across all platforms automatically.',
  keywords: [
    'content marketing automation',
    'automated content creation',
    'content scheduling automation',
    'ai content marketing',
    'content distribution automation',
    'automated content strategy',
    'content marketing scaling',
    'automated social media content',
    'content automation tools',
    'automated content publishing',
    'content calendar automation',
    'content marketing systems',
    'automated content workflows',
    'content production automation'
  ],
  openGraph: {
    title: 'Content Marketing Automation: Scale Content Creation to 1000+ Posts/Month',
    description: 'Advanced content marketing automation with AI writing and distribution systems for massive content scaling.',
    type: 'article',
    publishedTime: '2024-08-15T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Content Marketing', 'Marketing Automation', 'AI Content', 'Content Strategy', 'Digital Marketing'],
    images: [
      {
        url: 'https://iimagined.ai/blog/content-marketing-automation/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Content Marketing Automation - Automated Content Systems'
      }
    ]
  }
}

export default function ContentMarketingLayout({ children }: { children: React.ReactNode }) {
  return children
}