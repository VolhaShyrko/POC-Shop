import { type Page } from '@playwright/test';
import { HomePage } from './pages/homePage';
import { CartPage } from './pages/cartPage';

export class PageObjectManager {
  private _homePage: HomePage | null = null;
  private _cartPage: CartPage | null = null;

  constructor(private page: Page) { };

  /** Home page --> 'Home' */
  get homePage(): HomePage {
    if (!this._homePage) {
      this._homePage = new HomePage(this.page);
    }
    return this._homePage;
  };

  /** Cart page --> 'Cart' */
  get cartPage(): CartPage {
    if (!this._cartPage) {
      this._cartPage = new CartPage(this.page);
    }
    return this._cartPage;
  };
};
