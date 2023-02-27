const express  =  require("express")
const route = require('./routes/router')
const Cp = require('cookie-parser')
const app = express()
const multer = require('multer')





app.use(multer().any())
app.use(express.json())
app.use(Cp())
app.use('/', route)


app.listen(8800, ()=>{
    console.log("mysql connected port 8800")
})