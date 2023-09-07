const User = require("../tables/user")
const {enc,dec} = require('../../utils/crypto')

function registro_de_usuario(matricula,nome,senha,email){
    return new Promise((resolve, reject) => {
        User.Add(matricula,nome,enc(senha),email).then(result =>{
            resolve(result)
        })
    })
}

module.exports = registro_de_usuario