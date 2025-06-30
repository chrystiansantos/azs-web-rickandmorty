# Rick and Morty

Esta aplicação foi desenvolvida com o objetivo de ser um **gerenciador de episódio**. Com ela, o usuário pode:

- Listar todos episódio da serie Rick and Morty;
- Adicionar ou remover episódios de uma lista de favoritos;
- Adicionar ou remover episódios de uma lista de assitidos.

---

## ⚙️ Estrutura e Tecnologias

### Separação de Responsabilidades

Este projeto adota a abordagem do **Atomic Design** para organizar seus componentes de forma modular e escalável. A interface é estruturada em níveis (Atoms, Molecules, Organisms, Templates e Pages), promovendo reutilização, clareza na hierarquia e facilidade na manutenção do código.

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
   git clone https://github.com/chrystiansantos/rick-and-morty-graphql.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd rick-and-morty-graphql
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

   A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

https://github.com/user-attachments/assets/216fff6f-19c2-4f03-a453-efc4075a9de7
