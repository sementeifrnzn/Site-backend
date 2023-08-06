const User = require('../tables/user')

function get_ranking(){
    return new Promise((resolve, reject) => {
        User.Search("matricula,nome,pontuacao,completados",`where pontuacao != 0 order by pontuacao DESC;`).then(result =>{
            if(result != "ERROR" && result.length > 0){
                resolve(result)
            }else{
                resolve('ERROR')
            }
        })
    })
}

module.exports  = get_ranking