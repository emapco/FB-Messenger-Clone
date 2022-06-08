import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  bubble: {
    marginRight: 24,
    padding: "4px 12px",
    backgroundColor: "#3A8DFF",
    borderRadius: "100px",
  },
  text: {
    fontWeight: "bold",
    color: "#FFFFFF",
  },
}));

const UnreadMessagesCount = ({ conversation }) => {
  const classes = useStyles();

  return (
    <div>
      {conversation.unreadMessages > 0 &&
        <Box className={classes.bubble}>
          <Typography className={classes.text}>
            {conversation.unreadMessages}
          </Typography>
        </Box>
      }
    </div>
  );
};

export default UnreadMessagesCount;
