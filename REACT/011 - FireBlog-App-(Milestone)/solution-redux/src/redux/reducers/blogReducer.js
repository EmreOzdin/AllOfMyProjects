import {
  SET_NEW_BLOG,
  CLEAR_NEW_BLOG,
  SET_UPDATED_BLOG,
  CLEAR_UPDATED_BLOG,
  CURRENT_BLOGS,
} from "../types/blogTypes";

const initialState = {
  currentBlogs: [],
  newBlog: {},
  updatedBlog: {},
};

const blogReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CURRENT_BLOGS:
      return { ...state, currentBlogs: payload };
    case SET_NEW_BLOG:
      return { ...state, newBlog: payload };
    case CLEAR_NEW_BLOG:
      return initialState.newBlog;
    case SET_UPDATED_BLOG:
      return { ...state, updatedBlog: payload };
    case CLEAR_UPDATED_BLOG:
      return initialState.updatedBlog;

    default:
      return state;
  }
};
export default blogReducer;
