import React from "react";
import { Box } from "@material-ui/core";
import { SenderBubble, OtherUserBubble } from ".";
import moment from "moment";

const Messages = (props) => {
  const { messages, otherUser, userId, putMessage } = props;

  return (
    <Box>
      {messages.map((message) => {
        const time = moment(message.createdAt).format("h:mm");

        return message.senderId === userId ? (
          <SenderBubble
            key={message.id}
            text={message.text}
            time={time}
            otherUser={otherUser}
            hasRead={message.hasRead}
          />
        ) : (
          <OtherUserBubble
            key={message.id}
            message={message}
            time={time}
            otherUser={otherUser}
            putMessage={putMessage}
          />
        );
      })}
    </Box>
  );
};

export default Messages;
