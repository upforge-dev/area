import { defineOgCard } from '@sonordev/site-kit/og'

/**
 * Share cards, rendered at build time by `sonor-setup og`.
 *
 * The site had none: every page shared as a bare link. The palette is the
 * site's own, navy #081c3e with the gold rule and accent #b9945a the hero and
 * section headers use, and the photos are projects the firm actually financed,
 * the same ones the pages show.
 *
 * Routes not named below still get a card, titled from the page's managed
 * title in Sonor.
 */
export default defineOgCard({
  theme: {
    bg: '#081c3e',
    text: '#ffffff',
    accent: '#b9945a',
    surface: '#0d2750',
    muted: '#c7cfdd',
  },
  fonts: [{ family: 'Inter', weights: [700] }],
  logo: '/Logonotextwhite.svg',
  layout: 'split',
  photo: { src: '/AdobeStock_551358729.jpeg' },
  content: {
    kicker: 'Commercial Real Estate Finance',
    title: 'Capital solutions\nbuilt on expertise',
    subtitle: 'Construction loans, permanent financing, and strategic refinancing, nationwide.',
    bar: ['adamsrealestateadvisors.com'],
  },
  cards: {
    '/services': {
      content: { kicker: 'Services', title: 'Financing for\nevery asset' },
      photo: { src: '/Brickstone.webp' },
    },
    '/services/construction-loans': {
      content: { kicker: 'Construction loans', title: 'Ground-up,\nfinanced' },
      photo: { src: '/MaumeeSeniorLivingDevelopment.webp' },
    },
    '/services/permanent-mortgages': {
      content: { kicker: 'Permanent mortgages', title: 'Long-term\ndebt' },
      photo: { src: '/Flatsonfifth.webp' },
    },
    '/services/commercial-real-estate-refinancing': {
      content: { kicker: 'Refinancing', title: 'Better terms,\nrestructured' },
      photo: { src: '/DocksideApartments.jpg' },
    },
    '/services/acquisition-renovation-financing': {
      content: { kicker: 'Acquisition and renovation', title: 'Buy it,\nreposition it' },
      photo: { src: '/AddisvilleCommons.webp' },
    },
    '/services/office-building-financing': {
      content: { kicker: 'Office financing', title: 'Office debt,\nplaced' },
      photo: { src: '/SkaneatelesSocial.avif' },
    },
    '/services/retail-property-financing': {
      content: { kicker: 'Retail financing', title: 'Retail debt,\nplaced' },
      photo: { src: '/DoudApartments.webp' },
    },
    '/lender-program': {
      content: { kicker: 'Lender program', title: 'Partner\nwith us' },
      photo: { src: '/HamptonInn.png' },
    },
    '/transactions': {
      content: { kicker: 'Transactions', title: 'Deals we\nhave closed' },
      photo: { src: '/GreenBayPortfolio.jpg' },
    },
    '/about': {
      content: { kicker: 'About', title: 'Who we\nare' },
      photo: { src: '/BrooklynPointeSeniorLivingDevelopment.jpg' },
    },
    '/contact': {
      content: { kicker: 'Contact', title: "Let's structure\nyour financing" },
      photo: { src: '/PeregrineMemoryCare.jpg' },
    },
  },
})
