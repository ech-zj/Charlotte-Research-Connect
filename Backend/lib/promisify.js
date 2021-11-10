function query(query) {
    return new Promise(async (res, rej) => {
        const { pool } = require('../index')
        pool.query(query, (err, rows) => {
            if (err) return rej(err)
            else res(rows)
        })
    })
}