const express = require('express');
const router = express.Router();
const pontuar = require('../database/functions/pontuar')
router.post('/pontuar',(req,res) =>{
  var info = req.body
  pontuar(info.numero,info.resposta,info.matricula).then(result =>{
    res.send(result)
  })
})

module.exports = router
