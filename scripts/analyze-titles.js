const fs = require('fs')
const path = require('path')

/**
 * Title Tag Analysis Script
 * Analyzes all pages for optimal title tag length (50-60 characters)
 * Identifies issues: too short (<30), too long (>60), or missing
 */

function analyzeTitleTag(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')

    // Extract title from metadata - handle both formats
    // Format 1: title: "..."
    // Format 2: "title": "..."
    let titleMatch = content.match(/^\s*title:\s*["'](.+?)["']/m)
    if (!titleMatch) {
      titleMatch = content.match(/^\s*["']title["']:\s*["'](.+?)["']/m)
    }

    if (!titleMatch) {
      return {
        file: filePath.replace(/\\/g, '/'),
        issue: 'Missing title',
        length: 0,
        title: null,
        severity: 'critical'
      }
    }

    const title = titleMatch[1]
    const length = title.length

    // Analyze title length
    if (length < 30) {
      return {
        file: filePath.replace(/\\/g, '/'),
        issue: 'Too short',
        length,
        title,
        severity: 'high',
        recommendation: 'Add more descriptive words (target 50-60 chars)'
      }
    }

    if (length > 60) {
      return {
        file: filePath.replace(/\\/g, '/'),
        issue: 'Too long',
        length,
        title,
        severity: 'medium',
        recommendation: 'Trim to 50-60 chars for optimal display'
      }
    }

    return {
      file: filePath.replace(/\\/g, '/'),
      status: 'OK',
      length,
      title,
      severity: 'none'
    }
  } catch (error) {
    return {
      file: filePath.replace(/\\/g, '/'),
      issue: 'Error reading file',
      error: error.message,
      severity: 'error'
    }
  }
}

function findAllPages(dir, fileList = []) {
  const files = fs.readdirSync(dir)

  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      findAllPages(filePath, fileList)
    } else if (file === 'page.tsx' || file === 'page.js') {
      fileList.push(filePath)
    }
  })

  return fileList
}

// Main execution
console.log('🔍 Starting Title Tag Analysis...\n')

const srcAppDir = path.join(process.cwd(), 'src', 'app')
const allPages = findAllPages(srcAppDir)

console.log(`📊 Found ${allPages.length} pages to analyze\n`)

const results = {
  tooShort: [],
  tooLong: [],
  missing: [],
  optimal: [],
  errors: []
}

// Analyze all pages
allPages.forEach(filePath => {
  const analysis = analyzeTitleTag(filePath)

  if (analysis.issue === 'Too short') {
    results.tooShort.push(analysis)
  } else if (analysis.issue === 'Too long') {
    results.tooLong.push(analysis)
  } else if (analysis.issue === 'Missing title') {
    results.missing.push(analysis)
  } else if (analysis.issue === 'Error reading file') {
    results.errors.push(analysis)
  } else {
    results.optimal.push(analysis)
  }
})

// Sort by severity and length
results.tooShort.sort((a, b) => a.length - b.length)
results.tooLong.sort((a, b) => b.length - a.length)

// Display summary
console.log('═══════════════════════════════════════════════════════')
console.log('📋 TITLE TAG ANALYSIS SUMMARY')
console.log('═══════════════════════════════════════════════════════\n')

console.log(`✅ Optimal (30-60 chars): ${results.optimal.length}`)
console.log(`⚠️  Too short (<30 chars): ${results.tooShort.length}`)
console.log(`📏 Too long (>60 chars): ${results.tooLong.length}`)
console.log(`❌ Missing: ${results.missing.length}`)
console.log(`🔴 Errors: ${results.errors.length}`)

const totalIssues = results.tooShort.length + results.tooLong.length + results.missing.length
const complianceRate = ((results.optimal.length / allPages.length) * 100).toFixed(1)

console.log(`\n📊 Compliance Rate: ${complianceRate}%`)
console.log(`🎯 Total Issues to Fix: ${totalIssues}\n`)

// Show top issues
if (results.tooShort.length > 0) {
  console.log('\n⚠️  TOP 10 TOO SHORT TITLES:')
  console.log('─────────────────────────────────────────────────────\n')
  results.tooShort.slice(0, 10).forEach((item, index) => {
    console.log(`${index + 1}. Length: ${item.length} chars`)
    console.log(`   Title: "${item.title}"`)
    console.log(`   File: ${item.file.split('src/app/')[1]}`)
    console.log(`   ${item.recommendation}\n`)
  })
}

if (results.tooLong.length > 0) {
  console.log('\n📏 TOP 10 TOO LONG TITLES:')
  console.log('─────────────────────────────────────────────────────\n')
  results.tooLong.slice(0, 10).forEach((item, index) => {
    console.log(`${index + 1}. Length: ${item.length} chars`)
    console.log(`   Title: "${item.title}"`)
    console.log(`   File: ${item.file.split('src/app/')[1]}`)
    console.log(`   ${item.recommendation}\n`)
  })
}

if (results.missing.length > 0) {
  console.log('\n❌ MISSING TITLES:')
  console.log('─────────────────────────────────────────────────────\n')
  results.missing.forEach((item, index) => {
    console.log(`${index + 1}. ${item.file.split('src/app/')[1]}`)
  })
}

// Save detailed report
const reportPath = path.join(process.cwd(), 'title-analysis-report.json')
fs.writeFileSync(reportPath, JSON.stringify(results, null, 2))

console.log(`\n✅ Detailed report saved to: title-analysis-report.json`)

// Generate quick fix suggestions
const fixSuggestions = {
  totalPages: allPages.length,
  complianceRate: `${complianceRate}%`,
  criticalIssues: results.missing.length,
  highPriorityIssues: results.tooShort.length,
  mediumPriorityIssues: results.tooLong.length,
  estimatedImpact: {
    ctrlImprovement: '15-25%',
    rankingBoost: '5-10 positions',
    timeframe: '30-60 days'
  },
  priorityFixes: [
    ...results.missing.slice(0, 5).map(item => ({
      file: item.file.split('src/app/')[1],
      action: 'Add title tag',
      severity: 'CRITICAL'
    })),
    ...results.tooShort.slice(0, 10).map(item => ({
      file: item.file.split('src/app/')[1],
      current: item.title,
      length: item.length,
      action: 'Expand to 50-60 chars',
      severity: 'HIGH'
    })),
    ...results.tooLong.slice(0, 10).map(item => ({
      file: item.file.split('src/app/')[1],
      current: item.title,
      length: item.length,
      action: 'Trim to 50-60 chars',
      severity: 'MEDIUM'
    }))
  ]
}

const suggestionsPath = path.join(process.cwd(), 'title-fix-suggestions.json')
fs.writeFileSync(suggestionsPath, JSON.stringify(fixSuggestions, null, 2))

console.log(`✅ Fix suggestions saved to: title-fix-suggestions.json\n`)

console.log('═══════════════════════════════════════════════════════')
console.log('✨ Analysis Complete!')
console.log('═══════════════════════════════════════════════════════\n')
