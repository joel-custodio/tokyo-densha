import React from "react";

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
  return (
    <g>
      <text
        x={startX + 11}
        y={startY + 33}
        style={{ fontSize: "16px", fontWeight: 600 }}
        fontWeight={500}
      >
        {title}
      </text>
    </g>
  );
}
