const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://181.215.134.223');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const {user,desafio} = require('./database/utils')
const port = 2607
const url = "http://181.215.134.223/"


app.post('/registro',(req, res) => {
  account = req.body
  user.register(account.nome,account.matricula,account.senha,account.email).then(result =>{
    res.redirect(`${url}login`)
  })
  
})
app.post('/login',(req,res) => {
  account = req.body
  user.login(account.matricula,account.senha).then(result =>  res.send(result))
})
app.get('/get/:matricula',(req,res) =>{
  var matricula = req.params.matricula
  user.Search.matricula(matricula).then(result =>{
    if(result == "COOKIES"){
      res.redirect(`${url}clean`)
    }else{
      result[0].senha = "****"

      return res.send(result)

    }
  })
})
app.get('/get_desafio/:numero',(req,res) =>{
  var numero = req.params.numero
  try{
    if(numero === "0"){
      desafio.getAll().then(desafios =>{
        return res.send(desafios)
      })
    }else{
      desafio.getByNumero(numero).then(desafios =>{
        return res.send(desafios)
      })
    } 
  }catch{
    return res.send({message:"error"})
  }
  
})
app.get('/get_disp/:matricula',(req,res) =>{
  try{
    var matricula = req.params.matricula
    desafio.getDisp(matricula).then(result =>{
      
    console.log('DONE')
      return res.send(result)
    })
  }catch(error){
    console.log('ERROR: ' + error)
    return res.send({})
  }
})
app.get('/get_ranking',(req,res) =>{
  try{
    user.Search.ranking().then(result => {
      return res.send(result)
    })
  }catch(error){
    console.log("Error on get ranking: " + error.message)
    return res.send({})
  }
})
app.get('/registrar_ponto/:matricula/:pontos/:numero',(req,res) =>{
  var matricula = req.params.matricula
  var pontos = req.params.pontos
  var numero = req.params.numero
  try{
    user.getFeito(matricula,numero).then(feitos =>
      { 
        
        console.log(feitos)
      if( feitos === "NONE"){
      user.completados_add(matricula,1).then(result =>{
        user.pontos_add(matricula,pontos).then(r => {
          user.feito(matricula,numero).then( ()=>{
            res.send("OK")
          })
        })
      })
    }else{
      console.log("FEITO")
      res.send("FEITO")
    }})

  }catch(error){
    console.log('ERROR: ' + error)
    return res.send('ERROR')
  }
})
app.post('/cadastrar_desafio',(req,res)=>{
  des = req.body
  try {
    desafio.add(des.numero,des.nome,des.pontuacao,des.palavra_chave,des.image_url,des.descricao).then(result =>{
      res.send(`${result}\n cadastrar novamente em <a href='${url}u1JVqTWHNqjqv10oAwVdXqFDDwJZLxsyu1JVqTWHNqjqv10oAwVdXqFDDwJZLxsy'>${url}cadastro_desafio<a>`)
    })
  } catch (error) {
    res.send(`Erro ao cadastrar, verifique se já foi realizado um cadastro com um desafio com esse N°\n cadastrar novamente em <a href='${url}u1JVqTWHNqjqv10oAwVdXqFDDwJZLxsyu1JVqTWHNqjqv10oAwVdXqFDDwJZLxsy'>${url}cadastro_desafio<a>`)
    
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})