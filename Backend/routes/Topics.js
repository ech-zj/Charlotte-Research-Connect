const express = require('express')
const Router = express.Router()
const tokenParsing = require('../lib/tokenParsing')

Router.get('/overview', async (req, res) => {
    const { pool } = require('../index')
    // Get topics from DB
    pool.query(`SELECT * FROM main_topics`, (err, rows) => {
        if (err) { res.status(500).json(rows.err); return console.log(rows.err) }
        res.status(200).json(rows)
    })
})

module.exports = Router