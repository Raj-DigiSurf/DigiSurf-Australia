'use client'

import { ArrowRight, Clock, TrendingUp, DollarSign } from 'lucide-react'

const cases = [
  {
    industry: 'Healthcare',
    tag: 'Medical Clinic — Sydney',
    headline: '18 Hours of Admin Eliminated Every Week',
    challenge: 'A bulk-billing clinic in Western Sydney had 3 admin staff spending their entire day answering patient calls, sending appointment reminders, and manually processing referral letters.',
    solution: 'We deployed an AI receptionist to handle all inbound calls, an automated SMS reminder sequence, and an AI document tool to generate referral letters from clinical notes.',
    results: [
      { icon: Clock, metric: '18hrs', label: 'Admin saved per week' },
      { icon: TrendingUp, metric: '94%', label: 'Patient show-up rate' },
      { icon: DollarSign, metric: '$52K', label: 'Annual cost reduction' },
    ],
    color: '#00D4FF',
    timeline: '11 days to go live',
  },
  {
    industry: 'Fitness',
    tag: 'Gym & PT Studio — Melbourne',
    headline: 'Class Fill Rate Jumped from 62% to 91% in 6 Weeks',
    challenge: 'A group fitness studio was losing members to churn and struggling to fill classes beyond 60%. Their team spent 3+ hours a day chasing leads and re-engaging lapsed members.',
    solution: 'We built an AI lead follow-up chatbot, automated class booking reminders, a member win-back campaign, and an AI social media manager posting daily content across Instagram and Facebook.',
    results: [
      { icon: TrendingUp, metric: '91%', label: 'Class fill rate' },
      { icon: Clock, metric: '15hrs', label: 'Staff time saved/week' },
      { icon: DollarSign, metric: '+$4.2K', label: 'Extra monthly revenue' },
    ],
    color: '#3B7BFF',
    timeline: '9 days to go live',
  },
  {
    industry: 'Real Estate',
    tag: 'Property Agency — Brisbane',
    headline: 'Lead Response Time: 4 Hours → 28 Seconds',
    challenge: 'A mid-sized real estate agency was losing leads to competitors because enquiries sat unanswered for hours. Agents were overwhelmed with admin and couldn\'t respond fast enough.',
    solution: 'We deployed an AI chatbot on their website and property portals that responds to every enquiry within 30 seconds, qualifies buyers vs tenants, and books inspection appointments automatically.',
    results: [
      { icon: Clock, metric: '28sec', label: 'Average response time' },
      { icon: TrendingUp, metric: '3.4×', label: 'More leads converted' },
      { icon: DollarSign, metric: '+$8K', label: 'Extra monthly GCI' },
    ],
    color: '#7B5FFF',
    timeline: '14 days to go live',
  },
]

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 bg-[#050B18] relative">
      <div className="absolute inset-0 bg-dots opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge badge-cyan mb-6">Real Results</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            AI Working for Australian<br />
            <span className="text-gradient">Businesses Like Yours</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg text-[#7A8FA6]">
            Every case study below is from a real client. Names withheld for privacy — results are not.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-6">
          {cases.map((c, idx) => (
            <div key={idx} className="glass-card rounded-2xl p-8 relative overflow-hidden group" style={{ borderColor: `${c.color}15` }}>
              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${c.color}08, transparent 60%)` }}
              />

              <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left */}
                <div className="lg:col-span-2">
                  <div className="flex flex-wrap items-center gap-3 mb-5">
                    <span
                      className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border"
                      style={{ color: c.color, background: `${c.color}10`, borderColor: `${c.color}25` }}
                    >
                      {c.industry}
                    </span>
                    <span className="text-xs text-[#4A6080]">{c.tag}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{c.headline}</h3>

                  <div className="flex flex-col gap-4">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#4A6080] mb-1.5">The Challenge</p>
                      <p className="text-sm text-[#7A8FA6] leading-relaxed">{c.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-[#4A6080] mb-1.5">What We Built</p>
                      <p className="text-sm text-[#7A8FA6] leading-relaxed">{c.solution}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-xs text-[#4A6080]">
                    <Clock className="w-3.5 h-3.5" />
                    {c.timeline}
                  </div>
                </div>

                {/* Right — Metrics */}
                <div className="flex flex-col gap-4 justify-center">
                  {c.results.map((r) => (
                    <div key={r.label} className="rounded-xl p-4 border" style={{ background: `${c.color}06`, borderColor: `${c.color}15` }}>
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: `${c.color}15` }}>
                          <r.icon className="w-4 h-4" style={{ color: c.color }} />
                        </div>
                        <div>
                          <div className="text-xl font-bold text-white">{r.metric}</div>
                          <div className="text-xs text-[#7A8FA6]">{r.label}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary inline-flex items-center gap-2"
          >
            Get Results Like These <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
