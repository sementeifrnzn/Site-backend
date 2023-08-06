const express = require('express');
const router = express.Router();
const get_user_info = require("../database/functions/get_user_info")

router.get('/get_user_info/:matricula',(req,res) =>{
    var matricula = req.params.matricula
    get_user_info(matricula).then(result =>{
      res.send(result)
    })
})

module.exports = router
