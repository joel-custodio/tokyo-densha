import React from "react";

interface HorizontalConnectorProps {
  startX: number;
  startY: number;
  length?: number;
  strokeColor: string;
  linePrefix: string;
  stationNumber: string;
  title: string;
}

export default function LineIcon({
  startX,
  startY,
  strokeColor,
  linePrefix,
  stationNumber,
  title,
}: HorizontalConnectorProps) {
  return (
    <g>
      <title>{title}</title>
      <rect
        x={startX}
        y={startY}
        width={40}
        height={40}
        fill="white"
        stroke={strokeColor}
        strokeWidth={2}
        rx={10}
      ></rect>
      <text
        x={startX + 15}
        y={startY + 15}
        color="red"
        style={{ fontSize: "11px" }}
      >
        {linePrefix}
      </text>
      <text
        x={startX + 11}
        y={startY + 33}
        style={{ fontSize: "16px" }}
        fontWeight={500}
      >
        {stationNumber}
      </text>
    </g>
  );
}
