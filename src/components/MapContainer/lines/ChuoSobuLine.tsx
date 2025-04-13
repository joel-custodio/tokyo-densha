import React from "react";
import MultiLineStationIcon from "../components/MultiLineStationIcon";
import Connector from "../components/Connector";
import LineIcon from "../components/LineIcon";
import ArcConnector from "../components/ArcConnector";
import { TRAIN_LINE } from "../../../interface/line.interface";

export default function ChuoSobuLine() {
  return (
    <>
      <Connector
        alignment="horizontal"
        startX={295}
        startY={310}
        length={40}
        linesPrefix={["JB"]}
      />
      <LineIcon
        startX={335}
        startY={290}
        linePrefix="JB"
        stationNumber="12"
        title="Sendagaya"
      />
      <Connector
        alignment="horizontal"
        startX={375}
        startY={310}
        linesPrefix={["JB"]}
      />
      <LineIcon
        startX={395}
        startY={290}
        linePrefix="JB"
        stationNumber="13"
        title="Shinanomachi"
      />
      <Connector
        alignment="horizontal"
        startX={435}
        startY={310}
        linesPrefix={["JB"]}
      />
      <MultiLineStationIcon
        alignment="vertical"
        startX={445}
        startY={270}
        stationName="Yotsuya"
        stations={[
          { linePrefix: "JC", stationNumber: "04" },
          {
            linePrefix: "JB",
            stationNumber: "14",
          },
        ]}
      />
      <ArcConnector
        alignment="top-right"
        startX={495}
        startY={310}
        radius={35}
        linesPrefix={["JB"]}
      />
      <LineIcon
        startX={510}
        startY={345}
        linePrefix="JB"
        stationNumber="15"
        title="Ichigaya"
      />
      <Connector
        alignment="vertical"
        startX={530}
        startY={385}
        linesPrefix={["JB"]}
      />
      <LineIcon
        startX={510}
        startY={405}
        linePrefix="JB"
        stationNumber="16"
        title="Iidabashi"
      />
      <Connector
        alignment="vertical"
        startX={530}
        startY={445}
        linesPrefix={["JB"]}
      />
      <LineIcon
        startX={510}
        startY={465}
        linePrefix="JB"
        stationNumber="17"
        title="Suidōbashi"
      />
      <Connector
        alignment="vertical"
        startX={530}
        startY={505}
        linesPrefix={["JB"]}
      />
      <MultiLineStationIcon
        startX={535}
        startY={525}
        stationName="Ochanomizu"
        stations={[
          {
            linePrefix: "JB",
            stationNumber: "18",
          },
          {
            linePrefix: "JC",
            stationNumber: "03",
          },
        ]}
      />
      <Connector
        alignment="horizontal"
        startX={600}
        startY={550}
        linesPrefix={["JB"]}
      />
      <LineIcon
        startX={820}
        startY={530}
        linePrefix="JB"
        stationNumber="20"
        title="Asakusabashi"
      />
      <Connector
        alignment="horizontal"
        startX={760}
        startY={550}
        length={60}
        linesPrefix={["JB"]}
      />
    </>
  );
}
