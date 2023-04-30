 <p align="center">
 <img src="./src/assets/brandGit.png"/>
 </p>

## Front-End / Back-end

O Food Explorer é uma aplicação completa desenvolvida como projeto final da trilha Explorer da Rocketseat.
Para criação da aplicação foram utilizadas todas as tecnologias aprendidas durante o curso, criando a página de um restaurante fictício utilizando o conceito  de layout responsivo (Mobile first).
Para desenvolvimento da solução do desafio foi disponibilizado o modelo do Figma e os critérios obrigatórios a serem atendidos, desde a concepção do front-end, back-end, APIs próprias e deploy do projeto.


## Deploy

- Site:  https://rvdfoodexplorer.netlify.app/


## Imagens

![página1](https://user-images.githubusercontent.com/118762335/235221680-9b3f9f7e-b189-48b3-9d34-491084ec5507.png)
![página5](https://user-images.githubusercontent.com/118762335/235221735-8669adaa-9db8-43c6-8f0d-ee990b93806b.png)
![página4](https://user-images.githubusercontent.com/118762335/235221744-49b2d5c4-abdb-4f22-9c7e-f48bec569252.png)
![página2](https://user-images.githubusercontent.com/118762335/235223836-0f27c5d6-d579-4ae1-a094-7edb81a13f13.png)
![página3](https://user-images.githubusercontent.com/118762335/235223847-9deea233-062a-4eaf-b4cb-e69db3a95845.png)


## Características

- Todos os dados são armazenados em um banco de dados relacional.
- Poderão ser criados novos usuários através da tela de SingUp. Por padrão todos os usuários criados serão "consumidores".  
- Os consumidores poderão pesquisar por pratos, inserir itens no carrinho, remover itens, selecionar o tipo de pagamento e realizar o pedido. 
- O consumidor também poderá revisar os itens do carrinho antes de realizar o pagamento, removendo os itens caso queira.
- Ao realizar o pagamento o pedido é efetuado realizando o cadastramento do pedido no banco de dados.
- Administradores poderão inserir novos pratos, fazer upload da imagem, selecionar categoria, definir o preço, nome do prato e descrição.
- Os administradores também poderão excluir ou alterar pratos já existentes.
- Poderão ser realizadas pesquisas pelos pratos cadastrados.
- A autenticação dos usuários será por JWT, com validação por senha a qual será criptografada no banco de dados.
- O layout desenvolvido é do tipo responsivo (Mobile First), funcionando perfeitamente em vários tamanhos de telas.
- As APIs utilizadas foram desenvolvidas para esta aplicação (não foram utilizadas APIs de terceiros).
- Foi aplicado o conceito de Inversão de dependência na API do usuário.
- Adicionada a função de marcar "favoritos" mas sem adição ao banco de dados (milha extra).
- OBS.: o Back-end possui algumas APIs desenvolvidas além dos requisitos do projeto mas que ainda não aplicadas (para desenvolvimento futuro).

## Tecnologias empregadas

![image](https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white)
![image](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![image](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![image](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![image](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![image](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![image](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![image](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![image](https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white)

- HTML
- CSS in JS
- Javascript
- Reactjs 
- JQuery
- Express
- Bcrypt
- Knex
- SQlite
- Styled Components 
- Inversão de dependência
- Axios 
- Vite 
- Node 
- Jest
- PM2
- Git


## Instalação e clone do projeto

 **Front-end**
```bash
git clone https://github.com/rovedabr/FrontEnd_FoodExplorer
```
**Back-end**
```bash
git clone https://github.com/rovedabr/BackEnd_FoodExplorer
```

Acessar a pasta e instale as dependências
```bash
npm install
```

Iniciar o servidor local (back-end / front-end)
```bash
npm run dev
```

Acessar o endereço fornecido pelo terminal via Browser (_exemplo abaixo_)
```bash
Local:   http://localhost:5173/
```

### Consumidor:
- e-mail: user@email.com
- senha : 123456
#### Administrador: 
- e-mail: admin@email.com
- senha: 123456


## Contato

**Ivan Roveda**
- [Linkedin](https://www.linkedin.com/in/ivan-roveda-952827b8/)
- E-mail : ivan.roveda76@gmail.com


## Links uteis

- [Rockeseat](https://www.rocketseat.com.br/)
- [Netlify](https://www.netlify.com/)
- [render](https://render.com/)


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Agradecimento 

- A toda equipe da Rocketseat pelo apoio e ensinamentos prestados. 
- Ao meu companheiro de vida Juscelino, a minha família, a meus amigos que me apoiaram nesta transição, em especial o Bruno, pela paciência e apoio durante o curso.
