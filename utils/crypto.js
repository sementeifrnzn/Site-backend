const crypto = require('crypto')

const algorithm = 'aes-256-ctr'
const secretKey = "MYSCRETKEYHERE"


function enc(content){
    const iv = crypto.randomBytes(16)
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv)
    const encrypted = Buffer.concat([cipher.update(content), cipher.final()])
  
    return JSON.stringify({
        a: iv.toString('hex'),
        l: encrypted.toString('hex')
      })
  
}


function dec(content){
        content = JSON.parse(content)
        const decipher = crypto.createDecipheriv(algorithm, secretKey, Buffer.from(content.a, 'hex'))
        const decrpyted = Buffer.concat([decipher.update(Buffer.from(content.l, 'hex')), decipher.final()])

        return decrpyted.toString()
}


module.exports = {enc,dec}