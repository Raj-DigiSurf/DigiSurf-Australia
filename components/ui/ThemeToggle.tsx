'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="w-14 h-7" />

  const isDark = theme === 'dark'

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative inline-flex items-center w-14 h-7 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] ${
        isDark
          ? 'bg-[#0D1526] border border-[#00D4FF]/30'
          : 'bg-[#dce8f5] border border-[#0d6bca]/30'
      }`}
    >
      {/* Sliding thumb */}
      <span
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full shadow-md transition-all duration-300 flex items-center justify-center text-xs ${
          isDark
            ? 'translate-x-0 bg-[#00D4FF] shadow-[0_0_8px_rgba(0,212,255,0.5)]'
            : 'translate-x-7 bg-white shadow-[0_0_8px_rgba(13,107,202,0.3)]'
        }`}
      >
        {isDark ? '🌙' : '☀️'}
      </span>
    </button>
  )
}
