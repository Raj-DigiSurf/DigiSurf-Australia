'use client'

import { MessageSquare, Wrench, Zap, Shield, Clock, MapPin, TrendingUp } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Free Strategy Call',
    description: 'We spend 15–30 minutes understanding your business and your biggest time-wasters. No pitch, no pressure — just honest AI advice tailored to you.',
    detail: '15–30 minutes',
    color: '#00D4FF',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'We Build Your System',
    description: 'Our team designs and builds your custom AI automation — handling all integrations, testing, and setup. You don\'t need to be technical.',
    detail: 'Ready in 1–2 weeks',
    color: '#3B7BFF',
  },
  {
    number: '03',
    icon: Zap,
    title: 'You Scale on Autopilot',
    description: 'Your automation goes live. You save 10–20 hours a week while we monitor and improve the system. Most clients hit ROI within 30 days.',
    detail: 'Ongoing support included',
    color: '#7B5FFF',
  },
]

const trustSignals = [
  { icon: Shield, label: 'No Lock-in Contracts' },
  { icon: Clock, label: 'Live in 1–2 Weeks' },
  { icon: MapPin, label: 'Australian Business' },
  { icon: TrendingUp, label: '30-Day ROI Guarantee' },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24 bg-[#050B18] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 bg-gradient-to-b from-transparent via-[rgba(0,212,255,0.3)] to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge badge-cyan mb-6">The Process</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            From Strategy Call to<br />
            <span className="text-gradient">Live in Under 2 Weeks</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg text-[#7A8FA6] leading-relaxed">
            No tech knowledge needed. No lock-in. We handle everything from strategy to setup to ongoing support.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Connector */}
          <div className="hidden md:block absolute top-12 left-[22%] right-[22%] h-px bg-gradient-to-r from-[rgba(0,212,255,0.3)] via-[rgba(59,123,255,0.3)] to-[rgba(123,95,255,0.3)]" />

          {steps.map((step, idx) => (
            <div key={step.number} className="relative">
              <div className="glass-card rounded-2xl p-7 text-center h-full" style={{ borderColor: `${step.color}18` }}>
                {/* Step circle */}
                <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
                  style={{ background: `${step.color}12`, border: `1px solid ${step.color}30` }}
                >
                  <step.icon className="w-8 h-8" style={{ color: step.color }} />
                  <span
                    className="absolute -top-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-[#050B18]"
                    style={{ background: step.color }}
                  >
                    {idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm text-[#7A8FA6] leading-relaxed mb-5">{step.description}</p>

                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: `${step.color}10`, color: step.color, border: `1px solid ${step.color}20` }}
                >
                  <Clock className="w-3 h-3" />
                  {step.detail}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Signals */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {trustSignals.map((item) => (
            <div key={item.label} className="glass rounded-xl p-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[rgba(0,212,255,0.1)] flex items-center justify-center shrink-0">
                <item.icon className="w-4 h-4 text-[#00D4FF]" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-white leading-tight">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
