const connection = require("./db.js")

class crudDesafios {

	list() {
		return new Promise((resolve, reject) => {
			let sql = "select * from desafio;"

			connection.query(sql, (error, result) => {
				if (error) reject(error)
				resolve(result)
			})
		})
	}

	search(values) {
		return new Promise((resolve, reject) => {
			let sql = "select * from desafio where id = ?;"

			connection.query(sql, values, (error, result) => {
				if (error) reject(error)
				resolve(result)
			})
		})
	}

	add(values) {
		let sql = "insert into desafio (id, nome, nivel_id, pontuacao_minima) values (?, ?, ?, ?);"

		connection.query(sql, values, (error, result) => {
			if (error) throw error
			return result
		})
	}

	dell(values) {
		let sql = "delete from desafio where id = ?;"

		connection.query(sql, values, (error, result) => {
			if (error) throw error
			return result
		})
	}

	update(values) {
		let sql = "update desafio set nome = ?, pontuacao_minima = ? where id = ?;"

		connection.query(sql, values, (error, result) => {
			if (error) throw error
			return result
		})
	}
}

module.exports = new crudDesafios()