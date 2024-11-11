import { test, expect } from '@playwright/test';
import { ProductOrderPage } from '../pages/ProductOrderPage';

test.describe('Netshoes Category Tests', () => {
  let productOrderPage;

  test.beforeEach(async ({ page }) => {
      productOrderPage = new ProductOrderPage(page);
      await page.goto('https://www.netshoes.com.br/');
      // await categoryPage.closePopup();
  });

  test('Product sorting option Mais populares', async ({ page }) => {
    await productOrderPage.validateProductOrder('relevance', 'relevance')
  });
  
  test('Product sorting option Mais vendidos', async ({ page }) => {
    await productOrderPage.validateProductOrder('best-sellers', 'best-sellers')
  });

  test('Product sorting option Lançamentos', async ({ page }) => {
    await productOrderPage.validateProductOrder('new-releases', 'new-releases')
  });

  test('Product sorting option Ofertas', async ({ page }) => {
    await productOrderPage.validateProductOrder('offers', 'offers')
  });

  test('Product sorting option Melhores avaliados', async ({ page }) => {
    await productOrderPage.validateProductOrder('review-stars', 'review-stars')
  });

  test('Product sorting option Maior preço', async ({ page }) => {
    await productOrderPage.validateProductOrder('highest-first', 'highest-first')
  });

  test('Product sorting option Menor preço', async ({ page }) => {
    await productOrderPage.validateProductOrder('lowest-first', 'lowest-first')
  });
})