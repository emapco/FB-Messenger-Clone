import React from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from ".";
import moment from "moment";

const Messages = (props) => {
  const { messages, otherUser, userId } = props;

  let lastReadMessageId = -1;
  if (messages) {
    for (let index in messages) {
      if (!messages[index].hasRead) {
        break;
      }
      if (messages[index].senderId !== otherUser.id) {
        lastReadMessageId = messages[index].id;
      }
    }
  }

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");

        return message.senderId === userId ? (
          <SenderBubble
            key={message.id}
            id={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
            lastReadMessageId={lastReadMessageId}
          />
        ) : (
          <OtherUserBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
