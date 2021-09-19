import { FETCH_DATA, SWITCH_PAGE } from "../actions/types";
const initialState = {
  posts: [],
  pages: [],
  authors: [],
  tags: [],
  page: "dashboard",
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_DATA:
      return {
        ...state,
        posts: [...payload.posts.data.posts],
        pages: [...payload.pages.data.pages],
        tags: [...payload.tags.data.tags],
        authors: [...payload.authors.data.authors],
      };
    case SWITCH_PAGE: {
      return {
        ...state,
        page: payload,
      };
    }

    default:
      return state;
  }
};
