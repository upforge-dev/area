const BASE_URL = 'https://adamsrealestateadvisors.com'

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '*.json'],
      },
      {
        userAgent: 'GPTBot',
        allow: ['/', '/llms.txt'],
        disallow: ['/api/'],
      },
      {
        userAgent: 'ChatGPT-User',
        allow: ['/', '/llms.txt'],
        disallow: ['/api/'],
      },
      {
        userAgent: 'Claude-Web',
        allow: ['/', '/llms.txt'],
        disallow: ['/api/'],
      },
      {
        userAgent: 'ClaudeBot',
        allow: ['/', '/llms.txt'],
        disallow: ['/api/'],
      },
      {
        userAgent: 'Anthropic-AI',
        allow: ['/', '/llms.txt'],
        disallow: ['/api/'],
      },
      {
        userAgent: 'PerplexityBot',
        allow: ['/', '/llms.txt'],
        disallow: ['/api/'],
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  }
}
