const User = require('../tables/user')

function get_user_info(matricula){
    return new Promise((resolve, reject) => {
        User.Search("matricula,nome,pontuacao,completados",`where matricula = ${matricula}`).then(result =>{
            if(result != "ERROR" && result.length > 0){
                resolve(result[0])
            }else{
                resolve('ERROR')
            }
        })
    })
}

module.exports  = get_user_info