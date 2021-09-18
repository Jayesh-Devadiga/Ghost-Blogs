import { AppBar, Button, Menu, IconButton, MenuItem, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { BarChart } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  optionsFull: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  optionsMenu: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));
const TitleBar = () => {
  const classes = useStyles();
  const { optionsFull, optionsMenu } = classes;
  const [element, setElement] = useState(false);
  const open = Boolean(element);
  const handleClick = (event) => {
    setElement(event.currentTarget);
  };
  const handleClose = () => {
    setElement(null);
  };
  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton color="inherit">
            <BarChart />
          </IconButton>
          <Typography variant="h6">Ghost Blogs</Typography>
        </div>
        <div style={{ display: "flex" }}>
          <div className={optionsFull}>
            <Button color="inherit">Dashboard</Button>
            <Button color="inherit">Posts</Button>
            <Button color="inherit">Links</Button>
          </div>
          <div className={optionsMenu}>
            <IconButton color="inherit" onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={element} open={open} onClose={handleClose}>
              <MenuItem onClick={handleClose}>Dashboard</MenuItem>
              <MenuItem onClick={handleClose}>Posts</MenuItem>
              <MenuItem onClick={handleClose}>Links</MenuItem>
            </Menu>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TitleBar;
