# API RESTFUL - SISTEMA BANCÁRIO

## 💻 Sobre o Projeto 
A API de um sistema bancário é uma aplicação completa para a criação e manipulção da conta do usuário.

## 🛠️ Pré-requisitos 
Antes de começar, certifique-se de ter os seguintes requisitos:

- [Node.js](https://nodejs.org/en/download) instalado em seu sistema operacional.
- [PostgreSQL](https://www.postgresql.org/download/) instalado em seu sistema operacional.

## ⚙ Funcionalidades 

<details>
   <summary><b>Contas</b></summary>
   
   - Criar conta bancária
   - Listar contas bancárias
   - Atualizar os dados do usuário da conta bancária
   - Excluir uma conta bancária
     
</details>

<details>
   <summary><b>Transações</b></summary>

   - Depósitar em uma conta bancária
   - Sacar de uma conta bancária
   - Transferir valores entre contas bancárias
      
</details>

<details>
   <summary><b>Consultas</b></summary>
  
   - Consultar saldo da conta bancária
   - Emitir extrato bancário
      
</details>

## 🧰 Tecnologias Usadas 
- [Node.js](https://nodejs.org/en/download): Plataforma de execução de código JavaScript para o back-end.
- [Express.js](https://expressjs.com/pt-br/): Framework web para NodeJs.
- [Bcrypt](https://www.npmjs.com/package/bcrypt): Para criptografia da senha da conta.
- [Knex](https://knexjs.org/guide/): Query builder para criar as querys do banco.
- [Jsonwebtoken](https://jwt.io/introduction): Para gerar e válidar o token do usuário.
- [Dotenv](https://www.npmjs.com/package/dotenv): Para criar as variáveis de ambiente.
- [Cors](https://expressjs.com/en/resources/middleware/cors.html): Informa aos navegadores se um determinado recurso pode ou não ser acessado.
- [Pg](https://node-postgres.com/): Cria a conexão com o banco de dados.
- [Joi](https://joi.dev/api/): Faz verificações personalizadas das requisições.
- [Nodemon](https://nodemon.io/): É uma ferramenta que reinicia automaticamente o aplicativo do nodejs quando são detectadas alterações no arquivo no diretório. 

## 🔧 Instalação 

Siga estas etapas para configurar e usar a API:

##### 1. Clone este repositório para o seu ambiente de desenvolvimento local:

```sh
git clone https://github.com/Reinan-1/API-Noticias-CEP.git
```

##### 2. Instale as dependências:
   
```sh
npm install
```
##### 3. Após a instalação, o servidor pode ser executado via nodemon (para não precisar restartar o servidor depois de alguma alteração)::

```
npm run dev
```

## endpoints

### Listar contas bancárias

#### `GET` `/accounts`

-   **Requisição** - sem parâmetros 

-   **Resposta** - listagem de todas as contas bancárias existentes

#### Exemplo de resposta

```javascript
[
    {
        "numero": "1",
        "saldo": 0,
        "usuario": {
            "nome": "Foo Bar",
            "cpf": "00011122233",
            "data_nascimento": "2021-03-15",
            "telefone": "71999998888",
            "email": "foo@bar.com",
            "senha": "1234"
        }
    },
    {
        "numero": "2",
        "saldo": 1000,
        "usuario": {
            "nome": "Foo Bar 2",
            "cpf": "00011122234",
            "data_nascimento": "2021-03-15",
            "telefone": "71999998888",
            "email": "foo@bar2.com",
            "senha": "12345"
        }
    }
]

// nenhuma conta encontrada
[]
```

### Criar conta bancária

#### `POST` `/accounts`

-   **Requisição** - O corpo (body) possui um objeto com as seguintes propriedades:

    -   nome
    -   cpf
    -   data_nascimento
    -   telefone
    -   email
    -   senha
        
-   **Resposta** - sem resposta
 
  #### Exemplo de Requisição

```javascript
{
    "nome": "Foo Bar 2",
    "cpf": "00011122234",
    "data_nascimento": "2021-03-15",
    "telefone": "71999998888",
    "email": "foo@bar2.com",
    "senha": "12345"
}
```

#### Exemplo de Resposta

```javascript
// Sem conteúdo no corpo (body) da resposta
```

### Login

#### `POST` `/login`

-   **Requisição** - O corpo (body) possui um objeto com as seguintes propriedades:

    -   cpf
    -   senha
        
-   **Resposta** - Um objeto com as seguintes propriedades:
   
    - nome
    - cpf
    - data_nascimento
    - telefone
    - email
    - token de autenticação  
 
  #### Exemplo de Requisição

```javascript
{
    "cpf": "00011122234",
    "senha": "12345"
}
```

#### Exemplo de Resposta

```javascript
{
	"user": {
		"id": 7,
		"nome": "Foo Bar 1",
		"data_nascimento": "2021-03-15",
		"email": "foo@bar3.com",
		"cpf": "58632906447",
		"telefone": "71999998888"
	},
	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNzAxNjEc"
}
```

### Atualizar usuário da conta bancária

#### `PUT` `/accounts`

-   **Requisição** - O corpo (body) deverá possuir um objeto com todas as seguintes propriedades:
   
    -   nome
    -   cpf
    -   data_nascimento
    -   telefone
    -   email
    -   senha
 
 -   **Resposta** - sem resposta

 #### Exemplo de Requisição
```javascript
// PUT /contas/:numeroConta/usuario
{
    "nome": "Foo Bar 3",
    "cpf": "99911122234",
    "data_nascimento": "2021-03-15",
    "telefone": "71999998888",
    "email": "foo@bar3.com",
    "senha": "12345"
{
```
#### Exemplo de Resposta

```javascript
// HTTP Status 200 / 201 / 204
// Sem conteúdo no corpo (body) da resposta
```

### Excluir Conta

#### `DELETE` `/accounts`

-   **Requisição** - sem parâmetros

-   **Resposta** - sem resposta
  
#### Exemplo de Resposta

```javascript
// HTTP Status 200 / 201 / 204
// Sem conteúdo no corpo (body) da resposta
```
```javascript
// HTTP Status 400 / 401 / 403 / 404
{
    "message": "The account can't be deleted because there is still a balance!"
}
```

## ⌨️ Ajustes e melhorias

-   Depósitar em uma conta bancária
-   Sacar de uma conta bancária
-   Transferir valores entre contas bancárias
-   Consultar saldo da conta bancária
-   Emitir extrato bancário

## ✒️ Autor

* **Cauã Gomes Xavier** -  [Cauaxavier](https://github.com/Cauaxavier)
