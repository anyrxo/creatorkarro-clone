import React from 'react'
import { notFound } from 'next/navigation'

interface USGeoPageProps {
  params: Promise<{ slug: string[] }>
}

export async function generateStaticParams() {
  // Generate popular US geo combinations
  const modifiers = ['best', 'top', 'professional', 'advanced']
  const keywords = ['ai-automation-course', 'digital-products-course', 'instagram-growth-training']  
  const cities = ['new-york', 'los-angeles', 'chicago', 'houston', 'phoenix', 'philadelphia', 'san-antonio', 'san-diego', 'dallas', 'san-jose']
  
  const params: { slug: string[] }[] = []
  
  modifiers.forEach(modifier => {
    keywords.forEach(keyword => {
      cities.forEach(city => {
        params.push({
          slug: [modifier, keyword, city]
        })
      })
    })
  })
  
  return params.slice(0, 300) // Limit to prevent build timeout
}

export default async function USGeoPage({ params }: USGeoPageProps) {
  const { slug } = await params
  
  if (!slug || slug.length !== 3) {
    notFound()
  }
  
  const [modifier, keyword, city] = slug
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">
        {modifier} {keyword} in {city}
      </h1>
      <p>Location-specific content for {city}</p>
    </div>
  )
}
