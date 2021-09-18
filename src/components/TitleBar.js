import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import { BarChart } from "@material-ui/icons";
import React from "react";

const TitleBar = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton sx={{ mr: 2 }} edge="start" color="inherit">
            <BarChart />
          </IconButton>
          <Typography variant="h6">Ghost Blogs</Typography>
        </div>
        <div>
          <Button color="inherit">Dashboard</Button>
          <Button color="inherit">Posts</Button>
          <Button color="inherit">Link</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TitleBar;
