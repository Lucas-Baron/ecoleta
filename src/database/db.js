//Importar a dependência do sqlite 3
const sqlite3 = require('sqlite3').verbose()

//Criar objeto que irá fazer operações no banco de dados
const db =  new sqlite3.Database("./src/database/database.db")

//Utilizr o objeto de banco de dados, para nossas operações
db.serialize( () => {
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
        "Imagem",
        "Coletoria",
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

    //4.Deletar um dado da tabela

})