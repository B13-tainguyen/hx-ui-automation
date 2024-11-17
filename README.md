# webdriverio-web-mobile-boilerplate

This boilerplate project has WebdriverIO 8 tests with cucumber and typescript, followed by the page objects pattern.

## Frameworks:

- WebdriverIO v8
- Cucumber v8

## Test execution:
- Checkout the codebase
- Install the packages using npm install (Yarn is more recommended)
- Run the tests by using npm run wdio-\* (local/chrome/docker/appium/.......) Please refer the package.json scripts.

## execute demo test case:
- npm run wdio-demo
- Report will be generated in artifacts directory

## Features:
- Typescript v5
- Page Object Pattern
- Prettier
- Multi browser support
  - Chrome
  - Firefox
  - Edge
  - Safari
  - Standalone
- Crossbrowser parallel execution
- Appium
- Cloud testing Integration with BrowserStack & Sauce Labs
- Docker service
- Share data serice
- Separate config files for each service
- Testdata management & read by user type
- Reporting
  - Dot
  - Spec
  - Multiple cucumber html report with failure screenshots
- Gitlab pipelines for Gitlab repository
- Github actions for Github repository
- Docker compose for setting up the docker hub
- Accessibility testing using AXE
- Visual testing using Applitools
- Log mechansim
