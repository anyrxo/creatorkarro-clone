import React from 'react'
import Link from 'next/link'
import BlogPostLayout from '@/components/BlogPostLayout'
import { generateBlogPostSchema } from '@/lib/blog-schema'
import SmartCTA from '@/components/blog/SmartCTA'
import RelatedPosts from '@/components/blog/RelatedPosts'

// Advanced SEO Metadata Export
export const metadata = {
  title: "Advanced ComfyUI Workflows for Professional AI Art: Complete 2026 Guide | AI Influencers",
  description: "Master advanced ComfyUI workflows used by professionals. SDXL refiner setups, LoRA stacking, ControlNet mastery, multi-model workflows, and optimization techniques. 127K+ students trust our training.",
  keywords: ["comfyui workflows", "advanced comfyui", "professional ai art", "comfyui techniques", "sdxl refiner workflow", "controlnet comfyui", "lora stacking", "img2img advanced", "ai image generation", "comfyui tutorial 2026"],
  authors: [{ name: "Anyro", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai",
  category: "AI Influencers",
  openGraph: {
    title: "Advanced ComfyUI Workflows: Professional AI Art Guide 2026",
    description: "Master SDXL, LoRA stacking, ControlNet & advanced workflows. Complete guide from ComfyUI experts.",
    url: "https://iimagined.ai/blog/advanced-comfyui-workflows-professional-ai-art",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "2026-01-20T08:00:00.000Z",
    modifiedTime: "2026-01-20T08:00:00.000Z",
    authors: ["Anyro"],
    tags: ["ComfyUI", "AI Art", "Image Generation", "SDXL", "ControlNet", "Advanced Workflows"],
    images: [{
      url: "https://iimagined.ai/images/blog/advanced-comfyui-workflows-professional-ai-art-og.jpg",
      width: 1200,
      height: 630,
      alt: "Advanced ComfyUI Workflows for Professional AI Art",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@iimagined_ai",
    creator: "@iimagined_ai",
    title: "Advanced ComfyUI Workflows Guide 2026",
    description: "Master professional AI art workflows with ComfyUI",
    images: [{
      url: "https://iimagined.ai/images/blog/advanced-comfyui-workflows-professional-ai-art-og.jpg",
      alt: "Advanced ComfyUI Workflows"
    }]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://iimagined.ai/blog/advanced-comfyui-workflows-professional-ai-art"
  }
}

export default function AdvancedComfyUIWorkflows() {
  const schema = generateBlogPostSchema({
    title: metadata.title,
    description: metadata.description,
    slug: "advanced-comfyui-workflows-professional-ai-art",
    publishedTime: (metadata.openGraph as any)?.publishedTime as string,
    modifiedTime: (metadata.openGraph as any)?.modifiedTime as string,
    category: "AI Influencers",
    keywords: metadata.keywords as string[] || [],
    image: (metadata.openGraph?.images as Array<{url: string}>)?.[0]?.url || ""
  })

  const relatedPosts = [
    {
      title: "ComfyUI Tutorial: Master AI Image Generation in 2026",
      slug: "comfyui-tutorial-master-ai-image-generation-2026",
      description: "Complete beginner to advanced ComfyUI tutorial with real examples",
      readTime: 25
    },
    {
      title: "Best AI Content Creation Tools for Virtual Influencers 2026",
      slug: "best-ai-content-creation-tools-virtual-influencers-2026",
      description: "Top AI tools for creating stunning virtual influencer content",
      readTime: 18
    },
    {
      title: "How to Make Money with ComfyUI: AI Art Business Guide",
      slug: "how-to-make-money-with-comfyui-ai-art-business-guide",
      description: "Turn your ComfyUI skills into a profitable AI art business",
      readTime: 22
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <BlogPostLayout
        category="AI Influencers"
        title="Advanced ComfyUI Workflows for Professional AI Art"
        description="Master the advanced ComfyUI workflows used by professional AI artists. SDXL refiner setups, LoRA stacking strategies, ControlNet mastery, and production optimization techniques."
        date="Jan 20, 2026"
        readTime={28}
        author={{
          name: "Anyro",
          role: "AI Art Expert & ComfyUI Specialist"
        }}
        relatedPosts={relatedPosts}
      >
        {/* Key Stats */}
        <div className="not-prose bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Why This Guide Matters</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent mb-2">127K+</div>
              <div className="text-gray-300 font-medium">Students Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">10+</div>
              <div className="text-gray-300 font-medium">Advanced Workflows</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">Pro</div>
              <div className="text-gray-300 font-medium">Production Ready</div>
            </div>
          </div>
        </div>

        <p className="text-xl text-gray-300 leading-relaxed mb-8">
          <strong className="text-white">Advanced ComfyUI workflows</strong> go far beyond basic text-to-image generation. They involve <strong className="text-white">multi-model pipelines, complex node chains, ControlNet integration, and optimization strategies</strong> that professional AI artists use daily to achieve consistent, production-quality results. This comprehensive guide teaches you the exact techniques used by top creators generating $10K-$50K/month from AI art.
        </p>

        <div className="not-prose bg-blue-900/20 border-l-4 border-blue-500 rounded-lg p-6 mb-12">
          <p className="text-blue-200 font-medium mb-2">💡 Expert Insight</p>
          <p className="text-gray-300">
            After training <strong className="text-white">127,000+ students</strong> and generating over <strong className="text-white">$2.7M in student revenue</strong>, we've identified the exact ComfyUI workflows that separate hobbyists from professionals. This guide distills years of experience into actionable techniques you can implement today.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">What Makes ComfyUI Workflows "Advanced"?</h2>

        <p className="text-gray-300 mb-6 text-lg">
          While beginners use simple text-to-image setups, <strong className="text-white">advanced users build multi-stage pipelines</strong> that combine multiple models, apply precise control mechanisms, and optimize for both quality and speed. Here's what you'll master:
        </p>

        <div className="not-prose grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:border-cyan-500/50">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-white font-bold text-xl mb-3">Multi-Model Workflows</h3>
            <p className="text-gray-300 mb-3">Combine base models, refiner models, and upscalers in sequential pipelines for maximum quality</p>
            <div className="text-cyan-400 font-semibold text-sm">→ SDXL Base + Refiner workflow included</div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:border-purple-500/50">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-white font-bold text-xl mb-3">LoRA Stacking</h3>
            <p className="text-gray-300 mb-3">Layer multiple LoRAs at different strengths for precise style and character control</p>
            <div className="text-purple-400 font-semibold text-sm">→ Professional strength guidelines</div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:border-blue-500/50">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-white font-bold text-xl mb-3">ControlNet Mastery</h3>
            <p className="text-gray-300 mb-3">Achieve pixel-perfect composition control using pose, depth, canny edge, and other preprocessors</p>
            <div className="text-blue-400 font-semibold text-sm">→ Multi-ControlNet stacking techniques</div>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-6 transform transition-all duration-300 hover:scale-105 hover:border-green-500/50">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-white font-bold text-xl mb-3">Production Optimization</h3>
            <p className="text-gray-300 mb-3">Custom samplers, schedulers, and batch processing for efficient high-volume generation</p>
            <div className="text-green-400 font-semibold text-sm">→ Speed + quality optimization</div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">Advanced SDXL Workflow: Base + Refiner Pipeline</h2>

        <p className="text-gray-300 mb-6 text-lg">
          <strong className="text-white">SDXL (Stable Diffusion XL)</strong> uses a revolutionary two-stage approach that dramatically improves quality over SD 1.5. The base model handles composition and structure, while the refiner model adds fine details. Here's the professional setup:
        </p>

        <div className="not-prose bg-zinc-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-cyan-300 mb-6">Complete SDXL Node Structure</h3>
          <div className="bg-black/50 p-6 rounded-xl text-green-400 font-mono text-sm overflow-x-auto">
            <pre>{`Load Checkpoint (SDXL Base 1.0)
    ↓
CLIP Text Encode (Positive)
  → "masterpiece, best quality, 8k uhd, detailed face,
     professional photography, soft lighting"
    ↓
CLIP Text Encode (Negative)
  → "ugly, blurry, low quality, distorted, deformed,
     watermark, text, bad anatomy"
    ↓
Empty Latent Image (1024x1024)
    ↓
KSampler (Base Generation)
  • Steps: 20
  • CFG Scale: 8.0
  • Sampler: DPM++ 2M SDE Karras
  • Scheduler: Karras
  • Denoise: 1.0
    ↓
Load Checkpoint (SDXL Refiner 1.0)
    ↓
KSampler (Refinement)
  • Steps: 10
  • CFG Scale: 8.0
  • Sampler: DPM++ 2M SDE Karras
  • Scheduler: Karras
  • Denoise: 0.25  ← CRITICAL: Low denoise!
    ↓
VAE Decode
    ↓
Save Image`}</pre>
          </div>
        </div>

        <div className="not-prose grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-xl p-6">
            <h4 className="text-lg font-bold text-purple-300 mb-4">🔑 Critical Settings Explained</h4>
            <div className="space-y-3 text-gray-300 text-sm">
              <div>
                <strong className="text-white">Base Steps (20):</strong>
                <p className="text-gray-400">Handles 90% of image composition and structure. More steps = diminishing returns.</p>
              </div>
              <div>
                <strong className="text-white">Refiner Denoise (0.2-0.3):</strong>
                <p className="text-gray-400">ONLY refines details, doesn't regenerate. Higher = destroys base work!</p>
              </div>
              <div>
                <strong className="text-white">1024x1024 Resolution:</strong>
                <p className="text-gray-400">SDXL is trained at 1024px. Other resolutions degrade quality significantly.</p>
              </div>
              <div>
                <strong className="text-white">CFG Scale 8.0:</strong>
                <p className="text-gray-400">Higher than SD 1.5 (7.0) because SDXL handles stronger guidance better.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-xl p-6">
            <h4 className="text-lg font-bold text-cyan-300 mb-4">💡 Pro Technique: Split Conditioning</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Advanced users use <strong className="text-white">different prompts for base and refiner</strong> for even better results:
            </p>
            <div className="space-y-3 text-sm">
              <div className="bg-zinc-800/60 rounded-lg p-3">
                <p className="text-cyan-300 font-semibold mb-1">Base Prompt Strategy:</p>
                <p className="text-gray-300 text-xs">Focus on composition, subject, scene, lighting</p>
                <p className="text-gray-400 text-xs italic mt-1">"portrait of woman, outdoor garden, golden hour, soft lighting"</p>
              </div>
              <div className="bg-zinc-800/60 rounded-lg p-3">
                <p className="text-teal-300 font-semibold mb-1">Refiner Prompt Strategy:</p>
                <p className="text-gray-300 text-xs">Focus on quality, details, sharpness</p>
                <p className="text-gray-400 text-xs italic mt-1">"8k uhd, sharp focus, professional photography, high detail"</p>
              </div>
            </div>
          </div>
        </div>

        <div className="not-prose bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-12">
          <p className="text-green-300 font-bold mb-2">✅ Real-World Results</p>
          <p className="text-gray-300">
            This workflow produces <strong className="text-white">professional-grade images</strong> suitable for client work, stock photography, and AI influencer content. Our students regularly sell SDXL images for $50-$200 each on platforms like Adobe Stock and Getty Images.
          </p>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">LoRA Stacking: Precision Style Control</h2>

        <p className="text-gray-300 mb-6 text-lg">
          <strong className="text-white">LoRAs (Low-Rank Adaptations)</strong> are small model modifiers (typically 10-200MB) that add specific styles, characters, or concepts without retraining the base model. Advanced users <strong className="text-white">stack multiple LoRAs</strong> at different strengths to achieve surgical precision in their creative vision.
        </p>

        <div className="not-prose bg-zinc-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-purple-300 mb-6">Professional Multi-LoRA Workflow</h3>
          <div className="bg-black/50 p-6 rounded-xl text-green-400 font-mono text-sm overflow-x-auto mb-6">
            <pre>{`Load Checkpoint (Base Model)
    ↓
Load LoRA #1 (Primary Style)
  • Name: "Anime_Style_v2.safetensors"
  • Strength: 0.8
  • Purpose: Define overall art style
    ↓
Load LoRA #2 (Secondary Enhancement)
  • Name: "Cinematic_Lighting_XL.safetensors"
  • Strength: 0.6
  • Purpose: Enhance lighting and atmosphere
    ↓
Load LoRA #3 (Detail Refinement)
  • Name: "Detail_Tweaker_XL.safetensors"
  • Strength: 0.4
  • Purpose: Add fine details and sharpness
    ↓
CLIP Text Encode → Continue workflow...`}</pre>
          </div>

          <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
            <p className="text-purple-300 font-semibold mb-2">📊 Order Matters!</p>
            <p className="text-gray-300 text-sm">
              Load LoRAs in order of importance: <strong className="text-white">Primary style → Secondary enhancements → Detail tweaks</strong>. Each LoRA modifies the output of the previous one.
            </p>
          </div>
        </div>

        <div className="not-prose mb-12">
          <h3 className="text-2xl font-bold text-white mb-6">LoRA Strength Guide (Professional Standards)</h3>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="text-3xl font-black text-red-400">1.0</div>
                <div>
                  <p className="text-white font-bold">Full Strength - Maximum Effect</p>
                  <p className="text-gray-400 text-sm">Can overpower base model if not careful</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm"><strong className="text-white">Use for:</strong> Primary style LoRAs that define the entire aesthetic (rare in stacking)</p>
            </div>

            <div className="bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/30 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="text-3xl font-black text-orange-400">0.6-0.8</div>
                <div>
                  <p className="text-white font-bold">Strong - Significant Influence</p>
                  <p className="text-gray-400 text-sm">Sweet spot for primary LoRAs in stacks</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm"><strong className="text-white">Use for:</strong> Character LoRAs, main style LoRAs, distinct aesthetic modifiers</p>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="text-3xl font-black text-blue-400">0.3-0.5</div>
                <div>
                  <p className="text-white font-bold">Moderate - Balanced Enhancement</p>
                  <p className="text-gray-400 text-sm">Most versatile strength range</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm"><strong className="text-white">Use for:</strong> Lighting LoRAs, detail enhancers, secondary style modifiers</p>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="text-3xl font-black text-purple-400">0.1-0.2</div>
                <div>
                  <p className="text-white font-bold">Subtle - Gentle Tweaks</p>
                  <p className="text-gray-400 text-sm">Barely noticeable but effective</p>
                </div>
              </div>
              <p className="text-gray-300 text-sm"><strong className="text-white">Use for:</strong> Color grading, micro-adjustments, experimental combinations</p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-6">Proven LoRA Combinations (Production-Tested)</h3>

        <div className="not-prose grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 transform transition-all duration-300 hover:scale-105">
            <div className="text-3xl mb-3">👤</div>
            <h4 className="text-white font-bold mb-3">Realistic Portraits</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p><strong className="text-blue-400">Base:</strong> Realistic Vision XL</p>
              <p><strong className="text-purple-400">LoRA 1:</strong> Detail Tweaker (0.5)</p>
              <p><strong className="text-pink-400">LoRA 2:</strong> Eye Detail (0.3)</p>
              <p className="text-gray-500 mt-3">Result: Ultra-realistic portraits with crisp details</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 transform transition-all duration-300 hover:scale-105">
            <div className="text-3xl mb-3">🎨</div>
            <h4 className="text-white font-bold mb-3">Anime/Stylized</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p><strong className="text-blue-400">Base:</strong> AnythingXL v5</p>
              <p><strong className="text-purple-400">LoRA 1:</strong> Anime Style (0.8)</p>
              <p><strong className="text-pink-400">LoRA 2:</strong> Line Art (0.4)</p>
              <p><strong className="text-cyan-400">LoRA 3:</strong> Color Grade (0.3)</p>
              <p className="text-gray-500 mt-3">Result: Professional anime art with bold lines</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 transform transition-all duration-300 hover:scale-105">
            <div className="text-3xl mb-3">🏰</div>
            <h4 className="text-white font-bold mb-3">Fantasy Scenes</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p><strong className="text-blue-400">Base:</strong> DreamShaper XL</p>
              <p><strong className="text-purple-400">LoRA 1:</strong> Fantasy Style (0.7)</p>
              <p><strong className="text-pink-400">LoRA 2:</strong> Dramatic Lighting (0.5)</p>
              <p><strong className="text-cyan-400">LoRA 3:</strong> Detail Enhancer (0.3)</p>
              <p className="text-gray-500 mt-3">Result: Epic fantasy with cinematic atmosphere</p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">ControlNet: Precision Composition Control</h2>

        <p className="text-gray-300 mb-6 text-lg">
          <strong className="text-white">ControlNet</strong> is the most powerful tool in advanced ComfyUI workflows. It allows you to <strong className="text-white">control image composition using reference images</strong>, enabling consistent character poses, precise architectural layouts, and exact compositions. This is what separates amateur AI art from professional production work.
        </p>

        <div className="not-prose bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-bold text-blue-300 mb-6">ControlNet Types & Use Cases</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-zinc-800/60 rounded-xl p-4">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">📐</span> Canny Edge
                </h4>
                <p className="text-gray-300 text-sm mb-2">Detects edges and preserves composition structure</p>
                <p className="text-blue-400 text-xs font-semibold">Use for: Maintaining structure from reference photos</p>
              </div>

              <div className="bg-zinc-800/60 rounded-xl p-4">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">🧍</span> OpenPose
                </h4>
                <p className="text-gray-300 text-sm mb-2">Detects and replicates human skeleton/poses</p>
                <p className="text-purple-400 text-xs font-semibold">Use for: Consistent character poses, AI influencers</p>
              </div>

              <div className="bg-zinc-800/60 rounded-xl p-4">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">🏗️</span> Depth
                </h4>
                <p className="text-gray-300 text-sm mb-2">Preserves 3D depth information from reference</p>
                <p className="text-cyan-400 text-xs font-semibold">Use for: Architectural renders, 3D-consistent scenes</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-zinc-800/60 rounded-xl p-4">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">✏️</span> Scribble
                </h4>
                <p className="text-gray-300 text-sm mb-2">Follows rough sketches and scribbles</p>
                <p className="text-pink-400 text-xs font-semibold">Use for: Quick concept art from simple drawings</p>
              </div>

              <div className="bg-zinc-800/60 rounded-xl p-4">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">🎨</span> Lineart
                </h4>
                <p className="text-gray-300 text-sm mb-2">Follows detailed line drawings precisely</p>
                <p className="text-green-400 text-xs font-semibold">Use for: Coloring manga/comic line art</p>
              </div>

              <div className="bg-zinc-800/60 rounded-xl p-4">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <span className="text-2xl">🖼️</span> Normal Map
                </h4>
                <p className="text-gray-300 text-sm mb-2">Preserves surface normals and lighting</p>
                <p className="text-orange-400 text-xs font-semibold">Use for: Relighting scenes, texture generation</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-6">ControlNet OpenPose Workflow (Most Popular)</h3>

        <div className="not-prose bg-zinc-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 mb-8">
          <div className="bg-black/50 p-6 rounded-xl text-green-400 font-mono text-sm overflow-x-auto mb-6">
            <pre>{`Load Image (Reference Photo with Person)
    ↓
ControlNet Preprocessor (OpenPose)
  • Extracts skeleton/pose from photo
  • Detects: body, hands, face keypoints
    ↓
Load Checkpoint (Your chosen model)
    ↓
Apply ControlNet
  • Control Image: OpenPose skeleton
  • Strength: 0.8-1.0
  • Start Percent: 0.0
  • End Percent: 1.0
    ↓
CLIP Text Encode (Your custom prompt)
  → "woman in elegant dress, professional photography..."
    ↓
KSampler → Generate with controlled pose
    ↓
VAE Decode → Save Image`}</pre>
          </div>

          <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
            <p className="text-purple-300 font-semibold mb-2">🎯 Pro Tip: Multi-ControlNet Stacking</p>
            <p className="text-gray-300 text-sm mb-3">
              Stack multiple ControlNets for <strong className="text-white">ultimate precision:</strong>
            </p>
            <div className="bg-black/50 p-3 rounded text-xs text-green-400 font-mono">
              <pre>{`Apply ControlNet (OpenPose) - Strength: 1.0  ← Control pose
    ↓
Apply ControlNet (Depth) - Strength: 0.6     ← Add depth consistency
    ↓
Apply ControlNet (Canny) - Strength: 0.4     ← Preserve edges`}</pre>
            </div>
            <p className="text-gray-400 mt-3 text-xs">Result: Perfect pose + depth + edge preservation = professional consistency</p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">Production Optimization: Speed + Quality</h2>

        <p className="text-gray-300 mb-6 text-lg">
          Professional AI artists generate <strong className="text-white">hundreds of images per day</strong>. Here's how to optimize your workflows for production without sacrificing quality:
        </p>

        <div className="not-prose grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-green-300 mb-4">⚡ Speed Optimization</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <div>
                  <strong className="text-white">Reduce steps to 20-25:</strong> Diminishing returns after 25 steps for most models
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <div>
                  <strong className="text-white">Enable xformers:</strong> <code className="text-blue-400 bg-black/50 px-2 py-1 rounded">pip install xformers</code> for 30-50% speed boost
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <div>
                  <strong className="text-white">Use lower res for testing:</strong> Test at 512px, render finals at 1024px
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-400 mt-1">✓</span>
                <div>
                  <strong className="text-white">Batch processing:</strong> Generate 4-10 variations simultaneously
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
            <h3 className="text-xl font-bold text-purple-300 mb-4">💎 Quality Optimization</h3>
            <div className="space-y-3 text-gray-300 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">✓</span>
                <div>
                  <strong className="text-white">Always use negative prompts:</strong> Quality matters more than you think!
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">✓</span>
                <div>
                  <strong className="text-white">Match model training resolution:</strong> 512 for SD1.5, 1024 for SDXL
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">✓</span>
                <div>
                  <strong className="text-white">Use proper VAE:</strong> Some models need separate VAE files
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-purple-400 mt-1">✓</span>
                <div>
                  <strong className="text-white">Test samplers:</strong> DPM++ 2M SDE Karras is best for most cases
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">Key Takeaways: Your Action Plan</h2>

        <div className="not-prose grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/30 rounded-xl p-6 transform transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-white font-bold text-xl mb-3">1. Master SDXL Base + Refiner</h3>
            <p className="text-gray-300">This two-stage workflow is the foundation of professional AI art. Get this right before moving to advanced techniques.</p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6 transform transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">⚙️</div>
            <h3 className="text-white font-bold text-xl mb-3">2. Stack LoRAs Strategically</h3>
            <p className="text-gray-300">Use 2-4 LoRAs maximum. Start high strength for style, lower for details. Order matters!</p>
          </div>

          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-6 transform transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-white font-bold text-xl mb-3">3. Use ControlNet for Consistency</h3>
            <p className="text-gray-300">OpenPose + Depth ControlNets are essential for AI influencers and character consistency.</p>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6 transform transition-all duration-300 hover:scale-105">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-white font-bold text-xl mb-3">4. Optimize for Production</h3>
            <p className="text-gray-300">20-25 steps, xformers enabled, batch processing. Speed without quality loss.</p>
          </div>
        </div>

        {/* Smart CTA - All Access Pass */}
        <SmartCTA blogSlug="advanced-comfyui-workflows-professional-ai-art" />

        {/* Related Posts */}
        <RelatedPosts currentSlug="advanced-comfyui-workflows-professional-ai-art" limit={3} />
      </BlogPostLayout>
    </>
  )
}
