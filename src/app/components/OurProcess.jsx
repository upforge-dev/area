/**
 * Server component. It has no state, no effects and no handlers, and it now
 * renders site-kit's AEO markup, which is server-only (the llms entry reaches
 * for `fs`). Adding 'use client' back would fail the build.
 */
import { Lightbulb, Handshake, CheckCircle } from 'lucide-react'
import { AEOSteps, AEOStep } from '@sonordev/site-kit/llms'

const steps = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Consultation & Strategy",
    description: "We begin with an in-depth discussion to understand your project, financial goals, and specific requirements. We then develop a tailored financing strategy that aligns with your objectives."
  },
  {
    icon: Handshake,
    number: "02",
    title: "Lender Matching & Negotiation",
    description: "Leveraging our extensive network, we identify the most suitable lenders and negotiate competitive terms on your behalf. Our relationships secure you better rates and terms."
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Closing & Beyond",
    description: "We manage the closing process efficiently, ensuring a smooth transaction. Our support extends beyond closing to foster long-term partnerships and provide ongoing guidance."
  }
]

export default function OurProcess() {
  return (
    <section className="py-20 md:py-24 bg-gray-100 relative">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#081c3e] via-[#b9945a] to-[#081c3e]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#081c3e] mb-6">
            Our Streamlined Financing Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We guide you through every step of the commercial real estate financing journey with clarity, efficiency, and expertise.
          </p>
        </div>
        
        {/* The visible steps are icon cards, so they cannot be the HowTo list
            themselves. This restates them and adds nothing. */}
        <AEOSteps title="Our streamlined financing process" className="sr-only">
          {steps.map((step, index) => (
            <AEOStep key={step.number} number={index + 1} name={step.title}>
              {step.description}
            </AEOStep>
          ))}
        </AEOSteps>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Number badge */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-[#b9945a] text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="flex justify-center mb-6 mt-4">
                <div className="p-4 bg-[#081c3e]/5 rounded-full group-hover:bg-[#b9945a]/10 transition-colors">
                  <step.icon className="h-12 w-12 text-[#b9945a]" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-[#081c3e] text-center">
                {step.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-center">
                {step.description}
              </p>
              
              {/* Connection line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-12 w-6 lg:w-12 h-0.5 bg-gradient-to-r from-[#b9945a] to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
