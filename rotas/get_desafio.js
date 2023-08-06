
const express = require('express');
const router = express.Router();
const get_desafio_info = require('../database/functions/get_desafio_info')
const permissao_desafio = require('../database/functions/permissao_desafio')
router.post('/get_desafio',(req,res) =>{
    desafio = req.body.desafio
    matricula = req.body.matricula
    permissao_desafio(desafio,matricula).then(result0 =>{
      if(result0 == "OK"){
        get_desafio_info(desafio).then(result1 =>{
          res.send(result1[0])
        })
      }else{
        res.send("ERROR")
      }
    })
    
  })

  
  module.exports = router
