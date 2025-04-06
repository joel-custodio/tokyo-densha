import React from "react";
import Connector from "./components/Connector";
import LineIcon from "./components/LineIcon";
import ArcConnector from "./components/ArcConnector";
import MultiLineStationIcon from "./components/MultiLineStationIcon";

export default function MapContainer() {
  return (
    <svg
      width="calc(100vw - 300px)"
      height="calc(100vh - 50px)"
      // viewBox="0 0 200 200"
    >
      <ArcConnector alignment="bottom-right" startX={640} startY={740} />
      <LineIcon
        startX={600}
        startY={720}
        linePrefix="JY"
        stationNumber="30"
        title="Yūrakuchō"
      />
      <Connector alignment="horizontal" startX={580} startY={740} />
      <LineIcon
        startX={540}
        startY={720}
        linePrefix="JY"
        stationNumber="29"
        title="Shimbashi"
      />
      <Connector alignment="horizontal" startX={520} startY={740} />
      <LineIcon
        startX={480}
        startY={720}
        linePrefix="JY"
        stationNumber="28"
        title="Hamamatsuchō"
      />
      <Connector alignment="horizontal" startX={460} startY={740} />
      <LineIcon
        startX={420}
        startY={720}
        linePrefix="JY"
        stationNumber="27"
        title="Tamachi"
      />
      <Connector alignment="horizontal" startX={400} startY={740} />
      <LineIcon
        startX={360}
        startY={720}
        linePrefix="JY"
        stationNumber="26"
        title="Takanawa Gateway"
      />
      <Connector alignment="horizontal" startX={340} startY={740} />
      <LineIcon
        startX={300}
        startY={720}
        linePrefix="JY"
        stationNumber="25"
        title="Shinagawa"
      />
      <ArcConnector alignment="bottom-left" startX={250} startY={690} />
      <LineIcon
        startX={230}
        startY={650}
        linePrefix="JY"
        stationNumber="24"
        title="Ōsaki"
      />
      <Connector alignment="vertical" startX={250} startY={630} />
      <LineIcon
        startX={230}
        startY={590}
        linePrefix="JY"
        stationNumber="23"
        title="Gotanda"
      />
      <Connector alignment="vertical" startX={250} startY={570} />
      <LineIcon
        startX={230}
        startY={530}
        linePrefix="JY"
        stationNumber="22"
        title="Meguro"
      />
      <Connector alignment="vertical" startX={250} startY={510} />
      <LineIcon
        startX={230}
        startY={470}
        linePrefix="JY"
        stationNumber="21"
        title="Ebisu"
      />
      <Connector alignment="vertical" startX={250} startY={450} />
      <LineIcon
        startX={230}
        startY={410}
        linePrefix="JY"
        stationNumber="20"
        title="Shibuya"
      />
      <Connector alignment="vertical" startX={250} startY={390} />
      <LineIcon
        startX={230}
        startY={350}
        linePrefix="JY"
        stationNumber="19"
        title="Harajuku"
      />
      <Connector alignment="vertical" startX={250} startY={330} />
      <LineIcon
        startX={230}
        startY={290}
        linePrefix="JY"
        stationNumber="18"
        title="Yoyogi"
      />
      <Connector alignment="vertical" startX={250} startY={270} />
      <LineIcon
        startX={230}
        startY={230}
        linePrefix="JY"
        stationNumber="17"
        title="Shinjuku"
      />
      <Connector alignment="vertical" startX={250} startY={210} />
      <LineIcon
        startX={230}
        startY={170}
        linePrefix="JY"
        stationNumber="16"
        title="Shin-Ōkubo"
      />
      <ArcConnector alignment="top-left" startX={300} startY={120} />
      <LineIcon
        startX={300}
        startY={100}
        linePrefix="JY"
        stationNumber="15"
        title="Takadanobaba"
      />
      <Connector alignment="horizontal" startX={340} startY={120} />
      <LineIcon
        startX={360}
        startY={100}
        linePrefix="JY"
        stationNumber="14"
        title="Mejiro"
      />
      <Connector alignment="horizontal" startX={400} startY={120} />
      <LineIcon
        startX={420}
        startY={100}
        linePrefix="JY"
        stationNumber="13"
        title="Ikebukuro"
      />
      <Connector alignment="horizontal" startX={460} startY={120} />

      <LineIcon
        startX={480}
        startY={100}
        linePrefix="JY"
        stationNumber="12"
        title="Ōtsuka"
      />
      <Connector alignment="horizontal" startX={520} startY={120} />

      <LineIcon
        startX={540}
        startY={100}
        linePrefix="JY"
        stationNumber="11"
        title="Sugamo"
      />
      <Connector alignment="horizontal" startX={580} startY={120} />
      <LineIcon
        startX={600}
        startY={100}
        linePrefix="JY"
        stationNumber="10"
        title="Komagome"
      />
      <ArcConnector alignment="top-right" startX={640} startY={120} />
      <LineIcon
        startX={670}
        startY={170}
        linePrefix="JY"
        stationNumber="09"
        title="Tabata"
      />
      <Connector alignment="vertical" startX={690} startY={210} />
      <LineIcon
        startX={670}
        startY={230}
        linePrefix="JY"
        stationNumber="08"
        title="Nishi-Nippori"
      />
      <Connector alignment="vertical" startX={690} startY={270} />
      <LineIcon
        startX={670}
        startY={290}
        linePrefix="JY"
        stationNumber="07"
        title="Nippori"
      />
      <Connector alignment="vertical" startX={690} startY={330} />
      <LineIcon
        startX={670}
        startY={350}
        linePrefix="JY"
        stationNumber="06"
        title="Uguisudani"
      />
      <Connector alignment="vertical" startX={690} startY={390} />
      <LineIcon
        startX={670}
        startY={410}
        linePrefix="JY"
        stationNumber="05"
        title="Ueno"
      />
      <Connector alignment="vertical" startX={690} startY={450} />
      <LineIcon
        startX={670}
        startY={470}
        linePrefix="JY"
        stationNumber="04"
        title="Okachimachi"
      />
      <Connector alignment="vertical" startX={690} startY={510} />
      <LineIcon
        startX={670}
        startY={530}
        linePrefix="JY"
        stationNumber="03"
        title="Akihabara"
      />
      <Connector alignment="vertical" startX={690} startY={570} />
      <LineIcon
        startX={670}
        startY={590}
        linePrefix="JY"
        stationNumber="02"
        title="Kanda"
      />
      <Connector alignment="vertical" startX={690} startY={630} />
      <MultiLineStationIcon
        startX={670}
        startY={650}
        stationName="Tokyo"
        stations={[
          {
            linePrefix: "JY",
            stationNumber: "01",
            title: "Tokyo",
          },
          {
            linePrefix: "JC",
            stationNumber: "01",
            title: "Tokyo",
          },
        ]}
      />
    </svg>
  );
}
