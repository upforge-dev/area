import { getManagedMetadata, LLMSchema, ManagedSchema } from '@sonordev/site-kit/seo'
import PermanentMortgagesHero from './components/PermanentMortgagesHero'
import MortgageFeatures from './components/MortgageFeatures'
import LoanPrograms from './components/LoanPrograms'
import PermanentCTA from './components/PermanentCTA'

export async function generateMetadata() {
  return getManagedMetadata({
    favicon: 'component',
    path: '/services/permanent-mortgages',
    fallback: {
      title: 'Permanent Mortgages | Commercial Real Estate Financing',
      description: 'Long-term permanent financing for stabilized commercial properties. Fixed and variable rates, non-recourse options, and competitive terms nationwide.',
    },
  })
}

export default function PermanentMortgagesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ManagedSchema path="/services/permanent-mortgages" />
      <LLMSchema path="/services/permanent-mortgages" />
      <PermanentMortgagesHero />
      <MortgageFeatures />
      <LoanPrograms />
      <PermanentCTA />
    </div>
  )
}
