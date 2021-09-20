import React from "react";
import { connect } from "react-redux";

const LinksPage = ({ posts }) => {
  const postHHTMLArray = posts && posts.map((post) => post.html).join(" ");
  // console.log(postHHTMLArray.length);
  const geturl = /(?:(?:https?|ftp):\/\/)?[\w/\-?=%.]+\.[\w/\-&?=%.]+/gim;
  const extractedUrls = postHHTMLArray.match(geturl);
  console.log(extractedUrls);
  const uniqueUrls = [...new Set(extractedUrls)];
  // console.log(uniqueUrls);
  const internalLinks = uniqueUrls.filter((url) => url.includes("ghost-blog.ipxp.in"));
  const externalLinks = uniqueUrls
    .filter((url) => !url.includes("ghost-blog.ipxp.in"))
    .filter((url) => !url.includes("i.e."))
    .filter((url) => !url.includes("i.e"))
    .filter((url) => !url.includes("it.To"));
  console.log(internalLinks);
  console.log(externalLinks);

  return <div>LINKS</div>;
};

const mapStateToProps = ({ data }) => {
  return {
    posts: data.posts,
  };
};
export default connect(mapStateToProps)(LinksPage);

// /(?:(?:https?|ftp|file):\/\/|www\.|ftp\.)(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[-A-Z0-9+&@#\/%=~_|$?!:,.])*(?:\([-A-Z0-9+&@#\/%=~_|$?!:,.]*\)|[A-Z0-9+&@#\/%=~_|$])/igm
// /(?:(?:https?|ftp):\/\/)?[\w/\-?=%.]+\.[\w/\-&?=%.]+/g
