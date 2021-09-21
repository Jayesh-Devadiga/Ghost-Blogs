import { CardContent, Typography, Card } from "@material-ui/core";
import React from "react";
import LinkListItem from "./LinkListItem";

const LinksList = ({ title, links }) => {
  return (
    <Card raised style={{ marginBottom: "60px", padding: "20px", width: "100%" }}>
      <Typography style={{ textAlign: "center", marginTop: "10px", marginBottom: "10px" }}>{title}</Typography>
      {links && links.length > 0 ? (
        links.map((link) => <LinkListItem key={link} url={link} />)
      ) : (
        <Card raised>
          <CardContent>
            <Typography style={{ color: "#555", textAlign: "center" }}>No Links Found</Typography>
          </CardContent>
        </Card>
      )}
    </Card>
  );
};

export default LinksList;
