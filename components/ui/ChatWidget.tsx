'use client'

import { useState, useRef, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

const GREETING = "Hi! I'm DigiSurf's AI assistant.\n\nAsk me anything about our services, pricing, or how AI automation could work for your business."

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: GREETING },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [unread, setUnread] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const { theme } = useTheme()

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const t = setTimeout(() => { if (!open) setUnread(true) }, 8000)
    return () => clearTimeout(t)
  }, [open])

  useEffect(() => {
    if (open) {
      setUnread(false)
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [open])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const isLight = mounted && theme === 'light'

  const send = async () => {
    const text = input.trim()
    if (!text || loading) return

    const updated: Message[] = [...messages, { role: 'user', content: text }]
    setMessages(updated)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updated }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.message || data.error || 'Something went wrong.',
      }])
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I had trouble connecting. Please try again or call us on +61 498 541 273.',
      }])
    } finally {
      setLoading(false)
    }
  }

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">

      {/* Chat panel */}
      <div
        className={`transition-all duration-300 origin-bottom-right ${
          open
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
        style={{ width: 'min(380px, calc(100vw - 24px))' }}
      >
        <div
          className={`rounded-2xl shadow-2xl flex flex-col overflow-hidden ${
            isLight
              ? 'bg-white border border-[rgba(13,107,202,0.15)] shadow-[0_8px_40px_rgba(0,0,0,0.12)]'
              : 'bg-[#0D1526] border border-white/[0.09] shadow-[0_8px_40px_rgba(0,0,0,0.5)]'
          }`}
          style={{ height: 'min(520px, calc(100vh - 120px))' }}
        >

          {/* Header */}
          <div className={`flex items-center gap-3 px-4 py-3 border-b shrink-0 ${
            isLight ? 'bg-[#f6faff] border-[rgba(13,107,202,0.1)]' : 'bg-[#0a1020] border-white/[0.06]'
          }`}>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#3B7BFF] flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 text-[#050B18]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-sm font-semibold ${isLight ? 'text-[#0a1f6e]' : 'text-white'}`}>
                DigiSurf AI
              </p>
              <p className="text-[11px] text-[#00D4FF] flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse inline-block" />
                Online now
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                isLight ? 'text-[#3d5470] hover:bg-[#0d6bca]/10' : 'text-[#7A8FA6] hover:bg-white/10'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex items-start gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {msg.role === 'assistant' && (
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#3B7BFF] flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5 text-[#050B18]" />
                  </div>
                )}
                <div
                  className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap break-words ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-br from-[#00D4FF] to-[#3B7BFF] text-[#050B18] font-medium rounded-tr-sm'
                      : isLight
                        ? 'bg-[#f0f5ff] text-[#1a2e50] rounded-tl-sm border border-[rgba(13,107,202,0.08)]'
                        : 'bg-white/[0.07] text-[#ddeaf8] rounded-tl-sm border border-white/[0.06]'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-start gap-2">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#3B7BFF] flex items-center justify-center shrink-0 mt-0.5">
                  <Bot className="w-3.5 h-3.5 text-[#050B18]" />
                </div>
                <div className={`rounded-2xl rounded-tl-sm px-3.5 py-3 ${
                  isLight ? 'bg-[#f0f5ff] border border-[rgba(13,107,202,0.08)]' : 'bg-white/[0.07] border border-white/[0.06]'
                }`}>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-2 h-2 rounded-full bg-[#00D4FF] animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className={`px-3 pb-3 pt-2 border-t shrink-0 ${
            isLight ? 'border-[rgba(13,107,202,0.08)] bg-white' : 'border-white/[0.06] bg-[#0D1526]'
          }`}>
            <div className={`flex items-center gap-2 rounded-xl px-3 py-2.5 ${
              isLight
                ? 'bg-[#f4f8ff] border border-[rgba(13,107,202,0.15)]'
                : 'bg-white/[0.05] border border-white/[0.1]'
            }`}>
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={onKey}
                placeholder="Type a message..."
                disabled={loading}
                className={`flex-1 bg-transparent text-sm outline-none placeholder:text-[#4A6080] disabled:opacity-50 ${
                  isLight ? 'text-[#0a1f6e]' : 'text-[#e0eaf5]'
                }`}
              />
              <button
                onClick={send}
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00D4FF] to-[#3B7BFF] flex items-center justify-center shrink-0 transition-opacity disabled:opacity-30 hover:opacity-90"
              >
                <Send className="w-3.5 h-3.5 text-[#050B18]" />
              </button>
            </div>
            <p className={`text-[10px] text-center mt-1.5 ${isLight ? 'text-[#8a9ab0]' : 'text-[#4A6080]'}`}>
              Powered by DigiSurf AI
            </p>
          </div>
        </div>
      </div>

      {/* Trigger button */}
      <button
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chat' : 'Open chat'}
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#3B7BFF] flex items-center justify-center shadow-lg shadow-[#00D4FF]/25 transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        <div className={`transition-all duration-200 ${open ? 'opacity-0 scale-50 absolute' : 'opacity-100 scale-100'}`}>
          <MessageCircle className="w-6 h-6 text-[#050B18]" />
        </div>
        <div className={`transition-all duration-200 ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-50 absolute'}`}>
          <X className="w-6 h-6 text-[#050B18]" />
        </div>

        {unread && !open && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-[#050B18] animate-pulse" />
        )}
      </button>
    </div>
  )
}
