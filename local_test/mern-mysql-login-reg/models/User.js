const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
//  'user',
  'userInfo',
  {
    userNum: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userID: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    },
    phoneNum: {
      type: Sequelize.STRING
    },
    nickName: {
      type: Sequelize.STRING
    },
    walletCode: {
      type: Sequelize.STRING
    }
  },
  {
    timestamps: false,
    freezeTableName: true
  }
)
