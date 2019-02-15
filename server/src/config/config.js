const path = require('path')
module.exports = {
    port: process.env.PORT
    db: {
        database: process.env.DB_NAME || 'tabtracker',
        user: process.env.DB_USER || 'tabtracker',
        password: process.env.DB_PASS || 'tabtracker',
        options: {
            dialect: process.env.dialect || 'sqlite',
            host: process.env.host || 'localhost',
            storege: '/app.sqlite'
          }
    }
}
