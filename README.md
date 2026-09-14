# Tech Social — community events template

Terminal / green-on-black community events site built with **Vite + React + Tailwind + shadcn/ui**. Demo brand: **LOREM.SCENE / Lorem Scene** — local meetups with a CRT aesthetic.

**Catalog id:** `tech-social`  
**Demo:** https://tech-social.little.website/  
**Repo:** https://github.com/Little-Devs/template-tech-social  
**Pages project (Oppy):** `lw-demo-tech-social`

## Stack

- Vite 5 + React 18 + TypeScript
- Tailwind CSS + shadcn/ui
- React Router (`BrowserRouter` — needs SPA fallback)
- Self-hosted JetBrains Mono (`src/assets/fonts/`)
- Cloudflare Pages `public/_headers` (Steve security bar) + `public/_redirects`

## Quick start

```bash
# Node 18+ / 20 / 22 recommended
npm install
npm run dev      # http://localhost:8080
npm run build    # writes dist/ (includes _headers + _redirects)
npm run preview  # serve dist/
```

## Customize

1. **Tokens** — edit `:root` HSL variables in `src/index.css` (`--primary`, `--background`, `--foreground`, etc.).
2. **Site copy / contact** — `src/data/site.ts` (name, cities, `mailto:` email).
3. **Events / sponsors** — `src/data/events.ts`, `src/data/sponsors.ts`.
4. **CTAs** — stay `mailto:` (no Buy / checkout / CMS / auth).
5. Read `AGENTS.md` and `PROMPT.md` before agent-driven edits.

## Sections & routes

| Route | Purpose |
|-------|---------|
| `/` | Hero (typewriter), featured events, community + sponsors callouts |
| `/events` | Events index |
| `/events/:id` | Event detail |
| `/community` | Community page |
| `/sponsors` | Sponsors page |
| `/terms`, `/privacy`, `/cookies` | Legal |

## Project layout

```
public/_headers          # Steve CSP / HSTS bar
public/_redirects        # /* → /index.html 200 (SPA)
src/assets/fonts/        # JetBrains Mono woff2 + fonts.css
src/index.css            # design tokens (:root HSL)
src/data/                # site.ts, events.ts, sponsors.ts
src/components/          # Header, Footer, EventCard, …
src/pages/               # route pages
template.json
AGENTS.md
PROMPT.md
LICENSE
```

## Security headers (Steve bar)

`public/_headers` ships with the dist root on Cloudflare Pages:

- HSTS, `X-Content-Type-Options: nosniff`, strict referrer
- CSP: `script-src 'self'`, `frame-ancestors 'self' https://little.website https://www.little.website`, `form-action 'self' mailto:`
- No `X-Frame-Options` (frame-ancestors only)
- `! Access-Control-Allow-Origin`

Fonts are self-hosted so CSP does not need Google Fonts hosts.

## License

MIT © Little-Devs / Little Cloud OÜ
