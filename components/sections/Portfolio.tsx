'use client'

import { useState, useRef, useEffect } from 'react'
import { useTheme } from 'next-themes'
import {
  FileText, Video, MessageSquare, Phone, PhoneCall,
  ChevronLeft, ChevronRight, Check,
} from 'lucide-react'

// ── Mockup Components ──────────────────────────────────────────────────────

function TranscriptionMockup({ isLight }: { isLight: boolean }) {
  const bg = isLight ? '#f0f4ff' : '#080e1c'
  const panelL = isLight ? '#f8faff' : '#0b1424'
  const panelR = isLight ? '#ffffff' : '#0d1526'
  const border = isLight ? 'rgba(13,107,202,0.12)' : 'rgba(255,255,255,0.07)'
  const textMuted = isLight ? '#3d5470' : '#4A6080'
  const textNode = isLight ? '#0a1f6e' : '#F0F6FF'
  const lineColor = isLight ? 'rgba(61,84,112,0.25)' : 'rgba(255,255,255,0.12)'

  return (
    <div
      className="rounded-xl overflow-hidden w-full"
      style={{ background: bg, border: `1px solid ${border}`, minHeight: 180 }}
    >
      <div className="flex h-44">
        {/* Left: handwritten doc */}
        <div
          className="flex-1 p-3 flex flex-col gap-1.5 relative"
          style={{ background: panelL, borderRight: `1px solid ${border}` }}
        >
          <div className="text-[9px] font-bold uppercase tracking-widest mb-1" style={{ color: textMuted }}>
            Handwritten Doc
          </div>
          {/* Wavy lines representing handwriting */}
          {[
            'M2,8 Q8,5 14,8 Q20,11 26,8 Q32,5 38,8',
            'M2,8 Q10,4 18,8 Q26,12 34,8 Q40,4 46,8',
            'M2,8 Q7,6 14,8 Q22,10 30,8 Q36,6 44,8',
            'M2,8 Q9,5 17,8 Q25,11 33,8 Q40,5 46,8',
            'M2,8 Q8,6 16,8 Q24,10 32,8 Q39,6 45,8',
            'M2,8 Q11,4 19,8 Q27,12 35,8 Q42,4 48,8',
            'M2,8 Q8,5 14,8',
          ].map((d, i) => (
            <svg key={i} width="100%" height="14" viewBox="0 0 50 16" className="opacity-70">
              <path d={d} stroke={lineColor} strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
          ))}
          <div
            className="absolute bottom-2 left-3 text-[9px] px-2 py-0.5 rounded-full font-semibold"
            style={{ background: 'rgba(0,212,255,0.1)', color: '#00D4FF', border: '1px solid rgba(0,212,255,0.2)' }}
          >
            1 of 1,700
          </div>
        </div>

        {/* Middle: arrow */}
        <div className="flex flex-col items-center justify-center px-2 gap-1 shrink-0" style={{ background: bg }}>
          <div className="text-[8px] font-bold" style={{ color: '#00D4FF' }}>AI</div>
          <svg width="28" height="16" viewBox="0 0 28 16">
            <path d="M2,8 L22,8 M16,3 L22,8 L16,13" stroke="#00D4FF" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="text-[7px] font-semibold text-center" style={{ color: textMuted }}>1,700×</div>
        </div>

        {/* Right: family tree */}
        <div className="flex-1 p-3" style={{ background: panelR }}>
          <div className="text-[9px] font-bold uppercase tracking-widest mb-2" style={{ color: textMuted }}>
            Family Tree
          </div>
          <div className="flex flex-col items-center gap-0.5">
            {/* Root node */}
            <div
              className="px-2 py-0.5 rounded text-[8px] font-semibold"
              style={{ background: 'rgba(0,212,255,0.12)', color: '#00D4FF', border: '1px solid rgba(0,212,255,0.25)' }}
            >
              John Smith · 1892
            </div>
            {/* Connector line */}
            <div style={{ width: 1, height: 8, background: border }} />
            {/* Branch row */}
            <div className="flex gap-4 items-start">
              <div className="flex flex-col items-center gap-0.5">
                <div
                  className="px-2 py-0.5 rounded text-[8px] font-semibold"
                  style={{ background: 'rgba(59,123,255,0.1)', color: '#3B7BFF', border: '1px solid rgba(59,123,255,0.2)' }}
                >
                  Mary S. · 1895
                </div>
                <div style={{ width: 1, height: 6, background: border }} />
                <div
                  className="px-1.5 py-0.5 rounded text-[7px]"
                  style={{ background: 'rgba(123,95,255,0.1)', color: '#7B5FFF', border: '1px solid rgba(123,95,255,0.2)' }}
                >
                  Ann · 1918
                </div>
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <div
                  className="px-2 py-0.5 rounded text-[8px] font-semibold"
                  style={{ background: 'rgba(59,123,255,0.1)', color: '#3B7BFF', border: '1px solid rgba(59,123,255,0.2)' }}
                >
                  James S. · 1898
                </div>
                <div style={{ width: 1, height: 6, background: border }} />
                <div
                  className="px-1.5 py-0.5 rounded text-[7px]"
                  style={{ background: 'rgba(123,95,255,0.1)', color: '#7B5FFF', border: '1px solid rgba(123,95,255,0.2)' }}
                >
                  Tom · 1922
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SocialMediaMockup({ isLight }: { isLight: boolean }) {
  const bg = isLight ? '#f0f4ff' : '#080e1c'
  const cellBg = isLight ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.03)'
  const border = isLight ? 'rgba(13,107,202,0.1)' : 'rgba(255,255,255,0.06)'
  const textMuted = isLight ? '#3d5470' : '#4A6080'
  const textLabel = isLight ? '#0a1f6e' : '#F0F6FF'
  const footerBg = isLight ? 'rgba(13,107,202,0.05)' : 'rgba(0,212,255,0.04)'

  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
  const platforms = [
    { name: 'YT', color: '#FF4444', posts: [0, 2, 4] },
    { name: 'IG', color: '#E1306C', posts: [1, 3, 5, 6] },
    { name: 'TT', color: isLight ? '#2d2d2d' : '#cccccc', posts: [0, 1, 3, 6] },
  ]

  return (
    <div
      className="rounded-xl overflow-hidden w-full"
      style={{ background: bg, border: `1px solid ${border}`, minHeight: 180 }}
    >
      <div className="p-3">
        <div className="text-[9px] font-bold uppercase tracking-widest mb-2" style={{ color: textMuted }}>
          Content Calendar — This Week
        </div>
        {/* Day headers */}
        <div className="grid grid-cols-8 gap-0.5 mb-0.5">
          <div />
          {days.map((d, i) => (
            <div key={i} className="text-center text-[8px] font-bold py-0.5 rounded" style={{ color: textLabel, background: cellBg }}>
              {d}
            </div>
          ))}
        </div>
        {/* Platform rows */}
        {platforms.map((p) => (
          <div key={p.name} className="grid grid-cols-8 gap-0.5 mb-0.5">
            <div
              className="flex items-center justify-center rounded text-[8px] font-bold py-1"
              style={{ background: p.color + '22', color: p.color, border: `1px solid ${p.color}44` }}
            >
              {p.name}
            </div>
            {days.map((_, di) => (
              <div
                key={di}
                className="rounded py-1"
                style={{
                  background: p.posts.includes(di)
                    ? p.color + '30'
                    : cellBg,
                  border: p.posts.includes(di)
                    ? `1px solid ${p.color}55`
                    : `1px solid ${border}`,
                  minHeight: 22,
                }}
              />
            ))}
          </div>
        ))}
        {/* Status bar */}
        <div
          className="mt-2 rounded-lg px-3 py-1.5 flex items-center justify-between"
          style={{ background: footerBg, border: `1px solid ${border}` }}
        >
          <span className="text-[8px]" style={{ color: '#4A6080' }}>
            <span style={{ color: '#22c55e', fontWeight: 700 }}>Published 12</span>
            {' · '}
            <span style={{ color: '#3B7BFF', fontWeight: 700 }}>Scheduled 9</span>
          </span>
          <span className="text-[8px] font-semibold" style={{ color: '#00D4FF' }}>
            Auto-posting ✓
          </span>
        </div>
      </div>
    </div>
  )
}

function ChatbotMockup({ isLight }: { isLight: boolean }) {
  const bg = isLight ? '#f0f4ff' : '#080e1c'
  const widgetBg = isLight ? '#ffffff' : '#0b1424'
  const border = isLight ? 'rgba(13,107,202,0.15)' : 'rgba(255,255,255,0.08)'
  const headerBg = isLight ? 'linear-gradient(135deg,#0d6bca,#3B7BFF)' : 'linear-gradient(135deg,#00D4FF,#3B7BFF)'
  const msgBotBg = isLight ? 'rgba(13,107,202,0.08)' : 'rgba(255,255,255,0.05)'
  const msgUserBg = isLight ? '#0d6bca' : '#3B7BFF'
  const textBot = isLight ? '#0a1f6e' : '#F0F6FF'
  const inputBg = isLight ? '#f8faff' : '#0d1526'
  const inputBorder = isLight ? 'rgba(13,107,202,0.15)' : 'rgba(255,255,255,0.06)'

  const messages = [
    { from: 'bot', text: "Hi! I'm DigiSurf's AI. How can I help you today?" },
    { from: 'user', text: "I'd like to book a consultation" },
    { from: 'bot', text: 'Great! I have Tuesday 2pm or Thursday 10am available. Which suits you?' },
    { from: 'user', text: 'Thursday 10am please' },
    { from: 'bot', text: '✅ Booked! Confirmation sent to your email.' },
  ]

  return (
    <div
      className="rounded-xl overflow-hidden w-full max-w-xs mx-auto"
      style={{ background: bg, border: `1px solid ${border}` }}
    >
      {/* Header */}
      <div className="px-3 py-2 flex items-center gap-2" style={{ background: headerBg }}>
        <span className="text-base">🤖</span>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-bold text-white leading-tight">DigiSurf AI Assistant</div>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[8px] text-white/80 font-medium">Online 24/7</span>
        </div>
        <span
          className="text-[7px] font-semibold px-1.5 py-0.5 rounded-full ml-1"
          style={{ background: 'rgba(255,255,255,0.2)', color: '#fff' }}
        >
          Sample
        </span>
      </div>
      {/* Messages */}
      <div className="p-2 flex flex-col gap-1.5" style={{ background: widgetBg }}>
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className="text-[9px] leading-relaxed rounded-xl px-2.5 py-1.5 max-w-[80%]"
              style={{
                background: m.from === 'bot' ? msgBotBg : msgUserBg,
                color: m.from === 'bot' ? textBot : '#fff',
                borderBottomLeftRadius: m.from === 'bot' ? 4 : undefined,
                borderBottomRightRadius: m.from === 'user' ? 4 : undefined,
              }}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
      {/* Input bar */}
      <div
        className="flex items-center gap-1.5 px-2 py-1.5"
        style={{ background: inputBg, borderTop: `1px solid ${inputBorder}` }}
      >
        <div
          className="flex-1 rounded-lg px-2 py-1 text-[8px]"
          style={{ background: widgetBg, border: `1px solid ${inputBorder}`, color: isLight ? '#3d5470' : '#4A6080' }}
        >
          Type a message…
        </div>
        <div
          className="w-6 h-6 rounded-lg flex items-center justify-center text-[10px] shrink-0"
          style={{ background: 'linear-gradient(135deg,#00D4FF,#3B7BFF)' }}
        >
          ↑
        </div>
      </div>
    </div>
  )
}

function VoiceReceptionistMockup({ isLight }: { isLight: boolean }) {
  const bg = isLight ? '#f0f4ff' : '#080e1c'
  const cardBg = isLight ? '#ffffff' : '#0b1424'
  const border = isLight ? 'rgba(13,107,202,0.15)' : 'rgba(255,255,255,0.08)'
  const textPrimary = isLight ? '#0a1f6e' : '#F0F6FF'
  const textMuted = isLight ? '#3d5470' : '#4A6080'
  const phoneBg = isLight ? 'rgba(0,160,200,0.1)' : 'rgba(0,212,255,0.08)'
  const phoneBorder = isLight ? 'rgba(0,160,200,0.3)' : 'rgba(0,212,255,0.2)'
  const quoteText = isLight ? '#3d5470' : '#7A8FA6'

  return (
    <div
      className="rounded-xl overflow-hidden w-full max-w-xs mx-auto p-4 flex flex-col gap-3"
      style={{ background: bg, border: `1px solid ${border}` }}
    >
      {/* Call card */}
      <div
        className="rounded-xl p-4 flex flex-col items-center gap-2"
        style={{ background: cardBg, border: `1px solid ${border}` }}
      >
        {/* Phone icon */}
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center"
          style={{ background: phoneBg, border: `2px solid ${phoneBorder}` }}
        >
          <Phone className="w-5 h-5" style={{ color: '#00D4FF' }} />
        </div>
        <div className="text-center">
          <div className="text-[11px] font-bold" style={{ color: textMuted }}>Incoming Call</div>
          <div className="text-[13px] font-bold tracking-wide mt-0.5" style={{ color: textPrimary }}>
            +61 4XX XXX XXX
          </div>
        </div>
        {/* Live badge */}
        <div
          className="flex items-center gap-1.5 px-3 py-1 rounded-full"
          style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)' }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[9px] font-bold text-green-400">Live</span>
        </div>
        {/* AI quote */}
        <p
          className="text-center text-[9px] leading-relaxed italic px-2 mt-1"
          style={{ color: quoteText }}
        >
          "Hi, thanks for calling DigiSurf. I'm the AI receptionist — how can I help you today?"
        </p>
      </div>
      {/* Status pills */}
      <div className="flex gap-2 justify-center flex-wrap">
        <span
          className="px-2.5 py-1 rounded-full text-[9px] font-semibold"
          style={{ background: 'rgba(34,197,94,0.1)', color: '#22c55e', border: '1px solid rgba(34,197,94,0.25)' }}
        >
          ✅ Appointment Booked
        </span>
        <span
          className="px-2.5 py-1 rounded-full text-[9px] font-semibold"
          style={{ background: 'rgba(59,123,255,0.1)', color: '#3B7BFF', border: '1px solid rgba(59,123,255,0.25)' }}
        >
          📱 Confirmation SMS Sent
        </span>
      </div>
    </div>
  )
}

function VoiceAgentMockup({ isLight }: { isLight: boolean }) {
  const bg = isLight ? '#f0f4ff' : '#080e1c'
  const cardBg = isLight ? '#ffffff' : '#0b1424'
  const rowBg = isLight ? '#f8faff' : '#0d1526'
  const border = isLight ? 'rgba(13,107,202,0.12)' : 'rgba(255,255,255,0.07)'
  const textPrimary = isLight ? '#0a1f6e' : '#F0F6FF'
  const textMuted = isLight ? '#3d5470' : '#4A6080'
  const statLabelColor = isLight ? '#3d5470' : '#7A8FA6'

  const stats = [
    { label: 'Dialled', value: '47' },
    { label: 'Reached', value: '31' },
    { label: 'Booked', value: '12' },
  ]

  const calls = [
    { initial: 'S', name: 'Sarah M.', badge: '🔥 Hot Lead', badgeBg: 'rgba(239,68,68,0.1)', badgeColor: '#ef4444', badgeBorder: 'rgba(239,68,68,0.25)' },
    { initial: 'J', name: 'James T.', badge: '📅 Booked', badgeBg: 'rgba(34,197,94,0.1)', badgeColor: '#22c55e', badgeBorder: 'rgba(34,197,94,0.25)' },
    { initial: 'P', name: 'Priya K.', badge: '💬 Voicemail', badgeBg: 'rgba(59,123,255,0.1)', badgeColor: '#3B7BFF', badgeBorder: 'rgba(59,123,255,0.25)' },
  ]

  return (
    <div
      className="rounded-xl overflow-hidden w-full"
      style={{ background: bg, border: `1px solid ${border}` }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-3 py-2"
        style={{ background: cardBg, borderBottom: `1px solid ${border}` }}
      >
        <span className="text-[10px] font-bold" style={{ color: textPrimary }}>Outbound Campaign</span>
        <div
          className="flex items-center gap-1 px-2 py-0.5 rounded-full"
          style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)' }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[8px] font-semibold text-green-400">Running</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="text-center py-2" style={{ borderRight: `1px solid ${border}` }}>
            <div className="text-base font-bold" style={{ color: '#00D4FF' }}>{s.value}</div>
            <div className="text-[8px]" style={{ color: statLabelColor }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Call list */}
      <div className="p-2 flex flex-col gap-1">
        {calls.map((c) => (
          <div
            key={c.name}
            className="flex items-center gap-2 px-2 py-1.5 rounded-lg"
            style={{ background: rowBg, border: `1px solid ${border}` }}
          >
            <div
              className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0"
              style={{ background: 'rgba(59,123,255,0.15)', color: '#3B7BFF' }}
            >
              {c.initial}
            </div>
            <span className="text-[9px] font-medium flex-1" style={{ color: textPrimary }}>{c.name}</span>
            <span
              className="text-[8px] font-semibold px-2 py-0.5 rounded-full"
              style={{ background: c.badgeBg, color: c.badgeColor, border: `1px solid ${c.badgeBorder}` }}
            >
              {c.badge}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── MockupVisual dispatcher ────────────────────────────────────────────────

function MockupVisual({ index, isLight }: { index: number; isLight: boolean }) {
  switch (index) {
    case 0: return <TranscriptionMockup isLight={isLight} />
    case 1: return <SocialMediaMockup isLight={isLight} />
    case 2: return <ChatbotMockup isLight={isLight} />
    case 3: return <VoiceReceptionistMockup isLight={isLight} />
    case 4: return <VoiceAgentMockup isLight={isLight} />
    default: return null
  }
}

// ── Portfolio data ─────────────────────────────────────────────────────────

const projects = [
  {
    badge: 'AI Transcription',
    badgeColor: 'cyan' as const,
    Icon: FileText,
    title: '1,700 Handwritten Documents → Digital Family History Archive',
    description:
      'Digitised and transcribed over 1,700 handwritten letters, notes, and historical records spanning multiple generations. AI extracted names, dates, locations, and relationships to produce a fully structured, searchable family history tree.',
    outcome:
      'A lifetime of family history — digitised, organised, and searchable in weeks.',
    tags: ['GPT-4 Vision', 'Python', 'OCR', 'Data Structuring'],
  },
  {
    badge: 'Social Media Automation',
    badgeColor: 'blue' as const,
    Icon: Video,
    title: 'Automated Multi-Platform Video Publishing',
    description:
      'Built an AI pipeline that takes long-form video, clips it into short-form segments, adds auto-captions, and auto-publishes to YouTube, Instagram Reels, and TikTok on a set schedule — no manual work needed.',
    outcome:
      'One upload triggers everything. Fully automated cross-platform distribution.',
    tags: ['n8n', 'YouTube API', 'Meta API', 'TikTok API', 'FFmpeg'],
  },
  {
    badge: 'AI Chatbot',
    badgeColor: 'purple' as const,
    Icon: MessageSquare,
    title: 'Custom Website Chatbot — 24/7 Lead Capture',
    description:
      'Built and trained a custom AI chatbot on client-specific knowledge. Handles FAQs, qualifies leads, captures contact details, and books appointments — embedded directly into any website. Sample available on request.',
    outcome:
      'Captures leads and books appointments around the clock, hands-free.',
    tags: ['OpenAI', 'Custom Training', 'Webhook', 'CRM Integration'],
  },
  {
    badge: 'AI Voice Receptionist',
    badgeColor: 'cyan' as const,
    Icon: Phone,
    title: '24/7 AI Phone Receptionist',
    description:
      'Deployed an AI voice receptionist that answers inbound calls, greets callers by business name, answers FAQs, and books appointments directly into the calendar — sounding natural and professional at all hours.',
    outcome:
      'Zero missed calls. Appointments booked automatically, day or night.',
    tags: ['Vapi', 'ElevenLabs', 'Cal.com', 'Twilio'],
  },
  {
    badge: 'AI Voice Agent',
    badgeColor: 'blue' as const,
    Icon: PhoneCall,
    title: 'Inbound & Outbound AI Voice Campaigns',
    description:
      'Built AI voice agents for both inbound call routing and qualification, and outbound follow-up campaigns. Handles objections, captures lead intent, and escalates hot leads to a human rep in real time.',
    outcome:
      'Consistent, scalable outreach at a fraction of the cost of a call centre.',
    tags: ['Vapi', 'Retell AI', 'CRM Integration', 'Lead Scoring'],
  },
]

const badgeClasses: Record<'cyan' | 'blue' | 'purple', string> = {
  cyan: 'badge badge-cyan',
  blue: 'badge badge-blue',
  purple: 'badge',
}

const badgeInlineStyles: Record<'cyan' | 'blue' | 'purple', React.CSSProperties> = {
  cyan: {},
  blue: {},
  purple: {
    background: 'rgba(123,95,255,0.1)',
    border: '1px solid rgba(123,95,255,0.25)',
    color: '#7B5FFF',
  },
}

const iconContainerStyles: Record<'cyan' | 'blue' | 'purple', React.CSSProperties> = {
  cyan: { background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.2)', color: '#00D4FF' },
  blue: { background: 'rgba(59,123,255,0.1)', border: '1px solid rgba(59,123,255,0.2)', color: '#3B7BFF' },
  purple: { background: 'rgba(123,95,255,0.1)', border: '1px solid rgba(123,95,255,0.2)', color: '#7B5FFF' },
}

// ── Portfolio Section ──────────────────────────────────────────────────────

export function Portfolio() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const touchStartX = useRef<number>(0)
  const touchEndX = useRef<number>(0)

  useEffect(() => { setMounted(true) }, [])

  const isLight = mounted && theme === 'light'

  const prev = () => setCurrent((c) => (c === 0 ? projects.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === projects.length - 1 ? 0 : c + 1))

  // Auto-advance every 5s, pause on hover/touch
  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [paused, current])

  const handleTouchStart = (e: React.TouchEvent) => {
    setPaused(true)
    touchStartX.current = e.changedTouches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    const delta = touchStartX.current - touchEndX.current
    if (Math.abs(delta) > 50) {
      if (delta > 0) next()
      else prev()
    }
  }

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-30" />
      {/* Spotlight glow — highlight this as key section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.07) 0%, rgba(59,123,255,0.05) 40%, transparent 70%)' }}
      />
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(59,123,255,0.08) 0%, transparent 70%)' }}
      />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom, rgba(0,212,255,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="badge badge-cyan mb-6">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Our Work.{' '}
            <span className="text-gradient">Real Results.</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg text-[#7A8FA6]">
            Real projects. Real AI. Built by DigiSurf.
          </p>
        </div>

        {/* Carousel wrapper */}
        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Overflow container */}
          <div
            className="overflow-hidden rounded-2xl"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex"
              style={{
                transform: `translateX(-${current * 100}%)`,
                transition: 'transform 500ms ease-in-out',
              }}
            >
              {projects.map((project, i) => {
                const { badge, badgeColor, Icon, title, description, outcome, tags } = project
                return (
                  <div key={i} className="min-w-full">
                    <div className="max-w-3xl mx-auto px-4">
                      <div className="glass-card rounded-2xl overflow-hidden">
                        {/* Mockup visual */}
                        <div className="p-4 pb-0">
                          <MockupVisual index={i} isLight={isLight} />
                        </div>
                        {/* Content */}
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <span
                              className={badgeClasses[badgeColor]}
                              style={badgeInlineStyles[badgeColor]}
                            >
                              {badge}
                            </span>
                            <div
                              className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                              style={iconContainerStyles[badgeColor]}
                            >
                              <Icon className="w-4 h-4" />
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                          <p className="text-[#7A8FA6] text-sm leading-relaxed mb-4">{description}</p>
                          <div className="flex items-start gap-2 mb-5 rounded-xl p-3 bg-[rgba(0,212,255,0.06)] border border-[rgba(0,212,255,0.1)]">
                            <Check className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                            <p className="text-sm text-[#F0F6FF]">{outcome}</p>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-3 py-1 rounded-full font-medium"
                                style={{
                                  background: isLight
                                    ? 'rgba(13,107,202,0.06)'
                                    : 'rgba(255,255,255,0.04)',
                                  border: isLight
                                    ? '1px solid rgba(13,107,202,0.15)'
                                    : '1px solid rgba(255,255,255,0.08)',
                                  color: isLight ? '#3d5470' : '#7A8FA6',
                                }}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>

        {/* Prev / dot indicators / next — always visible */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => { prev(); setPaused(true) }}
            aria-label="Previous project"
            className="w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-200 active:scale-95"
            style={{
              background: isLight ? 'rgba(13,107,202,0.08)' : 'rgba(255,255,255,0.06)',
              border: isLight ? '1px solid rgba(13,107,202,0.2)' : '1px solid rgba(255,255,255,0.1)',
              color: isLight ? '#0a1f6e' : '#F0F6FF',
            }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => { setCurrent(i); setPaused(true) }}
                aria-label={`Go to project ${i + 1}`}
                className="h-2 rounded-full transition-all duration-300 min-w-[8px]"
                style={{
                  width: i === current ? 24 : 8,
                  background: i === current
                    ? '#00D4FF'
                    : isLight
                      ? 'rgba(13,107,202,0.2)'
                      : 'rgba(255,255,255,0.15)',
                }}
              />
            ))}
          </div>

          <button
            onClick={() => { next(); setPaused(true) }}
            aria-label="Next project"
            className="w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-200 active:scale-95"
            style={{
              background: isLight ? 'rgba(13,107,202,0.08)' : 'rgba(255,255,255,0.06)',
              border: isLight ? '1px solid rgba(13,107,202,0.2)' : '1px solid rgba(255,255,255,0.1)',
              color: isLight ? '#0a1f6e' : '#F0F6FF',
            }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>


      </div>
    </section>
  )
}
