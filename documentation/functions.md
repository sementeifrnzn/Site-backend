Documentação das Funções
------------------------

Esta documentação apresenta uma descrição de cada função presente nos arquivos fornecidos. Essas funções são usadas para realizar várias tarefas relacionadas ao sistema, como cadastro de desafio, obtenção de informações de desafio, ranking de usuários, entre outras.

### Função `cadastro_de_desafio(numero, tipo, pontuacao, palavra_chave, image_url, descricao)`

Esta função permite cadastrar um novo desafio na tabela `desafio`.

#### Parâmetros:

*   `numero`: O número do desafio a ser cadastrado.
*   `tipo`: O tipo ou categoria do desafio.
*   `pontuacao`: A pontuação associada ao desafio.
*   `palavra_chave`: A palavra-chave que os usuários devem fornecer para concluir o desafio.
*   `image_url`: A URL de uma imagem relacionada ao desafio.
*   `descricao`: Uma descrição do desafio.

    const cadastro_de_desafio = require('[DIR]/functions/cadastro_de_desafio');
    
    cadastro_de_desafio(3, 'Raciocínio Lógico', 100, 'Quebra-Cabeça', 'https://example.com/image.jpg', 'Resolva o enigma para avançar.');
    
    

### Função `get_desafio_info(numero)`

Esta função obtém informações específicas de um desafio da tabela `desafio` com base no número do desafio fornecido.

#### Parâmetros:

*   `numero`: O número do desafio para obter informações.

#### Uso:

    const get_desafio_info = require('[DIR]/functions/get_desafio_info');
    
    get_desafio_info(2)
      .then(result => {
        console.log(result); // Informações do desafio obtidas com sucesso.
      });
    
    

### Função `get_ranking()`

Esta função obtém informações de ranking dos usuários da tabela `usuario`.

#### Uso:

    const get_ranking = require('[DIR]/functions/get_ranking');
    
    get_ranking()
      .then(result => {
        console.log(result); // Ranking de usuários obtido com sucesso.
      });

### Função `get_todos_desafios()`

Esta função obtém informações de todos os desafios da tabela `desafio`.

#### Uso:

    const get_todos_desafios = require('[DIR]/functions/get_todos_desafios');
    
    get_todos_desafios()
      .then(result => {
        console.log(result); // Informações de todos os desafios obtidas com sucesso.
      });

### Função `get_user_info(matricula)`

Esta função obtém informações de um usuário específico da tabela `usuario` com base na matrícula fornecida.

#### Parâmetros:

*   `matricula`: A matrícula do usuário para obter informações.

#### Uso:

    const get_user_info = require('[DIR]/functions/get_user_info');
    
    get_user_info('12345')
      .then(result => {
        console.log(result); // Informações do usuário obtidas com sucesso.
      });
    
    

### Função `login(matricula, senha)`

Esta função verifica as credenciais de login de um usuário com base na matrícula e senha fornecidas.

#### Parâmetros:

*   `matricula`: A matrícula do usuário.
*   `senha`: A senha fornecida pelo usuário.

#### Uso:

    const login = require('[DIR]/functions/login');
    
    login('12345', 'senha123')
      .then(result => {
        console.log(result); // Verificação de login realizada com sucesso.
      });

### Função `permissao_desafio(numero, matricula)`

Esta função verifica se um usuário tem permissão para acessar um desafio específico.

#### Parâmetros:

*   `numero`: O número do desafio para verificar a permissão.
*   `matricula`: A matrícula do usuário para verificar sua conclusão de desafios.

#### Uso:

    const permissao_desafio = require('[DIR]/functions/permissao_desafio');
    
    permissao_desafio(3, '12345')
      .then(result => {
        console.log(result); // Verificação de permissão de desafio realizada com sucesso.
      });

### Função `pontuar(numero, resposta, matricula)`

Esta função atribui pontuações a um usuário com base na resposta fornecida para um desafio específico.

#### Parâmetros:

*   `numero`: O número do desafio para pontuar.
*   `resposta`: A resposta fornecida pelo usuário.
*   `matricula`: A matrícula do usuário.

#### Uso:

    const pontuar = require('[DIR]/functions/pontuar');
    
    pontuar(3, 'Resposta Correta', '12345')
      .then(result => {
        console.log(result); // Processo de pontuação realizado com sucesso.
      });
    
    

### Função `registro_de_usuario(matricula, nome, senha, email)`

Esta função realiza o registro de um novo usuário na tabela `usuario`.

#### Parâmetros:

*   `matricula`: A matrícula do novo usuário.
*   `nome`: O nome do novo usuário.
*   `senha`: A senha do novo usuário.
*   `email`: O email do novo usuário.    

### Uso:

    const registro_de_usuario = require('[DIR]/functions/registro_de_usuario');
    
    registro_de_usuario('54321', 'Novo Usuário', 'senha123', 'usuario@example.com')
      .then(result => {
        console.log(result); // Registro de usuário realizado com sucesso.
      });
    
    

Lembre-se de que cada função retorna uma Promessa, portanto, você pode usar `.then()` para manipular o resultado das operações. Certifique-se de que as classes de manipulação de tabelas estejam corretamente importadas e inicializadas antes de usar essas funções.