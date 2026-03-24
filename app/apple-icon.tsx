import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          background: 'linear-gradient(135deg, #050B18 0%, #0a1f6e 50%, #0d6bca 100%)',
          borderRadius: 40,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <svg width="120" height="100" viewBox="0 0 90 75">
          <path d="M10,62 C20,54 30,36 44,28 C54,22 66,26 80,20" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="10" strokeLinecap="round" />
          <path d="M10,50 C18,42 28,26 42,20 C52,14 64,18 80,12" fill="none" stroke="rgba(0,212,255,0.5)" strokeWidth="9" strokeLinecap="round" />
          <path d="M10,38 C16,30 26,16 40,10 C50,4 62,8 80,4" fill="none" stroke="#00d4ff" strokeWidth="8" strokeLinecap="round" />
          <circle cx="40" cy="10" r="7" fill="#00d4ff" />
          <circle cx="40" cy="10" r="3" fill="white" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
