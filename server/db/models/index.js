const { Conversation, ConversationMember } = require("./conversation");
const User = require("./user");
const { Message, ReadRecipient } = require("./message");

// associations

User.belongsToMany(Conversation, { through: ConversationMember, as: "conversations" } );
Conversation.belongsToMany(User, { through: ConversationMember, as: "members" });
Message.belongsTo(Conversation);
Message.hasMany(ReadRecipient);
Conversation.hasMany(Message);

module.exports = {
  User,
  Conversation,
  Message,
};
