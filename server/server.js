const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const methodOverride = require('method-override')
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')

// Route Variabls

// .ENV setup
require('dotenv').config({path: './config/.env'})

// Passport config
require('./config/passport')(passport)

//Connect To Database
connectDB()