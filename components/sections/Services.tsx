import { Bot, Clapperboard, FileSearch, Stethoscope, Dumbbell, Home, ArrowRight } from 'lucide-react'
import { type LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  description: string
  price: string
  highlight?: boolean
}

const services: Service[] = [
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Custom chatbots for your website, WhatsApp, or Messenger. Answer questions, book appointments, and capture leads 24/7 — without lifting a finger.',
    price: 'From $1,500/month',
    highlight: true,
  },
  {
    icon: Clapperboard,
    title: 'Content Automation',
    description: 'Turn one long video into daily short clips, auto-captioned and posted across TikTok, Instagram Reels, and YouTube Shorts automatically.',
    price: 'From $800/month',
  },
  {
    icon: FileSearch,
    title: 'Document Automation',
    description: 'AI transcription of handwritten letters, historical documents, invoices, and forms. Extract, organise, and digitise data at scale.',
    price: 'From $1,200/month',
  },
  {
    icon: Stethoscope,
    title: 'Healthcare AI',
    description: 'Automate patient intake, appointment reminders, referral letters, and after-hours enquiries. Reduce admin so your team can focus on care.',
    price: 'From $1,500/month',
    highlight: true,
  },
  {
    icon: Dumbbell,
    title: 'Fitness & Coaching AI',
    description: 'Automated lead follow-up, class booking, member re-engagement, and daily content posting for gyms, PTs, and online coaches.',
    price: 'From $800/month',
  },
  {
    icon: Home,
    title: 'Real Estate AI',
    description: 'Instant lead response chatbot, automated follow-up sequences, and AI-generated listing descriptions. Win more listings, faster.',
    price: 'From $1,200/month',
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-[#050B18]">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.1)] px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#00D4FF] mb-4">
            What We Build
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI Automation for Every{' '}
            <span className="text-gradient">Australian Business</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#7A8FA6] leading-relaxed">
            From healthcare to fitness to content creators — we build custom AI systems
            that save you 10–20 hours a week and pay for themselves within the first month.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <p className="text-[#7A8FA6] mb-4">Don't see your industry? We build custom solutions too.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#00D4FF] font-medium hover:gap-3 transition-all duration-200"
          >
            Tell us about your business <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon: Icon, title, description, price, highlight }: Service) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,212,255,0.08)] ${
      highlight
        ? 'border-[rgba(0,212,255,0.25)] bg-[#0D1526]'
        : 'border-white/[0.07] bg-[#0D1526] hover:border-[rgba(0,212,255,0.25)]'
    }`}>
      {/* Glow on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(0,212,255,0.06), transparent 70%)' }}
      />

      <div className="relative">
        {/* Icon */}
        <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-[rgba(0,212,255,0.1)] p-3">
          <Icon size={22} className="text-[#00D4FF]" />
        </div>

        {/* Title */}
        <h3 className="mb-3 text-lg font-semibold text-white">{title}</h3>

        {/* Description */}
        <p className="mb-5 text-sm text-[#7A8FA6] leading-relaxed">{description}</p>

        {/* Price */}
        <span className="text-xs font-medium text-[#00D4FF]">{price}</span>
      </div>
    </div>
  )
}
