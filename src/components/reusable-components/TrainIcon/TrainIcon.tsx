import { Box } from "@mui/material";
import React from "react";
import TrainDoor from "./components/TrainDoor";
import TrainWindow from "./components/TrainWindow";

interface TrainIconProps {
  color?: string;
}

export default function TrainIcon({ color = "#85B82D" }: TrainIconProps) {
  return (
    <Box
      sx={{
        width: "60px",
        height: "24px",
        backgroundColor: "#C1C1C1",
        borderRadius: "4px 4px 0 0",
      }}
    >
      <Box
        sx={{
          position: "relative",
          top: "2px",
          height: "2px",
          width: "100%",
          backgroundColor: color,
          borderRadius: "2px 2px 0 0",
        }}
      />
      <Box
        sx={{
          position: "relative",
          top: "17px",
          height: "2px",
          width: "100%",
          backgroundColor: color,
        }}
      />
      <Box
        sx={{
          display: "flex",
          gap: "2px",
          position: "relative",
          left: "3px",
          top: "2px",
        }}
      >
        <TrainDoor />
        <TrainWindow topPosition="4px" />
        <TrainWindow topPosition="4px" />
        <TrainDoor />
      </Box>
    </Box>
  );
}
