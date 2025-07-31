export function processContentForVisibility(htmlContent: string): string {
  // Add inline styles to every HTML element to force white color
  const processed = htmlContent
    // Add style to all paragraph tags
    .replace(/<p>/g, '<p style="color: white !important; margin-bottom: 1.5rem;">')
    .replace(/<p\s+([^>]*)>/g, '<p $1 style="color: white !important; margin-bottom: 1.5rem;">')
    
    // Add style to all heading tags
    .replace(/<h1>/g, '<h1 style="color: white !important; font-size: 2.5rem; font-weight: bold; margin: 2rem 0 1rem 0;">')
    .replace(/<h2>/g, '<h2 style="color: white !important; font-size: 2rem; font-weight: bold; margin: 2rem 0 1rem 0;">')
    .replace(/<h3>/g, '<h3 style="color: white !important; font-size: 1.75rem; font-weight: bold; margin: 2rem 0 1rem 0;">')
    .replace(/<h4>/g, '<h4 style="color: white !important; font-size: 1.5rem; font-weight: bold; margin: 2rem 0 1rem 0;">')
    .replace(/<h5>/g, '<h5 style="color: white !important; font-size: 1.25rem; font-weight: bold; margin: 2rem 0 1rem 0;">')
    .replace(/<h6>/g, '<h6 style="color: white !important; font-size: 1.125rem; font-weight: bold; margin: 2rem 0 1rem 0;">')
    
    // Add style to list items
    .replace(/<li>/g, '<li style="color: white !important; margin-bottom: 0.5rem;">')
    .replace(/<ul>/g, '<ul style="color: white !important; margin-bottom: 1.5rem; padding-left: 1.5rem;">')
    .replace(/<ol>/g, '<ol style="color: white !important; margin-bottom: 1.5rem; padding-left: 1.5rem;">')
    
    // Add style to other elements
    .replace(/<strong>/g, '<strong style="color: white !important; font-weight: 600;">')
    .replace(/<em>/g, '<em style="color: white !important; font-style: italic;">')
    .replace(/<blockquote>/g, '<blockquote style="color: white !important; border-left: 4px solid #60a5fa; padding-left: 1rem; margin: 2rem 0;">')
    .replace(/<a\s/g, '<a style="color: #60a5fa !important; text-decoration: underline;" ')
    
    // Add style to divs with classes
    .replace(/<div\s+class="([^"]+)">/g, '<div class="$1" style="color: white !important;">')
    .replace(/<span\s+class="([^"]+)">/g, '<span class="$1" style="color: white !important;">')
  
  return processed
}