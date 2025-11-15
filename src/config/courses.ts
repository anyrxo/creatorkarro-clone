/**
 * Course Configuration
 * Central source of truth for all course information, pricing, and URLs
 */

export interface Course {
  id: string
  name: string
  slug: string
  price: number
  whopUrl: string
  description: string
  shortDescription: string
  keywords: string[]
  ctaText: string
  features: string[]
}

export const courses: Record<string, Course> = {
  'instagram-ignited': {
    id: 'instagram-ignited',
    name: 'Instagram Ignited: 0 to 500K Followers',
    slug: 'instagram-ignited',
    price: 399,
    whopUrl: 'https://whop.com/iimagined/instagram-reimagined/',
    description: 'Complete Instagram growth system with proven strategies to grow from 0 to 500K followers. Master viral Reels, algorithm secrets, and monetization tactics.',
    shortDescription: 'Grow to 500K Instagram followers with proven viral strategies',
    keywords: [
      'instagram',
      'instagram growth',
      'instagram followers',
      'instagram reels',
      'instagram algorithm',
      'instagram monetization',
      'viral content',
      'social media growth',
      'influencer marketing',
      '500k followers'
    ],
    ctaText: 'Start Growing Your Instagram',
    features: [
      '10+ comprehensive modules on Instagram growth',
      'Viral Reels formula and hooks library',
      'Algorithm domination tactics',
      'Monetization strategies for every follower milestone',
      'Story engagement frameworks',
      'Collaboration and networking playbooks'
    ]
  },

  'ai-influencers': {
    id: 'ai-influencers',
    name: 'AI Influencers Academy: Create Virtual Influencers',
    slug: 'ai-influencers',
    price: 399,
    whopUrl: 'https://whop.com/iimagined/ai-influencers-reimagined/',
    description: 'Build and monetize AI influencers using ComfyUI, Midjourney, and cutting-edge AI tools. Create consistent AI personas and scale to multiple revenue streams.',
    shortDescription: 'Build profitable AI influencers with ComfyUI and AI tools',
    keywords: [
      'ai influencer',
      'virtual influencer',
      'comfyui',
      'midjourney',
      'ai content creation',
      'lora training',
      'stable diffusion',
      'ai monetization',
      'virtual persona',
      'ai influencer creation'
    ],
    ctaText: 'Launch Your AI Influencer',
    features: [
      'ComfyUI mastery and custom workflows',
      'LoRA training for consistent AI faces',
      'AI influencer monetization strategies',
      'Brand deal negotiation for virtual influencers',
      'Multi-platform AI content strategies',
      'Legal and ethical frameworks'
    ]
  },

  'digital-products': {
    id: 'digital-products',
    name: 'Digital Products Empire: Build & Sell Online Products',
    slug: 'digital-products',
    price: 399,
    whopUrl: 'https://whop.com/iimagined/digital-products-reimagined/',
    description: 'Master creating and selling digital products that generate passive income. Learn product validation, pricing psychology, marketing automation, and sales funnel optimization.',
    shortDescription: 'Create profitable digital products and passive income streams',
    keywords: [
      'digital products',
      'passive income',
      'online course',
      'ebook',
      'templates',
      'online business',
      'product validation',
      'sales funnel',
      'marketing automation',
      'digital entrepreneurship'
    ],
    ctaText: 'Start Your Digital Products Business',
    features: [
      'Product idea validation frameworks',
      'Pricing strategy and psychology',
      'Sales page copywriting templates',
      'Email marketing automation sequences',
      'Launch strategy playbooks',
      'Passive income systems'
    ]
  },

  'ai-automations': {
    id: 'ai-automations',
    name: 'AI Automations Reimagined: n8n & AI Workflow Mastery',
    slug: 'ai-automations',
    price: 399,
    whopUrl: 'https://whop.com/iimagined/ai-automations-reimagined/',
    description: 'Build powerful AI automation workflows with n8n, ChatGPT, and Claude. Save 20+ hours per week with intelligent automation systems for business and content creation.',
    shortDescription: 'Master n8n and AI automation to save 20+ hours weekly',
    keywords: [
      'n8n',
      'ai automation',
      'workflow automation',
      'chatgpt automation',
      'claude api',
      'business automation',
      'zapier alternative',
      'automation tools',
      'ai workflows',
      'productivity automation'
    ],
    ctaText: 'Master AI Automation',
    features: [
      'n8n setup and advanced workflows',
      'ChatGPT & Claude API integration',
      'Business process automation templates',
      'Instagram & social media automation',
      'CRM and email automation sequences',
      'Cost-saving automation strategies'
    ]
  },

  'all-access': {
    id: 'all-access',
    name: 'All Access Pass: Complete Creator Academy',
    slug: 'all-access',
    price: 99, // Monthly subscription
    whopUrl: 'https://whop.com/iimagined/all-access-reimagined/',
    description: 'Get instant access to ALL courses, templates, and automation systems for just $99/month. Master Instagram growth, AI influencers, n8n automation, and digital products. Cancel anytime.',
    shortDescription: 'All courses + templates + automation for $99/month',
    keywords: [
      'all access',
      'subscription',
      'creator academy',
      'monthly access',
      'instagram course',
      'ai automation course',
      'digital products course',
      'ai influencer course',
      'unlimited training'
    ],
    ctaText: 'Get All Access for $99/month',
    features: [
      'All 4 premium courses (Instagram, AI Influencers, Automation, Digital Products)',
      '100+ hours of training content',
      'Exclusive templates and workflows',
      'Weekly live Q&A sessions',
      'Private community access',
      'New courses and updates included',
      'Cancel anytime - no long-term commitment'
    ]
  }
}

/**
 * Get recommended course based on blog post topic
 * Returns all-access subscription with relevant highlighted content
 */
export function getRecommendedCourse(blogSlug: string): Course & { highlightedCourse?: string } {
  const allAccess = courses['all-access']

  // Instagram-related content - highlight Instagram course within all-access
  if (blogSlug.includes('instagram') ||
      blogSlug.includes('500k-followers') ||
      blogSlug.includes('viral-carousel') ||
      blogSlug.includes('reels') ||
      blogSlug.includes('influencer-marketing') ||
      blogSlug.includes('social-media-calendar') ||
      blogSlug.includes('content-pillars') ||
      blogSlug.includes('hashtag-strategy') ||
      blogSlug.includes('story-marketing')) {
    return { ...allAccess, highlightedCourse: 'Instagram Ignited' }
  }

  // AI Influencer content - highlight AI Influencers course
  if (blogSlug.includes('ai-influencer') ||
      blogSlug.includes('comfyui') ||
      blogSlug.includes('lora-training') ||
      blogSlug.includes('stable-diffusion') ||
      blogSlug.includes('midjourney') ||
      blogSlug.includes('virtual-influencer') ||
      blogSlug.includes('ai-content-creation-tools')) {
    return { ...allAccess, highlightedCourse: 'AI Influencers Academy' }
  }

  // Digital Products content - highlight Digital Products course
  if (blogSlug.includes('digital-product') ||
      blogSlug.includes('online-course') ||
      blogSlug.includes('passive-income') ||
      blogSlug.includes('sales-page') ||
      blogSlug.includes('email-marketing') ||
      blogSlug.includes('product-launch') ||
      blogSlug.includes('pricing-strategy') ||
      blogSlug.includes('validation') ||
      blogSlug.includes('templates-sell')) {
    return { ...allAccess, highlightedCourse: 'Digital Products Empire' }
  }

  // AI Automation / n8n content - highlight AI Automations course
  if (blogSlug.includes('n8n') ||
      blogSlug.includes('automation') ||
      blogSlug.includes('chatgpt-automation') ||
      blogSlug.includes('workflow') ||
      blogSlug.includes('ai-automation') ||
      blogSlug.includes('zapier') ||
      blogSlug.includes('make-app')) {
    return { ...allAccess, highlightedCourse: 'AI Automations Reimagined' }
  }

  // Personal brand, monetization, scaling content
  if (blogSlug.includes('personal-brand') ||
      blogSlug.includes('monetize') ||
      blogSlug.includes('scale-content') ||
      blogSlug.includes('content-scaling') ||
      blogSlug.includes('faceless-content') ||
      blogSlug.includes('youtube-shorts') ||
      blogSlug.includes('tiktok-growth')) {
    return { ...allAccess, highlightedCourse: 'All Courses' }
  }

  // Default: All Access with all courses highlighted
  return { ...allAccess, highlightedCourse: 'All Courses' }
}

/**
 * Get related courses (for cross-selling)
 */
export function getRelatedCourses(currentCourseId: string): Course[] {
  const allCourses = Object.values(courses).filter(c => c.id !== currentCourseId && c.id !== 'all-access')
  return allCourses.slice(0, 2) // Return 2 related courses
}
