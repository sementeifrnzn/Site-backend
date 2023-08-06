const express = require('express');
const router = express.Router();
const registro = require('../database/functions/registro_de_usuario')
const URL = require('./front-end-url')

router.post('/registro',(req, res) => {
    account = req.body
    registro(account.nome,account.matricula,account.senha,account.email).then(result =>{
      res.send(result)
    })
    
  })                                

module.exports = router
