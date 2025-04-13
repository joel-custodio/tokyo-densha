import React from "react";
import { useTranslation } from "next-i18next";

interface HorizontalConnectorProps {
  startX: number;
  startY: number;
  title: string;
}

export default function StationLabel({
  startX,
  startY,
  title,
}: HorizontalConnectorProps) {
  const { t: tStations } = useTranslation("Stations");
  return (
    <g>
      <text
        x={startX + 11}
        y={startY + 33}
        style={{ fontSize: "16px", fontWeight: 600 }}
        fontWeight={500}
      >
        {tStations(title)}
      </text>
    </g>
  );
}
