const express = require('express');
const router = express.Router();
const get_ranking = require("../database/functions/get_ranking")
router.get('/get_ranking',(req,res) =>{
    get_ranking().then(result =>{
      res.send(result)
    })
  })

  module.exports = router
