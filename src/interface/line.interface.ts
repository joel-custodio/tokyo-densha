export interface ILine {
  station_id: number;
  name: string;
  line_ids: number[];
}

export const TRAIN_LINE = {
  YAMANOTE: "Yamanote",
  CHUO_SOBU: "Chuo Sobu",
  SOBU: "Sobu",
};
