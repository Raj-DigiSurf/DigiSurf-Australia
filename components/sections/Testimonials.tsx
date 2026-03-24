'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Dr. Sarah Mitchell',
    role: 'Principal GP',
    company: 'Westside Family Medical',
    location: 'Sydney, NSW',
    avatar: 'SM',
    rating: 5,
    text: 'We were drowning in admin before DigiSurf. Now our AI receptionist handles 80% of all patient calls, our reminder system reduced no-shows by 40%, and our clinical team can actually focus on patients. The ROI was clear within 3 weeks.',
    result: '18hrs admin saved/week',
    color: '#00D4FF',
  },
  {
    name: 'Jake Thornton',
    role: 'Owner & Head Coach',
    company: 'Forge Fitness Studio',
    location: 'Melbourne, VIC',
    avatar: 'JT',
    rating: 5,
    text: 'I was sceptical that AI could replace personal follow-up, but DigiSurf built a system that feels genuinely human. Our class fill rate went from 62% to over 90%, and I\'ve stopped spending weekends on social media. Life changing.',
    result: '+$4,200/month revenue',
    color: '#3B7BFF',
  },
  {
    name: 'Priya Sharma',
    role: 'Principal Agent',
    company: 'Pinnacle Property Group',
    location: 'Brisbane, QLD',
    avatar: 'PS',
    rating: 5,
    text: 'In real estate, every minute counts. DigiSurf\'s chatbot now responds to every lead in under 30 seconds — even at midnight. We\'ve tripled our lead-to-inspection conversion and my agents can focus on closing instead of chasing enquiries.',
    result: '3.4× more leads converted',
    color: '#7B5FFF',
  },
  {
    name: 'Marcus Webb',
    role: 'Director',
    company: 'Webb & Associates Accounting',
    location: 'Perth, WA',
    avatar: 'MW',
    rating: 5,
    text: 'Client onboarding used to take 3 hours of admin per client. DigiSurf automated our whole intake — forms, document collection, engagement letters. Now it takes 20 minutes and our team hates Mondays 40% less.',
    result: '3hrs saved per new client',
    color: '#00D4FF',
  },
  {
    name: 'Tash Nguyen',
    role: 'Founder',
    company: 'TN Online Coaching',
    location: 'Sydney, NSW',
    avatar: 'TN',
    rating: 5,
    text: 'As a solo coach, I couldn\'t keep up with DMs, emails, and creating content. DigiSurf set up an AI that replies to enquiries, posts to my Instagram daily, and sends my email newsletter. I\'ve signed 8 new clients this month alone.',
    result: '8 new clients in one month',
    color: '#3B7BFF',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section id="testimonials" className="py-24 bg-[#0D1526] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-[rgba(0,212,255,0.03)] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="badge badge-cyan mb-6">
            <Star className="w-3 h-3 fill-current" />
            4.9★ on Google
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            What Our Clients<br />
            <span className="text-gradient">Actually Say</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg text-[#7A8FA6]">
            Real businesses. Real results. Verified Google reviews from Australian clients.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="border-gradient mb-6">
            <div className="glass-card rounded-2xl p-8 md:p-12 relative">
              <Quote className="absolute top-8 left-8 w-10 h-10 text-white/[0.05]" />

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFB800] text-[#FFB800]" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-[#F0F6FF] leading-relaxed mb-8 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold text-[#050B18]"
                    style={{ background: `linear-gradient(135deg, ${t.color}, #050B18aa)`, color: '#fff' }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-white">{t.name}</p>
                    <p className="text-sm text-[#7A8FA6]">{t.role}, {t.company}</p>
                    <p className="text-xs text-[#4A6080]">{t.location}</p>
                  </div>
                </div>

                <div
                  className="px-4 py-2 rounded-xl text-sm font-semibold border"
                  style={{ color: t.color, background: `${t.color}10`, borderColor: `${t.color}20` }}
                >
                  {t.result}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-xl glass flex items-center justify-center text-[#7A8FA6] hover:text-white hover:border-[rgba(0,212,255,0.3)] transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 h-2 bg-[#00D4FF]'
                      : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-xl glass flex items-center justify-center text-[#7A8FA6] hover:text-white hover:border-[rgba(0,212,255,0.3)] transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Avatar strip */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setCurrent(i)}
              title={t.name}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                i === current
                  ? 'ring-2 ring-[#00D4FF] ring-offset-2 ring-offset-[#0D1526] scale-110'
                  : 'opacity-50 hover:opacity-100'
              }`}
              style={{
                background: `linear-gradient(135deg, ${t.color}80, ${t.color}30)`,
                color: '#fff',
              }}
            >
              {t.avatar}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
