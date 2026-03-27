'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import type { BlogPost } from '@/lib/blog-posts'

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest')

  const sorted = [...posts].sort((a, b) => {
    const diff = new Date(b.dateISO).getTime() - new Date(a.dateISO).getTime()
    return sortOrder === 'newest' ? diff : -diff
  })

  return (
    <div>
      {/* Sort toggle */}
      <div className="flex justify-end mb-6">
        <div className="glass-card rounded-xl px-4 py-2 flex items-center gap-1">
          <span className="text-xs text-[#4A6080] mr-2">Sort:</span>
          <button
            onClick={() => setSortOrder('newest')}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
              sortOrder === 'newest'
                ? 'bg-[#00D4FF]/10 text-[#00D4FF]'
                : 'text-[#4A6080] hover:text-[#7A8FA6]'
            }`}
          >
            Newest
          </button>
          <button
            onClick={() => setSortOrder('oldest')}
            className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors ${
              sortOrder === 'oldest'
                ? 'bg-[#00D4FF]/10 text-[#00D4FF]'
                : 'text-[#4A6080] hover:text-[#7A8FA6]'
            }`}
          >
            Oldest
          </button>
        </div>
      </div>

      {/* Posts */}
      <div className="flex flex-col gap-5 sm:gap-6">
        {sorted.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            className="glass-card rounded-2xl p-5 sm:p-7 group block hover:no-underline"
          >
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3">
              <span
                className="text-xs font-bold px-3 py-1 rounded-full"
                style={{
                  background: `${post.categoryColor}15`,
                  color: post.categoryColor,
                  border: `1px solid ${post.categoryColor}40`,
                }}
              >
                {post.category}
              </span>
              <div className="flex items-center gap-2 sm:gap-3 text-xs text-[#4A6080]">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>
            </div>
            <h2 className="text-base sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#00D4FF] transition-colors leading-snug">
              {post.title}
            </h2>
            <p className="text-[#7A8FA6] text-sm leading-relaxed mb-3 sm:mb-4">{post.excerpt}</p>
            <span className="text-sm font-semibold text-[#00D4FF] flex items-center gap-1">
              Read article <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
