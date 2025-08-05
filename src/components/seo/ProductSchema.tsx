// Product Schema Component - TOXIC SEO Domination
'use client'

import { siteConfig } from '@/config/seo'

interface ProductSchemaProps {
  name: string
  description: string
  price: string
  originalPrice?: string
  sku: string
  category: string
  image: string
  rating?: number
  reviewCount?: number
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder'
  instructor?: string
  duration?: string
  features?: string[]
}

export default function ProductSchema({
  name,
  description,
  price,
  originalPrice,
  sku,
  category,
  image,
  rating = 4.9,
  reviewCount = 500,
  availability = 'InStock',
  instructor = 'Anyro',
  duration,
  features = []
}: ProductSchemaProps) {
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name,
    description,
    sku,
    mpn: sku,
    brand: {
      '@type': 'Brand',
      name: 'IImagined.ai'
    },
    category,
    image: [
      `${siteConfig.url}${image}`,
      `${siteConfig.url}${image.replace('.jpg', '-2.jpg')}`,
      `${siteConfig.url}${image.replace('.jpg', '-3.jpg')}`
    ],
    offers: {
      '@type': 'Offer',
      price: price.replace('$', ''),
      priceCurrency: 'USD',
      priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days from now
      availability: `https://schema.org/${availability}`,
      url: `${siteConfig.url}/${sku}`,
      seller: {
        '@type': 'Organization',
        name: 'IImagined.ai',
        url: siteConfig.url
      },
      ...(originalPrice && {
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: originalPrice.replace('$', ''),
          priceCurrency: 'USD'
        }
      })
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating.toString(),
      reviewCount: reviewCount.toString(),
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        author: {
          '@type': 'Person',
          name: 'Sarah Johnson'
        },
        datePublished: '2024-11-15',
        reviewBody: `${name} completely transformed my business. The strategies are practical and results-driven.`
      },
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5'
        },
        author: {
          '@type': 'Person',
          name: 'Mike Chen'
        },
        datePublished: '2024-11-10',
        reviewBody: `Amazing course! ${instructor}'s teaching style is clear and actionable. Highly recommend!`
      }
    ],
    manufacturer: {
      '@type': 'Organization',
      name: 'IImagined.ai',
      url: siteConfig.url
    },
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Instructor',
        value: instructor
      },
      {
        '@type': 'PropertyValue',
        name: 'Course Type',
        value: 'Online Video Course'
      },
      {
        '@type': 'PropertyValue',
        name: 'Access',
        value: 'Lifetime'
      },
      ...(duration ? [{
        '@type': 'PropertyValue',
        name: 'Duration',
        value: duration
      }] : []),
      ...features.map(feature => ({
        '@type': 'PropertyValue',
        name: 'Feature',
        value: feature
      }))
    ]
  }

  // If it's a course, add Course schema as well
  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: 'IImagined.ai',
      sameAs: siteConfig.url
    },
    instructor: {
      '@type': 'Person',
      name: instructor,
      jobTitle: 'AI Automation Expert & Instagram Growth Strategist',
      image: `${siteConfig.url}/anyro.jpg`,
      sameAs: [
        'https://instagram.com/anyrxo',
        'https://twitter.com/anyrxo',
        'https://youtube.com/@anyrxo'
      ]
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      ...(duration && { courseWorkload: duration })
    },
    offers: {
      '@type': 'Offer',
      price: price.replace('$', ''),
      priceCurrency: 'USD',
      availability: `https://schema.org/${availability}`,
      url: `${siteConfig.url}/${sku}`
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating.toString(),
      reviewCount: reviewCount.toString(),
      bestRating: '5'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
    </>
  )
}

// Pre-configured product schemas
export const productSchemas = {
  instagramIgnited: {
    name: 'Instagram Ignited - Complete Growth Course',
    description: 'Master Instagram growth with proven strategies that generate real followers and engagement. Learn the exact system used by 127K+ students.',
    price: '$147',
    originalPrice: '$297',
    sku: 'instagram-ignited',
    category: 'Social Media Marketing Course',
    image: '/courses/instagram-ignited/hero.jpg',
    duration: 'PT8H',
    features: [
      'Complete Instagram Growth System',
      'Viral Content Templates',
      'Engagement Strategies',
      'Monetization Methods',
      'Algorithm Mastery',
      'Community Access'
    ]
  },
  
  digitalProducts: {
    name: 'Digital Products Empire - Build & Scale',
    description: 'Create and scale digital products that generate passive income. Complete blueprint for building a profitable digital product business.',
    price: '$189',
    originalPrice: '$397',
    sku: 'digital-products',
    category: 'Digital Business Course',
    image: '/courses/digital-products/hero.jpg',
    duration: 'PT10H',
    features: [
      'Product Creation Framework',
      'Sales Funnel Mastery',
      'Launch Strategies',
      'Scaling Systems',
      'Revenue Optimization',
      'Market Research'
    ]
  },
  
  n8nAutomation: {
    name: 'N8N AI Automations - Workflow Mastery',
    description: 'Master N8N automation with AI integration. Build powerful workflows that save time and increase productivity.',
    price: '$129',
    originalPrice: '$247',
    sku: 'n8n-ai-automations',
    category: 'Automation Course',
    image: '/courses/n8n/hero.jpg',
    duration: 'PT6H',
    features: [
      'N8N Fundamentals',
      'AI Integration',
      'Workflow Templates',
      'Advanced Automations',
      'Business Applications',
      'Troubleshooting'
    ]
  },
  
  aiInfluencers: {
    name: 'AI Influencers - Create Virtual Personalities',
    description: 'Build AI influencers that generate content and income 24/7. Complete guide to virtual personality creation.',
    price: '$169',
    originalPrice: '$347',
    sku: 'ai-influencers',
    category: 'AI Course',
    image: '/courses/ai-influencers/hero.jpg',
    duration: 'PT7H',
    features: [
      'AI Character Creation',
      'Content Generation',
      'Monetization Strategies',
      'Platform Management',
      'Voice & Personality',
      'Scaling Methods'
    ]
  },
  
  comfyuiWorkflows: {
    name: 'ComfyUI Workflows - Advanced AI Image Generation',
    description: 'Master ComfyUI for professional AI image generation. Create stunning visuals with advanced workflow techniques.',
    price: '$247',
    originalPrice: '$497',
    sku: 'comfyui-workflows',
    category: 'AI Image Generation Course',
    image: '/courses/comfyui/hero.jpg',
    duration: 'PT12H',
    features: [
      'ComfyUI Mastery',
      'Advanced Workflows',
      'Custom Nodes',
      'Image Processing',
      'Batch Generation',
      'Commercial Applications'
    ]
  }
}