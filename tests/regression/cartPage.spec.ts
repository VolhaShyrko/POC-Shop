import { test, expect } from '../../fixtures';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('T_02: Add new item to cart and edit quantity', { 
    tag: '@regression' 
}, async ({ poManager }) => {

    const expected_emptyCartPrice = '0,00 €';
    const expected_CartItemsCount = '0 items';
    const expected_ItemName = 'Album';
    const expected_ItemCount = '1 item';
    const expected_NewQuantity = 2;
    const expected_ItemPrice = '15,00 €';
    const expected_NewAmount = '30,00 €';
    const expected_UpdatedItemCount = '2 items';

    const homePage = poManager.homePage;

    //Assert cart on Home page is empty
    await expect(homePage.header.cart.priceAmount_Text).toContainText(expected_emptyCartPrice);
    await expect(homePage.header.cart.count_Text).toContainText(expected_CartItemsCount);

    await homePage.addItemToCart(expected_ItemName);

    //Assert cart on Home page is updated with the added item
    await expect(homePage.header.cart.priceAmount_Text).toContainText(expected_ItemPrice);
    await expect(homePage.header.cart.count_Text).toContainText(expected_ItemCount);

    const cartPage = await homePage.viewCart();
    await cartPage.increaseItemQuantityTo(expected_ItemName, expected_NewQuantity);
    await cartPage.updateCart();

    //Assert new price in the cart and the page.
    await expect(cartPage.header.cart.priceAmount_Text).toContainText(expected_NewAmount);
    await expect(cartPage.header.cart.count_Text).toContainText(expected_UpdatedItemCount);
    await expect(cartPage.getItemPriceByText(expected_ItemName)).toContainText(expected_ItemPrice);
    await expect(cartPage.getItemSubtotalPriceByText(expected_ItemName)).toContainText(expected_NewAmount);
});