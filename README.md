Visual Validation Benchmark

A benchmark project developed for a Master's thesis to compare different approaches for automated UI regression testing.

What is evaluated?

The project compares four approaches:

Playwright - browser automation and screenshot comparison

BackstopJS - visual regression testing

Pixelmatch - pixel-level image comparison

Custom DOM Analysis – comparison of element position, size, and visibility

The same dashboard application and predefined UI regression scenarios are used for the comparison.

Installation

Clone the repository and install the dependencies:

git clone <repository-url>
cd ui-reg-project
npm install

Install Playwright Chromium:

npx playwright install chromium

Start the local application:

npx http-server . -p 3000

Run the Tests

Playwright

npx playwright test tests/playwright/benchmark.spec.ts

Update baseline screenshots if required:

npx playwright test tests/playwright/benchmark.spec.ts --update-snapshots

BackstopJS

npx backstop reference
npx backstop test

Pixelmatch

node tests/pixelmatch/generateScreenshots.js
node tests/pixelmatch/compare.js

Custom DOM Analysis

node tests/dom-analysis/captureLayout.js
node tests/dom-analysis/compareLayout.js

The generated reports, screenshots, and difference images can be used to compare the detection results of the four approaches.