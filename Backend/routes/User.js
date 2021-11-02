const express = require('express')
const Router = express.Router()
const tokenParsing = require('../lib/tokenParsing')


Router.get('/', async (req, res) => {
    const { pool } = require('../index')
    
})

module.exports = Router