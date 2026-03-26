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
      className={`relative inline-flex items-center w-14 h-7 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] ${
        isDark
          ? 'bg-[#0D1526] border border-[#00D4FF]/30'
          : 'bg-[#dce8f5] border border-[#0d6bca]/30'
      }`}
    >
      {/* Sliding thumb */}
      <span
        className={`absolute top-[3px] w-[22px] h-[22px] rounded-full shadow-md flex items-center justify-center ${
          isDark
            ? 'left-[3px] bg-[#00D4FF] shadow-[0_0_8px_rgba(0,212,255,0.5)]'
            : 'left-[31px] bg-white shadow-[0_0_8px_rgba(13,107,202,0.3)]'
        }`}
        style={{ transition: 'left 0.25s cubic-bezier(0.4,0,0.2,1), background-color 0.25s ease' }}
      >
        {isDark ? (
          /* Moon icon */
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#050B18" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          /* Sun icon */
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0d6bca" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        )}
      </span>
    </button>
  )
}
