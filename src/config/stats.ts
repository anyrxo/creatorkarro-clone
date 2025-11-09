/**
 * Site-wide statistics and metrics
 * Centralized place to update key numbers that appear across the site
 * Update these numbers periodically to reflect current data
 */

export const siteStats = {
  // Student metrics
  totalStudents: 4000,
  activeStudents: 4000,

  // Revenue metrics (in USD)
  studentRevenue: 5000000, // $5M+ in combined student earnings

  // Social metrics
  totalViews: 50000000, // 50M total views
  instagramFollowers: 500000, // 500K Instagram followers
  combinedFollowers: 3000000, // 3M combined followers across all platforms

  // Quality metrics
  averageRating: 4.9,
  satisfactionRate: 98, // percentage
  totalReviews: 3247,

  // Course-specific student counts
  instagramStudents: 2000,
  aiInfluencersStudents: 1500,
  digitalProductsStudents: 1200,
  aiAutomationsStudents: 800,

  // Business metrics
  yearsActive: 2, // Since 2023
  foundingYear: 2023,

  // Blog metrics
  totalBlogPosts: 64,

  // Premium offerings
  monthlyMembershipPrice: 99,
  coursePrice: 399,
  allAccessPrice: 0, // Whop pricing - via link

  // Testimonials
  successStories: 50,
} as const

/**
 * Format stat for display based on type
 * @param value - The numeric value to format
 * @param type - Type of formatting to apply (currency, number, percent)
 * @returns Formatted string ready for display
 */
export function formatStat(value: number, type: 'currency' | 'number' | 'percent' = 'number'): string {
  switch (type) {
    case 'currency':
      return `$${value.toLocaleString()}`
    case 'percent':
      return `${value}%`
    case 'number':
    default:
      return value.toLocaleString()
  }
}

/**
 * Get stat by key with proper formatting
 * @param key - Key from siteStats
 * @param type - Formatting type
 * @returns Formatted stat value
 */
export function getStat(key: keyof typeof siteStats, type?: 'currency' | 'number' | 'percent'): string {
  const value = siteStats[key]
  if (typeof value !== 'number') return String(value)

  // Auto-detect type if not provided
  if (!type) {
    if (key.includes('Revenue') || key.includes('Price')) type = 'currency'
    else if (key.includes('Rate') || key.includes('Satisfaction')) type = 'percent'
    else type = 'number'
  }

  return formatStat(value, type)
}

/**
 * Statistics descriptions for marketing copy
 */
export const statsDescriptions = {
  totalStudents: 'students building profitable businesses',
  totalViews: 'total views across all platforms',
  combinedFollowers: 'combined followers',
  studentRevenue: 'in combined student earnings',
  averageRating: 'average course rating',
  satisfactionRate: 'student satisfaction rate',
  instagramFollowers: 'Instagram followers',
  totalBlogPosts: 'in-depth blog articles',
  successStories: 'documented success stories',
} as const
