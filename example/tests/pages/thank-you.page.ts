import { expect, Page } from '@playwright/test';

export class ThankYouPage {
  constructor(private page: Page) {}

  get thankYouText() {
    return this.page.locator('h2.complete-header');
  }
}
