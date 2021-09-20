import { Card, CardContent, Grid } from "@material-ui/core";
import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const DataChart = ({ postsPerMonth }) => {
  return (
    <Card raised style={{ marginBottom: "60px", padding: "20px", background: "#D7E9F7" }}>
      <CardContent>
        <Grid container style={{ display: "flex" }} direction="column" alignItems="center">
          <ResponsiveContainer width="100%" aspect={3}>
            <BarChart data={postsPerMonth}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="posts" fill="#911F27" />
            </BarChart>
          </ResponsiveContainer>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default DataChart;
