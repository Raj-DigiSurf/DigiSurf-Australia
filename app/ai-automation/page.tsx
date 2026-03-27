import type { Metadata } from 'next'
import Link from 'next/link'
import { Bot, Check, Calendar, ArrowRight, Phone, Zap, Clock, TrendingUp, Shield, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Automation for Australian Businesses — DigiSurf Australia',
  description: 'Australia\'s AI automation agency. We build custom AI systems that save small businesses 15+ hours per week — receptionists, chatbots, voice agents, social media, and more. From $297/mo.',
  keywords: ['AI automation Australia', 'business automation Australia', 'AI agency Australia', 'automate small business Australia', 'AI systems for business Australia'],
  alternates: { canonical: 'https://www.digisurfaustralia.com.au/ai-automation' },
  openGraph: {
    title: 'AI Automation for Australian Businesses — DigiSurf Australia',
    description: 'Australia\'s AI automation agency. Custom AI systems that save small businesses 15+ hours per week. From $297/mo.',
    url: 'https://www.digisurfaustralia.com.au/ai-automation',
  },
}

const services = [
  {
    href: '/ai-receptionist',
    title: 'AI Receptionist',
    desc: 'Answers every call 24/7, books appointments, qualifies leads.',
    accent: '#00D4FF',
    from: '$297/mo',
  },
  {
    href: '/ai-chatbot',
    title: 'AI Chatbot',
    desc: 'Captures leads from your website, WhatsApp, and Instagram DMs.',
    accent: '#3B7BFF',
    from: '$297/mo',
  },
  {
    href: '/ai-voice-agent',
    title: 'AI Voice Agent',
    desc: 'Inbound routing and outbound follow-up campaigns at scale.',
    accent: '#7B5FFF',
    from: '$297/mo',
  },
  {
    href: '/ai-social-media',
    title: 'AI Social Media',
    desc: 'Writes, schedules, and posts daily content across all platforms.',
    accent: '#3B7BFF',
    from: 'Growth plan',
  },
  {
    href: '/#services',
    title: 'Google Review AI',
    desc: 'Automates review requests and responds to every review.',
    accent: '#00D4FF',
    from: 'Growth plan',
  },
  {
    href: '/#services',
    title: 'Document Automation',
    desc: 'Contracts, proposals, invoices — generated and sent automatically.',
    accent: '#7B5FFF',
    from: 'Growth plan',
  },
  {
    href: '/#services',
    title: 'CRM & Lead Automation',
    desc: 'Qualify, follow up, and update your CRM without manual input.',
    accent: '#00D4FF',
    from: 'Scale plan',
  },
  {
    href: '/#services',
    title: 'AI Content Automation',
    desc: 'Blog posts, email sequences, ad copy — in your brand voice.',
    accent: '#3B7BFF',
    from: 'Growth plan',
  },
]

const stats = [
  { value: '15hrs', label: 'average hours saved per week' },
  { value: '$35K+', label: 'vs cost of a part-time admin' },
  { value: '7 days', label: 'average time to go live' },
  { value: '24/7', label: 'uptime — no holidays, no sick days' },
]

export default function AIAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'DigiSurf Australia',
            url: 'https://www.digisurfaustralia.com.au',
            telephone: '+61498541273',
            email: 'info@digisurfaustralia.com.au',
            description: 'Australian AI automation agency building custom AI systems for small businesses — AI receptionists, chatbots, voice agents, social media automation, and more.',
            areaServed: { '@type': 'Country', name: 'Australia' },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'AI Automation Services',
              itemListElement: services.map((s, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                item: { '@type': 'Service', name: s.title, description: s.desc },
              })),
            },
          }),
        }}
      />

      <main className="min-h-screen bg-[#050B18]">

        {/* Hero */}
        <section className="pt-28 pb-20 bg-[#050B18] relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-25" />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #3B7BFF, transparent)' }} />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full blur-[100px] opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #00D4FF, transparent)' }} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <nav className="flex items-center justify-center gap-2 text-xs text-[#4A6080] mb-6">
              <Link href="/" className="hover:text-[#00D4FF] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#7A8FA6]">AI Automation</span>
            </nav>
            <span className="badge badge-cyan mb-6">AI Automation Australia</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Your Business.<br />
              <span className="text-gradient">Running on AI.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-[#7A8FA6] leading-relaxed mb-4">
              DigiSurf builds custom AI automation systems for Australian small businesses — from AI receptionists and chatbots to social media automation and document generation. We handle the tech. You run your business.
            </p>
            <p className="text-sm font-semibold text-[#00D4FF] mb-10">
              Australian registered · Remote-first · ABN 28 448 210 292 · From $297/month
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

        {/* Stats */}
        <section className="py-14 bg-[#0D1526]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-xs text-[#7A8FA6] leading-snug">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 bg-[#050B18]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Every AI System Your Business Needs</h2>
              <p className="text-[#7A8FA6] max-w-xl mx-auto">Mix and match. Start with one automation and scale as you grow.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {services.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="glass-card rounded-2xl p-6 group block hover:no-underline"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `rgba(${service.accent === '#00D4FF' ? '0,212,255' : service.accent === '#3B7BFF' ? '59,123,255' : '123,95,255'},0.1)` }}
                  >
                    <Bot className="w-5 h-5" style={{ color: service.accent }} />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2 group-hover:text-[#00D4FF] transition-colors">{service.title}</h3>
                  <p className="text-[#7A8FA6] text-xs leading-relaxed mb-3">{service.desc}</p>
                  <p className="text-xs font-semibold" style={{ color: service.accent }}>From {service.from}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why DigiSurf */}
        <section className="py-20 bg-[#0D1526]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Australian Businesses Choose DigiSurf</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: Zap, title: 'Live in 7 Days', desc: 'Most automations go live within one week. You don\'t need to do anything technical.' },
                { icon: Shield, title: 'No Lock-In Contracts', desc: '30 days notice to cancel. We earn your business every month.' },
                { icon: TrendingUp, title: 'Built for Your Business', desc: 'Not templates. Every system is trained on your specific services, FAQs, and workflows.' },
                { icon: Clock, title: '24/7 Operation', desc: 'AI systems never sleep, take sick days, or go on holiday.' },
                { icon: Star, title: 'Local Support', desc: 'We personally manage every client relationship. You\'re not a ticket number.' },
                { icon: Bot, title: 'AI That Learns', desc: 'We review and improve your systems every month based on real results.' },
              ].map((item) => (
                <div key={item.title} className="glass-card rounded-xl p-6">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(0,212,255,0.1)] flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                  <p className="text-[#7A8FA6] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing snapshot */}
        <section className="py-16 bg-[#050B18]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card rounded-2xl p-8 border border-[rgba(0,212,255,0.2)]">
              <div className="text-center mb-6">
                <span className="badge badge-cyan mb-4">Founding Beta — First 3 Clients Only</span>
                <h2 className="text-2xl font-bold text-white">Simple, Transparent Pricing</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { name: 'Starter', price: '$297', regular: '$397', desc: '1 AI automation of your choice' },
                  { name: 'Growth', price: '$597', regular: '$797', desc: 'Up to 3 automations + social media', popular: true },
                  { name: 'Scale', price: '$997', regular: '$1,297', desc: 'Unlimited automations + dedicated support' },
                ].map((plan) => (
                  <div key={plan.name} className={`rounded-xl p-5 text-center ${plan.popular ? 'bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.25)]' : 'bg-white/[0.03] border border-white/[0.06]'}`}>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#4A6080] mb-2">{plan.name}</p>
                    <p className="text-3xl font-bold text-white mb-1">{plan.price}<span className="text-sm text-[#4A6080]">/mo</span></p>
                    <p className="text-xs text-[#4A6080] line-through mb-3">Regular: {plan.regular}/mo</p>
                    <p className="text-xs text-[#7A8FA6]">{plan.desc}</p>
                    {plan.popular && <p className="text-xs font-semibold text-[#00D4FF] mt-2">Most Popular</p>}
                  </div>
                ))}
              </div>
              <p className="text-center text-xs text-[#4A6080] mt-5">No setup fee during beta · Lock in your rate permanently · Cancel anytime</p>
              <div className="text-center mt-6">
                <Link href="/#pricing" className="text-[#00D4FF] text-sm hover:underline">See full pricing details →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-[#0D1526]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-card rounded-2xl p-10">
              <h2 className="text-3xl font-bold text-white mb-3">Ready to Put Your Business on Autopilot?</h2>
              <p className="text-[#7A8FA6] mb-8">Book a free 15-minute strategy call. We&apos;ll map out exactly where AI will have the biggest impact in your business.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://meetings-na2.hubspot.com/henish" target="_blank" rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 px-8 py-4 w-full sm:w-auto justify-center">
                  <Calendar className="w-4 h-4" />
                  Book a Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a href="mailto:info@digisurfaustralia.com.au" className="btn-ghost inline-flex items-center gap-2 px-8 py-4 w-full sm:w-auto justify-center">
                  Email Us
                </a>
              </div>
              <p className="mt-6 text-xs text-[#4A6080]">Australian registered · ABN 28 448 210 292 · Remote-first delivery across Australia</p>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
