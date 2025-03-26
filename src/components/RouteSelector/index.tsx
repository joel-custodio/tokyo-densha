import { Box, Typography } from "@mui/material";
import React from "react";

export default function RouteSelector() {
  return (
    <Box
      sx={{
        width: "300px",
        height: "calc(100vh - 90px)",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#E1E1E1",
          borderRadius: "20px",
          margin: "20px",
          padding: "20px",
          height: "100%",
        }}
      >
        <Typography sx={{ fontWeight: 600 }}>Select Your Route</Typography>
      </Box>
    </Box>
  );
}
