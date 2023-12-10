import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { ILinearChartData } from "./constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface ILineChart {
  coinData: ILinearChartData;
}

const LineChart: React.FC<ILineChart> = ({ coinData }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: false,
        // text: "7 days chart",
      },

      scales: {
        yAxes: [
          {
            display: false,
          },
        ],
      },
    },
    legend: {
      display: false,
    },
  };

  return (
    <div>
      <Line options={options} data={coinData} width={100} height={40} />
    </div>
  );
};

export default LineChart;
