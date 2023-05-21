const connection = require("./db.js")

class crudJogador {
	list() {
		return new Promise((resolve, reject) => {
			let sql = "select * from jogador;"

			connection.query(sql, (error, result) => {
				if (error) reject(error)
				resolve(result)
			})
		})
	}

	search(values) {
		return new Promise((resolve, reject) => {
			let sql = "select * from jogador where email = ?;"

			connection.query(sql, values, (error, result) => {
				if (error) reject(error)
				resolve(result)
			})
		})
	}

	add(values) {
		let sql = "insert into jogador (matricula, nome, email, pontuacao, nivel_id, senha) values (?, ?, ?, ?, ?, ?);"

		connection.query(sql, values, (error, result) => {
			if (error) throw error
			return result
		})
	}

	dell(values) {
		let sql = "delete from jogador where email = ?;"

		connection.query(sql, values, (error, result) => {
			if (error) throw error
			return result
		})
	}

	update(values) {
		let sql = "update jogador set email = ?, senha = ?, nome = ? where email = ?;"

		connection.query(sql, values, (error, result) => {
			if (error) throw error
			return result
		})
	}
}

module.exports = new crudJogador()