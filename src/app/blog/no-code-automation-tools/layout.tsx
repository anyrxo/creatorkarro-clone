import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'No-Code Automation Tools: Build Business Systems Without Programming | IImagined.ai',
  description: 'Master no-code automation tools like Zapier, Make, and Airtable. Build complex business systems and workflows without writing a single line of code.',
  keywords: [
    'no code automation',
    'no code tools',
    'workflow automation tools',
    'business automation without coding',
    'no code workflow builder',
    'visual automation tools',
    'drag and drop automation',
    'no code business systems',
    'automation without programming',
    'citizen developer tools',
    'low code automation',
    'visual workflow tools',
    'business process automation',
    'no code integration'
  ],
  openGraph: {
    title: 'No-Code Automation Tools: Build Business Systems Without Programming',
    description: 'Master no-code automation tools and build complex business systems without writing code.',
    type: 'article',
    publishedTime: '2024-08-25T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['No-Code', 'Automation Tools', 'Business Systems', 'Workflow Automation', 'Productivity'],
    images: [
      {
        url: 'https://iimagined.ai/blog/no-code-automation-tools/og-image.png',
        width: 1200,
        height: 630,
        alt: 'No-Code Automation Tools - Business Systems Builder'
      }
    ]
  }
}

export default function NoCodeAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}