# VISIFY APPS — Company Website

Static marketing site for **Visify Apps**, built with [Astro](https://astro.build).

**UI direction:** black canvas + lime accent, bold editorial / neo-brutalist layout (Gen Z–aware). See [`docs/AI_LEARNINGS.md`](docs/AI_LEARNINGS.md) before changing design.

Company-first branding with a reusable product portfolio system for future launches.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
npm run preview  # preview production build
```

## Stack

- Astro (static HTML)
- Plain CSS with design tokens (no UI kit)
- `@astrojs/sitemap` for SEO
- Contact via `mailto:` only (no form / backend)

## Project structure

```
src/
  components/     # Header, Footer, Button, ProductCard, SEO, …
  data/
    site.ts       # Company name, tagline, nav, email, siteUrl
    products.ts   # Product portfolio (empty until products launch)
  layouts/        # BaseLayout
  pages/          # Routes
  styles/
    tokens.css    # Colors, type, spacing — customize for Figma
    global.css
public/
  brand/          # Logo exports (Figma later)
  og/             # Social preview image
  products/       # Per-product icons & screenshots
```

## Pages

| Path | Purpose |
|------|---------|
| `/` | Company homepage |
| `/products` | Product directory + status legend |
| `/products/[slug]` | Product detail template (generated from data) |
| `/about` | About Visify Apps |
| `/contact` | Contact & support channels |
| `/privacy`, `/terms` | Legal |
| `404` | Not found |

## Design tokens (theming)

Edit [`src/styles/tokens.css`](src/styles/tokens.css):

- `--color-bg` / `--color-black` — dark canvas
- `--color-lime` `#C8FF4D` — primary accent
- `--color-white` / `--color-muted` — text
- `--font-display` (Syne) + `--font-sans` (DM Sans)

UI decisions and anti-patterns for future agents: [`docs/AI_LEARNINGS.md`](docs/AI_LEARNINGS.md).

## Site config

[`src/data/site.ts`](src/data/site.ts) and [`astro.config.mjs`](astro.config.mjs):

- Set `siteUrl` / `site` to your real domain before launch
- Update `email`, tagline, and default SEO description as needed
- Update [`public/robots.txt`](public/robots.txt) sitemap URL to match

## Adding a product later

1. Add icons/screenshots under `public/products/{slug}/`.
2. Append a typed entry in [`src/data/products.ts`](src/data/products.ts).
3. Use an honest status:
   - `building` — active development
   - `launching_soon` — near release
   - `available` — requires a real `primaryAction.href`
   - `retired` — no longer offered
4. Optional fields (`problem`, `steps`, `features`, `screenshots`, `faqs`, …) appear on the detail page only when present.
5. Rebuild / redeploy. The products grid and `/products/{slug}` update automatically.

Do not list products as available until store or launch links are real.

## Figma rebrand checklist

When the design kit arrives:

1. Export logo formats into `public/brand/` (see that folder’s README).
2. Update `Logo.astro` to use the lockup/mark files instead of the temporary SVG.
3. Replace `public/favicon.svg` (and favicon.ico if needed).
4. Replace `public/og/default.svg` with a PNG/JPG social card if platforms require it; point `site.ogImage` at it.
5. Map Figma color/type styles onto variables in `tokens.css`.
6. Adjust `--font-sans` and the Google Fonts link in `BaseLayout.astro` if typography changes.
7. Keep product pages on the shared chrome; use optional `accentColor` on a product for light product-specific accent only.

## Deploy

Build produces static files in `dist/`. Host on Cloudflare Pages, Netlify, GitHub Pages, or Firebase Hosting:

```bash
npm run build
```

Point the host’s publish directory at `dist`, attach your custom domain, and confirm HTTPS.

## Out of scope (by design)

- Live Toward / Xplit marketing until products are ready to list
- Blog, careers, testimonials, customer portal
- Contact form, CMS, auth, database
- Social links (add in Footer only for profiles you maintain)
