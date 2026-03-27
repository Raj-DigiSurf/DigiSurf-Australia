/**
 * DigiSurf Australia — Auto Blog Generator (Enhanced)
 * Generates richly designed blog posts with stats, tables, cards,
 * callouts, checklists, and bullet grids — matching the hand-crafted design system.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '../..')

// ─── Today's date (injected — never let Claude pick dates) ───────────────────
const now = new Date()
const DATE_ISO = now.toISOString().split('T')[0] // YYYY-MM-DD
const DATE_DISPLAY = now.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })

// ─── Read existing posts ──────────────────────────────────────────────────────
const blogPostsPath = path.join(ROOT, 'lib/blog-posts.ts')
const blogPostsContent = fs.readFileSync(blogPostsPath, 'utf-8')
const existingSlugs = [...blogPostsContent.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1])
const existingTitles = [...blogPostsContent.matchAll(/title:\s*'([^']+)'/g)].map(m => m[1])

// ─── Topic pool ───────────────────────────────────────────────────────────────
const TOPIC_POOL = [
  'AI for dental clinics and medical practices in Australia',
  'How AI voice agents handle outbound follow-up calls for Australian businesses',
  'AI chatbots for real estate agents in Australia — capturing leads 24/7',
  'How to automate appointment reminders and reduce no-shows',
  'AI social media manager: what it can and cannot do for your business',
  'AI automation for tradies in Australia — plumbers, electricians, builders',
  'How Australian beauty salons and spas use AI to fill their calendar',
  'AI for accountants and bookkeepers in Australia — automating client intake',
  'What is a voice AI agent and how does it work for Australian businesses',
  'How to choose between AI chatbot, AI receptionist, and voice agent',
  'AI automation ROI: how to calculate your savings before you start',
  'AI for fitness studios and gyms in Australia — member engagement automation',
  'How restaurants and cafes in Australia use AI to handle reservations',
  'AI for legal practices and law firms in Australia — client intake automation',
  'The real cost of missed calls for Australian small businesses',
  'How AI automation helps Australian businesses compete with larger companies',
  'AI for property managers in Australia — tenant enquiries and maintenance automation',
  'How small businesses in Australia can use AI for customer follow-up',
  'AI automation checklist: 10 things every Australian business owner should automate first',
  'How AI is changing customer service for Australian small businesses in 2026',
]

const topicOverride = process.env.TOPIC_OVERRIDE?.trim()
const availableTopics = TOPIC_POOL.filter(t =>
  !existingTitles.some(title => title.toLowerCase().includes(t.split(' ').slice(2, 5).join(' ').toLowerCase()))
)

const topicInstruction = topicOverride
  ? `Write about this specific topic: "${topicOverride}"`
  : `Pick the most compelling topic from this list:\n${availableTopics.slice(0, 10).map((t, i) => `${i + 1}. ${t}`).join('\n')}`

// ─── Prompt ───────────────────────────────────────────────────────────────────
const PROMPT = `You are a content writer for DigiSurf Australia, an AI automation agency serving Australian small businesses. Always use "we"/"our team" — never use an owner's name.

${topicInstruction}

Already published posts (do NOT repeat these topics):
${existingTitles.map(t => `- ${t}`).join('\n')}

Write a practical, valuable blog post. Plain English, no hype, Australian audience.

IMPORTANT: Return ONLY a valid JSON object — no markdown, no code fences, raw JSON only. Do NOT include date or dateISO fields (the system injects those automatically).

The sections array supports these types — use a MIX of them to create a visually rich article:

- "paragraphs" — plain text paragraphs
- "stats" — 3-4 big stat numbers in a row (e.g. costs, time savings, percentages)
- "bullets" — 2-column grid of feature/benefit cards with check icons (4-8 items)
- "cards" — 2-column grid of titled cards with description (4-6 items, e.g. industries, use cases)
- "table" — comparison table with headers + rows (e.g. AI vs Human, before vs after)
- "callout" — highlighted panel for a case study, example, or key insight
- "checklist" — stacked cards each with a title and longer description (3-5 items)

Use at least 3 different section types in the article. Every section must have a heading.

{
  "slug": "url-friendly-slug",
  "title": "Article Title",
  "metaDescription": "SEO meta description targeting an Australian keyword, 150-160 chars",
  "keywords": ["keyword Australia", "keyword 2 Australia", "keyword 3"],
  "excerpt": "One or two sentence excerpt under 160 chars for the blog card.",
  "readTime": "X min read",
  "category": "Guide",
  "categoryColor": "#00D4FF",
  "breadcrumbLabel": "Short breadcrumb label",
  "intro": "Opening paragraph of 2-3 sentences that immediately addresses the reader's problem.",
  "sections": [
    {
      "type": "stats",
      "heading": "The Numbers That Matter",
      "paragraphs": ["Optional paragraph before stats."],
      "stats": [
        {"value": "$297/mo", "label": "starting price"},
        {"value": "24/7", "label": "availability"},
        {"value": "7 days", "label": "to go live"},
        {"value": "15+ hrs", "label": "saved per week"}
      ]
    },
    {
      "type": "bullets",
      "heading": "What It Handles",
      "paragraphs": ["Optional paragraph before bullets."],
      "bullets": ["Answers every inbound call 24/7", "Books appointments directly into calendar", "Sends call summary emails automatically"]
    },
    {
      "type": "cards",
      "heading": "Industries That Benefit Most",
      "paragraphs": [],
      "cards": [
        {"title": "Tradies", "description": "Plumbers, electricians, and builders miss calls constantly while on-site. AI answers every one."},
        {"title": "Dental Clinics", "description": "Appointment bookings and reminders automated — zero receptionist downtime."}
      ]
    },
    {
      "type": "table",
      "heading": "AI vs Human: Head-to-Head",
      "paragraphs": [],
      "table": {
        "headers": ["Category", "Human", "AI"],
        "rows": [
          ["Monthly cost", "$4,000+", "$297/mo"],
          ["Availability", "Business hours", "24/7/365"]
        ]
      }
    },
    {
      "type": "callout",
      "heading": "Real Example",
      "paragraphs": [],
      "callout": {
        "label": "Example",
        "body": "A Sydney plumbing business was missing 6-8 calls per day. After deploying an AI receptionist, they recovered an average of $3,200/week in previously lost bookings within the first month.",
        "footnote": "Live in 7 days. No setup fee during our founding period."
      }
    },
    {
      "type": "checklist",
      "heading": "When to Use This",
      "paragraphs": [],
      "items": [
        {"title": "You are missing calls", "desc": "If you are regularly unavailable when customers call, every missed call is lost revenue."},
        {"title": "Your calls follow patterns", "desc": "If most calls are bookings, pricing questions, or FAQs, AI handles them perfectly."}
      ]
    },
    {
      "type": "paragraphs",
      "heading": "How to Get Started",
      "paragraphs": ["Starting is straightforward. You do not need to change your phone number or any existing system.", "We configure everything, train the AI on your business, and have it live within 7 days."]
    }
  ],
  "conclusionHeading": "The Bottom Line",
  "conclusion": "Closing paragraph. End with a soft pitch about booking a free strategy call.",
  "ctaHeading": "Find Out If This Is Right for Your Business",
  "ctaSubtext": "One sentence that reinforces the value of a free 15-minute call.",
  "relatedLinks": [
    {"href": "/blog/ai-receptionist-vs-human-receptionist", "label": "AI Receptionist vs Human Receptionist"},
    {"href": "/blog/ai-automation-for-small-business-australia", "label": "Complete AI Automation Guide"}
  ]
}

Rules:
- Do NOT include date or dateISO — the system injects those
- categoryColor: "#00D4FF" (cyan), "#3B7BFF" (blue), or "#7B5FFF" (purple)
- category: Guide, Strategy, Comparison, Case Study, or Tips
- Minimum 6 sections, using at least 3 different types
- Minimum 800 words total
- All text: plain apostrophes only, no special Unicode chars`

// ─── Call Claude API ──────────────────────────────────────────────────────────
console.log('Calling Claude API...')
const response = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.ANTHROPIC_API_KEY,
    'anthropic-version': '2023-06-01',
  },
  body: JSON.stringify({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 4096,
    messages: [{ role: 'user', content: PROMPT }],
  }),
})

if (!response.ok) {
  const err = await response.text()
  throw new Error(`Claude API error ${response.status}: ${err}`)
}

const data = await response.json()
const raw = data.content[0].text.trim()
const jsonStr = raw.replace(/^```(?:json)?\n?/i, '').replace(/\n?```$/i, '')

let post
try {
  post = JSON.parse(jsonStr)
} catch (e) {
  console.error('Raw response:', jsonStr.slice(0, 500))
  throw new Error('Claude returned invalid JSON')
}

// ─── Inject date (always today — never trust Claude for this) ─────────────────
post.date = DATE_DISPLAY
post.dateISO = DATE_ISO

// ─── Handle slug collision ────────────────────────────────────────────────────
if (existingSlugs.includes(post.slug)) {
  post.slug = post.slug + '-' + DATE_ISO.replace(/-/g, '')
  console.warn(`Slug collision — renamed to: ${post.slug}`)
}

console.log(`Generated: "${post.title}" (${post.slug})`)

// ─── Validate & fix related links against known slugs ────────────────────────
const knownSlugs = existingSlugs
if (post.relatedLinks?.length) {
  post.relatedLinks = post.relatedLinks
    .map(link => {
      const hrefSlug = link.href.replace('/blog/', '')
      if (knownSlugs.includes(hrefSlug)) return link
      // Slug doesn't exist — find closest match by label keyword
      const keyword = link.label.split(' ').slice(0, 3).join(' ').toLowerCase()
      const match = knownSlugs.find(s => s.includes(keyword.split(' ')[0]) || s.includes(keyword.split(' ')[1]))
      if (match) {
        console.warn(`Fixed related link: ${link.href} → /blog/${match}`)
        return { ...link, href: `/blog/${match}` }
      }
      return null // remove unresolvable links
    })
    .filter(Boolean)
    .slice(0, 3) // max 3 related links
}

// ─── JSX escape ───────────────────────────────────────────────────────────────
function e(str) {
  if (!str) return ''
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\{/g, '&#123;')
    .replace(/\}/g, '&#125;')
}

// Escape for use inside JSX attribute string values (inside "" or '')
function ea(str) {
  if (!str) return ''
  return String(str)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/"/g, '\\"')
}

// ─── Section renderers ────────────────────────────────────────────────────────

function renderParagraphs(paragraphs) {
  if (!paragraphs?.length) return ''
  return paragraphs.map(p =>
    `              <p className="text-[#7A8FA6] leading-relaxed mb-4">${e(p)}</p>`
  ).join('\n')
}

function renderStats(stats) {
  if (!stats?.length) return ''
  const count = stats.length
  const cols = count <= 3 ? `grid-cols-${count} sm:grid-cols-${count}` : 'grid-cols-2 sm:grid-cols-4'
  const items = stats.map((s, i) =>
    `                <div key={${i}} className="glass-card rounded-xl p-4 sm:p-5 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#00D4FF] mb-1">${e(s.value)}</div>
                  <div className="text-xs text-[#7A8FA6] leading-snug">${e(s.label)}</div>
                </div>`
  ).join('\n')
  return `              <div className="grid ${cols} gap-3 sm:gap-4 mb-6">
${items}
              </div>`
}

function renderBullets(bullets) {
  if (!bullets?.length) return ''
  const items = bullets.map((b, i) => {
    // Claude sometimes returns objects instead of strings — extract text safely
    const text = typeof b === 'string' ? b : (b.text || b.title || b.label || b.description || '')
    return `                <div key={${i}} className="glass-card rounded-xl p-4 flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#00D4FF] shrink-0 mt-0.5" />
                  <span className="text-[#e0eaf5] text-sm leading-relaxed">${e(text)}</span>
                </div>`
  }).join('\n')
  return `              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
${items}
              </div>`
}

function renderCards(cards) {
  if (!cards?.length) return ''
  const items = cards.map((c, i) =>
    `                <div key={${i}} className="glass-card rounded-xl p-5">
                  <h3 className="text-white font-semibold text-sm mb-2">${e(c.title)}</h3>
                  <p className="text-[#7A8FA6] text-sm leading-relaxed">${e(c.description)}</p>
                </div>`
  ).join('\n')
  return `              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
${items}
              </div>`
}

function renderTable(table) {
  if (!table?.headers || !table?.rows) return ''
  const headers = table.headers.map((h, i) =>
    `                        <th className="${i === 0 ? 'text-left' : 'text-center'} p-3 sm:p-4 text-[#4A6080] font-semibold text-sm">${e(h)}</th>`
  ).join('\n')
  const rows = table.rows.map((row, ri) =>
    `                      <tr className="border-b border-white/[0.05]${ri % 2 === 0 ? ' bg-white/[0.01]' : ''}">
${row.map((cell, ci) =>
  `                        <td className="${ci === 0 ? 'p-3 sm:p-4 text-[#7A8FA6] font-medium text-sm' : 'p-3 sm:p-4 text-center text-[#e0eaf5] text-sm'}">${e(cell)}</td>`
).join('\n')}
                      </tr>`
  ).join('\n')
  return `              <div className="glass-card rounded-2xl overflow-hidden mb-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm min-w-[400px]">
                    <thead>
                      <tr className="border-b border-white/[0.08]">
${headers}
                      </tr>
                    </thead>
                    <tbody>
${rows}
                    </tbody>
                  </table>
                </div>
              </div>`
}

function renderCallout(callout) {
  if (!callout?.body) return ''
  const footnote = callout.footnote
    ? `\n              <p className="text-[#7A8FA6] text-sm mt-3">${e(callout.footnote)}</p>`
    : ''
  return `              <div className="glass-card rounded-2xl p-5 sm:p-6 border-l-4 border-[#00D4FF] mb-6">
                <p className="text-[#e0eaf5] leading-relaxed">
                  <strong className="text-white">${e(callout.label)}:</strong> ${e(callout.body)}
                </p>${footnote}
              </div>`
}

function renderChecklist(items) {
  if (!items?.length) return ''
  const rendered = items.map((item, i) =>
    `                <div key={${i}} className="glass-card rounded-xl p-4 sm:p-5">
                  <h3 className="text-white font-semibold mb-2 text-sm">${e(item.title)}</h3>
                  <p className="text-[#7A8FA6] text-sm leading-relaxed">${e(item.desc)}</p>
                </div>`
  ).join('\n')
  return `              <div className="flex flex-col gap-3 mb-6">
${rendered}
              </div>`
}

function renderSection(section) {
  const paragraphs = renderParagraphs(section.paragraphs)
  let visual = ''
  switch (section.type) {
    case 'stats':    visual = renderStats(section.stats); break
    case 'bullets':  visual = renderBullets(section.bullets); break
    case 'cards':    visual = renderCards(section.cards); break
    case 'table':    visual = renderTable(section.table); break
    case 'callout':  visual = renderCallout(section.callout); break
    case 'checklist': visual = renderChecklist(section.items); break
    default: break
  }
  return `            {/* ${e(section.heading)} */}
            <div className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">${e(section.heading)}</h2>
${paragraphs}
${visual}
            </div>`
}

// ─── Build TSX ────────────────────────────────────────────────────────────────

const sectionsJSX = (post.sections || []).map(renderSection).join('\n\n')

const relatedLinks = (post.relatedLinks || [])
  .map(l => `                    <Link key="${ea(l.href)}" href="${ea(l.href)}" className="text-sm text-[#00D4FF] hover:underline">${e(l.label)} →</Link>`)
  .join('\n')

const tsxContent = `import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, ArrowRight, Check } from 'lucide-react'

export const metadata: Metadata = {
  title: '${ea(post.title)} — DigiSurf Australia',
  description: '${ea(post.metaDescription)}',
  keywords: ${JSON.stringify(post.keywords)},
  alternates: { canonical: 'https://www.digisurfaustralia.com.au/blog/${post.slug}' },
  openGraph: {
    title: '${ea(post.title)}',
    description: '${ea(post.metaDescription)}',
    url: 'https://www.digisurfaustralia.com.au/blog/${post.slug}',
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
            headline: '${ea(post.title)}',
            datePublished: '${post.dateISO}',
            dateModified: '${post.dateISO}',
            author: { '@type': 'Organization', name: 'DigiSurf Australia', url: 'https://www.digisurfaustralia.com.au' },
            publisher: { '@type': 'Organization', name: 'DigiSurf Australia', url: 'https://www.digisurfaustralia.com.au' },
            description: '${ea(post.metaDescription)}',
            url: 'https://www.digisurfaustralia.com.au/blog/${post.slug}',
          }),
        }}
      />

      <main className="min-h-screen bg-[#050B18]">

        {/* Hero */}
        <section className="pt-28 pb-14 sm:pb-16 bg-[#050B18] relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute top-1/4 right-1/3 w-64 sm:w-80 h-64 sm:h-80 rounded-full blur-[100px] sm:blur-[120px] opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, ${post.categoryColor}, transparent)' }} />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-[#4A6080] mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#00D4FF] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#00D4FF] transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-[#7A8FA6]">${e(post.breadcrumbLabel)}</span>
            </nav>
            <span className="badge badge-cyan mb-4 sm:mb-6">${e(post.category)}</span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5 sm:mb-6">
              ${e(post.title)}
            </h1>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-[#4A6080] mb-6 sm:mb-8">
              <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> ${e(post.date)}</span>
              <span>${e(post.readTime)}</span>
              <span>By DigiSurf Australia</span>
            </div>
            <p className="text-base sm:text-lg text-[#7A8FA6] leading-relaxed">
              ${e(post.intro)}
            </p>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-10 sm:py-12 bg-[#050B18]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

${sectionsJSX}

            {/* Conclusion */}
            <div className="mb-10 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">${e(post.conclusionHeading)}</h2>
              <p className="text-[#7A8FA6] leading-relaxed">
                ${e(post.conclusion)}
              </p>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-14 sm:py-16 bg-[#0D1526]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-card rounded-2xl p-8 sm:p-10">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">${e(post.ctaHeading)}</h2>
              <p className="text-[#7A8FA6] mb-6 sm:mb-8">${e(post.ctaSubtext)}</p>
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
              <p className="mt-4 text-xs text-[#4A6080]">From \$297/month · No setup fee during beta · Live in 5–7 days</p>
              <div className="mt-6 sm:mt-8 text-left">
                <p className="text-[#4A6080] text-xs uppercase tracking-wider mb-3">Related Articles</p>
                <div className="flex flex-wrap gap-3">
${relatedLinks}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
`

// ─── Write files ──────────────────────────────────────────────────────────────
const postDir = path.join(ROOT, 'app/blog', post.slug)
fs.mkdirSync(postDir, { recursive: true })
fs.writeFileSync(path.join(postDir, 'page.tsx'), tsxContent, 'utf-8')
console.log(`✓ Created: app/blog/${post.slug}/page.tsx`)

// Update lib/blog-posts.ts — insert at top of array (newest first)
const excerptEscaped = post.excerpt.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
const titleEscaped = post.title.replace(/\\/g, '\\\\').replace(/'/g, "\\'")

const newEntry = `  {
    href: '/blog/${post.slug}',
    slug: '${post.slug}',
    title: '${titleEscaped}',
    excerpt: '${excerptEscaped}',
    date: '${post.date}',
    dateISO: '${post.dateISO}',
    readTime: '${post.readTime}',
    category: '${post.category}',
    categoryColor: '${post.categoryColor}',
  },`

const updatedBlogPosts = blogPostsContent.replace(
  /export const blogPosts: BlogPost\[\] = \[/,
  `export const blogPosts: BlogPost[] = [\n${newEntry}`
)
fs.writeFileSync(blogPostsPath, updatedBlogPosts, 'utf-8')
console.log('✓ Updated lib/blog-posts.ts')
console.log(`\nDone! "${post.title}"`)
console.log(`URL: https://www.digisurfaustralia.com.au/blog/${post.slug}`)
