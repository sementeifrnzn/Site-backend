const mysql = require('mysql');

const connection = mysql.createConnection({
	host: "sql10.freesqldatabase.com",
	user: "sql10619583",
	password: "WYdv7R6vLj",
	database: "sql10619583"
})

connection.connect((err) => {
	if (err) throw err
	console.log("Conectado ao banco de dados")
})

module.exports = connection