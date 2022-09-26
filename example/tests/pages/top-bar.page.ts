import { expect, Page } from '@playwright/test';

export class TopBarPage {
  constructor(private page: Page) {}

  get cart() {
    return this.page.locator('.shopping_cart_link');
  }

  async clickOnCart() {
    await this.cart.click();
    await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html');
  }
}
