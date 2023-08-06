const User = require("../tables/user")

function registro_de_usuario(matricula,nome,senha,email){
    return new Promise((resolve, reject) => {
        User.Add(matricula,nome,senha,email).then(result =>{
            resolve(result)
        })
    })
}


module.exports = registro_de_usuario