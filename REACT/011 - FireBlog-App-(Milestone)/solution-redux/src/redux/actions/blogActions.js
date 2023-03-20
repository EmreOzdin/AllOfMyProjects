import {
  SET_NEW_BLOG,
  CLEAR_NEW_BLOG,
  SET_UPDATED_BLOG,
  CLEAR_UPDATED_BLOG,
  CURRENT_BLOGS,
} from "../types/blogTypes";

export const currentBlogAction = (blog) => ({
  type: CURRENT_BLOGS,
  payload: blog,
});

export const setNewBlogAction = (blog) => ({
  type: SET_NEW_BLOG,
  payload: blog,
});

export const clearNewBlogAction = () => ({
  type: CLEAR_NEW_BLOG,
});

export const setUpdatedBlogAction = (blog) => ({
  type: SET_UPDATED_BLOG,
  payload: blog,
});

export const clearUpdatedBlogAction = () => ({
  type: CLEAR_UPDATED_BLOG,
});
