import React from "react";
import DataCard from "./DataCard";

const Dashboard = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "20px", flexWrap: "wrap" }}>
      <DataCard info="Total number of Posts" />
      <DataCard info="Total number of Pages" />
      <DataCard info="Total number of Tags" />
      <DataCard info="Total number of Authors" />
    </div>
  );
};

export default Dashboard;
