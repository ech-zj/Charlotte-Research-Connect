const express = require('express')
const Router = express.Router()
const tokenParsing = require('../lib/tokenParsing')
const { pool } = require('../index')

Router.get('/', async (req, res) => {
    
})

module.exports = Router