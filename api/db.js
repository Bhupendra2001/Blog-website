const mysql = require('mysql2')




const db = mysql.createPool({
    host : "127.0.0.1",
    user : "root",
    password : "Sahil@123",
    database : "blog"
})

module.exports = {db}
