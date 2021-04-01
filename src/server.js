const express = require('express')
const server = express()

//Pegar o banco de dados
const db = require('./database/db')


//Configurar pasta pública
server.use(express.static('public'))

//Habilitar o uso do req.body na aplicação
server.use(express.urlencoded({extended:true}))

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
    //req.query: Query Strings da url de
    console.log(req.query)


    return res.render('create-point.html' )
})

server.post("/savepoint", (req, res) => {
    //req.body: O corpo do formulário
    //console.log(req.body)

    //Inserir dados no banco de dados
    const query = 
        `
            INSERT INTO places (
                image,
                name,
                address,
                addrees2,
                state,
                city,
                items
            ) VALUES ( ?,?,?,?,?,?,? )
        `

    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.addrees2,
        req.body.state,
        req.body.city,
        req.body.items,


    ]

    function afterInsertData(err){
        if (err){
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData)

    return res.send('Ok')
})



//Criando rota para searsh-results
server.get('/search-results', (req, res) => {
    //Pegar os dados do banco de dados
    db.all(`SELECT * FROM places`, function(err, rows) {
        if (err){
            return console.log(err)
        }

        const total = rows.length
        //Mostrar a página html com os dados do banco de dados
        return res.render('search-results.html', {places:rows, total:total} )
    })

})

//ligar servidor
server.listen(3000)