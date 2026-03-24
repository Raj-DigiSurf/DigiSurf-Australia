import { Services } from '@/components/sections/Services'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { Pricing } from '@/components/sections/Pricing'
import { FinalCTA } from '@/components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ds-hero min-h-screen flex items-center justify-center pt-16">
        <div className="text-center px-6 max-w-4xl mx-auto">
          <span className="inline-block rounded-full border border-[rgba(0,212,255,0.3)] bg-[rgba(0,212,255,0.1)] px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-[#00D4FF] mb-8">
            🇦🇺 Based in Sydney, Australia
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Automate Your Business<br />
            with <span className="text-gradient">AI That Works</span>
          </h1>
          <p className="text-xl text-[#F0F6FF] max-w-2xl mx-auto mb-10 leading-relaxed opacity-90">
            DigiSurf builds custom AI automation for Australian businesses —
            saving time, cutting costs, and scaling faster.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact" className="bg-ds-accent text-[#050B18] font-semibold px-8 py-4 rounded-lg hover:opacity-90 hover:-translate-y-px transition-all duration-200">
              Get a Free Strategy Call
            </a>
            <a href="#services" className="border border-white/20 text-[#F0F6FF] font-medium px-8 py-4 rounded-lg hover:border-[#00D4FF] hover:bg-[rgba(0,212,255,0.05)] transition-all duration-200">
              See Our Services →
            </a>
          </div>
        </div>
      </section>

      <Services />
      <HowItWorks />
      <Pricing />
      <FinalCTA />
    </>
  )
}
