// ## How does a test look like? 🧐

import { test, expect } from '@playwright/test';

test('This is a Playwright test', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  await expect(page).toHaveTitle(/Playwright/);

  const getStarted = page.locator('text=Get Started');
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');
  await getStarted.click();

  await expect(page).toHaveURL(/.*intro/);
});
