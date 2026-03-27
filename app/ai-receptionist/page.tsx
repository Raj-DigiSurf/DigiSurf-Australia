import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Check, Clock, Calendar, ArrowRight, Star, Zap, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Receptionist Australia — Never Miss a Business Call Again',
  description: 'AI receptionist for Australian businesses. Answers every call 24/7, books appointments, qualifies leads — sounds like a human. From $297/mo. No setup fee during beta.',
  keywords: ['AI receptionist Australia', 'AI phone answering Australia', 'virtual receptionist AI', 'automated receptionist small business', '24/7 receptionist Australia'],
  alternates: { canonical: 'https://www.digisurfaustralia.com.au/ai-receptionist' },
  openGraph: {
    title: 'AI Receptionist Australia — Never Miss a Business Call Again',
    description: 'AI receptionist for Australian businesses. Answers every call 24/7, books appointments, qualifies leads — sounds like a human. From $297/mo.',
    url: 'https://www.digisurfaustralia.com.au/ai-receptionist',
  },
}

const features = [
  '24/7 call answering — no holidays, no sick days, no voicemail',
  'Books appointments directly into your calendar',
  'Qualifies callers before escalating to you',
  'Custom greeting trained on your business and services',
  'Call summaries sent to your inbox after every call',
  'Seamless handover to a human when needed',
  'Works with your existing phone number',
  'Integrates with HubSpot, Cliniko, ServiceM8, and more',
]

const industries = [
  { name: 'Tradies & Home Services', desc: 'Never lose a $600 booking because you were mid-job.' },
  { name: 'GP Clinics & Allied Health', desc: 'Handle patient calls without overloading your admin staff.' },
  { name: 'Real Estate Agents', desc: 'Answer every buyer and tenant enquiry in seconds, not hours.' },
  { name: 'Beauty & Wellness Salons', desc: 'Book appointments around the clock — even while you sleep.' },
  { name: 'Legal & Professional Services', desc: 'First impressions matter. Your AI never has a bad day.' },
  { name: 'Restaurants & Hospitality', desc: 'Take reservations during service without picking up the phone.' },
]

const faqs = [
  {
    q: 'Does it really sound like a human?',
    a: 'Yes. Modern AI voice technology (using ElevenLabs and similar) sounds natural and conversational. We train it on your specific business, tone, and FAQs. Most callers don\'t know they\'re talking to an AI unless told.',
  },
  {
    q: 'What happens when someone asks something complex?',
    a: 'The AI handles all standard enquiries. For complex or sensitive calls, it escalates to you or takes a message and sends you a summary immediately.',
  },
  {
    q: 'Can it use my existing phone number?',
    a: 'Yes. We can port your existing number or set up a new number that forwards from your existing line.',
  },
  {
    q: 'How long does setup take?',
    a: 'Most AI receptionists are live within 5–7 business days. We handle all the setup — you don\'t need to be technical.',
  },
  {
    q: 'What does it cost?',
    a: 'During our founding beta, the Starter plan (which includes the AI receptionist) starts at $297/month with no setup fee. Regular pricing is $397/month + $297 setup.',
  },
]

export default function AIReceptionistPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Receptionist for Australian Businesses',
            provider: {
              '@type': 'Organization',
              name: 'DigiSurf Australia',
              url: 'https://www.digisurfaustralia.com.au',
              telephone: '+61498541273',
            },
            description: 'AI-powered receptionist that answers every business call 24/7, books appointments, qualifies leads, and sends call summaries — for Australian small businesses.',
            areaServed: { '@type': 'Country', name: 'Australia' },
            url: 'https://www.digisurfaustralia.com.au/ai-receptionist',
            offers: {
              '@type': 'Offer',
              price: '297',
              priceCurrency: 'AUD',
              priceSpecification: { '@type': 'UnitPriceSpecification', price: '297', priceCurrency: 'AUD', unitText: 'MONTH' },
            },
          }),
        }}
      />

      <main className="min-h-screen bg-[#050B18]">

        {/* Hero */}
        <section className="pt-28 pb-20 bg-[#050B18] relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #00D4FF, transparent)' }} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <nav className="flex items-center justify-center gap-2 text-xs text-[#4A6080] mb-6">
              <Link href="/" className="hover:text-[#00D4FF] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#7A8FA6]">AI Receptionist</span>
            </nav>
            <span className="badge badge-cyan mb-6">AI Receptionist Australia</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Every Call Answered.<br />
              <span className="text-gradient">Every Lead Captured.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-[#7A8FA6] leading-relaxed mb-4">
              Your AI receptionist answers every inbound call 24/7 — booking appointments, qualifying leads, and sending you a summary after every call. It sounds like a human. It never calls in sick.
            </p>
            <p className="text-sm font-semibold text-[#00D4FF] mb-10">
              From $297/month · No setup fee during beta · Live in 5–7 days
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://meetings-na2.hubspot.com/henish"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4"
              >
                <Calendar className="w-4 h-4" />
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="tel:+61498541273" className="btn-ghost inline-flex items-center gap-2 px-8 py-4">
                <Phone className="w-4 h-4" />
                +61 498 541 273
              </a>
            </div>
          </div>
        </section>

        {/* Problem section */}
        <section className="py-16 bg-[#0D1526]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card rounded-2xl p-8 border-l-4 border-[#00D4FF]">
              <h2 className="text-2xl font-bold text-white mb-4">Every Missed Call is a Lost Customer</h2>
              <p className="text-[#7A8FA6] leading-relaxed mb-6">
                Australian small businesses miss an average of <strong className="text-white">7 calls per day</strong>. At a conservative $400 per job, that&apos;s $2,800 in lost revenue — every single day. The caller doesn&apos;t leave a voicemail. They call your competitor.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { value: '62%', label: 'of missed calls never call back' },
                  { value: '$400+', label: 'average job value for tradies' },
                  { value: '24/7', label: 'your AI receptionist answers' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-[rgba(0,212,255,0.05)] border border-[rgba(0,212,255,0.1)]">
                    <div className="text-3xl font-bold text-gradient mb-1">{stat.value}</div>
                    <div className="text-xs text-[#7A8FA6]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-[#050B18]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Your AI Receptionist Does
              </h2>
              <p className="text-[#7A8FA6] max-w-xl mx-auto">
                Trained on your business. Connected to your calendar. Running 24/7 without you touching anything.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f} className="glass-card rounded-xl p-5 flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#00D4FF] shrink-0 mt-0.5" />
                  <span className="text-[#e0eaf5] text-sm leading-relaxed">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-[#0D1526]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
              <p className="text-[#7A8FA6]">Live in as little as 5 business days. Zero technical knowledge required.</p>
            </div>
            <div className="flex flex-col gap-6">
              {[
                { step: '01', title: 'Book a Free Strategy Call', desc: 'We spend 20 minutes understanding your business, your call types, your services, and how you currently handle bookings.' },
                { step: '02', title: 'We Build and Train Your AI', desc: 'Our team builds your receptionist, trains it on your business, connects it to your calendar and CRM, and tests it thoroughly.' },
                { step: '03', title: 'Go Live — Every Call Answered', desc: 'Your AI receptionist goes live. Every call is answered, every appointment booked, every summary sent to your inbox.' },
                { step: '04', title: 'We Monitor and Improve', desc: 'We review call performance monthly and refine the AI as your business evolves. You\'re never on your own.' },
              ].map((item) => (
                <div key={item.step} className="glass-card rounded-2xl p-6 flex items-start gap-5">
                  <div className="text-2xl font-bold text-gradient-cyan shrink-0 w-10">{item.step}</div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-[#7A8FA6] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-[#050B18]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Who Uses an AI Receptionist?</h2>
              <p className="text-[#7A8FA6]">Any Australian business that receives phone calls and can&apos;t afford to miss them.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {industries.map((ind) => (
                <div key={ind.name} className="glass-card rounded-xl p-5">
                  <h3 className="text-white font-semibold text-sm mb-2">{ind.name}</h3>
                  <p className="text-[#7A8FA6] text-xs leading-relaxed">{ind.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#0D1526]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-10">Common Questions</h2>
            <div className="flex flex-col gap-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="glass-card rounded-xl p-6">
                  <h3 className="text-white font-semibold mb-2 text-sm">{faq.q}</h3>
                  <p className="text-[#7A8FA6] text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#050B18]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-card rounded-2xl p-10">
              <div className="flex justify-center gap-3 mb-6">
                {[Shield, Clock, Star, Zap].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 rounded-xl bg-[rgba(0,212,255,0.1)] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                ))}
              </div>
              <h2 className="text-3xl font-bold text-white mb-3">Stop Losing Calls. Start Today.</h2>
              <p className="text-[#7A8FA6] mb-2">Founding beta rate: <strong className="text-white">$297/month</strong> — no setup fee. First 3 clients only.</p>
              <p className="text-xs text-[#4A6080] mb-8">Regular pricing: $397/month + $297 setup. Lock in your rate permanently.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://meetings-na2.hubspot.com/henish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 px-8 py-4 w-full sm:w-auto justify-center"
                >
                  <Calendar className="w-4 h-4" />
                  Book a Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="tel:+61498541273" className="btn-ghost inline-flex items-center gap-2 px-8 py-4 w-full sm:w-auto justify-center">
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
              </div>
            </div>

            {/* Related services */}
            <div className="mt-10 text-left">
              <p className="text-[#4A6080] text-xs uppercase tracking-wider mb-4">Related Services</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { href: '/ai-chatbot', label: 'AI Chatbot' },
                  { href: '/ai-voice-agent', label: 'AI Voice Agent' },
                  { href: '/ai-social-media', label: 'AI Social Media' },
                  { href: '/ai-automation', label: 'All Automations' },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="text-sm text-[#00D4FF] hover:underline">
                    {link.label} →
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
