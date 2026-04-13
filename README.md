Demo-Shop Test Suite

An end-to-end regression test suite for [Demo-Shop](https://autoprojekt.simplytest.de/) built with Playwright and TypeScript. 

## Features

- **Cross-browser testing**: Automated tests run on Chromium, Firefox, and WebKit
- **CI/CD integration**: Configured for continuous integration with GitHub Actions
- **Reporting**: HTML reports with screenshots and traces
- **POM Structure**: The solution supports POM

## Project Structure
```
├── page-objects/
│   ├── components/            # Components on the pages
│   ├── pages/                 # Pages
│   └── pageObjectManager.ts   # Centralized page object manager
├── report/
│   └── index.html             # Report that can be opened in a browser                
├── test-data/
│   └── expectedResults.json   # Expected test data storage file
├── test-results/              # Screenshots of failed test cases
├── tests/
│   ├── regression/            # Test suite with regression tests
│   └── smoke/                 # Test suite with smoke tests
├── .gitignore                 # Files that are not checked in
├── fixtures.ts                # Establishment of a predifened environmant for every test
├── package-lock.json          # Dependencies
├── package.json               # Management of metadata, dependencies, custom commands
├── playwright.config.ts       # Playwright configuration
├── README.md                  # General information
└── tsconfig.json              # Configuration file for TS

```

## Available Scripts

| Command | Description |
|---------|-------------|
| `test:smoke` | Run smoke tests |
| `test:regression` | Run regression tests |
| `test:all` | Run all tests |
| `test:all-firefox` | Run all tests in firefox |