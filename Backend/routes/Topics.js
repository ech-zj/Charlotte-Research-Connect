const express = require('express')
const Router = express.Router()
const tokenParsing = require('../lib/tokenParsing')
const { pool } = require('../index')

// Move to DB
const topicOverviews = [
    { text: "Art", code: "art" },
    { text: "Anatomy", code: "anatomy" },
    { text: "Biochemistry", code: "biochemistry" },
    { text: "Civil Engineering", code: "civil_engineering" },
    { text: "Chemistry", code: "chemistry" },
    { text: "Computer Science", code: "computer_science" },
    { text: "Electrical Engineering", code: "electrical_engineering" },
    { text: "English", code: "english" },
    { text: "Geology", code: "geology" },
    { text: "History", code: "history" },
    { text: "Mathematics", code: "mathemtics" },
    { text: "Physics", code: "phsyics" },
    { text: "Sociology", code: "sociology" },
]

Router.get('/overview', async (req, res) => {
    // Get topics from DB

    // DB TBI
    let topics = topicOverviews

    res.status(200).json({ data: topics })
})

module.exports = Router