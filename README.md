## DUO GOURMET

Para o desafio foi utilizada a arquitetura de microserviços, distribuindo as funcionalidades em 3 API's.

**API restaurant**, para cadastrar um novo restaurante { method: POST, path: /restaurantes } e recuperar todos os restaurantes cadastrados no banco de dados { method: GET, path: /restaurantes }.

**API service**, que faz o controle de utilização dos restaurantes pelos usuários. Para utilizar um restaurante { method: POST, path: /utilizar }, recuperar o histórico de utilizações { method: GET, path: /historico } e também o histórico de cada usuário { method: GET, path: /historico/usuarioId }.

**API user**, onde é possível criar um novo usuário { method: POST, path: /users/create }, nessa rota será necessário informar um nome de usuário { username } e uma senha de acesso { password }, e também autenticar um usuário e gerar o token { method: POST, path: /users/auth }.

## INSTALAÇÃO

Para ter todas as API's e o gateway funcionando, é necessário instalar as dependências e subir o servidor de cada uma, conectando ao banco de dados, para a instalação siga os passos a seguir:

1. Abrir o console para executar os comandos, pode ser o **git bash** ou **cmd**, dentro da pasta **duo_gourmet** *cd your_computer_path/duo_gourmet*

2. Instalar e rodar **gateway**:
  2.1 Entrar na pasta **gateway** *cd gateway*
  2.2 Executar o comando *npm install*
  2.3 Executar o comando *npm start*

3. Instalar e rodar **restaurant**:
  3.1 Entrar na pasta **user** dentro da pasta **microservices** *cd microservices/user*
  3.2 Executar o comando *npm install*
  3.3 Executar o comando *npm start*

4. Instalar e rodar **service**:
  4.1 Entrar na pasta **service** dentro da pasta **microservices** *cd microservices/service*
  4.2 Executar o comando *npm install*
  4.3 Executar o comando *npm start*

5. Instalar e rodar **user**:
  5.1 Entrar na pasta **user** dentro da pasta **microservices** *cd microservices/user*
  5.2 Executar o comando *npm install*
  5.3 Executar o comando *npm start*

**obs.:** Após executar o comando *npm start*, aguardar a conexão com o banco de dados ser concluída para prosseguir.
**obs2.:** Para realizar a conexão com o banco de dados, deverá ser informado o IP da máquina onde o teste será executado para liberar o acesso ao mesmo.