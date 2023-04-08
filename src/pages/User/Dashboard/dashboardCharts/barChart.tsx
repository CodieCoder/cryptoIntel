import React, { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { ICoin } from "Constants";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Bitcoin 7 days chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const max = 100000;
const min = 10000;

export const data = {
  labels,
  datasets: [
    {
      label: "Bitcoin",
      data: labels.map(() => Math.random() * (max - min) + min),
      backgroundColor: "rgba(55, 199, 132, 0.5)",
    },
  ],
};

interface IBarChart {
  coinData: ICoin;
}

const BarChart: React.FC<any> = ({ coinData }) => {
  useEffect(() => {
    console.log("Testing CoinData", coinData);
  }, []);
  return (
    <div>
      <Bar options={options} data={coinData} />;
    </div>
  );
};

export default BarChart;
