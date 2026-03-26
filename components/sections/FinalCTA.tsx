'use client'

import { ArrowRight, Phone, Mail, Shield, Clock, MapPin, Wifi } from 'lucide-react'

const trustBadges = [
  { icon: Shield, label: 'No Lock-in Contracts' },
  { icon: Clock, label: '30-Day ROI Guarantee' },
  { icon: MapPin, label: 'Australian Registered' },
  { icon: Wifi, label: '100% Remote Setup' },
]

export function FinalCTA() {
  return (
    <section id="contact" className="py-24 bg-[#050B18] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #3B7BFF, #00D4FF, transparent)' }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <span className="badge badge-cyan mb-8">Get Started Today</span>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Stop Doing the Work<br />
          <span className="shimmer-text">AI Can Do For You?</span>
        </h2>

        <p className="max-w-2xl mx-auto text-lg text-[#7A8FA6] leading-relaxed mb-10">
          Book a free 15-minute strategy call. We&apos;ll map out exactly
          where AI automation will have the biggest impact in your business — and tell you
          honestly if it&apos;s the right fit.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="mailto:info@digisurfaustralia.com.au"
            className="btn-primary inline-flex items-center gap-2 text-sm sm:text-base px-6 py-3.5 sm:px-8 sm:py-4 w-full md:w-auto justify-center"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
            Book a Free Strategy Call
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:+61498541273"
            className="btn-ghost inline-flex items-center gap-2 text-sm sm:text-base px-6 py-3.5 sm:px-8 sm:py-4 w-full md:w-auto justify-center"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            +61 498 541 273
          </a>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="glass rounded-xl p-3.5 flex flex-col items-center gap-2">
              <badge.icon className="w-5 h-5 text-[#00D4FF]" />
              <span className="text-[10px] sm:text-xs font-medium text-[#7A8FA6] text-center leading-tight">{badge.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="mt-8 text-sm text-[#4A6080]">
          Free call · No commitment · Australian registered business · ABN 28 448 210 292
        </p>
      </div>
    </section>
  )
}
