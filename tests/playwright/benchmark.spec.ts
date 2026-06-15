import { test, expect } from '@playwright/test';

const variants = [
  'color-bug',
  'layout-bug',
  'visibility-bug',
  'typography-bug',
  'spacing-bug',
  'alignment-bug',
  'overflow-bug',
  'theme-bug'
];

test('baseline', async ({ page }) => {
  await page.goto('/index.html?variant=baseline');
  await expect(page).toHaveScreenshot('baseline.png');
});

for (const variant of variants) {
  test(variant, async ({ page }) => {
    await page.goto(`/index.html?variant=${variant}`);
    await expect(page).toHaveScreenshot('baseline.png');
  });
}