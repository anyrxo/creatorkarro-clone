const fs = require('fs')
const path = require('path')

function validateDescriptions() {
  const blogDir = path.join(__dirname, '..', 'src', 'app', 'blog')

  if (!fs.existsSync(blogDir)) {
    console.error('Blog directory not found:', blogDir)
    return
  }

  const posts = fs.readdirSync(blogDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())

  const results = {
    good: [],
    tooLong: [],
    tooShort: [],
    missing: []
  }

  for (const post of posts) {
    const pagePath = path.join(blogDir, post.name, 'page.tsx')
    if (!fs.existsSync(pagePath)) continue

    const content = fs.readFileSync(pagePath, 'utf8')
    // Match description - try double quotes first, then single quotes
    let match = content.match(/description:\s*"([^"]*)"/s)
    if (!match) {
      match = content.match(/description:\s*'([^']*)'/s)
    }

    if (!match) {
      results.missing.push(post.name)
      continue
    }

    const desc = match[1]
    const length = desc.length

    if (length < 50) {
      results.tooShort.push({ post: post.name, length, desc })
    } else if (length > 160) {
      results.tooLong.push({ post: post.name, length, desc })
    } else {
      results.good.push({ post: post.name, length })
    }
  }

  console.log('\n📊 Meta Description Validation Report\n')
  console.log(`✅ Good (50-160 chars): ${results.good.length}`)
  console.log(`❌ Too Long (>160 chars): ${results.tooLong.length}`)
  console.log(`⚠️  Too Short (<50 chars): ${results.tooShort.length}`)
  console.log(`🚫 Missing: ${results.missing.length}`)

  if (results.tooLong.length > 0) {
    console.log('\n❌ Posts with descriptions >160 chars:')
    results.tooLong.slice(0, 10).forEach(item => {
      console.log(`   ${item.post} (${item.length} chars)`)
    })
    if (results.tooLong.length > 10) {
      console.log(`   ... and ${results.tooLong.length - 10} more`)
    }
  }

  if (results.tooShort.length > 0) {
    console.log('\n⚠️  Posts with descriptions <50 chars:')
    results.tooShort.slice(0, 10).forEach(item => {
      console.log(`   ${item.post} (${item.length} chars): ${item.desc}`)
    })
    if (results.tooShort.length > 10) {
      console.log(`   ... and ${results.tooShort.length - 10} more`)
    }
  }

  // Save detailed report
  const reportPath = path.join(__dirname, 'meta-description-validation-report.json')
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2))
  console.log(`\n📝 Detailed report saved to: ${reportPath}`)

  return results
}

validateDescriptions()
