import { expect, Page } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  async clickOnCheckout() {
    await this.page.locator('[data-test="checkout"]').click();
    await expect(this.page).toHaveURL(
      'https://www.saucedemo.com/checkout-step-one.html'
    );
  }
}
