import React from "react";
import DataCard from "./DataCard";
import PostList from "./PostList";

const Dashboard = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
        <DataCard info="Total number of Posts" />
        <DataCard info="Total number of Pages" />
        <DataCard info="Total number of Tags" />
        <DataCard info="Total number of Authors" />
      </div>
      <div>
        <PostList />
      </div>
    </div>
  );
};

export default Dashboard;
