import { Metadata } from 'next'
import InteractiveGeoPage from '@/components/InteractiveGeoPage'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ProductSchema from '@/components/seo/ProductSchema'

export const metadata: Metadata = {
  title: 'Best Instagram Growth Training | Chicago | IImagined.ai',
  description: 'Master instagram growth training in Chicago. Join 533+ successful students with our proven system. 90% success rate, lifetime access.',
  keywords: 'best instagram growth training chicago, instagram growth training chicago, instagram growth training course chicago, instagram growth training training chicago, learn instagram growth training chicago, chicago instagram growth training expert, online instagram growth training course',
  openGraph: {
    title: 'Best Instagram Growth Training in Chicago',
    description: 'Master instagram growth training in Chicago. Join 533+ successful students with our proven system. 90% success rate, lifetime access.',
    images: [{ url: '/og-geo-best-instagram-growth-training-chicago.jpg', width: 1200, height: 630 }]
  }
}

export default function BestInstagramGrowthTrainingChicagoPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Service', 'Course'],
    'name': 'Best Instagram Growth Training Training in Chicago',
    'description': 'Comprehensive instagram growth training course designed for Chicago entrepreneurs looking to build successful online businesses.',
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
          { name: 'Chicago', url: `https://iimagined.ai/best-instagram-growth-training-chicago` }
        ]}
      />

      <InteractiveGeoPage
        city="Chicago"
        courseType="instagram growth training"
        studentCount={533}
        averageRevenue={76}
        ogImage="/og-geo-best-instagram-growth-training-chicago.jpg"
        title="Best Instagram Growth Training"
        description="Master instagram growth training in Chicago. Join 533+ successful students with our proven system. 90% success rate, lifetime access."
      />
    </>
  )
}
