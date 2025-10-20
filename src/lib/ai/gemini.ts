// ORYANA Gemini Flash 2.0 Integration - AI-Powered Expert Content Generation
import { GoogleGenerativeAI } from '@google/generative-ai'

// Load API key from environment variable
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || ''

class GeminiContentGenerator {
  private genAI: GoogleGenerativeAI
  private model: any

  constructor() {
    // Validate API key exists
    if (!GEMINI_API_KEY) {
      throw new Error('GEMINI_API_KEY environment variable is not set. Please configure it in your .env.local file.')
    }

    this.genAI = new GoogleGenerativeAI(GEMINI_API_KEY)
    this.model = this.genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
      generationConfig: {
        temperature: 0.9,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 8192,
      }
    })
  }

  // Generate expert social media content for course promotion
  async generateSocialMediaExpertContent(platform: 'twitter' | 'linkedin' | 'instagram' | 'tiktok', topic: string): Promise<string> {
    const expertPrompts = {
      twitter: `Create a Twitter thread (8-10 tweets) positioning us as the ultimate ${topic} experts. Include:
        - Hook tweet with controversial/bold claim
        - Technical insights only experts know
        - Real student success metrics (127K+ students, $2.7M+ generated)
        - Subtle course promotion
        - Call-to-action for engagement
        - Use expert language, industry jargon
        - Show deep technical knowledge
        - Position against competitors`,
      
      linkedin: `Write a LinkedIn expert analysis post about ${topic}. Include:
        - Professional expert positioning
        - Industry trend analysis
        - Technical deep-dive insights
        - Student success case studies
        - Thought leadership angle
        - Subtle course mention
        - Call-to-action for connections/comments
        - Use professional, authoritative tone`,
      
      instagram: `Create Instagram expert content for ${topic}:
        - Expert tips carousel (5 slides)
        - Behind-the-scenes expert process
        - Student transformation posts
        - Technical tutorial snippets
        - Authority-building captions
        - Hashtag strategy for experts
        - Story content ideas
        - Reels scripts showing expertise`,
      
      tiktok: `Generate TikTok expert content for ${topic}:
        - "Things only ${topic} experts know" series
        - Quick technical tips
        - Myth-busting content
        - Student success reveals
        - Behind-the-scenes expert work
        - Trending sound applications
        - Expert reaction videos
        - Educational but entertaining`
    }

    const prompt = `${expertPrompts[platform]}

    CONTEXT: We are IImagined.ai, the leading authority in AI automation, Instagram growth, and digital products. We have:
    - 127K+ successful students
    - $2.7M+ in student revenue generated
    - Proven track record since 2019
    - Expert-level courses in N8N automation, Fanvue monetization, AI workflows
    
    TONE: Confident expert, industry authority, proven results, technical depth
    GOAL: Establish thought leadership to drive course sales
    AVOID: Overly salesy, beginner language, generic advice`

    try {
      const result = await this.model.generateContent(prompt)
      return result.response.text()
    } catch (error) {
      console.error('Gemini generation error:', error)
      return 'Error generating content'
    }
  }

  // Generate expert N8N automation content
  async generateN8NExpertContent(contentType: 'tutorial' | 'workflow' | 'integration' | 'case-study'): Promise<string> {
    const prompts = {
      tutorial: `Create an expert-level N8N tutorial that positions us as the ultimate N8N authorities. Include:
        - Advanced N8N techniques most don't know
        - Real business automation examples
        - Student success metrics from our N8N course
        - Technical depth showing mastery
        - Integration with AI models (GPT, Claude, etc.)
        - Revenue-generating workflow examples
        - Expert troubleshooting tips
        - Course promotion integrated naturally`,
      
      workflow: `Design a sophisticated N8N workflow that demonstrates expert-level knowledge:
        - Multi-step business automation
        - AI integration components
        - Error handling and optimization
        - Real ROI calculations
        - Student implementation results
        - Technical architecture explanation
        - Scaling considerations
        - Premium course teaser`,
      
      integration: `Explain advanced N8N integrations showing expert mastery:
        - Complex API connections
        - AI model integrations
        - Database automations
        - Multi-platform workflows
        - Security best practices
        - Performance optimization
        - Student success examples
        - Course value proposition`,
      
      'case-study': `Write a detailed N8N case study from our student base:
        - Specific business problem solved
        - Expert solution architecture
        - Implementation challenges overcome
        - ROI and time savings achieved
        - Technical details and insights
        - Lessons learned for experts
        - Course methodology validation
        - Call-to-action for similar results`
    }

    const basePrompt = prompts[contentType]
    const fullPrompt = `${basePrompt}

    CONTEXT: We are the leading N8N automation experts with 62K+ students in our N8N AI Automations course. Students average $10K+ monthly revenue from our workflows.
    
    POSITIONING: Ultimate N8N authorities, not just teachers but masters who build million-dollar automations
    GOAL: Drive enrollment in our $129 N8N AI Automations course`

    try {
      const result = await this.model.generateContent(fullPrompt)
      return result.response.text()
    } catch (error) {
      console.error('Gemini generation error:', error)
      return 'Error generating N8N content'
    }
  }

  // Generate expert Fanvue monetization content
  async generateFanvueExpertContent(angle: 'strategy' | 'optimization' | 'case-study' | 'comparison'): Promise<string> {
    const prompts = {
      strategy: `Create expert Fanvue monetization strategies that position us as the ultimate Fanvue authorities:
        - Advanced revenue optimization techniques
        - Psychology-based subscriber retention
        - Content strategy for maximum earnings
        - Pricing psychology secrets
        - Platform algorithm mastery
        - Student success examples (specific earnings)
        - Expert-level growth hacking
        - Course promotion as the ultimate guide`,
      
      optimization: `Write expert Fanvue optimization guide showing our mastery:
        - Conversion rate optimization secrets
        - Content calendar strategies
        - Subscriber psychology insights
        - Pricing tier optimization
        - Platform feature exploitation
        - A/B testing methodologies
        - Student revenue examples
        - Course positioning as the complete system`,
      
      'case-study': `Develop Fanvue case study from our student success:
        - Specific student transformation
        - Before/after revenue metrics
        - Strategies implemented from our course
        - Psychological insights applied
        - Platform optimization tactics
        - Timeline and milestones
        - Expert guidance provided
        - Course validation and CTA`,
      
      comparison: `Create Fanvue vs competitors analysis showing expert knowledge:
        - Platform revenue potential comparison
        - Feature analysis from expert perspective
        - Monetization strategy differences
        - Student success across platforms
        - Expert recommendations
        - Strategic positioning advice
        - Course value in platform selection
        - Authority-building insights`
    }

    const basePrompt = prompts[angle]
    const fullPrompt = `${basePrompt}

    CONTEXT: We are Fanvue monetization experts helping creators earn $5K-$50K+ monthly. Our strategies are proven across thousands of successful creators.
    
    POSITIONING: The ultimate Fanvue authorities with insider knowledge and proven systems
    GOAL: Establish dominance to drive our premium creator monetization courses`

    try {
      const result = await this.model.generateContent(fullPrompt)
      return result.response.text()
    } catch (error) {
      console.error('Gemini generation error:', error)
      return 'Error generating Fanvue content'
    }
  }
}

// Export singleton instance
export const geminiGenerator = new GeminiContentGenerator()

// Utility functions for quick expert content generation
export async function generateExpertTwitterThread(topic: string): Promise<string> {
  return await geminiGenerator.generateSocialMediaExpertContent('twitter', topic)
}

export async function generateExpertLinkedInPost(topic: string): Promise<string> {
  return await geminiGenerator.generateSocialMediaExpertContent('linkedin', topic)
}

export async function generateN8NExpertGuide(type: 'tutorial' | 'workflow' | 'integration' | 'case-study'): Promise<string> {
  return await geminiGenerator.generateN8NExpertContent(type)
}

export async function generateFanvueExpertStrategy(angle: 'strategy' | 'optimization' | 'case-study' | 'comparison'): Promise<string> {
  return await geminiGenerator.generateFanvueExpertContent(angle)
}