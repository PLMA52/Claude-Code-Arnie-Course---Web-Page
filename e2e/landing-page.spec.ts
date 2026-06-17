import { test, expect } from '@playwright/test'

test.describe('Collier Analytics Landing Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/', { waitUntil: 'domcontentloaded' })
  })

  // ── 1. Contact Trigger ────────────────────────────────────────────────────
  test.describe('Contact Trigger', () => {
    test('every "Book a Consultation" button links to the consultation mailto', async ({ page }) => {
      const buttons = page.getByRole('link', { name: /book a consultation/i })
      const count = await buttons.count()
      expect(count).toBeGreaterThan(0)
      for (let i = 0; i < count; i++) {
        const href = await buttons.nth(i).getAttribute('href')
        expect(href).toContain('mailto:PLMA52@Yahoo.com')
      }
    })
  })

  // ── 2. Asset Rendering ────────────────────────────────────────────────────
  test.describe('Asset Rendering', () => {
    test('renders an image with src containing "michel"', async ({ page }) => {
      const img = page.locator('img[src*="michel"]')
      await expect(img.first()).toBeVisible()
    })
  })

  // ── 3. Content Assertions ─────────────────────────────────────────────────
  test.describe('Content Assertions', () => {
    test('displays "Predictive Analytics" on the page', async ({ page }) => {
      await expect(page.getByText(/predictive analytics/i).first()).toBeVisible()
    })

    test('displays "Fortune 500" on the page', async ({ page }) => {
      await expect(page.getByText(/fortune 500/i).first()).toBeVisible()
    })

    test('displays "Labor Analytics" on the page', async ({ page }) => {
      await expect(page.getByText(/labor analytics/i).first()).toBeVisible()
    })

    test('displays "AI Consulting" on the page', async ({ page }) => {
      await expect(page.getByText(/ai consulting/i).first()).toBeVisible()
    })
  })

  // ── 4. Video Interaction ──────────────────────────────────────────────────
  test.describe('Video Interaction', () => {
    test('a video element is visible after scrolling into the Growth section', async ({ page }) => {
      const growth = page.locator('#growth')
      await growth.scrollIntoViewIfNeeded()
      const media = page.locator('video, iframe').first()
      await expect(media).toBeVisible({ timeout: 8000 })
    })
  })

  // ── 5. Navigation Links ───────────────────────────────────────────────────
  test.describe('Navigation Links', () => {
    test('navbar has a working anchor link to #services', async ({ page }) => {
      const nav = page.locator('nav')
      const link = nav.getByRole('link', { name: /services/i })
      await expect(link).toBeVisible()
      expect(await link.getAttribute('href')).toContain('#services')
    })

    test('navbar has a working anchor link to #contact', async ({ page }) => {
      const nav = page.locator('nav')
      const link = nav.getByRole('link', { name: /contact/i })
      await expect(link).toBeVisible()
      expect(await link.getAttribute('href')).toContain('#contact')
    })
  })
})
