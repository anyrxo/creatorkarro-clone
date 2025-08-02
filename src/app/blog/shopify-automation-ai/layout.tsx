import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shopify AI Automation: Scale E-commerce to $1M+/Year with AI Systems | IImagined.ai',
  description: 'Master Shopify automation with AI-powered systems. Learn inventory management, customer service, marketing automation, and scaling strategies for massive revenue.',
  keywords: [
    'shopify automation',
    'shopify ai automation',
    'ecommerce automation',
    'shopify scaling automation',
    'shopify marketing automation',
    'shopify inventory automation',
    'shopify customer service automation',
    'shopify revenue automation',
    'shopify dropshipping automation',
    'shopify business automation',
    'ecommerce ai systems',
    'shopify workflow automation',
    'automated ecommerce',
    'shopify growth automation'
  ],
  openGraph: {
    title: 'Shopify AI Automation: Scale E-commerce to $1M+/Year',
    description: 'Advanced Shopify automation systems with AI for inventory, marketing, and customer service that scale to massive revenue.',
    type: 'article',
    publishedTime: '2025-01-11T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Shopify Automation', 'E-commerce AI', 'Business Automation', 'Shopify Scaling', 'AI Systems'],
    images: [
      {
        url: 'https://iimagined.ai/blog/shopify-automation-ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Shopify AI Automation - E-commerce Scaling Systems'
      }
    ]
  }
}

export default function ShopifyAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}