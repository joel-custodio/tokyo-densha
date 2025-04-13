import React, { useMemo } from "react";
import mapLineColours from "../../../helper/mapLineColours";

interface ArcConnectorProps {
  alignment: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  radius?: number;
  startX: number;
  startY: number;
  color?: string;
  thickness?: number;
  linesPrefix: string[];
}

export default function ArcConnector({
  alignment,
  radius = 50,
  startX,
  startY,
  thickness = 3,
  linesPrefix,
}: ArcConnectorProps) {
  const positions = useMemo(() => {
    const adjustedStartX = alignment === "top-right" ? startX + radius : startX;
    const adjustedStartY = alignment === "top-right" ? startY + radius : startY;
    const endX =
      alignment === "top-left" || alignment === "top-right"
        ? adjustedStartX - radius
        : adjustedStartX + radius;
    const endY =
      alignment === "top-left" || alignment === "bottom-left"
        ? adjustedStartY + radius
        : adjustedStartY - radius;
    return { startX: adjustedStartX, startY: adjustedStartY, endX, endY };
  }, [alignment, startX, startY, radius]);

  return linesPrefix.map((trainLine, index) => (
    <path
      d={`
      M ${positions.startX + index * thickness} ${
        positions.startY + index * thickness
      }
      A ${radius + index * thickness} ${radius + index * thickness} 0 0 0 ${
        positions.endX + index * thickness
      } ${positions.endY + index * thickness}`}
      fill="none"
      stroke={mapLineColours(trainLine, true)}
      stroke-width={thickness}
    />
  ));
}
