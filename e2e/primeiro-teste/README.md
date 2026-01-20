# Cypress Study Project

Este repositório tem como objetivo centralizar estudos práticos sobre **testes automatizados end-to-end (E2E)** utilizando **Cypress**.
O foco é aprendizado progressivo, boas práticas e experimentação de recursos comuns no dia a dia de QA.

---

## Objetivo

* Aprender Cypress na prática
* Automatizar fluxos reais de aplicações web
* Aplicar boas práticas de testes E2E
* Explorar fixtures, custom commands e geração de dados dinâmicos
* Entender estratégias de seleção de elementos e validações

---

## Tecnologias Utilizadas

* Cypress
* JavaScript
* Node.js
* Faker (@faker-js/faker)

---

## Instalação

1. Clonar o repositório:

```bash
git clone <url-do-repositorio>
```

2. Instalar dependências:

```bash
npm install
```

---

## Executando os Testes

Abrir o Cypress em modo interativo:

```bash
npx cypress open
```

Executar testes em modo headless:

```bash
npx cypress run
```

---

## Conceitos Estudados

* Estrutura de testes com `describe` e `it`
* Uso de `cy.get`, `cy.contains`, `should`
* Fixtures para dados estáticos
* Faker para geração de dados dinâmicos
* Custom Commands para reutilização de fluxos
* Seletores CSS e boas práticas de localização de elementos
* Testes em ambiente localhost
* Validações positivas e negativas

---

## Boas Práticas Aplicadas

* Evitar dados fixos em testes de cadastro
* Separação de responsabilidades (fixtures, commands, specs)
* Reutilização de código com Custom Commands
* Uso de `baseUrl` no `cypress.config.js`
* Testes independentes e previsíveis

---

## Observações

Este projeto **não representa um produto final**, mas sim um ambiente de aprendizado contínuo.
Mudanças frequentes fazem parte do processo de estudo.

