'use client'

import { useState, useMemo } from 'react'
import { Calculator, TrendingDown, DollarSign, Clock } from 'lucide-react'

const industryOptions = [
  { value: 'healthcare', label: 'Healthcare / Medical', hoursSaved: 18, avgHourlyRate: 55 },
  { value: 'fitness', label: 'Fitness / Coaching', hoursSaved: 12, avgHourlyRate: 45 },
  { value: 'realestate', label: 'Real Estate', hoursSaved: 15, avgHourlyRate: 60 },
  { value: 'retail', label: 'Retail / eCommerce', hoursSaved: 14, avgHourlyRate: 40 },
  { value: 'professional', label: 'Professional Services', hoursSaved: 16, avgHourlyRate: 75 },
  { value: 'other', label: 'Other', hoursSaved: 13, avgHourlyRate: 50 },
]

export function ROICalculator() {
  const [industry, setIndustry] = useState('healthcare')
  const [staff, setStaff] = useState(3)
  const [hoursPerWeek, setHoursPerWeek] = useState(15)
  const [hourlyRate, setHourlyRate] = useState(55)

  const selected = industryOptions.find(o => o.value === industry)!

  const results = useMemo(() => {
    const weeksPerYear = 52
    const totalHoursWasted = staff * hoursPerWeek * weeksPerYear
    const costOfManualWork = totalHoursWasted * hourlyRate
    const hoursSavedPerWeek = Math.min(hoursPerWeek * 0.75, selected.hoursSaved * staff)
    const annualHoursSaved = hoursSavedPerWeek * weeksPerYear
    const annualValueSaved = annualHoursSaved * hourlyRate
    const digiSurfCost = 18000 // Starter plan annualised
    const netSavings = annualValueSaved - digiSurfCost
    const roi = Math.round((netSavings / digiSurfCost) * 100)
    return {
      weeklyHoursSaved: Math.round(hoursSavedPerWeek),
      annualHoursSaved: Math.round(annualHoursSaved),
      annualValueSaved: Math.round(annualValueSaved),
      costOfManualWork: Math.round(costOfManualWork),
      netSavings: Math.round(netSavings),
      roi,
      paybackWeeks: Math.round(digiSurfCost / (annualValueSaved / 52)),
    }
  }, [industry, staff, hoursPerWeek, hourlyRate, selected.hoursSaved])

  return (
    <section id="roi-calculator" className="py-24 bg-[#0D1526] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[rgba(59,123,255,0.04)] blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="badge badge-blue mb-6">
            <Calculator className="w-3 h-3" />
            ROI Calculator
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            How Much Is Manual Work<br />
            <span className="text-gradient">Costing Your Business?</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg text-[#7A8FA6]">
            See exactly how much time and money AI automation will save you — before you spend a cent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-start">

          {/* Inputs */}
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-lg font-bold text-white mb-7">Tell us about your business</h3>

            <div className="flex flex-col gap-6">
              {/* Industry */}
              <div>
                <label className="block text-sm font-medium text-[#7A8FA6] mb-2">Your Industry</label>
                <select
                  value={industry}
                  onChange={(e) => {
                    setIndustry(e.target.value)
                    const opt = industryOptions.find(o => o.value === e.target.value)!
                    setHourlyRate(opt.avgHourlyRate)
                  }}
                  className="w-full bg-[#050B18] border border-white/[0.08] text-white rounded-xl px-4 py-3 text-sm focus:border-[#00D4FF] focus:outline-none focus:ring-1 focus:ring-[#00D4FF]/30 transition-colors"
                >
                  {industryOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              {/* Staff */}
              <div>
                <label className="block text-sm font-medium text-[#7A8FA6] mb-2">
                  Number of Staff: <span className="text-white font-bold">{staff}</span>
                </label>
                <input
                  type="range" min={1} max={20} value={staff}
                  onChange={(e) => setStaff(Number(e.target.value))}
                  className="w-full accent-[#00D4FF] cursor-pointer"
                />
                <div className="flex justify-between text-xs text-[#4A6080] mt-1"><span>1</span><span>20</span></div>
              </div>

              {/* Hours on admin per week */}
              <div>
                <label className="block text-sm font-medium text-[#7A8FA6] mb-2">
                  Admin hours per staff/week: <span className="text-white font-bold">{hoursPerWeek}hrs</span>
                </label>
                <input
                  type="range" min={2} max={30} value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full accent-[#00D4FF] cursor-pointer"
                />
                <div className="flex justify-between text-xs text-[#4A6080] mt-1"><span>2hrs</span><span>30hrs</span></div>
              </div>

              {/* Hourly rate */}
              <div>
                <label className="block text-sm font-medium text-[#7A8FA6] mb-2">
                  Average hourly cost (AUD): <span className="text-white font-bold">${hourlyRate}</span>
                </label>
                <input
                  type="range" min={25} max={150} step={5} value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full accent-[#00D4FF] cursor-pointer"
                />
                <div className="flex justify-between text-xs text-[#4A6080] mt-1"><span>$25</span><span>$150</span></div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex flex-col gap-5">
            {/* Big number */}
            <div className="border-gradient">
              <div className="glass-card rounded-2xl p-8 text-center">
                <p className="text-sm font-medium text-[#7A8FA6] mb-3">Estimated Annual Savings with DigiSurf</p>
                <div className="text-5xl font-bold text-gradient mb-2">
                  ${results.annualValueSaved.toLocaleString()}
                </div>
                <p className="text-sm text-[#4A6080]">AUD per year</p>
              </div>
            </div>

            {/* Stat grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-[#00D4FF]" />
                  <span className="text-xs text-[#7A8FA6]">Hours Saved/Week</span>
                </div>
                <div className="text-2xl font-bold text-white">{results.weeklyHoursSaved}hrs</div>
              </div>
              <div className="glass-card rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="w-4 h-4 text-[#3B7BFF]" />
                  <span className="text-xs text-[#7A8FA6]">ROI</span>
                </div>
                <div className="text-2xl font-bold text-white">{results.roi}%</div>
              </div>
              <div className="glass-card rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-4 h-4 text-[#7B5FFF]" />
                  <span className="text-xs text-[#7A8FA6]">Cost of Doing Nothing</span>
                </div>
                <div className="text-xl font-bold text-white">${results.costOfManualWork.toLocaleString()}</div>
              </div>
              <div className="glass-card rounded-xl p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="w-4 h-4 text-[#00D4FF]" />
                  <span className="text-xs text-[#7A8FA6]">Payback Period</span>
                </div>
                <div className="text-2xl font-bold text-white">{results.paybackWeeks}wks</div>
              </div>
            </div>

            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary w-full text-center"
            >
              Get My Free AI Audit — Save ${results.annualValueSaved.toLocaleString()}/yr
            </button>
            <p className="text-xs text-center text-[#4A6080]">* Estimates based on average client data. Actual results may vary.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
