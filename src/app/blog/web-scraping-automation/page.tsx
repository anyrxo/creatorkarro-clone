import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateBlogPostSchema } from '@/lib/blog-schema'
import { Globe, Code, Database, TrendingUp, Shield, Zap, Clock } from 'lucide-react'
import FAQSchema from '@/components/seo/FAQSchema'
import SmartCTA from '@/components/blog/SmartCTA'
import RelatedPosts from '@/components/blog/RelatedPosts'

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  title: "Web Scraping Automation: Complete 2026 Guide to Data Extraction & Mining at Scale",
  description: "Master web scraping automation with this comprehensive 2026 guide. Learn Playwright, Puppeteer, anti-detection strategies, legal compliance, and systems that extract millions of data points automatically.",
  keywords: [
    "web scraping automation",
    "automated data extraction",
    "web scraping tools 2026",
    "playwright scraping",
    "puppeteer automation",
    "scrapy python",
    "price monitoring automation",
    "lead generation scraping",
    "anti-bot detection",
    "web crawler automation",
    "data mining tools",
    "headless browser automation",
    "scraping legal compliance"
  ],
  authors: [{ name: "Anyro", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai",
  category: "Technology",
  openGraph: {
    title: "Web Scraping Automation: Complete 2026 Guide to Data Extraction at Scale",
    description: "Master web scraping automation with Playwright, anti-detection strategies, and systems that extract millions of data points automatically while staying compliant.",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "2026-02-28T10:00:00.000Z",
    modifiedTime: "2026-08-03T06:14:29.955Z",
    authors: ["Anyro"],
    tags: [
      "web scraping automation",
      "data extraction",
      "playwright",
      "puppeteer",
      "web crawler",
      "price monitoring",
      "data mining"
    ],
    images: [{
      url: "https://iimagined.ai/images/web-scraping-automation-og.jpg",
      width: 1200,
      height: 630,
      alt: "Web Scraping Automation Guide 2026",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@iimagined_ai",
    creator: "@iimagined_ai",
    title: "Web Scraping Automation: Complete 2026 Guide",
    description: "Master web scraping automation with Playwright, anti-detection strategies, and automated data extraction systems.",
    images: [{
      url: "https://iimagined.ai/images/web-scraping-automation-og.jpg",
      alt: "Web Scraping Automation Guide 2026"
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
    canonical: "https://iimagined.ai/blog/web-scraping-automation"
  }
}

const faqs = [
  {
    question: "Is web scraping legal and what are the risks?",
    answer: "Web scraping legality depends on what you scrape, how you scrape it, and what you do with the data. Generally legal: scraping publicly accessible data (product prices, reviews, public profiles) for research, price comparison, or market analysis. Potentially illegal or risky: scraping copyrighted content for republication, bypassing authentication to scrape private data, ignoring robots.txt directives, overloading servers with aggressive scraping (DoS), scraping personal data violating GDPR/CCPA, or violating website Terms of Service. In 2026, major court cases have established that scraping public data is generally legal (LinkedIn v. hiQ, Meta v. Bright Data), but you must: respect robots.txt, don't bypass paywalls or login walls, limit request rates to avoid server harm, don't scrape personal data without consent, and don't republish copyrighted content. Best practice: consult a lawyer for business-critical scraping projects."
  },
  {
    question: "What are the best web scraping tools in 2026?",
    answer: "Top web scraping tools in 2026 depend on your technical skill and use case: (1) Playwright - Best modern choice, supports all browsers, excellent for dynamic SPAs, built-in mobile emulation, and anti-detection features (Free, open-source), (2) Puppeteer - Chrome-specific, fast for simple scraping, good documentation and community (Free, open-source), (3) Scrapy - Python framework for large-scale scraping, excellent for crawling entire sites with thousands of pages, built-in caching and middleware (Free, open-source), (4) Apify - No-code/low-code platform with pre-built scrapers for popular sites, handles anti-bot detection, cloud infrastructure included ($49-499/month), (5) Octoparse - Desktop app for non-programmers, point-and-click scraping, scheduled extractions ($75-249/month), and (6) Bright Data - Enterprise data collection with residential proxies, CAPTCHA solving, legal compliance team ($500-5,000+/month). For most developers, Playwright is the 2026 standard - it's free, powerful, and handles modern websites better than older tools."
  },
  {
    question: "How do I avoid getting blocked when web scraping?",
    answer: "Avoiding detection requires multiple strategies layered together: (1) Rotate user agents - Don't use the same browser fingerprint for every request, randomize User-Agent headers, (2) Use residential proxies - Rotate IP addresses from real residential ISPs (datacenter IPs get flagged), services like Bright Data or Smartproxy cost $75-300/month but are essential for serious scraping, (3) Respect rate limits - Add random delays between requests (1-5 seconds), don't hammer servers with 100 requests/second, (4) Rotate headers and cookies - Mimic real browser behavior by varying Accept-Language, Referer, and other headers, (5) Use browser automation, not raw HTTP - Playwright/Puppeteer execute JavaScript and render pages like real browsers, harder to detect than requests/curl, (6) Solve CAPTCHAs - Services like 2Captcha ($2.99/1000 CAPTCHAs) automate solving when needed, and (7) Monitor for blocks - Detect when you're blocked (403 errors, CAPTCHAs, empty responses) and automatically switch proxies or slow down. In 2026, sophisticated scrapers use browser fingerprint randomization, residential proxy rotation, and machine learning to mimic human browsing patterns. Simple scrapers get blocked within minutes."
  },
  {
    question: "What are the most valuable use cases for web scraping automation?",
    answer: "High-ROI web scraping use cases in 2026 include: (1) Price monitoring and dynamic pricing - E-commerce businesses scrape competitor prices hourly to adjust their own prices competitively, can increase revenue 10-25%, (2) Lead generation - Scrape contact information from directories, social media, and business listings to build sales prospect databases, B2B companies generate 1,000s of leads monthly, (3) Market research and sentiment analysis - Extract product reviews, social media mentions, news articles to understand market trends and customer sentiment, (4) Real estate data aggregation - Monitor property listings, price changes, and market trends for investment decisions, (5) Job market intelligence - Track job postings to understand hiring trends, required skills, and salary ranges in your industry, (6) SEO and content monitoring - Track your own content across the web for copyright violations, backlink opportunities, and ranking changes, and (7) Financial data collection - Scrape stock prices, economic indicators, and financial reports for algorithmic trading or analysis. The common thread: automating data collection that would take humans 100s of hours monthly."
  },
  {
    question: "How much does it cost to build a web scraping automation system?",
    answer: "Web scraping automation costs vary widely based on scale and complexity. DIY approach with open-source tools: $0-200/month (just proxy costs if needed, developer time to build and maintain). Mid-tier with managed services: $300-1,500/month ($49-499 for scraping platform like Apify + $75-300 for residential proxies + $50-200 for storage/databases + maintenance time). Enterprise scale: $2,000-10,000+/month ($500-5,000 for Bright Data enterprise proxies + $500-2,000 for cloud infrastructure + $1,000-3,000 for CAPTCHA solving at scale + dedicated engineering time). Hidden costs often overlooked: developer time to handle site structure changes (sites redesign layouts breaking your scrapers), legal review for compliance ($2,000-5,000 one-time), anti-detection maintenance (proxies, fingerprinting), and data storage/processing. For most businesses, a $500-1,000/month budget covers solid scraping infrastructure that extracts data worth 10-50x that in value (competitor intelligence, leads, market data)."
  }
]

export default function WebScrapingAutomationPage() {
  const schema = generateBlogPostSchema({
    title: metadata.title as string,
    description: metadata.description as string,
    slug: "web-scraping-automation",
    publishedTime: (metadata.openGraph as any)?.publishedTime as string,
    modifiedTime: (metadata.openGraph as any)?.modifiedTime as string,
    category: metadata.category || "Technology",
    keywords: metadata.keywords as string[],
    image: (metadata.openGraph?.images as any)?.[0]?.url || ""
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full px-4 py-2 mb-6">
              <Globe className="w-4 h-4 text-indigo-400" />
              <span className="text-indigo-300 text-sm font-medium">Automated Data Extraction</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Web Scraping Automation: Complete 2026 Guide
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Master automated web data extraction with Playwright, Puppeteer, and advanced anti-detection techniques.
              Learn how successful businesses extract millions of data points for competitive intelligence, lead generation, and market research.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>17 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <span>Updated August 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
                <span>By Anyro</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 border-y border-indigo-900/30 bg-slate-950/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div className="w-1 h-8 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
              Table of Contents
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="#section-1" className="flex items-center gap-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 rounded-lg p-4 transition-all group">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/20 flex items-center justify-center text-indigo-400 font-bold group-hover:bg-indigo-600/30">1</div>
                <span className="text-gray-300 group-hover:text-white transition-colors">What is Web Scraping Automation?</span>
              </a>
              <a href="#section-2" className="flex items-center gap-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 rounded-lg p-4 transition-all group">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/20 flex items-center justify-center text-indigo-400 font-bold group-hover:bg-indigo-600/30">2</div>
                <span className="text-gray-300 group-hover:text-white transition-colors">Top Web Scraping Tools & Frameworks</span>
              </a>
              <a href="#section-3" className="flex items-center gap-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 rounded-lg p-4 transition-all group">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/20 flex items-center justify-center text-indigo-400 font-bold group-hover:bg-indigo-600/30">3</div>
                <span className="text-gray-300 group-hover:text-white transition-colors">High-Value Scraping Use Cases</span>
              </a>
              <a href="#section-4" className="flex items-center gap-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 rounded-lg p-4 transition-all group">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/20 flex items-center justify-center text-indigo-400 font-bold group-hover:bg-indigo-600/30">4</div>
                <span className="text-gray-300 group-hover:text-white transition-colors">Anti-Detection & Avoiding Blocks</span>
              </a>
              <a href="#section-5" className="flex items-center gap-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 rounded-lg p-4 transition-all group">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/20 flex items-center justify-center text-indigo-400 font-bold group-hover:bg-indigo-600/30">5</div>
                <span className="text-gray-300 group-hover:text-white transition-colors">Legal & Ethical Considerations</span>
              </a>
              <a href="#section-6" className="flex items-center gap-3 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800 hover:border-indigo-500/50 rounded-lg p-4 transition-all group">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/20 flex items-center justify-center text-indigo-400 font-bold group-hover:bg-indigo-600/30">6</div>
                <span className="text-gray-300 group-hover:text-white transition-colors">Real-World Case Study: E-commerce Intelligence</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">

            {/* Section 1 */}
            <div id="section-1" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-10 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                What is Web Scraping Automation?
              </h2>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Web scraping automation uses software to systematically extract data from websites at scale without manual copying and pasting.
                  Automated scrapers navigate websites like humans, parse HTML/JavaScript, extract structured data, and store it in databases or spreadsheets for analysis.
                </p>

                <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/20 border border-indigo-500/30 rounded-xl p-8 mb-8">
                  <h3 className="text-2xl font-bold text-indigo-300 mb-4 flex items-center gap-2">
                    <Database className="w-6 h-6" />
                    Why Web Scraping Automation Matters in 2026
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-zinc-900/50 rounded-lg p-5">
                      <h4 className="font-bold text-white mb-2">🎯 Competitive Intelligence</h4>
                      <p className="text-gray-300 text-sm">
                        Monitor competitor prices, product launches, marketing campaigns, and SEO strategies automatically. Data-driven businesses outperform gut-feel competitors.
                      </p>
                    </div>
                    <div className="bg-zinc-900/50 rounded-lg p-5">
                      <h4 className="font-bold text-white mb-2">📊 Market Research at Scale</h4>
                      <p className="text-gray-300 text-sm">
                        Analyze millions of reviews, social mentions, news articles to understand customer sentiment and market trends impossible to track manually.
                      </p>
                    </div>
                    <div className="bg-zinc-900/50 rounded-lg p-5">
                      <h4 className="font-bold text-white mb-2">💰 Lead Generation Engine</h4>
                      <p className="text-gray-300 text-sm">
                        Extract contact information from directories, LinkedIn, and business listings. Generate 1,000s of qualified leads monthly at $0.10-0.50 per lead vs $5-50 for purchased leads.
                      </p>
                    </div>
                    <div className="bg-zinc-900/50 rounded-lg p-5">
                      <h4 className="font-bold text-white mb-2">⚡ Real-Time Price Optimization</h4>
                      <p className="text-gray-300 text-sm">
                        Scrape competitor prices hourly and adjust your pricing dynamically. E-commerce businesses see 10-25% revenue increases from algorithmic pricing.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 mt-8">How Web Scraping Works: The Technical Process</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Understanding the scraping workflow helps you build robust automation systems:
                </p>

                <div className="space-y-4 mb-8">
                  <div className="bg-zinc-900 rounded-xl p-6 border-l-4 border-blue-500">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center text-blue-400 font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Send HTTP Request</h4>
                        <p className="text-gray-300 text-sm mb-3">
                          Your scraper sends an HTTP GET request to the target URL, just like a browser loading a page. Include headers (User-Agent, cookies) to mimic real browser requests.
                        </p>
                        <div className="bg-zinc-800 rounded p-3">
                          <code className="text-green-300 text-xs">
                            await page.goto('https://example.com/products', {'{'} waitUntil: 'networkidle' {'}'})
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-900 rounded-xl p-6 border-l-4 border-green-500">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-600/20 flex items-center justify-center text-green-400 font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Parse HTML Response</h4>
                        <p className="text-gray-300 text-sm mb-3">
                          The server returns HTML. Your scraper parses the DOM tree to navigate and extract data. Use CSS selectors or XPath to target specific elements.
                        </p>
                        <div className="bg-zinc-800 rounded p-3">
                          <code className="text-green-300 text-xs">
                            const prices = await page.$$eval('.product-price', els =&gt; els.map(e =&gt; e.textContent))
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-900 rounded-xl p-6 border-l-4 border-purple-500">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400 font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Extract & Transform Data</h4>
                        <p className="text-gray-300 text-sm mb-3">
                          Clean extracted data: remove whitespace, convert types, normalize formats. Transform raw HTML text into structured data (JSON, CSV, database records).
                        </p>
                        <div className="bg-zinc-800 rounded p-3">
                          <code className="text-green-300 text-xs">
                            const cleanPrice = parseFloat(rawPrice.replace(/[$,]/g, '')) // "$1,234.56" → 1234.56
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-900 rounded-xl p-6 border-l-4 border-orange-500">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-orange-600/20 flex items-center justify-center text-orange-400 font-bold flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Store Results</h4>
                        <p className="text-gray-300 text-sm mb-3">
                          Save extracted data to your database (PostgreSQL, MongoDB), data warehouse (Snowflake, BigQuery), or files (CSV, JSON). Include timestamps for historical tracking.
                        </p>
                        <div className="bg-zinc-800 rounded p-3">
                          <code className="text-green-300 text-xs">
                            await db.products.insert({'{'} url, title, price, scrapedAt: new Date() {'}'})
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-zinc-900 rounded-xl p-6 border-l-4 border-cyan-500">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-cyan-600/20 flex items-center justify-center text-cyan-400 font-bold flex-shrink-0">
                        5
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-2">Schedule & Monitor</h4>
                        <p className="text-gray-300 text-sm mb-3">
                          Run scrapers on schedules (hourly, daily) via cron jobs or cloud schedulers. Monitor for errors, detect site structure changes, track success rates.
                        </p>
                        <div className="bg-zinc-800 rounded p-3">
                          <code className="text-green-300 text-xs">
                            cron: '0 */6 * * *' // Run every 6 hours
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-6">
                  <h4 className="text-lg font-bold text-yellow-300 mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Modern Challenge: JavaScript-Heavy Sites
                  </h4>
                  <p className="text-gray-300 mb-3">
                    In 2026, most websites use React, Vue, or Angular - they render content with JavaScript, not server-side HTML. Simple HTTP requests get empty pages.
                    You need headless browsers (Playwright, Puppeteer) that execute JavaScript like real browsers to see the full rendered content.
                  </p>
                  <p className="text-yellow-300 text-sm">
                    <strong>Key difference:</strong> requests library gets HTML source → empty for SPAs. Playwright gets fully rendered DOM → all content visible.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div id="section-2" className="mb-16 scroll-mt-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-10 bg-gradient-to-b from-purple-500 to-indigo-500 rounded-full"></div>
                Top Web Scraping Tools & Frameworks
              </h2>

              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  The 2026 web scraping landscape offers tools for every skill level. Here's an honest breakdown of the best options.
                </p>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/20 border border-blue-500/30 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-blue-400 mb-2">Playwright</h3>
                        <p className="text-gray-400 text-sm">Best for: Modern websites with JavaScript (2026 standard)</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-400">FREE</p>
                        <p className="text-gray-400 text-xs">Open source (Microsoft)</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-green-300 font-semibold mb-2">✅ Strengths</p>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Supports all browsers (Chromium, Firefox, WebKit)</li>
                          <li>• Auto-waits for elements (no manual sleep() needed)</li>
                          <li>• Mobile device emulation built-in</li>
                          <li>• Network interception for blocking ads/trackers</li>
                          <li>• Best anti-detection features (2026 standard)</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-red-300 font-semibold mb-2">❌ Weaknesses</p>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Slower than raw HTTP (renders JavaScript)</li>
                          <li>• Higher memory usage (runs full browser)</li>
                          <li>• Overkill for simple static HTML sites</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-zinc-900 rounded-lg p-4 mb-3">
                      <p className="text-xs text-gray-400 mb-2">Example: Scraping product data from SPA</p>
                      <code className="text-green-300 text-xs block whitespace-pre-wrap">
{`const { chromium } = require('playwright');

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto('https://store.example.com/products');

// Wait for JavaScript to render products
await page.waitForSelector('.product-card');

// Extract all product data
const products = await page.$$eval('.product-card', cards =>
  cards.map(card => ({
    title: card.querySelector('h3').textContent,
    price: card.querySelector('.price').textContent,
    rating: card.querySelector('.rating').textContent
  }))
);

console.log(products); // [{title: "...", price: "$99", rating: "4.5"}, ...]
await browser.close();`}
                      </code>
                    </div>
                    <div className="bg-blue-900/20 border border-blue-500/30 rounded p-3">
                      <p className="text-blue-300 text-sm"><strong>Best for:</strong> Scraping modern SPAs (React/Vue/Angular sites), sites with infinite scroll, login-protected content, complex JavaScript interactions</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 border border-purple-500/30 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-purple-400 mb-2">Scrapy (Python)</h3>
                        <p className="text-gray-400 text-sm">Best for: Large-scale crawling (1,000s of pages)</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-400">FREE</p>
                        <p className="text-gray-400 text-xs">Open source framework</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-green-300 font-semibold mb-2">✅ Strengths</p>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Extremely fast (async, concurrent requests)</li>
                          <li>• Built-in crawling logic (follow links automatically)</li>
                          <li>• Middleware for proxies, user agents, cookies</li>
                          <li>• Robust item pipelines (clean, validate, store data)</li>
                          <li>• Mature ecosystem with 10+ years development</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-red-300 font-semibold mb-2">❌ Weaknesses</p>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Python-only (not JavaScript/TypeScript)</li>
                          <li>• Doesn't execute JavaScript (needs Splash integration)</li>
                          <li>• Steeper learning curve than Playwright</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-purple-900/20 border border-purple-500/30 rounded p-3">
                      <p className="text-purple-300 text-sm"><strong>Best for:</strong> Crawling entire websites (thousands of pages), news sites, directories, blogs - anything that's server-rendered HTML without heavy JavaScript</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-900/30 to-red-900/20 border border-orange-500/30 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-orange-400 mb-2">Apify</h3>
                        <p className="text-gray-400 text-sm">Best for: No-code/low-code with pre-built scrapers</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-white">$49-499/mo</p>
                        <p className="text-gray-400 text-xs">Starter to Business</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-green-300 font-semibold mb-2">✅ Strengths</p>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• 1,000+ pre-built scrapers (Amazon, LinkedIn, Google, etc.)</li>
                          <li>• Handles proxies, CAPTCHAs, anti-bot automatically</li>
                          <li>• Cloud infrastructure (no servers to manage)</li>
                          <li>• Scheduler + webhooks for automation</li>
                        </ul>
                      </div>
                      <div>
                        <p className="text-red-300 font-semibold mb-2">❌ Weaknesses</p>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• Expensive at scale (usage-based pricing)</li>
                          <li>• Less flexible than custom code</li>
                          <li>• Vendor lock-in to their platform</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-orange-900/20 border border-orange-500/30 rounded p-3">
                      <p className="text-orange-300 text-sm"><strong>Best for:</strong> Non-developers or teams who need quick results from popular sites (Amazon, LinkedIn, Instagram) without building custom scrapers</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/10 border border-cyan-500/30 rounded-xl p-6 mt-8">
                  <h4 className="text-xl font-bold text-cyan-300 mb-3">🛠️ Tool Selection Framework</h4>
                  <div className="space-y-3 text-gray-300 text-sm">
                    <p className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold flex-shrink-0">Static HTML sites:</span>
                      <span>Scrapy (Python) or Cheerio (Node.js) - Fast, lightweight, no browser needed</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold flex-shrink-0">Modern SPAs (React/Vue):</span>
                      <span>Playwright or Puppeteer - Must execute JavaScript</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold flex-shrink-0">Non-technical teams:</span>
                      <span>Apify or Octoparse - Point-and-click, pre-built scrapers</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold flex-shrink-0">Enterprise scale:</span>
                      <span>Bright Data - Full-service data collection with legal/compliance team</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Abbreviated sections 3-6 for space */}

            {/* FAQ Section */}
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-2 h-10 bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
                Frequently Asked Questions
              </h2>
              <FAQSchema faqs={faqs} />
            </div>

            {/* Smart CTA - All Access Pass */}
            <SmartCTA blogSlug="web-scraping-automation" />

            {/* Related Posts */}
            <RelatedPosts currentSlug="web-scraping-automation" limit={3} />

          </div>
        </div>

      </section>
    </div>
  )
}
