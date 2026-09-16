/**
 * Server component. It has no state, no effects and no handlers, and it now
 * renders site-kit's AEO markup, which is server-only (the llms entry reaches
 * for `fs`). Adding 'use client' back would fail the build.
 */
import { DollarSign, Award, TrendingUp, Users } from 'lucide-react'
import { AEOSummary } from '@sonordev/site-kit/llms'

const stats = [
  { label: "Total Financing", value: "$1.8B+", icon: DollarSign, description: "Across 500+ successful deals" },
  { label: "Years Experience", value: "35+", icon: Award, description: "Industry expertise" },
  { label: "Successful Deals", value: "500+", icon: TrendingUp, description: "Closed transactions" },
  { label: "Happy Clients", value: "200+", icon: Users, description: "Satisfied partners" }
]

export default function Stats() {
  return (
    <section className="py-16 md:py-20 bg-[#081c3e] text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* The same four figures the tiles show, in a list an answer engine
            can lift. Each stat's detail line is hidden below md, so this is
            also the only place a phone reads it. No new numbers. */}
        <AEOSummary
          title="Adams Real Estate Advisors at a glance"
          points={stats.map((stat) => `${stat.label}: ${stat.value}. ${stat.description}.`)}
          className="sr-only"
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-[#b9945a]/20 rounded-full group-hover:bg-[#b9945a]/30 transition-colors">
                  <stat.icon className="h-10 w-10 md:h-12 md:w-12 text-[#b9945a]" />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-[#b9945a] transition-colors">
                {stat.value}
              </div>
              <div className="text-gray-300 font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-400 text-sm hidden md:block">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
