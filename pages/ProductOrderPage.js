const { expect } = require('@playwright/test');

export class ProductOrderPage {
    constructor(page) {
        this.page = page;
    }

    // Método para verificar a ordem de exibição dos produtos
    async validateProductOrder(sortOption, expectedUrlPart) {
        await this.page.locator('section').filter({ hasText: 'Todas as categorias' }).getByRole('img').click();
        await this.page.getByRole('link', { name: 'Masculino', exact: true }).click();
        await this.page.getByRole('combobox').selectOption(sortOption);
        await this.page.goto(`https://www.netshoes.com.br/lst/mi-masculino?mi=hm_ger_mntop_H-&psn=Menu_Top&sort=${sortOption}`);
        await expect(this.page.url()).toContain(expectedUrlPart);
    }
}
