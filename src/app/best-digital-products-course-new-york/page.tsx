import { Metadata } from 'next'
import InteractiveGeoPage from '@/components/InteractiveGeoPage'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ProductSchema from '@/components/seo/ProductSchema'

export const metadata: Metadata = {
  title: 'Best Digital Products Course | New York | IImagined.ai',
  description: 'Master digital products course in New York. Join 1247+ successful students with our proven system. 90% success rate, lifetime access.',
  keywords: 'best digital products course new york, digital products course new york, digital products course course new york, digital products course training new york, learn digital products course new york, new york digital products course expert, online digital products course course',
  openGraph: {
    title: 'Best Digital Products Course in New York',
    description: 'Master digital products course in New York. Join 1247+ successful students with our proven system. 90% success rate, lifetime access.',
    images: [{ url: '/og-geo-best-digital-products-course-new-york.jpg', width: 1200, height: 630 }]
  }
}

export default function BestDigitalProductsCourseNewYorkPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Service', 'Course'],
    'name': 'Best Digital Products Course Training in New York',
    'description': 'Comprehensive digital products course course designed for New York entrepreneurs looking to build successful online businesses.',
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
          { name: 'New York', url: `https://iimagined.ai/best-digital-products-course-new-york` }
        ]}
      />

      <InteractiveGeoPage
        city="New York"
        courseType="digital products course"
        studentCount={1247}
        averageRevenue={98}
        ogImage="/og-geo-best-digital-products-course-new-york.jpg"
        title="Best Digital Products Course"
        description="Master digital products course in New York. Join 1247+ successful students with our proven system. 90% success rate, lifetime access."
      />
    </>
  )
}
