# AI learnings — VISIFY APPS website

Notes for future agents working on this repo. Read before changing UI.

## Git identity (STRICT — forever)

This repository belongs to the **Visify Apps** GitHub account/org.

| Field | Required value |
|-------|----------------|
| GitHub account | `visify-apps` |
| Commit / author name | `visify-apps` |
| Commit / author email | `visifyapps@gmail.com` |
| Remote repo (Pages) | `visify-apps/visify-apps.github.io` |

**Rules for every agent, every session:**

1. Use **only** `visify-apps` / `visifyapps@gmail.com` for all git commits, tags, and GitHub API / `gh` actions on this project.
2. Do **not** use any other GitHub account, email, SSH key, or credential stored on the machine — even if it is the system default.
3. Prefer repo-local git config (`user.name` / `user.email` in this repo) or per-command `GIT_AUTHOR_*` / `GIT_COMMITTER_*` env vars. Never rely on a different global identity.
4. **Never** commit, log, or save personal access tokens, passwords, or `.env` secrets into the repo or into this notes file. Authenticate with env vars / `gh` auth for the session only.
5. If a token is pasted in chat, use it only for the requested push, then tell the user to **revoke and rotate** it (chat history is not a secret store).

## Product intent

- This is a **company brand site**, not a single-app landing page.
- UI/UX is the attention-seeker first; copy in `src/data/*.ts` is secondary and easy to swap.
- Do **not** invent or showcase unpublished products (Toward, Xplit, etc.) as live.
- Do **not** fill the UI with placeholder / wireframe / “lorem” / dashed empty boxes / fake screenshots / “Coming soon” app cards that look unfinished.

## Locked visual direction (user-approved, Oct 2026)

| Decision | Choice |
|----------|--------|
| Canvas | Near-black / black (`--color-bg`), not white |
| Accent | Lime `#C8FF4D` — CTAs, rules, hard shadows, selected states |
| Text | White primary, muted gray secondary |
| Mood | Gen Z–aware: bold, simple, opinionated — not corporate SaaS template |
| Structure | Editorial / neo-brutalist hybrid: oversized type, sharp edges, hard offset shadows, exposed rules — **not** soft card grids |
| Type | Expressive display + clean body (see `tokens.css`) — avoid Inter / Roboto / system-default stacks as the brand face |
| Motion | Purposeful only (marquee, press, short reveals); honor `prefers-reduced-motion` |

### What to avoid

- Purple gradients, glassmorphism, neon glow blobs, AI-cliché graphics
- Soft multi-layer shadows and pill-heavy UI
- Generic 3-equal-card “feature” sections as the default rhythm
- Placeholder text, fake metrics (“trusted by thousands”), stock “team smiling” imagery
- Decorative controls that do nothing

## Research cues that shaped the redesign (2025–2026)

Summarized for continuity (not citations to copy):

1. Gen Z rejects sterile millennial minimalism; prefers **personality, bold type, high contrast**, authentic voice ([Mantapp](https://mant.app/gen-z-redefine-modern-website-design-trend/), [Pixel Propel](https://pixelpropel.com/blog/gen-z-web-design-what-actually-works)).
2. **Dark + saturated accent** (lime here) reads as modern when contrast is accessible ([Figma trends](https://www.figma.com/resource-library/web-design-trends/), Gen Z dark+neon pattern).
3. Neo-brutalist SaaS patterns: thick borders, hard offset shadows, one accent, oversized headlines ([Design Rails](https://designrails.com/examples/brutalist-landing), Astro “Slab” theme patterns).
4. Keep it **fast and mobile-first**; bounce is immediate if the page feels slow or fake.
5. 2026 nuance: maximalism without chaos — strong hierarchy, clear nav, one job per section.

## Content vs UI

- Change wording in `src/data/site.ts` and page Astro files freely.
- Change look primarily via `src/styles/tokens.css` + component styles.
- When Figma brand kit arrives: swap `public/brand/*`, update tokens, keep layout system.

## Portfolio / products

- `src/data/products.ts` may stay empty. Empty UI must still feel **designed** (status strip / studio board), not like a missing component.
- Only `status: "available"` + real `primaryAction.href` get download/open CTAs.

## Contact

- Email only (`visifyapps@gmail.com`) until a real form + spam protection exists.

## Deploy / domain

- Update `site.siteUrl` and `astro.config.mjs` `site` together before launch.
