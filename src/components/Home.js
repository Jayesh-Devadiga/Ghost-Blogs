import { CssBaseline } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import LinksPage from "./LinksPage";
import PostsPage from "./PostsPage";
import TitleBar from "./TitleBar";

const Home = ({ page }) => {
  const renderPage = () => {
    if (page === "dashboard") {
      return <Dashboard />;
    } else if (page === "posts") {
      return <PostsPage />;
    } else if (page === "links") {
      return <LinksPage />;
    }
  };
  return (
    <div style={{ background: "#ecf0f1" }}>
      <CssBaseline />
      <TitleBar />
      <div style={{ padding: "20px", margin: "20px" }}>{renderPage()}</div>
    </div>
  );
};
const mapStateToProps = ({ data }) => {
  return {
    page: data.page,
  };
};
export default connect(mapStateToProps)(Home);
