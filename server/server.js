const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const logger = require('morgan')
// const connectDB = require('./config/database')

// Route Variables
const indexRoutes = require('./routes/index.js')


// .ENV setup
require('dotenv').config({path: './config/.env'})

// Passport config
// require('./config/passport')(passport)

//Connect To Database
// connectDB()

app.use(express.static('public'))
app.use(express.urlencoded({extended: true }))
app.use(express.json())
app.use(logger('dev'))


app.get('/index', (req,res)=>{
    const person = ['John', 'Bob', 'Steve']
    
    res.json({ person: person })
})

app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})  