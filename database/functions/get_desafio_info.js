const Desafio = require('../tables/desafio')

function get_desafio_info(numero){
    return new Promise((resolve, reject) => {
        Desafio.Search("tipo,pontuacao,image_url,descricao,numero",`where numero = ${numero}`).then(result =>{
            resolve(result)
        })
    })
}

module.exports = get_desafio_info