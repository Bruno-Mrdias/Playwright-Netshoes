import { test, expect } from '@playwright/test';
import { CepPage } from '../pages/CepPage';

test.describe('Netshoes Cep Tests', () => {
  let cepPage;

  test.beforeEach(async ({ page }) => {

      cepPage = new CepPage(page);
      await page.goto('https://www.netshoes.com.br/');
      // await categoryPage.closePopup();
  });

  test('Netshoes page validate CEP', async ({ page }) => {
      await cepPage.validateCep('37460-000')
    });
})
