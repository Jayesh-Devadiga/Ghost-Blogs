import { Avatar, Card, CardContent, Grid, Link, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  card: {
    marginBottom: 15,
  },
  avatar: {
    minWidth: 50,
    height: 50,
  },
}));
const PostListItem = (props) => {
  const classes = useStyles();
  const { imageUrl, title, url } = props;

  return (
    <Card raised className={classes.card}>
      <CardContent>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item xs={12} md={1}>
            <Avatar className={classes.avatar} src={imageUrl} />
          </Grid>
          <Grid item xs={12} md={10}>
            <Typography style={{ color: "#555" }}>{title}</Typography>
            <Link style={{ color: "#777", cursor: "pointer" }} href={url} target="_blank">
              {url}
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PostListItem;
