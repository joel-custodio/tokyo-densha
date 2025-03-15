import { Box, Menu, MenuItem, Typography } from "@mui/material";
import { useLanguageSettings } from "../../../providers/LanguageProvider";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { useRouter } from "next/router";

export default function LanguageToggle() {
  const { systemLanguage, supportedLanguages } = useLanguageSettings();
  const { t: tCommon } = useTranslation("Common");

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const router = useRouter();

  return (
    <>
      <Box
        sx={{
          width: "120px",
          backgroundColor: "white",
          padding: "4px",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={(e) => setAnchorEl(e.currentTarget)}
      >
        <Typography sx={{ color: "#5D5D5D", fontSize: "14px" }}>
          {tCommon(systemLanguage.name)}
        </Typography>
      </Box>

      <Menu
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => setAnchorEl(null)}
        sx={{ "&.MuiPaper-root": { padding: 0, top: "5px" } }}
        slotProps={{
          paper: {
            sx: {
              marginTop: "2px",
            },
          },
        }}
      >
        {supportedLanguages?.map((language) => {
          const isSelected = language.value === systemLanguage.value;
          return (
            <MenuItem
              onClick={() => {
                router.push("/", "/", { locale: language.value });
                setAnchorEl(null);
              }}
              key={language.value}
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "120px",
                fontSize: "14px",
                backgroundColor: isSelected ? "#85B82D50" : "auto",
              }}
            >
              {tCommon(language.name)}
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
}
