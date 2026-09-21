import { getManagedMetadata, LLMSchema, ManagedSchema } from '@sonordev/site-kit/seo'
import AboutHero from './components/AboutHero'
import CompanyStory from './components/CompanyStory'
import TeamExpertise from './components/TeamExpertise'
import CoreValues from './components/CoreValues'
import AboutCTA from './components/AboutCTA'

export async function generateMetadata() {
  return getManagedMetadata({
    favicon: 'component',
    path: '/about',
    fallback: {
      title: 'About Adams Real Estate Advisors | 35+ Years of Commercial Finance Expertise',
      description: 'Adams Real Estate Advisors delivers clear, data-driven capital solutions for commercial owners and investors. Over $1.8B financed with 35+ years of industry expertise.',
    },
  })
}

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ManagedSchema path="/about" />
      <LLMSchema path="/about" />
      <AboutHero />
      <CompanyStory />
      <TeamExpertise />
      <CoreValues />
      <AboutCTA />

      {/* Site credit: the one followed Upforge link on this domain (footer credits are nofollow). */}
      <aside aria-label="About this website" className="border-t border-gray-200 bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
            About this website
          </p>
          <p className="text-sm leading-relaxed text-gray-500">
            Adams Real Estate Advisors&apos; website was designed and built by{' '}
            <a
              href="https://upforge.io/web-design"
              target="_blank"
              rel="noopener"
              className="font-medium text-[#081c3e] underline decoration-[#b9945a]/40 underline-offset-2 transition-colors hover:text-[#b9945a]"
            >
              Upforge</a>, a Cincinnati web design and development studio. Each financing program
            has its own page, alongside our lender program and recent transactions.
          </p>
        </div>
      </aside>
    </div>
  )
}
