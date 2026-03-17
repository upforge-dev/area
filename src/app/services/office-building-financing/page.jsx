import { getManagedMetadata, ManagedSchema } from '@sonordev/site-kit/seo'
import OfficeHero from './components/OfficeHero'
import OfficeFeatures from './components/OfficeFeatures'
import OfficePropertyTypes from './components/OfficePropertyTypes'
import OfficeCTA from './components/OfficeCTA'

export async function generateMetadata() {
  return getManagedMetadata({
    projectId: process.env.NEXT_PUBLIC_UPTRADE_PROJECT_ID,
    path: '/services/office-building-financing',
    fallback: {
      title: 'Office Building Financing | Commercial Office Property Loans',
      description: 'Comprehensive financing for office buildings, corporate parks, medical offices, and professional facilities. Expert guidance for office real estate nationwide.',
    },
  })
}

export default function OfficeFinancingPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ManagedSchema
        projectId={process.env.NEXT_PUBLIC_UPTRADE_PROJECT_ID}
        path="/services/office-building-financing"
      />
      <OfficeHero />
      <OfficeFeatures />
      <OfficePropertyTypes />
      <OfficeCTA />
    </div>
  )
}
