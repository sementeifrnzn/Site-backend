Documentação das Classes de Manipulação de Tabelas de Banco de Dados
--------------------------------------------------------------------

Esta documentação fornece uma visão geral de três classes (`desafio`, `feito` e `user`) encontradas nos arquivos JavaScript fornecidos (`desafio.js`, `feito.js` e `user.js`). Essas classes são usadas para interagir com um banco de dados SQLite, realizando operações CRUD (Create, Read, Update, Delete) em três tabelas diferentes: `desafio`, `feito` e `usuario`.

### Classe `desafio`

Esta classe é responsável por lidar com operações relacionadas à tabela `desafio`.

#### Métodos:

1.  `Delete(args)`: Exclui entradas da tabela `desafio` com base nos argumentos fornecidos.
    
2.  `Edit(keys, args)`: Atualiza entradas na tabela `desafio` com base nas chaves e argumentos fornecidos.
    
3.  `Add(numero, tipo, pontuacao, palavra_chave, descricao, image_url)`: Adiciona uma nova entrada à tabela `desafio`.
    
4.  `Search(keys, args)`: Recupera entradas da tabela `desafio` com base nas chaves e argumentos fornecidos.
    

### Classe `feito`

Esta classe é responsável por lidar com operações relacionadas à tabela `feito`.

#### Métodos:

1.  `Delete(args)`: Exclui entradas da tabela `feito` com base nos argumentos fornecidos.
    
2.  `Edit(keys, args)`: Atualiza entradas na tabela `feito` com base nas chaves e argumentos fornecidos.
    
3.  `Add(desafio_id, usuario_matricula)`: Adiciona uma nova entrada à tabela `feito`.
    
4.  `Search(keys, args)`: Recupera entradas da tabela `feito` com base nas chaves e argumentos fornecidos.
    

### Classe `user`

Esta classe é responsável por lidar com operações relacionadas à tabela `usuario`.

#### Métodos:

1.  `Delete(args)`: Exclui entradas da tabela `usuario` com base nos argumentos fornecidos.
    
2.  `Edit(keys, args)`: Atualiza entradas na tabela `usuario` com base nas chaves e argumentos fornecidos.
    
3.  `Add(matricula, nome, senha, email)`: Adiciona uma nova entrada à tabela `usuario`.
    
4.  `Search(keys, args)`: Recupera entradas da tabela `usuario` com base nas chaves e argumentos fornecidos.
    

### Uso:

Essas classes são usadas para interagir com um banco de dados SQLite. Elas fornecem métodos para realizar operações em suas respectivas tabelas. Cada método retorna uma Promessa que é resolvida para "OK" (operação bem-sucedida) ou "ERROR" (erro ocorrido durante a operação).

Para usar essas classes, você deve importar a instância da classe correspondente de cada arquivo:

    const Desafio = require('[DIR]/tables/desafio'); 
      const Feito = require('[DIR]/tables/feito'); 
      const User = require('[DIR]/tables/user');

Em seguida, você pode usar os métodos fornecidos por essas instâncias para realizar operações nas tabelas de banco de dados correspondentes.

### Classe `desafio`

#### Método `Delete(args)`

Este método permite excluir entradas da tabela `desafio` com base nos argumentos fornecidos. Os argumentos devem ser uma condição SQL válida que define quais entradas devem ser excluídas.

Exemplo de uso:

    const Desafio = require('./desafio');
    
      Desafio.Delete("WHERE numero = 1")
        .then(result => {
          if (result === "OK") {
            console.log("Entradas excluídas com sucesso.");
          } else {
            console.log("Ocorreu um erro durante a exclusão.");
          }
        });
      

#### Método `Edit(keys, args)`

Este método permite atualizar entradas na tabela `desafio` com base nas chaves e argumentos fornecidos. As chaves definem quais colunas serão atualizadas e os argumentos são a condição SQL para determinar quais entradas serão afetadas.

Exemplo de uso:

    const Desafio = require('./desafio');
    
      Desafio.Edit("pontuacao = 150", "WHERE tipo = 'Matemática'")
        .then(result => {
          if (result === "OK") {
            console.log("Entradas atualizadas com sucesso.");
          } else {
            console.log("Ocorreu um erro durante a atualização.");
          }
        });
      

#### Método `Add(numero, tipo, pontuacao, palavra_chave, descricao, image_url)`

Este método adiciona uma nova entrada à tabela `desafio` com os valores fornecidos como argumentos.

Exemplo de uso:

    const Desafio = require('./desafio');
    
      Desafio.Add(2, 'Lógica', 200, 'Quebra-Cabeça', 'Resolva o enigma', 'https://example.com/image.jpg')
        .then(result => {
          if (result === "OK") {
            console.log("Nova entrada adicionada com sucesso.");
          } else {
            console.log("Ocorreu um erro durante a adição.");
          }
        });

#### Método `Search(keys, args)`

Este método recupera entradas da tabela `desafio` com base nas chaves e argumentos fornecidos.

Exemplo de uso:

    const Desafio = require('./desafio');
    
      Desafio.Search("*", "WHERE pontuacao > 100")
        .then(desafios => {
          if (Array.isArray(desafios)) {
            console.log("Desafios encontrados:", desafios);
          } else {
            console.log("Ocorreu um erro durante a busca.");
          }
        });

### Classe `feito`

Os métodos da classe `feito` são semelhantes aos da classe `desafio`, mas aplicados à tabela `feito`.

### Classe `user`

Os métodos da classe `user` são semelhantes aos da classe `desafio`, mas aplicados à tabela `usuario`.

### Tratamento de Erros:

Se ocorrer um erro durante a execução de qualquer método, uma mensagem de erro será registrada no console e a Promessa será resolvida para "ERROR". Operações bem-sucedidas registrarão uma mensagem de sucesso no console e serão resolvidas para "OK".

### Observação:

É importante garantir que o arquivo de banco de dados SQLite necessário esteja disponível no caminho especificado (`'./database/database.db'`) antes de usar essas classes. Além disso, certifique-se de lidar adequadamente com as conexões e migrações do banco de dados, de acordo com os requisitos de sua aplicação.

Lembre-se de que a concatenação direta de valores em consultas SQL pode levar a vulnerabilidades de injeção de SQL. É recomendável usar consultas parametrizadas ou uma biblioteca de Mapeamento Objeto-Relacional (ORM) para interações mais seguras com o banco de dados.