import { Page, expect } from '@playwright/test';

export class CartPage {

  constructor(private page: Page) {}

  async verifyProduct(expectedName: string) {
    const productName = this.page.locator('text=' + expectedName);
    await expect(productName).toBeVisible({ timeout: 10000 });
  }

  async verifyPrice() {
    const price = this.page.locator('text=/₺|TL/');
    await expect(price.first()).toBeVisible();
  }
}