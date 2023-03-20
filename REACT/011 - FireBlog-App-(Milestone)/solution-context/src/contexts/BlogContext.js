import React, { useContext, useState, useEffect } from "react";
import { getDatabase,ref,push,set, onValue,query, remove, update } from "firebase/database"

const BlogContext = React.createContext();

export function useBlog() {
  return useContext(BlogContext);
}

export function BlogProvider({ children }) {
  const [currentBlogs, setCurrentBlogs] = useState();

  function addBlog(blogValue) {
    const db=getDatabase();
    const userRef=ref(db,"blogs")
    const newUserRef=push(userRef)
    set(newUserRef,blogValue);
  }

  function getOneBlog(id) {
    const result = currentBlogs?.filter((item) => item.id === id);
    return result;
  }

  function deleteOneBlog(id) {
    const db = getDatabase();
    // const userRef = ref(db, 'blogs');
    remove(ref(db,"blogs/"+id))
  }

  function updateBlog(id, data) {
    const db = getDatabase();
    // const newUserKey=push(child(ref(db),"blogs/")).key;
    const updates={};
    updates["blogs/"+id]=data;
    return update(ref(db),updates)
  }

  useEffect(() => {
    const db = getDatabase();
    const blogRef = ref(db, 'blogs');
    onValue(query(blogRef), snapshot => {
      // console.log(snapshot.val());
      const blogs = snapshot.val();
      const blogL = [];
      for (let id in blogs) {
        blogL.push({ id, ...blogs[id] });
      }
      //   console.log(blogL);
      setCurrentBlogs(blogL);
    });
  }, []);

  const value = {
    addBlog,
    currentBlogs,
    getOneBlog,
    deleteOneBlog,
    updateBlog,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}

/*
https://stackoverflow.com/questions/37717602/retrieve-data-from-firebase-database-in-javascript

var uid = user.uid
firebase.database().ref('users/' + uid).on('value', function(snapshot) {
    var first_name = snapshot.val().first_name;
});
*/
/*
https://stackoverflow.com/questions/59283028/get-data-by-id-from-firebase

*/
