'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Check } from 'lucide-react'
import { useTheme } from 'next-themes'

interface Story {
  emoji: string
  business: string
  color: 'cyan' | 'blue' | 'purple'
  story: string
  automations: string[]
  metrics: { value: string; label: string }[]
}

const stories: Story[] = [
  {
    emoji: '🏋️',
    business: 'Fitness Studio Owner',
    color: 'purple',
    story: "Between back-to-back training sessions, Sarah couldn't answer her phone. Leads went to voicemail and signed up with the gym down the road. By Friday she'd missed 12 calls and spent her evenings manually sending reminder texts.",
    automations: [
      'AI Voice Receptionist — answers every call, books sessions instantly',
      'Automated reminders — reduces no-shows before they happen',
      'Website chatbot — captures new leads and enquiries 24/7',
    ],
    metrics: [
      { value: '0', label: 'Missed Calls' },
      { value: '12hrs', label: 'Saved/Week' },
      { value: '30%+', label: 'More Bookings' },
    ],
  },
  {
    emoji: '🩺',
    business: 'GP / Medical Clinic',
    color: 'cyan',
    story: "Dr. Chen's clinic had three admin staff drowning in calls, paperwork, and appointment chasing. No-shows were costing $4,000 a month. The team spent 4+ hours daily on tasks that simply didn't need a human.",
    automations: [
      'AI Receptionist — handles calls, books and reschedules appointments',
      'Automated reminders — SMS confirmations slash no-shows',
      'Document automation — intake forms, referrals, and reports handled instantly',
    ],
    metrics: [
      { value: '20hrs', label: 'Freed/Week' },
      { value: '40%', label: 'Fewer No-Shows' },
      { value: '$48K', label: 'Admin Saved/Yr' },
    ],
  },
  {
    emoji: '🏠',
    business: 'Real Estate Agent',
    color: 'blue',
    story: "Mark received 40+ enquiries a week from buyers and renters. He was on inspections all day and responding 4–6 hours later. By then, half had already engaged with another agent who replied in minutes.",
    automations: [
      'AI Website Chatbot — instant response to every enquiry, day or night',
      'Automated follow-up — keeps leads warm without lifting a finger',
      'Appointment booking — inspections scheduled automatically',
    ],
    metrics: [
      { value: '28sec', label: 'Response Time' },
      { value: '3×', label: 'Leads Converted' },
      { value: '0', label: 'Cold Leads Lost' },
    ],
  },
  {
    emoji: '🔧',
    business: 'Tradie (Plumber / Electrician)',
    color: 'cyan',
    story: "Jake couldn't answer his phone mid-job. Every missed call was a $600–$1,200 booking going to whoever picked up first. He estimated losing 3–5 jobs a week simply because no one answered.",
    automations: [
      'AI Voice Receptionist — answers every call, quotes and books jobs',
      'Calendar integration — schedules directly into ServiceM8 or Simpro',
      'Automated follow-up — job confirmations and quotes sent automatically',
    ],
    metrics: [
      { value: '0', label: 'Missed Bookings' },
      { value: '1 job', label: 'Pays for Itself' },
      { value: '5hrs', label: 'Saved/Week' },
    ],
  },
  {
    emoji: '📊',
    business: 'Accountant / Professional Services',
    color: 'blue',
    story: "Every new client required 3 hours of onboarding — intake calls, document collection, chasing signatures, manual data entry. With 40 new clients a year, that's 120 hours of unbillable admin every single year.",
    automations: [
      'Intake automation — smart forms collect everything upfront',
      'Document automation — contracts and engagement letters sent and signed automatically',
      'CRM integration — client data flows in without manual entry',
    ],
    metrics: [
      { value: '3hrs', label: 'Saved/Client' },
      { value: '120hrs', label: 'Recovered/Year' },
      { value: '100%', label: 'Streamlined Process' },
    ],
  },
  {
    emoji: '💻',
    business: 'Online Coach / Solo Business',
    color: 'purple',
    story: "Tash ran her coaching business solo. She was answering the same DMs 20 times a day, manually onboarding each new client, and trying to stay consistent on social media. She was working in her business, not on it.",
    automations: [
      'AI Chatbot — handles DMs, FAQs, and lead qualification automatically',
      'Client onboarding — welcome sequences, contracts, and intake fully automated',
      'Social media automation — content written, scheduled, and posted without her',
    ],
    metrics: [
      { value: '15hrs', label: 'Freed/Week' },
      { value: 'Daily', label: 'Content Posted' },
      { value: '100%', label: 'Hands-Free Onboarding' },
    ],
  },
]

const colorMap = {
  cyan: {
    badge: 'bg-[rgba(0,212,255,0.1)] text-[#00D4FF] border-[rgba(0,212,255,0.2)]',
    badgeLight: 'bg-[rgba(0,160,200,0.1)] text-[#006f88] border-[rgba(0,160,200,0.25)]',
    metric: 'bg-[rgba(0,212,255,0.07)] border-[rgba(0,212,255,0.15)]',
    metricLight: 'bg-[rgba(0,160,200,0.06)] border-[rgba(0,160,200,0.2)]',
    val: 'text-[#00D4FF]',
    valLight: 'text-[#006f88]',
    check: 'text-[#00D4FF]',
    checkLight: 'text-[#0087a0]',
    label: 'text-[#0d6bca]',
    labelDark: 'text-[#00D4FF]',
    dot: 'bg-[#00D4FF]',
    dotLight: 'bg-[#0d6bca]',
  },
  blue: {
    badge: 'bg-[rgba(59,123,255,0.1)] text-[#3B7BFF] border-[rgba(59,123,255,0.2)]',
    badgeLight: 'bg-[rgba(59,123,255,0.1)] text-[#2b5fd9] border-[rgba(59,123,255,0.25)]',
    metric: 'bg-[rgba(59,123,255,0.07)] border-[rgba(59,123,255,0.15)]',
    metricLight: 'bg-[rgba(59,123,255,0.06)] border-[rgba(59,123,255,0.2)]',
    val: 'text-[#3B7BFF]',
    valLight: 'text-[#2b5fd9]',
    check: 'text-[#3B7BFF]',
    checkLight: 'text-[#2b5fd9]',
    label: 'text-[#0d6bca]',
    labelDark: 'text-[#3B7BFF]',
    dot: 'bg-[#3B7BFF]',
    dotLight: 'bg-[#2b5fd9]',
  },
  purple: {
    badge: 'bg-[rgba(123,95,255,0.1)] text-[#7B5FFF] border-[rgba(123,95,255,0.2)]',
    badgeLight: 'bg-[rgba(123,95,255,0.1)] text-[#6347e0] border-[rgba(123,95,255,0.25)]',
    metric: 'bg-[rgba(123,95,255,0.07)] border-[rgba(123,95,255,0.15)]',
    metricLight: 'bg-[rgba(123,95,255,0.06)] border-[rgba(123,95,255,0.2)]',
    val: 'text-[#7B5FFF]',
    valLight: 'text-[#6347e0]',
    check: 'text-[#7B5FFF]',
    checkLight: 'text-[#6347e0]',
    label: 'text-[#6347e0]',
    labelDark: 'text-[#7B5FFF]',
    dot: 'bg-[#7B5FFF]',
    dotLight: 'bg-[#6347e0]',
  },
}

export function SocialProof() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  useEffect(() => { setMounted(true) }, [])
  const isLight = mounted && theme === 'light'

  const prev = () => setCurrent(c => (c - 1 + stories.length) % stories.length)
  const next = () => setCurrent(c => (c + 1) % stories.length)

  // Auto-advance every 3.5s
  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 3500)
    return () => clearInterval(t)
  }, [paused, current])

  const onTouchStart = (e: React.TouchEvent) => { setPaused(true); touchStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    const delta = touchStartX.current - touchEndX.current
    if (Math.abs(delta) > 50) delta > 0 ? next() : prev()
  }

  return (
    <section id="who-we-help" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-25" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="badge badge-cyan mb-5">Who We Help</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Does This Sound Like You?
          </h2>
          <p className="max-w-xl mx-auto text-lg text-[#7A8FA6]">
            See how AI automation transforms real businesses — and what it could do for yours.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>

          {/* Slides */}
          <div
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {stories.map((story, i) => {
                const c = colorMap[story.color]
                return (
                  <div key={i} className="min-w-full sm:px-4 md:px-8">
                    <div className="max-w-2xl mx-auto">
                      <div className="glass-card rounded-2xl p-5 sm:p-6 md:p-8">

                        {/* Business type header */}
                        <div className="flex items-center gap-3 mb-5">
                          <span className="text-3xl leading-none">{story.emoji}</span>
                          <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border ${isLight ? c.badgeLight : c.badge}`}>
                            {story.business}
                          </span>
                        </div>

                        {/* The story — before state */}
                        <div className={`rounded-xl p-4 mb-5 ${isLight ? 'bg-[rgba(13,107,202,0.04)] border border-[rgba(13,107,202,0.08)]' : 'bg-white/[0.025] border border-white/[0.06]'}`}>
                          <p className={`text-sm leading-relaxed italic ${isLight ? 'text-[#3d5470]' : 'text-[#a0b4cc]'}`}>
                            &ldquo;{story.story}&rdquo;
                          </p>
                        </div>

                        {/* How DigiSurf helps */}
                        <div className="mb-6">
                          <p className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${isLight ? c.label : c.labelDark}`}>
                            How DigiSurf fixes this
                          </p>
                          <ul className="flex flex-col gap-2.5">
                            {story.automations.map((a, j) => (
                              <li key={j} className="flex items-start gap-2.5">
                                <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isLight ? c.checkLight : c.check}`} />
                                <span className={`text-sm leading-snug ${isLight ? 'text-[#1a3050]' : 'text-[#e0eaf5]'}`}>{a}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Impact metrics */}
                        <div className="grid grid-cols-3 gap-3">
                          {story.metrics.map((m, j) => (
                            <div key={j} className={`rounded-xl p-3 text-center border ${isLight ? c.metricLight : c.metric}`}>
                              <div className={`text-lg font-bold leading-none mb-1 ${isLight ? c.valLight : c.val}`}>{m.value}</div>
                              <div className={`text-[10px] font-medium leading-tight ${isLight ? 'text-[#3d5470]' : 'text-[#7A8FA6]'}`}>{m.label}</div>
                            </div>
                          ))}
                        </div>

                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Prev / dots / next — always visible, never clipped */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => { prev(); setPaused(true) }}
              aria-label="Previous"
              className={`w-11 h-11 rounded-full flex items-center justify-center glass transition-all duration-200 active:scale-95 ${isLight ? 'text-[#1a2e50]' : 'text-[#7A8FA6] hover:text-white'}`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {stories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setPaused(true) }}
                  aria-label={`Go to ${stories[i].business}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? `w-6 ${isLight ? 'bg-[#0d6bca]' : 'bg-[#00D4FF]'}`
                      : `w-2 ${isLight ? 'bg-[#0d6bca]/25' : 'bg-white/20'}`
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => { next(); setPaused(true) }}
              aria-label="Next"
              className={`w-11 h-11 rounded-full flex items-center justify-center glass transition-all duration-200 active:scale-95 ${isLight ? 'text-[#1a2e50]' : 'text-[#7A8FA6] hover:text-white'}`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Disclaimer */}
        <p className={`text-center text-xs mt-8 ${isLight ? 'text-[#4a6080]/70' : 'text-[#4A6080]/70'}`}>
          * Illustrative scenarios based on industry benchmarks for AI automation.
        </p>

      </div>
    </section>
  )
}
