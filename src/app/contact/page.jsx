import { getManagedMetadata, LLMSchema, ManagedSchema, ManagedFAQ } from '@sonordev/site-kit/seo'
import { getFormConfig } from '@sonordev/site-kit/forms/server'
import ContactHero from './components/ContactHero'
import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import ContactFAQ from './components/ContactFAQ'
import { CONTACT_FORM_SLUG } from '@/lib/site-contact'

export async function generateMetadata() {
  return getManagedMetadata({
    favicon: 'component',
    path: '/contact',
    fallback: {
      title: 'Contact Adams Real Estate Advisors | Get Your Free Consultation',
      description: 'Request a quote or schedule a consultation to discuss construction loans, refinances, and permanent financing for your commercial property. Reach out today for expert guidance.',
    },
  })
}

export default async function ContactPage() {
  // Fetched on the server (read-only, null on failure) so the form's fields are
  // in the page HTML instead of waiting on a request after hydration. If this
  // comes back null, the form fetches its own config in the browser.
  const contactForm = await getFormConfig(CONTACT_FORM_SLUG)

  return (
    <div className="bg-gray-50 min-h-screen">
      <ManagedSchema path="/contact" />
      <LLMSchema path="/contact" />
      <ContactHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <ContactForm initialForm={contactForm} />
          </div>
          <div>
            <ContactInfo />
          </div>
        </div>
      </div>
      {/* Managed FAQ - content controlled via Portal */}
    <ManagedFAQ
      path="/contact"
    />
    {/* Original FAQ component (can be removed once migrated) */}
    <ContactFAQ />
    </div>
  )
}
