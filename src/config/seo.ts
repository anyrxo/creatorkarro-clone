export const siteConfig = {
  name: 'IImagined.ai',
  url: 'https://iimagined.ai',
  ogImage: 'https://iimagined.ai/og-image.png',
  description: 'Stop buying fragments. Build an Ecosystem. The only platform that gives you the full blueprint to build, grow, and monetize your digital empire with AI, Instagram, and Automation.',
  keywords: [
    // Empire & Systems (God Mode)
    'digital empire',
    'creator ecosystem',
    'business automation system',
    'online business blueprint',
    'digital sovereignty',
    'creator economy mastery',
    'automated income systems',
    'wealth creation systems',

    // AI & Automation (High Priority)
    'claude 4 automation',
    'gemini 2 pro workflows',
    'gpt-4o strategies',
    'deepseek r1 guide',
    'llama 4 training',
    'ai automation agency',
    'ai agents development',
    'autonomous business',
    'multimodal ai systems',
    'n8n masterclass',
    'ai influencers guide',
    'faceless ai channels',
    
    // Social Media Growth
    'instagram growth system',
    'instagram algorithm secrets',
    'viral content engineering',
    'tiktok monetization',
    'youtube automation',
    'personal branding mastery',
    'audience acquisition',
    
    // Digital Business
    'digital product empire',
    'high ticket sales',
    'passive income infrastructure',
    'monetization strategies',
    'email marketing systems',
    'comfyui workflows',
    'stable diffusion mastery'
  ],
  links: {
    twitter: 'https://twitter.com/anyrxo',
    instagram: 'https://instagram.com/anyrxo',
    youtube: 'https://youtube.com/@anyrxo',
    tiktok: 'https://tiktok.com/@anyro',
    newsletter: 'https://anyro.beehiiv.com/subscribe',
    gumroad: 'https://anyrxo.gumroad.com',
    telegram: 'https://t.me/IImagined',
    whop: 'https://whop.com/iimagined/all-access-reimagined/'
  },
  creator: '@anyro'
}

export const defaultSEO = {
  title: 'IImagined.ai | Build Your Digital Empire with AI & Automation',
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
        alt: 'IImagined.ai - Build Your Digital Empire'
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
    title: 'IImagined.ai | The Blueprint for Your Digital Empire',
    description: 'Don\'t just learn. Build. The complete ecosystem for AI Automation, Instagram Growth, and Digital Product creation. Join 4,000+ students building their freedom.',
    keywords: [
      'digital empire builder',
      'full stack creator',
      'business ecosystem',
      'online business architect',
      'ai automation agency',
      'instagram growth masterclass',
      'digital product university',
      'anyro course'
    ]
  },
  courses: {
    title: 'Premium Academy | Master The 4 Pillars of Digital Wealth',
    description: 'Instagram Ignited. AI Influencers. Digital Products. AI Automations. The only four systems you need to build a 7-figure online business. Lifetime access.',
    keywords: [
      'best ai course',
      'instagram growth course',
      'digital product course',
      'automation agency course',
      'online business academy',
      'creator university'
    ]
  },
  blog: {
    title: 'The Creator\'s Intelligence | AI, Growth & Systems',
    description: 'No fluff. Just actionable intelligence on AI models (Claude, Gemini, DeepSeek), viral growth algorithms, and automation workflows. Read the blueprint.',
    keywords: [
      'ai automation blog',
      'creator economy insights',
      'instagram algorithm updates',
      'n8n tutorials',
      'comfyui guides',
      'business scaling strategies'
    ]
  },
  resources: {
    title: 'My Arsenal | The Tools That Run My Empire',
    description: 'Steal my tech stack. The exact AI tools, software, and templates I use to run a multi-7-figure operation with minimal staff. Free access.',
    keywords: [
      'creator tech stack',
      'best ai tools',
      'business automation software',
      'free creator templates',
      'productivity tools for entrepreneurs'
    ]
  },
  about: {
    title: 'My Story | From Pharmacy to Digital Sovereignty',
    description: 'I was training for a life I didn\'t want. Now I run an empire. Here is the unfiltered story of how I pivoted from healthcare to high-leverage entrepreneurship.',
    keywords: [
      'anyro story',
      'entrepreneur journey',
      'quitting 9-5',
      'digital nomad story',
      'building an empire'
    ]
  },
  testimonials: {
    title: 'Wall of Fame | Real Results from Real Builders',
    description: 'Skeptical? Good. Here is the undeniable proof. $10k months, viral accounts, and automated businesses built by students just like you.',
    keywords: [
      'iimagined reviews',
      'anyro course results',
      'student case studies',
      'online course testimonials',
      'legit money making courses'
    ]
  },
  contact: {
    title: 'Direct Line | Contact Support & Inquiries',
    description: 'Have a question? Need support? Reach out to my team. We are here to help you build your empire.',
    keywords: [
      'contact iimagined',
      'customer support',
      'partnership inquiries'
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
    title: `${post.title} | IImagined.ai`,
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
    title: `${course.title} | IImagined.ai`,
    description: course.description,
    openGraph: {
      title: `${course.title} - Build Your Empire`,
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
    '@type': ['Organization', 'EducationalOrganization', 'OnlineBusiness'],
    name: 'IImagined.ai',
    alternateName: ['IImagined', 'The Digital Empire Academy', 'Anyro\'s Mastermind'],
    url: siteConfig.url,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/logo.png`,
      width: 512,
      height: 512
    },
    image: `${siteConfig.url}/og-image.jpg`,
    description: 'The premier education platform for building digital empires. Specializing in AI Automation, Instagram Growth, and Digital Product ecosystems.',
    foundingDate: '2023-01-01',
    founder: {
      '@type': 'Person',
      name: 'Anyro',
      givenName: 'Anyro',
      jobTitle: ['Founder', 'Digital Architect', 'Lead Instructor'],
      image: `${siteConfig.url}/anyro.jpg`,
      url: `${siteConfig.url}/story`,
      sameAs: Object.values(siteConfig.links).filter(link => link.includes('http')),
      knowsAbout: [
        'Business Automation', 'Viral Marketing', 'System Architecture', 
        'Digital Economics', 'Artificial Intelligence', 'Community Building'
      ]
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Customer Support',
        availableLanguage: ['English'],
        email: 'support@iimagined.ai'
      },
      {
        '@type': 'ContactPoint',
        contactType: 'Sales',
        availableLanguage: ['English'],
        email: 'anyro@iimagined.ai'
      }
    ],
    sameAs: Object.values(siteConfig.links).filter(link => link.includes('http')),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '4128',
      bestRating: '5',
      worstRating: '1'
    },
    offers: {
      '@type': 'Offer',
      name: 'All Access Empire Pass',
      price: '99.00',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: 'https://whop.com/iimagined/all-access-reimagined/'
    }
  },
  website: {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'IImagined.ai',
    url: siteConfig.url,
    description: 'The blueprint for digital sovereignty. Master the 4 pillars of the creator economy: Traffic, Influence, Product, and Automation.',
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
    }
  }
}
