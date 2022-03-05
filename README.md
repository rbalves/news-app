<h1 align="center">
     📰 <a href="#" alt="site do ecoleta"> News </a>
</h1>

<h3 align="center">
    Site de notícias do Brasil, Portugal e Estados Unidos
</h3>

## 💻 Sobre o projeto

Aplicação de notícias usando a API https://newsapi.org/ de forma whitelabel, usando o país como "tema".

---

## 📂 Estrutura

Esse monorepo contem dois pacotes, o `design-system` e `news-app`

#### `@design-ops/design-system`

Pacote simulando a geração de [design tokens](https://brasil.uxdesign.cc/o-que-s%C3%A3o-design-tokens-cd408431727d) usando a ferramenta do [Style Dictionary](https://amzn.github.io/style-dictionary/#/) que permite que seja definido os tokens dos temas em um único formato (JSON) para que seja distribuído em várias plataformas e formatos de arquivos (JS, CSS).

Nesse pacote vai encontrar a pasta `themes` que serve para separar os tokens por tema.

#### `@design-ops/news-app`

Onde a aplicação foi desenvolvida usando Next.js.

---

## 🎨 Layout

## Mobile

### Página inicial

<table>
  <tr>
    <th>US</th>
    <th>PT</th>
    <th>BR</th>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/26890154/154603247-2dc7e178-13c5-450f-b34b-0adc515838de.png"></td>
    <td><img src="https://user-images.githubusercontent.com/26890154/154603281-266c48b8-72b2-4a36-a3f7-c812db48f8b2.png"></td>
    <td><img src="https://user-images.githubusercontent.com/26890154/154738386-d286dc1f-0291-407e-b51c-6e4a33b5d6c9.png"></td>
  </tr>
</table>

### Drawer (Menu)

<table>
  <tr>
    <th>US</th>
    <th>PT</th>
    <th>BR</th>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/26890154/154604037-bfc58f5d-8d65-475f-8986-698cee3fa5c8.png"></td>
    <td><img src="https://user-images.githubusercontent.com/26890154/154604395-19e8ef31-2be3-4803-aa2e-853da5c08162.png"></td>
    <td><img src="https://user-images.githubusercontent.com/26890154/154604456-d04e6ba8-d3f0-491c-ade7-c2f53a0a8856.png"></td>
  </tr>
</table>

### Página de categoria

<table>
  <tr>
    <th>US</th>
    <th>PT</th>
    <th>BR</th>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/26890154/154604720-b7e44a74-8f96-4509-828a-3648c13a0d5e.png"></td>
    <td><img src="https://user-images.githubusercontent.com/26890154/154604822-674e1c1f-8de8-4120-8e86-a7b7ce5103c0.png"></td>
    <td><img src="https://user-images.githubusercontent.com/26890154/154604866-dd0078f8-06c0-42be-9e87-f2d3a56db4f8.png"></td>
  </tr>
</table>

### Página de busca

<table>
  <tr>
    <th>US</th>
    <th>PT</th>
    <th>BR</th>
  </tr>
  <tr>
    <td><img src="https://user-images.githubusercontent.com/26890154/154605226-3660e38e-4d05-49e4-abeb-2844a0e0d8fd.png"></td>
    <td><img src="https://user-images.githubusercontent.com/26890154/154605285-b8e4cbe1-5e9e-42da-b8e4-a1dde2f344d0.png"></td>
    <td><img src="https://user-images.githubusercontent.com/26890154/154605520-de6179bc-27b9-445c-9006-c00515a7e107.png"></td>
  </tr>
</table>

## Desktop

### Página inicial

![image](https://user-images.githubusercontent.com/26890154/154605786-53b9b662-8e71-460c-a10c-a5cd6ffedb44.png)

### Página de categoria

![image](https://user-images.githubusercontent.com/26890154/154605954-03cd7079-45fe-4aae-bf50-f587b73c0269.png)

### Página de busca

![image](https://user-images.githubusercontent.com/26890154/154606088-4900d6e5-4582-4914-bcdf-55b6edd0b703.png)

---

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🧭 Rodando a aplicação

```bash
# Clone este repositório
$ git clone git@github.com:rbalves/news-app.git

# Acesse a pasta do projeto
$ cd news-app

# Para preparar o projeto, instalar e fazer o link das dependências
$ npm run bootstrap

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Material UI](https://mui.com/pt/)
- [Stitches](https://stitches.dev/)
- [Axios](https://github.com/axios/axios)
- [Next.js](https://nextjs.org/)
- [Styled components](https://styled-components.com/)

## 💪 Como contribuir no projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
   > Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---

## 🦸 Autor

<a href="https://www.linkedin.com/in/rbalves192/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/26890154?s=400&u=1bef336ba3747a76fa7d11d106f079998926cc24&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Rafael Alves</b></sub></a> <a href="https://www.linkedin.com/in/rbalves192/" title="Linkedin">🚀</a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Rafael-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/rbalves192/)](https://www.linkedin.com/in/rbalves192/)
[![Gmail Badge](https://img.shields.io/badge/-rbalves.ads@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:rbalves.ads@gmail.com)](mailto:rbalves.ads@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Rafael Alves 👋🏽 [Entre em contato!](https://www.linkedin.com/in/rbalves192/)
