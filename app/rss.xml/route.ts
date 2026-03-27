import { blogPosts } from '@/lib/blog-posts'

export const dynamic = 'force-static'

export async function GET() {
  const siteUrl = 'https://www.digisurfaustralia.com.au'

  const items = blogPosts
    .slice()
    .sort((a, b) => new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime())
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}${post.href}</link>
      <guid isPermaLink="true">${siteUrl}${post.href}</guid>
      <description><![CDATA[${post.excerpt}]]></description>
      <pubDate>${new Date(post.dateISO).toUTCString()}</pubDate>
      <category>${post.category}</category>
    </item>`
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>DigiSurf Australia — AI Automation Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Practical guides on AI automation for Australian small businesses.</description>
    <language>en-AU</language>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${siteUrl}/og-image.png</url>
      <title>DigiSurf Australia</title>
      <link>${siteUrl}</link>
    </image>
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
