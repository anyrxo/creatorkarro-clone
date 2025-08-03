import { NextRequest, NextResponse } from 'next/server'
import { writeFileSync, readFileSync, existsSync } from 'fs'
import { join } from 'path'

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

const PENDING_COMMENTS_FILE = join(process.cwd(), 'data', 'pending-comments.json')

function getPendingComments(): PendingComment[] {
  try {
    if (!existsSync(PENDING_COMMENTS_FILE)) {
      return []
    }
    const data = readFileSync(PENDING_COMMENTS_FILE, 'utf8')
    return JSON.parse(data)
  } catch (error) {
    console.error('Error reading pending comments:', error)
    return []
  }
}

function savePendingComments(comments: PendingComment[]) {
  try {
    writeFileSync(PENDING_COMMENTS_FILE, JSON.stringify(comments, null, 2))
  } catch (error) {
    console.error('Error saving pending comments:', error)
    throw new Error('Failed to save comments')
  }
}

// Simple authentication check (in production, use proper auth)
function isAuthorized(request: NextRequest): boolean {
  // For development, allow localhost or add basic auth header
  const host = request.headers.get('host')
  const authHeader = request.headers.get('authorization')
  
  // Allow localhost in development
  if (host?.includes('localhost') || host?.includes('127.0.0.1')) {
    return true
  }
  
  // Basic auth check (replace with your actual auth system)
  if (authHeader && authHeader === 'Bearer admin-secret-key') {
    return true
  }
  
  return false
}

// GET: Fetch all pending comments
export async function GET(request: NextRequest) {
  try {
    // Simple auth check
    if (!isAuthorized(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const comments = getPendingComments()
    
    // Sort by submission date (newest first)
    const sortedComments = comments.sort((a, b) => 
      new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    )

    return NextResponse.json({
      success: true,
      comments: sortedComments
    })

  } catch (error) {
    console.error('Error fetching comments:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// PATCH: Update comment status (approve/reject) or delete
export async function PATCH(request: NextRequest) {
  try {
    // Simple auth check
    if (!isAuthorized(request)) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { commentId, action } = await request.json()

    if (!commentId || !action) {
      return NextResponse.json(
        { error: 'Missing commentId or action' },
        { status: 400 }
      )
    }

    if (!['approve', 'reject', 'delete'].includes(action)) {
      return NextResponse.json(
        { error: 'Invalid action. Must be approve, reject, or delete' },
        { status: 400 }
      )
    }

    const comments = getPendingComments()
    const commentIndex = comments.findIndex(c => c.id === commentId)

    if (commentIndex === -1) {
      return NextResponse.json(
        { error: 'Comment not found' },
        { status: 404 }
      )
    }

    if (action === 'delete') {
      // Remove comment completely
      comments.splice(commentIndex, 1)
    } else {
      // Update status
      comments[commentIndex].status = action === 'approve' ? 'approved' : 'rejected'
    }

    savePendingComments(comments)

    // If approved, we could add it to the live comments here
    if (action === 'approve') {
      await addApprovedCommentToLive(comments[commentIndex])
    }

    console.log(`Comment ${commentId} ${action}d successfully`)

    return NextResponse.json({
      success: true,
      message: `Comment ${action}d successfully`
    })

  } catch (error) {
    console.error('Error updating comment:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Helper function to add approved comments to live comments
async function addApprovedCommentToLive(comment: PendingComment) {
  try {
    const commentsPath = join(process.cwd(), 'src', 'data', 'blog-comments.ts')
    
    if (!existsSync(commentsPath)) {
      console.error('Blog comments file not found')
      return
    }

    const content = readFileSync(commentsPath, 'utf8')
    
    // Create a new comment in the format expected by the blog
    const newComment = {
      id: comment.id,
      username: 'Guest',
      avatar: '',
      content: comment.content,
      timestamp: comment.timestamp,
      likes: Math.floor(Math.random() * 10) + 1,
      replies: [],
      isOP: false
    }

    // Parse the existing comments
    const jsonMatch = content.match(/export const blogComments: Record<string, PostComments> = ([\s\S]*?);/)
    if (!jsonMatch) {
      console.error('Could not parse blog comments structure')
      return
    }

    const blogComments = JSON.parse(jsonMatch[1])
    
    // Add the new comment to the appropriate post
    if (blogComments[comment.postSlug]) {
      blogComments[comment.postSlug].comments.push(newComment)
      blogComments[comment.postSlug].commentCount++
    } else {
      // Create new post comments structure
      blogComments[comment.postSlug] = {
        postSlug: comment.postSlug,
        comments: [newComment],
        commentCount: 1
      }
    }

    // Write back to file
    const newContent = content.replace(
      /export const blogComments: Record<string, PostComments> = [\s\S]*?;/,
      `export const blogComments: Record<string, PostComments> = ${JSON.stringify(blogComments, null, 2)};`
    )

    writeFileSync(commentsPath, newContent)
    console.log(`Added approved comment to live comments for post: ${comment.postSlug}`)

  } catch (error) {
    console.error('Error adding approved comment to live comments:', error)
  }
}