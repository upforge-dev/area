import { getManagedMetadata, LLMSchema, ManagedSchema } from '@sonordev/site-kit/seo'
import ConstructionLoansHero from './components/ConstructionLoansHero'
import LoanFeatures from './components/LoanFeatures'
import PropertyTypes from './components/PropertyTypes'
import ConstructionProcess from './components/ConstructionProcess'
import ConstructionCTA from './components/ConstructionCTA'

export async function generateMetadata() {
  return getManagedMetadata({
    favicon: 'component',
    path: '/services/construction-loans',
    fallback: {
      title: 'Construction Loans | Commercial Real Estate Financing',
      description: 'Ground-up construction financing for commercial properties. Flexible draw schedules, competitive rates, and expert guidance for hotels, multifamily, retail, and senior living development.',
    },
  })
}

export default function ConstructionLoansPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ManagedSchema path="/services/construction-loans" />
      <LLMSchema path="/services/construction-loans" />
      <ConstructionLoansHero />
      <LoanFeatures />
      <PropertyTypes />
      <ConstructionProcess />
      <ConstructionCTA />
    </div>
  )
}
