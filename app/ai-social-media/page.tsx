import type { Metadata } from 'next'
import Link from 'next/link'
import { Share2, Check, Calendar, ArrowRight, Phone, Video, TrendingUp, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Social Media Manager Australia — Post Daily Without Lifting a Finger',
  description: 'AI social media manager for Australian businesses. Writes, schedules and posts your content to Instagram, Facebook, LinkedIn, TikTok. From $297/mo. No lock-in.',
  keywords: ['AI social media manager Australia', 'social media automation Australia', 'AI content creator Australia', 'automated social media posts', 'social media AI small business'],
  alternates: { canonical: 'https://www.digisurfaustralia.com.au/ai-social-media' },
  openGraph: {
    title: 'AI Social Media Manager Australia — Post Daily Without Lifting a Finger',
    description: 'AI writes, schedules and posts your social media content across all platforms. From $297/mo.',
    url: 'https://www.digisurfaustralia.com.au/ai-social-media',
  },
}

const platforms = ['Instagram', 'Facebook', 'LinkedIn', 'TikTok', 'YouTube Shorts', 'Google Business']

const features = [
  'AI-written posts in your brand voice — not generic templates',
  'Content calendar planned weeks in advance for approval',
  'Multi-platform publishing (Instagram, Facebook, LinkedIn, TikTok)',
  'Hashtag research and optimisation for each platform',
  'Short-form video clips from your long-form content',
  'Auto-captions and platform-specific formatting',
  'Monthly performance reporting and strategy review',
  'Engagement monitoring and response drafts',
]

const faqs = [
  {
    q: 'Will it sound like me or like a robot?',
    a: 'We spend time understanding your brand voice, tone, and content pillars during onboarding. The AI learns to write in your style — not a generic corporate voice.',
  },
  {
    q: 'Do I need to approve every post?',
    a: 'You can — or you can give us full autonomy. Most clients review the monthly content calendar once, approve it, and let the AI post automatically from there.',
  },
  {
    q: 'What if I want to post something myself?',
    a: 'No problem. The AI works around you. You can post manually anytime — the scheduled content isn\'t affected.',
  },
  {
    q: 'Can it repurpose my existing videos and podcasts?',
    a: 'Yes. This is one of the highest-ROI automations we offer. One long-form video becomes 10–15 short clips, captioned and scheduled across platforms automatically.',
  },
  {
    q: 'How quickly will I see results?',
    a: 'Consistency is what drives social media growth. Most clients see measurable improvement in reach and engagement within 60–90 days of daily posting.',
  },
]

export default function AISocialMediaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'AI Social Media Manager for Australian Businesses',
            provider: { '@type': 'Organization', name: 'DigiSurf Australia', url: 'https://www.digisurfaustralia.com.au', telephone: '+61498541273' },
            description: 'AI that writes, schedules and posts social media content across Instagram, Facebook, LinkedIn, and TikTok for Australian businesses.',
            areaServed: { '@type': 'Country', name: 'Australia' },
            url: 'https://www.digisurfaustralia.com.au/ai-social-media',
            offers: { '@type': 'Offer', price: '297', priceCurrency: 'AUD', priceSpecification: { '@type': 'UnitPriceSpecification', price: '297', priceCurrency: 'AUD', unitText: 'MONTH' } },
          }),
        }}
      />

      <main className="min-h-screen bg-[#050B18]">

        {/* Hero */}
        <section className="pt-28 pb-20 bg-[#050B18] relative overflow-hidden">
          <div className="absolute inset-0 bg-dots opacity-25" />
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full blur-[120px] opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #3B7BFF, transparent)' }} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <nav className="flex items-center justify-center gap-2 text-xs text-[#4A6080] mb-6">
              <Link href="/" className="hover:text-[#00D4FF] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#7A8FA6]">AI Social Media</span>
            </nav>
            <span className="badge badge-blue mb-6">AI Social Media Manager</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Daily Content Posted.<br />
              <span className="text-gradient">Zero Effort From You.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-[#7A8FA6] leading-relaxed mb-4">
              AI learns your brand voice and posts daily to Instagram, Facebook, LinkedIn, and TikTok — written, scheduled, and published automatically. You focus on running your business.
            </p>
            <p className="text-sm font-semibold text-[#00D4FF] mb-8">
              Posts daily across all platforms · Included in Growth plan ($597/mo) · No lock-in
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
              {platforms.map((p) => (
                <span key={p} className="glass text-xs font-medium text-[#7A8FA6] px-3 py-1.5 rounded-full border border-white/[0.06]">{p}</span>
              ))}
            </div>
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

        {/* Problem */}
        <section className="py-16 bg-[#0D1526]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card rounded-2xl p-8 border-l-4 border-[#3B7BFF]">
              <h2 className="text-2xl font-bold text-white mb-4">You Know You Should Post More. You Just Don&apos;t Have Time.</h2>
              <p className="text-[#7A8FA6] leading-relaxed mb-6">
                The average Australian small business owner spends just <strong className="text-white">18 minutes per week</strong> on social media — when they should be posting daily. The businesses winning online right now are posting 5–7 times per week. Not because they&apos;re working harder. Because they&apos;ve automated it.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { value: '7×', label: 'more reach with daily posting vs weekly' },
                  { value: '3hrs', label: 'saved per week on average' },
                  { value: '60 days', label: 'to measurable engagement growth' },
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

        {/* Features */}
        <section className="py-20 bg-[#050B18]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything Included</h2>
              <p className="text-[#7A8FA6]">Full social media management — written, designed, and published for you.</p>
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

        {/* Video workflow highlight */}
        <section className="py-16 bg-[#0D1526]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[rgba(0,212,255,0.1)] flex items-center justify-center shrink-0">
                  <Video className="w-7 h-7 text-[#00D4FF]" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white mb-3">Record Once. Publish Everywhere.</h2>
                  <p className="text-[#7A8FA6] leading-relaxed mb-4">
                    Got a podcast, webinar, or long-form video? Our AI takes it, clips the best moments, adds captions, resizes for each platform, and schedules posts across YouTube Shorts, Instagram Reels, TikTok, and LinkedIn — automatically.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['YouTube Shorts', 'Instagram Reels', 'TikTok', 'LinkedIn Video', 'Facebook Reels'].map((p) => (
                      <span key={p} className="text-xs px-3 py-1 rounded-full bg-[rgba(0,212,255,0.08)] border border-[rgba(0,212,255,0.15)] text-[#00D4FF]">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
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
              <h2 className="text-3xl font-bold text-white mb-3">Start Posting Daily — Without Doing It Yourself</h2>
              <p className="text-[#7A8FA6] mb-8">Included in Growth plan at <strong className="text-white">$597/month</strong> — no setup fee during beta.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="https://meetings-na2.hubspot.com/henish" target="_blank" rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 px-8 py-4 w-full sm:w-auto justify-center">
                  <Calendar className="w-4 h-4" />
                  Book a Free Strategy Call
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link href="/#pricing" className="btn-ghost inline-flex items-center gap-2 px-8 py-4 w-full sm:w-auto justify-center">
                  See Pricing
                </Link>
              </div>
              <div className="mt-8 text-left">
                <p className="text-[#4A6080] text-xs uppercase tracking-wider mb-3">Related Services</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { href: '/ai-receptionist', label: 'AI Receptionist' },
                    { href: '/ai-chatbot', label: 'AI Chatbot' },
                    { href: '/ai-voice-agent', label: 'AI Voice Agent' },
                    { href: '/ai-automation', label: 'All Automations' },
                  ].map((link) => (
                    <Link key={link.href} href={link.href} className="text-sm text-[#3B7BFF] hover:underline">{link.label} →</Link>
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
