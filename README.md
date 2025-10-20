# IImagined.ai Website

Professional e-learning platform built with Next.js 15, featuring 4 comprehensive courses, 546 blog posts, and advanced marketing automation.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Create environment files
cp .env.example .env.local

# Add your API keys to .env.local
# See docs/security/QUICK_START.md for details

# Run development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
├── src/                    # Source code
│   ├── app/               # Next.js App Router pages
│   │   ├── blog/          # 546 blog posts
│   │   ├── instagram-ignited/
│   │   ├── ai-influencers/
│   │   ├── digital-products/
│   │   └── fx-trading/
│   ├── components/        # React components (69 total)
│   ├── lib/               # Utility libraries
│   └── hooks/             # Custom React hooks
│
├── api/                   # Python Flask API (market data)
├── public/                # Static assets
├── scripts/               # Build and automation scripts
│
├── docs/                  # Documentation (organized)
│   ├── deployment/        # Deployment guides
│   ├── security/          # Security documentation
│   ├── seo-strategy/      # SEO strategy documents
│   ├── blog-system/       # Blog automation docs
│   └── guides/            # General guides
│
├── tools/                 # Development tools
│   ├── seo/               # SEO automation tools
│   ├── blog-automation/   # Blog generation scripts
│   └── build/             # Build utilities
│
└── archive/               # Archived files
    ├── backups/           # Old backups
    └── old-configs/       # Deprecated configs
```

## 🎯 Features

### Courses
- **Instagram Ignited** - 0-500K followers system ($147)
- **AI Influencers** - Virtual model creation ($169)
- **Digital Products** - Knowledge monetization ($189)
- **FX Trading** - Professional forex trading ($197)

### Technology Stack
- **Framework:** Next.js 15.3.2 (App Router)
- **Language:** TypeScript 5.8.3
- **Styling:** Tailwind CSS 3.4.17
- **Animations:** Framer Motion 12.23.12
- **AI Integration:** Google Gemini 2.0 Flash
- **Backend API:** Python Flask (market data)
- **Deployment:** Vercel (static export)

### Key Metrics
- **Total Pages:** 614
- **Blog Posts:** 546
- **Components:** 69
- **Build Time:** 82 seconds
- **Security Grade:** A-

## 📚 Documentation

### Getting Started
- [Quick Start Guide](docs/security/QUICK_START.md) - 3-minute setup
- [Deployment Guide](docs/deployment/DEPLOYMENT_GUIDE.md) - Complete deployment instructions
- [Security Setup](docs/security/SECURITY_SETUP_GUIDE.md) - Environment configuration

### Development
- [API Management](docs/guides/API_MANAGEMENT_GUIDE.md) - API configuration
- [Animation Features](docs/guides/ANIMATION_FEATURES.md) - Animation system
- [Blog System](docs/blog-system/) - Blog automation

### Security
- [Security Audit Report](docs/security/SECURITY_AUDIT_REPORT.md) - Detailed audit
- [Security Changes](docs/security/SECURITY_CHANGES.md) - What changed
- [Phase 1 Complete](docs/security/PHASE_1_COMPLETE.md) - Implementation summary

### SEO Strategy
- [SEO Strategy Docs](docs/seo-strategy/) - Comprehensive SEO documentation
- [Blog Agents](docs/seo-strategy/BLOG_AGENTS_README.md) - Content automation

## 🔒 Security

**Status:** Phase 1 security audit complete ✅

- ✅ API keys migrated to environment variables
- ✅ Rate limiting implemented (30/20/10 req/min)
- ✅ Input validation active
- ✅ Security headers configured
- ✅ Flask debug mode disabled

**Required Actions:**
1. Revoke old exposed API keys (see [Security Guide](docs/security/SECURITY_SETUP_GUIDE.md))
2. Generate new API keys
3. Configure environment files

## 🚀 Deployment

### Prerequisites
- Node.js 18+ installed
- Python 3.11+ (for API)
- Vercel account (or alternative hosting)

### Deploy to Vercel
```bash
# 1. Set up environment files
cp .env.example .env.local
# Edit .env.local with your API keys

# 2. Test build locally
npm run build

# 3. Push to GitHub
git push origin master

# 4. Deploy via Vercel dashboard
# Add environment variables in Vercel settings
```

See [DEPLOYMENT_GUIDE.md](docs/deployment/DEPLOYMENT_GUIDE.md) for detailed instructions.

## 🛠️ Development Scripts

```bash
npm run dev                 # Development server with hot reload
npm run build              # Production build
npm run start              # Start production server
npm run lint               # TypeScript + ESLint check
npm run format             # Format code with Biome
```

## 📊 Performance

- **Build Time:** 82s (614 pages)
- **Bundle Size:** Optimized for static export
- **Target Lighthouse Scores:**
  - Performance: 80+
  - SEO: 95+
  - Accessibility: 90+
  - Best Practices: 90+

## 🤝 Contributing

This is a private project for IImagined.ai. Internal development only.

## 📝 License

Proprietary - All rights reserved

## 📞 Support

For deployment or technical issues:
1. Check [Deployment Guide](docs/deployment/DEPLOYMENT_GUIDE.md)
2. Review [Security Documentation](docs/security/)
3. Contact development team

---

**Last Updated:** October 20, 2025
**Version:** 1.0.0
**Status:** Production-ready with security improvements

Built with ❤️ using Next.js, TypeScript, and AI
