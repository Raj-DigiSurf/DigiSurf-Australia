import type { Metadata } from 'next'
import Link from 'next/link'
import { MessageSquare, Check, Clock, Calendar, ArrowRight, Zap, Globe, Bot } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Chatbot Australia — 24/7 Lead Capture for Your Website',
  description: 'Custom AI chatbot for Australian businesses. Captures leads, answers questions, books appointments 24/7 on your website, WhatsApp and Instagram. From $297/mo.',
  keywords: ['AI chatbot Australia', 'chatbot for small business Australia', 'website chatbot Australia', 'WhatsApp chatbot Australia', 'lead capture chatbot'],
  alternates: { canonical: 'https://www.digisurfaustralia.com.au/ai-chatbot' },
  openGraph: {
    title: 'AI Chatbot Australia — 24/7 Lead Capture for Your Website',
    description: 'Custom AI chatbot for Australian businesses. Captures leads, books appointments 24/7. From $297/mo.',
    url: 'https://www.digisurfaustralia.com.au/ai-chatbot',
  },
}

const platforms = [
  { name: 'Website Chat Widget', desc: 'Embedded directly into your website with your branding and colours.' },
  { name: 'WhatsApp Automation', desc: 'Responds to every WhatsApp message instantly — 24/7.' },
  { name: 'Instagram DMs', desc: 'Auto-replies to DMs and story replies, capturing every lead.' },
  { name: 'Facebook Messenger', desc: 'Handles enquiries across your Facebook business page.' },
]

const features = [
  'Trained on your specific services, pricing, and FAQs',
  'Captures name, email, phone, and enquiry intent',
  'Books appointments into your calendar automatically',
  'Hands off to a human when the query is complex',
  'Available in multiple languages',
  'Branded to match your business — not a generic bot',
  'Connects to your CRM (HubSpot, Salesforce, and more)',
  'Detailed conversation analytics and lead reports',
]

const faqs = [
  {
    q: 'Can I use it on my existing website?',
    a: 'Yes. We embed a chat widget into any website — WordPress, Wix, Shopify, custom-built. It takes less than 5 minutes to add once we\'ve built it.',
  },
  {
    q: 'Will it know enough about my business to answer correctly?',
    a: 'We train it on your website, your FAQs, your services, your pricing, and your policies. If a question is outside its knowledge, it asks the user to call or sends them to you.',
  },
  {
    q: 'What happens to the leads it captures?',
    a: 'Every lead is sent to your email instantly and added to your CRM. You can also connect it to HubSpot, Mailchimp, or any other system via Zapier.',
  },
  {
    q: 'Does it work on mobile?',
    a: 'Yes — the widget is fully responsive and works perfectly on all devices.',
  },
  {
    q: 'How is this different from a basic FAQ chatbot?',
    a: 'Basic chatbots use decision trees with fixed answers. Our AI uses large language models trained specifically on your business — it understands context, handles complex questions, and responds naturally.',
  },
]

export default function AIChatbotPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Chatbot for Australian Businesses',
            provider: {
              '@type': 'Organization',
              name: 'DigiSurf Australia',
              url: 'https://www.digisurfaustralia.com.au',
              telephone: '+61498541273',
            },
            description: 'Custom AI chatbot for websites, WhatsApp and Instagram that captures leads, answers questions, and books appointments 24/7 for Australian small businesses.',
            areaServed: { '@type': 'Country', name: 'Australia' },
            url: 'https://www.digisurfaustralia.com.au/ai-chatbot',
            offers: { '@type': 'Offer', price: '297', priceCurrency: 'AUD', priceSpecification: { '@type': 'UnitPriceSpecification', price: '297', priceCurrency: 'AUD', unitText: 'MONTH' } },
          }),
        }}
      />

      <main className="min-h-screen bg-[#050B18]">

        {/* Hero */}
        <section className="pt-28 pb-20 bg-[#050B18] relative overflow-hidden">
          <div className="absolute inset-0 bg-dots opacity-30" />
          <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #3B7BFF, transparent)' }} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <nav className="flex items-center justify-center gap-2 text-xs text-[#4A6080] mb-6">
              <Link href="/" className="hover:text-[#00D4FF] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#7A8FA6]">AI Chatbot</span>
            </nav>
            <span className="badge badge-blue mb-6">AI Chatbot Australia</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Your Website. Working<br />
              <span className="text-gradient">While You Sleep.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-[#7A8FA6] leading-relaxed mb-4">
              A custom AI chatbot trained on your business — answering questions, capturing leads, and booking appointments on your website, WhatsApp, and Instagram DMs. 24 hours a day.
            </p>
            <p className="text-sm font-semibold text-[#00D4FF] mb-10">
              From $297/month · No setup fee during beta · Live in 7 days
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
                +61 498 541 273
              </a>
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-16 bg-[#0D1526]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-3">Works Everywhere Your Customers Are</h2>
              <p className="text-[#7A8FA6]">One AI, deployed across all your customer touchpoints.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {platforms.map((p) => (
                <div key={p.name} className="glass-card rounded-xl p-6 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(59,123,255,0.1)] flex items-center justify-center shrink-0">
                    <Globe className="w-5 h-5 text-[#3B7BFF]" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{p.name}</h3>
                    <p className="text-[#7A8FA6] text-sm">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-[#050B18]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Your AI Chatbot Does</h2>
              <p className="text-[#7A8FA6] max-w-xl mx-auto">Not a generic bot. Trained specifically on your business — your services, your prices, your tone.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f} className="glass-card rounded-xl p-5 flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#3B7BFF] shrink-0 mt-0.5" />
                  <span className="text-[#e0eaf5] text-sm leading-relaxed">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ROI section */}
        <section className="py-16 bg-[#0D1526]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card rounded-2xl p-8 border-l-4 border-[#3B7BFF]">
              <h2 className="text-2xl font-bold text-white mb-4">The Real Cost of Not Having a Chatbot</h2>
              <p className="text-[#7A8FA6] leading-relaxed mb-6">
                79% of website visitors leave without making contact. For every 100 visitors to your site, only 1–3 actually enquire. The rest bounce because they couldn&apos;t find an answer fast enough. An AI chatbot catches those 97 that were about to leave.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { value: '3×', label: 'more leads captured vs no chatbot' },
                  { value: '28sec', label: 'average response time' },
                  { value: '24/7', label: 'available — even at 2am' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-[rgba(59,123,255,0.07)] border border-[rgba(59,123,255,0.15)]">
                    <div className="text-3xl font-bold text-[#3B7BFF] mb-1">{stat.value}</div>
                    <div className="text-xs text-[#7A8FA6]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 bg-[#050B18]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-white text-center mb-10">Live in 7 Days — We Handle Everything</h2>
            <div className="flex flex-col gap-6">
              {[
                { step: '01', title: 'Strategy Call', desc: 'We understand your business, your common questions, and how you want leads handled.' },
                { step: '02', title: 'Build & Train', desc: 'We train the AI on your website content, services, pricing, and FAQs. We also set up your CRM connection.' },
                { step: '03', title: 'Embed & Go Live', desc: 'We give you a single line of code to add to your website (or we do it for you). It\'s live instantly.' },
                { step: '04', title: 'Monitor & Improve', desc: 'We review conversation logs monthly to improve accuracy and catch anything the AI is getting wrong.' },
              ].map((item) => (
                <div key={item.step} className="glass-card rounded-2xl p-6 flex items-start gap-5">
                  <div className="text-2xl font-bold text-[#3B7BFF] shrink-0 w-10">{item.step}</div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                    <p className="text-[#7A8FA6] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-[#0D1526]">
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
        <section className="py-20 bg-[#050B18]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-card rounded-2xl p-10">
              <h2 className="text-3xl font-bold text-white mb-3">Start Capturing Every Lead</h2>
              <p className="text-[#7A8FA6] mb-2">Founding beta: <strong className="text-white">$297/month</strong> — no setup fee. First 3 clients only.</p>
              <p className="text-xs text-[#4A6080] mb-8">Regular: $397/month + $297 setup · Cancel anytime · No lock-in.</p>
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
              <div className="mt-8 text-left">
                <p className="text-[#4A6080] text-xs uppercase tracking-wider mb-3">Related Services</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { href: '/ai-receptionist', label: 'AI Receptionist' },
                    { href: '/ai-voice-agent', label: 'AI Voice Agent' },
                    { href: '/ai-social-media', label: 'AI Social Media' },
                    { href: '/ai-automation', label: 'All Automations' },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} className="text-sm text-[#3B7BFF] hover:underline">
                      {link.label} →
                    </Link>
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
