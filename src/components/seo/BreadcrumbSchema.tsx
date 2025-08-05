// Breadcrumb Schema Component - TOXIC SEO Domination
'use client'

import { siteConfig } from '@/config/seo'

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
    />
  )
}

// Pre-built breadcrumb configurations
export const breadcrumbs = {
  home: [
    { name: 'Home', url: siteConfig.url }
  ],
  
  courses: [
    { name: 'Home', url: siteConfig.url },
    { name: 'Courses', url: `${siteConfig.url}/courses` }
  ],
  
  instagramIgnited: [
    { name: 'Home', url: siteConfig.url },
    { name: 'Courses', url: `${siteConfig.url}/courses` },
    { name: 'Instagram Ignited', url: `${siteConfig.url}/instagram-ignited` }
  ],
  
  digitalProducts: [
    { name: 'Home', url: siteConfig.url },
    { name: 'Courses', url: `${siteConfig.url}/courses` },
    { name: 'Digital Products', url: `${siteConfig.url}/digital-products` }
  ],
  
  n8nAutomation: [
    { name: 'Home', url: siteConfig.url },
    { name: 'Courses', url: `${siteConfig.url}/courses` },
    { name: 'N8N AI Automations', url: `${siteConfig.url}/n8n-ai-automations` }
  ],
  
  aiInfluencers: [
    { name: 'Home', url: siteConfig.url },
    { name: 'Courses', url: `${siteConfig.url}/courses` },
    { name: 'AI Influencers', url: `${siteConfig.url}/ai-influencers` }
  ],
  
  comfyuiWorkflows: [
    { name: 'Home', url: siteConfig.url },
    { name: 'Courses', url: `${siteConfig.url}/courses` },
    { name: 'ComfyUI Workflows', url: `${siteConfig.url}/comfyui-workflows` }
  ],
  
  blog: [
    { name: 'Home', url: siteConfig.url },
    { name: 'Blog', url: `${siteConfig.url}/blog` }
  ],
  
  blogPost: (slug: string, title: string) => [
    { name: 'Home', url: siteConfig.url },
    { name: 'Blog', url: `${siteConfig.url}/blog` },
    { name: title, url: `${siteConfig.url}/blog/${slug}` }
  ],
  
  about: [
    { name: 'Home', url: siteConfig.url },
    { name: 'About', url: `${siteConfig.url}/about` }
  ],
  
  story: [
    { name: 'Home', url: siteConfig.url },
    { name: 'My Story', url: `${siteConfig.url}/story` }
  ],
  
  contact: [
    { name: 'Home', url: siteConfig.url },
    { name: 'Contact', url: `${siteConfig.url}/contact` }
  ],
  
  resources: [
    { name: 'Home', url: siteConfig.url },
    { name: 'Resources', url: `${siteConfig.url}/resources` }
  ],
  
  testimonials: [
    { name: 'Home', url: siteConfig.url },
    { name: 'Testimonials', url: `${siteConfig.url}/testimonials` }
  ],
  
  legal: {
    privacy: [
      { name: 'Home', url: siteConfig.url },
      { name: 'Legal', url: `${siteConfig.url}/legal` },
      { name: 'Privacy Policy', url: `${siteConfig.url}/privacy-policy` }
    ],
    
    terms: [
      { name: 'Home', url: siteConfig.url },
      { name: 'Legal', url: `${siteConfig.url}/legal` },
      { name: 'Terms of Service', url: `${siteConfig.url}/terms` }
    ],
    
    refund: [
      { name: 'Home', url: siteConfig.url },
      { name: 'Legal', url: `${siteConfig.url}/legal` },
      { name: 'Refund Policy', url: `${siteConfig.url}/refund-policy` }
    ],
    
    cookies: [
      { name: 'Home', url: siteConfig.url },
      { name: 'Legal', url: `${siteConfig.url}/legal` },
      { name: 'Cookie Policy', url: `${siteConfig.url}/cookie-policy` }
    ]
  },
  
  // Geo-targeted breadcrumbs
  geo: (service: string, location: string) => [
    { name: 'Home', url: siteConfig.url },
    { name: 'Services', url: `${siteConfig.url}/services` },
    { name: `${service} ${location}`, url: `${siteConfig.url}/${service}-${location}` }
  ]
}