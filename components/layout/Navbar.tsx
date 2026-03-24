'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { LogoFull, LogoMark } from '@/components/ui/Logo'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(5,11,24,0.88)] backdrop-blur-xl border-b border-white/[0.06] shadow-xl shadow-black/30'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a href="/" className="flex items-center gap-2 group hover:opacity-90 transition-opacity duration-200">
              <div className="group-hover:scale-105 transition-transform duration-300">
                <LogoFull height={30} />
              </div>
              <span className="hidden sm:inline-block badge badge-cyan text-[10px] py-0.5 px-2 ml-1">AU</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="px-4 py-2 text-sm font-medium text-[#7A8FA6] hover:text-white rounded-lg hover:bg-white/[0.05] transition-all duration-200 cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+61498541273"
                className="text-sm font-medium text-[#7A8FA6] hover:text-[#00D4FF] transition-colors duration-200"
              >
                +61 498 541 273
              </a>
              <button
                onClick={() => scrollTo('#contact')}
                className="btn-primary text-sm px-5 py-2.5"
              >
                Book Free Call
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-lg text-[#7A8FA6] hover:text-white hover:bg-white/[0.05] transition-all duration-200"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-72 bg-[#0D1526]/95 backdrop-blur-xl border-l border-white/[0.08] transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full pt-20 px-6 pb-10">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-4 py-3.5 text-base font-medium text-[#7A8FA6] hover:text-white hover:bg-white/[0.05] rounded-xl transition-all duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3">
              <p className="text-xs text-[#4A6080] text-center">info@digisurfaustralia.com.au</p>
              <button
                onClick={() => scrollTo('#contact')}
                className="btn-primary text-center text-sm"
              >
                Book Free Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
