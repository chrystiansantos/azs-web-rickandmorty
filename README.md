# Rick and Morty

Esta aplicação foi desenvolvida com o objetivo de ser um **gerenciador de episódio**. Com ela, o usuário pode:

- Listar todos episódio da serie Rick and Morty;
- Adicionar ou remover episódios de uma lista de favoritos;
- Adicionar ou remover episódios de uma lista de assitidos.

---

## ⚙️ Estrutura e Tecnologias

### Separação de Responsabilidades

Este projeto adota a abordagem do **Atomic Design** para organizar seus componentes de forma modular e escalável. A interface é estruturada em níveis (Atoms, Molecules, Organisms, Templates e Pages), promovendo reutilização, clareza na hierarquia e facilidade na manutenção do código.

### Testes

- **Testes unitários** com [Jest](https://jestjs.io/) e [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/);
- **Testes de ponta a ponta (E2E)** com [Playwright](https://playwright.dev/), garantindo maior **segurança e estabilidade** no desenvolvimento de novas funcionalidades;

### Tecnologias Utilizadas

- **Interface** construída com [Tailwind CSS](https://tailwindcss.com/), garantindo alta **produtividade e consistência visual**.
- **Gerenciamento de dados** realizado com [Apollo Client](https://www.apollographql.com/docs/react/), proporcionando **integração eficiente com GraphQL**, além de **cache otimizado**.

---

## 📦 Como Rodar o Projeto

### Requisitos

- **Node.js**.
- **Yarn** ou **npm** para gerenciar pacotes.

### Instalação

1. Clone este repositório:

   ```bash
   git clone https://github.com/chrystiansantos/rickandmorty-graphql.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd rickandmorty-graphql
   ```

3. Instale as dependências:

- Usando o npm:

  ```bash
  npm install
  ```

- Usando o Yarn:

  ```bash
  yarn install
  ```

4. Duplique o arquivo .env-example e renomeie-o para .env. Em seguida, preencha as variáveis de ambiente conforme necessário.

5. Para rodar o projeto no ambiente de desenvolvimento:

- Usando o npm:

  ```bash
  npm run dev
  ```

- Usando o Yarn:

  ```bash
  yarn dev
  ```

6. Para executar os teste unitarios:

- Usando o npm:

  ```bash
  npm run test
  ```

- Usando o Yarn:

  ```bash
  yarn test
  ```

7. Para executar os teste end to end:

- Usando o npm:

  ```bash
   npx playwright test --ui
  ```

- Usando o Yarn:

  ```bash
  yarn playwright test --ui
  ```

  A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

https://github.com/user-attachments/assets/af50a9d1-c9f9-468f-bbeb-139b928b2c2f
