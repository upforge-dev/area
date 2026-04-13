import { getManagedMetadata, ManagedSchema } from '@sonordev/site-kit/seo'
import PermanentMortgagesHero from './components/PermanentMortgagesHero'
import MortgageFeatures from './components/MortgageFeatures'
import LoanPrograms from './components/LoanPrograms'
import PermanentCTA from './components/PermanentCTA'

export async function generateMetadata() {
  return getManagedMetadata({
    projectId: process.env.NEXT_PUBLIC_UPTRADE_PROJECT_ID,
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
      <ManagedSchema
        projectId={process.env.NEXT_PUBLIC_UPTRADE_PROJECT_ID}
        path="/services/permanent-mortgages"
      />
      <PermanentMortgagesHero />
      <MortgageFeatures />
      <LoanPrograms />
      <PermanentCTA />
    </div>
  )
}
