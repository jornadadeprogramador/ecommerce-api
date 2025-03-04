# E-Commerce API

Esta é uma API RESTful desenvolvida para gerenciar um sistema de E-Commerce. A API oferece endpoints para gerenciar produtos, categorias, pedidos, usuários, métodos de pagamento entre outros. Ela foi projetada para ser eficiente, escalável e fácil de integrar com outras aplicações de frontend.

## Funcionalidades

- **Autenticação de Usuários**: Registro e login de usuários através do Firebase Authentication para garantir a segurança dos dados.
- **Gestão de Empresas**: Criação, atualização, leitura e exclusão de empresas.
- **Catálogo de Produtos**: Cadastro, atualização, leitura e exclusão de produtos.
- **Gestão de Categorias**: Criação e listagem de categorias de produtos.
- **Gestão de Pedidos**: Criação e consulta de pedidos realizados pelos usuários.

Essas são algumas das principais funcionalidades, existem várias outras funcionalidades secundárias que complementam o fluxo de um E-Commerce.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org)
- [TypeScript](https://www.typescriptlang.org)
- [Express](https://expressjs.com)
- [Firebase](https://firebase.google.com)
  - [Authentication](https://firebase.google.com/docs/auth)
  - [Firestore](https://firebase.google.com/docs/firestore)
  - [Cloud Storage](https://firebase.google.com/docs/storage)
  - [Cloud Functions](https://firebase.google.com/docs/functions)
- [Celebrate/Joi](https://www.npmjs.com/package/celebrate)
- [Firebase Emulators](https://firebase.google.com/docs/emulator-suite)
- [Swagger](https://swagger-autogen.github.io)

## Instalação

Para rodar a API localmente, siga os passos abaixo:

### 1. Clonar o repositório

```bash
git clone https://github.com/jornadadeprogramador/ecommerce-api.git
cd ecommerce-api
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Vincular o Firebase ao projeto

O projeto está preparado para ser integrado ao Firebase e para isso precisamos fazer o vínculo do nosso código fonte ao projeto criado no Firebase.

#### 3.1. Obter chave de API do Firebase

Para vincular nosso código fonte ao Firebase, primeiramente será necessário criar uma conta gratuita em https://firebase.google.com e criar um projeto dentro do Console do Firebase.

Para obter a chave de API do seu projeto Firebase, você precisa acessar o [Console](https://console.firebase.google.com) do seu projeto criado anteriormente, acessar as configurações e na aba geral você verá uma opção chamada `Web API Key`, essa é sua chave de API.

#### 3.2. Configurar as variáveis de ambiente

Crie um arquivo `.env` dentro do diretório `functions` e configure a chave de API do Firebase.

Exemplo do arquivo .env:

```
FIRE_API_KEY={Sua chave de API do Firebase}
```

### 4. Rodar a aplicação

#### 4.1 Instalar o Firebase CLI

Se você ainda não tem o Firebase CLI instalado em sua máquina, será necessário instalá-lo:

```bash
npm install -g firebase-tools
```

#### 4.2 Inicializar o projeto com Firebase CLI

Agora precisamos iniciar o Firebase dentro do nosso projeto.

**IMPORTANTE:** Certifique-se de estar na raíz do repositório e não dentro do diretório `functions`!

```bash
firebase init
```

Se aparecer a seguinte mensagem: `Error: Failed to authenticate, have you run firebase login?`

Faça login no firebase antes de prosseguir:

```bash
firebase login && firebase init
```

O Firebase CLI irá lhe fazer algumas perguntas:

**Which Firebase features do you want to set up for this directory?**
Responda: *Functions: Configure a Cloud Functions directory and its files*

**First, let's associate this project directory with a Firebase project.**
Escolha a opção de acordo com seu momento:

 - Se você já tem um projeto criado no Firebase -> *Use an existing project*
 - Se você precisar criar seu projeto no Firebase -> *Create a new project*

**What language would you like to use to write Cloud Functions?**
Responda: *TypeScript*

**Do you want to use ESLint to catch probable bugs and enforce style?**
Responda: *n*

**File functions/package.json already exists. Overwrite?**
Responda: *n*

**File functions/tsconfig.json already exists. Overwrite?**
Responda: *n*

**File functions/src/index.ts already exists. Overwrite?**
Responda: *n*

**File functions/.gitignore already exists. Overwrite?**
Responda: *n*

**Do you want to install dependencies with npm now?**
Responda: *y*

#### 4.3 Executar localmente

Para rodar a API em modo de desenvolvimento usando o Firebase Emulators:

```bash
npm run build
npm start
```

**Obs.:** _Certifique-se de estar dentro do diretório `functions`_.

No console irá aparecer uma linha contendo o caminho da sua API executando localmente:

```bash
✔  functions[us-central1-api]: http function initialized (http://127.0.0.1:5001/e-commerce-d1288/us-central1/api).
```

Pronto. Agora basta usar esse caminho de API para testar localmente todas as funcionalidades.

### 5. Deploy no Cloud Functions

De nada serve uma API rodando localmente, não é mesmo? Agora vamos fazer o deploy de nossa API para o Firebase Cloud Functions.

Para isso, basta executar o comando:

```bash
npm run deploy
```

E verá a magia acontecer 🪄

## Aprenda Node.JS e Firebase

Esse repositório faz parte do **Curso de Criação de APIs RESTful com Node.js, Express, TypeScript e Firebase** publicado oficialmente na Udemy.

**Conheça o curso clicando aqui 👉**
https://www.udemy.com/course/apis-restful-nodejs-express-typescript-firebase/?referralCode=7415F7BF2A80604B7107

Será um prazer ter você como meu aluno!

Bons códigos! 👨‍💻
