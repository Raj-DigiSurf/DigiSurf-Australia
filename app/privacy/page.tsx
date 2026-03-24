import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'DigiSurf Australia Privacy Policy — how we collect, use, and protect your information.',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#050B18] pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#7A8FA6] hover:text-[#00D4FF] transition-colors mb-10">
          ← Back to home
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Privacy Policy</h1>
        <p className="text-sm text-[#7A8FA6] mb-10">Last updated: March 2026</p>

        <div className="prose prose-invert max-w-none space-y-8 text-[#7A8FA6] leading-relaxed">

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">1. About Us</h2>
            <p>DigiSurf Australia Pty Ltd (ABN 28 448 210 292) operates <strong className="text-white">digisurfaustralia.com.au</strong>. We are an Australian AI automation agency. This policy explains how we handle your personal information in accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs).</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <p>We may collect:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Name, email address, and phone number when you contact us or book a call</li>
              <li>Business name and industry when you use our ROI calculator or enquiry forms</li>
              <li>Messages you send via our AI chat widget</li>
              <li>Technical data such as browser type, IP address, and pages visited (via analytics)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">3. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Respond to your enquiries and provide our services</li>
              <li>Send you relevant information about DigiSurf services (with your consent)</li>
              <li>Improve our website and AI systems</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="mt-3">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">4. AI Chat Widget</h2>
            <p>Our website includes an AI chat widget powered by Anthropic&apos;s Claude API. Messages you send through this widget are processed by Anthropic to generate responses. Please do not share sensitive personal information (e.g. medical records, financial details) in the chat. Anthropic&apos;s privacy policy applies to message processing.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Data Storage</h2>
            <p>Our website and systems are hosted on Australian servers (Vercel&apos;s Sydney region). We take reasonable steps to protect your information from misuse, loss, and unauthorised access.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Your Rights</h2>
            <p>Under the Australian Privacy Principles, you have the right to:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Access personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal obligations)</li>
              <li>Opt out of marketing communications at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Cookies</h2>
            <p>We may use cookies and similar technologies to improve your experience on our website. You can disable cookies in your browser settings, though some features may not function correctly.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Contact Us</h2>
            <p>For privacy-related enquiries or to exercise your rights, contact us at:</p>
            <div className="mt-3 space-y-1">
              <p><strong className="text-white">Email:</strong> <a href="mailto:info@digisurfaustralia.com.au" className="text-[#00D4FF] hover:underline">info@digisurfaustralia.com.au</a></p>
              <p><strong className="text-white">Phone:</strong> <a href="tel:+61498541273" className="text-[#00D4FF] hover:underline">+61 498 541 273</a></p>
              <p><strong className="text-white">ABN:</strong> 28 448 210 292</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
