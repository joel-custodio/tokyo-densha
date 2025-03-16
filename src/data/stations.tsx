interface IStation {
  name: string;
  lines: { lineName: string; lineCode: string; stationNumber: string }[];
}

export const stationData: IStation[] = [
  {
    name: "Tokyo Station",
    lines: [{ lineName: "Yamanote Line", lineCode: "JY", stationNumber: "01" }],
  },
];
