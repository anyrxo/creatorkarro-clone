// Person Schema Component - Advanced SEO for Author/About Pages
'use client'

import { siteConfig } from '@/config/seo'

interface PersonSchemaProps {
  name: string
  jobTitle: string | string[]
  description: string
  image?: string
  url?: string
  sameAs?: string[]
  knowsAbout?: string[]
  alumniOf?: string[]
  awards?: string[]
  worksFor?: {
    name: string
    url: string
  }
  email?: string
  nationality?: string
}

export default function PersonSchema({
  name,
  jobTitle,
  description,
  image,
  url,
  sameAs = [],
  knowsAbout = [],
  alumniOf = [],
  awards = [],
  worksFor,
  email,
  nationality
}: PersonSchemaProps) {
  const personUrl = url || `${siteConfig.url}/about`
  const personImage = image || `${siteConfig.url}/anyro.jpg`

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${personUrl}#person`,
    name,
    givenName: name.split(' ')[0],
    ...(name.split(' ').length > 1 && { familyName: name.split(' ').slice(1).join(' ') }),
    jobTitle: Array.isArray(jobTitle) ? jobTitle : [jobTitle],
    description,
    url: personUrl,
    image: {
      '@type': 'ImageObject',
      url: personImage,
      width: 800,
      height: 800
    },
    ...(sameAs.length > 0 && { sameAs }),
    ...(knowsAbout.length > 0 && { knowsAbout }),
    ...(alumniOf.length > 0 && {
      alumniOf: alumniOf.map(school => ({
        '@type': 'EducationalOrganization',
        name: school
      }))
    }),
    ...(awards.length > 0 && { award: awards }),
    ...(worksFor && {
      worksFor: {
        '@type': 'Organization',
        name: worksFor.name,
        url: worksFor.url
      }
    }),
    ...(email && { email }),
    ...(nationality && { nationality }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': personUrl
    },
    // Additional professional details
    hasOccupation: {
      '@type': 'Occupation',
      name: Array.isArray(jobTitle) ? jobTitle[0] : jobTitle,
      occupationLocation: {
        '@type': 'Country',
        name: 'United States'
      },
      ...(knowsAbout.length > 0 && {
        skills: knowsAbout.join(', ')
      })
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  )
}

// Pre-configured Person schemas
export const personSchemas = {
  anyro: {
    name: 'Anyro',
    jobTitle: [
      'AI Automation Expert',
      'Instagram Growth Strategist',
      'Digital Marketing Consultant',
      'Content Creator',
      'Entrepreneur'
    ],
    description: 'Anyro is a leading AI automation expert and Instagram growth strategist who has helped over 127,000 students build successful online businesses. Specializing in AI influencers, ComfyUI workflows, N8N automation, and digital product creation.',
    image: `${siteConfig.url}/anyro.jpg`,
    url: `${siteConfig.url}/story`,
    sameAs: [
      'https://twitter.com/anyro',
      'https://instagram.com/anyrxo',
      'https://youtube.com/@anyrxo',
      'https://linkedin.com/in/anyro',
      'https://github.com/anyro'
    ],
    knowsAbout: [
      'AI Automation',
      'Instagram Marketing',
      'Social Media Growth',
      'Digital Products',
      'N8N Workflows',
      'Content Creation',
      'Claude AI',
      'ChatGPT',
      'ComfyUI',
      'AI Influencers',
      'Marketing Automation',
      'Futures Trading',
      'Prop Firm Trading',
      'Business Development',
      'E-commerce'
    ],
    awards: [
      'Top AI Automation Course Creator 2024',
      'Best Instagram Growth Training 2024',
      '127K+ Students Milestone Achievement',
      '$5M+ Student Revenue Generated'
    ],
    worksFor: {
      name: 'IImagined.ai',
      url: siteConfig.url
    },
    email: 'anyro@iimagined.ai',
    nationality: 'American'
  }
}
