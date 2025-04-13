import { createTheme } from "@mui/material/styles";
import semantics from "./semantics";

const theme = {
  palette: {
    primary: {
      main: semantics.colors.primary,
    },
    secondary: {
      main: semantics.colors.secondary,
    },
    background: {
      primary: semantics.colors.background,
      secondary: semantics.colors.green.primary,
      tertiary: semantics.colors.grey.primary,
    },
    lines: {
      yamanote: semantics.colors.green.primary,
      chuo: semantics.colors.orange.primary,
      chuo_sobu: semantics.colors.yellow.primary,
      keihin_tohoku: semantics.colors.blue.primary,
      utsunomiya: semantics.colors.orange.secondary,
    },
    text: {
      primary: semantics.colors.text,
    },
  },
  spacing: (factor) => semantics.spacing.sm * factor,
  typography: {
    fontFamily: semantics.typography.fontFamily,
    fontSize: semantics.typography.fontSize,
  },
};

export default theme;
