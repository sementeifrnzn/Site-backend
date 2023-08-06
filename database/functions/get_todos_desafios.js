const Desafio = require('../tables/desafio')

function get_todos_desafios(){
    return new Promise((resolve, reject) => {
        Desafio.Search("*",``).then(result =>{
            resolve(result)
        })
    })
}

module.exports = get_todos_desafios