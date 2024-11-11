// Categorythis.page.js
const { expect } = require('@playwright/test');

export class CheckoutPage {
    constructor(page) {
        this.page = page;
    }

    // Métodos para verificar as categorias
    async validateCheckout() {
        await this.page.getByText('Todas as categorias').click();
        await this.page.getByRole('link', { name: 'Masculino', exact: true }).click();
        await this.page.getByRole('link', { name: 'Adicionar à lista de desejos Bicicleta Aro 29 KRW Alumínio Shimano TZ 24 Vel' }).click();
        await this.page.getByRole('link', { name: '17' }).click();
        await this.page.getByRole('button', { name: 'Comprar' }).click();
    }
}
