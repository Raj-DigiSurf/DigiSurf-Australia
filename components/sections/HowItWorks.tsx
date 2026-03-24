import { MessageSquare, Wrench, Zap } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Free Strategy Call',
    description: "We spend 15–30 minutes understanding your business, your biggest time-wasters, and where AI can deliver the most impact. No pitch, no pressure — just honest advice.",
    detail: 'Typically 15–30 minutes',
  },
  {
    number: '02',
    icon: Wrench,
    title: 'We Build Your System',
    description: "Our team designs and builds your custom AI automation. We handle everything — integrations, testing, and making sure it fits seamlessly into how your business already works.",
    detail: 'Usually ready in 1–2 weeks',
  },
  {
    number: '03',
    icon: Zap,
    title: 'You Sit Back & Scale',
    description: "Your automation goes live. You start saving hours every week while we monitor performance and keep improving the system. Most clients see ROI within the first 30 days.",
    detail: 'Ongoing support included',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-[#080F20]">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.1)] px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#00D4FF] mb-4">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Up & Running in{' '}
            <span className="text-gradient">Under 2 Weeks</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-[#7A8FA6] leading-relaxed">
            No tech knowledge needed. No lock-in contracts. We handle everything from strategy to setup.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 relative">
          {/* Connector line — desktop only */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-transparent via-[rgba(0,212,255,0.3)] to-transparent" />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {/* Step circle */}
                <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.08)]">
                  <Icon size={28} className="text-[#00D4FF]" />
                  <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#00D4FF] text-[10px] font-bold text-[#050B18]">
                    {i + 1}
                  </span>
                </div>

                <h3 className="mb-3 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mb-4 text-sm text-[#7A8FA6] leading-relaxed max-w-xs">{step.description}</p>
                <span className="inline-block rounded-full border border-white/[0.08] px-3 py-1 text-xs text-[#7A8FA6]">
                  {step.detail}
                </span>
              </div>
            )
          })}
        </div>

        {/* Trust signals */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 border-t border-white/[0.06] pt-12">
          {[
            '✓ No lock-in contracts',
            '✓ Setup in 1–2 weeks',
            '✓ Sydney-based team',
            '✓ 30-day ROI guarantee',
          ].map((item) => (
            <span key={item} className="text-sm font-medium text-[#7A8FA6]">{item}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
