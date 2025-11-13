import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateBlogPostSchema } from '@/lib/blog-schema'
import FAQSchema from '@/components/FAQSchema'
import { Sparkles, TrendingUp, Target, Zap, BarChart3, Brain, Globe, Languages } from 'lucide-react'

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  title: "Qwen 3 Alibaba Open Source LLM: Complete Guide 2026 | Multilingual AI Powerhouse",
  description: "Master Qwen 3, Alibaba's open-source multilingual LLM for 2026. Learn deployment, fine-tuning, Chinese language excellence, and how this Apache 2.0 licensed model rivals GPT-4 at zero cost for commercial use.",
  keywords: [
    "qwen 3",
    "qwen 3 llm",
    "alibaba qwen",
    "qwen open source",
    "chinese llm",
    "multilingual ai model",
    "qwen 3 vs gpt4",
    "qwen commercial use",
    "alibaba ai model",
    "qwen 3 2026",
    "qwen apache license",
    "chinese language ai",
    "qwen self hosting",
    "qwen fine tuning",
    "asia pacific ai"
  ],
  authors: [{ name: "Anyro", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai",
  category: "AI Tools",
  openGraph: {
    title: "Qwen 3 Alibaba Open Source LLM: Complete Guide 2026 | Multilingual AI Powerhouse",
    description: "Master Qwen 3, Alibaba's open-source multilingual LLM. Learn deployment, fine-tuning, Chinese language excellence, and commercial use with Apache 2.0 license.",
    url: "https://iimagined.ai/blog/qwen-3-alibaba-open-source-llm",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "2026-02-28T10:00:00.000Z",
    modifiedTime: "2026-08-03T06:14:29.966Z",
    authors: ["Anyro"],
    tags: [
      "qwen 3",
      "alibaba ai",
      "open source llm",
      "multilingual ai",
      "chinese language",
      "apache license"
    ],
    images: [{
      url: "https://iimagined.ai/images/qwen-3-alibaba-open-source-llm-og.jpg",
      width: 1200,
      height: 630,
      alt: "Qwen 3 Alibaba Open Source LLM Guide 2026",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@iimagined_ai",
    creator: "@iimagined_ai",
    title: "Qwen 3 Alibaba Open Source LLM: Complete Guide 2026",
    description: "Master Qwen 3 - Alibaba's powerful open-source multilingual LLM with Chinese language excellence and Apache 2.0 commercial license.",
    images: [{
      url: "https://iimagined.ai/images/qwen-3-alibaba-open-source-llm-og.jpg",
      alt: "Qwen 3 Alibaba Open Source LLM Guide 2026"
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
    canonical: "https://iimagined.ai/blog/qwen-3-alibaba-open-source-llm"
  }
}

const faqs = [
  {
    question: "What is Qwen 3 and how does it differ from Western LLMs like GPT-4 or Llama?",
    answer: "**Qwen 3** (通义千问 3, 'Tongyi Qianwen' in Chinese) is Alibaba Cloud's open-source large language model released in early 2026. Unlike GPT-4 (closed-source, expensive) or Llama (Meta-developed, Western-centric), Qwen 3 is specifically **optimized for multilingual tasks with exceptional Chinese language performance**. **Key differences**: **1) Multilingual excellence**: Trained on balanced English/Chinese corpus (40% English, 40% Chinese, 20% other languages). GPT-4 is ~90% English-dominant. **2) Apache 2.0 license**: Even more permissive than Llama's Community License—zero restrictions on commercial use, no MAU limits, full commercial freedom. **3) Asia-Pacific focus**: Understands Chinese idioms, cultural context, regional dialects (Cantonese, Taiwanese Mandarin nuances). Western models struggle with this. **4) Performance**: Qwen 3 72B scores 84.2% on MMLU (vs. GPT-4's 86.4%, Llama 4's 87.3%). Competitive but slightly behind on English benchmarks. **5) Chinese benchmarks**: Qwen 3 leads all models on C-Eval (Chinese knowledge test): 89.5% vs. GPT-4's 71.2%. **When to use Qwen 3**: Chinese language applications, Asia-Pacific market focus, need Apache 2.0 license freedom, multilingual customer support. **When to use Western models**: English-only tasks, maximum reasoning capability, established API ecosystems."
  },
  {
    question: "Is Qwen 3 free for commercial use and what are the licensing restrictions?",
    answer: "Yes, Qwen 3 uses the **Apache 2.0 license** - one of the most business-friendly open-source licenses. **What you CAN do**: **1) Unlimited commercial use**: Deploy in paid products, SaaS platforms, enterprise applications with zero fees to Alibaba. No revenue sharing, no royalties. **2) Modification**: Fine-tune, quantize, merge with other models, modify architecture completely. **3) Redistribution**: Share fine-tuned weights with clients, sell model-as-a-service, open-source your adaptations. **4) Patent protection**: Apache 2.0 includes explicit patent grant - Alibaba can't sue you for patent infringement related to Qwen 3. **5) No user limits**: Unlike Llama's 700M MAU restriction, Qwen 3 has ZERO user limits. Scale to billions of users freely. **What you MUST do**: **1) Attribution**: Include Apache 2.0 license notice in your distribution (standard for all Apache projects). **2) Disclaimers**: Note modifications if you change the code/weights. **Comparison with other licenses**: **GPT-4**: Closed-source, per-token fees forever, OpenAI controls your destiny. **Llama 4**: Meta Community License restricts 700M+ MAU applications, requires special permission. **DeepSeek R1**: MIT license (also permissive), but Chinese data sovereignty concerns. **Claude**: Closed-source API. **Verdict**: Apache 2.0 is the **gold standard** for commercial AI deployment - more permissive than Llama, safer than Chinese MIT licenses, infinitely better than closed APIs."
  },
  {
    question: "How does Qwen 3 perform on Chinese language tasks compared to GPT-4?",
    answer: "Qwen 3 **dominates all models** (including GPT-4, Claude, Llama) on Chinese language benchmarks: **C-Eval (Chinese knowledge test)**: Qwen 3: **89.5%**, GPT-4: 71.2%, Claude 3.5: 68.9%, Llama 4: 64.3%. **C3 (Chinese common sense reasoning)**: Qwen 3: **87.1%**, GPT-4: 69.4%. **Chinese translation (BLEU scores)**: Qwen 3 → English: **41.2**, GPT-4: 38.7. English → Qwen 3: **39.8**, GPT-4: 36.1. **Real-world advantages**: **1) Idiomatic expressions**: Understands 成语 (chengyu, 4-character idioms), 歇后语 (xiehouyu, allegorical sayings) that Western models translate literally (losing meaning). **2) Classical Chinese**: Qwen 3 reads 文言文 (wenyanwen, classical Chinese from ancient texts) with 85%+ accuracy. GPT-4 fails spectacularly (<40%). **3) Regional dialects**: Handles Cantonese, Taiwanese Mandarin, Singaporean Chinese variants. GPT-4 trained primarily on Mainland standard Mandarin. **4) Cultural context**: Understands Spring Festival (春节) vs. Chinese New Year nuances, Mid-Autumn Festival references, Red Packet (红包) customs in e-commerce. **Business impact**: A Hong Kong fintech company switched from GPT-4 to Qwen 3 for customer support chatbot. **Results**: Customer satisfaction: 78% → 91% (customers felt 'understood'), resolution rate: 68% → 84% (better comprehension of Cantonese-influenced queries), cost: $4,200/month → $600/month (self-hosted Qwen vs. GPT-4 API). **When GPT-4 still wins**: Pure English tasks, cutting-edge reasoning, multimodal (GPT-4V vs. Qwen's text-only)."
  },
  {
    question: "What are the hardware requirements to run Qwen 3 and deployment options?",
    answer: "**Qwen 3 hardware requirements** by model size: **Qwen 3 7B (7 billion parameters)**: **Inference**: 1x RTX 4090 (24GB VRAM) - $1,600. **Speed**: ~50 tokens/sec. **Quantized (4-bit)**: RTX 3090 (24GB) or even M2 Max MacBook Pro (32GB unified memory). **Best for**: Chatbots, content moderation, translation. **Qwen 3 14B**: **Inference**: 1x RTX 4090 (24GB) or 2x RTX 3090. **Speed**: ~30 tokens/sec. **Best for**: Document analysis, code generation, multilingual support. **Qwen 3 72B (flagship)**: **Inference**: 2x A100 (80GB) - $30K hardware or 4x RTX 4090 (quantized). **Speed**: ~12 tokens/sec on 2x A100. **Best for**: Enterprise applications, maximum Chinese language capability. **Cloud deployment options**: **Alibaba Cloud**: Native Qwen 3 inference at $0.08 per 1M tokens (cheaper than self-hosting for <50M tokens/month). DashScope API offers Qwen 3 with 1-click deployment. **AWS/Azure/GCP**: Use SageMaker, AzureML, or Vertex AI with Qwen 3 weights from HuggingFace. **RunPod/Lambda Labs**: Rent H100s for $2/hour, run Qwen 3 72B experiments affordably. **Ollama**: Local deployment on Mac/Windows/Linux with single command: `ollama run qwen3:72b`. Quantized versions run on M-series Macs. **Cost comparison**: 100M tokens/month processing: **Qwen 3 self-hosted (72B)**: $30K hardware + $500/month colocation = $36,500 year 1, $6,000/year thereafter. **GPT-4 API**: $3,000/month = $36,000/year forever. **Breakeven**: 12 months for Qwen vs. GPT-4."
  },
  {
    question: "Can Qwen 3 be fine-tuned for domain-specific tasks and what's the process?",
    answer: "Yes, Qwen 3 is designed for **easy fine-tuning** on domain-specific data. **Fine-tuning process**: **1) Data preparation**: Collect 1,000-50,000 examples of your target task. Format: instruction-response pairs (JSONL format). Example: Legal contract analysis - 10K contract excerpts + legal summaries. **2) Choose technique**: **Full fine-tuning**: Retrain all parameters (expensive, highest quality). **LoRA/QLoRA**: Train 0.1-1% of parameters (10x cheaper, 90% of quality). **P-tuning v2**: Prefix tuning (even cheaper, 80% of quality). **3) Training**: Qwen 3 7B fine-tuning: 2-8 hours on 1x A100, cost $20-80 (cloud GPU rental). Qwen 3 72B fine-tuning: 12-48 hours on 4x A100, cost $500-2,000. **4) Evaluation**: Test on holdout dataset. Good fine-tuning improves domain accuracy 15-40%. **5) Deployment**: Serve via vLLM, FastChat, or Ollama. **Real-world example**: A Chinese e-commerce platform fine-tuned Qwen 3 14B on 30,000 product descriptions + customer service transcripts. **Results**: Product categorization accuracy: 94% (vs. 78% with base GPT-4 on Chinese products), customer query resolution: 87% (vs. 71% with GPT-4), response time: <500ms (self-hosted vs. 1.5-3sec GPT-4 API latency). **Cost**: $8K fine-tuning (includes data labeling + 40 GPU hours) + $12K hardware = $20K one-time investment. **Savings**: Replaced $6K/month GPT-4 API costs = **payback in 3.3 months**. **Unique advantage**: Qwen 3 fine-tuning preserves Chinese language capabilities better than Western models (which 'forget' Chinese during English-focused fine-tuning)."
  }
]

export default function Qwen3AlibabaOpenSourceLlmPage() {

const schema = generateBlogPostSchema({
  title: metadata.title as string,
  description: metadata.description as string,
  slug: "qwen-3-alibaba-open-source-llm",
  publishedTime: metadata.openGraph?.publishedTime as string,
  modifiedTime: metadata.openGraph?.modifiedTime as string,
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
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 via-red-600/20 to-pink-600/20 opacity-30" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="relative max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-8">
            <Languages className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-orange-300">Multilingual Open Source</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Qwen 3 Alibaba Open Source LLM:
            <span className="block mt-3 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 text-transparent bg-clip-text">
              Complete Guide 2026
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-4xl">
            Master Qwen 3, Alibaba's powerful open-source multilingual LLM. Learn deployment, fine-tuning, Chinese language excellence, and commercial use with the freedom of Apache 2.0 licensing—all at zero cost.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700">
              <Sparkles className="w-5 h-5 text-orange-400" />
              <span className="text-sm text-gray-300">Published: Feb 28, 2026</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700">
              <span className="text-sm text-gray-300">By Anyro</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700">
              <span className="text-sm text-gray-300">9 min read</span>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/20 border border-orange-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Languages className="w-6 h-6 text-orange-400" />
                <h3 className="text-xl font-bold text-white">Multilingual Master</h3>
              </div>
              <p className="text-gray-300 text-sm">
                <strong className="text-orange-400">89.5% C-Eval score</strong> - Dominates Chinese language tasks, beating GPT-4 by 18 points
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-900/30 to-pink-900/20 border border-red-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Globe className="w-6 h-6 text-red-400" />
                <h3 className="text-xl font-bold text-white">Apache 2.0 License</h3>
              </div>
              <p className="text-gray-300 text-sm">
                <strong className="text-red-400">Zero restrictions</strong> - No MAU limits, unlimited commercial use, full patent protection
              </p>
            </div>
            <div className="bg-gradient-to-br from-pink-900/30 to-orange-900/20 border border-pink-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Brain className="w-6 h-6 text-pink-400" />
                <h3 className="text-xl font-bold text-white">Competitive Performance</h3>
              </div>
              <p className="text-gray-300 text-sm">
                <strong className="text-pink-400">84.2% MMLU</strong> - Approaches GPT-4 quality at fraction of cost for Asia-Pacific markets
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
              Western AI models have a Chinese problem: <strong className="text-white">GPT-4 scores 71% on Chinese knowledge tests vs. 86% on English, fails to understand cultural idioms, and stumbles on Classical Chinese text</strong>. For the 1.4 billion Mandarin speakers globally—plus millions using Cantonese, Taiwanese, and other Chinese variants—these models feel foreign and often miss the mark entirely.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mt-6">
              <strong className="text-white">Qwen 3</strong> (通义千问, 'Tongyi Qianwen') from Alibaba Cloud solves this with a fundamentally different approach: <em>balanced multilingual training</em> (40% English, 40% Chinese, 20% other languages) that produces a model equally fluent in both Western and Asian contexts. With <strong className="text-white">Apache 2.0 licensing</strong>, zero restrictions on commercial use, and performance rivaling GPT-4 on Chinese tasks while approaching it on English—all at zero per-token cost—Qwen 3 is the obvious choice for Asia-Pacific markets. This is your complete 2026 guide.
            </p>
          </div>

          {/* Benchmark Comparison */}
          <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-700 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Performance Benchmarks: Qwen 3 vs. Global Models</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="text-left py-3 px-4 text-gray-400">Benchmark</th>
                    <th className="text-left py-3 px-4 text-orange-400">Qwen 3 72B</th>
                    <th className="text-left py-3 px-4 text-gray-400">GPT-4</th>
                    <th className="text-left py-3 px-4 text-gray-400">Llama 4 70B</th>
                    <th className="text-left py-3 px-4 text-gray-400">Claude 3.5</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">MMLU (English knowledge)</td>
                    <td className="py-3 px-4 text-orange-400 font-semibold">84.2%</td>
                    <td className="py-3 px-4">86.4%</td>
                    <td className="py-3 px-4">87.3%</td>
                    <td className="py-3 px-4">88.7%</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">C-Eval (Chinese knowledge)</td>
                    <td className="py-3 px-4 text-green-400 font-semibold">89.5%</td>
                    <td className="py-3 px-4">71.2%</td>
                    <td className="py-3 px-4">64.3%</td>
                    <td className="py-3 px-4">68.9%</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">HumanEval (Coding)</td>
                    <td className="py-3 px-4 text-orange-400 font-semibold">82.7%</td>
                    <td className="py-3 px-4">88.0%</td>
                    <td className="py-3 px-4">89.0%</td>
                    <td className="py-3 px-4">92.0%</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">GSM8K (Math)</td>
                    <td className="py-3 px-4 text-orange-400 font-semibold">91.4%</td>
                    <td className="py-3 px-4">92.0%</td>
                    <td className="py-3 px-4">95.1%</td>
                    <td className="py-3 px-4">96.4%</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4">License</td>
                    <td className="py-3 px-4 text-green-400">Apache 2.0</td>
                    <td className="py-3 px-4 text-red-400">Closed</td>
                    <td className="py-3 px-4 text-yellow-400">Community</td>
                    <td className="py-3 px-4 text-red-400">Closed</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Cost per 1M tokens</td>
                    <td className="py-3 px-4 text-green-400">$0 (self-hosted)</td>
                    <td className="py-3 px-4 text-red-400">$10-30</td>
                    <td className="py-3 px-4 text-green-400">$0 (self-hosted)</td>
                    <td className="py-3 px-4 text-red-400">$3-15</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 text-sm mt-4 italic">
              * Benchmarks from February 2026. Qwen 3 excels on Chinese tasks, competitive on English tasks.
            </p>
          </div>

          {/* Use Cases */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-8">Perfect Use Cases for Qwen 3</h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-orange-900/30 to-red-900/20 border border-orange-500/30 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">🇨🇳 Chinese-First Applications</h3>
                <p className="text-gray-300 mb-4">
                  Any product serving Chinese-speaking users: e-commerce platforms (Taobao, JD.com clones), customer support chatbots for Hong Kong/Taiwan/Singapore markets, Chinese legal/medical document analysis.
                </p>
                <div className="bg-zinc-900/50 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Example: Hong Kong fintech customer support</p>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Switched from GPT-4 to Qwen 3 14B (self-hosted)</li>
                    <li>• Customer satisfaction: 78% → 91% (better cultural understanding)</li>
                    <li>• Query resolution: 68% → 84% (handles Cantonese idioms)</li>
                    <li>• Cost: $4,200/month → $600/month (14x reduction)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-900/30 to-pink-900/20 border border-red-500/30 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-red-400 mb-4">🌏 Asia-Pacific Multilingual Support</h3>
                <p className="text-gray-300 mb-4">
                  Companies operating across APAC (China, Japan, Korea, SEA): multilingual customer service, cross-border e-commerce translation, regional content localization.
                </p>
                <div className="bg-zinc-900/50 rounded-lg p-4">
                  <p className="text-sm text-gray-400 mb-2">Qwen 3 language support (29 languages)</p>
                  <p className="text-sm text-gray-300">
                    Chinese (Simplified/Traditional), English, Japanese, Korean, Vietnamese, Thai, Indonesian, Malay, Spanish, French, German, Russian, Arabic, Hindi, Portuguese, Italian, Polish, Ukrainian, Dutch, Greek, Romanian, Turkish, Persian, Czech, Swedish, Hungarian, Finnish, Norwegian, Danish
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-900/30 to-orange-900/20 border border-pink-500/30 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-pink-400 mb-4">🔐 Data Sovereignty & Privacy</h3>
                <p className="text-gray-300 mb-4">
                  Organizations with Chinese data residency requirements: self-host Qwen 3 on Alibaba Cloud (China regions), avoid sending sensitive data to US-based APIs (GPT-4/Claude).
                </p>
                <div className="bg-zinc-900/50 rounded-lg p-4">
                  <p className="text-sm text-gray-300">
                    <strong className="text-white">Compliance advantage:</strong> Chinese cybersecurity laws (CSL, PIPL) require data localization. Qwen 3 deployed on Alibaba Cloud Beijing/Shanghai regions ensures full compliance without API data export.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <FAQSchema faqs={faqs} />
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-orange-900/30 via-red-900/30 to-pink-900/30 border border-orange-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Deploy Multilingual AI with Qwen 3?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Learn how to build complete AI automation systems (including multilingual deployment, Chinese language optimization, and Asia-Pacific market strategies) in our AI Automations course—designed for global teams targeting diverse markets.
            </p>
            <Link
              href="/courses#ai-automations"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-orange-700 hover:to-red-700 transition-all shadow-lg hover:shadow-orange-500/25"
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
