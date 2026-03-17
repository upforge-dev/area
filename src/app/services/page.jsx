import { getManagedMetadata, ManagedSchema } from '@sonordev/site-kit/seo'
import ServicesHero from './components/ServicesHero'
import ServicesGrid from './components/ServicesGrid'
import ServiceProcess from './components/ServiceProcess'
import ServicesTestimonial from './components/ServicesTestimonial'

export async function generateMetadata() {
  return getManagedMetadata({
    projectId: process.env.NEXT_PUBLIC_UPTRADE_PROJECT_ID,
    path: '/services',
    fallback: {
      title: 'Commercial Real Estate Financing Services | Adams Real Estate Advisors',
      description: 'Comprehensive commercial real estate financing solutions including construction loans, permanent mortgages, refinancing, and acquisition financing across the United States.',
    },
  })
}

export default function ServicesPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ManagedSchema
        projectId={process.env.NEXT_PUBLIC_UPTRADE_PROJECT_ID}
        path="/services"
      />
      <ServicesHero />
      <ServicesGrid />
      <ServiceProcess />
      <ServicesTestimonial />
    </div>
  )
}
