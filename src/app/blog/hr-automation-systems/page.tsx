import React from 'react'
import Link from 'next/link'

import { generateBlogPostSchema } from '@/lib/blog-schema'
import FAQSchema from '@/components/seo/FAQSchema'
import { Sparkles, TrendingUp, Target, Zap, BarChart3, Users, Calendar } from 'lucide-react'

// Comprehensive SEO Metadata
export const metadata = {
  title: "HR Automation Systems: Complete Guide 2026 | Recruiting, Payroll & Performance Management",
  description: "Master HR automation systems in 2026. Learn how to automate recruiting, onboarding, payroll, performance reviews, and employee engagement with BambooHR, Workday, Rippling—saving 20+ hours/week while improving employee experience.",
  keywords: [
    "hr automation systems",
    "hr automation software",
    "automated hr processes",
    "recruiting automation",
    "onboarding automation",
    "payroll automation",
    "performance management automation",
    "hr workflow automation",
    "bamboohr automation",
    "workday automation",
    "rippling hr",
    "gusto payroll automation",
    "hr systems 2026",
    "hris automation",
    "employee onboarding automation",
    "hr tech stack",
    "automated performance reviews"
  ],
  authors: [{ name: "Anyro", url: "https://iimagined.ai" }],
  creator: "IImagined.ai",
  publisher: "IImagined.ai",
  category: "Business Automation",
  openGraph: {
    title: "HR Automation Systems: Complete Guide 2026 | Recruiting, Payroll & Performance Management",
    description: "Master HR automation systems in 2026. Automate recruiting, onboarding, payroll, performance reviews, and employee engagement—saving 20+ hours/week while improving employee experience.",
    url: "https://iimagined.ai/blog/hr-automation-systems",
    siteName: "IImagined.ai",
    type: "article",
    publishedTime: "2026-02-28T10:00:00.000Z",
    modifiedTime: "2026-08-03T06:14:29.979Z",
    authors: ["Anyro"],
    tags: [
      "hr automation",
      "hr systems",
      "recruiting automation",
      "payroll automation",
      "hr tech",
      "workforce management",
      "employee experience"
    ],
    images: [{
      url: "https://iimagined.ai/images/hr-automation-systems-og.jpg",
      width: 1200,
      height: 630,
      alt: "HR Automation Systems Complete Guide 2026",
      type: "image/jpeg"
    }],
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    site: "@iimagined_ai",
    creator: "@iimagined_ai",
    title: "HR Automation Systems: Complete Guide 2026",
    description: "Master HR automation with automated recruiting, onboarding, payroll, and performance management. Save 20+ hours/week while improving employee experience.",
    images: [{
      url: "https://iimagined.ai/images/hr-automation-systems-og.jpg",
      alt: "HR Automation Systems Complete Guide 2026"
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
    canonical: "https://iimagined.ai/blog/hr-automation-systems"
  }
}

const faqs = [
  {
    question: "What is HR automation and what processes can be automated?",
    answer: "HR automation uses software and AI to handle repetitive human resources tasks without manual intervention. **Automatable HR processes include**: **1) Recruiting**: Job posting distribution (auto-post to Indeed, LinkedIn, Glassdoor), resume screening (AI ranks candidates by fit score), interview scheduling (calendar syncing with candidates), candidate email sequences (rejection emails, interview reminders). **2) Onboarding**: Document collection (I-9, W-4, benefits forms via digital signature), equipment provisioning (auto-trigger laptop order when offer accepted), access provisioning (auto-create accounts in Slack, email, project tools), onboarding task checklists (automated reminders for Day 1, Week 1, Month 1 tasks). **3) Payroll & Benefits**: Timesheet approval workflows, automated payroll processing, PTO tracking and approval, benefits enrollment, expense reimbursements. **4) Performance Management**: Review cycle reminders, 360 feedback collection, goal tracking, compensation adjustments. **5) Offboarding**: Exit interviews, access revocation, final paycheck processing, COBRA notifications. **What can't be automated (yet)**: Strategic workforce planning, sensitive employee relations issues, executive hiring decisions, workplace culture development. HR automation handles the 'administrative' 70% of HR work, freeing HR teams for the 'strategic' 30%."
  },
  {
    question: "What are the best HR automation systems in 2026?",
    answer: "The top HR automation platforms vary by company size: **For startups (1-50 employees)**: **Rippling** ($8-35/user/month) - All-in-one HR, payroll, IT, and app management. Best for: Tech startups needing unified employee management. **Gusto** ($40-80/month base + $12/user) - Payroll-first platform with basic HR features. Best for: Small businesses prioritizing simple payroll. **For mid-market (50-500 employees)**: **BambooHR** ($5-8/user/month, ~$250/month minimum) - User-friendly HRIS with strong recruiting and onboarding. Best for: Growing companies needing scalable HR infrastructure. **Namely** ($9-25/user/month) - Full-service HR platform with compliance focus. Best for: Companies in regulated industries (healthcare, finance). **For enterprise (500+ employees)**: **Workday** ($40-100+/user/month) - Enterprise-grade HCM with advanced analytics and workforce planning. Best for: Global enterprises needing complex org structures. **SAP SuccessFactors** - Comprehensive talent management suite. Best for: Large organizations already using SAP ecosystem. **Key decision factors**: Existing tech stack integrations, compliance requirements (international payroll, benefits complexity), HR team technical sophistication, budget ($100/month for 10 employees with Gusto vs. $50K+ implementation for Workday)."
  },
  {
    question: "How much does HR automation cost and what's the ROI?",
    answer: "**HR automation costs** (2026 pricing): **Entry-level** (Gusto, Rippling Starter): $500-1,500/month for 20 employees. **Mid-tier** (BambooHR, Namely): $1,500-4,000/month for 100 employees. **Enterprise** (Workday, SAP): $50K-500K+ annual contract for 1,000+ employees. **Hidden costs**: Implementation (10-50% of annual software cost), training, data migration, ongoing maintenance. **ROI breakdown**: A 100-person company using BambooHR ($2,500/month = $30K/year) typically sees: **1) Time savings**: HR team spends 25 hours/week on manual admin tasks (resume screening, data entry, compliance paperwork). Automation reduces this to 8 hours/week = 17 hours saved × $30/hour × 52 weeks = **$26,520 annual savings**. **2) Recruiting efficiency**: Automated applicant tracking reduces time-to-hire from 45 → 28 days. For roles with $80K salary, each week saved = ~$1,500 in opportunity cost. 10 hires/year × 2.4 weeks saved = **$36,000 saved**. **3) Compliance risk reduction**: Automated I-9 verification, FMLA tracking, wage law compliance. Avoiding one compliance penalty ($10K-100K) easily justifies system cost. **4) Employee experience**: Self-service portals (update address, request PTO) reduce HR support tickets by 40%. **Total 3-year ROI**: 250-400% for mid-market companies. Payback period: 6-18 months."
  },
  {
    question: "Can HR automation replace HR staff or is it just a tool?",
    answer: "HR automation is a **force multiplier, not a replacement**. Here's the reality: **What automation replaces**: Manual data entry (copying resumes to spreadsheets), repetitive email sending (interview confirmations), basic Q&A (PTO balance inquiries), compliance form tracking, calendar management. **What automation enables HR to focus on**: Strategic workforce planning (hiring roadmaps aligned to business goals), employee development (career pathing, skill gap analysis), culture building (employee engagement initiatives, DEI programs), complex employee relations (conflict mediation, performance improvement plans), executive talent acquisition. **Real-world example**: A SaaS company with 200 employees had a 3-person HR team spending 60% of time on admin tasks (payroll errors, benefits questions, onboarding paperwork). After implementing Rippling + BambooHR: **Admin time dropped to 20%**, but HR headcount stayed at 3—they redirected effort to launching a management training program, improving employee retention from 82% → 91% (saving $400K in replacement costs). **When automation does reduce headcount**: Very small companies (< 10 employees) can operate with 0 dedicated HR staff using Gusto + automated onboarding. **When it increases headcount**: Fast-growing companies (50 → 200 employees in 2 years) use automation to scale HR without proportional hiring (might add 1 HR person instead of 3). **Bottom line**: Automation shifts HR from tactical execution to strategic partnership with leadership."
  },
  {
    question: "What are the biggest challenges when implementing HR automation?",
    answer: "**Top 5 HR automation implementation challenges**: **1) Data migration nightmares**: Moving employee records from spreadsheets/legacy systems to new HRIS. Expect 20-40 hours of data cleanup (fixing duplicate records, standardizing job titles, validating addresses). **Mitigation**: Hire a data migration consultant ($5K-15K) or accept 3-6 month phased rollout. **2) Change management resistance**: Employees accustomed to manual PTO requests via email resist self-service portals. Managers uncomfortable with digital performance reviews want paper forms. **Mitigation**: Executive sponsorship, hands-on training sessions, 'automation champions' in each department demonstrating value. **3) Integration complexity**: New HR system must connect with payroll, benefits providers, 401(k), background check vendors, ATS. Each integration = 5-20 hours of IT/vendor coordination. **Mitigation**: Choose platforms with pre-built integrations (Rippling has 500+ native integrations vs. Namely's 50). **4) Compliance gaps**: Automated systems must handle state-specific labor laws (California meal break rules, NYC salary transparency). One-size-fits-all automation breaks in multi-state companies. **Mitigation**: Choose systems with compliance expertise (Gusto handles 50-state payroll tax compliance automatically). **5) Over-automation trap**: Automating every HR touchpoint removes human connection. Example: Fully automated rejection emails feel cold; automated onboarding without manager check-ins hurts engagement. **Mitigation**: 80/20 rule—automate administrative tasks, preserve human touchpoints for employee lifecycle milestones (first day, promotions, exits)."
  }
]

export default function HrAutomationSystemsPage() {

const schema = generateBlogPostSchema({
  title: metadata.title as string,
  description: metadata.description as string,
  slug: "hr-automation-systems",
  publishedTime: metadata.openGraph?.publishedTime as string,
  modifiedTime: metadata.openGraph?.modifiedTime as string,
  category: metadata.category as string || "Business Automation",
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
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-emerald-600/20 to-cyan-600/20 opacity-30" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="relative max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/20 to-emerald-500/20 border border-indigo-500/30 mb-8">
            <Users className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium text-indigo-300">Business Automation</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            HR Automation Systems:
            <span className="block mt-3 bg-gradient-to-r from-indigo-400 via-emerald-400 to-cyan-400 text-transparent bg-clip-text">
              Complete Guide 2026
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 max-w-4xl">
            Master HR automation with comprehensive recruiting, onboarding, payroll, and performance management systems. Save 20+ hours per week while improving employee experience with proven automation strategies.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700">
              <Calendar className="w-5 h-5 text-indigo-400" />
              <span className="text-sm text-gray-300">Published: Feb 28, 2026</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700">
              <span className="text-sm text-gray-300">By Anyro</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700">
              <span className="text-sm text-gray-300">10 min read</span>
            </div>
          </div>

          {/* Table of Contents */}
          <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-zinc-700 rounded-2xl p-8 mb-16">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-indigo-400" />
              What You'll Learn
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="#section-1" className="flex items-start gap-3 p-4 rounded-lg hover:bg-zinc-800/50 transition-colors group">
                <Users className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors">What is HR Automation</h3>
                  <p className="text-sm text-gray-400 mt-1">Core processes and benefits</p>
                </div>
              </a>
              <a href="#section-2" className="flex items-start gap-3 p-4 rounded-lg hover:bg-zinc-800/50 transition-colors group">
                <Sparkles className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">Key HR Automation Tools</h3>
                  <p className="text-sm text-gray-400 mt-1">BambooHR, Workday, Rippling comparison</p>
                </div>
              </a>
              <a href="#section-3" className="flex items-start gap-3 p-4 rounded-lg hover:bg-zinc-800/50 transition-colors group">
                <Target className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">Recruiting & Onboarding Automation</h3>
                  <p className="text-sm text-gray-400 mt-1">ATS and onboarding workflows</p>
                </div>
              </a>
              <a href="#section-4" className="flex items-start gap-3 p-4 rounded-lg hover:bg-zinc-800/50 transition-colors group">
                <TrendingUp className="w-5 h-5 text-indigo-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white group-hover:text-indigo-400 transition-colors">Payroll & Benefits Automation</h3>
                  <p className="text-sm text-gray-400 mt-1">Automated payroll and compliance</p>
                </div>
              </a>
              <a href="#section-5" className="flex items-start gap-3 p-4 rounded-lg hover:bg-zinc-800/50 transition-colors group">
                <Zap className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white group-hover:text-emerald-400 transition-colors">Performance Management</h3>
                  <p className="text-sm text-gray-400 mt-1">Automated reviews and engagement</p>
                </div>
              </a>
              <a href="#section-6" className="flex items-start gap-3 p-4 rounded-lg hover:bg-zinc-800/50 transition-colors group">
                <BarChart3 className="w-5 h-5 text-cyan-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">ROI & Implementation Strategy</h3>
                  <p className="text-sm text-gray-400 mt-1">Cost analysis and rollout plans</p>
                </div>
              </a>
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
              HR teams are drowning in administrative quicksand: <strong className="text-white">manually screening 500+ resumes for one role, chasing managers for performance reviews, fixing payroll errors at 11pm the night before payday, and answering the same "What's my PTO balance?" question 47 times per week</strong>. It's not strategic workforce planning—it's glorified data entry dressed up as human resources.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mt-6">
              <strong className="text-white">HR automation systems</strong> flip the script: AI screens resumes in seconds, onboarding workflows trigger automatically when candidates accept offers, payroll runs flawlessly on schedule, and employees self-serve PTO requests through portals. This isn't about replacing HR teams—it's about liberating them from busywork to focus on what actually moves the needle: hiring exceptional talent, building culture, and developing leaders. Welcome to the definitive guide to HR automation in 2026.
            </p>
          </div>

          {/* Section 1: What is HR Automation */}
          <div id="section-1" className="mb-20 scroll-mt-20">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
              <Users className="w-10 h-10 text-indigo-400" />
              What is HR Automation? The Complete Picture
            </h2>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                HR automation is the use of software, AI, and workflow systems to handle repetitive human resources tasks without manual intervention. Think of it as your HR team's tireless digital assistant that never sleeps, never makes data entry errors, and can handle 1,000 tasks simultaneously.
              </p>

              <div className="bg-gradient-to-br from-indigo-900/30 to-emerald-900/20 border border-indigo-500/30 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">The 5 Pillars of HR Automation</h3>

                <div className="space-y-6">
                  <div className="bg-zinc-900/50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-indigo-400 mb-3">1. Recruiting Automation (Applicant Tracking Systems)</h4>
                    <p className="text-gray-300 mb-4">
                      <strong className="text-white">What gets automated:</strong> Job posting distribution across 50+ job boards (Indeed, LinkedIn, Glassdoor) with one click, AI-powered resume screening that ranks candidates by fit score (95% accuracy in 2026), automated interview scheduling that syncs with candidate and interviewer calendars, rejection/acceptance email sequences.
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Real example:</strong> A tech startup hiring for 5 roles receives 2,500 applications. Manual screening = 83 hours of HR time. Automated ATS (Lever, Greenhouse) screens all resumes in 20 minutes, ranks top 50 candidates, and auto-sends interview invites to top 15. HR time: 3 hours to review AI recommendations and schedule interviews. <strong className="text-emerald-400">Time saved: 96%</strong>.
                    </p>
                  </div>

                  <div className="bg-zinc-900/50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-emerald-400 mb-3">2. Onboarding Automation</h4>
                    <p className="text-gray-300 mb-4">
                      <strong className="text-white">What gets automated:</strong> Digital document collection (I-9, W-4, direct deposit forms with e-signatures), equipment provisioning (laptop order triggered when offer accepted), IT access provisioning (auto-create email, Slack, GitHub accounts), onboarding checklists (Day 1: complete benefits enrollment, Week 1: meet team, Month 1: first 1-on-1 with manager—all with automated reminders).
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Real example:</strong> A 150-person SaaS company onboards 40 employees/year. Manual onboarding = 12 hours per employee (paperwork, account setup, training scheduling) = 480 hours annually. With BambooHR + Rippling automation, onboarding drops to 2 hours per employee (HR just verifies completion). <strong className="text-emerald-400">Time saved: 400 hours/year = $12,000 at $30/hour</strong>.
                    </p>
                  </div>

                  <div className="bg-zinc-900/50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-cyan-400 mb-3">3. Payroll & Benefits Automation</h4>
                    <p className="text-gray-300 mb-4">
                      <strong className="text-white">What gets automated:</strong> Timesheet approval workflows, bi-weekly/monthly payroll processing (calculating gross pay, taxes, deductions, net pay), direct deposit distribution, PTO accrual tracking, PTO request approval chains, benefits enrollment during open enrollment periods, health insurance premium deductions, 401(k) contribution processing.
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Real example:</strong> A 75-person manufacturing company processes payroll manually using spreadsheets. Payroll manager spends 8 hours every two weeks calculating hours, taxes, deductions = 208 hours/year. Switching to Gusto reduces payroll processing to 1 hour every two weeks (just review & approve) = 26 hours/year. <strong className="text-cyan-400">Time saved: 182 hours = $5,460 saved annually</strong>.
                    </p>
                  </div>

                  <div className="bg-zinc-900/50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-indigo-400 mb-3">4. Performance Management Automation</h4>
                    <p className="text-gray-300 mb-4">
                      <strong className="text-white">What gets automated:</strong> Review cycle reminders (Q1 reviews due March 15—auto-send reminders 30 days, 14 days, 3 days before deadline), 360-degree feedback collection (automated emails to peers/reports/managers requesting feedback), goal tracking (quarterly OKRs with progress updates), compensation adjustment workflows (merit increase approvals routed through management chain).
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Real example:</strong> A 200-person company conducts annual reviews. Manual process: HR chases 50 managers for reviews (15 hours), compiles feedback (12 hours), schedules review meetings (8 hours) = 35 hours. Lattice/15Five automation sends reminders, collects feedback, and generates review reports automatically. HR time: 5 hours to monitor completion. <strong className="text-emerald-400">Time saved: 30 hours per review cycle</strong>.
                    </p>
                  </div>

                  <div className="bg-zinc-900/50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-emerald-400 mb-3">5. Employee Self-Service Portals</h4>
                    <p className="text-gray-300 mb-4">
                      <strong className="text-white">What gets automated:</strong> PTO balance inquiries (employees check portal instead of emailing HR), PTO requests (submit → manager approval → calendar sync, all automated), address/emergency contact updates, paystub downloads, benefits information access, company policy lookups.
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Real example:</strong> A 100-person company receives ~250 HR inquiries monthly (PTO balance, paystub requests, address updates). Each inquiry = 5 minutes of HR time = 21 hours/month = 250 hours/year. Self-service portal reduces inquiries by 75% (only complex questions reach HR). <strong className="text-cyan-400">Time saved: 188 hours/year = $5,640 saved</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-900/30 to-emerald-900/30 border border-indigo-500/30 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">What HR Automation CANNOT (Yet) Replace</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    <p className="text-gray-300"><strong className="text-white">Strategic workforce planning:</strong> Determining whether to hire 10 engineers or 5 salespeople to achieve company goals requires human judgment.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    <p className="text-gray-300"><strong className="text-white">Sensitive employee relations:</strong> Mediating conflicts between team members, handling harassment complaints, conducting difficult terminations.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    <p className="text-gray-300"><strong className="text-white">Executive hiring decisions:</strong> Hiring a VP of Sales requires assessing culture fit, leadership style, industry relationships—nuances AI can't capture.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    <p className="text-gray-300"><strong className="text-white">Culture development:</strong> Building psychological safety, designing team-building experiences, fostering inclusion—deeply human work.</p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                <strong className="text-white">The 70/30 rule:</strong> HR automation handles the "administrative" 70% of HR work (data entry, compliance tracking, scheduling), freeing HR professionals to focus on the "strategic" 30% that truly impacts business outcomes (talent acquisition strategy, leadership development, organizational design, employee engagement initiatives).
              </p>
            </div>
          </div>

          {/* Section 2: Key HR Automation Tools */}
          <div id="section-2" className="mb-20 scroll-mt-20">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
              <Sparkles className="w-10 h-10 text-emerald-400" />
              Best HR Automation Systems 2026: Platform Comparison
            </h2>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                The HR automation landscape has consolidated around a few dominant players, each excelling at different company sizes and use cases. Here's the definitive breakdown:
              </p>

              <div className="space-y-6 mb-8">
                {/* Rippling */}
                <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-xl p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Rippling</h3>
                    <span className="px-4 py-2 bg-indigo-500/20 rounded-full text-indigo-300 text-sm font-semibold">Best for Startups</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-gray-300 mb-4">
                        <strong className="text-white">Pricing:</strong> $8-35/user/month (scales with features). Typical 20-person startup: ~$400/month.
                      </p>
                      <p className="text-gray-300 mb-4">
                        <strong className="text-white">Best for:</strong> Tech startups and high-growth companies (1-500 employees) needing unified HR, payroll, IT, and app management in one platform.
                      </p>
                      <p className="text-gray-300">
                        <strong className="text-white">Standout feature:</strong> Automated app provisioning—when you hire an engineer, Rippling automatically creates accounts in GitHub, Slack, Gmail, Notion, and 500+ other apps, assigns them to the right teams, and revokes access when they leave. IT provisioning time: 5 minutes vs. 3 hours manually.
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-300 mb-4">
                        <strong className="text-white">Real use case:</strong> A 45-person SaaS startup was spending 6 hours per new hire on IT setup (creating 12 different accounts, assigning licenses, configuring permissions). With Rippling, this dropped to 15 minutes (just verify automated setup). For 30 hires/year: <strong className="text-emerald-400">time saved = 172 hours = $5,160 saved</strong>.
                      </p>
                      <p className="text-gray-300">
                        <strong className="text-white">Limitations:</strong> Can be overly complex for non-tech companies. SMBs in traditional industries (retail, hospitality) may find it overkill.
                      </p>
                    </div>
                  </div>

                  <div className="bg-zinc-900/50 rounded-lg p-4">
                    <p className="text-sm text-gray-400"><strong className="text-white">Bottom line:</strong> If you're a tech startup scaling from 10 → 100 employees, Rippling is the gold standard. It grows with you and consolidates 5 different tools (HRIS, payroll, IT management, benefits admin, app management) into one platform.</p>
                  </div>
                </div>

                {/* BambooHR */}
                <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-500/30 rounded-xl p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">BambooHR</h3>
                    <span className="px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-300 text-sm font-semibold">Best for Mid-Market</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-gray-300 mb-4">
                        <strong className="text-white">Pricing:</strong> $5-8/user/month with ~$250/month minimum. Typical 100-person company: ~$600-800/month.
                      </p>
                      <p className="text-gray-300 mb-4">
                        <strong className="text-white">Best for:</strong> Growing companies (50-500 employees) across all industries needing user-friendly HRIS with strong recruiting (ATS) and onboarding.
                      </p>
                      <p className="text-gray-300">
                        <strong className="text-white">Standout feature:</strong> Intuitive UI that non-technical HR teams love. Onboarding workflows are drag-and-drop simple (no coding required). Time-to-value: 2 weeks vs. 3 months for enterprise systems.
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-300 mb-4">
                        <strong className="text-white">Real use case:</strong> A 120-person healthcare company switched from manual onboarding (paper I-9s, physical employee files) to BambooHR. Onboarding time per employee dropped from 8 hours → 1.5 hours. For 25 hires/year: <strong className="text-emerald-400">time saved = 162 hours = $4,860 saved</strong>. Plus, eliminated 15 filing cabinets of paper records.
                      </p>
                      <p className="text-gray-300">
                        <strong className="text-white">Limitations:</strong> Payroll is a separate add-on (integrates with Gusto/ADP). International payroll not supported—U.S. only.
                      </p>
                    </div>
                  </div>

                  <div className="bg-zinc-900/50 rounded-lg p-4">
                    <p className="text-sm text-gray-400"><strong className="text-white">Bottom line:</strong> BambooHR is the "Goldilocks" choice—powerful enough for 200-person companies, simple enough that HR teams love using it. If your HR team isn't tech-savvy, this is your platform.</p>
                  </div>
                </div>

                {/* Gusto */}
                <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-xl p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Gusto</h3>
                    <span className="px-4 py-2 bg-cyan-500/20 rounded-full text-cyan-300 text-sm font-semibold">Best for Payroll</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-gray-300 mb-4">
                        <strong className="text-white">Pricing:</strong> $40-80/month base + $12/user. Typical 15-person company: ~$220/month.
                      </p>
                      <p className="text-gray-300 mb-4">
                        <strong className="text-white">Best for:</strong> Small businesses (1-100 employees) needing simple, affordable payroll with basic HR features (PTO tracking, document storage, onboarding checklists).
                      </p>
                      <p className="text-gray-300">
                        <strong className="text-white">Standout feature:</strong> Fully automated 50-state payroll tax compliance. Gusto calculates federal/state/local payroll taxes, files tax forms (941, W-2, 1099), and handles state unemployment insurance—all automatically. Saves accountants 10+ hours per quarter on payroll taxes.
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-300 mb-4">
                        <strong className="text-white">Real use case:</strong> A 28-person marketing agency was using an external payroll service ($300/month) + manual PTO tracking (spreadsheet). Switched to Gusto ($380/month all-in). Added benefits: automated PTO accrual, employee self-service portal, and integrated 401(k). <strong className="text-emerald-400">Net result: same cost but 12 hours/month saved on PTO tracking = $360/month value</strong>.
                      </p>
                      <p className="text-gray-300">
                        <strong className="text-white">Limitations:</strong> Not built for enterprise. Performance management features are basic. International payroll requires third-party partners.
                      </p>
                    </div>
                  </div>

                  <div className="bg-zinc-900/50 rounded-lg p-4">
                    <p className="text-sm text-gray-400"><strong className="text-white">Bottom line:</strong> If payroll is your #1 pain point and you're under 100 employees, Gusto is the easiest, most affordable solution. It's not a full HRIS, but it nails payroll automation.</p>
                  </div>
                </div>

                {/* Workday */}
                <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">Workday</h3>
                    <span className="px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-semibold">Best for Enterprise</span>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <p className="text-gray-300 mb-4">
                        <strong className="text-white">Pricing:</strong> $40-100+/user/month with minimum commitments ($100K+ annually). Typical 1,000-person enterprise: $600K-1.2M/year.
                      </p>
                      <p className="text-gray-300 mb-4">
                        <strong className="text-white">Best for:</strong> Global enterprises (500+ employees) with complex org structures, international payroll needs, and advanced workforce planning requirements.
                      </p>
                      <p className="text-gray-300">
                        <strong className="text-white">Standout feature:</strong> Predictive analytics powered by ML. Identifies attrition risk 6 months before resignation (87% accuracy), recommends succession planning, forecasts workforce costs. CHRO-level strategic insights unavailable in mid-market systems.
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-300 mb-4">
                        <strong className="text-white">Real use case:</strong> A 5,000-person multinational used separate systems for U.S. payroll (ADP), European payroll (local vendors), HRIS (PeopleSoft), recruiting (Taleo). Total cost: $1.8M/year + 3-month onboarding delays when transferring employees between regions. Consolidated to Workday ($1.2M/year). <strong className="text-emerald-400">Savings: $600K/year + employee transfers now take 2 days</strong>.
                      </p>
                      <p className="text-gray-300">
                        <strong className="text-white">Limitations:</strong> 6-12 month implementation. Requires dedicated Workday admin (full-time role). Overkill for companies under 500 employees.
                      </p>
                    </div>
                  </div>

                  <div className="bg-zinc-900/50 rounded-lg p-4">
                    <p className="text-sm text-gray-400"><strong className="text-white">Bottom line:</strong> Workday is the Salesforce of HR systems—powerful, expensive, enterprise-grade. If you're managing 1,000+ employees across 10+ countries, it's worth the investment. If you're under 500 employees, it's massive overkill.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-indigo-900/30 to-cyan-900/30 border border-indigo-500/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Quick Decision Matrix</h3>
                <div className="space-y-3">
                  <p className="text-gray-300"><strong className="text-indigo-400">1-50 employees, tech company:</strong> Rippling ($200-500/month)</p>
                  <p className="text-gray-300"><strong className="text-emerald-400">1-50 employees, traditional business:</strong> Gusto ($150-400/month)</p>
                  <p className="text-gray-300"><strong className="text-cyan-400">50-500 employees, any industry:</strong> BambooHR ($500-3,000/month)</p>
                  <p className="text-gray-300"><strong className="text-purple-400">500+ employees, multi-national:</strong> Workday ($600K-2M/year)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Recruiting & Onboarding */}
          <div id="section-3" className="mb-20 scroll-mt-20">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
              <Target className="w-10 h-10 text-cyan-400" />
              Recruiting & Onboarding Automation: From Job Post to Day 1
            </h2>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Recruiting is where HR automation delivers the most immediate ROI. A single job posting can generate 500+ applications—manually screening them is a 40-hour task. Automated ATS systems do it in minutes while improving candidate quality.
              </p>

              <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Complete Recruiting Automation Workflow</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-cyan-300 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Job Posting Distribution</h4>
                      <p className="text-gray-300 mb-3">
                        <strong className="text-white">Manual process:</strong> HR manually posts to Indeed (15 min), LinkedIn (10 min), Glassdoor (10 min), company website (5 min), plus 5 niche job boards (50 min). Total: 90 minutes per role.
                      </p>
                      <p className="text-gray-300">
                        <strong className="text-white">Automated (Lever, Greenhouse, SmartRecruiters):</strong> Create job description once → click "Publish" → automatically posts to 50+ job boards + careers page + LinkedIn + Glassdoor. Time: 5 minutes. <strong className="text-emerald-400">Time saved: 85 minutes per role</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-cyan-300 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">AI Resume Screening</h4>
                      <p className="text-gray-300 mb-3">
                        <strong className="text-white">Manual process:</strong> HR screens 500 resumes at 3 minutes each = 25 hours of work (3+ full workdays).
                      </p>
                      <p className="text-gray-300 mb-3">
                        <strong className="text-white">Automated (HireVue, Pymetrics, Modern ATS):</strong> AI scans resumes for required skills, years of experience, education credentials, and keywords. Ranks candidates 1-500 by fit score. Flags top 50 candidates for human review. Time: 10 seconds + 2 hours for HR to review top 50. <strong className="text-emerald-400">Time saved: 23 hours per role</strong>.
                      </p>
                      <p className="text-gray-300">
                        <strong className="text-white">2026 accuracy:</strong> AI screening achieves 95% correlation with human recruiter decisions (up from 78% in 2023). Eliminates unconscious bias by focusing on objective qualifications.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-cyan-300 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Automated Interview Scheduling</h4>
                      <p className="text-gray-300 mb-3">
                        <strong className="text-white">Manual process:</strong> HR emails candidate with 3 time options → candidate replies with availability → HR checks interviewer calendars → sends calendar invite → 4-6 email threads, 20 minutes per interview.
                      </p>
                      <p className="text-gray-300">
                        <strong className="text-white">Automated (Calendly + ATS integration):</strong> ATS sends candidate a Calendly link with available interview slots (synced with interviewer calendars) → candidate books time → calendar invites auto-send to candidate and interviewers. Time: 30 seconds. <strong className="text-emerald-400">Time saved: 19.5 minutes per interview</strong>.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-cyan-300 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Candidate Communication Sequences</h4>
                      <p className="text-gray-300 mb-3">
                        <strong className="text-white">Manual process:</strong> HR manually emails application confirmations, interview invitations, rejection notices, offer letters. For 500 applicants: 500 emails to write/send.
                      </p>
                      <p className="text-gray-300">
                        <strong className="text-white">Automated:</strong> Trigger-based email sequences. When candidate applies → auto-send confirmation. When rejected after screen → auto-send polite rejection. When offered → auto-generate offer letter from template. HR only manually writes emails for final-round candidates. <strong className="text-emerald-400">Time saved: ~450 email drafts per role = 15+ hours</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900/50 rounded-lg p-6 mt-6">
                  <p className="text-gray-300 mb-3">
                    <strong className="text-white">Total time savings per role:</strong> 85 min (posting) + 23 hours (screening) + 195 min (scheduling 10 interviews) + 15 hours (email writing) = <strong className="text-emerald-400">~42 hours saved per hire</strong>.
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-white">For a 100-person company hiring 20 employees/year:</strong> 42 hours × 20 hires = 840 hours saved = $25,200 at $30/hour. ATS cost: $5,000-15,000/year. <strong className="text-emerald-400">ROI: 68-404%</strong>.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Onboarding Automation: From Offer to Productivity</h3>

                <p className="text-gray-300 mb-6">
                  New hire onboarding is where companies lose momentum. Manual processes mean new employees spend Day 1 filling out paperwork instead of meeting their team. Automated onboarding gets employees productive 2 weeks faster.
                </p>

                <div className="space-y-6">
                  <div className="bg-zinc-900/50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-indigo-400 mb-3">Phase 1: Pre-Day 1 (Offer Acceptance → First Day)</h4>
                    <p className="text-gray-300 mb-4">
                      <strong className="text-white">Automated tasks:</strong> Digital document collection (I-9, W-4, direct deposit form, emergency contacts) via DocuSign/HelloSign, background check initiation, equipment order (laptop, monitor, keyboard triggered automatically when offer accepted), IT provisioning (email, Slack, project management tools—accounts created 2 days before start date), benefits enrollment portal access.
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Impact:</strong> New hire completes all paperwork before Day 1 (30-45 minutes at home vs. 3 hours in HR office on first day). Day 1 is now focused on team intros and training, not forms.
                    </p>
                  </div>

                  <div className="bg-zinc-900/50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-emerald-400 mb-3">Phase 2: Day 1 Welcome</h4>
                    <p className="text-gray-300 mb-4">
                      <strong className="text-white">Automated tasks:</strong> Welcome email from CEO (templated but personalized with name, role, team), onboarding checklist visible in HRIS (15 tasks: complete benefits enrollment by Day 3, schedule 1-on-1 with manager by Day 5, complete compliance training by Week 1), Slack auto-post welcoming new hire to #general channel.
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Impact:</strong> New hire feels welcomed and has clear roadmap for first 30 days. Manager receives automated reminders to check in at Day 1, Day 7, Day 30.
                    </p>
                  </div>

                  <div className="bg-zinc-900/50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-cyan-400 mb-3">Phase 3: First 30 Days</h4>
                    <p className="text-gray-300 mb-4">
                      <strong className="text-white">Automated tasks:</strong> Drip training modules (compliance training Week 1, product training Week 2, systems training Week 3), automated reminders for incomplete tasks (if benefits enrollment not done by Day 5 → reminder email), 30-day check-in survey auto-sent to new hire and manager ("How's onboarding going? What could be better?").
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Impact:</strong> Structured onboarding reduces time-to-productivity from 60 days → 30 days (new hire contributing meaningfully twice as fast). Turnover in first 90 days drops from 15% → 6% (better onboarding = better retention).
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg p-6 mt-6">
                  <p className="text-gray-300 mb-3">
                    <strong className="text-white">Real case study:</strong> A 250-person fintech company automated onboarding with BambooHR. Before: HR spent 12 hours per new hire on paperwork, IT setup, and training coordination. After: HR spends 2 hours verifying automated completion. For 60 hires/year: <strong className="text-emerald-400">600 hours saved = $18,000/year</strong>.
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-white">Bonus impact:</strong> New hire NPS (Net Promoter Score) for onboarding experience increased from 42 → 78. Better onboarding = better employer brand = easier future recruiting.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Payroll & Benefits */}
          <div id="section-4" className="mb-20 scroll-mt-20">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
              <TrendingUp className="w-10 h-10 text-indigo-400" />
              Payroll & Benefits Automation: Error-Free Compensation
            </h2>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Payroll errors destroy employee trust faster than anything else. A single miscalculated paycheck triggers 5+ support tickets, erodes morale, and creates compliance risk. Automated payroll systems eliminate 99.7% of human errors while saving 15+ hours per pay period.
              </p>

              <div className="bg-gradient-to-br from-indigo-900/30 to-blue-900/30 border border-indigo-500/30 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">What Gets Automated in Payroll Processing</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-zinc-900/50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-indigo-400 mb-3">Time Tracking → Payroll</h4>
                    <p className="text-gray-300 mb-3">
                      <strong className="text-white">Manual:</strong> Employees submit timesheets → managers approve → HR exports to Excel → manually enters hours into payroll system → calculates gross pay. Time: 6 hours per pay period.
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Automated:</strong> Time tracking software (Toggl, Harvest, BambooHR Time Tracking) auto-syncs with payroll. Hours automatically flow from timesheet → approval workflow → payroll calculation. HR just reviews exceptions. Time: 30 minutes. <strong className="text-emerald-400">Saved: 5.5 hours per pay period = 143 hours/year</strong>.
                    </p>
                  </div>

                  <div className="bg-zinc-900/50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-emerald-400 mb-3">Tax Calculations</h4>
                    <p className="text-gray-300 mb-3">
                      <strong className="text-white">Manual:</strong> HR looks up federal/state/local tax rates → calculates withholdings manually → prone to errors (federal tax rate changes, state-specific rules). Risk: IRS penalties for incorrect withholding.
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Automated (Gusto, ADP):</strong> System automatically applies current tax rates for all 50 states, calculates Social Security, Medicare, federal/state/local withholdings, and adjusts for pre-tax deductions (401k, HSA). <strong className="text-emerald-400">Accuracy: 99.9% (vs 92% manual)</strong>.
                    </p>
                  </div>

                  <div className="bg-zinc-900/50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-cyan-400 mb-3">Direct Deposit Distribution</h4>
                    <p className="text-gray-300 mb-3">
                      <strong className="text-white">Manual:</strong> HR generates ACH file → uploads to bank portal → verifies transactions → sends confirmation emails to employees. Time: 2 hours per pay period.
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Automated:</strong> Payroll system auto-submits ACH file to bank on scheduled pay date. Employees receive auto-generated paystubs via email/portal. HR gets notification when direct deposits clear. Time: 5 minutes. <strong className="text-emerald-400">Saved: 1.9 hours per pay period</strong>.
                    </p>
                  </div>

                  <div className="bg-zinc-900/50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-indigo-400 mb-3">Compliance & Tax Filing</h4>
                    <p className="text-gray-300 mb-3">
                      <strong className="text-white">Manual:</strong> Quarterly: File Form 941 (federal payroll taxes), state unemployment reports. Annually: Generate W-2s, file with SSA. Risk: Missing deadlines = $500-5,000 penalties.
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Automated (Gusto, Rippling):</strong> System auto-files quarterly 941s, state tax reports, and year-end W-2s/1099s. Sends deadline reminders. Guarantees on-time filing or they cover penalties. <strong className="text-emerald-400">Value: Eliminates 95% of compliance penalties</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-500/30 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Benefits Administration Automation</h3>

                <p className="text-gray-300 mb-6">
                  Benefits enrollment is HR's annual nightmare: Open enrollment = 200 employee questions about HSA vs PPO plans, manual data entry into insurance carrier portals, and inevitable errors (wrong coverage tier, missed dependent). Automated benefits admin turns 40 hours of work into 4.
                </p>

                <div className="space-y-6">
                  <div className="bg-zinc-900/50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-emerald-400 mb-3">Open Enrollment Workflow</h4>
                    <p className="text-gray-300 mb-4">
                      <strong className="text-white">Manual process:</strong> HR emails benefits guide PDFs → employees submit paper forms → HR manually enters elections into carrier portals (Blue Cross, Aetna, 401k provider) → 3-4 weeks of data entry.
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Automated (Zenefits, Rippling, Namely):</strong> Employees log into benefits portal → compare plan options with cost calculators → select coverage → e-sign enrollment forms → data auto-syncs to carrier systems. HR just reviews completion dashboard. <strong className="text-emerald-400">Time reduction: 40 hours → 4 hours</strong>.
                    </p>
                  </div>

                  <div className="bg-zinc-900/50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-cyan-400 mb-3">Life Event Changes</h4>
                    <p className="text-gray-300 mb-4">
                      <strong className="text-white">Common life events:</strong> Marriage, birth of child, divorce—all trigger benefits eligibility changes (add spouse to health insurance, start dependent care FSA). Manual process: Employee emails HR → HR updates carrier → confirms via email. Takes 3-7 days, prone to errors.
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Automated:</strong> Employee submits life event through portal → HR approves → system auto-updates all carrier connections + payroll deductions. Takes 24 hours. <strong className="text-emerald-400">Accuracy improves from 88% → 99.4%</strong>.
                    </p>
                  </div>

                  <div className="bg-zinc-900/50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-indigo-400 mb-3">PTO Tracking & Accrual</h4>
                    <p className="text-gray-300 mb-4">
                      <strong className="text-white">Manual process:</strong> Employees email manager for PTO approval → manager emails HR → HR updates spreadsheet → calculates remaining balance. Errors common: wrong balance calculated, forgotten approvals, no audit trail.
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Automated:</strong> Employee requests PTO in HRIS → manager approves/denies in system → approval auto-syncs to calendar + payroll → PTO balance updates in real-time. Accrual rules configured once (e.g., 1.67 days per month) and run automatically. <strong className="text-emerald-400">HR time saved: 12 hours/month on PTO admin</strong>.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-lg p-6 mt-6">
                  <p className="text-gray-300 mb-3">
                    <strong className="text-white">Real case study:</strong> A 180-person professional services firm automated payroll with Gusto and benefits with Zenefits. Before automation: 1 full-time HR coordinator ($55K/year) spent 80% of time on payroll and benefits admin. After automation: Same coordinator now spends 20% on admin, 80% on recruiting and employee development. <strong className="text-emerald-400">Company didn't reduce headcount—they redirected talent to higher-value work</strong>.
                  </p>
                  <p className="text-gray-300">
                    <strong className="text-white">Hidden ROI:</strong> Employee satisfaction with HR increased from 6.2/10 → 8.7/10 (faster response times, self-service convenience, fewer errors).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Performance Management */}
          <div id="section-5" className="mb-20 scroll-mt-20">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
              <Zap className="w-10 h-10 text-emerald-400" />
              Performance Management & Employee Engagement Automation
            </h2>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Annual performance reviews are broken: HR chases managers for 6 weeks to submit reviews, feedback is stale (events from 11 months ago), and the process feels like compliance theater. Modern performance management systems enable continuous feedback, automated review cycles, and goal tracking—transforming reviews from dreaded chore to strategic tool.
              </p>

              <div className="bg-gradient-to-br from-emerald-900/30 to-cyan-900/30 border border-emerald-500/30 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Automated Performance Review Cycles</h3>

                <div className="space-y-6">
                  <div className="bg-zinc-900/50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-emerald-400 mb-3">Review Kickoff & Reminders</h4>
                    <p className="text-gray-300 mb-4">
                      <strong className="text-white">Manual process:</strong> HR emails all managers "Q4 reviews due December 15" → half forget → HR sends individual reminder emails → managers scramble last-minute → reviews late/incomplete. HR spends 15 hours chasing managers.
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Automated (Lattice, 15Five, Culture Amp):</strong> System auto-launches review cycle on scheduled date → sends reminder emails at 30 days, 14 days, 7 days, 3 days, 1 day before deadline → escalates to manager's manager if not completed. Dashboard shows completion rate in real-time. <strong className="text-emerald-400">HR time: 2 hours to monitor dashboard vs. 15 hours chasing</strong>.
                    </p>
                  </div>

                  <div className="bg-zinc-900/50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-cyan-400 mb-3">360-Degree Feedback Collection</h4>
                    <p className="text-gray-300 mb-4">
                      <strong className="text-white">Manual process:</strong> Manager identifies peers/reports to give feedback → HR emails each person individually requesting feedback → compiles responses into document → shares with manager. Time: 45 minutes per employee.
                    </p>
                    <p className="text-gray-300 mb-4">
                      <strong className="text-white">Automated:</strong> Manager selects feedback providers in system → system auto-sends feedback requests with structured questions → reminders sent automatically → feedback compiled into report for manager. Time: 5 minutes per employee. <strong className="text-emerald-400">Time saved: 40 minutes per employee</strong>.
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">For 100-person company:</strong> Annual reviews with 360 feedback = 100 employees × 40 minutes saved = 67 hours = $2,000 saved.
                    </p>
                  </div>

                  <div className="bg-zinc-900/50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-indigo-400 mb-3">Automated Review Templates & Calibration</h4>
                    <p className="text-gray-300 mb-4">
                      <strong className="text-white">Manual process:</strong> Managers write freeform reviews (quality varies wildly). No calibration across teams (one manager's "meets expectations" = another's "exceeds expectations").
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Automated:</strong> System provides structured templates (rate 1-5 on Communication, Technical Skills, Leadership, etc.) + open-ended sections. Calibration dashboard shows rating distribution by team (flags if one manager rates everyone 5/5). <strong className="text-emerald-400">Result: More consistent, fair reviews</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Continuous Feedback & Goal Tracking</h3>

                <p className="text-gray-300 mb-6">
                  The shift from annual reviews → continuous feedback is performance management's biggest trend. Weekly check-ins replace yearly reviews. Automated systems make this scalable.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-zinc-900/50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-indigo-400 mb-3">Weekly Check-in Prompts</h4>
                    <p className="text-gray-300 mb-3">
                      <strong className="text-white">How it works:</strong> Every Friday, employees receive automated email: "What did you accomplish this week? What's blocking you? What do you need from your manager?"
                    </p>
                    <p className="text-gray-300">
                      Responses auto-compile into digest for manager. Manager reviews in 10 minutes vs. scheduling 30-minute 1-on-1s. <strong className="text-emerald-400">Scales to 10+ direct reports without overwhelming managers</strong>.
                    </p>
                  </div>

                  <div className="bg-zinc-900/50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-emerald-400 mb-3">OKR (Objectives & Key Results) Tracking</h4>
                    <p className="text-gray-300 mb-3">
                      <strong className="text-white">Manual:</strong> Employees set goals in Q1 → forget about them until Q4 review → scramble to remember what they accomplished.
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Automated (Lattice, 15Five):</strong> Quarterly OKRs visible in dashboard. Weekly reminders to update progress. <strong className="text-emerald-400">Result: 78% of employees update goals weekly (vs 12% manual)</strong>.
                    </p>
                  </div>

                  <div className="bg-zinc-900/50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-cyan-400 mb-3">Recognition & Kudos</h4>
                    <p className="text-gray-300 mb-3">
                      <strong className="text-white">Feature:</strong> Peer recognition platform (Bonusly, Lattice Praise). Employees give kudos to teammates ("Shoutout to Sarah for fixing the production bug at 9pm!").
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Impact:</strong> Recognition data feeds into reviews. Managers see who's receiving peer kudos (strong culture indicator). <strong className="text-emerald-400">Companies with active recognition see 31% lower turnover</strong>.
                    </p>
                  </div>

                  <div className="bg-zinc-900/50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-indigo-400 mb-3">Attrition Risk Prediction (AI)</h4>
                    <p className="text-gray-300 mb-3">
                      <strong className="text-white">2026 innovation:</strong> AI analyzes patterns (declining engagement survey scores, decreased Slack activity, lack of goal updates, no recent kudos) to predict attrition risk.
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-white">Accuracy:</strong> 87% at identifying flight-risk employees 6 months before resignation. Alerts manager to intervene (offer development opportunity, address concerns). <strong className="text-emerald-400">Retention impact: 15-20% of at-risk employees retained</strong>.
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg p-6 mt-6">
                  <p className="text-gray-300 mb-3">
                    <strong className="text-white">Real case study:</strong> A 300-person e-commerce company switched from annual reviews (HR-driven, dreaded by managers) to continuous feedback with Lattice. Annual turnover dropped from 28% → 18%. Exit interview analysis showed "lack of feedback/growth opportunities" dropped from #1 complaint → #7. <strong className="text-emerald-400">Saved turnover cost: 30 employees retained × $40K replacement cost = $1.2M</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: ROI & Implementation */}
          <div id="section-6" className="mb-20 scroll-mt-20">
            <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
              <BarChart3 className="w-10 h-10 text-cyan-400" />
              ROI Analysis & Implementation Strategy
            </h2>

            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                HR automation isn't cheap—but doing nothing is far more expensive. Here's how to calculate your ROI and build a business case that gets executive buy-in.
              </p>

              <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 border border-cyan-500/30 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Complete ROI Calculation Framework</h3>

                <div className="bg-zinc-900/50 rounded-lg p-6 mb-6">
                  <h4 className="text-xl font-semibold text-cyan-400 mb-4">Example: 100-Person Company Implementing BambooHR + Gusto</h4>

                  <div className="space-y-4">
                    <div>
                      <p className="text-white font-semibold mb-2">Annual Costs:</p>
                      <ul className="space-y-1 text-gray-300 ml-6">
                        <li>• BambooHR: $600/month × 12 = $7,200</li>
                        <li>• Gusto payroll: $380/month × 12 = $4,560</li>
                        <li>• Implementation: $3,000 (one-time)</li>
                        <li>• Training: $1,500 (one-time)</li>
                        <li><strong className="text-white">Total Year 1: $16,260 | Year 2+: $11,760</strong></li>
                      </ul>
                    </div>

                    <div>
                      <p className="text-white font-semibold mb-2">Annual Savings & Value:</p>
                      <ul className="space-y-2 text-gray-300 ml-6">
                        <li><strong className="text-emerald-400">1. HR time savings:</strong>
                          <ul className="ml-6 mt-1 space-y-1 text-sm">
                            <li>• Recruiting (20 hires × 42 hours saved): 840 hours</li>
                            <li>• Onboarding (20 hires × 10 hours saved): 200 hours</li>
                            <li>• Payroll admin (26 pay periods × 5.5 hours saved): 143 hours</li>
                            <li>• PTO tracking: 144 hours/year</li>
                            <li>• Benefits admin: 120 hours/year</li>
                            <li>• Performance reviews (100 employees × 40 min saved): 67 hours</li>
                            <li><strong className="text-white">Total: 1,514 hours × $30/hour = $45,420</strong></li>
                          </ul>
                        </li>
                        <li><strong className="text-emerald-400">2. Recruiting efficiency:</strong> Time-to-hire reduced 17 days → saves $24,000 in opportunity cost (calculated earlier)</li>
                        <li><strong className="text-emerald-400">3. Compliance risk reduction:</strong> Automated I-9, tax filing, wage law compliance. Value of avoiding one $15K penalty = $15,000</li>
                        <li><strong className="text-emerald-400">4. Turnover reduction:</strong> Better onboarding + continuous feedback reduces turnover 5% → 5 employees retained × $40K replacement cost = $200,000</li>
                      </ul>
                    </div>

                    <div className="bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-lg p-4 mt-4">
                      <p className="text-white font-bold mb-2">Total ROI Calculation:</p>
                      <p className="text-gray-300 mb-1">Total annual value: $45,420 + $24,000 + $15,000 + $200,000 = <strong className="text-white">$284,420</strong></p>
                      <p className="text-gray-300 mb-1">Year 1 cost: $16,260</p>
                      <p className="text-emerald-400 text-xl font-bold">Year 1 ROI: 1,649% | Payback period: 21 days</p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-900/50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-indigo-400 mb-4">ROI by Company Size (2026 Benchmarks)</h4>
                  <div className="space-y-3">
                    <p className="text-gray-300"><strong className="text-white">1-50 employees (Gusto + basic HRIS):</strong> $300-600/month cost. Typical ROI: 400-800%. Payback: 2-4 months.</p>
                    <p className="text-gray-300"><strong className="text-white">50-200 employees (BambooHR + mid-tier payroll):</strong> $1,000-2,500/month cost. Typical ROI: 250-500%. Payback: 3-6 months.</p>
                    <p className="text-gray-300"><strong className="text-white">200-1,000 employees (Workday or enterprise suite):</strong> $50K-200K/year cost. Typical ROI: 150-300%. Payback: 12-18 months.</p>
                    <p className="text-gray-300"><strong className="text-white">1,000+ employees (Workday enterprise):</strong> $500K-2M+/year cost. Typical ROI: 100-200%. Payback: 18-24 months.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-white mb-6">Implementation Roadmap: 90-Day Rollout</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-indigo-300 font-bold text-lg">1</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2">Days 1-14: Assessment & Vendor Selection</h4>
                      <ul className="space-y-2 text-gray-300 ml-6">
                        <li>• Audit current HR processes (how much time spent on recruiting, payroll, onboarding?)</li>
                        <li>• Define requirements (company size, industry, compliance needs, integrations)</li>
                        <li>• Demo 3-5 vendors (Rippling, BambooHR, Gusto, Namely, Workday)</li>
                        <li>• Calculate ROI for each option</li>
                        <li>• Get executive approval (present business case with ROI)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-emerald-300 font-bold text-lg">2</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2">Days 15-45: Data Migration & Configuration</h4>
                      <ul className="space-y-2 text-gray-300 ml-6">
                        <li>• Export employee data from current systems (spreadsheets, legacy HRIS)</li>
                        <li>• Clean data (fix duplicate records, standardize job titles, validate addresses)</li>
                        <li>• Configure new system (org structure, approval workflows, PTO policies, pay schedules)</li>
                        <li>• Set up integrations (payroll ↔ benefits, ATS ↔ onboarding, time tracking ↔ payroll)</li>
                        <li>• Run parallel payroll (old + new systems) for 1-2 cycles to verify accuracy</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-cyan-300 font-bold text-lg">3</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2">Days 46-60: Training & Pilot</h4>
                      <ul className="space-y-2 text-gray-300 ml-6">
                        <li>• Train HR team (system admin, report generation, workflow configuration)</li>
                        <li>• Train managers (how to approve PTO, conduct reviews, access team reports)</li>
                        <li>• Launch pilot with 1-2 departments (20-30 employees)</li>
                        <li>• Collect feedback and refine workflows</li>
                        <li>• Document common issues and solutions (knowledge base for support)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-purple-300 font-bold text-lg">4</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-2">Days 61-90: Company-Wide Rollout</h4>
                      <ul className="space-y-2 text-gray-300 ml-6">
                        <li>• Announce rollout to all employees (email + all-hands meeting)</li>
                        <li>• Host employee training sessions (how to use self-service portal, request PTO, view paystubs)</li>
                        <li>• Launch self-service features (employees update their own addresses, download paystubs)</li>
                        <li>• Monitor adoption (track login rates, support ticket volume)</li>
                        <li>• Optimize based on feedback (simplify confusing workflows, add missing features)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-lg p-6 mt-6">
                  <p className="text-white font-semibold mb-2">Critical Success Factors:</p>
                  <ul className="space-y-2 text-gray-300 ml-6">
                    <li><strong className="text-white">Executive sponsorship:</strong> CEO or CFO endorsement eliminates resistance</li>
                    <li><strong className="text-white">Change champions:</strong> Identify 5-10 enthusiastic early adopters to evangelize</li>
                    <li><strong className="text-white">Overcommunicate:</strong> Weekly update emails during rollout (progress, what's coming, how to get help)</li>
                    <li><strong className="text-white">Quick wins:</strong> Launch easiest features first (self-service PTO requests) to build momentum</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-r from-emerald-900/30 to-cyan-900/30 border border-emerald-500/30 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Common Implementation Pitfalls (And How to Avoid Them)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-zinc-900/50 rounded-lg p-4">
                    <p className="text-red-400 font-semibold mb-2">❌ Pitfall: Dirty data migration</p>
                    <p className="text-gray-300 text-sm">✅ Solution: Budget 20-40 hours for data cleanup. Hire consultant if needed ($5K-15K). Worth it to avoid "garbage in, garbage out."</p>
                  </div>
                  <div className="bg-zinc-900/50 rounded-lg p-4">
                    <p className="text-red-400 font-semibold mb-2">❌ Pitfall: Inadequate training</p>
                    <p className="text-gray-300 text-sm">✅ Solution: Live training sessions + recorded videos + written guides. Plan for 2 hours training per user cohort (HR, managers, employees).</p>
                  </div>
                  <div className="bg-zinc-900/50 rounded-lg p-4">
                    <p className="text-red-400 font-semibold mb-2">❌ Pitfall: Over-automation</p>
                    <p className="text-gray-300 text-sm">✅ Solution: Keep human touchpoints for critical moments (first day, promotions, exits). Automate admin, preserve connection.</p>
                  </div>
                  <div className="bg-zinc-900/50 rounded-lg p-4">
                    <p className="text-red-400 font-semibold mb-2">❌ Pitfall: Ignoring compliance</p>
                    <p className="text-gray-300 text-sm">✅ Solution: Choose vendors with built-in compliance (Gusto for 50-state payroll tax, BambooHR for I-9 e-verify). Worth paying more.</p>
                  </div>
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
          <div className="bg-gradient-to-br from-indigo-900/30 via-emerald-900/30 to-cyan-900/30 border border-indigo-500/30 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your HR Operations with Automation?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Learn how to build complete automation systems (including HR workflows, employee onboarding, and performance management) in our AI Automations course—designed for operations teams who want to scale efficiently.
            </p>
            <Link
              href="/courses#ai-automations"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-emerald-700 transition-all shadow-lg hover:shadow-indigo-500/25"
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
