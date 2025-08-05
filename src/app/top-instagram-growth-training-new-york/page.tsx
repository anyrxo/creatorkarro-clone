import { Metadata } from 'next'
import InteractiveGeoPage from '@/components/InteractiveGeoPage'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ProductSchema from '@/components/seo/ProductSchema'

export const metadata: Metadata = {
  title: 'Top Instagram Growth Training | New York | IImagined.ai',
  description: 'Master instagram growth training in New York. Join 1247+ successful students with our proven system. 90% success rate, lifetime access.',
  keywords: 'top instagram growth training new york, instagram growth training new york, instagram growth training course new york, instagram growth training training new york, learn instagram growth training new york, new york instagram growth training expert, online instagram growth training course',
  openGraph: {
    title: 'Top Instagram Growth Training in New York',
    description: 'Master instagram growth training in New York. Join 1247+ successful students with our proven system. 90% success rate, lifetime access.',
    images: [{ url: '/og-geo-top-instagram-growth-training-new-york.jpg', width: 1200, height: 630 }]
  }
}

export default function TopInstagramGrowthTrainingNewYorkPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Service', 'Course'],
    'name': 'Top Instagram Growth Training Training in New York',
    'description': 'Comprehensive instagram growth training course designed for New York entrepreneurs looking to build successful online businesses.',
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
          { name: 'New York', url: `https://iimagined.ai/top-instagram-growth-training-new-york` }
        ]}
      />

      <InteractiveGeoPage
        city="New York"
        courseType="instagram growth training"
        studentCount={1247}
        averageRevenue={76}
        ogImage="/og-geo-top-instagram-growth-training-new-york.jpg"
        title="Top Instagram Growth Training"
        description="Master instagram growth training in New York. Join 1247+ successful students with our proven system. 90% success rate, lifetime access."
      />
    </>
  )
}
