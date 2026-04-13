import { Locator, Page } from '@playwright/test';
import { Cart } from './cart';

//Header component.
export class Header {
  readonly page: Page;
  readonly cart: Cart;
  readonly title: Locator;
  readonly description: Locator;
  readonly navigation: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('.site-title');
    this.description = page.locator('.site-description');
    this.navigation = page.locator('#site-navigation');

    //TODO: Add navigation component

    //Sub-components
    this.cart = new Cart(page);
  };
};