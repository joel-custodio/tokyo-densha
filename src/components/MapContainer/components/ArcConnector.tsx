import React, { useMemo } from "react";

interface ArcConnectorProps {
  alignment: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  radius?: number;
  startX: number;
  startY: number;
  color?: string;
  thickness?: number;
}

export default function ArcConnector({
  alignment,
  radius = 50,
  startX,
  startY,
  color = "black",
  thickness = 3,
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

  console.log(positions);

  return (
    <path
      d={`
      M ${positions.startX} ${positions.startY}
      A ${radius} ${radius} 0 0 0 ${positions.endX} ${positions.endY}`}
      fill="none"
      stroke={color}
      stroke-width={thickness}
    />
  );
}
