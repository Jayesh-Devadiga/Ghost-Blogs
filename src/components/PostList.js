import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@material-ui/core";
import { BeachAccess, Image, Work } from "@material-ui/icons";
import React from "react";
import PostListItem from "./PostListItem";

const PostList = (props) => {
  console.log(props, "postlist");
  const domainURL = "https://ghost-blog.ipxp.in/";
  const renderList = () => {
    props.posts &&
      props.posts.map((post) => {
        const imageUrl = `${domainURL}${post.feature_image.slice(26)}`;
        const blogUrl = `${domainURL}${post.url.slice(26)}`;
        //   console.log(imageUrl);
        //   console.log(blogUrl);
        return <PostListItem imageUrl={imageUrl} title={post.title} />;
      });
  };
  return (
    <div>
      <Typography style={{ textAlign: "center", marginTop: "10px", marginBottom: "10px" }}>{props.listTitle}</Typography>
      {/* {props.posts && props.posts.map((post) => <PostListItem imageUrl={post.feature_image} title={post.title1} />)} */}
      {renderList()}
    </div>
  );
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
