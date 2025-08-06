import React from 'react'
import { notFound } from 'next/navigation'

interface GeoPageProps {
  params: Promise<{ country: string; slug: string[] }>
}

export async function generateStaticParams() {
  // Generate priority combinations for build-time generation
  const priorityCountries = ['us', 'au', 'gb', 'sg', 'kr', 'jp']
  const modifiers = ['best', 'top', 'professional', 'advanced']
  const services = ['ai-automation-course', 'digital-products-course', 'instagram-growth-training', 'n8n-automation-training']
  
  // Priority cities for each country (top 3 for build-time)
  const priorityCities: { [key: string]: string[] } = {
    'us': ['new-york', 'los-angeles', 'chicago'],
    'au': ['sydney', 'melbourne', 'brisbane'], 
    'gb': ['london', 'birmingham', 'manchester'],
    'sg': ['marina-bay', 'orchard', 'raffles-place'],
    'kr': ['seoul', 'busan', 'incheon'],
    'jp': ['tokyo', 'osaka', 'yokohama']
  }
  
  const params: { country: string; slug: string[] }[] = []
  
  priorityCountries.forEach(country => {
    const cities = priorityCities[country] || ['main-city']
    modifiers.forEach(modifier => {
      services.forEach(service => {
        cities.forEach(city => {
          params.push({
            country,
            slug: [modifier, service, city]
          })
        })
      })
    })
  })
  
  return params.slice(0, 300) // Conservative limit for build performance
}

export default async function InternationalGeoPage({ 
  params 
}: GeoPageProps) {
  const { country, slug } = await params
  
  if (!slug || slug.length !== 3) {
    notFound()
  }
  
  const [modifier, service, city] = slug
  
  // Convert service slug back to readable format
  const serviceTitle = service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  const cityTitle = city.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
  const countryTitle = getCountryName(country)
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">
        {modifier.charAt(0).toUpperCase() + modifier.slice(1)} {serviceTitle} in {cityTitle}, {countryTitle}
      </h1>
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-6">
          Discover the {modifier} {serviceTitle.toLowerCase()} available in {cityTitle}, {countryTitle}. 
          Our comprehensive training programs are designed for professionals seeking to master cutting-edge skills.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Why Choose Our {serviceTitle}?</h2>
            <ul className="space-y-2">
              <li>✓ Expert-led instruction</li>
              <li>✓ Hands-on practical projects</li>
              <li>✓ Industry-recognized certification</li>
              <li>✓ Flexible learning schedule</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Local {countryTitle} Support</h2>
            <p>
              Our {cityTitle}-based team provides localized support and understands the unique 
              business landscape in {countryTitle}.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function getCountryName(countryCode: string): string {
  const countryNames: { [key: string]: string } = {
    'us': 'United States',
    'au': 'Australia', 
    'gb': 'United Kingdom',
    'sg': 'Singapore',
    'kr': 'South Korea',
    'jp': 'Japan',
    'ca': 'Canada',
    'de': 'Germany',
    'fr': 'France',
    'es': 'Spain',
    'it': 'Italy',
    'br': 'Brazil',
    'in': 'India',
    'mx': 'Mexico'
  }
  return countryNames[countryCode] || countryCode.toUpperCase()
}
