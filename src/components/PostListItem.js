import { Avatar, Card, CardContent, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  card: {
    marginBottom: 15,
    cursor: "pointer",
  },
  avatar: {
    width: 50,
    height: 50,
  },
}));
const PostListItem = (props) => {
  console.log(props,'postlistitem');
  const classes = useStyles();
  const { imageUrl, title } = props;

  return (
    <Card raised className={classes.card}>
      <CardContent>
        <Grid container>
          <Grid item xs={1}>
            <Avatar className={classes.avatar} src={imageUrl} />
          </Grid>
          <Grid item xs={11}>
            <Typography style={{ color: "#555" }}>{title}</Typography>
            {/* <Typography style={{ color: "#777" }}>{email}</Typography> */}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PostListItem;
