const express = require('express')
const app = express()

const services = require("./services/services.js")

app.get("/", (req, res) => {
	services.nv.listNv()
  .then((data) => console.log(data))

	services.df.listDf()
  .then((data) => console.log(data))
	
	services.jg.listJg()
  .then((data) => console.log(data))
}) 

app.listen(8080, () => console.log("Servidor rodando em http://localhost:8080"))