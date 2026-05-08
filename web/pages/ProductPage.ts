import { Page } from '@playwright/test';

export class ProductPage {

  constructor(private page: Page) {}

  async getProductName() {
    const title = this.page.locator('[data-test-id="title"]');
    await title.waitFor({ state: 'visible' });
    return await title.innerText();
  }

  async addToCart() {
    const button = this.page.getByRole('button', { name: /sepete/i });
    await button.waitFor({ state: 'visible', timeout: 10000 });
    await button.scrollIntoViewIfNeeded();
    await button.click();
    await this.page.waitForTimeout(2000);
  }

  async openCart() {
    await this.page.waitForTimeout(2000);
    await this.page.getByText('Sepetim').click();
    await this.page.waitForLoadState('domcontentloaded');
  }
}