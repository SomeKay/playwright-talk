import { test, expect } from '@playwright/test';
import { CartPage } from './pages/cart.page';
import { CheckoutPage } from './pages/checkout.page';
import { InventoryPage } from './pages/inventory.page';
import { ThankYouPage } from './pages/thank-you.page';
import { TopBarPage } from './pages/top-bar.page';

test('Shopping', async ({ page }) => {
  const inventoryPage = new InventoryPage(page);
  const topBarPage = new TopBarPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const thankYouPage = new ThankYouPage(page);

  inventoryPage.goto();
  inventoryPage.addItemsToCart();

  await expect(topBarPage.cart).toContainText('2');
  topBarPage.clickOnCart();
  
  cartPage.clickOnCheckout();
  
  checkoutPage.fillCheckout();
  checkoutPage.finishCheckout();

  await expect(thankYouPage.thankYouText).toHaveText(
    'THANK YOU FOR YOUR ORDER'
  );
});