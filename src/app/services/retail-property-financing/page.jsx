import { getManagedMetadata, LLMSchema, ManagedSchema } from '@sonordev/site-kit/seo'
import RetailHero from './components/RetailHero'
import RetailFeatures from './components/RetailFeatures'
import RetailPropertyTypes from './components/RetailPropertyTypes'
import RetailCTA from './components/RetailCTA'

export async function generateMetadata() {
  return getManagedMetadata({
    favicon: 'component',
    path: '/services/retail-property-financing',
    fallback: {
      title: 'Retail Property Financing | Shopping Centers & Retail Buildings',
      description: 'Specialized financing for shopping centers, strip malls, standalone retail, and mixed-use retail properties. Expert guidance for retail real estate investors and developers.',
    },
  })
}

export default function RetailPropertyFinancingPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ManagedSchema path="/services/retail-property-financing" />
      <LLMSchema path="/services/retail-property-financing" />
      <RetailHero />
      <RetailFeatures />
      <RetailPropertyTypes />
      <RetailCTA />
    </div>
  )
}
