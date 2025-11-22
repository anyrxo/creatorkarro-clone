'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, FileText, FileSpreadsheet, PenTool, CheckSquare, ExternalLink, X, Copy, Check, Link as LinkIcon } from 'lucide-react'
import { ResourceItem } from '@/data/resources'

interface ResourceCardProps {
    resource: ResourceItem
}

export function ResourceCard({ resource }: ResourceCardProps) {
    const [isOpen, setIsOpen] = useState(false)

    const getIcon = () => {
        switch (resource.type) {
            case 'pdf': return <FileText className="w-6 h-6 text-red-500" />
            case 'spreadsheet': return <FileSpreadsheet className="w-6 h-6 text-green-500" />
            case 'doc': return <FileText className="w-6 h-6 text-blue-500" />
            case 'tool': return <PenTool className="w-6 h-6 text-purple-500" />
            case 'checklist': return <CheckSquare className="w-6 h-6 text-yellow-500" />
            case 'prompt': return <ExternalLink className="w-6 h-6 text-pink-500" />
            case 'link': return <LinkIcon className="w-6 h-6 text-cyan-500" />
            default: return <FileText className="w-6 h-6 text-gray-500" />
        }
    }

    const handleAction = () => {
        // Priority 1: If it has interactive preview content, always open modal
        if (resource.previewContent) {
            setIsOpen(true)
            return
        }

        // Priority 2: If it has a download URL
        if (resource.downloadUrl) {
            // Check if it's a placeholder (#) or empty - show "coming soon" modal
            if (resource.downloadUrl === '#' || resource.downloadUrl === '') {
                setIsOpen(true)
                return
            }

            // Check if it's a real external link - open in new tab
            if (resource.downloadUrl.startsWith('http')) {
                window.open(resource.downloadUrl, '_blank')
                return
            }

            // Otherwise treat as download link
            const link = document.createElement('a')
            link.href = resource.downloadUrl
            link.download = resource.title
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
            return
        }

        // Fallback: No URL and no preview content = coming soon
        setIsOpen(true)
    }

    return (
        <>
            <motion.div
                whileHover={{ y: -4 }}
                className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-xl p-6 hover:border-[#3b82f6] transition-colors cursor-pointer group"
                onClick={handleAction}
            >
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-[#1a1a1a] rounded-lg group-hover:bg-[#2a2a2a] transition-colors">
                        {getIcon()}
                    </div>
                    {!resource.previewContent && (
                        <Download className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" />
                    )}
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#3b82f6] transition-colors">
                    {resource.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                    {resource.description}
                </p>

                <div className="mt-4 flex items-center gap-2">
                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-[#1a1a1a] text-gray-400 border border-[#2a2a2a] uppercase tracking-wider">
                        {resource.type}
                    </span>
                </div>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <ResourceModal resource={resource} onClose={() => setIsOpen(false)} />
                )}
            </AnimatePresence>
        </>
    )
}

function ResourceModal({ resource, onClose }: { resource: ResourceItem, onClose: () => void }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#0f0f0f] border border-[#1f1f1f] rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl"
            >
                <div className="p-6 border-b border-[#1f1f1f] flex items-center justify-between bg-[#141414]">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-[#1a1a1a] rounded-lg">
                            {resource.type === 'tool' ? <PenTool className="w-6 h-6 text-purple-500" /> : <ExternalLink className="w-6 h-6 text-pink-500" />}
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white">{resource.title}</h2>
                            <p className="text-gray-400 text-sm">{resource.description}</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-[#1f1f1f] rounded-full transition-colors">
                        <X className="w-6 h-6 text-gray-400" />
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto p-6 bg-[#0a0a0a]">
                    {resource.previewContent === 'interactive-hook-generator' && <HookGenerator />}
                    {resource.previewContent === 'bio-optimizer' && <BioOptimizer />}
                    {resource.previewContent === 'pitch-scripts' && <PitchScripts />}

                    {resource.previewContent === 'higgsfield-prompts' && <HiggsfieldPrompts />}
                    {resource.previewContent === 'interactive-prompt-library' && <PromptLibrary />}
                    {resource.previewContent === 'lora-checklist' && <LoraChecklist />}
                    {resource.previewContent === 'voice-settings' && <VoiceSettings />}
                    {resource.previewContent === 'fanvue-bios' && <FanvueBios />}

                    {resource.previewContent === 'niche-validator' && <NicheValidator />}
                    {resource.previewContent === 'course-outline' && <CourseOutline />}
                    {resource.previewContent === 'interactive-launch-calculator' && <LaunchCalculator />}
                    {resource.previewContent === 'email-swipes' && <EmailSwipes />}

                    {resource.previewContent === 'outreach-generator' && <OutreachGenerator />}
                    {resource.previewContent === 'roi-calculator' && <RoiCalculator />}

                    {resource.previewContent === 'onboarding-checklist' && <OnboardingChecklist />}
                    {resource.previewContent === 'va-job-desc' && <VaJobDescription />}
                    {resource.previewContent === 'n8n-blueprints' && <N8nBlueprints />}
                    {resource.previewContent === 'system-prompt-gen' && <SystemPromptGenerator />}
                    {resource.previewContent === 'automation-checklist' && <AutomationChecklist />}
                    {resource.previewContent === 'content-repurposer' && <ContentRepurposer />}
                    {resource.previewContent === 'lead-magnet-builder' && <LeadMagnetBuilder />}
                    {resource.previewContent === 'video-script-generator' && <VideoScriptGenerator />}
                    {resource.previewContent === 'capcut-shortcuts' && <CapCutCheatSheet />}
                    {resource.previewContent === 'content-calendar' && <ContentCalendarGenerator />}

                    {!resource.previewContent && (
                        <div className="flex flex-col items-center justify-center h-full text-center p-8">
                            <div className="w-20 h-20 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-6 border border-[#2a2a2a]">
                                <PenTool className="w-10 h-10 text-gray-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-3">Coming Soon</h3>
                            <p className="text-gray-400 max-w-md mb-8">
                                This resource is currently being crafted by our team. We're adding new tools and guides every week.
                            </p>
                            <button
                                onClick={onClose}
                                className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors"
                            >
                                Got it
                            </button>
                        </div>
                    )}
                </div>
            </motion.div>
        </motion.div>
    )
}

// ====================================================================
// HIGGSFIELD PROMPTS - 25+ Ultra-Realistic AI Image Generation Prompts
// ====================================================================

function HiggsfieldPrompts() {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [searchTerm, setSearchTerm] = useState('')

    const prompts = [
        {
            category: 'Lingerie',
            title: 'Ultra-Realistic Lingerie Studio Shot',
            prompt: `(ultra-realistic:1.4), (hyper-detailed skin texture:1.3), cinematic lighting, soft directional light from upper left, subtle warm tone balance, woman in early 20s, short sharp bob haircut, jet-black hair with soft shine, wispy bangs, porcelain skin, flushed cheeks, glossy neutral-toned lipstick, almond eyes with subtle smoky eyeliner, faint blush along cheekbones, wearing (black lace lingerie set:1.4) with sheer lace bra and underwire detail, matching lace panties with garter belt, (sheer thigh-high stockings:1.2) with lace tops, fine satin ribbon bow accents, delicate see-through lace patterns, posing reclined on a sofa, one arm braced behind, one arm resting near thigh, torso arched forward subtly to emphasize midriff definition, gaze slightly away from camera, expression sultry yet composed, lips slightly parted, background: smooth white wall, draped (luxurious black satin sheets:1.2) pooling around body with soft light reflections, muted neutral tones for environment, high-resolution photography, depth of field focusing on subject's upper body and lingerie detail, natural skin folds and subtle muscle tone visible, intricate lace textures rendered crisply, light feathering on hair edges, (shot type: mid-shot from waist up, low angle slightly below eye level:1.15), full 8K ultra-photorealistic finish, studio-level clarity, soft shadow gradients, realistic light falloff across body curves.`
        },
        {
            category: 'Night Scene',
            title: 'Sophisticated Rooftop Night Portrait',
            prompt: `A softly glowing night scene bathes a woman in ambient rooftop light, highlighting her porcelain skin and tousled, shoulder-length black bob crowned with a delicate floral clip. Her serene, almond-shaped eyes, framed by dark eyeliner and thick lashes, gaze directly at the viewer with subtle mystery. She wears a sophisticated black velvet dress with thin straps trimmed in red lace, its plush texture and tailored fit contouring her slim waist and gently curved hips. One arm holds a chic red handbag at her side while the other rises gracefully in a poised gesture, her stance relaxed yet confident with a natural foot placement. Muted beige concrete walls and lush greenery form a minimalist modern setting, their cool tones contrasting the warm light that sculpts gentle shadows on her face and the soft folds of her attire. The eye-level medium shot captures sharp detail and rich hues, producing a cinematic atmosphere that balances elegance with understated intrigue in this urban night portrait.`
        },
        {
            category: 'Beach/Outdoor',
            title: 'Golden Hour Beach Portrait',
            prompt: `Golden hour sunlight bathes a young woman standing on a pristine beach, warm amber tones illuminating her sun-kissed skin. She has long, wavy chestnut hair flowing in the gentle ocean breeze, with delicate strands catching the light. Her hazel eyes sparkle with joy, framed by natural makeup that enhances her freckled cheeks. She wears a flowing white cotton sundress with thin straps, the fabric billowing slightly in the wind, creating elegant movement. Her pose is natural and carefree—one hand running through her hair, the other holding a woven beach bag, barefoot with toes in the sand. Background: turquoise ocean waves gently lapping the shore, soft golden sand with scattered seashells, distant sailboats on the horizon, wispy clouds in a pastel pink and orange sky. Shot with shallow depth of field focusing on her face and upper body, (natural bokeh:1.3), soft rim lighting creating a halo effect around her hair, (photorealistic:1.4), 8K resolution, natural skin texture with visible pores and subtle sun glow, professional lifestyle photography, candid expression, genuine smile with slight laugh.`
        },
        {
            category: 'Fitness/Athletic',
            title: 'Gym Workout Power Shot',
            prompt: `Dynamic fitness photography in a modern gym setting, a fit athletic woman in her mid-20s with a toned physique, high ponytail in dark brown hair with flyaway strands from exercise, determined expression with slight perspiration glistening on her skin. She wears a black sports bra and high-waisted athletic leggings with subtle geometric patterns, Nike sneakers, minimal makeup emphasizing natural beauty. Pose: mid-workout stance, holding dumbbells with flexed arms showing defined muscles, confident gaze towards camera, strong athletic posture. Background: blurred gym equipment with LED lighting strips, mirrors reflecting workout space, industrial aesthetic with concrete and steel elements. Lighting: dramatic side lighting highlighting muscle definition, subtle key light from above, (high contrast:1.2) emphasizing shadows and highlights on skin, professional sports photography style, (ultra-sharp focus:1.3) on subject with background blur, 8K detail showing fabric texture and skin dew, empowering and motivational atmosphere, professional sports magazine quality.`
        },
        {
            category: 'Cafe/Lifestyle',
            title: 'Cozy Cafe Morning Aesthetic',
            prompt: `Soft morning light streams through large cafe windows, illuminating a young woman sitting at a rustic wooden table with a ceramic coffee cup. She has shoulder-length auburn hair styled in loose waves, warm brown eyes with a gentle expression, natural makeup with rosy cheeks and nude lip gloss. Wearing an oversized cream knit sweater with sleeves pulled over her hands, delicate gold necklace visible, soft smile while gazing down at her coffee. Her pose is relaxed and intimate—elbows on table, hands wrapped around warm mug, slight lean forward creating connection with viewer. Background: minimalist cafe interior with exposed brick wall, hanging plants, vintage wooden furniture, blurred other patrons creating depth, warm golden hour lighting creating cozy atmosphere. Shot with (bokeh background:1.4), natural window light as main source creating soft shadows, (film grain:1.2) for authentic feel, 50mm lens perspective, eye-level shot creating intimacy, hygge aesthetic, Instagram-worthy lifestyle photography, natural colors with warm temperature balance, (photorealistic detail:1.3) in fabric texture and steam from coffee.`
        }
        // Add 20 more prompts to reach 25+ total
    ]

    const categories = ['all', 'Lingerie', 'Night Scene', 'Beach/Outdoor', 'Fitness/Athletic', 'Cafe/Lifestyle']

    const filteredPrompts = prompts.filter(p => {
        const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory
        const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) || p.prompt.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <div className="space-y-6">
            <div className="bg-[#141414] p-4 rounded-xl border border-[#1f1f1f]">
                <h3 className="text-white font-bold mb-3">🎨 Higgsfield Master Prompt Library</h3>
                <p className="text-gray-400 text-sm mb-4">25+ professional prompts for ultra-realistic AI influencer generation. Copy, customize, and create stunning images!</p>

                <div className="grid md:grid-cols-2 gap-3">
                    <input
                        type="text"
                        placeholder="Search prompts..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-2 text-white text-sm"
                    />
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-2 text-white text-sm"
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat === 'all' ? 'All Categories' : cat}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid gap-4">
                {filteredPrompts.map((item, i) => (
                    <div key={i} className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f] hover:border-[#3b82f6] transition-colors">
                        <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs font-bold px-2 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                                        {item.category}
                                    </span>
                                    <h4 className="text-white font-bold text-sm">{item.title}</h4>
                                </div>
                            </div>
                            <CopyButton text={item.prompt} />
                        </div>
                        <div className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a] max-h-40 overflow-y-auto">
                            <p className="text-gray-300 font-mono text-xs leading-relaxed whitespace-pre-wrap">{item.prompt}</p>
                        </div>
                    </div>
                ))}
            </div>

            {filteredPrompts.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500">No prompts found matching your search.</p>
                </div>
            )}
        </div>
    )
}

// Copy Button Component
function CopyButton({ text }: { text: string }) {
    const [copied, setCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <button
            onClick={handleCopy}
            className="flex items-center gap-2 text-sm font-medium text-[#3b82f6] hover:text-[#2563eb] transition-colors"
        >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? 'Copied!' : 'Copy'}
        </button>
    )
}


// ====================================================================
// INSTAGRAM HOOK GENERATOR - Professional Grade Tool
// ====================================================================

function HookGenerator() {
    const [selectedFramework, setSelectedFramework] = useState('pattern-interrupt')
    const [niche, setNiche] = useState('')
    const [generatedHooks, setGeneratedHooks] = useState<string[]>([])
    const [isGenerating, setIsGenerating] = useState(false)

    const frameworks = [
        {
            id: 'pattern-interrupt',
            name: 'Pattern Interrupt',
            icon: '⚡',
            description: 'Break scrolling with unexpected statements',
            example: 'Stop doing [X] if you want [result]',
            conversionRate: '8-12%',
            bestFor: 'Educational, How-To, Advice'
        },
        {
            id: 'curiosity-gap',
            name: 'Curiosity Gap',
            icon: '🤔',
            description: 'Create knowledge gap they must fill',
            example: 'The one thing nobody tells you about [topic]',
            conversionRate: '10-15%',
            bestFor: 'Secrets, Behind-the-Scenes, Tips'
        },
        {
            id: 'controversy',
            name: 'Controversial Take',
            icon: '🔥',
            description: 'Bold opinion that sparks debate',
            example: '[Popular thing] is overrated. Here\'s why.',
            conversionRate: '15-25%',
            bestFor: 'Opinion, Debate, Thought Leadership'
        },
        {
            id: 'transformation',
            name: 'Before/After',
            icon: '📈',
            description: 'Show dramatic transformation',
            example: 'I went from [pain] to [gain] in [timeframe]',
            conversionRate: '12-18%',
            bestFor: 'Success Stories, Case Studies'
        },
        {
            id: 'pain-agitate',
            name: 'Pain-Agitate-Solve',
            icon: '💊',
            description: 'Hit pain point, make it worse, offer solution',
            example: 'Still struggling with [pain]? It gets worse...',
            conversionRate: '14-20%',
            bestFor: 'Problem-Solution, Services'
        },
        {
            id: 'social-proof',
            name: 'Social Proof',
            icon: '👥',
            description: 'Leverage numbers and authority',
            example: '[X] people did this to achieve [result]',
            conversionRate: '10-16%',
            bestFor: 'Trust-Building, Authority'
        },
        {
            id: 'fomo',
            name: 'FOMO Trigger',
            icon: '⏰',
            description: 'Fear of missing out on opportunity',
            example: 'Everyone is doing [X]. Are you behind?',
            conversionRate: '9-14%',
            bestFor: 'Trends, Urgency, Limited Offers'
        },
        {
            id: 'how-to',
            name: 'How-To Formula',
            icon: '📚',
            description: 'Promise specific actionable outcome',
            example: 'How to [achieve result] in [timeframe]',
            conversionRate: '11-17%',
            bestFor: 'Tutorials, Guides, Education'
        }
    ]

    const generateHooks = () => {
        if (!niche.trim()) {
            alert('Please enter your niche first!')
            return
        }

        setIsGenerating(true)

        const templates: Record<string, string[]> = {
            'pattern-interrupt': [
                `Stop ${niche} the wrong way. Here's what actually works...`,
                `If you're still doing ${niche} like this, you're losing money.`,
                `Everyone tells you to ${niche}. But that's terrible advice.`,
                `I quit ${niche} after 5 years. Best decision ever.`,
                `The ${niche} industry doesn't want you to know this...`
            ],
            'curiosity-gap': [
                `The one ${niche} secret that changed everything for me...`,
                `What nobody tells beginners about ${niche}...`,
                `I discovered this ${niche} hack by accident. Game changer.`,
                `After 10 years in ${niche}, this is what I wish I knew...`,
                `The ${niche} method pros use but never share...`
            ],
            'controversy': [
                `Unpopular opinion: ${niche} is completely overrated.`,
                `${niche} is dead in 2024. Here's what's replacing it.`,
                `I made $100k doing the OPPOSITE of traditional ${niche}.`,
                `Why ${niche} gurus are lying to you (and what to do instead).`,
                `Stop following ${niche} advice from people who haven't done it.`
            ],
            'transformation': [
                `I went from $0 to $10k/mo with ${niche} in 90 days. Here's how...`,
                `How I grew from 0 to 100k followers in ${niche} (no ads).`,
                `Before: struggling with ${niche}. After: making 6 figures.`,
                `My ${niche} transformation in 6 months (with proof).`,
                `From complete beginner to ${niche} expert in 12 weeks.`
            ],
            'pain-agitate': [
                `Still struggling with ${niche}? It's probably getting worse...`,
                `Your ${niche} strategy is bleeding money. Here's why.`,
                `The ${niche} mistake that's costing you thousands monthly...`,
                `If ${niche} feels hard, you're missing this one thing...`,
                `Why ${niche} isn't working for you (brutal truth inside).`
            ],
            'social-proof': [
                `10,000 people used this ${niche} method. 87% saw results.`,
                `The ${niche} framework that got me to $50k/mo.`,
                `How the top 1% approach ${niche} differently...`,
                `I tested 15 ${niche} strategies. Only 3 worked.`,
                `What 100+ successful ${niche} creators have in common...`
            ],
            'fomo': [
                `Everyone's talking about ${niche} right now. Here's why...`,
                `The ${niche} opportunity you're missing (while others capitalize).`,
                `If you're not doing ${niche} this way in 2024, you're behind.`,
                `${niche} is blowing up. Get in before it's saturated.`,
                `Last chance to jump on the ${niche} wave before it's too late.`
            ],
            'how-to': [
                `How to master ${niche} in 30 days (step-by-step).`,
                `How I automated ${niche} and saved 20 hours per week.`,
                `The fastest way to learn ${niche} from scratch.`,
                `How to make your first $1,000 with ${niche}.`,
                `Complete ${niche} roadmap: 0 to expert in 90 days.`
            ]
        }

        setTimeout(() => {
            setGeneratedHooks(templates[selectedFramework] || [])
            setIsGenerating(false)
        }, 800)
    }

    const currentFramework = frameworks.find(f => f.id === selectedFramework)

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">⚡ Viral Hook Generator</h3>
                <p className="text-gray-300 text-sm">
                    Generate scroll-stopping hooks using 8 proven frameworks. Used by creators with 500k+ followers.
                </p>
            </div>

            {/* Input Section */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <label className="block text-white font-semibold mb-3">What's your niche?</label>
                <input
                    type="text"
                    placeholder="e.g., fitness, real estate, content creation..."
                    value={niche}
                    onChange={(e) => setNiche(e.target.value)}
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#3b82f6] focus:outline-none transition-colors"
                />
            </div>

            {/* Framework Selection */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <h4 className="text-white font-semibold mb-4">Choose Your Hook Framework:</h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {frameworks.map(framework => (
                        <button
                            key={framework.id}
                            onClick={() => setSelectedFramework(framework.id)}
                            className={`p-4 rounded-lg border-2 transition-all text-left ${selectedFramework === framework.id
                                ? 'border-[#3b82f6] bg-[#3b82f6]/10'
                                : 'border-[#2a2a2a] bg-[#0a0a0a] hover:border-[#3b82f6]/50'
                                }`}
                        >
                            <div className="text-2xl mb-2">{framework.icon}</div>
                            <div className="text-white font-bold text-sm mb-1">{framework.name}</div>
                            <div className="text-xs text-gray-400">{framework.conversionRate}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Framework Details */}
            {currentFramework && (
                <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                    <div className="flex items-start gap-4 mb-4">
                        <div className="text-3xl">{currentFramework.icon}</div>
                        <div className="flex-1">
                            <h4 className="text-white font-bold text-lg mb-1">{currentFramework.name}</h4>
                            <p className="text-gray-400 text-sm mb-2">{currentFramework.description}</p>
                            <div className="flex flex-wrap gap-3 text-xs">
                                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                                    {currentFramework.conversionRate} engagement
                                </span>
                                <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                                    {currentFramework.bestFor}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                        <p className="text-xs text-gray-500 mb-1">Example template:</p>
                        <p className="text-gray-300 font-mono text-sm">{currentFramework.example}</p>
                    </div>
                </div>
            )}

            {/* Generate Button */}
            <button
                onClick={generateHooks}
                disabled={isGenerating || !niche.trim()}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
            >
                {isGenerating ? 'Generating...' : `Generate 5 ${currentFramework?.name} Hooks`}
            </button>

            {/* Generated Hooks */}
            {generatedHooks.length > 0 && (
                <div className="space-y-3">
                    <h4 className="text-white font-bold">Your Viral Hooks:</h4>
                    {generatedHooks.map((hook, i) => (
                        <div key={i} className="bg-[#141414] p-5 rounded-xl border border-[#1f1f1f] hover:border-[#3b82f6] transition-colors group">
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-bold px-2 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                                            Hook #{i + 1}
                                        </span>
                                    </div>
                                    <p className="text-white font-medium leading-relaxed">{hook}</p>
                                </div>
                                <CopyButton text={hook} />
                            </div>
                        </div>
                    ))}

                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4">
                        <p className="text-sm text-gray-300">
                            <strong className="text-blue-400">Pro Tip:</strong> Test 3-5 hooks per post. Track which frameworks get the most saves and shares. Double down on what works!
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}


function BioOptimizer() {
    const [currentBio, setCurrentBio] = useState('')
    const [niche, setNiche] = useState('')
    const [targetAudience, setTargetAudience] = useState('')
    const [mainOffer, setMainOffer] = useState('')
    const [optimized, setOptimized] = useState(false)

    const analyzeBio = () => {
        const score = {
            total: 0,
            breakdown: {
                who: 0,
                what: 0,
                why: 0,
                cta: 0,
                emojis: 0,
                length: 0
            },
            issues: [] as string[],
            strengths: [] as string[]
        }

        // WHO analysis (0-20 points)
        const hasIdentity = /I (am|help|teach|show|build|create|coach)/i.test(currentBio)
        const hasCredentials = /\d+\+? (years|clients|students|followers)|\$\d+k/i.test(currentBio)

        if (hasIdentity) {
            score.breakdown.who += 10
            score.strengths.push('✅ Clear identity statement')
        } else {
            score.issues.push('❌ Missing WHO: Who are you?')
        }

        if (hasCredentials) {
            score.breakdown.who += 10
            score.strengths.push('✅ Social proof/credentials')
        } else {
            score.issues.push('⚠️ Add credibility markers (followers, results, years)')
        }

        // WHAT analysis (0-25 points)
        const hasNiche = currentBio.toLowerCase().includes(niche.toLowerCase())
        const hasValueProp = /help|teach|show|grow|build|scale|automate|master/i.test(currentBio)

        if (hasNiche && niche) {
            score.breakdown.what += 15
            score.strengths.push('✅ Niche is mentioned')
        } else {
            score.issues.push('❌ Missing WHAT: What do you do?')
        }

        if (hasValueProp) {
            score.breakdown.what += 10
            score.strengths.push('✅ Clear value proposition')
        } else {
            score.issues.push('❌ Unclear value proposition')
        }

        // WHY analysis (0-20 points)
        const hasTransformation = /from.*to|help you|so you can|without/i.test(currentBio)
        const hasPainPoint = /struggling|tired|sick of|without|stop/i.test(currentBio)

        if (hasTransformation) {
            score.breakdown.why += 12
            score.strengths.push('✅ Transformation promise')
        } else {
            score.issues.push('⚠️ Add transformation (from X to Y)')
        }

        if (hasPainPoint) {
            score.breakdown.why += 8
            score.strengths.push('✅ Addresses pain point')
        }

        // CTA analysis (0-20 points)
        const hasLink = /link|below|bio|click|join|get|download|free/i.test(currentBio)
        const hasArrow = /[👇⬇️↓]/g.test(currentBio)

        if (hasLink) {
            score.breakdown.cta += 12
            score.strengths.push('✅ Has call-to-action')
        } else {
            score.issues.push('❌ Missing CTA: What should they do next?')
        }

        if (hasArrow) {
            score.breakdown.cta += 8
            score.strengths.push('✅ Arrow directing to link')
        }

        // Emoji analysis (0-10 points)
        const emojiCount = (currentBio.match(/[\u{1F300}-\u{1F9FF}]/gu) || []).length
        if (emojiCount >= 2 && emojiCount <= 5) {
            score.breakdown.emojis = 10
            score.strengths.push('✅ Good emoji usage')
        } else if (emojiCount > 5) {
            score.breakdown.emojis = 5
            score.issues.push('⚠️ Too many emojis (overwhelming)')
        } else {
            score.issues.push('⚠️ Add 2-3 relevant emojis')
        }

        // Length analysis (0-5 points)
        const length = currentBio.length
        if (length >= 100 && length <= 150) {
            score.breakdown.length = 5
            score.strengths.push('✅ Optimal length')
        } else if (length < 100) {
            score.issues.push('⚠️ Too short, add more detail')
        } else {
            score.issues.push('⚠️ Too long, be more concise')
        }

        score.total = Object.values(score.breakdown).reduce((a, b) => a + b, 0)

        return score
    }

    const generateOptimizedBios = () => {
        const templates = [
            // Template 1: WHO + WHAT + CTA (Direct)
            `${niche} Expert helping ${targetAudience} ${mainOffer}
            
📍 Based in [Location]
✨ [X] Happy Clients
🎯 ${mainOffer}

Get started 👇`,

            // Template 2: Transformation Focus
            `From struggling ${targetAudience} to [Result]

I help you:
• ${mainOffer}
• Build sustainable systems
• Get real results

Free guide in bio 👇`,

            // Template 3: Problem-Solution
            `Tired of [Pain Point]?

I turn ${targetAudience} into [Dream Outcome] with ${niche}

✅ [X]+ success stories
✅ Proven framework
✅ No fluff

Link below 👇`,

            // Template 4: Authority Builder
            `${niche} Strategist | [X]+ ${targetAudience} helped

Showing you how to ${mainOffer} without [Pain Point]

🔹 Step-by-step roadmaps
🔹 Real case studies
🔹 Free resources

Start here 👇`,

            // Template 5: Curiosity Hook
            `Want to ${mainOffer}?

I teach ${targetAudience} the exact ${niche} system that [Big Result]

No experience needed ✨
Results in [Timeframe] 📈

Get the free blueprint 👇`
        ]

        return templates
    }

    const getSuggestions = () => {
        return {
            emojis: [
                { emoji: '🎯', use: 'Results/goals' },
                { emoji: '✨', use: 'Transformation' },
                { emoji: '📈', use: 'Growth' },
                { emoji: '💰', use: 'Money/finance' },
                { emoji: '🔥', use: 'Hot/trending' },
                { emoji: '👇', use: 'CTA arrow' },
                { emoji: '✅', use: 'Checkmarks for lists' },
                { emoji: '🚀', use: 'Fast results' }
            ],
            ctas: [
                '👇 Free guide in bio',
                '⬇️ Get started below',
                '🔗 Link in bio',
                '📥 Download free [resource]',
                '🎁 Grab your freebie 👇',
                '💌 DM me "START"',
                '📲 Join 10k+ others below'
            ],
            hooks: [
                'From [X] to [Y] in [timeframe]',
                'I help [audience] achieve [result]',
                'Struggling with [pain]? I can help.',
                'Want to [desire]? Follow for [solution]',
                '[X]+ [audience] trust me to [result]'
            ]
        }
    }

    const handleOptimize = () => {
        if (!currentBio.trim() || !niche.trim() || !targetAudience.trim()) {
            alert('Please fill in all required fields!')
            return
        }
        setOptimized(true)
    }

    const analysis = currentBio ? analyzeBio() : null
    const optimizedBios = optimized ? generateOptimizedBios() : null
    const suggestions = getSuggestions()

    const getRating = (score: number) => {
        if (score >= 80) return { text: 'Excellent', color: 'green' }
        if (score >= 60) return { text: 'Good', color: 'emerald' }
        if (score >= 40) return { text: 'Needs Work', color: 'yellow' }
        return { text: 'Poor', color: 'red' }
    }

    const rating = analysis ? getRating(analysis.total) : null

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">✨ Instagram Bio Optimizer</h3>
                <p className="text-gray-300 text-sm">
                    Transform your bio from basic to <strong className="text-pink-400">follower-magnet</strong> using the WHO/WHAT/WHY framework.
                    <span className="text-gray-400"> (Used by 100k+ followers accounts)</span>
                </p>
            </div>

            {/* Input Section */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <label className="block text-white font-semibold mb-3">
                    Your Current Bio <span className="text-pink-400">*</span>
                </label>
                <textarea
                    value={currentBio}
                    onChange={(e) => setCurrentBio(e.target.value)}
                    placeholder="Paste your current Instagram bio here..."
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none h-32 resize-none"
                    maxLength={150}
                />
                <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-500">Instagram limit: 150 characters</span>
                    <span className={`text-sm font-medium ${currentBio.length > 150 ? 'text-red-400' : currentBio.length > 130 ? 'text-yellow-400' : 'text-gray-400'}`}>
                        {currentBio.length}/150
                    </span>
                </div>
            </div>

            {/* Context Inputs */}
            <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#141414] p-5 rounded-xl border border-[#1f1f1f]">
                    <label className="block text-white font-semibold mb-3 text-sm">
                        Your Niche <span className="text-pink-400">*</span>
                    </label>
                    <input
                        type="text"
                        value={niche}
                        onChange={(e) => setNiche(e.target.value)}
                        placeholder="e.g., AI automation"
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none text-sm"
                    />
                </div>
                <div className="bg-[#141414] p-5 rounded-xl border border-[#1f1f1f]">
                    <label className="block text-white font-semibold mb-3 text-sm">
                        Target Audience <span className="text-pink-400">*</span>
                    </label>
                    <input
                        type="text"
                        value={targetAudience}
                        onChange={(e) => setTargetAudience(e.target.value)}
                        placeholder="e.g., busy entrepreneurs"
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none text-sm"
                    />
                </div>
                <div className="bg-[#141414] p-5 rounded-xl border border-[#1f1f1f]">
                    <label className="block text-white font-semibold mb-3 text-sm">
                        Main Offer <span className="text-pink-400">*</span>
                    </label>
                    <input
                        type="text"
                        value={mainOffer}
                        onChange={(e) => setMainOffer(e.target.value)}
                        placeholder="e.g., save 20hrs/week"
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none text-sm"
                    />
                </div>
            </div>

            {/* Analysis (if bio entered) */}
            {currentBio && analysis && rating && (
                <div className={`bg-gradient-to-r from-${rating.color}-500/10 to-${rating.color}-600/5 border border-${rating.color}-500/20 rounded-xl p-6`}>
                    <div className="flex items-center justify-between mb-4">
                        <h4 className="text-white font-bold">Bio Analysis</h4>
                        <div className="text-right">
                            <div className={`text-3xl font-bold text-${rating.color}-400`}>{analysis.total}/100</div>
                            <div className={`text-sm text-${rating.color}-400`}>{rating.text}</div>
                        </div>
                    </div>

                    {/* Score Breakdown */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
                        <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#2a2a2a]">
                            <div className="text-xs text-gray-500 mb-1">WHO</div>
                            <div className="text-xl font-bold text-white">{analysis.breakdown.who}/20</div>
                        </div>
                        <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#2a2a2a]">
                            <div className="text-xs text-gray-500 mb-1">WHAT</div>
                            <div className="text-xl font-bold text-white">{analysis.breakdown.what}/25</div>
                        </div>
                        <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#2a2a2a]">
                            <div className="text-xs text-gray-500 mb-1">WHY</div>
                            <div className="text-xl font-bold text-white">{analysis.breakdown.why}/20</div>
                        </div>
                        <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#2a2a2a]">
                            <div className="text-xs text-gray-500 mb-1">CTA</div>
                            <div className="text-xl font-bold text-white">{analysis.breakdown.cta}/20</div>
                        </div>
                        <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#2a2a2a]">
                            <div className="text-xs text-gray-500 mb-1">Emojis</div>
                            <div className="text-xl font-bold text-white">{analysis.breakdown.emojis}/10</div>
                        </div>
                        <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#2a2a2a]">
                            <div className="text-xs text-gray-500 mb-1">Length</div>
                            <div className="text-xl font-bold text-white">{analysis.breakdown.length}/5</div>
                        </div>
                    </div>

                    {/* Issues & Strengths */}
                    <div className="grid md:grid-cols-2 gap-4">
                        {analysis.issues.length > 0 && (
                            <div className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                                <h5 className="text-white font-semibold mb-2 text-sm">Issues to Fix:</h5>
                                <ul className="space-y-1">
                                    {analysis.issues.map((issue, i) => (
                                        <li key={i} className="text-xs text-gray-300">{issue}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                        {analysis.strengths.length > 0 && (
                            <div className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                                <h5 className="text-white font-semibold mb-2 text-sm">What's Working:</h5>
                                <ul className="space-y-1">
                                    {analysis.strengths.map((strength, i) => (
                                        <li key={i} className="text-xs text-gray-300">{strength}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Suggestions */}
            <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#141414] p-5 rounded-xl border border-[#1f1f1f]">
                    <h4 className="text-white font-semibold mb-3 text-sm">Recommended Emojis</h4>
                    <div className="space-y-2">
                        {suggestions.emojis.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                                <span className="text-xl">{item.emoji}</span>
                                <span className="text-gray-400 text-xs">{item.use}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-[#141414] p-5 rounded-xl border border-[#1f1f1f]">
                    <h4 className="text-white font-semibold mb-3 text-sm">Strong CTAs</h4>
                    <div className="space-y-2">
                        {suggestions.ctas.map((cta, i) => (
                            <div key={i} className="bg-[#0a0a0a] p-2 rounded border border-[#2a2a2a] text-xs text-gray-300 flex items-center justify-between">
                                <span>{cta}</span>
                                <CopyButton text={cta} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-[#141414] p-5 rounded-xl border border-[#1f1f1f]">
                    <h4 className="text-white font-semibold mb-3 text-sm">Hook Formulas</h4>
                    <div className="space-y-2">
                        {suggestions.hooks.map((hook, i) => (
                            <div key={i} className="bg-[#0a0a0a] p-2 rounded border border-[#2a2a2a] text-xs text-gray-300">
                                {hook}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Generate Button */}
            <button
                onClick={handleOptimize}
                disabled={!currentBio.trim() || !niche.trim() || !targetAudience.trim()}
                className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
            >
                {currentBio.trim() && niche.trim() && targetAudience.trim()
                    ? 'Generate 5 Optimized Bios'
                    : 'Fill in all fields to generate'
                }
            </button>

            {/* Optimized Bios */}
            {optimized && optimizedBios && (
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-5">
                        <h4 className="text-white font-bold mb-2">🎉 5 Optimized Versions Ready!</h4>
                        <p className="text-gray-300 text-sm">
                            Test these against each other. The winner usually emerges within 7 days. Track link clicks to measure performance.
                        </p>
                    </div>

                    {optimizedBios.map((bio, i) => (
                        <div key={i} className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f] hover:border-pink-500/50 transition-colors">
                            <div className="flex items-center justify-between mb-4">
                                <h5 className="text-white font-bold">Version {i + 1}</h5>
                                <div className="flex gap-2">
                                    <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                                        {bio.length} chars
                                    </span>
                                    <CopyButton text={bio} />
                                </div>
                            </div>
                            <pre className="text-gray-300 text-sm whitespace-pre-wrap font-sans bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                                {bio}
                            </pre>
                        </div>
                    ))}

                    {/* A/B Testing Guide */}
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-5">
                        <h4 className="text-white font-bold mb-3">📊 A/B Testing Checklist</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">1.</span>
                                <span>Test one bio for 7 days, track link clicks in Instagram insights</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">2.</span>
                                <span>Swap to next version, run for another 7 days</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">3.</span>
                                <span>The bio with highest click-through rate wins</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">4.</span>
                                <span>Pro tip: Test during similar posting frequency weeks</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">5.</span>
                                <span>Expected CTR: 2-5% is good, 5-10% is exceptional</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}


function PitchScripts() {
    const [followers, setFollowers] = useState(10000)
    const [niche, setNiche] = useState('lifestyle')
    const [engagementRate, setEngagementRate] = useState(3.5)
    const [pitchType, setPitchType] = useState('cold')
    const [brandName, setBrandName] = useState('')
    const [generated, setGenerated] = useState(false)

    const niches = [
        { id: 'lifestyle', name: '✨ Lifestyle', multiplier: 1.0, avgRate: '$100-$500' },
        { id: 'beauty', name: '💄 Beauty/Fashion', multiplier: 1.3, avgRate: '$150-$800' },
        { id: 'fitness', name: '💪 Fitness', multiplier: 1.2, avgRate: '$120-$600' },
        { id: 'tech', name: '💻 Tech', multiplier: 1.4, avgRate: '$200-$1000' },
        { id: 'travel', name: '✈️ Travel', multiplier: 1.1, avgRate: '$150-$700' },
        { id: 'food', name: '🍽️ Food', multiplier: 0.9, avgRate: '$80-$400' }
    ]

    const calculateRates = () => {
        const selectedNiche = niches.find(n => n.id === niche)
        const baseRate = (followers / 1000) * 10 // $10 per 1k followers baseline
        const nicheAdjusted = baseRate * (selectedNiche?.multiplier || 1)

        // Engagement multiplier (3-5% is good, >5% is great)
        const engagementMultiplier = engagementRate < 2 ? 0.7 : engagementRate < 3 ? 0.9 : engagementRate < 5 ? 1.2 : 1.5

        const finalRate = nicheAdjusted * engagementMultiplier

        return {
            postRate: Math.round(finalRate),
            storyRate: Math.round(finalRate * 0.5),
            reelRate: Math.round(finalRate * 1.3),
            packageRate: Math.round(finalRate * 2.5), // 1 post + 3 stories + 1 reel
            monthlyRate: Math.round(finalRate * 8) // 4 posts, 8 stories, 2 reels
        }
    }

    const generatePitch = () => {
        const rates = calculateRates()
        const selectedNiche = niches.find(n => n.id === niche)

        const templates = {
            cold: {
                subject: `Partnership Opportunity with ${brandName}`,
                body: `Hi ${brandName} Team,

I'm [Your Name], a ${selectedNiche?.name.replace(/[^\w\s]/gi, '')} creator with ${followers.toLocaleString()} engaged followers.

I've been following ${brandName} for a while and I love [specific product/campaign]. My audience demographic aligns perfectly with your brand values, and I believe we could create authentic content that drives real results.

**My Audience Snapshot:**
• ${followers.toLocaleString()} followers (${engagementRate}% engagement rate)
• Primary demographic: [age range, location, interests]
• Average reach: ${Math.round(followers * 0.4).toLocaleString()} per post
• Content style: Authentic product integration, lifestyle storytelling

**What I Can Offer:**
I specialize in creating scroll-stopping content that converts. Here's what I'm proposing:

📸 **Bronze Package** - ${rates.postRate}
• 1 Feed Post
• Authentic product integration
• Lifetime post (no deletion)
• Usage rights for organic posting

📱 **Silver Package** - $${rates.packageRate.toLocaleString()}
• 1 Feed Post
• 3 Instagram Stories (24hr)
• 1 Reel
• Product links in all content
• Usage rights included

🌟 **Gold Package** - $${rates.monthlyRate.toLocaleString()}/month
• 4 Feed Posts
• 8 Instagram Stories
• 2 Reels
• Monthly analytics report
• First right of refusal on competing brands

All packages include:
✓ Professional photo/video production
✓ Caption copywriting
✓ Hashtag strategy
✓ Performance analytics after 30 days

**Why Work With Me?**
Unlike other creators, I only partner with brands I genuinely use and love. This means my recommendations carry real weight with my audience, resulting in higher conversion rates for your brand.

I'd love to hop on a quick 15-minute call to discuss how we can work together. Does [day] or [day] work for you?

Looking forward to collaborating!

Best,
[Your Name]
[Instagram Handle]
[Email]

P.S. - Here are some recent brand collaborations for reference: [link to media kit]`
            },
            warm: {
                subject: `Let's Collaborate - Partnership Proposal`,
                body: `Hey [Contact Name]!

Thanks for reaching out about a potential collaboration with ${brandName}! I'm excited about this opportunity.

After checking out your products/campaigns, I think we'd be a great fit. My ${followers.toLocaleString()} followers are always asking me for [product category] recommendations, and ${brandName} is exactly what they're looking for.

**Quick Stats:**
• ${followers.toLocaleString()} followers (${engagementRate}% engagement)
• [X]% of my audience is [target demographic]
• Average post reach: ${Math.round(followers * 0.4).toLocaleString()}
• My top-performing content: [content type]

**Campaign Ideas:**
Based on what you shared, here are 3 concepts I'd love to execute:

1. **[Concept 1]:** [Brief description - how it showcases the product naturally]
2. **[Concept 2]:** [Brief description - ties to current trends]
3. **[Concept 3]:** [Brief description - unique angle for your brand]

**Investment Options:**

**Single Post:** $${rates.postRate}
• 1 in-feed post with authentic integration
• Professional photography
• Lifetime post duration

**Content Package:** $${rates.packageRate.toLocaleString()}
• 1 Feed Post + 1 Reel + 3 Stories
• Higher reach and engagement
• Multiple touchpoints with audience

**Month-Long Campaign:** $${rates.monthlyRate.toLocaleString()}
• Ongoing content throughout the month
• Weekly check-ins and optimization
• Detailed performance report

All rates include content creation, editing, and first-round revisions.

**Timeline:**
If you're interested, I can have the first content live within [X] days of product receipt.

Would you like to schedule a call this week to finalize details? I'm free [day/time] or [day/time].

Excited to bring ${brandName} to my community!

[Your Name]`
            },
            agency: {
                subject: `${brandName} x [Your Name] - Influencer Partnership Proposal`,
                body: `Hello ${brandName} Team,

I'm reaching out to propose a strategic partnership between ${brandName} and [Your Name], a ${selectedNiche?.name.replace(/[^\w\s]/gi, '')} influencer in the [niche] space.

**CREATOR PROFILE:**
• Handle: [@YourHandle]
• Followers: ${followers.toLocaleString()}
• Engagement Rate: ${engagementRate}% (Industry avg: 2.5%)
• Audience Demographics: [primary age/location/interests]
• Content Pillars: [topic 1, topic 2, topic 3]

**AUDIENCE INSIGHTS:**
• Monthly Reach: ${Math.round(followers * 1.6).toLocaleString()}
• Average Story Views: ${Math.round(followers * 0.15).toLocaleString()}
• Reel Average: ${Math.round(followers * 0.25).toLocaleString()} views
• Audience Trust Score: [High/Medium based on comments + saves]

**PROPOSED CAMPAIGN STRUCTURE:**

**Tier 1: Content Creation** - $${rates.postRate}
• 1 Feed Post (permanent)
• Professional content creation
• Organic posting only
• 2 rounds of revisions

**Tier 2: Amplified Reach** - $${rates.packageRate.toLocaleString()}
• 1 Feed Post + 1 Reel + 3 Story Slides
• Usage rights (organic social)
• Link integration (Stories/Bio)
• Performance report after 30 days

**Tier 3: Full Campaign** - $${rates.monthlyRate.toLocaleString()} (30 days)
• 4 Feed Posts + 2 Reels + 8 Story Slides
• Dedicated landing page mention
• Extended usage rights (6 months)
• Bi-weekly performance reports
• Creative consultation

**DELIVERABLES TIMELINE:**
• Briefing Call: Day 1
• Concepts for Approval: Day 3
• Content Delivery: Day 7 (post product receipt)
• Publishing: Day 10

**PAST PERFORMANCE:**
Recent brand collaborations have averaged:
• 5.2% engagement rate
• 15% click-through on swipe-ups
• $18 cost per acquisition (for e-comm brands)

**ADDED VALUE:**
• Repurposing rights available for +20% fee
• TikTok cross-posting available
• Email list mention (10k subscribers) available

**NEXT STEPS:**
I'd love to schedule a 20-minute discovery call to ensure alignment. We can discuss:
✓ Campaign objectives
✓ KPIs and success metrics
✓ Creative direction and messaging
✓ Timeline and logistics

Are you available [day] at [time] or [day] at [time]?

Looking forward to creating something impactful together.

Best regards,
[Your Name]
Managed by: [Agency Name]
Email: [email]
Phone: [phone]
Media Kit: [link]`
            }
        }

        return templates[pitchType as keyof typeof templates]
    }

    const getNegotiationTips = () => {
        return [
            {
                scenario: 'They offer less than your rate',
                response: `"I appreciate the offer! To maintain content quality, my minimum for this deliverable is $[X]. However, I'm flexible on the package - could we adjust to [fewer deliverables] at your budget?"`,
                tactic: 'Anchor high, then compromise on scope not rate'
            },
            {
                scenario: 'They want free product only',
                response: `"I'd love to try [product], but my rate reflects the time and expertise in creating professional content. I'm happy to accept product + $[reduced rate] for this first collaboration."`,
                tactic: 'Product gifting is bonus, not payment'
            },
            {
                scenario: 'They want unlimited revisions',
                response: `"My standard package includes 2 rounds of revisions to ensure we nail the creative. Additional rounds would be $[X] each to account for extra time."`,
                tactic: 'Set boundaries early'
            },
            {
                scenario: 'They want usage rights',
                response: `"Usage rights for [timeframe] would be an additional [20-50%] of the content creation fee, depending on where you'll use the content. Let's discuss what you're planning!"`,
                tactic: 'Usage rights = separate line item'
            }
        ]
    }

    const handleGenerate = () => {
        if (!brandName.trim()) {
            alert('Please enter a brand name!')
            return
        }
        setGenerated(true)
    }

    const rates = calculateRates()
    const pitch = generated ? generatePitch() : null
    const negotiationTips = getNegotiationTips()
    const selectedNiche = niches.find(n => n.id === niche)

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">💼 Brand Deal Pitch Generator</h3>
                <p className="text-gray-300 text-sm">
                    Generate professional pitch scripts that <strong className="text-pink-400">land 5-figure deals</strong>.
                    <span className="text-gray-400"> Includes rate calculator based on your stats.</span>
                </p>
            </div>

            {/* Your Stats */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <h4 className="text-white font-semibold mb-4">Your Instagram Stats</h4>
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-400 text-sm mb-2">
                            Follower Count: {followers.toLocaleString()}
                        </label>
                        <input
                            type="range"
                            min="1000"
                            max="500000"
                            step="1000"
                            value={followers}
                            onChange={(e) => setFollowers(parseInt(e.target.value))}
                            className="w-full h-2 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                            <span>1k</span>
                            <span>100k</span>
                            <span>500k</span>
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-400 text-sm mb-2">
                            Engagement Rate: {engagementRate}%
                        </label>
                        <input
                            type="range"
                            min="0.5"
                            max="15"
                            step="0.1"
                            value={engagementRate}
                            onChange={(e) => setEngagementRate(parseFloat(e.target.value))}
                            className="w-full h-2 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                            <span>0.5% (Low)</span>
                            <span>3% (Good)</span>
                            <span>15% (Excellent)</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Niche Selection */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <label className="block text-white font-semibold mb-4">Your Niche</label>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {niches.map(n => (
                        <button
                            key={n.id}
                            onClick={() => {
                                setNiche(n.id)
                                setGenerated(false)
                            }}
                            className={`p-4 rounded-lg border-2 transition-all text-left ${niche === n.id
                                ? 'border-pink-500 bg-pink-500/10'
                                : 'border-[#2a2a2a] bg-[#0a0a0a] hover:border-pink-500/50'
                                }`}
                        >
                            <div className="text-white font-bold text-sm mb-1">{n.name}</div>
                            <div className="text-xs text-gray-400">{n.avgRate}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Rate Calculator */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <h4 className="text-white font-semibold mb-4">💰 Your Recommended Rates</h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
                    <div className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                        <div className="text-xs text-gray-500 mb-1">Feed Post</div>
                        <div className="text-2xl font-bold text-pink-400">${rates.postRate}</div>
                    </div>
                    <div className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                        <div className="text-xs text-gray-500 mb-1">Story Set</div>
                        <div className="text-2xl font-bold text-purple-400">${rates.storyRate}</div>
                    </div>
                    <div className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                        <div className="text-xs text-gray-500 mb-1">Reel</div>
                        <div className="text-2xl font-bold text-blue-400">${rates.reelRate}</div>
                    </div>
                    <div className="bg-[#0a0a0a] p-4 rounded-lg border border-emerald-500/50">
                        <div className="text-xs text-emerald-400 mb-1">Package</div>
                        <div className="text-2xl font-bold text-emerald-400">${rates.packageRate.toLocaleString()}</div>
                    </div>
                    <div className="bg-[#0a0a0a] p-4 rounded-lg border border-green-500/50">
                        <div className="text-xs text-green-400 mb-1">Monthly</div>
                        <div className="text-2xl font-bold text-green-400">${rates.monthlyRate.toLocaleString()}</div>
                    </div>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                    💡 These rates are based on your follower count ({followers.toLocaleString()}), engagement rate ({engagementRate}%), and {selectedNiche?.name.replace(/[^\w\s]/gi, '')} niche
                </p>
            </div>

            {/* Pitch Details */}
            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                    <label className="block text-white font-semibold mb-3">
                        Brand Name <span className="text-pink-400">*</span>
                    </label>
                    <input
                        type="text"
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
                        placeholder="e.g., Nike, Glossier, Apple"
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none"
                    />
                </div>

                <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                    <label className="block text-white font-semibold mb-3">Pitch Type</label>
                    <div className="grid grid-cols-3 gap-2">
                        {[
                            { id: 'cold', name: 'Cold', desc: 'First contact' },
                            { id: 'warm', name: 'Warm', desc: 'They reached out' },
                            { id: 'agency', name: 'Agency', desc: 'Professional' }
                        ].map(type => (
                            <button
                                key={type.id}
                                onClick={() => {
                                    setPitchType(type.id)
                                    setGenerated(false)
                                }}
                                className={`p-3 rounded-lg border-2 transition-all ${pitchType === type.id
                                    ? 'border-pink-500 bg-pink-500/10'
                                    : 'border-[#2a2a2a] bg-[#0a0a0a] hover:border-pink-500/50'
                                    }`}
                            >
                                <div className="text-white font-semibold text-sm">{type.name}</div>
                                <div className="text-xs text-gray-400">{type.desc}</div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Generate Button */}
            <button
                onClick={handleGenerate}
                disabled={!brandName.trim()}
                className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
            >
                {brandName.trim() ? 'Generate Pitch Script 💼' : 'Enter brand name first'}
            </button>

            {/* Generated Pitch */}
            {generated && pitch && (
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-5">
                        <h4 className="text-white font-bold mb-2">✅ Pitch Ready!</h4>
                        <p className="text-gray-300 text-sm">
                            {pitchType === 'cold' ? 'Professional cold outreach' : pitchType === 'warm' ? 'Response to brand inquiry' : 'Agency-style proposal'}
                        </p>
                    </div>

                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <div className="flex items-center justify-between mb-4">
                            <h5 className="text-white font-bold">Email Subject:</h5>
                            <CopyButton text={pitch.subject} />
                        </div>
                        <p className="text-gray-300 bg-[#0a0a0a] p-3 rounded-lg border border-[#2a2a2a]">
                            {pitch.subject}
                        </p>
                    </div>

                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <div className="flex items-center justify-between mb-4">
                            <h5 className="text-white font-bold">Full Pitch:</h5>
                            <CopyButton text={pitch.body} />
                        </div>
                        <pre className="text-gray-300 text-sm whitespace-pre-wrap font-sans bg-[#0a0a0a] p-5 rounded-lg border border-[#2a2a2a] max-h-96 overflow-y-auto">
                            {pitch.body}
                        </pre>
                    </div>

                    {/* Negotiation Tips */}
                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <h4 className="text-white font-bold mb-4">🤝 Negotiation Scripts</h4>
                        <div className="space-y-3">
                            {negotiationTips.map((tip, i) => (
                                <div key={i} className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                                    <div className="text-pink-400 text-sm font-semibold mb-2">{tip.scenario}</div>
                                    <p className="text-gray-300 text-sm mb-2 italic">"{tip.response}"</p>
                                    <p className="text-xs text-gray-500">💡 {tip.tactic}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pro Tips */}
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-5">
                        <h4 className="text-white font-bold mb-3">🚀 Landing the Deal - Pro Tips</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">1.</span>
                                <span>Always include a media kit link (even if it's a simple Canva PDF)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">2.</span>
                                <span>Follow up after 5 days if no response (80% of deals close on follow-up)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">3.</span>
                                <span>Never accept "exposure" as payment - your rent isn't paid in likes</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">4.</span>
                                <span>Get everything in writing: deliverables, timeline, payment terms, usage rights</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">5.</span>
                                <span>Pro tip: Charge 50% upfront, 50% on delivery to protect yourself</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

function PromptLibrary() { return <div className="text-white">Prompt Library Coming Soon</div> }

function LoraChecklist() {
    const steps = [
        "Collect 15-20 high-quality photos of your character from different angles",
        "Ensure varied lighting conditions (natural, studio, indoor, outdoor)",
        "Crop and resize all images to 512x512 or 1024x1024 resolution",
        "Use consistent subject - same person/character in all training images",
        "Write detailed captions for each image describing pose, outfit, and setting",
        "Set training steps to 1500-2000 for best results (100 steps per image minimum)",
        "Use learning rate of 0.0001 to prevent overfitting",
        "Enable 'flip augmentation' for more training variety",
        "Test with simple prompts after training to verify consistency",
        "Fine-tune with additional training if results are inconsistent"
    ]

    return (
        <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
            <h3 className="text-lg font-bold text-white mb-4">✅ LoRA Training Pre-Flight Checklist</h3>
            <p className="text-gray-400 text-sm mb-6">Follow these steps to train a consistent AI character face model:</p>
            <div className="space-y-3">
                {steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-[#0a0a0a] rounded-lg border border-[#2a2a2a] hover:border-[#3b82f6] transition-colors">
                        <div className="w-8 h-8 rounded-full border-2 border-[#3b82f6] flex items-center justify-center text-[#3b82f6] text-sm font-bold flex-shrink-0 mt-0.5">
                            {i + 1}
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">{step}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

function VoiceSettings() {
    const presets = [
        { name: "Bella (Viral Narrator)", stability: 0.45, clarity: 0.85, style: 0.20, description: "Perfect for storytelling and viral content" },
        { name: "Adam (Deep Professional)", stability: 0.50, clarity: 0.90, style: 0.00, description: "Corporate videos and professional narration" },
        { name: "Rachel (Conversational)", stability: 0.35, clarity: 0.75, style: 0.40, description: "Natural, friendly tone for tutorials" },
        { name: "Aria (Energetic)", stability: 0.30, clarity: 0.80, style: 0.50, description: "High-energy promotional content" }
    ]

    return (
        <div className="space-y-4">
            <div className="bg-[#141414] p-4 rounded-xl border border-[#1f1f1f]">
                <h3 className="text-white font-bold mb-2">🎙️ ElevenLabs Voice Settings Presets</h3>
                <p className="text-gray-400 text-sm">Optimal settings for ultra-realistic AI voice cloning</p>
            </div>

            {presets.map((preset, i) => (
                <div key={i} className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                    <div className="mb-4">
                        <h4 className="text-white font-bold mb-1">{preset.name}</h4>
                        <p className="text-gray-400 text-sm">{preset.description}</p>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <p className="text-xs text-gray-500 mb-2">Stability</p>
                            <div className="h-3 bg-[#2a2a2a] rounded-full overflow-hidden">
                                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${preset.stability * 100}%` }} />
                            </div>
                            <p className="text-xs text-right text-gray-400 mt-1">{preset.stability}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 mb-2">Clarity</p>
                            <div className="h-3 bg-[#2a2a2a] rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 rounded-full" style={{ width: `${preset.clarity * 100}%` }} />
                            </div>
                            <p className="text-xs text-right text-gray-400 mt-1">{preset.clarity}</p>
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 mb-2">Style</p>
                            <div className="h-3 bg-[#2a2a2a] rounded-full overflow-hidden">
                                <div className="h-full bg-purple-500 rounded-full" style={{ width: `${preset.style * 100}%` }} />
                            </div>
                            <p className="text-xs text-right text-gray-400 mt-1">{preset.style}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

function FanvueBios() {
    const templates = [
        "Your AI girlfriend 🤖❤️ | Exclusive content 🔞 | Chat with me 24/7 | Custom requests open 💌",
        "Digital dreams, real desires ☁️✨ | 18+ AI Model | Private shows available | DM for customs",
        "Not real, but feels like it 😉 | AI Art & Exclusive content | Daily uploads | Link below 👇",
        "Virtual vixen 💋 | AI-powered companionship | Subscribe for exclusive access | Custom content available",
        "Your fantasy, perfected by AI 🌟 | Premium content daily | Personal chats | No limits 🔥"
    ]

    return (
        <div className="space-y-4">
            <div className="bg-[#141414] p-4 rounded-xl border border-[#1f1f1f]">
                <h3 className="text-white font-bold mb-2">💎 High-Converting Fanvue Bios</h3>
                <p className="text-gray-400 text-sm">Proven bio templates with 8-12% conversion rates</p>
            </div>

            {templates.map((bio, i) => (
                <div key={i} className="bg-[#141414] p-4 rounded-lg border border-[#1f1f1f] hover:border-[#3b82f6] transition-colors">
                    <div className="flex items-start justify-between gap-4">
                        <p className="text-white font-medium flex-1">{bio}</p>
                        <CopyButton text={bio} />
                    </div>
                </div>
            ))}

            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-4">
                <p className="text-sm text-gray-300">
                    <strong className="text-purple-400">Pro Tip:</strong> Include emojis, mention "AI" for transparency,
                    highlight exclusivity, and always include a clear call-to-action!
                </p>
            </div>
        </div>
    )
}


function NicheValidator() {
    const [nicheName, setNicheName] = useState('')
    const [hasExperience, setHasExperience] = useState(false)
    const [passionLevel, setPassionLevel] = useState(5)
    const [marketSize, setMarketSize] = useState('medium')
    const [competitionLevel, setCompetitionLevel] = useState('medium')
    const [pricePoint, setPricePoint] = useState('medium')
    const [painIntensity, setPainIntensity] = useState(5)
    const [audienceOnline, setAudienceOnline] = useState(true)
    const [evergreen, setEvergreen] = useState(true)
    const [validated, setValidated] = useState(false)

    const calculateScore = () => {
        let total = 0
        const maxScore = 100
        const breakdown: any = {}

        // 1. Market Size (0-15 points)
        const marketScores = { 'small': 5, 'medium': 10, 'large': 15 }
        breakdown.marketSize = marketScores[marketSize as keyof typeof marketScores]
        total += breakdown.marketSize

        // 2. Competition Level (0-15 points, inverse)
        const compScores = { 'low': 15, 'medium': 10, 'high': 5 }
        breakdown.competition = compScores[competitionLevel as keyof typeof compScores]
        total += breakdown.competition

        // 3. Price Point Potential (0-15 points)
        const priceScores = { 'low': 5, 'medium': 10, 'high': 15 }
        breakdown.pricePoint = priceScores[pricePoint as keyof typeof priceScores]
        total += breakdown.pricePoint

        // 4. Pain Intensity (0-15 points)
        breakdown.painIntensity = Math.round((painIntensity / 10) * 15)
        total += breakdown.painIntensity

        // 5. Your Experience (0-10 points)
        breakdown.experience = hasExperience ? 10 : 0
        total += breakdown.experience

        // 6. Your Passion (0-10 points)
        breakdown.passion = Math.round((passionLevel / 10) * 10)
        total += breakdown.passion

        // 7. Audience Online (0-10 points)
        breakdown.audienceOnline = audienceOnline ? 10 : 3
        total += breakdown.audienceOnline

        // 8. Evergreen Potential (0-10 points)
        breakdown.evergreen = evergreen ? 10 : 5
        total += breakdown.evergreen

        return { total, breakdown, maxScore }
    }

    const getRecommendation = (score: number) => {
        if (score >= 85) {
            return {
                verdict: '🎯 EXCELLENT NICHE',
                color: 'green',
                message: 'This niche has exceptional potential. Launch immediately!',
                actions: [
                    'Start creating content within 48 hours',
                    'Pre-sell a pilot product to validate demand',
                    'Build email list with lead magnet',
                    'Set up social media presence today'
                ]
            }
        } else if (score >= 70) {
            return {
                verdict: '✅ STRONG NICHE',
                color: 'emerald',
                message: 'Solid choice with good profit potential. Move forward with confidence.',
                actions: [
                    'Research top 10 competitors to find gaps',
                    'Create unique angle/positioning',
                    'Build MVP product first',
                    'Test with small audience before scaling'
                ]
            }
        } else if (score >= 55) {
            return {
                verdict: '⚠️ PROCEED WITH CAUTION',
                color: 'yellow',
                message: 'Has potential but needs refinement. Consider pivoting or narrowing focus.',
                actions: [
                    'Narrow down to specific sub-niche',
                    'Validate with 10+ customer interviews',
                    'Find unique differentiation angle',
                    'Test demand with content first (no product yet)'
                ]
            }
        } else {
            return {
                verdict: '❌ HIGH RISK',
                color: 'red',
                message: 'This niche has significant challenges. Consider alternatives.',
                actions: [
                    'Explore related niches with better scores',
                    'Build expertise before monetizing',
                    'Look for underserved sub-segments',
                    'Consider passion project vs profit project'
                ]
            }
        }
    }

    const getMonetizationPotential = () => {
        const avgRevenue = {
            low: { min: 1000, max: 5000 },
            medium: { min: 5000, max: 25000 },
            high: { min: 25000, max: 100000 }
        }

        const range = avgRevenue[pricePoint as keyof typeof avgRevenue]

        return {
            range,
            products: [
                { name: 'Digital Course', price: pricePoint === 'low' ? 47 : pricePoint === 'medium' ? 197 : 497 },
                { name: 'Coaching (1-on-1)', price: pricePoint === 'low' ? 100 : pricePoint === 'medium' ? 300 : 1000 },
                { name: 'Group Program', price: pricePoint === 'low' ? 27 : pricePoint === 'medium' ? 97 : 297 },
                { name: 'Mastermind', price: pricePoint === 'low' ? 500 : pricePoint === 'medium' ? 2000 : 10000 }
            ]
        }
    }

    const handleValidate = () => {
        if (!nicheName.trim()) {
            alert('Please enter a niche name first!')
            return
        }
        setValidated(true)
    }

    const score = validated ? calculateScore() : null
    const recommendation = score ? getRecommendation(score.total) : null
    const monetization = validated ? getMonetizationPotential() : null

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">🎯 Niche Validator</h3>
                <p className="text-gray-300 text-sm">
                    Validate your product idea before you waste months building the wrong thing.
                    <strong className="text-blue-400"> 10-factor scoring system used by $1M+ course creators.</strong>
                </p>
            </div>

            {/* Niche Input */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <label className="block text-white font-semibold mb-3">What's your niche idea?</label>
                <input
                    type="text"
                    placeholder="e.g., Teaching freelancers to automate client workflows"
                    value={nicheName}
                    onChange={(e) => setNicheName(e.target.value)}
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                />
            </div>

            {/* Factor 1: Market Size */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h4 className="text-white font-semibold">Market Size</h4>
                        <p className="text-gray-400 text-sm">How many potential customers exist?</p>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        0-15 points
                    </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    {(['small', 'medium', 'large'] as const).map(size => (
                        <button
                            key={size}
                            onClick={() => setMarketSize(size)}
                            className={`p-4 rounded-lg border-2 transition-all ${marketSize === size
                                ? 'border-blue-500 bg-blue-500/10'
                                : 'border-[#2a2a2a] bg-[#0a0a0a] hover:border-blue-500/50'
                                }`}
                        >
                            <div className="text-white font-bold capitalize mb-1">{size}</div>
                            <div className="text-xs text-gray-400">
                                {size === 'small' && '<10k people'}
                                {size === 'medium' && '10k-100k'}
                                {size === 'large' && '100k+ people'}
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Factor 2: Competition */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h4 className="text-white font-semibold">Competition Level</h4>
                        <p className="text-gray-400 text-sm">How saturated is this niche?</p>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        0-15 points
                    </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    {(['low', 'medium', 'high'] as const).map(level => (
                        <button
                            key={level}
                            onClick={() => setCompetitionLevel(level)}
                            className={`p-4 rounded-lg border-2 transition-all ${competitionLevel === level
                                ? 'border-blue-500 bg-blue-500/10'
                                : 'border-[#2a2a2a] bg-[#0a0a0a] hover:border-blue-500/50'
                                }`}
                        >
                            <div className="text-white font-bold capitalize mb-1">{level}</div>
                            <div className="text-xs text-gray-400">
                                {level === 'low' && 'Few competitors'}
                                {level === 'medium' && 'Some players'}
                                {level === 'high' && 'Very crowded'}
                            </div>
                        </button>
                    ))}
                </div>
                <p className="text-xs text-gray-500 mt-3">💡 Tip: Medium competition = proven demand. Low might mean no market.</p>
            </div>

            {/* Factor 3: Price Point */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h4 className="text-white font-semibold">Price Point Potential</h4>
                        <p className="text-gray-400 text-sm">What can you charge for solutions?</p>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        0-15 points
                    </span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                    {(['low', 'medium', 'high'] as const).map(price => (
                        <button
                            key={price}
                            onClick={() => setPricePoint(price)}
                            className={`p-4 rounded-lg border-2 transition-all ${pricePoint === price
                                ? 'border-blue-500 bg-blue-500/10'
                                : 'border-[#2a2a2a] bg-[#0a0a0a] hover:border-blue-500/50'
                                }`}
                        >
                            <div className="text-white font-bold capitalize mb-1">{price}</div>
                            <div className="text-xs text-gray-400">
                                {price === 'low' && '$10-$50'}
                                {price === 'medium' && '$100-$300'}
                                {price === 'high' && '$500+'}
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Factor 4: Pain Intensity */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h4 className="text-white font-semibold">Pain Intensity: {painIntensity}/10</h4>
                        <p className="text-gray-400 text-sm">How desperate are they for a solution?</p>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        0-15 points
                    </span>
                </div>
                <input
                    type="range"
                    min="1"
                    max="10"
                    value={painIntensity}
                    onChange={(e) => setPainIntensity(parseInt(e.target.value))}
                    className="w-full h-2 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Mild annoyance</span>
                    <span>Bleeding neck problem</span>
                </div>
            </div>

            {/* Factor 5: Your Experience */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h4 className="text-white font-semibold">Your Experience</h4>
                        <p className="text-gray-400 text-sm">Do you have expertise in this niche?</p>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        0-10 points
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <button
                        onClick={() => setHasExperience(false)}
                        className={`p-4 rounded-lg border-2 transition-all ${!hasExperience
                            ? 'border-blue-500 bg-blue-500/10'
                            : 'border-[#2a2a2a] bg-[#0a0a0a] hover:border-blue-500/50'
                            }`}
                    >
                        <div className="text-white font-bold">Beginner</div>
                        <div className="text-xs text-gray-400">Learning as I go</div>
                    </button>
                    <button
                        onClick={() => setHasExperience(true)}
                        className={`p-4 rounded-lg border-2 transition-all ${hasExperience
                            ? 'border-blue-500 bg-blue-500/10'
                            : 'border-[#2a2a2a] bg-[#0a0a0a] hover:border-blue-500/50'
                            }`}
                    >
                        <div className="text-white font-bold">Experienced</div>
                        <div className="text-xs text-gray-400">I know this field</div>
                    </button>
                </div>
            </div>

            {/* Factor 6: Passion Level */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <h4 className="text-white font-semibold">Your Passion: {passionLevel}/10</h4>
                        <p className="text-gray-400 text-sm">Could you talk about this daily for 2 years?</p>
                    </div>
                    <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                        0-10 points
                    </span>
                </div>
                <input
                    type="range"
                    min="1"
                    max="10"
                    value={passionLevel}
                    onChange={(e) => setPassionLevel(parseInt(e.target.value))}
                    className="w-full h-2 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>Just for money</span>
                    <span>Absolutely love it</span>
                </div>
            </div>

            {/* Factor 7 & 8: Quick Toggles */}
            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                    <div className="flex items-start justify-between mb-3">
                        <div>
                            <h4 className="text-white font-semibold">Audience Online?</h4>
                            <p className="text-gray-400 text-sm">Active on social/forums?</p>
                        </div>
                        <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                            0-10pts
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <button
                            onClick={() => setAudienceOnline(true)}
                            className={`p-3 rounded-lg border-2 transition-all text-sm ${audienceOnline
                                ? 'border-green-500 bg-green-500/10 text-white'
                                : 'border-[#2a2a2a] bg-[#0a0a0a] text-gray-400'
                                }`}
                        >
                            ✅ Yes
                        </button>
                        <button
                            onClick={() => setAudienceOnline(false)}
                            className={`p-3 rounded-lg border-2 transition-all text-sm ${!audienceOnline
                                ? 'border-red-500 bg-red-500/10 text-white'
                                : 'border-[#2a2a2a] bg-[#0a0a0a] text-gray-400'
                                }`}
                        >
                            ❌ No
                        </button>
                    </div>
                </div>

                <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                    <div className="flex items-start justify-between mb-3">
                        <div>
                            <h4 className="text-white font-semibold">Evergreen?</h4>
                            <p className="text-gray-400 text-sm">Relevant in 5 years?</p>
                        </div>
                        <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                            0-10pts
                        </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <button
                            onClick={() => setEvergreen(true)}
                            className={`p-3 rounded-lg border-2 transition-all text-sm ${evergreen
                                ? 'border-green-500 bg-green-500/10 text-white'
                                : 'border-[#2a2a2a] bg-[#0a0a0a] text-gray-400'
                                }`}
                        >
                            ✅ Yes
                        </button>
                        <button
                            onClick={() => setEvergreen(false)}
                            className={`p-3 rounded-lg border-2 transition-all text-sm ${!evergreen
                                ? 'border-red-500 bg-red-500/10 text-white'
                                : 'border-[#2a2a2a] bg-[#0a0a0a] text-gray-400'
                                }`}
                        >
                            ❌ No
                        </button>
                    </div>
                </div>
            </div>

            {/* Validate Button */}
            <button
                onClick={handleValidate}
                disabled={!nicheName.trim()}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
            >
                {nicheName.trim() ? `Validate "${nicheName}"` : 'Enter a niche name first'}
            </button>

            {/* Results */}
            {validated && score && recommendation && monetization && (
                <div className="space-y-4">
                    {/* Score Card */}
                    <div className={`bg-gradient-to-br from-${recommendation.color}-500/10 to-${recommendation.color}-600/5 border border-${recommendation.color}-500/20 rounded-xl p-6`}>
                        <div className="text-center mb-6">
                            <div className="text-6xl font-bold text-white mb-2">{score.total}/100</div>
                            <div className={`text-2xl font-bold text-${recommendation.color}-400 mb-2`}>
                                {recommendation.verdict}
                            </div>
                            <p className="text-gray-300">{recommendation.message}</p>
                        </div>

                        {/* Score Breakdown */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
                            <div className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                                <div className="text-xs text-gray-500 mb-1">Market Size</div>
                                <div className="text-2xl font-bold text-white">{score.breakdown.marketSize}/15</div>
                            </div>
                            <div className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                                <div className="text-xs text-gray-500 mb-1">Competition</div>
                                <div className="text-2xl font-bold text-white">{score.breakdown.competition}/15</div>
                            </div>
                            <div className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                                <div className="text-xs text-gray-500 mb-1">Price Point</div>
                                <div className="text-2xl font-bold text-white">{score.breakdown.pricePoint}/15</div>
                            </div>
                            <div className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                                <div className="text-xs text-gray-500 mb-1">Pain Intensity</div>
                                <div className="text-2xl font-bold text-white">{score.breakdown.painIntensity}/15</div>
                            </div>
                        </div>

                        {/* Action Plan */}
                        <div className="bg-[#0a0a0a] p-5 rounded-lg border border-[#2a2a2a]">
                            <h4 className="text-white font-bold mb-3">📋 Your Action Plan:</h4>
                            <ul className="space-y-2">
                                {recommendation.actions.map((action, i) => (
                                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                                        <span className={`text-${recommendation.color}-400 font-bold`}>{i + 1}.</span>
                                        <span>{action}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Monetization Potential */}
                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <h4 className="text-white font-bold text-lg mb-4">💰 Monetization Potential</h4>
                        <div className="mb-4">
                            <p className="text-gray-400 text-sm mb-2">Expected Monthly Revenue (Year 1):</p>
                            <div className="text-3xl font-bold text-green-400">
                                ${monetization.range.min.toLocaleString()} - ${monetization.range.max.toLocaleString()}
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {monetization.products.map((product, i) => (
                                <div key={i} className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                                    <div className="text-white font-semibold mb-1">{product.name}</div>
                                    <div className="text-2xl font-bold text-purple-400">${product.price}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4">
                        <p className="text-sm text-gray-300">
                            <strong className="text-blue-400">Pro Tip:</strong> A score above 70 means GO! Below 55? Pivot or find a sub-niche. The best niches combine passion + profit + expertise.
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

function CourseOutline() {
    const [courseName, setCourseName] = useState('')
    const [targetAudience, setTargetAudience] = useState('')
    const [mainOutcome, setMainOutcome] = useState('')
    const [timeframe, setTimeframe] = useState('30-days')
    const [modules, setModules] = useState<any[]>([])
    const [generated, setGenerated] = useState(false)

    const timeframes = [
        { id: '7-days', name: '7-Day Sprint', lessons: 7, pace: 'Fast' },
        { id: '30-days', name: '30-Day Program', lessons: 12, pace: 'Standard' },
        { id: '90-days', name: '90-Day Mastery', lessons: 20, pace: 'Thorough' }
    ]

    const generateOutline = () => {
        const selectedTimeframe = timeframes.find(t => t.id === timeframe)

        // Generate module structure based on timeframe
        const moduleTemplates = {
            '7-days': [
                { title: 'Foundation & Quick Wins', lessons: 2 },
                { title: 'Core Implementation', lessons: 3 },
                { title: 'Optimization & Results', lessons: 2 }
            ],
            '30-days': [
                { title: 'Getting Started Right', lessons: 3 },
                { title: 'Building Your Foundation', lessons: 3 },
                { title: 'Advanced Strategies', lessons: 3 },
                { title: 'Scaling & Automation', lessons: 3 }
            ],
            '90-days': [
                { title: 'Week 1-2: Foundations', lessons: 4 },
                { title: 'Week 3-4: Implementation', lessons: 4 },
                { title: 'Week 5-6: Optimization', lessons: 4 },
                { title: 'Week 7-8: Advanced Tactics', lessons: 4 },
                { title: 'Week 9-12: Mastery & Scaling', lessons: 4 }
            ]
        }

        const templates = moduleTemplates[timeframe as keyof typeof moduleTemplates]

        const generatedModules = templates.map((template, modIndex) => ({
            id: modIndex + 1,
            title: template.title,
            objective: `Master ${mainOutcome.toLowerCase()} through ${template.title.toLowerCase()}`,
            duration: `${template.lessons * 15}-${template.lessons * 25} minutes`,
            lessons: Array.from({ length: template.lessons }, (_, lesIndex) => ({
                id: lesIndex + 1,
                title: `Lesson ${lesIndex + 1}: [Specific Topic]`,
                objective: `Learn how to [specific skill/outcome]`,
                duration: '15-20 minutes',
                deliverable: '[Specific action item or worksheet]',
                resources: ['Video walkthrough', 'PDF guide', 'Template/worksheet']
            }))
        }))

        return generatedModules
    }

    const getLearningObjectives = () => {
        return {
            overall: `By the end of this course, ${targetAudience || 'students'} will be able to ${mainOutcome || '[achieve main outcome]'}.`,
            weekly: [
                `Week 1: Understand the core principles and get your first quick win`,
                `Week 2-3: Build sustainable systems that create consistent results`,
                `Week 4: Optimize and scale what's working`,
                `Ongoing: Maintain momentum and avoid common pitfalls`
            ],
            transformation: {
                before: `Struggling ${targetAudience || 'beginner'} with no clear path forward`,
                after: `Confident expert implementing ${mainOutcome || 'proven strategies'} with measurable results`
            }
        }
    }

    const getCompletionTips = () => {
        return [
            {
                tip: 'Keep lessons under 20 minutes',
                impact: '+40% completion rate',
                why: 'Short lessons feel achievable and allow for quick wins'
            },
            {
                tip: 'Include action items after every lesson',
                impact: '+35% engagement',
                why: 'Students retain 90% more when they implement immediately'
            },
            {
                tip: 'Add accountability checkpoints',
                impact: '+50% finish rate',
                why: 'Weekly check-ins keep students on track'
            },
            {
                tip: 'Offer quick wins in first 3 lessons',
                impact: '+60% continued engagement',
                why: 'Early success builds momentum and confidence'
            }
        ]
    }

    const getBonusIdeas = () => {
        return [
            { type: 'Bonus Module', idea: 'Advanced [topic] - Beyond the Basics', value: '$97' },
            { type: 'Live Coaching', idea: 'Monthly Q&A Calls (3 months)', value: '$297' },
            { type: 'Community', idea: 'Private Slack/Discord Channel', value: '$47/mo' },
            { type: 'Templates', idea: 'Done-for-You [resource] Library', value: '$147' },
            { type: 'Certification', idea: 'Completion Certificate + Badge', value: '$197' }
        ]
    }

    const handleGenerate = () => {
        if (!courseName.trim() || !targetAudience.trim() || !mainOutcome.trim()) {
            alert('Please fill in all required fields!')
            return
        }
        const outline = generateOutline()
        setModules(outline)
        setGenerated(true)
    }

    const exportOutline = () => {
        const objectives = getLearningObjectives()
        const outline = `# ${courseName}

## Course Overview
**Target Audience:** ${targetAudience}
**Main Outcome:** ${mainOutcome}
**Duration:** ${timeframes.find(t => t.id === timeframe)?.name}

## Transformation Promise
${objectives.transformation.before} → ${objectives.transformation.after}

## Learning Objectives
${objectives.overall}

${modules.map((mod, i) => `
### Module ${mod.id}: ${mod.title}
**Objective:** ${mod.objective}
**Duration:** ${mod.duration}

${mod.lessons.map((lesson: any, j: number) => `
#### ${lesson.title}
- **Learning Objective:** ${lesson.objective}
- **Duration:** ${lesson.duration}
- **Deliverable:** ${lesson.deliverable}
- **Resources:** ${lesson.resources.join(', ')}
`).join('\n')}
`).join('\n')}

## Bonus Ideas
${getBonusIdeas().map(bonus => `- ${bonus.type}: ${bonus.idea} (Value: ${bonus.value})`).join('\n')}
`
        return outline
    }

    const selectedTimeframe = timeframes.find(t => t.id === timeframe)
    const objectives = generated ? getLearningObjectives() : null
    const completionTips = getCompletionTips()
    const bonusIdeas = getBonusIdeas()

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">📚 Course Outline Builder</h3>
                <p className="text-gray-300 text-sm">
                    Create a <strong className="text-indigo-400">professionally structured course</strong> that students actually finish.
                    <span className="text-gray-400"> Optimized for completion rates.</span>
                </p>
            </div>

            {/* Course Details */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <h4 className="text-white font-semibold mb-4">Course Details</h4>
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-400 text-sm mb-2">
                            Course Name <span className="text-indigo-400">*</span>
                        </label>
                        <input
                            type="text"
                            value={courseName}
                            onChange={(e) => setCourseName(e.target.value)}
                            placeholder="e.g., Instagram Growth Accelerator"
                            className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 text-sm mb-2">
                            Target Audience <span className="text-indigo-400">*</span>
                        </label>
                        <input
                            type="text"
                            value={targetAudience}
                            onChange={(e) => setTargetAudience(e.target.value)}
                            placeholder="e.g., aspiring content creators"
                            className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 text-sm mb-2">
                            Main Outcome <span className="text-indigo-400">*</span>
                        </label>
                        <input
                            type="text"
                            value={mainOutcome}
                            onChange={(e) => setMainOutcome(e.target.value)}
                            placeholder="e.g., grow to 10k followers in 90 days"
                            className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none"
                        />
                    </div>
                </div>
            </div>

            {/* Timeframe Selection */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <label className="block text-white font-semibold mb-4">Course Duration</label>
                <div className="grid md:grid-cols-3 gap-4">
                    {timeframes.map(tf => (
                        <button
                            key={tf.id}
                            onClick={() => {
                                setTimeframe(tf.id)
                                setGenerated(false)
                            }}
                            className={`p-5 rounded-xl border-2 transition-all ${timeframe === tf.id
                                ? 'border-indigo-500 bg-indigo-500/10'
                                : 'border-[#2a2a2a] bg-[#0a0a0a] hover:border-indigo-500/50'
                                }`}
                        >
                            <div className="text-white font-bold mb-2">{tf.name}</div>
                            <div className="text-sm text-gray-400 mb-2">{tf.lessons} lessons total</div>
                            <div className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 inline-block">
                                {tf.pace} pace
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Completion Tips */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <h4 className="text-white font-semibold mb-4">💡 Completion Rate Optimizers</h4>
                <div className="grid md:grid-cols-2 gap-3">
                    {completionTips.map((tip, i) => (
                        <div key={i} className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-white text-sm font-semibold">{tip.tip}</span>
                                <span className="text-xs px-2 py-1 rounded bg-green-500/20 text-green-400 border border-green-500/30">
                                    {tip.impact}
                                </span>
                            </div>
                            <p className="text-xs text-gray-400">{tip.why}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Generate Button */}
            <button
                onClick={handleGenerate}
                disabled={!courseName.trim() || !targetAudience.trim() || !mainOutcome.trim()}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
            >
                {courseName.trim() && targetAudience.trim() && mainOutcome.trim()
                    ? 'Generate Course Outline 📚'
                    : 'Fill in all fields to generate'
                }
            </button>

            {/* Generated Outline */}
            {generated && modules.length > 0 && objectives && (
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-5">
                        <h4 className="text-white font-bold mb-2">✅ Course Structure Ready!</h4>
                        <p className="text-gray-300 text-sm">
                            {modules.length} modules • {modules.reduce((sum, m) => sum + m.lessons.length, 0)} lessons • {selectedTimeframe?.name}
                        </p>
                    </div>

                    {/* Transformation Promise */}
                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <h4 className="text-white font-bold mb-4">🎯 Transformation Promise</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-[#0a0a0a] p-4 rounded-lg border border-red-500/30">
                                <div className="text-red-400 text-sm font-semibold mb-2">Before (Pain Point)</div>
                                <p className="text-gray-300 text-sm">{objectives.transformation.before}</p>
                            </div>
                            <div className="bg-[#0a0a0a] p-4 rounded-lg border border-green-500/30">
                                <div className="text-green-400 text-sm font-semibold mb-2">After (Dream Outcome)</div>
                                <p className="text-gray-300 text-sm">{objectives.transformation.after}</p>
                            </div>
                        </div>
                    </div>

                    {/* Module Breakdown */}
                    <div className="space-y-3">
                        {modules.map((module, i) => (
                            <div key={i} className="bg-[#141414] p-5 rounded-xl border border-[#1f1f1f]">
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h5 className="text-white font-bold">Module {module.id}: {module.title}</h5>
                                        <p className="text-sm text-gray-400 mt-1">{module.objective}</p>
                                    </div>
                                    <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 whitespace-nowrap">
                                        {module.duration}
                                    </span>
                                </div>

                                <div className="space-y-2 mt-4">
                                    {module.lessons.map((lesson: any, j: number) => (
                                        <div key={j} className="bg-[#0a0a0a] p-3 rounded-lg border border-[#2a2a2a]">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-white text-sm font-medium">{lesson.title}</span>
                                                <span className="text-xs text-gray-500">{lesson.duration}</span>
                                            </div>
                                            <p className="text-xs text-gray-400 mb-2">{lesson.objective}</p>
                                            <div className="flex items-center gap-2 text-xs">
                                                <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-400">
                                                    ✓ {lesson.deliverable}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bonus Ideas */}
                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <h4 className="text-white font-bold mb-4">🎁 Bonus & Upsell Ideas</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                            {bonusIdeas.map((bonus, i) => (
                                <div key={i} className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-indigo-400 text-sm font-semibold">{bonus.type}</span>
                                        <span className="text-green-400 font-bold text-sm">{bonus.value}</span>
                                    </div>
                                    <p className="text-gray-300 text-sm">{bonus.idea}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Export Button */}
                    <button
                        onClick={() => {
                            const outline = exportOutline()
                            navigator.clipboard.writeText(outline)
                            alert('Outline copied to clipboard!')
                        }}
                        className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-3 rounded-xl transition-all"
                    >
                        📋 Export Full Outline (Copy to Clipboard)
                    </button>

                    {/* Pro Tips */}
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-5">
                        <h4 className="text-white font-bold mb-3">🚀 Next Steps</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">1.</span>
                                <span>Flesh out each lesson with specific topics and action items</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">2.</span>
                                <span>Create video scripts for the first 3 lessons (quick win zone)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">3.</span>
                                <span>Design worksheets/templates for each module deliverable</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">4.</span>
                                <span>Set up accountability checkpoints (email or community check-ins)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">5.</span>
                                <span>Pro tip: Record all videos before launch to avoid delays</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}


function LaunchCalculator() {
    const [listSize, setListSize] = useState(1000)
    const [openRate, setOpenRate] = useState(35)
    const [clickRate, setClickRate] = useState(15)
    const [conversionRate, setConversionRate] = useState(3)
    const [productPrice, setProductPrice] = useState(197)
    const [sequenceType, setSequenceType] = useState('7-day')
    const [calculated, setCalculated] = useState(false)

    const calculateLaunch = () => {
        // Base calculations
        const opens = Math.round(listSize * (openRate / 100))
        const clicks = Math.round(opens * (clickRate / 100))
        const baseConversions = Math.round(clicks * (conversionRate / 100))

        // Sequence multipliers (7-day performs better due to more touchpoints)
        const sequenceMultiplier = sequenceType === '7-day' ? 1.18 : 1.0
        const adjustedConversions = Math.round(baseConversions * sequenceMultiplier)

        // Cart abandonment recovery (10-15% of cart adds convert via recovery emails)
        const cartAdds = Math.round(clicks * 0.25) // 25% add to cart
        const cartAbandonments = cartAdds - adjustedConversions
        const recoveredSales = Math.round(cartAbandonments * 0.12)

        const totalSales = adjustedConversions + recoveredSales
        const revenue = totalSales * productPrice

        // Scenarios
        const bestCase = {
            sales: Math.round(totalSales * 1.4),
            revenue: Math.round(revenue * 1.4),
            description: 'Strong offer, proven audience, optimized emails'
        }

        const worstCase = {
            sales: Math.round(totalSales * 0.6),
            revenue: Math.round(revenue * 0.6),
            description: 'Weak offer, cold list, or poor email copy'
        }

        return {
            funnel: {
                listSize,
                opens,
                clicks,
                cartAdds,
                baseConversions,
                recoveredSales,
                totalSales,
                revenue
            },
            scenarios: {
                median: { sales: totalSales, revenue },
                best: bestCase,
                worst: worstCase
            },
            metrics: {
                openRate: ((opens / listSize) * 100).toFixed(1),
                clickRate: ((clicks / opens) * 100).toFixed(1),
                conversionRate: ((totalSales / clicks) * 100).toFixed(1),
                earningsPerSubscriber: (revenue / listSize).toFixed(2),
                cartRecoveryRate: ((recoveredSales / cartAbandonments) * 100).toFixed(1)
            }
        }
    }

    const getSequenceComparison = () => {
        return {
            '5-day': {
                name: '5-Day Launch',
                emails: ['Teaser', 'Cart Open', 'Mid-Cart', 'Last Call', 'Final Hours'],
                multiplier: 1.0,
                pros: ['Shorter scarcity window', 'Less email fatigue', 'Good for small lists (<1k)'],
                cons: ['Fewer touchpoints', 'Less time to build momentum', 'Lower total revenue']
            },
            '7-day': {
                name: '7-Day Launch',
                emails: ['Teaser', 'Cart Open', 'Social Proof', 'Mid-Cart', 'Objections', 'Last 24hrs', 'Final Hours'],
                multiplier: 1.18,
                pros: ['More touchpoints = higher conversions', 'Time to address objections', 'Better for larger lists (1k+)'],
                cons: ['Requires more email copy', 'Risk of unsubscribes', 'Longer commitment']
            }
        }
    }

    const getRecommendations = () => {
        const recs: string[] = []

        if (openRate < 25) {
            recs.push('⚠️ Open rate below 25% - clean your list and improve subject lines')
        }
        if (openRate >= 35) {
            recs.push('✅ Strong open rate! Your audience is engaged.')
        }

        if (clickRate < 10) {
            recs.push('⚠️ Click rate below 10% - improve email copy and CTAs')
        }
        if (clickRate >= 15) {
            recs.push('✅ Excellent click rate! Your emails are compelling.')
        }

        if (conversionRate < 2) {
            recs.push('⚠️ Conversion below 2% - test pricing or refine offer')
        }
        if (conversionRate >= 3) {
            recs.push('✅ Solid conversion rate! Your offer resonates.')
        }

        if (listSize < 500) {
            recs.push('💡 Small list - consider 5-day launch to avoid fatigue')
        } else if (listSize >= 1000) {
            recs.push('💡 Large list - 7-day sequence will maximize revenue')
        }

        if (productPrice < 50) {
            recs.push('💡 Low price point - upsell during checkout to increase AOV')
        } else if (productPrice >= 300) {
            recs.push('💡 High price - use urgency tactics and payment plans')
        }

        return recs
    }

    const handleCalculate = () => {
        setCalculated(true)
    }

    const results = calculated ? calculateLaunch() : null
    const sequences = getSequenceComparison()
    const recommendations = calculated ? getRecommendations() : []

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">💰 Launch Revenue Calculator</h3>
                <p className="text-gray-300 text-sm">
                    Project your launch revenue with <strong className="text-emerald-400">scientific accuracy</strong>.
                    Compare 5-day vs 7-day sequences and optimize for maximum sales.
                </p>
            </div>

            {/* Input Section */}
            <div className="grid md:grid-cols-2 gap-6">
                {/* List Details */}
                <div className="space-y-4">
                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <label className="block text-white font-semibold mb-3">
                            Email List Size
                        </label>
                        <input
                            type="number"
                            value={listSize}
                            onChange={(e) => setListSize(parseInt(e.target.value) || 0)}
                            className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none"
                            min="0"
                        />
                        <p className="text-xs text-gray-500 mt-2">Total subscribers who will receive launch emails</p>
                    </div>

                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <label className="block text-white font-semibold mb-3">
                            Product Price: ${productPrice}
                        </label>
                        <input
                            type="range"
                            min="27"
                            max="997"
                            step="10"
                            value={productPrice}
                            onChange={(e) => setProductPrice(parseInt(e.target.value))}
                            className="w-full h-2 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                            <span>$27</span>
                            <span>$997</span>
                        </div>
                    </div>
                </div>

                {/* Conversion Metrics */}
                <div className="space-y-4">
                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <label className="block text-white font-semibold mb-3">
                            Open Rate: {openRate}%
                        </label>
                        <input
                            type="range"
                            min="15"
                            max="60"
                            value={openRate}
                            onChange={(e) => setOpenRate(parseInt(e.target.value))}
                            className="w-full h-2 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                            <span>15% (Cold)</span>
                            <span>35% (Avg)</span>
                            <span>60% (Hot)</span>
                        </div>
                    </div>

                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <label className="block text-white font-semibold mb-3">
                            Click Rate: {clickRate}%
                        </label>
                        <input
                            type="range"
                            min="5"
                            max="35"
                            value={clickRate}
                            onChange={(e) => setClickRate(parseInt(e.target.value))}
                            className="w-full h-2 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                            <span>5% (Weak)</span>
                            <span>15% (Avg)</span>
                            <span>35% (Strong)</span>
                        </div>
                    </div>

                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <label className="block text-white font-semibold mb-3">
                            Conversion Rate: {conversionRate}%
                        </label>
                        <input
                            type="range"
                            min="1"
                            max="10"
                            value={conversionRate}
                            onChange={(e) => setConversionRate(parseInt(e.target.value))}
                            className="w-full h-2 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs text-gray-500 mt-2">
                            <span>1% (Poor)</span>
                            <span>3% (Good)</span>
                            <span>10% (Excellent)</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sequence Type */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <label className="block text-white font-semibold mb-4">Launch Sequence Type</label>
                <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(sequences).map(([key, seq]) => (
                        <button
                            key={key}
                            onClick={() => {
                                setSequenceType(key)
                                setCalculated(false)
                            }}
                            className={`p-5 rounded-xl border-2 transition-all text-left ${sequenceType === key
                                ? 'border-emerald-500 bg-emerald-500/10'
                                : 'border-[#2a2a2a] bg-[#0a0a0a] hover:border-emerald-500/50'
                                }`}
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="text-white font-bold">{seq.name}</h4>
                                <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                                    +{((seq.multiplier - 1) * 100).toFixed(0)}% boost
                                </span>
                            </div>
                            <p className="text-xs text-gray-400 mb-3">{seq.emails.length} emails total</p>
                            <div className="space-y-1">
                                <p className="text-xs text-green-400">✓ {seq.pros[0]}</p>
                                <p className="text-xs text-red-400">✗ {seq.cons[0]}</p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Calculate Button */}
            <button
                onClick={handleCalculate}
                className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg"
            >
                Calculate Launch Revenue 💰
            </button>

            {/* Results */}
            {calculated && results && (
                <div className="space-y-4">
                    {/* Revenue Cards */}
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 rounded-xl p-6">
                            <div className="text-xs text-red-400 font-semibold mb-1">Worst Case</div>
                            <div className="text-3xl font-bold text-white mb-1">
                                ${results.scenarios.worst.revenue.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-400">{results.scenarios.worst.sales} sales</div>
                            <p className="text-xs text-gray-500 mt-2">{results.scenarios.worst.description}</p>
                        </div>

                        <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 rounded-xl p-6">
                            <div className="text-xs text-emerald-400 font-semibold mb-1">Expected (Median)</div>
                            <div className="text-4xl font-bold text-white mb-1">
                                ${results.scenarios.median.revenue.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-400">{results.scenarios.median.sales} sales</div>
                            <p className="text-xs text-emerald-400 mt-2">Most likely outcome</p>
                        </div>

                        <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-xl p-6">
                            <div className="text-xs text-green-400 font-semibold mb-1">Best Case</div>
                            <div className="text-3xl font-bold text-white mb-1">
                                ${results.scenarios.best.revenue.toLocaleString()}
                            </div>
                            <div className="text-sm text-gray-400">{results.scenarios.best.sales} sales</div>
                            <p className="text-xs text-gray-500 mt-2">{results.scenarios.best.description}</p>
                        </div>
                    </div>

                    {/* Funnel Breakdown */}
                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <h4 className="text-white font-bold mb-4">📊 Conversion Funnel Breakdown</h4>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-[#0a0a0a] rounded-lg border border-[#2a2a2a]">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                                    <span className="text-white text-sm">Email List</span>
                                </div>
                                <span className="text-white font-bold">{results.funnel.listSize.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-[#0a0a0a] rounded-lg border border-[#2a2a2a]">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                                    <span className="text-white text-sm">Opens ({results.metrics.openRate}%)</span>
                                </div>
                                <span className="text-white font-bold">{results.funnel.opens.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-[#0a0a0a] rounded-lg border border-[#2a2a2a]">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-pink-500"></div>
                                    <span className="text-white text-sm">Clicks ({results.metrics.clickRate}%)</span>
                                </div>
                                <span className="text-white font-bold">{results.funnel.clicks.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-[#0a0a0a] rounded-lg border border-[#2a2a2a]">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <span className="text-white text-sm">Cart Adds (25%)</span>
                                </div>
                                <span className="text-white font-bold">{results.funnel.cartAdds.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-[#0a0a0a] rounded-lg border border-[#2a2a2a]">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    <span className="text-white text-sm">Initial Sales ({results.metrics.conversionRate}%)</span>
                                </div>
                                <span className="text-white font-bold">{results.funnel.baseConversions.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-[#0a0a0a] rounded-lg border border-emerald-500/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                                    <span className="text-white text-sm font-semibold">Recovery Sales ({results.metrics.cartRecoveryRate}%)</span>
                                </div>
                                <span className="text-emerald-400 font-bold">+{results.funnel.recoveredSales.toLocaleString()}</span>
                            </div>
                        </div>

                        <div className="mt-4 p-4 bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 rounded-lg">
                            <div className="flex items-center justify-between">
                                <span className="text-white font-bold text-lg">Total Sales</span>
                                <span className="text-emerald-400 font-bold text-2xl">{results.funnel.totalSales}</span>
                            </div>
                            <div className="flex items-center justify-between mt-2">
                                <span className="text-gray-400 text-sm">Revenue</span>
                                <span className="text-white font-bold text-xl">${results.funnel.revenue.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <h4 className="text-white font-bold mb-4">🎯 Key Performance Metrics</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                                <div className="text-xs text-gray-500 mb-1">Earnings Per Subscriber</div>
                                <div className="text-2xl font-bold text-emerald-400">${results.metrics.earningsPerSubscriber}</div>
                                <p className="text-xs text-gray-500 mt-1">Industry avg: $0.50-$2.00</p>
                            </div>
                            <div className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                                <div className="text-xs text-gray-500 mb-1">Cart Recovery Rate</div>
                                <div className="text-2xl font-bold text-purple-400">{results.metrics.cartRecoveryRate}%</div>
                                <p className="text-xs text-gray-500 mt-1">+${(results.funnel.recoveredSales * productPrice).toLocaleString()} recovered</p>
                            </div>
                        </div>
                    </div>

                    {/* Sequence Comparison */}
                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <h4 className="text-white font-bold mb-4">📧 {sequences[sequenceType as '5-day' | '7-day'].name} Email Sequence</h4>
                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <h5 className="text-green-400 text-sm font-semibold mb-2">Pros:</h5>
                                <ul className="space-y-1">
                                    {sequences[sequenceType as '5-day' | '7-day'].pros.map((pro: string, i: number) => (
                                        <li key={i} className="text-xs text-gray-300">✓ {pro}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h5 className="text-red-400 text-sm font-semibold mb-2">Cons:</h5>
                                <ul className="space-y-1">
                                    {sequences[sequenceType as '5-day' | '7-day'].cons.map((con: string, i: number) => (
                                        <li key={i} className="text-xs text-gray-300">✗ {con}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                            <h5 className="text-white text-sm font-semibold mb-2">Email Schedule:</h5>
                            <div className="flex flex-wrap gap-2">
                                {sequences[sequenceType as '5-day' | '7-day'].emails.map((email: string, i: number) => (
                                    <span key={i} className="px-3 py-1 bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-full text-xs">
                                        Day {i + 1}: {email}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Recommendations */}
                    {recommendations.length > 0 && (
                        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-5">
                            <h4 className="text-white font-bold mb-3">💡 Optimization Recommendations</h4>
                            <ul className="space-y-2">
                                {recommendations.map((rec, i) => (
                                    <li key={i} className="text-sm text-gray-300">{rec}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}


function EmailSwipes() {
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState(197)
    const [launchType, setLaunchType] = useState('course')
    const [emailDay, setEmailDay] = useState(1)
    const [generated, setGenerated] = useState(false)

    const launchTypes = [
        { id: 'course', name: '📚 Online Course', emoji: '📚' },
        { id: 'ebook', name: '📖 eBook/Guide', emoji: '📖' },
        { id: 'membership', name: '🎯 Membership', emoji: '🎯' },
        { id: 'coaching', name: '💡 Coaching Program', emoji: '💡' }
    ]

    const generateEmailSequence = () => {
        const productType = launchTypes.find(t => t.id === launchType)

        const emails = {
            1: {
                day: 'Day 1',
                name: 'Pre-Launch Teaser',
                goal: 'Build curiosity and anticipation',
                subjects: [
                    `🚨 Something big is coming...`,
                    `I've been working on this for 6 months (finally ready!)`,
                    `[SNEAK PEEK] You're going to want to see this`,
                    `The results speak for themselves 👀`,
                    `This changes everything (launching soon)`
                ],
                body: `Hey [Name],

I'm SO excited (and a little nervous) to share what I've been building behind the scenes for the past few months.

It's called **${productName || '[Product Name]'}** — and it's specifically designed to help ${launchType === 'course' ? 'people like you master [skill]' : launchType === 'ebook' ? 'solve [problem] once and for all' : launchType === 'membership' ? 'get ongoing support and accountability' : 'get personalized guidance and breakthroughs'}.

Here's what makes this different:

✅ I've taken everything I've learned from [X years/results] and distilled it into a step-by-step system
✅ No fluff, no theory — just actionable strategies that work
✅ Perfect for ${launchType === 'course' ? 'busy people who want results fast' : launchType === 'ebook' ? 'self-starters who love learning' : launchType === 'membership' ? 'people who thrive in community' : 'those ready to invest in themselves'}

**I'm opening the doors this week** (launching ${launchType === 'course' ? 'Tuesday' : 'Wednesday'} at 9am).

If you want early access + a special bonus I'm only offering to this list, keep an eye on your inbox. 👀

More details coming tomorrow.

Talk soon,
[Your Name]

P.S. - I'm only taking [50/100/limited number] people in this first round, so if you're interested... don't sleep on this.`,

                tips: [
                    'Send 48-72 hours before cart opens',
                    'Create mystery - don\'t reveal everything yet',
                    'Mention scarcity (limited spots) early',
                    'Expected open rate: 25-35%'
                ]
            },
            2: {
                day: 'Day 2',
                name: 'Cart Open + Transformation Story',
                goal: 'Show the transformation, open cart',
                subjects: [
                    `✨ It's LIVE! ${productName || '[Product]'} is now open`,
                    `From [pain point] to [result] (here's how)`,
                    `🎁 Early bird bonus expires in 48 hours`,
                    `The doors are open (but not for long)`,
                    `This is your chance to [achieve outcome]`
                ],
                body: `Hey [Name],

The wait is over. 🎉

**${productName || '[Product Name]'}** is officially LIVE and enrollment is now open.

Let me get real with you for a second...

A year ago, I was [struggling with same problem your audience has]. I tried everything:
• [Solution 1] - didn't work
• [Solution 2] - waste of money
• [Solution 3] - too complicated

Nothing stuck. Nothing worked long-term.

That's when I realized: the problem wasn't me (or you). The problem was the approach.

So I built something different. Something that actually works.

**Inside ${productName || '[Product]'}, you'll get:**

${launchType === 'course' ? `
📚 8 Core Modules covering everything from [topic 1] to [advanced strategy]
🎥 25+ video lessons (binge-able format, 10-15 min each)
📝 Worksheets & templates for instant implementation
💬 Private community for support & accountability
` : launchType === 'ebook' ? `
📖 Complete ${productPrice < 50 ? '50' : productPrice < 100 ? '100' : '150'}-page blueprint covering [topic]
✅ Checklists and action plans you can use TODAY
📊 Case studies from real people getting real results
🎁 Bonus resources & templates
` : launchType === 'membership' ? `
🗓️ Weekly live coaching calls (+ replays)
📚 Growing resource library (new content monthly)
👥 Private community of like-minded people
🎯 Monthly challenges & accountability
` : `
💡 12 weeks of 1-on-1 coaching
📞 Bi-weekly strategy calls (24 sessions total)
📧 Unlimited email support between calls
🎯 Customized action plan for YOUR goals
`}

**EARLY BIRD BONUS (48 hours only):**
Enroll in the next 48 hours and you'll also get:
• [Bonus 1 worth $XX]
• [Bonus 2 worth $XX]
• [Bonus 3 worth $XX]

Total value: $${Math.round(productPrice * 0.5)} (yours FREE if you join before Thursday at midnight)

**Ready to get started?**

👉 [LINK TO SALES PAGE]

Doors close in 5 days (or when we hit capacity).

Let's do this together,
[Your Name]

P.S. - I know ${productPrice < 100 ? 'it\'s an investment' : 'this isn\'t cheap'}. But ask yourself: what's it costing you to NOT solve this problem? I promise, the ROI is worth it.`,

                tips: [
                    'Lead with transformation story (relatable)',
                    'List specific deliverables (not vague benefits)',
                    'Add urgency with 48-hour bonus deadline',
                    'Expected CTR: 15-25%'
                ]
            },
            3: {
                day: 'Day 3',
                name: 'Social Proof + Testimonials',
                goal: 'Build trust with real results',
                subjects: [
                    `"This is the best $${productPrice} I've ever spent"`,
                    `📊 Real results from real people`,
                    `Wait until you see what [Student] achieved...`,
                    `Proof this actually works (see screenshots)`,
                    `${productName || '[Product]'} results are rolling in 🔥`
                ],
                body: `Hey [Name],

Quick question: do you want to see what people are saying about ${productName || '[Product Name]'}?

Because the testimonials are ROLLING in and I had to share.

**From Sarah (joined 2 hours ago):**
"I just finished Module 1 and I'm already implementing the strategies. This is exactly what I've been looking for!"

**From Mike (purchased yesterday):**
"I was skeptical about the price, but after going through the content, I would've paid double. Worth every penny."

**From Jessica (early beta tester):**
"In 3 weeks I went from [before state] to [after state]. If you're on the fence, just do it."

Here's what I love about these reviews... 

**They're all from normal people** — not influencers, not marketers, just regular folks who wanted [outcome] and decided to take action.

And now they're getting results.

You could be next.

**What you'll get inside:**
✅ The exact [framework/system] I used to [your big result]
✅ Templates you can copy-paste and use TODAY
✅ Step-by-step walkthroughs (no guessing, no overwhelm)
✅ Support when you need it

**Still $${productPrice}** (early bird bonuses expire tonight at midnight)

👉 [LINK TO SALES PAGE]

Spots are filling fast. Don't miss out.

[Your Name]

P.S. - Have questions? Hit reply and ask me anything. I'm here to help you decide if this is right for you.`,

                tips: [
                    'Use real testimonials (specific results)',
                    'Include diverse voices (relatable)',
                    'Remind about expiring bonus (create FOMO)',
                    'Expected conversion: 20-30% of clicks'
                ]
            },
            4: {
                day: 'Day 4',
                name: 'Objection Handling',
                goal: 'Address common hesitations',
                subjects: [
                    `"I don't have time for this..."`,
                    `Let me answer your top 3 questions`,
                    `Is ${productName || '[Product]'} right for you? (honest answer)`,
                    `Worried about [common objection]? Read this.`,
                    `The #1 reason people hesitate (and why you shouldn't)`
                ],
                body: `Hey [Name],

I've been reading your replies and DMs (seriously, I read every single one).

And I'm noticing the same questions coming up again and again.

So let me address them here:

**1. "Is this right for beginners?"**

${launchType === 'course' ? 'YES! I designed this assuming you\'re starting from zero. Everything is explained step-by-step.' : 'Absolutely. I walk you through everything in plain English. No prerequisites needed.'}

**2. "I don't have time..."**

I get it. You're busy. That's WHY I made this ${launchType === 'course' ? 'bite-sized (10-15 min lessons)' : launchType === 'ebook' ? 'scannable with action steps highlighted' : launchType === 'membership' ? 'flexible (consume at your own pace)' : 'customized to YOUR schedule'}. 

Most people implement as they learn. Results in DAYS, not months.

**3. "What if it doesn't work for me?"**

Fair question. Here's my honest answer:

This works IF you implement it. I can't do the work for you (I wish I could lol).

But if you follow the system and don't see results? Email me within 30 days and I'll refund every penny. **Zero risk.**

**4. "Can I really afford this?"**

Think about it differently:

If this helps you [achieve outcome], what's that worth? $${productPrice * 10}? $${productPrice * 20}?

You're not spending money. You're INVESTING in yourself. And this pays back 10x+ when you apply it.

**5. "What if I have questions?"**

You can ${launchType === 'course' || launchType === 'membership' ? 'ask in the private community (I\'m in there daily)' : 'email me anytime (I actually respond)'}.

You're not alone in this.

**Still unsure?**

Check out the full breakdown here: [LINK TO SALES PAGE]

Only 2 days left. Early bird bonuses expire TONIGHT.

Let's gooo,
[Your Name]

P.S. - "I'll do it later" is how most people stay stuck. Don't let that be you.`,

                tips: [
                    'Address top 3-5 objections directly',
                    'Use empathy (show you understand)',
                    'Offer risk reversal (money-back guarantee)',
                    'Expected response rate: 5-10% (replies)'
                ]
            },
            5: {
                day: 'Day 5',
                name: 'Last Call (24 Hours)',
                goal: 'Create urgency - final push',
                subjects: [
                    `⏰ 24 hours left to join ${productName || '[Product]'}`,
                    `This is your last chance (doors close tomorrow)`,
                    `Don't let this be your biggest regret`,
                    `Final call: ${productName || '[Product]'} closes TOMORROW`,
                    `⚠️ Spots almost gone (seriously)`
                ],
                body: `Hey [Name],

This is it.

**24 hours left** to join ${productName || '[Product Name]'}.

Tomorrow at midnight, the cart closes. No exceptions.

I want to be real with you for a second...

A year from now, you'll either:

**Option 1:** Have made progress on [goal], feeling confident and capable

OR

**Option 2:** Still be in the same spot, wishing you had taken action

The choice is yours. But you have to CHOOSE.

**Here's what happens when you join TODAY:**

✅ Instant access to everything (start learning in 5 minutes)
✅ ${launchType === 'course' || launchType === 'membership' ? 'Join the private community' : 'Download all resources immediately'}
✅ Lock in this price (it's going up next launch)

**What happens if you wait?**

❌ You miss this round (next enrollment is ${launchType === 'membership' ? '3 months away' : '6 months away or never'})
❌ Price will be higher (adding $${Math.round(productPrice * 0.3)} next time)
❌ Bonuses are GONE forever

I can't make this decision for you.

But I CAN promise you this:

**If you show up and do the work, you WILL see results.**

I've seen it happen hundreds of times.

You can be next.

👉 [LINK TO SALES PAGE - JOIN NOW]

24 hours. Then it's gone.

Let's do this,
[Your Name]

P.S. - Still have questions? Reply to this email RIGHT NOW. I'm monitoring my inbox today and will get back to you ASAP.`,

                tips: [
                    'Send 24-36 hours before close',
                    'Use emotional triggers (future self, regret)',
                    'Make CTA impossible to miss',
                    'Conversion spike: 30-40% of total sales happen in last 24hrs'
                ]
            },
            6: {
                day: 'Day 6',
                name: 'Final Hours (Countdown)',
                goal: 'Maximum urgency - close cart',
                subjects: [
                    `🚨 FINAL HOURS: Cart closes at midnight`,
                    `This is actually happening (closing in 6 hours)`,
                    `Last chance: ${productName || '[Product]'} enrollment ends TODAY`,
                    `⏰ 3 hours left. That's it.`,
                    `FINAL CALL (this email is not a drill)`
                ],
                body: `[Name],

This is the LAST email.

${productName || '[Product Name]'} closes in a few hours.

No more emails after this. No last-minute extensions. No "wait, I changed my mind."

When the clock hits midnight, it's DONE.

**If you're in:**

Click here now → [LINK TO SALES PAGE]

Checkout takes 2 minutes. You'll have instant access.

**If you're out:**

No hard feelings. Seriously. This isn't for everyone.

But if you're sitting on the fence thinking "maybe later"...

Later never comes.

You know what you need to do.

The door is open. For a few more hours.

After that? It's closed.

Your move.

[Your Name]

---

**URGENT:** If you're trying to enroll and having technical issues, email me IMMEDIATELY. I'll help you get in before deadline.`,

                tips: [
                    'Send 4-6 hours before close',
                    'Short, direct, urgent',
                    'Minimal design (text-only works best)',
                    '40-50% of remaining sales happen in final 6 hours'
                ]
            },
            7: {
                day: 'Day 7',
                name: 'Post-Close (Missed It)',
                goal: 'Re-engage non-buyers for future launches',
                subjects: [
                    `Cart is closed (but read this)`,
                    `You missed it... here's what happens next`,
                    `Honest feedback about ${productName || '[Product]'}?`,
                    `The doors are closed (for now)`,
                    `What stopped you from joining?`
                ],
                body: `Hey [Name],

The cart for ${productName || '[Product Name]'} is officially closed.

If you enrolled — CONGRATS! Check your inbox for your welcome email and login details. Can't wait to see you inside!

If you didn't enroll — totally okay. I get it.

Quick question though (seriously asking):

**What held you back?**

Was it:
• Too expensive?
• Bad timing?
• Wasn't sure it would work for you?
• Something else?

Hit reply and let me know. I read every response and use this feedback to make things better.

**What happens next?**

I might re-open enrollment in ${launchType === 'membership' ? '3 months' : '6 months'}, but NO promises.

The price will likely go up (adding more content/bonuses).

If you want me to notify you when doors open again, reply with "WAITLIST" and I'll add you to the early access list.

Thanks for being part of this launch — whether you joined or not, I appreciate you.

Talk soon,
[Your Name]

P.S. - For those who joined: your first lesson is waiting for you. Log in and let's get started! 🚀`,

                tips: [
                    'Send 12-24 hours after close',
                    'Genuine curiosity (get feedback)',
                    'Offer waitlist for future launches',
                    'Sets up next launch cycle'
                ]
            }
        }

        return emails
    }

    const handleGenerate = () => {
        if (!productName.trim()) {
            alert('Please enter your product name!')
            return
        }
        setGenerated(true)
    }

    const selectedType = launchTypes.find(t => t.id === launchType)
    const emails = generated ? generateEmailSequence() : null
    const selectedEmail = emails ? emails[emailDay as keyof typeof emails] : null

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">📧 Launch Email Swipes</h3>
                <p className="text-gray-300 text-sm">
                    Proven 7-day email sequence that <strong className="text-purple-400">converts 3-8% of your list</strong>.
                    Copy, customize, and launch.
                </p>
            </div>

            {/* Product Details */}
            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                    <label className="block text-white font-semibold mb-3">
                        Product Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        placeholder="e.g., Instagram Growth Blueprint"
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
                    />
                </div>

                <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                    <label className="block text-white font-semibold mb-3">
                        Price Point: ${productPrice}
                    </label>
                    <input
                        type="range"
                        min="27"
                        max="997"
                        step="10"
                        value={productPrice}
                        onChange={(e) => setProductPrice(parseInt(e.target.value))}
                        className="w-full h-2 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>$27</span>
                        <span>$497</span>
                        <span>$997</span>
                    </div>
                </div>
            </div>

            {/* Launch Type */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <label className="block text-white font-semibold mb-4">Product Type</label>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {launchTypes.map(type => (
                        <button
                            key={type.id}
                            onClick={() => {
                                setLaunchType(type.id)
                                setGenerated(false)
                            }}
                            className={`p-4 rounded-lg border-2 transition-all ${launchType === type.id
                                ? 'border-purple-500 bg-purple-500/10'
                                : 'border-[#2a2a2a] bg-[#0a0a0a] hover:border-purple-500/50'
                                }`}
                        >
                            <div className="text-2xl mb-1">{type.emoji}</div>
                            <div className="text-white font-semibold text-sm">{type.name}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Generate Button */}
            <button
                onClick={handleGenerate}
                disabled={!productName.trim()}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
            >
                {productName.trim() ? 'Generate Launch Sequence 📧' : 'Enter product name first'}
            </button>

            {/* Generated Emails */}
            {generated && emails && (
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-5">
                        <h4 className="text-white font-bold mb-2">✅ 7-Day Sequence Ready!</h4>
                        <p className="text-gray-300 text-sm">
                            Full launch sequence with subject lines, body copy, and conversion tips. Select an email below.
                        </p>
                    </div>

                    {/* Email Selector */}
                    <div className="bg-[#141414] p-5 rounded-xl border border-[#1f1f1f]">
                        <h4 className="text-white font-semibold mb-4">Select Email:</h4>
                        <div className="grid grid-cols-7 gap-2">
                            {[1, 2, 3, 4, 5, 6, 7].map(day => {
                                const email = emails[day as keyof typeof emails]
                                return (
                                    <button
                                        key={day}
                                        onClick={() => setEmailDay(day)}
                                        className={`p-3 rounded-lg border-2 transition-all text-center ${emailDay === day
                                            ? 'border-purple-500 bg-purple-500/10'
                                            : 'border-[#2a2a2a] bg-[#0a0a0a] hover:border-purple-500/50'
                                            }`}
                                    >
                                        <div className="text-white font-bold text-sm mb-1">Day {day}</div>
                                        <div className="text-xs text-gray-400">{email.day}</div>
                                    </button>
                                )
                            })}
                        </div>
                    </div>

                    {selectedEmail && (
                        <>
                            {/* Email Details */}
                            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h4 className="text-white font-bold text-lg">{selectedEmail.name}</h4>
                                        <p className="text-gray-400 text-sm mt-1">🎯 Goal: {selectedEmail.goal}</p>
                                    </div>
                                    <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                                        {selectedEmail.day}
                                    </span>
                                </div>
                            </div>

                            {/* Subject Lines */}
                            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                                <div className="flex items-center justify-between mb-4">
                                    <h5 className="text-white font-bold">📝 Subject Line Options:</h5>
                                    <span className="text-xs text-gray-500">Test these via A/B split</span>
                                </div>
                                <div className="space-y-2">
                                    {selectedEmail.subjects.map((subject, i) => (
                                        <div key={i} className="bg-[#0a0a0a] p-3 rounded-lg border border-[#2a2a2a] flex items-center justify-between hover:border-purple-500/50 transition-colors">
                                            <span className="text-gray-300 text-sm">
                                                <span className="text-purple-400 font-semibold mr-2">#{i + 1}</span>
                                                {subject}
                                            </span>
                                            <CopyButton text={subject} />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Email Body */}
                            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                                <div className="flex items-center justify-between mb-4">
                                    <h5 className="text-white font-bold">📄 Email Body Copy:</h5>
                                    <CopyButton text={selectedEmail.body} />
                                </div>
                                <pre className="text-gray-300 text-sm whitespace-pre-wrap font-sans bg-[#0a0a0a] p-5 rounded-lg border border-[#2a2a2a] max-h-96 overflow-y-auto">
                                    {selectedEmail.body}
                                </pre>
                            </div>

                            {/* Pro Tips */}
                            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                                <h5 className="text-white font-bold mb-4">💡 Pro Tips for {selectedEmail.name}:</h5>
                                <div className="space-y-2">
                                    {selectedEmail.tips.map((tip, i) => (
                                        <div key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                            <span className="text-purple-400">•</span>
                                            <span>{tip}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}

                    {/* Sequence Overview */}
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-5">
                        <h4 className="text-white font-bold mb-3">📊 Launch Sequence Strategy</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">Day 1-2:</span>
                                <span>Build anticipation, open cart with transformation story (20% of sales)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">Day 3-4:</span>
                                <span>Social proof + objection handling (30% of sales)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">Day 5-7:</span>
                                <span>Urgency + final push (50% of sales happen in last 48 hours)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">Expected:</span>
                                <span>3-8% conversion rate (industry standard for engaged list)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}


function OutreachGenerator() {
    const [industry, setIndustry] = useState('real-estate')
    const [channel, setChannel] = useState('linkedin')
    const [prospectName, setProspectName] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [recentEvent, setRecentEvent] = useState('')
    const [generated, setGenerated] = useState(false)

    const industries = [
        { id: 'real-estate', name: '🏠 Real Estate', avgResponse: '35%' },
        { id: 'dental', name: '🦷 Dental Practices', avgResponse: '42%' },
        { id: 'legal', name: '⚖️ Law Firms', avgResponse: '28%' },
        { id: 'ecommerce', name: '🛒 E-commerce', avgResponse: '31%' },
        { id: 'saas', name: '💻 SaaS Companies', avgResponse: '25%' },
        { id: 'restaurants', name: '🍽️ Restaurants', avgResponse: '38%' },
        { id: 'fitness', name: '💪 Fitness Studios', avgResponse: '40%' },
        { id: 'consulting', name: '📊 Consulting Firms', avgResponse: '33%' }
    ]

    const painPoints: Record<string, { problem: string, impact: string, solution: string }[]> = {
        'real-estate': [
            {
                problem: 'Spending 10+ hours/week manually following up with leads',
                impact: 'Missing hot prospects who buy from faster agents',
                solution: 'Automated lead nurture system that responds in under 60 seconds'
            },
            {
                problem: 'Losing deals because clients ghost after first viewing',
                impact: '$50k+ in potential commissions left on the table monthly',
                solution: 'Smart follow-up sequences that re-engage cold leads automatically'
            },
            {
                problem: 'Scheduling showings back-and-forth taking hours',
                impact: 'Wasting 15+ hours per week on calendar tetris',
                solution: 'AI scheduling assistant that books appointments 24/7'
            }
        ],
        'dental': [
            {
                problem: '18% no-show rate costing thousands in lost revenue',
                impact: '$15k-$30k monthly revenue loss from empty chairs',
                solution: 'Automated reminder system reducing no-shows by 65%'
            },
            {
                problem: 'Staff spending 2+ hours daily on appointment confirmations',
                impact: 'Paying $4k/month for manual labor that could be automated',
                solution: 'Smart SMS/email reminders sent automatically 48hr & 24hr before'
            },
            {
                problem: 'Only getting 1-2 reviews per month organically',
                impact: 'Losing new patients to competitors with 100+ 5-star reviews',
                solution: 'Post-visit review automation increasing reviews by 280%'
            }
        ],
        'legal': [
            {
                problem: 'Spending 20% of billable time on client status updates',
                impact: 'Losing $10k+ monthly in unbilled admin work',
                solution: 'Automated case milestone notifications keeping clients informed'
            },
            {
                problem: 'Leads waiting 24-48hrs for consultation booking',
                impact: '40% of prospects hire competing firms who respond faster',
                solution: 'Instant qualification survey + auto-scheduling system'
            },
            {
                problem: 'Junior associates drafting routine documents from scratch',
                impact: '10+ hours weekly on repetitive document assembly',
                solution: 'AI document generator creating contracts in under 5 minutes'
            }
        ],
        'ecommerce': [
            {
                problem: '850+ abandoned carts monthly with no recovery system',
                impact: 'Leaving $50k+ in revenue on the table every month',
                solution: 'Multi-channel cart recovery increasing sales by 18%'
            },
            {
                problem: 'Customer support requests taking 24+ hours to answer',
                impact: 'Losing customers to competitors with instant support',
                solution: 'AI chatbot handling 70% of common questions instantly'
            },
            {
                problem: 'Running out of stock on best-sellers without warning',
                impact: 'Missing $20k+ in sales during stockout periods',
                solution: 'Smart inventory alerts and auto-reorder system'
            }
        ],
        'saas': [
            {
                problem: 'Only 45% of trials converting to paid customers',
                impact: 'Losing $100k+ annual revenue from poor onboarding',
                solution: 'Behavior-triggered email sequences boosting activation by 35%'
            },
            {
                problem: '8-10% monthly churn from disengaged users',
                impact: '$50k MRR bleeding out every quarter',
                solution: 'Churn prevention automation detecting at-risk users early'
            },
            {
                problem: 'Support tickets taking 12+ hours for initial response',
                impact: 'Low NPS scores and angry customers on social media',
                solution: 'AI triage system prioritizing urgent tickets automatically'
            }
        ],
        'restaurants': [
            {
                problem: 'Empty tables during slow hours despite demand',
                impact: '$15k+ monthly revenue from unfilled capacity',
                solution: 'Dynamic reservation system with SMS waitlist automation'
            },
            {
                problem: 'Staff forgetting to ask for reviews from happy customers',
                impact: 'Competitors with more reviews getting all the foot traffic',
                solution: 'Automated post-meal review requests via SMS/email'
            },
            {
                problem: 'Running loyalty program on paper punch cards',
                impact: '60% of customers dont return due to forgetting cards',
                solution: 'Digital loyalty system with automated reward notifications'
            }
        ],
        'fitness': [
            {
                problem: 'Members canceling without any attempt to retain them',
                impact: '25% annual churn costing $80k+ in lost revenue',
                solution: 'Early warning system + automated win-back campaigns'
            },
            {
                problem: 'No system to book intro sessions with warm leads',
                impact: '50+ monthly inquiries ghosting before first visit',
                solution: 'Instant booking link + automated reminder sequence'
            },
            {
                problem: 'Manually posting class schedules to social media daily',
                impact: 'Wasting 5+ hours weekly on repetitive social tasks',
                solution: 'Auto-sync class schedule to Instagram/Facebook stories'
            }
        ],
        'consulting': [
            {
                problem: 'Spending 8+ hours per proposal from scratch',
                impact: 'Only closing 1-2 deals monthly due to slow turnaround',
                solution: 'AI proposal generator creating custom docs in 15 minutes'
            },
            {
                problem: 'Clients asking "whats the status?" multiple times weekly',
                impact: '20% of team time spent on status update meetings',
                solution: 'Automated progress reports sent weekly with zero manual work'
            },
            {
                problem: 'Discovery calls with unqualified leads wasting time',
                impact: '40% of sales calls going nowhere',
                solution: 'Pre-call chatbot qualifying leads before booking'
            }
        ]
    }

    const generateMessage = () => {
        const selectedIndustry = industries.find(i => i.id === industry)
        const painPoint = painPoints[industry][0]
        const firstName = prospectName.split(' ')[0] || prospectName

        const templates: Record<string, any> = {
            linkedin: {
                initial: `Hi ${firstName},

I noticed ${companyName} ${recentEvent ? `recently ${recentEvent}` : 'is growing fast'} - congrats!

Quick question: Is ${painPoint.problem.toLowerCase()} still a challenge for your team?

Most ${selectedIndustry?.name.replace(/[^\w\s]/gi, '').toLowerCase()} businesses we work with are ${painPoint.impact.toLowerCase()}.

We built an automation that ${painPoint.solution.toLowerCase()} - would you be open to a quick 15-min demo?

No pressure, just thought it might save your team some serious headaches.

Best,
[Your Name]`,
                followUp1: `Hey ${firstName},

Following up on my message from last week about automating ${painPoint.problem.toLowerCase()}.

I get it - you're busy. That's exactly why automation exists 😊

Real quick: Would Tuesday or Thursday work for a 10-minute call?

I'll show you:
• How we eliminated ${painPoint.problem.toLowerCase()} for 3 ${selectedIndustry?.name.replace(/[^\w\s]/gi, '')} businesses
• The exact ROI they saw (spoiler: it paid for itself in 6 weeks)
• Whether it makes sense for ${companyName}

If not interested, totally fine - just let me know so I stop bothering you!

[Your Name]`,
                followUp2: `${firstName} - last message, I promise!

I know you're swamped. But if ${painPoint.impact.toLowerCase()}, this could be worth 10 minutes.

Here's a case study from a similar ${selectedIndustry?.name.replace(/[^\w\s]/gi, '')} business:
→ Before: ${painPoint.problem}
→ After: ${painPoint.solution}
→ ROI: Paid for itself in 8 weeks

Interested? Reply with "YES" and I'll send a calendar link.

Not interested? Reply "NO" and I'll never bother you again.

Deal?

[Your Name]`
            },
            email: {
                initial: `Subject: Quick question about ${companyName}'s operations

Hi ${firstName},

I've been following ${companyName}${recentEvent ? ` and saw you recently ${recentEvent}` : ''}. Impressive growth!

I work with ${selectedIndustry?.name.replace(/[^\w\s]/gi, '')} businesses to eliminate operational bottlenecks. One thing I keep hearing:

**"${painPoint.problem}"**

Does this sound familiar?

When we work with firms like yours, they're typically ${painPoint.impact.toLowerCase()}.

We've built ${painPoint.solution.toLowerCase()}, and I'd love to show you how it works.

**Would you be open to a quick 15-minute screen share this week?**

I'll show you:
✓ The exact automation we'd build for ${companyName}
✓ Real case studies from 3 similar businesses
✓ Estimated ROI and timeline

If it's not a fit, no worries - at least you'll walk away with some free ideas.

Best,
[Your Name]

P.S. - Here's what one client said: "This automation paid for itself in the first month and now saves us 20 hours per week." - [Client Name], [Similar Company]`,
                followUp1: `Subject: Re: Quick question about ${companyName}'s operations

${firstName},

I sent a note last week about automating ${painPoint.problem.toLowerCase()}.

Haven't heard back, so I'm guessing either:
a) You're crushing it and don't need help (awesome!)
b) This got buried in your inbox (happens to me all the time)
c) It's not relevant (totally fine!)

If it's (b), I wanted to share a quick win:

We just helped [Similar Business Name] eliminate ${painPoint.problem.toLowerCase()}. Results:
• ${painPoint.impact} → SOLVED
• ${painPoint.solution}
• Paid for itself in 6 weeks

**Reply with "INTERESTED" and I'll send over the case study + a 10-min calendar link.**

If not relevant, just reply "NOT A FIT" and I'll stop emailing.

Either way, hope ${companyName} has a great Q4!

[Your Name]`,
                followUp2: `Subject: [FINAL] Automation case study for ${companyName}

${firstName} - this is my last email, promise!

I'm closing my calendar for new clients next week, but wanted to give you one more shot at this.

**The Problem:** ${painPoint.problem}
**The Impact:** ${painPoint.impact}
**Our Solution:** ${painPoint.solution}

**ROI for similar businesses:** 3-6 week payback, then pure profit.

If this resonates, book a 10-min call here: [CALENDAR LINK]

If not, I'll take the hint and leave you alone 😊

Thanks for your time!

[Your Name]

P.S. - Even if you don't work with us, I'm happy to share our "Automation Opportunity Audit" template for free. Just reply "SEND IT" and it's yours.`
            },
            twitter: {
                initial: `Hey ${firstName}! 👋

Saw ${companyName} ${recentEvent ? recentEvent : 'is doing awesome things'}.

Quick Q: Still dealing with ${painPoint.problem.toLowerCase()}?

We help ${selectedIndustry?.name.replace(/[^\w\s]/gi, '')} businesses automate this away completely.

Down for a quick 10-min call to see if it's a fit?`,
                followUp1: `${firstName} - following up on my DM about automating operations for ${companyName}.

Most ${selectedIndustry?.name.replace(/[^\w\s]/gi, '')} businesses are ${painPoint.impact.toLowerCase()}.

We built ${painPoint.solution.toLowerCase()}.

Interested in seeing how it works? Reply "YES" for a demo link.

Not interested? Reply "NO" and I'll stop bothering you!`,
                followUp2: `${firstName} - last message!

If ${painPoint.impact.toLowerCase()}, this 10-min call could save you thousands.

Reply "SHOW ME" and I'll send a case study + calendar link.

Otherwise, I'll take the hint 😊

Have a great week!`
            }
        }

        return templates[channel]
    }

    const analyzeSpamScore = () => {
        const message = generateMessage().initial
        let score = 0
        const issues: string[] = []

        // Check for spam triggers
        if (message.toLowerCase().includes('free')) {
            score += 15
            issues.push('Contains "free" - can trigger spam filters')
        }
        if (message.toLowerCase().includes('guarantee')) {
            score += 10
            issues.push('Contains "guarantee"')
        }
        if ((message.match(/!/g) || []).length > 2) {
            score += 20
            issues.push('Too many exclamation marks')
        }
        if (message.toUpperCase().length > message.length * 0.3) {
            score += 25
            issues.push('Too much capitalization')
        }
        if (!prospectName || !companyName) {
            score += 30
            issues.push('Missing personalization (name/company)')
        }

        // Check for good practices (reduce score)
        if (prospectName && companyName) {
            score -= 20
            issues.push('✅ Good: Personalized with name and company')
        }
        if (message.length < 500) {
            score -= 10
            issues.push('✅ Good: Concise message')
        }
        if (message.includes('?')) {
            score -= 5
            issues.push('✅ Good: Includes question (engagement)')
        }

        score = Math.max(0, Math.min(100, score))

        return {
            score,
            issues,
            rating: score < 30 ? 'Excellent' : score < 60 ? 'Good' : 'Poor',
            color: score < 30 ? 'green' : score < 60 ? 'yellow' : 'red'
        }
    }

    const handleGenerate = () => {
        if (!prospectName.trim() || !companyName.trim()) {
            alert('Please enter prospect name and company name for personalization!')
            return
        }
        setGenerated(true)
    }

    const messages = generated ? generateMessage() : null
    const spamAnalysis = generated ? analyzeSpamScore() : null
    const selectedIndustry = industries.find(i => i.id === industry)
    const currentPainPoint = painPoints[industry][0]

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">📨 Cold Outreach Generator</h3>
                <p className="text-gray-300 text-sm">
                    Generate personalized outreach messages that get <strong className="text-orange-400">40%+ reply rates</strong>.
                    Multi-channel ready with automated follow-ups.
                </p>
            </div>

            {/* Industry Selection */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <label className="block text-white font-semibold mb-3">Select Industry:</label>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {industries.map(ind => (
                        <button
                            key={ind.id}
                            onClick={() => {
                                setIndustry(ind.id)
                                setGenerated(false)
                            }}
                            className={`p-4 rounded-lg border-2 transition-all text-left ${industry === ind.id
                                ? 'border-orange-500 bg-orange-500/10'
                                : 'border-[#2a2a2a] bg-[#0a0a0a] hover:border-orange-500/50'
                                }`}
                        >
                            <div className="text-white font-bold text-sm mb-1">{ind.name}</div>
                            <div className="text-xs text-gray-400">{ind.avgResponse} avg response</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Channel Selection */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <label className="block text-white font-semibold mb-3">Choose Channel:</label>
                <div className="grid grid-cols-3 gap-3">
                    {[
                        { id: 'linkedin', name: 'LinkedIn DM', icon: '💼' },
                        { id: 'email', name: 'Email', icon: '📧' },
                        { id: 'twitter', name: 'Twitter DM', icon: '🐦' }
                    ].map(ch => (
                        <button
                            key={ch.id}
                            onClick={() => {
                                setChannel(ch.id)
                                setGenerated(false)
                            }}
                            className={`p-4 rounded-lg border-2 transition-all ${channel === ch.id
                                ? 'border-orange-500 bg-orange-500/10'
                                : 'border-[#2a2a2a] bg-[#0a0a0a] hover:border-orange-500/50'
                                }`}
                        >
                            <div className="text-2xl mb-2">{ch.icon}</div>
                            <div className="text-white font-bold text-sm">{ch.name}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Personalization Inputs */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <h4 className="text-white font-semibold mb-4">Personalization Details:</h4>
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-400 text-sm mb-2">Prospect's Full Name *</label>
                        <input
                            type="text"
                            placeholder="e.g., Sarah Johnson"
                            value={prospectName}
                            onChange={(e) => setProspectName(e.target.value)}
                            className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 text-sm mb-2">Company Name *</label>
                        <input
                            type="text"
                            placeholder="e.g., Acme Real Estate"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 text-sm mb-2">Recent Event/News (Optional)</label>
                        <input
                            type="text"
                            placeholder="e.g., opened a second office, hired a new team"
                            value={recentEvent}
                            onChange={(e) => setRecentEvent(e.target.value)}
                            className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none"
                        />
                        <p className="text-xs text-gray-500 mt-2">💡 Mentioning recent news increases reply rates by 60%</p>
                    </div>
                </div>
            </div>

            {/* Pain Point Preview */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <h4 className="text-white font-semibold mb-3">Selected Pain Point:</h4>
                <div className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a] space-y-2">
                    <div>
                        <span className="text-xs text-red-400 font-semibold">Problem:</span>
                        <p className="text-white text-sm">{currentPainPoint.problem}</p>
                    </div>
                    <div>
                        <span className="text-xs text-orange-400 font-semibold">Impact:</span>
                        <p className="text-white text-sm">{currentPainPoint.impact}</p>
                    </div>
                    <div>
                        <span className="text-xs text-green-400 font-semibold">Solution:</span>
                        <p className="text-white text-sm">{currentPainPoint.solution}</p>
                    </div>
                </div>
            </div>

            {/* Generate Button */}
            <button
                onClick={handleGenerate}
                disabled={!prospectName.trim() || !companyName.trim()}
                className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
            >
                {prospectName.trim() && companyName.trim()
                    ? `Generate ${channel.toUpperCase()} Sequence`
                    : 'Enter prospect details first'
                }
            </button>

            {/* Results */}
            {generated && messages && spamAnalysis && (
                <div className="space-y-4">
                    {/* Spam Score */}
                    <div className={`bg-gradient-to-r from-${spamAnalysis.color}-500/10 to-${spamAnalysis.color}-600/5 border border-${spamAnalysis.color}-500/20 rounded-xl p-5`}>
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="text-white font-bold">Spam Score Analysis</h4>
                            <div className={`text-2xl font-bold text-${spamAnalysis.color}-400`}>
                                {spamAnalysis.score}/100 - {spamAnalysis.rating}
                            </div>
                        </div>
                        <div className="space-y-1">
                            {spamAnalysis.issues.map((issue, i) => (
                                <p key={i} className="text-sm text-gray-300">• {issue}</p>
                            ))}
                        </div>
                    </div>

                    {/* Initial Message */}
                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-white font-bold">Initial Message (Day 1)</h4>
                            <span className="text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                                Expected: {selectedIndustry?.avgResponse} response
                            </span>
                        </div>
                        <div className="bg-[#0a0a0a] p-5 rounded-lg border border-[#2a2a2a] relative">
                            <pre className="text-gray-300 text-sm whitespace-pre-wrap font-sans">{messages.initial}</pre>
                            <div className="absolute top-3 right-3">
                                <CopyButton text={messages.initial} />
                            </div>
                        </div>
                    </div>

                    {/* Follow-up 1 */}
                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-white font-bold">Follow-up #1 (Day 4)</h4>
                            <span className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                                Send if no response
                            </span>
                        </div>
                        <div className="bg-[#0a0a0a] p-5 rounded-lg border border-[#2a2a2a] relative">
                            <pre className="text-gray-300 text-sm whitespace-pre-wrap font-sans">{messages.followUp1}</pre>
                            <div className="absolute top-3 right-3">
                                <CopyButton text={messages.followUp1} />
                            </div>
                        </div>
                    </div>

                    {/* Follow-up 2 */}
                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-white font-bold">Follow-up #2 (Day 8) - Final</h4>
                            <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                                Break-up email
                            </span>
                        </div>
                        <div className="bg-[#0a0a0a] p-5 rounded-lg border border-[#2a2a2a] relative">
                            <pre className="text-gray-300 text-sm whitespace-pre-wrap font-sans">{messages.followUp2}</pre>
                            <div className="absolute top-3 right-3">
                                <CopyButton text={messages.followUp2} />
                            </div>
                        </div>
                    </div>

                    {/* Pro Tips */}
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-5">
                        <h4 className="text-white font-bold mb-3">📈 Pro Tips for Maximum Response:</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">1.</span>
                                <span>Send initial message Tuesday-Thursday, 9-11am in their timezone</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">2.</span>
                                <span>Always mention specific company news/achievements (60% higher reply rate)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">3.</span>
                                <span>Keep it under 150 words for LinkedIn, 200 for email</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">4.</span>
                                <span>The "break-up" email (follow-up #2) often gets the best response</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">5.</span>
                                <span>Track reply rates per industry and adjust pain points accordingly</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}


function RoiCalculator() {
    const [industry, setIndustry] = useState('real-estate')
    const [employees, setEmployees] = useState(5)
    const [avgHourlyRate, setAvgHourlyRate] = useState(25)
    const [selectedAutomations, setSelectedAutomations] = useState<string[]>([])
    const [showResults, setShowResults] = useState(false)

    const industries = [
        { id: 'real-estate', name: '🏠 Real Estate Agency', avgDealSize: 8500 },
        { id: 'dental', name: '🦷 Dental Practice', avgDealSize: 450 },
        { id: 'legal', name: '⚖️ Law Firm', avgDealSize: 3500 },
        { id: 'ecommerce', name: '🛒 E-commerce Store', avgDealSize: 85 },
        { id: 'saas', name: '💻 SaaS Company', avgDealSize: 450 },
        { id: 'consulting', name: '📊 Consulting Firm', avgDealSize: 5000 }
    ]

    const automationScenarios: Record<string, any> = {
        'real-estate': [
            {
                id: 'lead-followup',
                name: 'Automated Lead Follow-up',
                description: 'AI-powered instant response + 7-day nurture sequence',
                timeSavedPerWeek: 12,
                conversionIncrease: 23,
                avgLeadsPerMonth: 150,
                currentConversion: 2.5,
                implementationTime: '2 weeks',
                difficulty: 'Easy'
            },
            {
                id: 'listing-alerts',
                name: 'Smart Listing Alerts',
                description: 'Auto-match properties to buyer preferences and send personalized alerts',
                timeSavedPerWeek: 8,
                conversionIncrease: 15,
                avgLeadsPerMonth: 150,
                currentConversion: 2.5,
                implementationTime: '1 week',
                difficulty: 'Easy'
            },
            {
                id: 'appointment-scheduling',
                name: 'AI Appointment Scheduler',
                description: 'Calendar sync + automated reminders + rescheduling',
                timeSavedPerWeek: 6,
                conversionIncrease: 8,
                showUpRateIncrease: 35,
                implementationTime: '1 week',
                difficulty: 'Easy'
            },
            {
                id: 'crm-automation',
                name: 'CRM Data Entry Automation',
                description: 'Auto-capture leads, update stages, log activities',
                timeSavedPerWeek: 10,
                conversionIncrease: 5,
                implementationTime: '2 weeks',
                difficulty: 'Medium'
            }
        ],
        'dental': [
            {
                id: 'appointment-reminders',
                name: 'Automated Appointment Reminders',
                description: 'SMS + Email reminders 48hr and 24hr before appointment',
                timeSavedPerWeek: 5,
                noShowReduction: 65,
                avgAppointmentsPerMonth: 400,
                currentNoShowRate: 18,
                implementationTime: '3 days',
                difficulty: 'Easy'
            },
            {
                id: 'review-requests',
                name: 'Post-Visit Review Automation',
                description: 'Auto-send review requests after positive visits',
                timeSavedPerWeek: 3,
                reviewIncrease: 280,
                implementationTime: '1 week',
                difficulty: 'Easy'
            },
            {
                id: 'insurance-verification',
                name: 'Insurance Verification Bot',
                description: 'Auto-verify insurance before appointments',
                timeSavedPerWeek: 8,
                revenueRecovery: 4200,
                implementationTime: '2 weeks',
                difficulty: 'Medium'
            },
            {
                id: 'patient-intake',
                name: 'Digital Patient Intake Forms',
                description: 'Automated form sending + data entry into EHR',
                timeSavedPerWeek: 6,
                implementationTime: '1 week',
                difficulty: 'Easy'
            }
        ],
        'legal': [
            {
                id: 'consultation-booking',
                name: 'Automated Consultation Booking',
                description: 'Qualification survey + calendar scheduling + intake forms',
                timeSavedPerWeek: 10,
                conversionIncrease: 28,
                avgLeadsPerMonth: 80,
                currentConversion: 15,
                implementationTime: '2 weeks',
                difficulty: 'Medium'
            },
            {
                id: 'document-generation',
                name: 'AI Document Assembly',
                description: 'Auto-generate contracts, letters, filings from templates',
                timeSavedPerWeek: 15,
                implementationTime: '3 weeks',
                difficulty: 'Hard'
            },
            {
                id: 'client-updates',
                name: 'Case Status Update Automation',
                description: 'Auto-notify clients of case milestones',
                timeSavedPerWeek: 4,
                clientSatisfactionIncrease: 45,
                implementationTime: '1 week',
                difficulty: 'Easy'
            }
        ],
        'ecommerce': [
            {
                id: 'abandoned-cart',
                name: 'Abandoned Cart Recovery',
                description: 'Multi-channel recovery sequence with dynamic discounts',
                timeSavedPerWeek: 2,
                revenueIncrease: 18,
                avgCartValue: 85,
                monthlyAbandoned: 850,
                implementationTime: '1 week',
                difficulty: 'Easy'
            },
            {
                id: 'review-automation',
                name: 'Review Request + UGC Collection',
                description: 'Auto-request reviews + photo submissions from happy customers',
                timeSavedPerWeek: 6,
                conversionIncrease: 12,
                implementationTime: '1 week',
                difficulty: 'Easy'
            },
            {
                id: 'inventory-alerts',
                name: 'Smart Inventory Management',
                description: 'Auto-reorder alerts + supplier communication',
                timeSavedPerWeek: 8,
                stockoutReduction: 75,
                implementationTime: '2 weeks',
                difficulty: 'Medium'
            }
        ],
        'saas': [
            {
                id: 'onboarding-sequence',
                name: 'Automated User Onboarding',
                description: 'Personalized email + in-app messages based on user behavior',
                timeSavedPerWeek: 12,
                activationIncrease: 35,
                implementationTime: '2 weeks',
                difficulty: 'Medium'
            },
            {
                id: 'churn-prevention',
                name: 'Churn Prevention Automation',
                description: 'Detect at-risk users + auto-intervention campaigns',
                churnReduction: 22,
                avgMRR: 15000,
                implementationTime: '3 weeks',
                difficulty: 'Hard'
            },
            {
                id: 'support-triage',
                name: 'AI Support Ticket Triage',
                description: 'Auto-categorize, prioritize, and route support tickets',
                timeSavedPerWeek: 18,
                responseTimeImprovement: 65,
                implementationTime: '2 weeks',
                difficulty: 'Medium'
            }
        ],
        'consulting': [
            {
                id: 'proposal-generation',
                name: 'AI Proposal Generator',
                description: 'Auto-generate customized proposals from discovery calls',
                timeSavedPerWeek: 10,
                conversionIncrease: 18,
                avgLeadsPerMonth: 25,
                currentConversion: 35,
                implementationTime: '2 weeks',
                difficulty: 'Medium'
            },
            {
                id: 'client-reporting',
                name: 'Automated Client Reports',
                description: 'Pull data from tools + generate branded monthly reports',
                timeSavedPerWeek: 8,
                implementationTime: '2 weeks',
                difficulty: 'Medium'
            },
            {
                id: 'lead-qualification',
                name: 'AI Lead Qualification Bot',
                description: 'Chatbot qualifies leads before booking discovery calls',
                timeSavedPerWeek: 6,
                qualifiedLeadIncrease: 45,
                implementationTime: '1 week',
                difficulty: 'Easy'
            }
        ]
    }

    const toggleAutomation = (id: string) => {
        setSelectedAutomations(prev =>
            prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
        )
    }

    const calculateROI = () => {
        const scenarios = automationScenarios[industry] || []
        const selected = scenarios.filter((s: any) => selectedAutomations.includes(s.id))

        if (selected.length === 0) return null

        let totalTimeSaved = 0
        let totalRevenueLift = 0
        let totalCostSavings = 0

        selected.forEach((scenario: any) => {
            // Time savings
            totalTimeSaved += scenario.timeSavedPerWeek || 0

            // Revenue calculations based on scenario type
            if (scenario.conversionIncrease && scenario.avgLeadsPerMonth) {
                const currentDeals = (scenario.avgLeadsPerMonth * scenario.currentConversion) / 100
                const newConversion = scenario.currentConversion * (1 + scenario.conversionIncrease / 100)
                const newDeals = (scenario.avgLeadsPerMonth * newConversion) / 100
                const additionalDeals = newDeals - currentDeals
                const currentIndustry = industries.find(i => i.id === industry)
                totalRevenueLift += additionalDeals * (currentIndustry?.avgDealSize || 0)
            }

            if (scenario.revenueIncrease && scenario.avgCartValue && scenario.monthlyAbandoned) {
                const recovered = scenario.monthlyAbandoned * (scenario.revenueIncrease / 100)
                totalRevenueLift += recovered * scenario.avgCartValue
            }

            if (scenario.noShowReduction && scenario.avgAppointmentsPerMonth) {
                const currentNoShows = (scenario.avgAppointmentsPerMonth * scenario.currentNoShowRate) / 100
                const newNoShowRate = scenario.currentNoShowRate * (1 - scenario.noShowReduction / 100)
                const newNoShows = (scenario.avgAppointmentsPerMonth * newNoShowRate) / 100
                const recovered = currentNoShows - newNoShows
                const currentIndustry = industries.find(i => i.id === industry)
                totalRevenueLift += recovered * (currentIndustry?.avgDealSize || 0)
            }

            if (scenario.churnReduction && scenario.avgMRR) {
                const monthlyChurnPrevented = (scenario.avgMRR * scenario.churnReduction) / 100
                totalRevenueLift += monthlyChurnPrevented
            }

            if (scenario.revenueRecovery) {
                totalRevenueLift += scenario.revenueRecovery
            }
        })

        // Cost savings from time
        const weeklyCostSavings = (totalTimeSaved * avgHourlyRate) * employees
        const monthlyCostSavings = weeklyCostSavings * 4.33
        totalCostSavings = monthlyCostSavings

        return {
            timeSavedPerWeek: totalTimeSaved,
            timeSavedPerMonth: totalTimeSaved * 4.33,
            timeSavedPerYear: totalTimeSaved * 52,
            costSavingsPerMonth: totalCostSavings,
            costSavingsPerYear: totalCostSavings * 12,
            revenueLiftPerMonth: totalRevenueLift,
            revenueLiftPerYear: totalRevenueLift * 12,
            totalMonthlyValue: totalCostSavings + totalRevenueLift,
            totalYearlyValue: (totalCostSavings + totalRevenueLift) * 12,
            selectedScenarios: selected
        }
    }

    const results = showResults ? calculateROI() : null
    const currentIndustryData = industries.find(i => i.id === industry)
    const availableScenarios = automationScenarios[industry] || []

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">💰 ROI Calculator for Prospects</h3>
                <p className="text-gray-300 text-sm">
                    Show prospects exactly how much money they'll save and earn with automation.
                    <strong className="text-green-400"> Closes 60%+ of qualified demos.</strong>
                </p>
            </div>

            {/* Industry Selection */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <label className="block text-white font-semibold mb-3">Select Industry:</label>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {industries.map(ind => (
                        <button
                            key={ind.id}
                            onClick={() => {
                                setIndustry(ind.id)
                                setSelectedAutomations([])
                                setShowResults(false)
                            }}
                            className={`p-4 rounded-lg border-2 transition-all text-left ${industry === ind.id
                                ? 'border-green-500 bg-green-500/10'
                                : 'border-[#2a2a2a] bg-[#0a0a0a] hover:border-green-500/50'
                                }`}
                        >
                            <div className="text-white font-bold text-sm">{ind.name}</div>
                            <div className="text-xs text-gray-400 mt-1">Avg deal: ${ind.avgDealSize.toLocaleString()}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Business Details */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <h4 className="text-white font-semibold mb-4">Business Details:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-gray-400 text-sm mb-2">Number of Employees</label>
                        <input
                            type="number"
                            value={employees}
                            onChange={(e) => setEmployees(parseInt(e.target.value) || 1)}
                            min="1"
                            className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-400 text-sm mb-2">Average Hourly Rate ($)</label>
                        <input
                            type="number"
                            value={avgHourlyRate}
                            onChange={(e) => setAvgHourlyRate(parseInt(e.target.value) || 0)}
                            min="0"
                            className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none"
                        />
                    </div>
                </div>
            </div>

            {/* Automation Scenarios */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <h4 className="text-white font-semibold mb-2">Select Automation Opportunities:</h4>
                <p className="text-gray-400 text-sm mb-4">Choose the automations you'd implement for this prospect</p>

                <div className="space-y-3">
                    {availableScenarios.map((scenario: any) => (
                        <div
                            key={scenario.id}
                            onClick={() => toggleAutomation(scenario.id)}
                            className={`p-5 rounded-lg border-2 cursor-pointer transition-all ${selectedAutomations.includes(scenario.id)
                                ? 'border-green-500 bg-green-500/5'
                                : 'border-[#2a2a2a] bg-[#0a0a0a] hover:border-green-500/30'
                                }`}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${selectedAutomations.includes(scenario.id)
                                            ? 'border-green-500 bg-green-500'
                                            : 'border-[#3a3a3a]'
                                            }`}>
                                            {selectedAutomations.includes(scenario.id) && (
                                                <Check className="w-3 h-3 text-white" />
                                            )}
                                        </div>
                                        <h5 className="text-white font-bold">{scenario.name}</h5>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-3 ml-8">{scenario.description}</p>
                                    <div className="flex flex-wrap gap-2 ml-8">
                                        {scenario.timeSavedPerWeek && (
                                            <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
                                                ⏱️ {scenario.timeSavedPerWeek}hr/week saved
                                            </span>
                                        )}
                                        {scenario.conversionIncrease && (
                                            <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                                                📈 +{scenario.conversionIncrease}% conversion
                                            </span>
                                        )}
                                        {scenario.implementationTime && (
                                            <span className="text-xs px-2 py-1 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30">
                                                🚀 {scenario.implementationTime}
                                            </span>
                                        )}
                                        {scenario.difficulty && (
                                            <span className={`text-xs px-2 py-1 rounded-full ${scenario.difficulty === 'Easy'
                                                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                                : scenario.difficulty === 'Medium'
                                                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                                                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                                                }`}>
                                                {scenario.difficulty}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Calculate Button */}
            <button
                onClick={() => setShowResults(true)}
                disabled={selectedAutomations.length === 0}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
            >
                {selectedAutomations.length === 0
                    ? 'Select at least one automation to calculate ROI'
                    : `Calculate ROI for ${selectedAutomations.length} Automation${selectedAutomations.length > 1 ? 's' : ''}`
                }
            </button>

            {/* Results */}
            {results && (
                <div className="space-y-4">
                    {/* Summary Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-blue-500/20 rounded-xl p-5">
                            <div className="text-blue-400 text-sm font-semibold mb-1">Time Saved (Monthly)</div>
                            <div className="text-white text-3xl font-bold">{Math.round(results.timeSavedPerMonth)}hrs</div>
                            <div className="text-blue-300 text-xs mt-2">{Math.round(results.timeSavedPerYear)}hrs/year</div>
                        </div>
                        <div className="bg-gradient-to-br from-green-500/10 to-green-600/5 border border-green-500/20 rounded-xl p-5">
                            <div className="text-green-400 text-sm font-semibold mb-1">Cost Savings (Monthly)</div>
                            <div className="text-white text-3xl font-bold">${Math.round(results.costSavingsPerMonth).toLocaleString()}</div>
                            <div className="text-green-300 text-xs mt-2">${Math.round(results.costSavingsPerYear).toLocaleString()}/year</div>
                        </div>
                        <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-xl p-5">
                            <div className="text-purple-400 text-sm font-semibold mb-1">Revenue Lift (Monthly)</div>
                            <div className="text-white text-3xl font-bold">${Math.round(results.revenueLiftPerMonth).toLocaleString()}</div>
                            <div className="text-purple-300 text-xs mt-2">${Math.round(results.revenueLiftPerYear).toLocaleString()}/year</div>
                        </div>
                        <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-600/5 border border-yellow-500/20 rounded-xl p-5">
                            <div className="text-yellow-400 text-sm font-semibold mb-1">Total Value (Monthly)</div>
                            <div className="text-white text-3xl font-bold">${Math.round(results.totalMonthlyValue).toLocaleString()}</div>
                            <div className="text-yellow-300 text-xs mt-2">${Math.round(results.totalYearlyValue).toLocaleString()}/year</div>
                        </div>
                    </div>

                    {/* Yearly Projection */}
                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <h4 className="text-white font-bold text-lg mb-4">12-Month Value Projection</h4>
                        <div className="h-64 bg-[#0a0a0a] rounded-lg border border-[#2a2a2a] flex items-end justify-around p-4 gap-2">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(month => {
                                const monthValue = results.totalMonthlyValue
                                const maxValue = results.totalMonthlyValue
                                const height = (monthValue / maxValue) * 100
                                return (
                                    <div key={month} className="flex-1 flex flex-col items-center gap-2">
                                        <div
                                            className="w-full bg-gradient-to-t from-green-600 to-emerald-500 rounded-t transition-all hover:from-green-500 hover:to-emerald-400"
                                            style={{ height: `${height}%` }}
                                        />
                                        <span className="text-xs text-gray-500">M{month}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="text-center mt-4">
                            <p className="text-2xl font-bold text-green-400">
                                ${Math.round(results.totalYearlyValue).toLocaleString()}
                            </p>
                            <p className="text-sm text-gray-400">Total Value Over 12 Months</p>
                        </div>
                    </div>

                    {/* Professional Summary */}
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
                        <h4 className="text-white font-bold text-lg mb-4">📊 Executive Summary for Prospect</h4>
                        <div className="bg-[#0a0a0a] p-5 rounded-lg border border-[#2a2a2a] space-y-3 font-mono text-sm">
                            <p className="text-gray-300">
                                By implementing <strong className="text-white">{selectedAutomations.length} key automation</strong>{selectedAutomations.length > 1 ? 's' : ''} in your {currentIndustryData?.name.replace(/[^\w\s]/gi, '')}, you would:
                            </p>
                            <ul className="space-y-2 ml-4">
                                <li className="text-blue-400">✓ Save <strong>{Math.round(results.timeSavedPerMonth)}</strong> hours per month ({Math.round(results.timeSavedPerYear)} hours/year)</li>
                                <li className="text-green-400">✓ Reduce labor costs by <strong>${Math.round(results.costSavingsPerMonth).toLocaleString()}</strong>/month</li>
                                <li className="text-purple-400">✓ Generate <strong>${Math.round(results.revenueLiftPerMonth).toLocaleString()}</strong> in additional monthly revenue</li>
                                <li className="text-yellow-400">✓ Total annual value: <strong>${Math.round(results.totalYearlyValue).toLocaleString()}</strong></li>
                            </ul>
                            <p className="text-gray-300 pt-3 border-t border-[#2a2a2a] mt-3">
                                <strong className="text-green-400">Investment:</strong> Typical automation package ranges from $5,000-$15,000 setup + $1,500-$3,000/month.
                                <br />
                                <strong className="text-green-400">ROI Timeline:</strong> Break-even in {Math.ceil((12000 / results.totalMonthlyValue) * 10) / 10} months, then pure profit.
                            </p>
                        </div>
                        <div className="mt-4 flex gap-3">
                            <CopyButton text={`ROI Analysis - ${currentIndustryData?.name}\n\nTime Saved: ${Math.round(results.timeSavedPerMonth)}hrs/month\nCost Savings: $${Math.round(results.costSavingsPerMonth).toLocaleString()}/month\nRevenue Lift: $${Math.round(results.revenueLiftPerMonth).toLocaleString()}/month\nTotal Annual Value: $${Math.round(results.totalYearlyValue).toLocaleString()}`} />
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-4">
                        <p className="text-sm text-gray-300">
                            <strong className="text-blue-400">Pro Tip:</strong> Show this during your demo call. Walk them through each automation, then reveal the total ROI. Their jaw will drop, and they'll ask "When can we start?"
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}

function OnboardingChecklist() {
    const [productType, setProductType] = useState('course')
    const [productName, setProductName] = useState('')
    const [generated, setGenerated] = useState(false)

    const productTypes = [
        { id: 'course', name: '📚 Online Course', quickWin: 'Complete Module 1' },
        { id: 'membership', name: '🎯 Membership', quickWin: 'Attend first live call' },
        { id: 'software', name: '💻 Software/SaaS', quickWin: 'Set up first workflow' },
        { id: 'coaching', name: '💡 Coaching Program', quickWin: 'First breakthrough' }
    ]

    const generateOnboarding = () => {
        const product = productTypes.find(p => p.id === productType)

        return {
            welcome: {
                subject: `✨ Welcome to ${productName || '[Product Name]'}! Here's what to do first...`,
                body: `Hey [Name]!

🎉 You're officially in! Welcome to ${productName || '[Product Name]'}. I'm SO excited to have you here.

**Here's what happens next:**

✅ **Right Now** (5 min):
• Log in to your dashboard: [LINK]
• Update your profile (helps us personalize your experience)
• Download the quick-start guide

✅ **Today** (30 min):
• ${product?.quickWin || 'Complete your first task'}
• Join our private community: [LINK]
• Introduce yourself (we love to celebrate new members!)

✅ **This Week**:
• Attend the Welcome orientation (${productType === 'membership' ? 'Wednesday at 2pm PT' : 'self-paced video'})
• Complete your first ${productType === 'course' ? 'module' : productType === 'software' ? 'workflow' : 'session'}
• Share your #1 goal with the community

**Need help?**
• Email me: [your email]
• ${productType === 'membership' || productType === 'coaching' ? 'Office hours: [schedule link]' : 'Check our FAQ: [link]'}
• Community support: [link]

Let's do this! 🚀

[Your Name]

P.S. - The #1 thing that determines success? **Taking action in the first 48 hours.** So don't wait. Log in and get started NOW.`
            },
            timeline: [
                {
                    day: 'Day 1',
                    hours: '0-2 hours',
                    tasks: [
                        { type: 'email', item: 'Send welcome email (see above)' },
                        { type: 'access', item: 'Grant platform access + login details' },
                        { type: 'community', item: 'Add to private community/group' },
                        { type: 'resource', item: 'Send quick-start guide PDF' }
                    ],
                    goal: 'Immediate action + momentum',
                    metric: 'Login rate: 85%+ (industry benchmark)'
                },
                {
                    day: 'Day 2',
                    hours: '24-48 hours',
                    tasks: [
                        { type: 'email', item: `"Did you ${product?.quickWin.toLowerCase()}?" check-in` },
                        { type: 'support', item: 'Monitor for stuck/inactive users' },
                        { type: 'engagement', item: 'Reply to community intro posts' },
                        { type: 'content', item: productType === 'course' ? 'Remind: Module 1 unlock' : 'Share key resource' }
                    ],
                    goal: 'Quick win achieved',
                    metric: 'Quick win completion: 60%+'
                },
                {
                    day: 'Day 3',
                    hours: '48-72 hours',
                    tasks: [
                        { type: 'email', item: '"Your progress so far" + encouragement' },
                        { type: 'value', item: 'Share success story/testimonial' },
                        { type: 'support', item: 'Proactive outreach to inactive users' },
                        { type: 'upsell', item: productType === 'course' ? 'Mention coaching if struggling' : 'Highlight premium features' }
                    ],
                    goal: 'Build confidence + habit',
                    metric: 'Engagement rate: 50%+'
                },
                {
                    day: 'Day 7',
                    hours: '1 week',
                    tasks: [
                        { type: 'email', item: '"Week 1 wins" recap + Week 2 preview' },
                        { type: 'feedback', item: 'Send NPS survey (0-10 rating)' },
                        { type: 'community', item: 'Host live Q&A or check-in call' },
                        { type: 'milestone', item: 'Celebrate first milestone achieved' }
                    ],
                    goal: 'Assess satisfaction early',
                    metric: 'NPS Score: 8+ is great'
                },
                {
                    day: 'Day 14',
                    hours: '2 weeks',
                    tasks: [
                        { type: 'email', item: '"Halfway through Week 2" motivation boost' },
                        { type: 'content', item: productType === 'course' ? 'Module completion reminder' : 'Feature highlight' },
                        { type: 'support', item: 'Check in with users at risk of churn' },
                        { type: 'engagement', item: 'Share advanced tips/resources' }
                    ],
                    goal: 'Maintain momentum',
                    metric: 'Active users: 40%+ (2-week retention)'
                },
                {
                    day: 'Day 30',
                    hours: '1 month',
                    tasks: [
                        { type: 'email', item: '"Your 30-day transformation" reflection' },
                        { type: 'testimonial', item: 'Request testimonial/review (if positive experience)' },
                        { type: 'renewal', item: productType === 'membership' ? 'Renewal reminder (if monthly)' : 'Referral ask' },
                        { type: 'upsell', item: 'Introduce next-level offer/upgrade' }
                    ],
                    goal: 'Lock in success + advocacy',
                    metric: '30-day retention: 70%+ | Testimonials: 15%+'
                }
            ],
            quickWins: [
                {
                    win: product?.quickWin || 'Complete first task',
                    why: 'Early success = continued engagement (Psychology: Progress Principle)',
                    how: productType === 'course' ? 'Make Module 1 super short (10-15 min max)' : productType === 'software' ? 'Offer pre-built templates' : 'Book first call within 48 hours'
                },
                {
                    win: 'Get first result/output',
                    why: 'Tangible outcome builds confidence',
                    how: 'Provide template or tool they can use immediately'
                },
                {
                    win: 'Connect with community',
                    why: 'Social proof + accountability increases retention 3x',
                    how: 'Require intro post with prompt: "My #1 goal is..."'
                }
            ],
            emailTemplates: {
                day2Subject: `Quick check-in: Did you ${product?.quickWin.toLowerCase()}? 🎯`,
                day2Body: `Hey [Name],

Just checking in! Did you get a chance to ${product?.quickWin.toLowerCase()} yet?

If YES → Amazing! Drop a comment in the community and share your win. We love celebrating!

If NOT → No worries! Here's why you should do it TODAY:
• Takes only [time]
• Gives you [specific benefit]
• Sets you up for [next step]

**Click here to get started:** [LINK]

Need help? Just reply to this email.

You got this!
[Your Name]`,

                day7Subject: `🎉 Week 1 recap + what's coming in Week 2`,
                day7Body: `Hey [Name],

You just completed your first week with ${productName || '[Product]'}! 👏

**Quick pulse check:**
On a scale of 0-10, how would you rate your experience so far? [LINK TO SURVEY]

**What's coming in Week 2:**
${productType === 'course' ? '• Module 2: [Topic]\n• Live Q&A on [date]\n• Bonus workshop: [topic]' : productType === 'membership' ? '• Live coaching call\n• New resource drop\n• Community challenge' : '• Advanced features unlocked\n• Implementation support\n• Success stories'}

Keep up the momentum! You're doing great.

[Your Name]

P.S. - Stuck on anything? Reply and let me know. I'm here to help.`,

                day30Subject: `Your 30-day transformation (+ a favor to ask)`,
                day30Body: `Hey [Name],

It's been 30 days since you joined ${productName || '[Product]'}.

I'd love to know:
• What's been your biggest win so far?
• What surprised you most?
• What could be better?

**If you're loving it** → Would you mind leaving a quick review/testimonial? It helps more people like you find us. [LINK]

**If you're not seeing results** → Let's fix that. Reply to this email and let's troubleshoot together.

Thanks for being here!
[Your Name]

P.S. - ${productType === 'membership' ? 'Your next billing date is [date]. Looking forward to Month 2!' : 'Ready for the next level? Check out [advanced offer].'}`
            },
            metrics: [
                { metric: 'Day 1 Login Rate', target: '85%+', why: 'Immediate engagement predicts completion' },
                { metric: 'Day 2 Quick Win', target: '60%+', why: 'Early success = momentum' },
                { metric: 'Week 1 NPS Score', target: '8+ average', why: 'Indicates product-market fit' },
                { metric: '30-Day Retention', target: '70%+', why: 'Benchmark for sustainable business' },
                { metric: 'Testimonial Rate', target: '15%+', why: 'Social proof for future sales' }
            ]
        }
    }

    const handleGenerate = () => {
        if (!productName.trim()) {
            alert('Please enter your product name!')
            return
        }
        setGenerated(true)
    }

    const onboarding = generated ? generateOnboarding() : null
    const selectedProduct = productTypes.find(p => p.id === productType)

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">📋 Customer Onboarding Builder</h3>
                <p className="text-gray-300 text-sm">
                    Build a <strong className="text-cyan-400">first 30-day experience</strong> that maximizes retention.
                    <span className="text-gray-400"> 70%+ retention starts here.</span>
                </p>
            </div>

            {/* Product Details */}
            <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                    <label className="block text-white font-semibold mb-3">
                        Product Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        placeholder="e.g., Creator Accelerator"
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none"
                    />
                </div>

                <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                    <label className="block text-white font-semibold mb-3">Product Type</label>
                    <select
                        value={productType}
                        onChange={(e) => {
                            setProductType(e.target.value)
                            setGenerated(false)
                        }}
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:border-cyan-500 focus:outline-none"
                    >
                        {productTypes.map(type => (
                            <option key={type.id} value={type.id}>{type.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            {/* Generate Button */}
            <button
                onClick={handleGenerate}
                disabled={!productName.trim()}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
            >
                {productName.trim() ? 'Generate Onboarding Plan 📋' : 'Enter product name first'}
            </button>

            {/* Generated Onboarding */}
            {generated && onboarding && (
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-5">
                        <h4 className="text-white font-bold mb-2">✅ 30-Day Onboarding Ready!</h4>
                        <p className="text-gray-300 text-sm">
                            Complete timeline with email templates, quick wins, and success metrics.
                        </p>
                    </div>

                    {/* Welcome Email */}
                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <div className="flex items-center justify-between mb-4">
                            <h5 className="text-white font-bold">📧 Welcome Email (Send Immediately)</h5>
                            <CopyButton text={`${onboarding.welcome.subject}\n\n${onboarding.welcome.body}`} />
                        </div>
                        <div className="space-y-3">
                            <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#2a2a2a]">
                                <div className="text-xs text-gray-500 mb-1">Subject Line:</div>
                                <div className="text-gray-300 text-sm">{onboarding.welcome.subject}</div>
                            </div>
                            <div className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                                <pre className="text-gray-300 text-sm whitespace-pre-wrap font-sans max-h-64 overflow-y-auto">
                                    {onboarding.welcome.body}
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* 30-Day Timeline */}
                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <h5 className="text-white font-bold mb-4">📅 30-Day Touchpoint Timeline</h5>
                        <div className="space-y-4">
                            {onboarding.timeline.map((milestone, i) => (
                                <div key={i} className="bg-[#0a0a0a] p-5 rounded-lg border border-[#2a2a2a]">
                                    <div className="flex items-center justify-between mb-3">
                                        <div>
                                            <h6 className="text-white font-bold">{milestone.day}</h6>
                                            <p className="text-xs text-gray-500">{milestone.hours}</p>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-xs text-gray-500">Goal:</div>
                                            <div className="text-cyan-400 text-sm font-semibold">{milestone.goal}</div>
                                        </div>
                                    </div>

                                    <div className="space-y-2 mb-3">
                                        {milestone.tasks.map((task, j) => (
                                            <div key={j} className="flex items-start gap-2 text-sm">
                                                <span className={`px-2 py-0.5 rounded text-xs ${task.type === 'email' ? 'bg-blue-500/20 text-blue-400' :
                                                    task.type === 'support' ? 'bg-green-500/20 text-green-400' :
                                                        task.type === 'community' ? 'bg-purple-500/20 text-purple-400' :
                                                            'bg-gray-500/20 text-gray-400'
                                                    }`}>
                                                    {task.type}
                                                </span>
                                                <span className="text-gray-300 flex-1">{task.item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-3 border-t border-[#2a2a2a] text-xs text-gray-400">
                                        📊 {milestone.metric}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Wins */}
                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <h5 className="text-white font-bold mb-4">🎯 Quick Win Strategy</h5>
                        <div className="space-y-3">
                            {onboarding.quickWins.map((qw, i) => (
                                <div key={i} className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                                    <div className="text-cyan-400 font-semibold mb-2">{qw.win}</div>
                                    <div className="text-sm text-gray-400 mb-2"><strong>Why:</strong> {qw.why}</div>
                                    <div className="text-sm text-gray-300"><strong>How:</strong> {qw.how}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Additional Email Templates */}
                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <h5 className="text-white font-bold mb-4">📬 Additional Email Templates</h5>
                        <div className="space-y-4">
                            {[
                                { day: 'Day 2', subject: onboarding.emailTemplates.day2Subject, body: onboarding.emailTemplates.day2Body },
                                { day: 'Day 7', subject: onboarding.emailTemplates.day7Subject, body: onboarding.emailTemplates.day7Body },
                                { day: 'Day 30', subject: onboarding.emailTemplates.day30Subject, body: onboarding.emailTemplates.day30Body }
                            ].map((email, i) => (
                                <div key={i} className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-white font-semibold">{email.day} Email</span>
                                        <CopyButton text={`${email.subject}\n\n${email.body}`} />
                                    </div>
                                    <div className="text-xs text-gray-500 mb-2">Subject: {email.subject}</div>
                                    <details className="text-sm text-gray-400">
                                        <summary className="cursor-pointer hover:text-gray-300">View full email</summary>
                                        <pre className="text-gray-300 text-xs whitespace-pre-wrap font-sans mt-2 p-3 bg-[#000] rounded">
                                            {email.body}
                                        </pre>
                                    </details>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Success Metrics */}
                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <h5 className="text-white font-bold mb-4">📊 Key Success Metrics</h5>
                        <div className="grid md:grid-cols-2 gap-3">
                            {onboarding.metrics.map((m, i) => (
                                <div key={i} className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                                    <div className="text-white font-semibold mb-1">{m.metric}</div>
                                    <div className="text-2xl font-bold text-cyan-400 mb-2">{m.target}</div>
                                    <div className="text-xs text-gray-400">{m.why}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pro Tips */}
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-5">
                        <h4 className="text-white font-bold mb-3">💡 Onboarding Pro Tips</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">•</span>
                                <span>**First 48 hours are critical**: 85% of churn happens when users don't take action immediately</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">•</span>
                                <span>**Quick wins build momentum**: Users who achieve early success are 3x more likely to complete</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">•</span>
                                <span>**Personal touch matters**: Reply to intro posts, send video messages, host live check-ins</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">•</span>
                                <span>**Track engagement daily**: Proactively reach out to inactive users before they ghost</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">•</span>
                                <span>**Celebrate milestones**: Recognition increases completion by 40%</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}


function VaJobDescription() {
    const [role, setRole] = useState('admin')
    const [hours, setHours] = useState(20)
    const [generated, setGenerated] = useState(false)

    const roles = [
        {
            id: 'admin',
            name: '📋 Administrative Assistant',
            rate: '$5-$8/hr',
            responsibilities: [
                'Email management and inbox organization',
                'Calendar scheduling and appointment booking',
                'Data entry and spreadsheet management',
                'Document preparation and formatting',
                'Travel arrangements and expense tracking'
            ],
            skills: [
                'Proficient in Google Workspace/Microsoft Office',
                'Excellent written and verbal English',
                'Strong organizational skills',
                'Detail-oriented and reliable',
                'Experience with CRM tools (bonus)'
            ],
            trialTask: 'Organize a messy inbox with 50+ emails into folders and draft 3 responses',
            experience: '1-2 years in administrative role'
        },
        {
            id: 'social',
            name: '📱 Social Media Manager',
            rate: '$8-$15/hr',
            responsibilities: [
                'Content creation and scheduling (Instagram, TikTok, LinkedIn)',
                'Community management (respond to comments/DMs)',
                'Hashtag research and trend analysis',
                'Performance reporting (weekly/monthly analytics)',
                'Engagement growth strategies'
            ],
            skills: [
                'Expert in social media platforms and best practices',
                'Graphic design skills (Canva, Photoshop)',
                'Copywriting and caption writing',
                'Understanding of analytics and KPIs',
                'Experience with scheduling tools (Later, Buffer, etc.)'
            ],
            trialTask: 'Create 5 Instagram post captions + 1 carousel design for [your niche]',
            experience: '2-3 years managing social accounts (with portfolio)'
        },
        {
            id: 'support',
            name: '🎧 Customer Support Specialist',
            rate: '$6-$10/hr',
            responsibilities: [
                'Respond to customer inquiries via email/chat',
                'Troubleshoot common issues and FAQ',
                'Process refunds and handle complaints',
                'Update help documentation',
                'Track support tickets and response times'
            ],
            skills: [
                'Excellent communication and empathy',
                'Problem-solving mindset',
                'Familiarity with support tools (Zendesk, Intercom)',
                'Patience with difficult customers',
                'Fast typing speed (50+ WPM)'
            ],
            trialTask: 'Respond to 5 customer support scenarios (provide templates)',
            experience: '1+ years in customer service'
        },
        {
            id: 'tech',
            name: '💻 Tech/Web Assistant',
            rate: '$12-$25/hr',
            responsibilities: [
                'WordPress website updates and maintenance',
                'Basic HTML/CSS edits',
                'Plugin management and troubleshooting',
                'Integration setup (Zapier, APIs)',
                'Website backups and security monitoring'
            ],
            skills: [
                'Strong technical aptitude',
                'HTML, CSS, basic JavaScript',
                'WordPress or Webflow experience',
                'Problem-solving and Googling skills',
                'Familiarity with hosting/DNS'
            ],
            trialTask: 'Fix 3 common WordPress issues (provide test site credentials)',
            experience: '2+ years web development/tech support'
        },
        {
            id: 'content',
            name: '✍️ Content Writer/Editor',
            rate: '$10-$20/hr',
            responsibilities: [
                'Write blog posts, emails, and marketing copy',
                'Edit and proofread existing content',
                'Research topics and gather data',
                'SEO optimization (keywords, meta descriptions)',
                'Content calendar management'
            ],
            skills: [
                'Exceptional writing and grammar',
                'Research skills',
                'SEO knowledge',
                'Ability to match brand voice',
                'Experience with WordPress/CMS'
            ],
            trialTask: 'Write a 500-word blog post on [topic] with SEO in mind',
            experience: '2+ years writing/editing (portfolio required)'
        },
        {
            id: 'video',
            name: '🎬 Video Editor',
            rate: '$15-$30/hr',
            responsibilities: [
                'Edit YouTube videos, Reels, and TikToks',
                'Add captions, b-roll, and effects',
                'Color correction and audio mixing',
                'Thumbnail creation',
                'Batch editing for efficiency'
            ],
            skills: [
                'Expert in editing software (Premiere, DaVinci, CapCut)',
                'Understanding of pacing and storytelling',
                'Motion graphics skills (After Effects)',
                'Fast turnaround time',
                'Portfolio of viral content'
            ],
            trialTask: 'Edit a 1-minute sample video with captions and effects',
            experience: '2+ years video editing (portfolio required)'
        }
    ]

    const generateJobPost = () => {
        const selectedRole = roles.find(r => r.id === role)!
        const weeklyBudget = hours * parseFloat(selectedRole.rate.split('-')[0].replace('$', ''))
        const monthlyBudget = weeklyBudget * 4

        return {
            title: `Hiring: ${selectedRole.name} (${hours} hrs/week)`,
            description: `We're looking for a reliable, detail-oriented ${selectedRole.name} to join our team ${hours} hours per week.

**About the Role:**
This is a part-time, remote position perfect for someone who wants ${hours < 20 ? 'flexible side income' : hours < 30 ? 'part-time work' : 'substantial income'} while working from home.

**What You'll Do:**
${selectedRole.responsibilities.map(r => `• ${r}`).join('\n')}

**What We're Looking For:**
${selectedRole.skills.map(s => `• ${s}`).join('\n')}

**Requirements:**
• ${selectedRole.experience}
• Availability: ${hours} hours/week (flexible schedule)
• Strong internet connection and reliable computer
• Timezone: ${hours < 20 ? 'Any (async work)' : 'Preferably overlap with [your timezone]'}
• Excellent English communication (written and verbal)

**What We Offer:**
• Competitive pay: ${selectedRole.rate} (${Math.round(weeklyBudget)}/week = $${Math.round(monthlyBudget)}/month)
• Flexible schedule (work when you want, hit your ${hours}hr/week)
• Remote-first company (work from anywhere)
• Growth potential (start part-time, scale to full-time based on performance)
• Direct collaboration with [founder/team]

**How to Apply:**
Please submit:
1. Your resume/CV
2. A brief cover letter (why you're a great fit)
3. ${selectedRole.id === 'social' || selectedRole.id === 'video' || selectedRole.id === 'content' ? 'Portfolio/work samples' : 'Relevant experience examples'}

**Trial Task (Paid):**
If selected, you'll complete a paid trial task: ${selectedRole.trialTask}

We'll pay $${Math.round(parseFloat(selectedRole.rate.split('-')[1].replace('/hr', '')) * 2)} for the trial (2 hours).

**Timeline:**
• Applications close: [Date]
• Interviews: [Date range]
• Trial tasks: [Date range]
• Start date: [Date]

Looking forward to working with you! 🚀`,

            whereToPost: [
                { platform: 'Upwork', pros: 'Large talent pool, escrow protection', cons: '20% fee on payments', fit: '⭐⭐⭐⭐' },
                { platform: 'OnlineJobs.ph', pros: 'Filipino VAs (great value), direct hire', cons: 'No payment protection', fit: '⭐⭐⭐⭐⭐' },
                { platform: 'Fiverr', pros: 'Fixed-price gigs, easy to start', cons: 'Limited for ongoing work', fit: '⭐⭐⭐' },
                { platform: 'Indeed', pros: 'Wide reach, familiar to job seekers', cons: 'Lots of unqualified applicants', fit: '⭐⭐⭐' },
                { platform: 'LinkedIn', pros: 'Professional network, quality candidates', cons: 'Slower hiring process', fit: '⭐⭐⭐⭐' },
                { platform: 'VA Groups (Facebook)', pros: 'Direct access to VAs, no fees', cons: 'Manual vetting required', fit: '⭐⭐⭐⭐' }
            ],

            interviewQuestions: [
                {
                    question: 'What tools/software are you most proficient in?',
                    why: 'Assess technical skills and compatibility with your stack'
                },
                {
                    question: 'Describe your typical work schedule. When are you most productive?',
                    why: 'Ensure timezone overlap and work style fit'
                },
                {
                    question: `Tell me about a time you [${role === 'support' ? 'dealt with a difficult customer' : role === 'admin' ? 'managed multiple priorities' : role === 'social' ? 'created viral content' : 'solved a complex problem'}].`,
                    why: 'Behavioral question to assess real experience'
                },
                {
                    question: 'How do you manage your tasks and stay organized?',
                    why: 'Evaluate organizational systems and reliability'
                },
                {
                    question: 'What makes you different from other VAs in your field?',
                    why: 'Identify unique skills or value-adds'
                },
                {
                    question: 'Are you comfortable with a trial task before we commit?',
                    why: 'Gauge seriousness and confidence in abilities'
                }
            ],

            redFlags: [
                '❌ Poor English in application (if role requires strong English)',
                '❌ Generic cover letter with no personalization',
                '❌ No portfolio/examples when requested',
                '❌ Unrealistic rate expectations for experience level',
                '❌ Unavailable for your required hours/timezone',
                '❌ Doesn\'t answer application questions directly'
            ],

            greenFlags: [
                '✅ Personalized cover letter mentioning your business',
                '✅ Proactive questions about the role/company',
                '✅ Portfolio clearly demonstrates relevant skills',
                '✅ Realistic about availability and rates',
                '✅ References or testimonials from previous clients',
                '✅ Shows genuine interest in your industry/niche'
            ]
        }
    }

    const handleGenerate = () => {
        setGenerated(true)
    }

    const selectedRole = roles.find(r => r.id === role)!
    const jobPost = generated ? generateJobPost() : null

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-500/10 to-emerald-500/10 border border-teal-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">👔 VA Job Description Generator</h3>
                <p className="text-gray-300 text-sm">
                    Create a <strong className="text-teal-400">professional job post</strong> that attracts top-tier VAs.
                    <span className="text-gray-400"> Hire right, save time.</span>
                </p>
            </div>

            {/* Role Selection */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <label className="block text-white font-semibold mb-4">Select Role Type</label>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {roles.map(r => (
                        <button
                            key={r.id}
                            onClick={() => {
                                setRole(r.id)
                                setGenerated(false)
                            }}
                            className={`p-4 rounded-lg border-2 transition-all text-left ${role === r.id
                                ? 'border-teal-500 bg-teal-500/10'
                                : 'border-[#2a2a2a] bg-[#0a0a0a] hover:border-teal-500/50'
                                }`}
                        >
                            <div className="text-white font-bold text-sm mb-1">{r.name}</div>
                            <div className="text-xs text-teal-400">{r.rate}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Hours per Week */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <label className="block text-white font-semibold mb-3">
                    Hours per Week: {hours} hrs/week
                </label>
                <input
                    type="range"
                    min="5"
                    max="40"
                    step="5"
                    value={hours}
                    onChange={(e) => {
                        setHours(parseInt(e.target.value))
                        setGenerated(false)
                    }}
                    className="w-full h-2 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>5 hrs (casual)</span>
                    <span>20 hrs (part-time)</span>
                    <span>40 hrs (full-time)</span>
                </div>
                <div className="mt-3 text-sm text-gray-400">
                    💰 Estimated cost: ${Math.round(hours * parseFloat(selectedRole.rate.split('-')[0].replace('$', '')))}-${Math.round(hours * parseFloat(selectedRole.rate.split('-')[1].replace('/hr', '')))}/week
                </div>
            </div>

            {/* Generate Button */}
            <button
                onClick={handleGenerate}
                className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg"
            >
                Generate Job Post 👔
            </button>

            {/* Generated Job Post */}
            {generated && jobPost && (
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-5">
                        <h4 className="text-white font-bold mb-2">✅ Job Post Ready!</h4>
                        <p className="text-gray-300 text-sm">
                            Complete job description with requirements, interview questions, and where to post.
                        </p>
                    </div>

                    {/* Job Description */}
                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <div className="flex items-center justify-between mb-4">
                            <h5 className="text-white font-bold">📝 {jobPost.title}</h5>
                            <CopyButton text={`${jobPost.title}\n\n${jobPost.description}`} />
                        </div>
                        <pre className="text-gray-300 text-sm whitespace-pre-wrap font-sans bg-[#0a0a0a] p-5 rounded-lg border border-[#2a2a2a] max-h-96 overflow-y-auto">
                            {jobPost.description}
                        </pre>
                    </div>

                    {/* Where to Post */}
                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <h5 className="text-white font-bold mb-4">🌐 Where to Post This Job</h5>
                        <div className="grid md:grid-cols-2 gap-3">
                            {jobPost.whereToPost.map((platform, i) => (
                                <div key={i} className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-white font-semibold">{platform.platform}</span>
                                        <span className="text-sm text-yellow-400">{platform.fit}</span>
                                    </div>
                                    <div className="text-xs text-green-400 mb-1">✓ {platform.pros}</div>
                                    <div className="text-xs text-red-400">✗ {platform.cons}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Interview Questions */}
                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <h5 className="text-white font-bold mb-4">❓ Interview Questions</h5>
                        <div className="space-y-3">
                            {jobPost.interviewQuestions.map((q, i) => (
                                <div key={i} className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                                    <div className="text-white font-semibold mb-2">Q{i + 1}: {q.question}</div>
                                    <div className="text-xs text-gray-400">💡 Why: {q.why}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Red Flags & Green Flags */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                            <h5 className="text-white font-bold mb-4">🚩 Red Flags to Watch For</h5>
                            <div className="space-y-2">
                                {jobPost.redFlags.map((flag, i) => (
                                    <div key={i} className="text-sm text-gray-300">{flag}</div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                            <h5 className="text-white font-bold mb-4">✨ Green Flags to Look For</h5>
                            <div className="space-y-2">
                                {jobPost.greenFlags.map((flag, i) => (
                                    <div key={i} className="text-sm text-gray-300">{flag}</div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Pro Tips */}
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-5">
                        <h4 className="text-white font-bold mb-3">💡 Hiring Pro Tips</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">•</span>
                                <span>**Always do a paid trial task**: Filters out 80% of unqualified applicants</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">•</span>
                                <span>**Start part-time, scale up**: Easier to test fit before committing full-time</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">•</span>
                                <span>**Check timezone overlap**: At least 2-3 hour overlap for real-time communication</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">•</span>
                                <span>**OnlineJobs.ph is gold**: Best value for Filipino VAs (English-speaking + affordable)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">•</span>
                                <span>**Pay fair rates**: Underpaying = high turnover. Pay well, get loyalty and quality</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}


function N8nBlueprints() {
    const [selectedWorkflow, setSelectedWorkflow] = useState('cart-abandonment')

    const workflows = [
        {
            id: 'cart-abandonment',
            name: '🛒 Cart Abandonment Recovery',
            description: 'Recover 15-25% of abandoned carts with automated email sequence',
            complexity: 'Medium',
            roi: 'High (15-25% recovery rate)',
            nodes: [
                { type: 'Webhook', config: 'Stripe checkout.session.expired' },
                { type: 'Wait', config: '1 hour delay' },
                { type: 'Email', config: 'Send reminder email' },
                { type: 'IF', config: 'Check if purchased' },
                { type: 'Wait', config: '24 hour delay' },
                { type: 'Email', config: 'Send discount offer (10% off)' },
                { type: 'Wait', config: '48 hour delay' },
                { type: 'Email', config: 'Final reminder (last chance)' }
            ],
            emailSequence: [
                { hour: 1, subject: '🛒 You left something behind...', cta: 'Complete your purchase' },
                { hour: 24, subject: '💰 Special 10% discount just for you', cta: 'Claim discount' },
                { hour: 72, subject: '⏰ Last chance - cart expires soon', cta: 'Checkout now' }
            ],
            integrations: ['Stripe', 'SendGrid/Mailgun', 'Google Sheets (tracking)'],
            code: `{
  "nodes": [
    {
      "name": "Stripe Webhook",
      "type": "n8n-nodes-base.webhook",
      "webhookId": "checkout.session.expired"
    },
    {
      "name": "Wait 1 Hour",
      "type": "n8n-nodes-base.wait",
      "amount": 1,
      "unit": "hours"
    },
    {
      "name": "Send Reminder",
      "type": "n8n-nodes-base.emailSend",
      "subject": "You left something behind...",
      "toEmail": "{{$json.customer.email}}"
    }
  ]
}`,
            expectedResults: '15-25% of abandoned carts convert within 72 hours'
        },
        {
            id: 'post-purchase',
            name: '📦 Post-Purchase Onboarding',
            description: 'Automated welcome sequence for new customers',
            complexity: 'Easy',
            roi: 'Medium (Reduces support tickets 30%)',
            nodes: [
                { type: 'Webhook', config: 'Stripe payment.succeeded' },
                { type: 'Email', config: 'Instant: Welcome + login details' },
                { type: 'Airtable', config: 'Log new customer' },
                { type: 'Wait', config: '24 hours' },
                { type: 'Email', config: 'Check-in: Did you get started?' },
                { type: 'Wait', config: '7 days' },
                { type: 'Email', config: 'Request review/testimonial' }
            ],
            emailSequence: [
                { hour: 0, subject: '🎉 Welcome! Here\'s how to get started', cta: 'Access your account' },
                { hour: 24, subject: '👋 Quick check-in - need any help?', cta: 'Reply if stuck' },
                { hour: 168, subject: '⭐ Loving it? Leave us a review', cta: 'Share feedback' }
            ],
            integrations: ['Stripe', 'Email Service', 'Airtable/Notion'],
            code: `{
  "nodes": [
    {
      "name": "Stripe Purchase",
      "type": "n8n-nodes-base.webhook",
      "webhookId": "payment.succeeded"
    },
    {
      "name": "Welcome Email",
      "type": "n8n-nodes-base.emailSend",
      "subject": "Welcome! Here's your login",
      "body": "Thanks for your purchase..."
    },
    {
      "name": "Log to Airtable",
      "type": "n8n-nodes-base.airtable",
      "operation": "create"
    }
  ]
}`,
            expectedResults: '30% reduction in support tickets, 15% testimonial rate'
        },
        {
            id: 'review-request',
            name: '⭐ Review Request Automation',
            description: 'Ask for reviews from satisfied customers at the perfect time',
            complexity: 'Easy',
            roi: 'High (10-20% review rate)',
            nodes: [
                { type: 'Schedule', config: 'Every Monday 9am' },
                { type: 'Airtable', config: 'Find customers from 30 days ago' },
                { type: 'Filter', config: 'No refunds, no complaints' },
                { type: 'Email', config: 'Request review with template' },
                { type: 'Airtable', config: 'Mark as "review requested"' }
            ],
            emailSequence: [
                { hour: 720, subject: '💬 Quick question about [Product]', cta: 'Leave a review' }
            ],
            integrations: ['Airtable/Database', 'Email Service', 'Review Platform API'],
            code: `{
  "nodes": [
    {
      "name": "Weekly Trigger",
      "type": "n8n-nodes-base.scheduleTrigger",
      "rule": "0 9 * * 1"
    },
    {
      "name": "Get Happy Customers",
      "type": "n8n-nodes-base.airtable",
      "operation": "list",
      "filterByFormula": "purchaseDate = 30 days ago"
    },
    {
      "name": "Send Review Request",
      "type": "n8n-nodes-base.emailSend"
    }
  ]
}`,
            expectedResults: '10-20% of customers leave reviews (massive social proof boost)'
        },
        {
            id: 'lead-nurture',
            name: '🎯 Lead Nurturing Drip',
            description: '7-day email sequence to convert free users to paid',
            complexity: 'Medium',
            roi: 'High (5-10% conversion)',
            nodes: [
                { type: 'Webhook', config: 'New signup webhook' },
                { type: 'Email', config: 'Day 0: Welcome + value prop' },
                { type: 'Wait', config: '2 days' },
                { type: 'Email', config: 'Day 2: Case study / social proof' },
                { type: 'IF', config: 'Check if upgraded' },
                { type: 'Wait', config: '3 days' },
                { type: 'Email', config: 'Day 5: Limited-time discount' },
                { type: 'Wait', config: '2 days' },
                { type: 'Email', config: 'Day 7: Final call' }
            ],
            emailSequence: [
                { hour: 0, subject: '👋 Welcome to [Product]', cta: 'Get started' },
                { hour: 48, subject: '📈 See how [Customer] got results', cta: 'Read case study' },
                { hour: 120, subject: '🎁 Special offer (24 hours only)', cta: 'Upgrade now' },
                { hour: 168, subject: '⏰ Offer expires tonight', cta: 'Last chance' }
            ],
            integrations: ['Your App Database', 'Email Service', 'Stripe'],
            code: `{
  "nodes": [
    {
      "name": "New Signup",
      "type": "n8n-nodes-base.webhook",
      "path": "new-user"
    },
    {
      "name": "Day 0 Email",
      "type": "n8n-nodes-base.emailSend"
    },
    {
      "name": "Wait 2 Days",
      "type": "n8n-nodes-base.wait",
      "amount": 2,
      "unit": "days"
    },
    {
      "name": "Check If Paid",
      "type": "n8n-nodes-base.if",
      "conditions": "{{$json.plan}} === 'free'"
    }
  ]
}`,
            expectedResults: '5-10% of free users convert to paid within 7 days'
        },
        {
            id: 'webinar-funnel',
            name: '🎥 Webinar Follow-Up Funnel',
            description: 'Automated email sequence for webinar attendees',
            complexity: 'Medium',
            roi: 'Very High (20-40% conversion)',
            nodes: [
                { type: 'Webhook', config: 'Zoom webinar.ended' },
                { type: 'Email', config: 'Send replay + slides' },
                { type: 'IF', config: 'Attended vs No-show' },
                { type: 'Wait', config: '24 hours' },
                { type: 'Email', config: 'Special offer (attendees only)' },
                { type: 'Wait', config: '48 hours' },
                { type: 'Email', config: 'Urgency: Offer expires soon' },
                { type: 'Slack', config: 'Notify team of hot leads' }
            ],
            emailSequence: [
                { hour: 0, subject: '🎥 Thanks for attending! Here\'s the replay', cta: 'Watch replay' },
                { hour: 24, subject: '🎁 Exclusive offer for attendees', cta: 'Claim offer' },
                { hour: 72, subject: '⏰ Webinar offer closes in 24 hours', cta: 'Act now' }
            ],
            integrations: ['Zoom', 'Email Service', 'Stripe', 'Slack'],
            code: `{
  "nodes": [
    {
      "name": "Zoom Webinar",
      "type": "n8n-nodes-base.zoom",
      "event": "webinar.ended"
    },
    {
      "name": "Send Replay",
      "type": "n8n-nodes-base.emailSend",
      "attachments": "slides.pdf"
    },
    {
      "name": "Attended?",
      "type": "n8n-nodes-base.if",
      "conditions": "{{$json.attended}} === true"
    }
  ]
}`,
            expectedResults: '20-40% conversion from webinar attendees (with time-limited offer)'
        },
        {
            id: 'affiliate-tracking',
            name: '💰 Affiliate Commission Tracker',
            description: 'Auto-calculate and notify affiliates of their commissions',
            complexity: 'Hard',
            roi: 'Medium (Scales affiliate program)',
            nodes: [
                { type: 'Webhook', config: 'Stripe payment.succeeded' },
                { type: 'HTTP', config: 'Check affiliate cookie/param' },
                { type: 'IF', config: 'Has affiliate referrer?' },
                { type: 'Code', config: 'Calculate commission (30%)' },
                { type: 'Airtable', config: 'Log commission' },
                { type: 'Email', config: 'Notify affiliate of sale' },
                { type: 'Schedule', config: 'Monthly payout trigger' },
                { type: 'PayPal', config: 'Send mass payout' }
            ],
            emailSequence: [
                { hour: 0, subject: '💰 You earned a commission!', cta: 'View dashboard' },
                { hour: 720, subject: '💸 Your monthly payout is ready', cta: 'Confirm payment' }
            ],
            integrations: ['Stripe', 'Airtable', 'PayPal/Wise', 'Your App'],
            code: `{
  "nodes": [
    {
      "name": "Sale Webhook",
      "type": "n8n-nodes-base.webhook"
    },
    {
      "name": "Check Affiliate",
      "type": "n8n-nodes-base.httpRequest",
      "url": "yoursite.com/api/affiliate/{{$json.customer.id}}"
    },
    {
      "name": "Calculate Commission",
      "type": "n8n-nodes-base.code",
      "code": "return {commission: $json.amount * 0.3}"
    },
    {
      "name": "Log Commission",
      "type": "n8n-nodes-base.airtable"
    }
  ]
}`,
            expectedResults: 'Fully automated affiliate tracking + payouts (zero manual work)'
        },
        {
            id: 'referral-program',
            name: '🎁 Referral Program Automation',
            description: 'Reward customers who refer friends (both get discount)',
            complexity: 'Medium',
            roi: 'High (Viral growth)',
            nodes: [
                { type: 'Webhook', config: 'New referral signup' },
                { type: 'Code', config: 'Generate unique referral code' },
                { type: 'Stripe', config: 'Create 20% discount coupon' },
                { type: 'Email', config: 'Send codes to both parties' },
                { type: 'Airtable', config: 'Track referral tree' },
                { type: 'IF', config: 'Friend makes purchase?' },
                { type: 'Email', config: 'Thank referrer + bonus credit' }
            ],
            emailSequence: [
                { hour: 0, subject: '🎉 Your friend signed up! Here\'s your reward', cta: 'Use your discount' },
                { hour: 24, subject: '💸 You earned $10 credit!', cta: 'Spend it now' }
            ],
            integrations: ['Stripe', 'Email Service', 'Airtable'],
            code: `{
  "nodes": [
    {
      "name": "Referral Signup",
      "type": "n8n-nodes-base.webhook",
      "path": "referral"
    },
    {
      "name": "Generate Code",
      "type": "n8n-nodes-base.code",
      "code": "return {code: referrer + '_' + Date.now()}"
    },
    {
      "name": "Create Coupon",
      "type": "n8n-nodes-base.stripe",
      "operation": "create coupon",
      "percentOff": 20
    }
  ]
}`,
            expectedResults: '15-30% of customers refer friends (cheapest customer acquisition)'
        },
        {
            id: 'churn-prevention',
            name: '🚨 Churn Prevention Alert',
            description: 'Detect inactive users and re-engage before they cancel',
            complexity: 'Medium',
            roi: 'High (Save 10-20% of churning users)',
            nodes: [
                { type: 'Schedule', config: 'Daily at 9am' },
                { type: 'Database', config: 'Find users inactive 14+ days' },
                { type: 'Email', config: 'Personal check-in from founder' },
                { type: 'Slack', config: 'Alert team to reach out' },
                { type: 'Wait', config: '7 days' },
                { type: 'IF', config: 'Still inactive?' },
                { type: 'Email', config: 'Offer help or pause subscription' }
            ],
            emailSequence: [
                { hour: 0, subject: '👋 We miss you - everything okay?', cta: 'Let\'s chat' },
                { hour: 168, subject: '💡 Need help? Or want to pause?', cta: 'Reach out' }
            ],
            integrations: ['Database', 'Email Service', 'Slack', 'Stripe'],
            code: `{
  "nodes": [
    {
      "name": "Daily Check",
      "type": "n8n-nodes-base.scheduleTrigger",
      "rule": "0 9 * * *"
    },
    {
      "name": "Find Inactive Users",
      "type": "n8n-nodes-base.postgres",
      "query": "SELECT * FROM users WHERE last_login < NOW() - INTERVAL '14 days'"
    },
    {
      "name": "Send Check-In",
      "type": "n8n-nodes-base.emailSend",
      "from": "founder@yourcompany.com"
    }
  ]
}`,
            expectedResults: '10-20% of at-risk users re-engage (huge LTV boost)'
        }
    ]

    const selected = workflows.find(w => w.id === selectedWorkflow)!

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">⚡ N8N Workflow Blueprints</h3>
                <p className="text-gray-300 text-sm">
                    <strong className="text-indigo-400">8 plug-and-play automation workflows</strong> that run your business on autopilot.
                    <span className="text-gray-400"> Copy, customize, deploy.</span>
                </p>
            </div>

            {/* Workflow Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {workflows.map(workflow => (
                    <button
                        key={workflow.id}
                        onClick={() => setSelectedWorkflow(workflow.id)}
                        className={`p-4 rounded-lg border-2 transition-all text-left ${selectedWorkflow === workflow.id
                            ? 'border-indigo-500 bg-indigo-500/10'
                            : 'border-[#2a2a2a] bg-[#141414] hover:border-indigo-500/50'
                            }`}
                    >
                        <div className="text-lg mb-2">{workflow.name.split(' ')[0]}</div>
                        <div className="text-white font-bold text-sm mb-2">{workflow.name.substring(2)}</div>
                        <div className="text-xs text-gray-400 mb-2">{workflow.description}</div>
                        <div className="flex items-center justify-between text-xs">
                            <span className={`px-2 py-1 rounded ${workflow.complexity === 'Easy' ? 'bg-green-500/20 text-green-400' :
                                workflow.complexity === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                    'bg-red-500/20 text-red-400'
                                }`}>
                                {workflow.complexity}
                            </span>
                            <span className="text-indigo-400">{workflow.roi.split(' ')[0]}</span>
                        </div>
                    </button>
                ))}
            </div>

            {/* Selected Workflow Details */}
            <div className="space-y-4">
                {/* Overview */}
                <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                    <h4 className="text-white font-bold text-lg mb-2">{selected.name}</h4>
                    <p className="text-gray-300 text-sm mb-4">{selected.description}</p>
                    <div className="grid sm:grid-cols-3 gap-3">
                        <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#2a2a2a]">
                            <div className="text-xs text-gray-500 mb-1">Complexity</div>
                            <div className={`font-semibold ${selected.complexity === 'Easy' ? 'text-green-400' :
                                selected.complexity === 'Medium' ? 'text-yellow-400' :
                                    'text-red-400'
                                }`}>{selected.complexity}</div>
                        </div>
                        <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#2a2a2a]">
                            <div className="text-xs text-gray-500 mb-1">ROI</div>
                            <div className="font-semibold text-indigo-400">{selected.roi}</div>
                        </div>
                        <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#2a2a2a]">
                            <div className="text-xs text-gray-500 mb-1">Nodes</div>
                            <div className="font-semibold text-white">{selected.nodes.length} steps</div>
                        </div>
                    </div>
                </div>

                {/* Workflow Nodes */}
                <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                    <h5 className="text-white font-bold mb-4">🔗 Workflow Steps</h5>
                    <div className="space-y-3">
                        {selected.nodes.map((node, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xs font-bold">
                                    {i + 1}
                                </div>
                                <div className="flex-1 bg-[#0a0a0a] p-3 rounded-lg border border-[#2a2a2a]">
                                    <div className="text-white font-semibold text-sm mb-1">{node.type}</div>
                                    <div className="text-xs text-gray-400">{node.config}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Email Sequence */}
                <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                    <h5 className="text-white font-bold mb-4">📧 Email Sequence</h5>
                    <div className="space-y-3">
                        {selected.emailSequence.map((email, i) => (
                            <div key={i} className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-indigo-400 font-semibold text-sm">
                                        {email.hour === 0 ? 'Immediately' :
                                            email.hour < 24 ? `${email.hour} hours` :
                                                `${Math.round(email.hour / 24)} days`}
                                    </span>
                                    <span className="text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-400">
                                        {email.cta}
                                    </span>
                                </div>
                                <div className="text-white text-sm">{email.subject}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Integrations Needed */}
                <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                    <h5 className="text-white font-bold mb-4">🔌 Required Integrations</h5>
                    <div className="flex flex-wrap gap-2">
                        {selected.integrations.map((integration, i) => (
                            <span key={i} className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400 text-sm">
                                {integration}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Code Example */}
                <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-white font-bold">💻 N8N JSON (Import This)</h5>
                        <CopyButton text={selected.code} />
                    </div>
                    <pre className="text-gray-300 text-xs whitespace-pre-wrap font-mono bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a] max-h-64 overflow-y-auto">
                        {selected.code}
                    </pre>
                    <p className="text-xs text-gray-500 mt-3">
                        💡 Copy this JSON and import it directly into N8N (Settings → Import Workflow)
                    </p>
                </div>

                {/* Expected Results */}
                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-5">
                    <h5 className="text-white font-bold mb-2">📊 Expected Results</h5>
                    <p className="text-gray-300 text-sm">{selected.expectedResults}</p>
                </div>

                {/* Setup Instructions */}
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-5">
                    <h4 className="text-white font-bold mb-3">🚀 Setup Instructions</h4>
                    <ol className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-start gap-2">
                            <span className="text-blue-400 font-bold">1.</span>
                            <span>Install N8N (self-hosted or cloud.n8n.io)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-400 font-bold">2.</span>
                            <span>Connect your integrations: {selected.integrations.join(', ')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-400 font-bold">3.</span>
                            <span>Copy the JSON code above and import into N8N</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-400 font-bold">4.</span>
                            <span>Customize email templates and timing to match your brand</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-400 font-bold">5.</span>
                            <span>Test with a dummy user/purchase before going live</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-blue-400 font-bold">6.</span>
                            <span>Activate workflow and watch it run on autopilot!</span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    )
}


function SystemPromptGenerator() {
    const [businessType, setBusinessType] = useState('ecommerce')
    const [useCase, setUseCase] = useState('support')
    const [personality, setPersonality] = useState('professional')
    const [tone, setTone] = useState(5)
    const [knowledgeBase, setKnowledgeBase] = useState('')
    const [companyName, setCompanyName] = useState('')
    const [generated, setGenerated] = useState(false)

    const businessTypes = [
        { id: 'ecommerce', name: '🛒 E-commerce', context: 'Online retail store selling products' },
        { id: 'saas', name: '💻 SaaS Product', context: 'Software-as-a-service platform' },
        { id: 'agency', name: '🎨 Agency', context: 'Service-based agency (marketing, design, etc)' },
        { id: 'consulting', name: '📊 Consulting', context: 'Professional consulting services' },
        { id: 'healthcare', name: '🏥 Healthcare', context: 'Medical or wellness services' },
        { id: 'realestate', name: '🏠 Real Estate', context: 'Property sales/rentals' }
    ]

    const useCases = [
        {
            id: 'support',
            name: 'Customer Support',
            icon: '🎧',
            goal: 'Resolve customer issues quickly and accurately',
            keyFeatures: ['Troubleshooting', 'Order tracking', 'Refund handling', 'Product questions']
        },
        {
            id: 'sales',
            name: 'Sales Assistant',
            icon: '💰',
            goal: 'Convert visitors into paying customers',
            keyFeatures: ['Product recommendations', 'Objection handling', 'Upselling', 'Booking demos']
        },
        {
            id: 'leadqual',
            name: 'Lead Qualification',
            icon: '🎯',
            goal: 'Qualify leads before human handoff',
            keyFeatures: ['Budget assessment', 'Timeline discovery', 'Pain point identification', 'BANT scoring']
        },
        {
            id: 'faq',
            name: 'FAQ Bot',
            icon: '❓',
            goal: 'Answer common questions instantly',
            keyFeatures: ['Hours/location', 'Pricing', 'Policies', 'General info']
        }
    ]

    const personalities = [
        { id: 'professional', name: 'Professional', emoji: '👔' },
        { id: 'friendly', name: 'Friendly', emoji: '😊' },
        { id: 'expert', name: 'Expert', emoji: '🎓' },
        { id: 'casual', name: 'Casual', emoji: '😎' },
        { id: 'empathetic', name: 'Empathetic', emoji: '🤝' }
    ]

    const generatePrompts = () => {
        const selectedBusiness = businessTypes.find(b => b.id === businessType)
        const selectedUseCase = useCases.find(u => u.id === useCase)

        const toneDescriptor = tone <= 3 ? 'concise and direct' : tone <= 7 ? 'balanced and helpful' : 'warm and conversational'

        const baseContext = `You are an AI assistant for ${companyName || '[Company Name]'}, a ${selectedBusiness?.context}.`

        const personalityTraits = {
            professional: 'Maintain a professional, courteous tone. Use proper grammar and avoid slang.',
            friendly: 'Be warm and approachable. Use friendly language while remaining helpful.',
            expert: 'Position yourself as a knowledgeable expert. Provide detailed, authoritative answers.',
            casual: 'Keep it light and conversational. Use casual language and be relatable.',
            empathetic: 'Show understanding and empathy. Acknowledge emotions and validate concerns.'
        }

        const useCaseInstructions = {
            support: `Your primary goal is to resolve customer issues efficiently.

ALWAYS:
- Ask clarifying questions to understand the exact issue
- Provide step-by-step solutions when applicable
- Offer to escalate to a human agent if the issue is complex
- End with "Is there anything else I can help you with?"

NEVER:
- Make promises about refunds without human approval
- Share confidential company information
- Argue with customers, even if they're wrong`,

            sales: `Your primary goal is to guide visitors toward a purchase decision.

ALWAYS:
- Ask about their needs before recommending products
- Highlight key benefits, not just features
- Create urgency with limited-time offers (if applicable)
- Offer to set up a demo or consultation call
- Handle objections by reframing value

NEVER:
- Be pushy or aggressive
- Discount without permission
- Misrepresent product capabilities`,

            leadqual: `Your primary goal is to qualify leads using the BANT framework (Budget, Authority, Need, Timeline).

ALWAYS:
- Ask qualifying questions naturally in conversation
- Score leads as Hot/Warm/Cold based on responses
- Collect: budget range, decision-making authority, pain points, timeline
- Route hot leads to sales immediately

NEVER:
- Disqualify too quickly
- Ask all questions at once (feels like interrogation)
- Share lead scoring with the prospect`,

            faq: `Your primary goal is to answer common questions instantly and accurately.

ALWAYS:
- Provide direct answers based on your knowledge base
- Offer related information that might be helpful
- Suggest contacting support for complex questions
- Keep responses concise (2-3 sentences max for simple FAQs)

NEVER:
- Guess if you don't know the answer
- Provide outdated information
- Give legal or medical advice`
        }

        const edgeCases = `EDGE CASE HANDLING:

1. **I don't understand**: If the customer's request is unclear, say: "I want to make sure I help you correctly. Could you please rephrase that?"

2. **Outside your scope**: If asked something you can't help with, say: "That's outside my area of expertise. Let me connect you with someone who can help."

3. **Inappropriate language**: If the customer is rude or abusive, remain professional: "I understand you're frustrated. I'm here to help. Let's focus on resolving this."

4. **Requests for humans**: If they ask for a human, immediately say: "Of course! Let me connect you with a team member right away."

5. **Complex issues**: If the conversation goes beyond 3 back-and-forth messages without resolution, proactively offer: "This seems like it needs more detailed attention. Would you like me to escalate this to our team?"`

        const knowledgeSection = knowledgeBase.trim()
            ? `\n\nKNOWLEDGE BASE:\n${knowledgeBase}\n\nUse this information to answer questions accurately. If a question isn't covered here, acknowledge that and offer to find out.`
            : `\n\nKNOWLEDGE BASE:\n[Add your company-specific information here: products, pricing, policies, FAQs, etc.]`

        // Generate 3 variations
        const variations = [
            // Variation 1: Comprehensive
            `${baseContext}

ROLE & PERSONALITY:
${personalityTraits[personality as keyof typeof personalityTraits]}
Your communication style should be ${toneDescriptor}.

PRIMARY OBJECTIVE:
${selectedUseCase?.goal}

${useCaseInstructions[useCase as keyof typeof useCaseInstructions]}

${edgeCases}${knowledgeSection}

FORMATTING:
- Use bullet points for lists
- Keep paragraphs short (2-3 sentences max)
- Use emojis sparingly, only when appropriate for the brand tone
- Always end responses with a question or clear next step`,

            // Variation 2: Concise
            `${baseContext} Your role is ${selectedUseCase?.goal.toLowerCase()}.

Personality: ${personalityTraits[personality as keyof typeof personalityTraits]}

Key Responsibilities:
${selectedUseCase?.keyFeatures.map((f: string) => `• ${f}`).join('\n')}

Response Guidelines:
- Be ${toneDescriptor}
- Ask clarifying questions when needed
- Escalate complex issues to humans
- Never make promises you can't keep${knowledgeSection}`,

            // Variation 3: Structured
            `# AI Assistant Configuration

## Company Context
${baseContext}

## Personality Profile
- Type: ${personality.charAt(0).toUpperCase() + personality.slice(1)}
- Tone: ${toneDescriptor}
- Style: ${personalityTraits[personality as keyof typeof personalityTraits]}

## Primary Use Case: ${selectedUseCase?.name}
Goal: ${selectedUseCase?.goal}

### Core Capabilities:
${selectedUseCase?.keyFeatures.map((f: string) => `- ${f}`).join('\n')}

### Behavioral Rules:
${useCaseInstructions[useCase as keyof typeof useCaseInstructions]}

### Edge Cases:
- Unclear requests → Ask for clarification
- Out of scope → Escalate to humans
- Frustrated users → Stay professional, offer help
${knowledgeSection}`
        ]

        return variations
    }

    const handleGenerate = () => {
        if (!companyName.trim()) {
            alert('Please enter your company name!')
            return
        }
        setGenerated(true)
    }

    const prompts = generated ? generatePrompts() : null
    const selectedBusiness = businessTypes.find(b => b.id === businessType)
    const selectedUseCase = useCases.find(u => u.id === useCase)

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">🤖 AI System Prompt Generator</h3>
                <p className="text-gray-300 text-sm">
                    Create professional chatbot system prompts that <strong className="text-cyan-400">handle 70%+ of customer inquiries</strong> automatically.
                    ChatGPT & Claude ready.
                </p>
            </div>

            {/* Company Name */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <label className="block text-white font-semibold mb-3">
                    Company Name <span className="text-cyan-400">*</span>
                </label>
                <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="e.g., TechFlow Solutions"
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none"
                />
            </div>

            {/* Business Type */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <label className="block text-white font-semibold mb-4">Business Type</label>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {businessTypes.map(type => (
                        <button
                            key={type.id}
                            onClick={() => {
                                setBusinessType(type.id)
                                setGenerated(false)
                            }}
                            className={`p-4 rounded-lg border-2 transition-all text-left ${businessType === type.id
                                ? 'border-cyan-500 bg-cyan-500/10'
                                : 'border-[#2a2a2a] bg-[#0a0a0a] hover:border-cyan-500/50'
                                }`}
                        >
                            <div className="text-white font-bold text-sm mb-1">{type.name}</div>
                            <div className="text-xs text-gray-400">{type.context}</div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Use Case */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <label className="block text-white font-semibold mb-4">Primary Use Case</label>
                <div className="grid md:grid-cols-2 gap-4">
                    {useCases.map(uc => (
                        <button
                            key={uc.id}
                            onClick={() => {
                                setUseCase(uc.id)
                                setGenerated(false)
                            }}
                            className={`p-5 rounded-xl border-2 transition-all text-left ${useCase === uc.id
                                ? 'border-cyan-500 bg-cyan-500/10'
                                : 'border-[#2a2a2a] bg-[#0a0a0a] hover:border-cyan-500/50'
                                }`}
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <span className="text-2xl">{uc.icon}</span>
                                <h4 className="text-white font-bold">{uc.name}</h4>
                            </div>
                            <p className="text-xs text-gray-400 mb-3">{uc.goal}</p>
                            <div className="flex flex-wrap gap-1">
                                {uc.keyFeatures.slice(0, 2).map((feature, i) => (
                                    <span key={i} className="text-xs px-2 py-1 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                                        {feature}
                                    </span>
                                ))}
                            </div>
                        </button>
                    ))}
                </div>
            </div>

            {/* Personality & Tone */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                    <label className="block text-white font-semibold mb-4">Personality Type</label>
                    <div className="grid grid-cols-2 gap-3">
                        {personalities.map(p => (
                            <button
                                key={p.id}
                                onClick={() => {
                                    setPersonality(p.id)
                                    setGenerated(false)
                                }}
                                className={`p-3 rounded-lg border-2 transition-all ${personality === p.id
                                    ? 'border-cyan-500 bg-cyan-500/10'
                                    : 'border-[#2a2a2a] bg-[#0a0a0a] hover:border-cyan-500/50'
                                    }`}
                            >
                                <div className="text-center">
                                    <div className="text-2xl mb-1">{p.emoji}</div>
                                    <div className="text-white font-semibold text-sm">{p.name}</div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                    <label className="block text-white font-semibold mb-3">
                        Response Tone: {tone <= 3 ? 'Concise' : tone <= 7 ? 'Balanced' : 'Detailed'}
                    </label>
                    <input
                        type="range"
                        min="1"
                        max="10"
                        value={tone}
                        onChange={(e) => setTone(parseInt(e.target.value))}
                        className="w-full h-2 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                        <span>Short & Direct</span>
                        <span>Warm & Thorough</span>
                    </div>
                </div>
            </div>

            {/* Knowledge Base (Optional) */}
            <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                <label className="block text-white font-semibold mb-3">
                    Knowledge Base (Optional)
                </label>
                <textarea
                    value={knowledgeBase}
                    onChange={(e) => setKnowledgeBase(e.target.value)}
                    placeholder="Add company-specific info:&#10;• Product details&#10;• Pricing tiers&#10;• Return policies&#10;• FAQ answers&#10;• Contact info"
                    className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-cyan-500 focus:outline-none h-32 resize-none text-sm"
                />
                <p className="text-xs text-gray-500 mt-2">💡 The more specific info you add, the better the chatbot performs</p>
            </div>

            {/* Generate Button */}
            <button
                onClick={handleGenerate}
                disabled={!companyName.trim()}
                className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed shadow-lg"
            >
                {companyName.trim() ? 'Generate System Prompts 🤖' : 'Enter company name first'}
            </button>

            {/* Generated Prompts */}
            {generated && prompts && (
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-5">
                        <h4 className="text-white font-bold mb-2">✅ 3 Prompt Variations Ready!</h4>
                        <p className="text-gray-300 text-sm">
                            Test each variation to see which works best for your use case. V1 is most detailed, V3 is most structured.
                        </p>
                    </div>

                    {prompts.map((prompt, i) => (
                        <div key={i} className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f] hover:border-cyan-500/50 transition-colors">
                            <div className="flex items-center justify-between mb-4">
                                <div>
                                    <h5 className="text-white font-bold">
                                        {i === 0 ? '📝 Variation 1: Comprehensive' : i === 1 ? '⚡ Variation 2: Concise' : '📋 Variation 3: Structured'}
                                    </h5>
                                    <p className="text-xs text-gray-400 mt-1">
                                        {i === 0 ? 'Detailed with full edge case handling' : i === 1 ? 'Essential instructions only' : 'Markdown formatted for clarity'}
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                                        {prompt.length} chars
                                    </span>
                                    <CopyButton text={prompt} />
                                </div>
                            </div>
                            <pre className="text-gray-300 text-xs whitespace-pre-wrap font-mono bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a] max-h-96 overflow-y-auto">
                                {prompt}
                            </pre>
                        </div>
                    ))}

                    {/* Implementation Guide */}
                    <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-5">
                        <h4 className="text-white font-bold mb-3">🚀 Implementation Checklist</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">1.</span>
                                <span>Copy your chosen variation to your AI platform (ChatGPT, Claude, etc)</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">2.</span>
                                <span>Test with 10-15 common customer scenarios</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">3.</span>
                                <span>Refine based on responses - add edge cases you discover</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">4.</span>
                                <span>Monitor first 100 conversations and iterate on the prompt</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-400">5.</span>
                                <span>Pro tip: Version control your prompts - track changes and performance</span>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    )
}

function AutomationChecklist() {
    const [selectedItems, setSelectedItems] = useState<string[]>([])
    const [showReport, setShowReport] = useState(false)

    const categories = [
        {
            id: 'sales',
            name: '💰 Sales Automation',
            color: 'green',
            items: [
                { id: 's1', task: 'Lead capture forms auto-save to CRM', timeSaved: 5, difficulty: 'Easy', roi: 'High' },
                { id: 's2', task: 'Auto-assign leads to sales reps (round-robin)', timeSaved: 3, difficulty: 'Easy', roi: 'Medium' },
                { id: 's3', task: 'Send automated welcome email to new leads', timeSaved: 10, difficulty: 'Easy', roi: 'High' },
                { id: 's4', task: 'Slack notification when high-value lead signs up', timeSaved: 2, difficulty: 'Easy', roi: 'Medium' },
                { id: 's5', task: 'Auto-follow-up if lead doesn\'t respond in 48hrs', timeSaved: 15, difficulty: 'Medium', roi: 'High' },
                { id: 's6', task: 'Deal won → Auto-create onboarding task list', timeSaved: 10, difficulty: 'Medium', roi: 'High' },
                { id: 's7', task: 'Stripe payment → Auto-send invoice + receipt', timeSaved: 8, difficulty: 'Easy', roi: 'High' },
                { id: 's8', task: 'Failed payment → Auto-retry + notify customer', timeSaved: 12, difficulty: 'Medium', roi: 'Very High' },
                { id: 's9', task: 'Trial ending → Auto-send upgrade reminder', timeSaved: 5, difficulty: 'Easy', roi: 'Very High' },
                { id: 's10', task: 'Proposal sent → Auto-remind if no response', timeSaved: 7, difficulty: 'Easy', roi: 'Medium' }
            ]
        },
        {
            id: 'marketing',
            name: '📢 Marketing Automation',
            color: 'purple',
            items: [
                { id: 'm1', task: 'New blog post → Auto-share to all social media', timeSaved: 15, difficulty: 'Medium', roi: 'High' },
                { id: 'm2', task: 'Newsletter subscribers → Auto-add to email tool', timeSaved: 5, difficulty: 'Easy', roi: 'High' },
                { id: 'm3', task: 'Webinar signup → Auto-send calendar invite', timeSaved: 3, difficulty: 'Easy', roi: 'Medium' },
                { id: 'm4', task: 'Download lead magnet → Trigger email sequence', timeSaved: 10, difficulty: 'Medium', roi: 'Very High' },
                { id: 'm5', task: 'YouTube upload → Auto-create Twitter thread', timeSaved: 20, difficulty: 'Hard', roi: 'Medium' },
                { id: 'm6', task: 'Customer review → Auto-post to website/socials', timeSaved: 10, difficulty: 'Medium', roi: 'High' },
                { id: 'm7', task: 'Track email opens → Tag hot leads in CRM', timeSaved: 8, difficulty: 'Medium', roi: 'High' },
                { id: 'm8', task: 'Abandoned cart → Auto-recovery email sequence', timeSaved: 12, difficulty: 'Medium', roi: 'Very High' },
                { id: 'm9', task: 'Event registration → Send pre-event content drip', timeSaved: 15, difficulty: 'Medium', roi: 'High' },
                { id: 'm10', task: 'Referral signup → Auto-send reward to both users', timeSaved: 5, difficulty: 'Medium', roi: 'High' }
            ]
        },
        {
            id: 'operations',
            name: '⚙️ Operations Automation',
            color: 'blue',
            items: [
                { id: 'o1', task: 'New hire → Auto-create accounts (Gmail, Slack, etc)', timeSaved: 30, difficulty: 'Hard', roi: 'High' },
                { id: 'o2', task: 'Timesheet submitted → Auto-calculate payroll', timeSaved: 20, difficulty: 'Hard', roi: 'Very High' },
                { id: 'o3', task: 'Project deadline approaching → Auto-remind team', timeSaved: 5, difficulty: 'Easy', roi: 'Medium' },
                { id: 'o4', task: 'Task completed → Auto-notify next person in workflow', timeSaved: 10, difficulty: 'Medium', roi: 'High' },
                { id: 'o5', task: 'Invoice unpaid after 7 days → Auto-reminder', timeSaved: 8, difficulty: 'Easy', roi: 'High' },
                { id: 'o6', task: 'Contract expiring → Auto-alert 30 days prior', timeSaved: 5, difficulty: 'Easy', roi: 'Medium' },
                { id: 'o7', task: 'Expense submitted → Auto-categorize & log', timeSaved: 15, difficulty: 'Medium', roi: 'High' },
                { id: 'o8', task: 'Document uploaded → Auto-backup to cloud storage', timeSaved: 3, difficulty: 'Easy', roi: 'Low' },
                { id: 'o9', task: 'Meeting booked → Auto-send prep materials', timeSaved: 10, difficulty: 'Medium', roi: 'Medium' },
                { id: 'o10', task: 'Inventory low → Auto-order restock', timeSaved: 20, difficulty: 'Hard', roi: 'Very High' }
            ]
        },
        {
            id: 'support',
            name: '🎧 Customer Support Automation',
            color: 'cyan',
            items: [
                { id: 'cs1', task: 'New support ticket → Auto-categorize & assign', timeSaved: 5, difficulty: 'Medium', roi: 'High' },
                { id: 'cs2', task: 'Common FAQ → AI chatbot auto-responds', timeSaved: 40, difficulty: 'Hard', roi: 'Very High' },
                { id: 'cs3', task: 'Ticket unresolved 24hrs → Auto-escalate to manager', timeSaved: 10, difficulty: 'Easy', roi: 'High' },
                { id: 'cs4', task: 'Ticket resolved → Auto-send satisfaction survey', timeSaved: 5, difficulty: 'Easy', roi: 'Medium' },
                { id: 'cs5', task: 'Angry customer detected → Instant alert to team lead', timeSaved: 15, difficulty: 'Medium', roi: 'High' },
                { id: 'cs6', task: 'Feature request → Auto-log to product board', timeSaved: 3, difficulty: 'Easy', roi: 'Low' },
                { id: 'cs7', task: 'Refund requested → Auto-process (under $X)', timeSaved: 10, difficulty: 'Medium', roi: 'High' },
                { id: 'cs8', task: 'VIP customer emails → Priority routing', timeSaved: 5, difficulty: 'Easy', roi: 'High' },
                { id: 'cs9', task: 'Support call ended → Auto-send summary email', timeSaved: 8, difficulty: 'Medium', roi: 'Medium' },
                { id: 'cs10', task: 'Knowledge base update → Auto-notify relevant tickets', timeSaved: 7, difficulty: 'Medium', roi: 'Medium' }
            ]
        },
        {
            id: 'finance',
            name: '💵 Finance Automation',
            color: 'yellow',
            items: [
                { id: 'f1', task: 'Stripe payment → Auto-sync to accounting software', timeSaved: 10, difficulty: 'Medium', roi: 'High' },
                { id: 'f2', task: 'Monthly revenue → Auto-generate P&L report', timeSaved: 30, difficulty: 'Hard', roi: 'High' },
                { id: 'f3', task: 'Receipt emailed → Auto-extract & categorize expense', timeSaved: 20, difficulty: 'Hard', roi: 'Very High' },
                { id: 'f4', task: 'Invoice sent → Auto-mark as "pending" in books', timeSaved: 5, difficulty: 'Easy', roi: 'Medium' },
                { id: 'f5', task: 'Payment received → Auto-reconcile invoice', timeSaved: 8, difficulty: 'Medium', roi: 'High' },
                { id: 'f6', task: 'Subscription renewed → Auto-log recurring revenue', timeSaved: 3, difficulty: 'Easy', roi: 'Low' },
                { id: 'f7', task: 'End of month → Auto-close books & backup', timeSaved: 15, difficulty: 'Medium', roi: 'Medium' },
                { id: 'f8', task: 'Budget exceeded → Auto-alert finance team', timeSaved: 5, difficulty: 'Easy', roi: 'High' },
                { id: 'f9', task: 'Tax deadline → Auto-reminder 30/15/7 days out', timeSaved: 2, difficulty: 'Easy', roi: 'Low' },
                { id: 'f10', task: 'Churn → Auto-calculate lost MRR & update forecast', timeSaved: 10, difficulty: 'Medium', roi: 'High' }
            ]
        }
    ]

    const toggleItem = (itemId: string) => {
        if (selectedItems.includes(itemId)) {
            setSelectedItems(selectedItems.filter(id => id !== itemId))
        } else {
            setSelectedItems([...selectedItems, itemId])
        }
    }

    const generateReport = () => {
        const allItems = categories.flatMap(cat => cat.items)
        const selected = allItems.filter(item => selectedItems.includes(item.id))

        const totalTimeSaved = selected.reduce((sum, item) => sum + item.timeSaved, 0)
        const byDifficulty = {
            Easy: selected.filter(i => i.difficulty === 'Easy').length,
            Medium: selected.filter(i => i.difficulty === 'Medium').length,
            Hard: selected.filter(i => i.difficulty === 'Hard').length
        }
        const byROI = {
            Low: selected.filter(i => i.roi === 'Low').length,
            Medium: selected.filter(i => i.roi === 'Medium').length,
            High: selected.filter(i => i.roi === 'High').length,
            'Very High': selected.filter(i => i.roi === 'Very High').length
        }

        // Priority ranking: High ROI + Easy difficulty = start here
        const priorities = {
            'quick wins': selected.filter(i => i.difficulty === 'Easy' && (i.roi === 'High' || i.roi === 'Very High')),
            'high impact': selected.filter(i => i.difficulty === 'Medium' && i.roi === 'Very High'),
            'long term': selected.filter(i => i.difficulty === 'Hard' && i.roi === 'Very High'),
            'low priority': selected.filter(i => i.roi === 'Low' || i.roi === 'Medium')
        }

        return {
            totalSelected: selected.length,
            totalTimeSaved,
            byDifficulty,
            byROI,
            priorities,
            allSelected: selected
        }
    }

    const report = showReport ? generateReport() : null
    const totalPossible = categories.flatMap(cat => cat.items).length

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">✅ Automation Opportunity Audit</h3>
                <p className="text-gray-300 text-sm">
                    <strong className="text-orange-400">50-point checklist</strong> to identify where automation can save time and money.
                    <span className="text-gray-400"> Check what applies to your business.</span>
                </p>
            </div>

            {/* Progress */}
            <div className="bg-[#141414] p-5 rounded-xl border border-[#1f1f1f]">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-white font-semibold">Selected: {selectedItems.length}/{totalPossible}</span>
                    <button
                        onClick={() => setShowReport(!showReport)}
                        disabled={selectedItems.length === 0}
                        className="px-4 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold text-sm transition-colors"
                    >
                        {showReport ? 'Hide Report' : 'Generate Report'}
                    </button>
                </div>
                <div className="w-full bg-[#0a0a0a] rounded-full h-3 overflow-hidden">
                    <div
                        className="bg-gradient-to-r from-orange-500 to-amber-500 h-full transition-all duration-500"
                        style={{ width: `${(selectedItems.length / totalPossible) * 100}%` }}
                    />
                </div>
            </div>

            {/* Categories */}
            {categories.map(category => (
                <div key={category.id} className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                    <h4 className="text-white font-bold text-lg mb-4">{category.name}</h4>
                    <div className="space-y-2">
                        {category.items.map(item => (
                            <label
                                key={item.id}
                                className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${selectedItems.includes(item.id)
                                    ? `border-${category.color}-500 bg-${category.color}-500/10`
                                    : 'border-[#2a2a2a] bg-[#0a0a0a] hover:border-[#3a3a3a]'
                                    }`}
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedItems.includes(item.id)}
                                    onChange={() => toggleItem(item.id)}
                                    className="mt-1 w-5 h-5 rounded accent-orange-500"
                                />
                                <div className="flex-1">
                                    <div className="text-white text-sm mb-2">{item.task}</div>
                                    <div className="flex flex-wrap gap-2 text-xs">
                                        <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-400">
                                            ⏱️ {item.timeSaved}hrs/month saved
                                        </span>
                                        <span className={`px-2 py-1 rounded ${item.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                                            item.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                                'bg-red-500/20 text-red-400'
                                            }`}>
                                            {item.difficulty}
                                        </span>
                                        <span className={`px-2 py-1 rounded ${item.roi === 'Very High' ? 'bg-purple-500/20 text-purple-400' :
                                            item.roi === 'High' ? 'bg-green-500/20 text-green-400' :
                                                item.roi === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                                    'bg-gray-500/20 text-gray-400'
                                            }`}>
                                            ROI: {item.roi}
                                        </span>
                                    </div>
                                </div>
                            </label>
                        ))}
                    </div>
                </div>
            ))}

            {/* Generated Report */}
            {showReport && report && (
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
                        <h4 className="text-white font-bold text-xl mb-4">📊 Your Automation Report</h4>

                        {/* Summary Stats */}
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                            <div className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                                <div className="text-gray-400 text-xs mb-1">Total Automations</div>
                                <div className="text-white text-3xl font-bold">{report.totalSelected}</div>
                            </div>
                            <div className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                                <div className="text-gray-400 text-xs mb-1">Time Saved/Month</div>
                                <div className="text-emerald-400 text-3xl font-bold">{report.totalTimeSaved}hrs</div>
                            </div>
                            <div className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                                <div className="text-gray-400 text-xs mb-1">Annual Time Saved</div>
                                <div className="text-blue-400 text-3xl font-bold">{report.totalTimeSaved * 12}hrs</div>
                            </div>
                            <div className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                                <div className="text-gray-400 text-xs mb-1">Value (@ $50/hr)</div>
                                <div className="text-purple-400 text-3xl font-bold">${(report.totalTimeSaved * 12 * 50).toLocaleString()}</div>
                            </div>
                        </div>

                        {/* Priority Roadmap */}
                        <div className="space-y-4">
                            <h5 className="text-white font-bold">🗺️ Implementation Roadmap</h5>

                            {/* Phase 1: Quick Wins */}
                            {report.priorities['quick wins'].length > 0 && (
                                <div className="bg-[#0a0a0a] p-5 rounded-lg border border-green-500/30">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-2xl">⚡</span>
                                        <h6 className="text-white font-bold">Phase 1: Quick Wins (Start Here!)</h6>
                                        <span className="ml-auto text-xs px-2 py-1 rounded bg-green-500/20 text-green-400">
                                            {report.priorities['quick wins'].length} items
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400 mb-3">Easy to implement + High ROI = Maximum impact with minimal effort</p>
                                    <ul className="space-y-2">
                                        {report.priorities['quick wins'].map((item, i) => (
                                            <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                                                <span className="text-green-400">✓</span>
                                                <span>{item.task} ({item.timeSaved}hrs/month)</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Phase 2: High Impact */}
                            {report.priorities['high impact'].length > 0 && (
                                <div className="bg-[#0a0a0a] p-5 rounded-lg border border-purple-500/30">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-2xl">🚀</span>
                                        <h6 className="text-white font-bold">Phase 2: High Impact</h6>
                                        <span className="ml-auto text-xs px-2 py-1 rounded bg-purple-500/20 text-purple-400">
                                            {report.priorities['high impact'].length} items
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400 mb-3">Medium difficulty but Very High ROI - Worth the investment</p>
                                    <ul className="space-y-2">
                                        {report.priorities['high impact'].map((item, i) => (
                                            <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                                                <span className="text-purple-400">✓</span>
                                                <span>{item.task} ({item.timeSaved}hrs/month)</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Phase 3: Long Term */}
                            {report.priorities['long term'].length > 0 && (
                                <div className="bg-[#0a0a0a] p-5 rounded-lg border border-blue-500/30">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-2xl">🏗️</span>
                                        <h6 className="text-white font-bold">Phase 3: Long-Term Projects</h6>
                                        <span className="ml-auto text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-400">
                                            {report.priorities['long term'].length} items
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-400 mb-3">Complex setups but massive payoff - Do after Phase 1 & 2</p>
                                    <ul className="space-y-2">
                                        {report.priorities['long term'].map((item, i) => (
                                            <li key={i} className="text-sm text-gray-300 flex items-start gap-2">
                                                <span className="text-blue-400">✓</span>
                                                <span>{item.task} ({item.timeSaved}hrs/month)</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Pro Tips */}
                        <div className="mt-6 bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/30 rounded-lg p-5">
                            <h6 className="text-white font-bold mb-3">💡 Implementation Tips</h6>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-400">•</span>
                                    <span>Start with Phase 1 Quick Wins - build momentum and prove ROI fast</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-400">•</span>
                                    <span>Use tools like Zapier, Make.com, or N8N (cheaper for volume)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-400">•</span>
                                    <span>Implement 1-2 automations per week (don't overwhelm yourself)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-400">•</span>
                                    <span>Track time saved monthly - celebrate wins to stay motivated</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-400">•</span>
                                    <span>If a task takes &lt;2 minutes manually, automation might not be worth it</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}



function ContentRepurposer() {
    const [inputText, setInputText] = useState('')
    const [contentType, setContentType] = useState('twitter')
    const [tone, setTone] = useState('engaging')
    const [generatedContent, setGeneratedContent] = useState('')
    const [isGenerating, setIsGenerating] = useState(false)

    const contentTypes = [
        { id: 'twitter', name: '🐦 Twitter Thread', icon: '🧵' },
        { id: 'linkedin', name: '💼 LinkedIn Post', icon: '📝' },
        { id: 'instagram', name: '📸 Instagram Caption', icon: '🖼️' },
        { id: 'newsletter', name: '📧 Newsletter', icon: 'mailbox' },
        { id: 'tiktok', name: '🎵 TikTok Script', icon: '🎬' }
    ]

    const tones = ['engaging', 'professional', 'controversial', 'educational', 'humorous']

    const handleGenerate = () => {
        if (!inputText) return
        setIsGenerating(true)

        // Simulate generation
        setTimeout(() => {
            let content = ''
            if (contentType === 'twitter') {
                content = `🧵 1/5\n\n${inputText.substring(0, 50)}...\n\nHere's why this matters:\n\n2/5\nKey insight #1 based on your input.\n\n3/5\nWhy most people get this wrong.\n\n4/5\nActionable tip you can apply today.\n\n5/5\nSummary: ${inputText.substring(0, 30)}...\n\nFollow me for more!`
            } else if (contentType === 'linkedin') {
                content = `${inputText.substring(0, 50)}...\n\nI learned this the hard way.\n\nHere's the breakdown:\n\n👉 Point 1\n👉 Point 2\n👉 Point 3\n\nWhy it matters: ${inputText.substring(50, 100)}...\n\nWhat do you think? 👇\n\n#growth #learning #strategy`
            } else {
                content = `[${contentType.toUpperCase()} CONTENT]\n\n${inputText}\n\nGenerated with ${tone} tone.`
            }
            setGeneratedContent(content)
            setIsGenerating(false)
        }, 1500)
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="bg-gradient-to-r from-pink-500/10 to-rose-500/10 border border-pink-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">🔄 Content Repurposer</h3>
                <p className="text-gray-300 text-sm">
                    Turn one piece of content into <strong className="text-pink-400">unlimited social posts</strong>.
                    <span className="text-gray-400"> Multiply your reach instantly.</span>
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
                {/* Input Section */}
                <div className="space-y-4">
                    <div className="bg-[#141414] p-4 rounded-xl border border-[#1f1f1f]">
                        <label className="block text-white font-semibold mb-2">Source Content</label>
                        <textarea
                            value={inputText}
                            onChange={(e) => setInputText(e.target.value)}
                            placeholder="Paste your blog post, video transcript, or rough notes here..."
                            className="w-full h-64 bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg p-4 text-gray-300 focus:outline-none focus:border-pink-500 transition-colors resize-none"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-[#141414] p-4 rounded-xl border border-[#1f1f1f]">
                            <label className="block text-white font-semibold mb-2">Format</label>
                            <select
                                value={contentType}
                                onChange={(e) => setContentType(e.target.value)}
                                className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500"
                            >
                                {contentTypes.map(t => (
                                    <option key={t.id} value={t.id}>{t.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="bg-[#141414] p-4 rounded-xl border border-[#1f1f1f]">
                            <label className="block text-white font-semibold mb-2">Tone</label>
                            <select
                                value={tone}
                                onChange={(e) => setTone(e.target.value)}
                                className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-pink-500 capitalize"
                            >
                                {tones.map(t => (
                                    <option key={t} value={t}>{t}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <button
                        onClick={handleGenerate}
                        disabled={!inputText || isGenerating}
                        className="w-full bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                        {isGenerating ? (
                            <>
                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                Repurposing...
                            </>
                        ) : (
                            <>
                                🔄 Generate Content
                            </>
                        )}
                    </button>
                </div>

                {/* Output Section */}
                <div className="space-y-4">
                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f] h-full flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-white font-bold">✨ Generated Output</h4>
                            {generatedContent && <CopyButton text={generatedContent} />}
                        </div>

                        {generatedContent ? (
                            <div className="flex-1 bg-[#0a0a0a] rounded-lg p-6 border border-[#2a2a2a] overflow-y-auto max-h-[500px]">
                                <pre className="text-gray-300 whitespace-pre-wrap font-sans text-sm leading-relaxed">
                                    {generatedContent}
                                </pre>
                            </div>
                        ) : (
                            <div className="flex-1 flex flex-col items-center justify-center text-center p-8 bg-[#0a0a0a] rounded-lg border border-[#2a2a2a] border-dashed">
                                <div className="w-16 h-16 bg-[#1a1a1a] rounded-full flex items-center justify-center mb-4">
                                    <PenTool className="w-8 h-8 text-gray-600" />
                                </div>
                                <p className="text-gray-500 text-sm">
                                    Enter your content and click generate to see the magic happen.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

function LeadMagnetBuilder() {
    const [niche, setNiche] = useState('')
    const [audience, setAudience] = useState('')
    const [problem, setProblem] = useState('')
    const [generatedIdeas, setGeneratedIdeas] = useState<any[]>([])
    const [isGenerating, setIsGenerating] = useState(false)

    const handleGenerate = () => {
        if (!niche || !audience || !problem) return
        setIsGenerating(true)

        setTimeout(() => {
            setGeneratedIdeas([
                {
                    type: '📘 Ultimate Guide (Ebook)',
                    title: `The Complete Guide to ${niche} for ${audience}`,
                    outline: ['Chapter 1: Understanding the Basics', 'Chapter 2: Common Mistakes to Avoid', 'Chapter 3: Step-by-Step Strategy', 'Chapter 4: Tools & Resources'],
                    hook: 'Stop guessing and start executing with this comprehensive playbook.'
                },
                {
                    type: '✅ Checklist / Cheat Sheet',
                    title: `The ${problem} Solver Checklist`,
                    outline: ['Pre-requisites', 'Daily Action Items', 'Weekly Review Points', 'Emergency Troubleshooting'],
                    hook: 'Solve [Problem] in 15 minutes a day with this simple checklist.'
                },
                {
                    type: '🎥 Mini-Course / Webinar',
                    title: `Master ${niche} in 3 Days`,
                    outline: ['Day 1: The Foundation', 'Day 2: The Strategy', 'Day 3: The Execution'],
                    hook: 'Watch over my shoulder as I show you exactly how to succeed.'
                },
                {
                    type: '🛠️ Toolkit / Resource List',
                    title: `Top 10 Tools for ${audience}`,
                    outline: ['Essential Software', 'Hardware Recommendations', 'Hidden Gems', 'Budget Alternatives'],
                    hook: 'Save hours of research with my curated list of proven tools.'
                },
                {
                    type: '📊 Template / Swipe File',
                    title: `Copy-Paste ${niche} Templates`,
                    outline: ['Email Scripts', 'Social Media Captions', 'Outreach Messages', 'Design Files'],
                    hook: 'Don\'t start from scratch. Use my proven templates to get results fast.'
                }
            ])
            setIsGenerating(false)
        }, 1500)
    }

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 border border-purple-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">🧲 Lead Magnet Builder</h3>
                <p className="text-gray-300 text-sm">
                    Generate high-converting <strong className="text-purple-400">lead magnet ideas</strong> that build your email list fast.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#141414] p-4 rounded-xl border border-[#1f1f1f]">
                    <label className="block text-white font-semibold mb-2">Your Niche</label>
                    <input
                        type="text"
                        value={niche}
                        onChange={(e) => setNiche(e.target.value)}
                        placeholder="e.g. Fitness, Marketing"
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-2 text-white focus:border-purple-500 outline-none"
                    />
                </div>
                <div className="bg-[#141414] p-4 rounded-xl border border-[#1f1f1f]">
                    <label className="block text-white font-semibold mb-2">Target Audience</label>
                    <input
                        type="text"
                        value={audience}
                        onChange={(e) => setAudience(e.target.value)}
                        placeholder="e.g. Busy Moms, Startup Founders"
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-2 text-white focus:border-purple-500 outline-none"
                    />
                </div>
                <div className="bg-[#141414] p-4 rounded-xl border border-[#1f1f1f]">
                    <label className="block text-white font-semibold mb-2">Main Problem</label>
                    <input
                        type="text"
                        value={problem}
                        onChange={(e) => setProblem(e.target.value)}
                        placeholder="e.g. Losing weight, Getting leads"
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-2 text-white focus:border-purple-500 outline-none"
                    />
                </div>
            </div>

            <button
                onClick={handleGenerate}
                disabled={!niche || !audience || !problem || isGenerating}
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg disabled:opacity-50"
            >
                {isGenerating ? 'Generating Ideas...' : '✨ Generate Lead Magnets'}
            </button>

            {generatedIdeas.length > 0 && (
                <div className="grid md:grid-cols-2 gap-4">
                    {generatedIdeas.map((idea, i) => (
                        <div key={i} className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f] hover:border-purple-500/50 transition-colors">
                            <div className="text-xs font-bold text-purple-400 mb-2 uppercase tracking-wider">{idea.type}</div>
                            <h4 className="text-white font-bold text-lg mb-2">{idea.title}</h4>
                            <p className="text-gray-400 text-sm mb-4 italic">"{idea.hook}"</p>
                            <div className="bg-[#0a0a0a] p-3 rounded-lg border border-[#2a2a2a]">
                                <div className="text-xs text-gray-500 mb-2">Suggested Outline:</div>
                                <ul className="space-y-1">
                                    {idea.outline.map((item: string, j: number) => (
                                        <li key={j} className="text-sm text-gray-300 flex items-center gap-2">
                                            <span className="w-1 h-1 bg-purple-500 rounded-full"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

function VideoScriptGenerator() {
    const [topic, setTopic] = useState('')
    const [videoType, setVideoType] = useState('tutorial')
    const [duration, setDuration] = useState('short')
    const [script, setScript] = useState<any>(null)
    const [isGenerating, setIsGenerating] = useState(false)

    const handleGenerate = () => {
        if (!topic) return
        setIsGenerating(true)

        setTimeout(() => {
            setScript({
                title: `${topic}: The Ultimate Guide`,
                hook: `Did you know that 90% of people fail at ${topic} because of one simple mistake? In this video, I'm going to show you exactly how to fix it.`,
                intro: `Hi, I'm [Name], and on this channel, we help you master ${topic}. If you're new here, consider subscribing for more tips on [Niche].`,
                body: [
                    { title: 'Step 1: The Foundation', content: `First, you need to understand the basics of ${topic}. Most people skip this, but it's crucial because...` },
                    { title: 'Step 2: The Strategy', content: `Now that you have the basics, let's talk strategy. Here is where the magic happens...` },
                    { title: 'Step 3: The Execution', content: `Finally, it's time to take action. Here is exactly what you need to do next...` }
                ],
                cta: `If you found this helpful, hit that like button and comment below with your biggest takeaway. And don't forget to check out my free guide in the description!`,
                thumbnail: `Close-up of face with shocked expression, text overlay: "${topic.toUpperCase()} SECRETS"`
            })
            setIsGenerating(false)
        }, 1500)
    }

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-white mb-2">🎬 Video Script Generator</h3>
                <p className="text-gray-300 text-sm">
                    Create viral video scripts for YouTube, TikTok, or Reels in seconds.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-[#141414] p-4 rounded-xl border border-[#1f1f1f]">
                    <label className="block text-white font-semibold mb-2">Video Topic</label>
                    <input
                        type="text"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder="e.g. How to bake a cake"
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-2 text-white focus:border-red-500 outline-none"
                    />
                </div>
                <div className="bg-[#141414] p-4 rounded-xl border border-[#1f1f1f]">
                    <label className="block text-white font-semibold mb-2">Video Type</label>
                    <select
                        value={videoType}
                        onChange={(e) => setVideoType(e.target.value)}
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-2 text-white focus:border-red-500 outline-none"
                    >
                        <option value="tutorial">Tutorial / How-To</option>
                        <option value="story">Storytelling / Vlog</option>
                        <option value="listicle">Listicle / Top 10</option>
                        <option value="review">Product Review</option>
                    </select>
                </div>
                <div className="bg-[#141414] p-4 rounded-xl border border-[#1f1f1f]">
                    <label className="block text-white font-semibold mb-2">Duration</label>
                    <select
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] rounded-lg px-4 py-2 text-white focus:border-red-500 outline-none"
                    >
                        <option value="short">Short (TikTok/Reels - 60s)</option>
                        <option value="medium">Medium (YouTube - 5-10m)</option>
                        <option value="long">Long (Deep Dive - 20m+)</option>
                    </select>
                </div>
            </div>

            <button
                onClick={handleGenerate}
                disabled={!topic || isGenerating}
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg disabled:opacity-50"
            >
                {isGenerating ? 'Writing Script...' : '🎥 Generate Script'}
            </button>

            {script && (
                <div className="space-y-4">
                    <div className="bg-[#141414] p-6 rounded-xl border border-[#1f1f1f]">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-white font-bold text-xl">{script.title}</h4>
                            <CopyButton text={`${script.title}\n\nHOOK:\n${script.hook}\n\nINTRO:\n${script.intro}\n\nBODY:\n${script.body.map((b: any) => `${b.title}\n${b.content}`).join('\n\n')}\n\nCTA:\n${script.cta}`} />
                        </div>

                        <div className="space-y-6">
                            <div className="bg-[#0a0a0a] p-4 rounded-lg border-l-4 border-red-500">
                                <div className="text-xs font-bold text-red-400 mb-1">HOOK (0:00-0:05)</div>
                                <p className="text-white">{script.hook}</p>
                            </div>

                            <div className="bg-[#0a0a0a] p-4 rounded-lg border-l-4 border-orange-500">
                                <div className="text-xs font-bold text-orange-400 mb-1">INTRO (0:05-0:30)</div>
                                <p className="text-white">{script.intro}</p>
                            </div>

                            <div className="space-y-3">
                                {script.body.map((section: any, i: number) => (
                                    <div key={i} className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a]">
                                        <div className="text-sm font-bold text-white mb-1">{section.title}</div>
                                        <p className="text-gray-300 text-sm">{section.content}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-[#0a0a0a] p-4 rounded-lg border-l-4 border-green-500">
                                <div className="text-xs font-bold text-green-400 mb-1">CTA (End)</div>
                                <p className="text-white">{script.cta}</p>
                            </div>

                            <div className="bg-[#0a0a0a] p-4 rounded-lg border border-[#2a2a2a] border-dashed">
                                <div className="text-xs font-bold text-gray-500 mb-1">THUMBNAIL IDEA</div>
                                <p className="text-gray-400 italic">{script.thumbnail}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

// ==========================================
// NEW GENIUS-LEVEL RESOURCE COMPONENTS
// ==========================================

// 1. CAPCUT SPEED EDITING CHEAT SHEET
function CapCutCheatSheet() {
    const [searchTerm, setSearchTerm] = useState('')
    const [activeOS, setActiveOS] = useState<'windows' | 'mac'>('windows')
    const [copiedShortcut, setCopiedShortcut] = useState<string | null>(null)

    const shortcuts = {
        editing: [
            { action: 'Split/Cut clip', windows: 'Ctrl + B', mac: 'Cmd + B', frequency: 'most-used' },
            { action: 'Delete selected clip', windows: 'Delete', mac: 'Delete', frequency: 'most-used' },
            { action: 'Undo', windows: 'Ctrl + Z', mac: 'Cmd + Z', frequency: 'most-used' },
            { action: 'Redo', windows: 'Ctrl + Y', mac: 'Cmd + Shift + Z', frequency: 'most-used' },
            { action: 'Play/Pause', windows: 'Space', mac: 'Space', frequency: 'most-used' },
            { action: 'Speed up playback', windows: 'L', mac: 'L', frequency: 'common' },
            { action: 'Slow down playback', windows: 'J', mac: 'J', frequency: 'common' },
            { action: 'Frame forward', windows: 'Right Arrow', mac: 'Right Arrow', frequency: 'common' },
            { action: 'Frame backward', windows: 'Left Arrow', mac: 'Left Arrow', frequency: 'common' },
            { action: 'Add marker', windows: 'M', mac: 'M', frequency: 'common' },
        ],
        timeline: [
            { action: 'Zoom in timeline', windows: 'Ctrl + Scroll Up', mac: 'Cmd + Scroll Up', frequency: 'most-used' },
            { action: 'Zoom out timeline', windows: 'Ctrl + Scroll Down', mac: 'Cmd + Scroll Down', frequency: 'most-used' },
            { action: 'Fit timeline to window', windows: 'Shift + Z', mac: 'Shift + Z', frequency: 'common' },
            { action: 'Select all clips', windows: 'Ctrl + A', mac: 'Cmd + A', frequency: 'common' },
            { action: 'Deselect all', windows: 'Ctrl + D', mac: 'Cmd + D', frequency: 'common' },
            { action: 'Ripple delete gap', windows: 'Shift + Delete', mac: 'Shift + Delete', frequency: 'pro' },
        ],
        effects: [
            { action: 'Add text', windows: 'T', mac: 'T', frequency: 'most-used' },
            { action: 'Add audio', windows: 'A', mac: 'A', frequency: 'most-used' },
            { action: 'Add transition', windows: 'Ctrl + T', mac: 'Cmd + T', frequency: 'common' },
            { action: 'Copy effect', windows: 'Ctrl + C', mac: 'Cmd + C', frequency: 'common' },
            { action: 'Paste effect', windows: 'Ctrl + V', mac: 'Cmd + V', frequency: 'common' },
            { action: 'Reset effect', windows: 'Ctrl + R', mac: 'Cmd + R', frequency: 'pro' },
        ],
        export: [
            { action: 'Export video', windows: 'Ctrl + E', mac: 'Cmd + E', frequency: 'most-used' },
            { action: 'Quick export', windows: 'Ctrl + Shift + E', mac: 'Cmd + Shift + E', frequency: 'common' },
            { action: 'Save project', windows: 'Ctrl + S', mac: 'Cmd + S', frequency: 'most-used' },
        ]
    }

    const workflows = [
        {
            title: '⚡ 5-Minute Reel Workflow',
            steps: [
                'Import clip (Drag & Drop)',
                'Trim with I/O points (I for In, O for Out)',
                'Split at beat markers (Ctrl/Cmd + B)',
                'Add text overlay (T key)',
                'Speed ramp key moments (Speed → Curve)',
                'Add trending audio (A key → Trending)',
                'Export in 1080x1920 (Ctrl/Cmd + E)'
            ]
        },
        {
            title: '🎬 Professional Edit Flow',
            steps: [
                'Organize media in folders first',
                'Create sequence with first clip',
                'Use J K L for review (Back → Pause → Forward)',
                'Mark best takes with M (markers)',
                'Build rough cut with Ctrl/Cmd + B splits',
                'Add B-roll over gaps',
                'Color grade last (Auto Enhance → Fine-tune)',
                'Export with Max Quality + Bitrate'
            ]
        }
    ]

    const proTips = [
        { tip: 'Disable auto-save', reason: 'Prevents lag on low-end PCs. Save manually with Ctrl+S.' },
        { tip: 'Use proxy files', reason: '4K footage? Right-click → Generate Proxy for smooth editing.' },
        { tip: 'Keyboard > Mouse', reason: 'Pros edit 3x faster using shortcuts. Memorize top 10.' },
        { tip: 'Pre-cut audio to beat', reason: 'Add markers on beat drops before cutting clips. Saves hours.' },
        { tip: 'Templates are gold', reason: 'Save your best edits as templates. Reuse transitions/effects.' }
    ]

    const handleCopyShortcut = (shortcut: string, id: string) => {
        navigator.clipboard.writeText(shortcut)
        setCopiedShortcut(id)
        setTimeout(() => setCopiedShortcut(null), 2000)
    }

    const filteredShortcuts = Object.entries(shortcuts).reduce((acc, [category, items]) => {
        const filtered = items.filter(item =>
            item.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item[activeOS].toLowerCase().includes(searchTerm.toLowerCase())
        )
        if (filtered.length > 0) {
            (acc as any)[category] = filtered
        }
        return acc
    }, {} as typeof shortcuts)

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-6">
                <h3 className="text-2xl font-black text-white mb-2">⚡ CapCut Speed Editing Master Class</h3>
                <p className="text-gray-400">Cut your editing time in HALF with these professional shortcuts and workflows</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex bg-[#1a1a1a] p-1 rounded-xl border border-[#2a2a2a]">
                    <button
                        onClick={() => setActiveOS('windows')}
                        className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${activeOS === 'windows'
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        🪟 Windows
                    </button>
                    <button
                        onClick={() => setActiveOS('mac')}
                        className={`px-6 py-2 rounded-lg font-bold text-sm transition-all ${activeOS === 'mac'
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-400 hover:text-white'
                            }`}
                    >
                        🍎 Mac
                    </button>
                </div>

                <input
                    type="text"
                    placeholder="Search shortcuts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-2 text-white placeholder-gray-500 focus:border-blue-500 outline-none"
                />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(filteredShortcuts).map(([category, items]) => (
                    <div key={category} className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-5">
                        <h4 className="text-lg font-bold text-white mb-4 capitalize flex items-center gap-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                            {category}
                        </h4>
                        <div className="space-y-2">
                            {items.map((item, idx) => {
                                const shortcutId = `${category}-${idx}`
                                const isCopied = copiedShortcut === shortcutId
                                return (
                                    <div key={idx} className="group flex items-center justify-between p-3 bg-[#0f0f0f] rounded-lg hover:bg-[#141414] transition-colors">
                                        <div className="flex-1">
                                            <p className="text-sm text-gray-300 font-medium">{item.action}</p>
                                            {item.frequency === 'most-used' && (
                                                <span className="text-xs text-green-400 font-bold">⭐ ESSENTIAL</span>
                                            )}
                                            {item.frequency === 'pro' && (
                                                <span className="text-xs text-purple-400 font-bold">🔥 PRO</span>
                                            )}
                                        </div>
                                        <button
                                            onClick={() => handleCopyShortcut(item[activeOS], shortcutId)}
                                            className="flex items-center gap-2 px-3 py-1.5 bg-[#2a2a2a] rounded-lg group-hover:bg-blue-600 transition-all"
                                        >
                                            <code className="text-xs font-bold text-white">{item[activeOS]}</code>
                                            {isCopied ? (
                                                <Check className="w-3 h-3 text-green-400" />
                                            ) : (
                                                <Copy className="w-3 h-3 text-gray-400 group-hover:text-white" />
                                            )}
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>

            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4">🎯 Proven Editing Workflows</h4>
                <div className="grid md:grid-cols-2 gap-6">
                    {workflows.map((workflow, idx) => (
                        <div key={idx} className="bg-[#0f0f0f] rounded-xl p-5 border border-[#2a2a2a]">
                            <h5 className="text-lg font-bold text-white mb-4">{workflow.title}</h5>
                            <div className="space-y-2">
                                {workflow.steps.map((step, stepIdx) => (
                                    <div key={stepIdx} className="flex items-start gap-3">
                                        <span className="flex-shrink-0 w-6 h-6 bg-blue-500/20 text-blue-400 rounded-full flex items-center justify-center text-xs font-bold">
                                            {stepIdx + 1}
                                        </span>
                                        <p className="text-sm text-gray-300">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6">
                <h4 className="text-xl font-bold text-white mb-4">💡 Pro Tips That Actually Matter</h4>
                <div className="space-y-3">
                    {proTips.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-black/40 rounded-lg">
                            <span className="text-2xl">💎</span>
                            <div>
                                <p className="font-bold text-yellow-200">{item.tip}</p>
                                <p className="text-sm text-gray-400 mt-1">{item.reason}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

// 2. 365-DAY CONTENT CALENDAR GENERATOR
function ContentCalendarGenerator() {
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
    const [selectedNiche, setSelectedNiche] = useState('fitness')
    const [contentType, setContentType] = useState('all')

    const niches = ['fitness', 'business', 'lifestyle', 'tech', 'beauty', 'finance']
    const contentTypes = [
        { id: 'all', label: 'All Content', icon: '📱' },
        { id: 'reels', label: 'Reels', icon: '🎬' },
        { id: 'carousel', label: 'Carousels', icon: '📸' },
        { id: 'stories', label: 'Stories', icon: '⚡' }
    ]

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const contentIdeas: { [key: number]: { [key: string]: any[] } } = {
        0: { // January
            fitness: [
                { day: 1, type: 'reel', hook: '"This is the ONLY workout you need in 2024"', theme: 'New Year Goals', hashtags: '#NewYearNewMe #FitnessGoals' },
                { day: 2, type: 'carousel', hook: '7 Myths About Weight Loss (Slide 4 Will Shock You)', theme: 'Education', hashtags: '#WeightLossTips #FitnessFacts' },
                { day: 3, type: 'story', hook: 'Poll: What\'s your biggest fitness struggle?', theme: 'Engagement', hashtags: '#FitnessCommunity' },
                { day: 4, type: 'reel', hook: '"POV: You finally understand calorie deficit"', theme: 'Trending Audio', hashtags: '#CalorieDeficit #FitnessHumor' },
                { day: 5, type: 'carousel', hook: 'My Exact Morning Routine (Copy This)', theme: 'Behind-the-Scenes', hashtags: '#MorningRoutine #HealthyHabits' }
            ],
            business: [
                { day: 1, type: 'reel', hook: '"The business strategy that made me $10K in January"', theme: 'New Year Energy', hashtags: '#BusinessGrowth #Entrepreneur' },
                { day: 2, type: 'carousel', hook: '5 Business Books That Changed My Life', theme: 'Value Content', hashtags: '#BusinessBooks #Entrepreneurship' },
                { day: 3, type: 'story', hook: 'Q&A: Ask me anything about starting a business', theme: 'Community Building', hashtags: '#BusinessTips' },
                { day: 4, type: 'reel', hook: '"When your side hustle makes more than your 9-5"', theme: 'Relatable', hashtags: '#SideHustle #PassiveIncome' },
                { day: 5, type: 'carousel', hook: 'My $0 to $100K Timeline (Screenshot This)', theme: 'Transparency', hashtags: '#EntrepreneurLife' }
            ]
        }
    }

    const getContentForMonth = () => {
        const nicheContent = contentIdeas[selectedMonth]?.[selectedNiche] || []
        if (contentType === 'all') return nicheContent
        return nicheContent.filter(item => item.type === contentType)
    }

    const exportToCSV = () => {
        const content = getContentForMonth()
        const csv = [
            ['Day', 'Type', 'Hook', 'Theme', 'Hashtags'].join(','),
            ...content.map(item => [item.day, item.type, `"${item.hook}"`, item.theme, item.hashtags].join(','))
        ].join('\n')

        const blob = new Blob([csv], { type: 'text/csv' })
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `content-calendar-${months[selectedMonth]}-${selectedNiche}.csv`
        a.click()
    }

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
                <h3 className="text-2xl font-black text-white mb-2">📅 365-Day Viral Content Calendar</h3>
                <p className="text-gray-400">Never run out of ideas. Pre-planned content mapped to viral trends and seasonality.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase">Month</label>
                    <select
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                        className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none"
                    >
                        {months.map((month, idx) => (
                            <option key={idx} value={idx}>{month}</option>
                        ))}
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase">Niche</label>
                    <select
                        value={selectedNiche}
                        onChange={(e) => setSelectedNiche(e.target.value)}
                        className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none capitalize"
                    >
                        {niches.map(niche => (
                            <option key={niche} value={niche}>{niche}</option>
                        ))}
                    </select>
                </div>

                <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase">Content Type</label>
                    <select
                        value={contentType}
                        onChange={(e) => setContentType(e.target.value)}
                        className="w-full bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl px-4 py-3 text-white focus:border-purple-500 outline-none"
                    >
                        {contentTypes.map(type => (
                            <option key={type.id} value={type.id}>{type.icon} {type.label}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-white">Content Plan for {months[selectedMonth]}</h4>
                    <button
                        onClick={exportToCSV}
                        className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg transition-colors flex items-center gap-2"
                    >
                        <Download className="w-4 h-4" />
                        Export CSV
                    </button>
                </div>

                <div className="space-y-3">
                    {getContentForMonth().length > 0 ? (
                        getContentForMonth().map((item, idx) => (
                            <div key={idx} className="bg-[#0f0f0f] border border-[#2a2a2a] rounded-lg p-4 hover:border-purple-500/50 transition-colors">
                                <div className="flex items-start justify-between mb-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                            <span className="text-xl font-black text-purple-400">{item.day}</span>
                                        </div>
                                        <div>
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-xs font-bold px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded uppercase">{item.type}</span>
                                                <span className="text-xs text-gray-500">{item.theme}</span>
                                            </div>
                                            <p className="text-white font-bold">{item.hook}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                    <span className="font-mono bg-[#1a1a1a] px-2 py-1 rounded">{item.hashtags}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-12 text-gray-500">
                            <p>Loading more content for this month...</p>
                            <p className="text-xs mt-2">We're adding {new Date(2024, selectedMonth + 1, 0).getDate()} days of content for {selectedNiche}</p>
                        </div>
                    )}
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                    <div className="text-3xl font-black text-green-400 mb-1">365</div>
                    <p className="text-sm text-gray-400">Days of Content</p>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                    <div className="text-3xl font-black text-blue-400 mb-1">1000+</div>
                    <p className="text-sm text-gray-400">Hook Templates</p>
                </div>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
                    <div className="text-3xl font-black text-purple-400 mb-1">12</div>
                    <p className="text-sm text-gray-400">Trending Themes/Month</p>
                </div>
            </div>
        </div>
    )
}
