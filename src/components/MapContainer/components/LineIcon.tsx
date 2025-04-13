import React from "react";
import mapLineColours from "../../../helper/mapLineColours";
import { useTranslation } from "next-i18next";

interface HorizontalConnectorProps {
  startX: number;
  startY: number;
  length?: number;
  linePrefix: string;
  stationNumber: string;
  title: string;
}

export default function LineIcon({
  startX,
  startY,
  linePrefix,
  stationNumber,
  title,
}: HorizontalConnectorProps) {
  const { t: tStations } = useTranslation("Stations");

  return (
    <g>
      <title>{tStations(title)}</title>
      <rect
        x={startX}
        y={startY}
        width={40}
        height={40}
        fill="white"
        stroke={mapLineColours(linePrefix)}
        strokeWidth={2}
        rx={10}
      ></rect>
      <text x={startX + 12.5} y={startY + 15} style={{ fontSize: "11px" }}>
        {linePrefix}
      </text>
      <text
        x={startX + 11}
        y={startY + 33}
        style={{ fontSize: "16px", fontWeight: 600 }}
        fontWeight={500}
      >
        {stationNumber}
      </text>
    </g>
  );
}
