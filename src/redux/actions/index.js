import axios from "axios";
import { FETCH_DATA, SWITCH_PAGE } from "./types";

export const fetchData = () => async (dispatch) => {
  const posts = await axios.get(`https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=8196190b08906dda0ebf6e6f5d`);
  const pages = await axios.get(`https://ghost-blog.ipxp.in/ghost/api/v3/content/pages/?key=8196190b08906dda0ebf6e6f5d`);
  const tags = await axios.get(`https://ghost-blog.ipxp.in/ghost/api/v3/content/tags/?key=8196190b08906dda0ebf6e6f5d`);
  const authors = await axios.get(`https://ghost-blog.ipxp.in/ghost/api/v3/content/authors/?key=8196190b08906dda0ebf6e6f5d`);

  console.log("2");
  //   console.log(posts.data, pages.data, tags.data, authors.data);
  //   console.log(posts.data.posts.length);
  dispatch({ type: FETCH_DATA, payload: { posts, pages, tags, authors } });
};

export const switchPage = (page) => {
  return {
    type: SWITCH_PAGE,
    payload: page,
  };
};
