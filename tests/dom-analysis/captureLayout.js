const { chromium } = require("playwright");
const fs = require("fs");

(async () => {
  const browser = await chromium.launch();

  const page = await browser.newPage({
    viewport: {
      width: 1440,
      height: 900,
    },
  });

  await page.goto("http://localhost:3000/index.html?variant=baseline");

  const layout = await page.evaluate(() => {
    const elements = {};

    document
      .querySelectorAll(".stat-card, .primary-btn, .sidebar, .topbar")
      .forEach((el, index) => {
        const rect = el.getBoundingClientRect();

        elements[index] = {
          tag: el.tagName,

          x: rect.x,
          y: rect.y,

          width: rect.width,
          height: rect.height,

          visible: rect.width > 0 && rect.height > 0,
        };
      });

    return elements;
  });

  fs.writeFileSync(
    "tests/dom-analysis/baseline.json",
    JSON.stringify(layout, null, 2),
  );

  console.log("Baseline layout saved.");

  await browser.close();
})();
