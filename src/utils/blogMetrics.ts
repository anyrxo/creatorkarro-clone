// Calculate dynamic metrics based on days since publication
export function calculateBlogMetrics(publishDate: string) {
  const publish = new Date(publishDate)
  const now = new Date()
  const daysSincePublish = Math.floor((now.getTime() - publish.getTime()) / (1000 * 60 * 60 * 24))
  
  // Base metrics
  const baseViews = Math.floor(Math.random() * 500) + 800 // 800-1300
  const baseLikes = Math.floor(Math.random() * 50) + 80 // 80-130
  const baseShares = Math.floor(Math.random() * 20) + 15 // 15-35
  
  // Growth factors (different for each metric)
  const viewsGrowthRate = 45 + Math.random() * 25 // 45-70 views per day
  const likesGrowthRate = 3 + Math.random() * 2 // 3-5 likes per day
  const sharesGrowthRate = 0.8 + Math.random() * 0.7 // 0.8-1.5 shares per day
  
  // Calculate current metrics with some randomness
  const views = Math.floor(baseViews + (daysSincePublish * viewsGrowthRate * (0.8 + Math.random() * 0.4)))
  const likes = Math.floor(baseLikes + (daysSincePublish * likesGrowthRate * (0.7 + Math.random() * 0.6)))
  const shares = Math.floor(baseShares + (daysSincePublish * sharesGrowthRate * (0.6 + Math.random() * 0.8)))
  
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