import { Button, Menu, MenuItem, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";

interface CustomSelectProps {
  placeholder?: string;
  options: { id: number; name: string }[];
  disabledOptions?: number[];
  handleState: (value: number) => void;
  isResetting?: boolean;
  handleResetState?: (value: boolean) => void;
}

export default function CustomSelect({
  placeholder = "",
  options,
  disabledOptions,
  handleState,
  isResetting,
  handleResetState,
}: CustomSelectProps) {
  const [value, setValue] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const handleSelect = (id: number) => {
    setValue(id);
    handleState(id);
    handleClose();
  };

  const selectedValue = useMemo(() => {
    if (!value) {
      return null;
    }
    return options.find((opt) => opt.id === value)?.name;
  }, [value, options]);

  useEffect(() => {
    if (isResetting && handleResetState) {
      setValue(null);
      handleResetState(false);
    }
  }, [isResetting, handleResetState]);

  return (
    <>
      <Button
        sx={{
          width: "100%",
          height: "32px",
          border: "1px solid black",
          justifyContent: "left",
          textTransform: "none",
        }}
        onClick={(e) => handleOpen(e)}
      >
        <Typography
          sx={{
            color: selectedValue ? "#000000" : "#5D5D5D",
            fontSize: "14px",
          }}
        >
          {selectedValue ?? placeholder}
        </Typography>
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        slotProps={{
          paper: {
            sx: {
              maxHeight: "300px",
              overflow: "auto",
              width: "216px",
            },
          },
        }}
      >
        {options.map((option) => {
          return (
            <MenuItem
              onClick={() => handleSelect(option.id)}
              value={option.id}
              disabled={disabledOptions && disabledOptions.includes(option.id)}
              sx={{
                backgroundColor: value === option.id ? "#F5F5F5" : "auto",
                fontSize: "14px",
              }}
            >
              {option.name}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}
