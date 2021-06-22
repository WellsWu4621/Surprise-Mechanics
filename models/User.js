const pls = require('passport-local-sequelize')
const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

const User = pls.defineUser(sequelize, {
  // your columns here...
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  username: DataTypes.STRING,
  email: DataTypes.STRING,
  DiscordName: DataTypes.STRING,
  Tokens: {
    type: DataTypes.INTEGER,
    defaultValue: 100
  }
}
)

module.exports = User
