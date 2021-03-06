const pls = require('passport-local-sequelize')
const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const User = pls.defineUser(sequelize, {
  // your columns here...
  email: DataTypes.STRING,
  DiscordName: DataTypes.STRING,
  Tokens: {
    type: DataTypes.INTEGER,
    defaultValue: 100
  }
}
)

module.exports = User
