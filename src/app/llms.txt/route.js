import { createLLMsTxtHandler } from '@sonordev/site-kit/llms'

export const GET = createLLMsTxtHandler({
  preferStatic: true,
  getLocalData: async () => ({
    business: {
      name: 'Adams Real Estate Advisors (AREA)',
      tagline: 'Premier Commercial Real Estate Financing',
      description:
        'Adams Real Estate Advisors provides commercial real estate financing solutions for developers and investors. Specializing in construction loans, permanent mortgages, and refinancing across the United States.',
      industry: 'Commercial Real Estate Finance',
      service_area: 'United States',
      website: 'https://adamsrealestateadvisors.com',
    },
    services: [
      { name: 'Construction Loans', description: 'Financing for ground-up commercial construction projects.', url: '/services' },
      { name: 'Permanent Mortgages', description: 'Long-term commercial mortgage financing solutions.', url: '/services' },
      { name: 'Refinancing', description: 'Commercial real estate refinancing for better terms and rates.', url: '/services' },
      { name: 'Lender Program', description: 'Partner lending programs for developers and investors.', url: '/lender-program' },
    ],
    pages: [
      { path: '/', title: 'Home', description: 'Premier commercial real estate financing solutions.' },
      { path: '/services', title: 'Services', description: 'Commercial real estate financing services.' },
      { path: '/lender-program', title: 'Lender Program', description: 'Partner lending programs.' },
      { path: '/transactions', title: 'Transactions', description: 'Completed financing transactions and case studies.' },
      { path: '/about', title: 'About', description: 'About Adams Real Estate Advisors.' },
      { path: '/contact', title: 'Contact', description: 'Get in touch for financing consultation.' },
    ],
  }),
})

export const revalidate = 3600
