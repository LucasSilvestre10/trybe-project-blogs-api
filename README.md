# API de Blogs

## Descrição do Projeto

Bem-vindo ao repositório do projeto API de Blogs! Este projeto implementa uma API e um banco de dados para gerenciar conteúdo de blog. A aplicação Node.js utiliza o Sequelize para realizar um CRUD de posts, mantendo a integridade das relações entre usuários, categorias e posts.

### Requisitos Concluídos

1. **Migrations:**
   - Migrations criadas para as tabelas users, categories, blog_posts, posts_categories.
   - Utilização da configuração de teste do arquivo src/config/config.js.
   - Respeitadas a nomenclatura e o formato das entidades conforme o diagrama de Entidade-Relacionamento.

2. **Modelo User:**
   - Modelo User em src/models/User.js criado com as propriedades corretas.
   - Respeitada a nomenclatura e o formato das entidades.
   - Modelo desenvolvido em formato funcional.

3. **Endpoint POST /login:**
   - Endpoint implementado para autenticação de usuários.
   - Corpo da requisição seguindo o formato: 
     ```json
     {
       "email": "lewishamilton@gmail.com",
       "password": "123456"
     }
     ```

4. **Endpoint POST /user:**
   - Endpoint implementado para adição de novos usuários.
   - Corpo da requisição seguindo o formato:
     ```json
     {
       "displayName": "Brett Wiltshire",
       "email": "brett@email.com",
       "password": "123456",
       "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
     }
     ```

5. **Endpoint GET /user:**
   - Endpoint implementado para obter todos os usuários do banco de dados.

6. **Endpoint GET /user/:id:**
   - Endpoint implementado para obter um usuário com base no ID.

7. **Modelo Category:**
   - Modelo Category em src/models/Category.js criado com as propriedades corretas.
   - Modelo desenvolvido em formato funcional.

8. **Endpoint POST /categories:**
   - Endpoint implementado para adição de novas categorias.
   - Corpo da requisição seguindo o formato:
     ```json
     {
       "name": "Typescript"
     }
     ```

9. **Endpoint GET /categories:**
   - Endpoint implementado para obter todas as categorias do banco de dados.

10. **Modelo BlogPost:**
    - Modelo BlogPost em src/models/BlogPost.js criado com as propriedades e associações corretas.
    - Respeitada a nomenclatura e o formato das entidades.
    - Associação correta (N:1) com o modelo User.

11. **Modelo PostCategory:**
    - Modelo PostCategory em src/models/PostCategory.js criado com as propriedades e associações corretas.
    - Respeitada a nomenclatura e o formato das entidades.
    - Associação correta (N:N) entre o modelo BlogPost e o modelo Category.

12. **Endpoint POST /post:**
    - Endpoint implementado para adição de novos posts e vinculação a categorias.
    - Corpo da requisição seguindo o formato:
      ```json
      {
        "title": "Latest updates, August 1st",
        "content": "The whole text for the blog post goes here in this key",
        "categoryIds": [1, 2]
      }
      ```

### Habilidades Técnicas

- **Linguagens:**
  - JavaScript (Node.js)
  - SQL

- **Tecnologias:**
  - Sequelize (ORM para Node.js)
  - Express.js (Framework para Node.js)

- **Banco de Dados:**
  - PostgreSQL

- **Ferramentas:**
  - Git
  - VSCode
