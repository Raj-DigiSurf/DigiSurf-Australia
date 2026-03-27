import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.digisurfaustralia.com.au'
  const now = new Date()

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${base}/ai-automation`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${base}/ai-receptionist`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/ai-chatbot`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/ai-voice-agent`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/ai-social-media`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${base}/blog/ai-receptionist-vs-human-receptionist`,
      lastModified: new Date('2025-03-15'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/blog/how-ai-saves-australian-businesses-time`,
      lastModified: new Date('2025-03-20'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${base}/blog/ai-automation-for-small-business-australia`,
      lastModified: new Date('2025-03-25'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}
