const mysql = require('mysql2')
require('dotenv').config()

let pass = process.env.Pass



const db = mysql.createPool({
    host : "localhost",
    user : "root",
    password : pass,
    database : "blog"
})

module.exports = {db}
