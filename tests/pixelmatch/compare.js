const fs = require("fs");
const pixelmatch = require("pixelmatch").default;
const PNG = require("pngjs").PNG;

const baselinePath = "tests/pixelmatch/screenshots/baseline.png";

const variants = [
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

const baseline = PNG.sync.read(fs.readFileSync(baselinePath));

for (const variant of variants) {
  const testPath = `tests/pixelmatch/screenshots/${variant}.png`;

  const test = PNG.sync.read(fs.readFileSync(testPath));

  if (baseline.width !== test.width || baseline.height !== test.height) {
    console.log(`❌ ${variant}: image sizes do not match`);
    continue;
  }

  const diff = new PNG({
    width: baseline.width,
    height: baseline.height,
  });

  const mismatchedPixels = pixelmatch(
    baseline.data,
    test.data,
    diff.data,
    baseline.width,
    baseline.height,
    {
      threshold: 0.1,
    },
  );

  fs.writeFileSync(
    `tests/pixelmatch/diffs/${variant}-diff.png`,
    PNG.sync.write(diff),
  );

  console.log(`${variant}: ${mismatchedPixels} different pixels`);
}
