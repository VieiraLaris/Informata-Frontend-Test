# Informata Frontend Test - Zelda Vault
  
Este projeto foi desenvolvido como parte do processo seletivo para a vaga de Desenvolvedor(a) Front-end na Informata.

O objetivo é construir uma aplicação Angular utilizando o PrimeNG como biblioteca de componentes e estilos, aplicando boas práticas de arquitetura, componentização e usabilidade.

---

## Funcionalidades Implementadas

- **Tela de Cadastro:** formulário simples para cadastro de usuário, salvando os dados no `localStorage`.
- **Tela de Login:** validação do usuário com base nos dados cadastrados no `localStorage`.
- **Logout:** limpa o `localStorage` e redireciona para a tela de login.
- **Listagem de Itens:** consome a [API Zelda](https://docs.zelda.fanapis.com/) e exibe os itens.
- **Busca de Itens:** campo de pesquisa que filtra a lista retornada pela API.

---

## 🛠️ Tecnologias Utilizadas

- [Angular 20+](https://angular.dev/) - Framework front-end
- [PrimeNG](https://primeng.org/) - Biblioteca de componentes UI
- [TypeScript](https://www.typescriptlang.org/) - Linguagem base do Angular
- [Zelda API](https://docs.zelda.fanapis.com/) - API pública para listagem de itens

---

## Pré-requisitos

- [Node.js (LTS)](https://nodejs.org/) – recomendado versão 18+
- [Angular CLI](https://angular.io/cli) – versão mais recente
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) – gerenciador de pacotes

---

## Rodando o Projeto Localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/VieiraLaris/Informata-Frontend-Test.git

```
2. **Entre no diretório do projeto:**

```bash
cd informata-frontend-test

```

3. **Instale as dependências:**

```bash
npm install 

#Ou com yarn se preferir
yarn install

```

4. **Inicie o servidor:**

```bash
ng serve

```

5. **Acesse no navegador:**

```arduino
http://localhost:4200

```

## Limitações e problemas conhecidos

- **Testes**: Infelizmente, não foram implementados testes para a verificação dos componentes.

- **Responsividade**: A aplicação não possui uma responsividade ideal para dispositivos com telas menores (mobile), em especial na tela de **catálogo**.