import Link from 'next/link'
import { notFound } from 'next/navigation'
import BlogComingSoon from './BlogComingSoon'

// List of blog posts that have actual pages
const existingPosts = [
  '500k-followers',
  'ai-content-income',
  'digital-product-success-story',
  'digital-products-that-sell',
  'instagram-growth-2025',
  'instagram-ignited-success-stories',
  'whop-clipping'
]

// News articles from the newsarticles directory
const newsArticles: Record<string, {
  title: string
  content: string
  date: string
  category: string
  readTime: string
}> = {
  'ai-assistant-showdown-chatgpt-gemini-perplexity-claude': {
    title: 'AI Assistant Showdown: ChatGPT vs Gemini vs Perplexity vs Claude',
    content: `
<p>The top AI assistants—ChatGPT, Gemini, Perplexity, and Claude—each shine in different areas like productivity, research, real-time search, and creative writing. Choosing the right one depends on your daily workflow and whether features like long-context memory, file handling, or integrated research tools matter most to you.</p>

<h2>ChatGPT: The All-Rounder for Everyday Use</h2>

<h3>Strengths</h3>
<ul>
  <li>Highly versatile: great for writing, brainstorming, planning, coding, and simple data analysis</li>
  <li>Uploads and understands a variety of file types: PDFs, Excel sheets, Word docs, and even images</li>
  <li>Built-in automation tools through Actions and Custom GPTs for repeat tasks</li>
  <li>Excellent image generation capabilities using GPT-4o</li>
  <li>Offers memory and personalization for frequent users</li>
</ul>

<p>ChatGPT remains the most popular AI assistant for good reason. It's intuitive, handles diverse tasks well, and ChatGPT Plus users get access to advanced features like web browsing, image analysis, and the ability to create custom GPTs for specific workflows.</p>

<h2>Google Gemini: The Research Powerhouse</h2>

<h3>Strengths</h3>
<ul>
  <li>Deep integration with Google's ecosystem (Gmail, Drive, Calendar, Maps)</li>
  <li>Strong multimodal capabilities - handles text, images, audio, and video</li>
  <li>Excellent for research with real-time web access</li>
  <li>Free tier offers generous usage limits</li>
  <li>Advanced reasoning capabilities with Gemini Pro</li>
</ul>

<p>Gemini excels when you need an AI that can seamlessly work with your Google workspace or when conducting research that requires real-time information.</p>

<h2>Perplexity: The Search Engine Killer</h2>

<h3>Strengths</h3>
<ul>
  <li>Real-time web search with source citations</li>
  <li>Excellent for research and fact-checking</li>
  <li>Clean, focused interface designed for information discovery</li>
  <li>Pro version offers advanced search capabilities</li>
  <li>Great for academic and professional research</li>
</ul>

<p>Perplexity is your go-to when you need AI-powered search that provides accurate, sourced information. It's particularly strong for research tasks and staying updated on current events.</p>

<h2>Claude: The Creative Writing Champion</h2>

<h3>Strengths</h3>
<ul>
  <li>Exceptional creative writing and content generation</li>
  <li>Strong analytical and reasoning capabilities</li>
  <li>Excellent code generation and debugging</li>
  <li>Large context window for handling long documents</li>
  <li>Thoughtful, nuanced responses</li>
</ul>

<p>Claude stands out for creative writing, content creation, and complex analysis. Its responses tend to be more thoughtful and nuanced, making it ideal for creative professionals and writers.</p>

<h2>Which One Should You Choose?</h2>

<p>The best AI assistant depends on your specific needs:</p>
<ul>
  <li><strong>For general productivity and versatility:</strong> ChatGPT</li>
  <li><strong>For research and Google ecosystem integration:</strong> Gemini</li>
  <li><strong>For real-time information and fact-checking:</strong> Perplexity</li>
  <li><strong>For creative writing and complex analysis:</strong> Claude</li>
</ul>

<p>Many power users find themselves using multiple AI assistants for different tasks, leveraging each one's unique strengths. The AI landscape is rapidly evolving, so these capabilities will continue to expand and improve.</p>
    `,
    date: '2025-06-09',
    category: 'AI NEWS',
    readTime: '8 min'
  },
  'openai-03-pro-brilliant-strategist-overthinking-giant': {
    title: "OpenAI's 03 Pro: Brilliant Strategist or Overthinking Giant?",
    content: `
<p>OpenAI's 03 Pro is slow and costly, but delivers deep, strategic reasoning when given time. From outperforming benchmarks to offering transformative business insights, it redefines what it means to "think" in AI—albeit with patience.</p>

<h2>A Model Unlike Any Other</h2>

<p>From a technical standpoint, 03 Pro pushes boundaries. Expert evaluators consistently rank it above the standard 03 model in science, writing, programming, and data analysis. It outperforms on benchmarks like AME 2024 and GPQA Diamond by 3%, and it achieves a remarkable <strong>2748 ELO</strong> on Codeforces—comparable to the <strong>159th best human competitive programmer in the world</strong>.</p>

<p>This performance edge, particularly in coding, suggests a model that has not only improved general capabilities but also fine-tuned its understanding of complex logic and reasoning problems. OpenAI applies a rigorous "four out of four" reliability benchmark on key tasks—demanding consistent precision across multiple attempts—and 03 Pro continues to meet this high standard.</p>

<p>But benchmark scores don't tell the full story.</p>

<p>03 Pro is being described as a "slow thinker." Industry users have observed it taking <em>10 to 25 minutes</em> to respond to simple prompts. For example, a simple "Hi" reportedly triggered four minutes of processing. In one extreme case, it took <strong>13 minutes</strong> to count the words in its own seven-word sentence. The explanation? Unclear—OpenAI hasn't disclosed much about its inference pipeline or internal reasoning process.</p>

<h2>Why Is It So Slow?</h2>

<p>Speed issues haven't gone unnoticed. Users like McKay Wriggley and Matt Schumer have expressed frustration over multi-minute response times. While some attribute this to deep reasoning processes, others are skeptical. "What could it possibly be thinking about for 13 minutes?" asked one reviewer.</p>

<p>Despite the latency, those who give 03 Pro the time it needs are often rewarded. When loaded with complex internal data, such as a company's historical planning documents, one founder said the model generated "plausible, specific, and rooted strategic plans" that <em>actually changed how we think about our future</em>. That kind of result is hard to capture in a benchmark—but undeniably valuable.</p>

<p>The model's depth is especially evident in specialized use cases. In one example, a researcher asked 03 Pro to critique the human immune system and propose a theoretical improvement. The model delivered a comprehensive, thoughtful breakdown of biological limitations and proposed novel solutions—far beyond the utility of a standard chatbot.</p>

<h2>Use Cases: Power and Precision—If You Wait</h2>

<p>03 Pro comes with full tool support out of the box: code execution, web browsing, image input, file analysis, and memory integration. It excels in strategy, science, and system-level thinking. Some notable examples include:</p>

<ul>
  <li><strong>Strategic Planning</strong>: Raindrop's leadership team used it to analyze years of internal planning data and received a detailed execution plan that realigned their business direction.</li>
  <li><strong>Medical Research</strong>: A doctor used 03 Pro to design a hypothetical "Immune System 2.0," and found it significantly more thoughtful than earlier versions.</li>
  <li><strong>Word Puzzle Logic</strong>: It successfully solved a complex word ladder puzzle that had stumped earlier models and bested existing online solutions.</li>
  <li><strong>Real-World Simulation</strong>: Flavio Adamo tested 03 Pro on a rotating ball-and-collision physics demo. It was the first model to handle realistic collisions with near-perfect accuracy.</li>
</ul>

<h2>The Bottom Line</h2>

<p>03 Pro represents a fascinating trade-off in AI development: raw thinking power versus speed. For users who need deep analysis, strategic thinking, or complex problem-solving, the wait might be worth it. For everyday tasks requiring quick responses, other models will likely serve you better.</p>

<p>As AI continues to evolve, 03 Pro might be a glimpse into a future where AI models specialize in different types of thinking—some optimized for speed, others for depth. The question isn't whether 03 Pro is good or bad, but whether its unique capabilities match your specific needs and patience level.</p>
    `,
    date: '2025-06-13',
    category: 'TECH NEWS',
    readTime: '12 min'
  }
}

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // Ensure we have a slug
  if (!slug) {
    notFound()
  }

  // If this is one of our existing posts, redirect to the actual page
  if (existingPosts.includes(slug)) {
    // This shouldn't happen as Next.js should route to the actual page first
    // But just in case, we'll handle it
    notFound()
  }

  // Check if this is a news article
  const newsArticle = newsArticles[slug]
  if (newsArticle) {
    return (
      <div className="min-h-screen bg-dark">
        <article className="section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {/* Back to Blog Link */}
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>

            {/* Article Header */}
            <header className="mb-12">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 border-purple-500/20 text-purple-400">
                  {newsArticle.category}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                {newsArticle.title}
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <time dateTime={newsArticle.date}>
                  {new Date(newsArticle.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span>•</span>
                <span>{newsArticle.readTime} read</span>
              </div>
            </header>

            {/* Article Content */}
            <div 
              className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-ul:text-gray-300 prose-li:text-gray-300"
              dangerouslySetInnerHTML={{ __html: newsArticle.content }}
            />

            {/* Newsletter CTA */}
            <section className="mt-16 p-8 bg-zinc-900 rounded-2xl text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Stay Updated with AI News
              </h2>
              
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Get the latest AI news, insights, and trends delivered to your inbox weekly. Join thousands of AI enthusiasts staying ahead of the curve.
              </p>
              
              <a
                href="https://anyro.beehiiv.com/subscribe"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button inline-flex items-center gap-3"
              >
                Subscribe to Newsletter
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </section>
          </div>
        </article>
      </div>
    )
  }

  // For all other slugs, show a coming soon page
  return <BlogComingSoon />
}
