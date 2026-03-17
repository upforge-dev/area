import { getManagedMetadata, ManagedSchema } from '@sonordev/site-kit/seo'
import AboutHero from './components/AboutHero'
import CompanyStory from './components/CompanyStory'
import TeamExpertise from './components/TeamExpertise'
import CoreValues from './components/CoreValues'
import AboutCTA from './components/AboutCTA'

export async function generateMetadata() {
  return getManagedMetadata({
    projectId: process.env.NEXT_PUBLIC_UPTRADE_PROJECT_ID,
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
      <AboutCTA />
    </div>
  )
}
