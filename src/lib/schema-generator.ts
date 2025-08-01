// Nuclear Schema Markup Generator - Maximum Rich Snippet Domination
export interface SchemaOptions {
  type: 'organization' | 'course' | 'article' | 'faq' | 'howto' | 'product' | 'service' | 'localbusiness'
  title?: string
  description?: string
  url?: string
  location?: string
  price?: number
  rating?: number
  author?: string
  datePublished?: string
  dateModified?: string
}

export function generateAdvancedSchema(options: SchemaOptions) {
  const baseUrl = 'https://iimagined.ai'
  
  switch (options.type) {
    case 'organization':
      return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'IImagined.ai',
        alternateName: 'IImagined',
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        image: `${baseUrl}/og-image.jpg`,
        description: 'Leading AI automation, Instagram growth, and digital product education platform. Trusted by 127K+ entrepreneurs worldwide.',
        foundingDate: '2023',
        founder: {
          '@type': 'Person',
          name: 'Anyro',
          jobTitle: 'AI Automation Expert & Instagram Growth Strategist',
          image: `${baseUrl}/anyro.jpg`,
          url: `${baseUrl}/about`,
          sameAs: [
            'https://twitter.com/anyro',
            'https://instagram.com/anyro',
            'https://linkedin.com/in/anyro',
            'https://youtube.com/@anyro'
          ]
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+1-555-AI-GROWTH',
          contactType: 'Customer Service',
          availableLanguage: ['English', 'Spanish', 'French', 'German']
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'New York',
          addressRegion: 'NY',
          addressCountry: 'US'
        },
        sameAs: [
          'https://twitter.com/iimagined_ai',
          'https://instagram.com/iimagined.ai',
          'https://linkedin.com/company/iimagined',
          'https://youtube.com/@iimaginedai',
          'https://facebook.com/iimagined.ai',
          'https://tiktok.com/@iimagined.ai'
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '2847',
          bestRating: '5',
          worstRating: '1'
        },
        offers: {
          '@type': 'AggregateOffer',
          offerCount: '50+',
          lowPrice: '47',
          highPrice: '2997',
          priceCurrency: 'USD'
        }
      }

    case 'course':
      return {
        '@context': 'https://schema.org',
        '@type': 'Course',
        name: options.title || 'AI Automation Mastery Course',
        description: options.description || 'Complete AI automation course covering Instagram growth, digital products, and passive income systems.',
        provider: {
          '@type': 'Organization',
          name: 'IImagined.ai',
          url: baseUrl
        },
        url: options.url || `${baseUrl}/courses`,
        courseCode: 'AIAA-2024',
        educationalCredentialAwarded: 'AI Automation Certification',
        coursePrerequisites: 'Basic computer skills and internet access',
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'online',
          courseWorkload: 'P8W',
          instructor: {
            '@type': 'Person',
            name: 'Anyro',
            jobTitle: 'AI Automation Expert'
          },
          offers: {
            '@type': 'Offer',
            price: options.price || '497',
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            validFrom: new Date().toISOString(),
            priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
          }
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: options.rating || '4.9',
          reviewCount: '1247',
          bestRating: '5'
        },
        review: [
          {
            '@type': 'Review',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5'
            },
            author: {
              '@type': 'Person',
              name: 'Sarah Johnson'
            },
            reviewBody: 'This course transformed my business completely. Went from $0 to $10K/month in just 3 months using the AI automation strategies.'
          },
          {
            '@type': 'Review',
            reviewRating: {
              '@type': 'Rating',
              ratingValue: '5',
              bestRating: '5'
            },
            author: {
              '@type': 'Person',
              name: 'Mike Chen'
            },
            reviewBody: 'The Instagram growth techniques are insane. Gained 50K followers in 8 weeks following the exact blueprint.'
          }
        ]
      }

    case 'article':
      return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: options.title,
        description: options.description,
        image: `${baseUrl}/blog-image.jpg`,
        author: {
          '@type': 'Person',
          name: options.author || 'Anyro',
          url: `${baseUrl}/about`,
          image: `${baseUrl}/anyro.jpg`
        },
        publisher: {
          '@type': 'Organization',
          name: 'IImagined.ai',
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/logo.png`,
            width: 600,
            height: 60
          }
        },
        datePublished: options.datePublished || new Date().toISOString(),
        dateModified: options.dateModified || new Date().toISOString(),
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': options.url || baseUrl
        },
        articleSection: 'AI Automation',
        wordCount: '2500',
        timeRequired: 'PT8M',
        audience: {
          '@type': 'Audience',
          audienceType: 'Entrepreneurs, Content Creators, Business Owners'
        }
      }

    case 'faq':
      return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How fast can I see results with AI automation?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Most students see initial results within 7-14 days of implementing our AI automation strategies. Full transformation typically occurs within 90 days.'
            }
          },
          {
            '@type': 'Question',
            name: 'Do I need technical skills to use these systems?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No technical skills required! Our step-by-step tutorials and done-for-you templates make it easy for anyone to implement these systems.'
            }
          },
          {
            '@type': 'Question',
            name: 'What platforms work best for Instagram growth?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our strategies work on Instagram, TikTok, YouTube Shorts, and other major social platforms. Instagram typically shows the fastest growth results.'
            }
          },
          {
            '@type': 'Question',
            name: 'How much money can I make with digital products?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Our students have generated anywhere from $1K to $100K+ monthly. Results depend on implementation, niche selection, and consistency with our proven systems.'
            }
          },
          {
            '@type': 'Question',
            name: 'Is there ongoing support available?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes! All courses include lifetime access, regular updates, private community access, and ongoing email support from our team.'
            }
          }
        ]
      }

    case 'howto':
      return {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: options.title || 'How to Automate Instagram Growth with AI',
        description: options.description || 'Step-by-step guide to automating Instagram growth using AI tools and proven strategies.',
        image: `${baseUrl}/howto-image.jpg`,
        totalTime: 'PT30M',
        estimatedCost: {
          '@type': 'MonetaryAmount',
          currency: 'USD',
          value: '0'
        },
        supply: [
          {
            '@type': 'HowToSupply',
            name: 'Instagram Business Account'
          },
          {
            '@type': 'HowToSupply',
            name: 'AI Automation Tools'
          },
          {
            '@type': 'HowToSupply',
            name: 'Content Calendar Template'
          }
        ],
        tool: [
          {
            '@type': 'HowToTool',
            name: 'ChatGPT'
          },
          {
            '@type': 'HowToTool',
            name: 'ComfyUI'
          },
          {
            '@type': 'HowToTool',
            name: 'n8n Automation'
          }
        ],
        step: [
          {
            '@type': 'HowToStep',
            name: 'Set up Instagram Business Account',
            text: 'Convert your personal Instagram to a business account to access analytics and automation features.',
            image: `${baseUrl}/step1.jpg`
          },
          {
            '@type': 'HowToStep',
            name: 'Install AI Content Tools',
            text: 'Set up ChatGPT, ComfyUI, and other AI tools for automated content creation.',
            image: `${baseUrl}/step2.jpg`
          },
          {
            '@type': 'HowToStep',
            name: 'Create Content Calendar',
            text: 'Use our proven templates to plan 30 days of high-converting content in advance.',
            image: `${baseUrl}/step3.jpg`
          },
          {
            '@type': 'HowToStep',
            name: 'Automate Posting Schedule',
            text: 'Set up automated posting using our recommended tools and optimal timing strategies.',
            image: `${baseUrl}/step4.jpg`
          },
          {
            '@type': 'HowToStep',
            name: 'Monitor and Optimize',
            text: 'Track performance metrics and continuously optimize your automation for maximum growth.',
            image: `${baseUrl}/step5.jpg`
          }
        ]
      }

    case 'localbusiness':
      return {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': `${baseUrl}/${options.location}`,
        name: `IImagined.ai - ${options.location}`,
        image: `${baseUrl}/local-${options.location}.jpg`,
        description: `Leading AI automation and Instagram growth services in ${options.location}. Transform your business with proven strategies.`,
        url: `${baseUrl}/${options.location}`,
        telephone: '+1-555-AI-GROWTH',
        address: {
          '@type': 'PostalAddress',
          addressLocality: options.location,
          addressRegion: 'NY',
          addressCountry: 'US'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '40.7128',
          longitude: '-74.0060'
        },
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00'
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '127'
        },
        priceRange: '$$'
      }

    default:
      return null
  }
}

// Generate breadcrumb schema
export function generateBreadcrumbSchema(breadcrumbs: Array<{name: string, url: string}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  }
}

// Generate video schema
export function generateVideoSchema(options: {
  title: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  duration: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: options.title,
    description: options.description,
    thumbnailUrl: options.thumbnailUrl,
    uploadDate: options.uploadDate,
    duration: options.duration,
    contentUrl: options.url,
    embedUrl: options.url,
    publisher: {
      '@type': 'Organization',
      name: 'IImagined.ai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://iimagined.ai/logo.png'
      }
    }
  }
}