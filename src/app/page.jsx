import { getManagedMetadata, LLMSchema, ManagedSchema } from '@sonordev/site-kit/seo'
import Hero from './components/Hero'
import Stats from './components/Stats'
import WhyChooseUs from './components/WhyChooseUs'
import OurProcess from './components/OurProcess'
import FeaturedServices from './components/FeaturedServices'
import ClientTestimonials from './components/ClientTestimonials'

export async function generateMetadata() {
  return getManagedMetadata({
    favicon: 'component',
    path: '/',
    fallback: {
      title: 'Adams Real Estate Advisors | Premier Commercial Real Estate Financing',
      description: 'Trusted partner for commercial real estate financing. Construction loans, permanent mortgages, and refinancing solutions. Over $1.8 billion financed across the United States.',
    },
  })
}

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ManagedSchema path="/" />
      <LLMSchema path="/" />
      <Hero />
      <Stats />
      <WhyChooseUs />
      <OurProcess />
      <FeaturedServices />
      <ClientTestimonials />
    </div>
  )
}
