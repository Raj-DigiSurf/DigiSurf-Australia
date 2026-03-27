import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import { blogPosts } from '@/lib/blog-posts'
import BlogList from '@/components/ui/BlogList'

export const metadata: Metadata = {
  title: 'AI Automation Blog for Australian Businesses — DigiSurf Australia',
  description: 'Practical guides on AI automation, AI receptionists, chatbots, and business automation for Australian small businesses. Written by the DigiSurf team.',
  keywords: ['AI automation blog Australia', 'AI for small business Australia', 'business automation tips Australia'],
  alternates: { canonical: 'https://www.digisurfaustralia.com.au/blog' },
  openGraph: {
    title: 'AI Automation Blog — DigiSurf Australia',
    description: 'Practical guides on AI automation for Australian small businesses.',
    url: 'https://www.digisurfaustralia.com.au/blog',
  },
}

export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'DigiSurf Australia — AI Automation Blog',
            url: 'https://www.digisurfaustralia.com.au/blog',
            description: 'Practical guides on AI automation for Australian small businesses.',
            publisher: {
              '@type': 'Organization',
              name: 'DigiSurf Australia',
              url: 'https://www.digisurfaustralia.com.au',
            },
          }),
        }}
      />

      <main className="min-h-screen bg-[#050B18]">

        {/* Hero */}
        <section className="pt-28 pb-14 sm:pb-16 bg-[#050B18] relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-25" />
          <div className="absolute top-1/4 right-1/3 w-64 sm:w-80 h-64 sm:h-80 rounded-full blur-[100px] sm:blur-[120px] opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #3B7BFF, transparent)' }} />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <nav className="flex items-center justify-center gap-2 text-xs text-[#4A6080] mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#00D4FF] transition-colors">Home</Link>
              <span>/</span>
              <span className="text-[#7A8FA6]">Blog</span>
            </nav>
            <span className="badge badge-cyan mb-5 sm:mb-6">AI Automation Insights</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-5 sm:mb-6">
              Practical AI Guides for<br />
              <span className="text-gradient">Australian Business Owners</span>
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#7A8FA6] leading-relaxed">
              No hype. No jargon. Just actionable advice on how AI automation can save you time and grow your business — written by people who build these systems every day.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section className="py-12 sm:py-16 bg-[#0D1526]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <BlogList posts={blogPosts} />
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-[#050B18]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-card rounded-2xl p-8 sm:p-10">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Ready to Automate Your Business?</h2>
              <p className="text-[#7A8FA6] mb-6 sm:mb-8">Book a free 15-minute strategy call and we&apos;ll map out exactly where AI can save you the most time.</p>
              <a
                href="https://meetings-na2.hubspot.com/henish"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4"
              >
                <Calendar className="w-4 h-4" />
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="mt-4 text-xs text-[#4A6080]">Australian registered · ABN 28 448 210 292 · No obligation</p>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
