import { test, expect } from '@playwright/test';

test('Checkout page without login ', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: '0', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Seu carrinho está vazio' })).toBeVisible();
});

test('Checkout page adding item without login ', async ({ page }) => {
 await page.goto('/');
 await page.getByText('Todas as categorias').click();
 await page.getByRole('link', { name: 'Masculino', exact: true }).click();
 await page.getByRole('link', { name: 'Adicionar à lista de desejos Bicicleta Aro 29 KRW Alumínio Shimano TZ 24 Vel' }).click();
 await page.goto('https://www.netshoes.com.br/p/bicicleta-aro-29-krw-aluminio-shimano-tz-24-vel-suspensao-freio-a-disco-mountain-bike-ltx-s40-azul+preto-CGY-0283-108');
 await page.getByRole('link', { name: '17' }).click();
 await page.getByRole('button', { name: 'Comprar' }).click();
 await expect(page.getByRole('button', { name: 'Finalizar icone de continuar' })).toBeVisible();
 await expect(page.getByRole('heading', { name: 'Bicicleta Aro 29 KRW Alumínio' })).toBeVisible();
});

test('Checkout page checking added item ', async ({ page }) => {
  await page.goto('/');
  await page.getByText('Todas as categorias').click();
  await page.getByRole('link', { name: 'Masculino', exact: true }).click();
  await page.getByRole('link', { name: 'Adicionar à lista de desejos Bicicleta Aro 29 KRW Alumínio Shimano TZ 24 Vel' }).click();
  await page.getByRole('link', { name: '17' }).click();
  await page.getByRole('button', { name: 'Comprar' }).click();
  await page.getByRole('button', { name: 'Escolher mais produtos' }).click();
  await page.getByRole('link', { name: '1', exact: true }).click();
 });
