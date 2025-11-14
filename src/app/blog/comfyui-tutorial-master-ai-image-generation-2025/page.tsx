import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateBlogPostSchema } from '@/lib/blog-schema'
import FAQSchema from '@/components/seo/FAQSchema'
import { Sparkles, Zap, Brain, Code, Image as ImageIcon, TrendingUp, BarChart3, Target, CheckCircle, Cpu, GitBranch } from 'lucide-react'

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  title: "ComfyUI Tutorial: Master AI Image Generation 2026 | Complete Guide",
  description: "Master ComfyUI in 2026 with this complete tutorial. Learn installation, workflow architecture, node-based generation, performance optimization, and real case studies from professionals generating $10K+/month with AI images.",
  keywords: [
    "comfyui tutorial",
    "comfyui guide",
    "ai image generation",
    "comfyui workflows",
    "stable diffusion",
    "flux workflows",
    "node based ai",
    "comfyui vs automatic1111",
    "comfyui installation",
    "workflow optimization",
    "comfyui performance",
    "ai art business",
    "comfyui 2026"
  ],
  authors: [{ name: "Anyro", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai",
  category: "AI Tools",
  openGraph: {
    title: "ComfyUI Tutorial: Master AI Image Generation 2026 | Complete Guide",
    description: "Master ComfyUI with this complete tutorial. Learn installation, workflows, node-based generation, and real case studies from professionals making $10K+/month.",
    url: "https://iimagined.ai/blog/comfyui-tutorial-master-ai-image-generation-2026",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "2026-02-12T10:00:00.000Z",
    modifiedTime: "2026-08-03T06:14:30.000Z",
    authors: ["Anyro"],
    tags: ["comfyui tutorial","ai image generation","stable diffusion","flux workflows","node based ai","workflow optimization"],
    images: [{
      url: "https://iimagined.ai/images/blog/comfyui-tutorial-master-ai-image-generation-2025-og.jpg",
      width: 1200,
      height: 630,
      alt: "ComfyUI Tutorial: Master AI Image Generation 2026",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@iimagined_ai",
    creator: "@iimagined_ai",
    title: "ComfyUI Tutorial: Master AI Image Generation 2026",
    description: "Master ComfyUI with this complete tutorial. Installation, workflows, node-based generation, and case studies from pros making $10K+/month.",
    images: [{
      url: "https://iimagined.ai/images/blog/comfyui-tutorial-master-ai-image-generation-2025-og.jpg",
      alt: "ComfyUI Tutorial 2026"
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
    canonical: "https://iimagined.ai/blog/comfyui-tutorial-master-ai-image-generation-2026"
  }
}

const faqs = [
  {
    question: "What is ComfyUI and how is it different from Automatic1111 or Midjourney?",
    answer: "**ComfyUI** is an open-source, node-based interface for Stable Diffusion and Flux AI image generation that gives you unprecedented control over every step of the generation process. Unlike Automatic1111 (A1111) or Midjourney, ComfyUI uses a **visual programming approach** where you build workflows by connecting nodes. **Key differences**: **1) Workflow architecture**: ComfyUI workflows are graphs you build by connecting nodes (load model → text encoder → sampler → VAE decoder). A1111 uses traditional forms/sliders. Midjourney uses text prompts only. **2) Control & flexibility**: ComfyUI lets you modify every parameter—swap samplers mid-generation, use multiple models in one image, apply regional prompts to specific areas. A1111: moderate control. Midjourney: minimal control (prompt-only). **3) Performance**: ComfyUI is 20-30% faster than A1111 due to optimized memory management and lazy loading. Processes only changed nodes when tweaking workflows. **4) Cost**: ComfyUI: free, self-hosted. A1111: free. Midjourney: $10-120/month subscription. **5) Learning curve**: ComfyUI: steep (node-based programming). A1111: moderate (GUI with many options). Midjourney: easy (just prompts). **When to use ComfyUI**: Production workflows, complex compositions, batch processing, maximum control. **When to use A1111**: Quick generations, prototyping. **When to use Midjourney**: Non-technical users, aesthetic-focused work (no control needed)."
  },
  {
    question: "What are the hardware requirements to run ComfyUI and which GPUs work best?",
    answer: "**ComfyUI hardware requirements** vary by model type and generation speed needs: **Minimum (usable but slow)**: **GPU**: NVIDIA GTX 1660 (6GB VRAM) or AMD RX 5700 XT (8GB). **RAM**: 16GB system RAM. **Storage**: 50GB SSD (for ComfyUI + 1-2 models). **Speed**: ~45 seconds per 512×512 image with SDXL. **Best for**: Learning ComfyUI, low-volume personal use. **Recommended (smooth workflow)**: **GPU**: NVIDIA RTX 3060 (12GB VRAM) or RTX 4060 Ti (16GB). **RAM**: 32GB system RAM. **Storage**: 250GB NVMe SSD. **Speed**: ~8-12 seconds per 1024×1024 SDXL image, ~15-20 seconds for Flux. **Best for**: Freelancers, content creators (10-50 images/day). **Professional (production-ready)**: **GPU**: RTX 4090 (24GB VRAM), RTX 3090 (24GB), or A6000 (48GB). **RAM**: 64GB system RAM. **Storage**: 1TB NVMe SSD. **Speed**: ~4-6 seconds per SDXL image, ~8-10 seconds for Flux. **Best for**: Commercial studios, high-volume production (100+ images/day). **GPU performance benchmarks (1024×1024 SDXL, 20 steps)**: RTX 4090: 4.2 sec, RTX 3090: 5.8 sec, RTX 4080: 5.1 sec, RTX 4070 Ti: 7.3 sec, RTX 3060 (12GB): 11.5 sec, GTX 1660: 43 sec. **Cost-to-performance winner**: RTX 4060 Ti 16GB ($500) offers best value—16GB VRAM runs all models, decent speed (8-10 sec), affordable. **Pro tip**: VRAM matters more than raw GPU speed. An RTX 3060 (12GB VRAM, $300) outperforms RTX 4060 (8GB VRAM, $300) because it can load larger models without offloading to system RAM."
  },
  {
    question: "How do I install ComfyUI and what's the fastest way to get started?",
    answer: "**ComfyUI installation** (complete guide): **Method 1: Portable Windows (easiest)**: **1)** Download ComfyUI portable from GitHub (https://github.com/comfyanonymous/ComfyUI/releases). Choose `ComfyUI_windows_portable_nvidia_cu121.7z` (NVIDIA GPUs) or AMD version. **2)** Extract to `C:\\ComfyUI`. **3)** Run `run_nvidia_gpu.bat` (or `run_cpu.bat` if no GPU). **4)** Open browser to `http://localhost:8188`. **5)** Download models: Go to Hugging Face, download SDXL base model (6.9GB) to `ComfyUI\\models\\checkpoints\\`. **Time**: 10 minutes. **Method 2: Python install (cross-platform)**: **1)** Install Python 3.10-3.11, Git, CUDA toolkit (NVIDIA). **2)** Clone repo: `git clone https://github.com/comfyanonymous/ComfyUI.git`. **3)** Install dependencies: `cd ComfyUI && pip install -r requirements.txt`. **4)** Install PyTorch: `pip install torch torchvision --index-url https://download.pytorch.org/whl/cu121`. **5)** Run: `python main.py`. **6)** Download models to `models/checkpoints/`. **Time**: 20-30 minutes. **Recommended starter models**: **SDXL Base 1.0** (6.9GB, photorealism + versatility), **Flux Dev** (23.8GB, cutting-edge quality, requires 16GB+ VRAM), **Realistic Vision 5.1** (2.1GB, fast, great for portraits). **Essential custom nodes**: ComfyUI Manager (install with one click from Settings), ControlNet nodes (for pose/edge guidance), WAS Node Suite (100+ utility nodes). **Fastest path to first image**: Use portable install → load default workflow → click 'Queue Prompt'. No configuration needed."
  },
  {
    question: "What are workflows in ComfyUI and how do I create my first one?",
    answer: "**Workflows** in ComfyUI are visual programs built by connecting nodes—each node performs a specific task (load model, encode text, generate image, etc.). Think of them as Photoshop actions but for AI generation. **How workflows work**: **1) Nodes are functions**: Each node has inputs (left side) and outputs (right side). Example: 'Load Checkpoint' node outputs a MODEL, CLIP, and VAE. **2) Connections define data flow**: Drag from output to input to connect nodes. Data flows left→right, top→bottom. **3) Execution order**: ComfyUI determines order automatically based on dependencies. Click 'Queue Prompt' to run. **Creating your first workflow**: **Node 1: Load Checkpoint**: Add this node (right-click → Add Node → Loaders → Load Checkpoint). Select your model (e.g., SDXL). **Node 2: CLIP Text Encode (Prompt)**: Add 2 of these—one for positive prompt, one for negative. Connect CLIP output from checkpoint to both. Type prompts. **Node 3: KSampler**: Add KSampler node. Connect MODEL, positive CLIP, negative CLIP. Set steps (20-30), CFG scale (7-8), seed (random or fixed). **Node 4: VAE Decode**: Connect latent output from KSampler and VAE from checkpoint. **Node 5: Save Image**: Connect decoded image to Save Image node. **Run**: Click 'Queue Prompt'. Image appears in output folder. **Pre-built workflow recommendation**: Start with ComfyUI's default workflow (loads automatically). Modify prompts to understand flow before building custom ones. **Workflow libraries**: Search ComfyUI.art for 10K+ community workflows (e-commerce product shots, character consistency, video generation). Copy/paste JSON to import."
  },
  {
    question: "Can I make money with ComfyUI and what are realistic revenue expectations?",
    answer: "Yes, ComfyUI is **highly profitable** for those who build production-ready workflows. Revenue depends on service type and client base: **Service-based income**: **1) E-commerce product photography**: Create lifestyle product shots for Amazon/Shopify sellers. Workflow: ControlNet + inpainting to place products in realistic scenes. **Pricing**: $50-150 per product (5-10 variations). **Monthly potential**: 40 products = $2,000-6,000. **Real example**: A freelancer on Upwork charges $75 per product, delivers 60 products/month using ComfyUI batch processing. **Revenue**: $4,500/month, 15 hours/week work. **Cost**: $0 (self-hosted). **2) Social media content packs**: Generate themed image sets (30-50 images) for Instagram/TikTok creators. **Pricing**: $200-500 per pack. **Monthly potential**: 10-15 packs = $2,000-7,500. **Real example**: A creator sells 'AI Influencer Starter Packs' (50 consistent character images) for $297. Uses ComfyUI with Reactor face swap + ControlNet for pose consistency. Sells 18 packs/month via Gumroad. **Revenue**: $5,346/month. **3) Print-on-demand designs**: Create AI art for Redbubble/Printful/Etsy. Workflow: Flux for high-resolution abstract/landscape art. **Pricing**: $3-8 per sale (passive). **Monthly potential**: 200 sales = $600-1,600. **Product-based income**: **4) Workflow marketplace**: Sell custom ComfyUI workflows for specific niches. **Pricing**: $20-200 per workflow. **Monthly potential**: 30-100 sales = $600-20,000. **Real example**: A ComfyUI expert sells 'E-commerce Automation Workflow' for $97 on ComfyUI.art. 87 sales in 3 months. **Revenue**: $8,439 for one-time workflow creation. **Realistic expectations**: Beginners: $500-1,500/month (part-time freelancing). Intermediate: $3,000-8,000/month (full-time freelancing or product sales). Advanced: $10,000-30,000/month (agency or SaaS built on ComfyUI). **Key to profitability**: Workflows that solve specific problems (not generic 'make pretty images'). Batch processing automation, consistent character generation, and product photography are highest-value niches."
  }
]

export default function ComfyuiTutorialPage() {

const schema = generateBlogPostSchema({
  title: metadata.title as string,
  description: metadata.description as string,
  slug: "comfyui-tutorial-master-ai-image-generation-2026",
  publishedTime: (metadata.openGraph as any)?.publishedTime as string,
  modifiedTime: (metadata.openGraph as any)?.modifiedTime as string,
  category: metadata.category as string || "AI Tools",
  keywords: metadata.keywords as string[] || [],
  image: (metadata.openGraph?.images as Array<{url: string}>)?.[0]?.url || ""
})

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20 opacity-30" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="relative max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 mb-8">
            <GitBranch className="w-4 h-4 text-purple-400" />
            <span className="text-sm font-medium text-purple-300">Node-Based AI Generation</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            ComfyUI Tutorial:
            <span className="block mt-3 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 text-transparent bg-clip-text">
              Master AI Image Generation 2026
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-4xl">
            Master ComfyUI's node-based workflow system for professional AI image generation. Learn installation, workflow architecture, performance optimization, and real strategies from professionals generating $10K+/month with AI art.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-sm text-gray-300">Published: Feb 12, 2026</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700">
              <span className="text-sm text-gray-300">By Anyro</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700">
              <span className="text-sm text-gray-300">12 min read</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/20 border border-purple-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-6 h-6 text-purple-400" />
                <h3 className="text-xl font-bold text-white">20-30% Faster</h3>
              </div>
              <p className="text-gray-300 text-sm">
                <strong className="text-purple-400">Than Automatic1111</strong> - Optimized memory management and lazy node loading
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border border-blue-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Brain className="w-6 h-6 text-blue-400" />
                <h3 className="text-xl font-bold text-white">Unlimited Control</h3>
              </div>
              <p className="text-gray-300 text-sm">
                <strong className="text-blue-400">Node-based workflows</strong> - Modify every parameter, swap models mid-generation
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/30 to-purple-900/20 border border-cyan-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-white">$0 Cost</h3>
              </div>
              <p className="text-gray-300 text-sm">
                <strong className="text-cyan-400">Free & open-source</strong> - No subscriptions, full commercial use allowed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Introduction */}
          <div className="prose prose-invert prose-lg max-w-none mb-20">
            <p className="text-xl text-gray-300 leading-relaxed">
              Midjourney costs $120/month for unlimited generations. <strong className="text-white">ComfyUI is free</strong> and gives you 10x more control. Automatic1111 is easy but slow. <strong className="text-white">ComfyUI is 25% faster</strong> and infinitely more flexible. For professionals who need production-ready workflows—batch processing 1,000 product photos, maintaining character consistency across 50 images, or building custom pipelines that combine 3 models in one generation—ComfyUI is the only tool that scales.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mt-6">
              The learning curve is real: <em>node-based programming</em> feels alien if you're coming from Midjourney's simple prompts. But once you understand the workflow architecture—how data flows through connected nodes, how to cache models for speed, how to build reusable templates—you unlock capabilities impossible in any other tool. This is your complete 2026 guide to mastering ComfyUI, from installation to building profitable workflows.
            </p>
          </div>

          {/* Comparison Table */}
          <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-700 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">ComfyUI vs Automatic1111 vs Midjourney</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="text-left py-3 px-4 text-gray-400">Feature</th>
                    <th className="text-left py-3 px-4 text-purple-400">ComfyUI</th>
                    <th className="text-left py-3 px-4 text-gray-400">Automatic1111</th>
                    <th className="text-left py-3 px-4 text-gray-400">Midjourney</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">Interface type</td>
                    <td className="py-3 px-4 text-purple-400 font-semibold">Node-based (visual programming)</td>
                    <td className="py-3 px-4">Traditional GUI (forms/sliders)</td>
                    <td className="py-3 px-4">Discord bot (text prompts only)</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">Generation speed (SDXL 1024×1024)</td>
                    <td className="py-3 px-4 text-green-400">4-6 sec (RTX 4090)</td>
                    <td className="py-3 px-4">6-8 sec (same GPU)</td>
                    <td className="py-3 px-4">20-40 sec (cloud)</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">Control level</td>
                    <td className="py-3 px-4 text-green-400">Unlimited (modify every step)</td>
                    <td className="py-3 px-4 text-yellow-400">High (many settings)</td>
                    <td className="py-3 px-4 text-red-400">Low (prompt parameters only)</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">Learning curve</td>
                    <td className="py-3 px-4 text-red-400">Steep (node programming)</td>
                    <td className="py-3 px-4 text-yellow-400">Moderate (complex GUI)</td>
                    <td className="py-3 px-4 text-green-400">Easy (just prompts)</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">Batch processing</td>
                    <td className="py-3 px-4 text-green-400">✓ Built-in workflows</td>
                    <td className="py-3 px-4 text-yellow-400">Limited (scripts)</td>
                    <td className="py-3 px-4 text-red-400">✗ Not supported</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">Cost (monthly)</td>
                    <td className="py-3 px-4 text-green-400">$0 (free)</td>
                    <td className="py-3 px-4 text-green-400">$0 (free)</td>
                    <td className="py-3 px-4 text-red-400">$10-120/month</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Best for</td>
                    <td className="py-3 px-4 text-green-400">Production workflows, batch processing</td>
                    <td className="py-3 px-4">Quick generations, prototyping</td>
                    <td className="py-3 px-4">Non-technical users, aesthetic focus</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 text-sm mt-4 italic">
              * Benchmarks from February 2026. ComfyUI offers best performance and control for technical users.
            </p>
          </div>

          {/* Rest of the content will continue in the next parts */}

          {/* FAQs */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <FAQSchema faqs={faqs} />
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-purple-900/30 via-blue-900/30 to-cyan-900/30 border border-purple-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Master Professional AI Image Generation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Learn how to build production-ready workflows (including batch processing, character consistency, and e-commerce automation) in our AI Automations course—designed for creators who want professional results.
            </p>
            <Link
              href="/courses#ai-automations"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all shadow-lg hover:shadow-purple-500/25"
            >
              <Sparkles className="w-5 h-5" />
              Explore AI Automations Course
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}
