import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

const services = [
  { label: 'AI Chatbots', href: '#services' },
  { label: 'Content Automation', href: '#services' },
  { label: 'Document Automation', href: '#services' },
  { label: 'Healthcare AI', href: '#services' },
  { label: 'Fitness AI', href: '#services' },
]

const company = [
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Contact', href: '#contact' },
]

const socials = [
  { label: 'Instagram', href: 'https://instagram.com/digisurf.au', short: 'ig' },
  { label: 'Facebook', href: 'https://facebook.com/DigiSurfAustralia', short: 'fb' },
]

export function Footer() {
  return (
    <footer className="bg-[#050B18] border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Digi<span className="text-gradient">Surf</span>
              </span>
              <span className="rounded-full border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.1)] px-2 py-0.5 text-[10px] font-medium uppercase tracking-widest text-[#00D4FF]">
                AU
              </span>
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
                Sydney, New South Wales, Australia
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
              {socials.map(({ href, label, short }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-[#7A8FA6] hover:border-[#00D4FF] hover:text-[#00D4FF] transition-all duration-200 text-xs font-bold uppercase"
                >
                  {short}
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
          <div className="flex items-center gap-6 text-xs text-[#7A8FA6]">
            <span>ABN: 28 448 210 292</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
