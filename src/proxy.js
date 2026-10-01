import { createProxy } from '@sonordev/site-kit/proxy'
import { SITE_URL } from '@/lib/site-url'

/**
 * The site had no middleware at all, which cost it two things: Sonor's managed
 * redirects never ran, and no response carried the
 * `Link: <.../llms.txt>; rel="describedby"` header an AI crawler uses to find
 * the file. securityHeaders also brings the kit's frame-ancestors policy, so
 * Upforge can embed the site without the site dropping its clickjacking
 * protection.
 */
export default createProxy({
  redirects: true,
  securityHeaders: true,
  llmsDiscovery: { siteUrl: SITE_URL },
})

// Inlined deliberately: Next reads this statically, so an imported matcher is
// a build error.
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:ico|png|jpg|jpeg|gif|webp|svg|avif|pdf|woff2?)$).*)',
  ],
}
