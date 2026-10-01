/**
 * Server component. It has no state, no effects and no handlers, and it now
 * renders site-kit's AEO markup, which is server-only (the llms entry reaches
 * for `fs`). Adding 'use client' back would fail the build.
 */
import { FileText, Search, FileCheck, Hammer, Key } from 'lucide-react'
import { AEOSteps, AEOStep } from '@sonordev/site-kit/seo/llms'

const steps = [
  {
    icon: FileText,
    title: "Project Submission",
    description: "Submit your project details including plans, budgets, and financial projections."
  },
  {
    icon: Search,
    title: "Lender Selection",
    description: "We match your project with the most suitable lenders from our extensive network."
  },
  {
    icon: FileCheck,
    title: "Application & Approval",
    description: "Complete application package and work through lender underwriting process."
  },
  {
    icon: Hammer,
    title: "Construction Phase",
    description: "Manage draw requests and construction administration throughout the build."
  },
  {
    icon: Key,
    title: "Project Completion",
    description: "Final inspections, certificate of occupancy, and transition to permanent financing."
  }
]

export default function ConstructionProcess() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#081c3e] mb-4">
            The Construction Financing Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial planning to project completion, we guide you through every phase of construction financing.
          </p>
        </div>
        
        {/* The five steps below, restated as HowTo markup. The visible cards
            carry icons and cannot be the list itself; the words are theirs. */}
        <AEOSteps title="The construction financing process" className="sr-only">
          {steps.map((step, index) => (
            <AEOStep key={step.title} number={index + 1} name={step.title}>
              {step.description}
            </AEOStep>
          ))}
        </AEOSteps>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-6 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#b9945a] text-white rounded-full flex items-center justify-center font-bold text-2xl">
                  {index + 1}
                </div>
              </div>
              <div className="flex-1 pt-2">
                <div className="flex items-center gap-3 mb-2">
                  <step.icon className="h-6 w-6 text-[#b9945a]" />
                  <h3 className="text-2xl font-bold text-[#081c3e]">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-lg">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
