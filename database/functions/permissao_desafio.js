const Desafio = require('../tables/desafio')
const User = require('../tables/user')
const Feito = require('../tables/feito')

function permissao_desafio(numero,matricula){
    return new Promise((resolve, reject) => {
        User.Search("completados",`where matricula = ${matricula}`).then(result =>{
            if(result == "ERROR" || result[0] == undefined){
                resolve("ERROR")
                return "ERROR"
            }else{
                if(result.completados + 1 >= numero){
                    resolve("OK")
                }else{
                    resolve("ERROR")
                }
            }
        })
    })
}


module.exports = permissao_desafio