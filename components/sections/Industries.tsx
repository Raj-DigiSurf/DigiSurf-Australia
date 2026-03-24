'use client'

import { useState } from 'react'
import { Stethoscope, Dumbbell, Home, ShoppingBag, Briefcase, CheckCircle } from 'lucide-react'

const industries = [
  {
    id: 'healthcare',
    icon: Stethoscope,
    label: 'Healthcare',
    headline: 'Give Your Medical Team Their Time Back',
    description: 'Clinics and health practices spend 40% of their time on admin. We eliminate it with AI that handles patient intake, appointment reminders, after-hours enquiries, and referral letters automatically.',
    outcomes: [
      '24/7 AI receptionist answers patient calls',
      'Automated appointment reminders (SMS + email)',
      'AI-generated referral letters and medical summaries',
      'Patient intake forms auto-filled and digitised',
      'HIPAA-aware — all data on Australian servers',
    ],
    result: '"Our admin time dropped by 18 hours per week." — Bulk billing clinic, Sydney',
    color: '#00D4FF',
  },
  {
    id: 'fitness',
    icon: Dumbbell,
    label: 'Fitness & Coaching',
    headline: 'Fill Classes and Keep Members Coming Back',
    description: 'Gyms, PTs, and online coaches lose revenue to no-shows, churn, and slow lead follow-up. Our AI re-engages members, follows up leads instantly, and posts your content daily — hands free.',
    outcomes: [
      'Instant lead follow-up via AI chatbot',
      'Automated class booking and reminders',
      'Member re-engagement campaigns on autopilot',
      'Daily social media content created and posted',
      'AI voice agent for inbound member enquiries',
    ],
    result: '"We increased class fill rate from 62% to 91% in 6 weeks." — Fitness studio, Melbourne',
    color: '#3B7BFF',
  },
  {
    id: 'realestate',
    icon: Home,
    label: 'Real Estate',
    headline: 'Respond to Every Lead. Win More Listings.',
    description: 'In real estate, speed wins. Our AI responds to enquiries within seconds, qualifies buyers and tenants, and auto-generates listing descriptions — so agents focus on closing, not admin.',
    outcomes: [
      'AI chatbot responds to property enquiries in <30 seconds',
      'Automated buyer/tenant qualification sequences',
      'AI-generated listing descriptions for every property',
      'CRM auto-updated with every lead interaction',
      'Outbound AI voice agent for follow-up calls',
    ],
    result: '"Our lead response time went from 4 hours to 28 seconds." — Real estate agency, Brisbane',
    color: '#7B5FFF',
  },
  {
    id: 'retail',
    icon: ShoppingBag,
    label: 'Retail & eCommerce',
    headline: 'More Sales. Less Support Tickets.',
    description: 'Handle hundreds of customer enquiries simultaneously, recover abandoned carts, request reviews, and automate your product content — without growing your team.',
    outcomes: [
      'AI chatbot handles product questions and returns',
      'Abandoned cart recovery sequences via email + SMS',
      'Automated Google and product review requests',
      'AI-written product descriptions at scale',
      'Social media and ad content on autopilot',
    ],
    result: '"Our support ticket volume dropped 60% in the first month." — eCommerce brand, Sydney',
    color: '#00D4FF',
  },
  {
    id: 'professional',
    icon: Briefcase,
    label: 'Professional Services',
    headline: 'Automate the Boring. Focus on Clients.',
    description: 'Accountants, lawyers, consultants, and agencies waste hours on proposals, client onboarding, and follow-ups. Let AI handle the paperwork while you deliver the expertise.',
    outcomes: [
      'Auto-generated proposals and engagement letters',
      'Client onboarding forms and document collection',
      'AI follow-up sequences for dormant clients',
      'Automated invoice reminders and payment follow-ups',
      'AI chatbot for initial client enquiries',
    ],
    result: '"We saved 3 hours per client onboarding — across 40 clients a month." — Accounting firm, Perth',
    color: '#3B7BFF',
  },
]

export function Industries() {
  const [active, setActive] = useState('healthcare')
  const current = industries.find(i => i.id === active)!

  return (
    <section id="industries" className="py-24 bg-[#0D1526] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="badge badge-blue mb-6">Industries We Serve</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Built for <span className="text-gradient">Your Industry</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg text-[#7A8FA6]">
            We don&apos;t do generic. Every system we build is tailored to how your industry actually operates.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {industries.map((ind) => (
            <button
              key={ind.id}
              onClick={() => setActive(ind.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 border ${
                active === ind.id
                  ? 'bg-gradient-to-r from-[#00D4FF]/10 to-[#3B7BFF]/10 border-[rgba(0,212,255,0.3)] text-white'
                  : 'border-white/[0.07] text-[#7A8FA6] hover:text-white hover:border-white/[0.15] bg-transparent'
              }`}
            >
              <ind.icon className="w-4 h-4" />
              {ind.label}
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left */}
          <div>
            <div
              className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6"
              style={{ background: `${current.color}18`, border: `1px solid ${current.color}30` }}
            >
              <current.icon className="w-7 h-7" style={{ color: current.color }} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4 leading-tight">{current.headline}</h3>
            <p className="text-[#7A8FA6] leading-relaxed mb-8 text-base">{current.description}</p>

            {/* Result Quote */}
            <div className="glass-card rounded-xl p-5 border-l-2" style={{ borderLeftColor: current.color }}>
              <p className="text-sm text-[#F0F6FF] italic leading-relaxed">{current.result}</p>
            </div>
          </div>

          {/* Right — Outcomes */}
          <div className="glass-card rounded-2xl p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-[#4A6080] mb-6">What You Get</p>
            <ul className="flex flex-col gap-4">
              {current.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-3">
                  <CheckCircle
                    className="w-5 h-5 shrink-0 mt-0.5"
                    style={{ color: current.color }}
                  />
                  <span className="text-sm text-[#F0F6FF] leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary w-full text-center text-sm"
              >
                Get a Free {current.label} AI Audit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
