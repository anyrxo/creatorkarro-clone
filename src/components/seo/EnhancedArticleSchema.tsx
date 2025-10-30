// Enhanced Article Schema - Maximum AI Citation & Rich Snippet Optimization
'use client'

interface EnhancedArticleSchemaProps {
  title: string
  description: string
  url: string
  datePublished: string
  dateModified?: string
  author?: string
  category?: string
  tags?: string[]
  wordCount?: number
  readingTime?: number
  image?: string
  video?: {
    url: string
    thumbnail: string
    duration: string
    uploadDate: string
  }
}

export default function EnhancedArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author = 'Anyro',
  category = 'AI Automation',
  tags = [],
  wordCount,
  readingTime,
  image,
  video
}: EnhancedArticleSchemaProps) {

  const baseUrl = 'https://iimagined.ai'
  const fullUrl = url.startsWith('http') ? url : `${baseUrl}${url}`
  const imageUrl = image || `${baseUrl}/og-image.png`

  // Comprehensive Article Schema with ALL possible properties
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': fullUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': fullUrl
    },
    headline: title,
    description: description,
    image: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: 1200,
      height: 630
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      '@id': `${baseUrl}/about#person`,
      name: author,
      url: `${baseUrl}/about`,
      image: `${baseUrl}/anyro.png`,
      jobTitle: 'AI Automation Expert & Instagram Growth Strategist',
      description: 'AI automation expert with 127K+ students. Specializes in Instagram growth, digital products, and N8N workflows.',
      knowsAbout: [
        'AI Automation',
        'Instagram Marketing',
        'Social Media Growth',
        'Digital Products',
        'N8N Workflows',
        'Content Creation',
        'Claude AI',
        'ChatGPT',
        'Marketing Automation',
        'Business Automation'
      ],
      sameAs: [
        'https://twitter.com/anyro',
        'https://instagram.com/anyro',
        'https://youtube.com/@anyro',
        'https://linkedin.com/in/anyro',
        'https://tiktok.com/@anyro'
      ],
      hasCredential: [
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Expert',
          name: 'AI Automation Specialist'
        },
        {
          '@type': 'EducationalOccupationalCredential',
          credentialCategory: 'Expert',
          name: 'Instagram Growth Expert'
        }
      ]
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${baseUrl}/#organization`,
      name: 'IImagined.ai',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
        width: 512,
        height: 512
      },
      sameAs: [
        'https://twitter.com/anyro',
        'https://instagram.com/anyro',
        'https://youtube.com/@anyro'
      ]
    },
    articleSection: category,
    keywords: tags.join(', '),
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    isFamilyFriendly: true,

    // Content metrics
    ...(wordCount && { wordCount: wordCount }),
    ...(readingTime && { timeRequired: `PT${readingTime}M` }),

    // Accessibility
    accessMode: ['textual', 'visual'],
    accessModeSufficient: ['textual', 'visual'],
    accessibilityFeature: [
      'alternativeText',
      'structuralNavigation',
      'readingOrder',
      'tableOfContents'
    ],
    accessibilityHazard: 'none',
    accessibilityAPI: 'ARIA',
    accessibilitySummary: 'This article includes proper semantic HTML, ARIA labels, and alternative text for all images.',

    // Educational properties
    educationalLevel: 'intermediate',
    audience: {
      '@type': 'Audience',
      audienceType: 'Entrepreneurs, Content Creators, Digital Marketers, Business Owners',
      geographicArea: {
        '@type': 'Place',
        name: 'Worldwide'
      }
    },

    // Citation properties for AI
    citation: {
      '@type': 'CreativeWork',
      author: {
        '@type': 'Person',
        name: author
      },
      publisher: {
        '@type': 'Organization',
        name: 'IImagined.ai'
      },
      datePublished: datePublished,
      url: fullUrl
    },

    // Copyright
    copyrightHolder: {
      '@type': 'Organization',
      name: 'IImagined.ai',
      url: baseUrl
    },
    copyrightYear: new Date(datePublished).getFullYear(),
    license: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',

    // Additional metadata
    about: {
      '@type': 'Thing',
      name: category,
      description: description
    },

    // Video if provided
    ...(video && {
      video: {
        '@type': 'VideoObject',
        name: title,
        description: description,
        thumbnailUrl: video.thumbnail,
        uploadDate: video.uploadDate,
        duration: video.duration,
        contentUrl: video.url,
        embedUrl: video.url
      }
    })
  }

  // Separate Speakable Schema for voice search
  const speakableSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': fullUrl,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['.speakable-content', 'h1', 'h2', '.quick-answer', '.key-takeaways']
    }
  }

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${baseUrl}/blog`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: fullUrl
      }
    ]
  }

  return (
    <>
      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Speakable Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
