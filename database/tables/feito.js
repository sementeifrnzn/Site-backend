const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/database.db');

class feito{
    Delete(args){
        return new Promise((resolve) => {
            try {
              db.run(
                `DELETE FROM feito where ${args}`,[],
                function (error) {
                    if (error) {
                        console.log(`ERROR (0/1) | user.js Delete(method) \nError information: ${error.message} `);
                        resolve("ERROR")
                    } else {
                        console.log("PASS (1/1) | user.js Delete(method)");
                        resolve("OK");
                    }
                }
              );
            } catch (err) {
              console.log(`ERROR (0/1) | user.js Delete(method) \nError information: ${err.message} `);
              resolve("ERROR");
            }
          });
    }
    Edit(keys,args){
        return new Promise((resolve) => {
            try {
              db.run(
                `UPDATE feito set ${keys} where ${args}`,[],
                function (error) {
                    if (error) {
                        console.log(`ERROR (0/1) | user.js Edit(method) \nError information: ${error.message} `);
                        resolve("ERROR")
                    } else {
                        console.log("PASS (1/1) | user.js Edit(method)");
                        resolve("OK");
                    }
                }
              );
            } catch (err) {
              console.log(`ERROR (0/1) | user.js Edit(method) \nError information: ${err.message} `);
              resolve("ERROR");
            }
          });
    }
    Add(desafio_id,usuario_matricula){
        return new Promise((resolve) => {
            try {
              db.run(
                "INSERT INTO feito (desafio_id,usuario_matricula) values (?,?)",
                [desafio_id,usuario_matricula],
                function (error) {
                    if (error) {
                        console.log(`ERROR (0/1) | user.js Add(method) \nError information: ${error.message} `);
                        resolve("ERROR")
                    } else {
                        console.log("PASS (1/1) | user.js Add(method)");
                        resolve("OK");
                    }
                }
              );
            } catch (err) {
              console.log(`ERROR (0/1) | user.js Add(method) \nError information: ${err.message} `);
              resolve("ERROR");
            }
          });
    }
    Search(keys,args){
        return new Promise((resolve) => {
            try {
                db.all(`SELECT ${keys} FROM feito ${args};`, [], function (error, feitos) {
                if (error) {
                    console.log(`ERROR (0/1) | user.js Search(method) \nError information: ${error.message} `);
                } else {
                    console.log("PASS (1/1) | user.js Search(method)");
                    resolve(feitos);
                }
                });
            } catch (err) {
                console.log(`ERROR (0/1) | user.js Search(method) \nError information: ${err.message} `);
                resolve("ERROR");
              }
        })
    }
}
let Feito = new feito;
module.exports = Feito;