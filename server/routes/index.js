const express = require('express')
const router = express.Router()
const indexController = require('../controllers/index')

router.get('/index', indexController.getIndex)


module.exports = router