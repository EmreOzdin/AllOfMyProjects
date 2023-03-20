import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BlogCard from "../components/BlogCard";
import Typography from "@material-ui/core/Typography";
import loadingGif from "../assets/loading.gif";
import { useSelector, useDispatch } from "react-redux";

import {
  setLoadingFalseAction,
  setLoadingTrueAction,
} from "../redux/actions/appActions";

import { getBlogs } from "../redux/thunks/blogThunk";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    "& > *": {
      margin: theme.spacing(5),
    },
  },

  title: {
    fontFamily: "Girassol",
    textAlign: "center",
    color: "#046582",
  },
  mainRoot: {
    marginTop: 70,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { currentBlogs } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(setLoadingTrueAction());
    dispatch(getBlogs());
    dispatch(setLoadingFalseAction());
  }, [dispatch]);

  return (
    <div className={classes.mainRoot}>
      <Typography className={classes.title} variant="h3" noWrap>
        ──── Dashboard ────
      </Typography>
      <>
        <Grid container className={classes.root} justifyContent="center">
          <Grid item xs={12}>
            <Grid container justifyContent="center" spacing={5}>
              {currentBlogs?.length === 0 ? (
                <img src={loadingGif} alt="loading" />
              ) : (
                currentBlogs?.map((item, id) => (
                  <Grid key={id} item>
                    <BlogCard item={item} />
                  </Grid>
                ))
              )}
            </Grid>
          </Grid>
        </Grid>
      </>
    </div>
  );
};

export default Dashboard;
