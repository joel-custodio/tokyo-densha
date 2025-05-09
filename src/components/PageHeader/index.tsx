import { Box } from "@mui/material";
import React from "react";
import PageTitle from "./components/PageTitle";
import SystemToggle from "./components/SystemToggle";

export default function PageHeader() {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "50px",
        backgroundColor: "background.secondary",
        position: "sticky",
        display: "flex",
        alignItems: "center",
        padding: "0 16px",
        justifyContent: "space-between",
      }}
    >
      <PageTitle />
      <SystemToggle />
    </Box>
  );
}
