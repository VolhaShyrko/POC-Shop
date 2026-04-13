import { test as base } from '@playwright/test';
import { PageObjectManager } from './page-objects/pageObjectManager';
import expected from './test-data/expectedResults.json';

export const test = base.extend<{
  poManager: PageObjectManager;
  expected: typeof expected;
}>({
  // Page Object Manager to use directly in tests
  poManager: async ({ page }, use) => {
    const manager = new PageObjectManager(page);
    await use(manager);
  },

  // JSON test data to use directly in tests
  expected: async ({ }, use) => {
    await use(expected);
  }
});

export { expect } from '@playwright/test';
