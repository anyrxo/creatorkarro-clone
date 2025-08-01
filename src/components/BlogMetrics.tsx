'use client'

import { useEffect, useState } from 'react'
import { calculateBlogMetrics, formatBlogDate } from '@/utils/blogMetrics'

interface BlogMetricsProps {
  publishDate: string
  readTime: string
}

export default function BlogMetrics({ publishDate, readTime }: BlogMetricsProps) {
  const [metrics, setMetrics] = useState({
    views: '0',
    likes: '0',
    shares: '0',
    rawViews: 0,
    rawLikes: 0,
    rawShares: 0
  })
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    // Calculate initial metrics
    setMetrics(calculateBlogMetrics(publishDate))
    
    // Check if user has liked this post before
    const likedPosts = localStorage.getItem('likedPosts') || '[]'
    const likedArray = JSON.parse(likedPosts)
    if (likedArray.includes(window.location.pathname)) {
      setLiked(true)
    }
    
    // Update metrics every 30 seconds for live feel
    const interval = setInterval(() => {
      setMetrics(calculateBlogMetrics(publishDate))
    }, 30000)
    
    return () => clearInterval(interval)
  }, [publishDate])

  const handleLike = () => {
    if (!liked) {
      setLiked(true)
      
      // Save to localStorage
      const likedPosts = localStorage.getItem('likedPosts') || '[]'
      const likedArray = JSON.parse(likedPosts)
      likedArray.push(window.location.pathname)
      localStorage.setItem('likedPosts', JSON.stringify(likedArray))
      
      // Update metrics immediately
      setMetrics(prev => ({
        ...prev,
        likes: formatNumber(prev.rawLikes + 1),
        rawLikes: prev.rawLikes + 1
      }))
    }
  }

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href
        })
        
        // Update share count
        setMetrics(prev => ({
          ...prev,
          shares: formatNumber(prev.rawShares + 1),
          rawShares: prev.rawShares + 1
        }))
      } catch (err) {
        console.log('Share cancelled')
      }
    } else {
      // Fallback - copy to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
      
      // Update share count
      setMetrics(prev => ({
        ...prev,
        shares: formatNumber(prev.rawShares + 1),
        rawShares: prev.rawShares + 1
      }))
    }
  }

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`
    }
    return num.toString()
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
      
      <button 
        onClick={handleLike}
        className={`flex items-center gap-2 transition-colors ${liked ? 'text-red-500' : 'hover:text-red-400'}`}
      >
        <svg className="w-5 h-5" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        <span>{metrics.likes} likes</span>
      </button>
      
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