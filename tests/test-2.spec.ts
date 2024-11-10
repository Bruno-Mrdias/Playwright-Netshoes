import { test, expect } from '@playwright/test';

test('SPORTSTYLE category page', async ({ page }) => {
  await page.goto('/');await page.goto('https://www.netshoes.com.br/');
  await page.getByRole('link', { name: 'SPORTSTYLE' }).click();
  await expect(page.url()).toContain('/sportstyle');
});

test('CORRIDA category page', async ({ page }) => {
  await page.goto('/');await page.goto('https://www.netshoes.com.br/');
  await page.getByRole('link', { name: 'CORRIDA', exact: true }).click();;
  await expect(page.url()).toContain('/corrida');
});

test('FUTEBOL category page', async ({ page }) => {
  await page.goto('/');await page.goto('https://www.netshoes.com.br/');
  await page.getByRole('link', { name: 'FUTEBOL', exact: true }).click();;
  await expect(page.url()).toContain('/futebol');
});

test('LOJAS PARCEIRAS category page', async ({ page }) => {
  await page.goto('/');await page.goto('https://www.netshoes.com.br/');
  await page.getByRole('link', { name: 'LOJAS PARCEIRAS', exact: true }).click();;
  await expect(page.url()).toContain('/lojasparceiras');
});

test('BLACK NOVEMBER category page', async ({ page }) => {
  await page.goto('/');await page.goto('https://www.netshoes.com.br/');
  await page.getByRole('link', { name: 'BLACK NOVEMBER', exact: true }).click();;
  await expect(page.url()).toContain('/black-friday');
  await expect(page.getByRole('heading', { name: 'Black November 2024' })).toBeVisible();
});

test('CUPONS category page', async ({ page }) => {
  await page.goto('https://www.netshoes.com.br/');
  await page.getByRole('link', { name: 'CUPONS' }).click();
  await expect(page.getByRole('heading', { name: 'Cupons Netshoes' })).toBeVisible();
});




