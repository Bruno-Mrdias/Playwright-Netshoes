import { test, expect } from '@playwright/test';
import { CheckoutPage } from '../pages/CheckoutPage';

test.describe('Netshoes Cep Tests', () => {
  let checkoutPage;

  test.beforeEach(async ({ page }) => {

      checkoutPage = new CheckoutPage(page);
      await page.goto('https://www.netshoes.com.br/');
      // await categoryPage.closePopup();
  });

  test('Checkout page without login ', async ({ page }) => {
    await page.getByRole('link', { name: '0', exact: true }).click();
    await expect(page.getByRole('heading', { name: 'Seu carrinho está vazio' })).toBeVisible();
  });

  test('Checkout page adding item without login ', async ({ page }) => {
    await checkoutPage.validateCheckout();
    await expect(page.getByRole('button', { name: 'Finalizar icone de continuar' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Bicicleta Aro 29 KRW Alumínio' })).toBeVisible();
  });

  test('Checkout page checking added item ', async ({ page }) => {
    await checkoutPage.validateCheckout();
    await page.getByRole('button', { name: 'Escolher mais produtos' }).click();
    await page.getByRole('link', { name: '1', exact: true }).click();
  });
});
