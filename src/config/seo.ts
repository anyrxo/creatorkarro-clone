export const siteConfig = {
  name: 'IImagined.ai',
  url: 'https://iimagined.ai',
  ogImage: 'https://iimagined.ai/og-image.png',
  description: 'Master Instagram growth, AI automation, and digital product creation with IImagined.ai. Join 127K+ creators learning battle-tested strategies that generate real results.',
  keywords: [
    // AI & Automation (High Priority)
    'claude 4 ai',
    'gemini 2 pro',
    'gpt-4.1',
    'deepseek r1',
    'llama 4',
    'ai automation',
    'ai agents',
    'ai development',
    'multimodal ai',
    'ai models comparison',
    'n8n automation',
    'ai influencers',
    'ai content creation',
    'chatgpt automation',
    'ai workflow automation',
    
    // Social Media Growth
    'instagram growth',
    'instagram reels',
    'tiktok growth',
    'youtube automation',
    'social media marketing',
    'content creation',
    'viral content strategy',
    'faceless youtube',
    
    // Digital Business
    'digital products',
    'passive income',
    'online business',
    'make money online',
    'digital marketing',
    'content strategy',
    'email marketing',
    'comfyui workflows',
    'ai image generation',
    'automation tools'
  ],
  links: {
    twitter: 'https://twitter.com/anyro',
    instagram: 'https://instagram.com/anyro',
    youtube: 'https://youtube.com/@anyro',
    tiktok: 'https://tiktok.com/@anyro',
    newsletter: 'https://anyro.beehiiv.com/subscribe',
    gumroad: 'https://anyrxo.gumroad.com'
  },
  creator: '@anyro'
}

export const defaultSEO = {
  title: 'IImagined.ai - AI Automation & Instagram Growth Strategies',
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'IImagined.ai - Master AI & Social Media Growth'
      }
    ]
  },
  twitter: {
    handle: siteConfig.creator,
    site: siteConfig.creator,
    cardType: 'summary_large_image'
  }
}

// Page-specific SEO configurations
export const pageSEO = {
  home: {
    title: 'IImagined.ai - Master AI Automation, Claude 4 & Instagram Growth | 127K+ Students',
    description: 'Learn Claude 4 AI automation, Gemini 2 Pro development, Instagram growth strategies, and digital product creation. Join 127K+ creators building $10K+/month businesses with cutting-edge AI tools.',
    keywords: [
      'iimagined',
      'anyro',
      'claude 4 automation',
      'gemini 2 pro course',
      'gpt-4.1 training',
      'ai automation course',
      'instagram growth course',
      'ai influencers course',
      'deepseek r1 guide',
      'llama 4 training',
      'ai agents development',
      'digital products course',
      'n8n automation',
      'comfyui workflows',
      'ai content creation',
      'multimodal ai training'
    ]
  },
  courses: {
    title: 'Premium Courses - Instagram Growth, AI Automation & Digital Products | IImagined.ai',
    description: 'Transform your passion into profit with premium courses on Instagram growth, AI automation, and digital product creation. Lifetime access, proven strategies, real results.',
    keywords: [
      'online courses',
      'instagram course',
      'ai course',
      'digital marketing course',
      'social media course',
      'automation course',
      'make money online course',
      'passive income course'
    ]
  },
  blog: {
    title: 'AI Blog - Claude 4, Gemini 2 Pro, Growth Hacks & Success Stories | IImagined.ai',
    description: 'Latest guides on Claude 4 AI, Gemini 2 Pro, DeepSeek R1, Instagram growth, AI automation, and digital products. 64 articles covering cutting-edge AI models and proven business strategies.',
    keywords: [
      'claude 4 blog',
      'gemini 2 pro blog',
      'gpt-4.1 blog',
      'deepseek r1 blog',
      'llama 4 blog',
      'ai automation blog',
      'ai models comparison',
      'instagram growth blog',
      'ai development blog',
      'multimodal ai blog',
      'ai agents blog',
      'digital marketing blog',
      'ai tools blog'
    ]
  },
  resources: {
    title: 'Free Resources - Templates, Tools & AI Prompts | IImagined.ai',
    description: 'Access free templates, AI prompts, automation workflows, and tools to accelerate your growth. Curated resources used by 127K+ successful creators.',
    keywords: [
      'free templates',
      'ai prompts',
      'social media templates',
      'content templates',
      'automation tools',
      'free resources',
      'digital tools'
    ]
  },
  about: {
    title: 'About Anyro - From 0 to 500K Followers | IImagined.ai',
    description: 'Learn how Anyro went from broke college student to 500K+ followers and $2M+ in revenue. Discover the journey behind IImagined.ai and the mission to help creators succeed.',
    keywords: [
      'anyro',
      'about anyro',
      'iimagined founder',
      'instagram success story',
      'digital entrepreneur',
      'content creator story'
    ]
  }
}

// Blog post SEO helper
export function getBlogPostSEO(post: {
  title: string
  description: string
  excerpt: string
  keywords: string[]
  slug: string
  date: string
}) {
  return {
    title: `${post.title} | IImagined.ai Blog`,
    description: post.description || post.excerpt,
    keywords: [...post.keywords, ...siteConfig.keywords.slice(0, 5)],
    openGraph: {
      title: post.title,
      description: post.description || post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: ['Anyro'],
      images: [
        {
          url: `${siteConfig.url}/blog/${post.slug}/og-image.png`,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description || post.excerpt,
      creator: siteConfig.creator
    }
  }
}

// Course SEO helper
export function getCourseSEO(course: {
  title: string
  description: string
  price: string
  slug: string
}) {
  return {
    title: `${course.title} - Premium Course | IImagined.ai`,
    description: course.description,
    openGraph: {
      title: `${course.title} - ${course.price}`,
      description: course.description,
      type: 'product',
      images: [
        {
          url: `${siteConfig.url}/courses/${course.slug}/og-image.png`,
          width: 1200,
          height: 630,
          alt: course.title
        }
      ]
    }
  }
}

// Nuclear Schema Markup - Maximum Rich Snippet Domination
export const schemas = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'IImagined.ai',
    alternateName: 'IImagined',
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: `${siteConfig.url}/og-image.jpg`,
    description: 'Leading AI automation, Instagram growth, and digital product education platform. Trusted by 127K+ entrepreneurs worldwide with $2.3M+ in student revenue generated.',
    foundingDate: '2023',
    founder: {
      '@type': 'Person',
      name: 'Anyro',
      jobTitle: 'AI Automation Expert & Instagram Growth Strategist',
      image: `${siteConfig.url}/anyro.jpg`,
      url: `${siteConfig.url}/about`,
      sameAs: Object.values(siteConfig.links).filter(link => link.includes('http'))
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
    sameAs: Object.values(siteConfig.links).filter(link => link.includes('http')),
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
  },
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'IImagined.ai',
    url: siteConfig.url,
    description: 'Master Instagram growth, AI automation, and digital product creation with battle-tested strategies that generate real results. Join 127K+ successful entrepreneurs.',
    publisher: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}/#organization`
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: '3',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'AI Automation Courses',
          url: `${siteConfig.url}/courses`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Instagram Growth Blog',
          url: `${siteConfig.url}/blog`
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Digital Product Resources',
          url: `${siteConfig.url}/resources`
        }
      ]
    }
  },
  faqPage: {
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
      }
    ]
  },
  course: (course: { title: string; description: string; price: string; slug: string }) => ({
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.title,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: 'IImagined.ai',
      sameAs: siteConfig.url
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      courseWorkload: 'PT10H'
    },
    offers: {
      '@type': 'Offer',
      price: course.price.replace('$', ''),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: `${siteConfig.url}/${course.slug}`
    }
  }),
  blogPost: (post: { title: string; description: string; date: string; slug: string }) => ({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    author: {
      '@type': 'Person',
      name: 'Anyro',
      url: `${siteConfig.url}/about`
    },
    datePublished: post.date,
    dateModified: post.date,
    publisher: {
      '@type': 'Organization',
      name: 'IImagined.ai',
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/${post.slug}`
    }
  })
}