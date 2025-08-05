import { Metadata } from 'next'
import InteractiveGeoPage from '@/components/InteractiveGeoPage'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import ProductSchema from '@/components/seo/ProductSchema'

export const metadata: Metadata = {
  title: 'Top Instagram Growth Training | Houston | IImagined.ai',
  description: 'Master instagram growth training in Houston. Join 342+ successful students with our proven system. 90% success rate, lifetime access.',
  keywords: 'top instagram growth training houston, instagram growth training houston, instagram growth training course houston, instagram growth training training houston, learn instagram growth training houston, houston instagram growth training expert, online instagram growth training course',
  openGraph: {
    title: 'Top Instagram Growth Training in Houston',
    description: 'Master instagram growth training in Houston. Join 342+ successful students with our proven system. 90% success rate, lifetime access.',
    images: [{ url: '/og-geo-top-instagram-growth-training-houston.jpg', width: 1200, height: 630 }]
  }
}

export default function TopInstagramGrowthTrainingHoustonPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Service', 'Course'],
    'name': 'Top Instagram Growth Training Training in Houston',
    'description': 'Comprehensive instagram growth training course designed for Houston entrepreneurs looking to build successful online businesses.',
    'provider': {
      '@type': 'Organization',
      'name': 'IImagined.ai',
      'url': 'https://iimagined.ai',
      'logo': 'https://iimagined.ai/logo.png'
    },
    'areaServed': {
      '@type': 'City',
      'name': 'Houston',
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
          { name: 'Houston', url: `https://iimagined.ai/top-instagram-growth-training-houston` }
        ]}
      />

      <InteractiveGeoPage
        city="Houston"
        courseType="instagram growth training"
        studentCount={342}
        averageRevenue={76}
        ogImage="/og-geo-top-instagram-growth-training-houston.jpg"
        title="Top Instagram Growth Training"
        description="Master instagram growth training in Houston. Join 342+ successful students with our proven system. 90% success rate, lifetime access."
      />
    </>
  )
}
