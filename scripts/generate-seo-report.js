#!/usr/bin/env node

/**
 * AUTOMATED SEO REPORTING SYSTEM
 * Generates comprehensive weekly/monthly SEO reports
 *
 * Includes:
 * - Traffic growth/decline analysis
 * - Top performing posts
 * - Posts needing attention
 * - Schema coverage progress
 * - Title optimization progress
 * - New issues detected
 * - Actionable recommendations
 *
 * Usage: node scripts/generate-seo-report.js [--weekly] [--monthly] [--email]
 */

const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  reportsDir: path.join(process.cwd(), 'reports'),
  outputDir: path.join(process.cwd(), 'reports/weekly-reports'),
  baseUrl: 'https://iimagined.ai',
  emailTo: process.env.SEO_REPORT_EMAIL || 'team@iimagined.ai',
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
  bold: '\x1b[1m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Report data
const report = {
  timestamp: new Date().toISOString(),
  date: new Date().toISOString().split('T')[0],
  reportType: 'weekly',
  period: {
    start: null,
    end: null,
  },
  executive_summary: {
    healthScore: 0,
    performanceScore: 0,
    overallStatus: 'unknown',
    keyWins: [],
    keyIssues: [],
    topPriorities: [],
  },
  metrics: {
    health: null,
    performance: null,
    schema: null,
    internalLinks: null,
  },
  insights: {
    trafficTrends: [],
    contentPerformance: [],
    technicalIssues: [],
    opportunities: [],
  },
  recommendations: {
    immediate: [],
    shortTerm: [],
    longTerm: [],
  },
  nextWeekGoals: [],
};

/**
 * Load latest reports
 */
function loadLatestReports() {
  const reports = {};

  // Load SEO health report
  const healthPath = path.join(CONFIG.reportsDir, 'seo-health/latest.json');
  if (fs.existsSync(healthPath)) {
    reports.health = JSON.parse(fs.readFileSync(healthPath, 'utf-8'));
  }

  // Load performance report
  const perfPath = path.join(CONFIG.reportsDir, 'seo-performance/latest.json');
  if (fs.existsSync(perfPath)) {
    reports.performance = JSON.parse(fs.readFileSync(perfPath, 'utf-8'));
  }

  // Load schema validation report
  const schemaPath = path.join(CONFIG.reportsDir, 'schema-validation/latest.json');
  if (fs.existsSync(schemaPath)) {
    reports.schema = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'));
  }

  // Load internal links report
  const linksPath = path.join(CONFIG.reportsDir, 'internal-links/latest.json');
  if (fs.existsSync(linksPath)) {
    reports.internalLinks = JSON.parse(fs.readFileSync(linksPath, 'utf-8'));
  }

  return reports;
}

/**
 * Generate executive summary
 */
function generateExecutiveSummary(reports) {
  log('\n📊 Generating executive summary...', 'cyan');

  // Calculate overall status
  const healthScore = parseFloat(reports.health?.healthScore || 0);
  const perfScore = parseFloat(reports.performance?.score || 0);
  const avgScore = (healthScore + perfScore) / 2;

  report.executive_summary.healthScore = healthScore;
  report.executive_summary.performanceScore = perfScore;
  report.executive_summary.overallStatus = avgScore >= 80 ? 'excellent' :
                                          avgScore >= 60 ? 'good' :
                                          avgScore >= 40 ? 'needs_improvement' : 'critical';

  // Key wins
  if (reports.health?.metrics?.schemaPresence?.rate > 90) {
    report.executive_summary.keyWins.push('✅ Schema markup coverage exceeds 90%');
  }

  if (reports.health?.metrics?.titleCompliance?.rate > 85) {
    report.executive_summary.keyWins.push('✅ Title tag compliance exceeds 85%');
  }

  if (reports.health?.issues?.critical?.length === 0) {
    report.executive_summary.keyWins.push('✅ Zero critical SEO issues detected');
  }

  if (reports.performance?.trends?.traffic?.sessions?.direction === 'positive') {
    const change = reports.performance.trends.traffic.sessions.change;
    report.executive_summary.keyWins.push(`✅ Organic traffic increased by ${change}%`);
  }

  // Key issues
  if (reports.health?.issues?.critical?.length > 0) {
    report.executive_summary.keyIssues.push(
      `🔴 ${reports.health.issues.critical.length} critical SEO issues require immediate attention`
    );
  }

  if (reports.schema?.summary?.withoutSchema > 100) {
    report.executive_summary.keyIssues.push(
      `🔴 ${reports.schema.summary.withoutSchema} posts missing schema markup`
    );
  }

  if (reports.internalLinks?.metrics?.orphanCount > 50) {
    report.executive_summary.keyIssues.push(
      `🔴 ${reports.internalLinks.metrics.orphanCount} orphan pages with no internal links`
    );
  }

  if (reports.performance?.trends?.traffic?.sessions?.direction === 'negative') {
    const change = reports.performance.trends.traffic.sessions.change;
    report.executive_summary.keyIssues.push(
      `🔴 Organic traffic decreased by ${change}%`
    );
  }

  // Top priorities for next week
  if (reports.health?.issues?.critical?.length > 0) {
    report.executive_summary.topPriorities.push(
      '🎯 Fix all critical SEO issues (estimated: 4-6 hours)'
    );
  }

  if (reports.schema?.summary?.coverageRate < 100) {
    const remaining = reports.schema?.summary?.withoutSchema || 0;
    report.executive_summary.topPriorities.push(
      `🎯 Add schema markup to remaining ${remaining} posts (estimated: 8-10 hours)`
    );
  }

  if (reports.internalLinks?.recommendations?.length > 0) {
    report.executive_summary.topPriorities.push(
      '🎯 Fix orphan pages by adding internal links (estimated: 3-4 hours)'
    );
  }

  log('   ✓ Executive summary generated', 'green');
}

/**
 * Analyze traffic trends
 */
function analyzeTrafficTrends(reports) {
  log('📈 Analyzing traffic trends...', 'cyan');

  if (!reports.performance) {
    log('   ⚠️  Performance data not available', 'yellow');
    return;
  }

  const perf = reports.performance;

  // Traffic change analysis
  if (perf.trends?.traffic?.sessions) {
    const trend = perf.trends.traffic.sessions;
    report.insights.trafficTrends.push({
      metric: 'Organic Sessions',
      current: perf.metrics.traffic.organicSessions,
      change: `${trend.symbol} ${trend.change}%`,
      status: trend.direction,
      insight: trend.direction === 'positive'
        ? 'Traffic is growing steadily. Continue current SEO efforts.'
        : 'Traffic declined. Review recent changes and algorithm updates.',
    });
  }

  // CTR analysis
  const ctr = parseFloat(perf.metrics.engagement.ctr);
  report.insights.trafficTrends.push({
    metric: 'Click-Through Rate',
    current: `${ctr}%`,
    change: perf.trends?.engagement?.ctr ? `${perf.trends.engagement.ctr.symbol} ${perf.trends.engagement.ctr.change}%` : 'N/A',
    status: ctr >= 3.0 ? 'positive' : ctr >= 2.0 ? 'neutral' : 'negative',
    insight: ctr < 2.0
      ? 'CTR below industry average. Optimize title tags and meta descriptions.'
      : 'CTR within healthy range. Monitor and maintain current optimization.',
  });

  log('   ✓ Traffic trends analyzed', 'green');
}

/**
 * Identify content performance
 */
function analyzeContentPerformance(reports) {
  log('📝 Analyzing content performance...', 'cyan');

  // Top performing content by PageRank
  if (reports.internalLinks?.topPages) {
    report.insights.contentPerformance = reports.internalLinks.topPages.slice(0, 10).map((page) => ({
      title: page.title || page.slug,
      url: page.url,
      authority: parseFloat(page.pageRank),
      inboundLinks: page.inboundCount,
      status: 'high_performer',
      recommendation: 'Maintain quality and update regularly',
    }));
  }

  // Posts needing attention (orphans, low quality)
  if (reports.internalLinks?.orphanPages) {
    const needsAttention = reports.internalLinks.orphanPages.slice(0, 5).map((page) => ({
      title: page.title || page.slug,
      url: page.url,
      authority: parseFloat(page.pageRank || 0),
      inboundLinks: 0,
      status: 'needs_attention',
      recommendation: 'Add internal links from relevant high-authority pages',
    }));

    report.insights.contentPerformance.push(...needsAttention);
  }

  log('   ✓ Content performance analyzed', 'green');
}

/**
 * Identify technical issues
 */
function identifyTechnicalIssues(reports) {
  log('🔧 Identifying technical issues...', 'cyan');

  // Schema errors
  if (reports.schema?.summary?.invalidSchema > 0) {
    report.insights.technicalIssues.push({
      category: 'Schema Markup',
      severity: 'high',
      issue: `${reports.schema.summary.invalidSchema} posts have invalid schema`,
      impact: 'Reduced rich snippet eligibility in search results',
      fix: 'Run schema validation and fix structural errors',
    });
  }

  // Missing canonical URLs
  if (reports.health?.metrics?.canonicalUrls?.failed > 0) {
    report.insights.technicalIssues.push({
      category: 'Canonical URLs',
      severity: 'medium',
      issue: `${reports.health.metrics.canonicalUrls.failed} posts missing canonical URLs`,
      impact: 'Potential duplicate content issues',
      fix: 'Add canonical URL to all blog post metadata',
    });
  }

  // Broken internal links
  if (reports.internalLinks?.metrics?.brokenLinkCount > 0) {
    report.insights.technicalIssues.push({
      category: 'Internal Links',
      severity: 'high',
      issue: `${reports.internalLinks.metrics.brokenLinkCount} broken internal links`,
      impact: 'Poor user experience and crawl inefficiency',
      fix: 'Update or remove broken links',
    });
  }

  // Core Web Vitals
  if (reports.performance?.metrics?.technical?.coreWebVitals) {
    const cwv = reports.performance.metrics.technical.coreWebVitals;

    if (parseFloat(cwv.lcp) > 2.5) {
      report.insights.technicalIssues.push({
        category: 'Core Web Vitals',
        severity: 'medium',
        issue: `LCP (${cwv.lcp}s) exceeds Google's recommended 2.5s`,
        impact: 'Negative impact on page experience ranking signal',
        fix: 'Optimize images, reduce server response time, implement CDN',
      });
    }

    if (parseFloat(cwv.cls) > 0.1) {
      report.insights.technicalIssues.push({
        category: 'Core Web Vitals',
        severity: 'medium',
        issue: `CLS (${cwv.cls}) exceeds Google's recommended 0.1`,
        impact: 'Negative impact on page experience ranking signal',
        fix: 'Add dimensions to images, avoid late-loading content',
      });
    }
  }

  log('   ✓ Technical issues identified', 'green');
}

/**
 * Identify SEO opportunities
 */
function identifyOpportunities(reports) {
  log('💡 Identifying opportunities...', 'cyan');

  // Schema expansion opportunity
  if (reports.schema?.summary?.coverageRate < 100) {
    const remaining = reports.schema?.summary?.withoutSchema || 0;
    report.insights.opportunities.push({
      type: 'Schema Markup Expansion',
      priority: 'high',
      opportunity: `${remaining} posts ready for schema markup`,
      potential_impact: 'Increase rich snippet appearances by 30-50%',
      effort: 'Medium (8-10 hours)',
      roi: 'High - Direct SERP visibility improvement',
    });
  }

  // Internal linking opportunities
  if (reports.internalLinks?.recommendations) {
    const linkingOpp = reports.internalLinks.recommendations.find(
      (r) => r.category === 'Link Building Opportunities'
    );

    if (linkingOpp) {
      report.insights.opportunities.push({
        type: 'Internal Linking Optimization',
        priority: 'medium',
        opportunity: `${linkingOpp.count} pages need more internal links`,
        potential_impact: 'Improve crawlability and distribute PageRank',
        effort: 'Low (2-3 hours)',
        roi: 'Medium - Better indexation and rankings',
      });
    }
  }

  // Title optimization opportunity
  if (reports.health?.metrics?.titleCompliance?.failed > 20) {
    report.insights.opportunities.push({
      type: 'Title Tag Optimization',
      priority: 'medium',
      opportunity: `${reports.health.metrics.titleCompliance.failed} titles need optimization`,
      potential_impact: 'Increase CTR by 10-15%',
      effort: 'Medium (4-6 hours)',
      roi: 'High - Direct impact on click-through rates',
    });
  }

  // Content refresh opportunity
  if (reports.internalLinks?.posts) {
    const oldPosts = reports.internalLinks.posts.filter(
      (p) => p.metadata?.lastModified &&
      (Date.now() - new Date(p.metadata.lastModified).getTime()) > 365 * 24 * 60 * 60 * 1000
    );

    if (oldPosts.length > 50) {
      report.insights.opportunities.push({
        type: 'Content Refresh Campaign',
        priority: 'low',
        opportunity: `${oldPosts.length} posts over 1 year old`,
        potential_impact: 'Reclaim lost rankings and traffic',
        effort: 'High (20+ hours)',
        roi: 'High - Proven strategy for traffic recovery',
      });
    }
  }

  log('   ✓ Opportunities identified', 'green');
}

/**
 * Generate actionable recommendations
 */
function generateRecommendations(reports) {
  log('✅ Generating recommendations...', 'cyan');

  // Immediate actions (this week)
  if (reports.health?.issues?.critical?.length > 0) {
    report.recommendations.immediate.push({
      action: `Fix ${reports.health.issues.critical.length} critical SEO issues`,
      priority: 'P0',
      estimated_time: '4-6 hours',
      expected_impact: 'Prevent further SEO degradation',
    });
  }

  if (reports.internalLinks?.metrics?.brokenLinkCount > 0) {
    report.recommendations.immediate.push({
      action: `Fix ${reports.internalLinks.metrics.brokenLinkCount} broken internal links`,
      priority: 'P0',
      estimated_time: '2-3 hours',
      expected_impact: 'Improve user experience and crawlability',
    });
  }

  // Short-term actions (next 2-4 weeks)
  if (reports.schema?.summary?.withoutSchema > 0) {
    report.recommendations.shortTerm.push({
      action: `Add schema markup to ${reports.schema.summary.withoutSchema} remaining posts`,
      priority: 'P1',
      estimated_time: '8-10 hours',
      expected_impact: '30-50% increase in rich snippet appearances',
    });
  }

  if (reports.internalLinks?.orphanPages?.length > 0) {
    report.recommendations.shortTerm.push({
      action: `Fix ${reports.internalLinks.orphanPages.length} orphan pages`,
      priority: 'P1',
      estimated_time: '3-4 hours',
      expected_impact: 'Better indexation and internal PageRank distribution',
    });
  }

  // Long-term actions (next 1-3 months)
  report.recommendations.longTerm.push({
    action: 'Implement automated daily SEO monitoring',
    priority: 'P2',
    estimated_time: '2-3 hours setup',
    expected_impact: 'Prevent SEO regressions before they impact traffic',
  });

  report.recommendations.longTerm.push({
    action: 'Create content refresh workflow for posts >1 year old',
    priority: 'P2',
    estimated_time: 'Ongoing effort',
    expected_impact: 'Maintain and improve rankings over time',
  });

  log('   ✓ Recommendations generated', 'green');
}

/**
 * Set next week goals
 */
function setNextWeekGoals(reports) {
  report.nextWeekGoals = [
    {
      goal: 'Achieve 95%+ title compliance rate',
      current: reports.health?.metrics?.titleCompliance?.rate || 0,
      target: 95,
      actions: ['Optimize all title tags outside 30-60 character range'],
    },
    {
      goal: 'Reach 95%+ schema coverage',
      current: reports.schema?.summary?.coverageRate || 0,
      target: 95,
      actions: ['Add BlogPosting schema to remaining posts', 'Validate all existing schemas'],
    },
    {
      goal: 'Reduce orphan pages to <20',
      current: reports.internalLinks?.metrics?.orphanCount || 0,
      target: 20,
      actions: ['Add internal links from relevant high-authority content'],
    },
    {
      goal: 'Zero critical SEO issues',
      current: reports.health?.issues?.critical?.length || 0,
      target: 0,
      actions: ['Fix all missing metadata', 'Repair broken schemas', 'Add missing H1 tags'],
    },
  ];
}

/**
 * Display report in console
 */
function displayReport() {
  log('\n', 'reset');
  log('═══════════════════════════════════════════════════════════════════════════', 'cyan');
  log('                            WEEKLY SEO REPORT', 'cyan');
  log('═══════════════════════════════════════════════════════════════════════════', 'cyan');
  log(`\n📅 Report Date: ${new Date(report.timestamp).toLocaleString()}`, 'blue');
  log(`📊 Report Period: ${report.period.start || 'Last 7 days'}\n`, 'blue');

  // Executive Summary
  log('══════════════════════ EXECUTIVE SUMMARY ══════════════════════', 'bold');
  log(`\n🎯 Overall Status: ${report.executive_summary.overallStatus.toUpperCase()}`,
      report.executive_summary.overallStatus === 'excellent' ? 'green' :
      report.executive_summary.overallStatus === 'good' ? 'blue' : 'red');
  log(`📊 Health Score: ${report.executive_summary.healthScore}/100`, 'blue');
  log(`📈 Performance Score: ${report.executive_summary.performanceScore}/100\n`, 'blue');

  if (report.executive_summary.keyWins.length > 0) {
    log('✅ KEY WINS:', 'green');
    report.executive_summary.keyWins.forEach((win) => log(`   ${win}`, 'green'));
    log('');
  }

  if (report.executive_summary.keyIssues.length > 0) {
    log('🔴 KEY ISSUES:', 'red');
    report.executive_summary.keyIssues.forEach((issue) => log(`   ${issue}`, 'red'));
    log('');
  }

  if (report.executive_summary.topPriorities.length > 0) {
    log('🎯 TOP PRIORITIES FOR NEXT WEEK:', 'cyan');
    report.executive_summary.topPriorities.forEach((priority) => log(`   ${priority}`, 'yellow'));
    log('');
  }

  // Traffic Trends
  if (report.insights.trafficTrends.length > 0) {
    log('══════════════════════ TRAFFIC TRENDS ══════════════════════', 'bold');
    log('');
    report.insights.trafficTrends.forEach((trend) => {
      const color = trend.status === 'positive' ? 'green' :
                   trend.status === 'negative' ? 'red' : 'yellow';
      log(`${trend.metric}: ${trend.current} (${trend.change})`, color);
      log(`   ${trend.insight}`, 'blue');
    });
    log('');
  }

  // Technical Issues
  if (report.insights.technicalIssues.length > 0) {
    log('══════════════════════ TECHNICAL ISSUES ══════════════════════', 'bold');
    log('');
    report.insights.technicalIssues.slice(0, 5).forEach((issue, i) => {
      const color = issue.severity === 'high' ? 'red' : 'yellow';
      log(`${i + 1}. [${issue.severity.toUpperCase()}] ${issue.category}`, color);
      log(`   Issue: ${issue.issue}`, 'yellow');
      log(`   Impact: ${issue.impact}`, 'blue');
      log(`   Fix: ${issue.fix}`, 'cyan');
      log('');
    });
  }

  // Opportunities
  if (report.insights.opportunities.length > 0) {
    log('══════════════════════ SEO OPPORTUNITIES ══════════════════════', 'bold');
    log('');
    report.insights.opportunities.forEach((opp, i) => {
      log(`${i + 1}. ${opp.type} [${opp.priority.toUpperCase()} PRIORITY]`, 'cyan');
      log(`   ${opp.opportunity}`, 'blue');
      log(`   Impact: ${opp.potential_impact}`, 'green');
      log(`   Effort: ${opp.effort} | ROI: ${opp.roi}`, 'yellow');
      log('');
    });
  }

  // Recommendations
  log('══════════════════════ RECOMMENDATIONS ══════════════════════', 'bold');
  log('');
  log('IMMEDIATE (This Week):', 'red');
  report.recommendations.immediate.forEach((rec) => {
    log(`   • ${rec.action}`, 'yellow');
    log(`     Time: ${rec.estimated_time} | Impact: ${rec.expected_impact}`, 'blue');
  });
  log('');

  if (report.recommendations.shortTerm.length > 0) {
    log('SHORT-TERM (Next 2-4 Weeks):', 'yellow');
    report.recommendations.shortTerm.forEach((rec) => {
      log(`   • ${rec.action}`, 'cyan');
      log(`     Time: ${rec.estimated_time} | Impact: ${rec.expected_impact}`, 'blue');
    });
    log('');
  }

  // Next Week Goals
  log('══════════════════════ NEXT WEEK GOALS ══════════════════════', 'bold');
  log('');
  report.nextWeekGoals.forEach((goal, i) => {
    const progress = goal.target > 0 ? ((goal.current / goal.target) * 100).toFixed(0) : 0;
    const color = progress >= 90 ? 'green' : progress >= 70 ? 'yellow' : 'red';

    log(`${i + 1}. ${goal.goal}`, 'cyan');
    log(`   Current: ${goal.current} | Target: ${goal.target} (${progress}% complete)`, color);
    goal.actions.forEach((action) => log(`   → ${action}`, 'blue'));
    log('');
  });

  log('═══════════════════════════════════════════════════════════════════════════\n', 'cyan');
}

/**
 * Save report to file
 */
function saveReport() {
  if (!fs.existsSync(CONFIG.outputDir)) {
    fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  }

  const jsonPath = path.join(CONFIG.outputDir, `seo-report-${Date.now()}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(report, null, 2));

  const latestPath = path.join(CONFIG.outputDir, 'latest.json');
  fs.writeFileSync(latestPath, JSON.stringify(report, null, 2));

  // Generate HTML version for email
  const htmlPath = path.join(CONFIG.outputDir, `seo-report-${Date.now()}.html`);
  const html = generateHTMLReport();
  fs.writeFileSync(htmlPath, html);

  log(`💾 JSON report saved: ${jsonPath}`, 'green');
  log(`💾 HTML report saved: ${htmlPath}`, 'green');
  log(`💾 Latest report: ${latestPath}\n`, 'green');
}

/**
 * Generate HTML version of report
 */
function generateHTMLReport() {
  // Simple HTML template
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weekly SEO Report - ${report.date}</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 900px; margin: 0 auto; padding: 20px; background: #f5f5f5; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 8px; margin-bottom: 30px; }
    .section { background: white; padding: 20px; margin-bottom: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
    .metric { display: inline-block; margin: 10px; padding: 15px; background: #f8f9fa; border-radius: 6px; }
    .positive { color: #28a745; }
    .negative { color: #dc3545; }
    .neutral { color: #ffc107; }
    .priority-high { color: #dc3545; font-weight: bold; }
    .priority-medium { color: #ffc107; font-weight: bold; }
    h1, h2, h3 { color: #333; }
    .footer { text-align: center; color: #666; margin-top: 40px; }
  </style>
</head>
<body>
  <div class="header">
    <h1>📊 Weekly SEO Report</h1>
    <p>Report Date: ${new Date(report.timestamp).toLocaleString()}</p>
    <p>Health Score: ${report.executive_summary.healthScore}/100 | Performance Score: ${report.executive_summary.performanceScore}/100</p>
  </div>

  <div class="section">
    <h2>🎯 Executive Summary</h2>
    <h3>Key Wins:</h3>
    <ul>${report.executive_summary.keyWins.map((w) => `<li>${w}</li>`).join('')}</ul>

    ${report.executive_summary.keyIssues.length > 0 ? `
    <h3>Key Issues:</h3>
    <ul>${report.executive_summary.keyIssues.map((i) => `<li>${i}</li>`).join('')}</ul>
    ` : ''}

    <h3>Top Priorities:</h3>
    <ul>${report.executive_summary.topPriorities.map((p) => `<li>${p}</li>`).join('')}</ul>
  </div>

  ${report.insights.opportunities.length > 0 ? `
  <div class="section">
    <h2>💡 SEO Opportunities</h2>
    ${report.insights.opportunities.map((opp) => `
      <div style="margin-bottom: 20px;">
        <h3>${opp.type} <span class="priority-${opp.priority === 'high' ? 'high' : 'medium'}">[${opp.priority.toUpperCase()}]</span></h3>
        <p><strong>Opportunity:</strong> ${opp.opportunity}</p>
        <p><strong>Potential Impact:</strong> ${opp.potential_impact}</p>
        <p><strong>Effort:</strong> ${opp.effort} | <strong>ROI:</strong> ${opp.roi}</p>
      </div>
    `).join('')}
  </div>
  ` : ''}

  <div class="section">
    <h2>✅ Immediate Actions</h2>
    <ul>
      ${report.recommendations.immediate.map((rec) => `
        <li><strong>${rec.action}</strong><br>
        Time: ${rec.estimated_time} | Impact: ${rec.expected_impact}</li>
      `).join('')}
    </ul>
  </div>

  <div class="section">
    <h2>🎯 Next Week Goals</h2>
    ${report.nextWeekGoals.map((goal) => {
      const progress = goal.target > 0 ? ((goal.current / goal.target) * 100).toFixed(0) : 0;
      return `
        <div style="margin-bottom: 20px;">
          <h3>${goal.goal}</h3>
          <p>Progress: ${goal.current} / ${goal.target} (${progress}%)</p>
          <div style="background: #e9ecef; height: 20px; border-radius: 10px; overflow: hidden;">
            <div style="background: ${progress >= 90 ? '#28a745' : progress >= 70 ? '#ffc107' : '#dc3545'};
                        height: 100%; width: ${Math.min(100, progress)}%; transition: width 0.3s;"></div>
          </div>
          <ul>${goal.actions.map((a) => `<li>${a}</li>`).join('')}</ul>
        </div>
      `;
    }).join('')}
  </div>

  <div class="footer">
    <p>Generated by SEO Monitoring System | IImagined.ai</p>
    <p>For detailed metrics, check the JSON report or run individual analysis scripts.</p>
  </div>
</body>
</html>`;
}

/**
 * Main execution
 */
async function main() {
  try {
    log('\n╔══════════════════════════════════════════════════╗', 'cyan');
    log('║        AUTOMATED SEO REPORTING SYSTEM            ║', 'cyan');
    log('╚══════════════════════════════════════════════════╝', 'cyan');

    // Set report period
    const endDate = new Date();
    const startDate = new Date(endDate.getTime() - 7 * 24 * 60 * 60 * 1000);
    report.period.start = startDate.toISOString().split('T')[0];
    report.period.end = endDate.toISOString().split('T')[0];

    // Load all reports
    const reports = loadLatestReports();
    report.metrics = reports;

    // Generate report sections
    generateExecutiveSummary(reports);
    analyzeTrafficTrends(reports);
    analyzeContentPerformance(reports);
    identifyTechnicalIssues(reports);
    identifyOpportunities(reports);
    generateRecommendations(reports);
    setNextWeekGoals(reports);

    // Display and save
    displayReport();
    saveReport();

    log('✅ SEO report generation complete!\n', 'green');
    log('💡 Next steps:', 'cyan');
    log('   1. Review immediate action items', 'blue');
    log('   2. Schedule work for top priorities', 'blue');
    log('   3. Run fix scripts for critical issues', 'blue');
    log('   4. Monitor progress throughout the week\n', 'blue');

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

module.exports = { generateExecutiveSummary, generateHTMLReport, analyzeTrafficTrends };
