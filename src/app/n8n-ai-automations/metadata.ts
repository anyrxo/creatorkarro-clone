import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'N8N Automation Course - No Code Workflow Training | Business Automation Masterclass',
  description: 'Learn N8N automation to build powerful business workflows without coding. Complete course with 40+ hours saved weekly. Join 1,600+ students mastering workflow automation and AI integration.',
  keywords: [
    // Primary N8N Keywords
    'n8n course', 'n8n automation', 'n8n training', 'n8n tutorial', 'n8n certification',
    'n8n vs zapier', 'n8n workflow examples', 'n8n for beginners', 'n8n setup guide',
    // Business Automation Keywords
    'business automation course', 'workflow automation', 'process automation', 'marketing automation',
    'business process automation', 'automation training', 'automation course for entrepreneurs',
    // No Code Keywords
    'no code automation', 'no code workflow', 'no code business automation', 'visual workflow builder',
    'drag and drop automation', 'citizen developer course', 'low code automation',
    // AI Integration Keywords
    'ai automation tools', 'ai workflow automation', 'chatgpt automation', 'ai business tools',
    'automated ai workflows', 'ai integration course', 'intelligent automation'
  ],
  authors: [{ name: 'Anyro', url: 'https://iimagined.ai/story' }],
  creator: 'Anyro',
  publisher: 'IImagined',
  category: 'Education',
  classification: 'Business Automation Training',
  openGraph: {
    title: 'N8N AI Automations Masterclass - Save 40+ Hours/Week',
    description: 'Complete N8N automation system for entrepreneurs. Build AI-powered workflows without coding. Join 1,600+ students transforming their businesses.',
    url: 'https://iimagined.ai/n8n-ai-automations',
    siteName: 'IImagined',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://iimagined.ai/images/n8n-course-og.jpg',
        width: 1200,
        height: 630,
        alt: 'N8N AI Automations Course - Complete Masterclass',
        type: 'image/jpeg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@anyrxo',
    creator: '@anyrxo',
    title: 'N8N AI Automations Masterclass - Save 40+ Hours/Week',
    description: 'Master N8N automation with our complete course. Build AI-powered workflows without coding. Join 1,600+ students saving 40+ hours weekly.',
    images: ['https://iimagined.ai/images/n8n-course-og.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: 'https://iimagined.ai/n8n-ai-automations'
  },
  other: {
    'course:author': 'Anyro',
    'course:duration': '20 hours',
    'course:price': '$297',
    'course:currency': 'USD',
    'course:level': 'Beginner to Advanced',
    'course:language': 'English',
    'course:category': 'Business Automation'
  }
}