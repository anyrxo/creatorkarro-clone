// OpenGraph & Twitter Card Enhancement Utility
// Maximizes social media preview optimization

export interface EnhancedOpenGraphOptions {
  title: string
  description: string
  url: string
  siteName?: string
  type?: 'website' | 'article' | 'product' | 'video.other' | 'profile'
  images?: Array<{
    url: string
    width?: number
    height?: number
    alt?: string
    type?: string
  }>
  locale?: string
  alternateLocales?: string[]

  // Article-specific
  article?: {
    publishedTime?: string
    modifiedTime?: string
    expirationTime?: string
    author?: string | string[]
    section?: string
    tags?: string[]
  }

  // Product-specific
  product?: {
    price?: string
    currency?: string
    availability?: 'instock' | 'oos' | 'preorder'
    condition?: 'new' | 'refurbished' | 'used'
    retailer?: string
    brand?: string
  }

  // Profile-specific
  profile?: {
    firstName?: string
    lastName?: string
    username?: string
    gender?: string
  }

  // Video-specific
  video?: {
    url: string
    secureUrl?: string
    type?: string
    width?: number
    height?: number
    duration?: number
  }

  // Twitter Card specific
  twitter?: {
    card?: 'summary' | 'summary_large_image' | 'app' | 'player'
    site?: string
    creator?: string
    title?: string
    description?: string
    image?: string
    imageAlt?: string
    player?: {
      url: string
      width: number
      height: number
    }
  }
}

export function generateEnhancedOpenGraph(options: EnhancedOpenGraphOptions) {
  const {
    title,
    description,
    url,
    siteName = 'IImagined.ai',
    type = 'website',
    images = [],
    locale = 'en_US',
    alternateLocales = [],
    article,
    product,
    profile,
    video,
    twitter = {}
  } = options

  // Base OpenGraph tags
  const ogTags: Record<string, string | string[]> = {
    'og:title': title,
    'og:description': description,
    'og:url': url,
    'og:site_name': siteName,
    'og:type': type,
    'og:locale': locale
  }

  // Add alternate locales
  if (alternateLocales.length > 0) {
    ogTags['og:locale:alternate'] = alternateLocales
  }

  // Add images with full metadata
  if (images.length > 0) {
    images.forEach((img, index) => {
      const prefix = index === 0 ? 'og:image' : `og:image:${index}`
      ogTags[prefix] = img.url
      if (img.width) ogTags[`${prefix}:width`] = img.width.toString()
      if (img.height) ogTags[`${prefix}:height`] = img.height.toString()
      if (img.alt) ogTags[`${prefix}:alt`] = img.alt
      if (img.type) ogTags[`${prefix}:type`] = img.type
    })
  }

  // Article-specific tags
  if (article && type === 'article') {
    if (article.publishedTime) {
      ogTags['article:published_time'] = article.publishedTime
    }
    if (article.modifiedTime) {
      ogTags['article:modified_time'] = article.modifiedTime
    }
    if (article.expirationTime) {
      ogTags['article:expiration_time'] = article.expirationTime
    }
    if (article.author) {
      ogTags['article:author'] = article.author
    }
    if (article.section) {
      ogTags['article:section'] = article.section
    }
    if (article.tags) {
      ogTags['article:tag'] = article.tags
    }
  }

  // Product-specific tags
  if (product && type === 'product') {
    if (product.price) {
      ogTags['product:price:amount'] = product.price
    }
    if (product.currency) {
      ogTags['product:price:currency'] = product.currency
    }
    if (product.availability) {
      ogTags['product:availability'] = product.availability
    }
    if (product.condition) {
      ogTags['product:condition'] = product.condition
    }
    if (product.retailer) {
      ogTags['product:retailer'] = product.retailer
    }
    if (product.brand) {
      ogTags['product:brand'] = product.brand
    }
  }

  // Profile-specific tags
  if (profile && type === 'profile') {
    if (profile.firstName) {
      ogTags['profile:first_name'] = profile.firstName
    }
    if (profile.lastName) {
      ogTags['profile:last_name'] = profile.lastName
    }
    if (profile.username) {
      ogTags['profile:username'] = profile.username
    }
    if (profile.gender) {
      ogTags['profile:gender'] = profile.gender
    }
  }

  // Video-specific tags
  if (video) {
    ogTags['og:video'] = video.url
    if (video.secureUrl) ogTags['og:video:secure_url'] = video.secureUrl
    if (video.type) ogTags['og:video:type'] = video.type
    if (video.width) ogTags['og:video:width'] = video.width.toString()
    if (video.height) ogTags['og:video:height'] = video.height.toString()
    if (video.duration) ogTags['og:video:duration'] = video.duration.toString()
  }

  // Twitter Card tags
  const twitterTags: Record<string, string> = {
    'twitter:card': twitter.card || 'summary_large_image',
    'twitter:title': twitter.title || title,
    'twitter:description': twitter.description || description
  }

  if (twitter.site) {
    twitterTags['twitter:site'] = twitter.site
  }
  if (twitter.creator) {
    twitterTags['twitter:creator'] = twitter.creator
  }
  if (twitter.image || images[0]?.url) {
    twitterTags['twitter:image'] = twitter.image || images[0].url
  }
  if (twitter.imageAlt || images[0]?.alt) {
    twitterTags['twitter:image:alt'] = twitter.imageAlt || images[0]?.alt || title
  }
  if (twitter.player) {
    twitterTags['twitter:player'] = twitter.player.url
    twitterTags['twitter:player:width'] = twitter.player.width.toString()
    twitterTags['twitter:player:height'] = twitter.player.height.toString()
  }

  return {
    openGraph: ogTags,
    twitter: twitterTags,
    meta: generateMetaTags(ogTags, twitterTags)
  }
}

// Generate Next.js metadata format
function generateMetaTags(
  ogTags: Record<string, string | string[]>,
  twitterTags: Record<string, string>
) {
  const metaTags: Array<{ property?: string; name?: string; content: string }> = []

  // OpenGraph meta tags
  Object.entries(ogTags).forEach(([property, content]) => {
    if (Array.isArray(content)) {
      content.forEach(c => {
        metaTags.push({ property, content: c })
      })
    } else {
      metaTags.push({ property, content })
    }
  })

  // Twitter meta tags
  Object.entries(twitterTags).forEach(([name, content]) => {
    metaTags.push({ name, content })
  })

  return metaTags
}

// Pre-configured templates for different page types
export const openGraphTemplates = {
  coursePage: (courseData: {
    title: string
    description: string
    price: string
    originalPrice?: string
    image: string
    url: string
    rating?: number
    students?: number
  }) => ({
    title: `${courseData.title} - Only ${courseData.price}`,
    description: courseData.description,
    url: courseData.url,
    type: 'product' as const,
    images: [{
      url: courseData.image,
      width: 1200,
      height: 630,
      alt: courseData.title,
      type: 'image/jpeg'
    }],
    product: {
      price: courseData.price.replace('$', ''),
      currency: 'USD',
      availability: 'instock' as const,
      condition: 'new' as const,
      retailer: 'IImagined.ai',
      brand: 'IImagined.ai'
    },
    twitter: {
      card: 'summary_large_image' as const,
      site: '@iimagined_ai',
      creator: '@anyro',
      title: `${courseData.title} - ${courseData.price}`,
      description: `${courseData.description}${courseData.students ? ` Join ${courseData.students}+ students!` : ''}`
    }
  }),

  blogPost: (postData: {
    title: string
    description: string
    url: string
    image: string
    publishedTime: string
    modifiedTime: string
    author: string
    tags: string[]
    category: string
  }) => ({
    title: postData.title,
    description: postData.description,
    url: postData.url,
    type: 'article' as const,
    images: [{
      url: postData.image,
      width: 1200,
      height: 630,
      alt: postData.title,
      type: 'image/jpeg'
    }],
    article: {
      publishedTime: postData.publishedTime,
      modifiedTime: postData.modifiedTime,
      author: postData.author,
      section: postData.category,
      tags: postData.tags
    },
    twitter: {
      card: 'summary_large_image' as const,
      site: '@iimagined_ai',
      creator: '@anyro'
    }
  }),

  authorProfile: (authorData: {
    firstName: string
    lastName: string
    username: string
    bio: string
    image: string
    url: string
  }) => ({
    title: `${authorData.firstName} ${authorData.lastName} (@${authorData.username})`,
    description: authorData.bio,
    url: authorData.url,
    type: 'profile' as const,
    images: [{
      url: authorData.image,
      width: 800,
      height: 800,
      alt: `${authorData.firstName} ${authorData.lastName}`,
      type: 'image/jpeg'
    }],
    profile: {
      firstName: authorData.firstName,
      lastName: authorData.lastName,
      username: authorData.username
    },
    twitter: {
      card: 'summary' as const,
      site: '@iimagined_ai',
      creator: `@${authorData.username}`
    }
  })
}

// Image optimization recommendations for social sharing
export const socialImageSizes = {
  facebook: { width: 1200, height: 630, aspectRatio: 1.91 },
  twitter: { width: 1200, height: 675, aspectRatio: 1.78 },
  linkedin: { width: 1200, height: 627, aspectRatio: 1.91 },
  instagram: { width: 1080, height: 1080, aspectRatio: 1 },
  pinterest: { width: 1000, height: 1500, aspectRatio: 0.67 }
}

// Validate OpenGraph image dimensions
export function validateSocialImage(width: number, height: number): {
  isValid: boolean
  warnings: string[]
  recommendations: string[]
} {
  const warnings: string[] = []
  const recommendations: string[] = []
  let isValid = true

  // Minimum size requirements
  if (width < 600 || height < 315) {
    warnings.push('Image is below minimum recommended size (600x315)')
    isValid = false
  }

  // Maximum file size (ideally under 8MB for most platforms)
  // This would need actual file size check in implementation

  // Aspect ratio recommendations
  const aspectRatio = width / height
  if (aspectRatio < 1.5 || aspectRatio > 2.0) {
    recommendations.push('Consider using 1.91:1 aspect ratio (e.g., 1200x630) for best compatibility')
  }

  // Optimal size
  if (width !== 1200 || height !== 630) {
    recommendations.push('1200x630 is the optimal size for most social platforms')
  }

  return { isValid, warnings, recommendations }
}
