import { ArrowRight, Phone } from 'lucide-react'

export function FinalCTA() {
  return (
    <section id="contact" className="py-24 bg-[#080F20]">
      <div className="mx-auto max-w-4xl px-6 text-center">

        {/* Glow orb */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 h-64 w-64 rounded-full blur-3xl opacity-20"
          style={{ background: 'radial-gradient(circle, #00D4FF, transparent)' }}
        />

        <div className="relative">
          <span className="inline-block rounded-full border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.1)] px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#00D4FF] mb-6">
            Get Started Today
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Stop Doing{' '}
            <span className="text-gradient">the Work AI Can Do?</span>
          </h2>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-[#7A8FA6] leading-relaxed">
            Book a free 15-minute strategy call with our Sydney team. We'll identify
            exactly where AI can save you the most time — and tell you honestly if it's the right fit.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="mailto:hello@digisurfaustralia.com.au"
              className="inline-flex items-center gap-2 bg-ds-accent text-[#050B18] font-semibold px-8 py-4 rounded-lg hover:opacity-90 hover:-translate-y-px transition-all duration-200 text-base"
            >
              Book a Free Strategy Call <ArrowRight size={18} />
            </a>
            <a
              href="tel:+61400000000"
              className="inline-flex items-center gap-2 border border-white/20 text-[#F0F6FF] font-medium px-8 py-4 rounded-lg hover:border-[#00D4FF] hover:bg-[rgba(0,212,255,0.05)] transition-all duration-200 text-base"
            >
              <Phone size={16} /> Call Us Directly
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-[#7A8FA6]">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
              Free 15-min call, no commitment
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
              Sydney-based team
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
              Results within 30 days
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
              No lock-in contracts
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
