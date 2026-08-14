const { chromium } = require("playwright");
const path = require("path");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
  });

  const variants = [
    "baseline",
    "color-bug",
    "subtle-color-bug",
    "layout-bug",
    "visibility-bug",
    "typography-bug",
    "spacing-bug",
    "alignment-bug",
    "overflow-bug",
    "theme-bug",
  ];

  for (const variant of variants) {
    await page.goto(`http://localhost:3000/index.html?variant=${variant}`);

    await page.screenshot({
      path: `tests/pixelmatch/screenshots/${variant}.png`,
    });
  }

  await browser.close();
})();
