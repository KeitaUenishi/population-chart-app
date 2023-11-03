import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";
import React, { memo } from "react";
import { Line } from "react-chartjs-2";

import styles from "@/components/ui/chart/lineChart.module.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type Props = {
  ariaLabel: string;
  data: ChartData<"line">;
  options: ChartOptions;
};

const LineChartUi: React.FC<Props> = memo(({ ariaLabel, data, options }) => {
  return (
    <div className={styles.chartContainer}>
      <Line aria-label={ariaLabel} data={data} options={options} role="img" />
    </div>
  );
});

export default LineChartUi;

LineChartUi.displayName = "LineChartUi";
