import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
    flexGrow: 1,
  },
  username: {
    fontWeight: "bold",
    letterSpacing: -0.2,
  },
  previewText: (props) => ({
    fontWeight: props.fontWeight,
    fontSize: props.fontSize,
    color: props.color,
    letterSpacing: props.letterSpacing
  }),
}));

const ChatContent = ({ conversation }) => {
  let styleProps = {
    fontSize: 12,
    color: "#9CADCB",
    letterSpacing: -0.17,
  };
  if (conversation.unreadMessages) {
    styleProps = {
      fontWeight: "bold",
      color: "#000000",
    };
  }
  const classes = useStyles(styleProps);

  const { otherUser } = conversation;
  const latestMessageText = conversation.id && conversation.latestMessageText;

  return (
    <Box className={classes.root}>
      <Box>
        <Typography className={classes.username}>
          {otherUser.username}
        </Typography>
        <Typography
          className={classes.previewText}
        >
          {latestMessageText}
        </Typography>
      </Box>
    </Box>
  );
};

export default ChatContent;
