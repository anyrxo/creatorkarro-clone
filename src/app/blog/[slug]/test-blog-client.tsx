'use client'

interface TestProps {
  content: string
}

export default function TestBlogClient({ content }: TestProps) {
  return (
    <div style={{ 
      backgroundColor: 'black', 
      color: 'white', 
      padding: '50px',
      fontSize: '20px'
    }}>
      <h1 style={{ color: 'red', fontSize: '40px' }}>TEST BLOG RENDERING</h1>
      
      <div style={{ backgroundColor: 'navy', padding: '20px', marginBottom: '20px' }}>
        <h2 style={{ color: 'yellow' }}>Raw HTML Content (first 500 chars):</h2>
        <pre style={{ color: 'white', whiteSpace: 'pre-wrap' }}>{content.substring(0, 500)}</pre>
      </div>
      
      <div style={{ backgroundColor: 'darkgreen', padding: '20px', marginBottom: '20px' }}>
        <h2 style={{ color: 'yellow' }}>With dangerouslySetInnerHTML:</h2>
        <div 
          dangerouslySetInnerHTML={{ __html: content }} 
          style={{ color: 'white !important' }}
        />
      </div>
      
      <div style={{ backgroundColor: 'darkred', padding: '20px', marginBottom: '20px' }}>
        <h2 style={{ color: 'yellow' }}>Individual style for each element:</h2>
        <div dangerouslySetInnerHTML={{ 
          __html: content.replace(/<p>/g, '<p style="color: white;">').replace(/<h2>/g, '<h2 style="color: white;">').replace(/<li>/g, '<li style="color: white;">') 
        }} />
      </div>
    </div>
  )
}