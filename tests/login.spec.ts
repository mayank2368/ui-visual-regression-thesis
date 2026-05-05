import { test, expect } from '@playwright/test';
import path from 'path';

test('login page visual test', async ({ page }) => {
  const filePath = 'file://' + path.resolve(__dirname, '../login.html');
  await page.goto(filePath);

  await expect(page).toHaveScreenshot('login.png');
});