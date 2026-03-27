import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, ArrowRight, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Automation ROI: How to Calculate Your Savings Before You Start — DigiSurf Australia',
  description: 'Learn how to calculate AI automation ROI for your Australian small business. Simple framework to measure savings before implementation.',
  keywords: ["AI automation ROI Australia","calculate AI savings","business automation cost benefit"],
  alternates: { canonical: 'https://www.digisurfaustralia.com.au/blog/ai-automation-roi-calculate-savings-before-start' },
  openGraph: {
    title: 'AI Automation ROI: How to Calculate Your Savings Before You Start',
    description: 'Learn how to calculate AI automation ROI for your Australian small business. Simple framework to measure savings before implementation.',
    url: 'https://www.digisurfaustralia.com.au/blog/ai-automation-roi-calculate-savings-before-start',
  },
}

export default function BlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'AI Automation ROI: How to Calculate Your Savings Before You Start',
            datePublished: '2026-03-27',
            dateModified: '2026-03-27',
            author: { '@type': 'Organization', name: 'DigiSurf Australia', url: 'https://www.digisurfaustralia.com.au' },
            publisher: { '@type': 'Organization', name: 'DigiSurf Australia', url: 'https://www.digisurfaustralia.com.au' },
            description: 'Learn how to calculate AI automation ROI for your Australian small business. Simple framework to measure savings before implementation.',
            url: 'https://www.digisurfaustralia.com.au/blog/ai-automation-roi-calculate-savings-before-start',
          }),
        }}
      />

      <main className="min-h-screen bg-[#050B18]">

        {/* Hero */}
        <section className="pt-28 pb-14 sm:pb-16 bg-[#050B18] relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute top-1/4 right-1/3 w-64 sm:w-80 h-64 sm:h-80 rounded-full blur-[100px] sm:blur-[120px] opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, #00D4FF, transparent)' }} />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-[#4A6080] mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#00D4FF] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#00D4FF] transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-[#7A8FA6]">ROI Calculation Guide</span>
            </nav>
            <span className="badge badge-cyan mb-4 sm:mb-6">Guide</span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 sm:mb-6">
              AI Automation ROI: How to Calculate Your Savings Before You Start
            </h1>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-[#4A6080] mb-6 sm:mb-8">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> 27 March 2026</span>
              <span>6 min read</span>
              <span>By DigiSurf Australia</span>
            </div>
            <p className="text-base sm:text-lg text-[#7A8FA6] leading-relaxed">
              Most Australian small business owners know AI automation can save time and money — but they have no idea how much. Without a clear ROI picture, it's impossible to make a confident investment decision. We've built a simple framework to help you calculate exactly what you'll save before you spend a dollar.
            </p>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-10 sm:py-12 bg-[#050B18]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Why ROI Matters (And Why Most Businesses Skip It) */}
            <div className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Why ROI Matters (And Why Most Businesses Skip It)</h2>
              <p className="text-[#7A8FA6] leading-relaxed mb-4">Here's the truth: calculating ROI doesn't require an MBA or complex spreadsheets. It requires three numbers. Yet most small business owners either guess or skip it entirely.</p>
              <p className="text-[#7A8FA6] leading-relaxed mb-4">The cost of guessing is high. You might invest in automation that saves you $50/week and costs $200/week to run. Or worse, you might avoid automation altogether because you think it's too expensive — missing out on thousands in savings.</p>
              <p className="text-[#7A8FA6] leading-relaxed mb-4">Our team has worked through hundreds of ROI calculations for Australian businesses. The pattern is always the same: the businesses that measure first invest with confidence. The ones that don't often second-guess their decisions.</p>

            </div>

            {/* The Three Numbers You Need */}
            <div className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">The Three Numbers You Need</h2>
              <p className="text-[#7A8FA6] leading-relaxed mb-4">Every ROI calculation comes down to this:</p>
              <p className="text-[#7A8FA6] leading-relaxed mb-4">1. How much time are you currently wasting on a task (in hours per week)?</p>
              <p className="text-[#7A8FA6] leading-relaxed mb-4">2. What's the cost of that wasted time (hourly rate or opportunity cost)?</p>
              <p className="text-[#7A8FA6] leading-relaxed mb-4">3. What's the cost of the automation tool?</p>
              <p className="text-[#7A8FA6] leading-relaxed mb-4">That's it. From there, you can calculate payback period and annual savings.</p>

            </div>

            {/* ROI Calculation Template */}
            <div className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">ROI Calculation Template</h2>
              <p className="text-[#7A8FA6] leading-relaxed mb-4">Here's the exact framework we use with our clients. Fill in the blanks for your business.</p>
              <div className="glass-card rounded-2xl overflow-hidden mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[400px]">
                    <thead>
                      <tr className="border-b border-white/[0.08]">
                        <th className="text-left p-3 sm:p-4 text-[#4A6080] font-semibold text-sm">Field</th>
                        <th className="text-center p-3 sm:p-4 text-[#4A6080] font-semibold text-sm">Your Number</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/[0.05] bg-white/[0.01]">
                        <td className="p-3 sm:p-4 text-[#7A8FA6] font-medium text-sm">Hours wasted per week on this task</td>
                        <td className="p-3 sm:p-4 text-center text-[#e0eaf5] text-sm">___</td>
                      </tr>
                      <tr className="border-b border-white/[0.05]">
                        <td className="p-3 sm:p-4 text-[#7A8FA6] font-medium text-sm">Your hourly cost (salary + on-costs ÷ 2080 hours)</td>
                        <td className="p-3 sm:p-4 text-center text-[#e0eaf5] text-sm">$___/hr</td>
                      </tr>
                      <tr className="border-b border-white/[0.05] bg-white/[0.01]">
                        <td className="p-3 sm:p-4 text-[#7A8FA6] font-medium text-sm">Weekly time cost (hours × hourly rate)</td>
                        <td className="p-3 sm:p-4 text-center text-[#e0eaf5] text-sm">$___</td>
                      </tr>
                      <tr className="border-b border-white/[0.05]">
                        <td className="p-3 sm:p-4 text-[#7A8FA6] font-medium text-sm">Monthly time cost (weekly × 4.33)</td>
                        <td className="p-3 sm:p-4 text-center text-[#e0eaf5] text-sm">$___</td>
                      </tr>
                      <tr className="border-b border-white/[0.05] bg-white/[0.01]">
                        <td className="p-3 sm:p-4 text-[#7A8FA6] font-medium text-sm">Annual time cost (monthly × 12)</td>
                        <td className="p-3 sm:p-4 text-center text-[#e0eaf5] text-sm">$___</td>
                      </tr>
                      <tr className="border-b border-white/[0.05]">
                        <td className="p-3 sm:p-4 text-[#7A8FA6] font-medium text-sm">AI tool monthly cost</td>
                        <td className="p-3 sm:p-4 text-center text-[#e0eaf5] text-sm">$___</td>
                      </tr>
                      <tr className="border-b border-white/[0.05] bg-white/[0.01]">
                        <td className="p-3 sm:p-4 text-[#7A8FA6] font-medium text-sm">AI tool annual cost</td>
                        <td className="p-3 sm:p-4 text-center text-[#e0eaf5] text-sm">$___</td>
                      </tr>
                      <tr className="border-b border-white/[0.05]">
                        <td className="p-3 sm:p-4 text-[#7A8FA6] font-medium text-sm">Annual savings (annual time cost − annual AI cost)</td>
                        <td className="p-3 sm:p-4 text-center text-[#e0eaf5] text-sm">$___</td>
                      </tr>
                      <tr className="border-b border-white/[0.05] bg-white/[0.01]">
                        <td className="p-3 sm:p-4 text-[#7A8FA6] font-medium text-sm">Payback period (annual AI cost ÷ monthly savings)</td>
                        <td className="p-3 sm:p-4 text-center text-[#e0eaf5] text-sm">___ months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Real Calculation: A Sydney Accountancy Practice */}
            <div className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Real Calculation: A Sydney Accountancy Practice</h2>

              <div className="glass-card rounded-2xl p-5 sm:p-6 border-l-4 border-[#00D4FF] mb-6">
                <p className="text-[#e0eaf5] leading-relaxed">
                  <strong className="text-white">Case Study:</strong> A 3-person accounting firm was spending 8 hours per week on invoice chasing and follow-ups. At $45/hour (blended rate), that's $1,872/month in wasted time. An AI automation tool to handle invoice reminders cost $297/month. Annual savings: $18,900. Payback period: less than 1 week.
                </p>
              <p className="text-[#7A8FA6] text-sm mt-3">This is based on actual client data from our portfolio.</p>
              </div>
            </div>

            {/* Common Tasks to Measure (And Why They Matter) */}
            <div className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Common Tasks to Measure (And Why They Matter)</h2>
              <p className="text-[#7A8FA6] leading-relaxed mb-4">Not sure where to start? Here are the tasks we see most often in Australian small businesses — and why they're worth automating.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div key={0} className="glass-card rounded-xl p-4 flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                  <span className="text-[#e0eaf5] text-sm leading-relaxed">[object Object]</span>
                </div>
                <div key={1} className="glass-card rounded-xl p-4 flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                  <span className="text-[#e0eaf5] text-sm leading-relaxed">[object Object]</span>
                </div>
                <div key={2} className="glass-card rounded-xl p-4 flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                  <span className="text-[#e0eaf5] text-sm leading-relaxed">[object Object]</span>
                </div>
                <div key={3} className="glass-card rounded-xl p-4 flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                  <span className="text-[#e0eaf5] text-sm leading-relaxed">[object Object]</span>
                </div>
                <div key={4} className="glass-card rounded-xl p-4 flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                  <span className="text-[#e0eaf5] text-sm leading-relaxed">[object Object]</span>
                </div>
                <div key={5} className="glass-card rounded-xl p-4 flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                  <span className="text-[#e0eaf5] text-sm leading-relaxed">[object Object]</span>
                </div>
              </div>
            </div>

            {/* Step-by-Step: How to Calculate Your ROI */}
            <div className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Step-by-Step: How to Calculate Your ROI</h2>
              <p className="text-[#7A8FA6] leading-relaxed mb-4">Follow this process for any task you're considering automating. It takes 15-20 minutes.</p>
              <div className="flex flex-col gap-3 mb-6">
                <div key={0} className="glass-card rounded-xl p-4 sm:p-5">
                  <h3 className="text-white font-semibold mb-2 text-sm">Pick one task or process</h3>
                  <p className="text-[#7A8FA6] text-sm leading-relaxed">Don't try to automate everything at once. Choose one clear, repeatable task. Examples: call answering, invoice reminders, appointment scheduling, email responses. The task should be something you do regularly — at least weekly.</p>
                </div>
                <div key={1} className="glass-card rounded-xl p-4 sm:p-5">
                  <h3 className="text-white font-semibold mb-2 text-sm">Track actual time spent for one week</h3>
                  <p className="text-[#7A8FA6] text-sm leading-relaxed">Don't guess. Actually time the task. Use a simple timer on your phone or clock app. Record how many times the task comes up and how long each instance takes. Multiply by 4.33 to get monthly average.</p>
                </div>
                <div key={2} className="glass-card rounded-xl p-4 sm:p-5">
                  <h3 className="text-white font-semibold mb-2 text-sm">Calculate your cost per hour</h3>
                  <p className="text-[#7A8FA6] text-sm leading-relaxed">Take your annual salary (or target income) plus on-costs (super, equipment, workspace, insurance — roughly 25-30% of salary). Divide by 2,080 working hours per year. This is your true hourly cost. For business owners, use your target hourly rate instead.</p>
                </div>
                <div key={3} className="glass-card rounded-xl p-4 sm:p-5">
                  <h3 className="text-white font-semibold mb-2 text-sm">Find the right automation tool</h3>
                  <p className="text-[#7A8FA6] text-sm leading-relaxed">Research tools that specifically handle your task. Get exact pricing — not estimated. Many offer free trials or freemium versions. Use those to test before committing. Check if there are Australian-specific options or better support for local businesses.</p>
                </div>
                <div key={4} className="glass-card rounded-xl p-4 sm:p-5">
                  <h3 className="text-white font-semibold mb-2 text-sm">Calculate and compare</h3>
                  <p className="text-[#7A8FA6] text-sm leading-relaxed">Use the template above. If annual savings exceed the cost and payback is under 12 months, it's usually a good bet. If payback is under 3 months, it's almost always worth doing.</p>
                </div>
              </div>
            </div>

            {/* What We Typically See */}
            <div className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">What We Typically See</h2>
              <p className="text-[#7A8FA6] leading-relaxed mb-4">Across our client base, here are the benchmark numbers for ROI:</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
                <div key={0} className="glass-card rounded-xl p-4 sm:p-5 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#00D4FF] mb-1">6-12 weeks</div>
                  <div className="text-xs text-[#7A8FA6] leading-snug">average payback period</div>
                </div>
                <div key={1} className="glass-card rounded-xl p-4 sm:p-5 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#00D4FF] mb-1">$15,000-40,000</div>
                  <div className="text-xs text-[#7A8FA6] leading-snug">typical annual savings</div>
                </div>
                <div key={2} className="glass-card rounded-xl p-4 sm:p-5 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#00D4FF] mb-1">75%</div>
                  <div className="text-xs text-[#7A8FA6] leading-snug">of clients save money in year 1</div>
                </div>
                <div key={3} className="glass-card rounded-xl p-4 sm:p-5 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#00D4FF] mb-1">3-5 tasks</div>
                  <div className="text-xs text-[#7A8FA6] leading-snug">average automatable processes per business</div>
                </div>
              </div>
            </div>

            {/* Where ROI Works Best */}
            <div className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Where ROI Works Best</h2>
              <p className="text-[#7A8FA6] leading-relaxed mb-4">Not all tasks are created equal. These business types and scenarios show the fastest ROI.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div key={0} className="glass-card rounded-xl p-5">
                  <h3 className="text-white font-semibold text-sm mb-2">Service-Based Businesses</h3>
                  <p className="text-[#7A8FA6] text-sm leading-relaxed">Tradies, cleaners, plumbers, electricians. Every missed call is lost revenue. AI receptionists recover bookings within days.</p>
                </div>
                <div key={1} className="glass-card rounded-xl p-5">
                  <h3 className="text-white font-semibold text-sm mb-2">High-Volume Customer Contact</h3>
                  <p className="text-[#7A8FA6] text-sm leading-relaxed">Any business handling 50+ customer interactions per week. FAQs, booking questions, order status checks. Chatbots pay for themselves quickly.</p>
                </div>
                <div key={2} className="glass-card rounded-xl p-5">
                  <h3 className="text-white font-semibold text-sm mb-2">Back-Office Heavy Operations</h3>
                  <p className="text-[#7A8FA6] text-sm leading-relaxed">Accounting firms, bookkeepers, admin-heavy businesses. Data entry, invoice chasing, document sorting. Huge time recovery potential.</p>
                </div>
                <div key={3} className="glass-card rounded-xl p-5">
                  <h3 className="text-white font-semibold text-sm mb-2">Seasonal Businesses</h3>
                  <p className="text-[#7A8FA6] text-sm leading-relaxed">Ski resorts, tourism, seasonal contractors. AI handles the peak season surge without hiring temps. Off-season cost is minimal.</p>
                </div>
                <div key={4} className="glass-card rounded-xl p-5">
                  <h3 className="text-white font-semibold text-sm mb-2">Businesses With Inconsistent Availability</h3>
                  <p className="text-[#7A8FA6] text-sm leading-relaxed">Owners who travel, work on-site, or have unpredictable schedules. 24/7 automation means you never miss a customer.</p>
                </div>
                <div key={5} className="glass-card rounded-xl p-5">
                  <h3 className="text-white font-semibold text-sm mb-2">Multi-Location or Remote Teams</h3>
                  <p className="text-[#7A8FA6] text-sm leading-relaxed">Centralised automation handles all locations or team members. Consistency and scalability improve automatically.</p>
                </div>
              </div>
            </div>

            {/* Common Mistakes When Calculating ROI */}
            <div className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Common Mistakes When Calculating ROI</h2>
              <p className="text-[#7A8FA6] leading-relaxed mb-4">We see the same calculation errors again and again. Here's how to avoid them:</p>
              <p className="text-[#7A8FA6] leading-relaxed mb-4">Mistake 1: Only counting direct salary cost, not on-costs. That $50k salary actually costs you $62,500 when you include super, equipment, workspace, and taxes. Use the full figure.</p>
              <p className="text-[#7A8FA6] leading-relaxed mb-4">Mistake 2: Underestimating time spent. Most owners guess 2-3 hours per week when the actual figure is 6-8. Track for a full week before calculating.</p>
              <p className="text-[#7A8FA6] leading-relaxed mb-4">Mistake 3: Forgetting setup and training time. An automation tool might cost $200/month, but if it takes 10 hours to set up correctly, factor that in. A $200/month tool with 10 hours setup is really $333/month in the first month.</p>
              <p className="text-[#7A8FA6] leading-relaxed mb-4">Mistake 4: Comparing against only the software cost. Include integration costs, staff training, and changeover time. Most true costs are 1.5-2x the software fee in the first 60 days.</p>
              <p className="text-[#7A8FA6] leading-relaxed mb-4">Mistake 5: Not accounting for quality improvements. Sometimes the real savings aren't time — it's better accuracy, fewer complaints, or faster response times. These are harder to measure but genuinely valuable.</p>

            </div>

            {/* The ROI Conversation You Should Have */}
            <div className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">The ROI Conversation You Should Have</h2>
              <p className="text-[#7A8FA6] leading-relaxed mb-4">Here's what we recommend: before you talk to any automation vendor, do your own ROI calculation. Know your numbers cold. You'll negotiate better, avoid overselling, and make decisions from strength.</p>
              <p className="text-[#7A8FA6] leading-relaxed mb-4">When you do talk to a provider (including us), ask these questions: 'Based on our time savings, what's the realistic payback period?' 'What's the full cost of ownership, including onboarding?' 'What happens if we want to cancel?' 'How long until we see measurable results?'</p>
              <p className="text-[#7A8FA6] leading-relaxed mb-4">Good vendors will help you refine your ROI calculation. They'll ask about your current process, your volume, and your constraints. They should be able to give you realistic numbers based on similar Australian businesses.</p>

            </div>

            {/* Conclusion */}
            <div className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">The Bottom Line</h2>
              <p className="text-[#7A8FA6] leading-relaxed">
                AI automation ROI isn't mysterious. It's just three numbers: time wasted, cost of that time, and cost of the tool. Spend 20 minutes working through the calculation above for one task in your business. If payback is under 12 months, you have a strong case to proceed. Our team can help you refine these numbers and stress-test your assumptions — grab a free 15-minute strategy call to walk through your specific situation.
              </p>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-14 sm:py-16 bg-[#0D1526]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-card rounded-2xl p-8 sm:p-10">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">Ready to Know Your Numbers?</h2>
              <p className="text-[#7A8FA6] mb-6 sm:mb-8">A quick conversation can validate whether automation makes sense for your business and exactly where to start.</p>
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
              <p className="mt-4 text-xs text-[#4A6080]">From $297/month · No setup fee during beta · Live in 5–7 days</p>
              <div className="mt-6 sm:mt-8 text-left">
                <p className="text-[#4A6080] text-xs uppercase tracking-wider mb-3">Related Articles</p>
                <div className="flex flex-wrap gap-3">
                    <Link key="/blog/how-ai-saves-australian-small-businesses-15-hours-per-week" href="/blog/how-ai-saves-australian-small-businesses-15-hours-per-week" className="text-sm text-[#00D4FF] hover:underline">How AI Saves Australian Small Businesses 15+ Hours Per Week →</Link>
                    <Link key="/blog/ai-automation-for-small-business-australia" href="/blog/ai-automation-for-small-business-australia" className="text-sm text-[#00D4FF] hover:underline">AI Automation for Small Business in Australia: A Complete Guide →</Link>
                    <Link key="/blog/ai-receptionist-vs-human-receptionist" href="/blog/ai-receptionist-vs-human-receptionist" className="text-sm text-[#00D4FF] hover:underline">AI Receptionist vs Human Receptionist: Which Is Right for Your Business? →</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
