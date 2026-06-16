# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page marketing site for **Arnie AI** — Next.js 14 App Router + TypeScript + Tailwind CSS 3 + Framer Motion, with Playwright e2e tests. Deployment target: Vercel.

## Commands

```bash
npm run dev           # start dev server on :3000
npm run build         # production build (must stay warning-free)
npm run start         # serve production build
npm run lint          # next lint
npm run test:e2e      # run Playwright e2e suite (auto-starts dev server)
npx playwright test e2e/landing-page.spec.ts -g "growth video"   # run one test by name
npx playwright test --headed --project=chromium                   # run headed
npx playwright test --workers=2                                   # throttle workers if dev server is slow
```

Playwright's `webServer` config auto-starts `npm run dev` and reuses an existing server locally. The suite runs `fullyParallel: true` with no worker cap — if tests time out on navigation, re-run with `--workers=2`.

## Architecture

### TDD contract via `lib/constants.ts`
This is the most important file in the repo. Tests in `e2e/landing-page.spec.ts` and components under `components/` both read the same URLs / mailto strings (Skool, YouTube, email, consultation mailto). **If you change a CTA destination, update `lib/constants.ts` — never hardcode these URLs in components or tests.** Drift between the two is exactly what the test suite exists to catch.

### Page composition and z-index layering
`app/page.tsx` mounts two layers:
1. `<ShaderBackground />` — a `position: fixed` WebGL canvas at `z-index: 0`, covering the full viewport
2. `<div className="relative z-10">` — wraps **all** visible content (Navbar, Hero, Services, GrowthVideo, Community, Footer)

Any new section added **outside** that `z-10` wrapper will be invisible (painted behind the canvas). Section anchors (`#services`, `#community`, `#growth`, `#workshops`) are referenced by the Navbar and by Playwright's scroll assertions — don't rename them without updating both.

### Client components
There are exactly two `"use client"` boundaries:
- `components/ui/shader-background.tsx` — WebGL canvas with a GLSL fragment shader; uses `useEffect` + `requestAnimationFrame` for the animated purple/blue plasma background. Runs entirely in the browser; no server rendering.
- `components/GrowthVideo.tsx` — uses Framer Motion's `whileInView` for scroll-triggered animation.

Keep the client boundary tight — if you add animated sections, isolate `"use client"` to the animated subtree rather than promoting a parent.

### Styling system
Tailwind 3 with custom tokens in `tailwind.config.ts`: `neon.blue` (`#4a9eff`), `neon.purple` (`#a855f7`), `neon.pink` (`#ec4899`), plus `font-display` and `font-mono` families.

`app/globals.css` defines three categories of custom classes (all `@layer`-free — use these instead of inline recreations):
- `.btn-primary` / `.btn-secondary` — gradient and glass CTA buttons
- `.bg-streaks` — radial-gradient section background for sections that need depth without the full shader
- `.glow-text` — blue/purple text-shadow for headline accents

There is also a **global contrast rule** on all `main` text elements (`h1`–`h3`, `p`, `li`, `span`, `a`): a dark `text-shadow` is applied site-wide so text stays legible over the animated shader background. Do not remove it without testing visibility across all sections.

### Assets
Hero/community images and the growth video live in `/public`. The source asset `video (stock animation).mp4` at the repo root was copied to `/public/video-stock-animation.mp4` — the Playwright spec asserts on the hyphenated filename, so keep the public copy in sync if the source is updated.

### Test structure
`e2e/landing-page.spec.ts` is organized as one `describe` with a `beforeEach` that navigates to `/`. The video test uses `video.evaluate(...)` to read the live DOM properties (`autoplay`, `loop`, `muted`) rather than HTML attributes, because React renders `autoPlay` as a property. When adding new CTAs, prefer `getByRole('link', { name: ... })` with a regex over CSS selectors — matches the existing pattern and survives copy tweaks.
