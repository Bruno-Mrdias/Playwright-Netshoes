const { expect } = require('@playwright/test');

export class CepPage {
    constructor(page) {
        this.page = page;
    }

    // Método para verificar o CEP
    async validateCep(cepNum) {
        await this.page.getByRole('link', { name: 'Informe seu CEP' }).click();
        await this.page.getByLabel('CEP').click();
        await this.page.getByLabel('CEP').fill(cepNum);
        await this.page.getByRole('button', { name: 'Continuar' }).click();
        await expect(this.page.getByText('O CEP ' + cepNum + ' foi aplicado')).toBeVisible();
    }
}
