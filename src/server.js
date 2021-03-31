const express = require('express')
const server = express()

//configurar caminhos da aplicação
//página iniciali
//req: Requisição
//res: Resposta
server.get('/', (req, res) => {
     res.send('index')
})

//ligar servidor
server.listen(3000)