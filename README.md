# Playwright demo

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/from-referrer/)

This is repo contains two type of example, the testing which you can run with `npx playwright test` to run what's in `tests` directory and it uses typescript, and a simple scrapping example in `index.js` which you can run with `npm start` and it uses the regular js syntax.

## How this project was created?
```bash
npm init playwright@latest

# or (if you've already existing project)
npx playwright install
```
PS. This will download (and caches) all the required browsers binaries.

## Run for testing

By default tests will be run on all 3 browsers, chromium, firefox and webkit using 3 workers, you can specify the browser with `--project=chromium` argument.
```bash
# Runs the end-to-end tests (recommendd to begin with)
npx playwright test

# Runs the tests only on Desktop Chrome.
npx playwright test --project=chromium

# Runs the tests in a specific file
npx playwright test example

# Runs the tests in debug mode.
npx playwright test --debug

# Auto generate tests with Codegen.
npx playwright codegen

# To open last HTML report run:
npx playwright show-report

```

## Run for scrapping

You'll first need to install playwright:
```bash
npm install playwright
```
Code lives in `index.js` and can be run with:
```bash
node index.js
```
or `npm start` in this demo.