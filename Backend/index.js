// Imports
const fs = require('fs')
const express = require('express')
const https = require('https')
const http = require('http')
const cors = require('cors')
const rateLimit = require('express-rate-limit')

// Globals
const app = express()
const router = express.Router()

// Connect To DB
// TBD

// Start Up API
console.log('Starting API')

// Enable Express Body Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Enable CORS
app.use(cors())

// Create Rate Limit
const apiLimit = rateLimit({
    windowMs: 5 * 1000, //10 seconds
    max: 50 //50 requests
})
app.use('/a/', apiLimit)

// Request Logging
app.use((req, res, next) => {
    let d = new Date();
    let formatted_date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    let log = `[${formatted_date}] ${req.method}:${req.url} ${res.statusCode}`;
    console.log(log);
    next();
})

// Direct all traffic to the corresponding route
// Ex:
// app.use('/route', require('./routes/RouteFile'))
// points localhost:80/route -> ./routes/RouteFile

const httpServer = http.createServer(app)
httpServer.listen(require('./settings.json').port)