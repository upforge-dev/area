import { createSitemap } from '@sonordev/site-kit/sitemap'

export default createSitemap({
  baseUrl: 'https://adamsrealestateadvisors.com',
  intelligentPriority: true,
  awaitMetaOptimization: false,
  optimizedLLMsTxt: true,
  exclude: ['/api/*', '/admin/*'],
  priorities: {
    '/': 1.0,
    '/services': 0.9,
    '/lender-program': 0.85,
    '/transactions': 0.8,
    '/about': 0.8,
    '/contact': 0.8,
  },
})
