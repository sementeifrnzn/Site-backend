const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/database.db');

class desafio{
    Delete(args){
        return new Promise((resolve) => {
            try {
              db.run(
                `DELETE FROM desafio ${args}`,[],
                function (error) {
                    if (error) {
                        console.log(`ERROR (0/1) | desafio.js Delete(method) \nError information: ${error.message} `);
                        resolve("ERROR")
                    } else {
                        console.log("PASS (1/1) | desafio.js Delete(method)");
                        resolve("OK");
                    }
                }
              );
            } catch (err) {
              console.log(`ERROR (0/1) | desafio.js Delete(method) \nError information: ${err.message} `);
              resolve("ERROR");
            }
          });
    }
    Edit(keys,args){
        return new Promise((resolve) => {
            try {
              db.run(
                `UPDATE desafio set ${keys} where ${args}`,[],
                function (error) {
                    if (error) {
                        console.log(`ERROR (0/1) | desafio.js Edit(method) \nError information: ${error.message} `);
                        resolve("ERROR")
                    } else {
                        console.log("PASS (1/1) | desafio.js Edit(method)");
                        resolve("OK");
                    }
                }
              );
            } catch (err) {
              console.log(`ERROR (0/1) | desafio.js Edit(method) \nError information: ${err.message} `);
              resolve("ERROR");
            }
          });
    }
    Add(numero,tipo,pontuacao,palavra_chave,descricao,image_url){
        return new Promise((resolve) => {
            try {
              db.run(
                "INSERT INTO desafio (numero,tipo,pontuacao,palavra_chave,image_url,descricao) values (?,?,?,?,?,?)",
                [numero,tipo,pontuacao,palavra_chave,image_url,descricao],
                function (error) {
                    if (error) {
                        console.log(`ERROR (0/1) | desafio.js Add(method) \nError information: ${error.message} `);
                        resolve("ERROR")
                    } else {
                        console.log("PASS (1/1) | desafio.js Add(method)");
                        resolve("OK");
                    }
                }
              );
            } catch (err) {
              console.log(`ERROR (0/1) | desafio.js Add(method) \nError information: ${err.message} `);
              resolve("ERROR");
            }
          });
    }
    Search(keys,args){
        return new Promise((resolve) => {
            try {
                db.all(`SELECT ${keys} FROM desafio ${args};`, [], function (error, desafios) {
                if (error) {
                    console.log(`ERROR (0/1) | desafio.js Search(method) \nError information: ${error.message} `);
                } else {
                    console.log("PASS (1/1) | desafio.js Search(method)");
                    resolve(desafios);
                }
                });
            } catch (err) {
                console.log(`ERROR (0/1) | desafio.js Search(method) \nError information: ${err.message} `);
                resolve("ERROR");
              }
        })
    }
}


const Desafio = new desafio()
module.exports = Desafio