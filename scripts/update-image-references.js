const fs = require('fs')
const path = require('path')

/**
 * Image Reference Updater Script
 * Automatically updates image references from JPG/PNG to WebP across codebase
 */

const CONFIG = {
  srcDir: path.join(__dirname, '..', 'src'),
  extensions: ['.tsx', '.ts', '.jsx', '.js', '.mdx', '.md'],
  imageExtensions: ['.jpg', '.jpeg', '.png'],
  dryRun: false, // Set to true to preview changes without modifying files
}

const stats = {
  filesScanned: 0,
  filesModified: 0,
  referencesUpdated: 0,
  errors: 0
}

/**
 * Find all files with specified extensions
 */
function findFiles(dir, extensions) {
  const files = []

  if (!fs.existsSync(dir)) {
    return files
  }

  const items = fs.readdirSync(dir)

  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)

    if (stat.isDirectory()) {
      // Skip node_modules and build directories
      if (!['node_modules', '.next', 'out', '.git'].includes(item)) {
        files.push(...findFiles(fullPath, extensions))
      }
    } else if (stat.isFile()) {
      const ext = path.extname(item).toLowerCase()
      if (extensions.includes(ext)) {
        files.push(fullPath)
      }
    }
  }

  return files
}

/**
 * Update image references in a file
 */
function updateImageReferences(filePath) {
  try {
    stats.filesScanned++

    const content = fs.readFileSync(filePath, 'utf8')
    let newContent = content
    let modified = false
    let changeCount = 0

    // Pattern to match image references
    // Matches: /path/to/image.jpg, /path/to/image.jpeg, /path/to/image.png
    const patterns = [
      // src="/path/image.jpg"
      /src=["']([^"']*\.(jpg|jpeg|png))["']/gi,
      // href="/path/image.jpg"
      /href=["']([^"']*\.(jpg|jpeg|png))["']/gi,
      // url('/path/image.jpg')
      /url\(['"]([^'"]*\.(jpg|jpeg|png))['"]\)/gi,
      // backgroundImage: 'url(/path/image.jpg)'
      /backgroundImage:\s*['"]url\(([^)]*\.(jpg|jpeg|png))\)["']/gi,
      // Import statements
      /import\s+.*from\s+["']([^"']*\.(jpg|jpeg|png))["']/gi,
      // require('/path/image.jpg')
      /require\(['"]([^'"]*\.(jpg|jpeg|png))['"]\)/gi
    ]

    for (const pattern of patterns) {
      newContent = newContent.replace(pattern, (match, imagePath, ext) => {
        // Skip if already WebP
        if (match.includes('.webp')) {
          return match
        }

        // Replace extension with .webp
        const webpPath = imagePath.replace(/\.(jpg|jpeg|png)$/i, '.webp')
        const updatedMatch = match.replace(imagePath, webpPath)

        console.log(`   ${imagePath} → ${webpPath}`)
        changeCount++
        modified = true

        return updatedMatch
      })
    }

    if (modified) {
      stats.filesModified++
      stats.referencesUpdated += changeCount

      if (!CONFIG.dryRun) {
        fs.writeFileSync(filePath, newContent, 'utf8')
        console.log(`✅ Updated ${changeCount} reference(s) in: ${path.relative(CONFIG.srcDir, filePath)}`)
      } else {
        console.log(`[DRY RUN] Would update ${changeCount} reference(s) in: ${path.relative(CONFIG.srcDir, filePath)}`)
      }
    }

    return {
      path: filePath,
      modified,
      changeCount
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}: ${error.message}`)
    stats.errors++
    return {
      path: filePath,
      error: error.message,
      modified: false
    }
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('🔄 Image Reference Updater')
  console.log(`Mode: ${CONFIG.dryRun ? 'DRY RUN (no changes will be made)' : 'LIVE (files will be modified)'}`)
  console.log('='.repeat(60))

  // Find all files
  console.log('\n📁 Scanning for files...')
  const files = findFiles(CONFIG.srcDir, CONFIG.extensions)
  console.log(`Found ${files.length} files to scan\n`)

  // Update each file
  const results = []
  for (const file of files) {
    const result = updateImageReferences(file)
    if (result.modified || result.error) {
      results.push(result)
    }
  }

  // Print summary
  console.log('\n' + '='.repeat(60))
  console.log('📊 SUMMARY')
  console.log('='.repeat(60))
  console.log(`Files scanned: ${stats.filesScanned}`)
  console.log(`Files modified: ${stats.filesModified}`)
  console.log(`References updated: ${stats.referencesUpdated}`)
  console.log(`Errors: ${stats.errors}`)
  console.log('='.repeat(60))

  if (CONFIG.dryRun) {
    console.log('\n⚠️  DRY RUN MODE - No files were actually modified')
    console.log('Set CONFIG.dryRun = false to apply changes')
  } else {
    console.log('\n✨ Image references updated successfully!')
  }

  return {
    stats,
    results
  }
}

// Run if called directly
if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error('Fatal error:', error)
      process.exit(1)
    })
}

module.exports = { main, updateImageReferences, findFiles }
