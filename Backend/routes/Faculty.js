const express = require('express')
const Router = express.Router()
const tokenParsing = require('../lib/tokenParsing')

// Temporarily hard coded, will move to DB soon
const Faculty = [
    {
        name: 'Thomas Carr',
        degree: 'Ph.D. Computer Science',
        mainResearch: 'Artificial Intelligence',
        image: 'https://uxfactor.files.wordpress.com/2012/12/stick-figure1.jpg?w=640'
    },
    {
        name: 'Eric Horne',
        degree: 'M.S. Computer Science',
        mainResearch: 'Artificial Intelligence',
        image: 'https://uxfactor.files.wordpress.com/2012/12/stick-figure1.jpg?w=640'
    },
    {
        name: 'Sam Chapman',
        degree: 'B.S. Computer Science',
        mainResearch: 'Software Engineering',
        image: 'https://uxfactor.files.wordpress.com/2012/12/stick-figure1.jpg?w=640'
    },
    {
        name: 'Nicholas Huy',
        degree: 'Ph.D. Computer Science',
        mainResearch: 'Cyber Security',
        image: 'https://uxfactor.files.wordpress.com/2012/12/stick-figure1.jpg?w=640'
    },
    {
        name: 'Manan Parekh',
        degree: 'Ph.D. Software Informatin Systems',
        mainResearch: 'Internet of Things',
        image: 'https://uxfactor.files.wordpress.com/2012/12/stick-figure1.jpg?w=640'
    }
]

Router.get('/all', async (req, res) => {
    const { pool } = require('../index')
    // Get topics from DB

    // DB TBI
    let faculty = Faculty

    res.status(200).json({ data: faculty })
})

module.exports = Router