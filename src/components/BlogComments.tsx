'use client'

import React, { useState } from 'react'
import { MessageCircle, ChevronDown, ChevronUp, Reply, Heart, Flag, User } from 'lucide-react'

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

  const toggleReplies = (commentId: string) => {
    const newExpanded = new Set(expandedReplies)
    if (newExpanded.has(commentId)) {
      newExpanded.delete(commentId)
    } else {
      newExpanded.add(commentId)
    }
    setExpandedReplies(newExpanded)
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

  const CommentItem = ({ comment, isReply = false }: { comment: Comment, isReply?: boolean }) => (
    <div className={`${isReply ? 'ml-8 border-l-2 border-gray-700 pl-4' : ''} mb-6`}>
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
            <button className="flex items-center gap-1 text-gray-400 hover:text-red-400 transition-colors">
              <Heart className="w-3 h-3" />
              <span>{comment.likes}</span>
            </button>
            <button className="flex items-center gap-1 text-gray-400 hover:text-blue-400 transition-colors">
              <Reply className="w-3 h-3" />
              <span>Reply</span>
            </button>
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
        </div>
      </div>
    </div>
  )

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
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 mt-8">
              <h4 className="text-white font-semibold mb-4">Join the discussion</h4>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <textarea
                    placeholder="Share your thoughts..."
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 resize-none"
                    rows={3}
                  />
                  <div className="flex justify-between items-center mt-3">
                    <span className="text-gray-400 text-xs">Be respectful and constructive</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}