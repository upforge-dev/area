import { getManagedMetadata, ManagedSchema } from '@sonordev/site-kit/seo'
import AboutHero from './components/AboutHero'
import CompanyStory from './components/CompanyStory'
import TeamExpertise from './components/TeamExpertise'
import CoreValues from './components/CoreValues'
import AboutCTA from './components/AboutCTA'

export async function generateMetadata() {
  return getManagedMetadata({
    projectId: process.env.NEXT_PUBLIC_UPTRADE_PROJECT_ID,
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
      <ManagedSchema
        projectId={process.env.NEXT_PUBLIC_UPTRADE_PROJECT_ID}
        path="/about"
      />
      <AboutHero />
      <CompanyStory />
      <TeamExpertise />
      <CoreValues />
      {/* Built by Upforge */}
      <section className="border-t border-gray-200 bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm text-gray-400">
            This website was designed and built by{' '}
            <a href="https://upforge.io" target="_blank" rel="noopener" className="font-medium text-[#081c3e] hover:text-[#b9945a] transition-colors">
              Upforge
            </a>
            , a Cincinnati-based agency building custom web platforms powered by AI.
          </p>
        </div>
      </section>

      <AboutCTA />
    </div>
  )
}
