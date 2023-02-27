const mysql = require('mysql2')

//  const db = mysql.createConnection({
//     host: "localhost",
//     user:"root",
//     password:"Sahil@123",
//     database: "blog"
// })
// module.exports = {db}


const db = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "Sahil@123",
    database : "blog"
})

module.exports = {db}
