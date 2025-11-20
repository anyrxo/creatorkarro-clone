'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Copy, RefreshCw, Check } from 'lucide-react';

const hookTemplates = [
    {
        category: 'Pattern Interrupt',
        templates: [
            'Stop scrolling if you {pain point}',
            'This {thing} changed my life in {timeframe}',
            'I tried {number} {things} so you don\'t have to',
            'POV: You finally {desired outcome}',
            'Nobody talks about {controversial truth}',
        ]
    },
    {
        category: 'Curiosity Gap',
        templates: [
            'The {thing} nobody tells you about {topic}',
            'Why {successful people} never {common action}',
            'What I wish I knew before {milestone}',
            '{Number} secrets to {desired outcome}',
            'The real reason why {problem exists}',
        ]
    },
    {
        category: 'Social Proof',
        templates: [
            'How I got {impressive result} in {timeframe}',
            'From {bad state} to {good state} in {timeframe}',
            '{Number}K followers later, here\'s what I learned',
            'This strategy got me {result} (and it\'s free)',
            'I made ${amount} doing this (step-by-step)',
        ]
    },
    {
        category: 'Urgency/FOMO',
        templates: [
            'Do this before {deadline/event}',
            'If you\'re not doing this, you\'re already behind',
            'Last chance to {opportunity}',
            'This won\'t work in {timeframe}',
            'Everyone\'s doing {thing} wrong',
        ]
    },
];

export default function HookGenerator() {
    const [selectedCategory, setSelectedCategory] = useState(hookTemplates[0]);
    const [customTopic, setCustomTopic] = useState('');
    const [generatedHooks, setGeneratedHooks] = useState<string[]>([]);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const generateHooks = () => {
        const topic = customTopic || 'your niche';
        const hooks = selectedCategory.templates.map(template => {
            return template
                .replace('{pain point}', `struggle with ${topic}`)
                .replace('{thing}', topic)
                .replace('{timeframe}', '30 days')
                .replace('{number}', '10')
                .replace('{things}', `${topic} strategies`)
                .replace('{desired outcome}', `master ${topic}`)
                .replace('{controversial truth}', `the truth about ${topic}`)
                .replace('{topic}', topic)
                .replace('{successful people}', 'top creators')
                .replace('{common action}', 'follow trends')
                .replace('{milestone}', `starting ${topic}`)
                .replace('{Number}', '5')
                .replace('{problem exists}', `${topic} is hard`)
                .replace('{impressive result}', '10K followers')
                .replace('{bad state}', '0 followers')
                .replace('{good state}', '50K followers')
                .replace('{result}', 'viral content')
                .replace('{amount}', '10,000')
                .replace('{deadline/event}', 'the algorithm changes')
                .replace('{opportunity}', `grow with ${topic}`);
        });
        setGeneratedHooks(hooks);
    };

    const copyToClipboard = (text: string, index: number) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-xl">
                    <Sparkles className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">Viral Hook Generator</h2>
                    <p className="text-purple-200/70 text-sm">Create scroll-stopping hooks in seconds</p>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Category Selection */}
                <div className="md:col-span-1">
                    <h3 className="text-white font-bold mb-4">Hook Type</h3>
                    <div className="space-y-2">
                        {hookTemplates.map((category, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedCategory(category)}
                                className={`w-full text-left px-4 py-3 rounded-lg transition-all ${selectedCategory.category === category.category
                                        ? 'bg-purple-500/20 border-purple-500/50 text-white'
                                        : 'bg-purple-500/5 border-purple-500/10 text-purple-200 hover:bg-purple-500/10'
                                    } border`}
                            >
                                <div className="font-medium">{category.category}</div>
                                <div className="text-xs text-purple-300 mt-1">
                                    {category.templates.length} templates
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Input & Generation */}
                <div className="md:col-span-2">
                    <h3 className="text-white font-bold mb-4">Customize Your Hooks</h3>

                    <div className="mb-4">
                        <label className="block text-purple-200 mb-2 text-sm font-medium">
                            Your Topic/Niche (optional)
                        </label>
                        <input
                            type="text"
                            value={customTopic}
                            onChange={(e) => setCustomTopic(e.target.value)}
                            placeholder="e.g., Instagram growth, fitness, productivity"
                            className="w-full px-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500/50 transition-all"
                        />
                    </div>

                    <button
                        onClick={generateHooks}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 rounded-lg text-white font-bold transition-all"
                    >
                        <RefreshCw className="w-5 h-5" />
                        Generate {selectedCategory.category} Hooks
                    </button>

                    {/* Generated Hooks */}
                    {generatedHooks.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-6 space-y-3"
                        >
                            <h4 className="text-white font-bold mb-3">✨ Your Generated Hooks:</h4>
                            {generatedHooks.map((hook, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group relative bg-purple-500/5 hover:bg-purple-500/10 border border-purple-500/20 rounded-lg p-4 transition-all"
                                >
                                    <p className="text-purple-100 pr-12">{hook}</p>
                                    <button
                                        onClick={() => copyToClipboard(hook, index)}
                                        className="absolute top-4 right-4 p-2 bg-purple-500/10 hover:bg-purple-500/20 rounded-lg transition-all"
                                    >
                                        {copiedIndex === index ? (
                                            <Check className="w-4 h-4 text-green-400" />
                                        ) : (
                                            <Copy className="w-4 h-4 text-purple-400" />
                                        )}
                                    </button>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </div>
            </div>

            {/* Tips */}
            <div className="p-6 bg-purple-500/5 border border-purple-500/20 rounded-xl">
                <h4 className="text-white font-bold mb-3">💡 Pro Tips for Using Hooks:</h4>
                <ul className="space-y-2 text-purple-200 text-sm">
                    <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-0.5">•</span>
                        <span>Test 3-5 different hooks per piece of content to see what performs best</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-0.5">•</span>
                        <span>Combine hook types (e.g., Pattern Interrupt + Social Proof)</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-0.5">•</span>
                        <span>Make it specific - replace generic terms with exact numbers and outcomes</span>
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="text-purple-400 mt-0.5">•</span>
                        <span>The first 3 seconds are everything - make every word count</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
