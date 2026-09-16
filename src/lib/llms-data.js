import { SITE_URL } from './site-url.js'

/**
 * Local fallback for llms.txt and llms-full.txt, used only when Sonor returns
 * nothing. Both routes read it from here so the two files can't describe the
 * business differently.
 *
 * Every line below is the site's own copy. Nothing here states a fact the
 * pages don't already state.
 */
export async function getLocalLlmsData() {
  return {
    business: {
      name: 'Adams Real Estate Advisors (AREA)',
      tagline: 'Premier Commercial Real Estate Financing',
      description:
        'Adams Real Estate Advisors provides commercial real estate financing solutions for developers and investors. Specializing in construction loans, permanent mortgages, and refinancing across the United States.',
      industry: 'Commercial Real Estate Finance',
      service_area: 'United States',
      website: SITE_URL,
    },
    services: [
      { name: 'Construction Loans', description: 'Financing for ground-up commercial construction projects.', url: '/services/construction-loans' },
      { name: 'Permanent Mortgages', description: 'Long-term commercial mortgage financing solutions.', url: '/services/permanent-mortgages' },
      { name: 'Commercial Real Estate Refinancing', description: 'Commercial real estate refinancing for better terms and rates.', url: '/services/commercial-real-estate-refinancing' },
      { name: 'Acquisition and Renovation Financing', description: 'Financing for acquiring and repositioning investment properties.', url: '/services/acquisition-renovation-financing' },
      { name: 'Office Building Financing', description: 'Debt placement for office properties.', url: '/services/office-building-financing' },
      { name: 'Retail Property Financing', description: 'Debt placement for retail properties.', url: '/services/retail-property-financing' },
      { name: 'Lender Program', description: 'Partner lending programs for developers and investors.', url: '/lender-program' },
    ],
    pages: [
      { path: '/', title: 'Home', description: 'Premier commercial real estate financing solutions.' },
      { path: '/services', title: 'Services', description: 'Commercial real estate financing services.' },
      { path: '/services/construction-loans', title: 'Construction Loans', description: 'Ground-up construction financing for commercial properties.' },
      { path: '/services/permanent-mortgages', title: 'Permanent Mortgages', description: 'Long-term commercial mortgage financing.' },
      { path: '/services/commercial-real-estate-refinancing', title: 'Commercial Real Estate Refinancing', description: 'Refinancing for better terms and rates.' },
      { path: '/services/acquisition-renovation-financing', title: 'Acquisition and Renovation Financing', description: 'Financing to acquire and reposition investment properties.' },
      { path: '/services/office-building-financing', title: 'Office Building Financing', description: 'Debt placement for office properties.' },
      { path: '/services/retail-property-financing', title: 'Retail Property Financing', description: 'Debt placement for retail properties.' },
      { path: '/lender-program', title: 'Lender Program', description: 'Partner lending programs.' },
      { path: '/transactions', title: 'Transactions', description: 'Completed financing transactions and case studies.' },
      { path: '/about', title: 'About', description: 'About Adams Real Estate Advisors.' },
      { path: '/contact', title: 'Contact', description: 'Get in touch for financing consultation.' },
    ],
  }
}
