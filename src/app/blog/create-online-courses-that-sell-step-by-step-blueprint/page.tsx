import React from 'react'
import Link from 'next/link'
import { Metadata } from 'next'
import { generateBlogPostSchema } from '@/lib/blog-schema'
import FAQSchema from '@/components/seo/FAQSchema'
import { Sparkles, DollarSign, Users, TrendingUp, Target, BarChart3, BookOpen, Video, Award } from 'lucide-react'

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  title: "Create Online Courses That Sell 2026 | Complete Blueprint",
  description: "Master online course creation in 2026. Learn platform selection, pricing strategies, content structure, marketing tactics, and real case studies from creators earning $50K+/month with courses.",
  keywords: [
    "create online courses",
    "online course creation",
    "course business",
    "sell online courses",
    "course platforms",
    "teachable vs kajabi",
    "course pricing strategy",
    "course marketing",
    "digital product business",
    "passive income courses",
    "course revenue 2026",
    "educational content creation"
  ],
  authors: [{ name: "Anyro", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai",
  category: "Digital Products",
  openGraph: {
    title: "Create Online Courses That Sell 2026 | Complete Blueprint",
    description: "Master online course creation. Platform selection, pricing strategies, marketing tactics, and case studies from creators earning $50K+/month.",
    url: "https://iimagined.ai/blog/create-online-courses-that-sell-step-by-step-blueprint",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "2026-02-22T10:00:00.000Z",
    modifiedTime: "2026-08-03T06:14:30.000Z",
    authors: ["Anyro"],
    tags: ["create online courses","course business","digital products","course platforms","course marketing","pricing strategy"],
    images: [{
      url: "https://iimagined.ai/images/blog/create-online-courses-that-sell-step-by-step-blueprint-og.jpg",
      width: 1200,
      height: 630,
      alt: "Create Online Courses That Sell 2026",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@iimagined_ai",
    creator: "@iimagined_ai",
    title: "Create Online Courses That Sell 2026",
    description: "Master online course creation. Platforms, pricing, marketing, and case studies from $50K+/month creators.",
    images: [{
      url: "https://iimagined.ai/images/blog/create-online-courses-that-sell-step-by-step-blueprint-og.jpg",
      alt: "Create Online Courses 2026"
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
    canonical: "https://iimagined.ai/blog/create-online-courses-that-sell-step-by-step-blueprint"
  }
}

const faqs = [
  {
    question: "Which platform is best for selling online courses in 2026: Teachable, Kajabi, Thinkific, or Podia?",
    answer: "**Platform choice** depends on your business model, technical comfort, and revenue goals. **Teachable (best for beginners)**: **Pricing**: Free plan (5% transaction fee + $1 per sale), Basic $59/month (5% transaction fee), Pro $159/month (0% fees). **Best for**: First-time creators, under $10K/month revenue. **Pros**: Easy setup (course live in 24 hours), built-in marketing tools, student community features. **Cons**: 5% transaction fees eat profits (on $5K/month = $250 lost). Design customization limited on free plan. **Kajabi (best for full business)**: **Pricing**: Basic $149/month, Growth $199/month, Pro $399/month. **Best for**: $20K+/month businesses, all-in-one solution seekers. **Pros**: Includes email marketing (no Mailchimp needed), sales funnels, website builder, CRM, 0% transaction fees. Advanced automation. **Cons**: Expensive for beginners. Overkill if you just need course hosting. **Thinkific (best value)**: **Pricing**: Free forever plan (0% fees!), Basic $49/month, Start $99/month, Grow $199/month. **Best for**: Budget-conscious creators, side hustles, testing course ideas. **Pros**: No transaction fees even on free plan, good course builder, coupons/promotions, decent analytics. **Cons**: Email marketing requires 3rd-party integration. **Podia (simplest)**: **Pricing**: Mover $39/month (0% fees), Shaker $89/month. **Best for**: Non-technical creators, digital product bundles (courses + memberships + downloads). **Pros**: Simplest interface, email marketing included, sell courses + memberships + digital downloads in one platform. 0% transaction fees. **Cons**: Fewer advanced features than Kajabi. Limited automation. **Decision framework**: Revenue <$5K/month → Thinkific Free. Revenue $5K-20K/month → Teachable Pro ($159) or Podia Shaker ($89). Revenue >$20K/month → Kajabi ($199-399) for all-in-one. **Real example**: A productivity course creator started on Thinkific Free (0% fees), grew to $8K/month, upgraded to Teachable Pro ($159) for better marketing tools. At $25K/month, switched to Kajabi ($199) to consolidate email marketing ($150/month Mailchimp savings) + course platform. **Net platform cost**: Kajabi $199 - $150 Mailchimp savings = $49 effective cost."
  },
  {
    question: "How should I price my online course and what pricing models work best?",
    answer: "**Course pricing** in 2026 follows value-based models, not cost-plus. **Pricing tiers that work**: **$27-97 (introductory/lead magnet)**: Mini-courses (1-2 hours content). Examples: 'ChatGPT Prompt Templates', 'Notion Setup Guide'. **Goal**: Build email list, low barrier entry. **Conversion rate**: 5-10% cold traffic. **$197-497 (standard course)**: Comprehensive courses (10-20 hours content + templates + community). Examples: 'Complete Instagram Growth Masterclass', 'E-commerce Automation Blueprint'. **Goal**: Main revenue driver. **Conversion rate**: 2-4% warm traffic. **$997-2,997 (flagship/transformation)**: Deep-dive programs (50+ hours content + coaching + certification). Examples: 'AI Business Builder Academy', '12-Month Freelance to Agency'. **Goal**: High-ticket revenue, premium positioning. **Conversion rate**: 0.5-2% qualified leads. **Pricing psychology**: **Charm pricing (ending in 7 or 9)**: $197 feels significantly cheaper than $200 despite $3 difference. Increases conversions 8-12%. **Anchoring**: Show '$1,500 value' before '$497 price'. Makes $497 feel like steal. **Payment plans**: Offer $197 one-time OR 3x $79 ($237 total). 40-50% choose payment plan = 20% revenue boost. **Real-world example**: A business automation course tested 3 prices—$97 (sold 287 copies = $27,839), $297 (sold 124 copies = $36,828), $497 (sold 78 copies = $38,766). **Winner**: $497 despite 73% fewer sales. **Why**: Higher perceived value attracted serious buyers who implemented (better testimonials), lower support burden (fewer 'tire-kickers'), higher revenue per student. **Pricing mistakes to avoid**: Under-pricing to 'be competitive' ($27 for 20 hours of content screams low quality). Pricing above transformation value ($2,997 course that saves $500 won't sell). Static pricing forever (increase 10-20% every 6-12 months as you add content/results). **Pro tip**: Survey your audience—ask 'What would you pay for X transformation?' Median response × 1.3 = optimal price. A Notion course creator surveyed 847 email subscribers, median was $147. Priced at $197 ($147 × 1.34). Sold 213 copies first month = $41,961."
  },
  {
    question: "How long does it take to create a course and what's the minimum viable course structure?",
    answer: "**Course creation timeline** depends on scope, but most successful creators launch an **MVP (Minimum Viable Course) in 30-45 days** rather than waiting months for 'perfect'. **MVP Course Structure (10-15 hours content)**: **Module 1: Foundation (2-3 hours)**: Problem definition, mindset shifts, framework overview. **Module 2-4: Core Content (6-9 hours)**: Step-by-step implementation (3 modules × 2-3 hours each). **Module 5: Implementation (2-3 hours)**: Case studies, troubleshooting, next steps. **Bonus: Templates/Resources (downloadable)**: Checklists, templates, swipe files. **Total**: 10-15 hours video + templates. **30-day creation sprint**: **Week 1 (Outline & Validation)**: Day 1-2: Write course outline (5 modules, 3-5 lessons each). Day 3-4: Create lead magnet (free mini-course) to validate interest. Day 5-7: Pre-sell course (record intro video + outline, sell at 50% early-bird discount). **Goal**: 10-20 pre-sales ($2K-10K revenue before creating content). **Week 2-3 (Content Creation)**: Day 8-21: Record 1 module every 3-4 days (2-3 hours video per module × 5 modules = 10-15 hours total). **Equipment**: iPhone + $20 lavalier mic + free CapCut editing. No fancy studio needed. **Template**: Intro (2 min) → Teaching (15-20 min) → Demo/Example (10-15 min) → Action Steps (3 min) per lesson. **Week 4 (Platform & Launch)**: Day 22-24: Upload to platform (Teachable/Thinkific), create sales page. Day 25-26: Email pre-sale buyers with access, gather feedback. Day 27-30: Public launch (email list + social media + affiliate partners). **Real example**: A freelance web designer created 'Client Acquisition Blueprint' in 28 days—Week 1: Outlined 5 modules, pre-sold to email list (23 buyers × $147 = $3,381). Week 2-3: Recorded 12.5 hours video (iPhone + Loom screenshare). Week 4: Uploaded to Teachable, launched publicly (87 more sales = $12,789). **Total**: $16,170 revenue, 28 days start to finish. **Quality vs. Speed**: Don't wait for perfection. Launch MVP, iterate based on student feedback. The designer added Module 6 (Advanced Pricing) 2 months later based on student requests, re-launched to existing students free (built loyalty), charged new students $197 (up from $147). **Minimum content**: You can launch with 5-8 hours of content if transformation is clear. A ChatGPT prompts course (6 hours video + 100 prompts database) sold 412 copies at $97 = $39,964 in 60 days."
  },
  {
    question: "What are the best ways to market an online course in 2026 without a large audience?",
    answer: "**Course marketing in 2026** doesn't require 100K followers—it requires **targeted outreach** to warm audiences. **Strategy 1: Presell to Email List (even if small)**: **Tactic**: Build lead magnet (free mini-course, template, checklist), run $5/day Facebook/Instagram ads for 30 days, collect 300-500 emails. **Timeline**: 30 days pre-launch list building. **Email sequence**: Day 1: Send lead magnet. Day 3-7: Educational emails (3-4 value-first emails). Day 8: Soft pitch (announce course coming, early-bird discount). Day 10: Launch (24-hour early-bird $197 → $297 after). **Expected conversion**: 3-5% of 500-person list = 15-25 sales × $197 = $2,955-4,925. **Real example**: A Notion course creator had 0 email list in January 2026. Ran Facebook ads ($150 budget) for free 'Notion Quick Start Guide' (23-page PDF). Got 387 emails. Launched course 30 days later—18 sales × $197 = $3,546 revenue ($3,396 profit after ad spend). **Strategy 2: YouTube Organic (long-term SEO)**: **Tactic**: Create 10-15 YouTube videos on course topic (how-to tutorials, use case walkthroughs). Each video ends with course CTA. **Timeline**: 60-90 days for traction. **Content formula**: 'How to [achieve outcome] with [tool/method]' (e.g., 'How to Build Your First Notion Dashboard in 15 Minutes'). Include affiliate link to tool + course link in description. **Expected results**: 10 videos × 500-2K views each (in 90 days) = 5K-20K total views. 1-2% click course link = 50-400 landing page visits. 5% convert = 2.5-20 sales × $197 = $493-3,940. **Compounding**: Videos continue driving traffic months/years later (passive sales). **Real example**: A freelance pricing course creator uploaded 12 YouTube videos (Jan-March 2026). First 90 days: 8,400 views total, 11 sales ($2,167). Months 4-6 (no new videos): 14,200 views, 23 sales ($4,531) from older videos ranking in search. **Strategy 3: Affiliate Partners (leverage other audiences)**: **Tactic**: Find 5-10 creators in adjacent niches (slightly different audience, non-competing courses), offer 30-50% commission for sales. **Setup**: Create affiliate program in Teachable/Thinkific (built-in tracking), give partners unique link + promo assets (email swipe copy, social posts, banner images). **Expected results**: Partner with 500-5K follower micro-influencers (more engaged than 100K accounts). Each promotes to email list (1-3 emails). 5 partners × 1,000 list size × 2% conversion × $197 course × 40% commission = $788/partner (you keep $1,182). **Real example**: An Instagram growth course creator partnered with 8 Canva template sellers (adjacent audience: small business owners needing Instagram + design). Each seller promoted to email list (2,500 avg size). 8 partners × 2,500 × 1.8% conversion = 360 sales × $247 = $88,920. Paid $35,568 in commissions (40%). **Net profit**: $53,352. **Strategy 4: Guest Podcast Appearances (authority building)**: **Tactic**: Pitch 10-20 podcasts in your niche as guest expert. Share actionable tactics (not sales pitch), mention course briefly at end. **Timeline**: 1-2 months pitching + recording. **Pitch template**: 'I help [audience] achieve [outcome]. I'd love to share [specific tactic] on your show. Recent results: [social proof].' **Expected results**: 20 pitches → 5-8 yes responses → 3-5 recorded episodes (some flake). Each podcast: 500-5K downloads. Episode with course link in show notes converts 0.5-1% = 2.5-50 sales per episode. **Real example**: A productivity course creator appeared on 6 podcasts (March-April 2026). Total downloads across 6 episodes: 18,700. Course link in show notes generated 127 clicks, 9 sales ($1,773). **Bonus**: Podcasts remain online forever, continue driving passive sales months later."
  },
  {
    question: "What revenue can I realistically expect from an online course in the first year?",
    answer: "**First-year course revenue** varies wildly based on niche, pricing, and marketing effort, but here are realistic benchmarks: **Scenario 1: Side Hustle (10 hrs/week marketing)**: **Course price**: $197. **Launch strategy**: Email list building (500 subscribers), 1-2 YouTube videos/week, occasional social posts. **Sales timeline**: Month 1 (launch): 15 sales = $2,955. Months 2-3 (warm-up): 8 sales/month = $3,152. Months 4-12 (steady): 12 sales/month × 9 months = $21,276. **Year 1 total**: $27,383. **Profit margin**: 85% (after platform fees, ads). **Net**: $23,276. **Scenario 2: Focused Business (30 hrs/week)**: **Course price**: $297. **Launch strategy**: Aggressive email list building (2,000 subscribers in 90 days via ads), weekly YouTube content, affiliate partnerships, podcast tour. **Sales timeline**: Month 1 (launch): 42 sales = $12,474. Months 2-3 (affiliate promo): 28 sales/month = $16,632. Months 4-12 (organic + evergreen funnel): 35 sales/month × 9 months = $93,555. **Year 1 total**: $122,661. **Profit margin**: 75% (higher ad spend). **Net**: $91,996. **Scenario 3: Full-Time Course Business (50+ hrs/week)**: **Course price**: $497 (flagship) + $97 (intro course upsell). **Launch strategy**: Multi-course ecosystem, paid ads ($2K/month budget), webinar funnels, high-ticket coaching upsell ($2K). **Sales timeline**: Flagship course: Month 1: 78 sales × $497 = $38,766. Months 2-12: 52 sales/month avg × 11 months = $284,284. Intro course (upsell): 187 sales/year × $97 = $18,139. Coaching (10% of course buyers): 85 students × $2,000 = $170,000. **Year 1 total**: $511,189. **Profit margin**: 60% (team, ads, tools). **Net**: $306,713. **Real-world examples**: **Example A (Side hustle)**: A freelance writer created 'Freelance Rate Negotiation' course. $197 price, launched to 340-person email list. Year 1: $24,850 revenue (126 sales). Worked 8-12 hours/week on marketing. **Example B (Focused)**: A Notion consultant created 'Notion for Teams' course. $347 price, ran Facebook ads ($1,500/month), built YouTube channel (24 videos). Year 1: $118,294 revenue (341 sales). Quit day job month 7. **Example C (Full-time)**: A business automation expert created 3-course stack ($97 intro, $497 core, $1,997 advanced) + $3K group coaching. Year 1: $487,300 revenue (mixed product sales). Hired VA month 4, course manager month 8. **Failure rates**: 40-50% of courses never break $5K total revenue. **Why**: Poor niche selection (too broad or no market), no email list pre-launch, no marketing plan beyond 'post on social media'. **Key to $50K+ year 1**: Pre-sell before creating (validates demand), launch to minimum 300-person email list (3-5% conversion = 9-15 sales), commit to consistent marketing (not just launch week). **Time to profitability**: Avg 60-90 days if you pre-sell. 6-12 months if you build course first, market later."
  }
]

export default function CreateOnlineCoursesPage() {

const schema = generateBlogPostSchema({
  title: metadata.title as string,
  description: metadata.description as string,
  slug: "create-online-courses-that-sell-step-by-step-blueprint",
  publishedTime: (metadata.openGraph as any)?.publishedTime as string,
  modifiedTime: (metadata.openGraph as any)?.modifiedTime as string,
  category: metadata.category as string || "Digital Products",
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
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 via-emerald-600/20 to-teal-600/20 opacity-30" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="relative max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 mb-8">
            <BookOpen className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-green-300">Digital Products</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Create Online Courses That Sell:
            <span className="block mt-3 bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 text-transparent bg-clip-text">
              Complete 2026 Blueprint
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-4xl">
            Master online course creation in 2026. Learn platform selection, pricing strategies, content structure, marketing tactics, and real case studies from creators earning $50K+/month selling courses.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700">
              <Sparkles className="w-5 h-5 text-green-400" />
              <span className="text-sm text-gray-300">Published: Feb 22, 2026</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700">
              <span className="text-sm text-gray-300">By Anyro</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700">
              <span className="text-sm text-gray-300">11 min read</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 border border-green-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <DollarSign className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-bold text-white">$27K-511K/Year</h3>
              </div>
              <p className="text-gray-300 text-sm">
                <strong className="text-green-400">Revenue range</strong> - Side hustle to full-time business based on effort level
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/20 border border-emerald-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">30-45 Days</h3>
              </div>
              <p className="text-gray-300 text-sm">
                <strong className="text-emerald-400">MVP launch time</strong> - From idea to first sale with minimum viable course
              </p>
            </div>
            <div className="bg-gradient-to-br from-teal-900/30 to-green-900/20 border border-teal-500/30 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-6 h-6 text-teal-400" />
                <h3 className="text-xl font-bold text-white">85% Margins</h3>
              </div>
              <p className="text-gray-300 text-sm">
                <strong className="text-teal-400">Profit margins</strong> - After platform fees, minimal overhead for digital products
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
              The online course industry hit <strong className="text-white">$350 billion globally in 2026</strong>, yet 40-50% of creators never break $5K total revenue. The difference? <strong className="text-white">Pre-selling before creating</strong>, launching to a minimum 300-person email list, and committing to consistent marketing beyond launch week. This isn't 2020 where you could slap together a course and hope for passive income—2026 requires strategic positioning, value-based pricing, and audience-first creation.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mt-6">
              The good news: You don't need 100K followers. You don't need fancy equipment (iPhone + $20 mic works). You don't need months of content (MVP courses with 10-15 hours sell as well as 50-hour behemoths if the transformation is clear). What you <em>do</em> need: a validated problem to solve, a small engaged audience (300+ emails), and a 30-45 day sprint to create + launch your MVP. This is your complete 2026 blueprint for building a profitable course business from scratch.
            </p>
          </div>

          {/* Platform Comparison Table */}
          <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-700 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Course Platform Comparison 2026</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-zinc-700">
                    <th className="text-left py-3 px-4 text-gray-400">Platform</th>
                    <th className="text-left py-3 px-4 text-gray-400">Starting Price</th>
                    <th className="text-left py-3 px-4 text-gray-400">Transaction Fees</th>
                    <th className="text-left py-3 px-4 text-green-400">Best For</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4 font-semibold">Teachable</td>
                    <td className="py-3 px-4">Free ($5%+$1/sale)</td>
                    <td className="py-3 px-4 text-red-400">5% (Free), 0% ($159/mo)</td>
                    <td className="py-3 px-4 text-green-400">Beginners, &lt;$10K/mo</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4 font-semibold">Thinkific</td>
                    <td className="py-3 px-4">Free forever</td>
                    <td className="py-3 px-4 text-green-400">0% (all plans!)</td>
                    <td className="py-3 px-4 text-green-400">Budget creators, testing</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4 font-semibold">Kajabi</td>
                    <td className="py-3 px-4">$149/month</td>
                    <td className="py-3 px-4 text-green-400">0%</td>
                    <td className="py-3 px-4 text-green-400">$20K+/mo, all-in-one</td>
                  </tr>
                  <tr className="border-b border-zinc-800">
                    <td className="py-3 px-4 font-semibold">Podia</td>
                    <td className="py-3 px-4">$39/month</td>
                    <td className="py-3 px-4 text-green-400">0%</td>
                    <td className="py-3 px-4 text-green-400">Simple setup, bundles</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-400 text-sm mt-4 italic">
              * Prices as of February 2026. Thinkific offers best value with 0% fees on free plan.
            </p>
          </div>

          {/* FAQs */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <FAQSchema faqs={faqs} />
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-br from-green-900/30 via-emerald-900/30 to-teal-900/30 border border-green-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Course Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Learn how to create profitable digital products (including courses, templates, and memberships) in our Digital Products course—designed for creators who want scalable income.
            </p>
            <Link
              href="/courses#digital-products"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-green-500/25"
            >
              <Sparkles className="w-5 h-5" />
              Explore Digital Products Course
            </Link>
          </div>

        </div>
      </section>
    </div>
  )
}
