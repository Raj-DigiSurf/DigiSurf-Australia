'use client'

import { Check, X } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '$1,500',
    setup: '$1,000 setup fee',
    description: 'One high-impact automation to get you started. Perfect for small businesses.',
    popular: false,
    features: [
      { text: '1 AI automation (chatbot, receptionist, or voice agent)', included: true },
      { text: 'Up to 500 interactions/month', included: true },
      { text: 'Appointment booking integration', included: true },
      { text: 'Monthly performance report', included: true },
      { text: '2 hrs/month support', included: true },
      { text: 'CRM integration', included: false },
      { text: 'Multiple automations', included: false },
    ],
    cta: 'Get Started',
    color: '#00D4FF',
  },
  {
    name: 'Growth',
    price: '$2,500',
    setup: '$2,000 setup fee',
    description: 'Multiple automations working together. The most popular choice for growing businesses.',
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
    cta: 'Most Popular — Get Started',
    color: '#00D4FF',
  },
  {
    name: 'Enterprise',
    price: 'From $4,500',
    setup: 'Setup quoted per project',
    description: 'Fully custom AI infrastructure for larger operations and multi-location businesses.',
    popular: false,
    features: [
      { text: 'Unlimited AI automations', included: true },
      { text: 'Custom software integrations', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Priority 24/7 support', included: true },
      { text: 'Monthly strategy review', included: true },
      { text: 'Staff training included', included: true },
      { text: 'White-label option available', included: true },
    ],
    cta: 'Book a Discovery Call',
    color: '#7B5FFF',
  },
]

export function Pricing() {
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
        <div className="glass-card rounded-2xl p-6 mb-10 border-l-2 border-[#00D4FF] max-w-3xl mx-auto">
          <p className="text-sm text-[#F0F6FF] leading-relaxed text-center">
            <span className="font-bold text-white">Compare the cost:</span> A part-time admin assistant in Sydney costs <span className="text-gradient-cyan font-bold">$35,000–$52,000/year.</span> Our Starter plan costs <span className="text-gradient-cyan font-bold">$19,000/year all-in</span> — and works 24/7, never calls in sick, and scales instantly.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#0D1A3A] to-[#0D1526] border-2 border-[#00D4FF] shadow-[0_0_50px_rgba(0,212,255,0.15)]'
                  : 'glass-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#00D4FF] to-[#3B7BFF] text-[#050B18] text-xs font-bold uppercase tracking-wider px-5 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className="text-xs font-bold uppercase tracking-widest text-[#4A6080] mb-2">{plan.name}</p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {!plan.price.startsWith('From') && <span className="text-sm text-[#7A8FA6]">/month</span>}
                </div>
                <p className="text-xs text-[#4A6080] mb-4">{plan.setup}</p>
                <p className="text-sm text-[#7A8FA6] leading-relaxed">{plan.description}</p>
              </div>

              <div className="h-px bg-white/[0.06] mb-6" />

              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f.text} className="flex items-start gap-3">
                    {f.included
                      ? <Check className="w-4 h-4 shrink-0 mt-0.5 text-[#00D4FF]" />
                      : <X className="w-4 h-4 shrink-0 mt-0.5 text-[#4A6080]" />
                    }
                    <span className={`text-sm ${f.included ? 'text-[#F0F6FF]' : 'text-[#4A6080]'}`}>{f.text}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-3.5 rounded-xl text-sm font-bold transition-all duration-200 ${
                  plan.popular
                    ? 'btn-primary'
                    : 'btn-ghost'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-[#4A6080]">
          All prices in AUD · Monthly billing · Cancel anytime with 30 days notice ·{' '}
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-[#00D4FF] hover:underline"
          >
            Need something custom? Let&apos;s talk.
          </button>
        </p>
      </div>
    </section>
  )
}
