import React from "react";
import { Box } from "@material-ui/core";

const DataCard = ({ info, count }) => {
  return (
    <div>
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          boxShadow: 1,
          borderRadius: 1,
          p: 2,
          minWidth: 300,
          minHeight: 150,
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <Box sx={{ color: "text.secondary", textAlign: "center" }}>{info}</Box>
        <Box sx={{ color: "text.primary", fontSize: 34, fontWeight: "medium", textAlign: "center", padding: 20 }}>{count}</Box>
      </Box>
    </div>
  );
};

export default DataCard;
