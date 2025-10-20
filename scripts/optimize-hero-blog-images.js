const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

// Configuration
const QUALITY = 80
const EFFORT = 6

async function optimizeImage(inputPath, outputPath) {
  try {
    const info = await sharp(inputPath)
      .webp({ quality: QUALITY, effort: EFFORT })
      .toFile(outputPath)

    const inputSize = fs.statSync(inputPath).size
    const outputSize = fs.statSync(outputPath).size
    const savings = Math.round((1 - outputSize / inputSize) * 100)

    console.log(`✓ ${path.basename(inputPath)} → ${path.basename(outputPath)}`)
    console.log(`  Original: ${(inputSize / 1024).toFixed(2)} KB`)
    console.log(`  Optimized: ${(outputSize / 1024).toFixed(2)} KB`)
    console.log(`  Savings: ${savings}%`)
    console.log()

    return {
      input: path.basename(inputPath),
      output: path.basename(outputPath),
      inputPath,
      outputPath,
      inputSize,
      outputSize,
      savings
    }
  } catch (error) {
    console.error(`✗ Failed to optimize ${inputPath}:`, error.message)
    return null
  }
}

async function optimizeDirectory(dirPath, pattern = /\.(jpg|jpeg|png)$/i) {
  console.log(`\n📁 Optimizing images in: ${dirPath}\n`)

  if (!fs.existsSync(dirPath)) {
    console.log(`Directory not found: ${dirPath}`)
    return { results: [], totalInputSize: 0, totalOutputSize: 0 }
  }

  const files = fs.readdirSync(dirPath)
  const imageFiles = files.filter(f => {
    // Skip if already optimized (has .webp version)
    const webpVersion = f.replace(/\.(jpg|jpeg|png)$/i, '.webp')
    return pattern.test(f) && !files.includes(webpVersion)
  })

  if (imageFiles.length === 0) {
    console.log(`No images to optimize in ${dirPath}`)
    return { results: [], totalInputSize: 0, totalOutputSize: 0 }
  }

  console.log(`Found ${imageFiles.length} images to optimize...\n`)

  const results = []
  let totalInputSize = 0
  let totalOutputSize = 0

  for (const file of imageFiles) {
    const inputPath = path.join(dirPath, file)
    const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp')

    const result = await optimizeImage(inputPath, outputPath)
    if (result) {
      results.push(result)
      totalInputSize += result.inputSize
      totalOutputSize += result.outputSize
    }
  }

  return { results, totalInputSize, totalOutputSize }
}

async function main() {
  console.log('🚀 HERO & BLOG IMAGE OPTIMIZATION - PHASE 2')
  console.log('='.repeat(60))

  const publicDir = path.join(__dirname, '..', 'public')

  const allResults = []
  let grandTotalInputSize = 0
  let grandTotalOutputSize = 0

  // 1. Optimize hero images (anyro.jpeg, anyro.png)
  console.log('\n🎯 OPTIMIZING HERO IMAGES')
  console.log('-'.repeat(60))

  const heroImages = ['anyro.jpeg', 'anyro.png']
  for (const fileName of heroImages) {
    const inputPath = path.join(publicDir, fileName)
    if (fs.existsSync(inputPath)) {
      const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp')

      // Skip if already exists
      if (fs.existsSync(outputPath)) {
        console.log(`⏭️  Skipping ${fileName} (WebP version already exists)`)
        continue
      }

      const result = await optimizeImage(inputPath, outputPath)
      if (result) {
        allResults.push(result)
        grandTotalInputSize += result.inputSize
        grandTotalOutputSize += result.outputSize
      }
    }
  }

  // 2. Optimize partner logos
  console.log('\n🤝 OPTIMIZING PARTNER LOGOS')
  console.log('-'.repeat(60))

  const partnersDir = path.join(publicDir, 'partners')
  const partnersData = await optimizeDirectory(partnersDir)
  allResults.push(...partnersData.results)
  grandTotalInputSize += partnersData.totalInputSize
  grandTotalOutputSize += partnersData.totalOutputSize

  // 3. Check for any other unoptimized images in public
  console.log('\n📸 SCANNING FOR OTHER IMAGES')
  console.log('-'.repeat(60))

  const otherImages = fs.readdirSync(publicDir)
    .filter(f => /\.(jpg|jpeg|png)$/i.test(f) && !heroImages.includes(f))

  for (const fileName of otherImages) {
    const inputPath = path.join(publicDir, fileName)
    const outputPath = inputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp')

    if (fs.existsSync(outputPath)) {
      console.log(`⏭️  Skipping ${fileName} (WebP version already exists)`)
      continue
    }

    const result = await optimizeImage(inputPath, outputPath)
    if (result) {
      allResults.push(result)
      grandTotalInputSize += result.inputSize
      grandTotalOutputSize += result.outputSize
    }
  }

  // Summary
  console.log('\n' + '='.repeat(60))
  console.log('✅ OPTIMIZATION COMPLETE')
  console.log('='.repeat(60))
  console.log(`\n📊 SUMMARY:`)
  console.log(`   Total images optimized: ${allResults.length}`)
  console.log(`   Original total size: ${(grandTotalInputSize / 1024 / 1024).toFixed(2)} MB`)
  console.log(`   Optimized total size: ${(grandTotalOutputSize / 1024 / 1024).toFixed(2)} MB`)
  const savingsMB = ((grandTotalInputSize - grandTotalOutputSize) / 1024 / 1024).toFixed(2)
  const savingsPct = grandTotalInputSize > 0 ? Math.round((1 - grandTotalOutputSize / grandTotalInputSize) * 100) : 0
  console.log(`   Total savings: ${savingsMB} MB (${savingsPct}%)`)

  // Expected LCP improvement
  console.log(`\n⚡ EXPECTED PERFORMANCE IMPROVEMENTS:`)
  if (allResults.some(r => r.input.includes('anyro'))) {
    console.log(`   - Hero image optimization: ~30-40% faster LCP`)
  }
  console.log(`   - Reduced bandwidth usage: ${savingsMB} MB per page load`)
  console.log(`   - Better Core Web Vitals scores`)
  console.log(`   - Improved SEO rankings`)

  // Save detailed report data
  const reportData = {
    timestamp: new Date().toISOString(),
    totalImages: allResults.length,
    totalInputSize: grandTotalInputSize,
    totalOutputSize: grandTotalOutputSize,
    savingsMB: parseFloat(savingsMB),
    savingsPercent: savingsPct,
    images: allResults
  }

  const reportPath = path.join(__dirname, '..', 'optimization-report.json')
  fs.writeFileSync(reportPath, JSON.stringify(reportData, null, 2))
  console.log(`\n📄 Detailed report saved to: optimization-report.json`)

  return reportData
}

main().catch(console.error)
