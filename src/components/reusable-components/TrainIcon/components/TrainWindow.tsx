import { Box } from "@mui/material";
import React from "react";

interface TrainWindowProps {
  topPosition?: string;
}

export default function TrainWindow({ topPosition = "0px" }: TrainWindowProps) {
  return (
    <Box
      sx={{
        position: "relative",
        top: topPosition,
        height: "6px",
        width: "12px",
        backgroundColor: "#779995",
        borderRadius: "1px",
      }}
    />
  );
}
