'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
    Calculator,
    Sparkles,
    Download,
    FileText,
    Zap,
    ArrowLeft,
    Rocket,
    Target,
    DollarSign
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import InstagramCalculator from '@/components/learning/tools/InstagramCalculator';
import HookGenerator from '@/components/learning/tools/HookGenerator';
import AIInfluencerCalculator from '@/components/learning/tools/AIInfluencerCalculator';
import AIPromptLibrary from '@/components/learning/tools/AIPromptLibrary';
import DigitalProductCalculator from '@/components/learning/tools/DigitalProductCalculator';
import AgencyPricingCalculator from '@/components/learning/tools/AgencyPricingCalculator';

const courseResources: Record<string, any> = {
    'instagram-ignited': {
        title: 'Instagram Growth Resources',
        description: 'Researched tools and templates based on proven Instagram growth strategies',
        tools: [
            { id: 'calculator', name: 'Growth & Revenue Calculator', icon: Calculator, component: InstagramCalculator },
            { id: 'hook-generator', name: 'Viral Hook Generator', icon: Sparkles, component: HookGenerator },
        ],
        downloads: [
            { name: 'Viral Hook Templates (PDF)', size: '2.4 MB', type: 'pdf', url: '#' },
            { name: 'Content Calendar Template', size: '156 KB', type: 'xlsx', url: '#' },
            { name: 'Engagement Tracker Spreadsheet', size: '89 KB', type: 'xlsx', url: '#' },
            { name: 'Reel Script Templates', size: '1.2 MB', type: 'pdf', url: '#' },
            { name: 'Profile Optimization Checklist', size: '245 KB', type: 'pdf', url: '#' },
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
            { name: 'Flux Prompt Library (500+ Prompts)', size: '3.2 MB', type: 'pdf', url: '#' },
            { name: 'LoRA Training Guide', size: '4.1 MB', type: 'pdf', url: '#' },
            { name: 'Content Posting Schedule Template', size: '92 KB', type: 'xlsx', url: '#' },
            { name: 'Platform Comparison Chart', size: '567 KB', type: 'pdf', url: '#' },
        ],
    },
    'digital-products': {
        title: 'Digital Products Resources',
        description: 'Pricing strategies and launch templates based on successful product launches',
        tools: [
            { id: 'pricing-calc', name: 'Pricing Calculator', icon: Calculator, component: DigitalProductCalculator },
        ],
        downloads: [
            { name: 'Product Validation Worksheet', size: '890 KB', type: 'pdf', url: '#' },
            { name: '5-Day Launch Email Sequence', size: '1.8 MB', type: 'pdf', url: '#' },
            { name: 'Sales Page Template (Notion)', size: '234 KB', type: 'link', url: '#' },
            { name: 'Customer Onboarding Flow', size: '1.1 MB', type: 'pdf', url: '#' },
        ],
    },
    'ai-automations': {
        title: 'AI Agency Resources',
        description: 'Real agency pricing models and proven client acquisition systems',
        tools: [
            { id: 'agency-calc', name: 'Agency Pricing Calculator', icon: DollarSign, component: AgencyPricingCalculator },
        ],
        downloads: [
            { name: 'Cold Outreach Templates (50+)', size: '2.3 MB', type: 'pdf', url: '#' },
            { name: 'Service Delivery SOPs', size: '3.4 MB', type: 'pdf', url: '#' },
            { name: 'Retainer Contract Template', size: '456 KB', type: 'doc', url: '#' },
            { name: 'N8N Workflow Templates', size: '892 KB', type: 'json', url: '#' },
        ],
    },
};

export default function CourseResourcesPage() {
    const params = useParams();
    const courseId = params.courseId as string;
    const resources = courseResources[courseId];
    const [activeTool, setActiveTool] = useState<string | null>(null);

    if (!resources) {
        return <div className="p-8 text-white">Resources not found</div>;
    }

    const ActiveToolComponent = activeTool
        ? resources.tools.find((t: any) => t.id === activeTool)?.component
        : null;

    return (
        <div className="p-6 md:p-10 max-w-7xl mx-auto">
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

            {/* Downloadable Resources */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <Download className="w-6 h-6 text-green-400" />
                    Downloadable Resources
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                    {resources.downloads.map((download: any, index: number) => (
                        <motion.a
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + (index * 0.05) }}
                            href={download.url}
                            className="group flex items-center justify-between p-6 bg-zinc-900/50 hover:bg-zinc-900/70 border border-white/5 hover:border-purple-500/30 rounded-xl transition-all"
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
                            <Download className="w-5 h-5 text-zinc-600 group-hover:text-purple-400 transition-colors" />
                        </motion.a>
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
