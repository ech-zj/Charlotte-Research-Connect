const express = require('express')
const Router = express.Router()
const promisify = require('../lib/promisify')
const data = [{ temp: 'temp' }]

const positions = [{ x: -3500, y: -3500 }, { x: -3500, y: 0 }, { x: -3500, y: 3500 }, { x: 0, y: -3500 }, { x: 0, y: 3500 }, { x: 3500, y: -3500 }, { x: 3500, y: 0 }, { x: 3500, y: 3500 }]

Router.get('/main', async (req, res) => {
    console.log('in')
    // Query db to get sub_topics
    const colleges = await promisify.query(`SELECT * FROM colleges`)// = query for colleges
    const main_topics = await promisify.query(`SELECT * FROM main_topics`)// = query for sub_topics
    const sub_topics = await promisify.query(`SELECT * FROM sub_topics`)// = query for sub_topics

    // Organize Data
    const coll = {} //fuck this line bro
    colleges.forEach((c, i) => { coll[c.id] = c });
    const mainTopics = {}
    main_topics.forEach(c => { mainTopics[c.id] = c })

    // Create data object and instantiate with college nodes
    const data = {
        nodes: colleges.map(c => { return { id: c.id, label: c.name, title: c.url, color: `${c.color}67`, group: c.group, font: '128px Montserrat white', shape: 'box', ...positions[c.id] } }),
        edges: [] // goated line
    }


    // Add Edges and Nodes for each college
    let i = 8 // Starting at 8 because 1-7 occupied by colleges
    for (let ji in main_topics) {
        let j = main_topics[ji]
        // add the node here
        data.nodes.push({ id: i, label: j.label, title: null, color: `${coll[j.college].color}67`, group: coll[j.college].group, font: '64px Montserrat white', shape: 'box', ...positions[coll[j.college].id] })

        // Add Edges
        data.edges.push({ from: j.college, to: i, color: '#046A38' })
        mainTopics[j.id] = {
            ...j,
            nodeId: i
        }
        i++
    }

    console.log(main_topics)

    for (let j of sub_topics) {
        // add the node here
        data.nodes.push({ id: i, label: j.label, title: null, color: `${coll[mainTopics[j.parent_id].college].color}67`, group: coll[mainTopics[j.parent_id].college].group, font: '24px Montserrat white', shape: 'box', ...positions[coll[mainTopics[j.parent_id].college].id] })

        // Add Edges
        data.edges.push({ from: mainTopics[j.parent_id].nodeId, to: i, color: '#046A38' })

        i++
    }


    return res.status(200).json({ data })
})

module.exports = Router