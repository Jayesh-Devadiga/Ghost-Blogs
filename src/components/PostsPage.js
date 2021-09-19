import React from "react";
import { connect } from "react-redux";

const PostsPage = ({ posts }) => {
  const postsWithoutMetaDescription = posts.filter((post) => post.meta_description === null); //List of Posts without Meta Description
  //   console.log(postsWithoutMetaDescription);
  const postsWithLongMetaDescription = posts.filter((post) => post.meta_description && post.meta_description.length > 150); //Too long Meta Description, more than 150 char
  //   console.log(postsWithLongMetaDescription);
  const postsWithLongURL = posts.filter((post) => post.url.length > 100); //Too long URL, more than 100 chars
  //   console.log(postsWithLongURL);
  const postsWithoutImage = posts.filter((post) => post.feature_image === null);
  // console.log(postsWithoutImage);
  const shortPosts = posts.filter((post) => post.html.length < 250);
  //   console.log(shortPosts);
  const longPosts = posts.filter((post) => post.html.length > 1500);
  //   console.log(longPosts);

  return <div>POSTS</div>;
};

const mapStateToProps = ({ data }) => {
  return {
    posts: data.posts,
  };
};

export default connect(mapStateToProps)(PostsPage);
