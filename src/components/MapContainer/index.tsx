import React from "react";
import Connector from "./components/Connector";
import LineIcon from "./components/LineIcon";
import ArcConnector from "./components/ArcConnector";
import { getStations } from "../../api/stations.api";

export default function MapContainer() {
  getStations();
  return (
    <svg
      width="calc(100vw - 300px)"
      height="calc(100vh - 50px)"
      // viewBox="0 0 200 200"
    >
      <ArcConnector alignment="top-left" startX={300} startY={120} />
      <LineIcon
        startX={300}
        startY={100}
        strokeColor="#85B82D"
        linePrefix="JY"
        stationNumber="10"
        title="Komagome"
      />
      <Connector alignment="horizontal" startX={340} startY={120} />
      <LineIcon
        startX={360}
        startY={100}
        strokeColor="#85B82D"
        linePrefix="JY"
        stationNumber="09"
        title="Tabata"
      />
      <Connector alignment="horizontal" startX={400} startY={120} />
      <LineIcon
        startX={420}
        startY={100}
        strokeColor="#85B82D"
        linePrefix="JY"
        stationNumber="08"
        title="Nishi-Nippori"
      />
      <Connector alignment="horizontal" startX={460} startY={120} />

      <LineIcon
        startX={480}
        startY={100}
        strokeColor="#85B82D"
        linePrefix="JY"
        stationNumber="07"
        title="Nippori"
      />
      <Connector alignment="horizontal" startX={520} startY={120} />

      <LineIcon
        startX={540}
        startY={100}
        strokeColor="#85B82D"
        linePrefix="JY"
        stationNumber="06"
        title="Uguisudani"
      />
      <Connector alignment="horizontal" startX={580} startY={120} />
      <LineIcon
        startX={600}
        startY={100}
        strokeColor="#85B82D"
        linePrefix="JY"
        stationNumber="05"
        title="Ueno"
      />
      <ArcConnector alignment="top-right" startX={640} startY={120} />
    </svg>
  );
}
