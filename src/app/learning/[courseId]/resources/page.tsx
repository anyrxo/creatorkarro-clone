'use client';

import { useParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calculator,
    Sparkles,
    Download,
    FileText,
    Zap,
    ArrowLeft,
    Rocket,
    Target,
    DollarSign,
    X,
    Copy,
    Check
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import InstagramCalculator from '@/components/learning/tools/InstagramCalculator';
import HookGenerator from '@/components/learning/tools/HookGenerator';
import AIInfluencerCalculator from '@/components/learning/tools/AIInfluencerCalculator';
import AIPromptLibrary from '@/components/learning/tools/AIPromptLibrary';
import DigitalProductCalculator from '@/components/learning/tools/DigitalProductCalculator';
import AgencyPricingCalculator from '@/components/learning/tools/AgencyPricingCalculator';
import ReactMarkdown from 'react-markdown';

const courseResources: Record<string, any> = {
    'instagram-ignited': {
        title: 'Instagram Growth Resources',
        description: 'Researched tools and templates based on proven Instagram growth strategies',
        tools: [
            { id: 'calculator', name: 'Growth & Revenue Calculator', icon: Calculator, component: InstagramCalculator },
            { id: 'hook-generator', name: 'Viral Hook Generator', icon: Sparkles, component: HookGenerator },
        ],
        downloads: [
            {
                name: 'Viral Hook Templates',
                type: 'guide',
                size: 'View',
                content: `# Viral Hook Templates
## The "Negative" Hook
1. "Stop doing [Common Mistake] if you want [Desirable Outcome]."
2. "Why your [Niche Activity] isn't working (and how to fix it)."
3. "The #1 reason you're failing at [Goal]."

## The "Secret" Hook
1. "The [Niche] hack nobody is talking about."
2. "I wish I knew this before I started [Activity]."
3. "Gatekeeping this [Tool/Strategy] ends today."

## The "Listicle" Hook
1. "5 tools that will save you 10 hours a week."
2. "3 signs you're ready to [Next Level]."
3. "Top 10 resources for [Niche] in 2024."
`
            },
            {
                name: 'Content Calendar Template',
                type: 'template',
                size: 'View',
                content: `# Content Calendar Strategy
## Monday: Educational / How-To
- **Goal**: Establish authority.
- **Format**: Carousel or Reel.
- **Topic**: Solve a specific problem.

## Wednesday: Personal / Behind the Scenes
- **Goal**: Build connection.
- **Format**: Photo dump or Story.
- **Topic**: Day in the life, struggles, wins.

## Friday: Promotional / Soft Sell
- **Goal**: Drive traffic/sales.
- **Format**: Reel + CTA.
- **Topic**: Show results, testimonials, or product demo.
`
            },
        ],
    },
    'ai-influencers': {
        title: 'AI Influencer Resources',
        description: 'Professional prompts and revenue calculators based on 2024 market data',
        tools: [
            { id: 'revenue-calc', name: 'Revenue Calculator', icon: DollarSign, component: AIInfluencerCalculator },
            { id: 'prompt-library', name: 'AI Prompt Library (500+)', icon: Sparkles, component: AIPromptLibrary },
        ],
        downloads: [
            {
                name: 'LoRA Training Guide',
                type: 'guide',
                size: 'View',
                content: `# LoRA Training Checklist
1. **Gather Dataset**: 15-20 high-quality images of the subject.
2. **Pre-process**: Crop to 512x512 or 768x768.
3. **Captioning**: Use BLIP or manual captioning (trigger word + description).
4. **Training Settings**:
   - Steps: 2000-3000
   - Learning Rate: 1e-4
   - Batch Size: 1 or 2
5. **Testing**: Generate images using the trigger word at different weights (0.6 - 1.0).
`
            },
        ],
    },
    'digital-products': {
        title: 'Digital Products Resources',
        description: 'Pricing strategies and launch templates based on successful product launches',
        tools: [
            { id: 'pricing-calc', name: 'Pricing Calculator', icon: Calculator, component: DigitalProductCalculator },
        ],
        downloads: [
            {
                name: '5-Day Launch Email Sequence',
                type: 'template',
                size: 'View',
                content: `# 5-Day Launch Sequence
## Day 1: The Announcement
- **Subject**: It's finally here...
- **Body**: Announce the product, explain the "why", link to sales page.

## Day 2: The Logic (Features)
- **Subject**: What's inside [Product Name]?
- **Body**: Breakdown modules/features, show value.

## Day 3: The Emotion (Benefits)
- **Subject**: Imagine if you could [Result]...
- **Body**: Paint a picture of the after-state. Testimonials.

## Day 4: The Logic (Objections)
- **Subject**: Is [Product Name] right for you?
- **Body**: FAQ, money-back guarantee, handle objections.

## Day 5: The Scarcity (Closing)
- **Subject**: Doors closing in 4 hours!
- **Body**: Last chance, bonus disappearing, urgency.
`
            },
        ],
    },
    'ai-automations': {
        title: 'AI Agency Resources',
        description: 'Real agency pricing models and proven client acquisition systems',
        tools: [
            { id: 'agency-calc', name: 'Agency Pricing Calculator', icon: DollarSign, component: AgencyPricingCalculator },
        ],
        downloads: [
            {
                name: 'Cold Outreach Templates',
                type: 'template',
                size: 'View',
                content: `# Cold Email Template
**Subject**: Quick question about [Company Name]

Hi [Name],

I noticed you're doing great work with [Specific Observation].

I recently helped a similar agency save 20 hours/week by automating their [Specific Process] using AI.

Would you be open to a 5-minute video showing how we did it? No pitch, just value.

Best,
[Your Name]
`
            },
        ],
    },
};

export default function CourseResourcesPage() {
    const params = useParams();
    const courseId = params.courseId as string;
    const resources = courseResources[courseId];
    const [activeTool, setActiveTool] = useState<string | null>(null);
    const [viewResource, setViewResource] = useState<any | null>(null);

    if (!resources) {
        return <div className="p-8 text-white">Resources not found</div>;
    }

    const ActiveToolComponent = activeTool
        ? resources.tools.find((t: any) => t.id === activeTool)?.component
        : null;

    return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto relative">
            {/* Resource Viewer Modal */}
            <AnimatePresence>
                {viewResource && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setViewResource(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#0a0a0a] border border-white/10 rounded-2xl w-full max-w-3xl max-h-[80vh] overflow-hidden flex flex-col shadow-2xl"
                        >
                            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-zinc-900/50">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-purple-500/10 rounded-lg">
                                        <FileText className="w-5 h-5 text-purple-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white">{viewResource.name}</h3>
                                </div>
                                <button
                                    onClick={() => setViewResource(null)}
                                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                                >
                                    <X className="w-5 h-5 text-zinc-400" />
                                </button>
                            </div>
                            <div className="p-8 overflow-y-auto prose prose-invert max-w-none">
                                <ReactMarkdown>{viewResource.content}</ReactMarkdown>
                            </div>
                            <div className="p-4 border-t border-white/10 bg-zinc-900/50 flex justify-end">
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(viewResource.content);
                                        // Optional: Show toast
                                    }}
                                    className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-bold hover:bg-zinc-200 transition-colors"
                                >
                                    <Copy className="w-4 h-4" />
                                    Copy Content
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Back Button */}
            <Link
                href={`/learning/${courseId}`}
                className="inline-flex items-center gap-2 text-zinc-500 hover:text-white mb-6 transition-colors text-sm"
            >
                <ArrowLeft className="w-4 h-4" />
                Back to Course
            </Link>

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wider mb-6">
                    <Rocket className="w-3 h-3" />
                    Resources & Tools
                </div>
                <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
                    {resources.title}
                </h1>
                <p className="text-xl text-zinc-400 max-w-2xl">
                    {resources.description}
                </p>
            </motion.div>

            {/* Interactive Tools */}
            {resources.tools.length > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="mb-12"
                >
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                        <Zap className="w-6 h-6 text-yellow-400" />
                        Interactive Tools
                    </h2>

                    {!activeTool && (
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            {resources.tools.map((tool: any, index: number) => (
                                <motion.button
                                    key={tool.id}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                    onClick={() => setActiveTool(tool.id)}
                                    className="group relative overflow-hidden bg-gradient-to-br from-purple-900/20 to-violet-900/20 hover:from-purple-900/30 hover:to-violet-900/30 border border-purple-500/20 hover:border-purple-500/40 rounded-2xl p-8 transition-all text-left"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-4 bg-purple-500/10 rounded-xl group-hover:scale-110 transition-transform">
                                            <tool.icon className="w-8 h-8 text-purple-400" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-1">{tool.name}</h3>
                                            <p className="text-purple-200/70 text-sm">Click to open →</p>
                                        </div>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    )}

                    {activeTool && ActiveToolComponent && (
                        <div>
                            <button
                                onClick={() => setActiveTool(null)}
                                className="mb-4 text-purple-400 hover:text-purple-300 text-sm flex items-center gap-2"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to tools
                            </button>
                            <ActiveToolComponent />
                        </div>
                    )}
                </motion.div>
            )}

            {/* Viewable Resources */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-blue-400" />
                    Guides & Templates
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                    {resources.downloads.map((download: any, index: number) => (
                        <motion.button
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + (index * 0.05) }}
                            onClick={() => setViewResource(download)}
                            className="group flex items-center justify-between p-6 bg-zinc-900/50 hover:bg-zinc-900/70 border border-white/5 hover:border-purple-500/30 rounded-xl transition-all text-left w-full"
                        >
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-purple-500/10 rounded-lg group-hover:scale-110 transition-transform">
                                    <FileText className="w-5 h-5 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium mb-1 group-hover:text-purple-400 transition-colors">
                                        {download.name}
                                    </h3>
                                    <div className="flex items-center gap-3 text-xs text-zinc-500">
                                        <span className="uppercase">{download.type}</span>
                                        <span>•</span>
                                        <span>{download.size}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                                <ArrowLeft className="w-4 h-4 text-zinc-400 rotate-180" />
                            </div>
                        </motion.button>
                    ))}
                </div>
            </motion.div>

            {/* CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-12 p-8 bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/30 rounded-2xl text-center"
            >
                <Target className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Ready to Take Action?</h3>
                <p className="text-purple-200/70 mb-6 max-w-2xl mx-auto">
                    All tools are based on real market data and proven strategies.
                    Use them to calculate, plan, and execute your path to success.
                </p>
                <Link
                    href={`/learning/${courseId}`}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black hover:bg-zinc-200 rounded-xl font-bold transition-all"
                >
                    <Rocket className="w-5 h-5" />
                    Continue Learning
                </Link>
            </motion.div>
        </div>
    );
}
