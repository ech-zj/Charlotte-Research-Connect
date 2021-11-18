const express = require('express')
const Router = express.Router()

Router.get('/all', async (req, res) => {
    const { pool } = require('../index')
    // Get topics from DB
    pool.query(`SELECT id,image,concentration,degree,college,url,last_name,first_name,college_name FROM users WHERE is_faculty = 1 ORDER BY last_name DESC`, (err, rows) => {
        // Return error if any errors
        if (err) return res.status(500).json({ error: err })
        // Return data
        res.status(200).json({ data: rows })
    })
})

module.exports = Router