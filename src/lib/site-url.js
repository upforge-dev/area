/**
 * The one place this site names its own origin.
 *
 * The host used to be written out again in app/robots.ts, app/sitemap.js and
 * every absolute URL, which is how a site ends up advertising one host and
 * tagging its Sonor pages with another.
 *
 * Note: Sonor still holds `adamsadvisors.com` as this project's domain, and
 * that domain 302-redirects here, so the generated llms.txt links point at the
 * redirect. Fixing that is a Sonor-side change, not a repo one.
 */
export const SITE_URL = 'https://adamsrealestateadvisors.com'

export const SITE_HOST = SITE_URL.replace(/^https?:\/\//, '')
