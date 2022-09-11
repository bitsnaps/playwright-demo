import { test } from '@playwright/test';

test('Page Screenshot', async ({ page }) => {
  await page.goto('http://whatsmyuseragent.org/');
  await page.screenshot({ path: `example.png` });
});