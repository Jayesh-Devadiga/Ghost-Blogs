import { FETCH_DATA } from "../actions/types";
const initialState = {
  posts: [],
  pages: [],
  authors: [],
  tags: [],
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

    default:
      return state;
  }
};
