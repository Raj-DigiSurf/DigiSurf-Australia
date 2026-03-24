'use client'

import { Bot, Phone, PhoneCall, Mic2, Video, Share2, Star, FileText, File, Database, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Phone,
    title: 'AI Receptionist',
    description: 'Never miss a call. Our AI receptionist answers, qualifies, and books appointments 24/7 — sounding just like a human.',
    tag: 'Most Popular',
    color: 'cyan',
    size: 'large',
  },
  {
    icon: PhoneCall,
    title: 'AI Voice Agent — Inbound',
    description: 'Intelligent inbound call handling. Routes calls, answers FAQs, captures lead info, and escalates when needed.',
    color: 'blue',
    size: 'normal',
  },
  {
    icon: Mic2,
    title: 'AI Voice Agent — Outbound',
    description: 'Automated outreach, follow-up calls, and appointment reminders at scale — without hiring a call centre.',
    color: 'purple',
    size: 'normal',
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Custom chatbots for your website, WhatsApp, and Instagram DMs. Capture leads, answer questions, and book appointments 24/7.',
    tag: 'High ROI',
    color: 'cyan',
    size: 'large',
  },
  {
    icon: Video,
    title: 'AI Video Workflow',
    description: 'Turn long-form videos into short clips, auto-captioned and distributed across TikTok, Reels, and YouTube Shorts.',
    color: 'blue',
    size: 'normal',
  },
  {
    icon: Share2,
    title: 'AI Social Media Manager',
    description: 'AI writes, schedules, and posts your content across all platforms. Engage your audience on autopilot.',
    color: 'purple',
    size: 'normal',
  },
  {
    icon: Star,
    title: 'AI Google Review Automation',
    description: 'Automatically request, collect, and respond to Google reviews. Build your reputation without lifting a finger.',
    color: 'cyan',
    size: 'normal',
  },
  {
    icon: FileText,
    title: 'AI Content Automation',
    description: 'Blog posts, email sequences, ad copy, and newsletters — all written by AI trained on your brand voice.',
    color: 'blue',
    size: 'normal',
  },
  {
    icon: File,
    title: 'AI Document Automation',
    description: 'Contracts, proposals, invoices, and intake forms — automatically generated and sent with zero manual effort.',
    color: 'purple',
    size: 'normal',
  },
  {
    icon: Database,
    title: 'AI CRM & Lead Automation',
    description: 'Automatically qualify leads, trigger follow-up sequences, and update your CRM — so no lead ever falls through the cracks.',
    tag: 'New',
    color: 'cyan',
    size: 'normal',
  },
]

const colorMap = {
  cyan: {
    icon: 'bg-[rgba(0,212,255,0.1)] text-[#00D4FF]',
    border: 'hover:border-[rgba(0,212,255,0.3)]',
    tag: 'bg-[rgba(0,212,255,0.1)] text-[#00D4FF] border-[rgba(0,212,255,0.2)]',
    glow: 'rgba(0,212,255,0.06)',
  },
  blue: {
    icon: 'bg-[rgba(59,123,255,0.1)] text-[#3B7BFF]',
    border: 'hover:border-[rgba(59,123,255,0.3)]',
    tag: 'bg-[rgba(59,123,255,0.1)] text-[#3B7BFF] border-[rgba(59,123,255,0.2)]',
    glow: 'rgba(59,123,255,0.06)',
  },
  purple: {
    icon: 'bg-[rgba(123,95,255,0.1)] text-[#7B5FFF]',
    border: 'hover:border-[rgba(123,95,255,0.3)]',
    tag: 'bg-[rgba(123,95,255,0.1)] text-[#7B5FFF] border-[rgba(123,95,255,0.2)]',
    glow: 'rgba(123,95,255,0.06)',
  },
}

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#050B18] relative">
      <div className="absolute inset-0 bg-dots opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge badge-cyan mb-6">What We Build</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            Every AI Tool Your Business<br />
            <span className="text-gradient">Could Ever Need</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#7A8FA6] leading-relaxed">
            From answering phones to running your social media — we automate the repetitive so you can focus on growth.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const colors = colorMap[service.color as keyof typeof colorMap]
            return (
              <div
                key={service.title}
                className={`glass-card rounded-2xl p-6 relative overflow-hidden group ${
                  service.size === 'large' ? 'lg:col-span-1' : ''
                } ${colors.border}`}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at top left, ${colors.glow}, transparent 70%)` }}
                />

                <div className="relative">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${colors.icon}`}>
                      <service.icon className="w-5 h-5" />
                    </div>
                    {service.tag && (
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${colors.tag}`}>
                        {service.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-semibold text-white mb-2.5 leading-snug">{service.title}</h3>
                  <p className="text-sm text-[#7A8FA6] leading-relaxed">{service.description}</p>

                  <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-[#4A6080] group-hover:text-[#00D4FF] transition-colors duration-300">
                    Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-[#7A8FA6] mb-5">Don&apos;t see what you need? We build fully custom AI solutions too.</p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-ghost inline-flex items-center gap-2"
          >
            Talk to us about your business <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
