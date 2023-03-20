import React, { useEffect, useMemo } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import placeholderPng from "../assets/placeholder.png";
import { toastSuccessNotify, toastErrorNotify } from "../utils/ToastNotify";
import { useNavigate, useParams } from "react-router-dom";
import BlogForm from "../components/BlogForm";
import { useSelector, useDispatch } from "react-redux";
import { getBlog, updateBlog } from "../redux/thunks/blogThunk";

import {
  clearUpdatedBlogAction,
  setUpdatedBlogAction,
} from "../redux/actions/blogActions";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 90,
  },
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  blogImg: {
    width: 400,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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
const UpdateBlog = ({ match }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { updatedBlog, currentBlogs } = useSelector((state) => state.blog);
  const result = getBlog(id, currentBlogs);

  const res = useMemo(() => {
    return result ? result[0] : { title: "", content: "", image: "" };
  }, [result]);

  useEffect(() => {
    dispatch(setUpdatedBlogAction(res));
  }, [res, dispatch]);

  const handler = (blogToUpdate) => {
    try {
      updateBlog(res?.id, blogToUpdate);
      navigate("/");
      toastSuccessNotify("Blog Updated");
    } catch (error) {
      toastErrorNotify("Blog can not be Updated");
    } finally {
      dispatch(clearUpdatedBlogAction());
    }
  };

  return (
    <Container maxWidth="xs" className={classes.root}>
      <div className={classes.paper}>
        <img
          src={updatedBlog?.image || placeholderPng}
          alt="blog"
          className={classes.blogImg}
        />
        <Typography component="h1" variant="h5" className={classes.title}>
          ── Update Blog ──
        </Typography>
        <BlogForm blog={updatedBlog} handler={handler} />
      </div>
    </Container>
  );
};

export default UpdateBlog;
