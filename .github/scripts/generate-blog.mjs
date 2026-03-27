/**
 * DigiSurf Australia — Auto Blog Generator
 * Calls Claude API to generate a new blog post, writes the TSX file,
 * and updates lib/blog-posts.ts automatically.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '../..')

// ─── Read existing posts to avoid duplicate topics ───────────────────────────

const blogPostsPath = path.join(ROOT, 'lib/blog-posts.ts')
const blogPostsContent = fs.readFileSync(blogPostsPath, 'utf-8')

const existingSlugs = [...blogPostsContent.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1])
const existingTitles = [...blogPostsContent.matchAll(/title:\s*'([^']+)'/g)].map(m => m[1])

// ─── Topic pool (AI will pick one not yet covered) ────────────────────────────

const TOPIC_POOL = [
  'AI for dental clinics and medical practices Australia',
  'How AI voice agents handle outbound follow-up calls for Australian businesses',
  'AI chatbots for real estate agents Australia — capturing leads 24/7',
  'How to automate appointment reminders and reduce no-shows for Australian businesses',
  'AI social media manager: what it can and cannot do for your business',
  'AI automation for tradies in Australia — plumbers, electricians, builders',
  'How Australian beauty salons and spas use AI to fill their calendar',
  'AI for accountants and bookkeepers in Australia — automating client intake',
  'What is a voice AI agent and how does it work for Australian businesses',
  'How to choose between AI chatbot, AI receptionist, and voice agent for your business',
  'AI automation ROI: how to calculate your savings before you start',
  'AI for fitness studios and gyms in Australia — member engagement automation',
  'How restaurants and cafes in Australia use AI to handle reservations and enquiries',
  'AI for legal practices and law firms in Australia — client intake automation',
  'The real cost of missed calls for Australian small businesses',
]

const topicOverride = process.env.TOPIC_OVERRIDE?.trim()

// ─── Build prompt ─────────────────────────────────────────────────────────────

const availableTopics = TOPIC_POOL.filter(t =>
  !existingTitles.some(title => title.toLowerCase().includes(t.split(' ')[2]?.toLowerCase() ?? ''))
)

const topicInstruction = topicOverride
  ? `Write about this specific topic: "${topicOverride}"`
  : `Pick the most compelling topic from this list that hasn't been covered yet:\n${availableTopics.map((t, i) => `${i + 1}. ${t}`).join('\n')}`

const PROMPT = `You are a content writer for DigiSurf Australia, an AI automation agency serving Australian small businesses. The business speaks as "we"/"our team" — never use an owner's name.

${topicInstruction}

Already published posts (do NOT repeat these topics):
${existingTitles.map(t => `- ${t}`).join('\n')}

Write a practical, valuable blog post. Australian audience, plain English, no hype.

Return ONLY a valid JSON object with this exact structure (no markdown, no code fences, raw JSON only):

{
  "slug": "url-friendly-slug-here",
  "title": "Article Title Here",
  "metaDescription": "SEO meta description 150-160 chars targeting an Australian keyword",
  "keywords": ["keyword 1 Australia", "keyword 2 Australia", "keyword 3"],
  "excerpt": "One or two sentence excerpt for the blog card. Under 160 chars.",
  "date": "DD Month YYYY",
  "dateISO": "YYYY-MM-DD",
  "readTime": "X min read",
  "category": "Guide",
  "categoryColor": "#00D4FF",
  "breadcrumbLabel": "Short breadcrumb label",
  "intro": "Opening paragraph of 2-3 sentences that immediately addresses the reader's problem.",
  "sections": [
    {
      "heading": "Section Heading",
      "paragraphs": ["Paragraph 1 text.", "Paragraph 2 text."],
      "bullets": ["Optional bullet point 1", "Optional bullet point 2"]
    }
  ],
  "conclusionHeading": "Conclusion heading",
  "conclusion": "Closing paragraph. End with a soft pitch: a free strategy call can help them figure out the right solution.",
  "ctaHeading": "CTA heading relevant to the article topic",
  "ctaSubtext": "One sentence that reinforces the value of booking a call.",
  "relatedLinks": [
    { "href": "/blog/ai-receptionist-vs-human-receptionist", "label": "AI Receptionist vs Human Receptionist" },
    { "href": "/blog/ai-automation-for-small-business-australia", "label": "Complete AI Automation Guide" }
  ]
}

Rules:
- Use today's date for date/dateISO
- categoryColor must be one of: "#00D4FF", "#3B7BFF", "#7B5FFF"
- category must be one of: Guide, Strategy, Comparison, Case Study, Tips
- 5-8 sections, each with 1-3 paragraphs
- At least 2 sections should have bullets (4-6 items each)
- All text must escape apostrophes as regular apostrophes (no special chars needed — the script handles JSX escaping)
- slug must be unique and not match any existing slug
- Minimum 800 words total content`

// ─── Call Claude API ──────────────────────────────────────────────────────────

console.log('Calling Claude API to generate blog post...')

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

// Strip any accidental markdown code fences
const jsonStr = raw.replace(/^```(?:json)?\n?/i, '').replace(/\n?```$/i, '')

let post
try {
  post = JSON.parse(jsonStr)
} catch (e) {
  console.error('Failed to parse JSON response:', jsonStr)
  throw new Error('Claude returned invalid JSON')
}

console.log(`Generated post: "${post.title}" (slug: ${post.slug})`)

// ─── Check for slug collision ─────────────────────────────────────────────────

if (existingSlugs.includes(post.slug)) {
  post.slug = post.slug + '-' + new Date().getFullYear()
  console.warn(`Slug collision — renamed to: ${post.slug}`)
}

// ─── Escape helper for JSX ────────────────────────────────────────────────────

function jsxEscape(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;')
}

function renderParagraph(text) {
  return `              <p className="text-[#7A8FA6] leading-relaxed mb-4">\n                ${jsxEscape(text)}\n              </p>`
}

function renderBullets(bullets) {
  if (!bullets || bullets.length === 0) return ''
  const items = bullets.map(b => `                  <li key="${b.slice(0, 20).replace(/\s/g, '-')}" className="flex items-start gap-3">
                    <span className="text-[#00D4FF] shrink-0 mt-1">▸</span>
                    <span className="text-[#e0eaf5] text-sm leading-relaxed">${jsxEscape(b)}</span>
                  </li>`).join('\n')
  return `              <ul className="flex flex-col gap-3 mb-4 list-none p-0">
${items}
              </ul>`
}

function renderSection(section) {
  const paragraphs = (section.paragraphs || []).map(renderParagraph).join('\n')
  const bullets = renderBullets(section.bullets)
  return `            {/* ${section.heading} */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">${jsxEscape(section.heading)}</h2>
${paragraphs}
${bullets}
            </div>`
}

// ─── Generate TSX file ────────────────────────────────────────────────────────

const sectionsJSX = post.sections.map(renderSection).join('\n\n')

const relatedLinks = (post.relatedLinks || [])
  .map(l => `                    <Link key="${l.href}" href="${l.href}" className="text-sm text-[#00D4FF] hover:underline">${jsxEscape(l.label)} →</Link>`)
  .join('\n')

const tsxContent = `import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: '${jsxEscape(post.title)} — DigiSurf Australia',
  description: '${jsxEscape(post.metaDescription)}',
  keywords: ${JSON.stringify(post.keywords)},
  alternates: { canonical: 'https://www.digisurfaustralia.com.au/blog/${post.slug}' },
  openGraph: {
    title: '${jsxEscape(post.title)}',
    description: '${jsxEscape(post.metaDescription)}',
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
            headline: '${jsxEscape(post.title)}',
            datePublished: '${post.dateISO}',
            dateModified: '${post.dateISO}',
            author: { '@type': 'Organization', name: 'DigiSurf Australia', url: 'https://www.digisurfaustralia.com.au' },
            publisher: { '@type': 'Organization', name: 'DigiSurf Australia', url: 'https://www.digisurfaustralia.com.au' },
            description: '${jsxEscape(post.metaDescription)}',
            url: 'https://www.digisurfaustralia.com.au/blog/${post.slug}',
          }),
        }}
      />

      <main className="min-h-screen bg-[#050B18]">

        {/* Hero */}
        <section className="pt-28 pb-16 bg-[#050B18] relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-xs text-[#4A6080] mb-6">
              <Link href="/" className="hover:text-[#00D4FF] transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[#00D4FF] transition-colors">Blog</Link>
              <span>/</span>
              <span className="text-[#7A8FA6]">${jsxEscape(post.breadcrumbLabel)}</span>
            </nav>
            <span className="badge badge-cyan mb-6">${jsxEscape(post.category)}</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              ${jsxEscape(post.title)}
            </h1>
            <div className="flex items-center gap-4 text-sm text-[#4A6080] mb-8">
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> ${jsxEscape(post.date)}</span>
              <span>${jsxEscape(post.readTime)}</span>
              <span>By DigiSurf Australia</span>
            </div>
            <p className="text-lg text-[#7A8FA6] leading-relaxed">
              ${jsxEscape(post.intro)}
            </p>
          </div>
        </section>

        {/* Article Body */}
        <section className="py-12 bg-[#050B18]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

${sectionsJSX}

            {/* Conclusion */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">${jsxEscape(post.conclusionHeading)}</h2>
              <p className="text-[#7A8FA6] leading-relaxed">
                ${jsxEscape(post.conclusion)}
              </p>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#0D1526]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="glass-card rounded-2xl p-10">
              <h2 className="text-2xl font-bold text-white mb-3">${jsxEscape(post.ctaHeading)}</h2>
              <p className="text-[#7A8FA6] mb-8">${jsxEscape(post.ctaSubtext)}</p>
              <a
                href="https://meetings-na2.hubspot.com/henish"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4"
              >
                <Calendar className="w-4 h-4" />
                Book a Free Strategy Call
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="mt-4 text-xs text-[#4A6080]">From \$297/month · No setup fee during beta · Live in 5–7 days</p>
              <div className="mt-8 text-left">
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

// ─── Write TSX file ───────────────────────────────────────────────────────────

const postDir = path.join(ROOT, 'app/blog', post.slug)
fs.mkdirSync(postDir, { recursive: true })
fs.writeFileSync(path.join(postDir, 'page.tsx'), tsxContent, 'utf-8')
console.log(`✓ Created: app/blog/${post.slug}/page.tsx`)

// ─── Update lib/blog-posts.ts ─────────────────────────────────────────────────

const newEntry = `  {
    href: '/blog/${post.slug}',
    slug: '${post.slug}',
    title: '${post.title.replace(/'/g, "\\'")}',
    excerpt: '${post.excerpt.replace(/'/g, "\\'")}',
    date: '${post.date}',
    dateISO: '${post.dateISO}',
    readTime: '${post.readTime}',
    category: '${post.category}',
    categoryColor: '${post.categoryColor}',
  },`

// Insert at the top of the array (most recent first)
const updatedBlogPosts = blogPostsContent.replace(
  /export const blogPosts: BlogPost\[\] = \[/,
  `export const blogPosts: BlogPost[] = [\n${newEntry}`
)

fs.writeFileSync(blogPostsPath, updatedBlogPosts, 'utf-8')
console.log('✓ Updated lib/blog-posts.ts')
console.log(`\nDone! New post: "${post.title}"`)
console.log(`URL: https://www.digisurfaustralia.com.au/blog/${post.slug}`)
