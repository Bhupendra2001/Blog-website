require('dotenv').config()
const Port = process.env.PORT
const express  =  require("express")
const route = require('./routes/router')
const Cp = require('cookie-parser')
const app = express()
const multer = require('multer')



app.use(multer().any())
app.use(express.json())
app.use(Cp())
app.use('/', route)


app.listen(Port, ()=>{
    console.log("mysql connected port number " , Port)
})