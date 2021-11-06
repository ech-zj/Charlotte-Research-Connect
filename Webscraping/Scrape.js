const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')

const connectionsPages = {
    "business": {
        "URL": "https://pages.charlotte.edu/connections/group/college-of-business/page/",
        "PageCount": 10
    },
    "artArch": {
        "URL": "https://pages.charlotte.edu/connections/group/college-of-arts-and-architecture/page/",
        "PageCount": 12
    },
    "cci": {
        "URL": "https://pages.charlotte.edu/connections/group/cci/page/",
        "PageCount": 9
    },
    "coed": {
        "URL": "https://pages.charlotte.edu/connections/group/coed/page/",
        "PageCount": 13
    },
    "chhs": {
        "URL": "https://pages.charlotte.edu/connections/group/chhs/page/",
        "PageCount": 13
    },
    "clas": {
        "URL": "https://pages.charlotte.edu/connections/group/clas/page/",
        "PageCount": 52
    },
    "engineering": {
        "URL": "https://pages.charlotte.edu/connections/group/college-of-engineering/page/",
        "PageCount": 17
    },
    "sds": {
        "URL": "https://pages.charlotte.edu/connections/group/school-of-data-science-sds/page/",
        "PageCount": 5
    },
}

// Declare scrape all function
async function scrapeAll() {
    console.log('in scrapeAll')
    const data = { ...connectionsPages }

    for (let college in connectionsPages) {
        console.log(`Scraping ${college}`)
        // Array of Professor Objects
        const prof = []

        // Get the Current college's information
        const info = connectionsPages[college]
        // Page iterator
        let page = 1
        do {
            // Status
            console.log(`${college}: ${page}/${info.PageCount} Start`)

            // Grab the page
            let d = await axios.get(`${info.URL}${page}`)
            if (!d.data) throw `Error getting body from ${info.URL}${page}`

            // Load HTML data into cheerio
            const $ = cheerio.load(d.data)

            // Find and iterate each "post connection" classed div
            $(`div[class="post connection"]`).each((i, e) => {
                let name = $(e).find('h2[class="entry-title"]').text()
                let topics = []
                $(e).find(`div[class="description"] > div[class="connection-groups"]`).find('a').each((i, e) => {
                    let t = $(e).text()
                    if (t) topics.push(t)
                })
                let group = []
                $(e).find(`div[class="description"] > div[class="entry-content-container"]`).find('a').each((i, e) => {
                    let t = $(e).text()
                    if (t) group.push(t)
                })
                prof.push({ name, topics, group })
            })

            // Status
            console.log(`${college}: ${page}/${info.PageCount} End`)

            // Loop Logic
            page++
        } while (page <= info.PageCount)

        console.log('Done')

        // Add professors to data object
        data[college].faculty = prof
    }

    // Handle the new data
    console.log(data)

    // For now, writing to JSON file
    // new Date is a complex method of getting YYYY-MM-DD
    fs.writeFileSync(`./data/${new Date().toISOString().split('T')[0]}.json`, JSON.stringify(data, null, 4), { flag: 'w' })
}

// Call scrape all function
scrapeAll()

// Will keep process alive. Can help if it becomes a heavily promise based script to prevent early execution
process.stdin.resume()