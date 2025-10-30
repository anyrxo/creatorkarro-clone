// HowTo Schema Component - Featured Snippet Optimization for Tutorials
'use client'

interface HowToStep {
  name: string
  text: string
  image?: string
  url?: string
}

interface HowToSchemaProps {
  name: string
  description: string
  steps: HowToStep[]
  totalTime?: string // ISO 8601 duration format (e.g., "PT30M" for 30 minutes)
  estimatedCost?: {
    currency: string
    value: string
  }
  tool?: string[]
  supply?: string[]
  image?: string
  videoUrl?: string
}

export default function HowToSchema({
  name,
  description,
  steps,
  totalTime,
  estimatedCost,
  tool = [],
  supply = [],
  image,
  videoUrl
}: HowToSchemaProps) {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    ...(totalTime && { totalTime }),
    ...(estimatedCost && { estimatedCost }),
    ...(tool.length > 0 && {
      tool: tool.map(t => ({
        '@type': 'HowToTool',
        name: t
      }))
    }),
    ...(supply.length > 0 && {
      supply: supply.map(s => ({
        '@type': 'HowToSupply',
        name: s
      }))
    }),
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image
      }
    }),
    ...(videoUrl && {
      video: {
        '@type': 'VideoObject',
        name,
        description,
        thumbnailUrl: image,
        contentUrl: videoUrl,
        uploadDate: new Date().toISOString()
      }
    }),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && {
        image: {
          '@type': 'ImageObject',
          url: step.image
        }
      }),
      ...(step.url && { url: step.url })
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
    />
  )
}

// Pre-configured HowTo schemas for common tutorials
export const howToSchemas = {
  instagramGrowth: {
    name: 'How to Grow Your Instagram to 10K Followers in 30 Days',
    description: 'Complete step-by-step guide to growing your Instagram account from zero to 10,000 engaged followers in just 30 days using proven strategies.',
    totalTime: 'P30D', // 30 days
    tool: [
      'Instagram App',
      'Content Calendar',
      'Analytics Dashboard',
      'Photo Editing Software',
      'Scheduling Tool'
    ],
    steps: [
      {
        name: 'Optimize Your Profile',
        text: 'Create a compelling bio with clear value proposition, add a professional profile photo, and include a call-to-action link. Use relevant keywords in your name and username for discoverability.'
      },
      {
        name: 'Define Your Content Strategy',
        text: 'Identify your target audience, research trending content in your niche, and create a content calendar with 3-5 posts per week. Mix educational, entertaining, and promotional content.'
      },
      {
        name: 'Create High-Quality Content',
        text: 'Use professional photography or design tools to create visually appealing posts. Write engaging captions that tell stories, ask questions, and encourage interaction. Include 5-10 relevant hashtags.'
      },
      {
        name: 'Post at Optimal Times',
        text: 'Analyze your audience insights to determine when your followers are most active. Schedule posts during peak engagement hours, typically mornings (7-9am) and evenings (7-9pm).'
      },
      {
        name: 'Engage With Your Community',
        text: 'Respond to all comments within the first hour of posting. Engage with accounts in your niche by liking and commenting authentically. Follow relevant accounts and participate in conversations.'
      },
      {
        name: 'Use Instagram Stories Daily',
        text: 'Post 5-10 stories per day showing behind-the-scenes content, quick tips, and engagement stickers (polls, questions, quizzes). This increases visibility and keeps you top-of-mind.'
      },
      {
        name: 'Collaborate and Cross-Promote',
        text: 'Partner with complementary accounts for shoutouts, guest posts, or Instagram Lives. Join engagement pods or communities in your niche for mutual support.'
      },
      {
        name: 'Analyze and Optimize',
        text: 'Review your Instagram Insights weekly to identify top-performing content. Double down on what works and eliminate what doesn\'t. Track follower growth, engagement rate, and reach metrics.'
      }
    ]
  },

  aiInfluencerCreation: {
    name: 'How to Create an AI Influencer with ComfyUI',
    description: 'Step-by-step tutorial on creating a photorealistic AI influencer using ComfyUI, Stable Diffusion, and advanced workflows.',
    totalTime: 'PT2H', // 2 hours
    tool: [
      'ComfyUI',
      'Stable Diffusion XL',
      'ControlNet',
      'Face Restoration Models',
      'GPU (RTX 3060+)'
    ],
    steps: [
      {
        name: 'Install ComfyUI and Dependencies',
        text: 'Download and install ComfyUI, Python, and required dependencies. Download SDXL models and ControlNet weights. Set up your GPU drivers and ensure CUDA is properly configured.'
      },
      {
        name: 'Design Character Concept',
        text: 'Define your AI influencer\'s appearance, personality, and niche. Create a detailed character sheet including age, ethnicity, style, and unique features. Research successful influencer aesthetics in your target niche.'
      },
      {
        name: 'Build Base Workflow',
        text: 'Create a ComfyUI workflow with SDXL base model, refiner, and upscaling nodes. Configure sampling parameters, CFG scale, and steps for optimal quality. Test with basic prompts to ensure setup works.'
      },
      {
        name: 'Add ControlNet for Consistency',
        text: 'Integrate ControlNet nodes to maintain facial features and pose consistency across images. Use reference images to establish your character\'s core identity. Fine-tune ControlNet strength for natural variation.'
      },
      {
        name: 'Generate Character Portfolio',
        text: 'Create 50-100 diverse images of your AI influencer in different settings, outfits, and poses. Maintain consistent lighting, facial features, and style. Build a cohesive aesthetic that defines your brand.'
      },
      {
        name: 'Post-Process and Enhance',
        text: 'Use face restoration models like GFPGAN or CodeFormer to improve facial details. Upscale images to 2K-4K resolution. Apply subtle color grading for professional finish.'
      },
      {
        name: 'Create Content Strategy',
        text: 'Develop a content calendar showing your AI influencer\'s daily life, interests, and expertise. Mix lifestyle shots, educational content, and promotional posts. Maintain authentic storytelling.'
      },
      {
        name: 'Launch and Grow',
        text: 'Start posting consistently (1-2 times daily) on Instagram, TikTok, or other platforms. Engage with audience comments. Collaborate with brands. Scale content production using your optimized workflow.'
      }
    ]
  },

  n8nAutomation: {
    name: 'How to Build Your First N8N Automation Workflow',
    description: 'Complete beginner\'s guide to creating automated workflows with N8N, from installation to deployment.',
    totalTime: 'PT1H', // 1 hour
    estimatedCost: {
      currency: 'USD',
      value: '0'
    },
    tool: [
      'N8N',
      'Docker (optional)',
      'API Keys',
      'Webhook URLs'
    ],
    steps: [
      {
        name: 'Install N8N',
        text: 'Install N8N using npm (npm install n8n -g) or Docker. Start the N8N server and access the interface at localhost:5678. Create your first workflow canvas.'
      },
      {
        name: 'Add Trigger Node',
        text: 'Choose a trigger that starts your workflow: webhook, schedule, or app trigger. Configure the trigger settings. Test the trigger to ensure it activates properly.'
      },
      {
        name: 'Add Processing Nodes',
        text: 'Connect nodes to process your data: HTTP requests, data transformation, conditional logic. Map input/output fields between nodes. Use expressions for dynamic data manipulation.'
      },
      {
        name: 'Integrate APIs',
        text: 'Connect to external services like OpenAI, Google Sheets, Airtable, or webhooks. Add authentication credentials securely. Test each API connection to verify access.'
      },
      {
        name: 'Add Logic and Conditions',
        text: 'Use IF nodes for conditional branching. Add loops for processing arrays. Implement error handling with error triggers. Create fallback paths for failed operations.'
      },
      {
        name: 'Test Your Workflow',
        text: 'Execute the workflow manually to test each step. Check node outputs and debug any errors. Verify data flows correctly through all nodes. Test edge cases and error scenarios.'
      },
      {
        name: 'Activate and Monitor',
        text: 'Save and activate your workflow for production use. Set up error notifications via email or Slack. Monitor execution history and logs. Optimize performance based on usage patterns.'
      },
      {
        name: 'Scale and Optimize',
        text: 'Add more complex logic as needed. Optimize API calls to reduce costs. Create reusable sub-workflows. Document your automation for future reference.'
      }
    ]
  }
}
