'use client'

import { useEffect, useState } from 'react'
import { calculateBlogMetrics, formatBlogDate, updateStoredMetrics } from '@/utils/blogMetrics'
import { usePathname } from 'next/navigation'

interface BlogMetricsProps {
  publishDate: string
  readTime: string
}

export default function BlogMetrics({ publishDate, readTime }: BlogMetricsProps) {
  const pathname = usePathname()
  const slug = pathname.split('/').pop() || ''
  
  const [metrics, setMetrics] = useState({
    views: '0',
    likes: '0',
    shares: '0',
    rawViews: 0,
    rawLikes: 0,
    rawShares: 0
  })
  const [hasLiked, setHasLiked] = useState(false)
  const [hasViewed, setHasViewed] = useState(false)
  const [showLikedMessage, setShowLikedMessage] = useState(false)

  useEffect(() => {
    // Calculate initial metrics
    const updateMetrics = () => {
      setMetrics(calculateBlogMetrics(publishDate, slug))
    }
    
    updateMetrics()
    
    // Track view (only once per session)
    const viewedPosts = sessionStorage.getItem('viewedPosts') || '[]'
    const viewedArray = JSON.parse(viewedPosts)
    if (!viewedArray.includes(slug)) {
      viewedArray.push(slug)
      sessionStorage.setItem('viewedPosts', JSON.stringify(viewedArray))
      updateStoredMetrics(slug, 'view')
      setHasViewed(true)
      // Update metrics after recording view
      setTimeout(updateMetrics, 100)
    }
    
    // Check if user has liked this post before
    const userLikes = localStorage.getItem('userLikedPosts') || '[]'
    const likedArray = JSON.parse(userLikes)
    if (likedArray.includes(slug)) {
      setHasLiked(true)
    }
    
    // Update metrics every 30 seconds for live feel
    const interval = setInterval(updateMetrics, 30000)
    
    return () => clearInterval(interval)
  }, [publishDate, slug])

  const handleLike = () => {
    if (!hasLiked) {
      setHasLiked(true)
      
      // Save to user's liked posts
      const userLikes = localStorage.getItem('userLikedPosts') || '[]'
      const likedArray = JSON.parse(userLikes)
      likedArray.push(slug)
      localStorage.setItem('userLikedPosts', JSON.stringify(likedArray))
      
      // Update global metrics
      updateStoredMetrics(slug, 'like')
      
      // Update display immediately
      setTimeout(() => {
        setMetrics(calculateBlogMetrics(publishDate, slug))
      }, 100)
    } else {
      // Show already liked message
      setShowLikedMessage(true)
      setTimeout(() => setShowLikedMessage(false), 2000)
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href
        })
        
        // Update global share count
        updateStoredMetrics(slug, 'share')
        
        // Update display
        setTimeout(() => {
          setMetrics(calculateBlogMetrics(publishDate, slug))
        }, 100)
      } catch (err) {
        console.log('Share cancelled')
      }
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
      
      // Update global share count
      updateStoredMetrics(slug, 'share')
      
      // Update display
      setTimeout(() => {
        setMetrics(calculateBlogMetrics(publishDate, slug))
      }, 100)
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <span>{metrics.views} views</span>
      </div>
      
      <div className="relative">
        <button 
          onClick={handleLike}
          className={`flex items-center gap-2 transition-colors ${hasLiked ? 'text-red-500' : 'hover:text-red-400'}`}
        >
          <svg className="w-5 h-5" fill={hasLiked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span>{metrics.likes} likes</span>
        </button>
        {showLikedMessage && (
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            Already liked!
          </div>
        )}
      </div>
      
      <button 
        onClick={handleShare}
        className="flex items-center gap-2 hover:text-blue-400 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.632 4.316C18.114 15.062 18 14.518 18 14c0-.482.114-.938.316-1.342m0 2.684a3 3 0 110-2.684M9 12a3 3 0 106 0 3 3 0 00-6 0zm12 0a3 3 0 106 0 3 3 0 00-6 0z" />
        </svg>
        <span>{metrics.shares} shares</span>
      </button>
      
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>{readTime} read</span>
      </div>
      
      <div className="flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>{formatBlogDate(publishDate)}</span>
      </div>
    </div>
  )
}