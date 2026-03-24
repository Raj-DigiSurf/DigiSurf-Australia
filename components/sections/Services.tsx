'use client'

import { useState } from 'react'
import { useTheme } from 'next-themes'
import { useEffect } from 'react'
import { Bot, Phone, PhoneCall, Mic2, Video, Share2, Star, FileText, File, Database, ArrowRight, X, Check } from 'lucide-react'

interface ServiceDetail {
  icon: React.ElementType
  title: string
  description: string
  tag?: string
  color: 'cyan' | 'blue' | 'purple'
  size: 'large' | 'normal'
  fullDescription: string
  features: string[]
  whoFor: string[]
  howItWorks: string[]
}

const services: ServiceDetail[] = [
  {
    icon: Phone,
    title: 'AI Receptionist',
    description: 'Never miss a call. Our AI receptionist answers, qualifies, and books appointments 24/7 — sounding just like a human.',
    tag: 'Most Popular',
    color: 'cyan',
    size: 'large',
    fullDescription: 'Your AI receptionist is always on — answering every inbound call, handling common questions, and booking straight into your calendar. No hold music, no voicemail, no missed leads. It speaks naturally and adapts to your business.',
    features: [
      '24/7 call answering — no holidays, no sick days',
      'Books appointments directly into your calendar',
      'Qualifies callers before escalating to you',
      'Custom greeting and business-specific Q&A',
      'Call summaries sent to your inbox after each call',
      'Seamless handover to a human when needed',
    ],
    whoFor: ['Tradies and sole traders', 'Health clinics and allied health', 'Real estate agents', 'Beauty and wellness salons', 'Any business receiving high call volume'],
    howItWorks: [
      'We set up a phone number or port your existing one',
      'Train the AI on your services, FAQs, and booking rules',
      'Go live — every call is answered from day one',
      'You receive a summary and recording of each interaction',
    ],
  },
  {
    icon: PhoneCall,
    title: 'AI Voice Agent — Inbound',
    description: 'Intelligent inbound call handling. Routes calls, answers FAQs, captures lead info, and escalates when needed.',
    color: 'blue',
    size: 'normal',
    fullDescription: 'A step up from a standard receptionist — this agent understands complex queries, routes calls to the right team member, and captures structured lead data before a human ever picks up.',
    features: [
      'Smart call routing based on enquiry type',
      'Captures name, number, and intent for every call',
      'Answers detailed FAQs about your services',
      'Escalates urgent calls in real time',
      'Integrates with your CRM or helpdesk',
      'Multilingual support available',
    ],
    whoFor: ['Multi-staff businesses', 'Service businesses with multiple departments', 'Businesses handling high enquiry volume'],
    howItWorks: [
      'We map your call flows and routing logic',
      'AI is trained on your FAQs and escalation rules',
      'Calls are handled, routed, and logged automatically',
      'You receive structured lead data from every call',
    ],
  },
  {
    icon: Mic2,
    title: 'AI Voice Agent — Outbound',
    description: 'Automated outreach, follow-up calls, and appointment reminders at scale — without hiring a call centre.',
    color: 'purple',
    size: 'normal',
    fullDescription: 'Proactively reach your contacts at scale. Send appointment reminders, follow up on quotes, re-engage cold leads, or run surveys — all via real voice calls, not robotic blasts.',
    features: [
      'Appointment reminders that dramatically cut no-shows',
      'Follow-up calls after quotes or enquiries',
      'Re-engagement campaigns for dormant leads',
      'Post-service satisfaction check-ins',
      'Custom scripts per campaign or contact type',
      'Results logged to your CRM automatically',
    ],
    whoFor: ['Businesses with high no-show rates', 'Sales teams following up on quotes', 'Clinics, studios, and service providers', 'Any business with a contact database to re-engage'],
    howItWorks: [
      'We build your outbound script and call flow',
      'Upload your contact list or connect your CRM',
      'Campaigns launch at your chosen time and frequency',
      'Results and responses are reported back to you',
    ],
  },
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Custom chatbots for your website, WhatsApp, and Instagram DMs. Capture leads, answer questions, and book appointments 24/7.',
    tag: 'High ROI',
    color: 'cyan',
    size: 'large',
    fullDescription: 'A custom-trained chatbot on your website, DMs, or messaging platform that handles enquiries, qualifies leads, and books appointments — while you sleep. Fast, accurate, and always on-brand.',
    features: [
      'Website chat widget with your branding',
      'WhatsApp and Instagram DM automation',
      'Lead capture with name, email, and intent',
      'Appointment booking with calendar integration',
      'Trained on your services, pricing, and FAQs',
      'Hands off to a human when the query is too complex',
    ],
    whoFor: ['E-commerce and service businesses', 'Coaches and consultants', 'Health and wellness providers', 'Real estate and property managers', 'Any business getting enquiries via website or DMs'],
    howItWorks: [
      'We scrape or ingest your website and service info',
      'Build and train the chatbot on your business',
      'Embed the widget or connect to WhatsApp/Instagram',
      'Monitor conversations and refine over time',
    ],
  },
  {
    icon: Video,
    title: 'AI Video Workflow',
    description: 'Turn long-form videos into short clips, auto-captioned and distributed across TikTok, Reels, and YouTube Shorts.',
    color: 'blue',
    size: 'normal',
    fullDescription: 'Record once, publish everywhere. Our AI workflow takes your long-form video, cuts the best moments, adds captions, resizes for each platform, and schedules posts — all automatically.',
    features: [
      'Auto-clip extraction from podcasts, webinars, or videos',
      'Auto-captions with accurate transcription',
      'Format resizing for TikTok, Reels, Shorts, and LinkedIn',
      'Scheduled publishing across all platforms',
      'Hook and caption generation for each clip',
      'Weekly or monthly content calendar output',
    ],
    whoFor: ['Coaches, consultants, and speakers', 'Business owners recording podcasts or video content', 'Anyone wanting consistent social presence without editing'],
    howItWorks: [
      'You record or upload your long-form content',
      'AI identifies the best clips and moments',
      'Clips are captioned, formatted, and scheduled',
      'Posts go live on your chosen schedule automatically',
    ],
  },
  {
    icon: Share2,
    title: 'AI Social Media Manager',
    description: 'AI writes, schedules, and posts your content across all platforms. Engage your audience on autopilot.',
    color: 'purple',
    size: 'normal',
    fullDescription: 'Stay consistently visible on social media without spending hours on content. Our AI learns your brand voice, writes posts, creates graphics prompts, and publishes on a schedule — every week.',
    features: [
      'AI-written posts in your brand voice',
      'Content calendar planned weeks in advance',
      'Multi-platform publishing (Instagram, Facebook, LinkedIn, TikTok)',
      'Hashtag research and optimisation',
      'Engagement monitoring and response drafts',
      'Monthly performance reporting',
    ],
    whoFor: ['Solo operators and small business owners', 'Coaches and service providers', 'Businesses that know social media matters but have no time for it'],
    howItWorks: [
      'We onboard your brand voice, tone, and content pillars',
      'AI drafts a monthly content calendar for your approval',
      'Posts are scheduled and published automatically',
      'We review performance monthly and adjust strategy',
    ],
  },
  {
    icon: Star,
    title: 'AI Google Review Automation',
    description: 'Automatically request, collect, and respond to Google reviews. Build your reputation without lifting a finger.',
    color: 'cyan',
    size: 'normal',
    fullDescription: 'More 5-star reviews, zero manual chasing. After every job or appointment, your system automatically asks the right people at the right time — and responds to every review with a personalised message.',
    features: [
      'Automated review request SMS and email after each job',
      'Smart timing to maximise positive reviews',
      'AI-written responses to every review (positive and negative)',
      'Negative review detection with alert before it goes public',
      'Review count and rating tracking dashboard',
      'Integrates with your booking or job management system',
    ],
    whoFor: ['Tradies and home services', 'Health and wellness businesses', 'Restaurants and hospitality', 'Any business where reputation matters'],
    howItWorks: [
      'We connect to your booking or CRM system',
      'Review requests are triggered automatically after each job',
      'AI drafts and posts responses within hours',
      'You get a monthly report on rating growth',
    ],
  },
  {
    icon: FileText,
    title: 'AI Content Automation',
    description: 'Blog posts, email sequences, ad copy, and newsletters — all written by AI trained on your brand voice.',
    color: 'blue',
    size: 'normal',
    fullDescription: 'Never stare at a blank page again. We train an AI on your brand, audience, and goals — then it produces blog posts, email sequences, ad copy, and marketing material on demand.',
    features: [
      'Blog posts optimised for SEO',
      'Email nurture sequences for leads and clients',
      'Ad copy for Google and Meta campaigns',
      'Monthly newsletter written and formatted',
      'Landing page copy and headlines',
      'Trained specifically on your brand voice',
    ],
    whoFor: ['Small businesses doing their own marketing', 'Coaches and educators building an audience', 'Businesses running email or paid ad campaigns'],
    howItWorks: [
      'We document your brand voice and content goals',
      'AI is fine-tuned on your existing content (if available)',
      'Content is produced on your requested schedule',
      'You review, approve, and publish — or we handle publishing too',
    ],
  },
  {
    icon: File,
    title: 'AI Document Automation',
    description: 'Contracts, proposals, invoices, and intake forms — automatically generated and sent with zero manual effort.',
    color: 'purple',
    size: 'normal',
    fullDescription: 'Stop recreating the same documents. Our automation generates contracts, proposals, invoices, and intake forms from templates — pre-filled with client data — and sends them for e-signature automatically.',
    features: [
      'Auto-generated contracts and proposals from templates',
      'E-signature collection via DocuSign or equivalent',
      'Client intake forms with automatic data capture',
      'Invoice generation and payment link sending',
      'Document storage and CRM sync',
      'Reminder follow-ups for unsigned documents',
    ],
    whoFor: ['Accountants and professional services', 'Coaches and consultants', 'Property managers and real estate', 'Health and allied health professionals', 'Any business with high document volume per client'],
    howItWorks: [
      'We audit your current document and workflow process',
      'Templates are built and connected to your client data',
      'Triggers are set (e.g. new booking = auto-send contract)',
      'Documents are generated, sent, and tracked automatically',
    ],
  },
  {
    icon: Database,
    title: 'AI CRM & Lead Automation',
    description: 'Automatically qualify leads, trigger follow-up sequences, and update your CRM — so no lead ever falls through the cracks.',
    tag: 'New',
    color: 'cyan',
    size: 'normal',
    fullDescription: 'Your leads deserve fast, personalised follow-up. Our automation qualifies new enquiries the moment they come in, triggers the right sequence, and keeps your CRM up to date — with zero manual input.',
    features: [
      'Instant lead qualification via AI on web forms or DMs',
      'Automated follow-up email and SMS sequences',
      'CRM auto-update with lead stage and notes',
      'Deal pipeline movement based on lead actions',
      'Hot lead alerts sent directly to your phone',
      'Integrates with HubSpot, GoHighLevel, and more',
    ],
    whoFor: ['Sales-focused businesses', 'Real estate agents and mortgage brokers', 'Coaches and consultants', 'Any business with a CRM and a lead pipeline'],
    howItWorks: [
      'We map your current lead journey and CRM setup',
      'AI qualification logic is configured for your offer',
      'Sequences are built and connected to your CRM',
      'Every new lead is handled, tracked, and followed up automatically',
    ],
  },
]

const colorMap = {
  cyan: {
    icon: 'bg-[rgba(0,212,255,0.1)] text-[#00D4FF]',
    iconLight: 'bg-[rgba(0,160,200,0.1)] text-[#006f88]',
    border: 'hover:border-[rgba(0,212,255,0.3)]',
    tag: 'bg-[rgba(0,212,255,0.1)] text-[#00D4FF] border-[rgba(0,212,255,0.2)]',
    tagLight: 'bg-[rgba(0,160,200,0.1)] text-[#006f88] border-[rgba(0,160,200,0.25)]',
    glow: 'rgba(0,212,255,0.06)',
    accent: '#00D4FF',
    accentLight: '#006f88',
    check: 'text-[#00D4FF]',
    checkLight: 'text-[#0087a0]',
    badge: 'bg-[rgba(0,212,255,0.08)] border-[rgba(0,212,255,0.2)] text-[#00D4FF]',
    badgeLight: 'bg-[rgba(0,160,200,0.08)] border-[rgba(0,160,200,0.2)] text-[#006f88]',
  },
  blue: {
    icon: 'bg-[rgba(59,123,255,0.1)] text-[#3B7BFF]',
    iconLight: 'bg-[rgba(59,123,255,0.1)] text-[#2b5fd9]',
    border: 'hover:border-[rgba(59,123,255,0.3)]',
    tag: 'bg-[rgba(59,123,255,0.1)] text-[#3B7BFF] border-[rgba(59,123,255,0.2)]',
    tagLight: 'bg-[rgba(59,123,255,0.1)] text-[#2b5fd9] border-[rgba(59,123,255,0.25)]',
    glow: 'rgba(59,123,255,0.06)',
    accent: '#3B7BFF',
    accentLight: '#2b5fd9',
    check: 'text-[#3B7BFF]',
    checkLight: 'text-[#2b5fd9]',
    badge: 'bg-[rgba(59,123,255,0.08)] border-[rgba(59,123,255,0.2)] text-[#3B7BFF]',
    badgeLight: 'bg-[rgba(59,123,255,0.08)] border-[rgba(59,123,255,0.2)] text-[#2b5fd9]',
  },
  purple: {
    icon: 'bg-[rgba(123,95,255,0.1)] text-[#7B5FFF]',
    iconLight: 'bg-[rgba(123,95,255,0.1)] text-[#6347e0]',
    border: 'hover:border-[rgba(123,95,255,0.3)]',
    tag: 'bg-[rgba(123,95,255,0.1)] text-[#7B5FFF] border-[rgba(123,95,255,0.2)]',
    tagLight: 'bg-[rgba(123,95,255,0.1)] text-[#6347e0] border-[rgba(123,95,255,0.25)]',
    glow: 'rgba(123,95,255,0.06)',
    accent: '#7B5FFF',
    accentLight: '#6347e0',
    check: 'text-[#7B5FFF]',
    checkLight: 'text-[#6347e0]',
    badge: 'bg-[rgba(123,95,255,0.08)] border-[rgba(123,95,255,0.2)] text-[#7B5FFF]',
    badgeLight: 'bg-[rgba(123,95,255,0.08)] border-[rgba(123,95,255,0.2)] text-[#6347e0]',
  },
}

interface ModalProps {
  service: ServiceDetail
  isLight: boolean
  onClose: () => void
}

function ServiceModal({ service, isLight, onClose }: ModalProps) {
  const c = colorMap[service.color]
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className={`relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${
        isLight
          ? 'bg-white border border-[rgba(13,107,202,0.15)]'
          : 'bg-[#0D1526] border border-white/[0.09]'
      }`}>

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className={`absolute top-4 right-4 z-10 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
            isLight ? 'text-[#3d5470] hover:text-[#0d6bca] hover:bg-[#0d6bca]/[0.08]' : 'text-[#7A8FA6] hover:text-white hover:bg-white/[0.08]'
          }`}
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isLight ? c.iconLight : c.icon}`}>
              <service.icon className="w-6 h-6" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-1.5">
                <h3 className={`text-xl font-bold leading-snug ${isLight ? 'text-[#0a1f6e]' : 'text-white'}`}>{service.title}</h3>
                {service.tag && (
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${isLight ? c.tagLight : c.tag}`}>
                    {service.tag}
                  </span>
                )}
              </div>
              <p className={`text-sm leading-relaxed ${isLight ? 'text-[#3d5470]' : 'text-[#a0b4cc]'}`}>{service.fullDescription}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Features */}
            <div>
              <p className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${isLight ? c.accentLight : c.accent}`}
                 style={{ color: isLight ? c.accentLight : c.accent }}>
                What&apos;s included
              </p>
              <ul className="flex flex-col gap-2">
                {service.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isLight ? c.checkLight : c.check}`} />
                    <span className={`text-sm leading-snug ${isLight ? 'text-[#1a3050]' : 'text-[#e0eaf5]'}`}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              {/* Who it's for */}
              <div>
                <p className={`text-[10px] font-bold uppercase tracking-widest mb-3`}
                   style={{ color: isLight ? c.accentLight : c.accent }}>
                  Who it&apos;s for
                </p>
                <ul className="flex flex-col gap-1.5">
                  {service.whoFor.map((w, i) => (
                    <li key={i} className={`text-sm flex items-center gap-2 ${isLight ? 'text-[#3d5470]' : 'text-[#a0b4cc]'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full shrink-0`} style={{ background: isLight ? c.accentLight : c.accent }} />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>

              {/* How it works */}
              <div>
                <p className={`text-[10px] font-bold uppercase tracking-widest mb-3`}
                   style={{ color: isLight ? c.accentLight : c.accent }}>
                  How it works
                </p>
                <ol className="flex flex-col gap-2">
                  {service.howItWorks.map((step, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className={`text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${isLight ? c.badgeLight : c.badge} border`}>
                        {i + 1}
                      </span>
                      <span className={`text-sm leading-snug ${isLight ? 'text-[#1a3050]' : 'text-[#e0eaf5]'}`}>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className={`mt-6 pt-6 border-t ${isLight ? 'border-[rgba(13,107,202,0.1)]' : 'border-white/[0.06]'} flex flex-col sm:flex-row items-center gap-3`}>
            <button
              onClick={() => { onClose(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm px-6 py-3"
            >
              Book a Free Strategy Call <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className={`text-sm font-medium transition-colors ${isLight ? 'text-[#3d5470] hover:text-[#0d6bca]' : 'text-[#7A8FA6] hover:text-white'}`}
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Services() {
  const [activeModal, setActiveModal] = useState<ServiceDetail | null>(null)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => { setMounted(true) }, [])
  const isLight = mounted && theme === 'light'

  return (
    <>
      <section id="services" className="py-24 bg-[#050B18] relative">
        <div className="absolute inset-0 bg-dots opacity-40" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <span className="badge badge-cyan mb-6">What We Build</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Every AI Tool Your Business<br />
              <span className="text-gradient">Could Ever Need</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-[#7A8FA6] leading-relaxed">
              From answering phones to running your social media — we automate the repetitive so you can focus on growth.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => {
              const colors = colorMap[service.color]
              return (
                <div
                  key={service.title}
                  className={`glass-card rounded-2xl p-6 relative overflow-hidden group cursor-pointer ${
                    service.size === 'large' ? 'lg:col-span-1' : ''
                  } ${colors.border}`}
                  onClick={() => setActiveModal(service)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveModal(service) }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                    style={{ background: `radial-gradient(ellipse at top left, ${colors.glow}, transparent 70%)` }}
                  />

                  <div className="relative">
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-5">
                      <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${isLight ? colors.iconLight : colors.icon}`}>
                        <service.icon className="w-5 h-5" />
                      </div>
                      {service.tag && (
                        <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${isLight ? colors.tagLight : colors.tag}`}>
                          {service.tag}
                        </span>
                      )}
                    </div>

                    <h3 className={`text-base font-semibold mb-2.5 leading-snug ${isLight ? 'text-[#0a1f6e]' : 'text-white'}`}>{service.title}</h3>
                    <p className={`text-sm leading-relaxed ${isLight ? 'text-[#3d5470]' : 'text-[#7A8FA6]'}`}>{service.description}</p>

                    <div className={`mt-5 flex items-center gap-1.5 text-xs font-semibold transition-colors duration-300 ${
                      isLight ? 'text-[#0d6bca]/60 group-hover:text-[#0d6bca]' : 'text-[#4A6080] group-hover:text-[#00D4FF]'
                    }`}>
                      Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-14 text-center">
            <p className={`mb-5 ${isLight ? 'text-[#3d5470]' : 'text-[#7A8FA6]'}`}>Don&apos;t see what you need? We build fully custom AI solutions too.</p>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-ghost inline-flex items-center gap-2"
            >
              Talk to us about your business <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Modal */}
      {activeModal && (
        <ServiceModal
          service={activeModal}
          isLight={isLight}
          onClose={() => setActiveModal(null)}
        />
      )}
    </>
  )
}
