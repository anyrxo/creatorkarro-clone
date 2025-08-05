import { Metadata } from 'next'
import InteractiveGeoPage from '@/components/InteractiveGeoPage'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ProductSchema from '@/components/seo/ProductSchema'

export const metadata: Metadata = {
  title: 'Best Ai Automation Course | Los Angeles | IImagined.ai',
  description: 'Master ai automation course in Los Angeles. Join 789+ successful students with our proven system. 90% success rate, lifetime access.',
  keywords: 'best ai automation course los angeles, ai automation course los angeles, ai automation course course los angeles, ai automation course training los angeles, learn ai automation course los angeles, los angeles ai automation course expert, online ai automation course course',
  openGraph: {
    title: 'Best Ai Automation Course in Los Angeles',
    description: 'Master ai automation course in Los Angeles. Join 789+ successful students with our proven system. 90% success rate, lifetime access.',
    images: [{ url: '/og-geo-best-ai-automation-course-los-angeles.jpg', width: 1200, height: 630 }]
  }
}

export default function BestAiAutomationCourseLosAngelesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Service', 'Course'],
    'name': 'Best Ai Automation Course Training in Los Angeles',
    'description': 'Comprehensive ai automation course course designed for Los Angeles entrepreneurs looking to build successful online businesses.',
    'provider': {
      '@type': 'Organization',
      'name': 'IImagined.ai',
      'url': 'https://iimagined.ai',
      'logo': 'https://iimagined.ai/logo.png'
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Los Angeles',
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
          { name: 'Los Angeles', url: `https://iimagined.ai/best-ai-automation-course-los-angeles` }
        ]}
      />

      <InteractiveGeoPage
        city="Los Angeles"
        courseType="ai automation course"
        studentCount={789}
        averageRevenue={127}
        ogImage="/og-geo-best-ai-automation-course-los-angeles.jpg"
        title="Best Ai Automation Course"
        description="Master ai automation course in Los Angeles. Join 789+ successful students with our proven system. 90% success rate, lifetime access."
      />
    </>
  )
}
