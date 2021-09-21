import { Grid } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import PostList from "./PostList";

const PostsPage = ({ posts }) => {
  const postsWithoutMetaDescription = posts.filter((post) => post.meta_description === null); //List of Posts without Meta Description
  const postsWithLongMetaDescription = posts.filter((post) => post.meta_description && post.meta_description.length > 150); //Too long Meta Description, more than 150 char
  const postsWithLongURL = posts.filter((post) => post.url.length > 100); //Too long URL, more than 100 chars
  const postsWithoutImage = posts.filter((post) => post.feature_image === null);
  const shortPosts = posts.filter((post) => post.html.length < 250);
  const longPosts = posts.filter((post) => post.html.length > 1500);
  return (
    <Grid container direction="row" justifyContent="space-between">
      <Grid item xs={12} lg={4}>
        <PostList posts={postsWithoutMetaDescription} listTitle={"Posts without Meta Description"} />
      </Grid>
      <Grid item xs={12} lg={4}>
        <PostList posts={longPosts} listTitle={"Long Posts"} />
      </Grid>
      <Grid item xs={12} lg={4}>
        <PostList posts={postsWithLongMetaDescription} listTitle={"Posts with long Meta Description"} />
      </Grid>
      <Grid item xs={12} lg={4}>
        <PostList posts={postsWithLongURL} listTitle={"Posts with long URL"} />
      </Grid>
      <Grid item xs={12} lg={4}>
        <PostList posts={postsWithoutImage} listTitle={"Posts without Feature Image"} />
      </Grid>
      <Grid item xs={12} lg={4}>
        <PostList posts={shortPosts} listTitle={"Short Posts"} />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = ({ data }) => {
  return {
    posts: data.posts,
  };
};

export default connect(mapStateToProps)(PostsPage);
