const nivel = require("../model/niveis.js")
const desafio = require("../model/desafios.js")
const jogador = require("../model/jogador.js")

//niveis
class nv {
	listNv() {
		try {
			return nivel.list()
			.then((data) => {
				return data
			})
			.catch((err) =>{
				 console.log(`Erro: ${err}`)
			})
		} catch {
			return "ERROR ON LIST NIVEL"
		}
	}
	
	searchNv(values) {
		return nivel.search(values)
		.then((data) => {
			return data
		})
		.catch((err) => {
			 console.log(`Erro: ${err}`)
		})
	}
	
	addNv(values) {
		try {
			return nivel.add(values)
		} catch {
			return "ERROR ON ADD NIVEL"
		}
	}
	
	dellNv(values) {
		try {
			return nivel.dell(values)
		}
		catch {
			return "ERROR ON DEL 'NIVEL'"
		}
	}
	
	updateNv(values) {
		try {
			return nivel.update(values)
		}
		catch {
			return "ERROR ON UPDATE 'NIVEL'"
		}
	}
}

//desafios
class df {
	listDf() {
		try {
			return desafio.list()
			.then((data) => {
				return data
			})
			.catch((err) =>{
				 console.log(`Erro: ${err}`)
			})
		} catch {
			return "ERROR ON LIST NIVEL"
		}
	}
	
	searchDf(values) {
		return desafio.search(values)
		.then((data) => {
			return data
		})
		.catch((err) => {
			 console.log(`Erro: ${err}`)
		})
	}
	
	addDf(values) {
		try {
			return desafio.add(values)
		} catch {
			return "ERROR ON ADD NIVEL"
		}
	}
	
	dellDf(values) {
		try {
			return desafio.dell(values)
		}
		catch {
			return "ERROR ON DEL 'NIVEL'"
		}
	}
	
	updateDf(values) {
		try {
			return desafio.update(values)
		}
		catch {
			return "ERROR ON UPDATE 'NIVEL'"
		}
	}
}

//jogador
class jg {
	listJg() {
		try {
			return jogador.list()
			.then((data) => {
				return data
			})
			.catch((err) =>{
				 console.log(`Erro: ${err}`)
			})
		} catch {
			return "ERROR ON LIST NIVEL"
		}
	}
	
	searchJg(values) {
		return jogador.search(values)
		.then((data) => {
			return data
		})
		.catch((err) => {
			 console.log(`Erro: ${err}`)
		})
	}
	
	addJg(values) {
		try {
			return jogador.add(values)
		} catch {
			return "ERROR ON ADD NIVEL"
		}
	}
	
	dellJg(values) {
		try {
			return jogador.dell(values)
		}
		catch {
			return "ERROR ON DEL 'NIVEL'"
		}
	}
	
	updateJg(values) {
		try {
			return jogador.update(values)
		}
		catch {
			return "ERROR ON UPDATE 'NIVEL'"
		}
	}
}

module.exports = {nv: new nv(), df: new df(), jg: new jg()}