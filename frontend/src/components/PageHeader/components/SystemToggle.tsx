import { Box } from "@mui/material";
import React from "react";
import LanguageToggle from "./LanguageToggle";

export default function SystemToggle() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <LanguageToggle />
    </Box>
  );
}
