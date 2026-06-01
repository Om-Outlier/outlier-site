# OUTLIER (Thailand) Website

Nuxt 3 + TypeScript, Tailwind-based marketing site for OUTLIER. Content is local and editable without a CMS.

## Getting started
1) Install dependencies: `pnpm install`
2) Run dev server: `pnpm dev`
3) Production build: `pnpm build` then `pnpm start`
4) Static generation (optional): `pnpm generate`

## Content editing
- Primary content lives in `data/content.ts` (services, case studies, insights, stats, partnerships).
- Global styles: `assets/css/main.css`
- Pages live in `pages/` (home, about, services, service details, work, insights, careers, contact, privacy).

## Contact form storage
- Form POSTs to `/api/contact`.
- Server-side validation, honeypot (`website`), and in-memory rate limiting (5 reqs/hour/IP).
- Leads append to JSONL at `data/leads.jsonl` (path configurable via `runtimeConfig.contactStoragePath`).
- Stored fields: name, company, email, phone, message, timestamp, pageUrl, userAgent.

## SEO
- Meta + Open Graph defaults set in `nuxt.config.ts`.
- Dynamic sitemap at `/sitemap.xml` and robots.txt at `/robots.txt`.
- Per-page canonical links for insights and services.

## Deployment notes
- Target Node/Nitro server (`pnpm build` + `pnpm start`).
- Run the built Nitro entrypoint from `.output/server/index.mjs`; do not run `.nuxt/dist/server/server.mjs` directly.
- Ensure the runtime user can write to `data/` for lead capture.
- Configure `runtimeConfig.public.siteUrl` for correct canonical + sitemap URLs.
