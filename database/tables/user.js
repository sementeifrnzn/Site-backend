const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/database.db');

class user{
    Delete(args){
        return new Promise((resolve) => {
            try {
              db.run(
                `DELETE FROM usuario ${args}`,[],
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
                `UPDATE usuario set ${keys} ${args}`,[],
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
    Add(matricula,nome,senha,email){
        return new Promise((resolve) => {
            try {
              db.run(
                "INSERT INTO usuario (matricula,nome,senha,pontuacao,email,completados) values (?,?,?,0,?,0)",
                [matricula,nome,senha,email],
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
                db.all(`SELECT ${keys} FROM usuario ${args};`, [], function (error, users) {
                if (error) {
                    console.log(`ERROR (0/1) | user.js Search(method) \nError information: ${error.message} `);
                    resolve("ERROR")
                } else {
                    console.log("PASS (1/1) | user.js Search(method)");
                    resolve(users);
                }
                });
            } catch (err) {
                console.log(`ERROR (0/1) | user.js Search(method) \nError information: ${err.message} `);
                resolve("ERROR");
              }
        })
    }
}


const User = new user;
module.exports = User;