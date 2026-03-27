'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown, Phone, Bot, MessageSquare, Mic2, Share2, Zap } from 'lucide-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'

const HUBSPOT = 'https://meetings-na2.hubspot.com/henish'

const serviceDropdown = [
  { label: 'AI Receptionist', href: '/ai-receptionist', icon: Phone, desc: '24/7 call answering & booking' },
  { label: 'AI Chatbot', href: '/ai-chatbot', icon: MessageSquare, desc: 'Website & DM lead capture' },
  { label: 'AI Voice Agent', href: '/ai-voice-agent', icon: Mic2, desc: 'Inbound & outbound calls' },
  { label: 'AI Social Media', href: '/ai-social-media', icon: Share2, desc: 'Daily content, zero effort' },
  { label: 'All AI Services', href: '/ai-automation', icon: Zap, desc: 'Full automation overview' },
]

const navLinks = [
  { label: 'Industries', href: '#industries' },
  { label: 'Process', href: '#how-it-works' },
  { label: 'ROI', href: '#roi-calculator' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

const pageLinks = [
  { label: 'Blog', href: '/blog' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const hoverTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => { setMounted(true) }, [])
  const isLight = mounted && theme === 'light'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setOpen(false)
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const openDropdown = () => {
    if (hoverTimeout.current) clearTimeout(hoverTimeout.current)
    setServicesOpen(true)
  }

  const closeDropdown = () => {
    hoverTimeout.current = setTimeout(() => setServicesOpen(false), 120)
  }

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? isLight
            ? 'bg-[rgba(240,245,255,0.92)] backdrop-blur-xl border-b border-[#0d6bca]/10 shadow-lg shadow-[#0d6bca]/5'
            : 'bg-[rgba(5,11,24,0.88)] backdrop-blur-xl border-b border-white/[0.06] shadow-xl shadow-black/30'
          : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="/" className="flex items-center group hover:opacity-90 transition-opacity duration-200">
              <div className="group-hover:scale-[1.03] transition-transform duration-300">
                <Logo variant={isLight ? 'light' : 'dark'} width={210} />
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">

              {/* Home */}
              <Link
                href="/"
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${isLight ? 'text-[#1a2e50] hover:text-[#0d6bca] hover:bg-[#0d6bca]/[0.06]' : 'text-[#7A8FA6] hover:text-white hover:bg-white/[0.05]'}`}
              >
                Home
              </Link>

              {/* Services dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={openDropdown}
                onMouseLeave={closeDropdown}
              >
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap ${isLight ? 'text-[#1a2e50] hover:text-[#0d6bca] hover:bg-[#0d6bca]/[0.06]' : 'text-[#7A8FA6] hover:text-white hover:bg-white/[0.05]'}`}
                >
                  Services
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown panel */}
                {servicesOpen && (
                  <div
                    className={`absolute top-full left-0 mt-1 w-64 rounded-2xl shadow-2xl border overflow-hidden z-50 ${
                      isLight
                        ? 'bg-white border-[rgba(13,107,202,0.15)] shadow-[rgba(13,107,202,0.12)]'
                        : 'bg-[#0D1526] border-white/[0.08] shadow-black/50'
                    }`}
                    onMouseEnter={openDropdown}
                    onMouseLeave={closeDropdown}
                  >
                    <div className="p-2">
                      {serviceDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setServicesOpen(false)}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-xl group transition-all duration-150 ${
                            isLight
                              ? 'hover:bg-[#0d6bca]/[0.06]'
                              : 'hover:bg-white/[0.05]'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            isLight ? 'bg-[#0d6bca]/[0.08] group-hover:bg-[#0d6bca]/[0.14]' : 'bg-[rgba(0,212,255,0.08)] group-hover:bg-[rgba(0,212,255,0.14)]'
                          }`}>
                            <item.icon className={`w-4 h-4 ${isLight ? 'text-[#0d6bca]' : 'text-[#00D4FF]'}`} />
                          </div>
                          <div>
                            <p className={`text-sm font-semibold leading-tight ${isLight ? 'text-[#1a2e50]' : 'text-white'}`}>{item.label}</p>
                            <p className={`text-xs mt-0.5 ${isLight ? 'text-[#4a6080]' : 'text-[#4A6080]'}`}>{item.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Scroll links */}
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap ${isLight ? 'text-[#1a2e50] hover:text-[#0d6bca] hover:bg-[#0d6bca]/[0.06]' : 'text-[#7A8FA6] hover:text-white hover:bg-white/[0.05]'}`}
                >
                  {link.label}
                </button>
              ))}

              {/* Page links */}
              {pageLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${isLight ? 'text-[#1a2e50] hover:text-[#0d6bca] hover:bg-[#0d6bca]/[0.06]' : 'text-[#7A8FA6] hover:text-white hover:bg-white/[0.05]'}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />
              <a
                href="tel:+61498541273"
                className={`text-sm font-medium transition-colors duration-200 ${isLight ? 'text-[#1a2e50] hover:text-[#0d6bca]' : 'text-[#7A8FA6] hover:text-[#00D4FF]'}`}
              >
                +61 498 541 273
              </a>
              <a
                href={HUBSPOT}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm px-5 py-2.5"
              >
                Book Free Call
              </a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className={`lg:hidden p-2 rounded-lg transition-all duration-200 ${isLight ? 'text-[#1a2e50] hover:text-[#0d6bca] hover:bg-[#0d6bca]/[0.06]' : 'text-[#7A8FA6] hover:text-white hover:bg-white/[0.05]'}`}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile backdrop — only rendered when open to avoid iOS/iPad touch-blocking via backdrop-filter */}
      {open && (
        <div
          className="fixed inset-0 z-40 lg:hidden bg-black/70"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile slide panel */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-40 lg:hidden backdrop-blur-xl transition-transform duration-300 ${
          open ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'
        } ${isLight ? 'bg-[rgba(240,245,255,0.97)] border-l border-[rgba(13,107,202,0.15)]' : 'bg-[#0D1526]/95 border-l border-white/[0.08]'}`}
      >
          <div className="flex flex-col h-full pt-20 px-6 pb-10 overflow-y-auto">
            <nav className="flex flex-col gap-1">

              {/* Home */}
              <Link
                href="/"
                onClick={() => setOpen(false)}
                className={`text-left px-4 py-3.5 text-base font-medium rounded-xl transition-all duration-200 ${isLight ? 'text-[#1a2e50] hover:text-[#0d6bca] hover:bg-[#0d6bca]/[0.06]' : 'text-[#7A8FA6] hover:text-white hover:bg-white/[0.05]'}`}
              >
                Home
              </Link>

              {/* Services expandable */}
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className={`flex items-center justify-between px-4 py-3.5 text-base font-medium rounded-xl transition-all duration-200 ${isLight ? 'text-[#1a2e50] hover:text-[#0d6bca] hover:bg-[#0d6bca]/[0.06]' : 'text-[#7A8FA6] hover:text-white hover:bg-white/[0.05]'}`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileServicesOpen && (
                <div className={`ml-4 flex flex-col gap-1 rounded-xl p-2 ${isLight ? 'bg-[#0d6bca]/[0.04]' : 'bg-white/[0.03]'}`}>
                  {serviceDropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => { setOpen(false); setMobileServicesOpen(false) }}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-150 ${isLight ? 'text-[#1a2e50] hover:text-[#0d6bca] hover:bg-[#0d6bca]/[0.06]' : 'text-[#7A8FA6] hover:text-white hover:bg-white/[0.05]'}`}
                    >
                      <item.icon className={`w-4 h-4 ${isLight ? 'text-[#0d6bca]' : 'text-[#00D4FF]'}`} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </Link>
                  ))}
                </div>
              )}

              {/* Scroll links */}
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left px-4 py-3.5 text-base font-medium rounded-xl transition-all duration-200 ${isLight ? 'text-[#1a2e50] hover:text-[#0d6bca] hover:bg-[#0d6bca]/[0.06]' : 'text-[#7A8FA6] hover:text-white hover:bg-white/[0.05]'}`}
                >
                  {link.label}
                </button>
              ))}

              {/* Page links */}
              {pageLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`text-left px-4 py-3.5 text-base font-medium rounded-xl transition-all duration-200 ${isLight ? 'text-[#1a2e50] hover:text-[#0d6bca] hover:bg-[#0d6bca]/[0.06]' : 'text-[#7A8FA6] hover:text-white hover:bg-white/[0.05]'}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-4">
              <div className={`flex items-center justify-between px-4 py-3 rounded-xl ${isLight ? 'bg-[#0d6bca]/[0.06]' : 'bg-white/[0.03]'}`}>
                <span className={`text-sm font-medium ${isLight ? 'text-[#1a2e50]' : 'text-[#7A8FA6]'}`}>Theme</span>
                <ThemeToggle />
              </div>
              <p className={`text-xs text-center ${isLight ? 'text-[#4a6080]' : 'text-[#4A6080]'}`}>info@digisurfaustralia.com.au</p>
              <a
                href={HUBSPOT}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center text-sm"
              >
                Book Free Call
              </a>
            </div>
          </div>
        </div>
    </>
  )
}
