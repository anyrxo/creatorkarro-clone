// Simple hash function to generate consistent random numbers from a string
function hashCode(str: string): number {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i)
    hash = ((hash << 5) - hash) + char
    hash = hash & hash // Convert to 32bit integer
  }
  return Math.abs(hash)
}

// Generate consistent random number between 0 and 1 from a seed
function seededRandom(seed: string): number {
  const hash = hashCode(seed)
  return (hash % 1000) / 1000
}

// Calculate dynamic metrics based on days since publication
export function calculateBlogMetrics(publishDate: string, slug: string) {
  const publish = new Date(publishDate)
  const now = new Date()
  const daysSincePublish = Math.floor((now.getTime() - publish.getTime()) / (1000 * 60 * 60 * 24))
  
  // Get stored metrics from localStorage
  const storedMetrics = getStoredMetrics(slug)
  
  // Use slug as seed for consistent random values
  const seed1 = seededRandom(slug + 'views')
  const seed2 = seededRandom(slug + 'likes')
  const seed3 = seededRandom(slug + 'growth')
  
  // Base metrics (older posts start with higher numbers)
  const ageMultiplier = Math.min(daysSincePublish / 30, 3) // Cap at 3x for very old posts
  const baseViews = Math.floor((1200 + seed1 * 800) * (1 + ageMultiplier))
  const baseLikes = Math.floor((120 + seed2 * 80) * (1 + ageMultiplier * 0.8))
  
  // Daily growth rates (consistent for each post but varies by post)
  const dailyViewsGrowth = 65 + seed3 * 35 // 65-100 views per day
  const dailyLikesGrowth = 4.5 + seed3 * 3.5 // 4.5-8 likes per day
  
  // Calculate current metrics
  let views = Math.floor(baseViews + (daysSincePublish * dailyViewsGrowth))
  let likes = Math.floor(baseLikes + (daysSincePublish * dailyLikesGrowth))
  
  // Add any user interactions stored
  views += storedMetrics.additionalViews
  likes += storedMetrics.additionalLikes
  
  // Calculate shares as 13-18% of likes (consistent ratio per post)
  const shareRatio = 0.13 + seededRandom(slug + 'shares') * 0.05 // 13-18%
  let shares = Math.floor(likes * shareRatio)
  shares += storedMetrics.additionalShares
  
  // Format numbers for display
  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return num.toString()
  }
  
  return {
    views: formatNumber(views),
    likes: formatNumber(likes),
    shares: formatNumber(shares),
    rawViews: views,
    rawLikes: likes,
    rawShares: shares
  }
}

// Get stored metrics from localStorage
function getStoredMetrics(slug: string) {
  if (typeof window === 'undefined') {
    return { additionalViews: 0, additionalLikes: 0, additionalShares: 0 }
  }
  
  const stored = localStorage.getItem(`blogMetrics_${slug}`)
  if (stored) {
    return JSON.parse(stored)
  }
  
  // Initialize with a view count
  const initial = { additionalViews: 1, additionalLikes: 0, additionalShares: 0 }
  localStorage.setItem(`blogMetrics_${slug}`, JSON.stringify(initial))
  return initial
}

// Update stored metrics
export function updateStoredMetrics(slug: string, type: 'view' | 'like' | 'share') {
  const current = getStoredMetrics(slug)
  
  switch (type) {
    case 'view':
      current.additionalViews += 1
      break
    case 'like':
      current.additionalLikes += 1
      break
    case 'share':
      current.additionalShares += 1
      break
  }
  
  localStorage.setItem(`blogMetrics_${slug}`, JSON.stringify(current))
}

// Format date for display
export function formatBlogDate(dateString: string) {
  const date = new Date(dateString)
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  }
  return date.toLocaleDateString('en-US', options)
}