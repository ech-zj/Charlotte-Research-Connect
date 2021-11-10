const express = require('express')
const Router = express.Router()

Router.get('/overview', async (req, res) => {
    const { pool } = require('../index')
    // Get topics from DB
    pool.query(`SELECT * FROM main_topics`, (err, rows) => {
        if (err) { res.status(500).json(rows.err); return console.log(rows.err) }
        res.status(200).json(rows)
    })
})

Router.get('/sub/:main_id', async (req, res) => {
    const { pool } = require('../index')
    const main_id = req.params.main_id
    if (!main_id) return res.status(400).json({ issues: `id not specified` })
    pool.query(`SELECT * FROM sub_topics WHERE parent_id = '${main_id}'`, (err, rows) => {
        if (err) {
            // Check for specific errors
            // This wont match anything, idk what the error message for parent_id not found is
            if (err.message.includes('FK')) return res.status(400).json({ issues: `Parent ID not found` })

            // If none above matched, return the given error
            return res.status(500).json({ issue: err.message })
        }
        return res.status(200).json(rows)
    })
})

Router.get('/articles/:sub_id', async (req, res) => {
    const { pool } = require('../index')
    const sub_id = req.params.sub_id
    if (!sub_id) return res.status(400).json({ issues: `id not specified` })
    pool.query(`SELECT * FROM articles WHERE topic = '${sub_id}'`, (err, rows) => {
        if (err) {
            // Check for specific errors
            // This wont match anything, idk what the error message for parent_id not found is
            if (err.message.includes('FK')) return res.status(400).json({ issues: `Parent ID not found` })

            // If none above matched, return the given error
            return res.status(500).json({ issue: err.message })
        }
        return res.status(200).json(rows)
    })
})

module.exports = Router