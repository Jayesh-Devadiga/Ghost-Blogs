import { CssBaseline } from "@material-ui/core";
import React from "react";
import Dashboard from "./Dashboard";
import TitleBar from "./TitleBar";

const Home = () => {
  return (
    <div style={{ background: "#ecf0f1", height: "100vh" }}>
      <CssBaseline />
      <TitleBar />
      {/* <div style={{ display: "flex", justifyContent: "space-between", padding: "20px", flexWrap: "wrap" }}> */}
      <Dashboard />
      {/* </div> */}
    </div>
  );
};

export default Home;
