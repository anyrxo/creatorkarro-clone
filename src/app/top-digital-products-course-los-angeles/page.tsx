import { Metadata } from 'next'
import InteractiveGeoPage from '@/components/InteractiveGeoPage'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ProductSchema from '@/components/seo/ProductSchema'

export const metadata: Metadata = {
  title: 'Top Digital Products Course | Los Angeles | IImagined.ai',
  description: 'Master digital products course in Los Angeles. Join 789+ successful students with our proven system. 90% success rate, lifetime access.',
  keywords: 'top digital products course los angeles, digital products course los angeles, digital products course course los angeles, digital products course training los angeles, learn digital products course los angeles, los angeles digital products course expert, online digital products course course',
  openGraph: {
    title: 'Top Digital Products Course in Los Angeles',
    description: 'Master digital products course in Los Angeles. Join 789+ successful students with our proven system. 90% success rate, lifetime access.',
    images: [{ url: '/og-geo-top-digital-products-course-los-angeles.jpg', width: 1200, height: 630 }]
  }
}

export default function TopDigitalProductsCourseLosAngelesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Service', 'Course'],
    'name': 'Top Digital Products Course Training in Los Angeles',
    'description': 'Comprehensive digital products course course designed for Los Angeles entrepreneurs looking to build successful online businesses.',
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
          { name: 'Los Angeles', url: `https://iimagined.ai/top-digital-products-course-los-angeles` }
        ]}
      />

      <InteractiveGeoPage
        city="Los Angeles"
        courseType="digital products course"
        studentCount={789}
        averageRevenue={98}
        ogImage="/og-geo-top-digital-products-course-los-angeles.jpg"
        title="Top Digital Products Course"
        description="Master digital products course in Los Angeles. Join 789+ successful students with our proven system. 90% success rate, lifetime access."
      />
    </>
  )
}
