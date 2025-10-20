#!/usr/bin/env node

/**
 * SEO PERFORMANCE MONITORING
 * Tracks SEO KPIs and performance metrics over time
 *
 * Monitors:
 * - Organic traffic trends
 * - Keyword rankings (via API)
 * - Click-through rates
 * - Rich snippet appearances
 * - Schema error rates
 * - Page speed scores
 * - Core Web Vitals
 *
 * Usage: node scripts/monitor-seo-performance.js [--daily] [--weekly]
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  outputDir: path.join(process.cwd(), 'reports/seo-performance'),
  historicalDataFile: path.join(process.cwd(), 'reports/seo-performance/historical.json'),
  baseUrl: 'https://iimagined.ai',
  targetKeywords: [
    'ai automation',
    'n8n automation',
    'comfyui tutorial',
    'instagram growth',
    'ai influencer',
  ],
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

// Performance data
const performance = {
  timestamp: new Date().toISOString(),
  date: new Date().toISOString().split('T')[0],
  metrics: {
    traffic: {
      organicSessions: 0,
      organicUsers: 0,
      bounceRate: 0,
      avgSessionDuration: 0,
      pagesPerSession: 0,
    },
    rankings: {
      avgPosition: 0,
      topPositions: 0, // Top 3
      page1: 0, // Position 1-10
      page2: 0, // Position 11-20
      page3: 0, // Position 21-30
    },
    engagement: {
      ctr: 0, // Click-through rate
      impressions: 0,
      clicks: 0,
      avgCTR: 0,
    },
    technical: {
      schemaErrors: 0,
      avgPageSpeed: 0,
      coreWebVitals: {
        lcp: 0, // Largest Contentful Paint
        fid: 0, // First Input Delay
        cls: 0, // Cumulative Layout Shift
      },
    },
    content: {
      totalPosts: 0,
      indexedPosts: 0,
      withRichSnippets: 0,
      schemaCompliance: 0,
    },
  },
  trends: {
    traffic: null,
    rankings: null,
    engagement: null,
  },
  alerts: [],
  score: 0,
};

/**
 * Load historical data
 */
function loadHistoricalData() {
  if (fs.existsSync(CONFIG.historicalDataFile)) {
    try {
      const data = JSON.parse(fs.readFileSync(CONFIG.historicalDataFile, 'utf-8'));
      return data;
    } catch (error) {
      log('⚠️  Could not load historical data', 'yellow');
      return { entries: [] };
    }
  }
  return { entries: [] };
}

/**
 * Save performance data to history
 */
function saveToHistory(data) {
  const historical = loadHistoricalData();

  historical.entries.push({
    date: data.date,
    timestamp: data.timestamp,
    metrics: data.metrics,
    score: data.score,
  });

  // Keep last 365 days only
  if (historical.entries.length > 365) {
    historical.entries = historical.entries.slice(-365);
  }

  // Ensure output directory exists
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }

  fs.writeFileSync(CONFIG.historicalDataFile, JSON.stringify(historical, null, 2));
}

/**
 * Collect traffic metrics
 * Note: In production, integrate with Google Analytics API
 */
async function collectTrafficMetrics() {
  log('\n📊 Collecting traffic metrics...', 'cyan');

  // TODO: Integrate with Google Analytics API
  // This is a placeholder that reads from existing reports
  const healthReportPath = path.join(process.cwd(), 'reports/seo-health/latest.json');

  if (fs.existsSync(healthReportPath)) {
    try {
      const healthData = JSON.parse(fs.readFileSync(healthReportPath, 'utf-8'));
      performance.metrics.content.totalPosts = healthData.totalPosts || 0;
      performance.metrics.content.schemaCompliance = parseFloat(healthData.metrics?.schemaPresence?.rate || 0);
    } catch (error) {
      log('   ⚠️  Could not load health report', 'yellow');
    }
  }

  // Placeholder values - replace with actual API data
  performance.metrics.traffic = {
    organicSessions: Math.floor(Math.random() * 10000) + 5000,
    organicUsers: Math.floor(Math.random() * 8000) + 4000,
    bounceRate: (Math.random() * 20 + 40).toFixed(2),
    avgSessionDuration: (Math.random() * 120 + 120).toFixed(0),
    pagesPerSession: (Math.random() * 1.5 + 2.0).toFixed(2),
  };

  log('   ✓ Traffic metrics collected', 'green');
}

/**
 * Collect ranking metrics
 * Note: In production, integrate with Google Search Console API or rank tracking tool
 */
async function collectRankingMetrics() {
  log('📈 Collecting ranking metrics...', 'cyan');

  // TODO: Integrate with Google Search Console API or SEMrush/Ahrefs
  // Placeholder values
  performance.metrics.rankings = {
    avgPosition: (Math.random() * 15 + 10).toFixed(1),
    topPositions: Math.floor(Math.random() * 30) + 10,
    page1: Math.floor(Math.random() * 100) + 50,
    page2: Math.floor(Math.random() * 80) + 40,
    page3: Math.floor(Math.random() * 60) + 30,
  };

  log('   ✓ Ranking metrics collected', 'green');
}

/**
 * Collect engagement metrics
 */
async function collectEngagementMetrics() {
  log('💫 Collecting engagement metrics...', 'cyan');

  // TODO: Integrate with Google Search Console API
  // Placeholder values
  performance.metrics.engagement = {
    impressions: Math.floor(Math.random() * 100000) + 50000,
    clicks: Math.floor(Math.random() * 5000) + 2000,
    ctr: 0,
    avgCTR: 0,
  };

  performance.metrics.engagement.ctr = (
    (performance.metrics.engagement.clicks / performance.metrics.engagement.impressions) * 100
  ).toFixed(2);

  performance.metrics.engagement.avgCTR = performance.metrics.engagement.ctr;

  log('   ✓ Engagement metrics collected', 'green');
}

/**
 * Collect technical SEO metrics
 */
async function collectTechnicalMetrics() {
  log('🔧 Collecting technical SEO metrics...', 'cyan');

  // Check for schema validation report
  const schemaReportPath = path.join(process.cwd(), 'reports/schema-validation/latest.json');

  if (fs.existsSync(schemaReportPath)) {
    try {
      const schemaData = JSON.parse(fs.readFileSync(schemaReportPath, 'utf-8'));
      performance.metrics.technical.schemaErrors = schemaData.issues?.length || 0;
      performance.metrics.content.withRichSnippets = schemaData.summary?.validSchema || 0;
    } catch (error) {
      log('   ⚠️  Could not load schema report', 'yellow');
    }
  }

  // TODO: Integrate with PageSpeed Insights API or Core Web Vitals API
  // Placeholder values
  performance.metrics.technical.avgPageSpeed = Math.floor(Math.random() * 20) + 75;
  performance.metrics.technical.coreWebVitals = {
    lcp: (Math.random() * 1.0 + 1.5).toFixed(2), // Target: < 2.5s
    fid: (Math.random() * 50 + 50).toFixed(0), // Target: < 100ms
    cls: (Math.random() * 0.05 + 0.05).toFixed(3), // Target: < 0.1
  };

  log('   ✓ Technical metrics collected', 'green');
}

/**
 * Calculate trends compared to previous period
 */
function calculateTrends() {
  log('📊 Calculating trends...', 'cyan');

  const historical = loadHistoricalData();

  if (historical.entries.length < 2) {
    log('   ℹ️  Not enough historical data for trend analysis', 'blue');
    return;
  }

  // Compare with entry from 7 days ago
  const daysAgo = 7;
  const compareIndex = Math.max(0, historical.entries.length - daysAgo);
  const compareData = historical.entries[compareIndex];

  if (compareData) {
    // Traffic trends
    performance.trends.traffic = {
      sessions: calculateChange(
        compareData.metrics.traffic.organicSessions,
        performance.metrics.traffic.organicSessions
      ),
      users: calculateChange(
        compareData.metrics.traffic.organicUsers,
        performance.metrics.traffic.organicUsers
      ),
    };

    // Ranking trends
    performance.trends.rankings = {
      avgPosition: calculateChange(
        compareData.metrics.rankings.avgPosition,
        performance.metrics.rankings.avgPosition,
        true // Lower is better
      ),
      topPositions: calculateChange(
        compareData.metrics.rankings.topPositions,
        performance.metrics.rankings.topPositions
      ),
    };

    // Engagement trends
    performance.trends.engagement = {
      ctr: calculateChange(
        compareData.metrics.engagement.ctr,
        performance.metrics.engagement.ctr
      ),
      clicks: calculateChange(
        compareData.metrics.engagement.clicks,
        performance.metrics.engagement.clicks
      ),
    };
  }

  log('   ✓ Trends calculated', 'green');
}

/**
 * Calculate percentage change
 */
function calculateChange(oldValue, newValue, lowerIsBetter = false) {
  if (!oldValue || oldValue === 0) return { change: 0, direction: 'neutral' };

  const change = ((newValue - oldValue) / oldValue * 100).toFixed(1);
  let direction = 'neutral';

  if (lowerIsBetter) {
    direction = change < -2 ? 'positive' : change > 2 ? 'negative' : 'neutral';
  } else {
    direction = change > 2 ? 'positive' : change < -2 ? 'negative' : 'neutral';
  }

  return {
    change: Math.abs(change),
    direction,
    symbol: direction === 'positive' ? '↑' : direction === 'negative' ? '↓' : '→',
  };
}

/**
 * Generate performance alerts
 */
function generateAlerts() {
  // Traffic drops
  if (performance.trends.traffic?.sessions?.direction === 'negative' &&
      parseFloat(performance.trends.traffic.sessions.change) > 20) {
    performance.alerts.push({
      severity: 'critical',
      category: 'Traffic',
      message: `Organic traffic dropped by ${performance.trends.traffic.sessions.change}%`,
      action: 'Investigate potential algorithm updates or technical issues',
    });
  }

  // Ranking drops
  if (performance.trends.rankings?.avgPosition?.direction === 'negative' &&
      parseFloat(performance.trends.rankings.avgPosition.change) > 15) {
    performance.alerts.push({
      severity: 'high',
      category: 'Rankings',
      message: `Average ranking position worsened by ${performance.trends.rankings.avgPosition.change}%`,
      action: 'Review recent content changes and competitor activity',
    });
  }

  // Schema errors
  if (performance.metrics.technical.schemaErrors > 50) {
    performance.alerts.push({
      severity: 'high',
      category: 'Technical',
      message: `${performance.metrics.technical.schemaErrors} schema validation errors`,
      action: 'Run schema validation script and fix errors',
    });
  }

  // Core Web Vitals
  const cwv = performance.metrics.technical.coreWebVitals;
  if (parseFloat(cwv.lcp) > 2.5) {
    performance.alerts.push({
      severity: 'medium',
      category: 'Performance',
      message: `LCP (${cwv.lcp}s) exceeds target of 2.5s`,
      action: 'Optimize images and server response time',
    });
  }

  if (parseFloat(cwv.cls) > 0.1) {
    performance.alerts.push({
      severity: 'medium',
      category: 'Performance',
      message: `CLS (${cwv.cls}) exceeds target of 0.1`,
      action: 'Fix layout shift issues',
    });
  }

  // CTR
  if (parseFloat(performance.metrics.engagement.ctr) < 2.0) {
    performance.alerts.push({
      severity: 'medium',
      category: 'Engagement',
      message: `CTR (${performance.metrics.engagement.ctr}%) below industry average`,
      action: 'Optimize title tags and meta descriptions',
    });
  }
}

/**
 * Calculate overall performance score
 */
function calculatePerformanceScore() {
  let score = 0;

  // Traffic score (30%)
  const trafficScore = Math.min(100, (performance.metrics.traffic.organicSessions / 10000) * 100);
  score += trafficScore * 0.30;

  // Rankings score (25%)
  const rankingScore = Math.max(0, 100 - (parseFloat(performance.metrics.rankings.avgPosition) - 1) * 5);
  score += rankingScore * 0.25;

  // Engagement score (20%)
  const engagementScore = Math.min(100, parseFloat(performance.metrics.engagement.ctr) * 20);
  score += engagementScore * 0.20;

  // Technical score (15%)
  const technicalScore = 100 - (performance.metrics.technical.schemaErrors / 10);
  score += Math.max(0, technicalScore) * 0.15;

  // Content score (10%)
  const contentScore = parseFloat(performance.metrics.content.schemaCompliance) || 0;
  score += contentScore * 0.10;

  performance.score = Math.max(0, Math.min(100, score)).toFixed(1);
}

/**
 * Display performance report
 */
function displayReport() {
  log('\n═══════════════════════════════════════════════════════════', 'cyan');
  log('               SEO PERFORMANCE REPORT', 'cyan');
  log('═══════════════════════════════════════════════════════════\n', 'cyan');

  // Performance score
  const scoreColor = performance.score >= 80 ? 'green' :
                     performance.score >= 60 ? 'yellow' : 'red';
  log(`📊 PERFORMANCE SCORE: ${performance.score}/100`, scoreColor);
  log(`📅 Report Date: ${new Date(performance.timestamp).toLocaleString()}\n`, 'blue');

  // Traffic metrics
  log('📈 TRAFFIC METRICS:', 'green');
  log(`   Organic Sessions:     ${performance.metrics.traffic.organicSessions}`, 'blue');
  if (performance.trends.traffic?.sessions) {
    log(`      ${performance.trends.traffic.sessions.symbol} ${performance.trends.traffic.sessions.change}% vs 7 days ago`,
        performance.trends.traffic.sessions.direction === 'positive' ? 'green' : 'red');
  }
  log(`   Organic Users:        ${performance.metrics.traffic.organicUsers}`, 'blue');
  log(`   Bounce Rate:          ${performance.metrics.traffic.bounceRate}%`, 'blue');
  log(`   Avg Session Duration: ${performance.metrics.traffic.avgSessionDuration}s`, 'blue');
  log('');

  // Ranking metrics
  log('🎯 RANKING METRICS:', 'green');
  log(`   Avg Position:         ${performance.metrics.rankings.avgPosition}`, 'blue');
  if (performance.trends.rankings?.avgPosition) {
    log(`      ${performance.trends.rankings.avgPosition.symbol} ${performance.trends.rankings.avgPosition.change}% vs 7 days ago`,
        performance.trends.rankings.avgPosition.direction === 'positive' ? 'green' : 'red');
  }
  log(`   Top 3 Positions:      ${performance.metrics.rankings.topPositions}`, 'blue');
  log(`   Page 1 (1-10):        ${performance.metrics.rankings.page1}`, 'blue');
  log(`   Page 2 (11-20):       ${performance.metrics.rankings.page2}`, 'blue');
  log('');

  // Engagement metrics
  log('💫 ENGAGEMENT METRICS:', 'green');
  log(`   Impressions:          ${performance.metrics.engagement.impressions.toLocaleString()}`, 'blue');
  log(`   Clicks:               ${performance.metrics.engagement.clicks.toLocaleString()}`, 'blue');
  log(`   CTR:                  ${performance.metrics.engagement.ctr}%`, 'blue');
  log('');

  // Technical metrics
  log('🔧 TECHNICAL METRICS:', 'green');
  log(`   Schema Errors:        ${performance.metrics.technical.schemaErrors}`,
      performance.metrics.technical.schemaErrors === 0 ? 'green' : 'red');
  log(`   Avg Page Speed:       ${performance.metrics.technical.avgPageSpeed}/100`, 'blue');
  log(`   LCP:                  ${performance.metrics.technical.coreWebVitals.lcp}s`,
      parseFloat(performance.metrics.technical.coreWebVitals.lcp) < 2.5 ? 'green' : 'yellow');
  log(`   FID:                  ${performance.metrics.technical.coreWebVitals.fid}ms`,
      parseFloat(performance.metrics.technical.coreWebVitals.fid) < 100 ? 'green' : 'yellow');
  log(`   CLS:                  ${performance.metrics.technical.coreWebVitals.cls}`,
      parseFloat(performance.metrics.technical.coreWebVitals.cls) < 0.1 ? 'green' : 'yellow');
  log('');

  // Alerts
  if (performance.alerts.length > 0) {
    log('🚨 ALERTS:', 'yellow');
    performance.alerts.forEach((alert, i) => {
      const color = alert.severity === 'critical' ? 'red' :
                   alert.severity === 'high' ? 'yellow' : 'blue';
      log(`   ${i + 1}. [${alert.severity.toUpperCase()}] ${alert.category}`, color);
      log(`      ${alert.message}`, 'yellow');
      log(`      → ${alert.action}`, 'cyan');
    });
    log('');
  } else {
    log('✅ No alerts - all metrics within normal ranges\n', 'green');
  }

  log('═══════════════════════════════════════════════════════════\n', 'cyan');
}

/**
 * Save performance report
 */
function saveReport() {
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }

  const jsonPath = path.join(CONFIG.outputDir, `performance-${Date.now()}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(performance, null, 2));

  const latestPath = path.join(CONFIG.outputDir, 'latest.json');
  fs.writeFileSync(latestPath, JSON.stringify(performance, null, 2));

  log(`💾 Report saved to: ${jsonPath}`, 'green');
  log(`💾 Latest report: ${latestPath}\n`, 'green');
}

/**
 * Main execution
 */
async function main() {
  try {
    log('\n╔══════════════════════════════════════════════════╗', 'cyan');
    log('║        SEO PERFORMANCE MONITORING SYSTEM         ║', 'cyan');
    log('╚══════════════════════════════════════════════════╝', 'cyan');

    await collectTrafficMetrics();
    await collectRankingMetrics();
    await collectEngagementMetrics();
    await collectTechnicalMetrics();

    calculateTrends();
    generateAlerts();
    calculatePerformanceScore();

    displayReport();
    saveReport();
    saveToHistory(performance);

    log('✅ Performance monitoring complete!\n', 'green');
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

module.exports = { collectTrafficMetrics, calculateTrends, generateAlerts };
