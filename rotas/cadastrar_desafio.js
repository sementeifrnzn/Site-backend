const express = require('express');
const router = express.Router();
const cadastro_de_desafio = require('../database/functions/cadastro_de_desafio')

router.post('/cadastrar_desafio',(req,res)=>{
    des = req.body
    cadastro_de_desafio(des.numero,des.tipo,des.pontuacao,des.palavra_chave,des.image_url,des.descricao).then(result =>{
      res.send(result)
    })
})

module.exports = router
