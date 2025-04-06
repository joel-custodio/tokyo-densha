import React from "react";
import LineIcon from "./LineIcon";
import theme from "../../../../styles/theme";

interface HorizontalConnectorProps {
  startX: number;
  startY: number;
  stations: {
    linePrefix: string;
    stationNumber: string;
    title: string;
  }[];
  stationName: string;
}

export default function MultiLineStationIcon({
  startX,
  startY,
  stations,
  stationName,
}: HorizontalConnectorProps) {
  return (
    <g cursor={"pointer"}>
      <title>{stationName}</title>
      <rect
        x={startX - (10 + (stations.length - 1) * 20)}
        y={startY}
        width={40 * stations.length + (5 * stations.length + 5)}
        height={50}
        fill={theme.palette.background.tertiary}
        rx={8}
      />
      {stations.map((station, index) => (
        <LineIcon
          key={station.linePrefix}
          startX={startX - (5 + (stations.length - 1) * 20) + index * 45}
          startY={startY + 5}
          linePrefix={station.linePrefix}
          stationNumber={station.stationNumber}
          title={stationName}
        />
      ))}
    </g>
  );
}
