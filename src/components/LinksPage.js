import { CardContent, Card, Grid, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import LinksList from "./LinksList";

const LinksPage = ({ posts }) => {
  const postHHTMLArray = posts && posts.map((post) => post.html).join(" ");
  const geturl = /(?:(?:https?|ftp):\/\/)?[\w/\-?=%.]+\.[\w/\-&?=%.]+/gim;
  const extractedUrls = postHHTMLArray
    .match(geturl)
    .filter((url) => !url.includes("i.e."))
    .filter((url) => !url.includes("i.e"))
    .filter((url) => !url.includes("it.To"));
  const uniqueUrls = [...new Set(extractedUrls)];
  const internalLinks = uniqueUrls.filter((url) => url.includes("ghost-blog.ipxp.in"));
  const externalLinks = uniqueUrls.filter((url) => !url.includes("ghost-blog.ipxp.in"));
  return (
    <div>
      <Card raised style={{ marginBottom: "60px", padding: "20px" }}>
        <CardContent>
          <Grid container style={{ display: "flex" }} direction="column" alignItems="center">
            <Typography style={{ color: "#555", marginBottom: "10px" }}>
              Total number of Unique Links found from posts : {uniqueUrls && uniqueUrls.length}
            </Typography>
            <Typography style={{ color: "#555", marginBottom: "10px" }}>
              Total number of Internal Links found from posts : {internalLinks && internalLinks.length}
            </Typography>
            <Typography style={{ color: "#555", marginBottom: "10px" }}>
              Total number of External Links found from posts : {externalLinks && externalLinks.length}
            </Typography>
          </Grid>
        </CardContent>
      </Card>
      <LinksList links={internalLinks} title="Internal Links Found" />
      <LinksList links={externalLinks} title="External Links Found" />
    </div>
  );
};

const mapStateToProps = ({ data }) => {
  return {
    posts: data.posts,
  };
};
export default connect(mapStateToProps)(LinksPage);

// /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm
// /(?:(?:https?|ftp):\/\/)?[\w/\-?=%.]+\.[\w/\-&?=%.]+/g
