const Sequelize = require("sequelize");
const db = require("../db");

const Message = db.define("message", {
  text: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  senderId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  haveReadRecipients: {
    type: Sequelize.ARRAY(Sequelize.INTEGER), 
    defaultValue: false,
  },
});

module.exports = Message;
