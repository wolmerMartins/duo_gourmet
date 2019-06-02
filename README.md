# * DUO GOURMET *

Para o desafio foi utilizada a arquitetura de microserviços, distribuindo as funcionalidades em 3 API's.

*API restaurant*, para cadastrar um novo restaurante { method: POST, path: /restaurantes }

*API user*, onde é possível criar um novo usuário { method: POST, path: /users/create }, nessa rota será necessário informar um nome de usuário { username } e uma senha de acesso { password }, e também autenticar um usuário e gerar o token { method: POST, path: /users/auth }.