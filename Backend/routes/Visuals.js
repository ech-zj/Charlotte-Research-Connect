const express = require('express')
const Router = express.Router()

const data = [{ temp: 'temp' }]

Router.get('/main', async (req, res) => {
    return res.status(200).json({ data })
})

module.exports = Router