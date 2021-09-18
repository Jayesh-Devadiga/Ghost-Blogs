import { CssBaseline } from "@material-ui/core";
import React from "react";
import TitleBar from "./TitleBar";

const Home = () => {
  return (
    <div style={{ background: "#ecf0f1", height: "100vh" }}>
      <CssBaseline />
      <TitleBar />
    </div>
  );
};

export default Home;
