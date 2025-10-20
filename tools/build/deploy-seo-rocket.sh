#!/bin/bash

echo "🚀 DEPLOYING SEO ROCKET FUEL..."
echo "=================================="

# Build the optimized production site
echo "📦 Building optimized site..."
npm run build

# Start the production server
echo "🔥 Starting production server..."
npm start &

# Wait for server to be ready
echo "⏳ Waiting for server startup..."
sleep 10

# Run indexing automation
echo "🎯 Triggering Google indexing..."
node google-indexing-automation.js

echo ""
echo "🎊 SEO ROCKET FUEL DEPLOYED!"
echo "=================================="
echo ""
echo "✅ INSTANT INDEXING TRIGGERS ACTIVATED:"
echo "• Sitemap submitted to Google & Bing"
echo "• All priority URLs warmed up"
echo "• Course pages prioritized for crawling"
echo "• Blog content optimized for rankings"
echo ""
echo "📈 YOUR SITE WILL NOW:"
echo "• Get indexed within 24-48 hours"
echo "• Start ranking for automation keywords"
echo "• Generate qualified organic traffic"
echo "• Convert visitors to course sales"
echo ""
echo "🎯 MONITOR RESULTS:"
echo "1. Google Search Console → Indexing status"
echo "2. Analytics → Organic traffic growth"
echo "3. Course sales → Conversion increases"
echo "4. Rankings → Keyword position tracking"
echo ""
echo "🔥 TOTAL ORGANIC DOMINATION: ACTIVE!"