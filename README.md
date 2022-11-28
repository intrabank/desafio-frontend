# :nail_care: Desafio Frontend - Cadastro de usuário

Desafio para avaliar o candidato que queira ingressar no Intrabank como desenvolvedor frontend.

## O desafio

Seu objetivo é criar uma jornada simples de cadastro de usuário utlizando [Next](https://nextjs.org/) e [React](https://reactjs.org/), seguindo o layout. É obrigatório o uso de algum framework de estilo, que trabalhe com o conceito _css-in-js_. Você também pode instalar alguma outra lib, caso entenda que seja necessário.

## Sobre o layout

O [layout](https://www.figma.com/file/bVq19HGbDCOCScIwLIBnbp/Teste-t%C3%A9cnico?node-id=0%3A1) fornecido não é muito complexo, já que o nosso maior interesse é ver como você reutliza código e resolve o desafio.

## Sobre a API

Temos duas rotas de uma API de usuário para que você possa desenvolver a aplicação: 

```sh
"https://629f52338b939d3dc29519e3.mockapi.io/api/challenge"
```

#### Criar usuário

```
POST /user
{
    "firstName": String,
    "lastName": String,
    "email": String,
    "password": String,
    "country": String,
    "dateOfBirthday": Date,
    "bio": String,
    "receiveNotifications": Boolean
}
```

#### Obter dados do usuário

```
GET /user/:id
```
## O que será avaliado ?

- HTML semântico, limpo e claro
- CSS responsivo, semântico, reutilizável e seguindo boas práticas
- Tipagem 
- Componentização
- Conhecimento em JavaScript 
- Utilização correta do Git 

## Bônus

Caso você resolva fazer os seguintes itens, você ganhará um bônus durante a avaliação do seu teste:

- Utilizar [Stitches](https://stitches.dev/)
- Máscara nos campos 
- Testes

## Orientações

Primeiramente, faça um _fork_ e clone do projeto. Crie uma _branch_ com o seu nome e sobrenome e depois instale as dependências.

**1. Clone do projeto** 
```sh
git clone "https://github.com/intrabank/desafio-frontend.git"
```
**2. Criando nova branch**
```sh
git checkout -b "meunomeEsobrenome"
```
**3. Instalando as dependências**
```sh
yarn install
```
**4. Agora é rodar a aplicação**
```sh
yarn dev
```

Avaliaremos a sua **Pull Request** e se passar pelo nosso critério de avaliação inicial, marcaremos uma apresentação da aplicação. Boa sorte :blush:




