'use client'

import { useState } from 'react'
import { useTheme } from 'next-themes'
import { Send, CheckCircle, AlertCircle, Calendar } from 'lucide-react'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function ContactForm() {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    message: '',
  })

  const set = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', business: '', email: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass = `w-full rounded-xl px-4 py-3 text-sm outline-none border transition-colors duration-150 ${
    isLight
      ? 'bg-white border-[rgba(13,107,202,0.2)] text-[#0a1f6e] placeholder:text-[#8a9ab0] focus:border-[#0d6bca]'
      : 'bg-white/[0.04] border-white/[0.08] text-[#e0eaf5] placeholder:text-[#4A6080] focus:border-[#00D4FF]/50'
  }`

  return (
    <section className="py-20 bg-[#050B18] relative">
      <div className="absolute inset-0 bg-dots opacity-10" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <span className="badge badge-cyan mb-6">Get in Touch</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prefer to Send a Message?
          </h2>
          <p className="text-[#7A8FA6] max-w-xl mx-auto">
            Fill in your details and Raj will get back to you within one business day. Or skip the wait —
            <a
              href="https://meetings-na2.hubspot.com/henish"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00D4FF] hover:underline ml-1 inline-flex items-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              book a call directly.
            </a>
          </p>
        </div>

        <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
          {status === 'success' ? (
            <div className="text-center py-8">
              <CheckCircle className="w-14 h-14 text-[#00D4FF] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-[#7A8FA6]">Thanks — Raj will be in touch within one business day.</p>
              <button
                onClick={() => setStatus('idle')}
                className="mt-6 text-sm text-[#00D4FF] hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isLight ? 'text-[#1a2e50]' : 'text-[#7A8FA6]'}`}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Raj Smith"
                    value={form.name}
                    onChange={set('name')}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isLight ? 'text-[#1a2e50]' : 'text-[#7A8FA6]'}`}>
                    Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="My Business Pty Ltd"
                    value={form.business}
                    onChange={set('business')}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isLight ? 'text-[#1a2e50]' : 'text-[#7A8FA6]'}`}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@business.com.au"
                    value={form.email}
                    onChange={set('email')}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${isLight ? 'text-[#1a2e50]' : 'text-[#7A8FA6]'}`}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+61 4XX XXX XXX"
                    value={form.phone}
                    onChange={set('phone')}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-xs font-semibold mb-1.5 ${isLight ? 'text-[#1a2e50]' : 'text-[#7A8FA6]'}`}>
                  What do you need help with?
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your business and what's taking up the most time..."
                  value={form.message}
                  onChange={set('message')}
                  className={`${inputClass} resize-none`}
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  Something went wrong. Please try again or email us directly at info@digisurfaustralia.com.au
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-[#050B18]/30 border-t-[#050B18] rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              <p className={`text-xs text-center ${isLight ? 'text-[#8a9ab0]' : 'text-[#4A6080]'}`}>
                We respond within 1 business day · Your details are kept private
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
