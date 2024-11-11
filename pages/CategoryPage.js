const { expect } = require('@playwright/test');

export class CategoryPage {
    constructor(page) {
        this.page = page;
    }

    // Métodos para verificar as categorias
    async validateCategoryByText(categoryName, categoryMessage) {
        await this.page.locator('section').filter({ hasText: 'Todas as categorias' }).click();
        await this.page.locator('li').filter({ hasText: categoryName }).first().click();
        await expect(this.page.getByRole('heading', { name: categoryMessage })).toBeVisible();
        await this.page.waitForTimeout(3000); // Aguarda por 3 segundos
    }

    async validateCategoryByUrl(categoryName, categoryUrl) {
        await this.page.locator('section').filter({ hasText: 'Todas as categorias' }).click();
        await this.page.locator('li').filter({ hasText: categoryName }).first().click();
        await expect(this.page.url()).toContain(categoryUrl);
        await this.page.waitForTimeout(3000); // Aguarda por 3 segundos
    }

    async validateByUrl(categoryName, categoryUrl) {
        await this.page.locator('li').filter({ hasText: categoryName }).first().click();
        await expect(await this.page.url()).toContain(categoryUrl);
        await this.page.waitForTimeout(3000); // Aguarda por 3 segundos
    }

    async validateByText(categoryName, categoryMessage) {
        await this.page.locator('li').filter({ hasText: categoryName }).first().click();
        await expect(this.page.getByRole('heading', { name: categoryMessage })).toBeVisible();
        await this.page.waitForTimeout(3000); // Aguarda por 3 segundos
    }
}
