/**
 * Site-wide navigation configuration
 * Single source of truth for all navigation links across the site
 * Update URLs and menu structures in one place
 */

/**
 * Main header navigation items
 */
export const mainNavigation = [
  { name: 'Story', href: '/story' },
  { name: 'Blog', href: '/blog' },
  { name: 'Testimonials', href: '/testimonials' },
] as const

/**
 * Course offerings with details
 * Used in header dropdowns, course listings, landing pages
 */
export const courses = [
  {
    name: 'Instagram Ignited',
    href: '/instagram-ignited',
    slug: 'instagram-ignited',
    description: 'Master Instagram growth and monetization strategies',
    shortDescription: 'Instagram growth mastery',
    price: 399,
    priceFormatted: '$399',
    icon: 'instagram',
    color: '#E1306C',
  },
  {
    name: 'AI Influencers',
    href: '/ai-influencers',
    slug: 'ai-influencers',
    description: 'Build an AI-powered virtual influencer empire',
    shortDescription: 'AI virtual influencer creation',
    price: 399,
    priceFormatted: '$399',
    icon: 'ai',
    color: '#00D9FF',
  },
  {
    name: 'Digital Products',
    href: '/digital-products',
    slug: 'digital-products',
    description: 'Create and launch profitable digital products',
    shortDescription: 'Digital product creation',
    price: 399,
    priceFormatted: '$399',
    icon: 'package',
    color: '#00C853',
  },
  {
    name: 'AI Automations',
    href: '/ai-automations',
    slug: 'ai-automations',
    description: 'Build AI-powered automation agency with ChatGPT, Claude & AI services. Offer AI consulting, AI chatbots, intelligent automation using n8n, Zapier, Make',
    shortDescription: 'AI automation agency & AI consulting',
    price: 399,
    priceFormatted: '$399',
    icon: 'automation',
    color: '#FF6B6B',
  },
] as const

/**
 * Resource links and tools
 */
export const resourceLinks = [
  { name: 'Blog', href: '/blog' },
  { name: 'Free Resources', href: '/resources' },
  { name: 'About Anyro', href: '/about' },
] as const

/**
 * Legal and policy pages
 */
export const legalLinks = [
  { name: 'Refund Policy', href: '/refund-policy' },
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookie-policy' },
] as const

/**
 * Social media links
 */
export const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/anyrxo/',
    platform: 'instagram' as const,
    icon: 'instagram',
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@anyrxo',
    platform: 'youtube' as const,
    icon: 'youtube',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/anyrxo',
    platform: 'twitter' as const,
    icon: 'twitter',
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com/@anyro',
    platform: 'tiktok' as const,
    icon: 'tiktok',
  },
  {
    name: 'Newsletter',
    href: 'https://anyro.beehiiv.com/subscribe',
    platform: 'beehiiv' as const,
    icon: 'mail',
  },
] as const

/**
 * Call-to-action links
 */
export const ctaLinks = {
  allAccess: 'https://whop.com/iimagined/all-access-reimagined/',
  communityMonthly: 'https://whop.com/anyro/premium-monthly-0a/',
  communityYearly: 'https://whop.com/anyro/premium-yearly-0a/',
} as const

/**
 * Footer navigation structure
 */
export const footerNavigation = {
  company: [
    { name: 'Story', href: '/story' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Testimonials', href: '/testimonials' },
  ],
  courses: courses.map(course => ({
    name: course.name,
    href: course.href,
  })),
  resources: resourceLinks,
  legal: legalLinks,
} as const

/**
 * Mobile menu items
 */
export const mobileMenuItems = [
  { name: 'Home', href: '/' },
  { name: 'Courses', href: '/courses' },
  { name: 'Blog', href: '/blog' },
  { name: 'Story', href: '/story' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'About', href: '/about' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
] as const

/**
 * Type exports for TypeScript
 */
export type MainNavItem = typeof mainNavigation[number]
export type CourseItem = typeof courses[number]
export type SocialLink = typeof socialLinks[number]
export type ResourceLink = typeof resourceLinks[number]
export type LegalLink = typeof legalLinks[number]
export type MobileMenuItem = typeof mobileMenuItems[number]

/**
 * Helper function to get course by slug
 */
export function getCourseBySlug(slug: string): CourseItem | undefined {
  return courses.find(course => course.slug === slug)
}

/**
 * Helper function to get all course hrefs
 */
export function getAllCourseHrefs(): string[] {
  return courses.map(course => course.href)
}

/**
 * Helper function to check if a path is a course page
 */
export function isCoursePage(pathname: string): boolean {
  return getAllCourseHrefs().some(href => pathname.startsWith(href))
}
