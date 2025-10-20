// News Article Transformation Script
// This script helps automate the beautification of news articles

const transformArticle = (articleContent, config) => {
  const {
    brandColor = 'blue',
    categoryLabel = 'NEWS UPDATE',
    title,
    titleHighlight,
    subtitle,
    date,
    readTime = 5,
    category = 'AI News'
  } = config;

  // Base transformations
  let transformed = articleContent
    // Convert class to className
    .replace(/class="/g, 'className="')
    // Fix self-closing tags
    .replace(/<br>/g, '<br />')
    .replace(/<img([^>]*?)>/g, '<img$1 />')
    .replace(/<input([^>]*?)>/g, '<input$1 />')
    // Escape quotes in attributes
    .replace(/="([^"]*?)"/g, (match, content) => {
      if (content.includes('"')) {
        return `="${content.replace(/"/g, '&quot;')}"`;
      }
      return match;
    });

  // Wrap in proper structure
  const heroSection = `<div className="min-h-screen bg-dark">
  <section className="section-spacing overflow-hidden">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-${brandColor}-500/10 border border-${brandColor}-500/20 mb-6">
          <span className="text-${brandColor}-400 text-sm font-semibold">${categoryLabel}</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          ${title} <span className="text-${brandColor}-400">${titleHighlight}</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          ${subtitle}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
          <span>📅 ${date}</span>
          <span>•</span>
          <span>⏱️ ${readTime} min read</span>
          <span>•</span>
          <span>🔥 ${category}</span>
        </div>
      </div>
    </div>
  </section>`;

  // Transform common patterns
  transformed = transformed
    // Headers
    .replace(/<h2>/g, '<h2 className="text-3xl font-bold text-white mb-6">')
    .replace(/<h3>/g, '<h3 className="text-2xl font-bold text-' + brandColor + '-400 mb-4">')
    .replace(/<h4>/g, '<h4 className="text-xl font-semibold text-white mb-3">')
    .replace(/<h5>/g, '<h5 className="text-lg font-semibold text-' + brandColor + '-400 mb-2">')
    
    // Paragraphs
    .replace(/<p>/g, '<p className="text-gray-300 mb-4">')
    .replace(/<p><strong>/g, '<p className="text-gray-300 mb-4"><strong className="text-white">')
    
    // Lists
    .replace(/<ul>/g, '<ul className="space-y-2 mb-6">')
    .replace(/<ol>/g, '<ol className="space-y-2 mb-6 list-decimal list-inside">')
    .replace(/<li>/g, '<li className="flex items-start gap-2 text-gray-300"><div className="w-1.5 h-1.5 rounded-full bg-' + brandColor + '-400 mt-2 flex-shrink-0"></div><span>')
    .replace(/<\/li>/g, '</span></li>')
    
    // Divs with classes
    .replace(/<div className="max-w-4xl mx-auto">/g, '')
    .replace(/<div className="container">/g, '<div className="container mx-auto px-4 sm:px-6 lg:px-8">')
    
    // Code blocks - convert template literals to regular code blocks
    .replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g, (match, code) => {
      // Remove template literal syntax
      const cleanCode = code
        .replace(/\${`/g, '')
        .replace(/`}/g, '')
        .replace(/`/g, '')
        .split('\n')
        .map(line => line + '<br />')
        .join('\n');
      return `<pre className="text-sm text-gray-300 overflow-x-auto bg-gray-900/50 rounded-lg p-4 border border-gray-700/50">${cleanCode}</pre>`;
    });

  // Add sections wrapper
  transformed = `${heroSection}

  <section className="section-spacing">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        ${transformed}
      </div>
    </div>
  </section>
</div>`;

  return transformed;
};

// Article configurations
const articleConfigs = {
  'augment-code-free-ai-coding-assistant-that-automates-codebase': {
    brandColor: 'purple',
    categoryLabel: 'AI CODING TOOL',
    title: 'Augment Code: The Free AI Coding Assistant',
    titleHighlight: 'That Automates Your Codebase',
    subtitle: 'Complete Review & Setup Guide with 3,000 free messages monthly and unlimited code completions',
    date: 'March 2025',
    category: 'AI Tools'
  },
  'google-ai-studio-update-powerful-free-all-in-one-platform-developers-creators': {
    brandColor: 'blue',
    categoryLabel: 'GOOGLE AI UPDATE',
    title: 'Google AI Studio Update: A Powerful',
    titleHighlight: 'Free All-in-One Platform',
    subtitle: 'Complete developer guide for the game-changing update with Gemini 2.5 Flash, code editor, and video generation',
    date: 'March 2025',
    category: 'AI Platform'
  },
  'dart-ai-free-agentic-project-manager': {
    brandColor: 'green',
    categoryLabel: 'AI PROJECT MANAGEMENT',
    title: 'Dart AI Review: The Free Agentic',
    titleHighlight: 'Project Manager That Automates Everything',
    subtitle: 'Revolutionary AI that manages tasks autonomously and integrates with your entire tech stack',
    date: 'March 2025',
    category: 'AI Automation'
  },
  'deepagent-update-god-tier-ai-agent': {
    brandColor: 'cyan',
    categoryLabel: 'AI AGENT UPDATE',
    title: 'DeepAgent Update: The God-Tier AI Agent',
    titleHighlight: 'That Can Build and Automate Almost Anything',
    subtitle: 'Latest update brings god-tier capabilities for building and automating complex systems',
    date: 'March 2025',
    category: 'AI Agents'
  },
  'revolutionizing-developer-productivity-windsurf-wave-2': {
    brandColor: 'indigo',
    categoryLabel: 'DEVELOPER TOOLS',
    title: 'Revolutionizing Developer Productivity:',
    titleHighlight: 'Windsurf Wave 2',
    subtitle: 'The AI-Powered IDE That Eliminates Context Switching with intelligent web search and automated memories',
    date: 'January 2025',
    category: 'Development'
  },
  'gemini-canvas-googles-fully-free-ai-coder-revolutionizing-development': {
    brandColor: 'emerald',
    categoryLabel: 'GOOGLE AI CODING',
    title: 'Gemini Canvas: Google\'s Free',
    titleHighlight: 'AI Coding Revolution',
    subtitle: 'Master the free AI coding assistant with real-time code generation, debugging, and multi-modal support',
    date: 'March 2025',
    category: 'AI Coding'
  },
  'qwen-25-max-raises-the-bar-for-ai': {
    brandColor: 'orange',
    categoryLabel: 'OPEN SOURCE AI',
    title: 'Qwen-2.5 Max: Alibaba\'s',
    titleHighlight: 'Open-Source LLM Breakthrough',
    subtitle: 'Deep dive into technical benchmarks, performance comparisons, and implementation guide',
    date: 'January 2025',
    category: 'Open Source'
  }
};

// Export for use
module.exports = { transformArticle, articleConfigs };