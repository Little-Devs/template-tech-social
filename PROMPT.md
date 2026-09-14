# PROMPT.md

Read `AGENTS.md` first. Security and reliability are paramount.

---

## Prompt

Customize the `Tech Social` (`tech-social`) website template for the following brief.

### Brief

- **Business / project:** `A local tech / community events organizer (demo brand: LOREM.SCENE / Lorem Scene — terminal aesthetic meetups)`
- **Primary goal:** `Help visitors discover upcoming meetups and get in touch via mailto`
- **Audience:** `Local community members looking for tech socials, talks, and sponsor partners`
- **Must keep:** existing stack, tokens, and section structure
- **Must change:** `Brand name, cities, event list copy, sponsor placeholders, mailto contact in src/data/site.ts`
- **Must not:** new backend, new analytics, new framework, secrets in the repo

### Constraints

- Follow `AGENTS.md`. Do not invent services or credentials.
- Edit design tokens (CSS variables / theme) instead of one-off hex in components.
- Keep the current `Vite + React` + `Tailwind CSS + shadcn/ui` stack and folder layout.
- Forms stay static (`mailto:` or existing handler only).
- No new third-party scripts, pixels, or font hosts (JetBrains Mono is self-hosted).
- Responsive: mobile, tablet, desktop. Preserve focus styles and reduced-motion.
- Small, reviewable diff. Match local style.

### Acceptance checks

- [ ] `README.md`, `template.json`, `AGENTS.md`, and this file were read before edits
- [ ] Tokens updated in one place; UI consumes those tokens
- [ ] Requested copy/logo/contact replaced; leftover demo names are gone
- [ ] No new backend, auth, payment, or tracking
- [ ] No secrets or `.env` committed
- [ ] `npm run build` (or this repo’s equivalent) succeeds
- [ ] Home (and any touched routes) render; empty/error states still make sense
- [ ] Keyboard and screen-reader basics still work (labels, contrast, focus)

### Deliver

Summarize files changed and any placeholder that could not be filled from the brief. Do not deploy.
