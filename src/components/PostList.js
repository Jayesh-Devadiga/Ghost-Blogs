import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@material-ui/core";
import { BeachAccess, Image, Work } from "@material-ui/icons";
import React from "react";

const PostList = (props) => {
  console.log(props.children);
  return <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>{props.children}</List>;
};

export default PostList;

{
  /* <ListItem>
  <ListItemAvatar>
    <Avatar>
      <Image />
    </Avatar>
  </ListItemAvatar>
  <ListItemText primary="Photos" secondary="Jan 9, 2014" />
</ListItem>; */
}
