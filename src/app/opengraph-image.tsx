import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'IImagined.ai - Master Instagram Growth & AI Automation'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(to bottom right, #0a0a0a, #1a1a1a)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 'bold',
            color: '#3b82f6',
            marginBottom: 20,
          }}
        >
          IImagined.ai
        </div>
        <div
          style={{
            fontSize: 40,
            color: '#e5e7eb',
            textAlign: 'center',
            maxWidth: 900,
          }}
        >
          Master Instagram Growth, AI Automation & Digital Products
        </div>
        <div
          style={{
            fontSize: 30,
            color: '#9ca3af',
            marginTop: 20,
          }}
        >
          Join 127K+ Creators Building Profitable Businesses
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}