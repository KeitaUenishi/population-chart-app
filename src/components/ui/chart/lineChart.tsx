import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Dataset } from "@/types";
import { chartTitle } from "@/constants";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type ChartItem = {
  chartType: string;
  population: { [key: string]: Dataset[] };
  yearLabels: Set<string>;
};

const LineChartUi = ({ chartType, population, yearLabels }: ChartItem) => {
  const dataset = population[chartType];
  const setType = chartTitle.find((item) => item.type === chartType);
  const options = {
    plugins: {
      legend: {
        position: "right" as const,
      },
      title: {
        display: true,
        text: setType?.title,
      },
    },
    responsive: true,
  };

  const data = {
    datasets: dataset,
    labels: Array.from(yearLabels),
  };
  return <Line data={data} options={options} />;
};

export default LineChartUi;
