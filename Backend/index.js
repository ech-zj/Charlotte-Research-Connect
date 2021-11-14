// Imports
const fs = require('fs')
const express = require('express')
const https = require('https')
const http = require('http')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const mysql = require('mysql')
const { pathToFileURL } = require('url')

// Globals
const app = express()

// Connect To DB
const pool = mysql.createPool({
    ...require('./settings.json').dbInfo,
    connectionLimit: 25
})

pool.on('connection', () => {
    console.log(`DB Conneciton Made`)
});

pool.query('SELECT 1+1 as solution', (err, res) => {
    if (err) console.log(err)
    console.log(res)
})

// Start Up API
console.log('Starting API')

// Enable Express Body Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Enable CORS
app.use(cors())

// Create Rate Limit
const apiLimit = rateLimit({
    windowMs: 5 * 1000, //5 seconds
    max: 50 //50 requests
})
app.use('/', apiLimit)

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
app.use('/topics', require('./routes/Topics'))
app.use('/user', require('./routes/User'))
app.use('/faculty', require('./routes/Faculty'))

try {
    const httpsServer = https.createServer({
        key: fs.readFileSync('./public/privkey.pem', 'utf8'),
        cert: fs.readFileSync('./public/cert.pem', 'utf8')
    }, app)
    httpsServer.listen(require('./settings.json').port)
} catch (er) {
    console.log('Couldn\'t Start HTTPS Server')
}
const httpServer = http.createServer(app)
httpServer.listen(require('./settings.json').httpPort)

module.exports = {
    pool
}