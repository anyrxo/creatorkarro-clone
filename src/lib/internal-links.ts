/**
 * Internal Linking Strategy
 * Automatically generates related blog posts and contextual internal links
 */

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string[]
  readTime: string
}

// Blog post categories for smart internal linking
export const blogCategories = {
  instagram: [
    'instagram-growth-2025',
    'instagram-growth-hacks-that-work-2025',
    'instagram-ignited-success-stories',
    'instagram-reels-viral-formula-10m-views-2025',
    'instagram-algorithm-secrets-master-2025',
    'instagram-hashtag-strategy-2025-what-actually-works',
    'instagram-content-pillars-build-engaged-audience',
    'instagram-story-marketing-advanced-engagement-tactics',
    'instagram-monetization-beyond-sponsored-posts-2025',
    'instagram-monetization-guide-15-ways-make-money',
    'instagram-collab-feature-double-reach-overnight',
    '500k-followers',
    'instagram-influencer-marketing-build-personal-brand',
    'how-to-get-10k-instagram-followers-fast',
    'instagram-reels-guide',
    'viral-carousel-guide',
    'instagram-content-strategy-maximum-engagement-2025',
    'n8n-instagram-automation-complete-growth-workflow'
  ],

  aiInfluencer: [
    'ai-influencer-success',
    'creating-ai-influencers',
    'ai-influencers-complete-guide-virtual-influencer-creation-2025',
    'ai-influencer-monetization-complete-guide-2025',
    'ai-influencer-agency-model-scale-to-100k-month',
    'how-to-make-money-with-ai-influencers-15-proven-methods',
    'ai-influencer-brand-deals-how-to-land-sponsorships',
    'ai-influencer-content-calendar-automation-strategy',
    'ai-influencer-legal-ethics-complete-guide',
    'ai-influencer-trends',
    'virtual-influencer-marketing-strategy-dominate-social-media',
    'multi-platform-ai-influencer-strategy-2025',
    'lora-training-guide-consistent-ai-influencer-faces',
    'stable-diffusion-vs-midjourney-ai-influencer-creation',
    'best-ai-content-creation-tools-virtual-influencers-2025'
  ],

  comfyui: [
    'comfyui-tutorial-master-ai-image-generation-2025',
    'comfyui-installation-setup-complete-beginner-guide',
    'comfyui-workflow-library',
    'comfyui-vs-stable-diffusion-complete-tool-comparison',
    'comfyui-advanced-techniques-professional-workflows',
    'comfyui-comparison',
    'comfyui-success-story',
    'how-to-make-money-with-comfyui-ai-art-business-guide',
    'advanced-comfyui-workflows-professional-ai-art'
  ],

  automation: [
    'n8n-tutorial-complete-beginners-guide-automation-2025',
    'n8n-beginners-guide',
    'essential-n8n-workflows',
    'n8n-zapier-alternative-why-n8n-superior-automation',
    'best-automation-tools-2025-n8n-vs-zapier-vs-make',
    'n8n-ai-integration-openai-gpt-chatgpt-complete-workflows',
    'n8n-database-automation-automate-data-workflows',
    'n8n-crm-automation-pipedrive-hubspot-salesforce',
    'n8n-api-integration-connect-any-service-workflows',
    'business-automation-tools',
    'business-process-automation-save-20-hours-per-week',
    'make-app-automation',
    'chatgpt-automation-workflows',
    'chatgpt-automation-tips',
    'ai-automation-workflows-integrate-gpt-with-n8n',
    'ai-automation-beginners-guide',
    'workflow-automation-guide',
    'email-marketing-automation-advanced-n8n-sequences'
  ],

  digitalProducts: [
    'digital-products',
    'how-to-create-digital-products-that-sell-2025',
    'digital-product-validation-test-idea-before-building',
    'digital-product-pricing-strategy-maximize-revenue',
    'digital-product-launch-strategy-idea-to-100k',
    'best-passive-income-ideas-digital-products-2025',
    'sell-digital-products-on-etsy-complete-success-guide',
    'most-profitable-digital-product-niches-2025',
    'how-to-sell-templates',
    'online-course-creation-guide-build-sell-courses',
    'online-course-platform-comparison-teachable-gumroad-thinkific',
    'create-online-courses-that-sell-step-by-step-blueprint',
    'sales-page-psychology',
    'email-marketing-guide'
  ],

  contentCreation: [
    'scale-content-creation',
    'content-scaling-framework',
    'faceless-content-strategy',
    'create-faceless-youtube-channel',
    'youtube-shorts-strategy',
    'tiktok-growth-hacks',
    'content-creation-with-ai',
    'ai-content-income',
    'ai-content-opportunity',
    'ai-image-generation-guide',
    'ai-image-generation-for-influencers-professional-guide'
  ],

  monetization: [
    'monetize-with-ai',
    'passive-income-blueprint',
    'personal-brand-building',
    'alpha-evolve-ai-business-empire'
  ]
}

/**
 * Get related blog posts based on current post
 */
export function getRelatedPosts(currentSlug: string, limit: number = 3): string[] {
  const relatedPosts: string[] = []

  // Find which categories the current post belongs to
  const currentCategories: string[] = []
  for (const [category, posts] of Object.entries(blogCategories)) {
    if (posts.includes(currentSlug)) {
      currentCategories.push(category)
    }
  }

  // If no categories found, return empty
  if (currentCategories.length === 0) {
    return []
  }

  // Collect posts from the same categories (excluding current post)
  const sameCategoryPosts = new Set<string>()
  for (const category of currentCategories) {
    const posts = blogCategories[category as keyof typeof blogCategories]
    posts.forEach(post => {
      if (post !== currentSlug) {
        sameCategoryPosts.add(post)
      }
    })
  }

  // Convert to array and return limited number
  const postsArray = Array.from(sameCategoryPosts)
  return postsArray.slice(0, limit)
}

/**
 * Get contextual internal links to add within blog content
 */
export function getContextualLinks(currentSlug: string): Record<string, string> {
  // Returns keyword -> blog post slug mappings for natural internal linking
  const links: Record<string, string> = {}

  // Instagram-related contextual links
  if (blogCategories.instagram.includes(currentSlug)) {
    links['Instagram growth'] = '/blog/instagram-growth-2025'
    links['viral Reels'] = '/blog/instagram-reels-viral-formula-10m-views-2025'
    links['Instagram algorithm'] = '/blog/instagram-algorithm-secrets-master-2025'
    links['Instagram monetization'] = '/blog/instagram-monetization-guide-15-ways-make-money'
    links['viral carousel'] = '/blog/viral-carousel-guide'
  }

  // AI Influencer contextual links
  if (blogCategories.aiInfluencer.includes(currentSlug)) {
    links['AI influencer'] = '/blog/ai-influencers-complete-guide-virtual-influencer-creation-2025'
    links['LoRA training'] = '/blog/lora-training-guide-consistent-ai-influencer-faces'
    links['AI influencer monetization'] = '/blog/ai-influencer-monetization-complete-guide-2025'
    links['brand deals'] = '/blog/ai-influencer-brand-deals-how-to-land-sponsorships'
  }

  // ComfyUI contextual links
  if (blogCategories.comfyui.includes(currentSlug)) {
    links['ComfyUI tutorial'] = '/blog/comfyui-tutorial-master-ai-image-generation-2025'
    links['ComfyUI installation'] = '/blog/comfyui-installation-setup-complete-beginner-guide'
    links['ComfyUI workflows'] = '/blog/comfyui-workflow-library'
  }

  // Automation contextual links
  if (blogCategories.automation.includes(currentSlug)) {
    links['n8n tutorial'] = '/blog/n8n-tutorial-complete-beginners-guide-automation-2025'
    links['n8n workflows'] = '/blog/essential-n8n-workflows'
    links['ChatGPT automation'] = '/blog/chatgpt-automation-workflows'
    links['business automation'] = '/blog/business-automation-tools'
  }

  // Digital products contextual links
  if (blogCategories.digitalProducts.includes(currentSlug)) {
    links['digital products'] = '/blog/how-to-create-digital-products-that-sell-2025'
    links['product validation'] = '/blog/digital-product-validation-test-idea-before-building'
    links['pricing strategy'] = '/blog/digital-product-pricing-strategy-maximize-revenue'
    links['online course'] = '/blog/online-course-creation-guide-build-sell-courses'
  }

  // Content creation contextual links
  if (blogCategories.contentCreation.includes(currentSlug)) {
    links['content scaling'] = '/blog/scale-content-creation'
    links['faceless content'] = '/blog/faceless-content-strategy'
    links['YouTube Shorts'] = '/blog/youtube-shorts-strategy'
  }

  return links
}

/**
 * Generate breadcrumb trail for blog post
 */
export interface Breadcrumb {
  label: string
  url: string
}

export function getBreadcrumbs(slug: string, title: string): Breadcrumb[] {
  const breadcrumbs: Breadcrumb[] = [
    { label: 'Home', url: '/' },
    { label: 'Blog', url: '/blog' }
  ]

  // Add category breadcrumb if applicable
  for (const [category, posts] of Object.entries(blogCategories)) {
    if (posts.includes(slug)) {
      const categoryNames: Record<string, string> = {
        instagram: 'Instagram Growth',
        aiInfluencer: 'AI Influencers',
        comfyui: 'ComfyUI',
        automation: 'Automation',
        digitalProducts: 'Digital Products',
        contentCreation: 'Content Creation',
        monetization: 'Monetization'
      }

      breadcrumbs.push({
        label: categoryNames[category] || category,
        url: `/blog?category=${category}`
      })
      break
    }
  }

  // Add current page (no URL, it's the current page)
  breadcrumbs.push({
    label: title,
    url: ''
  })

  return breadcrumbs
}
