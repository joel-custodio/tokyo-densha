import React from "react";
import LineIcon from "./LineIcon";
import theme from "../../../../styles/theme";

interface HorizontalConnectorProps {
  startX: number;
  startY: number;
  stations: {
    linePrefix: string;
    stationNumber: string;
  }[];
  stationName: string;
  alignment?: "horizontal" | "vertical";
}

export default function MultiLineStationIcon({
  startX,
  startY,
  stations,
  stationName,
  alignment = "horizontal",
}: HorizontalConnectorProps) {
  return (
    <g cursor={"pointer"}>
      <title>{stationName}</title>
      <rect
        x={
          alignment === "horizontal"
            ? startX - (10 + (stations.length - 1) * 20)
            : startX
        }
        y={
          alignment === "horizontal"
            ? startY
            : startY - (10 + (stations.length - 1) * 20)
        }
        width={
          alignment === "horizontal"
            ? 40 * stations.length + (5 * stations.length + 5)
            : 50
        }
        height={
          alignment === "horizontal"
            ? 50
            : 40 * stations.length + (5 * stations.length + 5)
        }
        fill={theme.palette.background.tertiary}
        rx={8}
      />
      {stations.map((station, index) => (
        <LineIcon
          key={station.linePrefix}
          startX={
            alignment === "horizontal"
              ? startX - (5 + (stations.length - 1) * 20) + index * 45
              : startX + 5
          }
          startY={
            alignment === "horizontal"
              ? startY + 5
              : startY - (5 + (stations.length - 1) * 20) + index * 45
          }
          linePrefix={station.linePrefix}
          stationNumber={station.stationNumber}
          title={stationName}
        />
      ))}
    </g>
  );
}
