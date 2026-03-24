import React from 'react'

interface LogoProps {
  size?: number
  showWordmark?: boolean
  className?: string
}

export function LogoMark({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="DigiSurf logomark"
    >
      <defs>
        {/* Background gradient */}
        <linearGradient id="bg-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0D1A3A" />
          <stop offset="100%" stopColor="#050B18" />
        </linearGradient>
        {/* Wave gradient */}
        <linearGradient id="wave-grad" x1="4" y1="20" x2="36" y2="20" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00D4FF" />
          <stop offset="60%" stopColor="#3B7BFF" />
          <stop offset="100%" stopColor="#7B5FFF" />
        </linearGradient>
        {/* Border gradient */}
        <linearGradient id="border-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3B7BFF" stopOpacity="0.3" />
        </linearGradient>
        {/* Glow filter */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Background rounded square */}
      <rect width="40" height="40" rx="10" fill="url(#bg-grad)" />

      {/* Border */}
      <rect width="40" height="40" rx="10" fill="none" stroke="url(#border-grad)" strokeWidth="1" />

      {/* Wave path — a stylised surf/data wave */}
      <path
        d="M5 24 C7 24 9 14 12 14 C15 14 15 26 18 26 C21 26 21 12 24 12 C27 12 28 22 30 20 C32 18 33 16 35 16"
        stroke="url(#wave-grad)"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#glow)"
      />

      {/* Node dots at wave peaks/troughs */}
      <circle cx="12" cy="14" r="2" fill="#00D4FF" opacity="0.9" />
      <circle cx="18" cy="26" r="2" fill="#3B7BFF" opacity="0.9" />
      <circle cx="24" cy="12" r="2" fill="#3B7BFF" opacity="0.9" />
      <circle cx="30" cy="20" r="2" fill="#7B5FFF" opacity="0.9" />

      {/* Subtle inner glow at top */}
      <rect width="40" height="40" rx="10" fill="url(#bg-grad)" opacity="0" />
    </svg>
  )
}

export function LogoFull({ height = 32, className = '' }: { height?: number; className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`} aria-label="DigiSurf Australia">
      <LogoMark size={height} />
      <svg
        height={height}
        viewBox="0 0 120 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="text-grad" x1="60" y1="0" x2="120" y2="32" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#3B7BFF" />
          </linearGradient>
        </defs>
        {/* "Digi" — white */}
        <text
          x="0"
          y="24"
          fontFamily="'Space Grotesk', system-ui, sans-serif"
          fontWeight="700"
          fontSize="22"
          fill="#F0F6FF"
          letterSpacing="-0.5"
        >
          Digi
        </text>
        {/* "Surf" — gradient */}
        <text
          x="52"
          y="24"
          fontFamily="'Space Grotesk', system-ui, sans-serif"
          fontWeight="700"
          fontSize="22"
          fill="url(#text-grad)"
          letterSpacing="-0.5"
        >
          Surf
        </text>
      </svg>
    </div>
  )
}

export function Logo({ size = 40, showWordmark = true, className = '' }: LogoProps) {
  if (!showWordmark) return <LogoMark size={size} />
  return <LogoFull height={size} className={className} />
}
