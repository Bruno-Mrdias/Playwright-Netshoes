// CategoryTests.js
import { test, expect } from '@playwright/test';
import { CategoryPage } from '../pages/CategoryPage';

test.describe('Netshoes Category Tests', () => {
    let categoryPage;

    test.beforeEach(async ({ page }) => {
        categoryPage = new CategoryPage(page);
        await page.goto('https://www.netshoes.com.br/');
        // await categoryPage.closePopup();
    });

    test('verify all categories', async ({ page }) => {
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

    // Utiliza validateCategory para verificar cada página de categoria
    test('verify Masculino category page', async () => {
        await categoryPage.validateCategoryByText('Masculino', 'SELEÇÃO DE PRODUTOS PRA ELES!');
    });

    test('verify Feminino category page', async () => {
        await categoryPage.validateCategoryByText('Feminino', 'SELEÇÃO DE PRODUTOS PRA ELAS!');
    });

    test('verify Infantil category page', async () => {
        await categoryPage.validateCategoryByUrl('Infantil', '/infantil');
    });

    test('verify Calçados category page', async () => {
        await categoryPage.validateCategoryByText('Calçados', 'CALÇADOS');
    });

    test('verify Roupas category page', async () => {
        await categoryPage.validateCategoryByText('Roupas', 'CONFORTO E ESTILO PARA O DIA TODO');
    });

    test('verify Suplementos category page', async () => {
        await categoryPage.validateCategoryByUrl('Suplementos', '/suplementos');
    });

    test('verify GAMES category page', async () => {
        await categoryPage.validateCategoryByText('GAMES', 'GAMES GAMES');
    });

    test('verify Equipamentos category page', async () => {
        await categoryPage.validateCategoryByText('Equipamentos', 'EQUIPAMENTOS E ACESSÓRIOS FITNESS');
    });

    test('verify Promoções category page', async () => {
        await categoryPage.validateCategoryByText('Promoções', 'OUTLET COM ATÉ 70% OFF');
    });

    test('verify Categorias category page', async () => {
        await categoryPage.validateCategoryByUrl('Categorias', 'categorias');
    });

    test('verify SPORTSTYLE category page', async () => {
      await categoryPage.validateByUrl('SPORTSTYLE', '/sportstyle');
  });

    test('verify CORRIDA category page', async () => {
      await categoryPage.validateByUrl('CORRIDA', '/corrida');
    });

    test('verify FUTEBOL category page', async () => {
        await categoryPage.validateByUrl('FUTEBOL', '/futebol');
    });

    test('verify LOJAS PARCEIRAS category page', async () => {
        await categoryPage.validateByUrl('LOJAS PARCEIRAS', '/lojasparceiras');
    });

    test('verify BLACK NOVEMBER category page', async () => {
        await categoryPage.validateByText('BLACK NOVEMBER', 'Black November 2024');
    });

    test('verify CUPONS category page', async () => {
        await categoryPage.validateByText('CUPONS', 'Cupons Netshoes');
    });
});
