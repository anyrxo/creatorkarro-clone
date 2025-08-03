import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export async function POST(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get('secret')
  
  // Verify secret to prevent unauthorized revalidation
  if (secret !== process.env.REVALIDATION_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    // Revalidate high-priority course pages
    revalidatePath('/n8n-ai-automations')
    revalidatePath('/instagram-ignited')
    revalidatePath('/comfyui-workflows')
    revalidatePath('/ai-influencers')
    revalidatePath('/digital-products')
    
    // Revalidate high-converting blog posts
    revalidatePath('/blog/ai-automation-guide')
    revalidatePath('/blog/robotic-process-automation')
    revalidatePath('/blog/ai-seo-content-optimization')
    revalidatePath('/blog/instagram-growth-2025')
    revalidatePath('/blog/n8n-beginners-guide')
    
    // Revalidate main pages
    revalidatePath('/')
    revalidatePath('/blog')
    
    // Revalidate by tags for broader updates
    revalidateTag('courses')
    revalidateTag('blog')
    revalidateTag('automation')
    
    return NextResponse.json({ 
      message: 'Revalidation successful',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json(
      { message: 'Error revalidating', error },
      { status: 500 }
    )
  }
}

// Allow GET requests to check if endpoint is working
export async function GET() {
  return NextResponse.json({ 
    message: 'Revalidation endpoint active',
    timestamp: new Date().toISOString()
  })
}