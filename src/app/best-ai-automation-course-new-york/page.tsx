import { Metadata } from 'next'
import InteractiveGeoPage from '@/components/InteractiveGeoPage'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ProductSchema from '@/components/seo/ProductSchema'

export const metadata: Metadata = {
  title: 'Best Ai Automation Course | New York | IImagined.ai',
  description: 'Master ai automation course in New York. Join 1247+ successful students with our proven system. 90% success rate, lifetime access.',
  keywords: 'best ai automation course new york, ai automation course new york, ai automation course course new york, ai automation course training new york, learn ai automation course new york, new york ai automation course expert, online ai automation course course',
  openGraph: {
    title: 'Best Ai Automation Course in New York',
    description: 'Master ai automation course in New York. Join 1247+ successful students with our proven system. 90% success rate, lifetime access.',
    images: [{ url: '/og-geo-best-ai-automation-course-new-york.jpg', width: 1200, height: 630 }]
  }
}

export default function BestAiAutomationCourseNewYorkPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Service', 'Course'],
    'name': 'Best Ai Automation Course Training in New York',
    'description': 'Comprehensive ai automation course course designed for New York entrepreneurs looking to build successful online businesses.',
    'provider': {
      '@type': 'Organization',
      'name': 'IImagined.ai',
      'url': 'https://iimagined.ai',
      'logo': 'https://iimagined.ai/logo.png'
    },
    'areaServed': {
      '@type': 'City',
      'name': 'New York',
      'addressCountry': 'US'
    },
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.9',
      'reviewCount': '126',
      'bestRating': '5'
    },
    'offers': {
      '@type': 'Offer',
      'price': '147',
      'priceCurrency': 'USD',
      'availability': 'https://schema.org/InStock'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: 'https://iimagined.ai' },
          { name: 'Services', url: 'https://iimagined.ai/services' },
          { name: 'New York', url: `https://iimagined.ai/best-ai-automation-course-new-york` }
        ]}
      />

      <InteractiveGeoPage
        city="New York"
        courseType="ai automation course"
        studentCount={1247}
        averageRevenue={127}
        ogImage="/og-geo-best-ai-automation-course-new-york.jpg"
        title="Best Ai Automation Course"
        description="Master ai automation course in New York. Join 1247+ successful students with our proven system. 90% success rate, lifetime access."
      />
    </>
  )
}
