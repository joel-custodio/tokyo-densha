import { Box, Typography } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useStations } from "../../providers/StationProvider";
import CustomSelect from "../reusable-components/CustomSelect/CustomSelect";
import TrainIcon from "../reusable-components/TrainIcon/TrainIcon";
import CancelButton from "../reusable-components/CancelButton/CancelButton";

export default function RouteSelector() {
  const { allStations } = useStations();

  const mappedStationOptions = useMemo(
    () =>
      allStations.map((station) => {
        return { id: station.station_id, name: station.name };
      }),
    [allStations]
  );

  const [selected, setSelected] = useState({
    startStation: null,
    endStation: null,
  });

  const handleStartSelect = (value: number) => {
    setSelected((oldSelection) => {
      return { ...oldSelection, startStation: value };
    });
  };

  const handleEndSelect = (value: number) => {
    setSelected((oldSelection) => {
      return { ...oldSelection, endStation: value };
    });
  };

  const [isResetting, setIsResetting] = useState(false);

  const handleResetState = useCallback(
    (value: boolean) => setIsResetting(value),
    []
  );

  const handleReset = () => {
    setIsResetting(true);
    setSelected({ startStation: null, endStation: null });
  };

  return (
    <Box
      sx={{
        width: "300px",
        height: "calc(100vh - 90px)",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#F9F9F9",
          border: "2px solid #85B82D",
          borderRadius: "20px",
          margin: "20px",
          padding: "20px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <TrainIcon />
        <Typography sx={{ fontWeight: 600 }}>Select Your Route</Typography>
        <CustomSelect
          options={mappedStationOptions}
          placeholder="Start Point"
          disabledOptions={selected.endStation ? [selected.endStation] : []}
          handleState={handleStartSelect}
          isResetting={isResetting}
          handleResetState={handleResetState}
        />
        <CustomSelect
          options={mappedStationOptions}
          placeholder="Destination"
          disabledOptions={selected.startStation ? [selected.startStation] : []}
          handleState={handleEndSelect}
          isResetting={isResetting}
          handleResetState={handleResetState}
        />
        <CancelButton
          handleReset={handleReset}
          label="Reset"
          disabled={!selected.startStation && !selected.endStation}
        />
      </Box>
    </Box>
  );
}
