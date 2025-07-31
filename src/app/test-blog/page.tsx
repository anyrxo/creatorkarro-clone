export default function TestBlog() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#000000', 
      color: '#ffffff', 
      padding: '50px',
      fontSize: '20px'
    }}>
      <h1 style={{ color: '#ff0000', fontSize: '40px', marginBottom: '30px' }}>
        🚨 BLOG TEST PAGE - WORKING! 🚨
      </h1>
      
      <div style={{ backgroundColor: '#333333', padding: '20px', marginBottom: '20px', borderRadius: '10px' }}>
        <h2 style={{ color: '#00ff00' }}>Blog Links Test:</h2>
        <div style={{ marginTop: '20px' }}>
          <a 
            href="/blog/digital-products-success-story" 
            style={{ 
              color: '#3b82f6', 
              textDecoration: 'underline', 
              display: 'block', 
              marginBottom: '10px',
              fontSize: '18px'
            }}
          >
            📈 Test Link 1: /blog/digital-products-success-story
          </a>
          <a 
            href="/blog/instagram-ignited-success-stories" 
            style={{ 
              color: '#3b82f6', 
              textDecoration: 'underline', 
              display: 'block', 
              marginBottom: '10px',
              fontSize: '18px'
            }}
          >
            🚀 Test Link 2: /blog/instagram-ignited-success-stories
          </a>
        </div>
      </div>
      
      <div style={{ backgroundColor: '#1a1a1a', padding: '20px', borderRadius: '10px' }}>
        <h3 style={{ color: '#ffa500' }}>If you can see this page with colors and links:</h3>
        <ul style={{ color: '#ffffff', lineHeight: '1.6' }}>
          <li>✅ The deployment is working</li>
          <li>✅ The blog system should be functional</li>
          <li>✅ Click the links above to test blog pages</li>
        </ul>
      </div>
      
      <div style={{ marginTop: '30px', fontSize: '16px', color: '#888888' }}>
        Time: {new Date().toLocaleString()}
      </div>
    </div>
  )
}