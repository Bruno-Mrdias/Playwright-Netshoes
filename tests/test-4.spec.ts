import { test, expect } from '@playwright/test';

test('Product sorting option Mais populares', async ({ page }) => {
  await page.goto('/');
  await page.locator('section').filter({ hasText: 'Todas as categorias' }).locator('div').click();
  await page.getByRole('link', { name: 'Masculino', exact: true }).click();
  await page.getByRole('combobox').selectOption('relevance');
  await page.goto('https://www.netshoes.com.br/lst/mi-masculino?mi=hm_ger_mntop_H-&psn=Menu_Top&sort=relevance');
  await expect(page.url()).toContain('relevance');
});

test('Product sorting option Mais vendidos', async ({ page }) => {
  await page.goto('/');
  await page.locator('section').filter({ hasText: 'Todas as categorias' }).getByRole('img').click();
  await page.getByRole('link', { name: 'Masculino', exact: true }).click();
  await page.getByRole('combobox').selectOption('best-sellers');
  await page.goto('https://www.netshoes.com.br/lst/mi-masculino?mi=hm_ger_mntop_H-&psn=Menu_Top&sort=best-sellers');
  await expect(page.url()).toContain('best-sellers');
});

test('Product sorting option Lançamentos', async ({ page }) => {
  await page.goto('/');
  await page.locator('section').filter({ hasText: 'Todas as categorias' }).getByRole('img').click();
  await page.getByRole('link', { name: 'Masculino', exact: true }).click();
  await page.getByRole('combobox').selectOption('new-releases');
  await page.goto('https://www.netshoes.com.br/lst/mi-masculino?mi=hm_ger_mntop_H-&psn=Menu_Top&sort=new-releases');
  await expect(page.url()).toContain('new-releases');
});

test('Product sorting option Ofertas', async ({ page }) => {
  await page.goto('/');
  await page.locator('section').filter({ hasText: 'Todas as categorias' }).getByRole('img').click();
  await page.getByRole('link', { name: 'Masculino', exact: true }).click();
  await page.getByRole('combobox').selectOption('offers');
  await page.goto('https://www.netshoes.com.br/lst/mi-masculino?mi=hm_ger_mntop_H-&psn=Menu_Top&sort=offers');
  await expect(page.url()).toContain('offers');
});

test('Product sorting option Melhores avaliados', async ({ page }) => {
  await page.goto('/');
  await page.locator('section').filter({ hasText: 'Todas as categorias' }).getByRole('img').click();
  await page.getByRole('link', { name: 'Masculino', exact: true }).click();
  await page.getByRole('combobox').selectOption('review-stars');
  await page.goto('https://www.netshoes.com.br/lst/mi-masculino?mi=hm_ger_mntop_H-&psn=Menu_Top&sort=review-stars');
  await expect(page.url()).toContain('review-stars');
});

test('Product sorting option Maior preço', async ({ page }) => {
  await page.goto('/');
  await page.locator('section').filter({ hasText: 'Todas as categorias' }).getByRole('img').click();
  await page.getByRole('link', { name: 'Masculino', exact: true }).click();
  await page.getByRole('combobox').selectOption('highest-first');
  await page.goto('https://www.netshoes.com.br/lst/mi-masculino?mi=hm_ger_mntop_H-&psn=Menu_Top&sort=highest-first');
  await expect(page.url()).toContain('highest-first');
});

test('Product sorting option Menor preço', async ({ page }) => {
  await page.goto('/');
  await page.locator('section').filter({ hasText: 'Todas as categorias' }).getByRole('img').click();
  await page.getByRole('link', { name: 'Masculino', exact: true }).click();
  await page.getByRole('combobox').selectOption('lowest-first');
  await page.goto('https://www.netshoes.com.br/lst/mi-masculino?mi=hm_ger_mntop_H-&psn=Menu_Top&sort=lowest-first');
  await expect(page.url()).toContain('lowest-first');
});