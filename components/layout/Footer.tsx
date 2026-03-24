'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Logo } from '@/components/ui/Logo'

const services = [
  { label: 'AI Receptionist', href: '#services' },
  { label: 'AI Chatbots', href: '#services' },
  { label: 'AI Voice Agents', href: '#services' },
  { label: 'Social Media AI', href: '#services' },
  { label: 'Document Automation', href: '#services' },
]

const company = [
  { label: 'Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'ROI Calculator', href: '#roi-calculator' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/digisurf.au',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com/DigiSurfAustralia',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
]

export function Footer() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  useEffect(() => { setMounted(true) }, [])
  const isLight = mounted && theme === 'light'
  return (
    <footer className="bg-[#050B18] border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 md:gap-10 lg:gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-4 hover:opacity-90 transition-opacity">
              <Logo variant={isLight ? 'light' : 'dark'} width={195} />
            </Link>
            <p className="text-sm text-[#7A8FA6] leading-relaxed mb-6">
              AI automation for Australian businesses. We save you time, cut costs, and help you scale faster.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-3 text-sm text-[#7A8FA6]">
              <a href="mailto:info@digisurfaustralia.com.au" className="flex items-center gap-2 hover:text-[#00D4FF] transition-colors">
                <Mail size={14} className="text-[#00D4FF] shrink-0" />
                info@digisurfaustralia.com.au
              </a>
              <a href="tel:+61498541273" className="flex items-center gap-2 hover:text-[#00D4FF] transition-colors">
                <Phone size={14} className="text-[#00D4FF] shrink-0" />
                +61 498 541 273
              </a>
              <span className="flex items-start gap-2">
                <MapPin size={14} className="text-[#00D4FF] shrink-0 mt-0.5" />
                Australia
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#7A8FA6] hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-widest text-white">
              Company
            </h4>
            <ul className="flex flex-col gap-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#7A8FA6] hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Box */}
          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-widest text-white">
              Ready to Automate?
            </h4>
            <p className="mb-5 text-sm text-[#7A8FA6] leading-relaxed">
              Book a free 15-minute strategy call. No commitment, no jargon — just practical AI advice for your business.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center bg-ds-accent text-[#050B18] font-semibold text-sm px-5 py-3 rounded-lg hover:opacity-90 transition-all w-full text-center"
            >
              Book a Free Call
            </Link>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-[#7A8FA6] hover:border-[#00D4FF] hover:text-[#00D4FF] transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-[#7A8FA6]">
            © {new Date().getFullYear()} DigiSurf Australia Pty Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-3 sm:gap-6 text-xs text-[#7A8FA6]">
            <span>ABN: 28 448 210 292</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
