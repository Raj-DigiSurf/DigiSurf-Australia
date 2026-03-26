'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Check, X } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    betaPrice: '$297',
    regularPrice: '$397',
    setup: 'No setup fee during beta',
    regularSetup: '$297 one-time setup (regular)',
    description: 'One high-impact AI automation to get started. Perfect for small businesses ready to save time.',
    popular: false,
    features: [
      { text: '1 AI automation (chatbot, receptionist, or voice agent)', included: true },
      { text: 'Up to 1,000 interactions/month', included: true },
      { text: 'Appointment booking integration', included: true },
      { text: 'Monthly performance report', included: true },
      { text: '2 hrs/month support', included: true },
      { text: 'CRM integration', included: false },
      { text: 'Multiple automations', included: false },
    ],
    cta: 'Claim Founding Rate',
    accentColor: '#00D4FF',
    glowColor: 'rgba(0,212,255,0.18)',
    ringColor: 'rgba(0,212,255,0.6)',
  },
  {
    name: 'Growth',
    betaPrice: '$597',
    regularPrice: '$797',
    setup: 'No setup fee during beta',
    regularSetup: '$497 one-time setup (regular)',
    description: 'Multiple automations working together. The most popular choice for growing Australian businesses.',
    popular: true,
    features: [
      { text: 'Up to 3 AI automations (any combination)', included: true },
      { text: 'Unlimited interactions', included: true },
      { text: 'CRM + calendar integration', included: true },
      { text: 'AI social media posting', included: true },
      { text: 'Weekly performance report', included: true },
      { text: '5 hrs/month support + strategy call', included: true },
      { text: 'Priority response time', included: true },
    ],
    cta: 'Most Popular — Claim Rate',
    accentColor: '#00D4FF',
    glowColor: 'rgba(0,212,255,0.22)',
    ringColor: 'rgba(0,212,255,0.8)',
  },
  {
    name: 'Scale',
    betaPrice: '$997',
    regularPrice: '$1,297',
    setup: 'No setup fee during beta',
    regularSetup: '$797 one-time setup (regular)',
    description: 'Fully custom AI infrastructure for multi-service businesses and complex workflows.',
    popular: false,
    features: [
      { text: 'Unlimited AI automations', included: true },
      { text: 'Custom software integrations', included: true },
      { text: 'Dedicated account manager (Raj)', included: true },
      { text: 'Priority support', included: true },
      { text: 'Monthly strategy review', included: true },
      { text: 'Staff training included', included: true },
      { text: 'White-label option available', included: true },
    ],
    cta: 'Book a Discovery Call',
    accentColor: '#7B5FFF',
    glowColor: 'rgba(123,95,255,0.18)',
    ringColor: 'rgba(123,95,255,0.6)',
  },
]

const comparison = [
  { feature: 'Setup required', diy: 'You do it all', digisurf: 'We handle everything' },
  { feature: 'Goes live', diy: 'Weeks/months', digisurf: '1–2 weeks' },
  { feature: 'Support when it breaks', diy: 'YouTube tutorials', digisurf: 'Raj fixes it remotely' },
  { feature: 'Customisation', diy: 'Templates only', digisurf: 'Built for your business' },
  { feature: 'AI quality', diy: 'Generic responses', digisurf: 'Trained on your business' },
  { feature: 'Your time cost', diy: '10–20 hrs/month', digisurf: '0 hrs — we manage it' },
]

export function Pricing() {
  const [selected, setSelected] = useState<string>('Growth')
  const [showComparison, setShowComparison] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => { setMounted(true) }, [])
  const isLight = mounted && theme === 'light'

  return (
    <section id="pricing" className="py-24 bg-[#050B18] relative overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="badge badge-cyan mb-6">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Transparent Pricing.{' '}
            <span className="text-gradient">No Surprises.</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg text-[#7A8FA6]">
            No hidden fees. No lock-in contracts. Start with what you need and scale as you grow.
          </p>
        </div>

        {/* Cost Context Banner */}
        <div className="glass-card rounded-2xl p-6 mb-8 border-l-2 border-[#00D4FF] max-w-3xl mx-auto">
          <p className={`text-sm leading-relaxed text-center ${isLight ? 'text-[#1a2e50]' : 'text-[#F0F6FF]'}`}>
            <span className={`font-bold ${isLight ? 'text-[#0a1f6e]' : 'text-white'}`}>Compare the cost:</span> A part-time admin assistant costs{' '}
            <span className="text-gradient-cyan font-bold">$35,000–$52,000/year.</span> Our Growth plan costs just{' '}
            <span className="text-gradient-cyan font-bold">$7,164/year</span> during beta — works 24/7, never calls in sick, and scales with you.
          </p>
        </div>

        {/* Founding Offer Banner */}
        <div className="flex items-center justify-center gap-2 mb-10 rounded-2xl border border-[rgba(0,212,255,0.2)] bg-[rgba(0,212,255,0.05)] px-6 py-4 max-w-2xl mx-auto">
          <span className="text-lg">🚀</span>
          <div>
            <p className={`text-sm font-bold ${isLight ? 'text-[#0a1f6e]' : 'text-white'}`}>Founding Beta — Setup Fee Waived</p>
            <p className="text-xs text-[#7A8FA6]">First 3 clients only · Lock in your rate permanently · Regular pricing: $397–$1,297/mo + setup</p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {plans.map((plan) => {
            const isSelected = selected === plan.name
            const popularDimmed = plan.popular && !isSelected && selected !== 'Growth'

            return (
              <div
                key={plan.name}
                onClick={() => setSelected(plan.name)}
                role="button"
                tabIndex={0}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setSelected(plan.name) }}
                className={`relative flex flex-col rounded-2xl p-8 cursor-pointer transition-all duration-300 select-none glass-card ${
                  isSelected ? 'scale-[1.03] -translate-y-1' : 'hover:scale-[1.01]'
                }`}
                style={isSelected ? {
                  boxShadow: `0 0 0 2px ${plan.ringColor}, 0 20px 60px ${plan.glowColor}`,
                  borderColor: plan.accentColor,
                  borderWidth: 2,
                  borderStyle: 'solid',
                } : plan.popular && !popularDimmed ? {
                  background: 'linear-gradient(to bottom, #0D1A3A, #0D1526)',
                  boxShadow: '0 0 50px rgba(0,212,255,0.15)',
                  borderColor: '#00D4FF',
                  borderWidth: 2,
                  borderStyle: 'solid',
                } : undefined}
              >
                {isSelected && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <span
                      className="text-[#050B18] text-xs font-bold uppercase tracking-wider px-5 py-1.5 rounded-full whitespace-nowrap"
                      style={{ background: `linear-gradient(135deg, ${plan.accentColor}, #3B7BFF)` }}
                    >
                      {plan.popular ? 'Most Popular — Selected' : 'Selected'}
                    </span>
                  </div>
                )}

                {plan.popular && !isSelected && !popularDimmed && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#00D4FF] to-[#3B7BFF] text-[#050B18] text-xs font-bold uppercase tracking-wider px-5 py-1.5 rounded-full whitespace-nowrap">
                      Most Popular
                    </span>
                  </div>
                )}

                {isSelected && (
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{ background: `radial-gradient(ellipse at top, ${plan.glowColor}, transparent 70%)` }}
                  />
                )}

                <div className="relative mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <p className={`text-xs font-bold uppercase tracking-widest ${isLight ? 'text-[#3d5470]' : 'text-[#4A6080]'}`}>{plan.name}</p>
                    {popularDimmed && (
                      <span className="text-[9px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border border-[rgba(0,212,255,0.2)] text-[#4A6080]">
                        Recommended
                      </span>
                    )}
                  </div>

                  {/* Beta price */}
                  <div className="flex items-baseline gap-2 mb-0.5">
                    <span className={`text-4xl font-bold ${isLight ? 'text-[#0a1f6e]' : 'text-white'}`}>{plan.betaPrice}</span>
                    <span className="text-sm text-[#7A8FA6]">/month</span>
                  </div>
                  {/* Regular price crossed out */}
                  <p className="text-xs text-[#4A6080] mb-1">
                    <span className="line-through">Regular: {plan.regularPrice}/mo</span>
                    <span className="ml-2 text-[#00D4FF] font-semibold">Beta rate</span>
                  </p>
                  <p className="text-xs text-[#00D4FF] font-medium mb-4">{plan.setup}</p>
                  <p className={`text-sm leading-relaxed ${isLight ? 'text-[#3d5470]' : 'text-[#7A8FA6]'}`}>{plan.description}</p>
                </div>

                <div className="h-px bg-white/[0.06] mb-6 relative" />

                <ul className="flex flex-col gap-3 flex-1 mb-8 relative">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-3">
                      {f.included
                        ? <Check className="w-4 h-4 shrink-0 mt-0.5" style={{ color: plan.accentColor }} />
                        : <X className="w-4 h-4 shrink-0 mt-0.5 text-[#4A6080]" />
                      }
                      <span className={`text-sm ${f.included ? (isLight ? 'text-[#1a2e50]' : 'text-[#F0F6FF]') : 'text-[#4A6080]'}`}>{f.text}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={e => { e.stopPropagation(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className={`relative w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                    isSelected || plan.popular ? 'btn-primary' : 'btn-ghost'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            )
          })}
        </div>

        <p className={`text-center text-sm mb-10 ${isLight ? 'text-[#3d5470]' : 'text-[#4A6080]'}`}>
          All prices in AUD · Monthly billing · Cancel anytime · No lock-in contracts
        </p>

        {/* DIY vs DigiSurf Comparison Toggle */}
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl border transition-all duration-200 text-sm font-semibold ${
              isLight
                ? 'border-[rgba(13,107,202,0.2)] bg-white text-[#0a1f6e] hover:border-[#0d6bca]/40'
                : 'border-white/[0.08] bg-white/[0.03] text-white hover:border-white/20'
            }`}
          >
            <span>Why not just use a $99/month DIY tool?</span>
            <span className="text-[#00D4FF] text-lg">{showComparison ? '−' : '+'}</span>
          </button>

          {showComparison && (
            <div className="mt-4 glass-card rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 text-xs font-bold uppercase tracking-wider px-6 py-3 border-b border-white/[0.06]">
                <span className={isLight ? 'text-[#3d5470]' : 'text-[#4A6080]'}>What you need</span>
                <span className="text-[#4A6080] text-center">DIY Tools ($99/mo)</span>
                <span className="text-[#00D4FF] text-center">DigiSurf</span>
              </div>
              {comparison.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 px-6 py-4 text-sm ${
                    i < comparison.length - 1 ? 'border-b border-white/[0.04]' : ''
                  }`}
                >
                  <span className={isLight ? 'text-[#1a2e50] font-medium' : 'text-[#F0F6FF] font-medium'}>{row.feature}</span>
                  <span className="text-[#4A6080] text-center">{row.diy}</span>
                  <span className="text-[#00D4FF] text-center font-medium">{row.digisurf}</span>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  )
}
