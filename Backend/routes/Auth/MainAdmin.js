const express = require('express');
const mysql = require('mysql')
const Router = express.Router();

const updateAbleColumns = [
    'label', 'college'
]

Router.get('/all', async (req, res) => {
    const { pool } = require('../../index.js');
    pool.query('SELECT * FROM main_topics', (err, rows) => {
        if (err) return res.status(500).json({ message: err })
        return res.status(200).json(rows);
    });
});


Router.patch('/edit', async (req, res) => {
    const { id, change, values } = req.body
    const { pool } = require('../../index.js');

    let issues = []
    if (!id) issues.push('Missing Id')
    if (!change) issues.push('Missing Item to Change')
    if (!values) issues.push('Missing Value')
    if (issues.length > 0) return res.status(400).json({ message: issues.map(m => m).join(', ') })

    if (!updateAbleColumns.includes(change.toLowerCase())) return res.status(400).json({ message: 'Invalid change type' })

    pool.query(`UPDATE main_topics SET ${change} = ${mysql.escape(values)} WHERE id = ${mysql.escape(id)}`, (err, rows) => {
        if (err) return res.status(500).json({ message: err })
        return res.status(200).json({ message: 'Success' })
    })
})

module.exports = Router