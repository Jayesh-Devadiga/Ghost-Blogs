import { CssBaseline } from "@material-ui/core";
import React from "react";
import Dashboard from "./Dashboard";
import TitleBar from "./TitleBar";

const Home = () => {
  return (
    <div>
      <CssBaseline />
      <TitleBar />
      <div style={{ padding: "20px", margin: "20px" }}>
        <Dashboard />
      </div>
    </div>
  );
};

export default Home;
