'use client'

import React, { useState } from 'react'
import { MessageCircle, ChevronDown, ChevronUp, Reply, Heart, Flag, User, Send, AlertCircle } from 'lucide-react'

export interface Comment {
  id: string
  username: string
  avatar: string
  content: string
  timestamp: string
  likes: number
  replies: Comment[]
  isOP?: boolean
}

interface BlogCommentsProps {
  postSlug: string
  comments: Comment[]
  commentCount: number
}

export default function BlogComments({ postSlug, comments, commentCount }: BlogCommentsProps) {
  const [showComments, setShowComments] = useState(false)
  const [sortBy, setSortBy] = useState<'top' | 'newest' | 'oldest'>('top')
  const [expandedReplies, setExpandedReplies] = useState<Set<string>>(new Set())
  const [likedComments, setLikedComments] = useState<Set<string>>(new Set())
  const [commentLikes, setCommentLikes] = useState<Record<string, number>>({})
  const [replyingTo, setReplyingTo] = useState<string | null>(null)

  const toggleReplies = (commentId: string) => {
    const newExpanded = new Set(expandedReplies)
    if (newExpanded.has(commentId)) {
      newExpanded.delete(commentId)
    } else {
      newExpanded.add(commentId)
    }
    setExpandedReplies(newExpanded)
  }

  const toggleLike = (commentId: string, currentLikes: number) => {
    const newLikedComments = new Set(likedComments)
    const newCommentLikes = { ...commentLikes }
    
    if (likedComments.has(commentId)) {
      // Unlike
      newLikedComments.delete(commentId)
      newCommentLikes[commentId] = (newCommentLikes[commentId] || currentLikes) - 1
    } else {
      // Like
      newLikedComments.add(commentId)
      newCommentLikes[commentId] = (newCommentLikes[commentId] || currentLikes) + 1
    }
    
    setLikedComments(newLikedComments)
    setCommentLikes(newCommentLikes)
  }

  const startReply = (commentId: string) => {
    setReplyingTo(commentId)
    // Scroll to the comment section
    const commentElement = document.getElementById(`comment-${commentId}`)
    if (commentElement) {
      commentElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
  }

  const formatTimeAgo = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'just now'
    if (diffInHours < 24) return `${diffInHours}h ago`
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`
    return `${Math.floor(diffInHours / 168)}w ago`
  }

  const sortComments = (comments: Comment[]) => {
    return [...comments].sort((a, b) => {
      switch (sortBy) {
        case 'top':
          return b.likes - a.likes
        case 'newest':
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
        case 'oldest':
          return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
        default:
          return 0
      }
    })
  }

  const CommentItem = ({ comment, isReply = false }: { comment: Comment, isReply?: boolean }) => {
    const currentLikes = commentLikes[comment.id] || comment.likes
    const isLiked = likedComments.has(comment.id)
    
    return (
      <div id={`comment-${comment.id}`} className={`${isReply ? 'ml-8 border-l-2 border-gray-700 pl-4' : ''} mb-6`}>
        <div className="flex items-start gap-3">
          {/* Avatar */}
          <div className="flex-shrink-0">
            {comment.avatar ? (
              <img 
                src={comment.avatar} 
                alt={comment.username}
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <span className="font-semibold text-white text-sm">
                {comment.username}
                {comment.isOP && (
                  <span className="ml-2 bg-blue-600 text-white px-2 py-0.5 rounded text-xs font-medium">OP</span>
                )}
              </span>
              <span className="text-gray-400 text-xs">•</span>
              <span className="text-gray-400 text-xs">{formatTimeAgo(comment.timestamp)}</span>
            </div>

            {/* Content */}
            <div className="text-gray-300 text-sm leading-relaxed mb-3">
              {comment.content}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 text-xs">
              <button 
                onClick={() => toggleLike(comment.id, comment.likes)}
                className={`flex items-center gap-1 transition-colors ${
                  isLiked ? 'text-red-400' : 'text-gray-400 hover:text-red-400'
                }`}
              >
                <Heart className={`w-3 h-3 ${isLiked ? 'fill-current' : ''}`} />
                <span>{currentLikes}</span>
              </button>
              {!isReply && (
                <button 
                  onClick={() => startReply(comment.id)}
                  className={`flex items-center gap-1 transition-colors ${
                    replyingTo === comment.id ? 'text-blue-400' : 'text-gray-400 hover:text-blue-400'
                  }`}
                >
                  <Reply className="w-3 h-3" />
                  <span>Reply</span>
                </button>
              )}
            {comment.replies.length > 0 && (
              <button 
                onClick={() => toggleReplies(comment.id)}
                className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors"
              >
                {expandedReplies.has(comment.id) ? (
                  <ChevronUp className="w-3 h-3" />
                ) : (
                  <ChevronDown className="w-3 h-3" />
                )}
                <span>{comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}</span>
              </button>
            )}
            <button className="flex items-center gap-1 text-gray-400 hover:text-yellow-400 transition-colors">
              <Flag className="w-3 h-3" />
            </button>
          </div>

          {/* Replies */}
          {comment.replies.length > 0 && expandedReplies.has(comment.id) && (
            <div className="mt-4">
              {comment.replies.map((reply) => (
                <CommentItem key={reply.id} comment={reply} isReply={true} />
              ))}
            </div>
          )}
          
          {/* Reply Form */}
          {replyingTo === comment.id && (
            <div className="mt-4 pt-4 border-t border-gray-700">
              <CommentSubmissionForm 
                postSlug={postSlug} 
                parentCommentId={comment.id}
                onCancel={() => setReplyingTo(null)}
                isReply={true}
              />
            </div>
          )}
        </div>
      </div>
    </div>
    )
  }

  return (
    <section className="mt-16 border-t border-gray-800 pt-12">
      <div className="container mx-auto max-w-4xl px-4">
        {/* Comments Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-3 text-white hover:text-blue-400 transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
            <h3 className="text-2xl font-bold">
              {commentCount} {commentCount === 1 ? 'Comment' : 'Comments'}
            </h3>
            {showComments ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Comments Section */}
        {showComments && (
          <div className="space-y-6">
            {/* Sort Options */}
            <div className="flex items-center gap-4 pb-6 border-b border-gray-800">
              <span className="text-gray-400 text-sm">Sort by:</span>
              <div className="flex gap-2">
                {(['top', 'newest', 'oldest'] as const).map((option) => (
                  <button
                    key={option}
                    onClick={() => setSortBy(option)}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      sortBy === option
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-gray-700'
                    }`}
                  >
                    {option === 'top' ? 'Top' : option === 'newest' ? 'Newest' : 'Oldest'}
                  </button>
                ))}
              </div>
            </div>

            {/* Comments List */}
            <div className="space-y-6">
              {sortComments(comments).map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
              ))}
            </div>

            {/* Add Comment Section */}
            <CommentSubmissionForm postSlug={postSlug} />
          </div>
        )}
      </div>
    </section>
  )
}

// Comment Submission Form with Spam Protection
function CommentSubmissionForm({ 
  postSlug, 
  parentCommentId = null, 
  onCancel = null, 
  isReply = false 
}: { 
  postSlug: string
  parentCommentId?: string | null
  onCancel?: (() => void) | null
  isReply?: boolean
}) {
  const [comment, setComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [lastSubmission, setLastSubmission] = useState<number>(0)

  // Anti-spam: Rate limiting (1 comment per minute)
  const RATE_LIMIT_MS = 60000 // 1 minute
  
  const canSubmit = () => {
    const now = Date.now()
    const timeSinceLastSubmission = now - lastSubmission
    return timeSinceLastSubmission >= RATE_LIMIT_MS
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Basic validation
    if (!comment.trim()) {
      setError('Please enter a comment')
      return
    }

    if (comment.length < 10) {
      setError('Comment must be at least 10 characters long')
      return
    }

    if (comment.length > 1000) {
      setError('Comment must be less than 1000 characters')
      return
    }

    // Rate limiting check
    if (!canSubmit()) {
      const timeLeft = Math.ceil((RATE_LIMIT_MS - (Date.now() - lastSubmission)) / 1000)
      setError(`Please wait ${timeLeft} seconds before submitting another comment`)
      return
    }

    // Simple spam detection
    const spamPatterns = [
      /https?:\/\//gi, // URLs
      /\b(buy|cheap|discount|free|money|cash|earn|income)\b/gi, // Spam keywords
      /(.)\1{4,}/gi, // Repeated characters
      /[A-Z]{5,}/g // Excessive caps
    ]

    const isSpam = spamPatterns.some(pattern => pattern.test(comment))
    if (isSpam) {
      setError('Comment appears to be spam or contains prohibited content')
      return
    }

    setIsSubmitting(true)

    try {
      // Submit to API for admin approval
      const response = await fetch('/api/comments/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postSlug,
          content: comment.trim(),
          timestamp: new Date().toISOString(),
          userAgent: navigator.userAgent
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit comment')
      }

      setIsSubmitted(true)
      setComment('')
      setLastSubmission(Date.now())
      
      // Auto-hide success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
      
    } catch (err) {
      setError('Failed to submit comment. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mt-8">
        <div className="flex items-center gap-3 text-green-400">
          <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
            <Send className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-semibold">Comment Submitted!</h4>
            <p className="text-sm text-green-300 mt-1">
              Your comment has been sent for review and will appear once approved by our team.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 mt-8">
      <h4 className="text-white font-semibold mb-4">Join the discussion as Guest</h4>
      
      <form onSubmit={handleSubmit}>
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center flex-shrink-0">
            <User className="w-4 h-4 text-white" />
          </div>
          
          <div className="flex-1">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Share your thoughts... (casual style encouraged!)"
              className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none transition-colors"
              rows={3}
              maxLength={1000}
            />
            
            <div className="flex justify-between items-center mt-3">
              <div className="flex flex-col gap-1">
                <span className="text-gray-400 text-xs">
                  Comments are reviewed before appearing • Be respectful
                </span>
                {!canSubmit() && (
                  <span className="text-orange-400 text-xs flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    Rate limited - wait before submitting again
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-3">
                <span className="text-gray-500 text-xs">
                  {comment.length}/1000
                </span>
                <button
                  type="submit"
                  disabled={isSubmitting || !comment.trim() || !canSubmit()}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-3 h-3 border border-white border-t-transparent rounded-full animate-spin"></div>
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="w-3 h-3" />
                      Submit for Review
                    </>
                  )}
                </button>
              </div>
            </div>
            
            {error && (
              <div className="mt-3 p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </p>
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  )
}