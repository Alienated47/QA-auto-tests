import { Page } from '@playwright/test';

export class HomePage {

  constructor(private page: Page) {}

  async open() {
    await this.page.goto('https://www.hepsiburada.com', {
      waitUntil: 'domcontentloaded'
    });
  }

  async openFirstProduct() {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.page.locator('a[href*="-p-"]').first().click()
    ]);

    await newPage.waitForLoadState();

    return newPage;
  }
}