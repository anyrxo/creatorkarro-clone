import { NextRequest, NextResponse } from 'next/server'
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs'
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

// Ensure data directory exists
const dataDir = join(process.cwd(), 'data')
if (!existsSync(dataDir)) {
  mkdirSync(dataDir, { recursive: true })
}

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
    throw new Error('Failed to save comment')
  }
}

// Simple rate limiting store (in production, use Redis or database)
const rateLimitStore = new Map<string, { count: number; lastReset: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const windowMs = 60000 // 1 minute
  const maxRequests = 3 // 3 comments per minute

  const userRecord = rateLimitStore.get(ip)
  
  if (!userRecord || now - userRecord.lastReset > windowMs) {
    rateLimitStore.set(ip, { count: 1, lastReset: now })
    return false
  }

  if (userRecord.count >= maxRequests) {
    return true
  }

  userRecord.count++
  return false
}

function detectSpam(content: string, userAgent: string): boolean {
  const spamPatterns = [
    /https?:\/\//gi, // URLs
    /\b(buy|cheap|discount|free|money|cash|earn|income|viagra|casino|lottery|winner)\b/gi,
    /(.)\\1{4,}/gi, // Repeated characters
    /[A-Z]{10,}/g, // Excessive caps
    /\$\d+/g, // Money amounts
    /\b\d{4}[-\s]?\d{4}[-\s]?\d{4}[-\s]?\d{4}\b/g, // Credit card patterns
    /[^\w\s.,!?'"()-]{3,}/g // Excessive special characters
  ]

  const hasSpam = spamPatterns.some(pattern => pattern.test(content))
  
  // Check for bot-like user agents
  const botPatterns = [
    /bot/i, /crawl/i, /spider/i, /scrape/i, /curl/i, /wget/i
  ]
  const isBotAgent = botPatterns.some(pattern => pattern.test(userAgent))

  // Check content quality
  const words = content.split(/\s+/).filter(word => word.length > 0)
  const isQualityContent = words.length >= 3 && words.length <= 200 // Between 3-200 words

  return hasSpam || isBotAgent || !isQualityContent
}

export async function POST(request: NextRequest) {
  try {
    const { postSlug, content, timestamp, userAgent } = await request.json()

    // Input validation
    if (!postSlug || !content || !timestamp) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    if (typeof content !== 'string' || content.trim().length < 10) {
      return NextResponse.json(
        { error: 'Comment must be at least 10 characters long' },
        { status: 400 }
      )
    }

    if (content.length > 1000) {
      return NextResponse.json(
        { error: 'Comment must be less than 1000 characters' },
        { status: 400 }
      )
    }

    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0] || 
              request.headers.get('x-real-ip') || 
              'unknown'

    // Rate limiting
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please wait before submitting another comment.' },
        { status: 429 }
      )
    }

    // Spam detection
    const isSpam = detectSpam(content.trim(), userAgent || '')
    if (isSpam) {
      console.log('Spam detected:', { content: content.substring(0, 100), ip, userAgent })
      return NextResponse.json(
        { error: 'Comment appears to be spam or contains prohibited content' },
        { status: 400 }
      )
    }

    // Create pending comment
    const pendingComment: PendingComment = {
      id: Math.random().toString(36).substr(2, 9) + Date.now().toString(36),
      postSlug: postSlug.trim(),
      content: content.trim(),
      timestamp,
      userAgent: userAgent || 'Unknown',
      ip,
      status: 'pending',
      submittedAt: new Date().toISOString()
    }

    // Save to pending comments
    const pendingComments = getPendingComments()
    pendingComments.push(pendingComment)
    savePendingComments(pendingComments)

    console.log('New comment submitted for review:', {
      id: pendingComment.id,
      postSlug,
      contentLength: content.length,
      ip
    })

    return NextResponse.json({
      success: true,
      message: 'Comment submitted successfully and is pending review'
    })

  } catch (error) {
    console.error('Error processing comment submission:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}