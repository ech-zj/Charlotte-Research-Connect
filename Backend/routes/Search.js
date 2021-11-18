const express = require('express')
const Router = express.Router()
const mysql = require('mysql')
const promisify = require('../lib/promisify')


Router.get('/:search', async (req, res) => {
    // Get DB connector from index
    const { pool } = require('../index')

    // Get Search from query params (:search)
    const search = req.params.search
    console.log(`Search received for: ${search}`)
    console.log(`Escaped serach = ${mysql.escape(search)}`)

    // Validate Search
    let issues = [] // Push to this array for any issues in validation section
    if (!search) issues.push(`No search provided`)
    if (issues.length > 0) return res.status(400).json({ issues }) //bad request

    // Search Logic
    let results = []
    // Add DB queries to the promises array using same structure as current one
    let promises = [
        promisify.query(`SELECT * FROM main_topics WHERE Contains(label, ${mysql.escape(search)})`)
            .then(rows => rows.forEach(row => { results.push(row) })),
        promisify.query(`SELECT * FROM sub_topics WHERE Contains(label, ${mysql.escape(search)})`)
            .then(rows => rows.forEach(row => { results.push(row) }))
    ]

    // The search will probably get replaced by thomas/eric in sprint 4 to add NLP

    // Wait for all queries above
    await Promise.all(promises)

    return res.status(200).json({ data: results })

})

module.exports = Router