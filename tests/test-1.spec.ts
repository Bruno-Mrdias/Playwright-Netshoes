import { test, expect } from '@playwright/test';

test('Netshoes verify all categorys', async ({ page }) => {
  await page.goto('/');
  await page.locator('.bGGcZJZR7IsEsQjTbspD-html-close-button > svg').click();
  await page.getByText('Todas as categorias').click();
  await expect(page.getByText('Masculino', { exact: true }).first()).toBeVisible();

  await expect(page.getByText('Feminino', { exact: true }).first()).toBeVisible();
  await expect(page.getByText('Infantil').first()).toBeVisible();
  await expect(page.getByText('Calçados', { exact: true }).first()).toBeVisible();
  await expect(page.locator('span').filter({ hasText: 'Roupas' }).first()).toBeVisible();
  await expect(page.locator('span').filter({ hasText: 'Suplementos' })).toBeVisible();
  await expect(page.getByText('GAMES', { exact: true })).toBeVisible();
  await expect(page.getByText('Equipamentos').first()).toBeVisible();
  await expect(page.getByText('Promoções')).toBeVisible();
  await expect(page.getByText('Categorias', { exact: true })).toBeVisible();
});

test('Netshoes verify Masculino category page', async ({ page }) => {
  await page.goto('/');
  await page.locator('section').filter({ hasText: 'Todas as categorias' }).click();
  await page.locator('li').filter({ hasText: 'Masculino' }).first().click();
  await expect(page.getByRole('heading', { name: 'SELEÇÃO DE PRODUTOS PRA ELES!' })).toBeVisible();
});

test('Netshoes verify Feminino category page', async ({ page }) => {
  await page.goto('/');
  await page.locator('section').filter({ hasText: 'Todas as categorias' }).click();
  await page.locator('li').filter({ hasText: 'Feminino' }).first().click();
  await expect(page.getByRole('heading', { name: 'SELEÇÃO DE PRODUTOS PRA ELAS!' })).toBeVisible();
});

test('Netshoes verify Infantil category page', async ({ page }) => {
  await page.goto('/');
  await page.locator('section').filter({ hasText: 'Todas as categorias' }).click();
  await page.locator('li').filter({ hasText: 'Infantil' }).first().click();
  await expect(page.url()).toContain('/infantil');
});

test('Netshoes verify Calçados category page', async ({ page }) => {
  await page.goto('/');
  await page.locator('section').filter({ hasText: 'Todas as categorias' }).click();
  await page.locator('li').filter({ hasText: 'Calçados' }).first().click();
  await expect(page.getByRole('heading', { name: 'CALÇADOS' })).toBeVisible();
});

test('Netshoes verify Roupas category page', async ({ page }) => {
  await page.goto('/');
  await page.locator('section').filter({ hasText: 'Todas as categorias' }).click();
  await page.locator('li').filter({ hasText: 'Roupas' }).first().click();
  await expect(page.getByRole('heading', { name: 'CONFORTO E ESTILO PARA O DIA TODO' })).toBeVisible();

});

test('Netshoes verify Suplementos category page', async ({ page }) => {
  await page.goto('/');
  await page.locator('section').filter({ hasText: 'Todas as categorias' }).click();
  await page.locator('li').filter({ hasText: 'Suplementos' }).first().click();
  await expect(page.url()).toContain('/suplementos');
});

test('Netshoes verify GAMES category page', async ({ page }) => {
  await page.goto('/');
  await page.locator('section').filter({ hasText: 'Todas as categorias' }).click();
  await page.locator('li').filter({ hasText: 'GAMES' }).first().click();
  await expect(page.getByRole('heading', { name: 'GAMES GAMES' })).toBeVisible();
});

test('Netshoes verify Equipamentos category page', async ({ page }) => {
  await page.goto('/');
  await page.locator('section').filter({ hasText: 'Todas as categorias' }).click();
  await page.locator('li').filter({ hasText: 'Equipamentos' }).first().click();
  await expect(page.getByRole('heading', { name: 'EQUIPAMENTOS E ACESSÓRIOS FITNESS' })).toBeVisible();
});

test('Netshoes verify Promoções category page', async ({ page }) => {
  await page.goto('/');
  await page.locator('section').filter({ hasText: 'Todas as categorias' }).click();
  await page.locator('li').filter({ hasText: 'Promoções' }).first().click();
  await expect(page.getByRole('heading', { name: 'OUTLET COM ATÉ 70% OFF' })).toBeVisible();
});

test('Netshoes verify Categorias category page', async ({ page }) => {
  await page.goto('/');
  await page.locator('section').filter({ hasText: 'Todas as categorias' }).click();
  await page.locator('li').filter({ hasText: 'Categorias' }).first().click();
  await expect(page.url()).toContain('categorias');
});








