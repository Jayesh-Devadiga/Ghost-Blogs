import { CardContent, Grid, Link, Card } from "@material-ui/core";
import React from "react";

const LinkListItem = ({ url }) => {
  return (
    <div>
      <Card raised style={{ marginBottom: "10px" }}>
        <CardContent>
          <Grid container style={{ display: "flex" }}>
            <Link style={{ color: "#777", cursor: "pointer" }} href={url} target="_blank">
              {url}
            </Link>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default LinkListItem;
