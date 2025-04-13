import React from "react";
import MultiLineStationIcon from "../components/MultiLineStationIcon";
import Connector from "../components/Connector";
import LineIcon from "../components/LineIcon";
import ArcConnector from "../components/ArcConnector";

export default function ChuoLine() {
  return (
    <>
      <Connector
        alignment="horizontal"
        startX={320}
        startY={255}
        length={125}
        linesPrefix={["JC"]}
      />
      <ArcConnector
        alignment="top-right"
        startX={495}
        startY={255}
        linesPrefix={["JC"]}
        radius={80}
      />
      <Connector
        alignment="vertical"
        startX={575}
        startY={335}
        length={190}
        linesPrefix={["JC"]}
      />
      <ArcConnector
        alignment="bottom-left"
        startX={575}
        startY={570}
        linesPrefix={["JC"]}
        radius={45}
      />
    </>
  );
}
