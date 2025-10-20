const fs = require('fs')
const path = require('path')

function truncateDescription(desc, maxLength = 155) {
  if (desc.length <= maxLength) return desc

  // Truncate at word boundary before maxLength
  const truncated = desc.substring(0, maxLength)
  const lastSpace = truncated.lastIndexOf(' ')

  if (lastSpace > 0) {
    return truncated.substring(0, lastSpace) + '...'
  }

  return truncated + '...'
}

function improveDescription(desc) {
  // Smart improvements for common patterns

  // Pattern 1: "Discover how X can transform your business processes..."
  if (desc.startsWith('Discover how ') && desc.includes('transform your business processes')) {
    const topic = desc.match(/Discover how (.+?) can transform/)?.[1] || 'this topic'
    return `Master ${topic} with proven strategies. Learn implementation best practices & real-world applications for business success.`
  }

  // Pattern 2: "Complete guide to X - everything you need to know..."
  if (desc.startsWith('Complete guide to ') && desc.includes('everything you need to know')) {
    const topic = desc.match(/Complete guide to (.+?) -/)?.[1] || 'this topic'
    return `Complete ${topic} guide: Learn implementation, optimization & best practices. Step-by-step tutorials with real examples.`
  }

  // Pattern 3: "Learn how to X with our comprehensive guide..."
  if (desc.startsWith('Learn how to ') && desc.includes('comprehensive guide')) {
    const topic = desc.match(/Learn how to (.+?) with/)?.[1] || 'this'
    return `Learn how to ${topic} with step-by-step training. Proven methods, expert guidance & real results.`
  }

  // Pattern 4: "Comprehensive X training for Y..."
  if (desc.includes('Comprehensive ') && desc.includes('training for ')) {
    const match = desc.match(/Comprehensive (.+?) training for (.+?)\./)?.[0]
    if (match && match.length <= 155) {
      return match + ' Expert-led program with proven results.'
    }
  }

  // Default: Smart truncation
  return truncateDescription(desc)
}

function fixMetaDescription(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8')

    // Find description in metadata - try double quotes first, then single quotes
    let match = content.match(/description:\s*"([^"]*)"/s)
    let descRegex = /description:\s*"([^"]*)"/s
    let quoteType = '"'

    if (!match) {
      match = content.match(/description:\s*'([^']*)'/s)
      descRegex = /description:\s*'([^']*)'/s
      quoteType = "'"
    }

    if (!match) return null

    const originalDesc = match[1]

    if (originalDesc.length <= 160) {
      return null // Already OK
    }

    const fixedDesc = improveDescription(originalDesc)

    // Only fix if we actually improved it
    if (fixedDesc.length <= 160 && fixedDesc !== originalDesc) {
      const newContent = content.replace(descRegex, `description: ${quoteType}${fixedDesc}${quoteType}`)
      fs.writeFileSync(filePath, newContent, 'utf8')

      return {
        file: path.basename(path.dirname(filePath)),
        before: originalDesc.length,
        after: fixedDesc.length,
        beforeText: originalDesc,
        afterText: fixedDesc
      }
    }

    return null
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message)
    return null
  }
}

function findAndFixAllDescriptions() {
  const blogDir = path.join(__dirname, '..', 'src', 'app', 'blog')

  if (!fs.existsSync(blogDir)) {
    console.error('Blog directory not found:', blogDir)
    return
  }

  console.log('🔍 Scanning blog posts for long meta descriptions...\n')

  const posts = fs.readdirSync(blogDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

  const fixed = []

  for (const post of posts) {
    const pagePath = path.join(blogDir, post, 'page.tsx')

    if (!fs.existsSync(pagePath)) continue

    const result = fixMetaDescription(pagePath)

    if (result) {
      fixed.push(result)
      console.log(`✓ Fixed: ${result.file}`)
      console.log(`  Before (${result.before} chars): ${result.beforeText.substring(0, 80)}...`)
      console.log(`  After  (${result.after} chars): ${result.afterText}`)
      console.log()
    }
  }

  console.log(`\n📊 Summary:`)
  console.log(`Total posts scanned: ${posts.length}`)
  console.log(`Posts fixed: ${fixed.length}`)
  console.log(`Posts already OK: ${posts.length - fixed.length}`)

  if (fixed.length > 0) {
    // Save report
    const reportPath = path.join(__dirname, 'meta-description-fixes.json')
    fs.writeFileSync(reportPath, JSON.stringify(fixed, null, 2))
    console.log(`\n📝 Detailed report saved to: ${reportPath}`)
  }

  console.log('\n✅ Meta description fixes complete!')
  console.log('💡 Run "npm run validate-meta-descriptions" to verify all fixes.')
}

findAndFixAllDescriptions()
