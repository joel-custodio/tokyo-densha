import React from "react";
import MultiLineStationIcon from "../components/MultiLineStationIcon";
import Connector from "../components/Connector";
import LineIcon from "../components/LineIcon";
import ArcConnector from "../components/ArcConnector";
import StationLabel from "../components/StationLabel";

export default function YamanoteLine() {
  return (
    <>
      <ArcConnector
        alignment="bottom-right"
        startX={640}
        startY={740}
        linesPrefix={["JY", "JK"]}
      />
      <MultiLineStationIcon
        alignment="vertical"
        startX={600}
        startY={745}
        stationName="Yūrakuchō"
        stations={[
          {
            linePrefix: "JY",
            stationNumber: "30",
          },
          {
            linePrefix: "JK",
            stationNumber: "25",
          },
        ]}
      />
      <Connector
        alignment="horizontal"
        startX={580}
        startY={740}
        linesPrefix={["JY", "JK"]}
      />
      <MultiLineStationIcon
        alignment="vertical"
        startX={540}
        startY={745}
        stationName="Shimbashi"
        stations={[
          {
            linePrefix: "JY",
            stationNumber: "29",
          },
          {
            linePrefix: "JK",
            stationNumber: "24",
          },
        ]}
      />
      <Connector
        alignment="horizontal"
        startX={520}
        startY={740}
        linesPrefix={["JY", "JK"]}
      />
      <MultiLineStationIcon
        alignment="vertical"
        startX={480}
        startY={745}
        stationName="Hamamatsuchō"
        stations={[
          {
            linePrefix: "JY",
            stationNumber: "28",
          },
          {
            linePrefix: "JK",
            stationNumber: "23",
          },
        ]}
      />
      <Connector
        alignment="horizontal"
        startX={460}
        startY={740}
        linesPrefix={["JY", "JK"]}
      />
      <MultiLineStationIcon
        alignment="vertical"
        startX={420}
        startY={745}
        stationName="Tamachi"
        stations={[
          {
            linePrefix: "JY",
            stationNumber: "27",
          },
          {
            linePrefix: "JK",
            stationNumber: "22",
          },
        ]}
      />
      <Connector
        alignment="horizontal"
        startX={400}
        startY={740}
        linesPrefix={["JY", "JK"]}
      />
      <MultiLineStationIcon
        alignment="vertical"
        startX={360}
        startY={745}
        stationName="Takanawa Gateway"
        stations={[
          {
            linePrefix: "JY",
            stationNumber: "26",
          },
          {
            linePrefix: "JK",
            stationNumber: "21",
          },
        ]}
      />
      <Connector
        alignment="horizontal"
        startX={340}
        startY={740}
        linesPrefix={["JY", "JK"]}
      />
      <MultiLineStationIcon
        alignment="vertical"
        startX={300}
        startY={745}
        stationName="Shinagawa"
        stations={[
          {
            linePrefix: "JY",
            stationNumber: "25",
          },
          {
            linePrefix: "JK",
            stationNumber: "20",
          },
        ]}
      />
      <ArcConnector
        alignment="bottom-left"
        startX={250}
        startY={690}
        linesPrefix={["JY"]}
      />
      <LineIcon
        startX={230}
        startY={650}
        linePrefix="JY"
        stationNumber="24"
        title="Ōsaki"
      />
      <Connector
        alignment="vertical"
        startX={250}
        startY={630}
        linesPrefix={["JY"]}
      />
      <LineIcon
        startX={230}
        startY={590}
        linePrefix="JY"
        stationNumber="23"
        title="Gotanda"
      />
      <Connector
        alignment="vertical"
        startX={250}
        startY={570}
        linesPrefix={["JY"]}
      />
      <LineIcon
        startX={230}
        startY={530}
        linePrefix="JY"
        stationNumber="22"
        title="Meguro"
      />
      <Connector
        alignment="vertical"
        startX={250}
        startY={510}
        linesPrefix={["JY"]}
      />
      <LineIcon
        startX={230}
        startY={470}
        linePrefix="JY"
        stationNumber="21"
        title="Ebisu"
      />
      <Connector
        alignment="vertical"
        startX={250}
        startY={450}
        linesPrefix={["JY"]}
      />
      <LineIcon
        startX={230}
        startY={410}
        linePrefix="JY"
        stationNumber="20"
        title="Shibuya"
      />
      <Connector
        alignment="vertical"
        startX={250}
        startY={390}
        linesPrefix={["JY"]}
      />
      <LineIcon
        startX={230}
        startY={350}
        linePrefix="JY"
        stationNumber="19"
        title="Harajuku"
      />
      <Connector
        alignment="vertical"
        startX={250}
        startY={330}
        linesPrefix={["JY"]}
      />
      <Connector
        alignment="vertical"
        startX={250}
        startY={270}
        linesPrefix={["JY", "JB"]}
      />
      <MultiLineStationIcon
        startX={230}
        startY={285}
        stationName="Yoyogi"
        stations={[
          {
            linePrefix: "JY",
            stationNumber: "18",
          },
          {
            linePrefix: "JB",
            stationNumber: "11",
          },
        ]}
      />
      <Connector
        alignment="vertical"
        startX={250}
        startY={210}
        linesPrefix={["JY"]}
      />
      <StationLabel startX={315} startY={215} title="Shinjuku" />
      <MultiLineStationIcon
        startX={230}
        startY={225}
        stationName="Shinjuku"
        stations={[
          {
            linePrefix: "JY",
            stationNumber: "17",
          },
          {
            linePrefix: "JB",
            stationNumber: "10",
          },
          {
            linePrefix: "JC",
            stationNumber: "05",
          },
        ]}
      />
      <LineIcon
        startX={230}
        startY={170}
        linePrefix="JY"
        stationNumber="16"
        title="Shin-Ōkubo"
      />
      <ArcConnector
        alignment="top-left"
        startX={300}
        startY={120}
        linesPrefix={["JY"]}
      />
      <LineIcon
        startX={300}
        startY={100}
        linePrefix="JY"
        stationNumber="15"
        title="Takadanobaba"
      />
      <Connector
        alignment="horizontal"
        startX={340}
        startY={120}
        linesPrefix={["JY"]}
      />
      <LineIcon
        startX={360}
        startY={100}
        linePrefix="JY"
        stationNumber="14"
        title="Mejiro"
      />
      <Connector
        alignment="horizontal"
        startX={400}
        startY={120}
        linesPrefix={["JY"]}
      />
      <LineIcon
        startX={420}
        startY={100}
        linePrefix="JY"
        stationNumber="13"
        title="Ikebukuro"
      />
      <Connector
        alignment="horizontal"
        startX={460}
        startY={120}
        linesPrefix={["JY"]}
      />

      <LineIcon
        startX={480}
        startY={100}
        linePrefix="JY"
        stationNumber="12"
        title="Ōtsuka"
      />
      <Connector
        alignment="horizontal"
        startX={520}
        startY={120}
        linesPrefix={["JY"]}
      />

      <LineIcon
        startX={540}
        startY={100}
        linePrefix="JY"
        stationNumber="11"
        title="Sugamo"
      />
      <Connector
        alignment="horizontal"
        startX={580}
        startY={120}
        linesPrefix={["JY"]}
      />
      <LineIcon
        startX={600}
        startY={100}
        linePrefix="JY"
        stationNumber="10"
        title="Komagome"
      />
      <ArcConnector
        alignment="top-right"
        startX={640}
        startY={120}
        linesPrefix={["JY"]}
      />
      <MultiLineStationIcon
        startX={670}
        startY={160}
        stationName="Tabata"
        stations={[
          {
            linePrefix: "JY",
            stationNumber: "09",
          },
          { linePrefix: "JK", stationNumber: "34" },
        ]}
      />
      <Connector
        alignment="vertical"
        startX={690}
        startY={210}
        linesPrefix={["JY", "JK"]}
      />
      <MultiLineStationIcon
        startX={670}
        startY={220}
        stationName="Nishi-Nippori"
        stations={[
          {
            linePrefix: "JY",
            stationNumber: "08",
          },
          { linePrefix: "JK", stationNumber: "33" },
        ]}
      />
      <Connector
        alignment="vertical"
        startX={690}
        startY={270}
        linesPrefix={["JY", "JK"]}
      />
      <MultiLineStationIcon
        startX={670}
        startY={280}
        stationName="Nippori"
        stations={[
          {
            linePrefix: "JY",
            stationNumber: "07",
          },
          { linePrefix: "JK", stationNumber: "32" },
        ]}
      />
      <Connector
        alignment="vertical"
        startX={690}
        startY={330}
        linesPrefix={["JY", "JK"]}
      />
      <MultiLineStationIcon
        startX={670}
        startY={340}
        stationName="Uguisudani"
        stations={[
          {
            linePrefix: "JY",
            stationNumber: "06",
          },
          { linePrefix: "JK", stationNumber: "31" },
        ]}
      />
      <Connector
        alignment="vertical"
        startX={690}
        startY={390}
        linesPrefix={["JY", "JK"]}
      />
      <MultiLineStationIcon
        startX={670}
        startY={400}
        stationName="Ueno"
        stations={[
          {
            linePrefix: "JY",
            stationNumber: "05",
          },
          { linePrefix: "JK", stationNumber: "30" },
          { linePrefix: "JU", stationNumber: "02" },
        ]}
      />
      <Connector
        alignment="vertical"
        startX={690}
        startY={450}
        linesPrefix={["JY", "JK"]}
      />
      <Connector
        alignment="vertical"
        startX={690}
        startY={510}
        linesPrefix={["JY", "JK"]}
      />
      <MultiLineStationIcon
        startX={670}
        startY={462.5}
        stationName="Okachimachi"
        stations={[
          {
            linePrefix: "JY",
            stationNumber: "04",
          },
          { linePrefix: "JK", stationNumber: "29" },
        ]}
      />
      <Connector
        alignment="vertical"
        startX={690}
        startY={570}
        linesPrefix={["JY", "JK"]}
      />
      <MultiLineStationIcon
        startX={670}
        startY={525}
        stationName="Akihabara"
        stations={[
          {
            linePrefix: "JY",
            stationNumber: "03",
          },
          {
            linePrefix: "JB",
            stationNumber: "19",
          },
          { linePrefix: "JK", stationNumber: "28" },
        ]}
      />
      <Connector
        alignment="vertical"
        startX={690}
        startY={630}
        linesPrefix={["JY", "JK", "JC"]}
      />
      <MultiLineStationIcon
        startX={670}
        startY={587.5}
        stationName="Kanda"
        stations={[
          {
            linePrefix: "JY",
            stationNumber: "02",
          },
          {
            linePrefix: "JC",
            stationNumber: "02",
          },
          { linePrefix: "JK", stationNumber: "27" },
        ]}
      />
      <MultiLineStationIcon
        startX={670}
        startY={650}
        stationName="Tokyo"
        stations={[
          {
            linePrefix: "JY",
            stationNumber: "01",
          },
          {
            linePrefix: "JC",
            stationNumber: "01",
          },
          {
            linePrefix: "JK",
            stationNumber: "26",
          },
          { linePrefix: "JU", stationNumber: "01" },
        ]}
      />
      <StationLabel startX={555} startY={645} title="Tokyo" />
    </>
  );
}
