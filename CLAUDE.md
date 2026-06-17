# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

## Project

Single-page marketing site for **Collier Analytics** — Next.js 16 App Router + TypeScript + Tailwind CSS 4 + Framer Motion, with Playwright e2e tests. Deployment target: Vercel.

## Commands

```bash
npm run dev           # start dev server on :3000
npm run build         # production build (must stay warning-free)
npm run start         # serve production build
npm run lint          # next lint
npm run test:e2e      # run Playwright e2e suite (auto-starts dev server)
npx playwright test --headed --project=chromium   # run headed
```

## TDD Contract — `lib/constants.ts`

All CTA destinations (mailto links, email address) live in `lib/constants.ts`. Tests and components both read from this file. **Never hardcode URLs or email addresses in components or tests.**

## Architecture

- `app/page.tsx` composes the page from `Navbar`, `Hero`, `Services`, `About`, `GrowthVideo`, `Contact`, `Footer`
- Section IDs (`#services`, `#about`, `#contact`, `#growth`) are referenced by Navbar links and Playwright scroll assertions — don't rename them without updating both
- `GrowthVideo.tsx` is the only `"use client"` file (Framer Motion `whileInView`)
- Tailwind 4 is used — no `tailwind.config.ts` needed; custom values go in `app/globals.css` under `@theme`

## Assets

- `/public/michel.jpg` — hero photo (replace with real image)
- `/public/michel2.jpg` — about section photo (replace with real image)
- Stock video URL in `lib/constants.ts` (`STOCK_VIDEO_URL`) — update with preferred CDN URL if needed

## Color Palette

| Token | Hex |
|---|---|
| Navy (bg primary) | `#0A1628` |
| Navy light (alt bg) | `#0D1F3C` |
| Gold (CTA / accent) | `#C9A84C` |
| Teal (optional) | `#0EA5E9` |
