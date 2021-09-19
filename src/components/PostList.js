import { CardContent, Typography, Card } from "@material-ui/core";
import React from "react";
import PostListItem from "./PostListItem";

const PostList = (props) => {
  console.log(props, "postlist");
  const domainURL = "https://ghost-blog.ipxp.in/";
  return (
    <div style={{ marginBottom: "60px" }}>
      <Typography style={{ textAlign: "center", marginTop: "10px", marginBottom: "10px" }}>{props.listTitle}</Typography>
      {props.posts && props.posts.length > 0 ? (
        props.posts.map((post) => (
          <PostListItem
            imageUrl={`${domainURL}${post.feature_image.slice(26)}`}
            title={post.title}
            url={`${domainURL}${post.url.slice(26)}`}
          />
        ))
      ) : (
        <Card raised>
          <CardContent>
            <Typography style={{ color: "#555", textAlign: "center" }}>No Posts Found</Typography>
          </CardContent>
        </Card>
      )}
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
