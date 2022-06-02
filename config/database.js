const { Sequelize } = require('sequelize')

const { development } = require('./config')

const db = new Sequelize(development.database, development.username, development.password, {
  host: development.host,
  dialect: development.dialect,
  timezone: "+07:00"
})

module.exports = db