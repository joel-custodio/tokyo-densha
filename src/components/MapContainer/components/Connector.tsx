import React from "react";

interface ConnectorProps {
  alignment: "horizontal" | "vertical";
  startX: number;
  startY: number;
  length?: number;
  color?: string;
  thickness?: number;
}

export default function Connector({
  alignment,
  startX,
  startY,
  length = 20,
  color = "black",
  thickness = 3,
}: ConnectorProps) {
  return (
    <line
      x1={startX}
      y1={startY}
      x2={alignment === "horizontal" ? startX + length : startX}
      y2={alignment === "horizontal" ? startY : startY + length}
      stroke={color}
      strokeWidth={thickness}
    />
  );
}
