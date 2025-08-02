#!/usr/bin/env node

/**
 * Bulk News Article Beautification Script v2
 * More robust parsing for the actual file structure
 */

const fs = require('fs').promises;
const path = require('path');

// Article Classification System
const articleClassifications = {
  'ai_models': {
    keywords: ['gpt', 'claude', 'gemini', 'llama', 'openai', 'anthropic'],
    color: 'purple',
    badge: 'AI MODEL UPDATE'
  },
  'ai_coding': {
    keywords: ['code', 'coding', 'coder', 'copilot', 'cursor', 'windsurf', 'augment', 'canvas'],
    color: 'blue',
    badge: 'AI CODING TOOL'
  },
  'ai_agents': {
    keywords: ['agent', 'agentic', 'automate', 'automation', 'deepagent'],
    color: 'cyan',
    badge: 'AI AGENT'
  },
  'ai_project': {
    keywords: ['project', 'manager', 'dart', 'task', 'workflow'],
    color: 'green',
    badge: 'AI PROJECT MANAGEMENT'
  },
  'dev_tools': {
    keywords: ['developer', 'development', 'ide', 'productivity', 'windsurf'],
    color: 'indigo',
    badge: 'DEVELOPER TOOLS'
  },
  'ai_platforms': {
    keywords: ['platform', 'studio', 'canvas', 'playground'],
    color: 'blue',
    badge: 'AI PLATFORM'
  },
  'open_source': {
    keywords: ['open-source', 'qwen', 'deepseek', 'mistral'],
    color: 'orange',
    badge: 'OPEN SOURCE AI'
  }
};

// Helper Functions
function extractTitleParts(title) {
  const colonIndex = title.indexOf(':');
  if (colonIndex > -1) {
    return {
      part1: title.substring(0, colonIndex).trim(),
      part2: title.substring(colonIndex + 1).trim()
    };
  }
  
  const dashIndex = title.indexOf(' - ');
  if (dashIndex > -1) {
    return {
      part1: title.substring(0, dashIndex).trim(),
      part2: title.substring(dashIndex + 3).trim()
    };
  }
  
  const words = title.split(' ');
  const splitPoint = Math.ceil(words.length * 0.6);
  return {
    part1: words.slice(0, splitPoint).join(' '),
    part2: words.slice(splitPoint).join(' ')
  };
}

function extractSubtitle(content) {
  const metaMatch = content.match(/<strong>Meta Description:<\/strong>\s*([^<]+)/);
  if (metaMatch) {
    return metaMatch[1].trim();
  }
  
  const firstParaMatch = content.match(/<p>([^<]+)<\/p>/);
  if (firstParaMatch) {
    const text = firstParaMatch[1];
    if (text.length > 50 && text.length < 200) {
      return text;
    }
  }
  
  return "Complete guide to the latest AI innovations and developments";
}

function extractSections(content) {
  const sections = [];
  const headerRegex = /<h[23]\s+id="([^"]+)"[^>]*>([^<]+)<\/h[23]>/g;
  let match;
  while ((match = headerRegex.exec(content)) !== null) {
    sections.push({
      id: match[1],
      title: match[2].trim()
    });
  }
  return sections;
}

function extractStats(content) {
  const stats = [];
  
  const percentRegex = /(\d+%)\s+of\s+([^.]+)/g;
  let match;
  while ((match = percentRegex.exec(content)) !== null && stats.length < 4) {
    stats.push({
      value: match[1],
      label: 'Performance',
      description: match[2].substring(0, 50),
      emoji: '📊'
    });
  }
  
  const timeRegex = /(\d+\+?)\s+(hours?|minutes?|days?)\s+([^.]+)/g;
  while ((match = timeRegex.exec(content)) !== null && stats.length < 4) {
    stats.push({
      value: match[1] + ' ' + match[2],
      label: 'Time Saved',
      description: match[3].substring(0, 50),
      emoji: '⏱️'
    });
  }
  
  const dollarRegex = /(\$[\d,]+)\s+([^.]+)/g;
  while ((match = dollarRegex.exec(content)) !== null && stats.length < 4) {
    stats.push({
      value: match[1],
      label: 'Value',
      description: match[2].substring(0, 50),
      emoji: '💰'
    });
  }
  
  const multiplierRegex = /(\d+x)\s+([^.]+)/g;
  while ((match = multiplierRegex.exec(content)) !== null && stats.length < 4) {
    stats.push({
      value: match[1].toUpperCase(),
      label: 'Performance',
      description: match[2].substring(0, 50),
      emoji: '🚀'
    });
  }
  
  return stats;
}

function classifyArticle(article) {
  const content = (article.title + ' ' + article.content).toLowerCase();
  
  for (const [type, config] of Object.entries(articleClassifications)) {
    const hasKeyword = config.keywords.some(keyword => 
      content.includes(keyword.toLowerCase())
    );
    if (hasKeyword) {
      return { type, ...config };
    }
  }
  
  return {
    type: 'general',
    color: 'blue',
    badge: 'AI NEWS'
  };
}

function getComplementaryColor(color) {
  const complements = {
    'purple': 'pink',
    'blue': 'cyan',
    'green': 'emerald',
    'cyan': 'blue',
    'indigo': 'purple',
    'orange': 'red'
  };
  return complements[color] || 'gray';
}

// Template Generators
function generateHeroSection(config) {
  return `
  <section className="section-spacing overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-${config.color}-500/10 border border-${config.color}-500/20 mb-6">
          <span className="text-${config.color}-400 text-sm font-semibold">${config.badge}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          ${config.title} <span className="text-${config.color}-400">${config.titleHighlight}</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          ${config.subtitle}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
          <span>📅 ${config.date}</span>
          <span>•</span>
          <span>⏱️ ${config.readTime}</span>
          <span>•</span>
          <span>🔥 ${config.category}</span>
        </div>
      </div>
    </div>
  </section>`;
}

function generateStatsSection(stats, color) {
  if (stats.length === 0) return '';
  
  const color2 = getComplementaryColor(color);
  
  return `
  <section className="section-spacing">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">📊 Key Metrics</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-${Math.min(stats.length, 4)} gap-6">
          ${stats.map(stat => `
          <div className="bg-gradient-to-br from-${color}-900/20 to-${color2}-900/20 rounded-2xl p-6 border border-${color}-500/20">
            <div className="flex items-center justify-between mb-4">
              <span className="text-${color}-400 text-sm font-semibold">${stat.label}</span>
              <span className="text-2xl">${stat.emoji}</span>
            </div>
            <div className="text-3xl font-bold text-white mb-2">${stat.value}</div>
            <div className="text-sm text-gray-400">${stat.description}</div>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </section>`;
}

function generateTOC(sections, color) {
  if (sections.length === 0) return '';
  
  return `
  <section className="section-spacing">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900/50 to-${color}-900/20 rounded-2xl p-8 border border-${color}-500/20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-${color}-400">📚</span> Table of Contents
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            ${sections.map((section, i) => `
            <a href="#${section.id}" className="group flex items-center gap-3 p-3 rounded-lg hover:bg-${color}-500/10 transition-all duration-300">
              <span className="text-${color}-400 font-semibold">${i + 1}.</span>
              <span className="text-gray-300 group-hover:text-white transition-colors">${section.title}</span>
            </a>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

function transformMainContent(content, color) {
  // Remove the outer wrapper div if it exists
  content = content.replace(/<div class="max-w-4xl mx-auto">([\s\S]*)<\/div>$/, '$1');
  
  // Transform class to className
  content = content.replace(/class="/g, 'className="');
  
  // Fix self-closing tags
  content = content.replace(/<br>/g, '<br />');
  content = content.replace(/<img([^>]*?)>/g, '<img$1 />');
  content = content.replace(/<input([^>]*?)>/g, '<input$1 />');
  
  // Transform headers
  content = content.replace(/<h2>/g, `<h2 className="text-3xl font-bold text-white mb-6">`);
  content = content.replace(/<h3>/g, `<h3 className="text-2xl font-bold text-${color}-400 mb-4">`);
  content = content.replace(/<h4>/g, `<h4 className="text-xl font-semibold text-white mb-3">`);
  
  // Transform paragraphs
  content = content.replace(/<p>/g, '<p className="text-gray-300 mb-4">');
  content = content.replace(/<p><strong>/g, '<p className="text-gray-300 mb-4"><strong className="text-white">');
  
  // Transform lists
  content = content.replace(/<ul>/g, '<ul className="space-y-2 mb-6">');
  content = content.replace(/<ol>/g, '<ol className="space-y-2 mb-6 list-decimal list-inside">');
  content = content.replace(/<li>/g, `<li className="flex items-start gap-2 text-gray-300"><div className="w-1.5 h-1.5 rounded-full bg-${color}-400 mt-2 flex-shrink-0"></div><span>`);
  content = content.replace(/<\/li>/g, '</span></li>');
  
  // Transform blockquotes
  content = content.replace(/<blockquote>/g, `<blockquote className="border-l-4 border-${color}-500 pl-4 italic text-gray-300 my-6">`);
  
  // Transform code blocks
  content = content.replace(/<pre><code>/g, '<pre className="bg-gray-900/50 rounded-lg p-4 overflow-x-auto mb-6"><code className="text-sm text-gray-300">');
  
  // Fix template literals in code blocks
  content = content.replace(/\${`([^`]*)`}/g, '$1');
  
  // Wrap in sections
  return `
  <section className="section-spacing">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        ${content}
      </div>
    </div>
  </section>`;
}

function generateBeautifiedContent(data) {
  const { article, classification, titleParts, sections, stats } = data;
  
  let content = `<div className="min-h-screen bg-dark">`;
  
  // Hero section
  content += generateHeroSection({
    color: classification.color,
    badge: classification.badge,
    title: titleParts.part1,
    titleHighlight: titleParts.part2,
    subtitle: extractSubtitle(article.content),
    date: formatDate(article.date),
    readTime: article.readTime || '5 min read',
    category: article.category
  });
  
  // Stats section (if we have meaningful stats)
  if (stats.length >= 2) {
    content += generateStatsSection(stats, classification.color);
  }
  
  // Table of contents (if we have sections)
  if (sections.length >= 3) {
    content += generateTOC(sections, classification.color);
  }
  
  // Main content
  content += transformMainContent(article.content, classification.color);
  
  content += `\n</div>`;
  
  return content;
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
}

// Parse articles using a different approach
function parseArticles(fileContent) {
  const articles = [];
  
  // Find all article keys
  const articleKeys = [];
  const keyRegex = /'([a-z-]+)':\s*\{/g;
  let keyMatch;
  
  // First, find the newsArticles section
  const newsStart = fileContent.indexOf('const newsArticles: Record<string,');
  if (newsStart === -1) {
    throw new Error('Could not find newsArticles section');
  }
  
  // Find the opening brace
  const openBraceIndex = fileContent.indexOf('= {', newsStart);
  if (openBraceIndex === -1) {
    throw new Error('Could not find newsArticles opening brace');
  }
  
  // Find the closing brace (look for pattern matching }\n\n at the end of the object)
  let newsEnd = openBraceIndex;
  let braceCount = 1;
  let i = openBraceIndex + 3; // start after '= {'
  
  while (i < fileContent.length && braceCount > 0) {
    if (fileContent[i] === '{') {
      braceCount++;
    } else if (fileContent[i] === '}') {
      braceCount--;
    }
    i++;
  }
  
  newsEnd = i - 1; // position of the closing }
  
  const newsSection = fileContent.substring(newsStart, newsEnd);
  
  // Extract all article keys from the news section
  while ((keyMatch = keyRegex.exec(newsSection)) !== null) {
    articleKeys.push(keyMatch[1]);
  }
  
  console.log(`Found ${articleKeys.length} article keys`);
  
  // Now extract each article
  for (let i = 0; i < articleKeys.length; i++) {
    const key = articleKeys[i];
    const nextKey = articleKeys[i + 1];
    
    // Find the start of this article
    const articleStart = fileContent.indexOf(`'${key}': {`);
    if (articleStart === -1) continue;
    
    // Find the end of this article
    let articleEnd;
    if (nextKey) {
      articleEnd = fileContent.indexOf(`'${nextKey}': {`);
    } else {
      // Last article - find the closing brace
      articleEnd = newsEnd;
    }
    
    const articleText = fileContent.substring(articleStart, articleEnd);
    
    // Extract fields
    const titleMatch = articleText.match(/title:\s*['"]([^'"]+)['"]/);
    const dateMatch = articleText.match(/date:\s*['"]([^'"]+)['"]/);
    const categoryMatch = articleText.match(/category:\s*['"]([^'"]+)['"]/);
    const readTimeMatch = articleText.match(/readTime:\s*['"]([^'"]+)['"]/);
    
    // Extract content - look for content: ` and then find the closing `
    const contentStart = articleText.indexOf('content: `');
    if (contentStart === -1) continue;
    
    const contentTextStart = contentStart + 10; // length of 'content: `'
    
    // Find the closing backtick
    let contentEnd = articleText.indexOf('`,', contentTextStart);
    if (contentEnd === -1) {
      contentEnd = articleText.indexOf('`\n', contentTextStart);
    }
    if (contentEnd === -1) {
      // Try to find just a backtick followed by whitespace
      const remainingText = articleText.substring(contentTextStart);
      const backtickMatch = remainingText.match(/`\s*$/m);
      if (backtickMatch) {
        contentEnd = contentTextStart + backtickMatch.index;
      }
    }
    
    if (contentEnd === -1) continue;
    
    const content = articleText.substring(contentTextStart, contentEnd);
    
    if (titleMatch && content) {
      articles.push({
        slug: key,
        title: titleMatch[1],
        content: content,
        date: dateMatch ? dateMatch[1] : '2025-01-01',
        category: categoryMatch ? categoryMatch[1] : 'AI NEWS',
        readTime: readTimeMatch ? readTimeMatch[1] : '5 min'
      });
    }
  }
  
  return articles;
}

// Main transformation function
async function bulkBeautifyNewsArticles() {
  try {
    console.log('🚀 Starting bulk news article beautification...\n');
    
    // Read the file
    const filePath = path.join(process.cwd(), 'src/app/blog/[slug]/page.tsx');
    const fileContent = await fs.readFile(filePath, 'utf-8');
    
    // Parse articles
    const articles = parseArticles(fileContent);
    
    console.log(`📊 Found ${articles.length} total articles\n`);
    
    // Filter news articles (skip already beautified ones)
    const newsCategories = ['AI NEWS', 'AI TOOLS', 'AI AGENTS', 'AI PLATFORMS', 'DEVELOPMENT TOOLS', 'AI CODING', 'AI AUTOMATION'];
    const newsArticles = articles.filter(article => {
      const isNews = newsCategories.some(cat => article.category.includes(cat));
      const isAlreadyBeautified = article.content.includes('className="min-h-screen bg-dark"') || 
                                   article.content.includes('section-spacing');
      const needsBeautification = article.content.includes('<div class="max-w-4xl mx-auto">');
      return isNews && needsBeautification && !isAlreadyBeautified;
    });
    
    console.log(`📰 Found ${newsArticles.length} news articles to beautify\n`);
    
    if (newsArticles.length === 0) {
      console.log('✅ All news articles are already beautified!');
      return;
    }
    
    // Create backup
    const backupPath = filePath.replace('.tsx', '.backup.tsx');
    await fs.writeFile(backupPath, fileContent);
    console.log(`💾 Backup created at ${backupPath}\n`);
    
    // Transform each article
    let updatedContent = fileContent;
    const transformationLog = [];
    
    for (const article of newsArticles) {
      console.log(`🎨 Transforming: ${article.title}`);
      
      // Classify article
      const classification = classifyArticle(article);
      console.log(`   → Type: ${classification.type} | Color: ${classification.color}`);
      
      // Extract components
      const titleParts = extractTitleParts(article.title);
      const sections = extractSections(article.content);
      const stats = extractStats(article.content);
      
      console.log(`   → Found ${sections.length} sections, ${stats.length} stats`);
      
      // Generate beautified content
      const beautifiedContent = generateBeautifiedContent({
        article,
        classification,
        titleParts,
        sections,
        stats
      });
      
      // Find the exact location of this article's content
      const contentStartMarker = `'${article.slug}': {`;
      const contentStart = updatedContent.indexOf(contentStartMarker);
      if (contentStart === -1) {
        console.log(`   ❌ Could not find article in file`);
        continue;
      }
      
      // Find the content: ` part
      const contentFieldStart = updatedContent.indexOf('content: `', contentStart);
      if (contentFieldStart === -1) {
        console.log(`   ❌ Could not find content field`);
        continue;
      }
      
      const actualContentStart = contentFieldStart + 10; // length of 'content: `'
      
      // Find the closing backtick
      let contentEndIndex = updatedContent.indexOf('`,', actualContentStart);
      if (contentEndIndex === -1) {
        // Try other patterns
        const patterns = ['`\n    ,', '`\n  ,', '`,\n', '`\n'];
        for (const pattern of patterns) {
          contentEndIndex = updatedContent.indexOf(pattern, actualContentStart);
          if (contentEndIndex !== -1) {
            break;
          }
        }
      }
      
      if (contentEndIndex === -1) {
        console.log(`   ❌ Could not find content end`);
        continue;
      }
      
      // Replace the content
      updatedContent = updatedContent.substring(0, actualContentStart) + 
                      beautifiedContent + 
                      updatedContent.substring(contentEndIndex);
      
      transformationLog.push({
        slug: article.slug,
        title: article.title,
        classification: classification.type,
        color: classification.color
      });
      
      console.log(`   ✅ Transformation complete\n`);
    }
    
    // Write updated file
    await fs.writeFile(filePath, updatedContent);
    console.log('✨ All transformations complete!\n');
    
    // Generate report
    console.log('📊 Transformation Report:');
    console.log('========================');
    console.log(`Total articles transformed: ${transformationLog.length}\n`);
    
    // Group by classification
    const byType = {};
    transformationLog.forEach(item => {
      byType[item.classification] = (byType[item.classification] || 0) + 1;
    });
    
    console.log('By Type:');
    Object.entries(byType).forEach(([type, count]) => {
      console.log(`  ${type}: ${count}`);
    });
    
    console.log('\n✅ Bulk beautification complete!');
    console.log('🔍 Run `npm run dev` to see the results');
    
  } catch (error) {
    console.error('❌ Error during bulk beautification:', error);
    process.exit(1);
  }
}

// Execute if run directly
if (require.main === module) {
  bulkBeautifyNewsArticles();
}

module.exports = { bulkBeautifyNewsArticles };