#!/usr/bin/env node

/**
 * INTERNAL LINKING ANALYZER
 * Analyzes and optimizes internal link structure
 *
 * Features:
 * - Identifies orphan pages (0 internal links)
 * - Finds over-linked pages (50+ links)
 * - Suggests link opportunities
 * - Detects broken internal links
 * - Calculates PageRank-like scores
 * - Generates link building recommendations
 *
 * Usage: node scripts/analyze-internal-links.js [--fix] [--visualize]
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Configuration
const CONFIG = {
  blogDir: path.join(process.cwd(), 'src/app/blog'),
  outputDir: path.join(process.cwd(), 'reports/internal-links'),
  minLinksThreshold: 2,
  maxLinksThreshold: 50,
  orphanThreshold: 0,
  baseUrl: 'https://iimagined.ai',
};

// Colors
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

// Analysis results
const results = {
  timestamp: new Date().toISOString(),
  totalPosts: 0,
  linkScore: 0,
  posts: new Map(),
  linkGraph: new Map(),
  orphanPages: [],
  overLinkedPages: [],
  brokenLinks: [],
  topPages: [],
  recommendations: [],
  metrics: {
    avgInternalLinks: 0,
    avgInboundLinks: 0,
    totalInternalLinks: 0,
    orphanCount: 0,
    overLinkedCount: 0,
    brokenLinkCount: 0,
  },
};

/**
 * Extract internal links from content
 */
function extractInternalLinks(content) {
  const links = [];

  // Extract all href attributes that are internal (start with /)
  const linkMatches = content.matchAll(/href=["'](\/[^"']*?)["']/g);

  for (const match of linkMatches) {
    const url = match[1];

    // Skip fragments and queries for simplicity
    const cleanUrl = url.split('#')[0].split('?')[0];

    // Skip non-blog links for this analysis
    if (cleanUrl.startsWith('/blog/') && cleanUrl !== '/blog' && cleanUrl !== '/blog/') {
      links.push(cleanUrl);
    }
  }

  return links;
}

/**
 * Extract anchor text for a link
 */
function extractAnchorText(content, linkUrl) {
  const anchorTexts = [];

  // Find all occurrences of this link with surrounding anchor text
  const regex = new RegExp(`<a[^>]*href=["']${linkUrl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'][^>]*>([^<]*)<\\/a>`, 'gi');
  const matches = content.matchAll(regex);

  for (const match of matches) {
    if (match[1] && match[1].trim()) {
      anchorTexts.push(match[1].trim());
    }
  }

  return anchorTexts;
}

/**
 * Scan a single blog post
 */
function scanPost(filePath, content) {
  const slug = path.basename(path.dirname(filePath));
  const url = `/blog/${slug}`;

  const postData = {
    slug,
    url,
    path: filePath,
    title: null,
    outboundLinks: [],
    inboundLinks: [],
    outboundCount: 0,
    inboundCount: 0,
    isOrphan: false,
    isOverLinked: false,
    pageRank: 0,
    isRedirect: false,
    anchorTexts: new Map(),
  };

  // Check if redirect
  if (content.includes('redirect(') && content.includes('// ⚔ ORYANA\'S 301 REDIRECT')) {
    postData.isRedirect = true;
    return postData;
  }

  // Extract title
  const titleMatch = content.match(/title:\s*["']([^"']+)["']/);
  if (titleMatch) {
    postData.title = titleMatch[1];
  }

  // Extract outbound links
  postData.outboundLinks = extractInternalLinks(content);
  postData.outboundCount = postData.outboundLinks.length;

  // Extract anchor texts for each link
  for (const link of postData.outboundLinks) {
    const anchors = extractAnchorText(content, link);
    if (anchors.length > 0) {
      postData.anchorTexts.set(link, anchors);
    }
  }

  return postData;
}

/**
 * Build inbound link graph
 */
function buildLinkGraph() {
  log('\n🔗 Building link graph...', 'cyan');

  // Initialize inbound links for all posts
  for (const [url, post] of results.posts) {
    results.linkGraph.set(url, {
      outbound: post.outboundLinks,
      inbound: [],
    });
  }

  // Build inbound link map
  for (const [sourceUrl, sourcePost] of results.posts) {
    for (const targetLink of sourcePost.outboundLinks) {
      const targetPost = results.posts.get(targetLink);

      if (targetPost) {
        // Valid internal link
        const linkData = results.linkGraph.get(targetLink);
        linkData.inbound.push(sourceUrl);

        targetPost.inboundLinks.push(sourceUrl);
        targetPost.inboundCount++;
      } else {
        // Broken internal link
        results.brokenLinks.push({
          source: sourceUrl,
          target: targetLink,
          sourceTitle: sourcePost.title,
        });
      }
    }
  }

  log(`   ✓ Link graph built`, 'green');
}

/**
 * Calculate PageRank-like scores
 */
function calculatePageRank(iterations = 10, dampingFactor = 0.85) {
  log('📊 Calculating page authority scores...', 'cyan');

  const N = results.posts.size;

  // Initialize PageRank scores
  for (const [url, post] of results.posts) {
    post.pageRank = 1.0 / N;
  }

  // Iterate to converge
  for (let iter = 0; iter < iterations; iter++) {
    const newScores = new Map();

    for (const [url, post] of results.posts) {
      let rank = (1 - dampingFactor) / N;

      // Sum contributions from inbound links
      for (const inboundUrl of post.inboundLinks) {
        const inboundPost = results.posts.get(inboundUrl);
        if (inboundPost && inboundPost.outboundCount > 0) {
          rank += dampingFactor * (inboundPost.pageRank / inboundPost.outboundCount);
        }
      }

      newScores.set(url, rank);
    }

    // Update scores
    for (const [url, rank] of newScores) {
      results.posts.get(url).pageRank = rank;
    }
  }

  // Normalize scores to 0-100 scale
  const maxRank = Math.max(...Array.from(results.posts.values()).map((p) => p.pageRank));
  for (const post of results.posts.values()) {
    post.pageRank = (post.pageRank / maxRank * 100).toFixed(2);
  }

  log(`   ✓ Authority scores calculated\n`, 'green');
}

/**
 * Identify issues and opportunities
 */
function analyzeIssues() {
  log('🔍 Analyzing link structure...', 'cyan');

  for (const [url, post] of results.posts) {
    if (post.isRedirect) continue;

    // Orphan pages (no inbound links)
    if (post.inboundCount <= CONFIG.orphanThreshold) {
      post.isOrphan = true;
      results.orphanPages.push(post);
      results.metrics.orphanCount++;
    }

    // Over-linked pages
    if (post.outboundCount > CONFIG.maxLinksThreshold) {
      post.isOverLinked = true;
      results.overLinkedPages.push(post);
      results.metrics.overLinkedCount++;
    }
  }

  // Sort by PageRank
  results.topPages = Array.from(results.posts.values())
    .filter((p) => !p.isRedirect)
    .sort((a, b) => parseFloat(b.pageRank) - parseFloat(a.pageRank))
    .slice(0, 20);

  // Calculate metrics
  const activePosts = Array.from(results.posts.values()).filter((p) => !p.isRedirect);
  results.metrics.avgInternalLinks = (
    activePosts.reduce((sum, p) => sum + p.outboundCount, 0) / activePosts.length
  ).toFixed(1);

  results.metrics.avgInboundLinks = (
    activePosts.reduce((sum, p) => sum + p.inboundCount, 0) / activePosts.length
  ).toFixed(1);

  results.metrics.totalInternalLinks = activePosts.reduce((sum, p) => sum + p.outboundCount, 0);
  results.metrics.brokenLinkCount = results.brokenLinks.length;

  log(`   ✓ Analysis complete\n`, 'green');
}

/**
 * Generate recommendations
 */
function generateRecommendations() {
  // Orphan pages
  if (results.orphanPages.length > 0) {
    results.recommendations.push({
      priority: 'critical',
      category: 'Orphan Pages',
      count: results.orphanPages.length,
      message: `${results.orphanPages.length} orphan pages with no inbound links`,
      action: 'Add internal links to these pages from relevant content',
      pages: results.orphanPages.slice(0, 10).map((p) => ({
        slug: p.slug,
        title: p.title,
        url: p.url,
      })),
    });
  }

  // Broken links
  if (results.brokenLinks.length > 0) {
    results.recommendations.push({
      priority: 'high',
      category: 'Broken Links',
      count: results.brokenLinks.length,
      message: `${results.brokenLinks.length} broken internal links detected`,
      action: 'Fix or remove broken links',
      links: results.brokenLinks.slice(0, 10),
    });
  }

  // Over-linked pages
  if (results.overLinkedPages.length > 0) {
    results.recommendations.push({
      priority: 'medium',
      category: 'Over-Linked Pages',
      count: results.overLinkedPages.length,
      message: `${results.overLinkedPages.length} pages with excessive internal links`,
      action: 'Reduce internal links to avoid appearing spammy',
      pages: results.overLinkedPages.slice(0, 10).map((p) => ({
        slug: p.slug,
        title: p.title,
        outboundCount: p.outboundCount,
      })),
    });
  }

  // Link building opportunities
  const lowAuthorityPages = Array.from(results.posts.values())
    .filter((p) => !p.isRedirect && parseFloat(p.pageRank) < 10 && p.inboundCount < 3)
    .sort((a, b) => parseFloat(a.pageRank) - parseFloat(b.pageRank))
    .slice(0, 20);

  if (lowAuthorityPages.length > 0) {
    results.recommendations.push({
      priority: 'medium',
      category: 'Link Building Opportunities',
      count: lowAuthorityPages.length,
      message: `${lowAuthorityPages.length} pages could benefit from more internal links`,
      action: 'Add contextual internal links from high-authority pages',
      pages: lowAuthorityPages.map((p) => ({
        slug: p.slug,
        title: p.title,
        pageRank: p.pageRank,
        inboundCount: p.inboundCount,
      })),
    });
  }
}

/**
 * Scan all blog posts
 */
async function scanAllPosts() {
  log('\n🔍 Scanning blog posts...', 'cyan');
  log(`📁 Directory: ${CONFIG.blogDir}\n`, 'blue');

  const pattern = path.join(CONFIG.blogDir, '**/page.tsx').replace(/\\/g, '/');
  const files = await glob(pattern);

  log(`📊 Found ${files.length} blog posts\n`, 'magenta');
  results.totalPosts = files.length;

  let processedCount = 0;
  let redirectCount = 0;

  for (const file of files) {
    processedCount++;

    if (processedCount % 50 === 0) {
      log(`   Processing ${processedCount}/${files.length}...`, 'blue');
    }

    const content = fs.readFileSync(file, 'utf-8');
    const postData = scanPost(file, content);

    if (postData.isRedirect) {
      redirectCount++;
    }

    results.posts.set(postData.url, postData);
  }

  log(`✓ Processed ${processedCount} posts (${redirectCount} redirects)\n`, 'green');
}

/**
 * Display analysis report
 */
function displayReport() {
  log('\n═══════════════════════════════════════════════════════════', 'cyan');
  log('              INTERNAL LINKING ANALYSIS REPORT', 'cyan');
  log('═══════════════════════════════════════════════════════════\n', 'cyan');

  log(`📅 Report Date: ${new Date(results.timestamp).toLocaleString()}`, 'blue');
  log(`📊 Total Posts: ${results.totalPosts}\n`, 'blue');

  // Link metrics
  log('📈 LINK METRICS:', 'green');
  log(`   Total Internal Links:      ${results.metrics.totalInternalLinks}`, 'blue');
  log(`   Avg Outbound Links/Post:   ${results.metrics.avgInternalLinks}`, 'blue');
  log(`   Avg Inbound Links/Post:    ${results.metrics.avgInboundLinks}`, 'blue');
  log('');

  // Issues summary
  log('🚨 ISSUES DETECTED:', 'yellow');
  log(`   Orphan Pages:              ${results.metrics.orphanCount}`, results.metrics.orphanCount > 0 ? 'red' : 'green');
  log(`   Over-Linked Pages:         ${results.metrics.overLinkedCount}`, results.metrics.overLinkedCount > 0 ? 'yellow' : 'green');
  log(`   Broken Internal Links:     ${results.metrics.brokenLinkCount}`, results.metrics.brokenLinkCount > 0 ? 'red' : 'green');
  log('');

  // Top pages by authority
  log('👑 TOP 10 PAGES BY AUTHORITY:', 'cyan');
  results.topPages.slice(0, 10).forEach((page, i) => {
    log(`   ${i + 1}. [Score: ${page.pageRank}] ${page.title || page.slug}`, 'green');
    log(`      Inbound: ${page.inboundCount} | Outbound: ${page.outboundCount}`, 'blue');
  });
  log('');

  // Orphan pages sample
  if (results.orphanPages.length > 0) {
    log('🔴 ORPHAN PAGES (Sample):', 'red');
    results.orphanPages.slice(0, 5).forEach((page, i) => {
      log(`   ${i + 1}. ${page.title || page.slug}`, 'red');
      log(`      URL: ${page.url}`, 'yellow');
    });
    if (results.orphanPages.length > 5) {
      log(`   ... and ${results.orphanPages.length - 5} more\n`, 'red');
    } else {
      log('');
    }
  }

  // Broken links sample
  if (results.brokenLinks.length > 0) {
    log('🔴 BROKEN INTERNAL LINKS (Sample):', 'red');
    results.brokenLinks.slice(0, 5).forEach((link, i) => {
      log(`   ${i + 1}. ${link.source} → ${link.target}`, 'red');
      log(`      Source: ${link.sourceTitle}`, 'yellow');
    });
    if (results.brokenLinks.length > 5) {
      log(`   ... and ${results.brokenLinks.length - 5} more\n`, 'red');
    } else {
      log('');
    }
  }

  // Recommendations
  if (results.recommendations.length > 0) {
    log('💡 RECOMMENDATIONS:', 'cyan');
    results.recommendations.forEach((rec, i) => {
      const color = rec.priority === 'critical' ? 'red' :
                   rec.priority === 'high' ? 'yellow' : 'blue';
      log(`   ${i + 1}. [${rec.priority.toUpperCase()}] ${rec.category}`, color);
      log(`      ${rec.message}`, 'yellow');
      log(`      → ${rec.action}`, 'cyan');
    });
    log('');
  }

  log('═══════════════════════════════════════════════════════════\n', 'cyan');
}

/**
 * Save detailed report
 */
function saveReport() {
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }

  // Convert Map to object for JSON serialization
  const exportData = {
    ...results,
    posts: Array.from(results.posts.entries()).map(([url, post]) => ({
      ...post,
      anchorTexts: Array.from(post.anchorTexts.entries()),
    })),
    linkGraph: Array.from(results.linkGraph.entries()).map(([url, links]) => ({
      url,
      ...links,
    })),
  };

  const jsonPath = path.join(CONFIG.outputDir, `internal-links-${Date.now()}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(exportData, null, 2));

  const latestPath = path.join(CONFIG.outputDir, 'latest.json');
  fs.writeFileSync(latestPath, JSON.stringify(exportData, null, 2));

  log(`💾 Detailed report saved to: ${jsonPath}`, 'green');
  log(`💾 Latest report: ${latestPath}\n`, 'green');
}

/**
 * Main execution
 */
async function main() {
  try {
    await scanAllPosts();
    buildLinkGraph();
    calculatePageRank();
    analyzeIssues();
    generateRecommendations();
    displayReport();
    saveReport();

    // Exit with error if critical issues found
    if (results.metrics.orphanCount > 50 || results.metrics.brokenLinkCount > 20) {
      log('❌ ANALYSIS FAILED - Critical linking issues detected', 'red');
      process.exit(1);
    } else {
      log('✅ ANALYSIS COMPLETE', 'green');
      process.exit(0);
    }
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

module.exports = { scanPost, buildLinkGraph, calculatePageRank, analyzeIssues };
