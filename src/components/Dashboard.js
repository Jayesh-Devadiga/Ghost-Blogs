import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../redux/actions";
import DataCard from "./DataCard";
import DataChart from "./DataChart";
import PostList from "./PostList";

const Dashboard = ({ fetchData, data }) => {
  console.log(data);
  const { posts, pages, authors, tags } = data;
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        <DataCard info="Total number of Posts" count={posts.length} />
        <DataCard info="Total number of Pages" count={pages.length} />
        <DataCard info="Total number of Tags" count={tags.length} />
        <DataCard info="Total number of Authors" count={authors.length} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "30px", flexWrap: "wrap" }}>
        <PostList />
        {/* <DataChart /> */}
      </div>
    </div>
  );
};

const mapStateToProps = ({ data }) => {
  return {
    data,
  };
};

export default connect(mapStateToProps, { fetchData })(Dashboard);
