import React, { useEffect } from "react";

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
import { Line } from "react-chartjs-2";

import { breakPoints, chartTitle } from "@/constants";
import styles from "@/components/ui/chart/lineChart.module.css";
import { Dataset } from "@/types";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type ChartItem = {
  chartType: string;
  population: { [key: string]: Dataset[] };
  yearLabels: Set<string>;
};

const LineChartUi = ({ chartType, population, yearLabels }: ChartItem) => {
  const [windowWidth, setWindowWidth] = React.useState<number>(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const isMobileSize = windowWidth <= breakPoints.tablet;

  const dataset = population[chartType];
  const setType = chartTitle.find((item) => item.type === chartType);
  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: !isMobileSize,
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
  return (
    <section className={styles.chartContainer}>
      <Line data={data} options={options} />
    </section>
  );
};

export default LineChartUi;
