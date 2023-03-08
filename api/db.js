const mysql = require('mysql2')




const db = mysql.createPool({
    host : "http://blog-website-three-gamma.vercel.app",
    user : "root",
    password : "Sahil@123",
    database : "blog"
})

module.exports = {db}
