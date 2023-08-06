const express = require('express')
const bodyParser = require('body-parser');
const app = express()

//CONFIGURAÇÃO DO SERVIDOR
app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
const port = 2607

//IMPORT DAS ROTAS
const cadastrar_desafio = require("./rotas/cadastrar_desafio")
const get_desafio = require("./rotas/get_desafio")
const get_user_info = require("./rotas/get_user_info")
const get_ranking = require("./rotas/get_ranking")
const login = require("./rotas/login")
const pontuar = require("./rotas/pontuar")
const registro_de_usuario = require("./rotas/registro_de_usuario")

//CHAMADA DAS ROTAS
app.use(cadastrar_desafio)
app.use(get_desafio)
app.use(get_user_info)
app.use(get_ranking)
app.use(login)
app.use(pontuar)
app.use(registro_de_usuario)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})