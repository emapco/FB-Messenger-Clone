const { Op, Sequelize } = require("sequelize");
const db = require("../db");
const Message = require("./message");

const Conversation = db.define("conversation", {});

const ConversationMembers = db.define("members", {
  members: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    allowNull: false,
  }
});

// find conversation given two user Ids

Conversation.findConversation = async function (userId) {
  const conversation = await Conversation.findOne({
    where: {
      userId: {
        [Op.in]: members
      }
    }
  });

  // return conversation or null if it doesn't exist
  return conversation;
};

module.exports = Conversation;
