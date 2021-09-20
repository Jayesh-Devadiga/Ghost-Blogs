import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../redux/actions";
import DataCard from "./DataCard";
import DataChart from "./DataChart";
import PostList from "./PostList";
import Card from "./Card";

const Dashboard = ({ fetchData, data }) => {
  const { posts, pages, authors, tags } = data;
  useEffect(() => {
    fetchData();
  }, []);
  const sortedPosts = posts.length > 0 && posts.sort((a, b) => b.published_at - a.published_at);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        <DataCard info="Total number of Posts" count={posts.length} />
        <DataCard info="Total number of Pages" count={pages.length} />
        <DataCard info="Total number of Tags" count={tags.length} />
        <DataCard info="Total number of Authors" count={authors.length} />
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
        <Card>
          <PostList posts={posts.length > 0 && sortedPosts.slice(0, 5)} listTitle="Latest Published Posts" />
        </Card>
        {/* <Card>
          <DataChart />
        </Card> */}
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
