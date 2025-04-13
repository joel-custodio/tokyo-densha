import { useState, useRef } from "react";
import { Box } from "@mui/material";
import YamanoteLine from "./lines/YamanoteLine";
import ChuoSobuLine from "./lines/ChuoSobuLine";
import ChuoLine from "./lines/ChuoLine";
import UtsunomiyaLine from "./lines/UtsunomiyaLine";

export default function MapContainer() {
  const [isPanning, setIsPanning] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const svgRef = useRef<SVGSVGElement | null>(null);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsPanning(true);
    // Capture the initial mouse position
    const startX = e.clientX - offset.x;
    const startY = e.clientY - offset.y;

    const onMouseMove = (e: MouseEvent) => {
      if (!isPanning) return;
      const newX = e.clientX - startX;
      const newY = e.clientY - startY;
      setOffset({ x: newX, y: newY });
    };

    const onMouseUp = () => {
      setIsPanning(false);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
  };
  return (
    <Box
      sx={{
        width: "calc(100vw - 300px)",
        height: "calc(100vh - 70px)",
        // overflow: "hidden",
        overflowX: "auto",
      }}
    >
      <svg
        width="100vw"
        height="calc(100vh - 50px)"
        viewBox={`${offset.x} 0 1500 1000`}
        preserveAspectRatio="xMidYMid meet"
        ref={svgRef}
        onMouseDown={onMouseDown}
      >
        <YamanoteLine />
        <ChuoLine />
        <ChuoSobuLine />
        <UtsunomiyaLine />
      </svg>
    </Box>
  );
}
