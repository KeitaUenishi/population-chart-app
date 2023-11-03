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
import React, { useCallback, useEffect, useMemo } from "react";

import LineChartUi from "@/components/ui/chart/lineChart";
import { breakPoints, chartTitle } from "@/constants";
import { Dataset } from "@/types";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type ChartItem = {
  chartType: string;
  population: { [key: string]: Dataset[] };
  yearLabels: Set<string>;
};

const PopulationChart = ({ chartType, population, yearLabels }: ChartItem) => {
  const [windowWidth, setWindowWidth] = React.useState<number>(window.innerWidth);
  const handleResize = useCallback(() => {
    if (window.innerWidth <= breakPoints.tablet || window.innerWidth > breakPoints.tablet) {
      setWindowWidth(window.innerWidth);
    }
  }, [setWindowWidth]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const isMobileSize = windowWidth <= breakPoints.tablet;

  const dataset = population[chartType];
  const setType = chartTitle.find((item) => item.type === chartType);
  const options = useMemo(
    () => ({
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: !isMobileSize,
          position: "bottom" as const,
        },
        title: {
          display: true,
          text: setType?.title,
        },
        tooltip: {
          bodyFont: {
            size: 18,
          },
          padding: 10,
          titleFont: {
            size: 20,
          },
        },
      },
      responsive: true,
    }),
    [isMobileSize, setType],
  );

  const data = useMemo(
    () => ({
      datasets: dataset,
      labels: Array.from(yearLabels),
    }),
    [dataset, yearLabels],
  );

  return <LineChartUi ariaLabel="都道府県別人口推移のグラフ" data={data} options={options} />;
};

export default PopulationChart;
