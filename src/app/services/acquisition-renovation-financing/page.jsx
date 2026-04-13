import { getManagedMetadata, ManagedSchema } from '@sonordev/site-kit/seo'
import AcquisitionRenovationHero from './components/AcquisitionRenovationHero'
import AcqRenovFeatures from './components/AcqRenovFeatures'
import ValueAddStrategies from './components/ValueAddStrategies'
import AcqRenovCTA from './components/AcqRenovCTA'

export async function generateMetadata() {
  return getManagedMetadata({
    projectId: process.env.NEXT_PUBLIC_UPTRADE_PROJECT_ID,
    favicon: 'component',
    path: '/services/acquisition-renovation-financing',
    fallback: {
      title: 'Acquisition & Renovation Financing | Value-Add Commercial Loans',
      description: 'Integrated financing for purchasing and improving commercial properties. Single-close solutions for value-add investments with purchase plus renovation capital.',
    },
  })
}

export default function AcquisitionRenovationPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ManagedSchema
        projectId={process.env.NEXT_PUBLIC_UPTRADE_PROJECT_ID}
        path="/services/acquisition-renovation-financing"
      />
      <AcquisitionRenovationHero />
      <AcqRenovFeatures />
      <ValueAddStrategies />
      <AcqRenovCTA />
    </div>
  )
}
