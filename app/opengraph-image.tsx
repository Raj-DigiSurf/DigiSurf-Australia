import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'DigiSurf Australia — AI Automation for Australian Businesses'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: '#050B18',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '30%',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59,123,255,0.15), transparent 70%)',
          transform: 'translate(-50%, -50%)',
        }} />
        <div style={{
          position: 'absolute',
          top: '40%',
          right: '15%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,212,255,0.12), transparent 70%)',
          transform: 'translateY(-50%)',
        }} />

        {/* Logo mark */}
        <svg width="80" height="67" viewBox="0 0 90 75" style={{ marginBottom: 24 }}>
          <path d="M10,62 C20,54 30,36 44,28 C54,22 66,26 80,20" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="10" strokeLinecap="round" />
          <path d="M10,50 C18,42 28,26 42,20 C52,14 64,18 80,12" fill="none" stroke="rgba(0,212,255,0.5)" strokeWidth="9" strokeLinecap="round" />
          <path d="M10,38 C16,30 26,16 40,10 C50,4 62,8 80,4" fill="none" stroke="#00d4ff" strokeWidth="8" strokeLinecap="round" />
          <circle cx="40" cy="10" r="7" fill="#00d4ff" />
          <circle cx="40" cy="10" r="3" fill="white" />
        </svg>

        {/* Wordmark */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, marginBottom: 32 }}>
          <div style={{ fontSize: 52, fontWeight: 900, color: 'white', letterSpacing: 4 }}>DIGISURF</div>
          <div style={{ fontSize: 18, fontWeight: 500, color: '#00d4ff', letterSpacing: 10 }}>AUSTRALIA</div>
        </div>

        {/* Tagline */}
        <div style={{ fontSize: 28, color: 'white', fontWeight: 700, marginBottom: 12, textAlign: 'center' }}>
          Your Business. On Autopilot.
        </div>
        <div style={{ fontSize: 18, color: '#7A8FA6', textAlign: 'center', maxWidth: 700 }}>
          AI automation built for Australian businesses — calls, leads, content, and admin handled 24/7.
        </div>

        {/* Bottom bar */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 4,
          background: 'linear-gradient(90deg, #0a1f6e, #0d6bca, #00d4ff)',
        }} />
      </div>
    ),
    { ...size }
  )
}
