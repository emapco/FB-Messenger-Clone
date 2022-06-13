import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  avatar: {
    height: 18,
    width: 18,
    marginRight: 2,
    marginTop: 8,
  },
}));

const ReadReceiptBubble = ({ id, otherUser, lastReadMessageId }) => {
  const classes = useStyles();
  return (
    <>
      {id === lastReadMessageId && (
        <Avatar
          alt={otherUser.username}
          src={otherUser.photoUrl}
          className={classes.avatar}
        />
      )}
    </>
  );
};

export default ReadReceiptBubble;
