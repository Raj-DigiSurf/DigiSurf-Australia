'use client'

interface LogoProps {
  variant?: 'dark' | 'light'
  width?: number
  className?: string
}

export function Logo({ variant = 'dark', width = 200, className = '' }: LogoProps) {
  const isDark = variant === 'dark'

  return (
    <svg
      viewBox="0 0 360 95"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="DigiSurf Australia"
    >
      <defs>
        {isDark ? (
          <>
            <linearGradient id="lg1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0a1f6e" />
              <stop offset="40%" stopColor="#0d6bca" />
              <stop offset="100%" stopColor="#00d4ff" />
            </linearGradient>
            <linearGradient id="lg2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0d3a9e" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#38c0f8" stopOpacity="0.35" />
            </linearGradient>
            <linearGradient id="lg3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1460c0" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#90e4ff" stopOpacity="0.15" />
            </linearGradient>
            <filter id="lgl">
              <feGaussianBlur stdDeviation="2" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </>
        ) : (
          <>
            <linearGradient id="lg1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0a1f6e" />
              <stop offset="40%" stopColor="#0d6bca" />
              <stop offset="100%" stopColor="#009ec0" />
            </linearGradient>
            <linearGradient id="lg2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0d3a9e" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#38c0f8" stopOpacity="0.32" />
            </linearGradient>
            <linearGradient id="lg3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1460c0" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#90e4ff" stopOpacity="0.12" />
            </linearGradient>
            <filter id="lgl">
              <feGaussianBlur stdDeviation="2" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </>
        )}
      </defs>

      {/* Wave strokes — layered depth */}
      <path
        d="M10,62 C20,54 30,36 44,28 C54,22 66,26 80,20"
        fill="none"
        stroke="url(#lg3)"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M10,50 C18,42 28,26 42,20 C52,14 64,18 80,12"
        fill="none"
        stroke="url(#lg2)"
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M10,38 C16,30 26,16 40,10 C50,4 62,8 80,4"
        fill="none"
        stroke="url(#lg1)"
        strokeWidth="8"
        strokeLinecap="round"
        filter="url(#lgl)"
      />

      {/* Glowing peak dot */}
      <circle
        cx="40"
        cy="10"
        r="5"
        fill={isDark ? '#00d4ff' : '#009ec0'}
        filter="url(#lgl)"
      />
      <circle cx="40" cy="10" r="2" fill={isDark ? '#ffffff' : '#0a1f6e'} />

      {/* DIGISURF wordmark */}
      <text
        x="182"
        y="42"
        textAnchor="middle"
        fontFamily="var(--font-logo), 'Montserrat', sans-serif"
        fontWeight="900"
        fontSize="28"
        fill={isDark ? '#ffffff' : '#0a1f6e'}
        letterSpacing="1"
      >
        DIGISURF
      </text>

      {/* AUSTRALIA subtext */}
      <text
        x="182"
        y="63"
        textAnchor="middle"
        fontFamily="var(--font-logo), 'Montserrat', sans-serif"
        fontWeight="500"
        fontSize="13"
        fill={isDark ? '#00d4ff' : '#0d6bca'}
        letterSpacing="5"
      >
        AUSTRALIA
      </text>
    </svg>
  )
}

// Compact icon-only mark for small spaces (wave + dot only, no text)
export function LogoMark({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 90 75"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="DigiSurf"
    >
      <defs>
        <linearGradient id="mk1" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0a1f6e" />
          <stop offset="40%" stopColor="#0d6bca" />
          <stop offset="100%" stopColor="#00d4ff" />
        </linearGradient>
        <linearGradient id="mk2" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0d3a9e" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#38c0f8" stopOpacity="0.35" />
        </linearGradient>
        <linearGradient id="mk3" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1460c0" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#90e4ff" stopOpacity="0.15" />
        </linearGradient>
        <filter id="mkgl">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path d="M10,62 C20,54 30,36 44,28 C54,22 66,26 80,20" fill="none" stroke="url(#mk3)" strokeWidth="10" strokeLinecap="round" />
      <path d="M10,50 C18,42 28,26 42,20 C52,14 64,18 80,12" fill="none" stroke="url(#mk2)" strokeWidth="9" strokeLinecap="round" />
      <path d="M10,38 C16,30 26,16 40,10 C50,4 62,8 80,4" fill="none" stroke="url(#mk1)" strokeWidth="8" strokeLinecap="round" filter="url(#mkgl)" />
      <circle cx="40" cy="10" r="5" fill="#00d4ff" filter="url(#mkgl)" />
      <circle cx="40" cy="10" r="2" fill="#ffffff" />
    </svg>
  )
}

export function LogoFull({ height = 32, className = '' }: { height?: number; className?: string }) {
  const width = Math.round(height * (360 / 95))
  return <Logo variant="dark" width={width} className={className} />
}
