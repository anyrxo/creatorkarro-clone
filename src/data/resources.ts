import { learningContent } from './learning-content'

export interface ResourceItem {
    id: string
    title: string
    description: string
    type: 'pdf' | 'doc' | 'spreadsheet' | 'template' | 'tool' | 'prompt' | 'checklist' | 'link'
    category: 'guide' | 'template' | 'tool' | 'checklist'
    downloadUrl?: string
    previewContent?: string // For interactive preview
    courseId: string
    moduleId?: string
    lessonId?: string
}

// Helper to extract all resources from the course content
export const getAllResources = (): ResourceItem[] => {
    const resources: ResourceItem[] = []

    // 1. Extract from existing learningContent (Legacy support)
    Object.values(learningContent).forEach(course => {
        course.modules.forEach(module => {
            module.lessons.forEach(lesson => {
                if (lesson.resources) {
                    lesson.resources.forEach((res, idx) => {
                        resources.push({
                            id: `${course.id}-${module.id}-${lesson.id}-${idx}`,
                            title: res.title,
                            description: `Resource for lesson: ${lesson.title}`,
                            type: res.type === 'pdf' ? 'pdf' : 'doc',
                            category: 'guide',
                            downloadUrl: res.url,
                            courseId: course.id,
                            moduleId: module.id,
                            lessonId: lesson.id
                        })
                    })
                }
            })
        })
    })

    // 2. INJECT GENIUS RESOURCES (The "Insanely Good" Stuff)

    // ==========================================
    // INSTAGRAM IGNITED RESOURCES
    // ==========================================

    // Module 1: Foundation
    resources.push({
        id: 'ig-hook-generator',
        title: 'Viral Hook Generator 3000',
        description: 'Interactive tool to generate 50+ viral hooks based on your niche using proven psychological triggers.',
        type: 'tool',
        category: 'tool',
        courseId: 'instagram-ignited',
        moduleId: 'phase-1',
        previewContent: 'interactive-hook-generator'
    })

    resources.push({
        id: 'ig-bio-optimizer',
        title: 'The Perfect Bio Blueprint',
        description: 'Template to craft a bio that converts visitors into followers instantly.',
        type: 'template',
        category: 'template',
        courseId: 'instagram-ignited',
        moduleId: 'phase-1',
        previewContent: 'bio-optimizer'
    })

    // Module 2: Content Explosion
    resources.push({
        id: 'ig-capcut-shortcuts',
        title: 'CapCut Speed Editing Cheat Sheet',
        description: 'Keyboard shortcuts and workflow hacks to edit reels in 50% less time.',
        type: 'pdf',
        category: 'guide',
        downloadUrl: '#',
        courseId: 'instagram-ignited',
        moduleId: 'phase-2'
    })

    resources.push({
        id: 'ig-content-calendar',
        title: '365-Day Viral Content Calendar',
        description: 'Never run out of ideas. A full year of content prompts mapped to viral trends.',
        type: 'spreadsheet',
        category: 'template',
        downloadUrl: '#',
        courseId: 'instagram-ignited',
        moduleId: 'phase-2'
    })

    // Module 3: Algorithmic Takeover
    resources.push({
        id: 'ig-analytics-tracker',
        title: 'Algorithm Decoder Spreadsheet',
        description: 'Track your metrics to reverse-engineer what the algorithm wants from you.',
        type: 'spreadsheet',
        category: 'tool',
        downloadUrl: '#',
        courseId: 'instagram-ignited',
        moduleId: 'phase-3'
    })

    // Module 4: Monetization
    resources.push({
        id: 'ig-brand-pitch',
        title: 'Brand Deal Pitch Scripts',
        description: 'Copy-paste DM scripts to land your first $1,000 sponsorship.',
        type: 'doc',
        category: 'template',
        courseId: 'instagram-ignited',
        moduleId: 'phase-4',
        previewContent: 'pitch-scripts'
    })

    // ==========================================
    // AI INFLUENCERS ACADEMY RESOURCES
    // ==========================================

    // Module 1: Character Creation
    resources.push({
        id: 'ai-higgsfield-prompts',
        title: 'Higgsfield Master Prompt Library (25+ Ultra-Realistic Prompts)',
        description: 'Professional-grade prompts for generating photo-realistic AI influencer images. Includes lighting, poses, styling, and technical parameters.',
        type: 'prompt',
        category: 'template',
        courseId: 'ai-influencers',
        moduleId: 'mod-1',
        previewContent: 'higgsfield-prompts'
    })

    resources.push({
        id: 'ai-runpod-setup',
        title: 'RunPod GPU Setup Guide',
        description: 'Step-by-step tutorial to set up Flux/SDXL on RunPod cloud GPUs for $0.34/hr.',
        type: 'link',
        category: 'guide',
        downloadUrl: 'https://runpod.io',
        courseId: 'ai-influencers',
        moduleId: 'mod-1'
    })

    resources.push({
        id: 'ai-lora-checklist',
        title: 'LoRA Training Pre-Flight Checklist',
        description: 'Step-by-step guide to training consistent character faces with optimal settings.',
        type: 'checklist',
        category: 'checklist',
        courseId: 'ai-influencers',
        moduleId: 'mod-1',
        previewContent: 'lora-checklist'
    })

    resources.push({
        id: 'ai-flux-models',
        title: 'Top 10 Flux Model Downloads',
        description: 'Curated list of the best Flux checkpoints for realistic human generation.',
        type: 'link',
        category: 'guide',
        downloadUrl: 'https://civitai.com',
        courseId: 'ai-influencers',
        moduleId: 'mod-1'
    })

    // Module 2: Multi-Media Content
    resources.push({
        id: 'ai-voice-settings',
        title: 'ElevenLabs Voice Settings Presets',
        description: 'Optimal stability, clarity, and style settings for ultra-realistic voice cloning.',
        type: 'tool',
        category: 'template',
        courseId: 'ai-influencers',
        moduleId: 'mod-2',
        previewContent: 'voice-settings'
    })

    resources.push({
        id: 'ai-lipsync-guide',
        title: 'Lip Sync Master Guide (Wav2Lip + Roop)',
        description: 'Technical setup for perfect lip-synced AI videos with batch processing.',
        type: 'pdf',
        category: 'guide',
        downloadUrl: '#',
        courseId: 'ai-influencers',
        moduleId: 'mod-2'
    })

    resources.push({
        id: 'ai-heygen-alternative',
        title: 'HeyGen Alternative (Open Source)',
        description: 'Free, self-hosted alternative to HeyGen for AI video avatars.',
        type: 'link',
        category: 'tool',
        downloadUrl: 'https://github.com/OpenTalker/SadTalker',
        courseId: 'ai-influencers',
        moduleId: 'mod-2'
    })

    // Module 3: Platform Domination
    resources.push({
        id: 'ai-fanvue-link',
        title: 'Fanvue Platform Access',
        description: 'Sign up for Fanvue - the #1 platform for monetizing AI influencers.',
        type: 'link',
        category: 'tool',
        downloadUrl: 'https://fanvue.com',
        courseId: 'ai-influencers',
        moduleId: 'mod-3'
    })

    resources.push({
        id: 'ai-fanvue-bios',
        title: 'High-Converting Fanvue Bios',
        description: 'Bio templates proven to drive subscriptions at 8-12% conversion rates.',
        type: 'template',
        category: 'template',
        courseId: 'ai-influencers',
        moduleId: 'mod-3',
        previewContent: 'fanvue-bios'
    })

    resources.push({
        id: 'ai-hashtag-strategy',
        title: 'AI Model Hashtag Strategy Guide',
        description: 'The exact hashtag formula to avoid shadowbans and maximize reach on IG/TikTok.',
        type: 'pdf',
        category: 'guide',
        downloadUrl: '#',
        courseId: 'ai-influencers',
        moduleId: 'mod-3'
    })

    // Module 4: Monetization
    resources.push({
        id: 'ai-ppv-templates',
        title: 'PPV Content Scripts & Prompts',
        description: 'Message templates for PPV content that converts at 40%+ open rates.',
        type: 'doc',
        category: 'template',
        downloadUrl: '#',
        courseId: 'ai-influencers',
        moduleId: 'mod-4'
    })

    resources.push({
        id: 'ai-pricing-tiers',
        title: 'Subscription Pricing Psychology Sheet',
        description: 'Data-backed pricing tiers that maximize LTV ($9.99 vs $19.99 vs $49.99).',
        type: 'spreadsheet',
        category: 'template',
        downloadUrl: '#',
        courseId: 'ai-influencers',
        moduleId: 'mod-4'
    })

    // Module 5: Scaling
    resources.push({
        id: 'ai-chatbot-automation',
        title: 'AI Chatbot for DMs (N8N Workflow)',
        description: 'Automate subscriber messaging with GPT-powered personality bots.',
        type: 'doc',
        category: 'tool',
        downloadUrl: '#',
        courseId: 'ai-influencers',
        moduleId: 'mod-5'
    })

    // Module 6: Legal
    resources.push({
        id: 'ai-legal-disclosure',
        title: 'AI Disclosure Template',
        description: 'Compliant disclosure statements for all platforms (IG, TikTok, Fanvue).',
        type: 'doc',
        category: 'template',
        downloadUrl: '#',
        courseId: 'ai-influencers',
        moduleId: 'mod-6'
    })

    // ==========================================
    // DIGITAL PRODUCTS EMPIRE RESOURCES
    // ==========================================

    // Module 1: Validation
    resources.push({
        id: 'dp-niche-validator',
        title: 'Niche Profitability Scorecard',
        description: 'Calculator to determine if your product idea is a goldmine or a dud.',
        type: 'tool',
        category: 'tool',
        courseId: 'digital-products',
        moduleId: 'mod-1',
        previewContent: 'niche-validator'
    })


    resources.push({
        id: 'dp-course-outline',
        title: 'Best-Selling Course Outline',
        description: 'The exact curriculum structure used by 7-figure course creators.',
        type: 'template',
        category: 'template',
        courseId: 'digital-products',
        moduleId: 'mod-2',
        previewContent: 'course-outline'
    })

    // Module 3: Pricing
    resources.push({
        id: 'dp-pricing-calculator',
        title: 'Launch Revenue Calculator',
        description: 'Simulate your launch earnings based on price points and conversion rates.',
        type: 'tool',
        category: 'tool',
        courseId: 'digital-products',
        moduleId: 'mod-3',
        previewContent: 'interactive-launch-calculator'
    })

    // Module 4: Launch
    resources.push({
        id: 'dp-email-swipes',
        title: 'Million Dollar Email Swipes',
        description: 'The exact 5-day email sequence that generated 6-figures.',
        type: 'doc',
        category: 'template',
        courseId: 'digital-products',
        moduleId: 'mod-4',
        previewContent: 'email-swipes'
    })

    // Module 5: Funnels
    resources.push({
        id: 'dp-funnel-map',
        title: 'High-Ticket Funnel Map',
        description: 'Visual diagram of a perfect sales funnel structure.',
        type: 'pdf',
        category: 'guide',
        downloadUrl: '#',
        courseId: 'digital-products',
        moduleId: 'mod-5'
    })

    // Module 6: Customer Success
    resources.push({
        id: 'dp-onboarding-checklist',
        title: 'Perfect Onboarding Checklist',
        description: 'Ensure your new students succeed with this step-by-step onboarding flow.',
        type: 'checklist',
        category: 'checklist',
        courseId: 'digital-products',
        moduleId: 'mod-6',
        previewContent: 'onboarding-checklist'
    })

    // Module 7: Scaling
    resources.push({
        id: 'dp-upsell-matrix',
        title: 'The Upsell Logic Map',
        description: 'Strategic framework to decide which products to pitch next.',
        type: 'pdf',
        category: 'guide',
        downloadUrl: '#',
        courseId: 'digital-products',
        moduleId: 'mod-7'
    })

    // Module 8: Operations
    resources.push({
        id: 'dp-hiring-guide',
        title: 'VA Hiring Job Description',
        description: 'Copy-paste job post to find a rockstar Virtual Assistant.',
        type: 'doc',
        category: 'template',
        courseId: 'digital-products',
        moduleId: 'mod-8',
        previewContent: 'va-job-desc'
    })

    // ==========================================
    // AI AUTOMATIONS REIMAGINED RESOURCES
    // ==========================================

    // Module 1: Foundation
    resources.push({
        id: 'aa-niche-list',
        title: 'Top 50 Agency Niches List',
        description: 'Curated list of industries with high budgets and low AI adoption.',
        type: 'pdf',
        category: 'guide',
        downloadUrl: '#',
        courseId: 'ai-automations',
        moduleId: 'mod-1'
    })

    // Module 2: Tech Stack
    resources.push({
        id: 'aa-n8n-blueprints',
        title: 'N8N Master Blueprints Pack',
        description: 'Copy-paste JSON workflows for common automation tasks.',
        type: 'tool',
        category: 'tool',
        courseId: 'ai-automations',
        moduleId: 'mod-2',
        previewContent: 'n8n-blueprints'
    })

    // Module 3: Chatbots
    resources.push({
        id: 'aa-system-prompt',
        title: 'Chatbot Personality Architect',
        description: 'Generate robust system prompts to give your AI agents a specific persona.',
        type: 'tool',
        category: 'tool',
        courseId: 'ai-automations',
        moduleId: 'mod-3',
        previewContent: 'system-prompt-gen'
    })

    // Module 4: Workflows
    resources.push({
        id: 'aa-automation-checklist',
        title: 'Workflow Pre-Flight Checklist',
        description: 'Never break a live automation again. Run this check before activating.',
        type: 'checklist',
        category: 'checklist',
        courseId: 'ai-automations',
        moduleId: 'mod-4',
        previewContent: 'automation-checklist'
    })

    // Module 5: Client Acquisition
    resources.push({
        id: 'aa-outreach-generator',
        title: 'Cold Email Script Generator',
        description: 'Generate personalized cold outreach emails for local businesses.',
        type: 'tool',
        category: 'tool',
        courseId: 'ai-automations',
        moduleId: 'mod-5',
        previewContent: 'outreach-generator'
    })

    // Module 6: Delivery
    resources.push({
        id: 'aa-roi-calculator',
        title: 'Client ROI Calculator',
        description: 'Show clients exactly how much money your automation will save them.',
        type: 'tool',
        category: 'tool',
        courseId: 'ai-automations',
        moduleId: 'mod-6',
        previewContent: 'roi-calculator'
    })

    // ==========================================
    // DIGITAL PRODUCTS EMPIRE RESOURCES
    // ==========================================

    // Module 1: Product Validation
    resources.push({
        id: 'dp-niche-validator',
        title: 'Niche Validator Tool',
        description: 'Interactive tool to validate product ideas before you build. Score your niche on 10 critical factors.',
        type: 'tool',
        category: 'tool',
        courseId: 'digital-products',
        moduleId: 'mod-1',
        previewContent: 'niche-validator'
    })

    resources.push({
        id: 'dp-pain-research',
        title: 'Pain Point Research Template',
        description: 'Systematic framework to discover what your audience desperately wants to buy.',
        type: 'spreadsheet',
        category: 'template',
        downloadUrl: '#',
        courseId: 'digital-products',
        moduleId: 'mod-1'
    })

    // Module 2: Product Creation
    resources.push({
        id: 'dp-course-outline',
        title: 'Course Outline Builder',
        description: 'Build a compelling course structure in 15 minutes. Proven framework used for $10k+ courses.',
        type: 'tool',
        category: 'tool',
        courseId: 'digital-products',
        moduleId: 'mod-2',
        previewContent: 'course-outline'
    })

    resources.push({
        id: 'dp-ebook-templates',
        title: 'Professional Ebook Template Pack',
        description: '5 ready-to-use ebook layouts in Canva. Just add your content and export.',
        type: 'template',
        category: 'template',
        downloadUrl: '#',
        courseId: 'digital-products',
        moduleId: 'mod-2'
    })

    // Module 3: Pricing Psychology
    resources.push({
        id: 'dp-value-ladder',
        title: 'Value Ladder Calculator',
        description: 'Calculate your perfect pricing tiers from $27 to $2,997 based on perceived value.',
        type: 'tool',
        category: 'tool',
        downloadUrl: '#',
        courseId: 'digital-products',
        moduleId: 'mod-3'
    })

    // Module 4: Launch Strategies
    resources.push({
        id: 'dp-launch-calculator',
        title: 'Interactive Launch Calculator',
        description: 'Predict your launch revenue based on list size, open rate, and conversion rate.',
        type: 'tool',
        category: 'tool',
        courseId: 'digital-products',
        moduleId: 'mod-4',
        previewContent: 'interactive-launch-calculator'
    })

    resources.push({
        id: 'dp-email-swipes',
        title: 'Launch Email Swipe File',
        description: '15 proven email templates for your product launch sequence. 30%+ open rates guaranteed.',
        type: 'template',
        category: 'template',
        courseId: 'digital-products',
        moduleId: 'mod-4',
        previewContent: 'email-swipes'
    })

    // Module 5: Sales Funnel Automation
    resources.push({
        id: 'dp-n8n-blueprints',
        title: 'N8N Sales Funnel Blueprints',
        description: 'Pre-built workflows for cart abandonment, upsells, and customer onboarding.',
        type: 'template',
        category: 'tool',
        courseId: 'digital-products',
        moduleId: 'mod-5',
        previewContent: 'n8n-blueprints'
    })

    // Module 6: Customer Success
    resources.push({
        id: 'dp-onboarding-checklist',
        title: 'Customer Onboarding Checklist',
        description: 'First 48 hours checklist that turns buyers into raving fans.',
        type: 'checklist',
        category: 'checklist',
        courseId: 'digital-products',
        moduleId: 'mod-6',
        previewContent: 'onboarding-checklist'
    })

    // Module 8: Business Operations
    resources.push({
        id: 'dp-va-job-desc',
        title: 'VA Job Description Template',
        description: 'Ready-to-post job description to hire your first virtual assistant for $5-$10/hr.',
        type: 'template',
        category: 'template',
        courseId: 'digital-products',
        moduleId: 'mod-8',
        previewContent: 'va-job-desc'
    })

    // ==========================================
    // AI AUTOMATIONS AGENCY RESOURCES
    // ==========================================

    // Module 1: Agency Foundation
    resources.push({
        id: 'aa-niche-quiz',
        title: 'Niche Selection Validator',
        description: 'Find the most profitable niche for your automation agency in 5 minutes.',
        type: 'tool',
        category: 'tool',
        courseId: 'ai-automations',
        moduleId: 'mod-1'
    })

    resources.push({
        id: 'aa-offer-template',
        title: 'Grand Slam Offer Template',
        description: 'The exact offer framework that lands $5k-$15k retainer clients.',
        type: 'template',
        category: 'template',
        downloadUrl: '#',
        courseId: 'ai-automations',
        moduleId: 'mod-1'
    })

    // Module 2: Tech Stack
    resources.push({
        id: 'aa-tool-comparison',
        title: 'Automation Tools Comparison Chart',
        description: 'N8N vs Zapier vs Make - which one to use for each use case.',
        type: 'pdf',
        category: 'guide',
        downloadUrl: '#',
        courseId: 'ai-automations',
        moduleId: 'mod-2'
    })

    // Module 3: AI Chatbots
    resources.push({
        id: 'aa-chatbot-blueprints',
        title: 'Chatbot Blueprint Library',
        description: '10 ready-to-deploy chatbot templates for support, sales, and lead gen.',
        type: 'template',
        category: 'template',
        downloadUrl: '#',
        courseId: 'ai-automations',
        moduleId: 'mod-3'
    })

    resources.push({
        id: 'aa-system-prompt-gen',
        title: 'System Prompt Generator',
        description: 'Create perfect chatbot personalities for any business in 30 seconds.',
        type: 'tool',
        category: 'tool',
        courseId: 'ai-automations',
        moduleId: 'mod-3',
        previewContent: 'system-prompt-gen'
    })

    // Module 4: Workflow Automation
    resources.push({
        id: 'aa-automation-checklist',
        title: 'Workflow Automation Checklist',
        description: '50-point audit to find automation opportunities in any business.',
        type: 'checklist',
        category: 'checklist',
        courseId: 'ai-automations',
        moduleId: 'mod-4',
        previewContent: 'automation-checklist'
    })

    // Module 5: Client Acquisition
    resources.push({
        id: 'aa-outreach-generator',
        title: 'Cold Outreach Message Generator',
        description: 'AI-powered tool that writes personalized outreach messages with 40%+ reply rates.',
        type: 'tool',
        category: 'tool',
        courseId: 'ai-automations',
        moduleId: 'mod-5',
        previewContent: 'outreach-generator'
    })

    resources.push({
        id: 'aa-roi-calculator',
        title: 'ROI Calculator for Prospects',
        description: 'Show prospects exactly how much money they\'ll save with automation. Closes 60%+ of demos.',
        type: 'tool',
        category: 'tool',
        courseId: 'ai-automations',
        moduleId: 'mod-5',
        previewContent: 'roi-calculator'
    })

    resources.push({
        id: 'aa-proposal-templates',
        title: 'Proposal Template Pack',
        description: '5 proven proposals for different automation services ($2k-$15k range).',
        type: 'template',
        category: 'template',
        downloadUrl: '#',
        courseId: 'ai-automations',
        moduleId: 'mod-5'
    })

    // Module 6: Service Delivery
    resources.push({
        id: 'aa-retainer-contract',
        title: 'Retainer Contract Template',
        description: 'Lawyer-approved contract template protecting you and your client.',
        type: 'doc',
        category: 'template',
        downloadUrl: '#',
        courseId: 'ai-automations',
        moduleId: 'mod-6'
    })

    resources.push({
        id: 'aa-client-reporting',
        title: 'Client Reporting Dashboard',
        description: 'Automated monthly report showing ROI, time saved, and automation performance.',
        type: 'spreadsheet',
        category: 'tool',
        downloadUrl: '#',
        courseId: 'ai-automations',
        moduleId: 'mod-6'
    })

    return resources
}


export const getResourcesByCourse = (courseId: string) => {
    return getAllResources().filter(r => r.courseId === courseId)
}
