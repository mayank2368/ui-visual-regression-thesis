# UI Regression Validation Benchmark

A benchmark project for comparing visual validation approaches in automated UI testing.

## Tools

- [Playwright](https://playwright.dev/) - Browser automation and screenshot comparison
- [BackstopJS](https://github.com/garris/BackstopJS) - Visual regression testing
- [Pixelmatch](https://github.com/mapbox/pixelmatch) - Pixel-level image comparison
- Custom DOM Analysis - Layout and structural comparison using Playwright

## Installation

```bash
git clone <repository-url>
cd ui-reg-project
npm install
npx playwright install chromium

## Run the server

npx http-server . -p 3000


## Run Tests

Playwright

npx playwright test tests/playwright/benchmark.spec.ts

## Update screenshots:

npx playwright test tests/playwright/benchmark.spec.ts --update-snapshots




BackstopJS

npx backstop reference
npx backstop test




Pixelmatch

node tests/pixelmatch/generateScreenshots.js
node tests/pixelmatch/compare.js


DOM Analysis

node tests/dom-analysis/captureLayout.js
node tests/dom-analysis/compareLayout.js


Purpose

This project was developed as part of a Master's thesis to compare different approaches for detecting UI regressions using a common benchmark application and predefined visual regression scenarios.