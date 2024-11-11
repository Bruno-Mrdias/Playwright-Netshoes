# Projeto de Testes Automatizados com Playwright

Este projeto utiliza Playwright para automatizar testes de ponta a ponta (E2E) do site da Netshoes. Os testes cobrem diferentes funcionalidades do site, incluindo validações de categorias de produtos, verificações de CEP e ordenações de produtos na loja virtual.

## Estrutura do Projeto

O projeto segue o padrão **Page Object Model (POM)**, o que ajuda a manter a organização e a reutilização de código nos testes. Abaixo estão os principais diretórios e arquivos do projeto:

- **`pages/`**: Contém as classes que representam as páginas do site e os métodos para interação e validação de elementos específicos.
  - `CategoryPage.js`: Classe que encapsula ações e validações nas páginas de categorias.
  - `CepPage.js`: Classe para validação de funcionalidade de CEP.
  - `CheckoutPage.js`: Classe que encapsula ações e validações de checkout na página.
  - `ProductOrderPage.js`: Classe para validação das funcionalidades de ordenação de produtos do site.

- **`tests/`**: Contém os arquivos de teste que executam as validações e verificações em cada página.
  - `CategoryTests.js`: Testes de validação para diferentes categorias de produtos.
  - `CepTests.js`: Testes para validação do CEP.
  - `ProductOrderTests.js`: Testes para validação de ordenação de produtos.

## Pré-requisitos

Para configurar o ambiente e executar os testes, é necessário:

- **Node.js** (v14 ou superior)
- **Playwright**

## Instalação

1. Instale Playwright:
   ```bash
   npx playwright install 

2. Execute os testes:
   ```bash
   npx playwright test

