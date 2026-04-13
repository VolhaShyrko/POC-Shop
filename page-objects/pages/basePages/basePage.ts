import { Locator, Page } from '@playwright/test';
import { Header } from '../../components/header';

export class BasePage {
  readonly page: Page;
  readonly header: Header;

  readonly title: Locator;

  constructor(page: Page) {
    //Components
    this.page = page;
    this.header = new Header(page);

    //Elements
    this.title = page.locator('h1');
  };

  /** Centralized entry point. */
  async openApp() {
    await this.page.goto('/');
  };

  /**
   * Finds a specific item from a list based on a its text.
   * @param containerList The list of items (e.g., rows, cards).
   * @param text The text to search for (e.g., 'Album').
   */
  getItemByText(containerList: Locator, text: string): Locator {
    return containerList.filter({ hasText: text });
  };
};