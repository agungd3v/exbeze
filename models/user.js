const { Sequelize } = require('sequelize')
const db = require('../config/database.js')

const { DataTypes } = Sequelize;

const user = db.define('users', {
  name: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  }
}, {freezeTableName: true})

module.exports = user