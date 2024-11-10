import { test, expect } from '@playwright/test';

test('Netshoes page validate CEP', async ({ page }) => {
    await page.goto('https://www.netshoes.com.br/');
    await page.getByRole('link', { name: 'Informe seu CEP' }).click();
    await page.getByLabel('CEP').click();
    await page.getByLabel('CEP').fill('37460-000');
    await page.getByRole('button', { name: 'Continuar' }).click();
    await expect(page.getByText('O CEP 37460-000 foi aplicado')).toBeVisible();
    await page.getByRole('banner').getByRole('button', { name: 'OK' }).click();
    await expect(page.getByRole('link', { name: 'Enviar para: 37460-' })).toBeVisible();
  });
