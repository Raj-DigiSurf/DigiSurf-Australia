import { Check } from 'lucide-react'

interface Plan {
  name: string
  price: string
  setup: string
  description: string
  features: string[]
  cta: string
  popular?: boolean
}

const plans: Plan[] = [
  {
    name: 'Starter',
    price: '$1,500',
    setup: '+ $1,000 setup',
    description: 'Perfect for small businesses wanting a single high-impact automation.',
    features: [
      '1 AI chatbot (website or WhatsApp)',
      'Up to 50 interactions/day',
      'FAQ training (up to 30 questions)',
      'Appointment booking integration',
      'Monthly performance report',
      '2 hrs/month support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Growth',
    price: '$2,500',
    setup: '+ $2,000 setup',
    description: 'For businesses ready to automate across multiple workflows.',
    features: [
      'AI chatbot (website + WhatsApp)',
      '1 content automation pipeline',
      '1 business workflow automation',
      'Unlimited interactions',
      'CRM integration',
      'Weekly performance report',
      '5 hrs/month support + strategy call',
    ],
    cta: 'Most Popular — Get Started',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 'From $4,500',
    setup: 'Setup quoted per project',
    description: 'Fully custom AI systems for larger businesses and agencies.',
    features: [
      'Multiple AI systems & automations',
      'Custom software integrations',
      'Dedicated account manager',
      'Priority support',
      'Monthly strategy review',
      'Staff training included',
    ],
    cta: 'Book a Discovery Call',
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#050B18]">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.1)] px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#00D4FF] mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Transparent Pricing,{' '}
            <span className="text-gradient">Real Results</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-[#7A8FA6] leading-relaxed">
            No hidden fees, no lock-in contracts. Start with what you need and scale as you grow.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-10 text-center text-sm text-[#7A8FA6]">
          All prices in AUD. Monthly billing. Cancel anytime with 30 days notice.{' '}
          <a href="#contact" className="text-[#00D4FF] hover:underline">
            Need something custom? Let's talk.
          </a>
        </p>
      </div>
    </section>
  )
}

function PricingCard({ name, price, setup, description, features, cta, popular }: Plan) {
  return (
    <div className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 ${
      popular
        ? 'border-[#00D4FF] bg-[#0D1526] shadow-[0_0_40px_rgba(0,212,255,0.12)]'
        : 'border-white/[0.08] bg-[#0D1526] hover:border-white/[0.15]'
    }`}>

      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="inline-block rounded-full bg-[#00D4FF] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#050B18]">
            Most Popular
          </span>
        </div>
      )}

      {/* Plan name & price */}
      <div className="mb-6">
        <h3 className="mb-1 text-sm font-semibold uppercase tracking-widest text-[#7A8FA6]">{name}</h3>
        <div className="flex items-end gap-2">
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="mb-1 text-sm text-[#7A8FA6]">/month</span>
        </div>
        <span className="text-xs text-[#7A8FA6]">{setup}</span>
        <p className="mt-3 text-sm text-[#7A8FA6] leading-relaxed">{description}</p>
      </div>

      {/* Divider */}
      <div className="mb-6 h-px bg-white/[0.07]" />

      {/* Features */}
      <ul className="mb-8 flex-1 flex flex-col gap-3">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-[#F0F6FF]">
            <Check size={15} className="mt-0.5 shrink-0 text-[#00D4FF]" />
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className={`inline-flex items-center justify-center rounded-lg px-6 py-3.5 text-sm font-semibold transition-all duration-200 ${
          popular
            ? 'bg-ds-accent text-[#050B18] hover:opacity-90 hover:-translate-y-px'
            : 'border border-white/[0.15] text-white hover:border-[#00D4FF] hover:bg-[rgba(0,212,255,0.05)]'
        }`}
      >
        {cta}
      </a>
    </div>
  )
}
