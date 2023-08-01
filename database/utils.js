const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/database.db');


class UserSearch {
  ranking() {
    return new Promise((resolve, reject) => {
      try {
        db.all('SELECT nome,pontuacao FROM usuario where pontuacao != 0 and matricula != "20211041110004" order by pontuacao DESC;', [], function (error, users) {
          if (error) {
            console.log(`class: user - search.ranking | ERROR (1/1)\nError information: ${error.message}`);
            reject("ERROR");
          } else {
            console.log("class: user - search.ranking | PASS (1/1)");
            resolve(users);
          }
        });
      } catch {
        console.log("user.search.ranking error - check this function");
        reject("ERROR");
      }
    });
  }
  name(name) {
    return new Promise((resolve, reject) => {
      try {
        db.all('SELECT * FROM usuario WHERE nome = ?', [name], function (error, users) {
          if (error) {
            console.log(`class: user - search.name | ERROR (1/1)\nError information: ${error.message}`);
            reject("ERROR");
          } else {
            console.log("class: user - search.name | PASS (1/1)");
            resolve(users);
          }
        });
      } catch {
        console.log("user.search.name error - check this function");
        reject("ERROR");
      }
    });
  }

  email(email) {
    return new Promise((resolve, reject) => {
      try {
        db.all('SELECT * FROM usuario WHERE email = ?', [email], function (error, users) {
          if (error) {
            console.log(`class: user - search.email | ERROR (1/1)\nError information: ${error.message}`);
            reject("ERROR");
          } else {
            console.log("class: user - search.email | PASS (1/1)");
            resolve(users);
          }
        });
      } catch {
        console.log("user.search.email error - check this function");
        reject("ERROR");
      }
    });
  }

  matricula(matricula) {
    return new Promise((resolve, reject) => {
      try {
        db.all('SELECT * FROM usuario WHERE matricula = ?', [matricula], function (error, users) {
          if (error) {
            console.log(`class: user - search.matricula | ERROR (1/1)\nError information: ${error.message}`);
            reject("ERROR");
          } else {
            console.log("class: user - search.matricula | PASS (1/1)");
            if(users.length > 0 && users != undefined){
              resolve(users);
            }else{
              resolve("COOKIES")
            }
          }
        });
      } catch {
        console.log("user.search.matricula error - check this function");
        reject("ERROR");
      }
    });
  }
}

let user_search = new UserSearch();

class User {
  Search;
  constructor(user_search) {
    console.log("DB[USER] connected to APP");
    this.Search = user_search;
  }
  getFeito(matricula,numero){
    return new Promise((resolve, reject) => {
      try {
        db.all('SELECT * FROM feito WHERE usuario_matricula = ? AND desafio_id = ? ', [matricula,numero], function (error, feitos) {
          if (error) {
            console.log(`class: user - search.name | ERROR (1/1)\nError information: ${error.message}`);
            reject("ERROR");
          } else {
            console.log("class: user - search.name | PASS (1/1)");
            console.log(feitos)
            if(feitos.length > 0){

              resolve(feitos);

            }else{
              resolve("NONE")
            }
          }
        });
      } catch {
        console.log("user.search.name error - check this function");
        reject("ERROR");
      }
    });

  }
  feito(matricula,numero){
    return new Promise((resolve, reject) => {
      try {
        db.run(
          "INSERT INTO feito (desafio_id,usuario_matricula) values (?,?)",
          [numero, matricula],
          function (error) {
            if (error) {
              console.log(`class: user - feito | ERROR (1/1)\nError information: ${error.message}`);
              resolve("ERROR");
            } else {
              console.log("class: user - feito | PASS (1/1)");
              resolve("OK");
            }
          }
        );
      } catch {
        resolve("ERROR");
        console.log("user.feito error - check this function");
      }
    })
  }
  completados_get(matricula){
    return new Promise((resolve, reject) => {
      try {
        this.Search.matricula(matricula).then((user) => {
          console.log("class: user - completados_get | PASS (1/1)");
            if(user[0] != undefined){
              resolve(user[0].completados)
            }else{
              resolve('ERROR')
            }        
        });
      } catch {
        console.log("class: user - completados_get | ERROR (1/1)");
        resolve('ERROR');
      }
    });
  }
  completados_add(matricula,value){
    return new Promise((resolve, reject) => {
      try {
        this.completados_get(matricula).then(nivel =>{
          if((nivel + value) <= 26){
            db.run(
              "UPDATE usuario set completados = ? where matricula = ?",
              [Number(nivel) + Number(value), matricula],
              function (error) {
                if (error) {
                  console.log(`class: user - completados_add | ERROR (2/2)\nError information: ${error.message}`);
                  resolve("ERROR");
                } else {
                  console.log("class: user - completados_add | PASS (2/2)");
                  resolve("OK");
                }
              }
            );
          }
          if(nivel > 26){
            db.run(
              "UPDATE usuario set completados = ? where matricula = ?",
              [26, matricula],
              function (error) {
                if (error) {
                  console.log(`class: user - completados_add | ERROR (2/2)\nError information: ${error.message}`);
                  resolve("ERROR");
                } else {
                  console.log("class: user - completados_add | PASS (2/2)");
                  resolve("OK");
                }
              }
            );
          }
        })
      } catch {
        resolve("ERROR");
        console.log("user.completados_add error - check this function");
        console.log(`class: user - completados_add | ERROR (1/2)\nError information: ${error.message}`);
      }
    });
  }
  pontos_add(matricula,value){
    return new Promise((resolve, reject) => {
      try {
        this.Search.matricula(matricula).then(user =>{
            if(user != undefined && user.length > 0){
              
              db.run(
                "UPDATE usuario set pontuacao = ? where matricula = ?",
                [Number(user[0].pontuacao) + Number(value), matricula],
                function (error) {
                  if (error) {
                    console.log(`class: user -  pontos_add | ERROR (2/2)\nError information: ${error.message}`);
                    resolve("ERROR");
                  } else {
                    console.log("class: user -  pontos_add | PASS (2/2)");
                    resolve("OK");
                  }
                }
              );
            }
            
        })
      } catch {
        resolve("ERROR");
        console.log("user. pontos_add error - check this function");
        console.log(`class: user -  pontos_add | ERROR (1/2)\nError information: ${error.message}`);
      }
    });
  }
  register(nome, matricula, senha, email) {
    return new Promise((resolve, reject) => {
      try {
        db.run(
          "INSERT INTO usuario (nome,matricula,senha,email) values (?,?,?,?)",
          [nome, matricula, senha, email],
          function (error) {
            if (error) {
              console.log(`class: user - register | ERROR (1/1)\nError information: ${error.message}`);
              resolve("ERROR");
            } else {
              console.log("class: user - register | PASS (1/1)");
              resolve("OK");
            }
          }
        );
      } catch {
        resolve("ERROR");
        console.log("user.register error - check this function");
      }
    });
  }
  login(matricula, senha) {
    return new Promise((resolve, reject) => {
      try {
        this.Search.matricula(matricula).then((user) => {
          console.log("class: user - login | PASS (1/2)");
          try {
            if (user[0].senha === senha) {
              console.log("class: user - login | PASS (2/2)");
              resolve('OK');
            } else {
              console.log("class: user - login | PASS (2/2)");
              resolve('ERROR');
            }
          } catch (error) {
            console.log(`class: user - login | ERROR (2/2)\nError information: ${error.message}`);
            resolve('ERROR');
          }
        });
      } catch {
        console.log("class: user - login | ERROR (1/2)");
        reject('ERROR');
      }
    });
  }
  delete(matricula) {
    try {
      db.run('DELETE FROM usuario WHERE matricula = ?', [matricula], function (error) {
        if (error) {
          console.log(`class: user - delete | ERROR (1/1)\nError information: ${error.message}`);
          return "ERROR";
        } else {
          console.log("class: user - delete | PASS (1/1)");
          return "OK";
        }
      });
    } catch {
      console.log("user.delete error - check this function");
      return "ERROR";
    }
  }
}

class Desafio {
  user;
  constructor(user){
    this.user = user
    console.log("DB[Desafio] connected to APP")
  }
  getByNumero(numero){
    return new Promise((resolve, reject) => {
      try {
        db.all('SELECT * FROM desafio where numero = ?', [numero], function (error, desafios) {
          if (error) {
            console.log(`class: desafio - getByNumero | ERROR (1/1)\nError information: ${error.message}`);
            reject("ERROR");
          } else {
            console.log("class: desafio - getByNumero | PASS (1/1)");
            resolve(desafios);
          }
        });
      } catch {
        console.log("desafio.getByNumero error - check this function");
        resolve("ERROR");
      }
    })
  }
  add(numero, nome, pontuacao, palavra_chave, image_url, descricao) {
    return new Promise((resolve, reject) => {
      try {
        db.run(
          "INSERT INTO desafio (numero,nome,pontuacao,palavra_chave,image_url,descricao) values (?,?,?,?,?,?)",
          [numero, nome, pontuacao, palavra_chave, image_url, descricao],
          function (error) {
            if (error) {
              console.log(`class: desafio - add | ERROR (1/1)\nError information: ${error.message}`);
              resolve("ERROR");
            } else {
              console.log("class: user - add | PASS (1/1)");
              resolve("OK");
            }
          }
        );
      } catch {
        resolve("ERROR");
        console.log("desafio.add error - check this function");
      }
    });
  }
  delete_all() {
    return new Promise((resolve, reject) => {
      try {
        db.run("DELETE FROM desafio", [], function (error) {
          if (error) {
            console.log(`class: desafio - delete_all | ERROR (1/1)\nError information: ${error.message}`);
            resolve("ERROR");
          } else {
            console.log("class: user - delete_all | PASS (1/1)");
            resolve("OK");
          }
        });
      } catch {
        resolve("ERROR");
        console.log("desafio.delete_all error - check this function");
      }
    });
  }
  deleteID(id) {
    return new Promise((resolve, reject) => {
      try {
        db.run("DELETE FROM desafio where id = ?", [id], function (error) {
          if (error) {
            console.log(`class: desafio - delete_all | ERROR (1/1)\nError information: ${error.message}`);
            resolve("ERROR");
          } else {
            console.log("class: user - delete_all | PASS (1/1)");
            resolve("OK");
          }
        });
      } catch {
        resolve("ERROR");
        console.log("desafio.delete_all error - check this function");
      }
    });
  }
  deleteNUM(num) {
    return new Promise((resolve, reject) => {
      try {
        db.run("DELETE FROM desafio where numero = ?", [num], function (error) {
          if (error) {
            console.log(`class: desafio - delete_all | ERROR (1/1)\nError information: ${error.message}`);
            resolve("ERROR");
          } else {
            console.log("class: user - delete_all | PASS (1/1)");
            resolve("OK");
          }
        });
      } catch {
        resolve("ERROR");
        console.log("desafio.delete_all error - check this function");
      }
    });
  }
  getAll(){
    return new Promise((resolve, reject) => {
      try {
        db.all('SELECT * FROM desafio ORDER BY numero ASC', [], function (error, desafios) {
          if (error) {
            console.log(`class: desafio - getAll | ERROR (1/1)\nError information: ${error.message}`);
            reject("ERROR");
          } else {
            console.log("class: desafio - getAll | PASS (1/1)");
            resolve(desafios);
          }
        });
      } catch {
        console.log("desafio.getAll error - check this function");
        resolve("ERROR");
      }
    });
  }
  getDisp(matricula){
    return new Promise((resolve, reject) => {
      this.getAll().then(result =>{
        this.user.Search.matricula(matricula).then(user_info =>{
            if(user_info.length > 0 && user_info != undefined){
              var list = []
              for(var i = 0; i < 26; i += 1){
                if(result[i] != undefined){
                  if((user_info[0].completados) >= i){
                    ///desafio/${result[i].numero}
                  list.push({"disponivel":"nao","url":``})
                  }else{
                    list.push({"disponivel":"nao","url":``})

                  }
                }else{
                  list.push({"disponivel":"nao","url":``})
                }
              }
              resolve(list)
            }
            
        })
        
      })
    })
  }
}

user = new User(user_search);
desafio = new Desafio(user);
module.exports = { user, desafio };