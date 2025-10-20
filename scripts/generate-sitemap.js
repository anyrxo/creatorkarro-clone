#!/usr/bin/env node

/**
 * AUTOMATED SITEMAP GENERATOR
 * Generates XML sitemaps with intelligent priority calculation
 *
 * Features:
 * - Scans all blog posts automatically
 * - Extracts lastModified dates from metadata
 * - Calculates priority based on:
 *   - Internal link count (authority)
 *   - Content length
 *   - Publish date freshness
 * - Splits into chunks if needed
 * - Generates sitemap index for large sites
 *
 * Usage: node scripts/generate-sitemap.js [--submit]
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Configuration
const CONFIG = {
  blogDir: path.join(process.cwd(), 'src/app/blog'),
  publicDir: path.join(process.cwd(), 'public'),
  baseUrl: 'https://iimagined.ai',
  maxUrlsPerSitemap: 50000, // Google's limit
  maxSitemapSize: 50 * 1024 * 1024, // 50MB limit
  priorities: {
    homepage: 1.0,
    pillarContent: 0.9,
    blogPost: 0.8,
    oldPost: 0.6,
    redirect: 0.1,
  },
  changeFrequencies: {
    homepage: 'daily',
    pillarContent: 'weekly',
    recentPost: 'weekly',
    oldPost: 'monthly',
    redirect: 'never',
  },
};

// Colors for output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  magenta: '\x1b[35m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

/**
 * Extract metadata from blog post
 */
function extractPostMetadata(filePath, content) {
  const slug = path.basename(path.dirname(filePath));

  const metadata = {
    slug,
    url: `${CONFIG.baseUrl}/blog/${slug}`,
    lastModified: null,
    publishedDate: null,
    isRedirect: false,
    contentLength: 0,
    internalLinkCount: 0,
    title: null,
  };

  // Check if redirect
  if (content.includes('redirect(') && content.includes('// ⚔ ORYANA\'S 301 REDIRECT')) {
    metadata.isRedirect = true;
    return metadata;
  }

  // Extract modified date
  const modifiedMatch = content.match(/modifiedTime:\s*["']([^"']+)["']/);
  if (modifiedMatch) {
    metadata.lastModified = new Date(modifiedMatch[1]);
  }

  // Extract published date
  const publishedMatch = content.match(/publishedTime:\s*["']([^"']+)["']/);
  if (publishedMatch) {
    metadata.publishedDate = new Date(publishedMatch[1]);
  }

  // If no dates found, use file modification time
  if (!metadata.lastModified) {
    const stats = fs.statSync(filePath);
    metadata.lastModified = stats.mtime;
  }

  // Extract title
  const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
  if (titleMatch) {
    metadata.title = titleMatch[1];
  }

  // Calculate content length (rough estimate)
  metadata.contentLength = content.length;

  // Count internal links
  const linkMatches = content.matchAll(/href=["']\/[^"']+["']/g);
  metadata.internalLinkCount = Array.from(linkMatches).length;

  return metadata;
}

/**
 * Calculate priority score for a URL
 */
function calculatePriority(metadata) {
  // Redirects get lowest priority
  if (metadata.isRedirect) {
    return CONFIG.priorities.redirect;
  }

  let priority = CONFIG.priorities.blogPost;

  // Boost for internal links (authority signal)
  if (metadata.internalLinkCount > 20) {
    priority += 0.1;
  } else if (metadata.internalLinkCount > 10) {
    priority += 0.05;
  }

  // Boost for content length (comprehensive content)
  if (metadata.contentLength > 10000) {
    priority += 0.05;
  }

  // Reduce for old content
  if (metadata.lastModified) {
    const ageInDays = (Date.now() - metadata.lastModified.getTime()) / (1000 * 60 * 60 * 24);
    if (ageInDays > 365) {
      priority -= 0.1;
    } else if (ageInDays > 180) {
      priority -= 0.05;
    }
  }

  // Ensure priority is within valid range
  return Math.max(0.1, Math.min(1.0, priority)).toFixed(1);
}

/**
 * Calculate change frequency
 */
function calculateChangeFreq(metadata) {
  if (metadata.isRedirect) {
    return CONFIG.changeFrequencies.redirect;
  }

  if (!metadata.lastModified) {
    return CONFIG.changeFrequencies.oldPost;
  }

  const ageInDays = (Date.now() - metadata.lastModified.getTime()) / (1000 * 60 * 60 * 24);

  if (ageInDays < 30) {
    return CONFIG.changeFrequencies.recentPost;
  } else if (ageInDays < 180) {
    return 'monthly';
  } else {
    return CONFIG.changeFrequencies.oldPost;
  }
}

/**
 * Scan all blog posts
 */
async function scanPosts() {
  log('\n🗺️  Generating sitemap...', 'cyan');
  log(`📁 Scanning: ${CONFIG.blogDir}\n`, 'blue');

  const pattern = path.join(CONFIG.blogDir, '**/page.tsx').replace(/\\/g, '/');
  const files = await glob(pattern);

  log(`📊 Found ${files.length} blog posts\n`, 'magenta');

  const urls = [];
  let processedCount = 0;
  let redirectCount = 0;

  for (const file of files) {
    processedCount++;

    if (processedCount % 50 === 0) {
      log(`   Processing ${processedCount}/${files.length}...`, 'blue');
    }

    const content = fs.readFileSync(file, 'utf-8');
    const metadata = extractPostMetadata(file, content);

    if (metadata.isRedirect) {
      redirectCount++;
    }

    const urlEntry = {
      loc: metadata.url,
      lastmod: metadata.lastModified ? metadata.lastModified.toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
      changefreq: calculateChangeFreq(metadata),
      priority: calculatePriority(metadata),
      metadata, // Keep for analysis
    };

    urls.push(urlEntry);
  }

  log(`✓ Processed ${processedCount} posts (${redirectCount} redirects)\n`, 'green');

  // Sort by priority (highest first)
  urls.sort((a, b) => parseFloat(b.priority) - parseFloat(a.priority));

  return urls;
}

/**
 * Add static pages to sitemap
 */
function getStaticPages() {
  return [
    {
      loc: CONFIG.baseUrl,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: '1.0',
    },
    {
      loc: `${CONFIG.baseUrl}/blog`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: '0.9',
    },
    {
      loc: `${CONFIG.baseUrl}/courses`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.9',
    },
    {
      loc: `${CONFIG.baseUrl}/fx-calc`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'daily',
      priority: '0.8',
    },
  ];
}

/**
 * Generate XML sitemap content
 */
function generateSitemapXML(urls, index = 0) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const url of urls) {
    xml += '  <url>\n';
    xml += `    <loc>${url.loc}</loc>\n`;
    xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `    <priority>${url.priority}</priority>\n`;
    xml += '  </url>\n';
  }

  xml += '</urlset>';

  return xml;
}

/**
 * Generate sitemap index (for multiple sitemaps)
 */
function generateSitemapIndex(sitemapFiles) {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  for (const file of sitemapFiles) {
    xml += '  <sitemap>\n';
    xml += `    <loc>${CONFIG.baseUrl}/${file}</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
    xml += '  </sitemap>\n';
  }

  xml += '</sitemapindex>';

  return xml;
}

/**
 * Split URLs into chunks if needed
 */
function chunkUrls(urls) {
  const chunks = [];
  for (let i = 0; i < urls.length; i += CONFIG.maxUrlsPerSitemap) {
    chunks.push(urls.slice(i, i + CONFIG.maxUrlsPerSitemap));
  }
  return chunks;
}

/**
 * Save sitemaps to public directory
 */
function saveSitemaps(urls) {
  log('💾 Saving sitemaps...', 'cyan');

  // Add static pages
  const staticPages = getStaticPages();
  const allUrls = [...staticPages, ...urls];

  // Check if we need to split into multiple files
  const needsSplit = allUrls.length > CONFIG.maxUrlsPerSitemap;

  if (needsSplit) {
    log(`   Splitting into multiple sitemaps (${allUrls.length} URLs)`, 'yellow');

    const chunks = chunkUrls(allUrls);
    const sitemapFiles = [];

    chunks.forEach((chunk, index) => {
      const filename = `sitemap-${index + 1}.xml`;
      const xml = generateSitemapXML(chunk, index);
      const filePath = path.join(CONFIG.publicDir, filename);

      fs.writeFileSync(filePath, xml);
      sitemapFiles.push(filename);

      log(`   ✓ Generated ${filename} (${chunk.length} URLs)`, 'green');
    });

    // Generate sitemap index
    const indexXml = generateSitemapIndex(sitemapFiles);
    const indexPath = path.join(CONFIG.publicDir, 'sitemap.xml');
    fs.writeFileSync(indexPath, indexXml);

    log(`   ✓ Generated sitemap.xml (index)`, 'green');
  } else {
    // Single sitemap file
    const xml = generateSitemapXML(allUrls);
    const filePath = path.join(CONFIG.publicDir, 'sitemap.xml');

    fs.writeFileSync(filePath, xml);

    log(`   ✓ Generated sitemap.xml (${allUrls.length} URLs)`, 'green');
  }

  // Generate robots.txt if it doesn't exist
  const robotsPath = path.join(CONFIG.publicDir, 'robots.txt');
  if (!fs.existsSync(robotsPath)) {
    const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

Sitemap: ${CONFIG.baseUrl}/sitemap.xml
`;
    fs.writeFileSync(robotsPath, robotsTxt);
    log('   ✓ Generated robots.txt', 'green');
  }

  log('');
}

/**
 * Display sitemap statistics
 */
function displayStats(urls) {
  log('📊 SITEMAP STATISTICS:', 'cyan');
  log('────────────────────────────────────────────────────', 'cyan');

  const total = urls.length;
  const highPriority = urls.filter((u) => parseFloat(u.priority) >= 0.8).length;
  const mediumPriority = urls.filter((u) => parseFloat(u.priority) >= 0.6 && parseFloat(u.priority) < 0.8).length;
  const lowPriority = urls.filter((u) => parseFloat(u.priority) < 0.6).length;

  log(`   Total URLs:       ${total}`, 'blue');
  log(`   High Priority:    ${highPriority} (≥0.8)`, 'green');
  log(`   Medium Priority:  ${mediumPriority} (0.6-0.8)`, 'yellow');
  log(`   Low Priority:     ${lowPriority} (<0.6)`, 'red');

  const recentPosts = urls.filter((u) => {
    if (!u.metadata || !u.metadata.lastModified) return false;
    const ageInDays = (Date.now() - u.metadata.lastModified.getTime()) / (1000 * 60 * 60 * 24);
    return ageInDays < 30;
  }).length;

  log(`   Recent Posts:     ${recentPosts} (< 30 days)`, 'green');
  log('────────────────────────────────────────────────────\n', 'cyan');
}

/**
 * Submit sitemap to search engines
 */
async function submitSitemap() {
  log('📤 Submitting sitemap to search engines...', 'cyan');

  const sitemapUrl = `${CONFIG.baseUrl}/sitemap.xml`;

  // Google Search Console
  const googlePingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
  log(`   Google: ${googlePingUrl}`, 'blue');
  log('   ℹ️  Visit URL to ping Google (requires manual action)', 'yellow');

  // Bing Webmaster Tools
  const bingPingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`;
  log(`   Bing:   ${bingPingUrl}`, 'blue');
  log('   ℹ️  Visit URL to ping Bing (requires manual action)', 'yellow');

  log('\n💡 To automate submissions, set up:');
  log('   1. Google Search Console API credentials', 'cyan');
  log('   2. Bing Webmaster Tools API credentials', 'cyan');
  log('');
}

/**
 * Main execution
 */
async function main() {
  const args = process.argv.slice(2);

  try {
    log('\n╔══════════════════════════════════════════════════╗', 'cyan');
    log('║         AUTOMATED SITEMAP GENERATOR             ║', 'cyan');
    log('╚══════════════════════════════════════════════════╝', 'cyan');

    const urls = await scanPosts();
    saveSitemaps(urls);
    displayStats(urls);

    if (args.includes('--submit')) {
      await submitSitemap();
    }

    log('✅ Sitemap generation complete!\n', 'green');

  } catch (error) {
    log(`\n❌ ERROR: ${error.message}`, 'red');
    console.error(error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { scanPosts, generateSitemapXML, calculatePriority };
