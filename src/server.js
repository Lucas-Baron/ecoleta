const express = require('express')
const server = express()


//Configurar pasta pública
server.use(express.static('public'))

//Utilizando template engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

//configurar caminhos da aplicação
//página iniciali
//req: Requisição
//res: Resposta
server.get('/', (req, res) => {
     return res.render('index.html' )
})

//Criando rota da pasta create-point
server.get('/create-point', (req, res) => {
    return res.render('create-point.html' )
})

//Criando rota para searsh-results
server.get('/search-results', (req, res) => {
    return res.render('search-results.html' )
})

//ligar servidor
server.listen(3000)