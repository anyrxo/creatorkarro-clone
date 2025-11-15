import React from 'react'
import Link from 'next/link'
import { generateBlogPostSchema } from '@/lib/blog-schema'
import SmartCTA from '@/components/blog/SmartCTA'
import RelatedPosts from '@/components/blog/RelatedPosts'

export const metadata = {
  title: "LoRA Training Guide: Create 98% Consistent AI Influencer Faces in 2026 | IImagined",
  description: "Complete LoRA training workflow for AI influencer character consistency. Dataset prep, training parameters, quality control, and troubleshooting guide.",
  keywords: ["LoRA training", "AI influencer consistency", "character LoRA", "Stable Diffusion training", "Kohya SS", "face consistency", "AI character creation"],
  authors: [{ name: "Anyro", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai",
  category: "AI Influencers",
  openGraph: {
    title: "LoRA Training Guide: 98% Consistent AI Influencer Faces",
    description: "Complete workflow from dataset prep to final model. Achieve photorealistic character consistency for AI influencers.",
    url: "https://iimagined.ai/blog/lora-training-guide-consistent-ai-influencer-faces",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "2026-01-22T12:00:00.000Z",
    modifiedTime: "2026-01-22T12:00:00.000Z",
    authors: ["Anyro"],
    tags: ["AI Influencers", "LoRA Training", "Character Consistency", "Stable Diffusion", "Machine Learning"],
    images: [{
      url: "https://iimagined.ai/images/lora-training-guide-og.jpg",
      width: 1200,
      height: 630,
      alt: "LoRA Training Guide",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@iimagined_ai",
    creator: "@iimagined_ai",
    title: "LoRA Training: 98% Consistent AI Faces",
    description: "Complete workflow for character consistency training",
    images: [{
      url: "https://iimagined.ai/images/lora-training-guide-og.jpg",
      alt: "LoRA Training Guide"
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
    canonical: "https://iimagined.ai/blog/lora-training-guide-consistent-ai-influencer-faces"
  }
}

export default function LoRATrainingGuide() {
  const schema = generateBlogPostSchema({
    title: metadata.title,
    description: metadata.description,
    slug: "lora-training-guide-consistent-ai-influencer-faces",
    publishedTime: (metadata.openGraph as any)?.publishedTime as string,
    modifiedTime: (metadata.openGraph as any)?.modifiedTime as string,
    category: metadata.category || "AI Influencers",
    keywords: metadata.keywords as string[] || [],
    image: (metadata.openGraph?.images as Array<{url: string}>)?.[0]?.url || ""
  })

  return (
    <div className="min-h-screen bg-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section className="section-spacing overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <span className="text-blue-400 text-sm font-semibold">TECHNICAL GUIDE</span>
            </div>

            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              LoRA Training Masterclass: <span className="text-blue-400">Create 98% Consistent AI Influencer Faces</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Complete step-by-step workflow from <span className="text-white font-semibold">dataset preparation to final trained model</span> that generates photorealistic consistent characters
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">What You'll Achieve</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-zinc-900 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
                <p className="text-gray-400 mb-2">Facial Consistency</p>
                <p className="text-sm text-gray-500">Same face every generation</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">30-60 min</div>
                <p className="text-gray-400 mb-2">Training Time</p>
                <p className="text-sm text-gray-500">RTX 4070 or better</p>
              </div>
              <div className="bg-zinc-900 rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">∞</div>
                <p className="text-gray-400 mb-2">Image Variations</p>
                <p className="text-sm text-gray-500">Unlimited poses/outfits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Understanding LoRA: The Basics</h2>

          <div className="bg-zinc-900 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-blue-400 mb-6">What is LoRA?</h3>
            <p className="text-gray-300 mb-6">
              LoRA (Low-Rank Adaptation) is a technique that teaches Stable Diffusion to recognize and generate a specific face/character/style without retraining the entire model. Think of it as adding a new "word" to SD's vocabulary.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-zinc-800 rounded-lg p-6">
                <h4 className="text-green-400 font-semibold mb-4">Advantages</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• 95-98% face consistency (vs 60% without LoRA)</li>
                  <li>• Small file size (100-200MB vs 6GB full model)</li>
                  <li>• Works with any SD checkpoint</li>
                  <li>• Train in 30-90 minutes</li>
                  <li>• Can combine multiple LoRAs</li>
                  <li>• Easy to share and distribute</li>
                </ul>
              </div>

              <div className="bg-zinc-800 rounded-lg p-6">
                <h4 className="text-blue-400 font-semibold mb-4">Use Cases</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• AI influencer character consistency</li>
                  <li>• Product mascots (brand characters)</li>
                  <li>• Comic/manga recurring characters</li>
                  <li>• Personal avatar creation</li>
                  <li>• Style transfer (artistic styles)</li>
                  <li>• Concept replication (poses, objects)</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6">
              <h4 className="text-blue-400 font-semibold mb-3">Pro Tip: When to Use LoRA vs Textual Inversion</h4>
              <p className="text-gray-300 text-sm">
                <span className="font-semibold text-white">LoRA:</span> Better for faces, complex characters, high consistency requirements. File size 100-200MB.<br />
                <span className="font-semibold text-white">Textual Inversion:</span> Better for styles, concepts, simple objects. File size 10-50KB but lower consistency (80%).
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-8 text-center">Phase 1: Dataset Preparation</h2>

          <div className="space-y-8 mb-12">
            <div className="bg-zinc-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Dataset Requirements</h3>

              <div className="bg-zinc-800 rounded-lg p-6 mb-6">
                <h4 className="text-white font-semibold mb-4">Image Count & Quality</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0">✓</div>
                    <div>
                      <p className="text-white font-semibold mb-1">Optimal: 15-30 images</p>
                      <p className="text-gray-400 text-sm">Sweet spot for character LoRAs. More isn't always better - quality over quantity.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0">!</div>
                    <div>
                      <p className="text-white font-semibold mb-1">Minimum: 10 images</p>
                      <p className="text-gray-400 text-sm">Can work but consistency drops to 85-90%. Only for quick tests.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0">✗</div>
                    <div>
                      <p className="text-white font-semibold mb-1">Avoid: 50+ images</p>
                      <p className="text-gray-400 text-sm">Overfitting risk. Model memorizes images instead of learning face features.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-800 rounded-lg p-6 mb-6">
                <h4 className="text-white font-semibold mb-4">Diversity Requirements</h4>
                <p className="text-gray-300 mb-4">Your dataset must include variety across these dimensions:</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-blue-400 font-semibold mb-3">Angles (Critical)</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• 8-10 images: Front-facing (straight on)</li>
                      <li>• 4-6 images: 3/4 view (45° angle)</li>
                      <li>• 2-3 images: Side profile (90° angle)</li>
                      <li>• 1-2 images: Looking down/up</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-blue-400 font-semibold mb-3">Expressions</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• 10 images: Neutral/slight smile</li>
                      <li>• 3-4 images: Big smile/laughing</li>
                      <li>• 2-3 images: Serious/confident</li>
                      <li>• 1-2 images: Other (surprised, etc)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-blue-400 font-semibold mb-3">Lighting</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• 8-10 images: Soft natural light</li>
                      <li>• 3-4 images: Bright outdoor light</li>
                      <li>• 2-3 images: Studio/dramatic lighting</li>
                      <li>• 1-2 images: Low light/golden hour</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-blue-400 font-semibold mb-3">Backgrounds</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• 6-8 images: Simple/blurred backgrounds</li>
                      <li>• 4-6 images: Indoor settings</li>
                      <li>• 3-4 images: Outdoor settings</li>
                      <li>• 2-3 images: Urban/complex backgrounds</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-6">
                <h4 className="text-red-400 font-semibold mb-3">Common Dataset Mistakes</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• <span className="font-semibold text-white">All same angle:</span> Model can't generate 3/4 or profile views</li>
                  <li>• <span className="font-semibold text-white">All same expression:</span> Character looks robotic, can't show emotion</li>
                  <li>• <span className="font-semibold text-white">Inconsistent style:</span> Mixing anime + realistic breaks training</li>
                  <li>• <span className="font-semibold text-white">Multiple people in frame:</span> Model gets confused about which face to learn</li>
                  <li>• <span className="font-semibold text-white">Low resolution:</span> Under 512px leads to blurry generations</li>
                </ul>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Step-by-Step: Creating Your Dataset</h3>

              <div className="space-y-6">
                <div className="bg-zinc-800 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">1</div>
                    <h4 className="text-xl font-bold text-white">Generate Seed Images</h4>
                  </div>
                  <p className="text-gray-300 mb-4">Use Stable Diffusion to create 50-100 candidate images:</p>
                  <div className="bg-zinc-900 p-4 rounded">
                    <p className="text-white font-semibold mb-2">Example Prompt:</p>
                    <p className="text-gray-300 text-sm italic">
                      "photo of a beautiful woman, 25 years old, brown hair, blue eyes, natural makeup, looking at camera, soft lighting, professional photography, detailed face, 8k uhd, high quality"
                    </p>
                    <p className="text-gray-400 text-xs mt-3">
                      <span className="font-semibold">Settings:</span> Realistic Vision 5.1 checkpoint, DPM++ 2M Karras, 30 steps, CFG 7, 768x768
                    </p>
                  </div>
                </div>

                <div className="bg-zinc-800 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">2</div>
                    <h4 className="text-xl font-bold text-white">Select Best 20 Images</h4>
                  </div>
                  <p className="text-gray-300 mb-4">Curation criteria:</p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>✓ Clear, sharp facial features (no blur)</li>
                    <li>✓ No artifacts (weird fingers, distortions)</li>
                    <li>✓ Good variety in angles/expressions</li>
                    <li>✓ Consistent ethnicity/age/gender</li>
                    <li>✓ Natural-looking (no AI "tells")</li>
                  </ul>
                </div>

                <div className="bg-zinc-800 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">3</div>
                    <h4 className="text-xl font-bold text-white">Crop & Standardize</h4>
                  </div>
                  <p className="text-gray-300 mb-3">Prepare images for training:</p>
                  <div className="space-y-3">
                    <div className="bg-zinc-900 p-3 rounded">
                      <p className="text-white font-semibold text-sm mb-1">Resolution:</p>
                      <p className="text-gray-400 text-sm">512x512 minimum, 768x768 optimal, 1024x1024 for SD XL</p>
                    </div>
                    <div className="bg-zinc-900 p-3 rounded">
                      <p className="text-white font-semibold text-sm mb-1">Cropping:</p>
                      <p className="text-gray-400 text-sm">Face should fill 60-80% of frame. Include shoulders/chest for context.</p>
                    </div>
                    <div className="bg-zinc-900 p-3 rounded">
                      <p className="text-white font-semibold text-sm mb-1">Format:</p>
                      <p className="text-gray-400 text-sm">PNG or JPG (PNG preferred for quality). Remove alpha channels.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-800 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">4</div>
                    <h4 className="text-xl font-bold text-white">Tag Your Images</h4>
                  </div>
                  <p className="text-gray-300 mb-4">Create .txt files with same name as images describing contents:</p>
                  <div className="bg-zinc-900 p-4 rounded">
                    <p className="text-white font-semibold mb-2">Example: image_001.txt</p>
                    <p className="text-gray-300 text-sm">
                      1girl, brown hair, blue eyes, smiling, white shirt, looking at viewer, natural lighting, portrait, high quality
                    </p>
                  </div>
                  <p className="text-gray-400 text-sm mt-3">
                    <span className="font-semibold text-white">Pro tip:</span> Use WD14 Tagger in Automatic1111 to auto-generate tags, then manually refine.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-8 text-center">Phase 2: Training Configuration</h2>

          <div className="bg-zinc-900 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-green-400 mb-6">Training Parameters Explained</h3>

            <div className="overflow-x-auto mb-8">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="text-left py-4 px-4 text-gray-400 text-sm font-semibold">Parameter</th>
                    <th className="text-center py-4 px-4 text-gray-400 text-sm font-semibold">Recommended</th>
                    <th className="text-left py-4 px-4 text-gray-400 text-sm font-semibold">Explanation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-800">
                    <td className="py-4 px-4 text-white font-semibold">Learning Rate</td>
                    <td className="py-4 px-4 text-center text-green-400 font-mono">1e-4</td>
                    <td className="py-4 px-4 text-gray-300 text-sm">How fast model learns. 1e-4 (0.0001) is safest. 5e-5 for slower/safer, 5e-4 for faster/riskier.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-4 px-4 text-white font-semibold">Batch Size</td>
                    <td className="py-4 px-4 text-center text-green-400 font-mono">2-4</td>
                    <td className="py-4 px-4 text-gray-300 text-sm">Images processed per step. Higher = faster but more VRAM. RTX 4070: use 3-4. RTX 3060: use 2.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-4 px-4 text-white font-semibold">Epochs</td>
                    <td className="py-4 px-4 text-center text-green-400 font-mono">15-20</td>
                    <td className="py-4 px-4 text-gray-300 text-sm">Full passes through dataset. 20 images × 15 epochs = 300 training steps. Sweet spot for faces.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-4 px-4 text-white font-semibold">Network Rank</td>
                    <td className="py-4 px-4 text-center text-green-400 font-mono">32-64</td>
                    <td className="py-4 px-4 text-gray-300 text-sm">LoRA complexity. 32 = lighter/faster, 64 = more detail, 128 = overkill for faces.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-4 px-4 text-white font-semibold">Network Alpha</td>
                    <td className="py-4 px-4 text-center text-green-400 font-mono">16-32</td>
                    <td className="py-4 px-4 text-gray-300 text-sm">Usually half of Network Rank. Affects LoRA strength scaling.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-4 px-4 text-white font-semibold">Resolution</td>
                    <td className="py-4 px-4 text-center text-green-400 font-mono">512 or 768</td>
                    <td className="py-4 px-4 text-gray-300 text-sm">Training resolution. Match your dataset. 768 = better quality but slower.</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-4 px-4 text-white font-semibold">Optimizer</td>
                    <td className="py-4 px-4 text-center text-green-400 font-mono">AdamW8bit</td>
                    <td className="py-4 px-4 text-gray-300 text-sm">Training algorithm. AdamW8bit uses less VRAM. ProdigyPlus for advanced users.</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 text-white font-semibold">LR Scheduler</td>
                    <td className="py-4 px-4 text-center text-green-400 font-mono">cosine</td>
                    <td className="py-4 px-4 text-gray-300 text-sm">Learning rate changes over time. Cosine smoothly reduces LR toward end.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-6">
                <h4 className="text-blue-400 font-semibold mb-3">Beginner Safe Settings</h4>
                <div className="space-y-2 text-sm font-mono text-gray-300">
                  <p>Learning Rate: <span className="text-green-400">1e-4</span></p>
                  <p>Batch Size: <span className="text-green-400">2</span></p>
                  <p>Epochs: <span className="text-green-400">15</span></p>
                  <p>Network Rank: <span className="text-green-400">32</span></p>
                  <p>Network Alpha: <span className="text-green-400">16</span></p>
                  <p>Resolution: <span className="text-green-400">512</span></p>
                </div>
                <p className="text-gray-400 text-xs mt-3">Works 95% of the time. Start here.</p>
              </div>

              <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6">
                <h4 className="text-green-400 font-semibold mb-3">Advanced High-Quality Settings</h4>
                <div className="space-y-2 text-sm font-mono text-gray-300">
                  <p>Learning Rate: <span className="text-green-400">5e-5</span></p>
                  <p>Batch Size: <span className="text-green-400">4</span></p>
                  <p>Epochs: <span className="text-green-400">20</span></p>
                  <p>Network Rank: <span className="text-green-400">64</span></p>
                  <p>Network Alpha: <span className="text-green-400">32</span></p>
                  <p>Resolution: <span className="text-green-400">768</span></p>
                </div>
                <p className="text-gray-400 text-xs mt-3">Slower but maximum quality. Needs 12GB+ VRAM.</p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-8 text-center">Phase 3: Training Process (Kohya SS)</h2>

          <div className="space-y-8 mb-12">
            <div className="bg-zinc-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-6">Kohya SS GUI Setup</h3>

              <div className="space-y-6">
                <div className="bg-zinc-800 rounded-lg p-6">
                  <h4 className="text-white font-semibold mb-4">Installation</h4>
                  <ol className="space-y-3 text-gray-300 text-sm">
                    <li>1. Download Kohya SS from GitHub: <code className="text-green-400 bg-zinc-900 px-2 py-1 rounded">bmaltais/kohya_ss</code></li>
                    <li>2. Run setup script: <code className="text-green-400 bg-zinc-900 px-2 py-1 rounded">setup.bat</code> (Windows) or <code className="text-green-400 bg-zinc-900 px-2 py-1 rounded">setup.sh</code> (Linux)</li>
                    <li>3. Launch GUI: <code className="text-green-400 bg-zinc-900 px-2 py-1 rounded">gui.bat</code> or <code className="text-green-400 bg-zinc-900 px-2 py-1 rounded">gui.sh</code></li>
                    <li>4. Navigate to LoRA tab in web interface</li>
                  </ol>
                </div>

                <div className="bg-zinc-800 rounded-lg p-6">
                  <h4 className="text-white font-semibold mb-4">Configuration Steps</h4>
                  <div className="space-y-4">
                    <div>
                      <p className="text-blue-400 font-semibold mb-2">Source Model</p>
                      <p className="text-gray-300 text-sm">Select base checkpoint (Realistic Vision 5.1, DreamShaper 8, etc). Choose same model you used for dataset generation.</p>
                    </div>
                    <div>
                      <p className="text-blue-400 font-semibold mb-2">Training Folder</p>
                      <p className="text-gray-300 text-sm">Point to folder containing your 20 images + .txt tags. Structure: <code className="text-green-400 bg-zinc-900 px-1 rounded text-xs">20_character_name/</code></p>
                    </div>
                    <div>
                      <p className="text-blue-400 font-semibold mb-2">Output Folder</p>
                      <p className="text-gray-300 text-sm">Where trained LoRA will be saved. Create: <code className="text-green-400 bg-zinc-900 px-1 rounded text-xs">output/character_name/</code></p>
                    </div>
                    <div>
                      <p className="text-blue-400 font-semibold mb-2">Parameters</p>
                      <p className="text-gray-300 text-sm">Enter training settings from table above. Enable "Save every N epochs" (set to 5) for checkpoints.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-800 rounded-lg p-6">
                  <h4 className="text-white font-semibold mb-4">Start Training</h4>
                  <p className="text-gray-300 mb-4">Click "Train model" button. Monitor terminal for progress:</p>
                  <div className="bg-zinc-900 p-4 rounded font-mono text-xs text-gray-400 space-y-1">
                    <p>Epoch 1/15: <span className="text-green-400">[====================] 100%</span> Loss: 0.142</p>
                    <p>Epoch 2/15: <span className="text-green-400">[====================] 100%</span> Loss: 0.118</p>
                    <p>Epoch 5/15: <span className="text-green-400">[====================] 100%</span> Loss: 0.092 - Checkpoint saved</p>
                    <p className="text-gray-500">...</p>
                    <p>Epoch 15/15: <span className="text-green-400">[====================] 100%</span> Loss: 0.064</p>
                    <p className="text-green-400">Training complete! LoRA saved to output folder.</p>
                  </div>
                  <p className="text-gray-400 text-xs mt-3">
                    <span className="font-semibold text-white">Training time:</span> RTX 4090: 20-30 min | RTX 4070: 30-45 min | RTX 3060: 60-90 min
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-green-400 mb-6">Alternative: Automatic1111 Training</h3>

              <p className="text-gray-300 mb-6">
                If you prefer training in Automatic1111 WebUI, use the built-in training tab:
              </p>

              <div className="bg-zinc-800 rounded-lg p-6">
                <h4 className="text-white font-semibold mb-4">A1111 Steps</h4>
                <ol className="space-y-3 text-gray-300 text-sm">
                  <li>1. Navigate to "Train" tab in WebUI</li>
                  <li>2. Select "LoRA" tab (not Dreambooth)</li>
                  <li>3. Create new LoRA, name your character</li>
                  <li>4. Set source model, training folder, epochs, learning rate</li>
                  <li>5. Click "Train" - monitor in terminal/console</li>
                </ol>
                <p className="text-yellow-400 text-xs mt-4">
                  <span className="font-semibold">Note:</span> Kohya SS is more powerful with better settings control. A1111 works but is more limited.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-8 text-center">Phase 4: Quality Control & Testing</h2>

          <div className="space-y-8 mb-12">
            <div className="bg-zinc-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Testing Your LoRA</h3>

              <div className="space-y-6">
                <div className="bg-zinc-800 rounded-lg p-6">
                  <h4 className="text-white font-semibold mb-4">Test Different Weights</h4>
                  <p className="text-gray-300 mb-4">LoRA strength can be adjusted 0-1. Test multiple values:</p>
                  <div className="space-y-3">
                    <div className="bg-zinc-900 p-3 rounded">
                      <p className="text-white font-semibold mb-1">Weight 0.6 (Subtle)</p>
                      <p className="text-gray-400 text-sm">Face is recognizable but allows more prompt influence. Good for artistic styles.</p>
                    </div>
                    <div className="bg-zinc-900 p-3 rounded">
                      <p className="text-white font-semibold mb-1">Weight 0.8 (Balanced)</p>
                      <p className="text-gray-400 text-sm">Strong consistency while maintaining flexibility. Recommended for most use cases.</p>
                    </div>
                    <div className="bg-zinc-900 p-3 rounded">
                      <p className="text-white font-semibold mb-1">Weight 1.0 (Maximum)</p>
                      <p className="text-gray-400 text-sm">Strongest consistency. Use for photorealistic influencers where exact face match is critical.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-800 rounded-lg p-6">
                  <h4 className="text-white font-semibold mb-4">Test Prompts</h4>
                  <p className="text-gray-300 mb-4">Generate 20-30 test images with varied prompts:</p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-zinc-900 p-4 rounded">
                      <p className="text-blue-400 font-semibold mb-2">Different Outfits</p>
                      <p className="text-gray-400">"wearing red dress", "in business suit", "casual jeans and t-shirt"</p>
                    </div>
                    <div className="bg-zinc-900 p-4 rounded">
                      <p className="text-blue-400 font-semibold mb-2">Different Locations</p>
                      <p className="text-gray-400">"at beach", "in office", "city street background"</p>
                    </div>
                    <div className="bg-zinc-900 p-4 rounded">
                      <p className="text-blue-400 font-semibold mb-2">Different Poses</p>
                      <p className="text-gray-400">"sitting on chair", "walking", "hands on hips"</p>
                    </div>
                    <div className="bg-zinc-900 p-4 rounded">
                      <p className="text-blue-400 font-semibold mb-2">Different Expressions</p>
                      <p className="text-gray-400">"laughing", "serious expression", "winking"</p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-800 rounded-lg p-6">
                  <h4 className="text-white font-semibold mb-4">Consistency Checklist</h4>
                  <p className="text-gray-300 mb-4">Your LoRA passes if 95%+ of test images match these criteria:</p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>✓ Same facial structure (jawline, cheekbones, chin)</li>
                    <li>✓ Same eye color and shape</li>
                    <li>✓ Same nose shape</li>
                    <li>✓ Same hair color (unless you prompt otherwise)</li>
                    <li>✓ Same overall facial proportions</li>
                    <li>✓ Same age appearance</li>
                    <li>✓ Same ethnicity/skin tone</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-zinc-900 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Troubleshooting Common Issues</h3>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-700">
                      <th className="text-left py-4 px-4 text-gray-400 text-sm font-semibold">Problem</th>
                      <th className="text-left py-4 px-4 text-gray-400 text-sm font-semibold">Cause</th>
                      <th className="text-left py-4 px-4 text-gray-400 text-sm font-semibold">Solution</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-zinc-800">
                      <td className="py-4 px-4 text-white font-semibold">Face inconsistent</td>
                      <td className="py-4 px-4 text-gray-300">Not enough epochs or too low learning rate</td>
                      <td className="py-4 px-4 text-gray-300">Increase epochs to 20-25 or learning rate to 1e-4</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-4 px-4 text-white font-semibold">Overfitted (copies dataset)</td>
                      <td className="py-4 px-4 text-gray-300">Too many epochs or too high learning rate</td>
                      <td className="py-4 px-4 text-gray-300">Reduce epochs to 10-12 or learning rate to 5e-5</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-4 px-4 text-white font-semibold">Can't generate profiles</td>
                      <td className="py-4 px-4 text-gray-300">Dataset lacks side-view images</td>
                      <td className="py-4 px-4 text-gray-300">Add 3-5 profile images to dataset, retrain</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-4 px-4 text-white font-semibold">Strange artifacts</td>
                      <td className="py-4 px-4 text-gray-300">Low-quality dataset images</td>
                      <td className="py-4 px-4 text-gray-300">Curate dataset more strictly, remove blurry/distorted images</td>
                    </tr>
                    <tr className="border-b border-zinc-800">
                      <td className="py-4 px-4 text-white font-semibold">Style drift (wrong style)</td>
                      <td className="py-4 px-4 text-gray-300">Mixed styles in dataset</td>
                      <td className="py-4 px-4 text-gray-300">Keep dataset style consistent (all realistic or all anime)</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 text-white font-semibold">Works poorly with prompts</td>
                      <td className="py-4 px-4 text-gray-300">Network rank too high</td>
                      <td className="py-4 px-4 text-gray-300">Reduce network rank to 32, retrain</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-8 text-center">Case Study: 98% Consistent Character</h2>

          <div className="bg-zinc-900 rounded-xl p-8 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-16 h-16 flex items-center justify-center text-white text-2xl font-bold">
                LR
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">@LunaRae - AI Fashion Influencer</h3>
                <p className="text-gray-400">Created with custom-trained LoRA | 98% face consistency</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-zinc-800 rounded-lg p-6">
                <h4 className="text-blue-400 font-semibold mb-4">Training Specs</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Dataset size:</span>
                    <span className="text-white font-semibold">22 images</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Training time:</span>
                    <span className="text-white font-semibold">38 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Learning rate:</span>
                    <span className="text-white font-semibold">1e-4</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Epochs:</span>
                    <span className="text-white font-semibold">18</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Network rank:</span>
                    <span className="text-white font-semibold">64</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">GPU used:</span>
                    <span className="text-white font-semibold">RTX 4070 Ti</span>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-800 rounded-lg p-6">
                <h4 className="text-green-400 font-semibold mb-4">Results</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-white font-semibold mb-1">Face Consistency Rate:</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 bg-zinc-900 rounded-full h-3">
                        <div className="bg-green-400 h-3 rounded-full" style={{width: '98%'}}></div>
                      </div>
                      <span className="text-green-400 font-bold">98%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Images generated:</p>
                    <p className="text-gray-300">1,200+ (400/month for 3 months)</p>
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Audience feedback:</p>
                    <p className="text-gray-300">"Feels like a real person" - consistent comments</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-6">
              <h4 className="text-green-400 font-semibold mb-3">Creator's Success Metrics</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Only 3 images (out of 1,200) had noticeable face inconsistency</li>
                <li>• Can generate unlimited variations: outfits, poses, locations</li>
                <li>• Works with multiple checkpoints (Realistic Vision, DreamShaper, ChilloutMix)</li>
                <li>• Followers believe she's a real person (no questions about AI)</li>
                <li>• Landed 4 brand deals - brands trust the consistency</li>
              </ul>
            </div>
          </div>

          {/* Smart CTA - All Access Pass */}
          <SmartCTA blogSlug="lora-training-guide-consistent-ai-influencer-faces" />

          {/* Related Posts */}
          <RelatedPosts currentSlug="lora-training-guide-consistent-ai-influencer-faces" limit={3} />
        </div>
      </section>

      <section className="section-spacing bg-zinc-900/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">How long does LoRA training take?</h3>
              <p className="text-gray-400">
                With an RTX 4070 or better, expect 30-60 minutes for a standard character LoRA (20 images, 15-20 epochs). RTX 3060 takes 60-90 minutes. High-end GPUs like RTX 4090 can complete training in 15-25 minutes. Cloud services (RunPod, Vast.ai) offer similar speeds for $0.50-1.00 per training session.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Can I train a LoRA without a powerful GPU?</h3>
              <p className="text-gray-400">
                Yes! Use cloud services like RunPod ($0.34/hour for RTX 4090), Google Colab (free tier with limits, Pro for $10/month), or Vast.ai ($0.25-0.50/hour). These let you rent high-end GPUs by the hour. Training one LoRA costs $0.50-1.50, far cheaper than buying a GPU.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Why is my LoRA generating the same image every time?</h3>
              <p className="text-gray-400">
                This is overfitting - your LoRA memorized the training images instead of learning the face. Solution: Reduce epochs (try 10-12 instead of 20), lower learning rate (5e-5 instead of 1e-4), or add more variety to your dataset. Save checkpoints every 5 epochs and compare - use the epoch before overfitting started.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Can I update my LoRA with new images later?</h3>
              <p className="text-gray-400">
                Not directly - you can't "add" to an existing LoRA. However, you can create a new training dataset combining old + new images and retrain from scratch. This takes another 30-60 minutes but gives you a refreshed LoRA with updated features. Most creators retrain monthly to refine their character.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">How do I share my LoRA with others?</h3>
              <p className="text-gray-400">
                Upload to CivitAI (largest LoRA community), Hugging Face, or your own hosting. LoRA files are 100-200MB. Include example images, recommended settings (weight, prompt), and base model used. Be aware: once shared, others can generate infinite images of your character.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Can I combine multiple LoRAs?</h3>
              <p className="text-gray-400">
                Yes! You can stack LoRAs - for example, character LoRA (weight 1.0) + style LoRA (weight 0.6) + clothing LoRA (weight 0.4). Keep total weights under 3.0 to avoid artifacts. This is powerful for creating unique combinations without training new LoRAs.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">What's the difference between LoRA and Dreambooth?</h3>
              <p className="text-gray-400">
                LoRA trains small adapter weights (100-200MB) that work with any checkpoint. Dreambooth fine-tunes the entire model (6GB file) and is locked to that model. LoRA is faster, more flexible, and better for most use cases. Dreambooth gives slightly more control but requires 10x more training time and VRAM.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-3">How often should I retrain my LoRA?</h3>
              <p className="text-gray-400">
                Most AI influencer creators retrain every 2-3 months to refine consistency or update the character's look (new hairstyle, style evolution). Initial LoRA lasts indefinitely if results are good. Retrain if: consistency drops, you want to add new features, or your audience wants visual updates.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
