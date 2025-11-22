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
    },

    // 🎁 BONUS COURSE: Futures Trading Mastery
    'futures-trading': {
        id: 'futures-trading',
        title: 'Futures Trading Mastery',
        description: '💰 BONUS COURSE: The Prop Firm Profit System - Make Your First $5K in 30 Days Guaranteed',
        modules: [
            {
                id: 'mod-1',
                title: 'Module 1: Trading Foundation & Mindset',
                lessons: [
                    {
                        id: '1-1',
                        title: 'The Trader Psychology Blueprint',
                        duration: '25:00',
                        type: 'video',
                        actionItems: [
                            { id: 'a1', text: 'Complete the Trader Psychology Self-Assessment' },
                            { id: 'a2', text: 'Set up your trading journal template' },
                            { id: 'a3', text: 'Write down your "Why" for trading' }
                        ],
                        resources: [
                            { title: 'Trader Psychology Checklist', type: 'pdf', url: '#' },
                            { title: 'Daily Trading Journal Template', type: 'doc', url: '#' }
                        ]
                    },
                    {
                        id: '1-2',
                        title: 'Futures Markets Explained',
                        duration: '20:00',
                        type: 'video',
                        actionItems: [
                            { id: 'a1', text: 'Open a demo trading account' },
                            { id: 'a2', text: 'Practice placing orders on demo' }
                        ]
                    },
                    {
                        id: '1-3',
                        title: 'Understanding Leverage & Margin',
                        duration: '18:00',
                        type: 'video',
                        actionItems: [
                            { id: 'a1', text: 'Calculate position sizes for different account balances' },
                            { id: 'a2', text: 'Complete leverage quiz' }
                        ],
                        resources: [
                            { title: 'Position Size Calculator', type: 'link', url: '#' },
                            { title: 'Leverage Guide PDF', type: 'pdf', url: '#' }
                        ]
                    },
                    {
                        id: '1-4',
                        title: 'Common Beginner Mistakes (And How to Avoid Them)',
                        duration: '22:00',
                        type: 'video'
                    }
                ]
            },
            {
                id: 'mod-2',
                title: 'Module 2: Prop Firms & Funding',
                lessons: [
                    {
                        id: '2-1',
                        title: 'What Are Prop Firms? (Complete Overview)',
                        duration: '20:00',
                        type: 'video',
                        actionItems: [
                            { id: 'a1', text: 'Research top 5 prop firms' },
                            { id: 'a2', text: 'Compare their challenge requirements' }
                        ],
                        resources: [
                            { title: 'Prop Firm Comparison Sheet', type: 'doc', url: '#' },
                            { title: 'Top 10 Prop Firms 2024', type: 'pdf', url: '#' }
                        ]
                    },
                    {
                        id: '2-2',
                        title: 'Choosing the Right Prop Firm for YOU',
                        duration: '25:00',
                        type: 'video',
                        actionItems: [
                            { id: 'a1', text: 'Select your target prop firm' },
                            { id: 'a2', text: 'Sign up for demo account' }
                        ]
                    },
                    {
                        id: '2-3',
                        title: 'Passing Prop Firm Challenges (The Blueprint)',
                        duration: '30:00',
                        type: 'video',
                        actionItems: [
                            { id: 'a1', text: 'Create your challenge game plan' },
                            { id: 'a2', text: 'Set realistic profit targets' }
                        ],
                        resources: [
                            { title: 'Challenge Passing Framework', type: 'pdf', url: '#' },
                            { title: 'Daily Trading Plan Template', type: 'doc', url: '#' }
                        ]
                    },
                    {
                        id: '2-4',
                        title: 'The $5K/Month System (Our Proven Strategy)',
                        duration: '35:00',
                        type: 'video',
                        actionItems: [
                            { id: 'a1', text: 'Map out your 30-day action plan' },
                            { id: 'a2', text: 'Calculate expected monthly returns' },
                            { id: 'a3', text: 'Set up tracking spreadsheet' }
                        ],
                        resources: [
                            { title: '$5K Month Roadmap', type: 'pdf', url: '#' },
                            { title: 'Profit Tracking Spreadsheet', type: 'doc', url: '#' }
                        ]
                    }
                ]
            },
            {
                id: 'mod-3',
                title: 'Module 3: Risk Management Mastery',
                lessons: [
                    {
                        id: '3-1',
                        title: 'The 1% Rule (Never Blow Your Account)',
                        duration: '20:00',
                        type: 'video',
                        actionItems: [
                            { id: 'a1', text: 'Calculate your max risk per trade' },
                            { id: 'a2', text: 'Set up stop-loss alerts' }
                        ],
                        resources: [
                            { title: 'Risk Calculator Tool', type: 'link', url: '#' }
                        ]
                    },
                    {
                        id: '3-2',
                        title: 'Position Sizing for Consistent Profits',
                        duration: '25:00',
                        type: 'video',
                        actionItems: [
                            { id: 'a1', text: 'Use position sizing calculator for next 10 trades' }
                        ],
                        resources: [
                            { title: 'Position Sizing Cheat Sheet', type: 'pdf', url: '#' }
                        ]
                    },
                    {
                        id: '3-3',
                        title: 'Risk:Reward Ratios Explained',
                        duration: '22:00',
                        type: 'video',
                        actionItems: [
                            { id: 'a1', text: 'Calculate R:R for your last 5 trades' },
                            { id: 'a2', text: 'Set minimum R:R for future trades' }
                        ]
                    },
                    {
                        id: '3-4',
                        title: 'Managing Multiple Positions',
                        duration: '18:00',
                        type: 'video'
                    },
                    {
                        id: '3-5',
                        title: 'When to Cut Losses vs Hold',
                        duration: '20:00',
                        type: 'video',
                        actionItems: [
                            { id: 'a1', text: 'Create your exit strategy checklist' }
                        ]
                    }
                ]
            },
            {
                id: 'mod-4',
                title: 'Module 4: The Trading Strategy',
                lessons: [
                    {
                        id: '4-1',
                        title: 'Market Structure & Trend Analysis',
                        duration: '30:00',
                        type: 'video',
                        actionItems: [
                            { id: 'a1', text: 'Identify trends on 5 different charts' },
                            { id: 'a2', text: 'Mark key support/resistance levels' }
                        ]
                    },
                    {
                        id: '4-2',
                        title: 'High-Probability Entry Setups',
                        duration: '35:00',
                        type: 'video',
                        actionItems: [
                            { id: 'a1', text: 'Practice identifying setups on demo' },
                            { id: 'a2', text: 'Screenshot 10 valid setups' }
                        ],
                        resources: [
                            { title: 'Entry Setup Checklist', type: 'pdf', url: '#' },
                            { title: 'Chart Pattern Guide', type: 'pdf', url: '#' }
                        ]
                    },
                    {
                        id: '4-3',
                        title: 'The Scalping Strategy (Quick Profits)',
                        duration: '28:00',
                        type: 'video'
                    },
                    {
                        id: '4-4',
                        title: 'The Swing Trading Strategy (Less Screen Time)',
                        duration: '30:00',
                        type: 'video'
                    },
                    {
                        id: '4-5',
                        title: 'Reading Price Action Like a Pro',
                        duration: '32:00',
                        type: 'video',
                        actionItems: [
                            { id: 'a1', text: 'Analyze 20 candlestick patterns' }
                        ]
                    }
                ]
            },
            {
                id: 'mod-5',
                title: 'Module 5: Performance Tracking & Optimization',
                lessons: [
                    {
                        id: '5-1',
                        title: 'The Power of Trading Journals',
                        duration: '20:00',
                        type: 'video',
                        actionItems: [
                            { id: 'a1', text: 'Journal your next 20 trades in detail' },
                            { id: 'a2', text: 'Screenshot every entry and exit' }
                        ],
                        resources: [
                            { title: 'Professional Trading Journal Template', type: 'doc', url: '#' },
                            { title: 'Trade Review Checklist', type: 'pdf', url: '#' }
                        ]
                    },
                    {
                        id: '5-2',
                        title: 'Calculating Win Rate & Profit Factor',
                        duration: '18:00',
                        type: 'video',
                        actionItems: [
                            { id: 'a1', text: 'Calculate your stats for last 50 trades' },
                            { id: 'a2', text: 'Set performance improvement goals' }
                        ],
                        resources: [
                            { title: 'Trading Stats Calculator', type: 'link', url: '#' }
                        ]
                    },
                    {
                        id: '5-3',
                        title: 'Weekly Performance Reviews',
                        duration: '22:00',
                        type: 'video',
                        actionItems: [
                            { id: 'a1', text: 'Complete first weekly review' }
                        ],
                        resources: [
                            { title: 'Weekly Review Template', type: 'doc', url: '#' }
                        ]
                    },
                    {
                        id: '5-4',
                        title: 'Identifying & Fixing Your Weaknesses',
                        duration: '25:00',
                        type: 'video'
                    },
                    {
                        id: '5-5',
                        title: 'Scaling Your Account (From $5K to $50K+)',
                        duration: '30:00',
                        type: 'video',
                        actionItems: [
                            { id: 'a1', text: 'Create your scaling roadmap' }
                        ]
                    }
                ]
            },
            {
                id: 'mod-6',
                title: 'Module 6: Advanced Resources & Tools',
                lessons: [
                    {
                        id: '6-1',
                        title: 'Best Trading Platforms & Tools',
                        duration: '20:00',
                        type: 'video',
                        resources: [
                            { title: 'Trading Tools Resource Pack', type: 'link', url: '#' },
                            { title: 'Recommended Platforms List', type: 'pdf', url: '#' }
                        ]
                    },
                    {
                        id: '6-2',
                        title: 'Economic Calendar & News Trading',
                        duration: '25:00',
                        type: 'video'
                    },
                    {
                        id: '6-3',
                        title: 'Building Your Support System',
                        duration: '15:00',
                        type: 'video'
                    },
                    {
                        id: '6-4',
                        title: 'The $5K Challenge Guarantee Breakdown',
                        duration: '20:00',
                        type: 'video',
                        actionItems: [
                            { id: 'a1', text: 'Commit to the 30-day challenge' },
                            { id: 'a2', text: 'Share your commitment in community' },
                            { id: 'a3', text: 'Set up accountability partner' }
                        ]
                    }
                ]
            }
        ]
    }
}
