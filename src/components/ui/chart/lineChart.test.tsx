import { render, screen } from "@testing-library/react";

import LineChartUi from "./lineChart";

window.ResizeObserver =
  window.ResizeObserver ||
  jest.fn().mockImplementation(() => ({
    disconnect: jest.fn(),
    observe: jest.fn(),
    unobserve: jest.fn(),
  }));

describe("LineChartUi", () => {
  const dummyData = {
    datasets: [
      {
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
        data: [50, 60, 70],
        fill: false,
        label: "Dataset 1",
      },
    ],
    labels: ["January", "February", "March"],
  };

  const dummyOptions = {
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Dummy Chart",
      },
    },
    responsive: true,
  };

  test("正常にレンダリングが行われる", () => {
    render(<LineChartUi ariaLabel="Dummy Chart" data={dummyData} options={dummyOptions} />);
    expect(screen.getByRole("img", { name: /dummy chart/i })).toBeInTheDocument();
  });

  test("aria-labelがPropsとして渡した値となっている", () => {
    render(<LineChartUi ariaLabel="Dummy Chart" data={dummyData} options={dummyOptions} />);
    expect(screen.getByRole("img")).toHaveAttribute("aria-label", "Dummy Chart");
  });
});
