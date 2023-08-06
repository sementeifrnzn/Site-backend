const Desafio = require('../tables/desafio')
const User = require('../tables/user')
const Feito = require('../tables/feito')

function pontuar(numero,resposta,matricula){
    return new Promise((resolve, reject) => {
        Desafio.Search("palavra_chave,pontuacao",`where numero = ${numero}`).then(result0 =>{
            if(result0 == "ERROR" || result0[0] == undefined){
                resolve("ERROR")
                return "ERROR"
            }
            var palavra_chave = result0[0].palavra_chave
            var desafio_pontuacao = result0[0].pontuacao
            if(palavra_chave == resposta){
                Feito.Search("*",`where usuario_matricula = ${matricula} and desafio_id = ${numero}`).then(result1 =>{
                    if(result1 == "ERROR"){
                        resolve("ERROR")
                        return "ERROR"
                    }
                    var feito = result1[0]
                    if(feito == undefined){
                        User.Search("pontuacao,completados",`where matricula = ${matricula}`).then(result2 =>{

                            if(result2 == "ERROR" || result2[0] == undefined){
                                resolve("ERROR")
                                return "ERROR"
                            }
                            var pontuacao = result2[0].pontuacao
                            var completados = result2[0].completados
                            if(completados + 1 >= numero){
                                var newpontuacao = pontuacao += desafio_pontuacao
                                var newcompletados = completados += 1
                                User.Edit(`pontuacao = ${newpontuacao}, completados = ${newcompletados}`,`where matricula = ${matricula}`).then(result3 =>{
                                    if(result3 == "ERROR"){
                                        resolve("ERROR")
                                        return "ERROR"
                                    }
                                    Feito.Add(numero,matricula).then(result4 =>{
                                        if(result4 == "ERROR"){
                                            resolve("ERROR")
                                        }else{
                                            resolve("POINT")
                                        }
                                    })
                                })}else{
                                    resolve("ERROR")
                                    return "ERROR"
                                }
                        })
                    }else{
                        resolve("CORRECT")
                    }  
                })
            }else{
                resolve("WRONG")
            }
        })
    })
}


module.exports = pontuar