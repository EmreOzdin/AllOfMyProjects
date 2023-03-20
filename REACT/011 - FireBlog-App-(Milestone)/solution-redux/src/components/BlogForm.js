import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import {
  setNewBlogAction,
  setUpdatedBlogAction,
} from "../redux/actions/blogActions";

import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  avatar: {
    padding: theme.spacing(13),
    backgroundColor: "#046582",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0),
    backgroundColor: "#046582",
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      color: "#046582",
    },
  },
  title: {
    fontSize: 35,
    fontFamily: "Girassol",
    color: "#046582",
  },
}));

const BlogForm = ({ blog, handler }) => {
  const classes = useStyles();
  const [newBlog, setNewBlog] = useState(blog);
  const dispatch = useDispatch();
  const { updatedBlog } = useSelector((state) => state.blog);

  useEffect(() => {
    setNewBlog(blog);
  }, [blog]);

  return (
    <form
      className={classes.form}
      onSubmit={(e) => {
        e.preventDefault();
        handler(newBlog);
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            fullWidth
            required
            id="title"
            label="Title"
            name="title"
            value={newBlog?.title ?? ""}
            autoFocus
            onChange={(e) => {
              //!local state updated
              setNewBlog({ ...newBlog, title: e.target.value });
              //!Global updatedBlog state updated
              dispatch(
                setUpdatedBlogAction({ ...updatedBlog, title: e.target.value })
              );
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            name="image"
            label="Image URL"
            type="text"
            id="image"
            value={newBlog?.image ?? ""}
            onChange={(e) => {
              setNewBlog({ ...newBlog, image: e.target.value });
              dispatch(
                setUpdatedBlogAction({ ...updatedBlog, image: e.target.value })
              );
            }}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="outlined-multiline-static"
            label="Content"
            name="content"
            multiline
            required
            value={newBlog?.content ?? ""}
            onChange={(e) => {
              setNewBlog({ ...newBlog, content: e.target.value });
              dispatch(
                setUpdatedBlogAction({
                  ...updatedBlog,
                  content: e.target.value,
                })
              );
            }}
            fullWidth
            minRows={15}
            variant="outlined"
          />
        </Grid>
      </Grid>

      <Button
        type="submit"
        fullWidth
        variant="contained"
        className={classes.submit}
      >
        Submit
      </Button>
    </form>
  );
};

export default BlogForm;
