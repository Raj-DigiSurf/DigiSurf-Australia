import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, ArrowRight, Clock, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How AI Saves Australian Small Businesses 15+ Hours Per Week — DigiSurf Australia',
  description: 'Real breakdown of where Australian small businesses waste time and how AI automation recovers it. Includes time audit and ROI calculation for common automations.',
  keywords: ['AI saves time small business', 'business automation Australia', 'AI time savings Australia', 'automate small business tasks', 'save time with AI Australia'],
  alternates: { canonical: 'https://www.digisurfaustralia.com.au/blog/how-ai-saves-australian-businesses-time' },
  openGraph: {
    title: 'How AI Saves Australian Small Businesses 15+ Hours Per Week',
    description: 'Real breakdown of where business owners waste time and how AI automation recovers it — with numbers.',
    url: 'https://www.digisurfaustralia.com.au/blog/how-ai-saves-australian-businesses-time',
  },
}

export default function BlogPost2() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'How AI Saves Australian Small Businesses 15+ Hours Per Week',
            datePublished: '2025-03-20',
            dateModified: '2025-03-20',
            author: { '@type': 'Organization', name: 'DigiSurf Australia', url: 'https://www.digisurfaustralia.com.au' },
            publisher: { '@type': 'Organization', name: 'DigiSurf Australia', url: 'https://www.digisurfaustralia.com.au' },
            description: 'A breakdown of where Australian small business owners waste time each week and exactly how AI automation recovers it — with real time and ROI figures.',
            url: 'https://www.digisurfaustralia.com.au/blog/how-ai-saves-australian-businesses-time',
          }),
        }}
      />

      <main className="min-h-screen bg-[#050B18]">

        {/* Hero */}
        <section className="pt-28 pb-16 bg-[#050B18] relative overflow-hidden">
          <div className="absolute inset-0 bg-dots opacity-20" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-[#4A6080] mb-6">
              <Link href="/" className="hover:text-[#00D4FF] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#00D4FF] transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-[#7A8FA6]">How AI Saves Time</span>
            </nav>
            <span className="badge badge-blue mb-6">Strategy</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              How AI Saves Australian Small Businesses 15+ Hours Per Week
            </h1>
            <div className="flex items-center gap-4 text-sm text-[#4A6080] mb-8">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> 20 March 2025</span>
              <span>6 min read</span>
              <span>By DigiSurf Australia</span>
            </div>
            <p className="text-lg text-[#7A8FA6] leading-relaxed">
              15 hours per week sounds like a big claim. This article shows you exactly where those hours come from — broken down by task, by automation type, and translated into real dollar figures.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-10 bg-[#0D1526]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: '15hrs', label: 'saved per week' },
                { value: '780hrs', label: 'saved per year' },
                { value: '$58.5K', label: 'value at $75/hr' },
                { value: '7 days', label: 'to go live' },
              ].map((s) => (
                <div key={s.label} className="glass-card rounded-xl p-4 text-center">
                  <div className="text-2xl font-bold text-gradient mb-1">{s.value}</div>
                  <div className="text-xs text-[#7A8FA6]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-12 bg-[#050B18]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* The Hidden Time Tax */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">The Hidden Time Tax on Australian Business Owners</h2>
              <p className="text-[#7A8FA6] leading-relaxed mb-4">
                Most business owners don&apos;t realise how much of their day is consumed by low-value, repetitive tasks. Not because they&apos;re lazy — but because these tasks are invisible. They&apos;re woven into the fabric of a normal workday: a call here, a reply there, a quick post before close of business.
              </p>
              <p className="text-[#7A8FA6] leading-relaxed mb-4">
                When we do a time audit with new clients, the pattern is always the same. The average Australian small business owner spends <strong className="text-white">2–3 hours per day</strong> on tasks that could be fully automated with technology that already exists.
              </p>
              <p className="text-[#7A8FA6] leading-relaxed">
                That&apos;s not a minor inconvenience. That&apos;s 25–37% of an 8-hour workday spent on work that doesn&apos;t require you.
              </p>
            </div>

            {/* The 5 Biggest Time Drains */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6">The 5 Biggest Time Drains (and What They Cost You)</h2>
              <div className="flex flex-col gap-5">
                {[
                  {
                    rank: '01',
                    title: 'Answering the same 10 phone questions',
                    time: '45 min/day',
                    detail: 'Every business has the same 10 questions callers ask. &quot;What are your hours?&quot; &quot;How much does X cost?&quot; &quot;Are you available on [date]?&quot; These calls are important — but they don&apos;t require a person. An AI receptionist trained on your FAQs handles 80% of inbound calls with no escalation needed.',
                    color: '#00D4FF',
                  },
                  {
                    rank: '02',
                    title: 'Replying to website and DM enquiries',
                    time: '30 min/day',
                    detail: 'Website chat, WhatsApp messages, Instagram DMs, Facebook enquiries — every platform has a queue. An AI chatbot trained on your business responds instantly to every message, 24/7, capturing the lead and booking the appointment without you touching a keyboard.',
                    color: '#3B7BFF',
                  },
                  {
                    rank: '03',
                    title: 'Planning and posting social media content',
                    time: '60 min/day',
                    detail: 'The recommended posting frequency for Instagram and LinkedIn is 5–7 times per week. Most business owners manage 1–2 posts when they remember. AI social media management writes, designs, and publishes daily content in your brand voice — automatically. Most clients reclaim 5–7 hours per week on this alone.',
                    color: '#7B5FFF',
                  },
                  {
                    rank: '04',
                    title: 'Back-and-forth appointment scheduling',
                    time: '30 min/day',
                    detail: '"Are you free Tuesday?" "Not Tuesday, what about Thursday?" "That works, but only after 2pm..." Every business with appointments deals with this. AI connects directly to your calendar and books time slots automatically — no back-and-forth, no double bookings.',
                    color: '#00D4FF',
                  },
                  {
                    rank: '05',
                    title: 'Manual CRM updates and lead follow-up',
                    time: '30 min/day',
                    detail: 'After every enquiry, someone needs to update the CRM, send a follow-up email, and check back in 3 days. Most businesses do this inconsistently — or not at all. AI CRM automation logs every interaction, triggers follow-up sequences, and keeps your pipeline accurate without manual input.',
                    color: '#3B7BFF',
                  },
                ].map((item) => (
                  <div key={item.rank} className="glass-card rounded-2xl p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl font-bold shrink-0 w-10" style={{ color: item.color }}>{item.rank}</div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h3 className="text-white font-bold">{item.title}</h3>
                          <span className="flex items-center gap-1 text-sm font-semibold px-3 py-1 rounded-full"
                            style={{ background: `rgba(${item.color === '#00D4FF' ? '0,212,255' : item.color === '#3B7BFF' ? '59,123,255' : '123,95,255'},0.1)`, color: item.color }}>
                            <Clock className="w-3 h-3" />
                            {item.time}
                          </span>
                        </div>
                        <p className="text-[#7A8FA6] text-sm leading-relaxed">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* The Maths */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">The Maths: What 15 Hours Per Week Is Worth</h2>
              <div className="glass-card rounded-2xl p-6 border-l-4 border-[#3B7BFF] mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {[
                    { value: '3hrs/day', label: '= 15hrs per week saved' },
                    { value: '780hrs', label: '= hours saved per year' },
                    { value: '$58,500', label: 'value at $75/hr owner rate' },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="text-2xl font-bold text-[#3B7BFF] mb-1">{s.value}</div>
                      <div className="text-xs text-[#7A8FA6]">{s.label}</div>
                    </div>
                  ))}
                </div>
                <p className="text-[#7A8FA6] text-sm leading-relaxed">
                  780 hours is nearly 20 full working weeks — almost half a year of your time. That&apos;s time you could spend on business development, client relationships, improving your service, or simply not working 60-hour weeks.
                </p>
              </div>
              <p className="text-[#7A8FA6] leading-relaxed">
                Compare that to the cost of automation: our Growth plan covers 3 automations (AI receptionist + chatbot + social media) for <strong className="text-white">$597/month = $7,164/year</strong>. That&apos;s a return of <strong className="text-white">8:1</strong> on time value alone — before counting the revenue you recover from missed calls and captured leads.
              </p>
            </div>

            {/* How to start */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">How to Start: The Priority Framework</h2>
              <p className="text-[#7A8FA6] leading-relaxed mb-6">
                You don&apos;t need to automate everything at once. The most effective approach: identify your single biggest time drain and start there.
              </p>
              <div className="glass-card rounded-2xl p-6">
                <p className="text-white font-semibold mb-4">Ask yourself: What&apos;s the task that, if someone else did it perfectly, would have the biggest impact on my business?</p>
                <div className="flex flex-col gap-3">
                  {[
                    { scenario: 'Missing 5+ calls per day?', solution: 'Start with AI Receptionist. Immediate, measurable ROI.' },
                    { scenario: 'Website getting traffic but few enquiries?', solution: 'Start with AI Chatbot. Convert silent visitors into leads.' },
                    { scenario: 'High no-show rate for appointments?', solution: 'Start with AI Voice Agent (outbound reminders). Can recover $10K+ per year.' },
                    { scenario: 'No social media presence?', solution: 'Start with AI Social Media. Daily posting in 7 days.' },
                    { scenario: 'Spending 3+ hours/day on admin?', solution: 'Book a call. We&apos;ll audit your workflow and recommend the right combination.' },
                  ].map((item) => (
                    <div key={item.scenario} className="flex items-start gap-3 py-2 border-b border-white/[0.05]">
                      <TrendingUp className="w-4 h-4 text-[#3B7BFF] shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white text-sm font-medium">{item.scenario} </span>
                        <span className="text-[#7A8FA6] text-sm">{item.solution}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0D1526]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-card rounded-2xl p-10">
              <h2 className="text-2xl font-bold text-white mb-3">Find Out Where You&apos;re Losing the Most Time</h2>
              <p className="text-[#7A8FA6] mb-8">Book a free 15-minute strategy call. We&apos;ll do a quick time audit and show you exactly which automation will have the biggest impact first.</p>
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
              <p className="mt-4 text-xs text-[#4A6080]">From $297/month · No setup fee during beta · Cancel anytime</p>
              <div className="mt-8 text-left">
                <p className="text-[#4A6080] text-xs uppercase tracking-wider mb-3">Related Articles</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { href: '/blog/ai-receptionist-vs-human-receptionist', label: 'AI vs Human Receptionist' },
                    { href: '/blog/ai-automation-for-small-business-australia', label: 'Complete AI Automation Guide 2025' },
                    { href: '/ai-automation', label: 'All AI Services' },
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
