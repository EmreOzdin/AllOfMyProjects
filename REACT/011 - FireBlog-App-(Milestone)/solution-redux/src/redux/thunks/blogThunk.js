import {
  getDatabase,
  ref,
  push,
  set,
  onValue,
  query,
  remove,
  update,
} from "firebase/database";

import { currentBlogAction } from "../actions/blogActions";

export const addBlog = (blog) => {
  const db = getDatabase();
  const userRef = ref(db, "blogs");
  const newUserRef = push(userRef);
  set(newUserRef, blog);
};

export const getBlog = (id, currentBlogs) => {
  const result = currentBlogs?.filter((item) => item.id === id);
  return result;
};

export const deleteBlog = (id) => {
  const db = getDatabase();
  // const userRef = ref(db, 'blogs');
  remove(ref(db, "blogs/" + id));
};

export const updateBlog = (id, data) => {
  const db = getDatabase();
  // const newUserKey=push(child(ref(db),"blogs/")).key;
  const updates = {};
  updates["blogs/" + id] = data;
  return update(ref(db), updates);
};

export const getBlogs = () => {
  return (dispatch) => {
    const db = getDatabase();
    const blogRef = ref(db, "blogs");
    onValue(query(blogRef), (snapshot) => {
      const blogs = snapshot.val();
      const blogL = [];
      for (let id in blogs) {
        blogL.push({ id, ...blogs[id] });
      }
      dispatch(currentBlogAction(blogL));
    });
  };
};
