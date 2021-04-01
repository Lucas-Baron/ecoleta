//Importar a dependência do sqlite 3
const sqlite3 = require('sqlite3').verbose()

//Criar objeto que irá fazer operações no banco de dados
const db =  new sqlite3.Database("./src/database/database.db")

module.exports = db

//Utilizr o objeto de banco de dados, para nossas operações
/*      db.serialize( () => {
    //Com comandos SQL eu vou:
    //1.Criar uma tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            addrees2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        )
    `)

    //2.Inserir dados na tabel
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
        "https://images.unsplash.com/photo-1600718894668-940d0e4a1539?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fHBhcGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        "Paper",
        "Guilherme Gemballa, Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]

    function afterInsertData(err){
        if (err){
            return console.log(err)
        }

        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData)

    //3.Consultar os dados da tabela
    db.all(`SELECT name FROM places`, function(err, rows) {
        if (err){
            return console.log(err)
        }

        console.log("Aqui estão seus registros: ")
        console.log(this)
    }) 

    //4.Deletar um dado da tabela
    db.run(`DELETE FROM places WHERE id = ?`, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15], function(err) {
        if (err){
            return console.log(err)
        }

        console.log("Registro deletado com sucesso!")
    })

})  */