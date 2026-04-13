import { test, expect } from '../../fixtures';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('T_01: Verify home page title and description', { 
    tag: '@smoke' 
}, async ({ poManager, expected}) => {
    const homePage = poManager.homePage;

    //Assert title and description of the home page
    await expect(homePage.header.title).toBeVisible();
    await expect(homePage.header.title).toContainText(expected.header.title);
    await expect(homePage.header.description).toContainText(expected.header.description);
});