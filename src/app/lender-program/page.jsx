import { getManagedMetadata, ManagedSchema } from '@sonordev/site-kit/seo'
import LenderProgramHero from './components/LenderProgramHero'
import ProgramBenefits from './components/ProgramBenefits'
import DealFlow from './components/DealFlow'
import LenderRequirements from './components/LenderRequirements'
import LenderCTA from './components/LenderCTA'

export async function generateMetadata() {
  return getManagedMetadata({
    projectId: process.env.NEXT_PUBLIC_UPTRADE_PROJECT_ID,
    favicon: 'component',
    path: '/lender-program',
    fallback: {
      title: 'Lender Partner Program | Adams Real Estate Advisors',
      description: 'Join our lender network and access quality commercial real estate financing opportunities. Partner with us to expand your loan portfolio with pre-qualified deals.',
    },
  })
}

export default function LenderProgramPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ManagedSchema
        projectId={process.env.NEXT_PUBLIC_UPTRADE_PROJECT_ID}
        path="/lender-program"
      />
      <LenderProgramHero />
      <ProgramBenefits />
      <DealFlow />
      <LenderRequirements />
      <LenderCTA />
    </div>
  )
}
