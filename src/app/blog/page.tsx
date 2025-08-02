'use client'

import Link from 'next/link'
import { useScrollAnimation, useScrollAnimations } from '@/hooks/useScrollAnimation'
import { calculateBlogMetrics, formatBlogDate } from '@/utils/blogMetrics'
import { useEffect, useState } from 'react'
import ScrollAnimation, { StaggeredAnimation, CountUp } from '@/components/ScrollAnimation'
import { TiltCard, SpotlightCard } from '@/components/HoverEffects'
import AnimatedText, { GradientText } from '@/components/AnimatedText'
import AnimatedGradientText from '@/components/magicui/animated-gradient-text'
import NumberTicker from '@/components/magicui/number-ticker'
import ShimmerButton from '@/components/magicui/shimmer-button'
import WordRotate from '@/components/magicui/word-rotate'
import BlurIn from '@/components/magicui/blur-in'
import { ChevronRight } from 'lucide-react'

// News articles data extracted from the newsarticles directory
const newsArticles = [
  {
    title: "Telegram Bot Monetization: The Ultimate Guide to Automated Revenue Generation",
    category: "MARKETING",
    categoryColor: "red",
    excerpt: "Discover how successful creators earn $5K-50K monthly with Telegram bot monetization. Complete guide covering payment processing, subscriber psychology, and proven revenue strategies.",
    description: "Comprehensive guide to Telegram bot monetization with real case studies, advanced tools, and step-by-step implementation strategies.",
    readTime: "18 min",
    date: "2025-08-02",
    slug: "telegram-bot-monetization",
    keywords: ["telegram bot monetization", "content creator income", "automation revenue", "subscription business", "digital marketing"]
  },
  {
    title: "AI Assistant Showdown: ChatGPT vs Gemini vs Perplexity vs Claude",
    category: "AI NEWS",
    categoryColor: "purple",
    excerpt: "The top AI assistants—ChatGPT, Gemini, Perplexity, and Claude—each shine in different areas like productivity, research, real-time search, and creative writing.",
    description: "Comprehensive comparison of the leading AI assistants and their unique strengths for different use cases.",
    readTime: "8 min",
    date: "2025-06-09",
    slug: "ai-assistant-showdown-chatgpt-gemini-perplexity-claude",
    keywords: ["ai assistants", "chatgpt", "gemini", "perplexity", "claude"]
  },
  {
    title: "OpenAI's 03 Pro: Brilliant Strategist or Overthinking Giant?",
    category: "TECH NEWS",
    categoryColor: "blue",
    excerpt: "OpenAI's 03 Pro is slow and costly, but delivers deep, strategic reasoning when given time. From outperforming benchmarks to offering transformative business insights.",
    description: "In-depth analysis of OpenAI's latest 03 Pro model and its strategic capabilities versus performance trade-offs.",
    readTime: "12 min",
    date: "2025-06-13",
    slug: "openai-03-pro-brilliant-strategist-overthinking-giant",
    keywords: ["openai", "03 pro", "ai reasoning", "strategic ai", "performance analysis"]
  },
  {
    title: "Alibaba's QwQ-32B vs DeepSeek R1: Complete AI Model Comparison",
    category: "TECH NEWS", 
    categoryColor: "green",
    excerpt: "Alibaba's QwQ-32B-Preview challenges DeepSeek R1 in reasoning tasks with 32.8B parameters and Apache 2.0 licensing. Complete performance analysis and benchmark comparison.",
    description: "Comprehensive comparison of Alibaba's QwQ-32B and DeepSeek R1 models covering performance, licensing, and real-world applications.",
    readTime: "15 min",
    date: "2025-01-20",
    slug: "alibaba-qwq-32b-vs-deepseek-r1",
    keywords: ["alibaba qwq-32b", "deepseek r1", "ai model comparison", "reasoning models", "open source ai"]
  },
  {
    title: "Google Gemini 2.5 Pro Review: Free AI Model That Beats GPT-4.5 (2025 Complete Guide)",
    category: "AI NEWS",
    categoryColor: "blue",
    excerpt: "Google's completely free Gemini 2.5 Pro outperforms GPT-4.5, DeepSeek R1, and Claude 3.7 in multiple benchmarks. This changes everything about AI economics.",
    description: "Complete guide to Google's free Gemini 2.5 Pro model that's disrupting the AI industry with premium performance at zero cost.",
    readTime: "16 min",
    date: "2025-03-30",
    slug: "google-gemini-2-5-pro-game-changer",
    keywords: ["google gemini 2.5 pro", "free ai model", "ai comparison", "google ai studio", "ai performance"]
  },
  {
    title: "The Future of AI Computer Control: Microsoft OmniParser V2 & OmniTool Complete Guide (2025)",
    category: "TECH TRENDS",
    categoryColor: "purple",
    excerpt: "Microsoft's OmniParser V2 and OmniTool represent the biggest leap toward autonomous AI computer control. These open-source tools enable AI agents to see, understand, and control computers with 95% accuracy.",
    description: "Complete guide to Microsoft's revolutionary OmniParser V2 and OmniTool for AI-powered computer control and automation.",
    readTime: "18 min",
    date: "2025-02-01",
    slug: "future-ai-powered-computer-control",
    keywords: ["microsoft omniparser", "omnitool", "ai computer control", "automation tools", "ai agents", "computer vision"]
  },
  {
    title: "Agno Framework Review: Build Lightning-Fast AI Agents in 2025 (5000x Faster Than LangGraph)",
    category: "AI FRAMEWORKS",
    categoryColor: "blue", 
    excerpt: "Agno delivers 5,000x faster agent instantiation and 50x less memory usage while maintaining enterprise-grade performance. This isn't just an improvement—it's a complete paradigm shift in AI agent development.",
    description: "Complete review of Agno, the revolutionary open-source AI agent framework that outperforms LangGraph and LangChain.",
    readTime: "16 min",
    date: "2025-03-14",
    slug: "agno-open-source-ai-agent-framework",
    keywords: ["agno framework", "ai agents", "langgraph alternative", "ai agent development", "open source ai", "agent framework"]
  },
  {
    title: "Builder.ai: From Billion-Dollar AI Darling to Bust — What Went Wrong?",
    category: "AI ANALYSIS",
    categoryColor: "red",
    excerpt: "Builder.ai, once valued at $1.5 billion and backed by Microsoft and SoftBank, collapsed after failing to deliver on its no-code AI promises and facing fraud allegations.",
    description: "Complete analysis of Builder.ai's spectacular collapse from $1.5B valuation to bankruptcy, revealing fraud, fake AI claims, and lessons for the AI industry.",
    readTime: "21 min",
    date: "2025-06-15",
    slug: "builderai-billion-dollar-ai-bust",
    keywords: ["builder.ai", "ai fraud", "startup failure", "microsoft", "softbank", "no-code platforms"]
  },
  {
    title: "Llamacon 2025 Recap: How Zuckerberg and Nadella Are Reshaping AI Software Development Forever",
    category: "AI INSIGHTS",
    categoryColor: "blue",
    excerpt: "The future of software development was revealed at Llamacon 2025, and it's more radical than anyone imagined. Meta CEO Mark Zuckerberg and Microsoft CEO Satya Nadella outlined a world where AI agents write 50% of code.",
    description: "Complete analysis of Llamacon 2025 revelations from Zuckerberg and Nadella on AI-first development, autonomous research agents, and the machine-first era of software creation.",
    readTime: "24 min",
    date: "2025-05-07",
    slug: "llamacon-2025-recap-zuckerberg-nadella-future-ai-software",
    keywords: ["llamacon 2025", "zuckerberg", "nadella", "ai development", "machine first era", "autonomous agents", "software development"]
  },
  {
    title: "The Ultimate AI Showdown 2025: ChatGPT vs Gemini vs Perplexity vs Grok - Complete Performance Analysis",
    category: "AI INSIGHTS",
    categoryColor: "blue",
    excerpt: "After comprehensive testing of ChatGPT, Google Gemini, Perplexity, and Grok through 20+ real-world challenges, discover which AI assistant delivers the most value for different user types and use cases.",
    description: "Comprehensive 2025 AI chatbot comparison: ChatGPT vs Gemini vs Perplexity vs Grok. Real-world benchmarks, performance analysis, and expert recommendations for choosing the best AI assistant.",
    readTime: "28 min",
    date: "2025-06-30",
    slug: "ultimate-ai-showdown-chatgpt-gemini-perplexity-grok",
    keywords: ["ai comparison 2025", "chatgpt vs gemini", "perplexity vs grok", "ai assistant comparison", "best ai chatbot", "ai performance analysis"]
  },
  {
    title: "autoMate Review: Free Open-Source Alternative to Manus AI - Complete Setup Guide & Performance Analysis (2025)",
    category: "AI TOOLS",
    categoryColor: "green",
    excerpt: "autoMate emerges as a powerful open-source alternative to Manus AI, offering computer control capabilities, AI-powered automation, and user-friendly interface. Built on Microsoft's Omni Parser V2 with full system interaction.",
    description: "Complete autoMate review: Free open-source AI automation tool vs Manus AI. Installation guide, system requirements, performance analysis, and real-world use cases for developers and AI enthusiasts.",
    readTime: "22 min",
    date: "2025-03-28",
    slug: "automate-free-open-source-alternative-manus-ai",
    keywords: ["automate tool", "manus ai alternative", "open source automation", "ai powered automation", "computer control ai", "microsoft omni parser"]
  },
  {
    title: "Augment Code: The Free AI Coding Assistant That Automates Your Codebase - Complete Review & Setup Guide (2025)",
    category: "AI TOOLS",
    categoryColor: "green",
    excerpt: "Discover Augment Code, the free AI coding assistant with deep contextual awareness. Get 3,000 free messages monthly, unlimited code completions, and revolutionary Next Edit automation for complex codebases.",
    description: "Complete Augment Code review: Free AI coding assistant with deep contextual awareness, Slack integration, Next Edit automation, and enterprise security. Perfect for large development teams.",
    readTime: "25 min",
    date: "2025-03-19",
    slug: "augment-code-free-ai-coding-assistant-that-automates-codebase",
    keywords: ["augment code", "ai coding assistant", "free coding tools", "contextual code completion", "slack integration", "next edit automation"]
  },
  {
    title: "Google AI Studio Update: A Powerful, Free All-in-One Platform for Developers and Creators - Complete Developer Guide (2025)",
    category: "AI PLATFORMS",
    categoryColor: "blue",
    excerpt: "Discover Google AI Studio's game-changing update: free Gemini 2.5 Flash model, built-in code editor, video generation, and 10+ starter templates. Complete developer guide with setup tutorials.",
    description: "Complete Google AI Studio developer guide: Free Gemini 2.5 Flash model, built-in VS Code editor, video generation, 10+ production templates, and enterprise deployment. Everything developers need to know.",
    readTime: "28 min",
    date: "2025-04-30",
    slug: "google-ai-studio-update-powerful-free-all-in-one-platform-developers-creators",
    keywords: ["google ai studio", "gemini 2.5 flash", "free ai development", "ai platform", "google ai models", "ai development tools"]
  },
  {
    title: "Revolutionizing Developer Productivity: Windsurf Wave 2",
    category: "DEVELOPMENT TOOLS",
    categoryColor: "blue",
    excerpt: "Windsurf Wave 2 introduces revolutionary AI features: intelligent web search, automated memories, seamless dev containers, and context-aware development that eliminates productivity bottlenecks.",
    description: "Complete guide to Windsurf Wave 2's game-changing features: Cascade AI with automated learning, real-time web search, development environment integration, and 260% productivity improvements.",
    readTime: "18 min",
    date: "2025-01-26",
    slug: "revolutionizing-developer-productivity-windsurf-wave-2",
    keywords: ["windsurf ide", "cascade ai", "developer productivity", "ai coding assistant", "development tools", "context switching"]
  },
  {
    title: "Gemini Canvas: Google's Free AI Coding Revolution - Complete Developer's Guide 2025",
    category: "DEVELOPMENT TOOLS",
    categoryColor: "purple",
    excerpt: "Master Google Gemini Canvas, the completely free AI coding assistant that revolutionizes development with real-time code generation, multi-modal understanding, and visual debugging capabilities.",
    description: "Comprehensive guide to Google Gemini Canvas: zero-configuration development environment with AI-powered debugging, real-time preview, collaborative features, and 400-600% productivity improvements.",
    readTime: "22 min",
    date: "2025-03-23",
    slug: "gemini-canvas-googles-fully-free-ai-coder-revolutionizing-development",
    keywords: ["gemini canvas", "google ai", "free coding assistant", "real-time development", "multi-modal ai", "visual debugging", "development tools"]
  },
  {
    title: "Dart AI: The Free Agentic Project Manager That Automates Everything",
    category: "AI TOOLS",
    categoryColor: "blue",
    excerpt: "Dart AI revolutionizes project management with autonomous task execution, intelligent planning, and seamless team collaboration. Completely free with enterprise-grade features.",
    description: "Complete guide to Dart AI - the free agentic project manager that automates workflows, manages tasks autonomously, and integrates with your entire tech stack.",
    readTime: "17 min",
    date: "2025-01-10",
    slug: "dart-ai-free-agentic-project-manager",
    keywords: ["dart ai", "agentic project manager", "free project management", "ai automation", "workflow automation"]
  },
  {
    title: "DeepAgent Update: The God-Tier AI Agent That Can Build and Automate Almost Anything",
    category: "AI AGENTS",
    categoryColor: "purple",
    excerpt: "DeepAgent's latest update brings god-tier capabilities for building and automating complex systems. From code generation to infrastructure management, it does everything.",
    description: "Complete DeepAgent update guide - the AI agent that builds applications, automates workflows, and manages infrastructure with near-human intelligence.",
    readTime: "20 min",
    date: "2025-01-18",
    slug: "deepagent-update-god-tier-ai-agent",
    keywords: ["deepagent", "ai agent", "automation", "code generation", "infrastructure management"]
  },
  {
    title: "Anthropic Launches Claude 4: A Strategic Pivot from Chatbots to Agentic Coding Infrastructure",
    category: "AI NEWS",
    categoryColor: "purple",
    excerpt: "Anthropic's strategic shift towards agentic coding infrastructure with Claude 4, moving beyond traditional chatbot capabilities.",
    description: "Analysis of Anthropic's Claude 4 launch and strategic pivot to agentic coding infrastructure.",
    readTime: "10 min",
    date: "2025-01-15",
    slug: "anthropic-claude-4-agentic-coding-infrastructure",
    keywords: ["anthropic", "claude 4", "agentic ai", "coding infrastructure", "ai development"]
  },
  {
    title: "DeepSeek Unveils Revolutionary AI Advancements with the R2 Open-Source Model",
    category: "TECH NEWS",
    categoryColor: "green",
    excerpt: "DeepSeek's groundbreaking R2 model pushes the boundaries of open-source AI with unprecedented performance improvements.",
    description: "Comprehensive analysis of DeepSeek's R2 model and its revolutionary impact on open-source AI development.",
    readTime: "14 min",
    date: "2025-01-25",
    slug: "deepseek-r2-open-source-model-revolutionary-ai",
    keywords: ["deepseek", "r2 model", "open source ai", "ai advancement", "deepseek r2"]
  },
  {
    title: "Manus AI: The First-Ever General AI Agent That Can Automate Your Life",
    category: "AI AGENTS",
    categoryColor: "blue",
    excerpt: "Manus AI represents a breakthrough in general AI agents, capable of automating complex workflows across multiple platforms and applications.",
    description: "Complete guide to Manus AI - the revolutionary general AI agent for comprehensive life automation.",
    readTime: "16 min",
    date: "2025-02-01",
    slug: "manus-ai-first-general-ai-agent-automate-life",
    keywords: ["manus ai", "general ai agent", "life automation", "ai workflow", "intelligent automation"]
  },
  {
    title: "LLaMA 4: The Open-Source Powerhouse Redefining AI",
    category: "OPEN SOURCE",
    categoryColor: "green",
    excerpt: "Meta's LLaMA 4 sets new standards for open-source AI with unprecedented performance and accessibility.",
    description: "In-depth analysis of Meta's LLaMA 4 and its transformative impact on the open-source AI ecosystem.",
    readTime: "18 min",
    date: "2025-02-10",
    slug: "llama-4-open-source-powerhouse-redefining-ai",
    keywords: ["llama 4", "meta ai", "open source llm", "facebook ai", "large language model"]
  },
  {
    title: "DeepSeek Janus Pro 7B: A Unified Multimodal Powerhouse",
    category: "AI MODELS",
    categoryColor: "purple",
    excerpt: "DeepSeek's Janus Pro 7B combines vision and language processing in a unified architecture, delivering exceptional multimodal capabilities.",
    description: "Comprehensive review of DeepSeek Janus Pro 7B - the unified multimodal AI model revolutionizing vision-language tasks.",
    readTime: "15 min",
    date: "2025-02-15",
    slug: "deepseek-janus-pro-7b-unified-multimodal-powerhouse",
    keywords: ["deepseek janus", "multimodal ai", "vision language model", "janus pro 7b", "unified architecture"]
  },
  {
    title: "Full-Stack App Development with Gemini 2.0 Pro & Bolt.DIY",
    category: "DEVELOPMENT",
    categoryColor: "blue",
    excerpt: "Build complete full-stack applications using Gemini 2.0 Pro and Bolt.DIY - a revolutionary combination for rapid development.",
    description: "Step-by-step guide to full-stack development using Google's Gemini 2.0 Pro and Bolt.DIY platform.",
    readTime: "22 min",
    date: "2025-02-20",
    slug: "full-stack-app-development-gemini-2-pro-bolt-diy",
    keywords: ["gemini 2.0 pro", "bolt.diy", "full stack development", "rapid development", "ai development"]
  },
  {
    title: "GPT-4.1 vs Claude Sonnet 3.7: Is OpenAI's Latest Model a Game-Changer?",
    category: "AI COMPARISON",
    categoryColor: "purple",
    excerpt: "OpenAI's GPT-4.1 delivers impressive performance at 80% lower cost than Claude Sonnet 3.7. Real-world testing reveals surprising strengths.",
    description: "Comprehensive comparison of GPT-4.1 and Claude Sonnet 3.7 performance, pricing, and use cases.",
    readTime: "18 min",
    date: "2025-04-14",
    slug: "gpt-4-1-vs-claude-sonnet-3-7-comparison",
    keywords: ["gpt 4.1", "claude sonnet 3.7", "ai model comparison", "openai", "anthropic"]
  },
  {
    title: "Gemini 2.5 Flash: Google's Budget AI Model That Rivals the Giants",
    category: "AI NEWS",
    categoryColor: "blue",
    excerpt: "Google's Gemini 2.5 Flash offers blazing speed and unbelievably low pricing at just $0.60/M output tokens while delivering performance that rivals models costing 10x more.",
    description: "Complete review of Google Gemini 2.5 Flash - the budget AI model that delivers premium performance at 90% lower cost.",
    readTime: "19 min",
    date: "2025-04-20",
    slug: "gemini-2-5-flash-budget-ai-model",
    keywords: ["gemini 2.5 flash", "google gemini", "budget ai model", "cheap ai api", "gemini pricing"]
  },
  {
    title: "Qwen 3: Alibaba's Open-Source LLM Leap",
    category: "OPEN SOURCE",
    categoryColor: "green",
    excerpt: "Alibaba's Qwen 3 features 235B parameters with MoE architecture, outperforms GPT-4 in coding, beats LLaMA 4 in reasoning, and remains completely free under Apache 2.0 license.",
    description: "Complete guide to Alibaba's Qwen 3 - the open-source LLM that's reshaping the AI landscape with superior performance and true commercial freedom.",
    readTime: "22 min",
    date: "2025-05-13",
    slug: "qwen-3-alibaba-open-source-llm",
    keywords: ["qwen 3", "alibaba qwen", "open source llm", "apache 2.0", "mixture of experts"]
  },
  {
    title: "Revolutionizing Full-Stack Development: The New Composer Agent in Code LLM",
    category: "AI TOOLS",
    categoryColor: "purple",
    excerpt: "Abacus AI's Composer Agent revolutionizes development by building complete full-stack applications from a single prompt. Multi-model AI support, autonomous coding, free trial available.",
    description: "Complete guide to Composer Agent in Code LLM - the AI tool that generates full applications autonomously with advanced language models.",
    readTime: "20 min",
    date: "2025-03-02",
    slug: "composer-agent-code-llm-full-stack",
    keywords: ["composer agent", "code llm", "abacus ai", "full stack development", "autonomous coding"]
  },
  {
    title: "RooCode v3.3 Update – A Cline Alternative",
    category: "DEVELOPMENT TOOLS",
    categoryColor: "green",
    excerpt: "RooCode v3.3 emerges as a powerful alternative to Cline, offering enhanced features for modern development workflows.",
    description: "Comprehensive review of RooCode v3.3 and how it compares to Cline for development automation.",
    readTime: "13 min",
    date: "2025-03-10",
    slug: "roocode-v3-3-update-cline-alternative",
    keywords: ["roocode", "cline alternative", "development tools", "coding assistant", "roocode v3.3"]
  },
  {
    title: "The All-In-One RAG Platform for AI Document Parsing, Embeddings, and Vector Search",
    category: "AI PLATFORMS",
    categoryColor: "purple",
    excerpt: "Revolutionary AI infrastructure platform combining intelligent document parsing, advanced embeddings, and lightning-fast vector search in one unified solution.",
    description: "Complete guide to the all-in-one RAG platform transforming AI document processing and search capabilities.",
    readTime: "14 min",
    date: "2025-02-05",
    slug: "vectorize-all-in-one-rag-platform",
    keywords: ["rag platform", "document parsing", "vector search", "ai embeddings", "document ai"]
  },
  {
    title: "The Future of AI Research: Exploring DeepSeek-R1 & Open-Source AI Research Tools",
    category: "AI RESEARCH",
    categoryColor: "green",
    excerpt: "Discover how DeepSeek-R1 and Browser Use are revolutionizing AI research with 89% accuracy, unlimited queries, and complete open-source freedom.",
    description: "Complete guide to DeepSeek-R1 and Browser Use - revolutionary open-source AI research tools that rival OpenAI Deep Research.",
    readTime: "19 min",
    date: "2025-01-03",
    slug: "deepseek-r1-browser-use-ai-research",
    keywords: ["deepseek r1", "browser use", "ai research tools", "open source ai", "deep research alternative"]
  },
]

const blogPosts = [
  {
    title: "Instagram Growth Hacks That Actually Work in 2025",
    category: "GROWTH GUIDE",
    categoryColor: "blue",
    excerpt: "Discover the underground Instagram growth strategies that top creators don't want you to know. From hashtag psychology to algorithm manipulation, I reveal the exact tactics that gained me 127K real followers.",
    description: "Proven strategies to grow your Instagram following organically and sustainably using advanced growth hacking techniques.",
    readTime: "12 min",
    date: "2025-01-01",
    slug: "instagram-growth-2025",
    keywords: ["instagram growth", "instagram followers", "grow instagram", "instagram algorithm", "instagram hacks"]
  },
  {
    title: "Instagram Reels Mastery: The Ultimate Guide to Viral Content",
    category: "CONTENT STRATEGY",
    categoryColor: "purple",
    excerpt: "Master the art of creating Instagram Reels that go viral consistently. Learn the psychology behind viral content, optimal posting times, and the exact formulas used by million-follower accounts.",
    description: "Complete guide to creating viral Instagram Reels that drive massive engagement and follower growth.",
    readTime: "14 min",
    date: "2025-01-11",
    slug: "instagram-reels-guide",
    keywords: ["instagram reels", "viral reels", "instagram content", "reels strategy", "viral content"]
  },
  {
    title: "TikTok Growth Hacks: 0 to 100K Followers in 90 Days",
    category: "GROWTH GUIDE",
    categoryColor: "pink",
    excerpt: "The exact blueprint I used to explode on TikTok, gaining 127K followers in just 90 days. No paid ads, no buying followers - just pure algorithmic growth strategies that work.",
    description: "Step-by-step TikTok growth strategy to reach 100K followers in 90 days using proven viral techniques.",
    readTime: "13 min",
    date: "2025-01-12",
    slug: "tiktok-growth-hacks",
    keywords: ["tiktok growth", "tiktok followers", "tiktok algorithm", "viral tiktok", "tiktok strategy"]
  },
  {
    title: "The Complete ComfyUI Workflow Library: 50+ Professional Templates",
    category: "RESOURCES",
    categoryColor: "purple",
    excerpt: "Access my personal collection of ComfyUI workflows worth $5,000+. From photorealistic portraits to abstract art, these templates generate stunning AI visuals in minutes.",
    description: "Professional ComfyUI workflow templates for creating stunning AI art quickly and efficiently.",
    readTime: "20 min",
    date: "2025-01-13",
    slug: "comfyui-workflow-library",
    keywords: ["comfyui", "ai art", "stable diffusion", "ai workflows", "comfyui templates"]
  },
  {
    title: "YouTube Shorts: The Secret to 1M Views in 30 Days",
    category: "VIDEO STRATEGY",
    categoryColor: "red",
    excerpt: "Crack the YouTube Shorts algorithm with my proven formula. I'll show you exactly how I generated 127M views and gained 847K subscribers using specific psychological triggers.",
    description: "Comprehensive YouTube Shorts strategy to reach millions of views and build a massive following fast.",
    readTime: "15 min",
    date: "2025-01-14",
    slug: "youtube-shorts-strategy",
    keywords: ["youtube shorts", "youtube algorithm", "viral youtube", "youtube views", "youtube growth"]
  },
  {
    title: "Scale Your Content Creation: 100 Posts in 2 Hours",
    category: "PRODUCTIVITY",
    categoryColor: "blue",
    excerpt: "My exact system for creating a month's worth of content in a single afternoon. Includes templates, AI prompts, and the batch creation workflow that saves me 20+ hours weekly.",
    description: "Revolutionary content batching system to create 100+ posts in just 2 hours using AI and automation.",
    readTime: "12 min",
    date: "2025-01-15",
    slug: "scale-content-creation",
    keywords: ["content creation", "content batching", "social media content", "content strategy", "productivity"]
  },
  {
    title: "The 30-Day Social Media Calendar That Tripled My Sales",
    category: "CONTENT STRATEGY",
    categoryColor: "green",
    excerpt: "Copy my exact posting schedule that took me from $14K to $147K/month. Every post type, timing, and psychological trigger mapped out for maximum conversions.",
    description: "Strategic 30-day social media calendar proven to triple sales through optimized content scheduling.",
    readTime: "11 min",
    date: "2025-01-16",
    slug: "social-media-calendar",
    keywords: ["social media calendar", "content calendar", "social media strategy", "content planning", "sales optimization"]
  },
  {
    title: "Digital Product Launch Strategy: From Idea to $10K in 30 Days",
    category: "LAUNCH GUIDE",
    categoryColor: "blue",
    excerpt: "The exact launch sequence I use to generate $10K+ with every digital product. From pre-launch hype to post-launch automation, this is the complete playbook.",
    description: "Proven digital product launch framework to generate $10K+ in revenue within 30 days.",
    readTime: "17 min",
    date: "2025-01-17",
    slug: "product-launch-strategy",
    keywords: ["product launch", "digital products", "launch strategy", "online business", "product marketing"]
  },
  {
    title: "AI Automation Guide: Build Your $10K/Month Business Machine",
    category: "AUTOMATION",
    categoryColor: "purple",
    excerpt: "Complete blueprint for automating your entire business with AI. I reveal the exact tools, workflows, and systems that run my $88K/month business in just 4 hours per day.",
    description: "Comprehensive AI automation blueprint to build a $10K/month business that runs itself.",
    readTime: "18 min",
    date: "2025-01-18",
    slug: "ai-automation-guide",
    keywords: ["ai automation", "business automation", "ai tools", "automated business", "passive income"]
  },
  {
    title: "The Ultimate Guide to Instagram Monetization: 7 Proven Strategies",
    category: "MONETIZATION",
    categoryColor: "green",
    excerpt: "Turn your Instagram followers into multiple revenue streams. From sponsored posts to digital products, learn the exact strategies that generate $50K+ monthly from Instagram.",
    description: "7 proven Instagram monetization strategies to create multiple revenue streams from your following.",
    readTime: "15 min",
    date: "2025-01-19",
    slug: "instagram-monetization-guide",
    keywords: ["instagram monetization", "make money instagram", "instagram income", "influencer marketing", "instagram business"]
  },
  {
    title: "Email Marketing Mastery: Turn Subscribers into $100K Revenue",
    category: "MARKETING",
    categoryColor: "blue",
    excerpt: "The email sequences and psychological triggers that generate 40% of my total revenue. Includes my exact templates, automation workflows, and conversion optimization tricks.",
    description: "Advanced email marketing strategies and sequences that convert subscribers into $100K+ revenue.",
    readTime: "14 min",
    date: "2025-01-20",
    slug: "email-marketing-guide",
    keywords: ["email marketing", "email automation", "email sequences", "email revenue", "marketing automation"]
  },
  {
    title: "High-Income Skills for the AI Era: What to Learn in 2025",
    category: "SKILLS",
    categoryColor: "purple",
    excerpt: "Future-proof your career with these high-demand skills. I analyze market data to reveal which AI-era skills command $150+ per hour and how to master them fast.",
    description: "Essential high-income skills to master in the AI era for maximum career growth and earning potential.",
    readTime: "12 min",
    date: "2025-01-21",
    slug: "ai-era-skills",
    keywords: ["ai skills", "high income skills", "future skills", "ai careers", "skill development"]
  },
  {
    title: "How I Built a Digital Product Empire That Makes $50K/Month",
    category: "CASE STUDY",
    categoryColor: "green",
    excerpt: "Behind the scenes of my $2.3M digital product empire. From my first $19 template to scaling to $50K/month, I reveal everything including profit margins and systems.",
    description: "Complete case study of building a $50K/month digital product empire from scratch.",
    readTime: "16 min",
    date: "2025-01-22",
    slug: "digital-products-empire",
    keywords: ["digital products", "online business", "passive income", "digital product business", "case study"]
  },
  {
    title: "Why 2025 is the Best Time to Start Creating AI Content",
    category: "OPPORTUNITY",
    categoryColor: "pink",
    excerpt: "The AI content gold rush is here. Market analysis shows unprecedented opportunity for early movers. Learn why starting now positions you for massive success.",
    description: "Market analysis revealing why 2025 presents the biggest opportunity for AI content creators.",
    readTime: "10 min",
    date: "2025-01-23",
    slug: "ai-content-opportunity",
    keywords: ["ai content", "content creation", "ai opportunity", "digital content", "content strategy 2025"]
  },
  {
    title: "50 Digital Product Ideas That Are Printing Money in 2025",
    category: "2025 TRENDS",
    categoryColor: "pink",
    excerpt: "From $47 templates to $10K masterclasses - discover the hottest digital products selling right now. Includes market size, competition analysis, and profit potential for each.",
    description: "50 proven digital product ideas with market analysis and profit potential for 2025.",
    readTime: "25 min",
    date: "2025-01-23",
    slug: "digital-products-ideas-2025",
    keywords: ["digital product ideas", "online products", "product ideas 2025", "profitable products", "online business ideas"]
  },
  {
    title: "How I Built 5 Faceless Channels to $500K/Year",
    category: "STRATEGY",
    categoryColor: "purple",
    excerpt: "The complete blueprint to building anonymous content empires. I reveal my exact channel themes, content systems, and monetization strategies for faceless success.",
    description: "Strategic blueprint for building profitable faceless content channels generating $500K+ annually.",
    readTime: "19 min",
    date: "2025-01-24",
    slug: "faceless-content-strategy",
    keywords: ["faceless youtube", "anonymous content", "faceless channels", "youtube automation", "content strategy"]
  },
  {
    title: "How I Make $47,000/Month Selling Simple Templates",
    category: "GUIDE",
    categoryColor: "green",
    excerpt: "The exact blueprint to turn 2-hour template projects into $47K monthly income. Includes pricing psychology, marketing strategies, and automation systems.",
    description: "Complete guide to building a $47K/month template business with simple digital products.",
    readTime: "17 min",
    date: "2025-01-25",
    slug: "how-to-sell-templates",
    keywords: ["sell templates", "template business", "digital templates", "online templates", "template income"]
  },
  {
    title: "Create Your First Faceless YouTube Channel in 7 Days",
    category: "YOUTUBE",
    categoryColor: "red",
    excerpt: "Step-by-step guide to launching a profitable faceless YouTube channel. From niche selection to monetization, plus my personal tools and workflows for rapid growth.",
    description: "7-day action plan to create and launch a profitable faceless YouTube channel from scratch.",
    readTime: "18 min",
    date: "2025-01-26",
    slug: "create-faceless-youtube-channel",
    keywords: ["faceless youtube channel", "youtube without showing face", "youtube automation", "faceless content", "youtube guide"]
  },
  {
    title: "23 Ways to Monetize AI and Make $10K+/Month",
    category: "MONETIZATION",
    categoryColor: "green",
    excerpt: "Real businesses making real money with AI. I break down 23 proven AI monetization models with income proof, startup costs, and step-by-step implementation guides.",
    description: "23 proven AI monetization strategies with real examples generating $10K+ monthly income.",
    readTime: "24 min",
    date: "2025-01-27",
    slug: "monetize-with-ai",
    keywords: ["monetize ai", "ai business", "ai income", "make money with ai", "ai monetization"]
  },
  {
    title: "AI Image Generation: The Complete Guide for Content Creators",
    category: "AI TOOLS",
    categoryColor: "purple",
    excerpt: "Master every AI image tool from Midjourney to Stable Diffusion. Includes advanced prompting techniques, style guides, and commercial usage strategies for content creators.",
    description: "Comprehensive guide to AI image generation tools and techniques for professional content creation.",
    readTime: "16 min",
    date: "2025-01-28",
    slug: "ai-image-generation-guide",
    keywords: ["ai image generation", "midjourney", "stable diffusion", "ai art", "image ai tools"]
  },
  {
    title: "37 ChatGPT Automation Hacks That Save 20+ Hours/Week",
    category: "PRODUCTIVITY",
    categoryColor: "blue",
    excerpt: "Transform ChatGPT into your personal AI assistant. These advanced automation techniques handle everything from content creation to customer service, saving 20+ hours weekly.",
    description: "37 advanced ChatGPT automation techniques to save 20+ hours per week on repetitive tasks.",
    readTime: "15 min",
    date: "2025-01-29",
    slug: "chatgpt-automation-tips",
    keywords: ["chatgpt automation", "chatgpt hacks", "ai automation", "chatgpt productivity", "ai assistant"]
  },
  {
    title: "The C.A.S.H. Framework: Create 1,000 Pieces of Content Per Month",
    category: "FRAMEWORK",
    categoryColor: "green",
    excerpt: "My proprietary C.A.S.H. system for massive content production. Create, Automate, Scale, and Harvest - the framework that powers my content empire across all platforms.",
    description: "Revolutionary C.A.S.H. framework for creating 1,000+ pieces of quality content monthly.",
    readTime: "14 min",
    date: "2025-03-01",
    slug: "content-scaling-framework",
    keywords: ["content framework", "content scaling", "content production", "content strategy", "cash framework"]
  },
  {
    title: "n8n for Beginners: Automate Everything Without Code",
    category: "AUTOMATION",
    categoryColor: "orange",
    excerpt: "The complete beginner's guide to n8n automation. Build powerful workflows that connect all your tools and save 20+ hours per week - no coding required.",
    description: "Beginner-friendly guide to n8n workflow automation for business process optimization.",
    readTime: "21 min",
    date: "2025-03-01",
    slug: "n8n-beginners-guide",
    keywords: ["n8n automation", "workflow automation", "no code automation", "n8n tutorial", "business automation"]
  },
  {
    title: "The $100K/Year Passive Income Blueprint I Actually Use",
    category: "PASSIVE INCOME",
    categoryColor: "green",
    excerpt: "My exact blueprint for generating $8,400/month in passive income. 7 income streams broken down with setup costs, time investment, and realistic revenue expectations.",
    description: "Proven blueprint for building 7 passive income streams generating $100K+ annually.",
    readTime: "22 min",
    date: "2025-03-02",
    slug: "passive-income-blueprint",
    keywords: ["passive income", "income streams", "passive income ideas", "make money online", "financial freedom"]
  },
  {
    title: "Prompt Engineering: The $150/Hour Skill Nobody's Teaching Right",
    category: "AI MASTERY",
    categoryColor: "purple",
    excerpt: "Master the highest-paid AI skill of 2025. My comprehensive guide includes advanced frameworks, 100+ battle-tested prompts, and techniques used by $150/hour consultants.",
    description: "Advanced prompt engineering guide with frameworks and techniques for $150/hour AI consulting.",
    readTime: "28 min",
    date: "2025-03-03",
    slug: "prompt-engineering-guide",
    keywords: ["prompt engineering", "ai prompts", "chatgpt prompts", "ai consulting", "prompt techniques"]
  },
  {
    title: "Social Media Automation: Post to 10 Platforms in 10 Minutes",
    category: "AUTOMATION",
    categoryColor: "blue",
    excerpt: "The complete automation system I use to manage 50+ social accounts with just 2 hours per week. Includes tools, workflows, and content multiplication strategies.",
    description: "Complete social media automation system for managing multiple platforms efficiently.",
    readTime: "20 min",
    date: "2025-03-04",
    slug: "social-media-automation",
    keywords: ["social media automation", "automate social media", "social media tools", "content automation", "social scheduling"]
}
]

// Blog post card component with dynamic metrics
interface BlogPost {
  title: string
  category: string
  categoryColor: string
  excerpt: string
  description: string
  readTime: string
  date: string
  slug: string
  keywords: string[]
}

function BlogPostCard({ post, index, setElementRef, isVisible }: { 
  post: BlogPost, 
  index: number, 
  setElementRef: (index: number) => (el: HTMLDivElement | null) => void,
  isVisible: boolean 
}) {
  const [metrics, setMetrics] = useState({
    views: '0',
    likes: '0',
    shares: '0'
  })

  useEffect(() => {
    // Calculate metrics for this post
    const postMetrics = calculateBlogMetrics(post.date, post.slug)
    setMetrics({
      views: postMetrics.views,
      likes: postMetrics.likes,
      shares: postMetrics.shares
    })
  }, [post.date, post.slug])

  const getCategoryColor = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
      purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
      green: 'bg-green-500/10 border-green-500/20 text-green-400',
      pink: 'bg-pink-500/10 border-pink-500/20 text-pink-400',
      red: 'bg-red-500/10 border-red-500/20 text-red-400',
      orange: 'bg-orange-500/10 border-orange-500/20 text-orange-400'
}
    return colors[color] || colors.blue
}

  return (
    
    <ScrollAnimation animation="fade-up" delay={index * 100}>
        <TiltCard maxTilt={10} glare={false}>
            <SpotlightCard spotlightColor="rgba(59, 130, 246, 0.15)">
                <article className="bg-zinc-900 rounded-2xl p-6 hover:bg-zinc-800 transition-all duration-300 group cursor-pointer">
                    <Link href={`/blog/`} className="block"><div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold `}>
            {post.category}
                        </span>
                    </div><h2 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
          {post.title}
                </h2><p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {post.excerpt}
            </p><div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <div className="flex items-center gap-1">
                <svg className="w-4 h-4 transform-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                <span>{metrics.views}</span>
            </div>
          
            <div className="flex items-center gap-1">
                <svg className="w-4 h-4 transform-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>{metrics.likes}</span>
            </div>
          
            <div className="flex items-center gap-1">
                <svg className="w-4 h-4 transform-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.632 4.316C18.114 15.062 18 14.518 18 14c0-.482.114-.938.316-1.342m0 2.684a3 3 0 110-2.684M9 12a3 3 0 106 0 3 3 0 00-6 0zm12 0a3 3 0 106 0 3 3 0 00-6 0z" />
                </svg>
                <span>{metrics.shares}</span>
            </div>
        </div><div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{post.readTime}</span>
            </div>
            <span>•</span>
            <span>{formatBlogDate(post.date)}</span>
        </div>
          
        <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
    </div>
</Link>
</article>
</SpotlightCard>
</TiltCard>
</ScrollAnimation>
)
}

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState<'general' | 'news'>('general')
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  
  const currentPosts = activeTab === 'general' ? blogPosts : newsArticles
  const { setElementRef, visibleElements } = useScrollAnimations(currentPosts.length, { threshold: 0.1 })
  
  // Debug logging
  console.log('Active tab:', activeTab)
  console.log('Current posts count:', currentPosts.length)
  console.log('Blog posts count:', blogPosts.length)
  console.log('News articles count:', newsArticles.length)

  return (
    <div className="min-h-screen bg-dark relative">

      <section className="pt-16 pb-8 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
            ref={heroAnimation.elementRef}
            className={`text-center max-w-4xl mx-auto scroll-fade-up `}
          >
                <AnimatedGradientText className="mb-6">
              📝 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                    <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                Blog & News
                    </span>
                    <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedGradientText>

                <div className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    <BlurIn
                word="Success Stories, Growth Hacks &"
                className="text-4xl md:text-6xl font-bold text-white"
                duration={0.8}
              />
                        <div className="mt-2">
                            <span className="text-white">AI Strategies from </span>
                            <div className="bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-clip-text text-transparent inline-block">
                                <WordRotate
                    words={["IImagined.ai", "Anyro", "Industry Experts", "Growth Masters"]}
                    className="text-4xl md:text-6xl font-bold"
                    duration={3500}
                  />
                                </div>
                            </div>
                        </div>

                        <AnimatedText
              animation="fade" 
              delay={800}
              className="text-lg md:text-xl text-gray-400"
            >
              Master Instagram growth, AI automation, and digital product creation with battle-tested strategies that generate real results
                        </AnimatedText>
                    </div>
                </div>
            </section>

      <section className="py-4">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollAnimation animation="scale" delay={100}>
                        <div className="flex justify-center mb-8">
                            <div className="bg-zinc-800 rounded-lg p-1 flex gap-1 glass-premium backdrop-blur-xl">
                                <button
                onClick={() => setActiveTab('general')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 `}
              >
                General
                                </button>
                                <button
                onClick={() => setActiveTab('news')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 `}
              >
                News
                                </button>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

      <section
        ref={contentAnimation.elementRef}
        className={`section-spacing scroll-fade-up `}
      >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPosts.map((post, index) => (
                        <BlogPostCard
                key={`-`} 
                post={post} 
                index={index} 
                setElementRef={setElementRef}
                isVisible={true}
              />
            ))}
                        </div>
                    </div>
                </section>

      <section className="section-spacing bg-zinc-900 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-gradient-shift" />
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                        <ScrollAnimation animation="fade-up">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join <NumberTicker value={127000} delay={0.5} className="text-blue-400 inline-block" />+ Creators Getting Weekly Growth Hacks
                            </h2>
                        </ScrollAnimation>
          
                        <ScrollAnimation animation="fade-up" delay={200}>
                            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get exclusive Instagram growth strategies, AI automation blueprints, and digital product launches delivered to your inbox every week. Unsubscribe anytime.
                            </p>
                        </ScrollAnimation>
          
                        <ScrollAnimation animation="scale" delay={400}>
                            <a
              href="https://anyro.beehiiv.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
            >
                                <ShimmerButton
                className="shadow-2xl"
                shimmerColor="#ffffff"
                shimmerSize="0.1em"
                background="linear-gradient(135deg, #2563eb, #9333ea)"
                borderRadius="12px"
              >
                                    <span className="whitespace-nowrap font-bold px-6 py-3 text-base inline-flex items-center gap-3">
                  Join Free Newsletter
                                        <svg className="w-5 h-5 animate-wave" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </span>
                                </ShimmerButton>
                            </a>
                        </ScrollAnimation>
                    </div>
                </section>
            </div>
    )
  }
