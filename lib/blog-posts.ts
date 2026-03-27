export interface BlogPost {
  href: string
  slug: string
  title: string
  excerpt: string
  date: string
  dateISO: string
  readTime: string
  category: string
  categoryColor: string
}

export const blogPosts: BlogPost[] = [
  {
    href: '/blog/calculate-ai-automation-roi-australian-business',
    slug: 'calculate-ai-automation-roi-australian-business',
    title: 'AI Automation ROI: How to Calculate Your Savings Before You Start',
    excerpt: 'Before investing in AI automation, know exactly how much you\'ll save. Here\'s how to calculate your ROI in three simple steps.',
    date: '16 January 2025',
    dateISO: '2025-01-16',
    readTime: '7 min read',
    category: 'Guide',
    categoryColor: '#00D4FF',
  },
  {
    href: '/blog/ai-automation-for-small-business-australia',
    slug: 'ai-automation-for-small-business-australia',
    title: 'AI Automation for Small Business in Australia: A Complete Guide (2025)',
    excerpt: 'What to automate first, how much it costs, and how to get started without being technical. The no-fluff guide for Australian business owners.',
    date: '25 March 2025',
    dateISO: '2025-03-25',
    readTime: '8 min read',
    category: 'Guide',
    categoryColor: '#00D4FF',
  },
  {
    href: '/blog/how-ai-saves-australian-businesses-time',
    slug: 'how-ai-saves-australian-businesses-time',
    title: 'How AI Saves Australian Small Businesses 15+ Hours Per Week',
    excerpt: 'A real breakdown of where business owners waste time and exactly how AI automation recovers it — with numbers.',
    date: '20 March 2025',
    dateISO: '2025-03-20',
    readTime: '6 min read',
    category: 'Strategy',
    categoryColor: '#3B7BFF',
  },
  {
    href: '/blog/ai-receptionist-vs-human-receptionist',
    slug: 'ai-receptionist-vs-human-receptionist',
    title: 'AI Receptionist vs Human Receptionist: Which Is Right for Your Business?',
    excerpt: 'Cost, availability, accuracy — a head-to-head comparison to help you decide what makes sense for your business right now.',
    date: '15 March 2025',
    dateISO: '2025-03-15',
    readTime: '7 min read',
    category: 'Comparison',
    categoryColor: '#7B5FFF',
  },
]
