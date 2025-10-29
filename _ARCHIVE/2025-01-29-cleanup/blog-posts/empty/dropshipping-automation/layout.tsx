import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dropshipping Automation: Build Stores That Generate $200K+/Month on Autopilot | IImagined.ai',
  description: 'Master dropshipping automation with AI product research, automated marketing, and scaling systems. Build stores that run completely on autopilot.',
  keywords: [
    'dropshipping automation',
    'automated dropshipping',
    'dropshipping automation tools',
    'dropshipping scaling automation',
    'automated ecommerce',
    'dropshipping business automation',
    'dropshipping marketing automation',
    'automated product research',
    'dropshipping ai automation',
    'ecommerce automation systems',
    'automated online stores',
    'dropshipping workflow automation',
    'passive income dropshipping',
    'automated dropshipping stores'
  ],
  openGraph: {
    title: 'Dropshipping Automation: Build Stores Generating $200K+/Month on Autopilot',
    description: 'Advanced dropshipping automation with AI product research and marketing systems for completely automated stores.',
    type: 'article',
    publishedTime: '2024-10-25T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Dropshipping', 'E-commerce Automation', 'Online Business', 'Passive Income', 'Business Automation'],
    images: [
      {
        url: 'https://iimagined.ai/blog/dropshipping-automation/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Dropshipping Automation - Autopilot Store Systems'
      }
    ]
  }
}

export default function DropshippingAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}