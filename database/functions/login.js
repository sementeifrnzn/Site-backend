const User = require('../tables/user')
const {enc,dec} = require('../../utils/crypto')
function login(matricula,senha){
    return new Promise((resolve) => {
        User.Search("senha",`where matricula = ${matricula}`).then((result) =>{
            if(result != "ERROR"){
                if(senha == dec(result[0].senha)){
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
