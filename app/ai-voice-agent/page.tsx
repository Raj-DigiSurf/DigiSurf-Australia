import type { Metadata } from 'next'
import Link from 'next/link'
import { Mic2, Check, Calendar, ArrowRight, Phone, PhoneCall, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Voice Agent Australia — Inbound & Outbound Call Automation',
  description: 'AI voice agents for Australian businesses. Handle inbound calls, run outbound follow-up campaigns, book appointments, and qualify leads automatically. From $297/mo.',
  keywords: ['AI voice agent Australia', 'AI phone agent Australia', 'outbound calling AI', 'automated follow-up calls Australia', 'AI call centre Australia'],
  alternates: { canonical: 'https://www.digisurfaustralia.com.au/ai-voice-agent' },
  openGraph: {
    title: 'AI Voice Agent Australia — Inbound & Outbound Call Automation',
    description: 'AI voice agents for Australian businesses. Handle calls, run outbound campaigns, book appointments automatically. From $297/mo.',
    url: 'https://www.digisurfaustralia.com.au/ai-voice-agent',
  },
}

const inboundFeatures = [
  'Smart call routing based on enquiry type',
  'Captures name, number, and intent for every call',
  'Answers detailed FAQs about your services',
  'Escalates urgent or complex calls in real time',
  'Integrates with your CRM or helpdesk',
  'Multilingual support available',
]

const outboundFeatures = [
  'Appointment reminders that dramatically cut no-shows',
  'Follow-up calls after quotes or enquiries',
  'Re-engagement campaigns for dormant leads',
  'Post-service satisfaction check-ins',
  'Custom scripts per campaign or contact type',
  'Results logged to your CRM automatically',
]

const faqs = [
  {
    q: 'What\'s the difference between an AI voice agent and an AI receptionist?',
    a: 'An AI receptionist specifically handles inbound calls — answering, routing, booking. An AI voice agent is broader — it can also make outbound calls for follow-up, reminders, and campaigns.',
  },
  {
    q: 'Can it make outbound calls to my existing client list?',
    a: 'Yes. You upload your contact list (or connect your CRM), set the script and timing, and the AI runs the campaign — calling each contact, leaving messages, and logging responses.',
  },
  {
    q: 'Is this legal in Australia?',
    a: 'Yes, provided you follow the Do Not Call Register requirements and have consent where required. We configure the system to be fully compliant with Australian telecommunications regulations.',
  },
  {
    q: 'What does the AI sound like?',
    a: 'Natural, professional, and conversational. We use advanced voice synthesis (ElevenLabs or similar) and test thoroughly before going live. You approve the voice and script.',
  },
  {
    q: 'How does it handle objections?',
    a: 'We train the agent on your common objections and responses. If a caller objects in an unexpected way, the agent politely wraps up and logs the outcome for your review.',
  },
]

export default function AIVoiceAgentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Voice Agent for Australian Businesses',
            provider: { '@type': 'Organization', name: 'DigiSurf Australia', url: 'https://www.digisurfaustralia.com.au', telephone: '+61498541273' },
            description: 'AI voice agents for inbound call handling and outbound follow-up campaigns for Australian businesses.',
            areaServed: { '@type': 'Country', name: 'Australia' },
            url: 'https://www.digisurfaustralia.com.au/ai-voice-agent',
            offers: { '@type': 'Offer', price: '297', priceCurrency: 'AUD', priceSpecification: { '@type': 'UnitPriceSpecification', price: '297', priceCurrency: 'AUD', unitText: 'MONTH' } },
          }),
        }}
      />

      <main className="min-h-screen bg-[#050B18]">

        {/* Hero */}
        <section className="pt-28 pb-20 bg-[#050B18] relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-25" />
          <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full blur-[120px] opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #7B5FFF, transparent)' }} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <nav className="flex items-center justify-center gap-2 text-xs text-[#4A6080] mb-6">
              <Link href="/" className="hover:text-[#00D4FF] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#7A8FA6]">AI Voice Agent</span>
            </nav>
            <span className="badge mb-6" style={{ background: 'rgba(123,95,255,0.1)', border: '1px solid rgba(123,95,255,0.25)', color: '#7B5FFF' }}>
              AI Voice Agent Australia
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Calls In. Calls Out.<br />
              <span className="text-gradient">All Automated.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-[#7A8FA6] leading-relaxed mb-4">
              AI voice agents that handle inbound calls and run outbound campaigns — qualifying leads, booking appointments, following up quotes, and cutting no-shows. At scale. Without hiring.
            </p>
            <p className="text-sm font-semibold text-[#00D4FF] mb-10">
              From $297/month · No setup fee during beta · Live in 7–10 days
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://meetings-na2.hubspot.com/henish" target="_blank" rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4">
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

        {/* Two types */}
        <section className="py-20 bg-[#0D1526]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Two Powerful Modes</h2>
              <p className="text-[#7A8FA6]">Use one or both — built around your business.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inbound */}
              <div className="glass-card rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-[rgba(0,212,255,0.1)] flex items-center justify-center mb-5">
                  <PhoneCall className="w-6 h-6 text-[#00D4FF]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Inbound Voice Agent</h3>
                <p className="text-[#7A8FA6] text-sm mb-5">Answers every incoming call, routes enquiries, books appointments, and escalates when needed.</p>
                <ul className="flex flex-col gap-2.5">
                  {inboundFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#e0eaf5]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Outbound */}
              <div className="glass-card rounded-2xl p-8">
                <div className="w-12 h-12 rounded-xl bg-[rgba(123,95,255,0.1)] flex items-center justify-center mb-5">
                  <Mic2 className="w-6 h-6 text-[#7B5FFF]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Outbound Voice Agent</h3>
                <p className="text-[#7A8FA6] text-sm mb-5">Makes outbound calls at scale — reminders, follow-ups, re-engagement — without a call centre.</p>
                <ul className="flex flex-col gap-2.5">
                  {outboundFeatures.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#7B5FFF] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#e0eaf5]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Use cases */}
        <section className="py-20 bg-[#050B18]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-10">Built for Australian Businesses That Can&apos;t Afford to Miss a Call</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Medical Clinics', desc: 'Cut no-shows by 40% with automated appointment reminders. Handle patient calls after hours.' },
                { title: 'Real Estate', desc: 'Follow up every enquiry within seconds. Run outbound campaigns to re-engage cold buyers.' },
                { title: 'Fitness Studios', desc: 'Reduce class no-shows. Re-engage members who haven\'t booked in 30 days automatically.' },
                { title: 'Tradies', desc: 'Never miss a $600 job because you were on the roof. Every call answered and booked.' },
                { title: 'Financial Services', desc: 'Automated appointment reminders for advisers. Follow up on quotes that haven\'t converted.' },
                { title: 'Legal & Professional', desc: 'First impressions count. Every call answered professionally, every lead qualified.' },
              ].map((uc) => (
                <div key={uc.title} className="glass-card rounded-xl p-5">
                  <h3 className="text-white font-semibold text-sm mb-2">{uc.title}</h3>
                  <p className="text-[#7A8FA6] text-xs leading-relaxed">{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI */}
        <section className="py-16 bg-[#0D1526]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card rounded-2xl p-8 border-l-4 border-[#7B5FFF]">
              <h2 className="text-2xl font-bold text-white mb-4">What a 40% Reduction in No-Shows Means for Your Business</h2>
              <p className="text-[#7A8FA6] leading-relaxed mb-6">
                A GP clinic with 50 appointments per week and a 20% no-show rate loses 10 appointments per week — at $80 average consult, that&apos;s $800/week or <strong className="text-white">$41,600 per year</strong>. Automated reminders cut no-shows by 40–60%, recovering $16,000–$24,000 annually. The AI voice agent pays for itself in the first month.
              </p>
              <a href="https://meetings-na2.hubspot.com/henish" target="_blank" rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2">
                Calculate My ROI <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#050B18]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-10">Frequently Asked Questions</h2>
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
        <section className="py-20 bg-[#0D1526]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-card rounded-2xl p-10">
              <h2 className="text-3xl font-bold text-white mb-3">Ready to Automate Your Calls?</h2>
              <p className="text-[#7A8FA6] mb-2">Founding beta: <strong className="text-white">$297/month</strong> — no setup fee. First 3 clients only.</p>
              <p className="text-xs text-[#4A6080] mb-8">Regular: $397/month + $297 setup · Cancel anytime · No lock-in.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://meetings-na2.hubspot.com/henish" target="_blank" rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 px-8 py-4 w-full sm:w-auto justify-center">
                  <Calendar className="w-4 h-4" />
                  Book a Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="tel:+61498541273" className="btn-ghost inline-flex items-center gap-2 px-8 py-4 w-full sm:w-auto justify-center">
                  <Phone className="w-4 h-4" />
                  Call Us
                </a>
              </div>
              <div className="mt-8 text-left">
                <p className="text-[#4A6080] text-xs uppercase tracking-wider mb-3">Related Services</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { href: '/ai-receptionist', label: 'AI Receptionist' },
                    { href: '/ai-chatbot', label: 'AI Chatbot' },
                    { href: '/ai-social-media', label: 'AI Social Media' },
                    { href: '/ai-automation', label: 'All Automations' },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} className="text-sm text-[#7B5FFF] hover:underline">{link.label} →</Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
