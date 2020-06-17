const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database('./src/database/database.db');

// db.serialize(() => {
//     // criar tabeta
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places(
//             id INTEG ER PRIMARY KEY AUTOINCREMENT,
//             name TEXT,
//             image TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `);

//     const query = `
//         INSERT INTO places (
//             image,
//             name,
//             address,
//             address2,
//             state,
//             city, 
//             items
//         ) VALUES (?, ?, ?, ?, ?, ?, ?);
//     `;

//     const values = [
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
//         "Papersider",
//         "Guilherme Gemballa, Jardim América",
//         "Número 250",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Papéis e Papelão"
//     ];

//     function afterInsertData(err){
//         if (err) {
//             return console.log(err)
//         }

//         console.log("Cadastrado com sucesso");
//         console.log(this)
//     }

//     db.run(query, values, afterInsertData);

//     //  consulta
//     // db.all(`SELECT * FROM places`, function(err, rows){
//     //     if(err){
//     //         return console.log(err)
//     //     }

//     //     console.log("Aqui estão seus registros");
//     //     console.log(rows);
//     // });


//     // deletar
//     // db.run(`DELETE FROM places WHERE id = ?`, [3], function(err){
//     //     if(err){
//     //         return console.log(err)
//     //     }

//     //     console.log("Registro deletado com sucesso!");
//     // });
// });

module.exports = db;
