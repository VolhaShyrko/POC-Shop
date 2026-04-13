import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './basePages/basePage';
import { CartPage } from './cartPage';

//Home page.
export class HomePage extends BasePage{
  readonly page: Page;

  readonly products_List: Locator;
  readonly itemName_List: Locator;
  readonly itemAmount_List: Locator;
  readonly addToCart_Button: Locator;
  readonly cartItemPrice_Text: Locator;
  readonly viewCart_Button: Locator;

  constructor(page: Page) {
    super(page);

    //Components
    this.page = page;

    //Elements
    this.products_List = this.page.locator('li.product');
    this.itemName_List = this.page.locator('.woocommerce-loop-product__title');
    this.itemAmount_List = this.page.locator('.woocommerce-Price-amount');
    this.addToCart_Button = page.locator('.add_to_cart_button');
    this.cartItemPrice_Text = this.products_List.locator('.price');
    this.viewCart_Button = this.page.locator('.added_to_cart').first();
  };

  /** Get the price of an item by its name (e.g. 'Album').
   * @param itemName Item name.
  */
  getItemPrice(itemName: string): Locator {
    return this.getItemByText(this.products_List, itemName).locator(this.cartItemPrice_Text);       
  };

  /**
   * Add an item to cart by its name (e.g. 'Album').
   * @param itemName Item name.
  */
  async addItemToCart(itemName: string){
    const productCard = this.getItemByText(this.products_List, itemName);
    console.log(productCard.textContent);
    await productCard.locator(this.addToCart_Button).click();
    await expect(productCard.locator(this.viewCart_Button)).toBeVisible();
  };

  /** Click 'View Cart' button and open a cart page.*/
  async viewCart(): Promise<CartPage> {
    await this.viewCart_Button.click();
    return new CartPage(this.page);
  };
};