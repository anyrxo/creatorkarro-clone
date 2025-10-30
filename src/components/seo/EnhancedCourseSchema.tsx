// Enhanced Course Schema with Advanced Details
'use client'

import { siteConfig } from '@/config/seo'

interface EnhancedCourseSchemaProps {
  name: string
  description: string
  price: string
  originalPrice?: string
  sku: string
  image: string
  rating?: number
  reviewCount?: number
  availability?: 'InStock' | 'OutOfStock' | 'PreOrder'

  // Enhanced course details
  courseCode?: string
  educationalLevel?: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'
  timeToComplete?: string // ISO 8601 duration (e.g., "P4W" for 4 weeks)
  duration?: string // ISO 8601 duration (e.g., "PT10H" for 10 hours)
  numberOfLessons?: number
  skillLevel?: string
  teaches?: string[] // Skills taught
  coursePrerequisites?: string[]
  syllabusSections?: Array<{
    name: string
    description: string
    duration?: string
    lessons?: number
  }>
  financialAid?: boolean
  hasCertificate?: boolean

  // Course instance details
  startDate?: string
  endDate?: string
  instructor?: {
    name: string
    bio?: string
    image?: string
    credentials?: string[]
  }

  // Additional metadata
  totalStudents?: number
  completionRate?: number
  features?: string[]
  whatYouLearn?: string[]
  targetAudience?: string[]
}

export default function EnhancedCourseSchema({
  name,
  description,
  price,
  originalPrice,
  sku,
  image,
  rating = 4.9,
  reviewCount = 500,
  availability = 'InStock',
  courseCode,
  educationalLevel = 'All Levels',
  timeToComplete,
  duration,
  numberOfLessons,
  skillLevel,
  teaches = [],
  coursePrerequisites = [],
  syllabusSections = [],
  financialAid = false,
  hasCertificate = true,
  startDate,
  endDate,
  instructor = {
    name: 'Anyro',
    bio: 'AI Automation Expert & Instagram Growth Strategist with 127K+ successful students',
    image: `${siteConfig.url}/anyro.jpg`,
    credentials: [
      'AI Automation Specialist',
      'Social Media Marketing Expert',
      '10+ Years Industry Experience',
      '$5M+ Student Revenue Generated'
    ]
  },
  totalStudents,
  completionRate,
  features = [],
  whatYouLearn = [],
  targetAudience = []
}: EnhancedCourseSchemaProps) {
  const courseUrl = `${siteConfig.url}/${sku}`

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${courseUrl}#course`,
    name,
    description,
    ...(courseCode && { courseCode }),
    educationalLevel,
    ...(timeToComplete && { timeToComplete }),
    ...(teaches.length > 0 && { teaches }),
    ...(coursePrerequisites.length > 0 && { coursePrerequisites }),
    ...(numberOfLessons && { numberOfCredits: numberOfLessons }), // Using numberOfCredits for lesson count

    provider: {
      '@type': 'EducationalOrganization',
      name: 'IImagined.ai',
      url: siteConfig.url,
      sameAs: Object.values(siteConfig.links).filter(link => link.includes('http'))
    },

    instructor: {
      '@type': 'Person',
      name: instructor.name,
      ...(instructor.bio && { description: instructor.bio }),
      image: instructor.image,
      jobTitle: 'AI Automation Expert & Instagram Growth Strategist',
      ...(instructor.credentials && {
        hasCredential: instructor.credentials.map(cred => ({
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: cred
        }))
      }),
      sameAs: [
        'https://instagram.com/anyrxo',
        'https://twitter.com/anyrxo',
        'https://youtube.com/@anyrxo'
      ]
    },

    image: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}${image}`,
      width: 1200,
      height: 630
    },

    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: ['online', 'self-paced'],
      ...(duration && { courseWorkload: duration }),
      ...(startDate && { startDate }),
      ...(endDate && { endDate }),
      instructor: {
        '@type': 'Person',
        name: instructor.name
      }
    },

    offers: {
      '@type': 'Offer',
      price: price.replace('$', ''),
      priceCurrency: 'USD',
      availability: `https://schema.org/${availability}`,
      url: courseUrl,
      priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      seller: {
        '@type': 'Organization',
        name: 'IImagined.ai',
        url: siteConfig.url
      },
      ...(originalPrice && {
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: originalPrice.replace('$', ''),
          priceCurrency: 'USD',
          name: 'Original Price'
        }
      })
    },

    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: rating.toString(),
      reviewCount: reviewCount.toString(),
      bestRating: '5',
      worstRating: '1'
    },

    ...(totalStudents && {
      educationalCredentialAwarded: `Certificate of Completion - ${totalStudents}+ students enrolled`
    }),

    ...(completionRate && {
      interactionStatistic: {
        '@type': 'InteractionCounter',
        interactionType: 'CompleteAction',
        userInteractionCount: Math.floor(reviewCount * (completionRate / 100))
      }
    }),

    // Syllabus as hasPart
    ...(syllabusSections.length > 0 && {
      hasPart: syllabusSections.map((section, index) => ({
        '@type': 'CourseSection',
        position: index + 1,
        name: section.name,
        description: section.description,
        ...(section.duration && { timeRequired: section.duration }),
        ...(section.lessons && { numberOfItems: section.lessons })
      }))
    }),

    // What students will learn
    ...(whatYouLearn.length > 0 && {
      educationalUse: whatYouLearn
    }),

    // Target audience
    ...(targetAudience.length > 0 && {
      audience: {
        '@type': 'EducationalAudience',
        educationalRole: targetAudience.join(', ')
      }
    }),

    ...(financialAid && {
      financialAidEligible: 'Payment plans available'
    }),

    ...(hasCertificate && {
      educationalCredentialAwarded: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Certificate of Completion',
        name: `${name} Certificate`
      }
    })
  }

  // Also generate Product schema for e-commerce features
  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${courseUrl}#product`,
    name,
    description,
    sku,
    brand: {
      '@type': 'Brand',
      name: 'IImagined.ai'
    },
    category: 'Online Course',
    image: `${siteConfig.url}${image}`,
    offers: courseSchema.offers,
    aggregateRating: courseSchema.aggregateRating,
    ...(features.length > 0 && {
      additionalProperty: features.map(feature => ({
        '@type': 'PropertyValue',
        name: 'Feature',
        value: feature
      }))
    })
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </>
  )
}

// Enhanced course configurations
export const enhancedCourseSchemas = {
  instagramIgnited: {
    name: 'Instagram Ignited - Complete Growth & Monetization Course',
    description: 'Master Instagram growth from 0 to 500K+ followers. Learn viral content strategies, algorithm mastery, and monetization methods that have generated $1.2M+ in student revenue.',
    price: '$399',
    originalPrice: '$3,109',
    sku: 'instagram-ignited',
    image: '/courses/instagram-ignited/hero.jpg',
    rating: 4.9,
    reviewCount: 2847,
    courseCode: 'IG-001',
    educationalLevel: 'All Levels' as const,
    timeToComplete: 'P4W', // 4 weeks to complete
    duration: 'PT10H', // 10 hours of content
    numberOfLessons: 87,
    skillLevel: 'Beginner to Advanced',
    teaches: [
      'Instagram Algorithm Mastery',
      'Viral Content Creation',
      'Growth Psychology',
      'Engagement Strategies',
      'Monetization Methods',
      'Brand Partnerships',
      'Content Planning',
      'Analytics & Optimization'
    ],
    whatYouLearn: [
      'Grow from 0 to 10K+ followers in 90 days',
      'Create content that consistently goes viral',
      'Master Instagram\'s algorithm for maximum reach',
      'Build authentic engagement with your audience',
      'Monetize your account through multiple revenue streams',
      'Land brand deals and sponsorships',
      'Scale content creation efficiently',
      'Analyze data to optimize performance'
    ],
    features: [
      'Lifetime Access',
      '10+ Hours of Training',
      '87 Detailed Lessons',
      'Viral Content Templates',
      'Growth Automation Tools',
      'Private Community Access',
      'Weekly Q&A Sessions',
      'Certificate of Completion'
    ],
    targetAudience: [
      'Aspiring Content Creators',
      'Entrepreneurs',
      'Small Business Owners',
      'Social Media Managers',
      'Influencers',
      'Digital Marketers'
    ],
    totalStudents: 2400,
    completionRate: 78,
    hasCertificate: true,
    financialAid: true
  }
}
