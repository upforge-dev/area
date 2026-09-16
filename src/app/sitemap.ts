import { createSitemap } from '@sonordev/site-kit/sitemap'
import { SITE_URL } from '@/lib/site-url'

export default createSitemap({
  baseUrl: SITE_URL,
  intelligentPriority: true,
  awaitMetaOptimization: false,
  optimizedLLMsTxt: true,
  // public/llms.txt was being written on every build while llms-full.txt never
  // was, so the "Full context" link inside llms.txt pointed at a 404.
  optimizedLLMsFullTxt: true,
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
