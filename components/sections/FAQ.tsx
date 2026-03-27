'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'How long does it take to get set up?',
    a: 'Most of our clients are live within 7–14 days of the strategy call. Simple automations (like a chatbot or appointment reminder system) can be ready in as little as 5 days. More complex multi-system builds take 2–3 weeks.',
  },
  {
    q: 'Do I need any technical knowledge?',
    a: 'None at all. We handle everything — from design and build to testing and launch. All you need to do is answer our questions about your business during the onboarding call. We\'ll take care of the rest.',
  },
  {
    q: 'Where is my data stored?',
    a: 'Your website and contact data is hosted via Vercel (US-based infrastructure). Our AI chatbot is powered by Anthropic (also US-based). Both providers are bound by strict data processing agreements. We are transparent about this in our Privacy Policy and comply with the Australian Privacy Act 1988. We do not sell or share your data with third parties.',
  },
  {
    q: 'Can DigiSurf integrate with my existing software?',
    a: 'Yes. We integrate with most major platforms including HubSpot, Salesforce, Monday.com, Cliniko, Mindbody, Rex, PropertyMe, Xero, QuickBooks, Slack, and hundreds of others via Zapier, Make, and custom APIs.',
  },
  {
    q: 'What does the 30-day ROI guarantee mean?',
    a: 'If your AI system doesn\'t demonstrate measurable time or cost savings within the first 30 days of going live, we\'ll continue working on improvements at no additional cost until it does. We stand behind our results.',
  },
  {
    q: 'What\'s the difference between an AI receptionist and an AI voice agent?',
    a: 'An AI receptionist specifically handles inbound phone calls — answering, routing, taking messages, and booking appointments. An AI voice agent is a broader term that includes both inbound (receiving calls) and outbound (making calls for follow-up, reminders, or outreach).',
  },
  {
    q: 'Can I cancel my subscription anytime?',
    a: 'Yes. There are no lock-in contracts. All plans require 30 days notice to cancel. We don\'t believe in trapping clients — if it\'s not working for you, we\'d rather know so we can fix it or part on good terms.',
  },
  {
    q: 'How is DigiSurf different from just using ChatGPT myself?',
    a: 'ChatGPT is a generic tool you prompt manually. DigiSurf builds purpose-built AI systems that are trained on your business, integrated with your existing tools, connected to your calendar and CRM, and running 24/7 without you touching anything. It\'s the difference between a hammer and a factory.',
  },
  {
    q: 'Will my clients know they\'re talking to an AI?',
    a: 'That\'s entirely up to you. We can configure your AI to introduce itself as an AI assistant (which many clients actually prefer for its speed and consistency), or we can build it to feel as natural and human-like as possible. Both approaches work well depending on your industry and brand.',
  },
  {
    q: 'What happens if something breaks or stops working?',
    a: 'All plans include ongoing monitoring and support. If something breaks, we fix it — usually within a few hours. Growth and Enterprise clients get priority response times. We proactively monitor all systems and will contact you if we detect an issue before you even notice it.',
  },
]

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 bg-[#0D1526] relative">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="badge badge-blue mb-6">FAQ</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Honest Answers to{' '}
            <span className="text-gradient">Real Questions</span>
          </h2>
          <p className="text-lg text-[#7A8FA6]">
            No fluff. Just the answers you actually need before making a decision.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${
                open === idx ? 'border-[rgba(0,212,255,0.2)]' : ''
              }`}
            >
              <button
                onClick={() => setOpen(open === idx ? null : idx)}
                className="w-full flex items-center justify-between gap-3 p-4 sm:p-6 text-left"
              >
                <span className={`text-sm sm:text-base font-semibold leading-snug transition-colors duration-200 ${open === idx ? 'text-white' : 'text-[#F0F6FF]'}`}>
                  {faq.q}
                </span>
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                  open === idx
                    ? 'bg-[rgba(0,212,255,0.15)] text-[#00D4FF]'
                    : 'bg-white/[0.05] text-[#7A8FA6]'
                }`}>
                  {open === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <div className={`transition-all duration-300 overflow-hidden ${open === idx ? 'max-h-96' : 'max-h-0'}`}>
                <p className="px-4 pb-4 sm:px-6 sm:pb-6 text-sm text-[#7A8FA6] leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center glass rounded-2xl p-8">
          <p className="text-white font-semibold mb-2">Still have a question?</p>
          <p className="text-sm text-[#7A8FA6] mb-5">We respond within a few hours — usually faster.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="mailto:info@digisurfaustralia.com.au" className="btn-primary text-sm px-6 py-3">
              Email Us
            </a>
            <a href="tel:+61498541273" className="btn-ghost text-sm px-6 py-3">
              +61 498 541 273
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
