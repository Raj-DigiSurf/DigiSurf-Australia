import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'DigiSurf Australia Privacy Policy — how we collect, use, and protect your information under the Australian Privacy Act 1988.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://www.digisurfaustralia.com.au/privacy' },
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
            <p>DigiSurf Australia (ABN: 28 448 210 292) is an Australian-registered AI automation business based in Sydney, Australia. This website is operated as a remote-first online business. This policy explains how we handle your personal information in accordance with the <em>Privacy Act 1988</em> (Cth) and the Australian Privacy Principles (APPs).</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">2. Information We Collect</h2>
            <p>We may collect:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Name, email address, and phone number when you contact us or book a call</li>
              <li>Business name and industry when you use our ROI calculator or enquiry forms</li>
              <li>Messages you send via our AI chat widget</li>
              <li>Technical data such as browser type, approximate location, and pages visited (via analytics)</li>
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
            <p>Our website includes an AI chat widget powered by Anthropic&apos;s Claude API. Messages you send through this widget are transmitted to and processed by Anthropic, Inc. (a company based in the United States) to generate responses. This constitutes a disclosure of personal information to an overseas recipient (see Section 7).</p>
            <p className="mt-3">Please do not share sensitive personal information (e.g. financial records, medical details, passwords) in the chat. We do not store chat transcripts on our own servers. Anthropic&apos;s privacy policy governs how they handle message data on their systems.</p>
            <p className="mt-3">DigiSurf does not use chat conversations to train AI models.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">5. Website Hosting</h2>
            <p>This website is hosted by Vercel, Inc. (a company based in the United States), using their global edge infrastructure. Website data, including visitor analytics, may be processed on servers located in the United States or other countries. We take reasonable steps to ensure Vercel maintains appropriate data protection standards consistent with Australian requirements.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">6. Third-Party Services</h2>
            <p>We use the following third-party services that may process your data:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><strong className="text-white">Anthropic, Inc. (USA)</strong> — processes AI chat messages via the Claude API</li>
              <li><strong className="text-white">Vercel, Inc. (USA)</strong> — website hosting and analytics</li>
            </ul>
            <p className="mt-3">We do not currently use Google Analytics, advertising pixels, or third-party marketing trackers.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">7. Overseas Disclosure</h2>
            <p>Some of your personal information may be disclosed to, or processed by, organisations located overseas (primarily the United States) as described in Sections 4, 5, and 6. Before disclosing information overseas, we take reasonable steps to ensure the overseas recipient handles the information in a manner consistent with the APPs. By using this website, you acknowledge that we may disclose your information to overseas recipients in this manner.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">8. Data Retention</h2>
            <p>We retain personal information only as long as necessary for the purposes for which it was collected:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Enquiry and contact form data: up to 2 years</li>
              <li>Client service records: up to 7 years (for legal and tax compliance)</li>
              <li>AI chat messages: not stored by DigiSurf (processed in transit via Anthropic)</li>
              <li>Analytics data: as per Vercel&apos;s retention policies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">9. Your Rights</h2>
            <p>Under the Australian Privacy Principles, you have the right to:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li>Access personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal obligations)</li>
              <li>Opt out of marketing communications at any time</li>
              <li>Make a complaint to the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" className="text-[#00D4FF] hover:underline" target="_blank" rel="noopener noreferrer">oaic.gov.au</a> if you believe your privacy rights have been breached</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us at the details in Section 11. We will respond within 30 days.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">10. Cookies</h2>
            <p>We use cookies and similar technologies to remember your preferences (such as light/dark theme) and to understand how visitors use our website. For full details on the cookies we use, please see our <Link href="/cookies" className="text-[#00D4FF] hover:underline">Cookie Policy</Link>. You can manage your cookie preferences at any time using the banner at the bottom of this page.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-3">11. Contact Us</h2>
            <p>For privacy-related enquiries, access requests, or to exercise your rights, contact us at:</p>
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
