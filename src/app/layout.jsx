import { getManagedMetadata, ManagedSchema } from '@sonordev/site-kit/seo'
import { Inter } from 'next/font/google'
import './globals.css'
import LayoutClient from './layout-client'
import { SiteKitLayout } from '@sonordev/site-kit/layout'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata() {
  return getManagedMetadata({
    projectId: process.env.NEXT_PUBLIC_UPTRADE_PROJECT_ID,
    path: '/',
    fallback: {
      title: 'Adams Real Estate Advisors - Commercial Real Estate Financing',
      description: 'Premier commercial real estate financing solutions for developers and investors. Construction loans, permanent mortgages, and refinancing across the United States.',
    },
  })
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ManagedSchema
        projectId={process.env.NEXT_PUBLIC_UPTRADE_PROJECT_ID}
        path="/"
      />
      <body className={inter.className}>
        <SiteKitLayout>
          <LayoutClient>{children}</LayoutClient>
        </SiteKitLayout>
      </body>
    </html>
  )
}
