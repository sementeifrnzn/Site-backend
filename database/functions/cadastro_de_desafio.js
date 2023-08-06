const Desafio = require('../tables/desafio')

function cadastro_de_desafio(numero,tipo,pontuacao,palavra_chave,image_url,descricao){
    return new Promise((resolve, reject) => {
        Desafio.Add(numero,tipo,pontuacao,palavra_chave,descricao,image_url).then(result =>{
            resolve(result)
        })
    })
}

module.exports = cadastro_de_desafio