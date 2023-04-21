export interface ILinearChartData {
  labels: string[];
  datasets: {
    label: any;
    data: number[];
    borderColor?: string;
    backgroundColor?: string;
    fill?: boolean;
    tension?: number;
  }[];
}

export interface IChartBox {
  title: string;
  data: any;
}

export enum ChartTypeEnum {
  line = "lineChart",
  advanced = "advance",
}
