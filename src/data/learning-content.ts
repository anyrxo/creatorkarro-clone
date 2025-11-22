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
                title: 'Phase 1: The Foundation (Mindset & Setup)',
                lessons: [
                    {
                        id: '1-1',
                        title: 'The Creator Mindset',
                        duration: '15:00',
                        type: 'video',
                        actionItems: [
                            { id: 'a1', text: 'Commit to the "90 Day Rule" (Post daily for 90 days)' },
                            { id: 'a2', text: 'Define your "Why" statement' }
                        ]
                    },
                    {
                        id: '1-2',
                        title: 'Niche Down to Blow Up',
                        duration: '20:00',
                        type: 'video',
                        resources: [
                            { title: 'Niche Finder Worksheet.pdf', type: 'pdf', url: '#' }
                        ],
                        actionItems: [
                            { id: 'a1', text: 'Identify your sub-niche using the "Blue Ocean" framework' }
                        ]
                    },
                    {
                        id: '1-3',
                        title: 'Profile Optimization',
                        duration: '18:00',
                        type: 'video',
                        resources: [
                            { title: 'Bio Optimizer Tool', type: 'link', url: '#' }
                        ],
                        actionItems: [
                            { id: 'a1', text: 'Rewrite your bio using the "Who/What/Why" formula' },
                            { id: 'a2', text: 'Create a Highlights cover set' }
                        ]
                    },
                    {
                        id: '1-4',
                        title: 'Studio Setup (Pro Audio/Video for $0)',
                        duration: '25:00',
                        type: 'video',
                        resources: [
                            { title: 'Gear Guide (Low/Mid/High Budget).pdf', type: 'pdf', url: '#' }
                        ],
                        actionItems: [
                            { id: 'a1', text: 'Set up your filming corner' },
                            { id: 'a2', text: 'Record a 10-second test clip' }
                        ]
                    }
                ]
            },
            {
                id: 'phase-2',
                title: 'Phase 2: The Viral Science (Psychology)',
                lessons: [
                    {
                        id: '2-1',
                        title: 'The Viral Hook Framework',
                        duration: '15:00',
                        type: 'video',
                        resources: [
                            { title: 'Viral Hook Generator', type: 'link', url: '#' }
                        ],
                        actionItems: [
                            { id: 'a1', text: 'Generate 10 hooks using the tool' }
                        ]
                    },
                    {
                        id: '2-2',
                        title: 'The Psychology of Shares',
                        duration: '12:00',
                        type: 'video',
                        actionItems: [
                            { id: 'a1', text: 'Analyze 3 viral videos and identify why they were shared' }
                        ]
                    },
                    {
                        id: '2-3',
                        title: 'Controversy & Polarization',
                        duration: '14:00',
                        type: 'video'
                    },
                    {
                        id: '2-4',
                        title: 'Storytelling Structures',
                        duration: '18:00',
                        type: 'video',
                        resources: [
                            { title: 'Story Arc Template.pdf', type: 'pdf', url: '#' }
                        ]
                    }
                ]
            },
            {
                id: 'phase-3',
                title: 'Phase 3: Content Engineering (Production)',
                lessons: [
                    { id: '3-1', title: 'Infinite Ideation (The Content Matrix)', duration: '20:00', type: 'video' },
                    { id: '3-2', title: 'Scripting for Retention', duration: '22:00', type: 'video' },
                    { id: '3-3', title: 'Batch Filming Workflow', duration: '25:00', type: 'video' },
                    { id: '3-4', title: 'Editing Masterclass (CapCut)', duration: '30:00', type: 'video' }
                ]
            },
            {
                id: 'phase-4',
                title: 'Phase 4: The Algorithm Decoded (Growth)',
                lessons: [
                    { id: '4-1', title: 'SEO & Hashtags', duration: '15:00', type: 'video' },
                    { id: '4-2', title: 'Posting Times & Frequency', duration: '10:00', type: 'video' },
                    { id: '4-3', title: 'Analyzing Metrics', duration: '20:00', type: 'video' },
                    { id: '4-4', title: 'The "Explore Page" Hack', duration: '12:00', type: 'video' }
                ]
            },
            {
                id: 'phase-5',
                title: 'Phase 5: Community & Sales (Monetization)',
                lessons: [
                    { id: '5-1', title: 'Story Selling', duration: '18:00', type: 'video' },
                    { id: '5-2', title: 'Building a Cult', duration: '15:00', type: 'video' },
                    { id: '5-3', title: 'Affiliate Marketing ($0 to $1k/mo)', duration: '20:00', type: 'video' },
                    { id: '5-4', title: 'Brand Deals & Negotiation', duration: '25:00', type: 'video' }
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
                title: 'Module 1: The Tech Stack',
                lessons: [
                    { id: '1-1', title: 'Flux & SDXL Setup', duration: '20:00', type: 'video' },
                    { id: '1-2', title: 'Hardware Requirements (GPU Guide)', duration: '15:00', type: 'video' },
                    { id: '1-3', title: 'Prompt Engineering 101', duration: '25:00', type: 'video' },
                    {
                        id: '1-4',
                        title: 'Navigating CivitAI & HuggingFace',
                        duration: '15:00',
                        type: 'video',
                        actionItems: [
                            { id: 'a1', text: 'Create a CivitAI account' },
                            { id: 'a2', text: 'Download your first Checkpoint (Model)' },
                            { id: 'a3', text: 'Download a LoRA for style' }
                        ],
                        resources: [
                            { title: 'CivitAI (Model Repository)', type: 'link', url: 'https://civitai.com' },
                            { title: 'HuggingFace (The AI Hub)', type: 'link', url: 'https://huggingface.co' }
                        ]
                    }
                ]
            },
            {
                id: 'mod-2',
                title: 'Module 2: Character Design',
                lessons: [
                    { id: '2-1', title: 'Creating the Persona', duration: '20:00', type: 'video' },
                    { id: '2-2', title: 'Consistent Faces (LoRA Training)', duration: '30:00', type: 'video' },
                    { id: '2-3', title: 'Body Consistency (ControlNet)', duration: '25:00', type: 'video' }
                ]
            },
            {
                id: 'mod-3',
                title: 'Module 3: Content Production',
                lessons: [
                    { id: '3-1', title: 'Photorealism Secrets', duration: '22:00', type: 'video' },
                    { id: '3-2', title: 'AI Video Generation (Kling/Runway)', duration: '20:00', type: 'video' },
                    { id: '3-3', title: 'Voice Cloning (ElevenLabs)', duration: '15:00', type: 'video' },
                    { id: '3-4', title: 'Deepfakes & Face Swap (Akool)', duration: '18:00', type: 'video' },
                    {
                        id: '3-5',
                        title: 'Lip Sync Perfected (Wav2Lip)',
                        duration: '20:00',
                        type: 'video',
                        resources: [
                            { title: 'Wav2Lip Colab Notebook', type: 'link', url: 'https://colab.research.google.com/drive/1tZpDWXz49W6wIS-yJCVseVyUXNkSpO_W' },
                            { title: 'SadTalker (Alternative)', type: 'link', url: 'https://github.com/OpenTalker/SadTalker' }
                        ],
                        actionItems: [
                            { id: 'a1', text: 'Record a voiceover' },
                            { id: 'a2', text: 'Generate a lip-sync video using Wav2Lip' }
                        ]
                    }
                ]
            },
            {
                id: 'mod-4',
                title: 'Module 4: Social Strategy',
                lessons: [
                    { id: '4-1', title: 'The "Thirst Trap" Funnel', duration: '15:00', type: 'video' },
                    { id: '4-2', title: 'Twitter/X Strategy', duration: '18:00', type: 'video' },
                    { id: '4-3', title: 'TikTok Viral Patterns', duration: '20:00', type: 'video' }
                ]
            },
            {
                id: 'mod-5',
                title: 'Module 5: Monetization (Fanvue/OF)',
                lessons: [
                    { id: '5-1', title: 'Platform Setup (Fanvue vs OF)', duration: '20:00', type: 'video' },
                    { id: '5-2', title: 'Subscription Psychology', duration: '15:00', type: 'video' },
                    { id: '5-3', title: 'PPV (Pay-Per-View) Strategy', duration: '25:00', type: 'video' },
                    { id: '5-4', title: 'Chatting Scripts (High Conversion)', duration: '30:00', type: 'video' }
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
                title: 'Module 1: Validation',
                lessons: [
                    { id: '1-1', title: 'Finding the "Bleeding Neck" Problem', duration: '20:00', type: 'video' },
                    { id: '1-2', title: 'The "Pre-Sell" Method', duration: '15:00', type: 'video' },
                    { id: '1-3', title: 'Competitor Analysis', duration: '18:00', type: 'video' }
                ]
            },
            {
                id: 'mod-2',
                title: 'Module 2: Product Creation',
                lessons: [
                    { id: '2-1', title: 'The Ebook/Guide Blueprint', duration: '25:00', type: 'video' },
                    { id: '2-2', title: 'Course Recording Masterclass', duration: '30:00', type: 'video' },
                    { id: '2-3', title: 'Template Creation (Notion/Canva)', duration: '20:00', type: 'video' }
                ]
            },
            {
                id: 'mod-3',
                title: 'Module 3: The Funnel',
                lessons: [
                    { id: '3-1', title: 'Landing Page Psychology', duration: '25:00', type: 'video' },
                    { id: '3-2', title: 'The Lead Magnet', duration: '15:00', type: 'video' },
                    { id: '3-3', title: 'Email Automation (Welcome Sequence)', duration: '20:00', type: 'video' }
                ]
            },
            {
                id: 'mod-4',
                title: 'Module 4: Traffic & Launch',
                lessons: [
                    { id: '4-1', title: 'Organic Launch Strategy', duration: '20:00', type: 'video' },
                    { id: '4-2', title: 'The 5-Day Email Launch', duration: '25:00', type: 'video' },
                    { id: '4-3', title: 'Paid Ads (Meta) for Scale', duration: '30:00', type: 'video' }
                ]
            },
            {
                id: 'mod-5',
                title: 'Module 5: High-Ticket Backend',
                lessons: [
                    { id: '5-1', title: 'The Value Ladder', duration: '15:00', type: 'video' },
                    { id: '5-2', title: 'Coaching & Masterminds', duration: '20:00', type: 'video' },
                    { id: '5-3', title: 'Community Building (Skool)', duration: '25:00', type: 'video' }
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
                title: 'Module 1: Foundation',
                lessons: [
                    { id: '1-1', title: 'The Agency Model (Service vs SaaS)', duration: '20:00', type: 'video' },
                    { id: '1-2', title: 'Niche Selection', duration: '15:00', type: 'video' },
                    { id: '1-3', title: 'The "Grand Slam Offer"', duration: '25:00', type: 'video' }
                ]
            },
            {
                id: 'mod-2',
                title: 'Module 2: The Toolkit',
                lessons: [
                    { id: '2-1', title: 'N8N Mastery', duration: '30:00', type: 'video' },
                    { id: '2-2', title: 'Make.com vs Zapier', duration: '20:00', type: 'video' },
                    { id: '2-3', title: 'OpenAI API (Assistants)', duration: '25:00', type: 'video' }
                ]
            },
            {
                id: 'mod-3',
                title: 'Module 3: Service: AI Chatbots',
                lessons: [
                    { id: '3-1', title: 'Customer Support Bots', duration: '25:00', type: 'video' },
                    { id: '3-2', title: 'Lead Qualification Bots', duration: '20:00', type: 'video' },
                    { id: '3-3', title: 'Voice Agents (Vapi)', duration: '30:00', type: 'video' }
                ]
            },
            {
                id: 'mod-4',
                title: 'Module 4: Service: Internal Ops',
                lessons: [
                    { id: '4-1', title: 'Lead Scraping & Enrichment', duration: '25:00', type: 'video' },
                    { id: '4-2', title: 'Content Automation Systems', duration: '20:00', type: 'video' },
                    { id: '4-3', title: 'CRM Automations', duration: '15:00', type: 'video' }
                ]
            },
            {
                id: 'mod-5',
                title: 'Module 5: Sales & Delivery',
                lessons: [
                    { id: '5-1', title: 'Cold Outreach Systems', duration: '25:00', type: 'video' },
                    { id: '5-2', title: 'The Sales Call', duration: '30:00', type: 'video' },
                    { id: '5-3', title: 'Client Onboarding', duration: '20:00', type: 'video' }
                ]
            }
        ]
    }
}
