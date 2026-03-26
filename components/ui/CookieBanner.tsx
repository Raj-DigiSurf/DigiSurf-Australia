'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

type ConsentState = {
  essential: true
  analytics: boolean
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showPrefs, setShowPrefs] = useState(false)
  const [analytics, setAnalytics] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem('cookie_consent')
    if (!saved) {
      // Delay slightly so it doesn't flash on initial load
      const t = setTimeout(() => setVisible(true), 1200)
      return () => clearTimeout(t)
    }
  }, [])

  const save = (consent: ConsentState) => {
    localStorage.setItem('cookie_consent', JSON.stringify({ ...consent, timestamp: Date.now() }))
    setVisible(false)
  }

  const acceptAll = () => save({ essential: true, analytics: true })
  const savePrefs = () => save({ essential: true, analytics })
  const rejectAll = () => save({ essential: true, analytics: false })

  if (!visible) return null

  return (
    <div
      className="fixed bottom-0 inset-x-0 z-[100] p-4 sm:p-6"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="max-w-3xl mx-auto bg-[#0D1526] border border-white/[0.1] rounded-2xl shadow-2xl shadow-black/50 overflow-hidden">

        {!showPrefs ? (
          /* Main banner */
          <div className="p-5 sm:p-6">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="text-white font-semibold text-sm mb-1">We use cookies</p>
                <p className="text-[#7A8FA6] text-xs leading-relaxed">
                  We use essential cookies to make the site work, and optional analytics cookies to understand how visitors use it. No advertising cookies, ever.{' '}
                  <Link href="/cookies" className="text-[#00D4FF] hover:underline">Cookie Policy</Link>
                  {' '}·{' '}
                  <Link href="/privacy" className="text-[#00D4FF] hover:underline">Privacy Policy</Link>
                </p>
              </div>
              <button
                onClick={rejectAll}
                aria-label="Reject all and close"
                className="text-[#4A6080] hover:text-white transition-colors shrink-0 mt-0.5"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={acceptAll}
                className="px-4 py-2 rounded-lg bg-[#00D4FF] text-[#050B18] text-xs font-bold hover:opacity-90 transition-opacity"
              >
                Accept All
              </button>
              <button
                onClick={() => setShowPrefs(true)}
                className="px-4 py-2 rounded-lg border border-white/[0.12] text-[#7A8FA6] text-xs font-medium hover:text-white hover:border-white/30 transition-all"
              >
                Manage Preferences
              </button>
              <button
                onClick={rejectAll}
                className="px-4 py-2 rounded-lg text-[#4A6080] text-xs font-medium hover:text-[#7A8FA6] transition-colors"
              >
                Essential Only
              </button>
            </div>
          </div>
        ) : (
          /* Preferences panel */
          <div className="p-5 sm:p-6">
            <div className="flex items-center justify-between mb-5">
              <p className="text-white font-semibold text-sm">Cookie Preferences</p>
              <button
                onClick={() => setShowPrefs(false)}
                className="text-[#4A6080] hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 mb-5">

              {/* Essential — always on */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div>
                  <p className="text-white text-sm font-medium mb-1">Essential Cookies</p>
                  <p className="text-[#7A8FA6] text-xs leading-relaxed">Required for the site to function (theme preference, consent storage). Cannot be disabled.</p>
                </div>
                <div className="shrink-0 px-2 py-1 rounded text-xs font-semibold bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/20 whitespace-nowrap">
                  Always On
                </div>
              </div>

              {/* Analytics — toggleable */}
              <div className="flex items-start justify-between gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                <div>
                  <p className="text-white text-sm font-medium mb-1">Analytics Cookies</p>
                  <p className="text-[#7A8FA6] text-xs leading-relaxed">Anonymous data on how visitors use the site (via Vercel). No personal information collected.</p>
                </div>
                <button
                  role="switch"
                  aria-checked={analytics}
                  onClick={() => setAnalytics(!analytics)}
                  className={`relative shrink-0 w-10 h-6 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] ${
                    analytics ? 'bg-[#00D4FF]' : 'bg-white/[0.12]'
                  }`}
                >
                  <span
                    className={`absolute top-[3px] w-[18px] h-[18px] rounded-full bg-white shadow-sm transition-all duration-200 ${
                      analytics ? 'left-[19px]' : 'left-[3px]'
                    }`}
                  />
                </button>
              </div>

            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={savePrefs}
                className="px-4 py-2 rounded-lg bg-[#00D4FF] text-[#050B18] text-xs font-bold hover:opacity-90 transition-opacity"
              >
                Save Preferences
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 rounded-lg border border-white/[0.12] text-[#7A8FA6] text-xs font-medium hover:text-white hover:border-white/30 transition-all"
              >
                Accept All
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
