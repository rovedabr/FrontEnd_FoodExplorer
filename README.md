# Food Explorer
## Front-End / Back-end

O Food Explorer é uma aplicação completa desenvolvida como projeto final da trilha Explorer da Rocketseat.
Para criação da aplicação foram utilizadas todas as tecnologias aprendidas durante o curso, criando a página de um restaurante fictício utilizando o conceito  de layout responsivo (Mobile first).
Para desenvolvimento da solução do desafio foi disponibilizado o modelo do Figma e os critérios obrigatórios a serem atendidos, desde a concepção do front-end, back-end, APIs próprias e deploy do projeto.

## Deploy

- Site:  (VERIFICAR)

## Screenshots


## Características
- Todos os dados são armazenados em um banco de dados relacional.
- Poderão ser criados novos usuários através da tela de SingUp. Por padrão todos os usuários criados serão "consumidores".  
- Os consumidores poderão inserir itens no carrinho e selecionar o tipo de pagamento. 
- O consumidor poderá revisar os itens do carrinho antes de realizar o pagamento.
- Ao realizar o pagamento o pedido é efetuado cadas tradando no banco de dados.
- Administradores poderão inserir novos pratos, excluir ou alterar pratos existentes (incluindo todos os detalhes, como preços, nome, valor e categoria dentre outros).
- Poderão ser real ziadas pesqusias pelos pratos cadastrados.
- A autenticação será por JWT e validada por senha a qual será criptografada no banco de dados.
- Layout responsivo (Mobile First).
- As APIs desenvolvidas são próprias da aplicação (não foram utilizadas APIs de terceiros).
- Foi aplicado o conceito de Inversão de dependência na API do usuário.
- Adicionada a função de marcar "favoritos" mas sem adição ao banco de dados (milha extra).
- OBS.: o Back-end possui algumas APIs desenvolvidas além dos requisitos do projeto mas que ainda não aplicadas


## Tecnologias (VER AINDA BUDGETS)
	https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
- Javascript
- Reactjs 
- Knex
- SQlite
- Styled Components 
- Inversão de dependência
- Axios 
- Vite 
- Node 
- Git

## Instalação e clone do projeto

```bash
git clone https://github.com/
```
Acessar a pasta e instale as dependências

```bash
npm install
```
Iniciar o servidor local (back-end / front-end)

```bash
npm run dev
```

Acessar o endereço fornecido pelo terminal via Browser.
#### Consumidor:
- e-mail: user@email.com
- senha : 123456
#### Administrador: 
- e-mail: admin@email.com
- senha: 123456


### Agradecimento (VERIFICAR)

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)