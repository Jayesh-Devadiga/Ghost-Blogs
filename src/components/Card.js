import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    // padding: "10px",
    // margin: "10px",
    marginTop: 20,
    height: 250,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      height: 350,
    },
    [theme.breakpoints.up("md")]: {
      height: 400,
    },
    [theme.breakpoints.up("lg")]: {
      height: 500,
    },
  },
}));

const Card = (props) => {
  const classes = useStyles();
  const { container } = classes;
  return <div className={container}>{props.children}</div>;
};

export default Card;
