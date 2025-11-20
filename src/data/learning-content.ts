export interface Resource {
    title: string
    type: 'pdf' | 'doc' | 'link'
    url: string
}

export interface ActionItem {
    id: string
    text: string
}

export interface Lesson {
    id: string
    title: string
    duration: string
    type: 'video' | 'text' | 'quiz'
    resources?: Resource[]
    actionItems?: ActionItem[]
}

export interface Module {
    id: string
    title: string
    lessons: Lesson[]
}

export interface CourseContent {
    id: string
    title: string
    description: string
    modules: Module[]
}

export const learningContent: Record<string, CourseContent> = {
    'instagram-ignited': {
        id: 'instagram-ignited',
        title: 'Instagram Ignited',
        description: 'The 0 to 500K Follower System',
        modules: [
            {
                id: 'phase-1',
                title: 'Phase 1: Viral Foundation Blitz (Days 1-7)',
                lessons: [
                    {
                        id: '1-1',
                        title: 'The Viral Hook Framework',
                        duration: '12:45',
                        type: 'video',
                        resources: [
                            { title: 'Viral Hook Templates.pdf', type: 'pdf', url: '#' },
                            { title: 'Hook Swipe File.pdf', type: 'pdf', url: '#' }
                        ],
                        actionItems: [
                            { id: 'a1', text: 'Write 10 hooks using the "Pattern Interrupt" method' },
                            { id: 'a2', text: 'Analyze 5 viral reels in your niche' }
                        ]
                    },
                    {
                        id: '1-2',
                        title: 'Profile Optimization for Conversion',
                        duration: '08:30',
                        type: 'video',
                        actionItems: [
                            { id: 'a1', text: 'Update your bio with the "Who, What, Why" formula' },
                            { id: 'a2', text: 'Create a Highlights cover set' }
                        ]
                    },
                    { id: '1-3', title: 'Setting Up Your Content Studio', duration: '15:00', type: 'video' },
                    { id: '1-4', title: 'Action Item: Create Your First 5 Hooks', duration: '5 min', type: 'text' }
                ]
            },
            {
                id: 'phase-2',
                title: 'Phase 2: Content Explosion (Days 8-14)',
                lessons: [
                    { id: '2-1', title: 'The 3-Second Retention Rule', duration: '10:15', type: 'video' },
                    { id: '2-2', title: 'Batch Creation Workflow', duration: '20:00', type: 'video' },
                    { id: '2-3', title: 'Editing Secrets (CapCut Masterclass)', duration: '25:00', type: 'video' }
                ]
            },
            {
                id: 'phase-3',
                title: 'Phase 3: Algorithmic Takeover (Days 15-21)',
                lessons: [
                    { id: '3-1', title: 'Hitting the Explore Page', duration: '14:20', type: 'video' },
                    { id: '3-2', title: 'The Collaboration Strategy', duration: '11:00', type: 'video' },
                    { id: '3-3', title: 'Analyzing Your Metrics', duration: '18:45', type: 'video' }
                ]
            },
            {
                id: 'phase-4',
                title: 'Phase 4: Monetization Ignition (Days 22-30)',
                lessons: [
                    { id: '4-1', title: 'Your First Brand Deal', duration: '16:30', type: 'video' },
                    { id: '4-2', title: 'Affiliate Marketing Setup', duration: '12:00', type: 'video' },
                    { id: '4-3', title: 'Scaling Beyond 10K', duration: '09:15', type: 'video' }
                ]
            }
        ]
    },
    'ai-influencers': {
        id: 'ai-influencers',
        title: 'AI Influencers Academy',
        description: 'The Virtual Model Empire',
        modules: [
            {
                id: 'mod-1',
                title: 'Module 1: AI Character Creation Mastery',
                lessons: [
                    {
                        id: '1-1',
                        title: 'Introduction to Flux & SDXL',
                        duration: '15:00',
                        type: 'video',
                        resources: [
                            { title: 'Flux Installation Guide.pdf', type: 'pdf', url: '#' },
                            { title: 'Recommended Hardware Specs.txt', type: 'doc', url: '#' }
                        ],
                        actionItems: [
                            { id: 'a1', text: 'Install Flux locally or set up a cloud GPU' },
                            { id: 'a2', text: 'Generate your first 50 test images' }
                        ]
                    },
                    { id: '1-2', title: 'Training LoRA for Consistent Faces', duration: '22:30', type: 'video' },
                    { id: '1-3', title: 'Mastering Skin Textures & Lighting', duration: '18:00', type: 'video' }
                ]
            },
            {
                id: 'mod-2',
                title: 'Module 2: Multi-Media Content Engine',
                lessons: [
                    { id: '2-1', title: 'Generating Viral Dance Videos', duration: '20:00', type: 'video' },
                    { id: '2-2', title: 'AI Voice Cloning & Lip Sync', duration: '15:45', type: 'video' },
                    { id: '2-3', title: 'Ultra-Realistic Image Sets', duration: '12:00', type: 'video' }
                ]
            },
            {
                id: 'mod-3',
                title: 'Module 3: Platform Domination',
                lessons: [
                    { id: '3-1', title: 'Instagram Strategy for AI Models', duration: '14:00', type: 'video' },
                    { id: '3-2', title: 'TikTok Viral Patterns', duration: '16:30', type: 'video' },
                    { id: '3-3', title: 'Fanvue & Subscription Setup', duration: '18:00', type: 'video' }
                ]
            },
            {
                id: 'mod-4',
                title: 'Module 4: Monetization Mastery',
                lessons: [
                    { id: '4-1', title: 'Selling PPV Content', duration: '15:00', type: 'video' },
                    { id: '4-2', title: 'Brand Sponsorships for Virtuals', duration: '12:45', type: 'video' },
                    { id: '4-3', title: 'Subscription Tier Psychology', duration: '14:00', type: 'video' }
                ]
            },
            {
                id: 'mod-5',
                title: 'Module 5: Scaling & Automation',
                lessons: [
                    { id: '5-1', title: 'Managing Multiple Models', duration: '20:00', type: 'video' },
                    { id: '5-2', title: 'Building Your Team (SOPs)', duration: '25:00', type: 'video' }
                ]
            },
            {
                id: 'mod-6',
                title: 'Module 6: Legal & Compliance',
                lessons: [
                    { id: '6-1', title: 'AI Disclosure Rules', duration: '10:00', type: 'video' },
                    { id: '6-2', title: 'Copyright & Ownership', duration: '12:00', type: 'video' }
                ]
            }
        ]
    },
    'digital-products': {
        id: 'digital-products',
        title: 'Digital Products Empire',
        description: 'Build Once, Sell Forever',
        modules: [
            {
                id: 'mod-1',
                title: 'Module 1: Product Idea Validation',
                lessons: [
                    {
                        id: '1-1',
                        title: 'Finding the "Bleeding Neck" Problem',
                        duration: '15:00',
                        type: 'video',
                        actionItems: [
                            { id: 'a1', text: 'List 10 problems your target audience faces daily' },
                            { id: 'a2', text: 'Rank them by "pain intensity" (1-10)' }
                        ]
                    },
                    { id: '1-2', title: 'The Pre-Sell Validation Method', duration: '18:00', type: 'video' }
                ]
            },
            {
                id: 'mod-2',
                title: 'Module 2: High-Converting Product Creation',
                lessons: [
                    { id: '2-1', title: 'Creating Ebooks & Templates', duration: '20:00', type: 'video' },
                    { id: '2-2', title: 'Recording High-Value Video Courses', duration: '22:00', type: 'video' }
                ]
            },
            {
                id: 'mod-3',
                title: 'Module 3: Pricing Psychology Mastery',
                lessons: [
                    { id: '3-1', title: 'The Value Ladder', duration: '15:00', type: 'video' },
                    { id: '3-2', title: 'Anchoring & Decoy Pricing', duration: '12:00', type: 'video' }
                ]
            },
            {
                id: 'mod-4',
                title: 'Module 4: Zero-Ad Launch Strategies',
                lessons: [
                    { id: '4-1', title: 'Building Organic Buzz', duration: '16:00', type: 'video' },
                    {
                        id: '4-2',
                        title: 'The 5-Day Launch Sequence',
                        duration: '20 min',
                        type: 'text',
                        resources: [
                            { title: '5-Day Email Sequence.pdf', type: 'pdf', url: '#' }
                        ],
                        actionItems: [
                            { id: 'a1', text: 'Draft your "Open Cart" email' },
                            { id: 'a2', text: 'Draft your "Last Chance" email' }
                        ]
                    }
                ]
            },
            {
                id: 'mod-5',
                title: 'Module 5: Sales Funnel Automation',
                lessons: [
                    { id: '5-1', title: 'Setting up N8N for Sales', duration: '25:00', type: 'video' },
                    { id: '5-2', title: 'Email Automation Flows', duration: '18:00', type: 'video' }
                ]
            },
            {
                id: 'mod-6',
                title: 'Module 6: Customer Success Systems',
                lessons: [
                    { id: '6-1', title: 'Automated Onboarding', duration: '12:00', type: 'video' },
                    { id: '6-2', title: 'Turning Buyers into Fans', duration: '14:00', type: 'video' }
                ]
            },
            {
                id: 'mod-7',
                title: 'Module 7: Scaling to Multiple Products',
                lessons: [
                    { id: '7-1', title: 'Building the Ecosystem', duration: '15:00', type: 'video' },
                    { id: '7-2', title: 'Cross-Selling Strategies', duration: '12:00', type: 'video' }
                ]
            },
            {
                id: 'mod-8',
                title: 'Module 8: Business Operations',
                lessons: [
                    { id: '8-1', title: 'Hiring Your First VA', duration: '18:00', type: 'video' },
                    { id: '8-2', title: 'Financial Management', duration: '15:00', type: 'video' }
                ]
            }
        ]
    },
    'ai-automations': {
        id: 'ai-automations',
        title: 'AI Automations Reimagined',
        description: 'The 6-Figure Agency Model',
        modules: [
            {
                id: 'mod-1',
                title: 'Module 1: The Agency Foundation',
                lessons: [
                    {
                        id: '1-1',
                        title: 'Agency Mindset & Niche Selection',
                        duration: '15:00',
                        type: 'video',
                        actionItems: [
                            { id: 'a1', text: 'Select one high-value niche (e.g., Real Estate, Dental)' },
                            { id: 'a2', text: 'Define your "Grand Slam Offer"' }
                        ]
                    },
                    { id: '1-2', title: 'Structuring Your Offer', duration: '18:00', type: 'video' }
                ]
            },
            {
                id: 'mod-2',
                title: 'Module 2: The Tech Stack',
                lessons: [
                    {
                        id: '2-1',
                        title: 'N8N vs Zapier vs Make',
                        duration: '20:00',
                        type: 'video',
                        resources: [
                            { title: 'Automation Tools Comparison Chart.pdf', type: 'pdf', url: '#' }
                        ]
                    },
                    { id: '2-2', title: 'Integrating ChatGPT & Claude', duration: '22:00', type: 'video' }
                ]
            },
            {
                id: 'mod-3',
                title: 'Module 3: Service 1 - AI Chatbots',
                lessons: [
                    { id: '3-1', title: 'Building Support Bots', duration: '25:00', type: 'video' },
                    { id: '3-2', title: 'Selling Chatbots to Businesses', duration: '15:00', type: 'video' }
                ]
            },
            {
                id: 'mod-4',
                title: 'Module 4: Service 2 - Workflow Automation',
                lessons: [
                    { id: '4-1', title: 'Internal Ops Automation', duration: '20:00', type: 'video' },
                    { id: '4-2', title: 'Lead Gen Automation', duration: '18:00', type: 'video' }
                ]
            },
            {
                id: 'mod-5',
                title: 'Module 5: Client Acquisition',
                lessons: [
                    { id: '5-1', title: 'Cold Outreach Systems', duration: '20:00', type: 'video' },
                    { id: '5-2', title: 'Inbound Content Strategy', duration: '15:00', type: 'video' }
                ]
            },
            {
                id: 'mod-6',
                title: 'Module 6: Service Delivery',
                lessons: [
                    { id: '6-1', title: 'Retainer Contracts ($2k-$10k/mo)', duration: '12:00', type: 'video' },
                    { id: '6-2', title: 'Reporting & Client Retention', duration: '14:00', type: 'video' }
                ]
            }
        ]
    }
}
