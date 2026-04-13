import { getManagedMetadata, ManagedSchema, ManagedFAQ } from '@sonordev/site-kit/seo'
import ContactHero from './components/ContactHero'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import ContactFAQ from './components/ContactFAQ'

export async function generateMetadata() {
  return getManagedMetadata({
    projectId: process.env.NEXT_PUBLIC_UPTRADE_PROJECT_ID,
    favicon: 'component',
    path: '/contact',
    fallback: {
      title: 'Contact Adams Real Estate Advisors | Get Your Free Consultation',
      description: 'Request a quote or schedule a consultation to discuss construction loans, refinances, and permanent financing for your commercial property. Reach out today for expert guidance.',
    },
  })
}

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ManagedSchema
        projectId={process.env.NEXT_PUBLIC_UPTRADE_PROJECT_ID}
        path="/contact"
      />
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
      {/* Managed FAQ - content controlled via Portal */}
    <ManagedFAQ
      projectId={process.env.NEXT_PUBLIC_UPTRADE_PROJECT_ID}
      path="/contact"
    />
    {/* Original FAQ component (can be removed once migrated) */}
    <ContactFAQ />
    </div>
  )
}
