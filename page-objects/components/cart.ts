import { Locator, Page } from '@playwright/test';

//Cart component.
export class Cart {
  readonly page: Page;
  readonly content: Locator;
  readonly count_Text: Locator;
  readonly priceAmount_Text: Locator;

  constructor(page: Page) {
    this.page = page;
    this.content = page.locator('#site-header-cart');
    this.count_Text = this.content.locator('.count');
    this.priceAmount_Text = this.content.locator('.cart-contents .woocommerce-Price-amount');
  };
};