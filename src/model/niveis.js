const connection = require("./db.js")

class crudNiveis {
	list() {
		return new Promise((resolve, reject) => {
			let sql = "select * from nivel;"

			connection.query(sql, (error, result) => {
				if (error) reject(error)
				resolve(result)
			})
		})
	}

	search(values) {
		return new Promise((resolve, reject) => {
			let sql = "select * from nivel where id = ?;"

			connection.query(sql, values, (error, result) => {
				if (error) reject(error)
				resolve(result)
			})
		})
	}

	add(values) {
		let sql = "insert into nivel (id, pontuacao_minima) values (?, ?);"

		connection.query(sql, values, (error, result) => {
			if (error) throw error
			return result
		})
	}

	dell(values) {
		let sql = "delete from nivel where id = ?;"

		connection.query(sql, values, (error, result) => {
			if (error) throw error
			return result
		})
	}

	update(values) {
		let sql = "update nivel set pontuacao_minima = ? where id = ?;"

		connection.query(sql, values, (error, result) => {
			if (error) throw error
			return result
		})
	}
}

module.exports = new crudNiveis()