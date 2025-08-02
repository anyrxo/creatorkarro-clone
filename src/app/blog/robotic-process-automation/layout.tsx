import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Robotic Process Automation (RPA): Automate Repetitive Tasks & Save $500K+/Year | IImagined.ai',
  description: 'Master RPA with UiPath, Automation Anywhere, and Blue Prism. Automate repetitive business processes and achieve massive cost savings through robotic automation.',
  keywords: [
    'robotic process automation',
    'rpa automation',
    'uipath automation',
    'automation anywhere',
    'blue prism automation',
    'rpa tools',
    'business process automation',
    'robotic automation',
    'rpa implementation',
    'automated business processes',
    'rpa development',
    'process automation software',
    'rpa benefits',
    'enterprise automation'
  ],
  openGraph: {
    title: 'Robotic Process Automation (RPA): Automate Repetitive Tasks & Save $500K+/Year',
    description: 'Master RPA with enterprise tools for automating repetitive business processes and achieving massive cost savings.',
    type: 'article',
    publishedTime: '2024-06-25T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['RPA', 'Process Automation', 'Enterprise Automation', 'Business Operations', 'Cost Reduction'],
    images: [
      {
        url: 'https://iimagined.ai/blog/robotic-process-automation/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Robotic Process Automation - RPA Enterprise Systems'
      }
    ]
  }
}

export default function RPALayout({ children }: { children: React.ReactNode }) {
  return children
}