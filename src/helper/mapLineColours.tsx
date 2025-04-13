import theme from "../../styles/theme";

export default function mapLineColours(
  prefix: string,
  hexValue: boolean = false
) {
  // hex value is sometimes required as svg strokes do not accept dynamic theme values
  const lineToColorMap = {
    JY: hexValue ? "#85B82D" : theme.palette.lines.yamanote,
    JC: hexValue ? "#FF4500" : theme.palette.lines.chuo,
    JB: hexValue ? "#FCD405" : theme.palette.lines.chuo_sobu,
    JK: hexValue ? "#04BCFB" : theme.palette.lines.keihin_tohoku,
    JU: hexValue ? "#FFA401" : theme.palette.lines.utsunomiya,
    JT: hexValue ? "#FFA401" : theme.palette.lines.utsunomiya,
  };

  return lineToColorMap[prefix];
}
