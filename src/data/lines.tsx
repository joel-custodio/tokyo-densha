interface ILine {
  name: string;
  stations: { lineName: string; lineCode: string; stationNumber: string }[];
}

export const lineData: ILine[] = [
  {
    name: "Yamanote Line",
    stations: [
      { lineName: "Yamanote Line", lineCode: "JY", stationNumber: "01" },
    ],
  },
];
