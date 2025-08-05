import { Metadata } from 'next'
import InteractiveGeoPage from '@/components/InteractiveGeoPage'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ProductSchema from '@/components/seo/ProductSchema'

export const metadata: Metadata = {
  title: 'Best Digital Products Course | Chicago | IImagined.ai',
  description: 'Master digital products course in Chicago. Join 533+ successful students with our proven system. 90% success rate, lifetime access.',
  keywords: 'best digital products course chicago, digital products course chicago, digital products course course chicago, digital products course training chicago, learn digital products course chicago, chicago digital products course expert, online digital products course course',
  openGraph: {
    title: 'Best Digital Products Course in Chicago',
    description: 'Master digital products course in Chicago. Join 533+ successful students with our proven system. 90% success rate, lifetime access.',
    images: [{ url: '/og-geo-best-digital-products-course-chicago.jpg', width: 1200, height: 630 }]
  }
}

export default function BestDigitalProductsCourseChicagoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Service', 'Course'],
    'name': 'Best Digital Products Course Training in Chicago',
    'description': 'Comprehensive digital products course course designed for Chicago entrepreneurs looking to build successful online businesses.',
    'provider': {
      '@type': 'Organization',
      'name': 'IImagined.ai',
      'url': 'https://iimagined.ai',
      'logo': 'https://iimagined.ai/logo.png'
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Chicago',
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
          { name: 'Chicago', url: `https://iimagined.ai/best-digital-products-course-chicago` }
        ]}
      />

      <InteractiveGeoPage
        city="Chicago"
        courseType="digital products course"
        studentCount={533}
        averageRevenue={98}
        ogImage="/og-geo-best-digital-products-course-chicago.jpg"
        title="Best Digital Products Course"
        description="Master digital products course in Chicago. Join 533+ successful students with our proven system. 90% success rate, lifetime access."
      />
    </>
  )
}
