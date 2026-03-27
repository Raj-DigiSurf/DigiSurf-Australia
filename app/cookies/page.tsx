import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'DigiSurf Australia Cookie Policy — what cookies we use and how to manage them.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.digisurfaustralia.com.au/cookies' },
}

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-[#050B18] pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#7A8FA6] hover:text-[#00D4FF] transition-colors mb-10">
          ← Back to home
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Cookie Policy</h1>
        <p className="text-sm text-[#7A8FA6] mb-10">Last updated: March 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-[#7A8FA6] leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">What Are Cookies?</h2>
            <p>Cookies are small text files stored on your device when you visit a website. They help the website remember your preferences and understand how you use it. We also use browser storage (localStorage) for similar purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Cookies We Use</h2>

            <div className="mt-4 space-y-6">

              <div className="rounded-xl border border-white/[0.06] p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-xs font-semibold bg-[#00D4FF]/10 text-[#00D4FF] border border-[#00D4FF]/20">Essential</span>
                  <span className="text-sm font-semibold text-white">Always active — cannot be disabled</span>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-[#4A6080] text-xs uppercase tracking-wider">
                      <th className="text-left pb-2">Name</th>
                      <th className="text-left pb-2">Set by</th>
                      <th className="text-left pb-2">Purpose</th>
                      <th className="text-left pb-2">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="space-y-2">
                    <tr className="border-t border-white/[0.04]">
                      <td className="py-2 pr-4 font-mono text-xs text-[#F0F6FF]">theme</td>
                      <td className="py-2 pr-4">DigiSurf</td>
                      <td className="py-2 pr-4">Remembers your light/dark mode preference</td>
                      <td className="py-2">Until cleared</td>
                    </tr>
                    <tr className="border-t border-white/[0.04]">
                      <td className="py-2 pr-4 font-mono text-xs text-[#F0F6FF]">cookie_consent</td>
                      <td className="py-2 pr-4">DigiSurf</td>
                      <td className="py-2 pr-4">Stores your cookie consent choice</td>
                      <td className="py-2">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="rounded-xl border border-white/[0.06] p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2 py-0.5 rounded text-xs font-semibold bg-[#3B7BFF]/10 text-[#3B7BFF] border border-[#3B7BFF]/20">Analytics</span>
                  <span className="text-sm font-semibold text-white">Optional — used to understand site usage</span>
                </div>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-[#4A6080] text-xs uppercase tracking-wider">
                      <th className="text-left pb-2">Name</th>
                      <th className="text-left pb-2">Set by</th>
                      <th className="text-left pb-2">Purpose</th>
                      <th className="text-left pb-2">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-white/[0.04]">
                      <td className="py-2 pr-4 font-mono text-xs text-[#F0F6FF]">_vercel_*</td>
                      <td className="py-2 pr-4">Vercel</td>
                      <td className="py-2 pr-4">Anonymous page view analytics (no personal data)</td>
                      <td className="py-2">Session / 24 hrs</td>
                    </tr>
                  </tbody>
                </table>
                <p className="mt-3 text-xs text-[#4A6080]">We do not use Google Analytics, Meta Pixel, or any advertising cookies.</p>
              </div>

            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Managing Your Preferences</h2>
            <p>You can update your cookie preferences at any time by clicking &quot;Manage Cookie Preferences&quot; in the footer, or by clearing your browser&apos;s local storage and cookies for this site. You can also disable cookies entirely in your browser settings, though some features (like remembering your theme) may not work correctly.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
            <p>Questions about our use of cookies? Contact us at <a href="mailto:info@digisurfaustralia.com.au" className="text-[#00D4FF] hover:underline">info@digisurfaustralia.com.au</a></p>
            <p className="mt-2">See also our <Link href="/privacy" className="text-[#00D4FF] hover:underline">Privacy Policy</Link> for full details on how we handle your data.</p>
          </section>

        </div>
      </div>
    </main>
  )
}
