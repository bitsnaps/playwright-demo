import { test, expect } from '@playwright/test';

test('homepage has an h1 equals to Platform', async ({ page }) => {
  await page.goto('https://promexia.com/');

  await expect(page).toHaveTitle('Promexia');
  const title = await page.getByRole('heading', {name: 'Platform'});
  await expect(title).toContainText('Platform');
})

test.only('logo should has an href to the homepage', async ({ page }) => {
  const logo = await page.locator('img.logo');
  expect(logo).toHaveClass('logo');
})