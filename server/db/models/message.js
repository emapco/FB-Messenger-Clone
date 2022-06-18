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
  }
});

const ReadRecipient = db.define("readRecipient", {
  messageId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  recipientId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
});

module.exports = Message, ReadRecipient;
