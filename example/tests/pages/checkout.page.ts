import { expect, Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillCheckout() {
    await this.page.locator('[data-test="firstName"]').fill('Bruce');
    await this.page.locator('[data-test="lastName"]').fill('Wayne');
    await this.page.locator('[data-test="postalCode"]').fill('12345');
    await this.page.locator('[data-test="continue"]').click();
    await expect(this.page).toHaveURL(
      'https://www.saucedemo.com/checkout-step-two.html'
    );
  }

  async finishCheckout() {
    await this.page.locator('[data-test="finish"]').click();
    await expect(this.page).toHaveURL(
      'https://www.saucedemo.com/checkout-complete.html'
    );
  }
}
