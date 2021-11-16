const express = require('express')
const Router = express.Router()
const promisify = require('../lib/promisify')
const data = [{ temp: 'temp' }]

Router.get('/main', async (req, res) => {
    // Query db to get sub_topics
    const colleges = await promisify.query(`SELECT * FROM colleges`)// = query for colleges
    const sub_topics = await promisify.query(`SELECT * FROM sub_topics`)// = query for sub_topics

    // Organize Colors
    const colors = {}
    colleges.forEach((c, i) => { colors[i] = c.color });

    // Create data object and instantiate with college nodes
    const data = {
        nodes: colleges.map((c, i) => { return { id: i, label: c.name, title: c.url, color: `${c.color}67`, group: c.group, font: '36px Montserrat white', shape:'box' } }),
        edges: []
    }

    // Add Edges and Nodes for each college
    let i = 8 // Starting at 8 because 1-7 occupied by colleges
    for (let i of colleges) {
        for (let j of sub_topics) {
            // add the node here

            // Add Edges
            data.edges.push({ from: i.id, to: i, color: '#046A38' })
            i++
        }
    }

    return res.status(200).json({ data })
})

module.exports = Router