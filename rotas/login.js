
const express = require('express');
const router = express.Router();
const login = require("../database/functions/login")
router.post('/login',(req,res) => {
    account = req.body
    login(account.matricula,account.senha).then(result => res.send(result))
  })

module.exports = router