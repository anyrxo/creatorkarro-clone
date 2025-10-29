import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best No-Code Automation Tools 2025: Zapier vs Make vs n8n | IImagined.ai',
  description: 'Complete comparison of top no-code automation tools - Zapier, Make, n8n, and more. Build powerful workflows without coding in 2025.',
  keywords: [
    'no code automation tools',
    'zapier vs make',
    'no code workflow automation',
    'automation tools comparison',
    'zapier alternatives',
    'make automation tool',
    'n8n automation',
    'workflow automation tools',
    'business process automation',
    'no code solutions',
    'automation platform',
    'workflow builder',
    'integration tools',
    'process automation'
  ],
  openGraph: {
    title: 'Best No-Code Automation Tools 2025: Zapier vs Make vs n8n',
    description: 'Comprehensive comparison of no-code automation tools - build powerful workflows without coding.',
    type: 'article',
    publishedTime: '2024-11-20T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['No-Code', 'Automation Tools', 'Workflow Automation', 'Business Automation', 'Productivity'],
    images: [
      {
        url: 'https://iimagined.ai/blog/no-code-automation-tools-comparison/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Best No-Code Automation Tools 2025'
      }
    ]
  }
}

export default function NoCodeAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}