# IImagined - Complete Project Structure

## Overview
This is a Next.js 15 project with aggressive SEO optimization capabilities and digital product sales features.

## Tech Stack
- **Framework**: Next.js 15.3.2 with App Router
- **Language**: TypeScript (Strict Mode)
- **Styling**: TailwindCSS with shadcn/ui components
- **Animation**: Framer Motion, GSAP
- **Build Tool**: Bun
- **Deployment**: Vercel-optimized with edge runtime support
- **Payment Processing**: Crypto payments via NowPayments
- **UI Libraries**: Magic UI components

## Directory Structure

### Root Configuration Files
```
/
├── package.json              # Node dependencies and scripts
├── package-lock.json        # NPM lockfile
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.ts       # TailwindCSS configuration
├── postcss.config.mjs       # PostCSS configuration
├── next.config.js           # Next.js configuration
├── biome.json              # Biome formatter/linter config
├── eslint.config.mjs       # ESLint configuration
├── vercel.json             # Vercel deployment config
├── netlify.toml            # Netlify deployment config
├── components.json         # shadcn/ui components config
├── middleware.ts           # Next.js middleware
├── bun.lock               # Bun lockfile
├── anyro.png              # Logo/avatar image
├── files_to_fix.txt       # Development notes
├── update_years.sh        # Year update script
├── fix_ai_automation_guide.sh  # Fix script
└── fix_syntax.sh          # Syntax fix script
```

### SEO Strategy Documentation
```
/
├── AI_AUTOMATION_SEO_STRATEGY.md
├── NUCLEAR_SEO_DOMINATION_STRATEGY.md
├── TOXIC_SEO_DOMINATION_STRATEGY.md
├── PROJECT_STRUCTURE.md
└── README.md
```

### Source Code Structure (`/src`)
```
/src
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage with interactive animations
│   ├── metadata.ts        # Global metadata
│   ├── globals.css        # Global styles with animations
│   ├── robots.ts          # Robots.txt generation
│   ├── sitemap.ts         # Sitemap generation
│   ├── opengraph-image.tsx # OG image generation
│   ├── ClientBody.tsx     # Client-side body component
│   │
│   ├── [country]/         # International routing
│   │   ├── layout.tsx
│   │   └── page.tsx
│   │
│   ├── api/               # API Routes
│   │   ├── algorithm-defense/route.ts
│   │   ├── analytics-dashboard/route.ts
│   │   ├── competitor-backlinks/route.ts
│   │   ├── content-variations/route.ts
│   │   ├── ctr/route.ts
│   │   ├── defense/route.ts
│   │   ├── doorway/route.ts
│   │   ├── guest-posts/route.ts
│   │   ├── link-wheel/route.ts
│   │   ├── parasite-seo/route.ts
│   │   ├── pbn/route.ts
│   │   ├── programmatic/route.ts
│   │   ├── rank-tracking/route.ts
│   │   ├── social-signals/route.ts
│   │   ├── bot-trap/route.ts
│   │   ├── admin/             # Admin panel endpoints
│   │   │   ├── stats/route.ts
│   │   │   ├── users/route.ts
│   │   │   ├── posts/route.ts
│   │   │   ├── orders/route.ts
│   │   │   ├── courses/route.ts
│   │   │   ├── emails/route.ts
│   │   │   ├── sales/route.ts
│   │   │   ├── payments/route.ts
│   │   │   └── settings/route.ts
│   │   ├── checkout/          # Payment processing
│   │   │   ├── crypto/route.ts
│   │   │   └── crypto-simple/route.ts
│   │   ├── webhook/           # External webhooks
│   │   │   └── nowpayments/route.ts
│   │   ├── order/            # Order management
│   │   │   └── status/[orderId]/route.ts
│   │   └── security/         # Security endpoints
│   │       └── violation/route.ts
│   │
│   ├── blog/              # Blog pages (50+ articles)
│   │   ├── page.tsx       # Blog index
│   │   ├── [slug]/        # Dynamic blog routes
│   │   │   ├── page.tsx
│   │   │   └── BlogComingSoon.tsx
│   │   ├── 500k-followers/page.tsx
│   │   ├── ai-automation-business/page.tsx
│   │   ├── ai-automation-guide/page.tsx
│   │   ├── ai-automation-guide-toxic-seo/page.tsx
│   │   ├── ai-content-income/page.tsx
│   │   ├── ai-content-opportunity/page.tsx
│   │   ├── ai-era-skills/page.tsx
│   │   ├── ai-image-generation-guide/page.tsx
│   │   ├── ai-influencer-success/page.tsx
│   │   ├── ai-influencer-trends/page.tsx
│   │   ├── chatgpt-automation-tips/page.tsx
│   │   ├── comfyui-comparison/page.tsx
│   │   ├── comfyui-success-story/page.tsx
│   │   ├── comfyui-workflow-library/page.tsx
│   │   ├── content-scaling-framework/page.tsx
│   │   ├── create-faceless-youtube-channel/page.tsx
│   │   ├── creating-ai-influencers/page.tsx
│   │   ├── deepseek-r2-open-source-ai-revolution/page.tsx
│   │   ├── digital-product-pricing/page.tsx
│   │   ├── digital-product-success-story/page.tsx
│   │   ├── digital-products-empire/page.tsx
│   │   ├── digital-products-ideas-2025/page.tsx
│   │   ├── digital-products-that-sell/page.tsx
│   │   ├── email-marketing-guide/page.tsx
│   │   ├── essential-n8n-workflows/page.tsx
│   │   ├── faceless-content-strategy/page.tsx
│   │   ├── how-to-sell-templates/page.tsx
│   │   ├── instagram-growth-2025/page.tsx
│   │   ├── instagram-ignited-success-stories/page.tsx
│   │   ├── instagram-mistakes-lessons/page.tsx
│   │   ├── instagram-monetization-guide/page.tsx
│   │   ├── instagram-reels-guide/page.tsx
│   │   ├── monetize-with-ai/page.tsx
│   │   ├── n8n-automation-success/page.tsx
│   │   ├── n8n-beginners-guide/page.tsx
│   │   ├── passive-income-blueprint/page.tsx
│   │   ├── personal-brand-building/page.tsx
│   │   ├── product-launch-strategy/page.tsx
│   │   ├── prompt-engineering-guide/page.tsx
│   │   ├── sales-page-psychology/page.tsx
│   │   ├── scale-content-creation/page.tsx
│   │   ├── social-media-automation/page.tsx
│   │   ├── social-media-calendar/page.tsx
│   │   ├── tiktok-growth-hacks/page.tsx
│   │   ├── viral-carousel-guide/page.tsx
│   │   ├── whop-clipping/page.tsx
│   │   ├── why-n8n-is-different/page.tsx
│   │   └── youtube-shorts-strategy/page.tsx
│   │
│   ├── admin/page.tsx              # Admin dashboard
│   ├── ai-influencers/page.tsx    # AI influencers product
│   ├── algorithm-defense/page.tsx  # Algorithm defense tools
│   ├── analytics-dashboard/page.tsx # Analytics dashboard
│   ├── clusters/page.tsx           # Content clusters
│   ├── comfyui-workflows/page.tsx  # ComfyUI workflows product
│   ├── competitor-backlinks/page.tsx # Backlink analysis
│   ├── contact/page.tsx            # Contact page
│   ├── ctr/page.tsx                # CTR manipulation
│   ├── defense/page.tsx            # SEO defense tools
│   ├── digital-products/page.tsx   # Digital products listing
│   ├── faq/page.tsx                # FAQ page
│   ├── guest-posts/page.tsx        # Guest post automation
│   ├── instagram-ignited/
│   │   ├── page.tsx               # Instagram course
│   │   └── page.tsx.backup        # Backup file
│   ├── link-wheel/page.tsx         # Link wheel builder
│   ├── login/page.tsx              # Login page
│   ├── n8n-ai-automations/page.tsx # N8N automations product
│   ├── parasite/page.tsx           # Parasite SEO tools
│   ├── pbn/page.tsx                # PBN management
│   ├── rank-tracking/page.tsx      # Rank tracking
│   ├── refund-policy/page.tsx      # Refund policy
│   ├── resources/page.tsx          # Resources page with affiliate links
│   ├── social-signals/page.tsx     # Social signal tools
│   ├── story/page.tsx              # About/Story page
│   └── testimonials/page.tsx       # Testimonials
│
├── components/            # React components
│   ├── AnimatedCard.tsx
│   ├── AnimatedText.tsx
│   ├── BeautifulHero.tsx          # Advanced hero section
│   ├── BlogMetrics.tsx
│   ├── Breadcrumbs.tsx
│   ├── ClusterVisualization.tsx
│   ├── ContentProtection.tsx
│   ├── CTA.tsx
│   ├── CursorTrail.tsx
│   ├── CustomCursor.tsx
│   ├── EnhancedButton.tsx
│   ├── FAQSection.tsx
│   ├── Features.tsx
│   ├── Footer.tsx                 # Enhanced with SVG social icons
│   ├── FortressProvider.tsx
│   ├── Hero.tsx
│   ├── HoverEffects.tsx           # 3D hover effects
│   ├── InfiniteGallery.tsx
│   ├── Interactive3DCard.tsx      # 3D card animations
│   ├── InteractiveBackground.tsx
│   ├── LoadingBar.tsx
│   ├── LoadingSpinner.tsx
│   ├── Navigation.tsx
│   ├── NewsletterSignup.tsx
│   ├── NodeBackground.tsx
│   ├── PageTransition.tsx
│   ├── ParasiteCampaignDashboard.tsx
│   ├── ParticleBackground.tsx
│   ├── PartnerSlider.tsx          # Horizontal scrolling partner showcase
│   ├── Pricing.tsx
│   ├── ScrollAnimation.tsx
│   ├── ScrollProgressIndicator.tsx
│   ├── SEOHead.tsx
│   ├── SocialIcon.tsx             # Universal SVG icon component (25 platforms)
│   ├── TestimonialCarousel.tsx    # Interactive testimonials
│   ├── Testimonials.tsx
│   ├── course/                     # Course-specific components
│   │   └── CourseLayout.tsx
│   ├── magicui/                    # Magic UI components
│   │   ├── animated-gradient-text.tsx
│   │   ├── marquee.tsx
│   │   ├── number-ticker.tsx
│   │   └── shimmer-button.tsx
│   └── ui/                         # shadcn/ui components
│       ├── alert.tsx
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── progress.tsx
│       ├── scroll-area.tsx
│       ├── select.tsx
│       ├── switch.tsx
│       ├── tabs.tsx
│       └── textarea.tsx
│
├── lib/                  # Core library functions
│   ├── ai-content-engine.ts
│   ├── algorithm-update-defense.ts
│   ├── analytics-dashboard-system.ts
│   ├── competitor-backlink-replication.ts
│   ├── content-automation.ts
│   ├── content-cluster-engine.ts
│   ├── ctr-manipulation-network.ts
│   ├── doorway-page-network.ts
│   ├── faq-schema-generator.ts
│   ├── fortress-protection.ts      # Security features
│   ├── guest-post-automation.ts
│   ├── international-seo.ts
│   ├── link-wheel-construction.ts
│   ├── meta-generator.ts
│   ├── negative-seo-defense.ts
│   ├── parasite-seo-engine.ts
│   ├── pbn-quick-deploy.ts
│   ├── performance-optimizer.ts
│   ├── programmatic-factory.ts
│   ├── rank-tracking-system.ts
│   ├── schema-generator.ts
│   ├── sitemap-generator.ts
│   ├── smoothScroll.ts            # Smooth scroll animations
│   ├── social-signal-automation.ts
│   ├── soundManager.ts            # Interactive sound effects
│   └── utils.ts
│
├── config/               # Configuration
│   └── seo.ts
│
├── edge/                 # Edge runtime utilities
│   └── utils.ts
│
├── hooks/                # React hooks
│   └── useScrollAnimation.ts
│
└── utils/                # Utility functions
    └── blogMetrics.ts
```

### Scripts Directory (`/scripts`)
Test and deployment scripts for various SEO systems:
```
/scripts
├── algorithm-defense-test.js
├── algorithm-defense-test-simple.js
├── analytics-dashboard-test.js
├── analytics-dashboard-final-test.js
├── cluster-generation-test.js
├── competitor-backlink-test.js
├── content-generation-test.js
├── ctr-test.js
├── defense-test.js
├── deploy-edge.js
├── doorway-test.js
├── generate-programmatic-pages.js
├── link-wheel-test.js
├── parasite-seo-test.js
├── pbn-test.js
├── rank-tracking-test.js
├── rank-tracking-test-simple.js
└── social-signal-test.js
```

### Output Directories
Generated content and test results:
```
/
├── cluster-test-output/
├── competitor-backlink-output/
├── content-test-output/
├── ctr-output/
├── defense-output/
├── doorway-output/
├── link-wheel-output/
├── parasite-test-output/
├── pbn-output/
├── programmatic-output/
│   └── sample-html/      # 100 generated HTML pages
├── social-signal-output/
└── output/
    └── output.zip
```

### Public Assets (`/public`)
```
/public
├── anyro.png            # Logo/avatar
├── manifest.json        # PWA manifest
├── robots.txt          # Robots file
├── partners/           # Partner logos (14 total)
│   ├── claude.png
│   ├── digitalocean.png
│   ├── google-gemini.png
│   ├── loom.png
│   ├── make.png
│   ├── manus-ai.png
│   ├── n8n.png
│   ├── nvidia.png
│   ├── whop.png
│   └── zapier.png
└── social-icons/       # SVG icon library (50 files)
    ├── beehiiv-black.svg
    ├── beehiiv-color.svg
    ├── claude-black.svg
    ├── claude-color.svg
    ├── digitalocean-black.svg
    ├── digitalocean-color.svg
    ├── discord-black.svg
    ├── discord-color.svg
    ├── facebook-black.svg
    ├── facebook-color.svg
    ├── fanvue-black.svg
    ├── fanvue-color.svg
    ├── gemini-black.svg
    ├── gemini-color.svg
    ├── github-black.svg
    ├── github-color.svg
    ├── instagram-black.svg
    ├── instagram-color.svg
    ├── kling-black.svg
    ├── kling-color.svg
    ├── linkedin-black.svg
    ├── linkedin-color.svg
    ├── loom-black.svg
    ├── loom-color.svg
    ├── make-black.svg
    ├── make-color.svg
    ├── manus-black.svg
    ├── manus-color.svg
    ├── n8n-black.svg
    ├── n8n-color.svg
    ├── nvidia-black.svg
    ├── nvidia-color.svg
    ├── runpod-black.svg
    ├── runpod-color.svg
    ├── snapchat-black.svg
    ├── snapchat-color.svg
    ├── telegram-black.svg
    ├── telegram-color.svg
    ├── tiktok-black.svg
    ├── tiktok-color.svg
    ├── twitter-black.svg
    ├── twitter-color.svg
    ├── whatsapp-black.svg
    ├── whatsapp-color.svg
    ├── whop-black.svg
    ├── whop-color.svg
    ├── youtube-black.svg
    ├── youtube-color.svg
    ├── zapier-black.svg
    └── zapier-color.svg
```

### Build Output (`/out`)
Static export directory with:
- Compiled HTML pages
- Next.js static assets
- Optimized JavaScript chunks
- CSS files
- Font files

### Build Directories
```
/.next/              # Next.js build cache
/edge/               # Edge runtime files
├── edge-worker.js   # Edge worker implementation
└── utils.ts         # Edge utilities

/.same/              # Same Runtime cache
└── todos.md        # Todo tracking
```

## Key Features

### 1. Digital Products
- AI Influencers course
- ComfyUI Workflows
- Instagram Ignited course (500K followers system)
- N8N AI Automations
- Digital Products Empire

### 2. SEO Arsenal
- **Content Generation**: AI-powered content creation at scale
- **Link Building**: Automated link wheel and PBN management
- **CTR Manipulation**: Click-through rate optimization networks
- **Parasite SEO**: Platform exploitation for rankings
- **Defense Systems**: Algorithm update protection
- **Analytics**: Comprehensive tracking and reporting

### 3. Blog System
- 50+ SEO-optimized blog posts
- Dynamic routing with [slug] pattern
- Categories: AI automation, digital products, social media growth
- Built-in metrics tracking
- New posts including DeepSeek R2 AI content

### 4. International SEO
- Country-based routing with [country] dynamic routes
- Multi-language sitemap generation
- Hreflang implementation

### 5. API Endpoints
Complete REST API for:
- All SEO tools and automation systems
- Admin panel functionality
- Payment processing (crypto)
- Order management
- User analytics
- Security monitoring

### 6. Interactive UI Features
- 3D card animations with Interactive3DCard
- Beautiful hero sections with parallax effects
- Smooth scroll animations
- Interactive sound effects
- Custom cursor trails
- Page transitions
- Testimonial carousels
- Number ticker animations
- Gradient text effects
- Shimmer buttons
- Marquee components

### 7. Payment System
- Crypto payment integration via NowPayments
- Order tracking and status management
- Webhook handling for payment notifications
- Admin payment monitoring

### 8. Resources & Affiliates
- Curated resource page with recommended tools and SVG icons
- Affiliate links for:
  - Beehiiv (newsletter platform) - 30-day trial + 20% OFF for 3 months
  - RunPod (GPU cloud computing) - $5-500 signup bonus + instant GPU access
  - Fanvue (creator platform) - Direct signup referral
  - Whop (course hosting) - Agency partner program

### 9. Comprehensive Icon System
- **25 Platform Support**: Social media + business tools
- **50 SVG Files**: Color and black variants for each platform
- **Universal Component**: SocialIcon.tsx handles all platforms
- **Platform Coverage**:
  - **Social Media**: Instagram, YouTube, Twitter, TikTok, Facebook, LinkedIn, GitHub, Discord, Telegram, Snapchat, WhatsApp
  - **Business Tools**: Fanvue, NVIDIA, DigitalOcean, N8N, Zapier, Make, Loom, Beehiiv, Whop, Manus, Kling AI, Claude, Gemini, RunPod
- **Implementation**: Integrated across all pages where contextually relevant
- **Features**: Hover effects, size variations, external link support

### 10. Enhanced User Experience
- **AI-Generated Testimonials**: Updated across all pages using randomuser.me API
- **Partner Showcase**: Horizontal scrolling slider with 14 partner logos
- **Platform Integration**: Tool icons displayed throughout resources and course pages
- **Visual Consistency**: Unified icon system with proper TypeScript typing

## Scripts & Commands

```bash
# Development
bun dev              # Start dev server with Turbopack

# Build & Deploy
bun build           # Build for production
bun start           # Start production server

# Code Quality
bun lint            # Run TypeScript & ESLint checks
bun format          # Format with Biome

# SEO Tools (via scripts/)
node scripts/generate-programmatic-pages.js
node scripts/cluster-generation-test.js
node scripts/competitor-backlink-test.js
```

## Environment & Deployment
- Optimized for Vercel deployment
- Edge runtime support for global performance
- Static export capability
- Netlify configuration included
- TypeScript strict mode enabled
- Next.js 15 with App Router
- Promise-based API route parameters

## Recent Updates
- Fixed TypeScript compilation errors for Vercel deployment
- Updated component prop interfaces for consistency
- Added affiliate links to resources page with specific user benefits
- Fixed horizontal scrolling partner slider animation (14 partners)
- Integrated Magic UI components for enhanced animations
- Added payment tracking system
- Enhanced homepage with interactive 3D elements
- **Comprehensive Icon System Implementation**:
  - Created 50 SVG icons (25 platforms × 2 variants each)
  - Built universal SocialIcon.tsx component with TypeScript support
  - Integrated icons throughout entire website where contextually relevant
  - Added PartnerSlider component for homepage partner showcase
- **Updated Testimonials**: AI-generated faces across all 40+ testimonials
- **Enhanced Pages**: Added platform-specific tool showcases to course pages
- **Footer Enhancement**: Replaced text/emoji icons with professional SVG icons

---

*Note: This project contains aggressive SEO optimization tools that should be used responsibly and in compliance with search engine guidelines.*