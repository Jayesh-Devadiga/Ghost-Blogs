import { CardContent, Typography, Card } from "@material-ui/core";
import React from "react";
import PostListItem from "./PostListItem";

const PostList = (props) => {
  return (
    <Card raised style={{ marginBottom: "60px", padding: "20px" }}>
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
    </Card>
  );
};

export default PostList;
