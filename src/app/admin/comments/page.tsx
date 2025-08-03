'use client'

import React, { useState, useEffect } from 'react'
import { CheckCircle, XCircle, Clock, MessageCircle, User, Calendar, Eye, Trash2 } from 'lucide-react'

interface PendingComment {
  id: string
  postSlug: string
  content: string
  timestamp: string
  userAgent: string
  ip: string
  status: 'pending' | 'approved' | 'rejected'
  submittedAt: string
}

export default function AdminCommentsPage() {
  const [comments, setComments] = useState<PendingComment[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending')
  const [processing, setProcessing] = useState<Set<string>>(new Set())

  useEffect(() => {
    fetchComments()
  }, [])

  const fetchComments = async () => {
    try {
      const response = await fetch('/api/admin/comments')
      if (response.ok) {
        const data = await response.json()
        setComments(data.comments || [])
      }
    } catch (error) {
      console.error('Error fetching comments:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleCommentAction = async (commentId: string, action: 'approve' | 'reject' | 'delete') => {
    if (processing.has(commentId)) return

    setProcessing(prev => new Set([...prev, commentId]))

    try {
      const response = await fetch('/api/admin/comments', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ commentId, action })
      })

      if (response.ok) {
        await fetchComments() // Refresh the list
      } else {
        alert('Failed to process comment')
      }
    } catch (error) {
      console.error('Error processing comment:', error)
      alert('Error processing comment')
    } finally {
      setProcessing(prev => {
        const newSet = new Set(prev)
        newSet.delete(commentId)
        return newSet
      })
    }
  }

  const filteredComments = comments.filter(comment => {
    if (filter === 'all') return true
    return comment.status === filter
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-400" />
      case 'approved':
        return <CheckCircle className="w-4 h-4 text-green-400" />
      case 'rejected':
        return <XCircle className="w-4 h-4 text-red-400" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20'
      case 'approved':
        return 'text-green-400 bg-green-400/10 border-green-400/20'
      case 'rejected':
        return 'text-red-400 bg-red-400/10 border-red-400/20'
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20'
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-white">Loading comments...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Comment Moderation</h1>
          <div className="flex items-center gap-4 text-gray-400">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span>{comments.length} Total Comments</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-yellow-400" />
              <span>{comments.filter(c => c.status === 'pending').length} Pending</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>{comments.filter(c => c.status === 'approved').length} Approved</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-400" />
              <span>{comments.filter(c => c.status === 'rejected').length} Rejected</span>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-2 mb-6">
          {(['all', 'pending', 'approved', 'rejected'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {tab !== 'all' && (
                <span className="ml-2 bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full text-xs">
                  {comments.filter(c => c.status === tab).length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Comments List */}
        <div className="space-y-4">
          {filteredComments.length === 0 ? (
            <div className="text-center py-12 bg-gray-800/50 rounded-xl border border-gray-700">
              <MessageCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-400">No comments found in this category.</p>
            </div>
          ) : (
            filteredComments.map((comment) => (
              <div
                key={comment.id}
                className="bg-gray-800/50 rounded-xl p-6 border border-gray-700"
              >
                {/* Comment Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Guest</h3>
                      <p className="text-gray-400 text-sm">
                        On: <span className="text-blue-300">{comment.postSlug}</span>
                      </p>
                    </div>
                    <div className={`px-3 py-1 rounded-full border text-sm font-medium ${getStatusColor(comment.status)}`}>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(comment.status)}
                        {comment.status.charAt(0).toUpperCase() + comment.status.slice(1)}
                      </div>
                    </div>
                  </div>

                  <div className="text-gray-400 text-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(comment.submittedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="text-xs text-gray-500">
                      IP: {comment.ip}
                    </div>
                  </div>
                </div>

                {/* Comment Content */}
                <div className="bg-gray-900/50 rounded-lg p-4 mb-4 border border-gray-700/50">
                  <p className="text-gray-300 leading-relaxed">{comment.content}</p>
                </div>

                {/* Comment Meta */}
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                    <p>User Agent: {comment.userAgent.substring(0, 100)}...</p>
                    <p>Submitted: {new Date(comment.submittedAt).toLocaleString()}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    {comment.status === 'pending' && (
                      <>
                        <button
                          onClick={() => handleCommentAction(comment.id, 'approve')}
                          disabled={processing.has(comment.id)}
                          className="flex items-center gap-2 px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Approve
                        </button>
                        <button
                          onClick={() => handleCommentAction(comment.id, 'reject')}
                          disabled={processing.has(comment.id)}
                          className="flex items-center gap-2 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <XCircle className="w-4 h-4" />
                          Reject
                        </button>
                      </>
                    )}
                    
                    <button
                      onClick={() => handleCommentAction(comment.id, 'delete')}
                      disabled={processing.has(comment.id)}
                      className="flex items-center gap-2 px-3 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>

                    <a
                      href={`/blog/${comment.postSlug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                      View Post
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}