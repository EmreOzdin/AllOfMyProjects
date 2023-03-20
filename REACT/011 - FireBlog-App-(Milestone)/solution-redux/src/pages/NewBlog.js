import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import blogPng from "../assets/blok.png";
import { useNavigate } from "react-router-dom";
import { toastSuccessNotify, toastErrorNotify } from "../utils/ToastNotify";
import BlogForm from "../components/BlogForm";
import { useSelector, useDispatch } from "react-redux";
import { addBlog } from "../redux/thunks/blogThunk";
import { clearNewBlogAction } from "../redux/actions/blogActions";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    padding: theme.spacing(13),
    backgroundColor: "#046582",
  },
  blogImg: {
    width: 200,
  },

  title: {
    fontSize: 35,
    fontFamily: "Girassol",
    color: "#046582",
  },
}));

const NewBlog = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const handler = (blog) => {
    try {
      addBlog(blog);
      navigate("/");
      toastSuccessNotify("Blog added");
    } catch (error) {
      toastErrorNotify("Blog can not be added");
    } finally {
      dispatch(clearNewBlogAction());
    }
  };

  const newBlog = {
    author: currentUser.email,
    title: "",
    content: "",
    get_comment_count: 0,
    get_like_count: 0,
    image: "",
    published_date: Date.now(),
  };

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img src={blogPng} alt="blog" className={classes.blogImg} />
        </Avatar>
        <Typography component="h1" variant="h5" className={classes.title}>
          ── New Blog ──
        </Typography>
      </div>
      <BlogForm blog={newBlog} handler={handler} />
    </Container>
  );
};

export default NewBlog;
