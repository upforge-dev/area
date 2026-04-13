import { getManagedMetadata, ManagedSchema } from '@sonordev/site-kit/seo'
import TransactionsHero from './components/TransactionsHero'
import DealsGrid from './components/DealsGrid'
import TransactionsStats from './components/TransactionsStats'
import TransactionsCTA from './components/TransactionsCTA'

export async function generateMetadata() {
  return getManagedMetadata({
    projectId: process.env.NEXT_PUBLIC_UPTRADE_PROJECT_ID,
    favicon: 'component',
    path: '/transactions',
    fallback: {
      title: 'Our Transactions | $1.8B+ in Successful Commercial Real Estate Financing',
      description: 'Browse recent closings and case studies featuring construction loans, refinances, permanent mortgages, and acquisition financing across the United States.',
    },
  })
}

export default function TransactionsPage() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <ManagedSchema
        projectId={process.env.NEXT_PUBLIC_UPTRADE_PROJECT_ID}
        path="/transactions"
      />
      <TransactionsHero />
      <TransactionsStats />
      <DealsGrid />
      <TransactionsCTA />
    </div>
  )
}
