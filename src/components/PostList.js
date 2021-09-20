import { CardContent, Typography, Card } from "@material-ui/core";
import React from "react";
import PostListItem from "./PostListItem";

const PostList = (props) => {
  const domainURL = "https://ghost-blog.ipxp.in/";
  const urlRegex = /http:\/\/143.244.136.65:2368/g;
  console.log(urlRegex.test("http://143.244.136.65:2368/author/sm"));
  return (
    <div style={{ marginBottom: "60px" }}>
      <Typography style={{ textAlign: "center", marginTop: "10px", marginBottom: "10px" }}>{props.listTitle}</Typography>
      {props.posts && props.posts.length > 0 ? (
        props.posts.map((post) => (
          <PostListItem key={post.title} imageUrl={post.feature_image} title={post.title} url={post.url} />
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
