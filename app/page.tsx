'use client'

import { SocialProof } from '@/components/sections/SocialProof'
import { Services } from '@/components/sections/Services'
import { Industries } from '@/components/sections/Industries'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { ROICalculator } from '@/components/sections/ROICalculator'
import { CaseStudies } from '@/components/sections/CaseStudies'
import { Testimonials } from '@/components/sections/Testimonials'
import { Pricing } from '@/components/sections/Pricing'
import { FAQ } from '@/components/sections/FAQ'
import { FinalCTA } from '@/components/sections/FinalCTA'
import { ArrowRight, Star, Phone } from 'lucide-react'

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

          {/* Google rating badge */}
          <div className="inline-flex items-center gap-2.5 glass rounded-full px-4 py-2 mb-8">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[#FFB800] text-[#FFB800]" />
              ))}
            </div>
            <span className="text-xs font-semibold text-white">4.9 on Google</span>
            <span className="text-xs text-[#7A8FA6]">· 47 reviews</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-6 tracking-tight">
            Your Business.<br />
            <span className="text-gradient">On Autopilot.</span>
          </h1>

          {/* Sub headline */}
          <p className="max-w-2xl mx-auto text-xl text-[#7A8FA6] leading-relaxed mb-4">
            DigiSurf builds AI systems that answer your phones, reply to leads, post your content,
            and run your admin — so you can focus on growth.
          </p>
          <p className="text-sm font-medium text-[#00D4FF] mb-10">
            🇦🇺 Sydney-based · Australian servers · 53+ businesses automated
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-primary inline-flex items-center gap-2 text-base px-8 py-4"
            >
              Book Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+61498541273"
              className="btn-ghost inline-flex items-center gap-2 text-base px-8 py-4"
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
      <ROICalculator />
      <CaseStudies />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </>
  )
}
