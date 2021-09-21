import { Grid } from "@material-ui/core";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../redux/actions";
import DataCard from "./DataCard";
import DataChart from "./DataChart";
import PostList from "./PostList";

const Dashboard = ({ fetchData, data }) => {
  const { posts, pages, authors, tags } = data;
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    const timer = setTimeout(() => {
      fetchData();
    }, 10000);
    return () => {
      clearTimeout(timer);
    };
  }, [data]);
  const sortedPosts = posts.length > 0 && posts.sort((a, b) => b.published_at - a.published_at);
  const dates = sortedPosts.length > 0 && sortedPosts.map((post) => post.published_at.slice(0, 7)).reverse();
  const findPostsPermonth = (arr) => {
    const counts = {};
    arr.forEach((x) => {
      counts[x] = (counts[x] || 0) + 1;
    });
    return counts;
  };

  const postsPerMonth = dates.length > 0 && findPostsPermonth(dates);
  const month = Object.keys(postsPerMonth);
  const count = Object.values(postsPerMonth);
  const chartData = [];
  for (let i = 0; i < month.length; i++) {
    chartData.push({ ["month"]: month[i], ["posts"]: count[i] });
  }
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", marginBottom: "30px" }}>
        <DataCard info="Total number of Posts" count={posts.length} />
        <DataCard info="Total number of Pages" count={pages.length} />
        <DataCard info="Total number of Tags" count={tags.length} />
        <DataCard info="Total number of Authors" count={authors.length} />
      </div>
      <Grid container style={{ width: "100%", height: "100%" }} direction="row" justifyContent="space-between">
        <Grid item xs={12} lg={5}>
          <PostList posts={posts.length > 0 && sortedPosts.slice(0, 5)} listTitle="Latest Published Posts" />
        </Grid>
        <Grid item xs={12} lg={6}>
          <DataChart postsPerMonth={chartData} />
        </Grid>
      </Grid>
    </div>
  );
};

const mapStateToProps = ({ data }) => {
  return {
    data,
  };
};

export default connect(mapStateToProps, { fetchData })(Dashboard);
