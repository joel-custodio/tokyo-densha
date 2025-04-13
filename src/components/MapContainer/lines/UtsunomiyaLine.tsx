import React from "react";
import MultiLineStationIcon from "../components/MultiLineStationIcon";
import Connector from "../components/Connector";
import LineIcon from "../components/LineIcon";
import ArcConnector from "../components/ArcConnector";

export default function UtsunomiyaLine() {
  return (
    <>
      <ArcConnector
        alignment="top-right"
        startX={760}
        startY={425}
        linesPrefix={["JU"]}
        radius={10}
      />
      <Connector
        alignment="vertical"
        startX={770}
        startY={435}
        length={215}
        linesPrefix={["JU"]}
      />
    </>
  );
}
