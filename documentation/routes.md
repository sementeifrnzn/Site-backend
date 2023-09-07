Documentação das Rotas
----------------------

A seguir, estão documentadas as rotas presentes nos arquivos fornecidos. Essas rotas definem endpoints para realizar diversas operações no sistema, como cadastrar desafios, obter informações de desafio, verificar ranking de usuários, autenticar login, pontuar desafios, registrar novos usuários, entre outras.

### Rota `/cadastrar_desafio` (cadastrar\_desafio.js)

Esta rota permite cadastrar um novo desafio no sistema.

#### Método: POST

##### Parâmetros:

*   `numero`: Número do desafio a ser cadastrado.
*   `tipo`: Tipo ou categoria do desafio.
*   `pontuacao`: Pontuação associada ao desafio.
*   `palavra_chave`: Palavra-chave do desafio.
*   `image_url`: URL da imagem relacionada ao desafio.
*   `descricao`: Descrição do desafio.

##### Uso:

`POST /cadastrar_desafio`

### Rota `/get_desafio` (get\_desafio.js)

Esta rota obtém informações de um desafio específico do sistema, desde que o usuário tenha permissão para acessá-lo.

#### Método: POST

##### Parâmetros:

*   `desafio`: Número do desafio para obter informações.
*   `matricula`: Matrícula do usuário que deseja acessar o desafio.

##### Uso:

`POST /get_desafio`

### Rota `/get_ranking` (get\_ranking.js)

Esta rota obtém o ranking dos usuários do sistema, com base em suas pontuações.

#### Método: GET

##### Uso:

`GET /get_ranking`

### Rota `/get_user_info/:matricula` (get\_user\_info.js)

Esta rota obtém informações de um usuário específico do sistema.

#### Método: GET

##### Parâmetros:

*   `matricula`: Matrícula do usuário para obter informações.

##### Uso:

`GET /get_user_info/12345`

### Rota `/login` (login.js)

Esta rota autentica o login de um usuário.

#### Método: POST

##### Parâmetros:

*   `matricula`: Matrícula do usuário.
*   `senha`: Senha do usuário.

##### Uso:

`POST /login`

### Rota `/pontuar` (pontuar.js)

Esta rota permite pontuar um desafio respondido corretamente por um usuário.

#### Método: POST

##### Parâmetros:

*   `numero`: Número do desafio para pontuar.
*   `resposta`: Resposta fornecida pelo usuário.
*   `matricula`: Matrícula do usuário.

##### Uso:

`POST /pontuar`

### Rota `/registro` (registro\_de\_usuario.js)

Esta rota permite registrar um novo usuário no sistema.

#### Método: POST

##### Parâmetros:

*   `nome`: Nome do novo usuário.
*   `matricula`: Matrícula do novo usuário.
*   `senha`: Senha do novo usuário.
*   `email`: Email do novo usuário.

##### Uso:

`POST /registro`

Lembre-se de que essas rotas usam os métodos definidos nos arquivos de funções correspondentes para realizar as operações. Certifique-se de que as funções e classes de manipulação de dados (`cadastro_de_desafio`, `get_desafio_info`, `permissao_desafio`, etc.) estejam corretamente importadas e configuradas antes de usar essas rotas. Além disso, estas rotas devem estar configuradas em um servidor Express para serem acessíveis por meio de URLs específicas.