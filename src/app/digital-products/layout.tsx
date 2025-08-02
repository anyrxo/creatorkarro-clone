import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Products Empire - AI Courses & Instagram Growth Systems | IImagined.ai',
  description: 'Explore premium digital products including AI automation courses, Instagram growth systems, ComfyUI workflows, and N8N automation training. Build your digital product empire.',
  keywords: [
    'digital products',
    'ai courses',
    'instagram growth course',
    'comfyui workflows',
    'n8n automation course',
    'ai influencers course',
    'digital product empire',
    'online courses',
    'automation training',
    'social media courses',
    'ai training',
    'business courses',
    'digital products marketplace',
    'premium courses'
  ],
  openGraph: {
    title: 'Digital Products Empire - Premium AI & Instagram Courses',
    description: 'Premium digital products for AI automation, Instagram growth, and business scaling. Transform your skills and income.',
    type: 'website',
    images: [
      {
        url: 'https://iimagined.ai/digital-products-og.png',
        width: 1200,
        height: 630,
        alt: 'Digital Products Empire - Premium AI & Instagram Courses'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Products Empire - Premium AI & Instagram Courses',
    description: 'Premium courses and systems for AI automation and Instagram growth mastery.',
    creator: '@anyro'
  }
}

export default function DigitalProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}