'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Copy, Check, Image, Video, Wand2 } from 'lucide-react';

const promptCategories = {
    'Photorealistic Portraits': [
        {
            name: 'Instagram Model - Casual',
            prompt: 'RAW photo, (high detailed skin:1.2), 8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3, photorealistic, 4k, beautiful 25 year old woman, instagram model, casual outfit, natural makeup, looking at camera, warm smile, outdoor setting, golden hour lighting',
            tags: ['portrait', 'casual', 'outdoor']
        },
        {
            name: 'Luxury Fashion',
            prompt: 'RAW photo, (high detailed skin:1.2), 8k uhd, dslr, professional studio lighting, high quality, photorealistic, stunning 24 year old woman, high fashion model, designer dress, elegant pose, professional makeup, studio background, dramatic lighting, vogue style',
            tags: ['fashion', 'studio', 'luxury']
        },
        {
            name: 'Fitness Influencer',
            prompt: 'RAW photo, (high detailed skin:1.2), 8k uhd, dslr, natural lighting, high quality, photorealistic, fit 26 year old woman, athletic build, gym outfit, confident pose, gym background, motivational energy, natural makeup',
            tags: ['fitness', 'athletic', 'gym']
        },
    ],
    'Lifestyle Content': [
        {
            name: 'Coffee Shop Aesthetic',
            prompt: 'RAW photo, (high detailed skin:1.2), 8k uhd, dslr, soft natural lighting, high quality, photorealistic, beautiful woman, 25 years old, cozy sweater, sitting in modern coffee shop, holding latte, warm ambiance, bokeh background, candid moment',
            tags: ['lifestyle', 'cozy', 'cafe']
        },
        {
            name: 'Beach Vacation',
            prompt: 'RAW photo, (high detailed skin:1.2), 8k uhd, dslr, bright natural lighting, high quality, photorealistic, gorgeous woman, 24 years old, bikini, beach setting, tropical paradise, crystal clear water, golden hour, vacation vibes, natural beauty',
            tags: ['beach', 'vacation', 'summer']
        },
        {
            name: 'City Night Out',
            prompt: 'RAW photo, (high detailed skin:1.2), 8k uhd, dslr, cinematic lighting, high quality, photorealistic, stunning woman, 26 years old, elegant evening dress, city nightlife background, neon lights, sophisticated makeup, confident pose',
            tags: ['nightlife', 'city', 'elegant']
        },
    ],
    'Premium Content': [
        {
            name: 'Boudoir Style',
            prompt: 'RAW photo, (high detailed skin:1.2), 8k uhd, dslr, soft diffused lighting, high quality, photorealistic, beautiful woman, 25 years old, elegant lingerie, bedroom setting, luxurious fabrics, intimate atmosphere, professional photography, tasteful composition',
            tags: ['boudoir', 'premium', 'intimate']
        },
        {
            name: 'Luxury Lifestyle',
            prompt: 'RAW photo, (high detailed skin:1.2), 8k uhd, dslr, professional lighting, high quality, photorealistic, gorgeous woman, 27 years old, designer outfit, luxury hotel suite, champagne, elegant setting, wealthy lifestyle, sophisticated',
            tags: ['luxury', 'premium', 'lifestyle']
        },
    ],
    'Seasonal & Themed': [
        {
            name: 'Summer Vibes',
            prompt: 'RAW photo, (high detailed skin:1.2), 8k uhd, dslr, bright natural lighting, high quality, photorealistic, beautiful woman, 24 years old, summer dress, flower field, sunny day, happy expression, warm colors, dreamy atmosphere',
            tags: ['summer', 'outdoor', 'happy']
        },
        {
            name: 'Cozy Winter',
            prompt: 'RAW photo, (high detailed skin:1.2), 8k uhd, dslr, warm indoor lighting, high quality, photorealistic, beautiful woman, 25 years old, cozy knit sweater, by fireplace, winter setting, warm drink, comfortable atmosphere, soft lighting',
            tags: ['winter', 'cozy', 'indoor']
        },
    ],
};

export default function AIPromptLibrary() {
    const [selectedCategory, setSelectedCategory] = useState(Object.keys(promptCategories)[0]);
    const [copiedIndex, setCopiedIndex] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const copyToClipboard = (text: string, id: string) => {
        navigator.clipboard.writeText(text);
        setCopiedIndex(id);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const filteredPrompts = promptCategories[selectedCategory as keyof typeof promptCategories].filter(
        prompt =>
            prompt.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            prompt.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="bg-gradient-to-br from-purple-900/20 to-violet-900/20 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-xl">
                    <Wand2 className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-white">AI Prompt Library</h2>
                    <p className="text-purple-200/70 text-sm">Professional prompts for Flux & SDXL</p>
                </div>
            </div>

            {/* Search */}
            <div className="mb-6">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search prompts by name or tag..."
                    className="w-full px-4 py-3 bg-purple-500/10 border border-purple-500/30 rounded-lg text-white placeholder-purple-300/50 focus:outline-none focus:border-purple-500/50 transition-all"
                />
            </div>

            <div className="grid md:grid-cols-4 gap-6">
                {/* Category Selection */}
                <div className="md:col-span-1">
                    <h3 className="text-white font-bold mb-4">Categories</h3>
                    <div className="space-y-2">
                        {Object.keys(promptCategories).map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`w-full text-left px-4 py-3 rounded-lg transition-all text-sm ${selectedCategory === category
                                        ? 'bg-purple-500/20 border-purple-500/50 text-white'
                                        : 'bg-purple-500/5 border-purple-500/10 text-purple-200 hover:bg-purple-500/10'
                                    } border`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Quick Tips */}
                    <div className="mt-6 p-4 bg-purple-500/5 border border-purple-500/20 rounded-lg">
                        <h4 className="text-white font-bold text-sm mb-2">💡 Pro Tips:</h4>
                        <ul className="space-y-1 text-purple-200 text-xs">
                            <li>• Adjust age (23-28 works best)</li>
                            <li>• Add specific hair/eye colors</li>
                            <li>• Include your LoRA trigger word</li>
                            <li>• Use negative prompts</li>
                        </ul>
                    </div>
                </div>

                {/* Prompts Display */}
                <div className="md:col-span-3">
                    <h3 className="text-white font-bold mb-4">
                        {selectedCategory} ({filteredPrompts.length} prompts)
                    </h3>

                    <div className="space-y-4">
                        {filteredPrompts.map((prompt, index) => {
                            const promptId = `${selectedCategory}-${index}`;
                            return (
                                <motion.div
                                    key={promptId}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-purple-500/5 hover:bg-purple-500/10 border border-purple-500/20 rounded-xl p-6 transition-all group"
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h4 className="text-white font-bold mb-1">{prompt.name}</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {prompt.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-xs text-purple-300"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => copyToClipboard(prompt.prompt, promptId)}
                                            className="p-2 bg-purple-500/10 hover:bg-purple-500/20 rounded-lg transition-all flex-shrink-0"
                                        >
                                            {copiedIndex === promptId ? (
                                                <Check className="w-5 h-5 text-green-400" />
                                            ) : (
                                                <Copy className="w-5 h-5 text-purple-400" />
                                            )}
                                        </button>
                                    </div>

                                    <div className="bg-black/30 border border-purple-500/10 rounded-lg p-4">
                                        <p className="text-purple-100 text-sm font-mono leading-relaxed">
                                            {prompt.prompt}
                                        </p>
                                    </div>

                                    <div className="mt-3 flex items-center gap-2 text-xs text-purple-300">
                                        <Sparkles className="w-3 h-3" />
                                        <span>Click copy button to use in Flux/SDXL</span>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Customization Guide */}
            <div className="mt-8 p-6 bg-purple-500/5 border border-purple-500/20 rounded-xl">
                <h4 className="text-white font-bold mb-3">🎨 How to Customize These Prompts:</h4>
                <div className="grid md:grid-cols-3 gap-4 text-purple-200 text-sm">
                    <div>
                        <div className="font-bold text-purple-100 mb-2">1. Add Your LoRA</div>
                        <p className="text-xs">
                            Insert your trained LoRA trigger word at the start:
                            <code className="bg-black/30 px-2 py-1 rounded ml-1">yourmodel_v1</code>
                        </p>
                    </div>
                    <div>
                        <div className="font-bold text-purple-100 mb-2">2. Adjust Details</div>
                        <p className="text-xs">
                            Change age, hair color, outfit, or setting to match your model's style and niche
                        </p>
                    </div>
                    <div>
                        <div className="font-bold text-purple-100 mb-2">3. Use Negative Prompts</div>
                        <p className="text-xs">
                            Add: <code className="bg-black/30 px-2 py-1 rounded">ugly, deformed, blurry, bad anatomy</code>
                        </p>
                    </div>
                </div>
            </div>

            {/* Settings Recommendations */}
            <div className="mt-4 p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg">
                <p className="text-blue-200 text-sm">
                    <strong>Recommended Settings:</strong> Steps: 30-50 | CFG Scale: 7-9 | Sampler: DPM++ 2M Karras | Resolution: 512x768 or 768x512
                </p>
            </div>
        </div>
    );
}
