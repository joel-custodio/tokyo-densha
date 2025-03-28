import React from "react";
import { Button, Typography } from "@mui/material";

interface CancelButtonProps {
  handleReset: () => void;
  label?: string;
  disabled?: boolean;
}

export default function CancelButton({
  handleReset,
  label = "Cancel",
  disabled,
}: CancelButtonProps) {
  return (
    <Button
      onClick={handleReset}
      disabled={disabled}
      sx={{ width: "fit-content", textTransform: "none", borderRadius: "8px" }}
    >
      <Typography
        sx={{
          fontSize: "14px",
          color: disabled ? "#CB242450" : "#CB2424",
        }}
      >
        {label}
      </Typography>
    </Button>
  );
}
