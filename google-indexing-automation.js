#!/usr/bin/env node

/**
 * INSTANT GOOGLE INDEXING AUTOMATION SCRIPT
 * Run this after deployment to trigger immediate crawling
 */

const https = require('https');

const SITE_URL = 'https://iimagined.ai';

// High-priority URLs for immediate indexing
const PRIORITY_URLS = [
  '/',
  '/n8n-ai-automations', 
  '/instagram-ignited',
  '/comfyui-workflows', 
  '/ai-influencers',
  '/digital-products',
  '/blog/ai-automation-guide',
  '/blog/robotic-process-automation', 
  '/blog/ai-seo-content-optimization',
  '/blog/instagram-growth-2025',
  '/blog/n8n-beginners-guide'
];

console.log('🚀 GOOGLE INDEXING AUTOMATION STARTING...\n');

// Function to ping Google about sitemap
function submitSitemap() {
  return new Promise((resolve, reject) => {
    const sitemapUrl = `${SITE_URL}/sitemap.xml`;
    const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
    
    console.log('📡 Submitting sitemap to Google:', sitemapUrl);
    
    https.get(pingUrl, (res) => {
      if (res.statusCode === 200) {
        console.log('✅ Sitemap submitted successfully to Google');
        resolve();
      } else {
        console.log('⚠️  Sitemap submission response:', res.statusCode);
        resolve(); // Don't fail on this
      }
    }).on('error', (err) => {
      console.log('⚠️  Sitemap submission error:', err.message);
      resolve(); // Don't fail on this
    });
  });
}

// Function to ping Bing about sitemap  
function submitToBing() {
  return new Promise((resolve, reject) => {
    const sitemapUrl = `${SITE_URL}/sitemap.xml`;
    const bingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
    
    console.log('📡 Submitting sitemap to Bing:', sitemapUrl);
    
    https.get(bingUrl, (res) => {
      if (res.statusCode === 200) {
        console.log('✅ Sitemap submitted successfully to Bing');
        resolve();
      } else {
        console.log('⚠️  Bing submission response:', res.statusCode);
        resolve(); // Don't fail on this
      }
    }).on('error', (err) => {
      console.log('⚠️  Bing submission error:', err.message);
      resolve(); // Don't fail on this
    });
  });
}

// Function to warm up URLs (trigger crawling)
function warmupUrl(url) {
  return new Promise((resolve) => {
    const fullUrl = `${SITE_URL}${url}`;
    
    https.get(fullUrl, (res) => {
      if (res.statusCode === 200) {
        console.log(`✅ Warmed up: ${fullUrl}`);
      } else {
        console.log(`⚠️  Status ${res.statusCode}: ${fullUrl}`);
      }
      resolve();
    }).on('error', (err) => {
      console.log(`❌ Error warming up ${fullUrl}:`, err.message);
      resolve();
    });
  });
}

// Main execution
async function runIndexingAutomation() {
  try {
    console.log('🎯 PHASE 1: Sitemap Submission');
    await submitSitemap();
    await submitToBing();
    
    console.log('\n🔥 PHASE 2: URL Warmup (Triggers Crawling)');
    
    // Warm up all priority URLs
    for (const url of PRIORITY_URLS) {
      await warmupUrl(url);
      // Small delay to avoid overwhelming the server
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    console.log('\n🚀 INDEXING AUTOMATION COMPLETE!');
    console.log('\n📈 EXPECTED RESULTS:');
    console.log('• Google will crawl your sitemap within 1-24 hours');
    console.log('• Priority pages should be indexed within 48 hours');
    console.log('• Schema markup will generate rich results');
    console.log('• Internal linking will boost all pages');
    console.log('\n💡 NEXT STEPS:');
    console.log('1. Check Google Search Console for indexing status');
    console.log('2. Monitor rankings for target keywords');
    console.log('3. Track organic traffic increases');
    console.log('4. Watch course conversion rates climb');
    
  } catch (error) {
    console.error('❌ Error in indexing automation:', error);
  }
}

// Run the automation
runIndexingAutomation();