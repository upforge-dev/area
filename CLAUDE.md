# Claude Rules — area-nextjs

## Iframe embedding — Upforge showcase

When creating new projects, always configure headers to allow iframes from
upforge.io and *.upforge.io (frame-ancestors directive) so Upforge can
showcase client work.

Use the CSP `frame-ancestors` directive, **never `X-Frame-Options`**. XFO has
no allowlist form (`ALLOW-FROM` is dead and ignored by every current browser),
and emitting both is the trap: a leftover `DENY`/`SAMEORIGIN` is honoured by
some browsers and silently re-blocks the embed that frame-ancestors just
allowed. Ship one or the other, never both:

```
Content-Security-Policy: frame-ancestors 'self' https://upforge.io https://*.upforge.io
```

Every origin not on the list is still blocked, so this is not a blanket
loosening of clickjacking protection.

Sites on `@sonordev/site-kit` inherit this from `DEFAULT_FRAME_ANCESTORS`
(`src/middleware/securityHeaders.ts`) — that is the single source of truth.
Add origins there rather than re-forking the allowlist into each site. A site
that also sets frame headers in `next.config.*`, `netlify.toml`, `_headers`,
or `vercel.json` must be fixed in those files too, or they will override the
middleware.

**Exception — authenticated surfaces stay locked down.** Logged-in dashboards
and internal tools (app.sonor.io, the NestJS APIs, private client apps and
proposal/comparison decks) keep their restrictive policy. There is nothing to
showcase behind a login, and allowing a third-party origin to frame a live
authenticated session is a clickjacking vector.
