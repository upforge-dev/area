import { buildAiCrawlerRules, createRobotsTxtHandler } from '@sonordev/site-kit/seo/llms'
import { SITE_HOST, SITE_URL } from '@/lib/site-url'

/**
 * robots.txt as a route handler rather than Next's robots.ts convention: the
 * convention drops unknown directives, and this file needs the Content
 * Signals block (search / ai-input / ai-train).
 *
 * What this replaces was a hand-written 2023 crawler list that still named
 * Claude-Web and Anthropic-AI, two agents Anthropic retired, while missing
 * every agent named since: Claude-SearchBot, Claude-User, OAI-SearchBot,
 * Perplexity-User, DuckAssistBot and the rest. The lists now come from
 * site-kit (AI_RETRIEVAL_CRAWLERS / AI_TRAINING_CRAWLERS), so the next kit
 * upgrade brings the next crawler with it. Don't re-fork the list here.
 *
 * Policy: everything welcome. Retrieval crawlers cite the firm, training
 * crawlers put it in model knowledge, and a financing brokerage is found by
 * being the answer. Only machine-only paths are withheld.
 *
 * Never disallow /_next/: Googlebot renders pages with the CSS, JS and
 * optimized images served from there.
 */
const DISALLOW = ['/api/']

export const revalidate = 86400

export const GET = createRobotsTxtHandler({
  contentSignals: { search: true, aiInput: true, aiTrain: true },
  rules: [
    { userAgent: '*', allow: '/', disallow: DISALLOW },
    ...buildAiCrawlerRules({ allow: '/', disallow: DISALLOW, training: 'allow' }),
  ],
  sitemap: `${SITE_URL}/sitemap.xml`,
  host: SITE_HOST,
})
