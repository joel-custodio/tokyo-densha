import React from "react";
import mapLineColours from "../../../helper/mapLineColours";

interface ConnectorProps {
  alignment: "horizontal" | "vertical";
  startX: number;
  startY: number;
  length?: number;
  thickness?: number;
  linesPrefix?: string[];
}

export default function Connector({
  alignment,
  startX,
  startY,
  length = 20,
  thickness = 3,
  linesPrefix,
}: ConnectorProps) {
  return linesPrefix.map((trainLine, index) => (
    <line
      x1={alignment === "horizontal" ? startX : startX + index * 3}
      y1={alignment === "horizontal" ? startY + index * 3 : startY}
      x2={alignment === "horizontal" ? startX + length : startX + index * 3}
      y2={alignment === "horizontal" ? startY + index * 3 : startY + length}
      stroke={mapLineColours(trainLine, true)}
      strokeWidth={thickness}
    />
  ));
}
