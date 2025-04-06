import React from "react";
import theme from "../../styles/theme";

export default function mapLineColours(prefix) {
  const lineToColorMap = {
    JY: theme.palette.lines.yamanote,
    JC: theme.palette.lines.chuo,
    JB: theme.palette.lines.chuo_sobu,
  };

  return lineToColorMap[prefix];
}
