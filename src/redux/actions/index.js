import axios from "axios";
import { FETCH_DATA, SWITCH_PAGE } from "./types";

export const fetchData = () => async (dispatch) => {
  const posts = await axios.get(`https://ghost-blog.ipxp.in/ghost/api/v3/content/posts/?key=${process.env.REACT_APP_API_KEY}`);
  const pages = await axios.get(`https://ghost-blog.ipxp.in/ghost/api/v3/content/pages/?key=${process.env.REACT_APP_API_KEY}`);
  const tags = await axios.get(`https://ghost-blog.ipxp.in/ghost/api/v3/content/tags/?key=${process.env.REACT_APP_API_KEY}`);
  const authors = await axios.get(
    `https://ghost-blog.ipxp.in/ghost/api/v3/content/authors/?key=${process.env.REACT_APP_API_KEY}`
  );
  dispatch({ type: FETCH_DATA, payload: { posts, pages, tags, authors } });
};

export const switchPage = (page) => {
  return {
    type: SWITCH_PAGE,
    payload: page,
  };
};
