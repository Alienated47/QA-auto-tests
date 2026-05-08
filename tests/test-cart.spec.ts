import { test } from '@playwright/test';

import { HomePage } from '../web/pages/HomePage';
import { ProductPage } from '../web/pages/ProductPage';
import { CartPage } from '../web/pages/CartPage';

test('shopping flow', async ({ page }) => {

  const home = new HomePage(page);
  await home.open();

  const productPage = await home.openFirstProduct();

  const product = new ProductPage(productPage);
  const productName = await product.getProductName();
  
  await product.addToCart();
  await product.openCart();

  const cart = new CartPage(productPage);

  await cart.verifyProduct(productName);
  await cart.verifyPrice();

});