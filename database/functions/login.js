const User = require('../tables/user')

function login(matricula,senha){
    return new Promise((resolve) => {
        User.Search("senha",`where matricula = ${matricula}`).then((result) =>{
            if(result != "ERROR"){
                if(senha == result[0].senha){
                    resolve("OK")
                }else{
                    resolve("WRONG")
                }
            }else{
                resolve("ERROR")
            }
            
        })
    })
}

module.exports = login
