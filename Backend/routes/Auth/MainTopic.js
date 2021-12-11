const express = require('express')
const Router = express.Router()


Router.get('/', async (req, res) => {
    const { pool } = require('../index')
    console.log(decodedToken)
})

module.exports = Router