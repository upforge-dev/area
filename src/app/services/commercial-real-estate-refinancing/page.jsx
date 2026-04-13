import { getManagedMetadata, ManagedSchema } from '@sonordev/site-kit/seo'
import RefinancingHero from './components/RefinancingHero'
import RefinancingBenefits from './components/RefinancingBenefits'
import RefinancingScenarios from './components/RefinancingScenarios'
import RefinancingCTA from './components/RefinancingCTA'

export async function generateMetadata() {
  return getManagedMetadata({
    projectId: process.env.NEXT_PUBLIC_UPTRADE_PROJECT_ID,
    favicon: 'component',
    path: '/services/commercial-real-estate-refinancing',
    fallback: {
      title: 'Commercial Real Estate Refinancing | Adams Real Estate Advisors',
      description: 'Strategic refinancing solutions to lower rates, extract equity, or improve terms on commercial properties. Cash-out refinancing and debt restructuring nationwide.',
    },
  })
}

export default function RefinancingPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ManagedSchema
        projectId={process.env.NEXT_PUBLIC_UPTRADE_PROJECT_ID}
        path="/services/commercial-real-estate-refinancing"
      />
      <RefinancingHero />
      <RefinancingBenefits />
      <RefinancingScenarios />
      <RefinancingCTA />
    </div>
  )
}
