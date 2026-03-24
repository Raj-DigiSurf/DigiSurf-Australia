'use client'

const stats = [
  { value: '47+', label: 'Google Reviews', sub: '4.9★ Average Rating' },
  { value: '53+', label: 'Businesses Automated', sub: 'Across Australia' },
  { value: '15hrs', label: 'Saved Per Week', sub: 'Per Client Average' },
  { value: '30 Days', label: 'ROI Guaranteed', sub: 'Or We Work Free' },
]

const logos = [
  'MediCare Plus', 'FitLife Studios', 'Ray White', 'Pinnacle Health', 'BodyForge Gym', 'PropEdge'
]

export function SocialProof() {
  return (
    <section className="py-12 border-y border-white/[0.06] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#050B18] via-[#0D1526] to-[#050B18]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/[0.06] mb-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:px-8">
              <div className="text-3xl font-bold text-gradient-cyan mb-1">{stat.value}</div>
              <div className="text-sm font-semibold text-white mb-0.5">{stat.label}</div>
              <div className="text-xs text-[#4A6080]">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Client Logos */}
        <div className="text-center mb-6">
          <p className="text-xs font-medium uppercase tracking-widest text-[#4A6080]">Trusted by Australian businesses</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {logos.map((logo) => (
            <div
              key={logo}
              className="px-5 py-2.5 rounded-lg border border-white/[0.06] bg-white/[0.02] text-sm font-semibold text-[#4A6080] hover:text-[#7A8FA6] hover:border-white/[0.12] transition-all duration-200"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
