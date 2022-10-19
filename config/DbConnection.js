const mysql = require('mysql2')

// class DbConnection {

//     connection(){
//         if(!this.conn){
//             this.conn = mysql.createConnection({
//                 host: 'localhost',
//                 user: 'root',
//                 password: '', //Senha da escola @ITB123456
//                 database: 'oficinas_web' // Banco de dados criado na escola
//             });

//             this.conn.connect((error) => {

//                 if(error) {
//                     console.log(`Error: ${error}`)
//                     throw error;
//                 };
//                 console.log('Conectado com sucesso!')


//             })
//         }
//         return this.conn;
//     }
// }

// module.exports = new DbConnection()

module.exports = function(){
    return mysql.createConnection({
       host: "ec2-44-207-253-50.compute-1.amazonaws.com",
       user: "ibqljhqkgxlebh",
       password: "ff12a476c7680ef2e4dbacb4412659549e328614d4062c1e8cdf6c95f3f62189", // senha na escola @ITB123456
       database: "dbitjnfqoh11ht",
       port: 5432
     });
}