import React from "react";
import { TrendingUp } from "@material-ui/icons";
import { Box } from "@material-ui/core";

const DataCard = ({ info }) => {
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 1,
          p: 2,
          minWidth: 350,
          minHeight: 150,
          margin: 10,
        }}
      >
        <Box sx={{ color: "text.secondary", textAlign: "center" }}>{info}</Box>
        <Box sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium", textAlign: "center", padding: 20 }}>98.3 K</Box>
      </Box>
    </div>
  );
};

export default DataCard;
