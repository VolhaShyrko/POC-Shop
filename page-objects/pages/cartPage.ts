import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './basePages/basePage';

//Cart page.
export class CartPage extends BasePage {
    readonly page: Page;

    readonly cartItem_List: Locator;
    readonly cartItemName_List: Locator;
    readonly cartItemInput_Field: Locator;
    readonly cartItemPrice_Text: Locator;
    readonly cartItemSubtotalPrice_Text: Locator;
    readonly updateCart_Button: Locator;
    readonly cartSuccessfullyUpdated_Msg: Locator;

  constructor(page: Page) {
    super(page);

    //Components
    this.page = page;

    //Elements
    this.cartItem_List = this.page.locator('.woocommerce-cart-form__cart-item');
    this.cartItemName_List = this.cartItem_List.locator('.product-name');
    this.cartItemInput_Field = this.page.locator('.product-quantity input');
    this.cartItemPrice_Text = this.page.locator('.product-price');
    this.cartItemSubtotalPrice_Text = this.page.locator('.product-subtotal');
    this.updateCart_Button = this.page.getByRole('button', { name: 'Update cart' });
    this.cartSuccessfullyUpdated_Msg = this.page.locator('.woocommerce-message').filter({ hasText: 'Cart updated.' });
  };

   /** Get the price of an item by its name (e.g. 'Album').
   * @param itemName Item name.
   */
   getItemPriceByText(itemName: string): Locator {
        return this.getItemByText(this.cartItem_List, itemName).locator(this.cartItemPrice_Text);       
    };

  /**
   * Get the subtotal price of an item by its name (e.g. 'Album').
   * @param itemName Item name.
   */
   getItemSubtotalPriceByText(itemName: string): Locator {
        return this.getItemByText(this.cartItem_List, itemName).locator(this.cartItemSubtotalPrice_Text); 
  };
  
  /**
   * Get an item by its name (e.g. 'Album') and increase its quantity.
   * @param itemName Item name.
   * @param quantity Quantity to increase to (e.g. 5).
   */
  async increaseItemQuantityTo(itemName: string, quantity: number) {
    const cartItem = this.getItemByText(this.cartItem_List, itemName);
    await cartItem.locator(this.cartItemInput_Field).clear();
    await cartItem.locator(this.cartItemInput_Field).fill(quantity.toString());
  };

  /** Update cart and wait till success message is visible. */
  async updateCart(){
    await expect(this.updateCart_Button).toBeVisible();
    await this.updateCart_Button.click();
    await expect(this.cartSuccessfullyUpdated_Msg).toBeVisible();  //From the interview: not the best solution, as msg is always displayed. Alternative: expect [Update cart] button to be disabled
  };
};
