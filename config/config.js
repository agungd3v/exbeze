const fs = require('fs')
require('dotenv').config()

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD ?? null,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_CONNECTION,
    dialectOptions: {
      useUTC: false
    },
    timezone: "+07:00"
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD ?? null,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD ?? null,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    dialectOptions: {
      bigNumberStrings: true,
      ssl: {
        // ca: fs.readFileSync(__dirname + '/mysql-ca-main.crt')
      }
    }
  }
}
