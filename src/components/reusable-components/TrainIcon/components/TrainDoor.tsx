import { Box } from "@mui/material";
import React from "react";

interface TrainDoorProps {
  topPosition?: string;
}

export default function TrainDoor({ topPosition = "0px" }: TrainDoorProps) {
  return (
    <Box
      sx={{
        position: "relative",
        top: topPosition,
        width: "12px",
        height: "17px",
        backgroundColor: "#E1E1E1",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Box
        sx={{
          position: "relative",
          top: "4px",
          width: "3px",
          height: "6px",
          backgroundColor: "#779995",
          borderRadius: "1px",
        }}
      />
      <Box sx={{ width: "1px", height: "100%", background: "#B1B1B1" }} />
      <Box
        sx={{
          position: "relative",
          top: "4px",
          width: "3px",
          height: "6px",
          backgroundColor: "#779995",
          borderRadius: "1px",
        }}
      />
    </Box>
  );
}
