import { getManagedMetadata } from '@sonordev/site-kit/seo'
import { SITE_URL } from '@/lib/site-url'
import { Inter } from 'next/font/google'
import './globals.css'
import LayoutClient from './layout-client'
import { SiteKitLayout } from '@sonordev/site-kit/layout'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata() {
  const metadata = await getManagedMetadata({
    favicon: 'component',
    path: '/',
    fallback: {
      title: 'Adams Real Estate Advisors - Commercial Real Estate Financing',
      description: 'Premier commercial real estate financing solutions for developers and investors. Construction loans, permanent mortgages, and refinancing across the United States.',
    },
  })
  return {
    ...metadata,
    // Without metadataBase, Next resolves every relative metadata URL against
    // http://localhost:3000, which is exactly what the built og:image said.
    metadataBase: new URL(SITE_URL),
    // Without this a share preview renders as a small square thumbnail rather
    // than the 1200x630 card each route now ships. No images are declared here
    // on purpose: an openGraph.images array would shadow every per-route card.
    twitter: { ...metadata.twitter, card: 'summary_large_image' },
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteKitLayout>
          <LayoutClient>{children}</LayoutClient>
        </SiteKitLayout>
      </body>
    </html>
  )
}
