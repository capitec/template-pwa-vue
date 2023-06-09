import { test, expect } from '@playwright/test';

// See here how to get started:
// https://playwright.dev/docs/intro
test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Home/);
})

test('has routed title', async ({ page }) => {
  await page.goto('/components');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Components/);
})
