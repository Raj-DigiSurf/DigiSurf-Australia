'use client'

import { SocialProof } from '@/components/sections/SocialProof'
import { Services } from '@/components/sections/Services'
import { Industries } from '@/components/sections/Industries'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Portfolio } from '@/components/sections/Portfolio'
import { ROICalculator } from '@/components/sections/ROICalculator'
import { Pricing } from '@/components/sections/Pricing'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { ArrowRight, Phone } from 'lucide-react'

export default function Home() {
  return (
    <>
      {/* ── Hero ──────────────────────────────── */}
      <section className="bg-ds-hero min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-grid opacity-40" />

        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-15 pointer-events-none animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, #3B7BFF, transparent)' }}
        />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full blur-[100px] opacity-10 pointer-events-none animate-pulse-glow"
          style={{ background: 'radial-gradient(circle, #00D4FF, transparent)', animationDelay: '1.5s' }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-6 tracking-tight">
            Your Business.<br />
            <span className="text-gradient">On Autopilot.</span>
          </h1>

          {/* Sub headline */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#7A8FA6] leading-relaxed mb-4">
            DigiSurf builds AI systems that answer your phones, reply to leads, post your content,
            and run your admin — so you can focus on growth.
          </p>
          <p className="text-sm font-medium text-[#00D4FF] mb-10 flex items-center justify-center gap-2 flex-wrap">
            {/* Australian flag — simplified representational version */}
            <svg width="22" height="14" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{borderRadius:'2px',flexShrink:0}}>
              <rect width="22" height="14" fill="#00008B"/>
              {/* White cross (simplified Union Jack) */}
              <rect x="0" y="6" width="11" height="2" fill="white"/>
              <rect x="4.5" y="0" width="2" height="7" fill="white"/>
              {/* Red cross overlay */}
              <rect x="0" y="6.5" width="11" height="1" fill="#CC0000"/>
              <rect x="5" y="0" width="1" height="7" fill="#CC0000"/>
              {/* Diagonal white */}
              <line x1="0" y1="0" x2="11" y2="7" stroke="white" strokeWidth="2"/>
              <line x1="11" y1="0" x2="0" y2="7" stroke="white" strokeWidth="2"/>
              {/* Diagonal red */}
              <line x1="0" y1="0" x2="11" y2="7" stroke="#CC0000" strokeWidth="1"/>
              <line x1="11" y1="0" x2="0" y2="7" stroke="#CC0000" strokeWidth="1"/>
              {/* Southern Cross — 5 simple dots */}
              <circle cx="16" cy="4" r="1" fill="white"/>
              <circle cx="19" cy="6" r="1" fill="white"/>
              <circle cx="17" cy="9" r="1" fill="white"/>
              <circle cx="14" cy="8" r="1" fill="white"/>
              <circle cx="20" cy="3" r="0.7" fill="white"/>
            </svg>
            <span>Australian registered business · Remote-first delivery · Built for Australian businesses</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-primary inline-flex items-center gap-2 text-sm sm:text-base px-6 py-3.5 sm:px-8 sm:py-4"
            >
              Book Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+61498541273"
              className="btn-ghost inline-flex items-center gap-2 text-sm sm:text-base px-6 py-3.5 sm:px-8 sm:py-4"
            >
              <Phone className="w-4 h-4" />
              +61 498 541 273
            </a>
          </div>

          {/* Service pill tags */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {['AI Receptionist', 'AI Voice Agents', 'AI Chatbots', 'Social Media AI', 'Video Automation', 'Google Reviews AI', 'Document AI', 'CRM Automation'].map((tag) => (
              <span key={tag} className="glass text-xs font-medium text-[#7A8FA6] px-3 py-1.5 rounded-full border border-white/[0.06]">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#050B18] to-transparent pointer-events-none" />
      </section>

      <SocialProof />
      <Services />
      <Industries />
      <HowItWorks />
      <Portfolio />
      <ROICalculator />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  )
}
